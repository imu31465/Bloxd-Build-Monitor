export const id = 101;
export const ids = [101];
export const modules = {
  34297: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      EverythingMenu: () => rx
    });
    var Op = cp(62),
      op = cp(1049),
      Ip = cp.n(op),
      Sp = cp(1201),
      xp = cp(1060),
      Lp = cp(2104),
      Yp = cp(1480),
      Dp = cp(1133),
      Ap = cp(1112);

    function Pp(pp) {
      let {
        items: ip,
        link: cp,
        onClick: Op,
        selectedItemId: op,
        className: Pp,
        padStartsOnTab: Wp = !0
      } = pp;
      const {
        t: yp
      } = (0, Sp.H)(), Up = (0, Dp.h)(), wp = [];
      for (const Ip of ip) {
        var vp;
        const pp = wp[wp.length - 1];
        var tp;
        if (pp && pp.title === (null !== (vp = Ip.section) && void 0 !== vp ? vp : null)) pp.items.push(Ip);
        else wp.push({
          title: null !== (tp = Ip.section) && void 0 !== tp ? tp : null,
          items: [Ip]
        })
      }
      return (0, Ap.jsxs)("div", {
        className: Ip()("MenuSideBarBody", Pp),
        "data-pad-tabs": "2",
        children: [wp.map(((pp, ip) => {
          var cp;
          return (0, Ap.jsxs)("div", {
            className: "MenuSideBarSection",
            children: [pp.title && (0, Ap.jsx)("div", {
              className: "MenuSideBarSectionTitle",
              children: yp(pp.title)
            }), pp.items.map((pp => {
              var ip;
              const cp = !!pp.iconElement || !!pp.faIcon;
              return (0, Ap.jsxs)("div", {
                "data-pad-tab": !0,
                "data-pad-selected": op === pp.id ? "true" : void 0,
                "data-pad-default-focus": Wp && op === pp.id || void 0,
                className: Ip()("MenuSideBarBodyTab", {
                  ActiveMenuSideBarBodyTab: op === pp.id
                }),
                onClick: () => {
                  Op(pp.id)
                },
                children: [cp && (0, Ap.jsx)("div", {
                  className: "MenuSideBarBodyTabIcon",
                  children: null !== (ip = pp.iconElement) && void 0 !== ip ? ip : (0, Ap.jsx)(xp.d, {
                    name: pp.faIcon
                  })
                }), (!Up || !cp) && (0, Ap.jsx)("div", {
                  children: yp(pp.title)
                }), pp.redDot && (0, Ap.jsx)(Lp.b, {
                  top: "-0.2rem",
                  right: "-1rem"
                })]
              }, pp.id)
            }))]
          }, null !== (cp = pp.title) && void 0 !== cp ? cp : ip)
        })), cp && (0, Ap.jsxs)("div", {
          ...(0, Yp.bb)(),
          "data-pad-destructive": !0,
          className: "MenuSideBarBodyTab MenuSideBarLink",
          onClick: cp.onClick,
          children: [(0, Ap.jsx)("div", {
            className: "MenuSideBarBodyTabIcon",
            children: (0, Ap.jsx)(xp.d, {
              name: cp.faIcon
            })
          }), (0, Ap.jsx)("div", {
            children: yp(cp.title)
          }), (0, Ap.jsx)(xp.d, {
            name: "arrow-right",
            className: "MenuSideBarLinkArrow"
          })]
        })]
      })
    }
    var Wp = cp(3107),
      yp = cp(1141),
      Up = cp(2492),
      wp = cp(3209),
      vp = cp(104),
      tp = cp(1956),
      Hp = cp(2307),
      dp = cp(2310),
      ep = cp(1692),
      jp = cp(1361),
      kp = cp(5113),
      mp = cp(25),
      Rp = cp(34306);

    function qp(pp) {
      let {
        setApplySettingsCallback: ip
      } = pp;
      const {
        clientEscMenuOptions: cp
      } = (0, mp.o)(["clientEscMenuOptions"]), [op, Ip] = (0, Op.useState)(!1), [Sp, xp] = (0, Op.useState)(!1), [Lp, Dp] = (0, Op.useState)(6400), [Pp, Wp] = (0, Op.useState)(3600), [yp, Up] = (0, Op.useState)(!1), [wp, vp] = (0, Op.useState)(!1);

      function tp(pp) {
        const ip = "screenshot" === pp ? xp : Ip;
        ip(!0);
        const cp = yp ? "normals" : wp ? "depth" : null;
        Rp.devTools.downloadScene(pp, {
          width: Lp,
          height: Pp,
          colouring: cp
        }).catch((pp => {
          console.error("Couldn't download the scene", pp)
        })).finally((() => {
          ip(!1)
        }))
      }
      return (0, Ap.jsxs)("div", {
        className: "DeveloperToolsCategory",
        children: [(0, Ap.jsx)(kp.b, {
          label: "Disable Ambient Occlusion",
          checked: cp.disableAmbientOcclusion,
          onClick: pp => {
            mp.c.setClientEscMenuOptions({
              disableAmbientOcclusion: pp
            }), ip((() => kp.l))
          },
          circleInfoText: "Disables ambient occlusion which is the shadow effect that makes corners and crevices darker."
        }), Rp.devTools.supports("ambientLight") && (0, Ap.jsx)(kp.i, {
          name: "Ambient Lighting Intensity",
          min: 0,
          max: 1,
          step: .01,
          initValue: cp.ambientLightIntensity,
          onChange: pp => {
            Rp.devTools.setAmbientLightIntensity(pp).then((() => {
              mp.c.setClientEscMenuOptions({
                ambientLightIntensity: pp
              })
            })).catch((pp => {
              console.error("Couldn't set the ambient light", pp)
            }))
          },
          circleInfoText: "Sets the intensity of the white ambient light in the scene. The default is 0.5."
        }), Rp.devTools.supports("weaponRaycasts") && (0, Ap.jsx)(kp.b, {
          label: "Show Weapon Raycasts",
          checked: cp.showWeaponRaycasts,
          onClick: pp => {
            mp.c.setClientEscMenuOptions({
              showWeaponRaycasts: pp
            })
          },
          circleInfoText: "Draws debug lines for the raw raycasts used by locally fired weapons."
        }), Rp.devTools.supports("sceneDownload") && (0, Ap.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, Ap.jsxs)("div", {
            className: "SettingBox WarningBorder",
            children: [(0, Ap.jsx)(kp.b, {
              label: "Apply normal-based coloring",
              checked: yp,
              onClick: pp => {
                Up(pp), pp && vp(!1)
              },
              circleInfoText: "Colors faces based on their normal direction (red=X, green=Y, blue=Z)."
            }), (0, Ap.jsx)(kp.b, {
              label: "Apply depth-based coloring",
              checked: wp,
              onClick: pp => {
                vp(pp), pp && Up(!1)
              },
              circleInfoText: "Colors from white (near) to black (far) based on distance from camera. Only works for screenshot export."
            }), (0, Ap.jsxs)("div", {
              className: "SettingBox DeveloperToolsCategoryScreenshotSettings",
              children: [(0, Ap.jsx)("div", {
                className: "SettingLabel",
                children: "Screenshot size in pixels (width x height)"
              }), (0, Ap.jsx)(ep.c, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (pp, ip) => {
                  const cp = parseInt(pp) || 6400;
                  Dp(cp)
                },
                placeholderText: "width",
                maxLength: 10,
                defaultValue: Lp.toString()
              }), (0, Ap.jsx)("span", {
                children: "X"
              }), (0, Ap.jsx)(ep.c, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (pp, ip) => {
                  const cp = parseInt(pp) || 3600;
                  Wp(cp)
                },
                placeholderText: "height",
                maxLength: 10,
                defaultValue: Pp.toString()
              })]
            }), (0, Ap.jsxs)("div", {
              className: "DeveloperToolsCategoryExportButtons",
              children: [(0, Ap.jsxs)(Yp.f, {
                onClick: () => {
                  tp("screenshot")
                },
                disabled: Sp,
                children: [Sp && (0, Ap.jsx)(jp.c, {}), "Download Screenshot"]
              }), (0, Ap.jsxs)(Yp.f, {
                onClick: () => {
                  tp("glb")
                },
                disabled: op,
                children: [op && (0, Ap.jsx)(jp.c, {}), "Download GLB"]
              })]
            })]
          }), (0, Ap.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: 'To download GLB of scene with textures you need to "Disable Block Texture Atlas" in graphic settings first (you will need to reload the page to apply the setting).'
          })]
        })]
      })
    }
    var Mp = cp(131),
      Cp = cp(1149),
      Ep = cp(34316),
      Xp = cp(3109),
      lp = cp(1538),
      Qp = cp(1284),
      Jp = cp(1244),
      Bp = cp(3176),
      Np = cp(2072),
      Tp = cp(1520),
      fp = cp(337),
      bp = cp(2314),
      hp = cp(2320),
      ap = cp(3134),
      np = cp(2767),
      Fp = cp(1656),
      gp = cp(3151),
      Gp = cp(3184),
      rp = cp(209);
    var Zp = cp(1819),
      zp = cp(3125);
    async function sp() {
      try {
        return function(pp) {
          const ip = new Map;
          for (const {
              store: cp,
              status: Op,
              autoRenewStatus: op,
              managementUrl: Ip
            }
            of Object.values(pp.subscriptions)) !(0, ap.f)(cp) || (0, ap.j)(Op) || "willNotRenew" === op || ip.has(cp) || ip.set(cp, null !== Ip && void 0 !== Ip ? Ip : ap.n[cp]);
          return Array.from(ip, (pp => {
            let [ip, cp] = pp;
            return {
              store: ip,
              managementUrl: cp
            }
          }))
        }(await (0, Zp.k)((0, zp.getBillingClient)().getCustomerInfo(), 5e3, "CustomerInfo got no answer in 5 s"))
      } catch (pp) {
        return console.error("Billing: loading CustomerInfo for the player's store subscriptions failed:", pp), null
      }
    }

    function Kp(pp) {
      const {
        t: ip,
        selectedLanguage: cp
      } = (0, Sp.H)(), {
        userContext: op
      } = (0, yp.b)(), {
        superRankInfo: Ip
      } = op, xp = (0, hp.usePurchasesAllowed)(), Lp = pp && ((0, fp.pc)(Ip) || op.ranksMayChange) && xp, {
        accountId: Yp,
        data: Dp
      } = (0, np.j)(gp.e, Lp);
      if ((0, Op.useEffect)((() => {
          if (Lp) return gp.e.watchAccount(), Fp.d.addRefetchListener("billing", (pp => {
            "reconnected" === pp ? gp.e.refreshAfterReconnect() : gp.e.refresh()
          }))
        }), [Lp]), !Lp || !(0, fp.pc)(Ip) || null === Dp || Yp !== op.whamm) return null;
      const Ap = function(pp, ip, cp) {
        const Op = Gp.k[(0, Gp.e)(Gp.k, ip)],
          op = void 0 === Op ? void 0 : (0, rp.e)(pp.entitlements, Op.entitlementId);
        return void 0 === op || null === op.expiresAt || (0, ap.e)(op) <= cp ? null : op.willRenew && null === op.billingIssueDetectedAt ? {
          renews: !0,
          at: Math.max(op.expiresAt, cp)
        } : {
          renews: !1,
          at: (0, ap.e)(op)
        }
      }(Dp, Ip.tier, Date.now());
      if (null === Ap) return null;
      const Pp = Ap.renews ? "store:renewsOn" : "store:endsOn",
        Wp = new Date(Ap.at).toLocaleDateString((0, Sp.p)(cp.code, Pp), {
          year: "numeric",
          month: "short",
          day: "numeric"
        }),
        Up = (0, hp.getBillingStore)(),
        wp = null !== Up && (0, ap.f)(Up) ? function(pp, ip) {
          var cp;
          const Op = Object.values(pp.subscriptions).find((pp => pp.store === ip && !(0, ap.j)(pp.status)));
          return void 0 === Op ? null : null !== (cp = Op.managementUrl) && void 0 !== cp ? cp : ap.n[ip]
        }(Dp, Up) : null;
      return {
        text: ip(Pp, {
          date: Wp
        }),
        manageUrl: wp
      }
    }
    var Vp = cp(1387),
      ii = cp(1221),
      ci = cp(5e3),
      Oi = cp(1505),
      oi = cp(3753),
      Ii = cp(2297);

    function Si(pp) {
      let {
        showing: ip
      } = pp;
      const {
        t: cp
      } = (0, Sp.H)(), {
        data: Op,
        failed: op
      } = (0, np.j)(oi.f, ip);
      return 0 === (null === Op || void 0 === Op ? void 0 : Op.length) || null === Op && !op ? null : (0, Ap.jsxs)("div", {
        className: "SettingBox AccountSettingsPaymentHistory",
        children: [(0, Ap.jsx)("div", {
          className: "AccountSettingsLabel",
          children: cp("paymentHistory:title")
        }), null === Op && op && (0, Ap.jsx)("div", {
          className: "AccountSettingsPaymentHistoryError",
          children: cp("paymentHistory:loadFailed")
        }), null !== Op && (0, Ap.jsx)("ul", {
          className: "PaymentHistoryList",
          children: Op.map((pp => (0, Ap.jsxs)("li", {
            className: "PaymentHistoryEntry",
            children: [(0, Ap.jsx)(Ii.c, {
              entry: pp
            }), (0, Ap.jsxs)("div", {
              className: "PaymentHistoryEntryText",
              children: [(0, Ap.jsx)("div", {
                children: (0, Ii.g)(cp, pp)
              }), (0, Ap.jsxs)("div", {
                className: "PaymentHistoryEntryDate",
                children: [new Date(pp.at).toLocaleDateString(), "number" === typeof pp.orderId && ` \xb7 ${cp("paymentHistory:order",{orderId:pp.orderId})}`]
              })]
            })]
          }, (0, oi.e)(pp))))
        })]
      })
    }
    var xi = cp(3136),
      Li = cp(2326),
      Yi = cp(2167);

    function Di() {
      (0, Yi.b)({
        titleKey: "payments:logInToRestore"
      })
    }

    function Ai(pp) {
      let {
        status: ip
      } = pp;
      switch (ip) {
        case "restored":
          return (0, gp.g)(), {
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

    function Pi() {
      const pp = (0, zp.usePageBillingClient)(),
        {
          userContext: ip
        } = (0, yp.b)(),
        [cp, op] = (0, Op.useState)(!1),
        [Ip, Sp] = (0, Op.useState)(null);
      return {
        restoring: cp,
        notice: Ip,
        restore: () => {
          ip.isLoggedIn() ? (op(!0), Sp(null), pp.restorePurchases().then(Ai, (pp => pp instanceof xi.c && "loginRequired" === pp.code ? (Di(), null) : function(pp) {
            return pp instanceof xi.c && "storeBusy" === pp.code ? {
              key: "payments:storeBusy",
              failed: !0
            } : (console.error("Billing: restoring purchases failed:", pp), (0, gp.g)(), {
              key: "payments:restoreFailed",
              failed: !0
            })
          }(pp))).then(Sp).finally((() => {
            op(!1)
          }))) : Di()
        }
      }
    }

    function Wi(pp) {
      let {
        restoring: ip,
        notice: cp,
        restore: op
      } = pp;
      const {
        t: xp
      } = (0, Sp.H)(), Lp = (0, hp.usePurchasesAllowed)(), Dp = (0, hp.getBillingStore)(), Pp = (0, Op.useRef)(null);
      return (0, Op.useEffect)((() => {
        var pp;
        null === (pp = Pp.current) || void 0 === pp || pp.scrollIntoView({
          block: "nearest"
        })
      }), [cp]), Lp && (0, Li.c)(Dp) ? (0, Ap.jsxs)("div", {
        className: "AccountSettingsRestorePurchases",
        children: [(0, Ap.jsx)(Yp.j, {
          className: "AccountSettingsRestorePurchasesButton",
          loading: ip,
          onClick: op,
          children: xp("payments:restorePurchases")
        }), null !== cp && (0, Ap.jsx)("div", {
          ref: Pp,
          className: Ip()("AccountSettingsRestorePurchasesNotice SmallTextBold", {
            AccountSettingsRestorePurchasesFailed: cp.failed
          }),
          children: xp(cp.key)
        })]
      }) : null
    }
    var yi = cp(1921),
      Ui = cp(1255),
      wi = cp(1372),
      vi = cp(1211),
      ti = cp(1334),
      Hi = cp(322),
      di = cp(2560);
    const ei = {
      appStore: {
        name: "App Store",
        ...Hi.ec.appStore
      },
      googlePlay: {
        name: "Google Play",
        ...Hi.ec.googlePlay
      },
      discord: {
        name: "Discord",
        ...Hi.ec.discord
      }
    };

    function ui(pp) {
      let {
        warning: ip,
        subscriptions: cp
      } = pp;
      const {
        t: Op
      } = (0, Sp.H)();
      return null !== cp && 0 === cp.length ? (0, Ap.jsx)(Ap.Fragment, {
        children: Op(ip)
      }) : (0, Ap.jsxs)("div", {
        className: "DeleteAccountSubtitle",
        children: [Op(ip), null === cp && (0, Ap.jsx)("div", {
          className: "DeleteAccountSubtitleNote",
          children: Op("auth:deleteAccountSubscriptionsLoadFailed")
        }), null !== cp && (0, Ap.jsxs)(Ap.Fragment, {
          children: [(0, Ap.jsx)("div", {
            className: "DeleteAccountSubtitleNote",
            children: Op("auth:deleteAccountStoreSubscriptions")
          }), (0, Ap.jsx)(di.b, {
            className: "DeleteAccountSubtitleLinks",
            links: cp.map((pp => {
              let {
                store: ip,
                managementUrl: cp
              } = pp;
              return {
                ...ei[ip],
                url: cp
              }
            }))
          })]
        })]
      })
    }

    function ji(pp) {
      let {
        showing: ip
      } = pp;
      const {
        userContext: cp,
        isUserContextUpdating: op
      } = (0, yp.b)(), {
        t: Ip
      } = (0, Sp.H)(), [xp, Lp] = (0, Op.useState)(!1), [Dp, Pp] = (0, Op.useState)(null), Wp = (0, Op.useRef)(ip);
      (0, Op.useEffect)((() => (Wp.current = ip, () => {
        Wp.current = !1
      })), [ip]);
      const Up = op || xp;
      return (0, Ap.jsxs)("div", {
        className: "AccountSettingsDeleteAccountButtonContainer",
        children: [(0, Ap.jsxs)(Yp.K, {
          onClick: async function() {
            if (!xp) {
              Lp(!0);
              try {
                const pp = await async function() {
                  const [pp, ip] = await Promise.all([(0, yi.c)(cp.availableUserContextTypes) ? sp() : [], mi(cp)]);
                  if (!Wp.current) return Ui.d.ok();
                  const Op = (0, Qp.d)(cp.getPlayerName(), !vp.featureFlags.canSeeRealPlayerNames);
                  if (!0 !== await wi.NotificationProvider.showPromptPopup({
                      title: "auth:deleteAccountPopupTitleNamed",
                      textOpts: {
                        title: {
                          playerName: Op
                        }
                      },
                      subtitle: (0, Ap.jsx)(ui, {
                        warning: ki(cp.isLoggedIn(), ip),
                        subscriptions: pp
                      }),
                      confirmText: "auth:deleteAccount",
                      destructive: !0,
                      typedConfirm: ip ? Ip("auth:deleteAccountTypedConfirm", {
                        playerName: Op
                      }) : void 0,
                      confirmTooltip: "auth:deleteAccountPopupConfirmTooltip",
                      cancelText: "general:cancel",
                      cancelTooltip: "auth:deleteAccountPopupCancelTooltip"
                    }).getResult()) return Ui.d.ok();
                  const op = await (0, Cp.postJsonWithMetricsCookiesAndJsonResponse)(`${vi.clientSideServerUrls.indexUrl}/index/metrics/revoke-cookies`, {
                    gameState: mp.c.get("gameState")
                  }, {
                    retries: 3
                  }, cp.getMetricsCookies());
                  if (op.error) return Ui.d.error(op.error);
                  (0, Mp.isDiscordClient)() && (await ti.i.discordActivity()).exit("User deleted their account");
                  return (0, Cp.forgetStoredGuestAccount)(cp.whamm), (0, Cp.forceGlobalSignOut)(!0), Ui.d.ok()
                }(), ip = pp.isError() ? pp.asError().message : null;
                Pp(ip)
              } catch (pp) {
                console.error("Failed to delete account:", pp), Pp(Ip("auth:genericDeleteAccountError"))
              }
              Lp(!1)
            }
          },
          className: "AccountSettingsDeleteAccountButton",
          disabled: Up,
          children: [Up && (0, Ap.jsx)("div", {
            className: "DeletingAccountLoader",
            children: (0, Ap.jsx)(jp.c, {})
          }), Ip("auth:deleteAccount")]
        }), Dp && (0, Ap.jsx)("div", {
          className: "DeleteAccountError",
          children: Dp
        })]
      })
    }

    function ki(pp, ip) {
      return (0, Mp.isDiscordClient)() ? "auth:discordActivityDeleteAccountLossWarning" : pp ? "auth:deleteAccountLossWarning" : ip ? "auth:deleteGuestAccountLossWarning" : "auth:deleteGuestAccountWarning"
    }
    async function mi(pp) {
      try {
        const {
          accountCreatedAt: ip
        } = await (0, Zp.k)(Tp.b.getPlayerProfile(pp, {
          lowerCaseName: pp.getPlayerName().toLowerCase()
        }), 5e3, "The player's profile got no answer in 5 s");
        return null !== ip && Date.now() - ip >= 7 * fp.i
      } catch (ip) {
        return console.error("Delete Account: loading the account's age failed, so the prompt asks for its name:", ip), !0
      }
    }
    var Ri = cp(3678),
      qi = cp(3689),
      Mi = cp(3685);

    function Ci(pp) {
      let {
        showing: ip
      } = pp;
      const {
        t: cp
      } = (0, Sp.H)(), {
        data: Op,
        failed: op
      } = (0, np.j)(Ri.d, ip), Ip = null === Op ? null : (0, Ri.h)(Op);
      return (0, Ap.jsxs)("div", {
        className: "SettingBox BlockedAndIgnoredPlayers",
        children: [(0, Ap.jsx)("div", {
          className: "AccountSettingsLabel",
          children: cp("settingsMenu:blockedAndIgnoredPlayers")
        }), null === Ip && !op && (0, Ap.jsx)(jp.c, {}), null === Ip && op && (0, Ap.jsxs)("div", {
          className: "BlockedAndIgnoredPlayersError",
          children: [cp("settingsMenu:blockedAndIgnoredPlayersLoadFailed"), (0, Ap.jsx)(Yp.f, {
            className: "SmallTextLight",
            onClick: () => {
              Ri.d.refresh()
            },
            children: cp("general:tryAgain")
          })]
        }), 0 === (null === Ip || void 0 === Ip ? void 0 : Ip.length) && (0, Ap.jsx)("div", {
          className: "BlockedAndIgnoredPlayersEmpty",
          children: cp("settingsMenu:noBlockedOrIgnoredPlayers")
        }), null !== Ip && Ip.length > 0 && (0, Ap.jsx)("ul", {
          className: "BlockedAndIgnoredPlayersList",
          children: Ip.map((pp => {
            let {
              name: ip,
              exclusion: Op
            } = pp;
            const op = Mi.d[Op];
            return (0, Ap.jsxs)("li", {
              className: "BlockedAndIgnoredPlayer",
              children: [(0, Ap.jsx)("div", {
                className: "BlockedAndIgnoredPlayerName",
                children: ip
              }), (0, Ap.jsx)(Yp.j, {
                className: "SmallTextLight",
                onClick: () => {
                  (0, qi.f)(op, ip, {
                    chatMessage: null
                  })
                },
                children: cp(Mi.h[op].text)
              })]
            }, ip)
          }))
        })]
      })
    }
    const Ei = (0, Op.memo)((function(pp) {
      var ip, cp;
      let {
        showing: op,
        inGame: Lp
      } = pp;
      const {
        t: Dp,
        selectedLanguage: Pp
      } = (0, Sp.H)(), {
        hideSocialLocationFrom: Up
      } = (0, mp.o)(["hideSocialLocationFrom"]), wp = (0, hp.usePurchasesAllowed)(), tp = Pi(), Hp = (0, Wp.c)(), {
        userContext: dp,
        isUserContextUpdating: Rp
      } = (0, yp.b)(), [qp, ap] = (0, Op.useState)(null !== (ip = dp.getPlayerName()) && void 0 !== ip ? ip : ""), [np, Fp] = (0, Op.useState)(null), {
        purchasing: gp,
        outcome: Gp,
        purchase: rp
      } = (0, Xp.d)("/super-rank-welcome"), Zp = (0, fp.ac)((0, Sp.p)(Pp.code, "general:timeLeft"), dp.superRankInfo), zp = null === (cp = Kp(op)) || void 0 === cp ? void 0 : cp.text, sp = Zp ? Dp("general:timeLeft", {
        time: Zp
      }) : zp, [oi, Ii] = (0, Op.useState)(!1), [xi, Li] = (0, Op.useState)(!1), Yi = (0, Op.useRef)(null), Di = (0, Op.useRef)(null), Ai = (0, Np.e)({
        showProgressUpdateMessage: !0,
        enabled: !0
      }), yi = null === Ai, Ui = null !== Ai && void 0 !== Ai ? Ai : [], wi = dp !== Cp.NULL_USER_CONTEXT && !dp.isLoggedIn(), vi = wi && 0 !== (null === Ai || void 0 === Ai ? void 0 : Ai.length), [ti, Hi] = (0, Op.useState)([]), [di, ei] = (0, Op.useState)(!1), ui = dp.playerHasRank("youtuber"), ki = (0, Op.useCallback)((() => Tp.b.getPlayerProfile(dp, {
        lowerCaseName: dp.getPlayerName().toLowerCase()
      }).then((pp => {
        Hi(pp.socialLinks)
      })).catch((pp => {
        console.error("Failed to refresh social links", pp)
      }))), [dp]);

      function mi(pp) {
        pp !== qp && ((0, Qp.o)(pp) ? (pp = (0, Qp.p)(pp), Fp(Dp("homePage:nameCharacters"))) : Fp(null), Yi.current && (Yi.current.value = pp), ap(pp))
      }
      return (0, Op.useEffect)((() => (!0 === op ? (clearInterval(Di.current), Di.current = setInterval(Hp, 1e3)) : clearInterval(Di.current), () => {
        clearInterval(Di.current)
      })), [op, Hp]), (0, Op.useEffect)((() => {
        var pp;
        ap(null !== (pp = dp.getPlayerName()) && void 0 !== pp ? pp : "")
      }), [dp]), (0, Op.useEffect)((() => {
        if (!op || !ui || Rp) return;
        let pp = !1;
        return ei(!0), Hi([]), Tp.b.getPlayerProfile(dp, {
          lowerCaseName: dp.getPlayerName().toLowerCase()
        }).then((ip => {
          pp || Hi(ip.socialLinks)
        })).catch((pp => {
          console.error("Failed to load social links", pp)
        })).finally((() => {
          pp || ei(!1)
        })), () => {
          pp = !0
        }
      }), [op, ui, Rp, dp]), (0, Ap.jsxs)("div", {
        className: Ip()("SettingsMenuRightInner AccountSettings", {
          AccountSettingsLocked: Lp
        }),
        children: [Lp && (0, Ap.jsx)("div", {
          className: "AccountSettingsInGameWarning",
          children: Dp("settingsMenu:accountSettingsInGameWarning")
        }), (0, Ap.jsxs)("div", {
          className: "SettingBox SetAccountNameDiv SmallTextLight",
          children: [(0, Ap.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsNameLabel",
            children: [Dp("homePage:discordNamePopupTitle"), (0, Ap.jsxs)(lp.LinkPreserveSearch, {
              className: "AccountSettingsViewProfile",
              to: (0, Jp.g)({
                name: dp.getPlayerName()
              }),
              onClick: () => {
                mp.c.set({
                  openEverythingMenuName: null
                })
              },
              children: [(0, Ap.jsx)(xp.d, {
                name: "arrow-up-right-from-square"
              }), " ", Dp("profileCard:viewProfile")]
            })]
          }), (0, Ap.jsxs)("div", {
            className: "EnterAccNameDivWrapper",
            "data-pad-initial-area": !0,
            children: [(0, Ap.jsxs)("div", {
              className: "EnterAccNameInputRow",
              children: [vp.featureFlags.canChangeName && (0, Ap.jsx)(ep.c, {
                className: "EnterName",
                placeholderText: Dp("homePage:enterName"),
                maxLength: Qp.i,
                defaultValue: qp,
                onValueChange: pp => {
                  mi(pp)
                },
                forcedText: oi || !vp.featureFlags.canChangeName ? qp : null,
                blurOnEnter: !0,
                domRef: Yi
              }), (0, Ap.jsx)(Yp.f, {
                className: "ChooseRandomNameButton",
                onClick: () => {
                  mi((0, Qp.e)())
                },
                children: (0, Ap.jsx)(xp.d, {
                  name: "dice",
                  className: "ChooseRandomNameIcon"
                })
              }), !vp.featureFlags.canChangeName && (0, Ap.jsx)("div", {
                className: "EnterName NoInput",
                children: (0, Qp.d)(qp, !vp.featureFlags.canSeeRealPlayerNames)
              })]
            }), (0, Ap.jsx)(Yp.f, {
              className: "ChooseNameButton",
              disabled: oi || qp === dp.getPlayerName(),
              onClick: () => {
                qp.length < Qp.m ? Fp(Dp("homePage:changeNameMinLengthError", {
                  length: Qp.m
                })) : qp.length > Qp.i ? Fp(Dp("homePage:changeNameMaxLengthError", {
                  length: Qp.i
                })) : (Ii(!0), Fp(null), (0, Ep.l)(dp, qp).then((pp => {
                  Ii(!1), "taken" === pp.outcome ? Fp(Dp("homePage:nameTaken")) : "refused" === pp.outcome ? Fp(pp.message) : "failed" === pp.outcome && Fp(Dp((0, Ep.h)(pp.failure)))
                })))
              },
              children: Dp("general:choose")
            })]
          }), np && (0, Ap.jsx)("div", {
            className: "ChooseAccNameError",
            children: np
          })]
        }), (0, Ap.jsx)(kp.b, {
          label: (() => {
            if ((0, ii.l)(Up)) {
              const pp = (0, Sp.p)(Pp.code, "general:timeLeft"),
                ip = (0, fp.cb)(pp, Date.now(), Up + ii.k);
              return `${Dp("settingsMenu:hideSocialLocation")} (${Dp("general:timeLeft",{time:ip})})`
            }
            return Dp("settingsMenu:hideSocialLocation")
          })(),
          onClick: () => {
            const pp = !(0, ii.l)(Up);
            (0, Oi.reportAnalyticsClick)({
              id: "social.hide_location",
              value: pp ? "on" : "off"
            }), Li(!0), Tp.b.setHideSocialLocation(dp, pp).then((() => {
              mp.c.set({
                hideSocialLocationFrom: pp ? Date.now() : null
              })
            })).finally((() => {
              Li(!1)
            }))
          },
          checked: (0, ii.l)(Up),
          disabled: xi
        }), ui && (0, Ap.jsxs)("div", {
          className: "SettingBox AccountSettingsSocialLinks",
          children: [(0, Ap.jsx)("div", {
            className: "AccountSettingsLabel",
            children: Dp("settingsMenu:socialLinks")
          }), di && (0, Ap.jsx)(jp.c, {}), !di && (0, Ap.jsx)(ci.d, {
            socialLinks: ti,
            editable: !0,
            userContext: dp,
            onLinksUpdated: ki
          })]
        }), (0, Ap.jsxs)("div", {
          className: "SettingBox",
          children: [(0, Ap.jsx)("div", {
            className: "AccountSettingsLabel",
            children: Dp(vi ? "auth:loginOrSwitchAccount" : "auth:login")
          }), yi && (0, Ap.jsx)(jp.c, {}), !yi && 0 === Ui.length && (0, Ap.jsx)("div", {
            className: "NoLoginOptions",
            children: Dp("auth:noLoginOptions")
          }), !yi && Ui.length > 0 && "crazygames" !== Mp.siteUsed && (0, Ap.jsx)("div", {
            className: "AccountSettingsLoginButtons",
            children: Ui
          }), !yi && Ui.length > 0 && "crazygames" === Mp.siteUsed && (0, Ap.jsxs)("div", {
            className: "AccountSettingsLoginButtons",
            children: [Ui[0], Ui.length > 1 && (0, Ap.jsxs)(Ap.Fragment, {
              children: [(0, Ap.jsxs)("div", {
                className: "LegacyLoginOptionsHeader",
                children: [(0, Ap.jsx)("span", {
                  className: "LegacyLoginOptionsTitle",
                  children: Dp("auth:legacyLoginOptions")
                }), (0, Ap.jsx)(Vp.d, {
                  className: "LegacyLoginOptionsInfoIcon",
                  hoverInfo: Dp("auth:legacyLoginOptionsInfo")
                })]
              }), (0, Ap.jsx)("div", {
                className: "LegacyAccountSettingsLoginButtons",
                children: Ui.slice(1)
              })]
            })]
          }), vp.featureFlags.useLogin && (null !== dp.loggedInInfo || dp.isLoggedIn()) && (0, Ap.jsxs)(Ap.Fragment, {
            children: [(0, Ap.jsx)("div", {
              className: "AccountSettingsLoginDivider"
            }), (0, Ap.jsxs)(Yp.K, {
              onClick: () => {
                (0, Cp.forceGlobalSignOut)()
              },
              className: "AccountSettingsSignedInButton",
              children: [(0, Ap.jsx)(xp.d, {
                name: "right-from-bracket"
              }), Dp("auth:signOut")]
            })]
          })]
        }), !dp.playerHasRank("super") && wp && (0, Ap.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, Ap.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: [(0, Ap.jsx)(xp.d, {
              name: "bolt"
            }), Dp("homePage:superRank")]
          }), (0, Ap.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [(0, Ap.jsxs)(Yp.o, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, bp.r)({
                  mode: "self",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, Ap.jsx)(xp.d, {
                name: "bolt"
              }), Dp("homePage:getSuperRank")]
            }), (0, Ap.jsxs)(Yp.o, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, bp.r)({
                  mode: "gift",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, Ap.jsx)(xp.d, {
                name: "bolt"
              }), Dp("homePage:giftSuperRank")]
            })]
          }), (0, Ap.jsx)(Wi, {
            ...tp
          })]
        }), dp.playerHasRank("super") && (0, Ap.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, Ap.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: [(0, Ap.jsx)(xp.d, {
              name: "bolt"
            }), Dp("homePage:superRank"), sp && (0, Ap.jsxs)("div", {
              className: "AccountSettingsSuperRankTimeLeft",
              children: ["(", sp, ")"]
            })]
          }), wp && (0, Ap.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [!(0, fp.pc)(dp.superRankInfo) && (0, Ap.jsxs)(Yp.o, {
              className: "AccountSettingsSuperRankProlong",
              loading: gp,
              onClick: () => {
                rp(Bp.h.id, null)
              },
              children: [(0, Ap.jsx)(xp.d, {
                name: "bolt"
              }), Dp("settingsMenu:getSuperRankAdditionalDaysPremiumCurrency", {
                days: Bp.h.product.days,
                price: Bp.h.price
              })]
            }), (0, Ap.jsxs)(Yp.o, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, bp.r)({
                  mode: "gift",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, Ap.jsx)(xp.d, {
                name: "bolt"
              }), Dp("homePage:giftSuperRank")]
            })]
          }), Gp && (0, Ap.jsx)("div", {
            className: "AccountSettingsSuperRankProlongError SmallTextBold",
            children: Dp(Gp.translationKey)
          }), (0, Ap.jsx)(Wi, {
            ...tp
          })]
        }), (0, Ap.jsx)(Si, {
          showing: op
        }), vp.featureFlags.useSocialFeatures && (0, Ap.jsx)(Ci, {
          showing: op
        }), (0, Ap.jsxs)("div", {
          className: "SettingBoxGroup AccountSettingsDeleteAccountGroup",
          children: [(0, Ap.jsxs)("div", {
            className: "SettingBox AccountSettingsDeleteAccount SettingBoxWarning",
            children: [(0, Ap.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: Dp(Xi(wi, vi))
            }), (0, Mp.isDiscordClient)() && (0, Ap.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: Dp("auth:discordActivityKickWarning")
            }), (0, Ap.jsx)(ji, {
              showing: op
            })]
          }), (0, Ap.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: Dp(wi ? "auth:deleteGuestAccountWarning" : "auth:deleteAccountLossWarning")
          })]
        })]
      })
    }));

    function Xi(pp, ip) {
      return pp ? ip ? "auth:deleteGuestAccountButtonTitle" : "auth:deleteGuestAccountWarning" : "auth:deleteAccountButtonTitle"
    }
    var li = cp(34325),
      Qi = cp(3224),
      Ji = cp(1260),
      Bi = cp(1466),
      Ni = cp(2004),
      Ti = cp(9006),
      fi = cp(34332);

    function bi() {
      const {
        t: pp
      } = (0, Sp.H)();
      return (0, Ni.g)("localPlayerAlive") ? (0, Ap.jsx)(Ti.b, {
        icon: "camera-alt",
        title: pp("screenshotMode:title"),
        sub: pp("screenshotMode:entrySub"),
        onClick: fi.b
      }) : null
    }
    var ai = cp(34341);
    const ni = (0, Op.memo)((function(pp) {
        let {
          inGame: ip
        } = pp;
        const {
          t: cp,
          selectedLanguage: Op
        } = (0, Sp.H)(), {
          clientEscMenuOptions: op,
          showDebugOverlay: Ip,
          isTouchScreen: xp
        } = (0, mp.o)(["clientEscMenuOptions", "showDebugOverlay", "isTouchScreen"]), Lp = (0, Up.i)("hideCoordinates");
        let Yp = "settingsMenu:showCoordinates",
          Dp = "settingsMenu:showChunkCoordinates";

        function Pp(pp) {
          const ip = new Intl.DisplayNames([pp], {
            type: "language"
          }).of(pp);
          return ip.charAt(0).toUpperCase() + ip.slice(1)
        }
        return Lp && (Yp = "settingsMenu:showCoordinatesHidden", Dp = "settingsMenu:showChunkCoordinatesHidden"), (0, Ap.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [ip && vp.featureFlags.canUseInviteLinks && (0, Ap.jsxs)("div", {
            className: "SettingBox",
            children: [(0, Ap.jsx)("div", {
              className: "SettingsMenuInviteHeader",
              children: cp("settingsMenu:inviteLink")
            }), (0, Ap.jsx)(li.g, {})]
          }), (0, Ap.jsxs)("div", {
            className: "SettingBox",
            children: [(0, Ap.jsx)("div", {
              className: "SliderText",
              style: {
                marginBottom: "10px"
              },
              children: cp("settingsMenu:language")
            }), (0, Ap.jsx)(Qi.d, {
              options: Object.entries(Sp.i).map((pp => {
                let [ip, cp] = pp;
                return {
                  label: (0, Ap.jsxs)("div", {
                    className: "SettingsMenuLanguageOption",
                    children: [(0, Ap.jsx)("img", {
                      src: cp.flagImg,
                      alt: "flag"
                    }), (0, Ap.jsxs)("span", {
                      children: [Pp(ip), " ", (0, Ap.jsxs)("span", {
                        className: "SettingsMenuLanguageOptionCode",
                        children: ["(", ip, ")"]
                      })]
                    })]
                  }),
                  value: ip
                }
              })),
              value: Op.code,
              onChange: pp => {
                Ji.g.get().setCurrentLanguage(pp.value)
              }
            })]
          }), ip && xp && (0, ai.e)() && (0, Ap.jsx)(bi, {}), !(0, vp.isMobileApp)() && (0, Bi.j)() && vp.featureFlags.useForceRotateForceFullscreenOverlay && (0, Ap.jsx)(kp.b, {
            label: cp("settingsMenu:disableFullscreenMode"),
            checked: op.disableFullscreen,
            onClick: pp => {
              mp.c.setClientEscMenuOptions({
                disableFullscreen: pp
              })
            }
          }), (0, Ap.jsx)(kp.b, {
            label: cp(Yp),
            checked: op.showCoordinates,
            onClick: pp => {
              mp.c.setClientEscMenuOptions({
                showCoordinates: pp
              })
            },
            disabled: Lp
          }), (0, Ap.jsx)(kp.b, {
            label: cp(Dp),
            checked: op.showChunkCoordinates,
            onClick: pp => {
              mp.c.setClientEscMenuOptions({
                showChunkCoordinates: pp
              })
            },
            disabled: Lp
          }), (0, Ap.jsx)(kp.b, {
            label: cp("settingsMenu:showFps"),
            checked: op.showFPS,
            onClick: pp => {
              mp.c.setClientEscMenuOptions({
                showFPS: pp
              })
            }
          }), (0, Ap.jsx)(kp.b, {
            label: cp("settingsMenu:disableBunnyHopping"),
            checked: op.disableBunnyHopping,
            onClick: pp => {
              mp.c.setClientEscMenuOptions({
                disableBunnyHopping: pp
              })
            }
          }), (0, ti.v)() && (0, Ap.jsx)(kp.b, {
            label: cp("settingsMenu:showChat"),
            checked: op.showChat,
            onClick: pp => {
              mp.c.setClientEscMenuOptions({
                showChat: pp
              })
            }
          }), (0, Ap.jsx)(kp.b, {
            label: cp("settingsMenu:showDebugOverlay"),
            checked: Ip,
            onClick: pp => {
              mp.c.set({
                showDebugOverlay: pp
              })
            }
          }), vp.featureFlags.useSocialFeatures && (0, Ap.jsx)(kp.b, {
            label: cp("settingsMenu:showFriendOnlineToasts"),
            checked: op.showFriendOnlineToasts,
            onClick: pp => {
              mp.c.setClientEscMenuOptions({
                showFriendOnlineToasts: pp
              })
            }
          }), (0, Ap.jsx)(kp.b, {
            label: cp("settingsMenu:showNewItemIndicator"),
            checked: op.showNewItemIndicator,
            onClick: pp => {
              mp.c.setClientEscMenuOptions({
                showNewItemIndicator: pp
              })
            }
          })]
        })
      })),
      Fi = (0, Op.memo)((function() {
        const {
          t: pp
        } = (0, Sp.H)(), {
          soundVolume: ip,
          musicVolume: cp
        } = (0, mp.o)(["soundVolume", "musicVolume"]);
        return (0, Ap.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [(0, Ap.jsx)(kp.i, {
            name: pp("settingsMenu:musicVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: cp,
            onChange: pp => {
              mp.c.set({
                musicVolume: Math.round(100 * pp) / 100
              })
            },
            format: pp => pp.toFixed(2)
          }), (0, Ap.jsx)(kp.i, {
            name: pp("settingsMenu:soundEffectsVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: ip,
            onChange: pp => {
              mp.c.set({
                soundVolume: Math.round(100 * pp) / 100
              })
            },
            format: pp => pp.toFixed(2)
          })]
        })
      }));
    var gi = cp(708),
      Gi = cp(1476),
      ri = cp(3767),
      Zi = cp(34346),
      zi = cp(3587);
    const si = {
      app: "notificationSettings:pushTargetsApp",
      browser: "notificationSettings:pushTargetsBrowser",
      msnPlay: "notificationSettings:pushTargetsMsnPlay"
    };

    function Ki() {
      const {
        t: pp
      } = (0, Sp.H)(), ip = (0, zi.b)(), {
        mobilePushNotificationsCanAsk: cp
      } = (0, mp.o)(["mobilePushNotificationsCanAsk"]), [op, Ip] = (0, Op.useState)(null), [xp, Lp] = (0, Op.useState)(!1), [Dp, Pp] = (0, Op.useState)(null), [Wp, yp] = (0, Op.useState)(!1), Up = (0, Op.useCallback)((() => {
        (0, ri.b)().then((pp => {
          ip.current && (Ip(pp), Lp(!1))
        })).catch((pp => {
          console.error("Failed to load push notification targets:", pp), ip.current && Lp(!0)
        }))
      }), [ip]), wp = (0, Op.useCallback)((() => {
        (0, Zi.e)().then((pp => {
          ip.current && Pp((() => pp))
        }))
      }), [ip]);
      (0, Op.useEffect)((() => {
        Up()
      }), [Up]), (0, Op.useEffect)((() => {
        wp()
      }), [wp, cp]), (0, Gi.f)(ri.j, Up);
      const vp = null === op ? [] : Object.keys(si).filter((pp => op[pp] > 0));
      return (0, Ap.jsxs)("div", {
        className: "SettingBox PushNotificationSettings",
        children: [(0, Ap.jsx)("div", {
          className: "SliderText",
          children: pp("notificationSettings:pushNotifications")
        }), null === op && xp && (0, Ap.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: pp("notificationSettings:pushTargetsLoadFailed")
        }), null !== op && 0 === vp.length && (0, Ap.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: pp("notificationSettings:pushTargetsNone")
        }), vp.length > 0 && (0, Ap.jsx)("ul", {
          className: "PushNotificationSettingsTargets",
          children: vp.map((ip => {
            var cp;
            return (0, Ap.jsx)("li", {
              children: pp(si[ip], {
                count: null !== (cp = null === op || void 0 === op ? void 0 : op[ip]) && void 0 !== cp ? cp : 0
              })
            }, ip)
          }))
        }), null !== Dp && (0, Ap.jsx)(Yp.f, {
          className: "PushNotificationSettingsButton",
          loading: Wp,
          onClick: () => {
            yp(!0), Dp().catch((pp => {
              console.error("Failed to turn on push notifications:", pp)
            })).finally((() => {
              ip.current && (yp(!1), wp())
            }))
          },
          children: pp("notificationSettings:pushTurnOn")
        })]
      })
    }
    var Vi = cp(2621);
    const pc = {
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
      ic = {
        remindersOn: {
          label: "dailyDrop:settingReminders",
          reportAs: "reminders"
        },
        hidden: {
          label: "dailyDrop:settingHide",
          reportAs: "hidden"
        }
      };

    function cc(pp) {
      let {
        setting: ip,
        value: cp
      } = pp;
      const {
        t: op
      } = (0, Sp.H)(), xp = (0, zi.b)(), [Lp, Yp] = (0, Op.useState)(null), [Dp, Pp] = (0, Op.useState)(!1), [Wp, yp] = (0, Op.useState)(null);
      return (0, Op.useEffect)((() => {
        "remindersOn" === ip && (0, Zi.e)().then((pp => {
          xp.current && yp((() => pp))
        }), (pp => {
          console.error("Couldn't tell whether this device can take push notifications:", pp)
        }))
      }), [ip, xp]), (0, Ap.jsx)(kp.b, {
        className: Ip()({
          DailyDropSettingFailed: Dp
        }),
        label: op(ic[ip].label),
        checked: null !== Lp && void 0 !== Lp ? Lp : cp,
        note: Dp ? op("dailyDrop:settingFailed") : void 0,
        onClick: pp => {
          null === Lp && (Yp(pp), Pp(!1), pp && null !== Wp && Wp().catch((pp => {
            console.error("Failed to ask for push notifications for Lucky Skin Block reminders:", pp)
          })), (0, Vi.B)("daily_drop.setting", `${ic[ip].reportAs}_${pp?"on":"off"}`), (0, Vi.C)("hidden" === ip ? {
            hidden: pp
          } : {
            remindersOn: pp
          }).catch((pp => {
            console.error(`Failed to save the Lucky Skin Block's ${ip} setting:`, pp), xp.current && Pp(!0)
          })).finally((() => {
            xp.current && Yp(null)
          })))
        }
      })
    }
    const Oc = (0, Op.memo)((function() {
      const {
        t: pp
      } = (0, Sp.H)(), {
        clientEscMenuOptions: ip
      } = (0, mp.o)(["clientEscMenuOptions"]), {
        userContext: cp
      } = (0, yp.b)(), Op = cp.dailyDrop;
      return (0, Ap.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [vp.featureFlags.useSocialFeatures && (0, Ap.jsx)(kp.f, {
          label: pp("notificationSettings:friendRequests"),
          options: gi.d.map((ip => ({
            value: ip,
            label: pp(pc[ip].label)
          }))),
          value: ip.friendRequestNotifications,
          onChange: pp => {
            mp.c.setClientEscMenuOptions({
              friendRequestNotifications: pp
            })
          },
          circleInfoText: (0, Ap.jsx)("div", {
            className: "NotificationSettingLevelsInfo",
            children: gi.d.map((ip => (0, Ap.jsxs)("div", {
              children: [(0, Ap.jsx)("b", {
                children: pp(pc[ip].label)
              }), ": ", pp(pc[ip].info)]
            }, ip)))
          })
        }), null !== Op && (0, Ap.jsxs)(Ap.Fragment, {
          children: [(0, Ap.jsx)(cc, {
            setting: "remindersOn",
            value: Op.remindersOn
          }), (0, Ap.jsx)(cc, {
            setting: "hidden",
            value: Op.hidden
          })]
        }), (0, Ap.jsx)(Ki, {})]
      })
    }));
    var oc = cp(4591),
      Ic = cp(195),
      Sc = cp(314),
      xc = cp(6804),
      Lc = cp(3564),
      Yc = cp(34354),
      Dc = cp(640),
      Ac = cp(34);
    var Pc = cp(657),
      Wc = cp(44),
      yc = cp(4466);
    const Uc = new Map([
      ["chunkHorizAddDist", "horizontal"],
      ["chunkVertAddDist", "vertical"]
    ]);

    function wc(pp) {
      return Uc.has(pp) ? tp.gameBridge.lookup("Xu", null) : null
    }

    function vc(pp) {
      if (!(0, Dc.G)(mp.c.get("clientEscMenuOptions")[pp])) return mp.c.get("clientEscMenuOptions")[pp];
      const ip = wc(pp);
      return null !== ip ? ip[Uc.get(pp)] : Wc.h.getItem(pp)
    }

    function tc(pp, ip) {
      if ("useTouchControls" === pp) return void(0, yc.e)(ip);
      pp in mp.c.get("clientEscMenuOptions") && mp.c.setClientEscMenuOptions({
        [pp]: ip
      });
      const cp = wc(pp);
      null !== cp && tp.gameBridge.send("setChunkAddDistance", {
        ...cp,
        [Uc.get(pp)]: ip
      }), Wc.h.setItem(pp, ip)
    }
    var Hc = cp(4515),
      dc = cp(34361),
      ec = cp(34364),
      uc = cp(4589),
      jc = cp(34379);

    function kc(pp) {
      var ip, op, xp, Lp;
      let {
        minChunkAddDist: Yp,
        getValue: Dp,
        onChange: Pp,
        setApplySettingsCallback: Wp
      } = pp;
      const {
        t: yp
      } = (0, Sp.H)(), {
        clientEscMenuOptions: wp
      } = (0, mp.o)(["clientEscMenuOptions", "showDistantNametags"]), tp = (0, Op.useRef)(Dp("showFog")), Hp = (0, Op.useRef)(wp.antiAliasing), dp = (0, Op.useRef)(wp.useWebGpu), [ep, jp] = (0, Op.useState)(null), [qp, Mp] = (0, Op.useState)(!1), [Cp, Ep] = (0, Op.useState)((() => (0, Lc.e)(vp.featureFlags.settings.canUseShaderPacks))), [Xp] = (0, Op.useState)((() => mp.c.isWebGpuDefaultOff())), [lp] = (0, Op.useState)(Sc.f), [Qp] = (0, Op.useState)((() => !0 === Wc.h.getItem(Hi.tc))), [Jp] = (0, Op.useState)((() => mp.c.isWebGpuOnStored()));
      (0, Op.useEffect)((() => {
        let pp = !1;
        return (0, vp.hasUsableWebGpuAdapter)().then((async ip => {
          const cp = Qp || Jp,
            Op = !ip && Pc.z && await (0, jc.e)(cp);
          pp || (jp(ip || Op), Mp(Op))
        })), (0, Lc.i)(vp.featureFlags.settings.canUseShaderPacks) && (0, xc.f)().then((async ip => {
          const Op = null !== ip && await async function(pp) {
            const [{
              isShaderPackActive: ip
            }, {
              loadPageShaderPackCompiler: Op
            }] = await Promise.all([cp.e(139).then((() => cp(6798))), Promise.all([cp.e(78), cp.e(136), cp.e(138)]).then((() => cp(6758)))]);
            return ip(pp, await Op())
          }(ip);
          pp || Ep(Op)
        })), () => {
          pp = !0
        }
      }), [Qp, Jp]);
      const Bp = (!(Cp && !Qp) || !qp) && ep,
        Np = function(pp, ip, cp, Op, op) {
          return (0, Yc.c)(cp, Op) && !0 === ip ? {
            translationKey: "settingsMenu:newWebGpuForcedOnByShaderPack",
            checked: !0,
            disabled: !0
          } : {
            translationKey: !1 !== ip ? "settingsMenu:newWebGpu" : op ? "settingsMenu:newWebGpuDisabledUntilRestart" : "settingsMenu:newWebGpuUnsupported",
            checked: pp && !1 !== ip,
            disabled: !0 !== ip
          }
        }(wp.useWebGpu, Bp, Cp, Xp, lp),
        Tp = (wp.useWebGpu || (0, Yc.c)(Cp, Xp)) && Cp && !0 === Bp,
        fp = (0, Up.i)("lightingOverride"),
        bp = !(0, Dc.G)(fp);
      let hp = "settingsMenu:enableLighting";
      bp && (hp = fp ? "settingsMenu:enableLightingForcedOn" : "settingsMenu:enableLightingForcedOff");
      const ap = pp => {
          var ip, cp, Op;
          const op = null !== (ip = pp.showFog) && void 0 !== ip ? ip : Dp("showFog"),
            Ip = null !== (cp = pp.antiAliasing) && void 0 !== cp ? cp : wp.antiAliasing,
            Sp = null !== (Op = pp.useWebGpu) && void 0 !== Op ? Op : wp.useWebGpu,
            xp = !Pc.z && op !== tp.current || Ip !== Hp.current || Sp !== dp.current;
          Wp(xp ? () => kp.l : null)
        },
        np = (0, Up.i)("fogChunkDistanceOverride"),
        Fp = (0, Up.i)("fogBlockDistanceOverride"),
        gp = !(0, Dc.G)(np) || !(0, Dc.G)(Fp),
        Gp = gp ? "settingsMenu:showFogForcedOn" : "settingsMenu:showFog",
        [rp, Zp] = (0, oc.c)(Yp),
        [zp, sp] = (0, uc.k)(Yp),
        Kp = yp("settingsMenu:chunkLoadDistanceDeviceLimit"),
        Vp = zp < rp,
        ii = Math.min(null !== (ip = Dp("chunkHorizAddDist")) && void 0 !== ip ? ip : Yp[0], zp),
        ci = !gp && function(pp, ip) {
          return !0 === pp.showFog && pp.fogChunkDistance > ip
        }(wp, ii);
      return (0, Ap.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [(0, Ap.jsx)(kp.i, {
          name: yp("settingsMenu:horizontalChunkLoadDistance"),
          min: Yp[0],
          max: rp,
          selectableMax: zp,
          cappedNote: Kp,
          step: 1,
          initValue: ii,
          onChange: pp => {
            !0 === Dp("showFog") && pp < Dp("fogChunkDistance") && Pp("fogChunkDistance", pp), Pp("chunkHorizAddDist", pp), Ac.m.GA("updatedChunkLoadDist")
          },
          circleInfoText: yp("settingsMenu:chunkLoadDistanceInfo")
        }), (0, Ap.jsx)(kp.i, {
          name: yp("settingsMenu:verticalChunkLoadDistance"),
          min: Yp[1],
          max: Zp,
          selectableMax: sp,
          cappedNote: Vp ? void 0 : Kp,
          step: 1,
          initValue: Math.min(null !== (op = Dp("chunkVertAddDist")) && void 0 !== op ? op : Yp[1], sp),
          onChange: pp => {
            Pp("chunkVertAddDist", pp), Ac.m.GA("updatedChunkLoadDist")
          },
          circleInfoText: yp("settingsMenu:chunkLoadDistanceInfo"),
          className: "VerticalChunkLoadSlider"
        }), (0, Ap.jsx)(kp.b, {
          label: yp("settingsMenu:chunkFadeIn"),
          checked: wp.chunkFadeIn,
          onClick: pp => {
            mp.c.setClientEscMenuOptions({
              chunkFadeIn: pp
            })
          },
          circleInfoText: yp("settingsMenu:chunkFadeInInfo")
        }), Rp.devTools.supports("chunkBorders") && (0, Ap.jsx)(kp.b, {
          label: yp("settingsMenu:showChunkBorders"),
          checked: wp.showChunkBorders,
          onClick: pp => {
            mp.c.setClientEscMenuOptions({
              showChunkBorders: pp
            })
          },
          circleInfoText: yp("settingsMenu:showChunkBordersInfo")
        }), (0, Ap.jsx)(kp.b, {
          label: yp(hp),
          checked: wp.enableLighting,
          onClick: pp => {
            mp.c.setClientEscMenuOptions({
              enableLighting: pp
            })
          },
          disabled: bp
        }), (0, Ap.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, Ap.jsx)(kp.b, {
            label: yp(Gp),
            checked: wp.showFog,
            onClick: pp => {
              ap({
                showFog: pp
              }), mp.c.setClientEscMenuOptions({
                showFog: pp
              })
            },
            disabled: gp,
            className: Ip()({
              SettingBoxWarning: ci
            })
          }), (0, Ap.jsx)(kp.i, {
            name: yp("settingsMenu:fogChunkDistance"),
            min: Yp[0],
            max: Ic.g.maxChunkHorizAddDistance,
            step: 1,
            initValue: null !== (xp = wp.fogChunkDistance) && void 0 !== xp ? xp : Yp[0],
            onChange: pp => {
              mp.c.setClientEscMenuOptions({
                fogChunkDistance: pp
              }), Ac.m.GA("fogChunkDistanceChanged", pp)
            },
            circleInfoText: yp("settingsMenu:fogChunkDistanceInfo"),
            disabled: gp || !1 === Dp("showFog"),
            className: Ip()({
              SettingBoxWarning: ci
            })
          }), ci && (0, Ap.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: yp("settingsMenu:fogChunkDistanceInfo")
          })]
        }), !Pc.z && (0, Ap.jsx)(kp.b, {
          label: yp(Tp ? "settingsMenu:disableBlockTextureAtlasUnavailableWithShaderPack" : "settingsMenu:disableBlockTextureAtlas"),
          checked: !Tp && wp.disableTexAtlas,
          onClick: pp => {
            mp.c.setClientEscMenuOptions({
              disableTexAtlas: pp
            })
          },
          circleInfoText: yp("settingsMenu:disableBlockTextureAtlasInfo"),
          disabled: Tp
        }), (0, Ap.jsx)(kp.i, {
          name: yp("settingsMenu:fieldOfView"),
          min: 50,
          max: 160,
          step: 1,
          initValue: wp.cameraFOV,
          onChange: pp => {
            mp.c.setClientEscMenuOptions({
              cameraFOV: pp
            })
          }
        }), (0, Ap.jsx)(kp.b, {
          label: yp("settingsMenu:disableViewBobbing"),
          checked: wp.disableBobbing,
          onClick: pp => {
            mp.c.setClientEscMenuOptions({
              disableBobbing: pp
            })
          },
          circleInfoText: yp("settingsMenu:disableViewBobbingInfo")
        }), (0, Ap.jsx)(kp.b, {
          label: yp("settingsMenu:antiAliasing"),
          checked: wp.antiAliasing,
          onClick: pp => {
            ap({
              antiAliasing: pp
            }), (0, Hc.g)("antiAliasing"), mp.c.setClientEscMenuOptions({
              antiAliasing: pp
            })
          },
          circleInfoText: yp("settingsMenu:antiAliasingInfo")
        }), (0, Ap.jsx)(kp.i, {
          name: yp("settingsMenu:pixelScale"),
          min: 1,
          max: 8,
          step: 1,
          initValue: null !== (Lp = wp.pixelScale) && void 0 !== Lp ? Lp : 1,
          onChange: pp => {
            (pp !== mp.c.get("clientEscMenuOptions").pixelScale || (0, ec.v)()) && (0, Hc.g)("pixelScale"), mp.c.setClientEscMenuOptions({
              pixelScale: pp
            })
          },
          circleInfoText: yp("settingsMenu:pixelScaleInfo"),
          format: pp => `${pp}x`
        }), (0, Ap.jsx)(kp.b, {
          label: yp("settingsMenu:pixelSmoothing"),
          checked: wp.pixelSmoothing,
          onClick: pp => {
            mp.c.setClientEscMenuOptions({
              pixelSmoothing: pp
            })
          },
          circleInfoText: yp("settingsMenu:pixelSmoothingInfo")
        }), Pc.z && (0, Ap.jsx)(kp.b, {
          label: yp("settingsMenu:distantNametags"),
          checked: (0, dc.d)(),
          onClick: pp => {
            mp.c.set({
              showDistantNametags: pp
            })
          },
          circleInfoText: yp("settingsMenu:distantNametagsInfo")
        }), (0, Ap.jsx)(kp.b, {
          label: yp(Np.translationKey),
          checked: Np.checked,
          onClick: pp => {
            ap({
              useWebGpu: pp
            }), mp.c.setClientEscMenuOptions({
              useWebGpu: pp
            })
          },
          circleInfoText: yp("settingsMenu:newWebGpuInfo"),
          disabled: Np.disabled
        })]
      })
    }
    var mc = cp(4511),
      Rc = cp(8990),
      qc = cp(34386),
      Mc = cp(9e3),
      Cc = cp(34392);
    const Ec = {
        color: 16777215,
        name: "white"
      },
      Xc = {
        color: 0,
        name: "black"
      },
      lc = [Ec, {
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
      }, Xc],
      Qc = [Xc, Ec];

    function Jc(pp) {
      return `${pp} px`
    }

    function Bc(pp) {
      return `${pp}%`
    }

    function Nc(pp) {
      let {
        label: ip,
        value: cp,
        swatches: Op,
        onChange: op
      } = pp;
      const {
        t: xp
      } = (0, Sp.H)(), Lp = !Op.some((pp => pp.color === cp));
      return (0, Ap.jsxs)("div", {
        className: "SettingBox CrosshairColorRow",
        children: [(0, Ap.jsx)("div", {
          className: "SliderText",
          children: ip
        }), (0, Ap.jsxs)("div", {
          className: "CrosshairSwatches",
          role: "radiogroup",
          "aria-label": ip,
          children: [Op.map((pp => {
            let {
              color: ip,
              name: Op
            } = pp;
            return (0, Ap.jsx)("button", {
              type: "button",
              role: "radio",
              "aria-checked": ip === cp,
              "aria-label": xp(`crosshairSettings:color_${Op}`),
              "data-pad-focusable": !0,
              className: Ip()("CrosshairSwatch", {
                Selected: ip === cp
              }),
              style: {
                background: (0, Cc.j)(ip)
              },
              onClick: () => {
                op(ip)
              }
            }, ip)
          })), (0, Ap.jsx)("label", {
            className: Ip()("CrosshairSwatch CrosshairSwatchCustom", {
              Selected: Lp
            }),
            style: Lp ? {
              background: (0, Cc.j)(cp)
            } : void 0,
            title: xp("crosshairSettings:customColor"),
            "data-pad-focusable": !0,
            children: (0, Ap.jsx)("input", {
              type: "color",
              "aria-label": xp("crosshairSettings:customColor"),
              value: (0, Cc.j)(cp),
              onChange: pp => {
                const ip = (0, Cc.o)(pp.target.value);
                null !== ip && op(ip)
              }
            })
          })]
        })]
      })
    }

    function Tc(pp) {
      let {
        settings: ip,
        onChange: cp
      } = pp;
      const {
        t: Op
      } = (0, Sp.H)(), op = (pp, Op) => {
        cp((0, Cc.q)(ip, pp, Op))
      }, Ip = function(pp, cp) {
        let Op = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Jc;
        const {
          min: Ip,
          max: Sp,
          step: xp
        } = Cc.b[pp];
        return (0, Ap.jsx)(kp.i, {
          name: cp,
          min: Ip,
          max: Sp,
          step: xp,
          initValue: ip[pp],
          format: Op,
          onChange: ip => {
            op(pp, ip)
          }
        }, pp)
      }, xp = ["lines", "dot", "circle"].filter((pp => ip[pp])), Lp = (pp, cp, Op) => (0, Ap.jsx)(kp.b, {
        label: cp,
        checked: ip[pp],
        disabled: 1 === xp.length && xp[0] === pp,
        circleInfoText: Op,
        onClick: ip => {
          op(pp, ip)
        }
      }, pp), Yp = "shapes" === ip.style;
      return (0, Ap.jsxs)(Ap.Fragment, {
        children: [(0, Ap.jsx)(kp.f, {
          label: Op("crosshairSettings:style"),
          options: [{
            value: "classic",
            label: Op("crosshairSettings:styleClassic")
          }, {
            value: "shapes",
            label: Op("crosshairSettings:styleShapes")
          }],
          value: ip.style,
          onChange: pp => {
            op("style", pp)
          }
        }), (0, Ap.jsx)(Nc, {
          label: Op("crosshairSettings:color"),
          value: ip.color,
          swatches: lc,
          onChange: pp => {
            op("color", pp)
          }
        }), Ip("opacity", Op("crosshairSettings:opacity"), Bc), !Yp && Ip("size", Op("crosshairSettings:size"), Bc), Yp && (0, Ap.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [Lp("lines", Op("crosshairSettings:lines")), ip.lines && Ip("lineLength", Op("crosshairSettings:lineLength")), ip.lines && Ip("lineThickness", Op("crosshairSettings:lineThickness")), ip.lines && Ip("gap", Op("crosshairSettings:gap")), ip.lines && Lp("tStyle", Op("crosshairSettings:tStyle"))]
        }), Yp && (0, Ap.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [Lp("dot", Op("crosshairSettings:dot")), ip.dot && Ip("dotSize", Op("crosshairSettings:dotSize"))]
        }), Yp && (0, Ap.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [Lp("circle", Op("crosshairSettings:circle")), ip.circle && Ip("circleRadius", Op("crosshairSettings:circleRadius")), ip.circle && Ip("circleThickness", Op("crosshairSettings:circleThickness"))]
        }), (0, Ap.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [Ip("outline", Op("crosshairSettings:outline"), (pp => pp > 0 ? Jc(pp) : Op("crosshairSettings:off"))), ip.outline > 0 && (0, Ap.jsx)(Nc, {
            label: Op("crosshairSettings:outlineColor"),
            value: ip.outlineColor,
            swatches: Qc,
            onChange: pp => {
              op("outlineColor", pp)
            }
          })]
        }), Lp("growOnClick", Op("crosshairSettings:growOnClick")), Yp && Lp("forGuns", Op("crosshairSettings:forGuns"), Op("crosshairSettings:forGunsInfo"))]
      })
    }
    var fc = cp(82),
      bc = cp(1295),
      hc = cp(12931),
      ac = cp(14040),
      nc = cp(15507),
      Fc = cp(16055);
    const gc = ["sky", "grass", "stone", "sand", "snow", "night"],
      Gc = "4rem";

    function rc(pp) {
      return {
        backgroundImage: `url(${pp})`,
        backgroundSize: `${Gc} ${Gc}`,
        backgroundRepeat: "repeat",
        imageRendering: "pixelated"
      }
    }

    function Zc(pp) {
      return {
        ...(() => {
          switch (pp) {
            case "sky":
              return {
                backgroundImage: "linear-gradient(#3d8fe0 0%, #8cc8f5 45%, #d6eefc 58%, #6fae4a 58.01%, #4f8a33 100%)", backgroundSize: "100vw 100vh", backgroundRepeat: "no-repeat"
              };
            case "grass":
              return rc(hc);
            case "stone":
              return rc(ac);
            case "sand":
              return rc(nc);
            case "snow":
              return rc(Fc);
            case "night":
              return {
                backgroundImage: "radial-gradient(circle at 50% 50%, #1e2a4a 0%, #070b16 100vmax)", backgroundSize: "100vw 100vh", backgroundRepeat: "no-repeat"
              }
          }
        })(),
        backgroundPosition: "center"
      }
    }

    function zc(pp) {
      return Object.freeze({
        ...Cc.d,
        style: "shapes",
        outline: 1,
        lines: !1,
        ...pp
      })
    }
    const sc = [{
        id: "default",
        settings: Cc.d
      }, {
        id: "cross",
        settings: zc({
          color: 5046092,
          lines: !0,
          lineLength: 7,
          lineThickness: 2,
          gap: 3
        })
      }, {
        id: "crossDot",
        settings: zc({
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
        settings: zc({
          dot: !0,
          dotSize: 4
        })
      }, {
        id: "circle",
        settings: zc({
          circle: !0,
          circleRadius: 12,
          circleThickness: 1.5,
          dot: !0,
          dotSize: 2
        })
      }, {
        id: "tShape",
        settings: zc({
          color: 16731391,
          lines: !0,
          lineLength: 7,
          lineThickness: 2,
          gap: 3,
          tStyle: !0
        })
      }, {
        id: "tiny",
        settings: zc({
          color: 16776960,
          lines: !0,
          lineLength: 3,
          lineThickness: 1,
          gap: 2
        })
      }, {
        id: "bold",
        settings: zc({
          lines: !0,
          lineLength: 10,
          lineThickness: 3,
          gap: 0,
          outline: 1.5
        })
      }],
      Kc = ["growOnClick", "forGuns"];
    var Vc = cp(34397);

    function pO(pp) {
      let {
        label: ip,
        selected: cp,
        onClick: Op,
        className: op,
        style: Sp,
        children: xp
      } = pp;
      return (0, Ap.jsx)("button", {
        type: "button",
        role: "radio",
        "aria-checked": cp,
        title: ip,
        "aria-label": ip,
        "data-pad-focusable": !0,
        className: Ip()("CrosshairBackdropSwatch", op, {
          Selected: cp
        }),
        style: Sp,
        onClick: Op,
        children: xp
      })
    }

    function iO(pp) {
      let {
        backdrop: ip,
        onChange: cp,
        game: Op
      } = pp;
      const {
        t: op
      } = (0, Sp.H)();
      return (0, Ap.jsxs)("div", {
        className: "CrosshairBackdrops",
        role: "radiogroup",
        "aria-label": op("crosshairSettings:background"),
        children: [Op && (0, Ap.jsx)(pO, {
          label: op("crosshairSettings:bg_game"),
          selected: Op.selected,
          onClick: Op.onSelect,
          className: "CrosshairGameSwatch",
          children: (0, Ap.jsx)(xp.d, {
            name: "cube"
          })
        }), gc.map((pp => (0, Ap.jsx)(pO, {
          label: op(`crosshairSettings:bg_${pp}`),
          selected: !(null !== Op && void 0 !== Op && Op.selected) && pp === ip,
          style: Zc(pp),
          onClick: () => {
            cp(pp)
          }
        }, pp)))]
      })
    }

    function cO(pp) {
      let {
        settings: ip,
        touch: cp,
        backdrop: Op,
        onChange: op
      } = pp;
      const {
        t: xp
      } = (0, Sp.H)(), Lp = function(pp) {
        var ip;
        return null !== (ip = sc.find((ip => (0, Cc.p)(ip.settings, pp, Kc)))) && void 0 !== ip ? ip : null
      }(ip);
      return (0, Ap.jsx)("div", {
        className: "CrosshairPresets",
        role: "radiogroup",
        "aria-label": xp("crosshairSettings:presets"),
        children: sc.map((pp => {
          const Sp = (null === Lp || void 0 === Lp ? void 0 : Lp.id) === pp.id;
          return (0, Ap.jsxs)("button", {
            type: "button",
            role: "radio",
            "aria-checked": Sp,
            "data-pad-focusable": !0,
            className: Ip()("CrosshairPreset", {
              Selected: Sp
            }),
            onClick: () => {
              op(function(pp, ip) {
                return {
                  ...ip.settings,
                  growOnClick: pp.growOnClick,
                  forGuns: pp.forGuns
                }
              }(ip, pp))
            },
            children: [(0, Ap.jsx)("div", {
              className: "CrosshairPresetStage",
              style: Zc(Op),
              children: (0, Ap.jsx)(Vc.b, {
                settings: pp.settings,
                touch: cp,
                inPreview: !0
              })
            }), (0, Ap.jsx)("div", {
              className: "CrosshairPresetName",
              children: xp(`crosshairSettings:preset_${pp.id}`)
            })]
          }, pp.id)
        }))
      })
    }
    var OO = cp(1685);

    function oO(pp, ip) {
      const [cp, op] = (0, Op.useState)(!1), Ip = () => {
        op(!1)
      }, [Sp, xp] = (0, Op.useState)(!1), Lp = (0, Op.useRef)({
        growOnClick: pp.growOnClick,
        forGuns: pp.forGuns
      });
      (0, Op.useEffect)((() => {
        const ip = Lp.current;
        Lp.current = {
          growOnClick: pp.growOnClick,
          forGuns: pp.forGuns
        }, (pp.growOnClick && !ip.growOnClick || pp.forGuns && !ip.forGuns) && xp(!0)
      }), [pp.growOnClick, pp.forGuns]), (0, Op.useEffect)((() => {
        if (!Sp) return;
        const pp = setTimeout((() => {
          xp(!1)
        }), 600);
        return () => {
          clearTimeout(pp)
        }
      }), [Sp]);
      const Yp = cp || Sp;
      return {
        view: {
          pressed: Yp,
          spread: Yp && pp.forGuns && !pp.growOnClick ? 6 : 0
        },
        handlers: {
          onPointerDown: pp => {
            !pp.target.closest(ip) && (0, OO.e)(pp.currentTarget, pp.pointerId) && op(!0)
          },
          onPointerUp: Ip,
          onPointerCancel: Ip,
          onLostPointerCapture: Ip
        }
      }
    }

    function IO(pp) {
      let {
        settings: ip,
        touch: cp,
        backdrop: Op,
        className: op,
        children: Sp,
        label: xp
      } = pp;
      const Lp = oO(ip, ".CrosshairStageControls");
      return (0, Ap.jsxs)("div", {
        className: Ip()("CrosshairStage", op),
        style: Zc(Op),
        ...Lp.handlers,
        children: [(0, Ap.jsx)("div", {
          className: "CrosshairStageHold",
          role: "img",
          "aria-label": xp,
          children: (0, Ap.jsx)(Vc.b, {
            settings: ip,
            touch: cp,
            inPreview: !0,
            ...Lp.view
          })
        }), Sp]
      })
    }
    const SO = "crosshairFullScreen";

    function xO(pp) {
      let {
        settings: ip,
        touch: cp,
        backdrop: op,
        onBackdrop: Lp,
        inGame: Dp,
        onChange: Pp,
        onClose: Wp
      } = pp;
      const {
        t: yp
      } = (0, Sp.H)(), Up = (0, Op.useRef)(null);
      (0, bc.x)("popup", Up, Wp),
      function(pp) {
        const ip = (0, Op.useRef)(pp);
        ip.current = pp, (0, Op.useEffect)((() => {
          window.history.pushState({
            ...window.history.state,
            [SO]: !0
          }, "");
          let pp = !1;
          const cp = () => {
            pp = !0, ip.current()
          };
          return window.addEventListener("popstate", cp), () => {
            var ip;
            window.removeEventListener("popstate", cp), !pp && null !== (ip = window.history.state) && void 0 !== ip && ip[SO] && window.history.back()
          }
        }), [])
      }(Wp);
      const wp = (0, Op.useRef)(Wp);
      wp.current = Wp, (0, Op.useEffect)((() => {
        function pp(pp) {
          "Escape" === pp.key && (pp.stopPropagation(), wp.current())
        }
        return window.addEventListener("keydown", pp, !0), () => {
          window.removeEventListener("keydown", pp, !0)
        }
      }), []);
      const vp = oO(ip, ".CrosshairFullScreenPanel"),
        [tp, Hp] = (0, Op.useState)(!0),
        dp = tp && Dp;
      (0, Op.useEffect)((() => {
        if (dp) return mp.c.set({
          crosshairGameView: !0
        }), () => {
          mp.c.set({
            crosshairGameView: !1
          })
        }
      }), [dp]);
      const [ep, jp] = (0, Op.useState)(!0);
      return (0, fc.createPortal)((0, Ap.jsxs)("div", {
        ref: Up,
        className: "CrosshairFullScreen",
        style: dp ? void 0 : Zc(op),
        ...vp.handlers,
        children: [(0, Ap.jsx)(Vc.b, {
          settings: ip,
          touch: cp,
          inEditor: !0,
          ...vp.view
        }), (0, Ap.jsxs)("div", {
          className: Ip()("CrosshairFullScreenPanel", {
            Collapsed: !ep
          }),
          children: [(0, Ap.jsxs)("div", {
            className: "CrosshairFullScreenBar",
            children: [(0, Ap.jsx)(iO, {
              backdrop: op,
              onChange: pp => {
                Hp(!1), Lp(pp)
              },
              game: Dp ? {
                selected: dp,
                onSelect: () => {
                  Hp(!0)
                }
              } : void 0
            }), (0, Ap.jsx)(Yp.S, {
              className: "CrosshairPanelToggle",
              ariaLabel: yp(ep ? "crosshairSettings:hideEditor" : "crosshairSettings:showEditor"),
              onClick: () => {
                jp(!ep)
              },
              children: (0, Ap.jsx)(xp.d, {
                name: ep ? "caret-up" : "pen"
              })
            }), (0, Ap.jsx)(Yp.f, {
              className: "CrosshairFullScreenDone",
              onClick: Wp,
              padDefaultFocus: !0,
              children: yp("crosshairSettings:done")
            })]
          }), ep && (0, Ap.jsxs)("div", {
            className: "CrosshairFullScreenFields",
            children: [(0, Ap.jsx)(cO, {
              settings: ip,
              touch: cp,
              backdrop: op,
              onChange: Pp
            }), (0, Ap.jsx)(Tc, {
              settings: ip,
              onChange: Pp
            })]
          })]
        })]
      }), document.body)
    }
    var LO = cp(2752),
      YO = cp(34411);

    function DO(pp) {
      let {
        settings: ip,
        onChange: cp
      } = pp;
      const {
        t: op
      } = (0, Sp.H)(), Lp = (0, YO.h)(ip), [Dp, Pp] = (0, LO.j)(), [Wp, yp] = (0, Op.useState)(!1), Up = (0, Op.useRef)(null), [wp, vp] = (0, LO.j)(), [tp, Hp] = (0, Op.useState)(!1);
      return (0, Ap.jsxs)("div", {
        className: "SettingBox CrosshairShare",
        children: [(0, Ap.jsxs)("div", {
          className: "CrosshairShareRow",
          children: [(0, Ap.jsxs)(Yp.S, {
            className: Ip()("CrosshairCopy", {
              ActiveSecondaryButton: Dp
            }),
            onClick: () => {
              (0, LO.h)(Lp, {
                useShareSheet: !1,
                onOutcome: pp => {
                  yp("failed" === pp), "copied" === pp && Pp()
                }
              })
            },
            children: [(0, Ap.jsx)(xp.d, {
              name: Dp ? "check" : "copy"
            }), " ", op(Dp ? "general:copied" : "crosshairSettings:copy")]
          }), (0, Ap.jsx)(ep.c, {
            className: "CrosshairPaste",
            domRef: Up,
            ariaLabel: op("crosshairSettings:paste"),
            placeholderText: op("crosshairSettings:paste"),
            onValueChange: pp => {
              const ip = (0, YO.e)(pp);
              Hp(!ip && pp.trim().length >= YO.c), ip && (cp(ip), Up.current.value = "", vp())
            }
          })]
        }), Wp && (0, Ap.jsx)("input", {
          className: "CrosshairCode",
          readOnly: !0,
          value: Lp,
          "aria-label": op("crosshairSettings:copy"),
          onFocus: pp => {
            pp.currentTarget.select()
          }
        }), (0, Ap.jsxs)("div", {
          "aria-live": "polite",
          children: [tp && (0, Ap.jsx)("div", {
            className: "CrosshairShareNote Error",
            children: op("crosshairSettings:pasteInvalid")
          }), wp && !tp && (0, Ap.jsx)("div", {
            className: "CrosshairShareNote",
            children: op("crosshairSettings:applied")
          })]
        })]
      })
    }
    var AO = cp(34420);
    let PO = "sky";

    function WO(pp) {
      let {
        showing: ip
      } = pp;
      const {
        t: cp
      } = (0, Sp.H)(), {
        isTouchScreen: op,
        gameState: Ip,
        clientEscMenuOptions: Lp
      } = (0, mp.o)(["isTouchScreen", "gameState", "clientEscMenuOptions"]), Dp = (0, AO.f)(), [Pp, Wp] = (0, Op.useState)(PO), yp = pp => {
        PO = pp, Wp(pp)
      }, [Up, wp] = (0, Op.useState)(!1);
      return (0, Op.useEffect)((() => {
        ip || wp(!1)
      }), [ip]), (0, Ap.jsxs)("div", {
        className: "SettingsMenuRightInner CrosshairCategory",
        children: [(0, Ap.jsx)("div", {
          className: "CrosshairPreviewSticky",
          children: (0, Ap.jsx)(IO, {
            className: "CrosshairPreviewStage",
            settings: Dp,
            touch: op,
            backdrop: Pp,
            label: cp("crosshairSettings:preview"),
            children: (0, Ap.jsxs)("div", {
              className: "CrosshairPreviewBar CrosshairStageControls",
              children: [(0, Ap.jsx)(iO, {
                backdrop: Pp,
                onChange: yp
              }), (0, Ap.jsxs)(Yp.S, {
                className: "CrosshairFullScreenButton",
                onClick: () => {
                  wp(!0)
                },
                children: [(0, Ap.jsx)(xp.d, {
                  name: "expand"
                }), " ", cp("crosshairSettings:fullScreen")]
              })]
            })
          })
        }), (0, Ap.jsx)("div", {
          className: "SettingBox",
          children: (0, Ap.jsx)(cO, {
            settings: Dp,
            touch: op,
            backdrop: Pp,
            onChange: AO.d
          })
        }), (0, Ap.jsx)(DO, {
          settings: Dp,
          onChange: AO.d
        }), op && (0, Ap.jsx)(Mc.c, {
          note: (0, qc.g)(op, Lp.touchActionButtons) ? cp("crosshairSettings:touchNote") : void 0
        }), (0, Ap.jsx)(Tc, {
          settings: Dp,
          onChange: AO.d
        }), Up && (0, Ap.jsx)(xO, {
          settings: Dp,
          touch: op,
          backdrop: Pp,
          onBackdrop: yp,
          inGame: "inGame" === Ip,
          onChange: AO.d,
          onClose: () => {
            wp(!1)
          }
        })]
      })
    }
    var yO = cp(8995),
      UO = cp(1429),
      wO = cp(5107),
      vO = cp(34427),
      tO = cp(4371),
      HO = cp(2007),
      dO = cp(713);
    const eO = (0, Op.memo)((function() {
      const {
        clientEscMenuOptions: pp
      } = (0, mp.o)(["clientEscMenuOptions"]), {
        recording: ip,
        clipping: cp,
        hasClipBuffer: op
      } = (0, Ni.g)("replayRecorder"), Sp = (0, Ni.f)("connectedGame", (pp => pp.replay)), xp = (0, tO.m)(), Lp = !1 === (0, Up.i)("canRecordReplays");
      (0, Op.useEffect)((() => {
        tp.gameBridge.send("setRecorderPrefs", {
          clipping: pp.enableClipping,
          clipSeconds: pp.clipDurationSeconds
        })
      }), [pp.enableClipping, pp.clipDurationSeconds]);
      const Dp = xp || Sp,
        Pp = !Dp && !Lp,
        Wp = ip || Pp,
        yp = Pp,
        wp = yp && cp && !ip;

      function vp() {
        Wp && tp.gameBridge.send("toggleRecording", null)
      }
      return (0, Ap.jsxs)("div", {
        className: "SettingsMenuRightInner ReplayViewerCategory",
        children: [(0, Ap.jsxs)("div", {
          className: "SettingBox",
          children: [(0, Ap.jsx)("div", {
            className: "ReplayViewerCategoryRecordingRow",
            children: ip ? (0, Ap.jsxs)(Ap.Fragment, {
              children: [(0, Ap.jsxs)(Yp.K, {
                className: "ReplayViewerCategoryButton",
                onClick: vp,
                disabled: !Wp,
                children: [(0, Ap.jsx)("span", {
                  children: "Stop Recording"
                }), (0, Ap.jsx)(HO.d, {
                  noaAction: "recordGame"
                })]
              }), (0, Ap.jsx)(vO.c, {
                className: "ReplayViewerCategoryRecordingIndicator"
              })]
            }) : (0, Ap.jsxs)(Yp.f, {
              className: "ReplayViewerCategoryButton",
              onClick: vp,
              disabled: !Wp,
              children: [(0, Ap.jsx)("span", {
                children: "Start Recording"
              }), (0, Ap.jsx)(HO.d, {
                noaAction: "recordGame"
              })]
            })
          }), Lp && (0, Ap.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Recording is turned off in this game."
          }), Dp && !ip && (0, Ap.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Close Replay Mode to start recording."
          })]
        }), (0, Ap.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, Ap.jsx)(kp.b, {
            label: "Enable clipping",
            checked: pp.enableClipping,
            disabled: !yp,
            onClick: function(pp) {
              yp && mp.c.setClientEscMenuOptions({
                enableClipping: pp
              })
            },
            className: Ip()({
              SettingBoxDisabled: !yp
            })
          }), (0, Ap.jsx)(kp.i, {
            name: "Clip duration (seconds)",
            min: dO.l,
            max: dO.j,
            step: dO.c,
            initValue: pp.clipDurationSeconds,
            onChange: function(pp) {
              mp.c.setClientEscMenuOptions({
                clipDurationSeconds: pp
              })
            },
            circleInfoText: "Longer clip durations use more memory and may affect performance.",
            disabled: !yp || !pp.enableClipping
          })]
        }), (0, Ap.jsxs)("div", {
          className: "SettingBox",
          children: [(0, Ap.jsxs)(Yp.f, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              wp && tp.gameBridge.send("saveClip", null)
            },
            disabled: !wp,
            children: [(0, Ap.jsx)("span", {
              children: "Record clip"
            }), (0, Ap.jsx)(HO.d, {
              noaAction: "recordClip"
            })]
          }), pp.enableClipping && !op && yp && !ip && (0, Ap.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clip buffer is filling \u2014 play for a moment, then save."
          }), ip && (0, Ap.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clipping pauses while a full recording is active."
          })]
        }), (0, Ap.jsxs)("div", {
          className: "SettingBox",
          children: [(0, Ap.jsxs)(Yp.f, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              (0, tO.k)(!0), mp.c.set({
                openEverythingMenuName: null
              })
            },
            disabled: xp,
            children: [(0, Ap.jsx)("span", {
              children: "Open Replay Mode"
            }), (0, Ap.jsx)(HO.d, {
              noaAction: "replayViewerOpen"
            })]
          }), xp && (0, Ap.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Replay Mode is already open."
          })]
        }), (0, Ap.jsxs)("div", {
          className: "SettingBox",
          children: [(0, Ap.jsx)("div", {
            className: "ReplayViewerCategoryTutorialTitle",
            children: "How to use Replay Mode"
          }), (0, Ap.jsx)("iframe", {
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
    var uO = cp(1927);
    const jO = {
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
        icon: () => (0, Ap.jsx)("svg", {
          className: "svg-inline--fa",
          viewBox: "0 0 640 512",
          "aria-hidden": "true",
          children: (0, Ap.jsx)("path", {
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
      Dy: {
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
      return Promise.all([cp.e(78), cp.e(136), cp.e(135), cp.e(131)]).then((() => cp(41287))).then((pp => ({
        default: pp.ShaderPackCategory
      })), (pp => (console.error("Failed to load the shader pack settings", pp), {
        default: mO
      })))
    }

    function mO() {
      const {
        t: pp
      } = (0, Sp.H)();
      return (0, Ap.jsx)("div", {
        className: "SettingsMenuRightInner",
        children: pp("shaderPack:tabLoadFailed")
      })
    }
    var RO = cp(1419);
    const qO = (0, Op.lazy)((() => cp.e(278).then((() => cp(41277))).then((pp => ({
        default: pp.BloxdInformation
      }))))),
      MO = (0, Op.lazy)(kO);

    function CO(pp) {
      return pp ? "general" : "account"
    }
    const EO = new Map,
      XO = (0, Op.memo)((function(pp) {
        let {
          show: ip,
          setBeforeResumeCallback: cp
        } = pp;
        (0, wp.b)();
        const {
          gameState: op,
          openSettingsCategory: Ip
        } = (0, mp.o)(["gameState", "openSettingsCategory"]), {
          userContext: Lp
        } = (0, yp.b)(), {
          t: Dp
        } = (0, Sp.H)(), ep = (0, Wp.c)(), jp = (0, Up.i)("minChunkAddDist"), kp = "inGame" === op, [Rp, Cp] = (0, Op.useState)(CO(kp)), [Ep, Xp] = (0, Op.useState)(null), [lp, Qp] = (0, Op.useState)([]), Jp = (0, Op.useRef)(function() {
          const pp = new Date,
            ip = 6 * (pp.getMonth() + pp.getDate()) % Hi.t.length;
          return [...Hi.t, ...Hi.t].slice(ip, ip + 6)
        }()), Bp = (0, Op.useRef)(null), Np = (0, Gi.i)(UO.e, (0, UO.b)()), Tp = Object.keys(jO).filter((pp => {
          switch (pp) {
            case "replayViewer":
              return kp;
            case "developerTools":
              return Lp.playerHasRank("developer") || !1;
            case "texturePack":
              return vp.featureFlags.settings.canChangeTexturePack;
            case "Dy":
              return vp.featureFlags.settings.canUseShaderPacks;
            case "notifications":
              return vp.featureFlags.useSocialFeatures || null !== Lp.dailyDrop;
            case "alternativeDomains":
              return "crazygames" !== Mp.siteUsed;
            case "controller":
              return vp.featureFlags.useControllerSupport && (Np || "controller" === Rp);
            default:
              return !0
          }
        }));
        (0, Gi.f)("toggleFullCoordinateOverlay", (() => {
          const pp = vc("showCoordinates") && vc("showChunkCoordinates") && vc("showFPS");
          tc("showCoordinates", !pp), tc("showChunkCoordinates", !pp), tc("showFPS", !pp), ep()
        })), (0, Gi.f)("updatedChunkLoadDist", (() => {
          ep()
        })), (0, Op.useEffect)((() => {
          if (Xp(null), null === mp.c.get("openSettingsCategory")) {
            const pp = (0, RO.h)() ? EO.get(kp) : void 0;
            Cp(pp && Tp.includes(pp) ? pp : CO(kp))
          }
        }), [ip]), (0, Op.useEffect)((() => {
          null !== Ip && (Cp(Ip), EO.set(kp, Ip), mp.c.set({
            openSettingsCategory: null
          }))
        }), [Ip, kp]), (0, Op.useLayoutEffect)((() => {
          Bp.current && (Bp.current.scrollTop = 0)
        }), [Rp, ip]), (0, Op.useEffect)((() => {
          "updateLog" === Rp && (0, dp.d)().then(Qp)
        }), [Rp]), (0, Op.useEffect)((() => {
          if ((0, Dc.G)(jp)) return;
          const [pp, ip] = (0, mc.i)(), [cp, Op] = (0, oc.c)(jp), op = (0, uO.h)(jp[0], pp, cp), Ip = (0, uO.h)(jp[1], ip, Op);
          tp.gameBridge.send("setChunkAddDistance", {
            horizontal: op,
            vertical: Ip
          })
        }), [jp]);
        const fp = (0, Op.useCallback)((async () => {
          Ep && (await Ep(), Xp(null))
        }), [Ep]);

        function bp() {
          mp.c.set({
            openEverythingMenuName: null
          })
        }
        return (0, Op.useEffect)((() => {
          cp((() => fp))
        }), [fp, cp]), (0, Ap.jsxs)("div", {
          className: "SettingsMenu Menu",
          style: ip ? {} : {
            display: "none"
          },
          children: [(0, Ap.jsx)("div", {
            className: "MenuSideBar",
            children: (0, Ap.jsx)("div", {
              className: "MenuSideBarBody",
              children: (0, Ap.jsx)(Pp, {
                items: Tp.map((pp => {
                  const ip = jO[pp].icon;
                  return {
                    id: pp,
                    faIcon: "string" === typeof ip ? ip : void 0,
                    iconElement: "string" === typeof ip ? void 0 : (0, Ap.jsx)(ip, {}),
                    title: Dp(jO[pp].displayName),
                    redDot: !1
                  }
                })),
                selectedItemId: Rp,
                onClick: pp => {
                  !async function(pp) {
                    await fp(), Cp(pp), EO.set(kp, pp)
                  }(pp)
                }
              })
            })
          }), (0, Ap.jsxs)("div", {
            ref: Bp,
            className: "MenuBody SettingsMenuRight",
            children: ["account" === Rp && (0, Ap.jsx)(Ei, {
              showing: ip,
              inGame: kp
            }), "general" === Rp && (0, Ap.jsx)(ni, {
              inGame: kp
            }), "audio" === Rp && (0, Ap.jsx)(Fi, {}), "notifications" === Rp && (0, Ap.jsx)(Oc, {}), "graphics" === Rp && (0, Ap.jsx)(kc, {
              minChunkAddDist: null !== jp && void 0 !== jp ? jp : [2, 2],
              getValue: vc,
              onChange: tc,
              setApplySettingsCallback: Xp
            }), "controls" === Rp && (0, Ap.jsx)(Rc.d, {}), "crosshair" === Rp && (0, Ap.jsx)(WO, {
              showing: ip
            }), "controller" === Rp && vp.featureFlags.useControllerSupport && (0, Ap.jsx)(yO.d, {}), vp.featureFlags.settings.canChangeTexturePack && "texturePack" === Rp && (0, Ap.jsx)(wO.d, {
              setApplySettingsCallback: Xp
            }), vp.featureFlags.settings.canUseShaderPacks && "Dy" === Rp && (0, Ap.jsx)(Op.Suspense, {
              fallback: null,
              children: (0, Ap.jsx)(MO, {
                setApplySettingsCallback: Xp
              })
            }), "updateLog" === Rp && (0, Ap.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, Ap.jsx)("div", {
                className: "UpdateLogsContainer",
                children: lp.map(((pp, ip) => (0, Ap.jsx)(Hp.d, {
                  updateLog: pp,
                  index: ip,
                  close: bp
                }, ip)))
              })
            }), "information" === Rp && (0, Ap.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, Ap.jsx)(Op.Suspense, {
                fallback: null,
                children: (0, Ap.jsx)(qO, {})
              })
            }), "alternativeDomains" === Rp && (0, Ap.jsxs)("div", {
              className: "SettingsMenuRightInner",
              children: [(0, Ap.jsx)("div", {
                className: "AlternativeDomainsTitle",
                children: Dp("settingsMenu:unblockedDomainsDescription")
              }), (0, Ap.jsx)("div", {
                className: "AlternativeDomainsList",
                children: Jp.current.map((pp => (0, Ap.jsxs)(Yp.f, {
                  onClick: () => {
                    window.open(`https://${pp}`)
                  },
                  children: [(0, Ap.jsx)(xp.d, {
                    name: "arrow-up-right-from-square"
                  }), " ", pp]
                }, pp)))
              })]
            }), "replayViewer" === Rp && (0, Ap.jsx)(eO, {}), "developerTools" === Rp && (0, Ap.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, Ap.jsx)(qp, {
                setApplySettingsCallback: Xp
              })
            }), null !== Ep && (0, Ap.jsx)("div", {
              className: "SettingsMenuRightFooter",
              children: (0, Ap.jsx)(Yp.f, {
                className: "SettingsMenuRightFooterButton",
                onClick: fp,
                children: Dp("general:apply")
              })
            })]
          })]
        })
      }));
    var lO = cp(2695);
    const QO = ["characters", "emote", "skin", "hat", "head", "eyebrows", "eyes", "back", "body", "legs", "shoes", "profileEffect", "cape", "nameColour"],
      JO = (0, Op.lazy)((() => Promise.resolve().then((() => cp(4747))).then((pp => {
        pp.needGameClientAfterPaint();
        const ip = pp.matchmakingLibrariesPromise.then((pp => (0, lO.c)(pp.loadCharacterCustomisationUI(), (pp => pp.CharacterCustomisationUI))));
        return Promise.all([pp.ensureGameSetup(), ip]).then((pp => {
          let [, ip] = pp;
          return ip
        }))
      })))),
      BO = "openCustomisationTab";

    function NO(pp) {
      var ip, cp, op;
      let {
        show: Ip
      } = pp;
      const {
        userContext: Sp
      } = (0, yp.b)(), xp = (0, hp.usePurchasesAllowed)(), Lp = (0, Op.useRef)(null);
      var Yp, Dp;
      Sp !== Cp.NULL_USER_CONTEXT && (null === (ip = Lp.current) || void 0 === ip ? void 0 : ip.whamm) !== Sp.whamm && (Lp.current = {
        whamm: Sp.whamm,
        mountKey: (null !== (Yp = null === (Dp = Lp.current) || void 0 === Dp ? void 0 : Dp.mountKey) && void 0 !== Yp ? Yp : -1) + 1
      });
      const [Wp, Up] = (0, Op.useState)("characters");
      if ((0, Gi.f)(BO, Up), !Ip) return null;
      const wp = QO.filter((pp => "cape" !== pp && "nameColour" !== pp || Sp.getPlayerRanks().includes("super") || xp)).map((pp => ({
        id: pp,
        faIcon: Hi.B[pp],
        title: Hi.F[pp],
        redDot: !1
      })));
      return (0, Ap.jsxs)("div", {
        className: "Menu CharCustomisation",
        children: [(0, Ap.jsx)("div", {
          className: "MenuSideBar",
          children: (0, Ap.jsx)(Pp, {
            items: wp,
            selectedItemId: Wp,
            onClick: pp => {
              Up(pp)
            }
          })
        }), (0, Ap.jsx)("div", {
          className: "MenuBody",
          children: (0, Ap.jsx)(Op.Suspense, {
            fallback: (0, Ap.jsx)("div", {
              className: "CharacterCustomisationLoading",
              children: (0, Ap.jsx)(jp.c, {})
            }),
            children: (0, Ap.jsx)(JO, {
              selectedTab: Wp
            }, null !== (cp = null === (op = Lp.current) || void 0 === op ? void 0 : op.mountKey) && void 0 !== cp ? cp : 0)
          })
        })]
      })
    }
    var TO = cp(1497),
      fO = cp(1502),
      bO = cp(34430),
      hO = cp(4621),
      aO = cp(3528),
      nO = cp(3575),
      FO = cp(34453),
      gO = cp(8897),
      GO = cp(34434),
      rO = cp(34443),
      ZO = cp(1941),
      zO = cp(1929),
      sO = cp(5025),
      KO = cp(1276),
      VO = cp(1234),
      po = cp(1677),
      io = cp(8972),
      co = cp(2508),
      Oo = cp(2514);

    function oo(pp) {
      return pp ? Object.keys(pp).sort(((ip, cp) => {
        var Op, op, Ip, Sp;
        const xp = (null !== (Op = null === (op = pp[cp]) || void 0 === op ? void 0 : op.sortPriority) && void 0 !== Op ? Op : 0) - (null !== (Ip = null === (Sp = pp[ip]) || void 0 === Sp ? void 0 : Sp.sortPriority) && void 0 !== Ip ? Ip : 0);
        return 0 !== xp ? xp : ip.localeCompare(cp)
      })) : []
    }
    const Io = [{
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

    function So(pp) {
      for (const {
          threshold: ip,
          suffix: cp
        }
        of Io)
        if (pp >= ip) {
          const Op = pp / ip;
          return Op >= 100 ? `${Math.floor(Op)}${cp}` : Op >= 10 ? `${Op.toFixed(1).replace(/\.0$/,"")}${cp}` : `${Op.toFixed(2).replace(/\.?0+$/,"")}${cp}`
        } return String(pp)
    }
    var xo = cp(5146);
    const Lo = {
        normal: "0.8em",
        big: "1em"
      },
      Yo = (0, Op.memo)((function(pp) {
        let {
          item: ip,
          amount: cp = 0,
          size: Op = "normal",
          tier: op = null
        } = pp;
        return (0, Ap.jsx)("div", {
          className: Ip()("SmpSlot", `SmpSlot-${Op}`),
          children: ip && (0, Ap.jsx)(ZO.d, {
            itemName: ip,
            amount: cp > 1 ? cp : 0,
            amountFontSize: Lo[Op],
            enchantmentTier: op
          })
        })
      }));

    function Do(pp) {
      let {
        amount: ip,
        exact: cp = !1,
        className: Op
      } = pp;
      return (0, Ap.jsxs)("span", {
        className: Ip()("SmpGold", Op),
        children: [(0, Ap.jsx)("span", {
          className: "SmpCoin",
          children: (0, Ap.jsx)(ZO.d, {
            itemName: "Gold Coin",
            amount: 0
          })
        }), cp ? ip.toLocaleString("en-US") : So(ip)]
      })
    }

    function Ao(pp) {
      let {
        count: ip = 5,
        grid: cp = !1
      } = pp;
      return (0, Ap.jsx)("div", {
        className: cp ? "SmpCardGrid" : "SmpList",
        "aria-hidden": "true",
        children: Array.from({
          length: ip
        }, ((pp, ip) => (0, Ap.jsxs)("div", {
          className: Ip()(cp ? "SmpListingCard" : "SmpRow", "SmpSkeleton"),
          children: [(0, Ap.jsx)("div", {
            className: Ip()("SmpSlot", cp ? "SmpSlot-big" : "SmpSlot-normal")
          }), (0, Ap.jsxs)("div", {
            className: "SmpRowText",
            children: [(0, Ap.jsx)("b", {}), (0, Ap.jsx)("small", {})]
          }), (0, Ap.jsx)("div", {
            className: "SmpSkeletonButton"
          })]
        }, ip)))
      })
    }

    function Po(pp) {
      let {
        title: ip,
        children: cp
      } = pp;
      return (0, Ap.jsxs)("div", {
        className: "SmpEmpty",
        children: [(0, Ap.jsx)("b", {
          children: ip
        }), cp && (0, Ap.jsx)("small", {
          children: cp
        })]
      })
    }

    function Wo(pp) {
      let {
        entry: ip
      } = pp;
      return (0, Ap.jsx)(Po, {
        title: (0, Ap.jsx)(zO.e, {
          text: ip.item.customTitle
        }),
        children: (0, Ap.jsx)(zO.e, {
          text: ip.item.description
        })
      })
    }

    function yo(pp) {
      return (0, Ap.jsx)(xo.b, {
        ...pp,
        className: Ip()("SmpChoice", pp.className),
        reselectable: !0
      })
    }

    function Uo() {
      return (0, Ap.jsx)("span", {
        className: "SmpLoader",
        children: (0, Ap.jsx)(jp.c, {})
      })
    }

    function wo(pp) {
      let {
        value: ip,
        onChange: cp,
        min: op = 1,
        max: Ip,
        step: Sp = 1,
        label: xp
      } = pp;
      const Lp = (0, Op.useRef)(null),
        Yp = (0, Op.useRef)(ip);
      Yp.current = ip;
      const [Dp, Pp] = (0, Op.useState)(null), Wp = pp => Math.max(op, Math.min(Ip, Math.floor(pp))), yp = pp => {
        const ip = Yp.current,
          Op = "function" === typeof Sp ? Sp(ip, pp) : Sp,
          op = Wp(ip + Op * pp);
        Yp.current = op, cp(op)
      };
      (0, Op.useEffect)((() => {
        if (null === Dp) return;
        let pp;
        const ip = () => {
            Pp(null)
          },
          cp = setTimeout((() => {
            pp = setInterval((() => {
              yp(Dp);
              const pp = Yp.current;
              (Dp > 0 ? pp >= Ip : pp <= op) && ip()
            }), 70)
          }), 380);
        return window.addEventListener("pointerup", ip), window.addEventListener("pointercancel", ip), window.addEventListener("blur", ip), () => {
          clearTimeout(cp), clearInterval(pp), window.removeEventListener("pointerup", ip), window.removeEventListener("pointercancel", ip), window.removeEventListener("blur", ip)
        }
      }), [Dp]), (0, Op.useEffect)((() => {
        const pp = Lp.current;
        pp && document.activeElement !== pp && pp.value !== String(ip) && (pp.value = String(ip))
      }), [ip]), (0, Op.useEffect)((() => {
        const pp = Lp.current;
        if (!pp) return;
        const ip = () => {
          pp.value = String(Yp.current)
        };
        return pp.addEventListener("blur", ip), () => {
          pp.removeEventListener("blur", ip)
        }
      }), []);
      const Up = pp => (0, Ap.jsx)("button", {
        type: "button",
        className: "SmpStepButton",
        "aria-label": `${pp>0?"More":"Less"} ${xp}`,
        disabled: pp > 0 ? ip >= Ip : ip <= op,
        onPointerDown: ip => {
          0 === ip.button && (yp(pp), Pp(pp))
        },
        onKeyDown: ip => {
          "Enter" !== ip.key && " " !== ip.key || yp(pp)
        },
        onContextMenu: pp => {
          pp.preventDefault()
        },
        children: pp > 0 ? "+" : "\u2212"
      });
      return (0, Ap.jsxs)("div", {
        className: "SmpStepper",
        children: [Up(-1), (0, Ap.jsx)(ep.c, {
          className: "SmpStepperInput",
          domRef: Lp,
          defaultValue: String(ip),
          ariaLabel: xp,
          type: "text",
          blurOnEnter: !0,
          onValueChange: pp => {
            const ip = pp.replace(/[^\d]/g, "");
            Lp.current && ip !== pp && (Lp.current.value = ip), "" !== ip && cp(Wp(Number(ip)))
          }
        }), Up(1)]
      })
    }

    function vo(pp) {
      return Math.max(1, 10 ** Math.max(0, Math.floor(Math.log10(Math.max(1, pp))) - 1))
    }
    var to = cp(34448),
      Ho = cp(1251);
    const eo = ["building", "colours", "nature", "decoration", "utility", "tools", "combat", "food", "mobs", "materials", "worldTools"];
    Ho.w, fp.wc.length;
    new Map;
    var uo = cp(3400);

    function jo(pp, ip) {
      var cp;
      return ip && (null === (cp = pp[ip]) || void 0 === cp ? void 0 : cp.smp) || null
    }

    function ko(pp, ip) {
      const cp = [];
      for (const op of oo(pp)) {
        var Op;
        const Ip = pp[op];
        (null === (Op = Ip.smp) || void 0 === Op ? void 0 : Op.kind) === ip && cp.push({
          key: op,
          item: Ip,
          meta: Ip.smp
        })
      }
      return cp
    }

    function mo(pp, ip) {
      var cp;
      return null !== (cp = ko(pp, ip)[0]) && void 0 !== cp ? cp : null
    }
    const Ro = "50% 0% 50% 0%",
      qo = [{
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

    function Mo(pp) {
      const ip = pp - (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now());
      for (const {
          divisor: cp,
          suffix: Op
        }
        of qo)
        if (ip >= cp) return `${Math.floor(ip/cp)}${Op}`;
      return "<1s"
    }

    function Co(pp) {
      const ip = pp.map(gO.c),
        cp = [];
      return ip.forEach(((pp, Op) => {
        const op = function(pp) {
            const ip = pp.match(/\d+/);
            return ip ? Number(ip[0]) : 0
          }(pp),
          Ip = Op === ip.length - 1;
        (Ip || 1 === op || 10 === op || 100 === op) && cp.push({
          label: pp,
          quantity: op,
          isAll: Ip
        })
      })), cp
    }
    let Eo = null;

    function Xo(pp, ip) {
      const cp = ip.trim().toLowerCase();
      if (!cp) return [];
      const Op = pp => {
          if (pp === cp) return 0;
          if (pp.startsWith(cp)) return 1;
          const ip = pp.indexOf(cp);
          return -1 === ip ? -1 : 2 + ip
        },
        op = [];
      for (const xp of pp) {
        const pp = [Op(xp.lowerLabel), Op(xp.lowerName)].filter((pp => -1 !== pp));
        pp.length && op.push({
          item: xp,
          rank: Math.min(...pp)
        })
      }
      if (op.length > 0) return op.sort(((pp, ip) => pp.rank - ip.rank)).map((pp => pp.item));
      const Ip = [...cp],
        Sp = pp => {
          let ip = 0;
          for (const cp of Ip) {
            if (ip = pp.indexOf(cp, ip), -1 === ip) return !1;
            ip++
          }
          return !0
        };
      return pp.filter((pp => Sp(pp.lowerLabel) || Sp(pp.lowerName)))
    }

    function Qo(pp, ip) {
      var cp;
      return null !== (cp = null === pp || void 0 === pp ? void 0 : pp[ip]) && void 0 !== cp ? cp : ip
    }

    function Jo(pp, ip) {
      const cp = pp.userInput;
      return void 0 !== ip && "dropdown" === (null === cp || void 0 === cp ? void 0 : cp.type) && cp.dropdownOptions.map(gO.c).includes(ip) ? ip : function(pp) {
        const ip = pp.userInput;
        if ("dropdown" !== (null === ip || void 0 === ip ? void 0 : ip.type) || 0 === ip.dropdownOptions.length) return null;
        const cp = ip.dropdownOptions.map(gO.c);
        return ip.initialValue && cp.includes(ip.initialValue) ? ip.initialValue : cp[cp.length - 1]
      }(pp)
    }

    function Bo(pp) {
      return void 0 === pp ? "" : JSON.stringify(pp)
    }
    const No = (0, Op.createContext)(null);

    function To() {
      return (0, Op.useContext)(No)
    }
    var fo = cp(2779);
    const bo = (0, Op.memo)((function(pp) {
        let {
          name: ip,
          label: cp,
          onPick: Op
        } = pp;
        return (0, Ap.jsxs)("button", {
          type: "button",
          className: "SmpCatalogueTile",
          title: cp,
          onClick: () => {
            Op(ip)
          },
          children: [(0, Ap.jsx)(Yo, {
            item: ip,
            size: "big"
          }), (0, Ap.jsx)("span", {
            children: cp
          })]
        })
      })),
      ho = (0, Op.memo)((function(pp) {
        let {
          items: ip,
          query: cp,
          onPick: op
        } = pp;
        const {
          t: Ip
        } = (0, Sp.H)(), [xp, Lp] = (0, Op.useState)(new Set), Yp = (0, Op.useMemo)((() => function(pp) {
          const ip = new Map;
          for (const cp of pp) {
            let pp = ip.get(cp.category);
            pp || (pp = [], ip.set(cp.category, pp)), pp.push(cp)
          }
          return [...eo, "other"].filter((pp => ip.has(pp))).map((pp => ({
            category: pp,
            items: ip.get(pp)
          })))
        }(ip)), [ip]), Dp = (0, Op.useMemo)((() => Xo(ip, cp).slice(0, 60)), [ip, cp]);
        return cp.trim() ? 0 === Dp.length ? (0, Ap.jsx)(Po, {
          title: Ip("smpShop:noItemsFound", {
            query: cp.trim()
          }),
          children: Ip("smpShop:tryShorterName")
        }) : (0, Ap.jsx)(fo.d, {
          lazyLoadedClassName: "SmpCatalogueGrid",
          observerRoot: "SmpBody",
          rootMargin: Ro,
          observerUpdateDeps: [cp],
          children: Dp.map((pp => (0, Ap.jsx)(bo, {
            name: pp.name,
            label: pp.label,
            onPick: op
          }, pp.name)))
        }) : (0, Ap.jsx)(Ap.Fragment, {
          children: Yp.map((pp => {
            let {
              category: ip,
              items: cp
            } = pp;
            const Op = xp.has(ip) || cp.length <= 48,
              Sp = Op ? cp : cp.slice(0, 48);
            return (0, Ap.jsxs)("section", {
              className: "SmpCatalogueSection",
              children: [(0, Ap.jsxs)("h4", {
                children: [Ip("other" === ip ? "smpShop:otherItems" : `creativeInventory:${ip}`), !Op && (0, Ap.jsx)("button", {
                  type: "button",
                  className: "SmpLink",
                  onClick: () => {
                    Lp(new Set([...xp, ip]))
                  },
                  children: Ip("smpShop:showAll", {
                    count: cp.length
                  })
                })]
              }), (0, Ap.jsx)(fo.d, {
                lazyLoadedClassName: "SmpCatalogueGrid",
                observerRoot: "SmpBody",
                rootMargin: Ro,
                observerUpdateDeps: [Op],
                children: Sp.map((pp => (0, Ap.jsx)(bo, {
                  name: pp.name,
                  label: pp.label,
                  onPick: op
                }, pp.name)))
              })]
            }, ip)
          }))
        })
      }));

    function ao(pp, ip) {
      const {
        searched: cp,
        shown: op,
        searchFor: Ip,
        loading: Sp
      } = function(pp, ip) {
        var cp;
        const op = To(),
          [Ip, Sp] = (0, Op.useState)(void 0),
          xp = (0, Op.useRef)(void 0),
          Lp = (0, Op.useRef)(0),
          Yp = (0, Op.useRef)(void 0),
          Dp = null !== (cp = null === pp || void 0 === pp ? void 0 : pp.meta.item) && void 0 !== cp ? cp : null,
          Ap = !!pp && op.isPending(pp.key);
        (0, Op.useEffect)((() => {
          if (!pp || Ap || !ip || void 0 === Ip || Ip === Dp) return;
          const cp = Ip === xp.current && op.gaveUpAt(pp.key) > Lp.current && Yp.current !== Ip;
          (Ip !== xp.current || cp) && op.act(pp.key, null !== Ip && void 0 !== Ip ? Ip : "*", cp) && (cp && (Yp.current = Ip), xp.current = Ip, Lp.current = Date.now())
        }), [pp, Ap, ip, Ip, Dp, op]);
        const Pp = (0, Op.useCallback)((pp => {
            xp.current = void 0, Yp.current = void 0, Sp(pp)
          }), []),
          Wp = void 0 !== Ip && Ip !== Dp && (Ap || xp.current !== Ip);
        return {
          searched: Dp,
          shown: Wp ? Ip : Dp,
          searchFor: Pp,
          loading: Wp || Ap || null !== Dp && !ip
        }
      }(pp, ip), xp = (0, Op.useMemo)((() => function() {
        var pp;
        let ip = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          cp = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          Op = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const op = `${(0,uo.g)()}\x1f${ip.join("\x1e")}\x1f${cp.join("\x1e")}\x1f${JSON.stringify(Op)}`;
        if ((null === (pp = Eo) || void 0 === pp ? void 0 : pp.key) === op) return Eo.items;
        const Ip = new Set(cp),
          Sp = new Set,
          xp = [],
          Lp = (pp, ip) => {
            var cp;
            if (!pp || Sp.has(pp) || Ip.has(pp)) return;
            Sp.add(pp);
            const op = null !== (cp = Op[pp]) && void 0 !== cp ? cp : pp;
            xp.push({
              name: pp,
              label: op,
              lowerLabel: op.toLowerCase(),
              lowerName: pp.toLowerCase(),
              category: ip
            })
          };
        for (const Dp of (0, to.creativeItemIds)()) {
          var Yp;
          (0, to.itemIsDisabled)(Dp, !0, !0, !1) || (0, to.showOnlyInCreativeSearch)(Dp) || Lp((0, uo.d)(Dp), null !== (Yp = (0, to.creativeCategoryOf)(Dp)) && void 0 !== Yp ? Yp : "other")
        }
        for (const Dp of ip) Lp(Dp, "other");
        return Eo = {
          key: op,
          items: xp
        }, xp
      }(null === pp || void 0 === pp ? void 0 : pp.meta.extra, null === pp || void 0 === pp ? void 0 : pp.meta.excluded, null === pp || void 0 === pp ? void 0 : pp.meta.names)), [null === pp || void 0 === pp ? void 0 : pp.meta.extra, null === pp || void 0 === pp ? void 0 : pp.meta.excluded, null === pp || void 0 === pp ? void 0 : pp.meta.names]), [Lp, Yp] = (0, Op.useState)(""), [Dp, Ap] = (0, Op.useState)(0), [Pp, Wp] = (0, Op.useState)("recent"), yp = (0, Op.useCallback)((pp => {
        Yp(""), Ap((pp => pp + 1)), Ip(pp)
      }), [Ip]), Up = "browse" === Pp || "" !== Lp.trim();
      return {
        searched: cp,
        shown: op,
        searchFor: Ip,
        loading: Sp,
        catalogue: xp,
        names: null === pp || void 0 === pp ? void 0 : pp.meta.names,
        query: Lp,
        setQuery: Yp,
        searchBoxKey: Dp,
        pickItem: yp,
        setView: Wp,
        browsing: Up
      }
    }

    function no(pp) {
      let {
        browser: ip,
        children: cp
      } = pp;
      const {
        t: Op
      } = (0, Sp.H)(), op = To();
      return (0, Ap.jsxs)("div", {
        className: "SmpTopBar",
        children: [(0, Ap.jsx)("div", {
          className: "SmpSearch",
          children: (0, Ap.jsx)(ep.c, {
            className: "SmpSearchInput",
            placeholderText: Op("smpShop:searchPlaceholder"),
            defaultValue: ip.query,
            onValueChange: pp => {
              ip.setQuery(pp), ip.searched && pp.trim() && ip.searchFor(null)
            },
            blurOnEnter: !0,
            onEnter: () => {
              const pp = Xo(ip.catalogue, ip.query)[0];
              pp ? ip.pickItem(pp.name) : ip.query.trim() && op.notify(Op("smpShop:noItemsFound", {
                query: ip.query.trim()
              }))
            }
          }, ip.searchBoxKey)
        }), cp]
      })
    }

    function Fo(pp) {
      let {
        browser: ip,
        recentLabel: cp,
        children: Op
      } = pp;
      const {
        t: op
      } = (0, Sp.H)();
      return (0, Ap.jsxs)("div", {
        className: "SmpViewBar",
        children: [(0, Ap.jsx)(yo, {
          options: [{
            value: "recent",
            label: cp
          }, {
            value: "browse",
            label: op("smpShop:browseItems")
          }],
          value: ip.browsing ? "browse" : "recent",
          onChange: ip.setView,
          ariaLabel: op("smpShop:show")
        }), !ip.browsing && Op]
      })
    }

    function go(pp) {
      let {
        item: ip,
        names: cp,
        summary: Op,
        onBack: op,
        children: Ip
      } = pp;
      const {
        t: xp
      } = (0, Sp.H)();
      return (0, Ap.jsxs)("div", {
        className: "SmpItemHeader",
        children: [(0, Ap.jsx)(Yp.d, {
          className: "SmpBackButton",
          onClick: op,
          children: xp("general:back")
        }), (0, Ap.jsx)(Yo, {
          item: ip,
          size: "big"
        }), (0, Ap.jsxs)("div", {
          className: "SmpItemHeaderText",
          children: [(0, Ap.jsx)("b", {
            children: Qo(cp, ip)
          }), Op && (0, Ap.jsx)("small", {
            children: Op
          })]
        }), Ip]
      })
    }

    function Go(pp) {
      let {
        browser: ip,
        className: cp,
        action: Op,
        above: op,
        list: Sp,
        summary: xp,
        recentLabel: Lp,
        listControls: Yp,
        onBack: Dp
      } = pp;
      return (0, Ap.jsxs)("div", {
        className: Ip()("SmpScreen", cp),
        children: [(0, Ap.jsx)(no, {
          browser: ip,
          children: Op
        }), ip.shown && (0, Ap.jsx)(go, {
          item: ip.shown,
          names: ip.names,
          summary: !ip.loading && xp,
          onBack: () => {
            null === Dp || void 0 === Dp || Dp(), ip.searchFor(null)
          },
          children: Yp
        }), op, ip.shown ? Sp : (0, Ap.jsxs)(Ap.Fragment, {
          children: [(0, Ap.jsx)(Fo, {
            browser: ip,
            recentLabel: Lp,
            children: Yp
          }), ip.browsing ? (0, Ap.jsx)(ho, {
            items: ip.catalogue,
            query: ip.query,
            onPick: ip.pickItem
          }) : Sp]
        })]
      })
    }

    function ro(pp, ip) {
      const cp = pp.map((pp => {
        let {
          meta: ip
        } = pp;
        return ip.pricePerItem
      }));
      return "min" === ip ? Math.min(...cp) : Math.max(...cp)
    }
    var Zo = cp(6724);
    const zo = (0, Op.memo)((function(pp) {
      var ip;
      const {
        t: cp
      } = (0, Sp.H)(), Op = null === pp.seller, op = pp.quantity * pp.pricePerItem;
      return (0, Ap.jsxs)("div", {
        className: pp.grid ? "SmpListingCard" : "SmpRow SmpListingRow",
        children: [(0, Ap.jsx)(Yo, {
          item: pp.item,
          amount: pp.quantity,
          size: pp.grid ? "big" : "normal",
          tier: pp.tier
        }), (0, Ap.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, Ap.jsx)("b", {
            children: (0, Ap.jsx)(zO.e, {
              text: null !== (ip = pp.title) && void 0 !== ip ? ip : `${pp.quantity}x ${pp.item}`
            })
          }), (0, Ap.jsxs)("small", {
            className: "SmpListingFacts",
            children: [(0, Ap.jsx)("span", {
              children: Op ? cp("smpShop:you") : (0, Ap.jsx)(zO.e, {
                text: [{
                  entityName: pp.seller
                }]
              })
            }), (0, Ap.jsx)("span", {
              children: cp("smpShop:timeLeft", {
                time: Mo(pp.expiresAt)
              })
            })]
          })]
        }), (0, Ap.jsxs)("div", {
          className: "SmpRowPrice",
          children: [(0, Ap.jsx)(Do, {
            amount: pp.pricePerItem
          }), (0, Ap.jsx)("small", {
            children: cp("smpShop:each")
          })]
        }), (0, Ap.jsx)(Yp.f, {
          className: "SmpBuyButton",
          disabled: Op || !pp.canAfford && !pp.busy,
          loading: pp.busy,
          onClick: () => {
            pp.onBuy(pp.itemKey)
          },
          children: Op ? cp("smpShop:yours") : (0, Ap.jsx)(Do, {
            amount: op
          })
        })]
      })
    }));

    function so(pp) {
      let {
        view: ip,
        onChange: cp
      } = pp;
      const {
        t: Op
      } = (0, Sp.H)();
      return (0, Ap.jsx)(xo.b, {
        className: "SmpChoice SmpViewToggle",
        ariaLabel: Op("smpShop:layout"),
        options: [{
          value: "list",
          label: (0, Ap.jsx)(xp.d, {
            name: "list"
          }),
          ariaLabel: Op("smpShop:listView")
        }, {
          value: "grid",
          label: (0, Ap.jsx)(xp.d, {
            name: "grid-2"
          }),
          ariaLabel: Op("smpShop:gridView")
        }],
        value: ip,
        onChange: cp
      })
    }

    function Ko(pp) {
      let {
        entries: ip,
        view: cp
      } = pp;
      const {
        t: Op
      } = (0, Sp.H)(), op = To(), Ip = "grid" === cp;
      return (0, Ap.jsxs)(Ap.Fragment, {
        children: [!Ip && (0, Ap.jsxs)("div", {
          className: "SmpColumns",
          "aria-hidden": "true",
          children: [(0, Ap.jsx)("span", {}), (0, Ap.jsx)("span", {
            children: Op("smpShop:columnItem")
          }), (0, Ap.jsx)("span", {
            children: Op("smpShop:columnPriceEach")
          }), (0, Ap.jsx)("span", {
            children: Op("smpShop:columnTotal")
          })]
        }), (0, Ap.jsx)(fo.d, {
          lazyLoadedClassName: Ip ? "SmpCardGrid" : "SmpList",
          observerRoot: "SmpBody",
          rootMargin: Ro,
          observerUpdateDeps: [ip.length],
          children: ip.map((pp => {
            var ip, cp;
            let {
              key: Op,
              item: Sp,
              meta: xp
            } = pp;
            const Lp = xp.quantity * xp.pricePerItem;
            return (0, Ap.jsx)(zo, {
              itemKey: Op,
              item: xp.item,
              title: Sp.customTitle,
              quantity: xp.quantity,
              pricePerItem: xp.pricePerItem,
              seller: xp.seller,
              expiresAt: xp.expiresAt,
              tier: null !== (ip = null === (cp = Sp.enchant) || void 0 === cp ? void 0 : cp.tier) && void 0 !== ip ? ip : null,
              busy: op.isPending(Op) || null !== xp.seller && !1 === Sp.canBuy,
              canAfford: op.canAfford(Sp, Lp),
              grid: Ip,
              onBuy: op.act
            }, Op)
          }))
        }, cp)]
      })
    }
    const Vo = [1, 10, 100],
      pI = [1, 10, 100, 999];

    function iI(pp) {
      var ip, cp, op, Lp, Dp, Pp, Wp, yp, Up, wp;
      const {
        t: vp
      } = (0, Sp.H)(), tp = To(), {
        creator: Hp,
        mode: dp
      } = pp, [jp, kp] = (0, Op.useState)(null !== (ip = null === Hp || void 0 === Hp ? void 0 : Hp.meta.item) && void 0 !== ip ? ip : null), [mp, Rp] = (0, Op.useState)(1), [qp, Mp] = (0, Op.useState)(0), [Cp, Ep] = (0, Op.useState)(""), [Xp, lp] = (0, Op.useState)(0), Qp = (0, Op.useRef)(jp), Jp = (0, Op.useRef)(!1), [Bp, Np] = (0, Op.useState)(!1), Tp = null !== (cp = null === Hp || void 0 === Hp ? void 0 : Hp.meta.item) && void 0 !== cp ? cp : null, fp = null !== (op = null === Hp || void 0 === Hp ? void 0 : Hp.meta.owned) && void 0 !== op ? op : 0;
      (0, Op.useEffect)((() => {
        pp.searching || null === Tp || Tp === Qp.current || (Qp.current = Tp, Jp.current = !1, kp(Tp), Mp(0), Rp("list" === dp ? Math.max(1, fp) : 1))
      }), [Tp, pp.searching]);
      const bp = !!Hp && !!jp && Hp.meta.item === jp,
        hp = bp ? Hp.meta.owned : null !== (Lp = null === (Dp = pp.inventory) || void 0 === Dp || null === (Pp = Dp.find((pp => pp.item === jp))) || void 0 === Pp ? void 0 : Pp.quantity) && void 0 !== Lp ? Lp : 0,
        ap = "list" === dp ? Math.max(1, hp) : 45954,
        np = null !== (Wp = pp.prices[0]) && void 0 !== Wp ? Wp : null,
        Fp = pp.prices.length ? Math.round(pp.prices.reduce(((pp, ip) => pp + ip), 0) / pp.prices.length) : null,
        gp = null === (yp = pp.inventory) || void 0 === yp || null === (Up = yp.find((pp => pp.item === jp))) || void 0 === Up ? void 0 : Up.sellPrice;
      (0, Op.useEffect)((() => {
        var pp;
        bp && (Rp((pp => "list" === dp ? Math.min(Math.max(1, pp), Math.max(1, hp)) : pp)), Jp.current || Mp(null !== (pp = null !== np && void 0 !== np ? np : Fp) && void 0 !== pp ? pp : Math.max(1, null !== gp && void 0 !== gp ? gp : 1)))
      }), [bp, hp, jp, np, Fp]);
      const Gp = pp => {
          Jp.current = !0, Mp(pp)
        },
        rp = ip => {
          var cp, Op, op;
          Qp.current = ip, Jp.current = !1, Np(!1), Ep(""), lp((pp => pp + 1)), kp(ip), Mp(0), Rp("list" === dp && null !== (cp = null === (Op = pp.inventory) || void 0 === Op || null === (op = Op.find((pp => pp.item === ip))) || void 0 === op ? void 0 : op.quantity) && void 0 !== cp ? cp : 1), (null === Hp || void 0 === Hp ? void 0 : Hp.meta.item) !== ip && pp.onPickItem(ip)
        },
        Zp = mp * qp,
        zp = "list" === dp && null !== Hp && void 0 !== Hp && Hp.meta.fee ? function(pp, ip) {
          const cp = Math.max(0, ip - pp.taxFreeAllowance);
          return Math.ceil(Math.round(cp * pp.rate * 1e6) / 1e6)
        }(Hp.meta.fee, Zp) : 0,
        sp = !!Hp && tp.isPending(Hp.key),
        Kp = bp && !pp.searching && mp >= 1 && qp >= 1 && ("order" === dp || hp >= mp) && !sp,
        Vp = !!jp && !bp && !pp.searching && mp >= 1 && qp >= 1,
        ii = () => {
          Kp ? tp.act(Hp.key, `${mp}|${qp}`) : Vp && (pp.onPickItem(jp), Np(!0))
        };
      (0, Op.useEffect)((() => {
        Bp && bp && !pp.searching && (Np(!1), ii())
      }), [Bp, bp, pp.searching]);
      const ci = !!jp && !bp && (pp.searching || Bp),
        Oi = jp ? Qo(pp.names, jp) : "",
        oi = (0, Op.useMemo)((() => Xo(pp.catalogue, Cp).slice(0, 8)), [pp.catalogue, Cp]),
        Ii = ("list" === dp ? Vo.filter((pp => pp < hp)) : pI).map((pp => ({
          value: pp,
          label: String(pp)
        })));
      "list" === dp && hp > 0 && Ii.push({
        value: hp,
        label: vp("smpShop:all", {
          count: hp
        })
      });
      const Si = [];
      return null !== np && (np > 1 && Si.push({
        value: np - 1,
        label: vp("smpShop:undercut", {
          price: So(np - 1)
        })
      }), Si.push({
        value: np,
        label: vp("smpShop:lowest", {
          price: So(np)
        })
      })), null !== Fp && Fp !== np && Si.push({
        value: Fp,
        label: vp("smpShop:average", {
          price: So(Fp)
        })
      }), (0, Ap.jsxs)("div", {
        className: "SmpTradeForm",
        children: [(0, Ap.jsxs)("div", {
          className: "SmpTradeFormHead",
          children: [(0, Ap.jsx)("b", {
            children: vp("list" === dp ? "smpShop:sellOnMarket" : "smpShop:createOrder")
          }), (0, Ap.jsx)("button", {
            type: "button",
            className: "SmpIconButton",
            "aria-label": vp("smpShop:close"),
            onClick: pp.onClose,
            children: (0, Ap.jsx)(xp.d, {
              name: "xmark"
            })
          })]
        }), "list" === dp && (0, Ap.jsx)("div", {
          className: "SmpPicker",
          role: "listbox",
          children: null !== (wp = pp.inventory) && void 0 !== wp && wp.length ? pp.inventory.map((pp => {
            let {
              item: ip,
              quantity: cp
            } = pp;
            return (0, Ap.jsx)("button", {
              type: "button",
              title: ip,
              className: Ip()("SmpPickerSlot", {
                SmpPickerSlotOn: ip === jp
              }),
              onClick: () => {
                rp(ip)
              },
              children: (0, Ap.jsx)(Yo, {
                item: ip,
                amount: cp
              })
            }, ip)
          })) : (0, Ap.jsx)("span", {
            className: "SmpMuted",
            children: vp("smpShop:nothingToList")
          })
        }), ("list" === dp || !jp) && (0, Ap.jsxs)("div", {
          className: "SmpItemSearch",
          children: [(0, Ap.jsx)(ep.c, {
            className: "SmpSearchInput",
            placeholderText: vp("list" === dp ? "smpShop:listSearchPlaceholder" : "smpShop:orderSearchPlaceholder"),
            defaultValue: Cp,
            onValueChange: Ep,
            blurOnEnter: !0,
            onEnter: () => {
              oi[0] && rp(oi[0].name)
            }
          }, Xp), oi.length > 0 && (0, Ap.jsx)("div", {
            className: "SmpPicker",
            children: oi.map((pp => {
              let {
                name: ip
              } = pp;
              return (0, Ap.jsx)("button", {
                type: "button",
                title: ip,
                className: Ip()("SmpPickerSlot", {
                  SmpPickerSlotOn: ip === jp
                }),
                onClick: () => {
                  rp(ip)
                },
                children: (0, Ap.jsx)(Yo, {
                  item: ip
                })
              }, ip)
            }))
          })]
        }), jp && (0, Ap.jsxs)(Ap.Fragment, {
          children: [(0, Ap.jsxs)("div", {
            className: "SmpPickedName",
            children: [Oi, ci && (0, Ap.jsx)(Uo, {})]
          }), (0, Ap.jsxs)("div", {
            className: "SmpFormGrid",
            children: [(0, Ap.jsxs)("div", {
              className: "SmpField",
              children: [(0, Ap.jsxs)("span", {
                children: [vp("smpShop:quantity"), "list" === dp && bp && (0, Ap.jsx)("small", {
                  children: vp("smpShop:youHave", {
                    count: hp
                  })
                })]
              }), (0, Ap.jsx)(wo, {
                value: mp,
                onChange: Rp,
                max: ap,
                label: vp("smpShop:quantity")
              }), (0, Ap.jsx)(yo, {
                options: Ii,
                value: mp,
                onChange: Rp,
                ariaLabel: vp("smpShop:quantity")
              })]
            }), (0, Ap.jsxs)("div", {
              className: "SmpField",
              children: [(0, Ap.jsx)("span", {
                children: vp("smpShop:pricePerItem")
              }), (0, Ap.jsx)(wo, {
                value: Math.max(1, qp),
                onChange: Gp,
                max: 9999999,
                step: vo,
                label: vp("smpShop:pricePerItem")
              }), (0, Ap.jsx)(yo, {
                options: Si,
                value: qp,
                onChange: Gp,
                ariaLabel: vp("smpShop:pricePerItem")
              })]
            })]
          }), "list" === dp && (0, Ap.jsxs)("div", {
            className: "SmpTradeSummary",
            children: [(0, Ap.jsxs)("span", {
              children: [vp("smpShop:youGet"), " ", (0, Ap.jsx)(Do, {
                amount: Math.max(0, Zp - zp),
                exact: !0
              })]
            }), (0, Ap.jsx)("small", {
              children: zp > 0 ? vp("smpShop:listingFee", {
                fee: zp.toLocaleString("en-US")
              }) : vp("smpShop:listingRules")
            })]
          }), (0, Ap.jsx)(Yp.w, {
            className: "SmpSubmit",
            disabled: !Kp && !Vp && !sp,
            loading: sp || ci || bp && pp.searching,
            onClick: ii,
            children: "list" === dp ? vp("smpShop:listButton", {
              count: mp,
              item: Oi
            }) : (0, Ap.jsxs)(Ap.Fragment, {
              children: [vp("smpShop:orderButton", {
                count: mp,
                item: Oi
              }), " ", qp >= 1 && (0, Ap.jsx)(Do, {
                amount: Zp
              })]
            })
          })]
        })]
      })
    }

    function cI() {
      var pp;
      const {
        t: ip
      } = (0, Sp.H)(), cp = To(), op = null === (pp = cp.shopInfo[cp.categoryKey]) || void 0 === pp ? void 0 : pp.items, Ip = mo(op, "search"), xp = mo(op, "creator"), Lp = ko(op, "enchantedCreator"), Dp = ko(op, "listing"), Pp = mo(op, "empty"), Wp = ao(Ip, Dp.length > 0 || null !== Pp), {
        searched: yp,
        shown: Up,
        loading: wp
      } = Wp, [vp, tp] = (0, Op.useState)(!1), [Hp, dp] = function() {
        const [pp, ip] = (0, Zo.d)("smpMarketView", "list");
        return ["grid" === pp ? "grid" : "list", ip]
      }(), ep = "grid" === Hp, jp = (0, Op.useMemo)((() => Dp.filter((pp => {
        let {
          meta: ip
        } = pp;
        return null !== ip.seller && ip.item === yp
      })).map((pp => {
        let {
          meta: ip
        } = pp;
        return ip.pricePerItem
      })).sort(((pp, ip) => pp - ip))), [Dp, yp]), kp = (0, Op.useMemo)((() => {
        const pp = new Set(Wp.catalogue.map((pp => {
          let {
            name: ip
          } = pp;
          return ip
        })));
        return function(pp) {
          for (const ip in pp)
            if ("sell" === pp[ip].smp) return ko(pp[ip].items, "sell").filter((pp => {
              let {
                item: ip
              } = pp;
              return !ip.enchant
            })).map((pp => {
              let {
                meta: ip
              } = pp;
              return {
                item: ip.item,
                quantity: ip.quantity,
                sellPrice: ip.pricePerItem
              }
            }));
          return []
        }(cp.shopInfo).filter((ip => {
          let {
            item: cp
          } = ip;
          return pp.has(cp)
        }))
      }), [cp.shopInfo, Wp.catalogue]);
      return (0, Ap.jsx)(Go, {
        browser: Wp,
        className: "SmpMarketTab",
        recentLabel: ip("smpShop:recentlyListed"),
        action: (0, Ap.jsx)(Yp.w, {
          className: "SmpSellButton",
          onClick: () => {
            tp((pp => !pp))
          },
          children: ip("smpShop:sell")
        }),
        above: vp && (0, Ap.jsxs)(Ap.Fragment, {
          children: [(0, Ap.jsx)(iI, {
            mode: "list",
            creator: xp,
            inventory: kp,
            catalogue: Wp.catalogue,
            names: Wp.names,
            searching: wp,
            prices: jp,
            onPickItem: Wp.searchFor,
            onClose: () => {
              tp(!1)
            }
          }), Lp.length > 0 && (0, Ap.jsx)(OI, {
            entries: Lp
          })]
        }),
        listControls: (0, Ap.jsx)(so, {
          view: Hp,
          onChange: dp
        }),
        summary: Up && (Dp.length > 0 ? ip(1 === Dp.length ? "smpShop:listingSummaryOne" : "smpShop:listingSummary", {
          count: Dp.length,
          price: So(ro(Dp, "min"))
        }) : ip("smpShop:noOneSelling", {
          item: Qo(Wp.names, Up)
        })),
        list: wp ? (0, Ap.jsx)(Ao, {
          grid: ep
        }) : Dp.length > 0 ? (0, Ap.jsx)(Ko, {
          entries: Dp,
          view: Hp
        }) : Pp ? (0, Ap.jsx)(Wo, {
          entry: Pp
        }) : (0, Ap.jsx)(Ao, {
          count: 3,
          grid: ep
        })
      })
    }

    function OI(pp) {
      let {
        entries: ip
      } = pp;
      const {
        t: cp
      } = (0, Sp.H)(), op = To(), [Ip, xp] = (0, Op.useState)({});
      return (0, Ap.jsx)("div", {
        className: "SmpList",
        children: ip.map((pp => {
          var ip, Op, Sp;
          let {
            key: Lp,
            item: Dp,
            meta: Pp
          } = pp;
          const Wp = null !== (ip = Ip[Lp]) && void 0 !== ip ? ip : 1;
          return (0, Ap.jsxs)("div", {
            className: "SmpRow",
            children: [(0, Ap.jsx)(Yo, {
              item: Pp.item,
              amount: Pp.quantity,
              tier: null !== (Op = null === (Sp = Dp.enchant) || void 0 === Sp ? void 0 : Sp.tier) && void 0 !== Op ? Op : null
            }), (0, Ap.jsxs)("div", {
              className: "SmpRowText",
              children: [(0, Ap.jsx)("b", {
                children: (0, Ap.jsx)(zO.e, {
                  text: Dp.customTitle
                })
              }), (0, Ap.jsx)("small", {
                children: cp("smpShop:enchantedListing")
              })]
            }), (0, Ap.jsx)(wo, {
              value: Wp,
              onChange: pp => {
                xp({
                  ...Ip,
                  [Lp]: pp
                })
              },
              max: 9999999,
              step: vo,
              label: cp("smpShop:pricePerItem")
            }), (0, Ap.jsxs)(Yp.w, {
              loading: op.isPending(Lp),
              onClick: () => {
                op.act(Lp, String(Wp))
              },
              children: [cp("smpShop:list"), " ", (0, Ap.jsx)(Do, {
                amount: Wp
              })]
            })]
          }, Lp)
        }))
      })
    }
    const oI = (0, Op.memo)((function(pp) {
      let {
        itemKey: ip,
        item: cp,
        quantity: Op,
        pricePerItem: op,
        tier: Sp,
        selected: xp,
        onSelect: Lp
      } = pp;
      return (0, Ap.jsxs)("button", {
        type: "button",
        className: Ip()("SmpInventorySlot", {
          SmpInventorySlotOn: xp
        }),
        title: cp,
        onClick: () => {
          Lp(ip)
        },
        children: [(0, Ap.jsx)(Yo, {
          item: cp,
          amount: Op,
          tier: Sp
        }), (0, Ap.jsx)(Do, {
          amount: op
        })]
      })
    }));

    function II() {
      var pp;
      const {
        t: ip
      } = (0, Sp.H)(), cp = To(), op = null === (pp = cp.shopInfo[cp.categoryKey]) || void 0 === pp ? void 0 : pp.items, xp = ko(op, "sell"), Lp = mo(op, "empty"), [Yp, Dp] = (0, Op.useState)(null), [Pp, Wp] = (0, Op.useState)({}), yp = xp.find((pp => {
        let {
          key: ip
        } = pp;
        return ip === Yp
      }));
      return 0 === xp.length ? (0, Ap.jsx)("div", {
        className: "SmpScreen",
        children: (0, Ap.jsx)(Po, {
          title: Lp ? (0, Ap.jsx)(zO.e, {
            text: Lp.item.customTitle
          }) : ip("smpShop:nothingToSell"),
          children: Lp && (0, Ap.jsx)(zO.e, {
            text: Lp.item.description
          })
        })
      }) : (0, Ap.jsxs)("div", {
        className: "SmpScreen SmpInstantSellTab",
        children: [(0, Ap.jsx)("div", {
          className: "SmpInventoryGrid",
          children: xp.map((pp => {
            var ip, cp;
            let {
              key: Op,
              item: op,
              meta: Ip
            } = pp;
            return (0, Ap.jsx)(oI, {
              itemKey: Op,
              item: Ip.item,
              quantity: Ip.quantity,
              pricePerItem: Ip.pricePerItem,
              tier: null !== (ip = null === (cp = op.enchant) || void 0 === cp ? void 0 : cp.tier) && void 0 !== ip ? ip : null,
              selected: Op === Yp,
              onSelect: Dp
            }, Op)
          }))
        }), (0, Ap.jsx)("div", {
          className: Ip()("SmpSellBar", {
            SmpSellBarIdle: !yp
          }),
          children: yp ? (0, Ap.jsx)(SI, {
            entry: yp,
            choice: Jo(yp.item, Pp[yp.key]),
            onChoose: pp => {
              Wp({
                ...Pp,
                [yp.key]: pp
              })
            }
          }) : (0, Ap.jsx)("span", {
            className: "SmpMuted",
            children: ip("smpShop:tapToSell")
          })
        })]
      })
    }

    function SI(pp) {
      var ip, cp, Op, op;
      let {
        entry: Ip,
        choice: xp,
        onChoose: Lp
      } = pp;
      const {
        t: Dp
      } = (0, Sp.H)(), Pp = To(), {
        key: Wp,
        item: yp,
        meta: Up
      } = Ip, wp = Co("dropdown" === (null === (ip = yp.userInput) || void 0 === ip ? void 0 : ip.type) ? yp.userInput.dropdownOptions : []), vp = null === xp ? 0 : -(0, gO.b)(yp, xp);
      return (0, Ap.jsxs)(Ap.Fragment, {
        children: [(0, Ap.jsx)(Yo, {
          item: Up.item,
          amount: Up.quantity,
          tier: null !== (cp = null === (Op = yp.enchant) || void 0 === Op ? void 0 : Op.tier) && void 0 !== cp ? cp : null
        }), (0, Ap.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, Ap.jsx)("b", {
            children: (0, Ap.jsx)(zO.e, {
              text: null !== (op = yp.customTitle) && void 0 !== op ? op : Up.item
            })
          }), (0, Ap.jsx)("small", {
            children: Dp("smpShop:sellEach", {
              count: Up.quantity
            })
          })]
        }), (0, Ap.jsx)(yo, {
          options: wp.map((pp => {
            let {
              label: ip,
              quantity: cp,
              isAll: Op
            } = pp;
            return {
              value: ip,
              label: Op ? Dp("smpShop:all", {
                count: cp
              }) : String(cp)
            }
          })),
          value: xp,
          onChange: Lp,
          ariaLabel: Dp("smpShop:quantity")
        }), (0, Ap.jsxs)(Yp.w, {
          loading: Pp.isPending(Wp),
          disabled: null === xp,
          onClick: () => {
            Pp.act(Wp, xp)
          },
          children: [Dp("smpShop:sellButton"), " ", (0, Ap.jsx)(Do, {
            amount: vp
          })]
        })]
      })
    }

    function xI() {
      var pp;
      const {
        t: ip
      } = (0, Sp.H)(), cp = To(), Op = null === (pp = cp.shopInfo[cp.categoryKey]) || void 0 === pp ? void 0 : pp.items, op = ko(Op, "collect"), Ip = ko(Op, "myListing"), xp = (pp, ip) => cp.isPending(pp) || !1 === ip.canBuy;
      return (0, Ap.jsxs)("div", {
        className: "SmpScreen",
        children: [(0, Ap.jsx)("h3", {
          className: "SmpSectionTitle",
          children: ip("smpShop:readyToCollect")
        }), op.length > 0 ? (0, Ap.jsx)("div", {
          className: "SmpList",
          children: op.map((pp => {
            var Op, op;
            let {
              key: Ip,
              item: Sp,
              meta: Lp
            } = pp;
            return (0, Ap.jsxs)("div", {
              className: "SmpRow",
              children: [(0, Ap.jsx)(Yo, {
                item: "sold" === Lp.type ? "Gold Coin" : Lp.item,
                amount: "sold" === Lp.type ? 0 : Lp.quantity,
                tier: null !== (Op = null === (op = Sp.enchant) || void 0 === op ? void 0 : op.tier) && void 0 !== Op ? Op : null
              }), (0, Ap.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, Ap.jsx)("b", {
                  children: (0, Ap.jsx)(zO.e, {
                    text: Sp.customTitle
                  })
                }), (0, Ap.jsx)("small", {
                  children: (0, Ap.jsx)(zO.e, {
                    text: Sp.description
                  })
                })]
              }), (0, Ap.jsx)(Yp.o, {
                loading: xp(Ip, Sp),
                onClick: () => {
                  cp.act(Ip)
                },
                children: ip("smpShop:collect")
              })]
            }, Ip)
          }))
        }) : (0, Ap.jsx)(Po, {
          title: ip("smpShop:nothingToCollect"),
          children: ip("smpShop:nothingToCollectHint")
        }), (0, Ap.jsx)("h3", {
          className: "SmpSectionTitle",
          children: ip("smpShop:activeListings", {
            count: Ip.length
          })
        }), Ip.length > 0 ? (0, Ap.jsx)("div", {
          className: "SmpList",
          children: Ip.map((pp => {
            var Op, op;
            let {
              key: Ip,
              item: Sp,
              meta: Lp
            } = pp;
            return (0, Ap.jsxs)("div", {
              className: "SmpRow",
              children: [(0, Ap.jsx)(Yo, {
                item: Lp.item,
                amount: Lp.quantity,
                tier: null !== (Op = null === (op = Sp.enchant) || void 0 === op ? void 0 : op.tier) && void 0 !== Op ? Op : null
              }), (0, Ap.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, Ap.jsx)("b", {
                  children: (0, Ap.jsx)(zO.e, {
                    text: Sp.customTitle
                  })
                }), (0, Ap.jsx)("small", {
                  children: ip("smpShop:timeLeft", {
                    time: Mo(Lp.expiresAt)
                  })
                })]
              }), (0, Ap.jsxs)("div", {
                className: "SmpRowPrice",
                children: [(0, Ap.jsx)(Do, {
                  amount: Lp.pricePerItem
                }), (0, Ap.jsx)("small", {
                  children: ip("smpShop:each")
                })]
              }), (0, Ap.jsx)(Yp.K, {
                loading: xp(Ip, Sp),
                onClick: () => {
                  cp.act(Ip)
                },
                children: ip("smpShop:cancel")
              })]
            }, Ip)
          }))
        }) : (0, Ap.jsx)(Po, {
          title: ip("smpShop:noActiveListings"),
          children: ip("smpShop:noActiveListingsHint")
        })]
      })
    }

    function LI(pp) {
      let {
        done: ip,
        of: cp
      } = pp;
      return (0, Ap.jsx)("span", {
        className: "SmpProgress",
        children: (0, Ap.jsx)("i", {
          style: {
            width: `${Math.min(100,ip/Math.max(1,cp)*100)}%`
          }
        })
      })
    }

    function YI(pp) {
      var ip, cp, Op;
      let {
        entry: op,
        choice: Ip,
        onChoose: xp
      } = pp;
      const {
        t: Lp
      } = (0, Sp.H)(), Dp = To(), {
        key: Pp,
        item: Wp,
        meta: yp
      } = op, Up = "dropdown" === (null === (ip = Wp.userInput) || void 0 === ip ? void 0 : ip.type) ? Wp.userInput.dropdownOptions : [], wp = !0 === yp.processing, vp = null !== yp.creator && (yp.owned > 0 || wp), tp = vp && yp.owned > 0 ? Co(Up) : [], Hp = null === Ip ? 0 : null !== (cp = null === (Op = tp.find((pp => pp.label === Ip))) || void 0 === Op ? void 0 : Op.quantity) && void 0 !== cp ? cp : 0;
      return (0, Ap.jsxs)("div", {
        className: "SmpRow SmpOrderRow",
        children: [(0, Ap.jsx)(Yo, {
          item: yp.item
        }), (0, Ap.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, Ap.jsx)("b", {
            children: (0, Ap.jsx)(zO.e, {
              text: Wp.customTitle
            })
          }), (0, Ap.jsxs)("small", {
            children: [(0, Ap.jsx)(Do, {
              amount: yp.pricePerItem
            }), " ", Lp("smpShop:each"), " \xb7", " ", null === yp.creator ? Lp("smpShop:you") : (0, Ap.jsx)(zO.e, {
              text: [{
                entityName: yp.creator
              }]
            })]
          }), (0, Ap.jsx)(LI, {
            done: yp.delivered,
            of: yp.wanted
          })]
        }), vp ? (0, Ap.jsxs)(Ap.Fragment, {
          children: [(0, Ap.jsx)(yo, {
            options: tp.map((pp => {
              let {
                label: ip,
                quantity: cp,
                isAll: Op
              } = pp;
              return {
                value: ip,
                label: Op ? Lp("smpShop:max", {
                  count: cp
                }) : String(cp)
              }
            })),
            value: Ip,
            onChange: xp,
            ariaLabel: Lp("smpShop:quantity")
          }), (0, Ap.jsxs)(Yp.w, {
            loading: Dp.isPending(Pp) || wp,
            disabled: null === Ip,
            onClick: () => {
              Dp.act(Pp, Ip)
            },
            children: [Lp("smpShop:deliver"), " ", (0, Ap.jsx)(Do, {
              amount: Hp * yp.pricePerItem
            })]
          })]
        }) : (0, Ap.jsx)("span", {
          className: "SmpMuted SmpRowNote",
          children: null === yp.creator ? Lp("smpShop:yourOrder") : Lp("smpShop:youHave", {
            count: 0
          })
        })]
      })
    }

    function DI() {
      var pp;
      const {
        t: ip
      } = (0, Sp.H)(), cp = To(), op = null === (pp = cp.shopInfo[cp.categoryKey]) || void 0 === pp ? void 0 : pp.items, Ip = mo(op, "search"), xp = mo(op, "creator"), Lp = ko(op, "order"), Dp = mo(op, "empty"), Pp = ao(Ip, Lp.length > 0 || null !== Dp), [Wp, yp] = (0, Op.useState)(!1), [Up, wp] = (0, Op.useState)({});
      return (0, Ap.jsx)(Go, {
        browser: Pp,
        recentLabel: ip("smpShop:recentOrders"),
        action: (0, Ap.jsx)(Yp.w, {
          onClick: () => {
            yp((pp => !pp))
          },
          children: ip("smpShop:createOrder")
        }),
        above: Wp && (0, Ap.jsx)(iI, {
          mode: "order",
          creator: xp,
          catalogue: Pp.catalogue,
          names: Pp.names,
          searching: Pp.loading,
          prices: [],
          onPickItem: Pp.searchFor,
          onClose: () => {
            yp(!1)
          }
        }),
        onBack: () => {
          yp(!1)
        },
        summary: Lp.length > 0 && ip(1 === Lp.length ? "smpShop:orderSummaryOne" : "smpShop:orderSummary", {
          count: Lp.length,
          price: So(ro(Lp, "max"))
        }),
        list: Pp.loading ? (0, Ap.jsx)(Ao, {}) : Lp.length > 0 ? (0, Ap.jsx)(fo.d, {
          lazyLoadedClassName: "SmpList",
          observerRoot: "SmpBody",
          rootMargin: Ro,
          observerUpdateDeps: [Lp.length],
          children: Lp.map((pp => (0, Ap.jsx)(YI, {
            entry: pp,
            choice: Jo(pp.item, Up[pp.key]),
            onChoose: ip => {
              wp({
                ...Up,
                [pp.key]: ip
              })
            }
          }, pp.key)))
        }) : Dp ? (0, Ap.jsx)(Wo, {
          entry: Dp
        }) : (0, Ap.jsx)(Ao, {
          count: 3
        })
      })
    }

    function AI() {
      var pp;
      const {
        t: ip
      } = (0, Sp.H)(), cp = To(), Op = ko(null === (pp = cp.shopInfo[cp.categoryKey]) || void 0 === pp ? void 0 : pp.items, "myOrder");
      return 0 === Op.length ? (0, Ap.jsx)("div", {
        className: "SmpScreen",
        children: (0, Ap.jsx)(Po, {
          title: ip("smpShop:noOrders"),
          children: ip("smpShop:noOrdersHint")
        })
      }) : (0, Ap.jsx)("div", {
        className: "SmpScreen",
        children: (0, Ap.jsx)("div", {
          className: "SmpList",
          children: Op.map((pp => {
            let {
              key: Op,
              item: op,
              meta: Ip
            } = pp;
            const Sp = cp.isPending(Op) || !1 === op.canBuy;
            return (0, Ap.jsxs)("div", {
              className: "SmpRow",
              children: [(0, Ap.jsx)(Yo, {
                item: Ip.item,
                amount: Ip.collectable
              }), (0, Ap.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, Ap.jsx)("b", {
                  children: (0, Ap.jsx)(zO.e, {
                    text: op.customTitle
                  })
                }), (0, Ap.jsxs)("small", {
                  children: [(0, Ap.jsx)(Do, {
                    amount: Ip.pricePerItem
                  }), " ", ip("smpShop:each"), Ip.collectable > 0 && ` \xb7 ${ip("smpShop:readyCount",{count:Ip.collectable})}`]
                }), (0, Ap.jsx)(LI, {
                  done: Ip.delivered,
                  of: Ip.wanted
                })]
              }), Ip.collectable > 0 ? (0, Ap.jsx)(Yp.o, {
                loading: Sp,
                onClick: () => {
                  cp.act(Op)
                },
                children: ip("smpShop:collectCount", {
                  count: Ip.collectable
                })
              }) : (0, Ap.jsx)(Yp.K, {
                loading: Sp,
                onClick: () => {
                  cp.act(Op)
                },
                children: ip("smpShop:cancel")
              })]
            }, Op)
          }))
        })
      })
    }
    const PI = new Set(["search", "creator", "enchantedCreator", "collect", "myOrder", "order"]),
      WI = {
        sell: "coins",
        market: "store",
        collect: "backpack",
        orders: "file-clipboard",
        myOrders: "location-check"
      };

    function yI(pp, ip) {
      let cp = !1;
      const Op = {};
      for (const op in pp) ip(op, pp[op]) ? Op[op] = pp[op] : cp = !0;
      return cp ? Op : pp
    }

    function UI(pp) {
      var ip, cp, op, Lp;
      const {
        show: Yp,
        shopInfo: Dp,
        selectedCategoryKey: Pp
      } = pp, {
        t: Wp
      } = (0, Sp.H)(), yp = null !== Pp && void 0 !== Pp ? Pp : "", Up = jo(Dp, yp), wp = null === (ip = Dp[yp]) || void 0 === ip ? void 0 : ip.items, vp = null !== Up, [tp, Hp] = (0, Op.useState)({}), [dp, ep] = (0, Op.useState)([]), [jp, kp] = (0, Op.useState)(!1), [mp, Rp] = (0, Op.useState)(null), [, qp] = (0, Op.useState)(0), Mp = (0, Op.useRef)(0), Cp = (0, Op.useRef)({}), Ep = (0, Op.useRef)({
        items: wp,
        pending: tp,
        shopInfo: Dp,
        active: vp,
        canAfford: pp.canAfford,
        buy: pp.buy
      });
      Ep.current = {
        items: wp,
        pending: tp,
        shopInfo: Dp,
        active: vp,
        canAfford: pp.canAfford,
        buy: pp.buy
      };
      const Xp = (0, Op.useCallback)((pp => {
        Mp.current++;
        const ip = Mp.current;
        ep((cp => [{
          id: ip,
          text: pp
        }, ...cp].slice(0, 8))), Rp(ip)
      }), []);
      (0, Op.useEffect)((() => {
        if (null === mp) return;
        const pp = setTimeout((() => {
          Rp(null)
        }), 3e3);
        return () => {
          clearTimeout(pp)
        }
      }), [mp]), (0, Op.useEffect)((() => {
        const ip = pp.message;
        if (!ip) return;
        const {
          shopInfo: cp,
          active: Op,
          items: op
        } = Ep.current, Ip = null !== ip.categoryKey ? null !== jo(cp, ip.categoryKey) : Op;
        (Ip || Op) && Xp(ip.text), Ip && Hp((pp => yI(pp, (pp => {
          var ip, cp;
          return !PI.has(null === op || void 0 === op || null === (ip = op[pp]) || void 0 === ip || null === (cp = ip.smp) || void 0 === cp ? void 0 : cp.kind)
        }))))
      }), [pp.message, Xp]), (0, Op.useEffect)((() => {
        Hp((pp => yI(pp, ((pp, ip) => Bo(null === wp || void 0 === wp ? void 0 : wp[pp]) === ip.snapshot))))
      }), [Dp, wp]);
      const lp = Object.keys(tp).length > 0;
      (0, Op.useEffect)((() => {
        if (!lp) return;
        const pp = setInterval((() => {
          qp((pp => pp + 1));
          const pp = Date.now(),
            {
              pending: ip,
              items: cp
            } = Ep.current,
            Op = Object.keys(ip).filter((cp => pp - ip[cp].at >= 12e3));
          if (0 === Op.length) return;
          const op = Op.some((pp => {
            var Op, op;
            return "search" !== (null === cp || void 0 === cp || null === (Op = cp[pp]) || void 0 === Op || null === (op = Op.smp) || void 0 === op ? void 0 : op.kind) || ip[pp].resend
          }));
          for (const Ip of Op) Cp.current[Ip] = pp;
          Hp((pp => yI(pp, (pp => !Op.includes(pp))))), op && Xp(Wp("smpShop:noAnswer"))
        }), 500);
        return () => {
          clearInterval(pp)
        }
      }), [lp]), (0, Op.useEffect)((() => {
        Hp({})
      }), [yp]), (0, Op.useEffect)((() => {
        Yp || kp(!1)
      }), [Yp]);
      const Qp = (0, Op.useCallback)((function(pp, ip) {
          let cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const {
            items: Op,
            pending: op,
            canAfford: Ip,
            buy: Sp
          } = Ep.current, xp = null === Op || void 0 === Op ? void 0 : Op[pp];
          if (!xp || pp in op || !1 === xp.canBuy) return !1;
          if (!Ip(xp, (0, gO.b)(xp, ip))) return !1;
          Sp(pp, xp, ip);
          const Lp = {
            snapshot: Bo(xp),
            at: Date.now(),
            resend: cp
          };
          return Ep.current.pending = {
            ...Ep.current.pending,
            [pp]: Lp
          }, Hp((ip => ({
            ...ip,
            [pp]: Lp
          }))), !0
        }), []),
        Jp = (0, Op.useMemo)((() => ({
          shopInfo: Dp,
          categoryKey: yp,
          canAfford: pp.canAfford,
          isPending: pp => pp in tp,
          gaveUpAt: pp => {
            var ip;
            return null !== (ip = Cp.current[pp]) && void 0 !== ip ? ip : 0
          },
          act: Qp,
          notify: Xp
        })), [Dp, yp, pp.canAfford, tp, Qp, Xp]),
        Bp = Math.min(...Object.values(tp).map((pp => pp.at))),
        Np = lp && Date.now() - Bp > 1500,
        Tp = dp.length > 1,
        fp = null !== (cp = null === (op = Dp[yp]) || void 0 === op ? void 0 : op.customTitle) && void 0 !== cp ? cp : yp,
        bp = null === (Lp = Dp[yp]) || void 0 === Lp ? void 0 : Lp.description;
      let hp = null;
      return "market" === Up ? hp = (0, Ap.jsx)(cI, {}) : "sell" === Up ? hp = (0, Ap.jsx)(II, {}) : "collect" === Up ? hp = (0, Ap.jsx)(xI, {}) : "orders" === Up ? hp = (0, Ap.jsx)(DI, {}) : "myOrders" === Up && (hp = (0, Ap.jsx)(AI, {})), (0, Ap.jsx)(No.Provider, {
        value: Jp,
        children: (0, Ap.jsx)("div", {
          className: "SmpShopHost",
          hidden: !vp,
          children: (0, Ap.jsxs)("div", {
            className: "SmpShop",
            children: [(0, Ap.jsx)("header", {
              className: "SmpHeader",
              children: (0, Ap.jsxs)("div", {
                className: "SmpHeaderTitle",
                children: [(0, Ap.jsxs)("h2", {
                  children: [Up && (0, Ap.jsx)(xp.d, {
                    name: WI[Up]
                  }), Wp(fp)]
                }), bp && (0, Ap.jsx)("p", {
                  children: (0, Ap.jsx)(zO.e, {
                    text: bp
                  })
                })]
              })
            }), (0, Ap.jsx)("main", {
              className: "SmpBody",
              "data-pad-initial-area": !0,
              children: Yp && hp
            }), (0, Ap.jsxs)("button", {
              type: "button",
              className: Ip()("SmpStatus", {
                SmpStatusWaiting: lp,
                SmpStatusFresh: !lp && null !== mp,
                SmpStatusHasHistory: Tp
              }),
              "aria-live": "polite",
              "aria-expanded": Tp ? jp : void 0,
              onClick: () => {
                Tp && kp((pp => !pp))
              },
              children: [lp ? (0, Ap.jsxs)("span", {
                className: "SmpStatusText",
                children: [(0, Ap.jsx)(Uo, {}), Wp(Np ? "smpShop:slowConnection" : "smpShop:waiting")]
              }) : dp[0] ? (0, Ap.jsx)("span", {
                className: "SmpStatusText",
                children: (0, Ap.jsx)(zO.e, {
                  text: dp[0].text
                })
              }, dp[0].id) : (0, Ap.jsx)("span", {
                className: "SmpStatusText SmpMuted",
                children: Wp("smpShop:ready")
              }), Tp && (0, Ap.jsx)("small", {
                children: Wp("smpShop:recentMessages", {
                  count: dp.length
                })
              })]
            }), jp && Tp && (0, Ap.jsx)("div", {
              className: "SmpStatusHistory",
              children: dp.map((pp => (0, Ap.jsx)("div", {
                children: (0, Ap.jsx)(zO.e, {
                  text: pp.text
                })
              }, pp.id)))
            })]
          })
        })
      })
    }
    class wI {
      constructor(pp) {
        this.info = pp
      }
      static fromShopInfo(pp) {
        const ip = {};
        for (const cp in pp) {
          const Op = !0 === pp[cp].redDot && !0 !== pp[cp].forceRemoveRedDot;
          ip[cp] = {
            redDot: Op,
            items: {}
          };
          for (const op in pp[cp].items) {
            const Op = pp[cp].items[op],
              Ip = !0 === Op.redDot && !0 !== Op.forceRemoveRedDot;
            ip[cp].items[op] = {
              redDot: Ip
            }
          }
        }
        return new wI(ip)
      }
      anyCategoryHasRedDots() {
        for (const pp in this.info)
          if (this.categoryHasRedDot(pp)) return !0;
        return !1
      }
      doesCategoryExist(pp) {
        return !(0, Dc.G)(this.info[pp])
      }
      categoryHasRedDot(pp) {
        return !0 === this.info[pp].redDot
      }
      updateCategoryRedDot(pp, ip) {
        this.info[pp].redDot = ip
      }
      doesItemExist(pp, ip) {
        return this.doesCategoryExist(pp) && !(0, Dc.G)(this.info[pp].items[ip])
      }
      itemHasRedDot(pp, ip) {
        return !0 === this.info[pp].items[ip].redDot
      }
      updateItemRedDot(pp, ip, cp) {
        this.info[pp].items[ip].redDot = cp
      }
      shallowCopy() {
        return new wI(this.info)
      }
    }

    function vI(pp, ip) {
      return `${pp}\x1f${ip}`
    }

    function tI(pp, ip) {
      return !(0, Dc.G)(ip) && !(0, Dc.G)(pp) && ip in pp
    }
    const HI = (0, Op.memo)((function(pp) {
      var ip, cp;
      let {
        show: op
      } = pp;
      const Sp = (0, Ni.f)("players", mI),
        xp = (0, Ni.f)("players", RI),
        Dp = (0, co.e)(),
        [Wp, yp] = (0, Op.useState)({
          shopInfo: {},
          userInputsPerItem: {},
          redDotInfo: wI.fromShopInfo({}),
          currencyAmounts: {},
          selectedCategoryKey: null,
          onBoughtInfo: null,
          awaitingPurchase: !1
        }),
        wp = (0, Op.useRef)(""),
        vp = (0, Op.useRef)(null),
        Hp = (0, Op.useRef)(null),
        dp = (0, Op.useRef)(0),
        ep = (0, Op.useRef)(void 0),
        jp = (0, Op.useRef)(null),
        kp = (0, Op.useRef)(Wp),
        Rp = Wp.redDotInfo.anyCategoryHasRedDots(),
        [qp, Cp] = (0, Op.useState)(null),
        Ep = (0, Op.useRef)(!1);
      let Xp = !1,
        lp = 0,
        Qp = 0;
      if (Wp.currencyAmounts) {
        for (const pp in Wp.currencyAmounts) {
          var Jp;
          const ip = Wp.currencyAmounts[pp];
          ip.hidden || (lp++, (null === (Jp = ip.subtext) || void 0 === Jp ? void 0 : Jp.length) > 0 && Qp++)
        }
        Xp = lp + Qp > 4
      }(0, Op.useEffect)((() => {
        Ac.m.GA("showShopIconRedDot", Rp, !0)
      }), [Rp]), (0, Op.useEffect)((() => {
        tp.gameBridge.send("setShopOpen", op), op || (clearTimeout(ep.current), yp((pp => pp.awaitingPurchase ? {
          ...pp,
          awaitingPurchase: !1
        } : pp)))
      }), [op]), (0, Op.useEffect)((() => () => {
        tp.gameBridge.send("setShopOpen", !1), clearTimeout(ep.current)
      }), []), (0, Op.useEffect)((() => {
        kp.current = Wp
      }), [Wp]), (0, Op.useEffect)((() => {
        if (null === qp) return;
        return (0, po.e)("pointerdown", (pp => {
          const ip = pp.target;
          null !== ip && void 0 !== ip && ip.closest(".ShopItem") || Cp(null)
        }))
      }), [qp]);
      const Bp = pp => {
          yp((ip => ({
            ...ip,
            ...pp
          })))
        },
        Np = pp => {
          var ip;
          clearTimeout(null === (ip = Wp.onBoughtInfo) || void 0 === ip ? void 0 : ip.timeout);
          const cp = setTimeout((() => {
            Bp({
              onBoughtInfo: null
            })
          }), 3e3);
          wp.current = pp, Bp({
            onBoughtInfo: {
              text: pp,
              timeout: cp,
              categoryKey: vp.current
            }
          })
        },
        Tp = pp => {
          const {
            shopInfo: ip,
            userInputsPerItem: cp,
            redDotInfo: Op,
            autoSelectCategory: Ip
          } = function(pp, ip, cp, Op, op, Ip) {
            if ((0, Dc.G)(pp) || 0 === Object.keys(pp).length) return {
              shopInfo: {},
              userInputsPerItem: {},
              redDotInfo: wI.fromShopInfo({}),
              autoSelectCategory: null
            };
            const Sp = Mp.siteUsedData[Mp.siteUsed].adConfig.showRewardedAds,
              xp = {};
            let Lp = null;
            for (const wp in pp) {
              const ip = pp[wp],
                cp = {};
              let Op = !1;
              for (const pp in ip.items) {
                const op = ip.items[pp];
                (0, gO.h)(op, Sp) && (cp[pp] = op, Op = !0)
              }
              Op && (xp[wp] = {
                ...ip,
                items: cp
              }, !0 === ip.autoSelectCategory && (Lp = wp))
            }
            const Yp = {},
              Dp = (pp, ip, Op, Sp) => {
                var xp, Lp;
                const Dp = vI(pp, ip),
                  Ap = null !== (xp = cp[Dp]) && void 0 !== xp ? xp : cp[ip];
                if (null !== (Lp = Sp.userInput) && void 0 !== Lp && Lp.type) switch (Sp.userInput.type) {
                  case "dropdown": {
                    var Pp;
                    const pp = !Ap || !Sp.userInput.dropdownOptions.some((pp => (0, gO.c)(pp) === Ap)),
                      ip = Sp.userInput.shouldResetSelectionOnOptionsChange && ("dropdown" !== (null === Op || void 0 === Op || null === (Pp = Op.userInput) || void 0 === Pp ? void 0 : Pp.type) || JSON.stringify(Op.userInput.dropdownOptions) !== JSON.stringify(Sp.userInput.dropdownOptions)),
                      cp = Sp.userInput,
                      op = !(0, Dc.G)(cp.initialValue) && cp.dropdownOptions.some((pp => (0, gO.c)(pp) === cp.initialValue));
                    var Wp;
                    return void(pp || ip ? op ? Yp[Dp] = null !== (Wp = Sp.userInput.initialValue) && void 0 !== Wp ? Wp : null : Sp.userInput.dropdownOptions.length > 0 ? Yp[Dp] = (0, gO.c)(Sp.userInput.dropdownOptions[0]) : Yp[Dp] = null : Yp[Dp] = Ap)
                  }
                  case "text":
                  case "number":
                    var yp, Up, wp;
                    return void((null === Op || void 0 === Op ? void 0 : Op.userInput) !== Sp.userInput ? Yp[Dp] = null !== (yp = null !== (Up = Sp.userInput.initialValue) && void 0 !== Up ? Up : Ap) && void 0 !== yp ? yp : "" : Yp[Dp] = null !== (wp = null !== Ap && void 0 !== Ap ? Ap : Sp.userInput.initialValue) && void 0 !== wp ? wp : "");
                  case "color":
                    var vp, tp, Hp;
                    return void((null === Op || void 0 === Op ? void 0 : Op.userInput) !== Sp.userInput ? Yp[Dp] = null !== (vp = null !== (tp = Sp.userInput.initialValue) && void 0 !== tp ? tp : Ap) && void 0 !== vp ? vp : "#000000" : Yp[Dp] = null !== (Hp = null !== Ap && void 0 !== Ap ? Ap : Sp.userInput.initialValue) && void 0 !== Hp ? Hp : "#000000");
                  case "player": {
                    const pp = (0, gO.g)(op, Ip, Sp.userInput);
                    return void(Ap && pp.includes(Ap) ? Yp[Dp] = Ap : Yp[Dp] = pp.length > 0 ? pp[0] : null)
                  }
                }
              };
            for (const wp in xp)
              for (const pp in xp[wp].items) {
                var Ap;
                const cp = xp[wp].items[pp];
                Dp(wp, pp, null === (Ap = ip[wp]) || void 0 === Ap ? void 0 : Ap.items[pp], cp)
              }
            const Pp = wI.fromShopInfo(xp);
            for (const wp in xp) {
              var Wp;
              if (Op.doesCategoryExist(wp)) {
                (null === (Wp = ip[wp]) || void 0 === Wp ? void 0 : Wp.redDot) === xp[wp].redDot && Pp.updateCategoryRedDot(wp, Op.categoryHasRedDot(wp));
                for (const pp in xp[wp].items) {
                  var yp, Up;
                  Op.doesItemExist(wp, pp) && (null === (yp = ip[wp]) || void 0 === yp || null === (Up = yp.items[pp]) || void 0 === Up ? void 0 : Up.redDot) === xp[wp].items[pp].redDot && Pp.updateItemRedDot(wp, pp, Op.itemHasRedDot(wp, pp))
                }
              }
            }
            return {
              shopInfo: xp,
              userInputsPerItem: Yp,
              redDotInfo: Pp,
              autoSelectCategory: Lp
            }
          }(pp, Wp.shopInfo, Wp.userInputsPerItem, Wp.redDotInfo, Sp, xp), Lp = {
            shopInfo: ip,
            userInputsPerItem: cp,
            redDotInfo: Op
          };
          if (null === Ip || op)
            if (ip[Wp.selectedCategoryKey]) Lp.selectedCategoryKey = Wp.selectedCategoryKey;
            else {
              const pp = oo(ip);
              Lp.selectedCategoryKey = pp.length > 0 ? pp[0] : null
            }
          else Lp.selectedCategoryKey = Ip;
          return 0 === Object.keys(ip).length && op && mp.c.set({
            openEverythingMenuName: null
          }), Lp
        },
        bp = (pp, ip, cp) => {
          const Op = Wp.selectedCategoryKey,
            op = vI(Op, pp),
            Ip = null !== cp && void 0 !== cp ? cp : Wp.userInputsPerItem[op],
            Sp = {
              categoryKey: Op,
              itemKey: pp,
              userInput: Ip
            };
          if (vp.current = Op, ip.isRewardedAd) {
            if (Date.now() - dp.current < 5e3) return;
            (0, ti.Y)((() => {
              var cp, Op, Ip;
              console.log("bought rewarded ad");
              const xp = Sp.categoryKey ? null === (cp = kp.current.shopInfo[Sp.categoryKey]) || void 0 === cp ? void 0 : cp.items[pp] : null;
              if (!xp || !xp.isRewardedAd) return void console.warn("Shop item no longer valid or a rewarded ad, early out");
              (null === (Op = ip.userInput) || void 0 === Op ? void 0 : Op.type) === (null === xp || void 0 === xp || null === (Ip = xp.userInput) || void 0 === Ip ? void 0 : Ip.type) ? (Sp.userInput = kp.current.userInputsPerItem[op], tp.gameBridge.send("buyShopItem", Sp), ip.onBoughtMessage && Np(ip.onBoughtMessage)) : console.warn("Shop item input type changed, early out")
            })), dp.current = Date.now()
          } else {
            tp.gameBridge.send("buyShopItem", Sp), Bp({
              awaitingPurchase: !0
            }), clearTimeout(ep.current), ep.current = setTimeout((() => {
              jp.current = null, Bp({
                awaitingPurchase: !1
              })
            }), 1e3);
            const pp = (0, gO.b)(ip, Ip);
            if (jp.current = null, !isNaN(pp) && tI(Wp.currencyAmounts, ip.currency)) {
              0 !== pp && (jp.current = {
                currency: ip.currency,
                amountBefore: Wp.currencyAmounts[ip.currency].amount
              });
              const cp = {
                ...Wp.currencyAmounts
              };
              cp[ip.currency].amount -= pp, Bp({
                currencyAmounts: cp
              })
            }
            ip.onBoughtMessage && Np(ip.onBoughtMessage)
          }
        },
        hp = (pp, ip) => {
          if (null === ip || !pp.shopInfo[ip]) return pp;
          let cp = pp.redDotInfo;
          return cp.categoryHasRedDot(ip) && (cp.updateCategoryRedDot(ip, !1), cp = cp.shallowCopy()), {
            ...pp,
            selectedCategoryKey: ip,
            redDotInfo: cp
          }
        },
        ap = pp => {
          yp((ip => hp(ip, pp)))
        };
      (0, Gi.f)(io.i, (() => {
        yp((pp => {
          const ip = (0, io.k)(oo(pp.shopInfo), pp.selectedCategoryKey, (ip => (0, io.f)(pp.shopInfo[ip].items)));
          return ip === pp.selectedCategoryKey ? pp : hp(pp, ip)
        }))
      })), (0, Gi.f)("showShopFromServer", (pp => {
        let {
          toggle: ip,
          Dp: cp
        } = pp;
        cp && ap(cp), 0 === Object.keys(Wp.shopInfo).length || ip && op ? mp.c.set({
          openEverythingMenuName: null
        }) : mp.c.set({
          openEverythingMenuName: Hi.n.SHOP
        })
      })), (0, Gi.f)("closeShopOnDamaged", (() => {
        op && mp.c.set({
          openEverythingMenuName: null
        })
      })), (0, Gi.f)("overShopInfo", (pp => {
        Np(pp)
      })), (0, Up.e)("currencyAmounts", (pp => {
        var ip;
        const cp = jp.current;
        cp && (null === pp || void 0 === pp || null === (ip = pp[cp.currency]) || void 0 === ip ? void 0 : ip.amount) === cp.amountBefore ? Bp({
          currencyAmounts: pp
        }) : (jp.current = null, Bp({
          currencyAmounts: pp,
          awaitingPurchase: !1
        }))
      })), (0, Up.e)("shopInfo", (pp => {
        Bp({
          ...Tp(pp),
          awaitingPurchase: !1
        })
      }));
      const np = (0, Op.useRef)({
        playerIds: Sp,
        localPlayerId: xp
      });
      (0, Op.useEffect)((() => {
        np.current.playerIds === Sp && np.current.localPlayerId === xp || (np.current = {
          playerIds: Sp,
          localPlayerId: xp
        }, yp((pp => {
          const ip = Tp(pp.shopInfo);
          return {
            ...pp,
            ...ip
          }
        })))
      }), [Sp, xp]);
      const Fp = Wp.selectedCategoryKey,
        gp = (pp, ip) => {
          var cp, Op;
          return (isNaN(ip) || (0, Dc.G)(pp.currency) || tI(Wp.currencyAmounts, pp.currency) && ip <= Wp.currencyAmounts[pp.currency].amount) && (null === (cp = pp.canBuy) || void 0 === cp || cp) && !(null !== (Op = pp.hidden) && void 0 !== Op && Op)
        },
        Gp = (pp, ip) => {
          var cp, Op, op;
          const Sp = vI(Fp, pp),
            xp = Wp.shopInfo[Fp].items[pp],
            Dp = Wp.userInputsPerItem[Sp],
            Pp = (0, gO.b)(xp, Dp),
            yp = gp(xp, Pp),
            Up = xp.enchant,
            wp = Up ? (0, fp.sb)(null !== (cp = xp.customTitle) && void 0 !== cp ? cp : pp, {
              colour: fp.lb[Up.tier]
            }) : null !== (Op = xp.customTitle) && void 0 !== Op ? Op : pp,
            vp = ip => {
              const cp = null !== ip && void 0 !== ip ? ip : Dp,
                Op = void 0 !== ip ? (0, gO.b)(xp, ip) : Pp;
              gp(xp, Op) && null !== cp && bp(pp, xp, ip);
              let op = Wp.redDotInfo;
              op.itemHasRedDot(Fp, pp) && (op.updateItemRedDot(Fp, pp, !1), op = op.shallowCopy()), Bp({
                redDotInfo: op
              })
            };
          return (0, Ap.jsxs)("div", {
            className: Ip()("ShopItem", {
              ShopItemNoInput: !xp.userInput,
              ShopItemNoInputCanBuy: !xp.userInput && yp,
              ShopItemNoInputSelected: xp.isSelected,
              ShopItemEnchant: !!Up
            }),
            "data-pad-focusable": !xp.userInput || void 0,
            "data-pad-unavailable": !xp.userInput && !yp || void 0,
            "data-pad-repeat": null !== (op = (0, io.c)(xp)) && void 0 !== op ? op : void 0,
            "data-pad-repeat-wait": Wp.awaitingPurchase || void 0,
            onClick: () => {
              if (Up && Ep.current) {
                if (qp !== Sp) return void Cp(Sp);
                Cp(null)
              }
              xp.userInput || vp()
            },
            onPointerDown: pp => {
              Up && (Ep.current = (0, rO.s)(pp))
            },
            onPointerEnter: pp => {
              Up && !(0, rO.s)(pp) && Cp(Sp)
            },
            onPointerLeave: pp => {
              Up && !(0, rO.s)(pp) && Cp((pp => pp === Sp ? null : pp))
            },
            style: {
              zIndex: Object.keys(Wp.shopInfo[Fp].items).length - ip
            },
            children: [Wp.redDotInfo.itemHasRedDot(Fp, pp) && (0, Ap.jsx)(Lp.b, {
              top: "-6px",
              right: "-6px"
            }), xp.badge && (0, Ap.jsx)("div", {
              className: "ShopBadgeContainer",
              children: (0, Ap.jsx)("div", {
                className: Ip()("ShopBadgeMain", xp.badge.type),
                children: (0, Ap.jsx)(zO.e, {
                  text: xp.badge.text
                })
              })
            }), (0, Ap.jsx)("div", {
              className: "ShopItemLeft",
              children: xp.image && (0, Ap.jsx)(dI, {
                item: xp,
                minWidth: 5,
                minHeight: 4.8
              })
            }), (0, Ap.jsxs)("div", {
              className: "ShopItemRight",
              children: [(0, Ap.jsxs)("div", {
                className: "ShopItemHeader",
                children: [(0, Ap.jsx)("div", {
                  className: "ShopItemHeaderTitle",
                  children: (0, Ap.jsx)(zO.e, {
                    text: wp
                  })
                }), (0, Ap.jsx)("div", {
                  className: "ShopItemHeaderDescription",
                  children: (0, Ap.jsx)(zO.e, {
                    text: xp.description
                  })
                })]
              }), xp.userInput && (0, Ap.jsxs)("div", {
                className: "ShopItemInputsContainer",
                onClick: pp => {
                  pp.stopPropagation()
                },
                children: [(0, Ap.jsx)(jI, {
                  item: xp,
                  currInput: Dp,
                  updateInput: ip => {
                    ((pp, ip, cp) => {
                      const Op = vI(pp, ip),
                        op = {
                          ...Wp.userInputsPerItem
                        };
                      op[Op] = cp, Bp({
                        userInputsPerItem: op
                      })
                    })(Fp, pp, ip)
                  },
                  onSubmit: pp => {
                    vp(pp)
                  }
                }), ("dropdown" !== xp.userInput.type || !xp.userInput.autoSubmit) && (0, Ap.jsx)(Yp.f, {
                  className: "ItemCostButton",
                  disabled: !yp && null !== Dp,
                  onClick: () => {
                    vp()
                  },
                  children: (0, Ap.jsx)(uI, {
                    item: xp,
                    cost: Pp,
                    currencyAmounts: Wp.currencyAmounts
                  })
                })]
              })]
            }), !xp.userInput && (0, Ap.jsx)("div", {
              className: "ShopItemNoInputCost",
              children: (0, Ap.jsx)(uI, {
                item: xp,
                cost: Pp,
                currencyAmounts: Wp.currencyAmounts
              })
            }), Up && qp === Sp && (0, Ap.jsxs)("div", {
              className: "ShopItemEnchantInfo SmallTextBold",
              children: [(0, Ap.jsx)(zO.e, {
                text: wp
              }), (0, Ap.jsx)("div", {
                className: "ShopItemEnchantInfoDescription",
                children: (0, Ap.jsx)(zO.e, {
                  text: (0, GO.e)("", Up.enchantments, Up.enchantmentData)
                })
              })]
            })]
          }, Sp)
        },
        rp = function(pp) {
          for (const ip in pp)
            if (pp[ip].smp) return !0;
          return !1
        }(Wp.shopInfo),
        Zp = jo(Wp.shopInfo, Fp);
      return (0, Ap.jsx)(aO.b, {
        className: "Menu ShopBody",
        show: op,
        children: 0 !== Object.keys(Wp.shopInfo).length && (0, Ap.jsxs)(Ap.Fragment, {
          children: [(0, Ap.jsxs)("div", {
            className: "MenuSideBar",
            children: [(0, Ap.jsx)(Pp, {
              items: oo(Wp.shopInfo).map((pp => {
                var ip;
                return {
                  id: pp,
                  title: null !== (ip = Wp.shopInfo[pp].customTitle) && void 0 !== ip ? ip : pp,
                  redDot: Wp.redDotInfo.categoryHasRedDot(pp)
                }
              })),
              link: Dp ? {
                faIcon: "users-gear",
                title: "lobbyManageEntry:manageLobby",
                onClick: () => {
                  (0, Oo.f)({
                    page: (0, Oo.c)(),
                    source: "shop"
                  })
                }
              } : void 0,
              selectedItemId: Fp,
              onClick: ap,
              padStartsOnTab: (0, io.e)(Fp)
            }), (0, Ap.jsx)("div", {
              className: "MenuSideBarFooter",
              children: Wp.currencyAmounts && Object.keys(Wp.currencyAmounts).map((pp => {
                var ip;
                const cp = Wp.currencyAmounts[pp];
                return cp.hidden ? null : (0, Ap.jsxs)("div", {
                  className: "ShopCurrencyDiv " + (Xp ? "SmallText" : ""),
                  children: [(0, Ap.jsxs)("div", {
                    className: "ShopCurrencyDetails",
                    children: [(0, Ap.jsx)("div", {
                      className: "ShopCurrencyAmtIcon",
                      style: {
                        color: cp.iconColour
                      },
                      children: (0, Ap.jsx)(qI, {
                        iconName: cp.icon
                      })
                    }), "\xa0", (0, FO.e)(cp.amount, 6)]
                  }), (null === (ip = cp.subtext) || void 0 === ip ? void 0 : ip.length) > 0 && (0, Ap.jsx)("div", {
                    className: "ShopCurrencySubtext",
                    children: (0, Ap.jsx)(zO.e, {
                      text: cp.subtext
                    })
                  })]
                }, pp)
              }))
            })]
          }), (0, Ap.jsxs)("div", {
            className: "MenuBody ShopMenuBody",
            children: [rp && (0, Ap.jsx)(UI, {
              show: op,
              shopInfo: Wp.shopInfo,
              selectedCategoryKey: Fp,
              buy: (pp, ip, cp) => {
                bp(pp, ip, cp)
              },
              canAfford: gp,
              message: Wp.onBoughtInfo
            }), null === Zp && (0, Ap.jsxs)(Ap.Fragment, {
              children: [(0, Ap.jsx)("div", {
                className: Ip()("ShopOnBoughtInfo", {
                  ShopOnBoughtInfoShow: null !== Wp.onBoughtInfo
                }),
                children: (0, Ap.jsx)(zO.e, {
                  text: wp.current
                })
              }), (0, Ap.jsx)("div", {
                className: "ShopItemsWrapper",
                children: (0, Ap.jsxs)("div", {
                  className: "ShopItemsInner",
                  children: [(null === (ip = Wp.shopInfo[Fp]) || void 0 === ip ? void 0 : ip.description) && (0, Ap.jsx)("div", {
                    className: "ShopCategoryDescription",
                    children: (0, Ap.jsx)(zO.e, {
                      text: Wp.shopInfo[Fp].description
                    })
                  }), op && (0, Ap.jsx)("div", {
                    className: "ShopItems",
                    ref: Hp,
                    "data-pad-initial-area": !0,
                    children: oo(null === (cp = Wp.shopInfo[Fp]) || void 0 === cp ? void 0 : cp.items).map(((pp, ip) => Gp(pp, ip)))
                  })]
                })
              })]
            })]
          })]
        })
      })
    }));

    function dI(pp) {
      let {
        item: ip,
        minWidth: cp,
        minHeight: Op
      } = pp;
      const {
        image: op,
        schematicId: Ip,
        imageColour: Sp
      } = ip;
      if (Ip) return (0, Ap.jsx)("div", {
        className: "ShopSchematic",
        style: {
          width: `${cp}rem`,
          height: `${Op}rem`
        },
        children: (0, Ap.jsx)(sO.b, {
          game: {
            schematicId: Ip
          }
        })
      });
      var Lp, Yp;
      if ((0, ZO.f)(op)) return (0, Ap.jsx)("div", {
        className: "ShopBlock",
        style: {
          minWidth: `${cp}rem`,
          height: "0",
          minHeight: `${Op}rem`
        },
        children: (0, Ap.jsx)(ZO.d, {
          itemName: op,
          amount: null !== (Lp = ip.amount) && void 0 !== Lp ? Lp : 0,
          amountFontSize: Op / 4 + "rem",
          enchantmentTier: null === (Yp = ip.enchant) || void 0 === Yp ? void 0 : Yp.tier
        })
      });
      const Dp = op.slice(-4);
      return ".jpg" === Dp || ".png" === Dp ? (0, Ap.jsx)(eI, {
        image: op,
        minWidth: cp
      }) : (0, Ap.jsx)(xp.d, {
        name: op,
        className: "SelectedItemImage",
        style: {
          color: Sp
        }
      })
    }

    function eI(pp) {
      let {
        image: ip,
        minWidth: cp
      } = pp;
      const {
        gameNameWithVariation: Op
      } = (0, Ni.g)("connectedGame"), op = ip.endsWith(".jpg");
      return (0, Ap.jsx)("img", {
        className: Ip()({
          ShopPixelImage: !op
        }),
        style: {
          width: `${op?1.6*cp:cp}rem`,
          height: "auto",
          fontSize: "1.25rem"
        },
        src: `/textures/games/${(0,fp.Mb)(Op)}/${ip}`,
        alt: ip,
        draggable: !1
      })
    }

    function uI(pp) {
      let {
        item: ip,
        cost: cp,
        currencyAmounts: Op
      } = pp;
      const op = !isNaN(cp) && 0 !== cp && tI(Op, ip.currency);
      let Ip = null;
      return ip.buyButtonText ? Ip = ip.buyButtonText : op ? (Ip = cp, ip.sell && (Ip = -1 * cp), Ip = Ip.toString()) : 0 === cp ? Ip = "Free" : ip.isRewardedAd && (Ip = "Watch ad"), (0, Dc.G)(Ip) || " " === Ip ? null : (0, Ap.jsxs)("div", {
        className: "BuyItemCostAndIcon",
        children: [op && (0, Ap.jsx)("div", {
          style: {
            color: Op[ip.currency].iconColour
          },
          className: "BuyItemIcon",
          children: (0, Ap.jsx)(qI, {
            iconName: Op[ip.currency].icon
          })
        }), (0, Ap.jsx)("div", {
          className: "BuyItemCost",
          children: (0, Ap.jsx)(zO.e, {
            text: Ip
          })
        })]
      })
    }

    function jI(pp) {
      let {
        item: ip,
        currInput: cp,
        updateInput: op,
        onSubmit: Ip
      } = pp;
      const {
        t: xp
      } = (0, Sp.H)(), Lp = (0, Op.useRef)(null);
      if ((0, Op.useEffect)((() => {
          const pp = Lp.current;
          pp && pp.value !== cp && document.activeElement !== pp && (pp.value = null !== cp && void 0 !== cp ? cp : "")
        }), [cp]), !ip.userInput) return null;
      let Yp = ip.userInput;
      if (vp.featureFlags.sanitizeShopInput && "text" === ip.userInput.type && (Yp = {
          type: "number",
          placeholderText: "Numbers Only"
        }), "text" === Yp.type || "number" === Yp.type) {
        var Dp, Pp;
        console.assert(void 0 !== cp, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(ip)}`);
        const pp = "text" === Yp.type && Yp.wordCharsOnly;
        return (0, Ap.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputTextWrapper",
          children: (0, Ap.jsx)(ep.c, {
            className: "ShopItemUserInputText",
            placeholderText: xp(Yp.placeholderText),
            defaultValue: cp,
            domRef: Lp,
            onValueChange: (ip, cp) => {
              !0 === pp && (ip = (0, VO.hb)(ip)), Lp.current.value = ip, op(ip)
            },
            onEnter: Ip,
            type: Yp.type
          }, (null !== (Dp = Yp.initialValue) && void 0 !== Dp ? Dp : "") + (null !== (Pp = Yp.placeholderText) && void 0 !== Pp ? Pp : ""))
        })
      }
      if ("dropdown" === Yp.type) {
        console.assert(void 0 !== cp, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(ip)}`);
        const pp = Yp.autoSubmit;
        return (0, Ap.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputDropdown",
          children: (0, Ap.jsx)(Qi.d, {
            options: Yp.dropdownOptions.map((pp => (0, gO.c)(pp))),
            value: cp,
            onChange: ip => {
              let {
                value: cp
              } = ip;
              op(cp), pp && Ip(cp)
            }
          })
        })
      }
      return "player" === Yp.type ? (0, Ap.jsx)(kI, {
        userInput: Yp,
        currInput: cp,
        updateInput: op
      }) : "color" === Yp.type ? (0, Ap.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputColor",
        children: (0, Ap.jsx)("input", {
          type: "color",
          value: cp,
          onChange: pp => {
            op(pp.target.value)
          }
        })
      }) : null
    }

    function kI(pp) {
      let {
        userInput: ip,
        currInput: cp,
        updateInput: Op
      } = pp;
      const op = (0, Ni.g)("players"),
        Ip = (0, Ni.g)("hiddenPlayerNames"),
        Sp = (0, gO.g)(op.ids, op.localId, ip);
      return (0, Ap.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputDropdown",
        children: (0, Ap.jsx)(Qi.d, {
          options: Sp.map((pp => {
            const {
              name: ip
            } = op.byId[pp];
            return {
              value: pp,
              label: null === ip ? "" : (0, KO.e)(ip, Ip)
            }
          })),
          value: cp,
          onChange: pp => {
            let {
              value: ip
            } = pp;
            Op(ip)
          }
        })
      })
    }

    function mI(pp) {
      let {
        ids: ip
      } = pp;
      return ip
    }

    function RI(pp) {
      let {
        localId: ip
      } = pp;
      return ip
    }

    function qI(pp) {
      let {
        iconName: ip
      } = pp;
      return tp.gameBridge.lookup("isItemName", ip) ? (0, Ap.jsx)(ZO.d, {
        itemName: ip,
        amount: 1
      }) : (0, Ap.jsx)(xp.d, {
        name: ip,
        className: "2x"
      })
    }
    var MI = cp(1650);
    const CI = (0, cp(1432).i)((pp => pp.PadLobbyShortcuts)),
      EI = (0, Op.lazy)((() => Promise.resolve().then((() => cp(4747))).then((pp => ({
        default: pp.Lobbyleaderboard
      }))))),
      XI = (0, Op.lazy)((() => cp.e(223).then((() => cp(41292))).then((pp => ({
        default: pp.LobbyManageView
      })))));

    function lI(pp) {
      let {
        show: ip
      } = pp;
      return ip ? (0, Ap.jsx)(QI, {}) : null
    }

    function QI() {
      const pp = (0, co.e)();
      return (0, Ap.jsxs)(Ap.Fragment, {
        children: [(0, Ap.jsx)(CI, {}), (0, Ap.jsxs)(Op.Suspense, {
          fallback: (0, Ap.jsx)("div", {
            className: "CharacterCustomisationLoading",
            children: (0, Ap.jsx)(jp.c, {})
          }),
          children: [pp && (0, Ap.jsx)(XI, {
            leaderboard: (0, Ap.jsx)(EI, {})
          }), !pp && (0, Ap.jsx)(EI, {})]
        })]
      })
    }
    var JI = cp(1577),
      BI = cp(3118),
      NI = cp(1765),
      TI = cp(3161),
      fI = cp(2762),
      bI = cp(1518),
      hI = cp(1482),
      aI = cp(3098),
      nI = cp(3113),
      FI = cp(2398);
    const gI = "storeRecentGiftRecipients",
      GI = new Map;

    function rI() {
      try {
        const pp = Wc.h.getItem(gI);
        return Array.isArray(pp) ? pp.filter((pp => "string" === typeof(null === pp || void 0 === pp ? void 0 : pp.name) && pp.name.length > 0)).map((pp => ({
          name: pp.name,
          cosmetics: pp.cosmetics && "object" === typeof pp.cosmetics ? pp.cosmetics : null
        }))) : []
      } catch {
        return []
      }
    }

    function ZI(pp) {
      var ip;
      const [cp, op] = (0, Op.useState)(""), [Ip, Sp] = (0, Op.useState)("search"), [xp, Lp] = (0, Op.useState)(null), [Yp, Dp] = (0, Op.useState)(null), Ap = (0, Op.useRef)(null), Pp = (0, Op.useRef)(null);
      (0, Op.useEffect)((() => () => {
        Ap.current && clearTimeout(Ap.current)
      }), []);
      const Wp = null !== (ip = null === xp || void 0 === xp ? void 0 : xp.name) && void 0 !== ip ? ip : null;

      function yp() {
        Ap.current && (clearTimeout(Ap.current), Ap.current = null)
      }(0, Op.useEffect)((() => {
        if (null === Wp || pp === Cp.NULL_USER_CONTEXT) return;
        const ip = Wp.toLowerCase();
        if (ip === pp.getPlayerName().toLowerCase()) return void Dp({
          name: Wp,
          result: {
            giftRecipientFound: !1,
            giftRecipientError: "store:giftRecipientIsYou"
          }
        });
        const cp = GI.get(ip);
        if (cp) return void Dp({
          name: Wp,
          result: cp
        });
        let Op = !1;
        return async function(pp, ip) {
          try {
            const cp = await (0, Cp.postJsonWithMetricsCookiesAndJsonResponse)(`${vi.clientSideServerUrls.indexUrl}/index/store/gift-recipient`, {
              giftRecipientName: ip
            }, {
              retries: 1
            }, pp.getMetricsCookies());
            if ("boolean" !== typeof(null === cp || void 0 === cp ? void 0 : cp.giftRecipientFound)) throw new Error(`Unexpected gift recipient lookup response: ${JSON.stringify(cp)}`);
            return cp
          } catch (cp) {
            return console.error("Failed to look up gift recipient:", cp), {
              giftRecipientFound: !1,
              giftRecipientError: "store:giftRecipientLookupFailed"
            }
          }
        }(pp, Wp).catch((pp => (console.error("Gift recipient lookup failed:", pp), {
          giftRecipientFound: !1,
          giftRecipientError: "store:giftRecipientLookupFailed"
        }))).then((pp => {
          !0 !== pp.giftRecipientFound && "store:giftRecipientLookupFailed" === pp.giftRecipientError || GI.set(ip, pp), Op || Dp({
            name: Wp,
            result: pp
          })
        })), () => {
          Op = !0
        }
      }), [Wp, pp]);
      const Up = (0, Op.useMemo)((() => {
        const pp = cp.trim();
        if (!pp) return {
          status: "none"
        };
        if (!xp || xp.name !== pp || (null === Yp || void 0 === Yp ? void 0 : Yp.name) !== xp.name) return {
          status: "pending",
          name: pp
        };
        const ip = Yp.result;
        return !1 === ip.giftRecipientFound ? {
          status: "error",
          name: xp.name,
          error: ip.giftRecipientError
        } : {
          status: "found",
          name: ip.giftRecipientName,
          ownedPacks: ip.giftRecipientOwnedPacks,
          hasSuperRank: ip.giftRecipientHasSuperRank,
          isSubscriber: ip.giftRecipientIsSubscriber
        }
      }), [cp, xp, Yp]);
      (0, Op.useEffect)((() => {
        "found" === Up.status && "typed" === (null === xp || void 0 === xp ? void 0 : xp.source) && Pp.current !== Up.name && (Pp.current = Up.name, (0, Oi.reportAnalyticsClick)({
          id: "store.gift_recipient",
          value: "typed"
        }))
      }), [Up, xp]);
      const wp = (null === Yp || void 0 === Yp ? void 0 : Yp.name) === (null === xp || void 0 === xp ? void 0 : xp.name) ? null === Yp || void 0 === Yp ? void 0 : Yp.result : null,
        vp = !0 === (null === wp || void 0 === wp ? void 0 : wp.giftRecipientFound) ? wp.giftRecipientCosmetics : null;
      return {
        query: cp,
        via: Ip,
        recipient: Up,
        recipientCosmetics: vp,
        type: function(pp) {
          op(pp), Sp("search"), yp();
          const ip = pp.trim();
          ip ? Ap.current = setTimeout((() => {
            Lp({
              name: ip,
              source: "typed"
            })
          }), 400) : Lp(null)
        },
        choose: function(pp, ip) {
          yp(), op(pp), Sp("typed" === ip ? "search" : "prefilled" === ip ? "prefilled" : "suggestion"), Lp({
            name: pp,
            source: ip
          }), "typed" !== ip && "prefilled" !== ip && (0, Oi.reportAnalyticsClick)({
            id: "store.gift_recipient",
            value: ip
          })
        },
        clear: function() {
          yp(), op(""), Sp("search"), Lp(null)
        },
        recordGift: function(pp, ip) {
          ! function(pp) {
            GI.delete(pp.toLowerCase())
          }(pp), Dp((cp => {
            if (!cp || cp.name.toLowerCase() !== pp.toLowerCase() || !0 !== cp.result.giftRecipientFound || "superRank" === ip) return cp;
            const Op = cp.result.giftRecipientOwnedPacks;
            return {
              ...cp,
              result: {
                ...cp.result,
                giftRecipientOwnedPacks: Op.includes(ip) ? Op : [...Op, ip]
              }
            }
          }))
        }
      }
    }
    var zI = cp(2389),
      sI = cp(4754),
      KI = cp(249),
      VI = cp(3211);
    const pS = ["pointerdown", "pointermove", "keydown", "wheel", "touchstart", "scroll", "blur", "focus"];
    var iS = cp(2334),
      cS = cp(620),
      OS = cp(2429),
      oS = cp(2671);

    function IS(pp) {
      let {
        cosmetics: ip
      } = pp;
      return (0, Ap.jsx)("span", {
        className: "StoreRecipientAvatar",
        children: (0, Ap.jsx)(OS.c, {
          cosmetics: ip
        })
      })
    }

    function SS(pp, ip) {
      var cp, Op;
      const op = null !== (cp = pp.friend) && void 0 !== cp ? cp : {
        isError: !1,
        name: pp.name,
        ranks: [],
        cosmetics: null !== (Op = pp.cosmetics) && void 0 !== Op ? Op : {},
        nameColour: cS.b,
        location: {
          status: "noGamePlayed"
        }
      };
      return ip ? {
        ...op,
        cosmetics: ip
      } : op
    }

    function xS(pp) {
      let {
        pending: ip
      } = pp;
      return (0, Ap.jsx)("span", {
        className: "StoreRecipientLoader",
        children: ip && (0, Ap.jsx)(jp.c, {})
      })
    }

    function LS(pp) {
      var ip;
      let {
        selfName: cp,
        giftRecipient: op,
        suggestionsVersion: Lp,
        pulseSignal: Dp,
        disabled: Pp
      } = pp;
      const {
        t: Wp
      } = (0, Sp.H)(), yp = (0, Fp.o)(), Up = (0, Op.useRef)(null), wp = (0, Op.useRef)(null), {
        query: tp,
        via: Hp,
        recipient: dp,
        recipientCosmetics: jp
      } = op, kp = (0, FI.k)(tp), mp = (0, Op.useMemo)((() => {
        const pp = vp.featureFlags.useSocialFeatures ? yp.friends.filter((pp => !pp.isError)) : [];
        return (0, FI.f)({
          onlineFriends: (0, Fp.h)(pp),
          recentRecipients: rI(),
          friends: pp,
          selfName: cp,
          max: 8
        })
      }), [yp.friends, cp, Lp]), Rp = tp.trim().toLowerCase(), qp = "search" !== Hp && Rp ? mp.find((pp => pp.name.toLowerCase() === Rp)) : void 0, Mp = qp && "prefilled" === Hp ? [qp, ...mp.filter((pp => pp !== qp))] : mp, Cp = "" !== Rp && !qp, Ep = Cp ? tp : "", Xp = Mp.length > 0;
      (0, Op.useEffect)((() => {
        Up.current && Up.current.value !== Ep && (Up.current.value = Ep)
      }), [Ep]), (0, Op.useEffect)((() => {
        Up.current && (Up.current.disabled = Pp)
      }), [Pp, Dp]);
      const lp = (0, Op.useRef)(0);

      function Jp() {
        "self" !== kp && (0, Oi.reportAnalyticsClick)({
          id: "store.mode",
          value: "self"
        }), op.clear()
      }

      function Bp(pp) {
        var ip, cp;
        if (Pp) return;
        if (" " === pp.key || "Enter" === pp.key) return pp.preventDefault(), void pp.currentTarget.click();
        const Op = Array.from(null !== (ip = null === (cp = wp.current) || void 0 === cp ? void 0 : cp.querySelectorAll("[role=radio]")) && void 0 !== ip ? ip : []),
          op = Op.indexOf(pp.currentTarget);
        let Ip;
        "ArrowRight" === pp.key || "ArrowDown" === pp.key ? Ip = Op[(op + 1) % Op.length] : "ArrowLeft" === pp.key || "ArrowUp" === pp.key ? Ip = Op[(op - 1 + Op.length) % Op.length] : "Home" === pp.key ? Ip = Op[0] : "End" === pp.key && (Ip = Op[Op.length - 1]), Ip && (pp.preventDefault(), Ip.focus(), Ip.click())
      }(0, Op.useEffect)((() => {
        var pp;
        Dp > lp.current && !Pp && (lp.current = Dp, null === (pp = Up.current) || void 0 === pp || pp.focus())
      }), [Dp, Pp]);
      const Np = "self" === kp,
        Tp = null !== (ip = null === qp || void 0 === qp ? void 0 : qp.name) && void 0 !== ip ? ip : null,
        fp = "error" === dp.status ? dp.error : null,
        bp = "store:giftRecipientLookupFailed" === fp;
      return (0, Ap.jsxs)("div", {
        className: Ip()("StoreRecipientStrip", {
          StoreRecipientStripDisabled: Pp,
          StoreRecipientStripNoChips: !Xp
        }),
        children: [(0, Ap.jsx)("span", {
          className: "StoreRecipientLabel",
          "aria-hidden": !0,
          children: Wp("store:buyingFor")
        }), (0, Ap.jsxs)("div", {
          ref: wp,
          className: "StoreRecipientRadios",
          role: "radiogroup",
          "aria-label": Wp("store:whoIsItFor"),
          children: [(0, Ap.jsxs)("div", {
            role: "radio",
            "data-pad-focusable": !0,
            "aria-checked": Np,
            tabIndex: Pp || !Np && null !== Tp ? -1 : 0,
            className: Ip()("StoreRecipientMe", {
              StoreRecipientChecked: Np
            }),
            onClick: () => {
              Pp || Jp()
            },
            onKeyDown: Bp,
            children: [(0, Ap.jsx)(xp.d, {
              name: "user"
            }), " ", Wp("store:me")]
          }), Xp && (0, Ap.jsx)("div", {
            className: "StoreRecipientChips",
            children: Mp.map((pp => {
              const ip = pp === qp;
              return (0, Ap.jsx)("div", {
                role: "radio",
                "data-pad-focusable": !0,
                "aria-checked": ip,
                tabIndex: !Pp && ip ? 0 : -1,
                title: pp.name,
                className: Ip()("StoreRecipientChip", {
                  StoreRecipientChecked: ip
                }),
                onClick: () => {
                  Pp || function(pp) {
                    "gift" !== kp && (0, Oi.reportAnalyticsClick)({
                      id: "store.mode",
                      value: "gift"
                    }), op.choose(pp.name, pp.kind)
                  }(pp)
                },
                onKeyDown: Bp,
                children: (0, Ap.jsx)(oS.d, {
                  playerSocialPreview: SS(pp, ip ? jp : null),
                  opensProfileCard: !1,
                  isFriend: null !== pp.friend,
                  hideFriendBadge: !0,
                  showLocation: null !== pp.friend,
                  status: null === pp.friend ? null : void 0,
                  trailing: ip ? (0, Ap.jsx)(xS, {
                    pending: "pending" === dp.status
                  }) : void 0
                })
              }, pp.name)
            }))
          })]
        }), (0, Ap.jsxs)("div", {
          className: Ip()("StoreRecipientSearch", {
            StoreRecipientChecked: Cp,
            StoreRecipientSearchPulse: Dp > 0 && !Cp,
            StoreRecipientSearchError: null !== fp && !bp
          }),
          onClick: () => {
            var pp;
            null === (pp = Up.current) || void 0 === pp || pp.focus()
          },
          children: [Cp && "found" === dp.status && jp && (0, Ap.jsx)(IS, {
            cosmetics: jp
          }), !(Cp && "found" === dp.status && jp) && (0, Ap.jsx)(xp.d, {
            name: "magnifying-glass",
            className: "StoreRecipientSearchIcon"
          }), (0, Ap.jsx)(ep.c, {
            className: "StoreRecipientSearchInput",
            domRef: Up,
            placeholderText: Wp("store:searchName"),
            defaultValue: Ep,
            maxLength: Qp.i,
            onValueChange: function(pp) {
              "gift" !== kp && pp.trim() && (0, Oi.reportAnalyticsClick)({
                id: "store.mode",
                value: "gift"
              }), op.type(pp)
            },
            onEnter: () => {
              var pp;
              const ip = null === (pp = Up.current) || void 0 === pp ? void 0 : pp.value.trim();
              ip && op.choose(ip, "typed")
            },
            blurOnEnter: !0
          }), Cp && (0, Ap.jsx)(xS, {
            pending: "pending" === dp.status
          }), Cp && (0, Ap.jsx)("div", {
            ...(0, Yp.bb)({
              disabled: Pp
            }),
            "aria-label": Wp("store:clearRecipient"),
            title: Wp("store:clearRecipient"),
            className: "StoreRecipientClear",
            onClick: pp => {
              pp.stopPropagation(), Pp || Jp()
            },
            children: (0, Ap.jsx)(xp.d, {
              name: "xmark"
            })
          })]
        }, Dp), fp && (0, Ap.jsx)("div", {
          className: Ip()("StoreRecipientPopover", {
            StoreRecipientPopoverSoft: bp
          }),
          role: "status",
          children: Wp(fp)
        })]
      })
    }
    var YS = cp(2382),
      DS = cp(2301),
      AS = cp(3672),
      PS = cp(3215),
      WS = cp(2343);
    const yS = cp.p + "static/media/superRankPreviewPoster.e64783181b692cc31e08.webp";

    function US() {
      (0, WS.f)(yS, {
        lowPriority: !1
      })
    }

    function wS(pp) {
      let {
        onBack: ip,
        cta: cp,
        recipient: op,
        afterCta: Ip
      } = pp;
      const {
        t: Lp
      } = (0, Sp.H)(), [Dp, Pp] = (0, Op.useState)("starting"), Wp = (0, Op.useRef)(null), yp = (0, zi.b)(), Up = (0, Op.useRef)(null), wp = (0, Op.useCallback)((() => {
        const pp = Wp.current;
        null !== pp.error && pp.load();
        const ip = pp.play();
        Up.current = ip, ip.catch((pp => {
          (0, AS.c)("Failed to play Super Rank video", pp), yp.current && Up.current === ip && Pp("failed")
        }))
      }), [yp]);
      return (0, Op.useEffect)((() => {
        const pp = Wp.current;
        let ip;

        function cp() {
          clearTimeout(ip), ip = setTimeout(wp, 3e3)
        }
        return wp(), pp.addEventListener("ended", cp), () => {
          clearTimeout(ip), pp.removeEventListener("ended", cp)
        }
      }), [wp]), (0, Ap.jsxs)("div", {
        className: "StoreSuperRankDetail",
        children: [(0, Ap.jsxs)("div", {
          className: "StoreDetailHeader",
          children: [(0, Ap.jsx)(Yp.d, {
            className: "StoreDetailBackButton",
            onClick: ip,
            padBack: !0,
            children: Lp("general:back")
          }), (0, Ap.jsxs)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: [(0, Ap.jsx)(xp.d, {
              name: "bolt"
            }), " ", Lp("homePage:superRank")]
          }), op]
        }), (0, Ap.jsxs)("div", {
          className: "StoreSuperRankDetailBody",
          children: [(0, Ap.jsxs)("div", {
            className: "StoreSuperRankVideo",
            children: [(0, Ap.jsx)("video", {
              ref: Wp,
              src: `${vi.clientSideServerUrls.staticUrl}/videos/SuperRankPreview.mp4`,
              poster: yS,
              muted: !0,
              playsInline: !0,
              controls: "playing" === Dp,
              onPlaying: () => {
                Pp("playing")
              },
              onError: () => {
                Pp("failed")
              }
            }), ("failed" === Dp || "loading" === Dp) && (0, Ap.jsx)("div", {
              className: "StoreSuperRankPlay",
              children: (0, Ap.jsx)(Yp.f, {
                ariaLabel: Lp("general:play"),
                loading: "loading" === Dp,
                onClick: () => {
                  Pp("loading"), wp()
                },
                touchPressOn: "pointerup",
                children: (0, Ap.jsx)(xp.d, {
                  name: "play"
                })
              })
            })]
          }), (0, Ap.jsxs)("div", {
            className: "StoreSuperRankDetailSide",
            children: [(0, Ap.jsx)("div", {
              className: "StoreSuperRankDetailTable",
              children: (0, Ap.jsx)(PS.b, {})
            }), (0, Ap.jsxs)("div", {
              className: "StoreTileActions",
              children: [cp, Ip]
            })]
          })]
        })]
      })
    }
    var vS = cp(2690),
      tS = cp(3635),
      HS = cp(3195),
      dS = cp(3203);
    const eS = [cS.r.yellow, cS.r.green, cS.r.aqua, cS.r.blue, cS.r.purple, cS.r.red];

    function uS(pp) {
      return "needsRecipient" === pp || "lookingUp" === pp || "gift" === pp || "recipientOwns" === pp || "recipientSharesOwned" === pp || "recipientSubscribed" === pp
    }

    function jS(pp) {
      const {
        onKeyDown: ip,
        ...cp
      } = (0, Yp.bb)();
      return {
        ...cp,
        "aria-label": pp,
        onKeyDown: pp => {
          pp.target === pp.currentTarget && (null === ip || void 0 === ip || ip(pp))
        }
      }
    }

    function kS(pp) {
      let {
        text: ip
      } = pp;
      return (0, Ap.jsx)("span", {
        className: "StoreRainbowText",
        children: Array.from(ip).map(((pp, ip) => (0, Ap.jsx)("span", {
          style: {
            color: eS[ip % eS.length]
          },
          children: pp
        }, ip)))
      })
    }
    const mS = {
      recipientOwns: "store:alreadyOwns",
      sharesOwned: "store:sharesOwned",
      recipientSharesOwned: "store:recipientSharesOwned",
      subscribed: "store:subscribed",
      recipientSubscribed: "store:recipientSubscribed"
    };

    function RS(pp) {
      let {
        state: ip,
        item: cp,
        price: Op,
        busy: op,
        highlight: Lp = !1,
        onAct: Dp,
        onNeedRecipient: Pp,
        onLogin: Wp
      } = pp;
      const {
        t: yp
      } = (0, Sp.H)(), Up = "superRank" === cp ? Bp.h.product.days : null, wp = pp => null === Up ? yp(pp ? "general:gift" : "general:buy") : yp(pp ? "store:giftDays" : "store:buyDays", {
        days: Up
      }), vp = (pp, ip) => {
        const cp = (0, Ap.jsxs)(Ap.Fragment, {
          children: [null === pp && (0, Ap.jsx)("span", {
            className: "StoreCtaLabel StoreCtaLabelPending"
          }), null !== pp && (0, Ap.jsx)("span", {
            className: "StoreCtaLabel",
            title: pp,
            children: pp
          })]
        });
        return null !== Up ? (0, Ap.jsxs)(Ap.Fragment, {
          children: [ip && (0, Ap.jsx)("span", {
            className: "StoreCtaIcon",
            children: ip
          }), cp, (0, Ap.jsxs)("span", {
            className: "StoreCtaPrice",
            children: ["\xb7", (0, Ap.jsx)(DS.b, {
              amount: Op
            })]
          })]
        }) : (0, Ap.jsxs)(Ap.Fragment, {
          children: [(0, Ap.jsxs)("span", {
            className: "StoreCtaLead",
            children: [cp, "\xb7"]
          }), (0, Ap.jsxs)("span", {
            className: "StoreCtaPrice",
            children: [ip, (0, Ap.jsx)(DS.b, {
              amount: Op
            })]
          })]
        })
      };
      let tp;
      switch (ip) {
        case "pending":
          tp = (0, Ap.jsx)(Yp.o, {
            className: "StoreCtaButton",
            disabled: !0,
            children: vp(null)
          });
          break;
        case "login":
          tp = (0, Ap.jsx)(Yp.o, {
            className: "StoreCtaButton",
            onClick: Wp,
            children: vp(wp(!1))
          });
          break;
        case "owned":
          tp = (0, Ap.jsx)(Yp.j, {
            className: "StoreCtaButton",
            onClick: () => {
              mp.c.set({
                openEverythingMenuName: Hi.n.CUSTOMISATION
              })
            },
            children: (0, Ap.jsxs)("span", {
              className: "StoreCtaLabel",
              children: [(0, Ap.jsx)(xp.d, {
                name: "shirt"
              }), " ", yp("store:equip")]
            })
          });
          break;
        case "recipientOwns":
        case "sharesOwned":
        case "recipientSharesOwned":
        case "subscribed":
        case "recipientSubscribed":
          tp = (0, Ap.jsx)(Yp.o, {
            className: "StoreCtaButton",
            disabled: !0,
            children: (0, Ap.jsx)("span", {
              className: "StoreCtaLabel",
              children: yp(mS[ip])
            })
          });
          break;
        case "needsRecipient":
        case "lookingUp":
        case "gift":
          tp = (0, Ap.jsx)(Yp.o, {
            className: "StoreCtaButton",
            disabled: "needsRecipient" === ip || null === Op,
            loading: "lookingUp" === ip || op,
            onClick: Dp,
            analyticsClick: {
              id: "store.gift",
              value: cp
            },
            children: vp(wp(!0), FI.d)
          });
          break;
        case "buy":
        case "recharge":
          tp = (0, Ap.jsx)(Yp.o, {
            className: "StoreCtaButton",
            loading: op,
            disabled: null === Op,
            onClick: Dp,
            analyticsClick: {
              id: "store.buy",
              value: cp
            },
            children: vp(wp(!1))
          })
      }
      return (0, Ap.jsx)("div", {
        className: Ip()("StoreCta", {
          StoreCtaHighlight: Lp,
          StoreCtaLabelFirst: null !== Up
        }),
        onClick: pp => {
          pp.stopPropagation(), "needsRecipient" === ip && Pp()
        },
        children: tp
      })
    }

    function qS() {
      const {
        t: pp
      } = (0, Sp.H)();
      return (0, Ap.jsxs)("ul", {
        className: "StorePerks",
        children: [(0, Ap.jsxs)("li", {
          children: [(0, Ap.jsx)(xp.d, {
            name: "check"
          }), (0, Ap.jsx)(kS, {
            text: pp("store:colourfulNames")
          })]
        }), (0, Ap.jsxs)("li", {
          children: [(0, Ap.jsx)(xp.d, {
            name: "check"
          }), pp("store:perkCapes")]
        }), (0, Ap.jsxs)("li", {
          children: [(0, Ap.jsx)(xp.d, {
            name: "check"
          }), pp("store:perkNoAdverts")]
        }), (0, Ap.jsxs)("li", {
          children: [(0, Ap.jsx)(xp.d, {
            name: "check"
          }), pp("store:perkFriends", {
            count: (0, ii.b)(["super"])
          })]
        })]
      })
    }

    function MS(pp) {
      let {
        daysLeft: ip,
        totalDays: cp,
        urgent: Op
      } = pp;
      const {
        t: op
      } = (0, Sp.H)(), xp = cp > 0 ? Math.min(1, Math.max(.03, ip / cp)) : 1;
      return (0, Ap.jsxs)("div", {
        className: Ip()("StoreSuperRankMeterArea", {
          StoreSuperRankMeterUrgent: Op
        }),
        children: [(0, Ap.jsx)("span", {
          className: "StoreSuperRankDaysLeft",
          children: 1 === ip ? op("store:oneDayLeft") : op("store:daysLeft", {
            days: ip
          })
        }), (0, Ap.jsx)("div", {
          className: "StoreSuperRankMeter",
          children: (0, Ap.jsx)("i", {
            style: {
              width: 100 * xp + "%"
            }
          })
        })]
      })
    }

    function CS(pp) {
      var ip;
      let {
        state: cp,
        urgent: Op,
        daysLeft: op,
        totalDays: Lp,
        recipientHasSuperRank: Yp,
        busy: Dp,
        highlight: Pp,
        onOpen: Wp,
        onAct: yp,
        onNeedRecipient: Up,
        onLogin: wp
      } = pp;
      const {
        t: vp
      } = (0, Sp.H)(), tp = uS(cp), {
        days: Hp
      } = Bp.h.product, dp = vp("store:recipientHasSuperRank", {
        giftDays: Hp
      }), ep = null === (ip = Kp("subscribed" === cp)) || void 0 === ip ? void 0 : ip.text;
      return (0, Ap.jsxs)("div", {
        className: Ip()("StoreTile StoreSuperRankTile", {
          StoreTileGift: tp,
          StoreSuperRankTileUrgent: "recharge" === cp && Op,
          StoreSuperRankTileWithChip: Yp,
          StoreSuperRankTileGiftReady: "gift" === cp
        }),
        ...jS(vp("homePage:superRank")),
        "data-store-item": "superRank",
        onPointerEnter: US,
        onFocus: US,
        onClick: Wp,
        children: [(0, Ap.jsx)("div", {
          className: "StoreSuperRankArt",
          style: {
            backgroundImage: `url(${iS.d})`
          }
        }), tp && (0, Ap.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, Ap.jsxs)("div", {
          className: "StoreTileContent",
          children: [Yp && (0, Ap.jsx)("span", {
            className: "StoreChip StoreChipGift",
            title: dp,
            children: dp
          }), (0, Ap.jsxs)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: [(0, Ap.jsx)(xp.d, {
              name: "bolt"
            }), " ", vp("homePage:superRank")]
          }), tp && (0, Ap.jsx)("div", {
            className: "StoreTilePitch",
            children: vp("store:giftPitch", {
              days: Hp
            })
          }), "recharge" === cp && (0, Ap.jsx)(MS, {
            daysLeft: op,
            totalDays: Lp,
            urgent: Op
          }), ep && (0, Ap.jsx)("div", {
            className: "StoreSuperRankMeterArea",
            children: (0, Ap.jsx)("span", {
              className: "StoreSuperRankDaysLeft",
              children: ep
            })
          }), (0, Ap.jsx)(qS, {}), (0, Ap.jsxs)("div", {
            className: "StoreTileActions",
            children: [(0, Ap.jsx)(RS, {
              state: cp,
              item: "superRank",
              price: Bp.h.price,
              busy: Dp,
              highlight: Pp,
              onAct: yp,
              onNeedRecipient: Up,
              onLogin: wp
            }), "needsRecipient" === cp && (0, Ap.jsx)("span", {
              className: "StoreTileNote StoreTileNoteGift",
              children: vp("store:pickRecipientFirst")
            }), "recharge" === cp && Op && (0, Ap.jsx)("span", {
              className: "StoreTileNote StoreSuperRankEnding",
              children: 1 === op ? vp("store:endsInOneDay") : vp("store:endsInDays", {
                days: op
              })
            })]
          })]
        })]
      })
    }
    const ES = {
      common: "StorePackTileCommon",
      rare: "StorePackTileRare",
      epic: "StorePackTileEpic",
      legendary: "StorePackTileLegendary",
      mythic: "StorePackTileMythic"
    };

    function XS(pp) {
      var ip;
      let {
        pack: cp,
        state: op,
        busy: Lp,
        onOpen: Yp,
        onAct: Dp,
        onNeedRecipient: Pp,
        onLogin: Wp
      } = pp;
      const {
        t: yp
      } = (0, Sp.H)(), Up = JI.e[cp], wp = aI.i[cp], vp = (0, iS.j)(cp), tp = (0, Op.useRef)(null);
      (0, HS.j)(cp, tp);
      const Hp = uS(op),
        dp = null !== (ip = Up.displayName) && void 0 !== ip ? ip : cp,
        ep = (0, tS.e)((() => {
          (0, vS.g)();
          const pp = (0, HS.e)(cp);
          void 0 !== pp && (0, WS.f)((0, HS.b)(pp))
        })),
        [jp] = (0, Op.useState)(VI.f);
      return (0, Ap.jsxs)("div", {
        className: Ip()("StoreTile StorePackTile", ES[Up.tier], {
          StorePackTileOwned: "owned" === op,
          StorePackTileRecipientOwns: "recipientOwns" === op,
          StoreTileGift: Hp
        }),
        ...jS(dp),
        ref: tp,
        "data-store-item": cp,
        onClick: Yp,
        onPointerMove: pp => {
          "mouse" !== pp.pointerType || 0 === pp.movementX && 0 === pp.movementY || jp || ep.start()
        },
        onPointerLeave: ep.cancel,
        children: [wp && (0, Ap.jsx)(wp, {}), (0, Ap.jsx)("div", {
          className: "StorePackCharacters",
          children: vp.map((pp => (0, Ap.jsx)("div", {
            className: "StorePackCharacter",
            style: {
              backgroundImage: `url(${(0,iS.f)(pp)})`
            }
          }, pp)))
        }), (0, Ap.jsx)("div", {
          className: "StoreTileScrim"
        }), Hp && (0, Ap.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, Ap.jsxs)("div", {
          className: "StoreTileContent",
          children: [(0, Ap.jsx)("div", {
            className: "StoreTileTitle",
            children: dp
          }), (0, Ap.jsxs)("div", {
            className: "StoreTileMeta",
            children: [(0, Ap.jsx)(dS.d, {
              tier: Up.tier
            }), " \xb7 ", yp("store:itemCount", {
              count: (0, YS.h)(cp)
            }), "owned" === op && (0, Ap.jsxs)("span", {
              className: "StoreTileOwned",
              children: [" \xb7 ", (0, Ap.jsx)(xp.d, {
                name: "check"
              }), " ", yp("general:owned")]
            })]
          }), (0, Ap.jsx)(RS, {
            state: op,
            item: cp,
            price: (0, Bp.d)(cp),
            busy: Lp,
            onAct: Dp,
            onNeedRecipient: Pp,
            onLogin: Wp
          })]
        })]
      })
    }
    var lS = cp(3165),
      QS = cp(1572),
      JS = cp(1490),
      BS = cp(3657);

    function NS() {
      return (0, Ap.jsx)("span", {
        className: "NewBadge",
        children: "NEW"
      })
    }
    var TS = cp(1363),
      fS = cp(1579),
      bS = cp(34462);

    function hS(pp) {
      let {
        character: ip,
        drawn: cp,
        onDrawn: op
      } = pp;
      const Sp = (0, Op.useRef)(null),
        xp = (0, bS.h)(ip);
      return (0, Ap.jsx)("div", {
        className: Ip()("StoreCharacterLive", {
          StoreCharacterLiveDrawn: cp
        }),
        children: (0, Ap.jsx)(Op.Suspense, {
          fallback: null,
          children: (0, Ap.jsx)(vS.e, {
            ref: Sp,
            framing: "store",
            turntableFromYaw: cp ? xp.yaw : null,
            onReady: () => {
              var pp, cp;
              null === (pp = Sp.current) || void 0 === pp || pp.setOrbit(xp), null === (cp = Sp.current) || void 0 === cp || cp.setAllCosmetics(fS.b[ip].cosmetics)
            },
            onDrawn: op
          })
        })
      })
    }
    const aS = {
        common: "StoreCharacterCardCommon",
        rare: "StoreCharacterCardRare",
        epic: "StoreCharacterCardEpic",
        legendary: "StoreCharacterCardLegendary",
        mythic: "StoreCharacterCardMythic"
      },
      nS = new Set(["wildSpirits"]);

    function FS(pp) {
      var ip;
      let {
        tile: cp,
        design: op,
        canGoLive: Lp,
        live: Yp,
        busy: Dp,
        highlight: Pp,
        onLiveStart: Wp,
        onLiveEnd: yp,
        onOpen: Up,
        onAct: wp,
        onNeedRecipient: vp,
        onLogin: tp
      } = pp;
      const {
        t: Hp
      } = (0, Sp.H)(), {
        pack: dp,
        state: ep
      } = cp, jp = JI.e[dp], kp = (0, JI.i)(dp), mp = (0, iS.g)(dp), Rp = aI.i[mp], qp = nS.has(mp), {
        tier: Mp
      } = jp, Cp = "legendary" === Mp || "mythic" === Mp, Ep = (0, Op.useRef)(null);
      (0, TS.c)(Ep, "epic" === Mp || Cp || qp);
      const [Xp, Qp] = (0, Op.useState)(!1);
      return !Yp && Xp && Qp(!1), (0, Ap.jsxs)("div", {
        ref: Ep,
        className: Ip()("StoreCharacterCard", `StoreCharacterCard${op}`, aS[Mp], {
          StoreCharacterCardOwned: "owned" === ep || "recipientOwns" === ep,
          StoreCharacterCardGift: uS(ep),
          StoreCharacterCardItem: void 0 === kp
        }),
        onPointerMove: pp => {
          "mouse" !== pp.pointerType || 0 === pp.movementX && 0 === pp.movementY || !Lp || Yp || void 0 === kp || Wp()
        },
        onPointerLeave: yp,
        children: [(0, Ap.jsx)("div", {
          className: "StoreCharacterBackdrop",
          children: Rp && (0, Ap.jsx)(Rp, {
            simple: !0
          })
        }), Cp && (0, Ap.jsx)("div", {
          className: "StoreCharacterRays"
        }), (0, Ap.jsxs)(lp.LinkPreserveSearch, {
          className: "StoreCharacterLink",
          to: (0, QS.g)({
            kind: "pack",
            pack: dp
          }),
          "data-store-item": dp,
          onClick: pp => {
            (0, JS.e)(pp) && (pp.preventDefault(), Up())
          },
          children: [(0, Ap.jsxs)("div", {
            className: "StoreCharacterStage",
            children: [(0, Ap.jsx)("div", {
              className: "StoreCharacterHalo"
            }), (0, Ap.jsx)("div", {
              className: Ip()("StoreCharacterFigure", {
                StoreCharacterFigureCovered: Xp
              }),
              style: {
                backgroundImage: `url(${(0,iS.o)(dp)})`
              }
            }), Yp && void 0 !== kp && (0, Ap.jsx)(hS, {
              character: kp,
              drawn: Xp,
              onDrawn: () => {
                Qp(!0)
              }
            })]
          }), (0, Ap.jsx)("div", {
            className: "StoreCharacterName",
            children: null !== (ip = jp.displayName) && void 0 !== ip ? ip : dp
          }), (0, Ap.jsx)(dS.d, {
            tier: Mp,
            className: "StoreCharacterTier"
          })]
        }), (0, Ap.jsx)("div", {
          className: "StoreCharacterScrim"
        }), qp && (0, Ap.jsx)("span", {
          className: "StoreCharacterNew",
          children: (0, Ap.jsx)(NS, {})
        }), "owned" === ep && (0, Ap.jsx)("span", {
          className: "StoreCharacterOwned",
          title: Hp("general:owned"),
          "aria-label": Hp("general:owned"),
          children: (0, Ap.jsx)(xp.d, {
            name: "check"
          })
        }), (0, Ap.jsx)("div", {
          className: "StoreCharacterPlate",
          children: (0, Ap.jsx)(RS, {
            state: ep,
            item: dp,
            price: (0, Bp.d)(dp),
            busy: Dp,
            highlight: Pp,
            onAct: wp,
            onNeedRecipient: vp,
            onLogin: tp
          })
        })]
      })
    }

    function gS(pp) {
      let {
        tiles: ip,
        busy: cp,
        highlightItem: op,
        onOpen: Ip,
        onAct: Sp,
        onNeedRecipient: xp,
        onLogin: Lp
      } = pp;
      const Yp = (0, BS.q)("storeCharacterCardFoil"),
        Dp = (0, BS.q)("storeCharacterCardSpotlight"),
        Pp = Yp ? "Foil" : Dp ? "Spotlight" : "Showcase",
        [Wp] = (0, Op.useState)(VI.f),
        [yp, Up] = (0, Op.useState)(null);
      return (0, Ap.jsx)("div", {
        className: "StoreCharacterGrid",
        children: ip.map((pp => (0, Ap.jsx)(FS, {
          tile: pp,
          design: Pp,
          canGoLive: !Wp,
          live: yp === pp.pack,
          busy: cp,
          highlight: op === pp.pack,
          onLiveStart: () => {
            Up(pp.pack)
          },
          onLiveEnd: () => {
            Up((ip => ip === pp.pack ? null : ip))
          },
          onOpen: () => {
            Ip(pp.pack)
          },
          onAct: () => {
            Sp(pp.pack)
          },
          onNeedRecipient: xp,
          onLogin: () => {
            Lp(pp.pack)
          }
        }, pp.pack)))
      })
    }
    var GS = cp(34470);

    function rS(pp) {
      let {
        title: ip
      } = pp;
      return (0, Ap.jsx)("h2", {
        className: "StoreSectionDivider",
        children: (0, Ap.jsx)("span", {
          className: "StoreSectionDividerTitle",
          children: ip
        })
      })
    }

    function ZS(pp) {
      let {
        mountAtOnce: ip,
        children: cp
      } = pp;
      const op = (0, Op.useRef)(null),
        [Ip, Sp] = (0, Op.useState)(ip),
        xp = (0, GS.d)();
      return (0, Op.useLayoutEffect)((() => {
        const pp = op.current;
        pp && pp.getBoundingClientRect().top < pp.parentElement.getBoundingClientRect().bottom && Sp(!0)
      }), []), Ip || xp ? (0, Ap.jsx)(Ap.Fragment, {
        children: cp
      }) : (0, Ap.jsx)("div", {
        ref: op
      })
    }

    function zS(pp) {
      let {
        layout: ip,
        mountAtOnce: cp,
        bundleGift: Op,
        superRankTotalDays: op,
        busy: Ip,
        highlightItem: xp,
        onOpen: Lp,
        onAct: Yp,
        onNeedRecipient: Dp,
        onLogin: Pp,
        dailyDropTile: Wp
      } = pp;
      const {
        t: yp
      } = (0, Sp.H)(), Up = ip.packs.filter((pp => void 0 === (0, JI.i)(pp.pack) && !(0, JI.o)(pp.pack))), wp = ip.packs.filter((pp => void 0 !== (0, JI.i)(pp.pack))), vp = ip.packs.filter((pp => (0, JI.o)(pp.pack)));
      return (0, Ap.jsxs)(Ap.Fragment, {
        children: [(0, Ap.jsx)(lS.c, {
          className: "StoreSuperGems",
          gift: Op,
          highlightSku: xp,
          leadingTile: Wp
        }), (0, Ap.jsx)(rS, {
          title: yp("store:rank")
        }), (0, Ap.jsx)(CS, {
          state: ip.superRank.state,
          urgent: ip.superRank.urgent,
          daysLeft: ip.superRankDaysLeft,
          totalDays: op,
          recipientHasSuperRank: ip.recipientHasSuperRank,
          busy: Ip,
          highlight: "superRank" === xp,
          onOpen: () => {
            Lp("superRank")
          },
          onAct: () => {
            Yp("superRank")
          },
          onNeedRecipient: Dp,
          onLogin: () => {
            Pp("superRank")
          }
        }), (0, Ap.jsxs)(ZS, {
          mountAtOnce: cp,
          children: [(0, Ap.jsx)(rS, {
            title: yp("store:bundles")
          }), (0, Ap.jsx)("div", {
            className: "StorePackGrid",
            children: Up.map((pp => (0, Ap.jsx)(XS, {
              pack: pp.pack,
              state: pp.state,
              busy: Ip,
              onOpen: () => {
                Lp(pp.pack)
              },
              onAct: () => {
                Yp(pp.pack)
              },
              onNeedRecipient: Dp,
              onLogin: () => {
                Pp(pp.pack)
              }
            }, pp.pack)))
          }), (0, Ap.jsxs)(ZS, {
            mountAtOnce: cp,
            children: [(0, Ap.jsx)(rS, {
              title: yp("store:characters")
            }), (0, Ap.jsx)(gS, {
              tiles: wp,
              busy: Ip,
              highlightItem: xp,
              onOpen: Lp,
              onAct: Yp,
              onNeedRecipient: Dp,
              onLogin: Pp
            }), vp.length > 0 && (0, Ap.jsxs)(Ap.Fragment, {
              children: [(0, Ap.jsx)(rS, {
                title: yp("store:premiumItems")
              }), (0, Ap.jsx)(gS, {
                tiles: vp,
                busy: Ip,
                highlightItem: xp,
                onOpen: Lp,
                onAct: Yp,
                onNeedRecipient: Dp,
                onLogin: Pp
              })]
            })]
          })]
        })]
      })
    }

    function sS(pp) {
      let {
        state: ip,
        mode: cp,
        giftName: Op,
        busy: op,
        highlight: Ip,
        purchaseError: xp,
        onBack: Lp,
        onChooseRecipient: Dp,
        onAct: Pp,
        onLogin: Wp
      } = pp;
      const {
        t: yp
      } = (0, Sp.H)(), Up = Kp("gift" !== cp);
      return (0, Ap.jsx)(wS, {
        onBack: Lp,
        recipient: "gift" === cp && (0, Ap.jsxs)(Ap.Fragment, {
          children: [Op && (0, Ap.jsxs)("span", {
            className: "StoreDetailRecipient",
            title: yp("store:giftFor", {
              name: Op
            }),
            children: [FI.d, " ", yp("store:giftFor", {
              name: Op
            })]
          }), !Op && (0, Ap.jsxs)("div", {
            ...(0, Yp.bb)(),
            className: "StoreDetailRecipient StoreDetailRecipientChoose",
            onClick: Dp,
            children: [FI.d, " ", yp("store:chooseRecipient")]
          })]
        }),
        cta: (0, Ap.jsx)(RS, {
          state: ip,
          item: "superRank",
          price: Bp.h.price,
          busy: op,
          highlight: Ip,
          onAct: Pp,
          onNeedRecipient: Dp,
          onLogin: Wp
        }),
        afterCta: (0, Ap.jsxs)(Ap.Fragment, {
          children: [Up && (0, Ap.jsx)("span", {
            className: "StoreTileNote",
            children: Up.text
          }), (null === Up || void 0 === Up ? void 0 : Up.manageUrl) && (0, Ap.jsx)("a", {
            className: "StoreTileNote StoreManageSubscription",
            href: Up.manageUrl,
            target: "_blank",
            rel: "noreferrer",
            children: yp("payments:manageSubscription")
          }), xp && (0, Ap.jsx)("span", {
            className: "StoreTileNote StoreTileNoteError",
            children: yp(xp)
          })]
        })
      })
    }
    var KS = cp(139);
    const VS = KS.i("kind", [KS.A({
      kind: KS.n("refused"),
      heldTierId: KS.R(),
      until: KS.w()
    }), KS.A({
      kind: KS.n("refund"),
      tierId: KS.R(),
      refundedMs: KS.w(),
      forfeitedMs: KS.w(),
      premiumCurrency: KS.w()
    }), KS.A({
      kind: KS.n("none")
    })]);
    async function px(pp) {
      const ip = await (0, Cp.postJsonWithMetricsCookiesAndJsonResponse)(`${vi.clientSideServerUrls.indexUrl}/index/ranks/subscribe-preview`, {
        productId: pp
      }, {
        retries: 1
      });
      return VS.parse(ip)
    }
    var ix = cp(3139),
      cx = cp(3171);

    function Ox(pp, ip) {
      const cp = Math.max(1, Math.round(ip / fp.i));
      return [1 === cp ? `${pp}OneDay` : pp, {
        days: cp.toLocaleString()
      }]
    }

    function ox(pp) {
      let {
        price: ip
      } = pp;
      const {
        t: cp
      } = (0, Sp.H)();
      return (0, Ap.jsxs)("div", {
        className: "StoreSubscriptionTerms",
        children: [(0, Ap.jsx)(qS, {}), (0, Ap.jsx)("div", {
          className: "SmallTextLight",
          children: cp("payments:subscriptionRenewsMonthly", {
            price: ip
          })
        }), (0, Ap.jsxs)("div", {
          className: "StoreSubscriptionTermsLinks SmallTextLight",
          children: [(0, Ap.jsx)("a", {
            href: "/terms-of-service",
            target: "_blank",
            rel: "noreferrer",
            children: cp("homePage:termsOfService")
          }), (0, Ap.jsx)("a", {
            href: "/privacy-policy",
            target: "_blank",
            rel: "noreferrer",
            children: cp("homePage:privacyPolicy")
          })]
        })]
      })
    }

    function Ix() {
      const pp = (0, hp.usePurchasesAllowed)();
      return "true" === new URLSearchParams(window.location.search).get("tempSubscription") && pp && (0, hp.subscriptionsSold)() ? (0, Ap.jsx)(Sx, {}) : null
    }

    function Sx() {
      const {
        t: pp
      } = (0, Sp.H)(), {
        userContext: ip
      } = (0, yp.b)(), {
        purchaseUnderWay: cp,
        notice: op,
        subscribe: Ip
      } = (0, ix.b)(), [xp, Lp] = (0, Op.useState)(null), [Dp, Pp] = (0, Op.useState)(0), [Wp, Up] = (0, Op.useState)(!1), wp = (0, Op.useRef)(!0), tp = ip !== Cp.NULL_USER_CONTEXT, Hp = null !== xp && xp.loadedFor === ip ? xp.offer : null, dp = null === op || void 0 === op ? void 0 : op.pendingIntentId, ep = (0, Op.useRef)(dp);

      function jp() {
        Pp((pp => pp + 1))
      }
      async function kp(pp) {
        Up(!1), await Ip(pp), wp.current && jp()
      }
      if ((0, Op.useEffect)((() => (wp.current = !0, () => {
          wp.current = !1
        })), []), (0, Op.useEffect)((() => {
          void 0 !== ep.current && void 0 === dp && jp(), ep.current = dp
        }), [dp]), (0, Op.useEffect)((() => {
          if (!tp) return;
          let pp = !1;
          return Up(!1), async function() {
            const {
              offering: pp
            } = await (0, zp.getBillingClient)().getOfferings("superRankPage"), ip = null === pp || void 0 === pp ? void 0 : pp.packages.find(BI.isPricedPackage);
            return void 0 === ip ? {
              kind: "unavailable"
            } : {
              kind: "loaded",
              pkg: ip,
              preview: await px(ip.productId)
            }
          }().catch((pp => (console.error("Billing: loading the Super Rank subscription or its preview failed:", pp), {
            kind: "loadFailed"
          }))).then((cp => {
            pp || Lp((pp => "loadFailed" === cp.kind && (null === pp || void 0 === pp ? void 0 : pp.loadedFor) === ip ? pp : {
              loadedFor: ip,
              offer: cp
            }))
          })), () => {
            pp = !0
          }
        }), [ip, tp, Dp]), null === Hp) return null;
      if ("loaded" !== Hp.kind) return (0, Ap.jsx)(cx.h, {
        notice: {
          kind: "error",
          key: "unavailable" === Hp.kind ? "payments:subscriptionUnavailable" : "payments:subscriptionLoadFailed"
        },
        className: "StoreTempSubscribe SmallTextBold"
      });
      const {
        pkg: mp,
        preview: Rp
      } = Hp;
      if ("refused" === Rp.kind) return (0, Ap.jsx)(cx.h, {
        notice: {
          kind: "error",
          key: "payments:subscribeRefusedGemRank",
          values: {
            date: new Date(Rp.until).toLocaleDateString()
          }
        },
        className: "StoreTempSubscribe SmallTextBold"
      });
      const qp = (0, lS.f)(mp),
        Mp = (0, vp.isMobileApp)() && (0, Ap.jsx)(ox, {
          price: qp
        });
      if (Wp && "refund" === Rp.kind) {
        const {
          refundedMs: ip,
          forfeitedMs: Op,
          premiumCurrency: op
        } = Rp, Ip = Op + (0 === op ? ip : 0), [Sp, xp] = Ox("payments:subscribeRefundsGemRank", ip), [Lp, Dp] = Ox("payments:subscribeForfeitsGemRank", Ip);
        return (0, Ap.jsxs)("div", {
          className: "StoreTempSubscribe SmallTextBold",
          children: [(0, Ap.jsx)("div", {
            children: pp("payments:subscribeEndsGemRank")
          }), op > 0 && (0, Ap.jsx)("div", {
            children: pp(Sp, {
              ...xp,
              amount: op.toLocaleString()
            })
          }), Ip > 0 && (0, Ap.jsx)("div", {
            children: pp(Lp, Dp)
          }), (0, Ap.jsxs)("div", {
            className: "StoreTempSubscribeButtons",
            children: [(0, Ap.jsx)(Yp.j, {
              onClick: () => {
                Up(!1)
              },
              children: pp("general:cancel")
            }), (0, Ap.jsx)(Yp.o, {
              onClick: () => {
                kp(mp)
              },
              loading: cp,
              children: pp("payments:subscribeContinue", {
                price: qp
              })
            })]
          }), Mp]
        })
      }
      return (0, Ap.jsxs)("div", {
        className: "StoreTempSubscribe",
        children: [(0, Ap.jsx)(cx.h, {
          notice: op,
          className: "SmallTextBold"
        }), (0, Ap.jsx)(cx.c, {
          className: "SmallTextBold"
        }), (0, Ap.jsx)(Yp.o, {
          onClick: () => {
            "refund" === Rp.kind ? Up(!0) : kp(mp)
          },
          disabled: void 0 !== dp,
          loading: cp,
          children: pp("payments:subscribeToSuperRank", {
            price: qp
          })
        }), Mp]
      })
    }
    var xx = cp(2641);

    function Lx(pp) {
      let {
        state: ip,
        view: cp,
        claiming: op,
        onOpen: xp
      } = pp;
      const {
        t: Dp
      } = (0, Sp.H)(), Pp = (0, Op.useRef)(null), Wp = "ready" === cp.kind;
      (0, TS.c)(Pp, Wp);
      const yp = (0, Vi.j)(ip);
      return (0, Ap.jsxs)("div", {
        ref: Pp,
        className: Ip()("DailyDropTile", {
          DailyDropTileReady: Wp
        }),
        children: [Wp && (0, Ap.jsx)(Lp.b, {
          top: "0.25rem",
          right: "0.25rem"
        }), (0, Ap.jsx)("div", {
          className: "DailyDropTileTitle",
          children: Dp("dailyDrop:name")
        }), (0, Ap.jsxs)("div", {
          className: "DailyDropTileArt",
          children: [(0, Ap.jsx)(xx.d, {
            className: "DailyDropTileBlock"
          }), (0, Ap.jsxs)("div", {
            className: "DailyDropTileInfo SmallTextLight",
            children: [(0, Ap.jsx)("span", {
              children: Dp("dailyDrop:collected", {
                count: ip.collected.length,
                total: ip.total
              })
            }), null !== yp && (0, Ap.jsx)("span", {
              className: "DailyDropTileOdds",
              children: Dp("dailyDrop:odds", {
                percent: yp.toLocaleString(void 0, {
                  maximumFractionDigits: 1
                })
              })
            })]
          })]
        }), "ready" === cp.kind && (0, Ap.jsx)(Yp.o, {
          className: "DailyDropTileOpen",
          onClick: xp,
          loading: op,
          children: Dp("dailyDrop:open")
        }), "waiting" === cp.kind && (0, Ap.jsx)("div", {
          className: "DailyDropTileWait SmallTextBold",
          children: Dp("dailyDrop:nextIn", {
            count: cp.hours
          })
        })]
      })
    }
    var Yx = cp(2276);
    const Dx = 32;

    function Ax(pp) {
      let {
        worn: ip,
        KI: cp,
        VI: op,
        className: Lp
      } = pp;
      const {
        t: Yp
      } = (0, Sp.H)(), Dp = (0, Op.useRef)(null), [Pp, Wp] = (0, Op.useState)(null), [yp, Up] = (0, Op.useState)(!1);
      async function wp() {
        var pp;
        const ip = Dp.current;
        if (!ip) return;
        const Op = null === (pp = ip.getDevTools()) || void 0 === pp ? void 0 : pp.canvas();
        let Ip = null;
        try {
          Ip = Op ? function(pp) {
            if (0 === pp.width || 0 === pp.height) return null;
            const ip = document.createElement("canvas");
            ip.width = Dx, ip.height = Dx;
            const cp = ip.getContext("2d", {
              willReadFrequently: !0
            });
            if (!cp) return null;
            cp.drawImage(pp, 0, 0, Dx, Dx);
            const {
              data: Op
            } = cp.getImageData(0, 0, Dx, Dx);
            for (let op = 3; op < Op.length; op += 4)
              if (Op[op] > 0) return pp.toDataURL("image/png");
            return null
          }(Op) : null
        } catch (xp) {
          console.warn("Couldn't read the character preview for the Lucky Skin Block's Before", xp)
        }
        null === Ip && console.warn("The character preview read back blank: the Lucky Skin Block's Before shows the head"), Wp(null === Ip ? {
          kind: "head"
        } : {
          kind: "still",
          src: Ip
        }), ip.updateCosmetic(cp, op);
        const Sp = new Promise((pp => {
          setTimeout(pp, 1e4)
        }));
        await Promise.race([ip.ensureReadyForCapture(cp), Sp]).catch((pp => {
          console.error("Failed to draw the Lucky Skin Block's piece on the character preview", pp)
        })), Dp.current === ip && Up(!0)
      }
      return (0, Ap.jsxs)("div", {
        className: Ip()("DailyDropRevealFigures", Lp),
        children: [(0, Ap.jsxs)("div", {
          className: "DailyDropRevealFigure",
          children: [(0, Ap.jsxs)("div", {
            className: "DailyDropRevealFigureArt",
            children: ["still" === (null === Pp || void 0 === Pp ? void 0 : Pp.kind) && (0, Ap.jsx)("img", {
              className: "DailyDropRevealBeforeStill",
              src: Pp.src,
              alt: "",
              draggable: !1
            }), "head" === (null === Pp || void 0 === Pp ? void 0 : Pp.kind) && (0, Ap.jsx)("div", {
              className: "DailyDropRevealBeforeHead",
              children: (0, Ap.jsx)(OS.c, {
                cosmetics: ip
              })
            }), null === Pp && (0, Ap.jsx)(jp.c, {})]
          }), (0, Ap.jsx)("span", {
            className: "DailyDropRevealFigureLabel SmallTextBold",
            children: Yp("dailyDrop:before")
          })]
        }), (0, Ap.jsx)(xp.d, {
          name: "arrow-right",
          className: "DailyDropRevealArrow"
        }), (0, Ap.jsxs)("div", {
          className: "DailyDropRevealFigure DailyDropRevealAfter",
          children: [(0, Ap.jsxs)("div", {
            className: "DailyDropRevealFigureArt",
            children: [(0, Ap.jsx)("div", {
              className: Ip()("DailyDropRevealLive", {
                DailyDropRevealLiveDrawn: yp
              }),
              children: (0, Ap.jsx)(Op.Suspense, {
                fallback: null,
                children: (0, Ap.jsx)(vS.e, {
                  ref: Dp,
                  onReady: () => {
                    var pp, cp;
                    null === (pp = Dp.current) || void 0 === pp || pp.resetCamera(), null === (cp = Dp.current) || void 0 === cp || cp.setAllCosmetics(ip)
                  },
                  onDrawn: () => {
                    requestAnimationFrame((() => {
                      wp()
                    }))
                  }
                })
              })
            }), !yp && (0, Ap.jsx)(jp.c, {})]
          }), (0, Ap.jsx)("span", {
            className: "DailyDropRevealFigureLabel SmallTextBold",
            children: Yp("dailyDrop:after")
          })]
        })]
      })
    }
    var Px = cp(1880);
    const Wx = "dailyDropReminderAsked_";

    function yx(pp) {
      return async function(pp) {
        if (pp.remindersOn || (0, mp.f)(mp.c.get("gameState"))) return null;
        const ip = await Cp.userContextManager.getCurrentUserContext(),
          cp = Wx + ip.whamm;
        if (null !== Wc.h.getItem(cp)) return null;
        const [Op, op] = await Promise.all([(0, Zi.e)().catch((pp => (console.error("Couldn't tell whether this device can take push notifications:", pp), null))), wx()]);
        if (null === Op && !op) return null;
        return {
          askedKey: cp,
          requester: Op
        }
      }(pp).catch((pp => (console.error("Failed to tell whether to ask about Lucky Skin Block reminders:", pp), null)))
    }

    function Ux(pp, ip) {
      Wc.h.setItem(pp.askedKey, !0), (0, Vi.B)("daily_drop.remind", ip ? "yes" : "no"), ip && async function(pp) {
        const ip = (0, Vi.C)({
            remindersOn: !0
          }),
          cp = null === pp ? Promise.resolve() : pp(),
          [Op, op] = await Promise.allSettled([ip, cp]);
        "rejected" === Op.status && console.error("Failed to turn on Lucky Skin Block reminders:", Op.reason);
        "rejected" === op.status && console.error("Failed to ask for push notifications for Lucky Skin Block reminders:", op.reason);
        "rejected" !== Op.status && "rejected" !== op.status || Px.i.showMessage({
          translationKey: "dailyDrop:remindFailed"
        })
      }(pp.requester)
    }

    function wx() {
      return (0, ri.b)().then((pp => pp.app + pp.browser + pp.msnPlay > 0), (pp => (console.error("Couldn't tell where push notifications reach this account:", pp), !0)))
    }
    const vx = {
        closed: "opening",
        opening: "revealed",
        revealed: "shrinking",
        shrinking: "equip",
        equip: "equip",
        remind: "remind"
      },
      tx = {
        opening: 900,
        shrinking: 700
      };

    function Hx(pp) {
      let {
        drop: ip,
        onClose: cp
      } = pp;
      const {
        t: op
      } = (0, Sp.H)(), {
        userContext: Lp
      } = (0, yp.b)(), {
        state: Dp,
        view: Pp
      } = (0, Vi.D)(), [Wp, Up] = (0, Op.useState)("closed"), [wp] = (0, Op.useState)((() => ({
        ...Lp.getPlayerCosmetics()
      }))), [vp] = (0, Op.useState)((() => (0, Vi.n)(ip, wp))), [tp, Hp] = (0, Op.useState)(!1), [dp, ep] = (0, Op.useState)(!1), [jp] = (0, Op.useState)((() => null === Dp ? Promise.resolve(null) : yx(Dp))), [kp, Rp] = (0, Op.useState)(null), qp = (0, zi.b)(), {
        gameState: Mp
      } = (0, mp.o)(["gameState"]);
      async function Cp() {
        const pp = await jp;
        qp.current && (null === pp ? cp() : (Rp(pp), Up("remind")))
      }

      function Ep(pp) {
        null !== kp && Ux(kp, pp), cp()
      }(0, Op.useEffect)((() => {
        const pp = tx[Wp];
        if (void 0 === pp) return;
        const ip = setTimeout((() => {
          Up(vx[Wp])
        }), pp);
        return () => {
          clearTimeout(ip)
        }
      }), [Wp]);
      const Xp = op(`dailyDrop:kind_${vp.KI}`),
        lp = Dp && op("dailyDrop:collected", {
          count: Dp.collected.length,
          total: Dp.total
        }),
        Qp = "revealed" === Wp || "shrinking" === Wp,
        Jp = "equip" !== Wp && "remind" !== Wp;
      return (0, Ap.jsx)(hO.c, {
        className: "DailyDropRevealScreen",
        close: "remind" === Wp ? () => {
          Ep(!1)
        } : cp,
        togglePointerLock: !1,
        closeOnPressBackground: !1,
        children: (0, Ap.jsxs)("div", {
          className: Ip()("DailyDropReveal", {
            DailyDropRevealOpening: "opening" === Wp,
            DailyDropRevealShrinking: "shrinking" === Wp,
            DailyDropRevealFiguresShown: "shrinking" === Wp || "equip" === Wp || "remind" === Wp
          }),
          children: [(0, Ap.jsxs)("div", {
            className: "DailyDropRevealStage",
            children: [(0, Ap.jsx)(Ax, {
              className: "DailyDropRevealStageFigures",
              worn: wp,
              KI: vp.KI,
              VI: vp.VI
            }), ("closed" === Wp || "opening" === Wp) && (0, Ap.jsx)(xx.d, {
              className: "DailyDropRevealBlock",
              open: "opening" === Wp
            }), Qp && (0, Ap.jsx)("div", {
              className: "DailyDropRevealPiece",
              children: (0, Ap.jsx)("img", {
                src: `/textures/charSkins/previews/${(0,Yx.m)(vp.KI,vp.VI).previewTex}.png`,
                alt: Xp,
                draggable: !1
              })
            })]
          }), Jp && (0, Ap.jsxs)(Ap.Fragment, {
            children: [(0, Ap.jsxs)("div", {
              className: "DailyDropRevealCaption",
              children: [(0, Ap.jsx)("div", {
                className: "DailyDropRevealTitle SmallTextBold",
                children: Qp ? Xp : op("dailyDrop:name")
              }), "closed" === Wp && (0, Ap.jsx)("div", {
                className: "DailyDropRevealHint SmallTextLight",
                children: op("dailyDrop:tapToOpen")
              }), "revealed" === Wp && (0, Ap.jsx)("div", {
                className: "DailyDropRevealHint SmallTextLight",
                children: op("dailyDrop:tapToContinue")
              })]
            }), (0, Ap.jsx)("button", {
              type: "button",
              className: "DailyDropRevealTap",
              "data-pad-default-focus": !0,
              "aria-label": op("closed" === Wp ? "dailyDrop:tapToOpen" : "dailyDrop:tapToContinue"),
              onClick: () => {
                Up(vx[Wp])
              }
            })]
          }), "equip" === Wp && (0, Ap.jsxs)("div", {
            className: "DailyDropRevealEquip",
            children: [(0, Ap.jsx)("div", {
              className: "DailyDropRevealKind SmallTextLight",
              children: Xp
            }), (0, Ap.jsx)("div", {
              className: "DailyDropRevealQuestion SmallTextBold",
              children: op("dailyDrop:equipQuestion")
            }), (0, Ap.jsxs)("div", {
              className: "DailyDropRevealButtons",
              children: [(0, Ap.jsx)(Yp.f, {
                className: "DailyDropRevealButton",
                disabled: tp,
                touchPressOn: "pointerup",
                onClick: () => {
                  (0, Vi.B)("daily_drop.not_now", ip), Cp()
                },
                children: op("dailyDrop:notNow")
              }), (0, Ap.jsx)(Yp.f, {
                className: "DailyDropRevealButton",
                loading: tp,
                padDefaultFocus: !0,
                touchPressOn: "pointerup",
                onClick: () => {
                  !async function() {
                    (0, Vi.B)("daily_drop.equip", ip), Hp(!0), ep(!1);
                    try {
                      await (0, Vi.i)(Lp, vp.KI, vp.VI)
                    } catch (pp) {
                      return console.error("Failed to equip the Lucky Skin Block's piece", pp), Hp(!1), void ep(!0)
                    }
                    await Cp()
                  }()
                },
                children: op("dailyDrop:equip")
              })]
            }), dp && (0, Ap.jsx)("div", {
              className: "DailyDropRevealError SmallTextBold",
              children: op("dailyDrop:equipFailed")
            }), !(0, mp.f)(Mp) && (0, Ap.jsxs)("button", {
              type: "button",
              className: "DailyDropRevealCustomise",
              disabled: tp,
              onClick: () => {
                var pp;
                (0, Vi.B)("daily_drop.customise", ip), pp = vp.KI, Ac.m.GA(BO, pp), mp.c.set({
                  openEverythingMenuName: Hi.n.CUSTOMISATION
                }), cp()
              },
              children: [op("dailyDrop:customise"), " ", (0, Ap.jsx)(xp.d, {
                name: "arrow-right",
                className: "DailyDropRevealCustomiseArrow"
              })]
            }), lp && (0, Ap.jsxs)("div", {
              className: "DailyDropRevealProgress SmallTextLight",
              children: [lp, "waiting" === (null === Pp || void 0 === Pp ? void 0 : Pp.kind) && ` \xb7 ${op("dailyDrop:nextInInline",{count:Pp.hours})}`]
            })]
          }), "remind" === Wp && (0, Ap.jsxs)("div", {
            className: "DailyDropRevealEquip",
            children: [(0, Ap.jsx)("div", {
              className: "DailyDropRevealQuestion SmallTextBold",
              children: op("dailyDrop:remindTitle")
            }), (0, Ap.jsx)("div", {
              className: "DailyDropRevealKind SmallTextLight",
              children: op("dailyDrop:remindSubtitle")
            }), (0, Ap.jsxs)("div", {
              className: "DailyDropRevealButtons",
              children: [(0, Ap.jsx)(Yp.f, {
                className: "DailyDropRevealButton",
                padDefaultFocus: !0,
                touchPressOn: "pointerup",
                onClick: () => {
                  Ep(!1)
                },
                children: op("dailyDrop:remindNo")
              }), (0, Ap.jsx)(Yp.f, {
                className: "DailyDropRevealButton",
                touchPressOn: "pointerup",
                onClick: () => {
                  Ep(!0)
                },
                children: op("dailyDrop:remindYes")
              })]
            })]
          })]
        })
      })
    }

    function dx(pp, ip) {
      const {
        t: cp
      } = (0, Sp.H)(), op = function(pp, ip) {
        const {
          state: cp,
          view: op
        } = (0, Vi.D)(), [Ip, Sp] = (0, Op.useState)(!1), [xp, Lp] = (0, Op.useState)(!1), [Yp, Dp] = (0, Op.useState)(null), Ap = (0, Op.useRef)(null), Pp = (0, Op.useRef)(!1), Wp = ip && "ready" === (null === op || void 0 === op ? void 0 : op.kind);
        (0, Op.useEffect)((() => {
          pp ? Wp && !Pp.current && (Pp.current = !0, (0, Vi.B)("daily_drop.shown", "tile")) : Pp.current = !1
        }), [pp, Wp]), (0, Op.useEffect)((() => {
          pp || (vp(), Lp(!1))
        }), [pp]);
        const yp = pp && null === Yp && !(0, Vi.y)(op);
        (0, Op.useEffect)((() => {
          yp && mp.c.set({
            openEverythingMenuName: Hi.n.CUSTOMISATION
          })
        }), [yp]);
        const Up = (0, Op.useRef)(!1),
          wp = (0, Op.useRef)(pp);

        function vp() {
          null !== Ap.current && (Ap.current = null, Dp(null))
        }
        return wp.current = pp, {
          state: cp,
          view: op,
          claiming: Ip,
          claimFailed: xp,
          reveal: Yp,
          open: async function() {
            if (!Up.current) {
              Up.current = !0, Sp(!0), Lp(!1);
              try {
                const {
                  state: pp,
                  drop: ip
                } = await (0, Vi.e)();
                if (null === pp || null === ip) return;
                if (!wp.current) return;
                (0, Vi.B)("daily_drop.open", ip), Ap.current = {
                  state: pp,
                  drop: ip
                }, Dp(Ap.current)
              } catch (pp) {
                console.error("Failed to claim the Lucky Skin Block", pp), wp.current && Lp(!0)
              } finally {
                Up.current = !1, Sp(!1)
              }
            }
          },
          closeReveal: vp
        }
      }(pp, ip);
      return {
        shown: (0, Vi.y)(op.view) || null !== op.reveal,
        tile: op.state && op.view && (0, Ap.jsx)(Lx, {
          state: op.state,
          view: op.view,
          claiming: op.claiming,
          onOpen: op.open
        }),
        claimFailed: op.claimFailed && (0, Ap.jsx)("div", {
          className: "StoreNotice StoreNoticeError",
          children: cp("dailyDrop:claimFailed")
        }),
        reveal: op.reveal && (0, Ap.jsx)(Hx, {
          drop: op.reveal.drop,
          onClose: op.closeReveal
        })
      }
    }

    function ex(pp) {
      let {
        show: ip
      } = pp;
      const cp = dx(ip, ip);
      return ip && cp.shown ? (0, Ap.jsxs)("div", {
        className: "Store StoreDailyDropOnly",
        children: [cp.claimFailed, cp.tile && (0, Ap.jsx)("div", {
          className: "StoreDailyDropOnlyTile",
          children: cp.tile
        }), cp.reveal]
      }) : null
    }
    const ux = {
      kind: "board"
    };
    let jx = !1;

    function kx(pp) {
      return "found" === pp.status || "error" === pp.status && "store:giftRecipientLookupFailed" === pp.error ? pp.name : null
    }(0, bp.z)(BI.prefetchBillingOfferings);
    const mx = (0, Op.memo)((function(pp) {
      var ip;
      let {
        show: op
      } = pp;
      const {
        t: xp
      } = (0, Sp.H)(), {
        userContext: Lp
      } = (0, yp.b)(), Yp = (0, hp.usePurchasesAllowed)(), Dp = Lp !== Cp.NULL_USER_CONTEXT, Pp = ZI(Lp), [Wp, Up] = (0, wp.b)(), {
        page: vp,
        urlMode: tp,
        goTo: Hp
      } = (0, zI.f)(), dp = function(pp) {
        return "superRank" === pp.kind ? "superRank" : "pack" === pp.kind ? pp.pack : null
      }(vp), {
        openEverythingMenuName: ep,
        gameState: jp
      } = (0, mp.o)(["openEverythingMenuName", "gameState"]), kp = null !== ep;
      ! function(pp, ip) {
        const [op] = (0, Op.useState)(VI.f), [Ip, Sp] = (0, Op.useState)(!1);
        op && ip && !Ip && Sp(!0);
        const xp = (0, RO.r)(),
          Lp = op && Ip && pp && !xp;
        (0, Op.useEffect)((() => {
          if (!Lp) return;
          let pp = null,
            ip = null,
            Op = null;
          const op = () => !document.hasFocus() || document.activeElement instanceof HTMLIFrameElement || (0, zp.getBillingClient)().purchaseUnderWay,
            Ip = () => {
              var cp;
              null === (cp = Op) || void 0 === cp || cp(), Op = null, null !== pp && (clearTimeout(pp), pp = null), null !== ip && (clearTimeout(ip), ip = null)
            },
            Sp = () => {
              (0, sI.o)(!1), (0, sI.k)(!1), Ip(), pp = setTimeout((() => {
                pp = null, Op = (0, KI.b)((() => {
                  Op = null, op() ? Sp() : ((0, sI.o)(!0), ip = setTimeout((() => {
                    ip = null, Op = (0, KI.b)((() => {
                      Op = null, op() ? Sp() : (0, sI.k)(!0)
                    }))
                  }), 3e3), Promise.resolve().then((() => cp(4747))).then((pp => {
                    pp.startBackgroundGameSetup()
                  }), (pp => {
                    console.warn("Background game setup: its chunk failed to load", pp)
                  })))
                }))
              }), 2e3)
            };
          for (const cp of pS) window.addEventListener(cp, Sp, {
            capture: !0,
            passive: !0
          });
          return Sp(), () => {
            for (const pp of pS) window.removeEventListener(pp, Sp, {
              capture: !0
            });
            Ip(), (0, sI.o)(!1), (0, sI.k)(!1)
          }
        }), [Lp])
      }(op && kp, "pack" === vp.kind);
      const Rp = "landingPage" === jp;
      (0, Op.useEffect)((() => {
        kp && (0, BI.prefetchBillingOfferings)()
      }), [kp]), (0, Op.useEffect)((() => {
        kp && !op && Rp && (0, iS.r)()
      }), [kp, op, Rp]);
      const [qp, Mp] = (0, Op.useState)(0), [Ep, Xp] = (0, Op.useState)(null), [lp, Qp] = (0, Op.useState)(null), [Jp, Np] = (0, Op.useState)(null), [Tp, fp] = (0, Op.useState)(null), ap = (0, Op.useRef)(null), np = (0, Op.useRef)(null), Fp = (0, Op.useRef)(null), gp = (0, Op.useRef)(!1), Gp = (0, bp.J)(), rp = (0, Op.useRef)(0), Zp = (0, Op.useRef)(!1);

      function sp() {
        Mp((pp => pp + 1))
      }(0, Op.useEffect)((() => {
        if (op) {
          if (jx = !0, (0, bp.n)(), Gp && Gp.seq !== rp.current) {
            var pp;
            rp.current = Gp.seq, "loginResume" !== Gp.source && (0, bp.G)();
            const ip = (0, bp.e)(Gp);
            tp || Hp(ip), fp(null !== (pp = Gp.highlight) && void 0 !== pp ? pp : null), Qp(null), "gift" === Gp.mode && Gp.giftRecipientName ? Pp.choose(Gp.giftRecipientName, "prefilled") : "current" !== Gp.mode && Pp.clear(), "gift" !== Gp.mode || Gp.giftRecipientName || sp(), (0, Oi.reportAnalyticsClick)({
              id: "store.open",
              value: Gp.source
            })
          } else Zp.current || (0, Oi.reportAnalyticsClick)({
            id: "store.open",
            value: "menuTab"
          });
          Zp.current = !0
        } else Zp.current = !1
      }), [op, Gp]), (0, Op.useEffect)((() => {
        if (!Tp) return;
        const pp = setTimeout((() => {
          fp(null)
        }), 4e3);
        return () => {
          clearTimeout(pp)
        }
      }), [Tp]), (0, Op.useLayoutEffect)((() => {
        const pp = ap.current;
        if (!op || !pp) return np.current = null, void(Fp.current = null);
        var ip;
        if (dp) np.current = dp, null === (ip = pp.querySelector(".StoreDetailBackButton, .CosmeticShopDetailBackButton")) || void 0 === ip || ip.focus();
        else if (np.current) {
          const ip = Fp.current;
          null !== ip && (pp.scrollTop = ip);
          const cp = pp.querySelector(`[data-store-item="${np.current}"]`);
          if (cp) {
            const Op = cp.getBoundingClientRect(),
              op = pp.getBoundingClientRect();
            cp.focus({
              preventScroll: null !== ip && Op.bottom > op.top && Op.top < op.bottom
            })
          }
          np.current = null
        }
      }), [dp, op]), (0, Op.useEffect)((() => {
        Qp(null)
      }), [Pp.query]), (0, Op.useEffect)((() => {
        if (!Jp) return;
        const pp = setTimeout((() => {
          Np(null)
        }), 8e3);
        return () => {
          clearTimeout(pp)
        }
      }), [Jp]);
      const Kp = Lp.superRankInfo,
        Vp = Lp.isLoggedIn() || (0, hp.guestsMayBuy)(),
        ii = Lp.getOwnedCosmeticPacks(),
        ci = (0, FI.k)(Pp.query),
        oi = (0, FI.e)({
          mode: ci,
          loggedIn: Dp ? Vp : null,
          superRankInfo: Kp,
          now: Date.now(),
          ownedPacks: ii,
          packs: JI.x,
          recipient: Pp.recipient
        });
      (0, Op.useEffect)((() => {
        if (!Vp || !op) return;
        const pp = (0, bp.G)(),
          ip = pp && (0, FI.g)(pp, JI.x);
        pp && ip && ((0, Oi.reportAnalyticsClick)({
          id: "store.login_resume",
          value: pp.item
        }), (0, bp.r)(ip))
      }), [Vp, op]);
      const Ii = (0, FI.o)({
        superRankDaysLeft: oi.superRankDaysLeft,
        openedThisSession: jx || op,
        seenNewItems: (0, bp.l)()
      });
      (0, Op.useEffect)((() => {
        (0, bp.C)(Ii)
      }), [Ii]);
      const Si = "self" === ci,
        xi = dx(op, op && Si && "board" === vp.kind);
      if (!op || !Yp) return null;
      const Li = Up > Wp && Wp <= 700,
        Yi = !Li && Up <= 420,
        Di = "gift" === ci ? kx(Pp.recipient) : null,
        Ai = null !== Ep;

      function Pi(pp) {
        (0, TI.d)(pp, "gift" === ci ? Pp.query.trim() : null)
      }

      function Wi(pp, ip) {
        (0, Oi.reportAnalyticsClick)({
          id: "store.purchase_done",
          value: `${ip?"gift":"self"}:${pp}`
        }), ip && (Pp.recordGift(ip.name, pp), yi(ip))
      }

      function yi(pp) {
        ! function(pp) {
          try {
            Wc.h.setItem(gI, (0, FI.t)(rI(), pp))
          } catch {}
        }({
          name: pp.name,
          cosmetics: pp.cosmetics
        }), Hp(ux), Np((ip => {
          var cp;
          return {
            name: pp.name,
            seq: (null !== (cp = null === ip || void 0 === ip ? void 0 : ip.seq) && void 0 !== cp ? cp : 0) + 1
          }
        }))
      }
      async function Ui(pp) {
        var ip, cp;
        if (gp.current) return;
        if (!Vp) return void Pi(pp);
        Qp(null), fp(null);
        const Op = "gift" === ci ? {
          name: kx(Pp.recipient),
          cosmetics: Pp.recipientCosmetics
        } : null;
        if (Op && !Op.name) return void sp();
        const op = "superRank" === pp ? Bp.h.id : (0, Bp.c)(pp);
        gp.current = !0;
        const Ip = await (0, nI.c)(op, null !== (ip = null === Op || void 0 === Op ? void 0 : Op.name) && void 0 !== ip ? ip : null);
        if (gp.current = !1, !Ip) return;
        Xp(pp);
        const Sp = await fI.c.purchase(op, null !== (cp = null === Op || void 0 === Op ? void 0 : Op.name) && void 0 !== cp ? cp : null);
        Xp(null), Sp ? Qp(Sp) : (Wi(pp, Op), Op || (await (0, bI.flushClientAnalyticsEvents)(), (0, NI.refreshWithoutConfirmation)("superRank" === pp ? "/super-rank-welcome" : `/pack-welcome/${pp}`)))
      }
      const wi = Ip()("Store", {
        StoreGift: "gift" === ci,
        StorePortrait: Li,
        StoreCompact: Yi
      });
      if ("pack" === vp.kind) {
        const pp = vp.pack,
          ip = oi.packs.find((ip => ip.pack === pp));
        return (0, Ap.jsx)("div", {
          ref: ap,
          className: "CosmeticShopContainer",
          children: (0, Ap.jsx)(aI.e, {
            pack: pp,
            onBack: () => {
              Hp(ux)
            },
            onPurchased: ip => {
              Wi(pp, ip ? {
                name: ip,
                cosmetics: null
              } : null)
            },
            giftCta: "gift" === ci && Di && ip && (0, Ap.jsxs)(Ap.Fragment, {
              children: [(0, Ap.jsx)(RS, {
                state: ip.state,
                item: pp,
                price: (vi = pp, "superRank" === vi ? Bp.h.price : (0, Bp.d)(vi)),
                busy: Ai,
                onAct: () => {
                  Ui(pp)
                },
                onNeedRecipient: () => {
                  Hp(ux), sp()
                },
                onLogin: () => {
                  Pi(pp)
                },
                highlight: Tp === pp
              }), lp && (0, Ap.jsx)("span", {
                className: "CosmeticShopGiftError SmallTextBold",
                children: xp(lp)
              })]
            }),
            ownedPacks: ii,
            startAsGift: "gift" === ci,
            initialGiftRecipient: "gift" === ci ? null !== Di && void 0 !== Di ? Di : Pp.query.trim() : "",
            highlightCta: Tp === pp
          }, pp)
        })
      }
      var vi;
      return "superRank" === vp.kind ? (0, Ap.jsx)("div", {
        ref: ap,
        className: Ip()(wi, "StoreDetailView"),
        children: (0, Ap.jsx)(sS, {
          state: oi.superRank.state,
          mode: ci,
          giftName: Di,
          busy: Ai,
          highlight: "superRank" === Tp,
          purchaseError: lp,
          onBack: () => {
            Hp(ux)
          },
          onChooseRecipient: () => {
            Hp(ux), sp()
          },
          onAct: () => {
            Ui("superRank")
          },
          onLogin: () => {
            Pi("superRank")
          }
        })
      }) : (0, Ap.jsxs)("div", {
        ref: ap,
        className: wi,
        onScroll: pp => {
          Fp.current = pp.currentTarget.scrollTop
        },
        children: [(0, Ap.jsx)("div", {
          className: "StoreTopRow",
          children: (0, Ap.jsx)(LS, {
            selfName: Dp ? Lp.getPlayerName() : "",
            giftRecipient: Pp,
            suggestionsVersion: null !== (ip = null === Jp || void 0 === Jp ? void 0 : Jp.seq) && void 0 !== ip ? ip : 0,
            pulseSignal: qp,
            disabled: Ai || !Dp
          })
        }), Jp && (0, Ap.jsxs)("div", {
          className: "StoreNotice StoreNoticeGiftSent",
          onClick: () => {
            Np(null)
          },
          children: [(0, Ap.jsx)(hI.b, {
            showSignal: Jp.seq
          }), FI.d, " ", xp("store:giftSent", {
            name: Jp.name
          })]
        }, Jp.seq), !Jp && lp && (0, Ap.jsx)("div", {
          className: "StoreNotice StoreNoticeError",
          children: xp(lp)
        }), Si && xi.claimFailed, (0, Ap.jsx)(zS, {
          layout: oi,
          mountAtOnce: null !== np.current,
          bundleGift: "gift" === ci ? {
            recipientName: Di,
            lookingUp: "pending" === Pp.recipient.status,
            busy: Ai,
            onNeedRecipient: sp,
            onSent: pp => {
              (0, Oi.reportAnalyticsClick)({
                id: "store.purchase_done",
                value: "gift:superGems"
              }), yi({
                name: pp,
                cosmetics: Pp.recipientCosmetics
              })
            }
          } : null,
          superRankTotalDays: (0, FI.r)(Kp),
          busy: Ai,
          highlightItem: Tp,
          onOpen: function(pp) {
            (0, Oi.reportAnalyticsClick)({
              id: "store.item_open",
              value: pp
            }), Hp((0, bp.i)(pp))
          },
          onAct: Ui,
          onNeedRecipient: sp,
          onLogin: Pi,
          dailyDropTile: Si && xi.tile
        }), "gift" !== ci && (0, Ap.jsx)(Ix, {}), xi.reveal]
      })
    }));
    var Rx = cp(2759),
      qx = cp(8967),
      Mx = cp(8803),
      Cx = cp(2829),
      Ex = cp(2661),
      Xx = cp(2715),
      lx = cp(2731),
      Qx = cp(2734),
      Jx = cp(2814),
      Bx = cp(2793),
      Nx = cp(2410),
      Tx = cp(2444),
      fx = cp(2437),
      bx = cp(2068),
      hx = cp(2736),
      ax = cp(2451);

    function nx(pp) {
      let {
        show: ip
      } = pp;
      return ip ? (0, Ap.jsx)(Fx, {}) : null
    }

    function Fx() {
      const {
        t: pp
      } = (0, Sp.H)(), {
        followsLeader: ip
      } = (0, Ex.i)(), {
        loading: cp,
        friends: op,
        requests: Lp,
        invites: Dp
      } = (0, Fp.o)(), {
        userContext: Pp
      } = (0, yp.b)(), [Wp, Up] = (0, Op.useState)(ax.k);
      (0, Op.useEffect)((() => {
        (0, ax.d)()
      }), []);
      const wp = Lp.map((pp => pp.name)),
        {
          state: vp,
          recentRequesters: tp
        } = (0, Bx.p)(),
        Hp = new Map([...("loaded" === vp.status ? vp.recentPlayers : []).map((pp => [pp.preview.name, pp])), ...tp.map((pp => [pp.name, pp]))]),
        dp = (0, Op.useRef)(null),
        [kp, mp] = (0, Op.useState)(""),
        [Rp, qp] = (0, Op.useState)("Enter"),
        [Mp, Cp] = (0, Op.useState)(null);

      function Ep() {
        kp && (qp("Loading"), (0, fx.i)(kp, "social_menu").then((pp => {
          if (dp.current) switch (pp.kind) {
            case "sent":
              qp("Success");
              break;
            case "becameFriends":
              qp("BecameFriends");
              break;
            case "failed":
              Cp(pp.message), qp("Error")
          }
        })))
      }
      return (0, Op.useEffect)((() => {
        if ("Enter" === Rp || "Loading" === Rp) return;
        const pp = setTimeout((() => {
          dp.current.value = "", mp(""), qp("Enter")
        }), "Success" === Rp ? 1e3 : 4e3);
        return () => {
          clearTimeout(pp)
        }
      }), [Rp]), (0, Ap.jsx)("div", {
        className: "SocialMenu",
        children: (0, Ap.jsxs)("div", {
          className: "SocialMenuInner",
          children: [(0, Ap.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, Ap.jsxs)("div", {
              className: "SocialMenuBox SocialMenuAddFriend",
              children: [(0, Ap.jsx)(Qx.c, {
                label: pp("socialBar:addFriend")
              }), (0, Ap.jsxs)("div", {
                className: "AddFriendBody",
                children: [(0, Ap.jsxs)("div", {
                  className: Ip()("AddFriendBodyOverlay", {
                    [`AddFriendBodyOverlay${Rp}`]: !0
                  }),
                  children: ["Loading" === Rp && (0, Ap.jsx)(jp.c, {}), "Success" === Rp && (0, Ap.jsx)(xp.d, {
                    name: "check"
                  }), "BecameFriends" === Rp && (0, Ap.jsx)(Ap.Fragment, {
                    children: pp("socialBar:nowFriends", {
                      playerName: kp
                    })
                  }), "Error" === Rp && Mp && (0, Ap.jsx)(Ap.Fragment, {
                    children: pp(Mp.translationKey, Mp.params)
                  })]
                }), (0, Ap.jsxs)("div", {
                  className: "PlayerSearch",
                  children: [(0, Ap.jsx)(ep.c, {
                    className: "PlayerSearchInput",
                    placeholderText: pp("socialBar:enterPlayerName"),
                    domRef: dp,
                    onValueChange: pp => {
                      mp((0, Qp.p)(pp)), dp.current.value = (0, Qp.p)(pp)
                    },
                    onEnter: () => {
                      kp && (0, Oi.reportAnalyticsClick)({
                        id: "social.add_friend",
                        value: "social_menu"
                      }), Ep()
                    }
                  }), (0, Ap.jsxs)(Yp.f, {
                    className: "PlayerSearchInputButton SmallTextLight",
                    onClick: () => {
                      Ep()
                    },
                    analyticsClick: {
                      id: "social.add_friend",
                      value: "social_menu"
                    },
                    children: [(0, Ap.jsx)(xp.d, {
                      name: "user-plus"
                    }), " ", pp("socialBar:sendRequest")]
                  })]
                })]
              }), (0, Ap.jsx)(hx.d, {
                surface: "social_menu",
                prefetchOnMount: !0
              })]
            }), Dp.length > 0 && (0, Ap.jsxs)("div", {
              className: "SocialMenuBox SocialMenuInvites",
              children: [(0, Ap.jsx)(Qx.c, {
                label: pp("socialBar:invites"),
                meta: Dp.length
              }), Dp.map((ip => (0, Ap.jsxs)("div", {
                className: "SocialMenuInvite",
                children: [(0, Ap.jsx)("div", {
                  className: "SocialMenuInviteIcon",
                  children: (0, Ap.jsx)(Nx.c, {
                    invite: ip
                  })
                }), (0, Ap.jsx)("div", {
                  className: "SocialMenuInviteText",
                  children: (0, Ap.jsx)(Nx.e, {
                    invite: ip
                  })
                }), (0, Ap.jsx)(Yp.o, {
                  className: "SocialMenuInviteJoin SmallTextLight",
                  onClick: () => {
                    (0, Tx.g)(ip)
                  },
                  analyticsClick: {
                    id: "social.accept_invite",
                    value: `social_menu:${ip.destination.kind}`
                  },
                  children: pp("general:join")
                }), (0, Ap.jsx)(Vp.f, {
                  tooltipInner: (0, Ap.jsx)(Ap.Fragment, {
                    children: pp("general:decline")
                  }),
                  delayShow: 0,
                  children: (0, Ap.jsx)(Yp.j, {
                    className: "SocialMenuInviteDecline",
                    padDefaultFocus: "invite" === (null === Wp || void 0 === Wp ? void 0 : Wp.kind) && Wp.inviteId === ip.id,
                    onClick: () => {
                      Fp.d.declineInvite(ip.id)
                    },
                    analyticsClick: {
                      id: "social.decline_invite",
                      value: `social_menu:${ip.destination.kind}`
                    },
                    children: (0, Ap.jsx)(xp.d, {
                      name: "xmark"
                    })
                  })
                })]
              }, ip.id)))]
            }), (0, Ap.jsxs)("div", {
              className: Ip()("SocialMenuBox SocialMenuRequests", {
                SocialMenuBoxEmpty: !cp && 0 === Lp.length
              }),
              children: [(0, Ap.jsx)(Qx.c, {
                label: (0, Ap.jsxs)(Ap.Fragment, {
                  children: [(0, Ap.jsx)(xp.d, {
                    name: bx.f
                  }), " ", pp("socialBar:requests")]
                }),
                meta: (0, Ap.jsxs)(Ap.Fragment, {
                  children: [Lp.length, Lp.length === ii.m && (0, Ap.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: pp("socialBar:limitReached")
                  })]
                })
              }), cp && (0, Ap.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, Ap.jsx)(jp.c, {})
              }), !cp && 0 === Lp.length && (0, Ap.jsx)("div", {
                className: "SocialMenuEmpty",
                children: pp("socialBar:noFriendRequests")
              }), !cp && Lp.length > 0 && (0, Ap.jsx)("div", {
                className: "PlayerRows",
                children: (0, Ap.jsx)(fo.d, {
                  lazyLoadedClassName: "SocialMenuRequestsLazy",
                  observerUpdateDeps: [Lp],
                  children: Lp.map(((ip, cp) => {
                    const Op = Hp.get(ip.name);
                    return (0, Ap.jsxs)(lx.h, {
                      playerSocialPreview: ip,
                      zIndex: Lp.length - cp,
                      padDefaultFocus: (0, ax.i)(Wp, ip.name, cp),
                      status: Op && (0, Ap.jsx)(Jx.c, {
                        gameNameWithVariation: Op.gameNameWithVariation,
                        isPrivateLobby: Op.isPrivateLobby
                      }),
                      children: [(0, Ap.jsx)(Vp.f, {
                        tooltipInner: (0, Ap.jsx)(Ap.Fragment, {
                          children: pp("general:accept")
                        }),
                        delayShow: 0,
                        children: (0, Ap.jsx)(Yp.f, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            Up((0, ax.e)(wp, cp)), (0, fx.e)(ip.name, !0, {
                              source: "social_menu",
                              announceFriend: !1
                            })
                          },
                          analyticsClick: {
                            id: "social.accept_friend_request",
                            value: "social_menu"
                          },
                          children: (0, Ap.jsx)(xp.d, {
                            name: "check"
                          })
                        })
                      }), (0, Ap.jsx)(Vp.f, {
                        tooltipInner: (0, Ap.jsx)(Ap.Fragment, {
                          children: pp("general:decline")
                        }),
                        delayShow: 0,
                        children: (0, Ap.jsx)(Yp.j, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            Up((0, ax.e)(wp, cp)), (0, fx.e)(ip.name, !1, {
                              source: "social_menu"
                            })
                          },
                          analyticsClick: {
                            id: "social.decline_friend_request",
                            value: "social_menu"
                          },
                          children: (0, Ap.jsx)(xp.d, {
                            name: "xmark"
                          })
                        })
                      })]
                    }, `${ip.name}_${ip.isError}`)
                  }))
                })
              })]
            }), (0, Ap.jsx)(Jx.h, {})]
          }), (0, Ap.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, Ap.jsxs)("div", {
              className: "SocialMenuBox SocialMenuParty",
              children: [(0, Ap.jsx)(Qx.c, {
                label: pp("socialBar:party")
              }), (0, Ap.jsx)(Xx.c, {})]
            }), (0, Ap.jsxs)("div", {
              className: "SocialMenuBox SocialMenuFriends",
              children: [(0, Ap.jsx)(Qx.c, {
                label: (0, Ap.jsxs)(Ap.Fragment, {
                  children: [(0, Ap.jsx)(xp.d, {
                    name: bx.c
                  }), " ", pp("socialBar:friends")]
                }),
                meta: (0, Ap.jsxs)(Ap.Fragment, {
                  children: [op.length, op.length >= (0, ii.b)(Pp.getPlayerRanks()) && (0, Ap.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: pp("socialBar:limitReached")
                  })]
                })
              }), cp && (0, Ap.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, Ap.jsx)(jp.c, {})
              }), !cp && 0 === op.length && (0, Ap.jsx)("div", {
                className: "SocialMenuEmpty",
                children: pp("socialBar:noFriends")
              }), !cp && op.length > 0 && (0, Ap.jsx)("div", {
                className: "PlayerRows",
                children: (0, Ap.jsx)(fo.d, {
                  lazyLoadedClassName: "SocialMenuFriendsLazy",
                  observerUpdateDeps: [op],
                  children: op.map(((pp, cp) => (0, Ap.jsx)(lx.h, {
                    playerSocialPreview: pp,
                    isFriend: !0,
                    hideFriendBadge: !0,
                    onFriendRemoved: pp => {
                      Fp.d.removeFriendFromState(pp)
                    },
                    zIndex: op.length - cp,
                    children: (0, Ap.jsx)(lx.e, {
                      friend: pp,
                      followsLeader: ip,
                      analyticsSurface: "social_menu"
                    })
                  }, `${pp.name}_${pp.isError}`)))
                })
              })]
            })]
          })]
        })
      })
    }
    var gx = cp(2601);
    const Gx = pp => {
        let {
          action: ip,
          padAction: cp
        } = pp;
        const {
          isTouchScreen: Op
        } = (0, mp.o)(["isTouchScreen"]), op = (0, RO.r)();
        return Op && !op ? null : (0, Ap.jsx)(HO.d, {
          className: "EverythingMenuTabKey",
          noaAction: ip,
          padHidesKey: !0,
          padMenuShortcut: cp
        })
      },
      rx = (0, Op.memo)((function() {
        const {
          t: pp
        } = (0, Sp.H)(), {
          gameState: ip,
          openEverythingMenuName: cp,
          crosshairGameView: op
        } = (0, mp.o)(["gameState", "openEverythingMenuName", "crosshairGameView"]), {
          userContext: xp
        } = (0, yp.b)(), Lp = (0, hp.usePurchasesAllowed)(), Dp = (0, bp.N)(), {
          view: Pp
        } = (0, Vi.D)(), Wp = "dot" === Dp || null === Dp && "ready" === (null === Pp || void 0 === Pp ? void 0 : Pp.kind), Up = (pp, ip) => (0, Ap.jsx)(Gx, {
          action: pp,
          padAction: ip
        }), [wp, tp] = (0, Op.useState)(null), Hp = (0, Op.useRef)(null), dp = {
          ..."inGame" === ip ? {} : (0, Yp.bb)({
            focusOnClick: !1
          }),
          ...TO.f
        }, ep = pp => {
          const ip = (0, fO.h)((ip => {
            (0, Yp._)(ip.currentTarget), mp.c.set({
              openEverythingMenuName: pp
            })
          }), "pointerup");
          return {
            ...dp,
            onPointerDown: pp => {
              dp.onPointerDown(pp), ip.onPointerDown(pp)
            },
            onPointerUp: pp => {
              dp.onPointerUp(pp), ip.onPointerUp(pp)
            },
            onClick: ip.onClick
          }
        }, jp = null !== cp, kp = cp !== Hi.n.COSMETIC_SHOP && !op;
        async function Rp() {
          await async function() {
            if (!wp) return;
            await wp(), tp(null)
          }(), mp.c.set({
            openEverythingMenuName: null
          })
        }
        const qp = (0, Op.useRef)(null),
          Cp = (0, Op.useCallback)((() => null !== qp.current && (0, Mx.c)(qp.current)), []);

        function Ep() {
          Cp() || Rp()
        }(0, Op.useEffect)((() => (0, MI.o)(Cp)), [Cp]);
        const Xp = (0, Op.useMemo)((() => "inGame" === ip ? {
          text: pp("settingsMenu:exitGame"),
          onClick: () => {
            (0, qx.b)()
          }
        } : (0, Mp.isDiscordClient)() ? {
          text: pp("settingsMenu:exitGame"),
          onClick: () => {
            ti.i.discordActivity().then((pp => {
              pp.exit("User exited the game")
            }))
          }
        } : null), [ip, pp]);
        const lp = (0, Ap.jsx)("div", {
          className: "EverythingMenuCloseButtonClickZone",
          onClick: Ep,
          children: (0, Ap.jsx)(Yp.l, {
            className: "EverythingMenuCloseButton"
          })
        });
        return (0, Ap.jsx)(bO.b, {
          showing: jp,
          globallyUniqueKey: "EverythingMenu",
          alwaysMountChildren: !0,
          keepsMovement: cp === Hi.n.SHOP,
          doGameplayStartStopOnShow: "inGame" === ip,
          children: (0, Ap.jsx)(aO.b, {
            className: "EverythingMenuContainer",
            show: jp && !op,
            children: (0, Ap.jsx)(hO.c, {
              close: Ep,
              togglePointerLock: !1,
              children: (0, Ap.jsxs)("div", {
                className: "EverythingMenu",
                children: [!(0, MI.j)(cp) && (0, Ap.jsxs)("div", {
                  className: "EverythingMenuTabList",
                  children: [(0, Ap.jsxs)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerStart",
                    children: [Xp && (0, Ap.jsx)(Yp.d, {
                      className: "EverythingMenuBackButton",
                      padDestructive: !0,
                      onClick: () => {
                        Xp.onClick()
                      },
                      children: Xp.text
                    }), jp && Lp && (0, Ap.jsx)("div", {
                      ...dp,
                      className: "EverythingMenuWallet",
                      title: pp("homePage:getPremiumCurrency"),
                      onClick: () => {
                        (0, bp.r)({
                          mode: "current",
                          source: "menuWallet"
                        })
                      },
                      children: (0, Ap.jsx)(Rx.d, {})
                    })]
                  }), (0, Ap.jsxs)("div", {
                    className: "EverythingMenuTabListInner",
                    "data-pad-tabs": "1",
                    children: [(0, Ap.jsxs)("div", {
                      ...ep(Hi.n.SETTINGS),
                      "data-pad-tab": !0,
                      "data-pad-selected": cp === Hi.n.SETTINGS ? "true" : void 0,
                      className: Ip()("EverythingMenuTab", {
                        EverythingMenuTabActive: cp === Hi.n.SETTINGS
                      }),
                      children: [pp("general:settings"), Up("OpenSettings", "pause")]
                    }), (0, Ap.jsxs)("div", {
                      ...ep(Hi.n.CUSTOMISATION),
                      "data-pad-tab": !0,
                      "data-pad-selected": cp === Hi.n.CUSTOMISATION ? "true" : void 0,
                      className: Ip()("EverythingMenuTab", {
                        EverythingMenuTabActive: cp === Hi.n.CUSTOMISATION
                      }),
                      children: [pp("general:player"), Up("OpenCharacterCustomization")]
                    }), vp.featureFlags.useSocialFeatures && (0, Ap.jsxs)("div", {
                      ...ep(Hi.n.SOCIAL),
                      "data-pad-tab": !0,
                      "data-pad-selected": cp === Hi.n.SOCIAL ? "true" : void 0,
                      className: Ip()("EverythingMenuTab", {
                        EverythingMenuTabActive: cp === Hi.n.SOCIAL
                      }),
                      ...(0, Oi.getAnalyticsClickAttributes)({
                        id: "social.open_menu",
                        value: "menu_tab"
                      }, cp === Hi.n.SOCIAL),
                      children: [pp("socialBar:social"), (0, Ap.jsx)(gx.b, {})]
                    }), (0, Vi.y)(Pp) && (0, Ap.jsxs)("div", {
                      ...ep(Hi.n.COSMETIC_SHOP),
                      "data-pad-tab": !0,
                      "data-pad-selected": cp === Hi.n.COSMETIC_SHOP ? "true" : void 0,
                      className: Ip()("EverythingMenuTab EverythingMenuTabCosmeticShop", {
                        EverythingMenuTabActive: cp === Hi.n.COSMETIC_SHOP
                      }),
                      children: [(0, Ap.jsx)("span", {
                        className: "EverythingMenuTabCosmeticShopText",
                        children: pp("store:title")
                      }), "new" === Dp && (0, Ap.jsx)(NS, {}), Wp && (0, Ap.jsx)("span", {
                        className: "EverythingMenuTabStoreBadge EverythingMenuTabStoreDot"
                      })]
                    }), "inGame" === ip && (0, Ap.jsxs)("div", {
                      ...ep(Hi.n.LOBBY_LEADERBOARD),
                      "data-pad-tab": !0,
                      "data-pad-selected": cp === Hi.n.LOBBY_LEADERBOARD ? "true" : void 0,
                      className: Ip()("EverythingMenuTab", {
                        EverythingMenuTabActive: cp === Hi.n.LOBBY_LEADERBOARD
                      }),
                      children: [pp("general:lobby"), Up("OpenLobbyLeaderboard", "leaderboard")]
                    })]
                  }), (0, Ap.jsx)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerEnd",
                    children: lp
                  })]
                }), (0, MI.j)(cp) && lp, (0, Ap.jsxs)("div", {
                  ref: qp,
                  className: "EverythingMenuBody",
                  "data-pad-initial-area": !0,
                  style: {
                    "--everythingMenuBodyBackgroundOpacity": "inGame" === ip ? "0.85" : "1"
                  },
                  children: [(0, Ap.jsx)(XO, {
                    show: cp === Hi.n.SETTINGS,
                    setBeforeResumeCallback: tp
                  }), (0, Ap.jsx)(NO, {
                    show: cp === Hi.n.CUSTOMISATION
                  }), (0, Ap.jsx)(Op.Suspense, {
                    fallback: null,
                    children: (0, Ap.jsx)(HI, {
                      show: cp === Hi.n.SHOP
                    })
                  }), (0, Ap.jsx)(lI, {
                    show: cp === Hi.n.LOBBY_LEADERBOARD
                  }), Lp && (0, Ap.jsx)(mx, {
                    show: cp === Hi.n.COSMETIC_SHOP
                  }), !Lp && (0, Ap.jsx)(ex, {
                    show: cp === Hi.n.COSMETIC_SHOP
                  }), (0, Ap.jsx)(nx, {
                    show: cp === Hi.n.SOCIAL
                  })]
                }), !(0, vp.isMobileApp)() && (0, nO.e)(xp.getPlayerRanks()) && (0, Ap.jsx)(aO.b, {
                  ref: Hp,
                  className: "EverythingMenuBannerDiv",
                  show: kp,
                  "data-pad-hint-bar-avoid": !0,
                  "data-pad-no-step-in": !0,
                  children: (0, Ap.jsx)(Cx.e, {
                    info: {
                      adId: 2,
                      adType: "leaderboard",
                      adAlias: "banner_shop"
                    },
                    sizeInfo: {
                      parentRef: Hp
                    },
                    showing: jp && kp,
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
  5e3: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => wp
    });
    var Op = cp(1049),
      op = cp.n(Op),
      Ip = cp(4735),
      Sp = cp(1201),
      xp = cp(1060),
      Lp = cp(1480),
      Yp = cp(1520),
      Dp = cp(1372),
      Ap = cp(2568),
      Pp = cp(1112);
    const Wp = {
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

    function yp(pp) {
      let {
        platform: ip
      } = pp;
      const cp = "youtube" === ip;
      return (0, Pp.jsxs)("span", {
        className: op()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: cp
        }),
        children: [cp && (0, Pp.jsx)(Ap.d, {
          variant: "white"
        }), !cp && (0, Pp.jsx)(xp.d, {
          name: Wp[ip].icon,
          kit: "brands"
        })]
      })
    }

    function Up(pp) {
      let {
        platform: ip,
        link: cp,
        editable: Op,
        userContext: op,
        onLinksUpdated: Ap
      } = pp;
      const {
        t: Up
      } = (0, Sp.H)(), wp = Wp[ip];
      if (!cp && !Op) return null;

      function vp() {
        var pp;
        if (!op || !Ap) return;
        Dp.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: wp.name
            }
          },
          prefixText: Ip.u[ip],
          placeholderText: "playBloxd",
          initialValue: null !== (pp = null === cp || void 0 === cp ? void 0 : cp.handle) && void 0 !== pp ? pp : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: cp ? "general:remove" : void 0
        }).getResult().then((async pp => {
          if ("notificationTornDown" !== pp && null !== pp) try {
            "submit" === pp.type ? await Yp.b.setSocialLink(op, ip, pp.value) : await Yp.b.clearSocialLink(op, ip), Ap()
          } catch (cp) {
            console.error("Failed to update social link", cp), Dp.NotificationProvider.showAlertPopup({
              title: cp.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (cp) {
        const pp = `@${cp.handle}`;
        return (0, Pp.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: wp.color
          },
          href: cp.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, Pp.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, Pp.jsx)(yp, {
              platform: ip
            }), (0, Pp.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, Pp.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: pp
              })
            })]
          }), Op && (0, Pp.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, Lp.bb)({
              stopPropagation: !0
            }),
            onClick: pp => {
              pp.stopPropagation(), pp.preventDefault(), vp()
            },
            children: (0, Pp.jsx)(xp.d, {
              name: "pen-to-square"
            })
          }), !Op && (0, Pp.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, Pp.jsx)(xp.d, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, Pp.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: wp.color
        },
        ...(0, Lp.bb)(),
        onClick: () => {
          vp()
        },
        children: [(0, Pp.jsx)(yp, {
          platform: ip
        }), (0, Pp.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, Pp.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: wp.name
          }), (0, Pp.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: Up("homePage:profileSocialLinkAdd")
          })]
        }), (0, Pp.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, Pp.jsx)(xp.d, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function wp(pp) {
      let {
        socialLinks: ip,
        editable: cp = !1,
        userContext: Op,
        onLinksUpdated: op
      } = pp;
      if (!cp && 0 === ip.length) return null;
      const Sp = new Map(ip.map((pp => [pp.platform, pp]))),
        xp = cp ? Ip.q : ip.map((pp => pp.platform));
      return (0, Pp.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, Pp.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: xp.map((pp => (0, Pp.jsx)(Up, {
            platform: pp,
            link: Sp.get(pp),
            editable: cp,
            userContext: Op,
            onLinksUpdated: op
          }, pp)))
        })
      })
    }
  },
  34470: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Ip
    });
    var Op = cp(62),
      op = cp(3546);

    function Ip() {
      const [pp, ip] = (0, Op.useState)(!1);
      return (0, Op.useLayoutEffect)((() => {
        let pp = !0;
        return (0, op.h)().then((() => {
          pp && ip(!0)
        })), () => {
          pp = !1
        }
      }), []), pp
    }
  },
  34397: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Up,
      e: () => yp
    });
    cp(34402);
    var Op = cp(1049),
      op = cp.n(Op),
      Ip = cp(62),
      Sp = cp(34392);

    function xp(pp, ip) {
      return Math.max(1, Math.round(pp * ip))
    }

    function Lp(pp, ip) {
      const cp = ip * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
        Op = function(pp, ip) {
          if (pp.lines) return xp(pp.lineThickness, ip) % 2;
          if (pp.dot) return xp(pp.dotSize, ip) % 2;
          return Yp(pp, ip) % 2
        }(pp, ip),
        op = Dp(pp.lineThickness * cp, Op),
        Ip = xp(pp.lineLength, cp),
        Sp = Math.round(pp.gap * cp),
        Lp = pp.outline > 0 ? xp(pp.outline, cp) : 0,
        Pp = [];
      if (pp.lines && (Pp.push({
          x: op + Sp,
          y: 0,
          w: Ip,
          h: op,
          arm: "right"
        }), Pp.push({
          x: -Sp - Ip,
          y: 0,
          w: Ip,
          h: op,
          arm: "left"
        }), Pp.push({
          x: 0,
          y: op + Sp,
          w: op,
          h: Ip,
          arm: "down"
        }), pp.tStyle || Pp.push({
          x: 0,
          y: -Sp - Ip,
          w: op,
          h: Ip,
          arm: "up"
        }), 0 === Sp && Pp.push({
          x: 0,
          y: 0,
          w: op,
          h: op
        })), pp.dot) {
        const ip = Dp(pp.dotSize * cp, Op),
          Ip = pp.lines && 0 === Sp && pp.dotSize > pp.lineThickness ? Math.max(ip, op + 2) : ip,
          xp = (op - Ip) / 2;
        Pp.push({
          x: xp,
          y: xp,
          w: Ip,
          h: Ip
        })
      }
      const Wp = Pp.map((pp => ({
        ...pp,
        x: pp.x - Lp,
        y: pp.y - Lp,
        w: pp.w + 2 * Lp,
        h: pp.h + 2 * Lp
      })));
      let yp = null,
        Up = null;
      if (pp.circle) {
        const ip = xp(pp.circleThickness, cp),
          Ip = function(pp, ip) {
            return pp + (pp % 2 === ip ? 0 : 1)
          }(Yp(pp, cp), Op),
          Sp = (op - Ip) / 2;
        yp = Ap(Sp, Ip, ip), Lp > 0 && (Up = Ap(Sp - Lp, Ip + 2 * Lp, ip + 2 * Lp))
      }
      return {
        cell: op,
        fills: Pp,
        outlines: Lp > 0 ? Wp : [],
        ring: yp,
        ringOutline: Up
      }
    }

    function Yp(pp, ip) {
      return Math.round(pp.circleRadius * ip * 2 + xp(pp.circleThickness, ip))
    }

    function Dp(pp, ip) {
      return Math.max(2 - ip, 2 * Math.round((pp - ip) / 2) + ip)
    }

    function Ap(pp, ip, cp) {
      const Op = 2 * cp >= ip - 1;
      return {
        x: pp,
        y: pp,
        size: ip,
        border: Math.min(cp, Math.floor(ip / 2)),
        filled: Op
      }
    }
    var Pp = cp(1112);
    const Wp = 1.4;

    function yp(pp, ip) {
      return pp && ip ? `scale(${Wp})` : "scale(1)"
    }

    function Up(pp) {
      return "classic" === pp.settings.style ? (0, Pp.jsx)(tp, {
        ...pp
      }) : (0, Pp.jsx)(Rp, {
        ...pp
      })
    }
    const wp = .125;

    function vp(pp, ip) {
      const cp = {};
      if (pp.color !== Sp.d.color && (cp.color = (0, Sp.j)(pp.color)), pp.opacity !== Sp.d.opacity && (cp.opacity = pp.opacity / 100), pp.outline !== Sp.d.outline || pp.outlineColor !== Sp.d.outlineColor) {
        const ip = pp.outline,
          Op = (0, Sp.j)(pp.outlineColor);
        cp.textShadow = ip > 0 ? `-${ip}px 0 ${Op}, 0 ${ip}px ${Op}, ${ip}px 0 ${Op}, 0 -${ip}px ${Op}` : "none"
      }
      if (pp.size !== Sp.d.size) {
        const Op = pp.size / 100;
        cp.fontSize = ip ? `calc(max(1.3rem, 18px) * ${Op})` : `calc(1.3rem * ${Op})`, cp.marginTop = `-${wp}em`, cp.transformOrigin = `50% calc(50% + ${wp}em)`
      }
      return cp
    }

    function tp(pp) {
      let {
        settings: ip,
        touch: cp,
        inPreview: Op,
        inEditor: Ip,
        pressed: Sp = !1,
        pressRef: xp
      } = pp;
      return (0, Pp.jsx)("div", {
        className: op()("Crosshair", {
          Touch: cp,
          CrosshairInPreview: Op,
          CrosshairInEditor: Ip || Op
        }),
        ref: xp,
        style: {
          transform: yp(Sp, ip.growOnClick),
          ...vp(ip, cp)
        },
        children: "+"
      })
    }

    function Hp(pp, ip) {
      return pp / ip + "px"
    }

    function dp(pp, ip, cp, Op) {
      return {
        ...kp(pp, ip, cp),
        width: Hp(pp.w, cp),
        height: Hp(pp.h, cp),
        background: Op
      }
    }

    function ep(pp, ip, cp) {
      return {
        left: Hp(pp.x, ip),
        top: Hp(pp.y, ip),
        width: Hp(pp.size, ip),
        height: Hp(pp.size, ip),
        borderWidth: Hp(pp.border, ip),
        borderColor: cp,
        background: pp.filled ? cp : void 0
      }
    }
    const jp = {
      left: [-1, 0],
      right: [1, 0],
      up: [0, -1],
      down: [0, 1]
    };

    function kp(pp, ip, cp) {
      const [Op, op] = pp.arm ? jp[pp.arm] : [0, 0], Ip = Math.round(ip * cp);
      return {
        left: Hp(pp.x + Op * Ip, cp),
        top: Hp(pp.y + op * Ip, cp)
      }
    }

    function mp(pp) {
      return pp.arm ? {
        "data-arm": pp.arm,
        "data-x": pp.x,
        "data-y": pp.y
      } : {}
    }

    function Rp(pp) {
      let {
        settings: ip,
        inPreview: cp,
        inEditor: Op,
        pressed: xp = !1,
        spread: Yp,
        spreadRef: Dp
      } = pp;
      const Ap = (0, Ip.useRef)(null),
        {
          box: yp,
          dpr: Up
        } = function(pp) {
          const [ip, cp] = (0, Ip.useState)({
            box: {
              left: 0,
              top: 0,
              width: 0,
              height: 0
            },
            dpr: 1
          });
          return (0, Ip.useLayoutEffect)((() => {
            const ip = pp.current;
            if (!ip) return;
            const Op = () => {
              const pp = ip.getBoundingClientRect(),
                Op = window.devicePixelRatio || 1;
              cp((ip => ip.dpr === Op && ip.box.left === pp.left && ip.box.top === pp.top && ip.box.width === pp.width && ip.box.height === pp.height ? ip : {
                box: {
                  left: pp.left,
                  top: pp.top,
                  width: pp.width,
                  height: pp.height
                },
                dpr: Op
              }))
            };
            Op();
            const op = new ResizeObserver(Op);
            return op.observe(ip), window.addEventListener("resize", Op), window.addEventListener("scroll", Op, !0), () => {
              op.disconnect(), window.removeEventListener("resize", Op), window.removeEventListener("scroll", Op, !0)
            }
          }), [pp]), ip
        }(Ap),
        wp = (0, Ip.useRef)(Up);
      wp.current = Up;
      const vp = Lp(ip, Up, xp && ip.growOnClick ? Wp : 1),
        tp = function(pp, ip, cp) {
          const Op = Math.round((pp.left + pp.width / 2) * cp - ip / 2),
            op = Math.round((pp.top + pp.height / 2) * cp - ip / 2);
          return {
            x: Op / cp - pp.left,
            y: op / cp - pp.top
          }
        }(yp, vp.cell, Up),
        Hp = (0, Sp.j)(ip.color),
        jp = (0, Sp.j)(ip.outlineColor),
        Rp = (0, Ip.useRef)(0);
      (0, Ip.useLayoutEffect)((() => {
        if (Dp) return Dp.current = pp => {
          var ip;
          Rp.current = pp, null === (ip = Ap.current) || void 0 === ip || ip.querySelectorAll("[data-arm]").forEach((ip => {
            Object.assign(ip.style, kp(function(pp) {
              return {
                x: Number(pp.dataset.x),
                y: Number(pp.dataset.y),
                arm: pp.dataset.arm
              }
            }(ip), pp, wp.current))
          }))
        }, () => {
          Dp.current = null
        }
      }), [Dp]);
      const qp = null !== Yp && void 0 !== Yp ? Yp : Rp.current;
      return (0, Pp.jsx)("div", {
        ref: Ap,
        className: op()("CrosshairShapes", {
          CrosshairInPreview: cp,
          CrosshairInEditor: Op || cp,
          CrosshairSpreads: void 0 !== Dp
        }),
        children: (0, Pp.jsx)("div", {
          className: "CrosshairShapesOrigin",
          style: {
            left: tp.x,
            top: tp.y,
            opacity: ip.opacity / 100
          },
          children: (0, Pp.jsxs)("div", {
            className: "CrosshairShapesPress",
            children: [vp.ringOutline && (0, Pp.jsx)("div", {
              className: "CrosshairRing",
              style: ep(vp.ringOutline, Up, jp)
            }), vp.outlines.map(((pp, ip) => (0, Pp.jsx)("div", {
              className: "CrosshairPart",
              ...mp(pp),
              style: dp(pp, qp, Up, jp)
            }, `o${ip}`))), vp.ring && (0, Pp.jsx)("div", {
              className: "CrosshairRing",
              style: ep(vp.ring, Up, Hp)
            }), vp.fills.map(((pp, ip) => (0, Pp.jsx)("div", {
              className: "CrosshairPart",
              ...mp(pp),
              style: dp(pp, qp, Up, Hp)
            }, `f${ip}`)))]
          })
        })
      })
    }
  },
  34411: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Dp,
      e: () => wp,
      h: () => Up
    });
    var Op = cp(34392);
    const op = "XH1-",
      Ip = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
      Sp = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
      xp = ["color", "outlineColor"],
      Lp = 1 + 3 * xp.length + Sp.length + 1,
      Yp = Math.ceil(8 * Lp / Math.log2(62)),
      Dp = op.length + Yp;

    function Ap(pp) {
      let ip = 90;
      for (const cp of pp) ip = 31 * ip + cp & 255;
      return ip
    }
    const Pp = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      Wp = BigInt(Pp.length);

    function yp(pp, ip) {
      let cp = 0n;
      for (const op of pp) {
        const pp = Pp.indexOf(op);
        if (pp < 0) return null;
        cp = cp * Wp + BigInt(pp)
      }
      if (cp >> BigInt(8 * ip) !== 0n) return null;
      const Op = [];
      for (let op = 0; op < ip; op++) Op.unshift(Number(0xffn & cp)), cp >>= 8n;
      return Op
    }

    function Up(pp) {
      let ip = "shapes" === pp.style ? 1 : 0;
      Ip.forEach(((cp, Op) => {
        pp[cp] && (ip |= 1 << Op + 1)
      }));
      const cp = [ip];
      for (const op of xp) {
        const ip = (0, Op.g)(op, pp[op]);
        cp.push(ip >> 16 & 255, ip >> 8 & 255, 255 & ip)
      }
      for (const op of Sp) {
        const {
          min: ip,
          step: Ip
        } = Op.b[op];
        cp.push(Math.round(((0, Op.g)(op, pp[op]) - ip) / Ip))
      }
      return cp.push(Ap(cp)), op + function(pp, ip) {
        let cp = 0n;
        for (const op of pp) cp = cp << 8n | BigInt(op);
        let Op = "";
        for (let op = 0; op < ip; op++) Op = Pp[Number(cp % Wp)] + Op, cp /= Wp;
        return Op
      }(cp, Yp)
    }

    function wp(pp) {
      for (const ip of pp.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${Yp}})`, "gi"))) {
        const pp = vp(yp(ip[1], Lp));
        if (pp) return pp
      }
      return null
    }

    function vp(pp) {
      if (!pp || pp.length !== Lp || Ap(pp.slice(0, -1)) !== pp[pp.length - 1]) return null;
      const ip = pp[0],
        cp = {
          ...Op.d,
          style: 1 & ip ? "shapes" : "classic"
        };
      Ip.forEach(((pp, Op) => {
        cp[pp] = 0 !== (ip & 1 << Op + 1)
      }));
      let op = 1;
      for (const Op of xp) cp[Op] = pp[op] << 16 | pp[op + 1] << 8 | pp[op + 2], op += 3;
      for (const Ip of Sp) {
        const {
          min: ip,
          step: Sp
        } = Op.b[Ip];
        cp[Ip] = (0, Op.g)(Ip, ip + pp[op] * Sp), op++
      }
      return cp
    }
  },
  34392: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Op,
      d: () => op,
      g: () => Ip,
      j: () => Yp,
      n: () => Lp,
      o: () => Dp,
      p: () => xp,
      q: () => Sp
    });
    const Op = {
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
      op = Object.freeze({
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

    function Ip(pp, ip) {
      var cp;
      const {
        min: Ip,
        max: Sp,
        step: xp
      } = Op[pp];
      if (!Number.isFinite(ip)) return op[pp];
      const Lp = (null !== (cp = String(xp).split(".")[1]) && void 0 !== cp ? cp : "").length,
        Yp = Number((Math.round(ip / xp) * xp).toFixed(Lp));
      return Math.min(Sp, Math.max(Ip, Yp))
    }

    function Sp(pp, ip, cp) {
      const Op = "number" === typeof cp ? Ip(ip, cp) : cp;
      return {
        ...pp,
        [ip]: Op
      }
    }

    function xp(pp, ip) {
      let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      return Object.keys(op).every((Op => cp.includes(Op) || pp[Op] === ip[Op]))
    }

    function Lp(pp) {
      return xp(pp, op)
    }

    function Yp(pp) {
      return `#${pp.toString(16).padStart(6,"0")}`
    }

    function Dp(pp) {
      const ip = /^#?([0-9a-f]{6})$/i.exec(pp.trim());
      return ip ? parseInt(ip[1], 16) : null
    }
  },
  34420: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Ap,
      f: () => Pp
    });
    var Op = cp(62),
      op = cp(44),
      Ip = cp(34411),
      Sp = cp(34392);
    const xp = "crosshairCode";
    let Lp = null;
    const Yp = new Set;

    function Dp() {
      if (null === Lp) {
        var pp;
        const ip = op.h.getItem(xp);
        Lp = null !== (pp = "string" === typeof ip ? (0, Ip.e)(ip) : null) && void 0 !== pp ? pp : Sp.d
      }
      return Lp
    }

    function Ap(pp) {
      Lp = pp, (0, Sp.n)(pp) ? op.h.removeItem(xp) : op.h.setItem(xp, (0, Ip.h)(pp));
      for (const ip of Yp) ip()
    }

    function Pp() {
      const [pp, ip] = (0, Op.useState)(Dp);
      return (0, Op.useEffect)((() => {
        const pp = () => {
          ip(Dp())
        };
        return pp(), cp = pp, Yp.add(cp), () => {
          Yp.delete(cp)
        };
        var cp
      }), []), pp
    }
  },
  34386: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Ip,
      g: () => op
    });
    var Op = cp(25);

    function op(pp, ip) {
      return pp && !ip
    }

    function Ip() {
      return op(Op.c.get("isTouchScreen"), Op.c.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  34354: (pp, ip, cp) => {
    function Op(pp, ip) {
      return pp && !ip
    }
    cp.d(ip, {
      c: () => Op
    })
  },
  34375: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Ip
    });
    var Op = cp(1080);

    function op() {
      var pp, ip;
      return null !== (pp = null === (ip = screen.orientation) || void 0 === ip ? void 0 : ip.type) && void 0 !== pp ? pp : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const Ip = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && op() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = op(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, Op.NU)(new Error("Game view size held for 60 s"))
        }), 6e4)
      }
      release() {
        clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
          if (document.hidden) document.addEventListener("visibilitychange", this.releaseWhenShown);
          else {
            this.holding = !1;
            for (const pp of this.resizers) pp()
          }
        }), 1e3)
      }
      heldSizer(pp) {
        let ip = !1;
        return () => {
          if (ip && this.isHeld()) return null;
          const cp = pp();
          return ip ||= null !== cp, cp
        }
      }
      onRelease(pp) {
        return this.resizers.add(pp), () => {
          this.resizers.delete(pp)
        }
      }
    }
  },
  34316: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => tp,
      h: () => Yp,
      l: () => Up,
      n: () => yp
    });
    var Op = cp(156),
      op = cp(1284),
      Ip = cp(1211),
      Sp = cp(1149),
      xp = cp(1758);
    const Lp = {
      offline: "homePage:onboardingNameNoAccount",
      outdated: "general:updatedReloading",
      busy: "homePage:changeNameTooFast",
      server: "homePage:changeNameFailed"
    };

    function Yp(pp) {
      return Lp[pp]
    }

    function Dp(pp) {
      return (0, xp.e)(pp) ? "outdated" : pp instanceof Op.e ? 429 === pp.httpCode ? "busy" : "server" : "offline"
    }

    function Ap(pp, ip, cp) {
      return (0, Sp.postJsonWithMetricsCookiesAndJsonResponse)(`${Ip.clientSideServerUrls.indexUrl}${ip}`, cp, {
        retries: 3
      }, pp.getMetricsCookies()).catch((pp => (console.error("Bad response from the server when trying to change name:", ip, pp), {
        outcome: "failed",
        failure: Dp(pp)
      })))
    }

    function Pp(pp) {
      return "outcome" in pp && "failed" === pp.outcome
    }

    function Wp(pp) {
      return console.error("Error when trying to get with new name from DB", pp), {
        outcome: "refused",
        message: pp
      }
    }
    async function yp(pp) {
      const ip = await Ap(pp, "/index/name/random", {});
      return Pp(ip) ? ip : "err" in ip ? Wp(ip.err) : (pp.setPlayerName(ip.name), {
        outcome: "changed",
        name: ip.name
      })
    }
    async function Up(pp, ip) {
      const cp = await Ap(pp, "/index/name/update", {
        name: ip
      });
      return Pp(cp) ? cp : "err" in cp ? Wp(cp.err) : cp.nameExists ? {
        outcome: "taken"
      } : (pp.setPlayerName(ip), {
        outcome: "changed",
        name: ip
      })
    }

    function wp(pp, ip) {
      let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
      const Op = 1 === ip ? 1 : 10 ** (ip - 1),
        Ip = String(Op + Math.floor(cp() * (10 ** ip - Op)));
      return `${pp.slice(0,op.i-ip)}${Ip}`
    }
    const vp = [1, 2, 3, 4];
    async function tp(pp, ip) {
      const cp = await Up(pp, ip);
      if ("taken" !== cp.outcome) return cp;
      for (const Op of vp) {
        const cp = wp(ip, Op),
          op = await Up(pp, cp);
        if ("taken" !== op.outcome) return op
      }
      return {
        outcome: "taken"
      }
    }
  },
  34361: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => xp,
      h: () => Lp
    });
    var Op = cp(25);
    const op = 24,
      Ip = "farNametags",
      Sp = 1e5;

    function xp() {
      var pp;
      return null === (pp = Op.c.get("showDistantNametags")) || void 0 === pp || pp
    }

    function Lp() {
      var pp;
      return null !== (pp = function() {
        const pp = new URLSearchParams(window.location.search).get(Ip),
          ip = null === pp || "" === pp ? NaN : Number(pp);
        return Number.isFinite(ip) && ip >= 0 ? Math.min(ip, Sp) : null
      }()) && void 0 !== pp ? pp : xp() ? 0 : op
    }
  },
  34379: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Yp,
      e: () => Ap,
      h: () => Dp
    });
    var Op = cp(259),
      op = cp(104),
      Ip = cp(129),
      Sp = cp(120),
      xp = cp(652);
    const Lp = new Set(["mali_bifrost"]);

    function Yp() {
      if ("android" !== (0, op.pageOperatingSystem)() || xp.e || (0, xp.c)("webgl_default")) return;
      const pp = (0, Ip.j)(),
        ip = null === pp ? (0, Op.n)() : (0, Op.h)(pp.vendor, pp.renderer);
      return null !== ip && Lp.has(ip) ? pp => (0, Op.k)((0, Sp.c)(pp).vendor, ip) : void 0
    }

    function Dp(pp, ip) {
      return pp ? () => !0 : ip()
    }
    async function Ap(pp) {
      try {
        const ip = Dp(pp, Yp),
          cp = navigator.gpu;
        if (void 0 === ip || void 0 === cp) return !1;
        const Op = await (0, Sp.o)(cp, {
          seed: !1,
          compatibility: ip
        });
        return "string" !== typeof Op && Op.compatibility && !(0, Sp.j)(Op.adapter)
      } catch (ip) {
        return console.error("WebGPU compatibility-mode adapter request failed.", ip), !1
      }
    }
  },
  34453: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => op,
      g: () => Sp
    });
    const Op = [{
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

    function op(pp) {
      let ip, cp = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof pp) {
        if (!Number.isFinite(pp)) return "0";
        if (Math.abs(pp) < 100) {
          const ip = pp < 0 ? "-" : "",
            cp = Math.abs(pp);
          return cp >= 10 ? `${ip}${cp.toFixed(1).replace(/\.0$/,"")}` : `${ip}${cp.toFixed(2).replace(/\.?0+$/,"")}`
        }
        ip = BigInt(Math.floor(pp))
      } else ip = pp;
      const op = ip < 0n ? -ip : ip,
        Ip = ip < 0n ? "-" : "",
        Sp = op.toString();
      if (Sp.length <= cp) return `${Ip}${Sp}`;
      const xp = 3 * Math.floor((Sp.length - 1) / 3);
      if (xp < 3) return `${Ip}${Sp}`;
      if (xp > 3 * Op.length) {
        const pp = Sp[0],
          ip = Sp.slice(1, 3).replace(/0+$/, "");
        return `${Ip}${ip?`${pp}.${ip}`:pp}e${Sp.length-1}`
      }
      const {
        threshold: Lp,
        suffix: Yp
      } = Op[Op.length - xp / 3], Dp = op / Lp, Ap = Number(1000n * (op % Lp) / Lp), Pp = Number(Dp) + Ap / 1e3;
      let Wp;
      return Wp = Pp >= 100 ? Math.floor(Pp).toString() : Pp >= 10 ? Pp.toFixed(1).replace(/\.0$/, "") : Pp.toFixed(2).replace(/\.?0+$/, ""), `${Ip}${Wp}${Yp}`
    }
    const Ip = Op.map((pp => {
      let {
        threshold: ip,
        suffix: cp
      } = pp;
      return {
        threshold: Number(ip),
        suffix: cp
      }
    })).filter((pp => {
      let {
        threshold: ip
      } = pp;
      return Number.isFinite(ip)
    }));

    function Sp(pp) {
      const ip = Math.abs(pp),
        cp = pp < 0 ? "-" : "";
      for (const {
          threshold: Op,
          suffix: op
        }
        of Ip)
        if (ip >= Op) {
          const pp = ip / Op;
          if (pp >= 1e3) return `${cp}${ip.toExponential(2).replace("e+","e")}`;
          let Ip;
          return Ip = pp >= 100 ? Math.floor(pp).toString() : pp >= 10 ? pp.toFixed(1).replace(/\.0$/, "") : pp.toFixed(2).replace(/\.?0+$/, ""), `${cp}${Ip}${op}`
        } return `${cp}${ip}`
    }
  },
  34438: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Dp,
      g: () => Pp,
      k: () => Ap,
      m: () => Sp,
      q: () => Yp,
      r: () => Lp
    });
    var Op = cp(337);
    const op = ["Wood Enchanting Table", "Stone Enchanting Table", "Iron Enchanting Table", "Gold Enchanting Table", "Diamond Enchanting Table"],
      Ip = {
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

    function Sp(pp) {
      var ip;
      return null !== (ip = Ip[pp]) && void 0 !== ip ? ip : {
        translationKey: ""
      }
    }
    const xp = {
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

    function Lp(pp) {
      return op.includes(pp)
    }

    function Yp(pp) {
      var ip;
      return !0 === (null === pp || void 0 === pp || null === (ip = pp.customAttributes) || void 0 === ip ? void 0 : ip.cannotEnchant)
    }

    function Dp(pp, ip) {
      const {
        max: cp
      } = xp[pp].at(-1);
      return ip <= cp
    }

    function Ap(pp) {
      const ip = Math.sin(pp / 80),
        cp = pp => {
          if (pp <= 0) return 0;
          if (pp > 1) return 1;
          let ip = 0;
          const cp = [1, 7, 21, 35, 35, 21, 7, 1];
          for (let Op = 0; Op < cp.length; Op++) {
            ip += (Op % 2 === 0 ? 1 : -1) * cp[Op] * Math.pow(pp, 2 + Op) / (2 + Op)
          }
          return 72 * ip
        },
        Op = .3 - .78 * ip,
        op = .5 - .78 * ip,
        Ip = .6 - .7 * ip,
        Sp = .8 - .6 * ip;
      let xp = cp(Op),
        Lp = cp(op) - xp,
        Yp = cp(Ip) - Lp - xp,
        Dp = cp(Sp) - Yp - Lp - xp;
      Op < .041 && (Lp /= 1 - xp, Yp /= 1 - xp, Dp /= 1 - xp, xp = 0), op < .041 && (xp /= 1 - Lp, Yp /= 1 - Lp, Dp /= 1 - Lp, Lp = 0), Ip < .041 && (xp /= 1 - Yp, Lp /= 1 - Yp, Dp /= 1 - Yp, Yp = 0), Sp < .041 && (xp /= 1 - Dp, Lp /= 1 - Dp, Yp /= 1 - Dp, Dp = 0);
      return {
        commonProb: xp,
        uncommonProb: Lp,
        rareProb: Yp,
        epicProb: Dp,
        legendaryProb: 1 - (Dp + Yp + Lp + xp)
      }
    }

    function Pp(pp, ip) {
      const {
        min: cp,
        max: op
      } = xp[pp][ip], Ip = Op.d.sampleUniformIntDistribution(cp, op, "includeMax");
      return {
        ...Ap(Ip),
        level: Ip
      }
    }
  },
  34402: () => {},
  12931: pp => {
    pp.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAaUlEQVR4AWyOQQ6AIAwECwGNr/HkYzz4Hy9+WEkq01BDDCRDy3ZbGo9rU2c/V+1Bj9JOeW7RokaTBO0zpDxJXmYJKXjdohlwOqbWi4YaJFIgcYEIaGAT+JvHCDNQ8El9ziQz/BdzE00vAAAA//+cTXaSAAAABklEQVQDAHI9N5g1NM74AAAAAElFTkSuQmCC"
  },
  14040: pp => {
    pp.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAGBJREFUGJVNjjEOxEAIA+dW22Rpk2+nSndPZFtMewU6FBdIjJHx536+ABARUl7XCbjvyV9mJqX7BtY6RkS0t9bRc0op5ZuaGTAqtPZCpfG+AqSs8FFlulh7s6j7rh9d9wclFjd0V4Z2HAAAAABJRU5ErkJggg=="
  },
  15507: pp => {
    pp.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAbUlEQVR4nESOSwqAMAxEow0pive/gIcTBBdSsZh+NG20DlnkM8MLhnXuzHSnAwBaI8LIV2RXOiIkaGfMKfXGyByZparbyQZpGNUV/KaHGrWowZKVgSx8Qr8vzdXgAkYFCIn9mZP7E8pQ1Q9fzAMAAP//PTNTFgAAAAZJREFUAwAk1D9dXrbJngAAAABJRU5ErkJggg=="
  },
  16055: pp => {
    pp.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAE1JREFUGJVNjsEOwDAIQp/GZv3/j+xx5zVbsh0wZFxEImCsc88RRwHsB5OaI8SA636hjwosNXSUWuRTphxp5iahHX+pozQs+Yt0rU1SPg0CIfgDMgomAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);