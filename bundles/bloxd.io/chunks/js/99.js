export const id = 99;
export const ids = [99, 196];
export const modules = {
  33655: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      EverythingMenu: () => nr
    });
    var Dk = ik(60),
      fk = ik(1021),
      Sk = ik.n(fk),
      bk = ik(1172),
      rk = ik(1033),
      Pk = ik(2037),
      mk = ik(1410),
      Mk = ik(1085),
      Kk = ik(1066);

    function xk(kk) {
      let {
        items: ek,
        link: ik,
        onClick: Dk,
        selectedItemId: fk,
        className: xk,
        padStartsOnTab: nk = !0
      } = kk;
      const {
        t: Uk
      } = (0, bk.D)(), Hk = (0, Mk.k)(), wk = [];
      for (const Sk of ek) {
        var lk;
        const kk = wk[wk.length - 1];
        var pk;
        if (kk && kk.title === (null !== (lk = Sk.section) && void 0 !== lk ? lk : null)) kk.items.push(Sk);
        else wk.push({
          title: null !== (pk = Sk.section) && void 0 !== pk ? pk : null,
          items: [Sk]
        })
      }
      return (0, Kk.jsxs)("div", {
        className: Sk()("MenuSideBarBody", xk),
        "data-pad-tabs": "2",
        children: [wk.map(((kk, ek) => {
          var ik;
          return (0, Kk.jsxs)("div", {
            className: "MenuSideBarSection",
            children: [kk.title && (0, Kk.jsx)("div", {
              className: "MenuSideBarSectionTitle",
              children: Uk(kk.title)
            }), kk.items.map((kk => {
              var ek;
              const ik = !!kk.iconElement || !!kk.faIcon;
              return (0, Kk.jsxs)("div", {
                "data-pad-tab": !0,
                "data-pad-selected": fk === kk.id ? "true" : void 0,
                "data-pad-default-focus": nk && fk === kk.id || void 0,
                className: Sk()("MenuSideBarBodyTab", {
                  ActiveMenuSideBarBodyTab: fk === kk.id
                }),
                onClick: () => {
                  Dk(kk.id)
                },
                children: [ik && (0, Kk.jsx)("div", {
                  className: "MenuSideBarBodyTabIcon",
                  children: null !== (ek = kk.iconElement) && void 0 !== ek ? ek : (0, Kk.jsx)(rk.d, {
                    name: kk.faIcon
                  })
                }), (!Hk || !ik) && (0, Kk.jsx)("div", {
                  children: Uk(kk.title)
                }), kk.redDot && (0, Kk.jsx)(Pk.e, {
                  top: "-0.2rem",
                  right: "-1rem"
                })]
              }, kk.id)
            }))]
          }, null !== (ik = kk.title) && void 0 !== ik ? ik : ek)
        })), ik && (0, Kk.jsxs)("div", {
          ...(0, mk.db)(),
          "data-pad-destructive": !0,
          className: "MenuSideBarBodyTab MenuSideBarLink",
          onClick: ik.onClick,
          children: [(0, Kk.jsx)("div", {
            className: "MenuSideBarBodyTabIcon",
            children: (0, Kk.jsx)(rk.d, {
              name: ik.faIcon
            })
          }), (0, Kk.jsx)("div", {
            children: Uk(ik.title)
          }), (0, Kk.jsx)(rk.d, {
            name: "arrow-right",
            className: "MenuSideBarLinkArrow"
          })]
        })]
      })
    }
    var nk = ik(2955),
      Uk = ik(1095),
      Hk = ik(2414),
      wk = ik(3079),
      lk = ik(99),
      pk = ik(1893),
      yk = ik(2223),
      Yk = ik(2230),
      Lk = ik(1648),
      Ck = ik(1327),
      Ak = ik(4926),
      jk = ik(22),
      sk = ik(33664);

    function dk(kk) {
      let {
        setApplySettingsCallback: ek
      } = kk;
      const {
        clientEscMenuOptions: ik
      } = (0, jk.n)(["clientEscMenuOptions"]), [fk, Sk] = (0, Dk.useState)(!1), [bk, rk] = (0, Dk.useState)(!1), [Pk, Mk] = (0, Dk.useState)(6400), [xk, nk] = (0, Dk.useState)(3600), [Uk, Hk] = (0, Dk.useState)(!1), [wk, lk] = (0, Dk.useState)(!1);

      function pk(kk) {
        const ek = "screenshot" === kk ? rk : Sk;
        ek(!0);
        const ik = Uk ? "normals" : wk ? "depth" : null;
        sk.devTools.downloadScene(kk, {
          width: Pk,
          height: xk,
          colouring: ik
        }).catch((kk => {
          console.error("Couldn't download the scene", kk)
        })).finally((() => {
          ek(!1)
        }))
      }
      return (0, Kk.jsxs)("div", {
        className: "DeveloperToolsCategory",
        children: [(0, Kk.jsx)(Ak.e, {
          label: "Disable Ambient Occlusion",
          checked: ik.disableAmbientOcclusion,
          onClick: kk => {
            jk.b.setClientEscMenuOptions({
              disableAmbientOcclusion: kk
            }), ek((() => Ak.q))
          },
          circleInfoText: "Disables ambient occlusion which is the shadow effect that makes corners and crevices darker."
        }), sk.devTools.supports("ambientLight") && (0, Kk.jsx)(Ak.m, {
          name: "Ambient Lighting Intensity",
          min: 0,
          max: 1,
          step: .01,
          initValue: ik.ambientLightIntensity,
          onChange: kk => {
            sk.devTools.setAmbientLightIntensity(kk).then((() => {
              jk.b.setClientEscMenuOptions({
                ambientLightIntensity: kk
              })
            })).catch((kk => {
              console.error("Couldn't set the ambient light", kk)
            }))
          },
          circleInfoText: "Sets the intensity of the white ambient light in the scene. The default is 0.5."
        }), sk.devTools.supports("weaponRaycasts") && (0, Kk.jsx)(Ak.e, {
          label: "Show Weapon Raycasts",
          checked: ik.showWeaponRaycasts,
          onClick: kk => {
            jk.b.setClientEscMenuOptions({
              showWeaponRaycasts: kk
            })
          },
          circleInfoText: "Draws debug lines for the raw raycasts used by locally fired weapons."
        }), sk.devTools.supports("sceneDownload") && (0, Kk.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, Kk.jsxs)("div", {
            className: "SettingBox WarningBorder",
            children: [(0, Kk.jsx)(Ak.e, {
              label: "Apply normal-based coloring",
              checked: Uk,
              onClick: kk => {
                Hk(kk), kk && lk(!1)
              },
              circleInfoText: "Colors faces based on their normal direction (red=X, green=Y, blue=Z)."
            }), (0, Kk.jsx)(Ak.e, {
              label: "Apply depth-based coloring",
              checked: wk,
              onClick: kk => {
                lk(kk), kk && Hk(!1)
              },
              circleInfoText: "Colors from white (near) to black (far) based on distance from camera. Only works for screenshot export."
            }), (0, Kk.jsxs)("div", {
              className: "SettingBox DeveloperToolsCategoryScreenshotSettings",
              children: [(0, Kk.jsx)("div", {
                className: "SettingLabel",
                children: "Screenshot size in pixels (width x height)"
              }), (0, Kk.jsx)(Lk.b, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (kk, ek) => {
                  const ik = parseInt(kk) || 6400;
                  Mk(ik)
                },
                placeholderText: "width",
                maxLength: 10,
                defaultValue: Pk.toString()
              }), (0, Kk.jsx)("span", {
                children: "X"
              }), (0, Kk.jsx)(Lk.b, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (kk, ek) => {
                  const ik = parseInt(kk) || 3600;
                  nk(ik)
                },
                placeholderText: "height",
                maxLength: 10,
                defaultValue: xk.toString()
              })]
            }), (0, Kk.jsxs)("div", {
              className: "DeveloperToolsCategoryExportButtons",
              children: [(0, Kk.jsxs)(mk.f, {
                onClick: () => {
                  pk("screenshot")
                },
                disabled: bk,
                children: [bk && (0, Kk.jsx)(Ck.d, {}), "Download Screenshot"]
              }), (0, Kk.jsxs)(mk.f, {
                onClick: () => {
                  pk("glb")
                },
                disabled: fk,
                children: [fk && (0, Kk.jsx)(Ck.d, {}), "Download GLB"]
              })]
            })]
          }), (0, Kk.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: 'To download GLB of scene with textures you need to "Disable Block Texture Atlas" in graphic settings first (you will need to reload the page to apply the setting).'
          })]
        })]
      })
    }
    var Vk = ik(131),
      Fk = ik(1104),
      uk = ik(1177),
      qk = ik(2963),
      Ik = ik(1479),
      zk = ik(1248),
      Qk = ik(1216),
      vk = ik(3047),
      Ek = ik(2003),
      hk = ik(1459),
      ak = ik(314),
      Wk = ik(2239),
      tk = ik(2250),
      Xk = ik(2634),
      Bk = ik(1617),
      ck = ik(3020),
      Tk = ik(3005),
      Zk = ik(3054),
      Ok = ik(197);

    function gk(kk) {
      const {
        t: ek,
        selectedLanguage: ik
      } = (0, bk.D)(), {
        userContext: fk
      } = (0, Uk.d)(), {
        superRankInfo: Sk
      } = fk, rk = kk && ((0, ak.mc)(Sk) || fk.ranksMayChange) && (0, tk.purchasesAllowed)(), {
        accountId: Pk,
        data: mk
      } = (0, Xk.g)(ck.e, rk);
      if ((0, Dk.useEffect)((() => {
          if (rk) return ck.e.watchAccount(), Bk.d.addRefetchListener("billing", (kk => {
            "reconnected" === kk ? ck.e.refreshAfterReconnect() : ck.e.refresh()
          }))
        }), [rk]), !rk || !(0, ak.mc)(Sk) || null === mk || Pk !== fk.whamm) return null;
      const Mk = function(kk, ek, ik) {
        const Dk = Zk.h[(0, Zk.b)(Zk.h, ek)],
          fk = void 0 === Dk ? void 0 : (0, Ok.c)(kk.entitlements, Dk.entitlementId);
        return void 0 === fk || null === fk.expiresAt || (0, Tk.g)(fk) <= ik ? null : fk.willRenew && null === fk.billingIssueDetectedAt ? {
          renews: !0,
          at: Math.max(fk.expiresAt, ik)
        } : {
          renews: !1,
          at: (0, Tk.g)(fk)
        }
      }(mk, Sk.tier, Date.now());
      if (null === Mk) return null;
      const Kk = Mk.renews ? "store:renewsOn" : "store:endsOn";
      return ek(Kk, {
        date: new Date(Mk.at).toLocaleDateString((0, bk.n)(ik.code, Kk), {
          year: "numeric",
          month: "short",
          day: "numeric"
        })
      })
    }
    var Gk = ik(1345),
      Nk = ik(1192),
      Rk = ik(4823),
      Jk = ik(1432),
      ke = ik(3613),
      ee = ik(2214);

    function ie(kk) {
      let {
        showing: ek
      } = kk;
      const {
        t: ik
      } = (0, bk.D)(), {
        data: Dk,
        failed: fk
      } = (0, Xk.g)(ke.d, ek);
      return 0 === (null === Dk || void 0 === Dk ? void 0 : Dk.length) || null === Dk && !fk ? null : (0, Kk.jsxs)("div", {
        className: "SettingBox AccountSettingsPaymentHistory",
        children: [(0, Kk.jsx)("div", {
          className: "AccountSettingsLabel",
          children: ik("paymentHistory:title")
        }), null === Dk && fk && (0, Kk.jsx)("div", {
          className: "AccountSettingsPaymentHistoryError",
          children: ik("paymentHistory:loadFailed")
        }), null !== Dk && (0, Kk.jsx)("ul", {
          className: "PaymentHistoryList",
          children: Dk.map((kk => (0, Kk.jsxs)("li", {
            className: "PaymentHistoryEntry",
            children: [(0, Kk.jsx)(ee.d, {
              entry: kk
            }), (0, Kk.jsxs)("div", {
              className: "PaymentHistoryEntryText",
              children: [(0, Kk.jsx)("div", {
                children: (0, ee.l)(ik, kk)
              }), (0, Kk.jsxs)("div", {
                className: "PaymentHistoryEntryDate",
                children: [new Date(kk.at).toLocaleDateString(), "number" === typeof kk.orderId && ` \xb7 ${ik("paymentHistory:order",{orderId:kk.orderId})}`]
              })]
            })]
          }, (0, ke.b)(kk))))
        })]
      })
    }
    var De = ik(1847),
      fe = ik(1220),
      Se = ik(1333),
      be = ik(1756),
      re = ik(1291),
      Pe = ik(2990);
    async function me() {
      try {
        return function(kk) {
          const ek = new Map;
          for (const {
              store: ik,
              status: Dk,
              autoRenewStatus: fk,
              managementUrl: Sk
            }
            of Object.values(kk.subscriptions)) !(0, Tk.i)(ik) || (0, Tk.k)(Dk) || "willNotRenew" === fk || ek.has(ik) || ek.set(ik, null !== Sk && void 0 !== Sk ? Sk : Tk.o[ik]);
          return Array.from(ek, (kk => {
            let [ek, ik] = kk;
            return {
              store: ek,
              managementUrl: ik
            }
          }))
        }(await (0, be.l)((0, Pe.d)().getCustomerInfo(), 5e3, "CustomerInfo got no answer in 5 s"))
      } catch (kk) {
        return console.error("Billing: loading CustomerInfo for the player's store subscriptions failed:", kk), null
      }
    }
    var Me = ik(302),
      Ke = ik(2492);
    const xe = {
      appStore: {
        name: "App Store",
        ...Me.Yb.appStore
      },
      googlePlay: {
        name: "Google Play",
        ...Me.Yb.googlePlay
      },
      discord: {
        name: "Discord",
        ...Me.Yb.discord
      }
    };

    function ne(kk) {
      let {
        warning: ek,
        subscriptions: ik
      } = kk;
      const {
        t: Dk
      } = (0, bk.D)();
      return null !== ik && 0 === ik.length ? (0, Kk.jsx)(Kk.Fragment, {
        children: Dk(ek)
      }) : (0, Kk.jsxs)("div", {
        className: "DeleteAccountSubtitle",
        children: [Dk(ek), null === ik && (0, Kk.jsx)("div", {
          className: "DeleteAccountSubtitleNote",
          children: Dk("auth:deleteAccountSubscriptionsLoadFailed")
        }), null !== ik && (0, Kk.jsxs)(Kk.Fragment, {
          children: [(0, Kk.jsx)("div", {
            className: "DeleteAccountSubtitleNote",
            children: Dk("auth:deleteAccountStoreSubscriptions")
          }), (0, Kk.jsx)(Ke.e, {
            className: "DeleteAccountSubtitleLinks",
            links: ik.map((kk => {
              let {
                store: ek,
                managementUrl: ik
              } = kk;
              return {
                ...xe[ek],
                url: ik
              }
            }))
          })]
        })]
      })
    }

    function Ue(kk) {
      let {
        showing: ek
      } = kk;
      const {
        userContext: ik,
        isUserContextUpdating: fk
      } = (0, Uk.d)(), {
        t: Sk
      } = (0, bk.D)(), [rk, Pk] = (0, Dk.useState)(!1), [Mk, xk] = (0, Dk.useState)(null), nk = (0, Dk.useRef)(ek);
      (0, Dk.useEffect)((() => (nk.current = ek, () => {
        nk.current = !1
      })), [ek]);
      const Hk = fk || rk;
      return (0, Kk.jsxs)("div", {
        className: "AccountSettingsDeleteAccountButtonContainer",
        children: [(0, Kk.jsxs)(mk.R, {
          onClick: async function() {
            if (!rk) {
              Pk(!0);
              try {
                const kk = await async function() {
                  const [kk, ek] = await Promise.all([(0, De.d)(ik.availableUserContextTypes) ? me() : [], we(ik)]);
                  if (!nk.current) return fe.d.ok();
                  const Dk = (0, zk.d)(ik.getPlayerName(), !lk.featureFlags.canSeeRealPlayerNames);
                  if (!0 !== await Se.NotificationProvider.showPromptPopup({
                      title: "auth:deleteAccountPopupTitleNamed",
                      textOpts: {
                        title: {
                          playerName: Dk
                        }
                      },
                      subtitle: (0, Kk.jsx)(ne, {
                        warning: He(ik.isLoggedIn(), ek),
                        subscriptions: kk
                      }),
                      confirmText: "auth:deleteAccount",
                      destructive: !0,
                      typedConfirm: ek ? Dk : void 0,
                      confirmTooltip: "auth:deleteAccountPopupConfirmTooltip",
                      cancelText: "general:cancel",
                      cancelTooltip: "auth:deleteAccountPopupCancelTooltip"
                    }).getResult()) return fe.d.ok();
                  const fk = await (0, Fk.postJsonWithMetricsCookiesAndJsonResponse)(`${uk.clientSideServerUrls.indexUrl}/index/metrics/revoke-cookies`, {
                    gameState: jk.b.get("gameState")
                  }, {
                    retries: 3
                  }, ik.getMetricsCookies());
                  if (fk.error) return fe.d.error(fk.error);
                  (0, Vk.e)() && (await re.m.discordActivity()).exit("User deleted their account");
                  return (0, Fk.forgetStoredGuestAccount)(ik.whamm), (0, Fk.forceGlobalSignOut)(!0), fe.d.ok()
                }(), ek = kk.isError() ? kk.asError().message : null;
                xk(ek)
              } catch (kk) {
                console.error("Failed to delete account:", kk), xk(Sk("auth:genericDeleteAccountError"))
              }
              Pk(!1)
            }
          },
          className: "AccountSettingsDeleteAccountButton",
          disabled: Hk,
          children: [Hk && (0, Kk.jsx)("div", {
            className: "DeletingAccountLoader",
            children: (0, Kk.jsx)(Ck.d, {})
          }), Sk("auth:deleteAccount")]
        }), Mk && (0, Kk.jsx)("div", {
          className: "DeleteAccountError",
          children: Mk
        })]
      })
    }

    function He(kk, ek) {
      return (0, Vk.e)() ? "auth:discordActivityDeleteAccountLossWarning" : kk ? "auth:deleteAccountLossWarning" : ek ? "auth:deleteGuestAccountLossWarning" : "auth:deleteGuestAccountWarning"
    }
    async function we(kk) {
      try {
        const {
          accountCreatedAt: ek
        } = await (0, be.l)(hk.b.getPlayerProfile(kk, {
          lowerCaseName: kk.getPlayerName().toLowerCase()
        }), 5e3, "The player's profile got no answer in 5 s");
        return null !== ek && Date.now() - ek >= 7 * ak.g
      } catch (ek) {
        return console.error("Delete Account: loading the account's age failed, so the prompt asks for its name:", ek), !0
      }
    }
    var le = ik(3532),
      pe = ik(3557),
      ye = ik(3548);

    function Ye(kk) {
      let {
        showing: ek
      } = kk;
      const {
        t: ik
      } = (0, bk.D)(), {
        data: Dk,
        failed: fk
      } = (0, Xk.g)(le.d, ek), Sk = null === Dk ? null : (0, le.f)(Dk);
      return (0, Kk.jsxs)("div", {
        className: "SettingBox BlockedAndIgnoredPlayers",
        children: [(0, Kk.jsx)("div", {
          className: "AccountSettingsLabel",
          children: ik("settingsMenu:blockedAndIgnoredPlayers")
        }), null === Sk && !fk && (0, Kk.jsx)(Ck.d, {}), null === Sk && fk && (0, Kk.jsxs)("div", {
          className: "BlockedAndIgnoredPlayersError",
          children: [ik("settingsMenu:blockedAndIgnoredPlayersLoadFailed"), (0, Kk.jsx)(mk.f, {
            className: "SmallTextLight",
            onClick: () => {
              le.d.refresh()
            },
            children: ik("general:tryAgain")
          })]
        }), 0 === (null === Sk || void 0 === Sk ? void 0 : Sk.length) && (0, Kk.jsx)("div", {
          className: "BlockedAndIgnoredPlayersEmpty",
          children: ik("settingsMenu:noBlockedOrIgnoredPlayers")
        }), null !== Sk && Sk.length > 0 && (0, Kk.jsx)("ul", {
          className: "BlockedAndIgnoredPlayersList",
          children: Sk.map((kk => {
            let {
              name: ek,
              exclusion: Dk
            } = kk;
            const fk = ye.h[Dk];
            return (0, Kk.jsxs)("li", {
              className: "BlockedAndIgnoredPlayer",
              children: [(0, Kk.jsx)("div", {
                className: "BlockedAndIgnoredPlayerName",
                children: ek
              }), (0, Kk.jsx)(mk.j, {
                className: "SmallTextLight",
                onClick: () => {
                  (0, pe.g)(fk, ek, {
                    chatMessage: null
                  })
                },
                children: ik(ye.k[fk].text)
              })]
            }, ek)
          }))
        })]
      })
    }
    const Le = (0, Dk.memo)((function(kk) {
      var ek;
      let {
        showing: ik,
        inGame: fk
      } = kk;
      const {
        t: Pk,
        selectedLanguage: Mk
      } = (0, bk.D)(), {
        hideSocialLocationFrom: xk
      } = (0, jk.n)(["hideSocialLocationFrom"]), Hk = (0, nk.b)(), {
        userContext: wk,
        isUserContextUpdating: pk
      } = (0, Uk.d)(), [yk, Yk] = (0, Dk.useState)(null !== (ek = wk.getPlayerName()) && void 0 !== ek ? ek : ""), [sk, dk] = (0, Dk.useState)(null), {
        purchasing: Xk,
        outcome: Bk,
        purchase: ck
      } = (0, qk.b)("/super-rank-welcome"), Tk = (0, ak.Sb)((0, bk.n)(Mk.code, "general:timeLeft"), wk.superRankInfo), Zk = gk(ik), Ok = Tk ? Pk("general:timeLeft", {
        time: Tk
      }) : Zk, [ke, ee] = (0, Dk.useState)(!1), [De, fe] = (0, Dk.useState)(!1), Se = (0, Dk.useRef)(null), be = (0, Dk.useRef)(null), re = (0, Ek.e)({
        showProgressUpdateMessage: !0,
        enabled: !0
      }), Pe = null === re, me = null !== re && void 0 !== re ? re : [], Me = wk !== Fk.NULL_USER_CONTEXT && !wk.isLoggedIn(), Ke = Me && 0 !== (null === re || void 0 === re ? void 0 : re.length), [xe, ne] = (0, Dk.useState)([]), [He, we] = (0, Dk.useState)(!1), le = wk.playerHasRank("youtuber"), pe = (0, Dk.useCallback)((() => hk.b.getPlayerProfile(wk, {
        lowerCaseName: wk.getPlayerName().toLowerCase()
      }).then((kk => {
        ne(kk.socialLinks)
      })).catch((kk => {
        console.error("Failed to refresh social links", kk)
      }))), [wk]);

      function ye(kk) {
        kk !== yk && ((0, zk.m)(kk) ? (kk = (0, zk.p)(kk), dk("Only letters, numbers, and _")) : dk(null), Se.current && (Se.current.value = kk), Yk(kk))
      }
      return (0, Dk.useEffect)((() => (!0 === ik ? (clearInterval(be.current), be.current = setInterval(Hk, 1e3)) : clearInterval(be.current), () => {
        clearInterval(be.current)
      })), [ik, Hk]), (0, Dk.useEffect)((() => {
        var kk;
        Yk(null !== (kk = wk.getPlayerName()) && void 0 !== kk ? kk : "")
      }), [wk]), (0, Dk.useEffect)((() => {
        if (!ik || !le || pk) return;
        let kk = !1;
        return we(!0), ne([]), hk.b.getPlayerProfile(wk, {
          lowerCaseName: wk.getPlayerName().toLowerCase()
        }).then((ek => {
          kk || ne(ek.socialLinks)
        })).catch((kk => {
          console.error("Failed to load social links", kk)
        })).finally((() => {
          kk || we(!1)
        })), () => {
          kk = !0
        }
      }), [ik, le, pk, wk]), (0, Kk.jsxs)("div", {
        className: Sk()("SettingsMenuRightInner AccountSettings", {
          AccountSettingsLocked: fk
        }),
        children: [fk && (0, Kk.jsx)("div", {
          className: "AccountSettingsInGameWarning",
          children: Pk("settingsMenu:accountSettingsInGameWarning")
        }), (0, Kk.jsxs)("div", {
          className: "SettingBox SetAccountNameDiv SmallTextLight",
          children: [(0, Kk.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsNameLabel",
            children: [Pk("homePage:discordNamePopupTitle"), (0, Kk.jsxs)(Ik.LinkPreserveSearch, {
              className: "AccountSettingsViewProfile",
              to: (0, Qk.f)({
                name: wk.getPlayerName()
              }),
              onClick: () => {
                jk.b.set({
                  openEverythingMenuName: null
                })
              },
              children: [(0, Kk.jsx)(rk.d, {
                name: "arrow-up-right-from-square"
              }), " ", Pk("profileCard:viewProfile")]
            })]
          }), (0, Kk.jsxs)("div", {
            className: "EnterAccNameDivWrapper",
            "data-pad-initial-area": !0,
            children: [(0, Kk.jsxs)("div", {
              className: "EnterAccNameInputRow",
              children: [lk.featureFlags.canChangeName && (0, Kk.jsx)(Lk.b, {
                className: "EnterName",
                placeholderText: Pk("homePage:enterName"),
                maxLength: zk.h,
                defaultValue: yk,
                onValueChange: kk => {
                  ye(kk)
                },
                forcedText: ke || !lk.featureFlags.canChangeName ? yk : null,
                blurOnEnter: !0,
                domRef: Se
              }), (0, Kk.jsx)(mk.f, {
                className: "ChooseRandomNameButton",
                onClick: () => {
                  ye((0, zk.e)())
                },
                children: (0, Kk.jsx)(rk.d, {
                  name: "dice",
                  className: "ChooseRandomNameIcon"
                })
              }), !lk.featureFlags.canChangeName && (0, Kk.jsx)("div", {
                className: "EnterName NoInput",
                children: (0, zk.d)(yk, !lk.featureFlags.canSeeRealPlayerNames)
              })]
            }), (0, Kk.jsx)(mk.f, {
              className: "ChooseNameButton",
              disabled: ke || yk === wk.getPlayerName(),
              onClick: () => {
                yk.length < zk.j ? dk(Pk("homePage:changeNameMinLengthError", {
                  length: zk.j
                })) : yk.length > zk.h ? dk(Pk("homePage:changeNameMaxLengthError", {
                  length: zk.h
                })) : (ee(!0), dk(null), async function(kk, ek, ik, Dk) {
                  const fk = await (0, Fk.postJsonWithMetricsCookiesAndJsonResponse)(`${uk.clientSideServerUrls.indexUrl}/index/name/update`, {
                    name: kk
                  }, {
                    retries: 3
                  }, ek.getMetricsCookies()).catch((kk => (console.error("Bad response from the server when trying to update name:", kk), {
                    err: "An error occurred trying to change your name! Please report on discord what steps you took to get this error message."
                  })));
                  fk.err ? (console.error("Error when trying to get with new name from DB", fk.err), Dk(fk.err)) : !0 === fk.nameExists ? Dk("Name is already taken") : ik(kk)
                }(yk, wk, (kk => {
                  wk.setPlayerName(kk), ee(!1)
                }), (kk => {
                  dk(kk), ee(!1)
                })))
              },
              children: Pk("general:choose")
            })]
          }), sk && (0, Kk.jsx)("div", {
            className: "ChooseAccNameError",
            children: sk
          })]
        }), (0, Kk.jsx)(Ak.e, {
          label: (() => {
            if ((0, Nk.m)(xk)) {
              const kk = (0, bk.n)(Mk.code, "general:timeLeft"),
                ek = (0, ak.T)(kk, Date.now(), xk + Nk.i);
              return `${Pk("settingsMenu:hideSocialLocation")} (${Pk("general:timeLeft",{time:ek})})`
            }
            return Pk("settingsMenu:hideSocialLocation")
          })(),
          onClick: () => {
            const kk = !(0, Nk.m)(xk);
            (0, Jk.reportAnalyticsClick)({
              id: "social.hide_location",
              value: kk ? "on" : "off"
            }), fe(!0), hk.b.setHideSocialLocation(wk, kk).then((() => {
              jk.b.set({
                hideSocialLocationFrom: kk ? Date.now() : null
              })
            })).finally((() => {
              fe(!1)
            }))
          },
          checked: (0, Nk.m)(xk),
          disabled: De
        }), le && (0, Kk.jsxs)("div", {
          className: "SettingBox AccountSettingsSocialLinks",
          children: [(0, Kk.jsx)("div", {
            className: "AccountSettingsLabel",
            children: Pk("settingsMenu:socialLinks")
          }), He && (0, Kk.jsx)(Ck.d, {}), !He && (0, Kk.jsx)(Rk.c, {
            socialLinks: xe,
            editable: !0,
            userContext: wk,
            onLinksUpdated: pe
          })]
        }), (0, Kk.jsxs)("div", {
          className: "SettingBox",
          children: [(0, Kk.jsx)("div", {
            className: "AccountSettingsLabel",
            children: Pk(Ke ? "auth:loginOrSwitchAccount" : "auth:login")
          }), Pe && (0, Kk.jsx)(Ck.d, {}), !Pe && 0 === me.length && (0, Kk.jsx)("div", {
            className: "NoLoginOptions",
            children: Pk("auth:noLoginOptions")
          }), !Pe && me.length > 0 && "crazygames" !== Vk.t && (0, Kk.jsx)("div", {
            className: "AccountSettingsLoginButtons",
            children: me
          }), !Pe && me.length > 0 && "crazygames" === Vk.t && (0, Kk.jsxs)("div", {
            className: "AccountSettingsLoginButtons",
            children: [me[0], me.length > 1 && (0, Kk.jsxs)(Kk.Fragment, {
              children: [(0, Kk.jsxs)("div", {
                className: "LegacyLoginOptionsHeader",
                children: [(0, Kk.jsx)("span", {
                  className: "LegacyLoginOptionsTitle",
                  children: Pk("auth:legacyLoginOptions")
                }), (0, Kk.jsx)(Gk.e, {
                  className: "LegacyLoginOptionsInfoIcon",
                  hoverInfo: Pk("auth:legacyLoginOptionsInfo")
                })]
              }), (0, Kk.jsx)("div", {
                className: "LegacyAccountSettingsLoginButtons",
                children: me.slice(1)
              })]
            })]
          }), lk.featureFlags.useLogin && (null !== wk.loggedInInfo || wk.isLoggedIn()) && (0, Kk.jsxs)(Kk.Fragment, {
            children: [(0, Kk.jsx)("div", {
              className: "AccountSettingsLoginDivider"
            }), (0, Kk.jsxs)(mk.R, {
              onClick: () => {
                (0, Fk.forceGlobalSignOut)()
              },
              className: "AccountSettingsSignedInButton",
              children: [(0, Kk.jsx)(rk.d, {
                name: "right-from-bracket"
              }), Pk("auth:signOut")]
            })]
          })]
        }), !wk.playerHasRank("super") && (0, tk.purchasesAllowed)() && (0, Kk.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, Kk.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: [(0, Kk.jsx)(rk.d, {
              name: "bolt"
            }), Pk("homePage:superRank")]
          }), (0, Kk.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [(0, Kk.jsxs)(mk.r, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, Wk.m)({
                  mode: "self",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, Kk.jsx)(rk.d, {
                name: "bolt"
              }), Pk("homePage:getSuperRank")]
            }), (0, Kk.jsxs)(mk.r, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, Wk.m)({
                  mode: "gift",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, Kk.jsx)(rk.d, {
                name: "bolt"
              }), Pk("homePage:giftSuperRank")]
            })]
          })]
        }), wk.playerHasRank("super") && (0, Kk.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, Kk.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: [(0, Kk.jsx)(rk.d, {
              name: "bolt"
            }), Pk("homePage:superRank"), Ok && (0, Kk.jsxs)("div", {
              className: "AccountSettingsSuperRankTimeLeft",
              children: ["(", Ok, ")"]
            })]
          }), (0, tk.purchasesAllowed)() && (0, Kk.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [!(0, ak.mc)(wk.superRankInfo) && (0, Kk.jsxs)(mk.r, {
              className: "AccountSettingsSuperRankProlong",
              loading: Xk,
              onClick: () => {
                ck(vk.l.id, null)
              },
              children: [(0, Kk.jsx)(rk.d, {
                name: "bolt"
              }), Pk("settingsMenu:getSuperRankAdditionalDaysPremiumCurrency", {
                days: vk.l.product.days,
                price: vk.l.price
              })]
            }), (0, Kk.jsxs)(mk.r, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, Wk.m)({
                  mode: "gift",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, Kk.jsx)(rk.d, {
                name: "bolt"
              }), Pk("homePage:giftSuperRank")]
            })]
          }), Bk && (0, Kk.jsx)("div", {
            className: "AccountSettingsSuperRankProlongError SmallTextBold",
            children: Pk(Bk.translationKey)
          })]
        }), (0, Kk.jsx)(ie, {
          showing: ik
        }), lk.featureFlags.useSocialFeatures && (0, Kk.jsx)(Ye, {
          showing: ik
        }), (0, Kk.jsxs)("div", {
          className: "SettingBoxGroup AccountSettingsDeleteAccountGroup",
          children: [(0, Kk.jsxs)("div", {
            className: "SettingBox AccountSettingsDeleteAccount SettingBoxWarning",
            children: [(0, Kk.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: Pk(Ce(Me, Ke))
            }), (0, Vk.e)() && (0, Kk.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: Pk("auth:discordActivityKickWarning")
            }), (0, Kk.jsx)(Ue, {
              showing: ik
            })]
          }), (0, Kk.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: Pk(Me ? "auth:deleteGuestAccountWarning" : "auth:deleteAccountLossWarning")
          })]
        })]
      })
    }));

    function Ce(kk, ek) {
      return kk ? ek ? "auth:deleteGuestAccountButtonTitle" : "auth:deleteGuestAccountWarning" : "auth:deleteAccountButtonTitle"
    }
    var Ae = ik(33682),
      je = ik(3098),
      se = ik(1223),
      de = ik(1400);
    const Ve = (0, Dk.memo)((function(kk) {
        let {
          inGame: ek
        } = kk;
        const {
          t: ik,
          selectedLanguage: Dk
        } = (0, bk.D)(), {
          clientEscMenuOptions: fk,
          showDebugOverlay: Sk
        } = (0, jk.n)(["clientEscMenuOptions", "showDebugOverlay"]), rk = (0, Hk.e)("hideCoordinates");
        let Pk = "settingsMenu:showCoordinates",
          mk = "settingsMenu:showChunkCoordinates";

        function Mk(kk) {
          const ek = new Intl.DisplayNames([kk], {
            type: "language"
          }).of(kk);
          return ek.charAt(0).toUpperCase() + ek.slice(1)
        }
        return rk && (Pk = "settingsMenu:showCoordinatesHidden", mk = "settingsMenu:showChunkCoordinatesHidden"), (0, Kk.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [ek && lk.featureFlags.canUseInviteLinks && (0, Kk.jsxs)("div", {
            className: "SettingBox",
            children: [(0, Kk.jsx)("div", {
              className: "SettingsMenuInviteHeader",
              children: ik("settingsMenu:inviteLink")
            }), (0, Kk.jsx)(Ae.e, {})]
          }), (0, Kk.jsxs)("div", {
            className: "SettingBox",
            children: [(0, Kk.jsx)("div", {
              className: "SliderText",
              style: {
                marginBottom: "10px"
              },
              children: ik("settingsMenu:language")
            }), (0, Kk.jsx)(je.e, {
              options: Object.entries(bk.h).map((kk => {
                let [ek, ik] = kk;
                return {
                  label: (0, Kk.jsxs)("div", {
                    className: "SettingsMenuLanguageOption",
                    children: [(0, Kk.jsx)("img", {
                      src: ik.flagImg,
                      alt: "flag"
                    }), (0, Kk.jsxs)("span", {
                      children: [Mk(ek), " ", (0, Kk.jsxs)("span", {
                        className: "SettingsMenuLanguageOptionCode",
                        children: ["(", ek, ")"]
                      })]
                    })]
                  }),
                  value: ek
                }
              })),
              value: Dk.code,
              onChange: kk => {
                se.f.get().setCurrentLanguage(kk.value)
              }
            })]
          }), !(0, lk.isMobileApp)() && (0, de.d)() && lk.featureFlags.useForceRotateForceFullscreenOverlay && (0, Kk.jsx)(Ak.e, {
            label: ik("settingsMenu:disableFullscreenMode"),
            checked: fk.disableFullscreen,
            onClick: kk => {
              jk.b.setClientEscMenuOptions({
                disableFullscreen: kk
              })
            }
          }), (0, Kk.jsx)(Ak.e, {
            label: ik(Pk),
            checked: fk.showCoordinates,
            onClick: kk => {
              jk.b.setClientEscMenuOptions({
                showCoordinates: kk
              })
            },
            disabled: rk
          }), (0, Kk.jsx)(Ak.e, {
            label: ik(mk),
            checked: fk.showChunkCoordinates,
            onClick: kk => {
              jk.b.setClientEscMenuOptions({
                showChunkCoordinates: kk
              })
            },
            disabled: rk
          }), (0, Kk.jsx)(Ak.e, {
            label: ik("settingsMenu:showFps"),
            checked: fk.showFPS,
            onClick: kk => {
              jk.b.setClientEscMenuOptions({
                showFPS: kk
              })
            }
          }), (0, Kk.jsx)(Ak.e, {
            label: ik("settingsMenu:disableBunnyHopping"),
            checked: fk.disableBunnyHopping,
            onClick: kk => {
              jk.b.setClientEscMenuOptions({
                disableBunnyHopping: kk
              })
            }
          }), (0, re.u)() && (0, Kk.jsx)(Ak.e, {
            label: ik("settingsMenu:showChat"),
            checked: fk.showChat,
            onClick: kk => {
              jk.b.setClientEscMenuOptions({
                showChat: kk
              })
            }
          }), (0, Kk.jsx)(Ak.e, {
            label: ik("settingsMenu:showDebugOverlay"),
            checked: Sk,
            onClick: kk => {
              jk.b.set({
                showDebugOverlay: kk
              })
            }
          }), lk.featureFlags.useSocialFeatures && (0, Kk.jsx)(Ak.e, {
            label: ik("settingsMenu:showFriendOnlineToasts"),
            checked: fk.showFriendOnlineToasts,
            onClick: kk => {
              jk.b.setClientEscMenuOptions({
                showFriendOnlineToasts: kk
              })
            }
          }), (0, Kk.jsx)(Ak.e, {
            label: ik("settingsMenu:showNewItemIndicator"),
            checked: fk.showNewItemIndicator,
            onClick: kk => {
              jk.b.setClientEscMenuOptions({
                showNewItemIndicator: kk
              })
            }
          })]
        })
      })),
      Fe = (0, Dk.memo)((function() {
        const {
          t: kk
        } = (0, bk.D)(), {
          soundVolume: ek,
          musicVolume: ik
        } = (0, jk.n)(["soundVolume", "musicVolume"]);
        return (0, Kk.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [(0, Kk.jsx)(Ak.m, {
            name: kk("settingsMenu:musicVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: ik,
            onChange: kk => {
              jk.b.set({
                musicVolume: Math.round(100 * kk) / 100
              })
            },
            format: kk => kk.toFixed(2)
          }), (0, Kk.jsx)(Ak.m, {
            name: kk("settingsMenu:soundEffectsVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: ek,
            onChange: kk => {
              jk.b.set({
                soundVolume: Math.round(100 * kk) / 100
              })
            },
            format: kk => kk.toFixed(2)
          })]
        })
      }));
    var ue = ik(697),
      qe = ik(1406),
      Ie = ik(3624),
      ze = ik(33685),
      Qe = ik(3447);
    const ve = {
      app: "notificationSettings:pushTargetsApp",
      browser: "notificationSettings:pushTargetsBrowser",
      msnPlay: "notificationSettings:pushTargetsMsnPlay"
    };

    function Ee() {
      const {
        t: kk
      } = (0, bk.D)(), ek = (0, Qe.e)(), {
        mobilePushNotificationsCanAsk: ik
      } = (0, jk.n)(["mobilePushNotificationsCanAsk"]), [fk, Sk] = (0, Dk.useState)(null), [rk, Pk] = (0, Dk.useState)(!1), [Mk, xk] = (0, Dk.useState)(null), [nk, Uk] = (0, Dk.useState)(!1), Hk = (0, Dk.useCallback)((() => {
        (0, Ie.d)().then((kk => {
          ek.current && (Sk(kk), Pk(!1))
        })).catch((kk => {
          console.error("Failed to load push notification targets:", kk), ek.current && Pk(!0)
        }))
      }), [ek]), wk = (0, Dk.useCallback)((() => {
        (0, ze.e)().then((kk => {
          ek.current && xk((() => kk))
        }))
      }), [ek]);
      (0, Dk.useEffect)((() => {
        Hk()
      }), [Hk]), (0, Dk.useEffect)((() => {
        wk()
      }), [wk, ik]), (0, qe.c)(Ie.h, Hk);
      const lk = null === fk ? [] : Object.keys(ve).filter((kk => fk[kk] > 0));
      return (0, Kk.jsxs)("div", {
        className: "SettingBox PushNotificationSettings",
        children: [(0, Kk.jsx)("div", {
          className: "SliderText",
          children: kk("notificationSettings:pushNotifications")
        }), null === fk && rk && (0, Kk.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: kk("notificationSettings:pushTargetsLoadFailed")
        }), null !== fk && 0 === lk.length && (0, Kk.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: kk("notificationSettings:pushTargetsNone")
        }), lk.length > 0 && (0, Kk.jsx)("ul", {
          className: "PushNotificationSettingsTargets",
          children: lk.map((ek => {
            var ik;
            return (0, Kk.jsx)("li", {
              children: kk(ve[ek], {
                count: null !== (ik = null === fk || void 0 === fk ? void 0 : fk[ek]) && void 0 !== ik ? ik : 0
              })
            }, ek)
          }))
        }), null !== Mk && (0, Kk.jsx)(mk.f, {
          className: "PushNotificationSettingsButton",
          loading: nk,
          onClick: () => {
            Uk(!0), Mk().catch((kk => {
              console.error("Failed to turn on push notifications:", kk)
            })).finally((() => {
              ek.current && (Uk(!1), wk())
            }))
          },
          children: kk("notificationSettings:pushTurnOn")
        })]
      })
    }
    const he = {
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
      ae = (0, Dk.memo)((function() {
        const {
          t: kk
        } = (0, bk.D)(), {
          clientEscMenuOptions: ek
        } = (0, jk.n)(["clientEscMenuOptions"]);
        return (0, Kk.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [(0, Kk.jsx)(Ak.i, {
            label: kk("notificationSettings:friendRequests"),
            options: ue.e.map((ek => ({
              value: ek,
              label: kk(he[ek].label)
            }))),
            value: ek.friendRequestNotifications,
            onChange: kk => {
              jk.b.setClientEscMenuOptions({
                friendRequestNotifications: kk
              })
            },
            circleInfoText: (0, Kk.jsx)("div", {
              className: "NotificationSettingLevelsInfo",
              children: ue.e.map((ek => (0, Kk.jsxs)("div", {
                children: [(0, Kk.jsx)("b", {
                  children: kk(he[ek].label)
                }), ": ", kk(he[ek].info)]
              }, ek)))
            })
          }), (0, Kk.jsx)(Ee, {})]
        })
      }));
    var We = ik(4445),
      te = ik(189),
      Xe = ik(280),
      Be = ik(6505),
      ce = ik(3419),
      Te = ik(33693),
      oe = ik(594),
      Ze = ik(26);
    var Oe = ik(610),
      ge = ik(38),
      Ge = ik(4327);
    const Ne = new Map([
      ["chunkHorizAddDist", "horizontal"],
      ["chunkVertAddDist", "vertical"]
    ]);

    function Re(kk) {
      return Ne.has(kk) ? pk.gameBridge.lookup("fY", null) : null
    }

    function Je(kk) {
      if (!(0, oe.F)(jk.b.get("clientEscMenuOptions")[kk])) return jk.b.get("clientEscMenuOptions")[kk];
      const ek = Re(kk);
      return null !== ek ? ek[Ne.get(kk)] : ge.f.getItem(kk)
    }

    function ki(kk, ek) {
      if ("useTouchControls" === kk) return void(0, Ge.d)(ek);
      kk in jk.b.get("clientEscMenuOptions") && jk.b.setClientEscMenuOptions({
        [kk]: ek
      });
      const ik = Re(kk);
      null !== ik && pk.gameBridge.send("setChunkAddDistance", {
        ...ik,
        [Ne.get(kk)]: ek
      }), ge.f.setItem(kk, ek)
    }
    var ei = ik(4376),
      ii = ik(33701),
      Di = ik(33707),
      fi = ik(4437);

    function Si(kk) {
      var ek, fk, rk, Pk;
      let {
        minChunkAddDist: mk,
        getValue: Mk,
        onChange: xk,
        setApplySettingsCallback: nk
      } = kk;
      const {
        t: Uk
      } = (0, bk.D)(), {
        clientEscMenuOptions: wk
      } = (0, jk.n)(["clientEscMenuOptions", "showDistantNametags"]), pk = (0, Dk.useRef)(Mk("showFog")), yk = (0, Dk.useRef)(wk.antiAliasing), Yk = (0, Dk.useRef)(wk.useWebGpu), [Lk, Ck] = (0, Dk.useState)(null), [dk, Vk] = (0, Dk.useState)((() => (0, ce.h)(lk.featureFlags.settings.canUseShaderPacks))), [Fk] = (0, Dk.useState)((() => jk.b.isWebGpuDefaultOff())), [uk] = (0, Dk.useState)(Xe.i);
      (0, Dk.useEffect)((() => {
        let kk = !1;
        return (0, lk.hasUsableWebGpuAdapter)().then((ek => {
          kk || Ck(ek)
        })), (0, ce.m)(lk.featureFlags.settings.canUseShaderPacks) && (0, Be.f)().then((async ek => {
          const Dk = null !== ek && await async function(kk) {
            const [{
              isShaderPackActive: ek
            }, {
              loadPageShaderPackCompiler: Dk
            }] = await Promise.all([ik.e(136).then((() => ik(6498))), Promise.all([ik.e(77), ik.e(133), ik.e(135)]).then((() => ik(6451)))]);
            return ek(kk, await Dk())
          }(ek);
          kk || Vk(Dk)
        })), () => {
          kk = !0
        }
      }), []);
      const qk = function(kk, ek, ik, Dk, fk) {
          return (0, Te.e)(ik, Dk) && !0 === ek ? {
            translationKey: "settingsMenu:newWebGpuForcedOnByShaderPack",
            checked: !0,
            disabled: !0
          } : {
            translationKey: !1 !== ek ? "settingsMenu:newWebGpu" : fk ? "settingsMenu:newWebGpuDisabledUntilRestart" : "settingsMenu:newWebGpuUnsupported",
            checked: kk && !1 !== ek,
            disabled: !0 !== ek
          }
        }(wk.useWebGpu, Lk, dk, Fk, uk),
        Ik = (wk.useWebGpu || (0, Te.e)(dk, Fk)) && dk && !0 === Lk,
        zk = (0, Hk.e)("lightingOverride"),
        Qk = !(0, oe.F)(zk);
      let vk = "settingsMenu:enableLighting";
      Qk && (vk = zk ? "settingsMenu:enableLightingForcedOn" : "settingsMenu:enableLightingForcedOff");
      const Ek = kk => {
          var ek, ik, Dk;
          const fk = null !== (ek = kk.showFog) && void 0 !== ek ? ek : Mk("showFog"),
            Sk = null !== (ik = kk.antiAliasing) && void 0 !== ik ? ik : wk.antiAliasing,
            bk = null !== (Dk = kk.useWebGpu) && void 0 !== Dk ? Dk : wk.useWebGpu,
            rk = !Oe.s && fk !== pk.current || Sk !== yk.current || bk !== Yk.current;
          nk(rk ? () => Ak.q : null)
        },
        hk = (0, Hk.e)("fogChunkDistanceOverride"),
        ak = (0, Hk.e)("fogBlockDistanceOverride"),
        Wk = !(0, oe.F)(hk) || !(0, oe.F)(ak),
        tk = Wk ? "settingsMenu:showFogForcedOn" : "settingsMenu:showFog",
        [Xk, Bk] = (0, We.e)(mk),
        [ck, Tk] = (0, fi.f)(mk),
        Zk = Uk("settingsMenu:chunkLoadDistanceDeviceLimit"),
        Ok = ck < Xk,
        gk = Math.min(null !== (ek = Mk("chunkHorizAddDist")) && void 0 !== ek ? ek : mk[0], ck),
        Gk = !Wk && function(kk, ek) {
          return !0 === kk.showFog && kk.fogChunkDistance > ek
        }(wk, gk);
      return (0, Kk.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [(0, Kk.jsx)(Ak.m, {
          name: Uk("settingsMenu:horizontalChunkLoadDistance"),
          min: mk[0],
          max: Xk,
          selectableMax: ck,
          cappedNote: Zk,
          step: 1,
          initValue: gk,
          onChange: kk => {
            !0 === Mk("showFog") && kk < Mk("fogChunkDistance") && xk("fogChunkDistance", kk), xk("chunkHorizAddDist", kk), Ze.j.tm("updatedChunkLoadDist")
          },
          circleInfoText: Uk("settingsMenu:chunkLoadDistanceInfo")
        }), (0, Kk.jsx)(Ak.m, {
          name: Uk("settingsMenu:verticalChunkLoadDistance"),
          min: mk[1],
          max: Bk,
          selectableMax: Tk,
          cappedNote: Ok ? void 0 : Zk,
          step: 1,
          initValue: Math.min(null !== (fk = Mk("chunkVertAddDist")) && void 0 !== fk ? fk : mk[1], Tk),
          onChange: kk => {
            xk("chunkVertAddDist", kk), Ze.j.tm("updatedChunkLoadDist")
          },
          circleInfoText: Uk("settingsMenu:chunkLoadDistanceInfo"),
          className: "VerticalChunkLoadSlider"
        }), (0, Kk.jsx)(Ak.e, {
          label: Uk("settingsMenu:chunkFadeIn"),
          checked: wk.chunkFadeIn,
          onClick: kk => {
            jk.b.setClientEscMenuOptions({
              chunkFadeIn: kk
            })
          },
          circleInfoText: Uk("settingsMenu:chunkFadeInInfo")
        }), sk.devTools.supports("chunkBorders") && (0, Kk.jsx)(Ak.e, {
          label: Uk("settingsMenu:showChunkBorders"),
          checked: wk.showChunkBorders,
          onClick: kk => {
            jk.b.setClientEscMenuOptions({
              showChunkBorders: kk
            })
          },
          circleInfoText: Uk("settingsMenu:showChunkBordersInfo")
        }), (0, Kk.jsx)(Ak.e, {
          label: Uk(vk),
          checked: wk.enableLighting,
          onClick: kk => {
            jk.b.setClientEscMenuOptions({
              enableLighting: kk
            })
          },
          disabled: Qk
        }), (0, Kk.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, Kk.jsx)(Ak.e, {
            label: Uk(tk),
            checked: wk.showFog,
            onClick: kk => {
              Ek({
                showFog: kk
              }), jk.b.setClientEscMenuOptions({
                showFog: kk
              })
            },
            disabled: Wk,
            className: Sk()({
              SettingBoxWarning: Gk
            })
          }), (0, Kk.jsx)(Ak.m, {
            name: Uk("settingsMenu:fogChunkDistance"),
            min: mk[0],
            max: te.g.maxChunkHorizAddDistance,
            step: 1,
            initValue: null !== (rk = wk.fogChunkDistance) && void 0 !== rk ? rk : mk[0],
            onChange: kk => {
              jk.b.setClientEscMenuOptions({
                fogChunkDistance: kk
              }), Ze.j.tm("fogChunkDistanceChanged", kk)
            },
            circleInfoText: Uk("settingsMenu:fogChunkDistanceInfo"),
            disabled: Wk || !1 === Mk("showFog"),
            className: Sk()({
              SettingBoxWarning: Gk
            })
          }), Gk && (0, Kk.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: Uk("settingsMenu:fogChunkDistanceInfo")
          })]
        }), !Oe.s && (0, Kk.jsx)(Ak.e, {
          label: Uk(Ik ? "settingsMenu:disableBlockTextureAtlasUnavailableWithShaderPack" : "settingsMenu:disableBlockTextureAtlas"),
          checked: !Ik && wk.disableTexAtlas,
          onClick: kk => {
            jk.b.setClientEscMenuOptions({
              disableTexAtlas: kk
            })
          },
          circleInfoText: Uk("settingsMenu:disableBlockTextureAtlasInfo"),
          disabled: Ik
        }), (0, Kk.jsx)(Ak.m, {
          name: Uk("settingsMenu:fieldOfView"),
          min: 50,
          max: 160,
          step: 1,
          initValue: wk.cameraFOV,
          onChange: kk => {
            jk.b.setClientEscMenuOptions({
              cameraFOV: kk
            })
          }
        }), (0, Kk.jsx)(Ak.e, {
          label: Uk("settingsMenu:disableViewBobbing"),
          checked: wk.disableBobbing,
          onClick: kk => {
            jk.b.setClientEscMenuOptions({
              disableBobbing: kk
            })
          },
          circleInfoText: Uk("settingsMenu:disableViewBobbingInfo")
        }), (0, Kk.jsx)(Ak.e, {
          label: Uk("settingsMenu:antiAliasing"),
          checked: wk.antiAliasing,
          onClick: kk => {
            Ek({
              antiAliasing: kk
            }), (0, ei.e)("antiAliasing"), jk.b.setClientEscMenuOptions({
              antiAliasing: kk
            })
          },
          circleInfoText: Uk("settingsMenu:antiAliasingInfo")
        }), (0, Kk.jsx)(Ak.m, {
          name: Uk("settingsMenu:pixelScale"),
          min: 1,
          max: 8,
          step: 1,
          initValue: null !== (Pk = wk.pixelScale) && void 0 !== Pk ? Pk : 1,
          onChange: kk => {
            (kk !== jk.b.get("clientEscMenuOptions").pixelScale || (0, Di.o)()) && (0, ei.e)("pixelScale"), jk.b.setClientEscMenuOptions({
              pixelScale: kk
            })
          },
          circleInfoText: Uk("settingsMenu:pixelScaleInfo"),
          format: kk => `${kk}x`
        }), (0, Kk.jsx)(Ak.e, {
          label: Uk("settingsMenu:pixelSmoothing"),
          checked: wk.pixelSmoothing,
          onClick: kk => {
            jk.b.setClientEscMenuOptions({
              pixelSmoothing: kk
            })
          },
          circleInfoText: Uk("settingsMenu:pixelSmoothingInfo")
        }), Oe.s && (0, Kk.jsx)(Ak.e, {
          label: Uk("settingsMenu:distantNametags"),
          checked: (0, ii.d)(),
          onClick: kk => {
            jk.b.set({
              showDistantNametags: kk
            })
          },
          circleInfoText: Uk("settingsMenu:distantNametagsInfo")
        }), (0, Kk.jsx)(Ak.e, {
          label: Uk(qk.translationKey),
          checked: qk.checked,
          onClick: kk => {
            Ek({
              useWebGpu: kk
            }), jk.b.setClientEscMenuOptions({
              useWebGpu: kk
            })
          },
          circleInfoText: Uk("settingsMenu:newWebGpuInfo"),
          disabled: qk.disabled
        })]
      })
    }
    var bi = ik(4371),
      ri = ik(8694),
      Pi = ik(33723),
      mi = ik(8700),
      Mi = ik(33727);
    const Ki = {
        color: 16777215,
        name: "white"
      },
      xi = {
        color: 0,
        name: "black"
      },
      ni = [Ki, {
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
      Ui = [xi, Ki];

    function Hi(kk) {
      return `${kk} px`
    }

    function wi(kk) {
      return `${kk}%`
    }

    function li(kk) {
      let {
        label: ek,
        value: ik,
        swatches: Dk,
        onChange: fk
      } = kk;
      const {
        t: rk
      } = (0, bk.D)(), Pk = !Dk.some((kk => kk.color === ik));
      return (0, Kk.jsxs)("div", {
        className: "SettingBox CrosshairColorRow",
        children: [(0, Kk.jsx)("div", {
          className: "SliderText",
          children: ek
        }), (0, Kk.jsxs)("div", {
          className: "CrosshairSwatches",
          role: "radiogroup",
          "aria-label": ek,
          children: [Dk.map((kk => {
            let {
              color: ek,
              name: Dk
            } = kk;
            return (0, Kk.jsx)("button", {
              type: "button",
              role: "radio",
              "aria-checked": ek === ik,
              "aria-label": rk(`crosshairSettings:color_${Dk}`),
              "data-pad-focusable": !0,
              className: Sk()("CrosshairSwatch", {
                Selected: ek === ik
              }),
              style: {
                background: (0, Mi.j)(ek)
              },
              onClick: () => {
                fk(ek)
              }
            }, ek)
          })), (0, Kk.jsx)("label", {
            className: Sk()("CrosshairSwatch CrosshairSwatchCustom", {
              Selected: Pk
            }),
            style: Pk ? {
              background: (0, Mi.j)(ik)
            } : void 0,
            title: rk("crosshairSettings:customColor"),
            "data-pad-focusable": !0,
            children: (0, Kk.jsx)("input", {
              type: "color",
              "aria-label": rk("crosshairSettings:customColor"),
              value: (0, Mi.j)(ik),
              onChange: kk => {
                const ek = (0, Mi.p)(kk.target.value);
                null !== ek && fk(ek)
              }
            })
          })]
        })]
      })
    }

    function yi(kk) {
      let {
        settings: ek,
        onChange: ik
      } = kk;
      const {
        t: Dk
      } = (0, bk.D)(), fk = (kk, Dk) => {
        ik((0, Mi.t)(ek, kk, Dk))
      }, Sk = function(kk, ik) {
        let Dk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Hi;
        const {
          min: Sk,
          max: bk,
          step: rk
        } = Mi.d[kk];
        return (0, Kk.jsx)(Ak.m, {
          name: ik,
          min: Sk,
          max: bk,
          step: rk,
          initValue: ek[kk],
          format: Dk,
          onChange: ek => {
            fk(kk, ek)
          }
        }, kk)
      }, rk = ["lines", "dot", "circle"].filter((kk => ek[kk])), Pk = (kk, ik, Dk) => (0, Kk.jsx)(Ak.e, {
        label: ik,
        checked: ek[kk],
        disabled: 1 === rk.length && rk[0] === kk,
        circleInfoText: Dk,
        onClick: ek => {
          fk(kk, ek)
        }
      }, kk), mk = "shapes" === ek.style;
      return (0, Kk.jsxs)(Kk.Fragment, {
        children: [(0, Kk.jsx)(Ak.i, {
          label: Dk("crosshairSettings:style"),
          options: [{
            value: "classic",
            label: Dk("crosshairSettings:styleClassic")
          }, {
            value: "shapes",
            label: Dk("crosshairSettings:styleShapes")
          }],
          value: ek.style,
          onChange: kk => {
            fk("style", kk)
          }
        }), (0, Kk.jsx)(li, {
          label: Dk("crosshairSettings:color"),
          value: ek.color,
          swatches: ni,
          onChange: kk => {
            fk("color", kk)
          }
        }), Sk("opacity", Dk("crosshairSettings:opacity"), wi), !mk && Sk("size", Dk("crosshairSettings:size"), wi), mk && (0, Kk.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [Pk("lines", Dk("crosshairSettings:lines")), ek.lines && Sk("lineLength", Dk("crosshairSettings:lineLength")), ek.lines && Sk("lineThickness", Dk("crosshairSettings:lineThickness")), ek.lines && Sk("gap", Dk("crosshairSettings:gap")), ek.lines && Pk("tStyle", Dk("crosshairSettings:tStyle"))]
        }), mk && (0, Kk.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [Pk("dot", Dk("crosshairSettings:dot")), ek.dot && Sk("dotSize", Dk("crosshairSettings:dotSize"))]
        }), mk && (0, Kk.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [Pk("circle", Dk("crosshairSettings:circle")), ek.circle && Sk("circleRadius", Dk("crosshairSettings:circleRadius")), ek.circle && Sk("circleThickness", Dk("crosshairSettings:circleThickness"))]
        }), (0, Kk.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [Sk("outline", Dk("crosshairSettings:outline"), (kk => kk > 0 ? Hi(kk) : Dk("crosshairSettings:off"))), ek.outline > 0 && (0, Kk.jsx)(li, {
            label: Dk("crosshairSettings:outlineColor"),
            value: ek.outlineColor,
            swatches: Ui,
            onChange: kk => {
              fk("outlineColor", kk)
            }
          })]
        }), Pk("growOnClick", Dk("crosshairSettings:growOnClick")), mk && Pk("forGuns", Dk("crosshairSettings:forGuns"), Dk("crosshairSettings:forGunsInfo"))]
      })
    }
    var Yi = ik(75),
      Li = ik(1261),
      Ci = ik(12544),
      Ai = ik(13760),
      ji = ik(15177),
      si = ik(15657);
    const di = ["sky", "grass", "stone", "sand", "snow", "night"],
      Vi = "4rem";

    function Fi(kk) {
      return {
        backgroundImage: `url(${kk})`,
        backgroundSize: `${Vi} ${Vi}`,
        backgroundRepeat: "repeat",
        imageRendering: "pixelated"
      }
    }

    function ui(kk) {
      return {
        ...(() => {
          switch (kk) {
            case "sky":
              return {
                backgroundImage: "linear-gradient(#3d8fe0 0%, #8cc8f5 45%, #d6eefc 58%, #6fae4a 58.01%, #4f8a33 100%)", backgroundSize: "100vw 100vh", backgroundRepeat: "no-repeat"
              };
            case "grass":
              return Fi(Ci);
            case "stone":
              return Fi(Ai);
            case "sand":
              return Fi(ji);
            case "snow":
              return Fi(si);
            case "night":
              return {
                backgroundImage: "radial-gradient(circle at 50% 50%, #1e2a4a 0%, #070b16 100vmax)", backgroundSize: "100vw 100vh", backgroundRepeat: "no-repeat"
              }
          }
        })(),
        backgroundPosition: "center"
      }
    }

    function qi(kk) {
      return Object.freeze({
        ...Mi.h,
        style: "shapes",
        outline: 1,
        lines: !1,
        ...kk
      })
    }
    const Ii = [{
        id: "default",
        settings: Mi.h
      }, {
        id: "cross",
        settings: qi({
          color: 5046092,
          lines: !0,
          lineLength: 7,
          lineThickness: 2,
          gap: 3
        })
      }, {
        id: "crossDot",
        settings: qi({
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
        settings: qi({
          dot: !0,
          dotSize: 4
        })
      }, {
        id: "circle",
        settings: qi({
          circle: !0,
          circleRadius: 12,
          circleThickness: 1.5,
          dot: !0,
          dotSize: 2
        })
      }, {
        id: "tShape",
        settings: qi({
          color: 16731391,
          lines: !0,
          lineLength: 7,
          lineThickness: 2,
          gap: 3,
          tStyle: !0
        })
      }, {
        id: "tiny",
        settings: qi({
          color: 16776960,
          lines: !0,
          lineLength: 3,
          lineThickness: 1,
          gap: 2
        })
      }, {
        id: "bold",
        settings: qi({
          lines: !0,
          lineLength: 10,
          lineThickness: 3,
          gap: 0,
          outline: 1.5
        })
      }],
      zi = ["growOnClick", "forGuns"];
    var Qi = ik(33735);

    function vi(kk) {
      let {
        label: ek,
        selected: ik,
        onClick: Dk,
        className: fk,
        style: bk,
        children: rk
      } = kk;
      return (0, Kk.jsx)("button", {
        type: "button",
        role: "radio",
        "aria-checked": ik,
        title: ek,
        "aria-label": ek,
        "data-pad-focusable": !0,
        className: Sk()("CrosshairBackdropSwatch", fk, {
          Selected: ik
        }),
        style: bk,
        onClick: Dk,
        children: rk
      })
    }

    function Ei(kk) {
      let {
        backdrop: ek,
        onChange: ik,
        game: Dk
      } = kk;
      const {
        t: fk
      } = (0, bk.D)();
      return (0, Kk.jsxs)("div", {
        className: "CrosshairBackdrops",
        role: "radiogroup",
        "aria-label": fk("crosshairSettings:background"),
        children: [Dk && (0, Kk.jsx)(vi, {
          label: fk("crosshairSettings:bg_game"),
          selected: Dk.selected,
          onClick: Dk.onSelect,
          className: "CrosshairGameSwatch",
          children: (0, Kk.jsx)(rk.d, {
            name: "cube"
          })
        }), di.map((kk => (0, Kk.jsx)(vi, {
          label: fk(`crosshairSettings:bg_${kk}`),
          selected: !(null !== Dk && void 0 !== Dk && Dk.selected) && kk === ek,
          style: ui(kk),
          onClick: () => {
            ik(kk)
          }
        }, kk)))]
      })
    }

    function ai(kk) {
      let {
        settings: ek,
        touch: ik,
        backdrop: Dk,
        onChange: fk
      } = kk;
      const {
        t: rk
      } = (0, bk.D)(), Pk = function(kk) {
        var ek;
        return null !== (ek = Ii.find((ek => (0, Mi.q)(ek.settings, kk, zi)))) && void 0 !== ek ? ek : null
      }(ek);
      return (0, Kk.jsx)("div", {
        className: "CrosshairPresets",
        role: "radiogroup",
        "aria-label": rk("crosshairSettings:presets"),
        children: Ii.map((kk => {
          const bk = (null === Pk || void 0 === Pk ? void 0 : Pk.id) === kk.id;
          return (0, Kk.jsxs)("button", {
            type: "button",
            role: "radio",
            "aria-checked": bk,
            "data-pad-focusable": !0,
            className: Sk()("CrosshairPreset", {
              Selected: bk
            }),
            onClick: () => {
              fk(function(kk, ek) {
                return {
                  ...ek.settings,
                  growOnClick: kk.growOnClick,
                  forGuns: kk.forGuns
                }
              }(ek, kk))
            },
            children: [(0, Kk.jsx)("div", {
              className: "CrosshairPresetStage",
              style: ui(Dk),
              children: (0, Kk.jsx)(Qi.d, {
                settings: kk.settings,
                touch: ik,
                inPreview: !0
              })
            }), (0, Kk.jsx)("div", {
              className: "CrosshairPresetName",
              children: rk(`crosshairSettings:preset_${kk.id}`)
            })]
          }, kk.id)
        }))
      })
    }
    var Wi = ik(1646);

    function ti(kk, ek) {
      const [ik, fk] = (0, Dk.useState)(!1), Sk = () => {
        fk(!1)
      }, [bk, rk] = (0, Dk.useState)(!1), Pk = (0, Dk.useRef)({
        growOnClick: kk.growOnClick,
        forGuns: kk.forGuns
      });
      (0, Dk.useEffect)((() => {
        const ek = Pk.current;
        Pk.current = {
          growOnClick: kk.growOnClick,
          forGuns: kk.forGuns
        }, (kk.growOnClick && !ek.growOnClick || kk.forGuns && !ek.forGuns) && rk(!0)
      }), [kk.growOnClick, kk.forGuns]), (0, Dk.useEffect)((() => {
        if (!bk) return;
        const kk = setTimeout((() => {
          rk(!1)
        }), 600);
        return () => {
          clearTimeout(kk)
        }
      }), [bk]);
      const mk = ik || bk;
      return {
        view: {
          pressed: mk,
          spread: mk && kk.forGuns && !kk.growOnClick ? 6 : 0
        },
        handlers: {
          onPointerDown: kk => {
            !kk.target.closest(ek) && (0, Wi.c)(kk.currentTarget, kk.pointerId) && fk(!0)
          },
          onPointerUp: Sk,
          onPointerCancel: Sk,
          onLostPointerCapture: Sk
        }
      }
    }

    function Xi(kk) {
      let {
        settings: ek,
        touch: ik,
        backdrop: Dk,
        className: fk,
        children: bk,
        label: rk
      } = kk;
      const Pk = ti(ek, ".CrosshairStageControls");
      return (0, Kk.jsxs)("div", {
        className: Sk()("CrosshairStage", fk),
        style: ui(Dk),
        ...Pk.handlers,
        children: [(0, Kk.jsx)("div", {
          className: "CrosshairStageHold",
          role: "img",
          "aria-label": rk,
          children: (0, Kk.jsx)(Qi.d, {
            settings: ek,
            touch: ik,
            inPreview: !0,
            ...Pk.view
          })
        }), bk]
      })
    }
    const Bi = "crosshairFullScreen";

    function ci(kk) {
      let {
        settings: ek,
        touch: ik,
        backdrop: fk,
        onBackdrop: Pk,
        inGame: Mk,
        onChange: xk,
        onClose: nk
      } = kk;
      const {
        t: Uk
      } = (0, bk.D)(), Hk = (0, Dk.useRef)(null);
      (0, Li.u)("popup", Hk, nk),
      function(kk) {
        const ek = (0, Dk.useRef)(kk);
        ek.current = kk, (0, Dk.useEffect)((() => {
          window.history.pushState({
            ...window.history.state,
            [Bi]: !0
          }, "");
          let kk = !1;
          const ik = () => {
            kk = !0, ek.current()
          };
          return window.addEventListener("popstate", ik), () => {
            var ek;
            window.removeEventListener("popstate", ik), !kk && null !== (ek = window.history.state) && void 0 !== ek && ek[Bi] && window.history.back()
          }
        }), [])
      }(nk);
      const wk = (0, Dk.useRef)(nk);
      wk.current = nk, (0, Dk.useEffect)((() => {
        function kk(kk) {
          "Escape" === kk.key && (kk.stopPropagation(), wk.current())
        }
        return window.addEventListener("keydown", kk, !0), () => {
          window.removeEventListener("keydown", kk, !0)
        }
      }), []);
      const lk = ti(ek, ".CrosshairFullScreenPanel"),
        [pk, yk] = (0, Dk.useState)(!0),
        Yk = pk && Mk;
      (0, Dk.useEffect)((() => {
        if (Yk) return jk.b.set({
          crosshairGameView: !0
        }), () => {
          jk.b.set({
            crosshairGameView: !1
          })
        }
      }), [Yk]);
      const [Lk, Ck] = (0, Dk.useState)(!0);
      return (0, Yi.createPortal)((0, Kk.jsxs)("div", {
        ref: Hk,
        className: "CrosshairFullScreen",
        style: Yk ? void 0 : ui(fk),
        ...lk.handlers,
        children: [(0, Kk.jsx)(Qi.d, {
          settings: ek,
          touch: ik,
          inEditor: !0,
          ...lk.view
        }), (0, Kk.jsxs)("div", {
          className: Sk()("CrosshairFullScreenPanel", {
            Collapsed: !Lk
          }),
          children: [(0, Kk.jsxs)("div", {
            className: "CrosshairFullScreenBar",
            children: [(0, Kk.jsx)(Ei, {
              backdrop: fk,
              onChange: kk => {
                yk(!1), Pk(kk)
              },
              game: Mk ? {
                selected: Yk,
                onSelect: () => {
                  yk(!0)
                }
              } : void 0
            }), (0, Kk.jsx)(mk.X, {
              className: "CrosshairPanelToggle",
              ariaLabel: Uk(Lk ? "crosshairSettings:hideEditor" : "crosshairSettings:showEditor"),
              onClick: () => {
                Ck(!Lk)
              },
              children: (0, Kk.jsx)(rk.d, {
                name: Lk ? "caret-up" : "pen"
              })
            }), (0, Kk.jsx)(mk.f, {
              className: "CrosshairFullScreenDone",
              onClick: nk,
              padDefaultFocus: !0,
              children: Uk("crosshairSettings:done")
            })]
          }), Lk && (0, Kk.jsxs)("div", {
            className: "CrosshairFullScreenFields",
            children: [(0, Kk.jsx)(ai, {
              settings: ek,
              touch: ik,
              backdrop: fk,
              onChange: xk
            }), (0, Kk.jsx)(yi, {
              settings: ek,
              onChange: xk
            })]
          })]
        })]
      }), document.body)
    }
    var Ti = ik(2622),
      oi = ik(33743);

    function Zi(kk) {
      let {
        settings: ek,
        onChange: ik
      } = kk;
      const {
        t: fk
      } = (0, bk.D)(), Pk = (0, oi.h)(ek), [Mk, xk] = (0, Ti.i)(), [nk, Uk] = (0, Dk.useState)(!1), Hk = (0, Dk.useRef)(null), [wk, lk] = (0, Ti.i)(), [pk, yk] = (0, Dk.useState)(!1);
      return (0, Kk.jsxs)("div", {
        className: "SettingBox CrosshairShare",
        children: [(0, Kk.jsxs)("div", {
          className: "CrosshairShareRow",
          children: [(0, Kk.jsxs)(mk.X, {
            className: Sk()("CrosshairCopy", {
              ActiveSecondaryButton: Mk
            }),
            onClick: () => {
              (0, Ti.g)(Pk, {
                useShareSheet: !1,
                onOutcome: kk => {
                  Uk("failed" === kk), "copied" === kk && xk()
                }
              })
            },
            children: [(0, Kk.jsx)(rk.d, {
              name: Mk ? "check" : "copy"
            }), " ", fk(Mk ? "general:copied" : "crosshairSettings:copy")]
          }), (0, Kk.jsx)(Lk.b, {
            className: "CrosshairPaste",
            domRef: Hk,
            ariaLabel: fk("crosshairSettings:paste"),
            placeholderText: fk("crosshairSettings:paste"),
            onValueChange: kk => {
              const ek = (0, oi.f)(kk);
              yk(!ek && kk.trim().length >= oi.c), ek && (ik(ek), Hk.current.value = "", lk())
            }
          })]
        }), nk && (0, Kk.jsx)("input", {
          className: "CrosshairCode",
          readOnly: !0,
          value: Pk,
          "aria-label": fk("crosshairSettings:copy"),
          onFocus: kk => {
            kk.currentTarget.select()
          }
        }), (0, Kk.jsxs)("div", {
          "aria-live": "polite",
          children: [pk && (0, Kk.jsx)("div", {
            className: "CrosshairShareNote Error",
            children: fk("crosshairSettings:pasteInvalid")
          }), wk && !pk && (0, Kk.jsx)("div", {
            className: "CrosshairShareNote",
            children: fk("crosshairSettings:applied")
          })]
        })]
      })
    }
    var Oi = ik(33750);
    let gi = "sky";

    function Gi(kk) {
      let {
        showing: ek
      } = kk;
      const {
        t: ik
      } = (0, bk.D)(), {
        isTouchScreen: fk,
        gameState: Sk,
        clientEscMenuOptions: Pk
      } = (0, jk.n)(["isTouchScreen", "gameState", "clientEscMenuOptions"]), Mk = (0, Oi.d)(), [xk, nk] = (0, Dk.useState)(gi), Uk = kk => {
        gi = kk, nk(kk)
      }, [Hk, wk] = (0, Dk.useState)(!1);
      return (0, Dk.useEffect)((() => {
        ek || wk(!1)
      }), [ek]), (0, Kk.jsxs)("div", {
        className: "SettingsMenuRightInner CrosshairCategory",
        children: [(0, Kk.jsx)("div", {
          className: "CrosshairPreviewSticky",
          children: (0, Kk.jsx)(Xi, {
            className: "CrosshairPreviewStage",
            settings: Mk,
            touch: fk,
            backdrop: xk,
            label: ik("crosshairSettings:preview"),
            children: (0, Kk.jsxs)("div", {
              className: "CrosshairPreviewBar CrosshairStageControls",
              children: [(0, Kk.jsx)(Ei, {
                backdrop: xk,
                onChange: Uk
              }), (0, Kk.jsxs)(mk.X, {
                className: "CrosshairFullScreenButton",
                onClick: () => {
                  wk(!0)
                },
                children: [(0, Kk.jsx)(rk.d, {
                  name: "expand"
                }), " ", ik("crosshairSettings:fullScreen")]
              })]
            })
          })
        }), (0, Kk.jsx)("div", {
          className: "SettingBox",
          children: (0, Kk.jsx)(ai, {
            settings: Mk,
            touch: fk,
            backdrop: xk,
            onChange: Oi.b
          })
        }), (0, Kk.jsx)(Zi, {
          settings: Mk,
          onChange: Oi.b
        }), fk && (0, Kk.jsx)(mi.b, {
          note: (0, Pi.h)(fk, Pk.touchActionButtons) ? ik("crosshairSettings:touchNote") : void 0
        }), (0, Kk.jsx)(yi, {
          settings: Mk,
          onChange: Oi.b
        }), Hk && (0, Kk.jsx)(ci, {
          settings: Mk,
          touch: fk,
          backdrop: xk,
          onBackdrop: Uk,
          inGame: "inGame" === Sk,
          onChange: Oi.b,
          onClose: () => {
            wk(!1)
          }
        })]
      })
    }
    var Ni = ik(8696),
      Ri = ik(1373),
      Ji = ik(4924),
      kD = ik(33757),
      eD = ik(1922),
      iD = ik(4239),
      DD = ik(1924),
      fD = ik(706);
    const SD = (0, Dk.memo)((function() {
      const {
        clientEscMenuOptions: kk
      } = (0, jk.n)(["clientEscMenuOptions"]), {
        recording: ek,
        clipping: ik,
        hasClipBuffer: fk
      } = (0, eD.h)("replayRecorder"), bk = (0, eD.e)("connectedGame", (kk => kk.replay)), rk = (0, iD.m)(), Pk = !1 === (0, Hk.e)("canRecordReplays");
      (0, Dk.useEffect)((() => {
        pk.gameBridge.send("setRecorderPrefs", {
          clipping: kk.enableClipping,
          clipSeconds: kk.clipDurationSeconds
        })
      }), [kk.enableClipping, kk.clipDurationSeconds]);
      const Mk = rk || bk,
        xk = !Mk && !Pk,
        nk = ek || xk,
        Uk = xk,
        wk = Uk && ik && !ek;

      function lk() {
        nk && pk.gameBridge.send("toggleRecording", null)
      }
      return (0, Kk.jsxs)("div", {
        className: "SettingsMenuRightInner ReplayViewerCategory",
        children: [(0, Kk.jsxs)("div", {
          className: "SettingBox",
          children: [(0, Kk.jsx)("div", {
            className: "ReplayViewerCategoryRecordingRow",
            children: ek ? (0, Kk.jsxs)(Kk.Fragment, {
              children: [(0, Kk.jsxs)(mk.R, {
                className: "ReplayViewerCategoryButton",
                onClick: lk,
                disabled: !nk,
                children: [(0, Kk.jsx)("span", {
                  children: "Stop Recording"
                }), (0, Kk.jsx)(DD.d, {
                  noaAction: "recordGame"
                })]
              }), (0, Kk.jsx)(kD.e, {
                className: "ReplayViewerCategoryRecordingIndicator"
              })]
            }) : (0, Kk.jsxs)(mk.f, {
              className: "ReplayViewerCategoryButton",
              onClick: lk,
              disabled: !nk,
              children: [(0, Kk.jsx)("span", {
                children: "Start Recording"
              }), (0, Kk.jsx)(DD.d, {
                noaAction: "recordGame"
              })]
            })
          }), Pk && (0, Kk.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Recording is turned off in this game."
          }), Mk && !ek && (0, Kk.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Close Replay Mode to start recording."
          })]
        }), (0, Kk.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, Kk.jsx)(Ak.e, {
            label: "Enable clipping",
            checked: kk.enableClipping,
            disabled: !Uk,
            onClick: function(kk) {
              Uk && jk.b.setClientEscMenuOptions({
                enableClipping: kk
              })
            },
            className: Sk()({
              SettingBoxDisabled: !Uk
            })
          }), (0, Kk.jsx)(Ak.m, {
            name: "Clip duration (seconds)",
            min: fD.o,
            max: fD.m,
            step: fD.e,
            initValue: kk.clipDurationSeconds,
            onChange: function(kk) {
              jk.b.setClientEscMenuOptions({
                clipDurationSeconds: kk
              })
            },
            circleInfoText: "Longer clip durations use more memory and may affect performance.",
            disabled: !Uk || !kk.enableClipping
          })]
        }), (0, Kk.jsxs)("div", {
          className: "SettingBox",
          children: [(0, Kk.jsxs)(mk.f, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              wk && pk.gameBridge.send("saveClip", null)
            },
            disabled: !wk,
            children: [(0, Kk.jsx)("span", {
              children: "Record clip"
            }), (0, Kk.jsx)(DD.d, {
              noaAction: "recordClip"
            })]
          }), kk.enableClipping && !fk && Uk && !ek && (0, Kk.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clip buffer is filling \u2014 play for a moment, then save."
          }), ek && (0, Kk.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clipping pauses while a full recording is active."
          })]
        }), (0, Kk.jsxs)("div", {
          className: "SettingBox",
          children: [(0, Kk.jsxs)(mk.f, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              (0, iD.j)(!0), jk.b.set({
                openEverythingMenuName: null
              })
            },
            disabled: rk,
            children: [(0, Kk.jsx)("span", {
              children: "Open Replay Mode"
            }), (0, Kk.jsx)(DD.d, {
              noaAction: "replayViewerOpen"
            })]
          }), rk && (0, Kk.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Replay Mode is already open."
          })]
        }), (0, Kk.jsxs)("div", {
          className: "SettingBox",
          children: [(0, Kk.jsx)("div", {
            className: "ReplayViewerCategoryTutorialTitle",
            children: "How to use Replay Mode"
          }), (0, Kk.jsx)("iframe", {
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
    var bD = ik(1850);
    const rD = {
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
        icon: () => (0, Kk.jsx)("svg", {
          className: "svg-inline--fa",
          viewBox: "0 0 640 512",
          "aria-hidden": "true",
          children: (0, Kk.jsx)("path", {
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
      AU: {
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

    function PD() {
      return Promise.all([ik.e(77), ik.e(133), ik.e(132), ik.e(129)]).then((() => ik(40661))).then((kk => ({
        default: kk.ShaderPackCategory
      })), (kk => (console.error("Failed to load the shader pack settings", kk), {
        default: mD
      })))
    }

    function mD() {
      const {
        t: kk
      } = (0, bk.D)();
      return (0, Kk.jsx)("div", {
        className: "SettingsMenuRightInner",
        children: kk("shaderPack:tabLoadFailed")
      })
    }
    var MD = ik(1371);
    const KD = (0, Dk.lazy)((() => ik.e(271).then((() => ik(40650))).then((kk => ({
        default: kk.BloxdInformation
      }))))),
      xD = (0, Dk.lazy)(PD);

    function nD(kk) {
      return kk ? "general" : "account"
    }
    const UD = new Map,
      HD = (0, Dk.memo)((function(kk) {
        let {
          show: ek,
          setBeforeResumeCallback: ik
        } = kk;
        (0, wk.c)();
        const {
          gameState: fk,
          openSettingsCategory: Sk
        } = (0, jk.n)(["gameState", "openSettingsCategory"]), {
          userContext: Pk
        } = (0, Uk.d)(), {
          t: Mk
        } = (0, bk.D)(), Lk = (0, nk.b)(), Ck = (0, Hk.e)("minChunkAddDist"), Ak = "inGame" === fk, [sk, Fk] = (0, Dk.useState)(nD(Ak)), [uk, qk] = (0, Dk.useState)(null), [Ik, zk] = (0, Dk.useState)([]), Qk = (0, Dk.useRef)(function() {
          const kk = new Date,
            ek = 6 * (kk.getMonth() + kk.getDate()) % Me.x.length;
          return [...Me.x, ...Me.x].slice(ek, ek + 6)
        }()), vk = (0, Dk.useRef)(null), Ek = (0, qe.e)(Ri.j, (0, Ri.e)()), hk = Object.keys(rD).filter((kk => {
          switch (kk) {
            case "replayViewer":
              return Ak;
            case "developerTools":
              return Pk.playerHasRank("developer") || !1;
            case "texturePack":
              return lk.featureFlags.settings.canChangeTexturePack;
            case "AU":
              return lk.featureFlags.settings.canUseShaderPacks;
            case "notifications":
              return lk.featureFlags.useSocialFeatures;
            case "alternativeDomains":
              return "crazygames" !== Vk.t;
            case "controller":
              return lk.featureFlags.useControllerSupport && (Ek || "controller" === sk);
            default:
              return !0
          }
        }));
        (0, qe.c)("toggleFullCoordinateOverlay", (() => {
          const kk = Je("showCoordinates") && Je("showChunkCoordinates") && Je("showFPS");
          ki("showCoordinates", !kk), ki("showChunkCoordinates", !kk), ki("showFPS", !kk), Lk()
        })), (0, qe.c)("updatedChunkLoadDist", (() => {
          Lk()
        })), (0, Dk.useEffect)((() => {
          if (qk(null), null === jk.b.get("openSettingsCategory")) {
            const kk = (0, MD.d)() ? UD.get(Ak) : void 0;
            Fk(kk && hk.includes(kk) ? kk : nD(Ak))
          }
        }), [ek]), (0, Dk.useEffect)((() => {
          null !== Sk && (Fk(Sk), UD.set(Ak, Sk), jk.b.set({
            openSettingsCategory: null
          }))
        }), [Sk, Ak]), (0, Dk.useLayoutEffect)((() => {
          vk.current && (vk.current.scrollTop = 0)
        }), [sk, ek]), (0, Dk.useEffect)((() => {
          "updateLog" === sk && (0, Yk.e)().then(zk)
        }), [sk]), (0, Dk.useEffect)((() => {
          if ((0, oe.F)(Ck)) return;
          const [kk, ek] = (0, bi.f)(), [ik, Dk] = (0, We.e)(Ck), fk = (0, bD.d)(Ck[0], kk, ik), Sk = (0, bD.d)(Ck[1], ek, Dk);
          pk.gameBridge.send("setChunkAddDistance", {
            horizontal: fk,
            vertical: Sk
          })
        }), [Ck]);
        const ak = (0, Dk.useCallback)((async () => {
          uk && (await uk(), qk(null))
        }), [uk]);

        function Wk() {
          jk.b.set({
            openEverythingMenuName: null
          })
        }
        return (0, Dk.useEffect)((() => {
          ik((() => ak))
        }), [ak, ik]), (0, Kk.jsxs)("div", {
          className: "SettingsMenu Menu",
          style: ek ? {} : {
            display: "none"
          },
          children: [(0, Kk.jsx)("div", {
            className: "MenuSideBar",
            children: (0, Kk.jsx)("div", {
              className: "MenuSideBarBody",
              children: (0, Kk.jsx)(xk, {
                items: hk.map((kk => {
                  const ek = rD[kk].icon;
                  return {
                    id: kk,
                    faIcon: "string" === typeof ek ? ek : void 0,
                    iconElement: "string" === typeof ek ? void 0 : (0, Kk.jsx)(ek, {}),
                    title: Mk(rD[kk].displayName),
                    redDot: !1
                  }
                })),
                selectedItemId: sk,
                onClick: kk => {
                  !async function(kk) {
                    await ak(), Fk(kk), UD.set(Ak, kk)
                  }(kk)
                }
              })
            })
          }), (0, Kk.jsxs)("div", {
            ref: vk,
            className: "MenuBody SettingsMenuRight",
            children: ["account" === sk && (0, Kk.jsx)(Le, {
              showing: ek,
              inGame: Ak
            }), "general" === sk && (0, Kk.jsx)(Ve, {
              inGame: Ak
            }), "audio" === sk && (0, Kk.jsx)(Fe, {}), "notifications" === sk && (0, Kk.jsx)(ae, {}), "graphics" === sk && (0, Kk.jsx)(Si, {
              minChunkAddDist: null !== Ck && void 0 !== Ck ? Ck : [2, 2],
              getValue: Je,
              onChange: ki,
              setApplySettingsCallback: qk
            }), "controls" === sk && (0, Kk.jsx)(ri.d, {}), "crosshair" === sk && (0, Kk.jsx)(Gi, {
              showing: ek
            }), "controller" === sk && lk.featureFlags.useControllerSupport && (0, Kk.jsx)(Ni.d, {}), lk.featureFlags.settings.canChangeTexturePack && "texturePack" === sk && (0, Kk.jsx)(Ji.b, {
              setApplySettingsCallback: qk
            }), lk.featureFlags.settings.canUseShaderPacks && "AU" === sk && (0, Kk.jsx)(Dk.Suspense, {
              fallback: null,
              children: (0, Kk.jsx)(xD, {
                setApplySettingsCallback: qk
              })
            }), "updateLog" === sk && (0, Kk.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, Kk.jsx)("div", {
                className: "UpdateLogsContainer",
                children: Ik.map(((kk, ek) => (0, Kk.jsx)(yk.d, {
                  updateLog: kk,
                  index: ek,
                  close: Wk
                }, ek)))
              })
            }), "information" === sk && (0, Kk.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, Kk.jsx)(Dk.Suspense, {
                fallback: null,
                children: (0, Kk.jsx)(KD, {})
              })
            }), "alternativeDomains" === sk && (0, Kk.jsxs)("div", {
              className: "SettingsMenuRightInner",
              children: [(0, Kk.jsx)("div", {
                className: "AlternativeDomainsTitle",
                children: Mk("settingsMenu:unblockedDomainsDescription")
              }), (0, Kk.jsx)("div", {
                className: "AlternativeDomainsList",
                children: Qk.current.map((kk => (0, Kk.jsxs)(mk.f, {
                  onClick: () => {
                    window.open(`https://${kk}`)
                  },
                  children: [(0, Kk.jsx)(rk.d, {
                    name: "arrow-up-right-from-square"
                  }), " ", kk]
                }, kk)))
              })]
            }), "replayViewer" === sk && (0, Kk.jsx)(SD, {}), "developerTools" === sk && (0, Kk.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, Kk.jsx)(dk, {
                setApplySettingsCallback: qk
              })
            }), null !== uk && (0, Kk.jsx)("div", {
              className: "SettingsMenuRightFooter",
              children: (0, Kk.jsx)(mk.f, {
                className: "SettingsMenuRightFooterButton",
                onClick: ak,
                children: Mk("general:apply")
              })
            })]
          })]
        })
      }));
    var wD = ik(2567);
    const lD = ["characters", "emote", "skin", "hat", "head", "eyebrows", "eyes", "back", "body", "legs", "shoes", "profileEffect", "cape", "nameColour"],
      pD = (0, Dk.lazy)((() => Promise.resolve().then((() => ik(4587))).then((kk => {
        kk.needGameClientAfterPaint();
        const ek = kk.matchmakingLibrariesPromise.then((kk => (0, wD.e)(kk.loadCharacterCustomisationUI(), (kk => kk.CharacterCustomisationUI))));
        return Promise.all([kk.ensureGameSetup(), ek]).then((kk => {
          let [, ek] = kk;
          return ek
        }))
      }))));

    function yD(kk) {
      let {
        show: ek
      } = kk;
      const {
        userContext: ik
      } = (0, Uk.d)(), [fk, Sk] = (0, Dk.useState)("characters");
      if (!ek) return null;
      const bk = lD.filter((kk => "cape" !== kk && "nameColour" !== kk || ik.getPlayerRanks().includes("super") || (0, tk.purchasesAllowed)())).map((kk => ({
        id: kk,
        faIcon: Me.D[kk],
        title: Me.F[kk],
        redDot: !1
      })));
      return (0, Kk.jsxs)("div", {
        className: "Menu CharCustomisation",
        children: [(0, Kk.jsx)("div", {
          className: "MenuSideBar",
          children: (0, Kk.jsx)(xk, {
            items: bk,
            selectedItemId: fk,
            onClick: kk => {
              Sk(kk)
            }
          })
        }), (0, Kk.jsx)("div", {
          className: "MenuBody",
          children: (0, Kk.jsx)(Dk.Suspense, {
            fallback: (0, Kk.jsx)("div", {
              className: "CharacterCustomisationLoading",
              children: (0, Kk.jsx)(Ck.d, {})
            }),
            children: (0, Kk.jsx)(pD, {
              selectedTab: fk
            })
          })
        })]
      })
    }
    var YD = ik(1424),
      LD = ik(1426),
      CD = ik(33763),
      AD = ik(4471),
      jD = ik(3390),
      sD = ik(3430),
      dD = ik(33788),
      VD = ik(8611),
      FD = ik(33765),
      uD = ik(33779),
      qD = ik(1877),
      ID = ik(1858),
      zD = ik(4840),
      QD = ik(1240),
      vD = ik(1207),
      ED = ik(1642),
      hD = ik(8680),
      aD = ik(2430),
      WD = ik(2432);

    function tD(kk) {
      return kk ? Object.keys(kk).sort(((ek, ik) => {
        var Dk, fk, Sk, bk;
        const rk = (null !== (Dk = null === (fk = kk[ik]) || void 0 === fk ? void 0 : fk.sortPriority) && void 0 !== Dk ? Dk : 0) - (null !== (Sk = null === (bk = kk[ek]) || void 0 === bk ? void 0 : bk.sortPriority) && void 0 !== Sk ? Sk : 0);
        return 0 !== rk ? rk : ek.localeCompare(ik)
      })) : []
    }
    const XD = [{
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

    function BD(kk) {
      for (const {
          threshold: ek,
          suffix: ik
        }
        of XD)
        if (kk >= ek) {
          const Dk = kk / ek;
          return Dk >= 100 ? `${Math.floor(Dk)}${ik}` : Dk >= 10 ? `${Dk.toFixed(1).replace(/\.0$/,"")}${ik}` : `${Dk.toFixed(2).replace(/\.?0+$/,"")}${ik}`
        } return String(kk)
    }
    var cD = ik(4946);
    const TD = {
        normal: "0.8em",
        big: "1em"
      },
      oD = (0, Dk.memo)((function(kk) {
        let {
          item: ek,
          amount: ik = 0,
          size: Dk = "normal",
          tier: fk = null
        } = kk;
        return (0, Kk.jsx)("div", {
          className: Sk()("SmpSlot", `SmpSlot-${Dk}`),
          children: ek && (0, Kk.jsx)(qD.c, {
            itemName: ek,
            amount: ik > 1 ? ik : 0,
            amountFontSize: TD[Dk],
            enchantmentTier: fk
          })
        })
      }));

    function ZD(kk) {
      let {
        amount: ek,
        exact: ik = !1,
        className: Dk
      } = kk;
      return (0, Kk.jsxs)("span", {
        className: Sk()("SmpGold", Dk),
        children: [(0, Kk.jsx)("span", {
          className: "SmpCoin",
          children: (0, Kk.jsx)(qD.c, {
            itemName: "Gold Coin",
            amount: 0
          })
        }), ik ? ek.toLocaleString("en-US") : BD(ek)]
      })
    }

    function OD(kk) {
      let {
        count: ek = 5,
        grid: ik = !1
      } = kk;
      return (0, Kk.jsx)("div", {
        className: ik ? "SmpCardGrid" : "SmpList",
        "aria-hidden": "true",
        children: Array.from({
          length: ek
        }, ((kk, ek) => (0, Kk.jsxs)("div", {
          className: Sk()(ik ? "SmpListingCard" : "SmpRow", "SmpSkeleton"),
          children: [(0, Kk.jsx)("div", {
            className: Sk()("SmpSlot", ik ? "SmpSlot-big" : "SmpSlot-normal")
          }), (0, Kk.jsxs)("div", {
            className: "SmpRowText",
            children: [(0, Kk.jsx)("b", {}), (0, Kk.jsx)("small", {})]
          }), (0, Kk.jsx)("div", {
            className: "SmpSkeletonButton"
          })]
        }, ek)))
      })
    }

    function gD(kk) {
      let {
        title: ek,
        children: ik
      } = kk;
      return (0, Kk.jsxs)("div", {
        className: "SmpEmpty",
        children: [(0, Kk.jsx)("b", {
          children: ek
        }), ik && (0, Kk.jsx)("small", {
          children: ik
        })]
      })
    }

    function GD(kk) {
      let {
        entry: ek
      } = kk;
      return (0, Kk.jsx)(gD, {
        title: (0, Kk.jsx)(ID.e, {
          text: ek.item.customTitle
        }),
        children: (0, Kk.jsx)(ID.e, {
          text: ek.item.description
        })
      })
    }

    function ND(kk) {
      return (0, Kk.jsx)(cD.b, {
        ...kk,
        className: Sk()("SmpChoice", kk.className),
        reselectable: !0
      })
    }

    function RD() {
      return (0, Kk.jsx)("span", {
        className: "SmpLoader",
        children: (0, Kk.jsx)(Ck.d, {})
      })
    }

    function JD(kk) {
      let {
        value: ek,
        onChange: ik,
        min: fk = 1,
        max: Sk,
        step: bk = 1,
        label: rk
      } = kk;
      const Pk = (0, Dk.useRef)(null),
        mk = (0, Dk.useRef)(ek);
      mk.current = ek;
      const [Mk, xk] = (0, Dk.useState)(null), nk = kk => Math.max(fk, Math.min(Sk, Math.floor(kk))), Uk = kk => {
        const ek = mk.current,
          Dk = "function" === typeof bk ? bk(ek, kk) : bk,
          fk = nk(ek + Dk * kk);
        mk.current = fk, ik(fk)
      };
      (0, Dk.useEffect)((() => {
        if (null === Mk) return;
        let kk;
        const ek = () => {
            xk(null)
          },
          ik = setTimeout((() => {
            kk = setInterval((() => {
              Uk(Mk);
              const kk = mk.current;
              (Mk > 0 ? kk >= Sk : kk <= fk) && ek()
            }), 70)
          }), 380);
        return window.addEventListener("pointerup", ek), window.addEventListener("pointercancel", ek), window.addEventListener("blur", ek), () => {
          clearTimeout(ik), clearInterval(kk), window.removeEventListener("pointerup", ek), window.removeEventListener("pointercancel", ek), window.removeEventListener("blur", ek)
        }
      }), [Mk]), (0, Dk.useEffect)((() => {
        const kk = Pk.current;
        kk && document.activeElement !== kk && kk.value !== String(ek) && (kk.value = String(ek))
      }), [ek]), (0, Dk.useEffect)((() => {
        const kk = Pk.current;
        if (!kk) return;
        const ek = () => {
          kk.value = String(mk.current)
        };
        return kk.addEventListener("blur", ek), () => {
          kk.removeEventListener("blur", ek)
        }
      }), []);
      const Hk = kk => (0, Kk.jsx)("button", {
        type: "button",
        className: "SmpStepButton",
        "aria-label": `${kk>0?"More":"Less"} ${rk}`,
        disabled: kk > 0 ? ek >= Sk : ek <= fk,
        onPointerDown: ek => {
          0 === ek.button && (Uk(kk), xk(kk))
        },
        onKeyDown: ek => {
          "Enter" !== ek.key && " " !== ek.key || Uk(kk)
        },
        onContextMenu: kk => {
          kk.preventDefault()
        },
        children: kk > 0 ? "+" : "\u2212"
      });
      return (0, Kk.jsxs)("div", {
        className: "SmpStepper",
        children: [Hk(-1), (0, Kk.jsx)(Lk.b, {
          className: "SmpStepperInput",
          domRef: Pk,
          defaultValue: String(ek),
          ariaLabel: rk,
          type: "text",
          blurOnEnter: !0,
          onValueChange: kk => {
            const ek = kk.replace(/[^\d]/g, "");
            Pk.current && ek !== kk && (Pk.current.value = ek), "" !== ek && ik(nk(Number(ek)))
          }
        }), Hk(1)]
      })
    }

    function kf(kk) {
      return Math.max(1, 10 ** Math.max(0, Math.floor(Math.log10(Math.max(1, kk))) - 1))
    }
    var ef = ik(33784),
      Df = ik(1218);
    const ff = ["building", "colours", "nature", "decoration", "utility", "tools", "combat", "food", "mobs", "materials", "worldTools"];
    Df.C, ak.xc.length;
    new Map;
    var Sf = ik(3261);

    function bf(kk, ek) {
      var ik;
      return ek && (null === (ik = kk[ek]) || void 0 === ik ? void 0 : ik.smp) || null
    }

    function rf(kk, ek) {
      const ik = [];
      for (const fk of tD(kk)) {
        var Dk;
        const Sk = kk[fk];
        (null === (Dk = Sk.smp) || void 0 === Dk ? void 0 : Dk.kind) === ek && ik.push({
          key: fk,
          item: Sk,
          meta: Sk.smp
        })
      }
      return ik
    }

    function Pf(kk, ek) {
      var ik;
      return null !== (ik = rf(kk, ek)[0]) && void 0 !== ik ? ik : null
    }
    const mf = "50% 0% 50% 0%",
      Mf = [{
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

    function Kf(kk) {
      const ek = kk - (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now());
      for (const {
          divisor: ik,
          suffix: Dk
        }
        of Mf)
        if (ek >= ik) return `${Math.floor(ek/ik)}${Dk}`;
      return "<1s"
    }

    function xf(kk) {
      const ek = kk.map(VD.e),
        ik = [];
      return ek.forEach(((kk, Dk) => {
        const fk = function(kk) {
            const ek = kk.match(/\d+/);
            return ek ? Number(ek[0]) : 0
          }(kk),
          Sk = Dk === ek.length - 1;
        (Sk || 1 === fk || 10 === fk || 100 === fk) && ik.push({
          label: kk,
          quantity: fk,
          isAll: Sk
        })
      })), ik
    }
    let nf = null;

    function Uf(kk, ek) {
      const ik = ek.trim().toLowerCase();
      if (!ik) return [];
      const Dk = kk => {
          if (kk === ik) return 0;
          if (kk.startsWith(ik)) return 1;
          const ek = kk.indexOf(ik);
          return -1 === ek ? -1 : 2 + ek
        },
        fk = [];
      for (const rk of kk) {
        const kk = [Dk(rk.lowerLabel), Dk(rk.lowerName)].filter((kk => -1 !== kk));
        kk.length && fk.push({
          item: rk,
          rank: Math.min(...kk)
        })
      }
      if (fk.length > 0) return fk.sort(((kk, ek) => kk.rank - ek.rank)).map((kk => kk.item));
      const Sk = [...ik],
        bk = kk => {
          let ek = 0;
          for (const ik of Sk) {
            if (ek = kk.indexOf(ik, ek), -1 === ek) return !1;
            ek++
          }
          return !0
        };
      return kk.filter((kk => bk(kk.lowerLabel) || bk(kk.lowerName)))
    }

    function Hf(kk, ek) {
      var ik;
      return null !== (ik = null === kk || void 0 === kk ? void 0 : kk[ek]) && void 0 !== ik ? ik : ek
    }

    function wf(kk, ek) {
      const ik = kk.userInput;
      return void 0 !== ek && "dropdown" === (null === ik || void 0 === ik ? void 0 : ik.type) && ik.dropdownOptions.map(VD.e).includes(ek) ? ek : function(kk) {
        const ek = kk.userInput;
        if ("dropdown" !== (null === ek || void 0 === ek ? void 0 : ek.type) || 0 === ek.dropdownOptions.length) return null;
        const ik = ek.dropdownOptions.map(VD.e);
        return ek.initialValue && ik.includes(ek.initialValue) ? ek.initialValue : ik[ik.length - 1]
      }(kk)
    }

    function lf(kk) {
      return void 0 === kk ? "" : JSON.stringify(kk)
    }
    const pf = (0, Dk.createContext)(null);

    function yf() {
      return (0, Dk.useContext)(pf)
    }
    var Yf = ik(2648);
    const Lf = (0, Dk.memo)((function(kk) {
        let {
          name: ek,
          label: ik,
          onPick: Dk
        } = kk;
        return (0, Kk.jsxs)("button", {
          type: "button",
          className: "SmpCatalogueTile",
          title: ik,
          onClick: () => {
            Dk(ek)
          },
          children: [(0, Kk.jsx)(oD, {
            item: ek,
            size: "big"
          }), (0, Kk.jsx)("span", {
            children: ik
          })]
        })
      })),
      Cf = (0, Dk.memo)((function(kk) {
        let {
          items: ek,
          query: ik,
          onPick: fk
        } = kk;
        const {
          t: Sk
        } = (0, bk.D)(), [rk, Pk] = (0, Dk.useState)(new Set), mk = (0, Dk.useMemo)((() => function(kk) {
          const ek = new Map;
          for (const ik of kk) {
            let kk = ek.get(ik.category);
            kk || (kk = [], ek.set(ik.category, kk)), kk.push(ik)
          }
          return [...ff, "other"].filter((kk => ek.has(kk))).map((kk => ({
            category: kk,
            items: ek.get(kk)
          })))
        }(ek)), [ek]), Mk = (0, Dk.useMemo)((() => Uf(ek, ik).slice(0, 60)), [ek, ik]);
        return ik.trim() ? 0 === Mk.length ? (0, Kk.jsx)(gD, {
          title: Sk("smpShop:noItemsFound", {
            query: ik.trim()
          }),
          children: Sk("smpShop:tryShorterName")
        }) : (0, Kk.jsx)(Yf.e, {
          lazyLoadedClassName: "SmpCatalogueGrid",
          observerRoot: "SmpBody",
          rootMargin: mf,
          observerUpdateDeps: [ik],
          children: Mk.map((kk => (0, Kk.jsx)(Lf, {
            name: kk.name,
            label: kk.label,
            onPick: fk
          }, kk.name)))
        }) : (0, Kk.jsx)(Kk.Fragment, {
          children: mk.map((kk => {
            let {
              category: ek,
              items: ik
            } = kk;
            const Dk = rk.has(ek) || ik.length <= 48,
              bk = Dk ? ik : ik.slice(0, 48);
            return (0, Kk.jsxs)("section", {
              className: "SmpCatalogueSection",
              children: [(0, Kk.jsxs)("h4", {
                children: [Sk("other" === ek ? "smpShop:otherItems" : `creativeInventory:${ek}`), !Dk && (0, Kk.jsx)("button", {
                  type: "button",
                  className: "SmpLink",
                  onClick: () => {
                    Pk(new Set([...rk, ek]))
                  },
                  children: Sk("smpShop:showAll", {
                    count: ik.length
                  })
                })]
              }), (0, Kk.jsx)(Yf.e, {
                lazyLoadedClassName: "SmpCatalogueGrid",
                observerRoot: "SmpBody",
                rootMargin: mf,
                observerUpdateDeps: [Dk],
                children: bk.map((kk => (0, Kk.jsx)(Lf, {
                  name: kk.name,
                  label: kk.label,
                  onPick: fk
                }, kk.name)))
              })]
            }, ek)
          }))
        })
      }));

    function Af(kk, ek) {
      const {
        searched: ik,
        shown: fk,
        searchFor: Sk,
        loading: bk
      } = function(kk, ek) {
        var ik;
        const fk = yf(),
          [Sk, bk] = (0, Dk.useState)(void 0),
          rk = (0, Dk.useRef)(void 0),
          Pk = (0, Dk.useRef)(0),
          mk = (0, Dk.useRef)(void 0),
          Mk = null !== (ik = null === kk || void 0 === kk ? void 0 : kk.meta.item) && void 0 !== ik ? ik : null,
          Kk = !!kk && fk.isPending(kk.key);
        (0, Dk.useEffect)((() => {
          if (!kk || Kk || !ek || void 0 === Sk || Sk === Mk) return;
          const ik = Sk === rk.current && fk.gaveUpAt(kk.key) > Pk.current && mk.current !== Sk;
          (Sk !== rk.current || ik) && fk.act(kk.key, null !== Sk && void 0 !== Sk ? Sk : "*", ik) && (ik && (mk.current = Sk), rk.current = Sk, Pk.current = Date.now())
        }), [kk, Kk, ek, Sk, Mk, fk]);
        const xk = (0, Dk.useCallback)((kk => {
            rk.current = void 0, mk.current = void 0, bk(kk)
          }), []),
          nk = void 0 !== Sk && Sk !== Mk && (Kk || rk.current !== Sk);
        return {
          searched: Mk,
          shown: nk ? Sk : Mk,
          searchFor: xk,
          loading: nk || Kk || null !== Mk && !ek
        }
      }(kk, ek), rk = (0, Dk.useMemo)((() => function() {
        var kk;
        let ek = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          ik = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          Dk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const fk = `${(0,Sf.l)()}\x1f${ek.join("\x1e")}\x1f${ik.join("\x1e")}\x1f${JSON.stringify(Dk)}`;
        if ((null === (kk = nf) || void 0 === kk ? void 0 : kk.key) === fk) return nf.items;
        const Sk = new Set(ik),
          bk = new Set,
          rk = [],
          Pk = (kk, ek) => {
            var ik;
            if (!kk || bk.has(kk) || Sk.has(kk)) return;
            bk.add(kk);
            const fk = null !== (ik = Dk[kk]) && void 0 !== ik ? ik : kk;
            rk.push({
              name: kk,
              label: fk,
              lowerLabel: fk.toLowerCase(),
              lowerName: kk.toLowerCase(),
              category: ek
            })
          };
        for (const Mk of (0, ef.creativeItemIds)()) {
          var mk;
          (0, ef.itemIsDisabled)(Mk, !0, !0, !1) || (0, ef.showOnlyInCreativeSearch)(Mk) || Pk((0, Sf.h)(Mk), null !== (mk = (0, ef.creativeCategoryOf)(Mk)) && void 0 !== mk ? mk : "other")
        }
        for (const Mk of ek) Pk(Mk, "other");
        return nf = {
          key: fk,
          items: rk
        }, rk
      }(null === kk || void 0 === kk ? void 0 : kk.meta.extra, null === kk || void 0 === kk ? void 0 : kk.meta.excluded, null === kk || void 0 === kk ? void 0 : kk.meta.names)), [null === kk || void 0 === kk ? void 0 : kk.meta.extra, null === kk || void 0 === kk ? void 0 : kk.meta.excluded, null === kk || void 0 === kk ? void 0 : kk.meta.names]), [Pk, mk] = (0, Dk.useState)(""), [Mk, Kk] = (0, Dk.useState)(0), [xk, nk] = (0, Dk.useState)("recent"), Uk = (0, Dk.useCallback)((kk => {
        mk(""), Kk((kk => kk + 1)), Sk(kk)
      }), [Sk]), Hk = "browse" === xk || "" !== Pk.trim();
      return {
        searched: ik,
        shown: fk,
        searchFor: Sk,
        loading: bk,
        catalogue: rk,
        names: null === kk || void 0 === kk ? void 0 : kk.meta.names,
        query: Pk,
        setQuery: mk,
        searchBoxKey: Mk,
        pickItem: Uk,
        setView: nk,
        browsing: Hk
      }
    }

    function jf(kk) {
      let {
        browser: ek,
        children: ik
      } = kk;
      const {
        t: Dk
      } = (0, bk.D)(), fk = yf();
      return (0, Kk.jsxs)("div", {
        className: "SmpTopBar",
        children: [(0, Kk.jsx)("div", {
          className: "SmpSearch",
          children: (0, Kk.jsx)(Lk.b, {
            className: "SmpSearchInput",
            placeholderText: Dk("smpShop:searchPlaceholder"),
            defaultValue: ek.query,
            onValueChange: kk => {
              ek.setQuery(kk), ek.searched && kk.trim() && ek.searchFor(null)
            },
            blurOnEnter: !0,
            onEnter: () => {
              const kk = Uf(ek.catalogue, ek.query)[0];
              kk ? ek.pickItem(kk.name) : ek.query.trim() && fk.notify(Dk("smpShop:noItemsFound", {
                query: ek.query.trim()
              }))
            }
          }, ek.searchBoxKey)
        }), ik]
      })
    }

    function sf(kk) {
      let {
        browser: ek,
        recentLabel: ik,
        children: Dk
      } = kk;
      const {
        t: fk
      } = (0, bk.D)();
      return (0, Kk.jsxs)("div", {
        className: "SmpViewBar",
        children: [(0, Kk.jsx)(ND, {
          options: [{
            value: "recent",
            label: ik
          }, {
            value: "browse",
            label: fk("smpShop:browseItems")
          }],
          value: ek.browsing ? "browse" : "recent",
          onChange: ek.setView,
          ariaLabel: fk("smpShop:show")
        }), !ek.browsing && Dk]
      })
    }

    function df(kk) {
      let {
        item: ek,
        names: ik,
        summary: Dk,
        onBack: fk,
        children: Sk
      } = kk;
      const {
        t: rk
      } = (0, bk.D)();
      return (0, Kk.jsxs)("div", {
        className: "SmpItemHeader",
        children: [(0, Kk.jsx)(mk.e, {
          className: "SmpBackButton",
          onClick: fk,
          children: rk("general:back")
        }), (0, Kk.jsx)(oD, {
          item: ek,
          size: "big"
        }), (0, Kk.jsxs)("div", {
          className: "SmpItemHeaderText",
          children: [(0, Kk.jsx)("b", {
            children: Hf(ik, ek)
          }), Dk && (0, Kk.jsx)("small", {
            children: Dk
          })]
        }), Sk]
      })
    }

    function Vf(kk) {
      let {
        browser: ek,
        className: ik,
        action: Dk,
        above: fk,
        list: bk,
        summary: rk,
        recentLabel: Pk,
        listControls: mk,
        onBack: Mk
      } = kk;
      return (0, Kk.jsxs)("div", {
        className: Sk()("SmpScreen", ik),
        children: [(0, Kk.jsx)(jf, {
          browser: ek,
          children: Dk
        }), ek.shown && (0, Kk.jsx)(df, {
          item: ek.shown,
          names: ek.names,
          summary: !ek.loading && rk,
          onBack: () => {
            null === Mk || void 0 === Mk || Mk(), ek.searchFor(null)
          },
          children: mk
        }), fk, ek.shown ? bk : (0, Kk.jsxs)(Kk.Fragment, {
          children: [(0, Kk.jsx)(sf, {
            browser: ek,
            recentLabel: Pk,
            children: mk
          }), ek.browsing ? (0, Kk.jsx)(Cf, {
            items: ek.catalogue,
            query: ek.query,
            onPick: ek.pickItem
          }) : bk]
        })]
      })
    }

    function Ff(kk, ek) {
      const ik = kk.map((kk => {
        let {
          meta: ek
        } = kk;
        return ek.pricePerItem
      }));
      return "min" === ek ? Math.min(...ik) : Math.max(...ik)
    }
    var uf = ik(6414);
    const qf = (0, Dk.memo)((function(kk) {
      var ek;
      const {
        t: ik
      } = (0, bk.D)(), Dk = null === kk.seller, fk = kk.quantity * kk.pricePerItem;
      return (0, Kk.jsxs)("div", {
        className: kk.grid ? "SmpListingCard" : "SmpRow SmpListingRow",
        children: [(0, Kk.jsx)(oD, {
          item: kk.item,
          amount: kk.quantity,
          size: kk.grid ? "big" : "normal",
          tier: kk.tier
        }), (0, Kk.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, Kk.jsx)("b", {
            children: (0, Kk.jsx)(ID.e, {
              text: null !== (ek = kk.title) && void 0 !== ek ? ek : `${kk.quantity}x ${kk.item}`
            })
          }), (0, Kk.jsxs)("small", {
            className: "SmpListingFacts",
            children: [(0, Kk.jsx)("span", {
              children: Dk ? ik("smpShop:you") : (0, Kk.jsx)(ID.e, {
                text: [{
                  entityName: kk.seller
                }]
              })
            }), (0, Kk.jsx)("span", {
              children: ik("smpShop:timeLeft", {
                time: Kf(kk.expiresAt)
              })
            })]
          })]
        }), (0, Kk.jsxs)("div", {
          className: "SmpRowPrice",
          children: [(0, Kk.jsx)(ZD, {
            amount: kk.pricePerItem
          }), (0, Kk.jsx)("small", {
            children: ik("smpShop:each")
          })]
        }), (0, Kk.jsx)(mk.f, {
          className: "SmpBuyButton",
          disabled: Dk || !kk.canAfford && !kk.busy,
          loading: kk.busy,
          onClick: () => {
            kk.onBuy(kk.itemKey)
          },
          children: Dk ? ik("smpShop:yours") : (0, Kk.jsx)(ZD, {
            amount: fk
          })
        })]
      })
    }));

    function If(kk) {
      let {
        view: ek,
        onChange: ik
      } = kk;
      const {
        t: Dk
      } = (0, bk.D)();
      return (0, Kk.jsx)(cD.b, {
        className: "SmpChoice SmpViewToggle",
        ariaLabel: Dk("smpShop:layout"),
        options: [{
          value: "list",
          label: (0, Kk.jsx)(rk.d, {
            name: "list"
          }),
          ariaLabel: Dk("smpShop:listView")
        }, {
          value: "grid",
          label: (0, Kk.jsx)(rk.d, {
            name: "grid-2"
          }),
          ariaLabel: Dk("smpShop:gridView")
        }],
        value: ek,
        onChange: ik
      })
    }

    function zf(kk) {
      let {
        entries: ek,
        view: ik
      } = kk;
      const {
        t: Dk
      } = (0, bk.D)(), fk = yf(), Sk = "grid" === ik;
      return (0, Kk.jsxs)(Kk.Fragment, {
        children: [!Sk && (0, Kk.jsxs)("div", {
          className: "SmpColumns",
          "aria-hidden": "true",
          children: [(0, Kk.jsx)("span", {}), (0, Kk.jsx)("span", {
            children: Dk("smpShop:columnItem")
          }), (0, Kk.jsx)("span", {
            children: Dk("smpShop:columnPriceEach")
          }), (0, Kk.jsx)("span", {
            children: Dk("smpShop:columnTotal")
          })]
        }), (0, Kk.jsx)(Yf.e, {
          lazyLoadedClassName: Sk ? "SmpCardGrid" : "SmpList",
          observerRoot: "SmpBody",
          rootMargin: mf,
          observerUpdateDeps: [ek.length],
          children: ek.map((kk => {
            var ek, ik;
            let {
              key: Dk,
              item: bk,
              meta: rk
            } = kk;
            const Pk = rk.quantity * rk.pricePerItem;
            return (0, Kk.jsx)(qf, {
              itemKey: Dk,
              item: rk.item,
              title: bk.customTitle,
              quantity: rk.quantity,
              pricePerItem: rk.pricePerItem,
              seller: rk.seller,
              expiresAt: rk.expiresAt,
              tier: null !== (ek = null === (ik = bk.enchant) || void 0 === ik ? void 0 : ik.tier) && void 0 !== ek ? ek : null,
              busy: fk.isPending(Dk) || null !== rk.seller && !1 === bk.canBuy,
              canAfford: fk.canAfford(bk, Pk),
              grid: Sk,
              onBuy: fk.act
            }, Dk)
          }))
        }, ik)]
      })
    }
    const Qf = [1, 10, 100],
      vf = [1, 10, 100, 999];

    function Ef(kk) {
      var ek, ik, fk, Pk, Mk, xk, nk, Uk, Hk, wk;
      const {
        t: lk
      } = (0, bk.D)(), pk = yf(), {
        creator: yk,
        mode: Yk
      } = kk, [Ck, Ak] = (0, Dk.useState)(null !== (ek = null === yk || void 0 === yk ? void 0 : yk.meta.item) && void 0 !== ek ? ek : null), [jk, sk] = (0, Dk.useState)(1), [dk, Vk] = (0, Dk.useState)(0), [Fk, uk] = (0, Dk.useState)(""), [qk, Ik] = (0, Dk.useState)(0), zk = (0, Dk.useRef)(Ck), Qk = (0, Dk.useRef)(!1), [vk, Ek] = (0, Dk.useState)(!1), hk = null !== (ik = null === yk || void 0 === yk ? void 0 : yk.meta.item) && void 0 !== ik ? ik : null, ak = null !== (fk = null === yk || void 0 === yk ? void 0 : yk.meta.owned) && void 0 !== fk ? fk : 0;
      (0, Dk.useEffect)((() => {
        kk.searching || null === hk || hk === zk.current || (zk.current = hk, Qk.current = !1, Ak(hk), Vk(0), sk("list" === Yk ? Math.max(1, ak) : 1))
      }), [hk, kk.searching]);
      const Wk = !!yk && !!Ck && yk.meta.item === Ck,
        tk = Wk ? yk.meta.owned : null !== (Pk = null === (Mk = kk.inventory) || void 0 === Mk || null === (xk = Mk.find((kk => kk.item === Ck))) || void 0 === xk ? void 0 : xk.quantity) && void 0 !== Pk ? Pk : 0,
        Xk = "list" === Yk ? Math.max(1, tk) : 45954,
        Bk = null !== (nk = kk.prices[0]) && void 0 !== nk ? nk : null,
        ck = kk.prices.length ? Math.round(kk.prices.reduce(((kk, ek) => kk + ek), 0) / kk.prices.length) : null,
        Tk = null === (Uk = kk.inventory) || void 0 === Uk || null === (Hk = Uk.find((kk => kk.item === Ck))) || void 0 === Hk ? void 0 : Hk.sellPrice;
      (0, Dk.useEffect)((() => {
        var kk;
        Wk && (sk((kk => "list" === Yk ? Math.min(Math.max(1, kk), Math.max(1, tk)) : kk)), Qk.current || Vk(null !== (kk = null !== Bk && void 0 !== Bk ? Bk : ck) && void 0 !== kk ? kk : Math.max(1, null !== Tk && void 0 !== Tk ? Tk : 1)))
      }), [Wk, tk, Ck, Bk, ck]);
      const Zk = kk => {
          Qk.current = !0, Vk(kk)
        },
        Ok = ek => {
          var ik, Dk, fk;
          zk.current = ek, Qk.current = !1, Ek(!1), uk(""), Ik((kk => kk + 1)), Ak(ek), Vk(0), sk("list" === Yk && null !== (ik = null === (Dk = kk.inventory) || void 0 === Dk || null === (fk = Dk.find((kk => kk.item === ek))) || void 0 === fk ? void 0 : fk.quantity) && void 0 !== ik ? ik : 1), (null === yk || void 0 === yk ? void 0 : yk.meta.item) !== ek && kk.onPickItem(ek)
        },
        gk = jk * dk,
        Gk = "list" === Yk && null !== yk && void 0 !== yk && yk.meta.fee ? function(kk, ek) {
          const ik = Math.max(0, ek - kk.taxFreeAllowance);
          return Math.ceil(Math.round(ik * kk.rate * 1e6) / 1e6)
        }(yk.meta.fee, gk) : 0,
        Nk = !!yk && pk.isPending(yk.key),
        Rk = Wk && !kk.searching && jk >= 1 && dk >= 1 && ("order" === Yk || tk >= jk) && !Nk,
        Jk = !!Ck && !Wk && !kk.searching && jk >= 1 && dk >= 1,
        ke = () => {
          Rk ? pk.act(yk.key, `${jk}|${dk}`) : Jk && (kk.onPickItem(Ck), Ek(!0))
        };
      (0, Dk.useEffect)((() => {
        vk && Wk && !kk.searching && (Ek(!1), ke())
      }), [vk, Wk, kk.searching]);
      const ee = !!Ck && !Wk && (kk.searching || vk),
        ie = Ck ? Hf(kk.names, Ck) : "",
        De = (0, Dk.useMemo)((() => Uf(kk.catalogue, Fk).slice(0, 8)), [kk.catalogue, Fk]),
        fe = ("list" === Yk ? Qf.filter((kk => kk < tk)) : vf).map((kk => ({
          value: kk,
          label: String(kk)
        })));
      "list" === Yk && tk > 0 && fe.push({
        value: tk,
        label: lk("smpShop:all", {
          count: tk
        })
      });
      const Se = [];
      return null !== Bk && (Bk > 1 && Se.push({
        value: Bk - 1,
        label: lk("smpShop:undercut", {
          price: BD(Bk - 1)
        })
      }), Se.push({
        value: Bk,
        label: lk("smpShop:lowest", {
          price: BD(Bk)
        })
      })), null !== ck && ck !== Bk && Se.push({
        value: ck,
        label: lk("smpShop:average", {
          price: BD(ck)
        })
      }), (0, Kk.jsxs)("div", {
        className: "SmpTradeForm",
        children: [(0, Kk.jsxs)("div", {
          className: "SmpTradeFormHead",
          children: [(0, Kk.jsx)("b", {
            children: lk("list" === Yk ? "smpShop:sellOnMarket" : "smpShop:createOrder")
          }), (0, Kk.jsx)("button", {
            type: "button",
            className: "SmpIconButton",
            "aria-label": lk("smpShop:close"),
            onClick: kk.onClose,
            children: (0, Kk.jsx)(rk.d, {
              name: "xmark"
            })
          })]
        }), "list" === Yk && (0, Kk.jsx)("div", {
          className: "SmpPicker",
          role: "listbox",
          children: null !== (wk = kk.inventory) && void 0 !== wk && wk.length ? kk.inventory.map((kk => {
            let {
              item: ek,
              quantity: ik
            } = kk;
            return (0, Kk.jsx)("button", {
              type: "button",
              title: ek,
              className: Sk()("SmpPickerSlot", {
                SmpPickerSlotOn: ek === Ck
              }),
              onClick: () => {
                Ok(ek)
              },
              children: (0, Kk.jsx)(oD, {
                item: ek,
                amount: ik
              })
            }, ek)
          })) : (0, Kk.jsx)("span", {
            className: "SmpMuted",
            children: lk("smpShop:nothingToList")
          })
        }), ("list" === Yk || !Ck) && (0, Kk.jsxs)("div", {
          className: "SmpItemSearch",
          children: [(0, Kk.jsx)(Lk.b, {
            className: "SmpSearchInput",
            placeholderText: lk("list" === Yk ? "smpShop:listSearchPlaceholder" : "smpShop:orderSearchPlaceholder"),
            defaultValue: Fk,
            onValueChange: uk,
            blurOnEnter: !0,
            onEnter: () => {
              De[0] && Ok(De[0].name)
            }
          }, qk), De.length > 0 && (0, Kk.jsx)("div", {
            className: "SmpPicker",
            children: De.map((kk => {
              let {
                name: ek
              } = kk;
              return (0, Kk.jsx)("button", {
                type: "button",
                title: ek,
                className: Sk()("SmpPickerSlot", {
                  SmpPickerSlotOn: ek === Ck
                }),
                onClick: () => {
                  Ok(ek)
                },
                children: (0, Kk.jsx)(oD, {
                  item: ek
                })
              }, ek)
            }))
          })]
        }), Ck && (0, Kk.jsxs)(Kk.Fragment, {
          children: [(0, Kk.jsxs)("div", {
            className: "SmpPickedName",
            children: [ie, ee && (0, Kk.jsx)(RD, {})]
          }), (0, Kk.jsxs)("div", {
            className: "SmpFormGrid",
            children: [(0, Kk.jsxs)("div", {
              className: "SmpField",
              children: [(0, Kk.jsxs)("span", {
                children: [lk("smpShop:quantity"), "list" === Yk && Wk && (0, Kk.jsx)("small", {
                  children: lk("smpShop:youHave", {
                    count: tk
                  })
                })]
              }), (0, Kk.jsx)(JD, {
                value: jk,
                onChange: sk,
                max: Xk,
                label: lk("smpShop:quantity")
              }), (0, Kk.jsx)(ND, {
                options: fe,
                value: jk,
                onChange: sk,
                ariaLabel: lk("smpShop:quantity")
              })]
            }), (0, Kk.jsxs)("div", {
              className: "SmpField",
              children: [(0, Kk.jsx)("span", {
                children: lk("smpShop:pricePerItem")
              }), (0, Kk.jsx)(JD, {
                value: Math.max(1, dk),
                onChange: Zk,
                max: 9999999,
                step: kf,
                label: lk("smpShop:pricePerItem")
              }), (0, Kk.jsx)(ND, {
                options: Se,
                value: dk,
                onChange: Zk,
                ariaLabel: lk("smpShop:pricePerItem")
              })]
            })]
          }), "list" === Yk && (0, Kk.jsxs)("div", {
            className: "SmpTradeSummary",
            children: [(0, Kk.jsxs)("span", {
              children: [lk("smpShop:youGet"), " ", (0, Kk.jsx)(ZD, {
                amount: Math.max(0, gk - Gk),
                exact: !0
              })]
            }), (0, Kk.jsx)("small", {
              children: Gk > 0 ? lk("smpShop:listingFee", {
                fee: Gk.toLocaleString("en-US")
              }) : lk("smpShop:listingRules")
            })]
          }), (0, Kk.jsx)(mk.t, {
            className: "SmpSubmit",
            disabled: !Rk && !Jk && !Nk,
            loading: Nk || ee || Wk && kk.searching,
            onClick: ke,
            children: "list" === Yk ? lk("smpShop:listButton", {
              count: jk,
              item: ie
            }) : (0, Kk.jsxs)(Kk.Fragment, {
              children: [lk("smpShop:orderButton", {
                count: jk,
                item: ie
              }), " ", dk >= 1 && (0, Kk.jsx)(ZD, {
                amount: gk
              })]
            })
          })]
        })]
      })
    }

    function hf() {
      var kk;
      const {
        t: ek
      } = (0, bk.D)(), ik = yf(), fk = null === (kk = ik.shopInfo[ik.categoryKey]) || void 0 === kk ? void 0 : kk.items, Sk = Pf(fk, "search"), rk = Pf(fk, "creator"), Pk = rf(fk, "enchantedCreator"), Mk = rf(fk, "listing"), xk = Pf(fk, "empty"), nk = Af(Sk, Mk.length > 0 || null !== xk), {
        searched: Uk,
        shown: Hk,
        loading: wk
      } = nk, [lk, pk] = (0, Dk.useState)(!1), [yk, Yk] = function() {
        const [kk, ek] = (0, uf.e)("smpMarketView", "list");
        return ["grid" === kk ? "grid" : "list", ek]
      }(), Lk = "grid" === yk, Ck = (0, Dk.useMemo)((() => Mk.filter((kk => {
        let {
          meta: ek
        } = kk;
        return null !== ek.seller && ek.item === Uk
      })).map((kk => {
        let {
          meta: ek
        } = kk;
        return ek.pricePerItem
      })).sort(((kk, ek) => kk - ek))), [Mk, Uk]), Ak = (0, Dk.useMemo)((() => {
        const kk = new Set(nk.catalogue.map((kk => {
          let {
            name: ek
          } = kk;
          return ek
        })));
        return function(kk) {
          for (const ek in kk)
            if ("sell" === kk[ek].smp) return rf(kk[ek].items, "sell").filter((kk => {
              let {
                item: ek
              } = kk;
              return !ek.enchant
            })).map((kk => {
              let {
                meta: ek
              } = kk;
              return {
                item: ek.item,
                quantity: ek.quantity,
                sellPrice: ek.pricePerItem
              }
            }));
          return []
        }(ik.shopInfo).filter((ek => {
          let {
            item: ik
          } = ek;
          return kk.has(ik)
        }))
      }), [ik.shopInfo, nk.catalogue]);
      return (0, Kk.jsx)(Vf, {
        browser: nk,
        className: "SmpMarketTab",
        recentLabel: ek("smpShop:recentlyListed"),
        action: (0, Kk.jsx)(mk.t, {
          className: "SmpSellButton",
          onClick: () => {
            pk((kk => !kk))
          },
          children: ek("smpShop:sell")
        }),
        above: lk && (0, Kk.jsxs)(Kk.Fragment, {
          children: [(0, Kk.jsx)(Ef, {
            mode: "list",
            creator: rk,
            inventory: Ak,
            catalogue: nk.catalogue,
            names: nk.names,
            searching: wk,
            prices: Ck,
            onPickItem: nk.searchFor,
            onClose: () => {
              pk(!1)
            }
          }), Pk.length > 0 && (0, Kk.jsx)(af, {
            entries: Pk
          })]
        }),
        listControls: (0, Kk.jsx)(If, {
          view: yk,
          onChange: Yk
        }),
        summary: Hk && (Mk.length > 0 ? ek(1 === Mk.length ? "smpShop:listingSummaryOne" : "smpShop:listingSummary", {
          count: Mk.length,
          price: BD(Ff(Mk, "min"))
        }) : ek("smpShop:noOneSelling", {
          item: Hf(nk.names, Hk)
        })),
        list: wk ? (0, Kk.jsx)(OD, {
          grid: Lk
        }) : Mk.length > 0 ? (0, Kk.jsx)(zf, {
          entries: Mk,
          view: yk
        }) : xk ? (0, Kk.jsx)(GD, {
          entry: xk
        }) : (0, Kk.jsx)(OD, {
          count: 3,
          grid: Lk
        })
      })
    }

    function af(kk) {
      let {
        entries: ek
      } = kk;
      const {
        t: ik
      } = (0, bk.D)(), fk = yf(), [Sk, rk] = (0, Dk.useState)({});
      return (0, Kk.jsx)("div", {
        className: "SmpList",
        children: ek.map((kk => {
          var ek, Dk, bk;
          let {
            key: Pk,
            item: Mk,
            meta: xk
          } = kk;
          const nk = null !== (ek = Sk[Pk]) && void 0 !== ek ? ek : 1;
          return (0, Kk.jsxs)("div", {
            className: "SmpRow",
            children: [(0, Kk.jsx)(oD, {
              item: xk.item,
              amount: xk.quantity,
              tier: null !== (Dk = null === (bk = Mk.enchant) || void 0 === bk ? void 0 : bk.tier) && void 0 !== Dk ? Dk : null
            }), (0, Kk.jsxs)("div", {
              className: "SmpRowText",
              children: [(0, Kk.jsx)("b", {
                children: (0, Kk.jsx)(ID.e, {
                  text: Mk.customTitle
                })
              }), (0, Kk.jsx)("small", {
                children: ik("smpShop:enchantedListing")
              })]
            }), (0, Kk.jsx)(JD, {
              value: nk,
              onChange: kk => {
                rk({
                  ...Sk,
                  [Pk]: kk
                })
              },
              max: 9999999,
              step: kf,
              label: ik("smpShop:pricePerItem")
            }), (0, Kk.jsxs)(mk.t, {
              loading: fk.isPending(Pk),
              onClick: () => {
                fk.act(Pk, String(nk))
              },
              children: [ik("smpShop:list"), " ", (0, Kk.jsx)(ZD, {
                amount: nk
              })]
            })]
          }, Pk)
        }))
      })
    }
    const Wf = (0, Dk.memo)((function(kk) {
      let {
        itemKey: ek,
        item: ik,
        quantity: Dk,
        pricePerItem: fk,
        tier: bk,
        selected: rk,
        onSelect: Pk
      } = kk;
      return (0, Kk.jsxs)("button", {
        type: "button",
        className: Sk()("SmpInventorySlot", {
          SmpInventorySlotOn: rk
        }),
        title: ik,
        onClick: () => {
          Pk(ek)
        },
        children: [(0, Kk.jsx)(oD, {
          item: ik,
          amount: Dk,
          tier: bk
        }), (0, Kk.jsx)(ZD, {
          amount: fk
        })]
      })
    }));

    function tf() {
      var kk;
      const {
        t: ek
      } = (0, bk.D)(), ik = yf(), fk = null === (kk = ik.shopInfo[ik.categoryKey]) || void 0 === kk ? void 0 : kk.items, rk = rf(fk, "sell"), Pk = Pf(fk, "empty"), [mk, Mk] = (0, Dk.useState)(null), [xk, nk] = (0, Dk.useState)({}), Uk = rk.find((kk => {
        let {
          key: ek
        } = kk;
        return ek === mk
      }));
      return 0 === rk.length ? (0, Kk.jsx)("div", {
        className: "SmpScreen",
        children: (0, Kk.jsx)(gD, {
          title: Pk ? (0, Kk.jsx)(ID.e, {
            text: Pk.item.customTitle
          }) : ek("smpShop:nothingToSell"),
          children: Pk && (0, Kk.jsx)(ID.e, {
            text: Pk.item.description
          })
        })
      }) : (0, Kk.jsxs)("div", {
        className: "SmpScreen SmpInstantSellTab",
        children: [(0, Kk.jsx)("div", {
          className: "SmpInventoryGrid",
          children: rk.map((kk => {
            var ek, ik;
            let {
              key: Dk,
              item: fk,
              meta: Sk
            } = kk;
            return (0, Kk.jsx)(Wf, {
              itemKey: Dk,
              item: Sk.item,
              quantity: Sk.quantity,
              pricePerItem: Sk.pricePerItem,
              tier: null !== (ek = null === (ik = fk.enchant) || void 0 === ik ? void 0 : ik.tier) && void 0 !== ek ? ek : null,
              selected: Dk === mk,
              onSelect: Mk
            }, Dk)
          }))
        }), (0, Kk.jsx)("div", {
          className: Sk()("SmpSellBar", {
            SmpSellBarIdle: !Uk
          }),
          children: Uk ? (0, Kk.jsx)(Xf, {
            entry: Uk,
            choice: wf(Uk.item, xk[Uk.key]),
            onChoose: kk => {
              nk({
                ...xk,
                [Uk.key]: kk
              })
            }
          }) : (0, Kk.jsx)("span", {
            className: "SmpMuted",
            children: ek("smpShop:tapToSell")
          })
        })]
      })
    }

    function Xf(kk) {
      var ek, ik, Dk, fk;
      let {
        entry: Sk,
        choice: rk,
        onChoose: Pk
      } = kk;
      const {
        t: Mk
      } = (0, bk.D)(), xk = yf(), {
        key: nk,
        item: Uk,
        meta: Hk
      } = Sk, wk = xf("dropdown" === (null === (ek = Uk.userInput) || void 0 === ek ? void 0 : ek.type) ? Uk.userInput.dropdownOptions : []), lk = null === rk ? 0 : -(0, VD.c)(Uk, rk);
      return (0, Kk.jsxs)(Kk.Fragment, {
        children: [(0, Kk.jsx)(oD, {
          item: Hk.item,
          amount: Hk.quantity,
          tier: null !== (ik = null === (Dk = Uk.enchant) || void 0 === Dk ? void 0 : Dk.tier) && void 0 !== ik ? ik : null
        }), (0, Kk.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, Kk.jsx)("b", {
            children: (0, Kk.jsx)(ID.e, {
              text: null !== (fk = Uk.customTitle) && void 0 !== fk ? fk : Hk.item
            })
          }), (0, Kk.jsx)("small", {
            children: Mk("smpShop:sellEach", {
              count: Hk.quantity
            })
          })]
        }), (0, Kk.jsx)(ND, {
          options: wk.map((kk => {
            let {
              label: ek,
              quantity: ik,
              isAll: Dk
            } = kk;
            return {
              value: ek,
              label: Dk ? Mk("smpShop:all", {
                count: ik
              }) : String(ik)
            }
          })),
          value: rk,
          onChange: Pk,
          ariaLabel: Mk("smpShop:quantity")
        }), (0, Kk.jsxs)(mk.t, {
          loading: xk.isPending(nk),
          disabled: null === rk,
          onClick: () => {
            xk.act(nk, rk)
          },
          children: [Mk("smpShop:sellButton"), " ", (0, Kk.jsx)(ZD, {
            amount: lk
          })]
        })]
      })
    }

    function Bf() {
      var kk;
      const {
        t: ek
      } = (0, bk.D)(), ik = yf(), Dk = null === (kk = ik.shopInfo[ik.categoryKey]) || void 0 === kk ? void 0 : kk.items, fk = rf(Dk, "collect"), Sk = rf(Dk, "myListing"), rk = (kk, ek) => ik.isPending(kk) || !1 === ek.canBuy;
      return (0, Kk.jsxs)("div", {
        className: "SmpScreen",
        children: [(0, Kk.jsx)("h3", {
          className: "SmpSectionTitle",
          children: ek("smpShop:readyToCollect")
        }), fk.length > 0 ? (0, Kk.jsx)("div", {
          className: "SmpList",
          children: fk.map((kk => {
            var Dk, fk;
            let {
              key: Sk,
              item: bk,
              meta: Pk
            } = kk;
            return (0, Kk.jsxs)("div", {
              className: "SmpRow",
              children: [(0, Kk.jsx)(oD, {
                item: "sold" === Pk.type ? "Gold Coin" : Pk.item,
                amount: "sold" === Pk.type ? 0 : Pk.quantity,
                tier: null !== (Dk = null === (fk = bk.enchant) || void 0 === fk ? void 0 : fk.tier) && void 0 !== Dk ? Dk : null
              }), (0, Kk.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, Kk.jsx)("b", {
                  children: (0, Kk.jsx)(ID.e, {
                    text: bk.customTitle
                  })
                }), (0, Kk.jsx)("small", {
                  children: (0, Kk.jsx)(ID.e, {
                    text: bk.description
                  })
                })]
              }), (0, Kk.jsx)(mk.r, {
                loading: rk(Sk, bk),
                onClick: () => {
                  ik.act(Sk)
                },
                children: ek("smpShop:collect")
              })]
            }, Sk)
          }))
        }) : (0, Kk.jsx)(gD, {
          title: ek("smpShop:nothingToCollect"),
          children: ek("smpShop:nothingToCollectHint")
        }), (0, Kk.jsx)("h3", {
          className: "SmpSectionTitle",
          children: ek("smpShop:activeListings", {
            count: Sk.length
          })
        }), Sk.length > 0 ? (0, Kk.jsx)("div", {
          className: "SmpList",
          children: Sk.map((kk => {
            var Dk, fk;
            let {
              key: Sk,
              item: bk,
              meta: Pk
            } = kk;
            return (0, Kk.jsxs)("div", {
              className: "SmpRow",
              children: [(0, Kk.jsx)(oD, {
                item: Pk.item,
                amount: Pk.quantity,
                tier: null !== (Dk = null === (fk = bk.enchant) || void 0 === fk ? void 0 : fk.tier) && void 0 !== Dk ? Dk : null
              }), (0, Kk.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, Kk.jsx)("b", {
                  children: (0, Kk.jsx)(ID.e, {
                    text: bk.customTitle
                  })
                }), (0, Kk.jsx)("small", {
                  children: ek("smpShop:timeLeft", {
                    time: Kf(Pk.expiresAt)
                  })
                })]
              }), (0, Kk.jsxs)("div", {
                className: "SmpRowPrice",
                children: [(0, Kk.jsx)(ZD, {
                  amount: Pk.pricePerItem
                }), (0, Kk.jsx)("small", {
                  children: ek("smpShop:each")
                })]
              }), (0, Kk.jsx)(mk.R, {
                loading: rk(Sk, bk),
                onClick: () => {
                  ik.act(Sk)
                },
                children: ek("smpShop:cancel")
              })]
            }, Sk)
          }))
        }) : (0, Kk.jsx)(gD, {
          title: ek("smpShop:noActiveListings"),
          children: ek("smpShop:noActiveListingsHint")
        })]
      })
    }

    function Tf(kk) {
      let {
        done: ek,
        of: ik
      } = kk;
      return (0, Kk.jsx)("span", {
        className: "SmpProgress",
        children: (0, Kk.jsx)("i", {
          style: {
            width: `${Math.min(100,ek/Math.max(1,ik)*100)}%`
          }
        })
      })
    }

    function of(kk) {
      var ek, ik, Dk;
      let {
        entry: fk,
        choice: Sk,
        onChoose: rk
      } = kk;
      const {
        t: Pk
      } = (0, bk.D)(), Mk = yf(), {
        key: xk,
        item: nk,
        meta: Uk
      } = fk, Hk = "dropdown" === (null === (ek = nk.userInput) || void 0 === ek ? void 0 : ek.type) ? nk.userInput.dropdownOptions : [], wk = !0 === Uk.processing, lk = null !== Uk.creator && (Uk.owned > 0 || wk), pk = lk && Uk.owned > 0 ? xf(Hk) : [], yk = null === Sk ? 0 : null !== (ik = null === (Dk = pk.find((kk => kk.label === Sk))) || void 0 === Dk ? void 0 : Dk.quantity) && void 0 !== ik ? ik : 0;
      return (0, Kk.jsxs)("div", {
        className: "SmpRow SmpOrderRow",
        children: [(0, Kk.jsx)(oD, {
          item: Uk.item
        }), (0, Kk.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, Kk.jsx)("b", {
            children: (0, Kk.jsx)(ID.e, {
              text: nk.customTitle
            })
          }), (0, Kk.jsxs)("small", {
            children: [(0, Kk.jsx)(ZD, {
              amount: Uk.pricePerItem
            }), " ", Pk("smpShop:each"), " \xb7", " ", null === Uk.creator ? Pk("smpShop:you") : (0, Kk.jsx)(ID.e, {
              text: [{
                entityName: Uk.creator
              }]
            })]
          }), (0, Kk.jsx)(Tf, {
            done: Uk.delivered,
            of: Uk.wanted
          })]
        }), lk ? (0, Kk.jsxs)(Kk.Fragment, {
          children: [(0, Kk.jsx)(ND, {
            options: pk.map((kk => {
              let {
                label: ek,
                quantity: ik,
                isAll: Dk
              } = kk;
              return {
                value: ek,
                label: Dk ? Pk("smpShop:max", {
                  count: ik
                }) : String(ik)
              }
            })),
            value: Sk,
            onChange: rk,
            ariaLabel: Pk("smpShop:quantity")
          }), (0, Kk.jsxs)(mk.t, {
            loading: Mk.isPending(xk) || wk,
            disabled: null === Sk,
            onClick: () => {
              Mk.act(xk, Sk)
            },
            children: [Pk("smpShop:deliver"), " ", (0, Kk.jsx)(ZD, {
              amount: yk * Uk.pricePerItem
            })]
          })]
        }) : (0, Kk.jsx)("span", {
          className: "SmpMuted SmpRowNote",
          children: null === Uk.creator ? Pk("smpShop:yourOrder") : Pk("smpShop:youHave", {
            count: 0
          })
        })]
      })
    }

    function Zf() {
      var kk;
      const {
        t: ek
      } = (0, bk.D)(), ik = yf(), fk = null === (kk = ik.shopInfo[ik.categoryKey]) || void 0 === kk ? void 0 : kk.items, Sk = Pf(fk, "search"), rk = Pf(fk, "creator"), Pk = rf(fk, "order"), Mk = Pf(fk, "empty"), xk = Af(Sk, Pk.length > 0 || null !== Mk), [nk, Uk] = (0, Dk.useState)(!1), [Hk, wk] = (0, Dk.useState)({});
      return (0, Kk.jsx)(Vf, {
        browser: xk,
        recentLabel: ek("smpShop:recentOrders"),
        action: (0, Kk.jsx)(mk.t, {
          onClick: () => {
            Uk((kk => !kk))
          },
          children: ek("smpShop:createOrder")
        }),
        above: nk && (0, Kk.jsx)(Ef, {
          mode: "order",
          creator: rk,
          catalogue: xk.catalogue,
          names: xk.names,
          searching: xk.loading,
          prices: [],
          onPickItem: xk.searchFor,
          onClose: () => {
            Uk(!1)
          }
        }),
        onBack: () => {
          Uk(!1)
        },
        summary: Pk.length > 0 && ek(1 === Pk.length ? "smpShop:orderSummaryOne" : "smpShop:orderSummary", {
          count: Pk.length,
          price: BD(Ff(Pk, "max"))
        }),
        list: xk.loading ? (0, Kk.jsx)(OD, {}) : Pk.length > 0 ? (0, Kk.jsx)(Yf.e, {
          lazyLoadedClassName: "SmpList",
          observerRoot: "SmpBody",
          rootMargin: mf,
          observerUpdateDeps: [Pk.length],
          children: Pk.map((kk => (0, Kk.jsx)(of, {
            entry: kk,
            choice: wf(kk.item, Hk[kk.key]),
            onChoose: ek => {
              wk({
                ...Hk,
                [kk.key]: ek
              })
            }
          }, kk.key)))
        }) : Mk ? (0, Kk.jsx)(GD, {
          entry: Mk
        }) : (0, Kk.jsx)(OD, {
          count: 3
        })
      })
    }

    function Of() {
      var kk;
      const {
        t: ek
      } = (0, bk.D)(), ik = yf(), Dk = rf(null === (kk = ik.shopInfo[ik.categoryKey]) || void 0 === kk ? void 0 : kk.items, "myOrder");
      return 0 === Dk.length ? (0, Kk.jsx)("div", {
        className: "SmpScreen",
        children: (0, Kk.jsx)(gD, {
          title: ek("smpShop:noOrders"),
          children: ek("smpShop:noOrdersHint")
        })
      }) : (0, Kk.jsx)("div", {
        className: "SmpScreen",
        children: (0, Kk.jsx)("div", {
          className: "SmpList",
          children: Dk.map((kk => {
            let {
              key: Dk,
              item: fk,
              meta: Sk
            } = kk;
            const bk = ik.isPending(Dk) || !1 === fk.canBuy;
            return (0, Kk.jsxs)("div", {
              className: "SmpRow",
              children: [(0, Kk.jsx)(oD, {
                item: Sk.item,
                amount: Sk.collectable
              }), (0, Kk.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, Kk.jsx)("b", {
                  children: (0, Kk.jsx)(ID.e, {
                    text: fk.customTitle
                  })
                }), (0, Kk.jsxs)("small", {
                  children: [(0, Kk.jsx)(ZD, {
                    amount: Sk.pricePerItem
                  }), " ", ek("smpShop:each"), Sk.collectable > 0 && ` \xb7 ${ek("smpShop:readyCount",{count:Sk.collectable})}`]
                }), (0, Kk.jsx)(Tf, {
                  done: Sk.delivered,
                  of: Sk.wanted
                })]
              }), Sk.collectable > 0 ? (0, Kk.jsx)(mk.r, {
                loading: bk,
                onClick: () => {
                  ik.act(Dk)
                },
                children: ek("smpShop:collectCount", {
                  count: Sk.collectable
                })
              }) : (0, Kk.jsx)(mk.R, {
                loading: bk,
                onClick: () => {
                  ik.act(Dk)
                },
                children: ek("smpShop:cancel")
              })]
            }, Dk)
          }))
        })
      })
    }
    const gf = new Set(["search", "creator", "enchantedCreator", "collect", "myOrder", "order"]),
      Gf = {
        sell: "coins",
        market: "store",
        collect: "backpack",
        orders: "file-clipboard",
        myOrders: "location-check"
      };

    function Nf(kk, ek) {
      let ik = !1;
      const Dk = {};
      for (const fk in kk) ek(fk, kk[fk]) ? Dk[fk] = kk[fk] : ik = !0;
      return ik ? Dk : kk
    }

    function Rf(kk) {
      var ek, ik, fk, Pk;
      const {
        show: mk,
        shopInfo: Mk,
        selectedCategoryKey: xk
      } = kk, {
        t: nk
      } = (0, bk.D)(), Uk = null !== xk && void 0 !== xk ? xk : "", Hk = bf(Mk, Uk), wk = null === (ek = Mk[Uk]) || void 0 === ek ? void 0 : ek.items, lk = null !== Hk, [pk, yk] = (0, Dk.useState)({}), [Yk, Lk] = (0, Dk.useState)([]), [Ck, Ak] = (0, Dk.useState)(!1), [jk, sk] = (0, Dk.useState)(null), [, dk] = (0, Dk.useState)(0), Vk = (0, Dk.useRef)(0), Fk = (0, Dk.useRef)({}), uk = (0, Dk.useRef)({
        items: wk,
        pending: pk,
        shopInfo: Mk,
        active: lk,
        canAfford: kk.canAfford,
        buy: kk.buy
      });
      uk.current = {
        items: wk,
        pending: pk,
        shopInfo: Mk,
        active: lk,
        canAfford: kk.canAfford,
        buy: kk.buy
      };
      const qk = (0, Dk.useCallback)((kk => {
        Vk.current++;
        const ek = Vk.current;
        Lk((ik => [{
          id: ek,
          text: kk
        }, ...ik].slice(0, 8))), sk(ek)
      }), []);
      (0, Dk.useEffect)((() => {
        if (null === jk) return;
        const kk = setTimeout((() => {
          sk(null)
        }), 3e3);
        return () => {
          clearTimeout(kk)
        }
      }), [jk]), (0, Dk.useEffect)((() => {
        const ek = kk.message;
        if (!ek) return;
        const {
          shopInfo: ik,
          active: Dk,
          items: fk
        } = uk.current, Sk = null !== ek.categoryKey ? null !== bf(ik, ek.categoryKey) : Dk;
        (Sk || Dk) && qk(ek.text), Sk && yk((kk => Nf(kk, (kk => {
          var ek, ik;
          return !gf.has(null === fk || void 0 === fk || null === (ek = fk[kk]) || void 0 === ek || null === (ik = ek.smp) || void 0 === ik ? void 0 : ik.kind)
        }))))
      }), [kk.message, qk]), (0, Dk.useEffect)((() => {
        yk((kk => Nf(kk, ((kk, ek) => lf(null === wk || void 0 === wk ? void 0 : wk[kk]) === ek.snapshot))))
      }), [Mk, wk]);
      const Ik = Object.keys(pk).length > 0;
      (0, Dk.useEffect)((() => {
        if (!Ik) return;
        const kk = setInterval((() => {
          dk((kk => kk + 1));
          const kk = Date.now(),
            {
              pending: ek,
              items: ik
            } = uk.current,
            Dk = Object.keys(ek).filter((ik => kk - ek[ik].at >= 12e3));
          if (0 === Dk.length) return;
          const fk = Dk.some((kk => {
            var Dk, fk;
            return "search" !== (null === ik || void 0 === ik || null === (Dk = ik[kk]) || void 0 === Dk || null === (fk = Dk.smp) || void 0 === fk ? void 0 : fk.kind) || ek[kk].resend
          }));
          for (const Sk of Dk) Fk.current[Sk] = kk;
          yk((kk => Nf(kk, (kk => !Dk.includes(kk))))), fk && qk(nk("smpShop:noAnswer"))
        }), 500);
        return () => {
          clearInterval(kk)
        }
      }), [Ik]), (0, Dk.useEffect)((() => {
        yk({})
      }), [Uk]), (0, Dk.useEffect)((() => {
        mk || Ak(!1)
      }), [mk]);
      const zk = (0, Dk.useCallback)((function(kk, ek) {
          let ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const {
            items: Dk,
            pending: fk,
            canAfford: Sk,
            buy: bk
          } = uk.current, rk = null === Dk || void 0 === Dk ? void 0 : Dk[kk];
          if (!rk || kk in fk || !1 === rk.canBuy) return !1;
          if (!Sk(rk, (0, VD.c)(rk, ek))) return !1;
          bk(kk, rk, ek);
          const Pk = {
            snapshot: lf(rk),
            at: Date.now(),
            resend: ik
          };
          return uk.current.pending = {
            ...uk.current.pending,
            [kk]: Pk
          }, yk((ek => ({
            ...ek,
            [kk]: Pk
          }))), !0
        }), []),
        Qk = (0, Dk.useMemo)((() => ({
          shopInfo: Mk,
          categoryKey: Uk,
          canAfford: kk.canAfford,
          isPending: kk => kk in pk,
          gaveUpAt: kk => {
            var ek;
            return null !== (ek = Fk.current[kk]) && void 0 !== ek ? ek : 0
          },
          act: zk,
          notify: qk
        })), [Mk, Uk, kk.canAfford, pk, zk, qk]),
        vk = Math.min(...Object.values(pk).map((kk => kk.at))),
        Ek = Ik && Date.now() - vk > 1500,
        hk = Yk.length > 1,
        ak = null !== (ik = null === (fk = Mk[Uk]) || void 0 === fk ? void 0 : fk.customTitle) && void 0 !== ik ? ik : Uk,
        Wk = null === (Pk = Mk[Uk]) || void 0 === Pk ? void 0 : Pk.description;
      let tk = null;
      return "market" === Hk ? tk = (0, Kk.jsx)(hf, {}) : "sell" === Hk ? tk = (0, Kk.jsx)(tf, {}) : "collect" === Hk ? tk = (0, Kk.jsx)(Bf, {}) : "orders" === Hk ? tk = (0, Kk.jsx)(Zf, {}) : "myOrders" === Hk && (tk = (0, Kk.jsx)(Of, {})), (0, Kk.jsx)(pf.Provider, {
        value: Qk,
        children: (0, Kk.jsx)("div", {
          className: "SmpShopHost",
          hidden: !lk,
          children: (0, Kk.jsxs)("div", {
            className: "SmpShop",
            children: [(0, Kk.jsx)("header", {
              className: "SmpHeader",
              children: (0, Kk.jsxs)("div", {
                className: "SmpHeaderTitle",
                children: [(0, Kk.jsxs)("h2", {
                  children: [Hk && (0, Kk.jsx)(rk.d, {
                    name: Gf[Hk]
                  }), nk(ak)]
                }), Wk && (0, Kk.jsx)("p", {
                  children: (0, Kk.jsx)(ID.e, {
                    text: Wk
                  })
                })]
              })
            }), (0, Kk.jsx)("main", {
              className: "SmpBody",
              "data-pad-initial-area": !0,
              children: mk && tk
            }), (0, Kk.jsxs)("button", {
              type: "button",
              className: Sk()("SmpStatus", {
                SmpStatusWaiting: Ik,
                SmpStatusFresh: !Ik && null !== jk,
                SmpStatusHasHistory: hk
              }),
              "aria-live": "polite",
              "aria-expanded": hk ? Ck : void 0,
              onClick: () => {
                hk && Ak((kk => !kk))
              },
              children: [Ik ? (0, Kk.jsxs)("span", {
                className: "SmpStatusText",
                children: [(0, Kk.jsx)(RD, {}), nk(Ek ? "smpShop:slowConnection" : "smpShop:waiting")]
              }) : Yk[0] ? (0, Kk.jsx)("span", {
                className: "SmpStatusText",
                children: (0, Kk.jsx)(ID.e, {
                  text: Yk[0].text
                })
              }, Yk[0].id) : (0, Kk.jsx)("span", {
                className: "SmpStatusText SmpMuted",
                children: nk("smpShop:ready")
              }), hk && (0, Kk.jsx)("small", {
                children: nk("smpShop:recentMessages", {
                  count: Yk.length
                })
              })]
            }), Ck && hk && (0, Kk.jsx)("div", {
              className: "SmpStatusHistory",
              children: Yk.map((kk => (0, Kk.jsx)("div", {
                children: (0, Kk.jsx)(ID.e, {
                  text: kk.text
                })
              }, kk.id)))
            })]
          })
        })
      })
    }
    class Jf {
      constructor(kk) {
        this.info = kk
      }
      static fromShopInfo(kk) {
        const ek = {};
        for (const ik in kk) {
          const Dk = !0 === kk[ik].redDot && !0 !== kk[ik].forceRemoveRedDot;
          ek[ik] = {
            redDot: Dk,
            items: {}
          };
          for (const fk in kk[ik].items) {
            const Dk = kk[ik].items[fk],
              Sk = !0 === Dk.redDot && !0 !== Dk.forceRemoveRedDot;
            ek[ik].items[fk] = {
              redDot: Sk
            }
          }
        }
        return new Jf(ek)
      }
      anyCategoryHasRedDots() {
        for (const kk in this.info)
          if (this.categoryHasRedDot(kk)) return !0;
        return !1
      }
      doesCategoryExist(kk) {
        return !(0, oe.F)(this.info[kk])
      }
      categoryHasRedDot(kk) {
        return !0 === this.info[kk].redDot
      }
      updateCategoryRedDot(kk, ek) {
        this.info[kk].redDot = ek
      }
      doesItemExist(kk, ek) {
        return this.doesCategoryExist(kk) && !(0, oe.F)(this.info[kk].items[ek])
      }
      itemHasRedDot(kk, ek) {
        return !0 === this.info[kk].items[ek].redDot
      }
      updateItemRedDot(kk, ek, ik) {
        this.info[kk].items[ek].redDot = ik
      }
      shallowCopy() {
        return new Jf(this.info)
      }
    }

    function kS(kk, ek) {
      return `${kk}\x1f${ek}`
    }

    function eS(kk, ek) {
      return !(0, oe.F)(ek) && !(0, oe.F)(kk) && ek in kk
    }
    const iS = (0, Dk.memo)((function(kk) {
      var ek, ik;
      let {
        show: fk
      } = kk;
      const bk = (0, eD.e)("players", PS),
        rk = (0, eD.e)("players", mS),
        Mk = (0, aD.c)(),
        [nk, Uk] = (0, Dk.useState)({
          shopInfo: {},
          userInputsPerItem: {},
          redDotInfo: Jf.fromShopInfo({}),
          currencyAmounts: {},
          selectedCategoryKey: null,
          onBoughtInfo: null,
          awaitingPurchase: !1
        }),
        wk = (0, Dk.useRef)(""),
        lk = (0, Dk.useRef)(null),
        yk = (0, Dk.useRef)(null),
        Yk = (0, Dk.useRef)(0),
        Lk = (0, Dk.useRef)(void 0),
        Ck = (0, Dk.useRef)(null),
        Ak = (0, Dk.useRef)(nk),
        sk = nk.redDotInfo.anyCategoryHasRedDots(),
        [dk, Fk] = (0, Dk.useState)(null),
        uk = (0, Dk.useRef)(!1);
      let qk = !1,
        Ik = 0,
        zk = 0;
      if (nk.currencyAmounts) {
        for (const kk in nk.currencyAmounts) {
          var Qk;
          const ek = nk.currencyAmounts[kk];
          ek.hidden || (Ik++, (null === (Qk = ek.subtext) || void 0 === Qk ? void 0 : Qk.length) > 0 && zk++)
        }
        qk = Ik + zk > 4
      }(0, Dk.useEffect)((() => {
        Ze.j.tm("showShopIconRedDot", sk, !0)
      }), [sk]), (0, Dk.useEffect)((() => {
        pk.gameBridge.send("setShopOpen", fk), fk || (clearTimeout(Lk.current), Uk((kk => kk.awaitingPurchase ? {
          ...kk,
          awaitingPurchase: !1
        } : kk)))
      }), [fk]), (0, Dk.useEffect)((() => () => {
        pk.gameBridge.send("setShopOpen", !1), clearTimeout(Lk.current)
      }), []), (0, Dk.useEffect)((() => {
        Ak.current = nk
      }), [nk]), (0, Dk.useEffect)((() => {
        if (null === dk) return;
        return (0, ED.e)("pointerdown", (kk => {
          const ek = kk.target;
          null !== ek && void 0 !== ek && ek.closest(".ShopItem") || Fk(null)
        }))
      }), [dk]);
      const vk = kk => {
          Uk((ek => ({
            ...ek,
            ...kk
          })))
        },
        Ek = kk => {
          var ek;
          clearTimeout(null === (ek = nk.onBoughtInfo) || void 0 === ek ? void 0 : ek.timeout);
          const ik = setTimeout((() => {
            vk({
              onBoughtInfo: null
            })
          }), 3e3);
          wk.current = kk, vk({
            onBoughtInfo: {
              text: kk,
              timeout: ik,
              categoryKey: lk.current
            }
          })
        },
        hk = kk => {
          const {
            shopInfo: ek,
            userInputsPerItem: ik,
            redDotInfo: Dk,
            autoSelectCategory: Sk
          } = function(kk, ek, ik, Dk, fk, Sk) {
            if ((0, oe.F)(kk) || 0 === Object.keys(kk).length) return {
              shopInfo: {},
              userInputsPerItem: {},
              redDotInfo: Jf.fromShopInfo({}),
              autoSelectCategory: null
            };
            const bk = Vk.p[Vk.t].adConfig.showRewardedAds,
              rk = {};
            let Pk = null;
            for (const wk in kk) {
              const ek = kk[wk],
                ik = {};
              let Dk = !1;
              for (const kk in ek.items) {
                const fk = ek.items[kk];
                (0, VD.m)(fk, bk) && (ik[kk] = fk, Dk = !0)
              }
              Dk && (rk[wk] = {
                ...ek,
                items: ik
              }, !0 === ek.autoSelectCategory && (Pk = wk))
            }
            const mk = {},
              Mk = (kk, ek, Dk, bk) => {
                var rk, Pk;
                const Mk = kS(kk, ek),
                  Kk = null !== (rk = ik[Mk]) && void 0 !== rk ? rk : ik[ek];
                if (null !== (Pk = bk.userInput) && void 0 !== Pk && Pk.type) switch (bk.userInput.type) {
                  case "dropdown": {
                    var xk;
                    const kk = !Kk || !bk.userInput.dropdownOptions.some((kk => (0, VD.e)(kk) === Kk)),
                      ek = bk.userInput.shouldResetSelectionOnOptionsChange && ("dropdown" !== (null === Dk || void 0 === Dk || null === (xk = Dk.userInput) || void 0 === xk ? void 0 : xk.type) || JSON.stringify(Dk.userInput.dropdownOptions) !== JSON.stringify(bk.userInput.dropdownOptions)),
                      ik = bk.userInput,
                      fk = !(0, oe.F)(ik.initialValue) && ik.dropdownOptions.some((kk => (0, VD.e)(kk) === ik.initialValue));
                    var nk;
                    return void(kk || ek ? fk ? mk[Mk] = null !== (nk = bk.userInput.initialValue) && void 0 !== nk ? nk : null : bk.userInput.dropdownOptions.length > 0 ? mk[Mk] = (0, VD.e)(bk.userInput.dropdownOptions[0]) : mk[Mk] = null : mk[Mk] = Kk)
                  }
                  case "text":
                  case "number":
                    var Uk, Hk, wk;
                    return void((null === Dk || void 0 === Dk ? void 0 : Dk.userInput) !== bk.userInput ? mk[Mk] = null !== (Uk = null !== (Hk = bk.userInput.initialValue) && void 0 !== Hk ? Hk : Kk) && void 0 !== Uk ? Uk : "" : mk[Mk] = null !== (wk = null !== Kk && void 0 !== Kk ? Kk : bk.userInput.initialValue) && void 0 !== wk ? wk : "");
                  case "color":
                    var lk, pk, yk;
                    return void((null === Dk || void 0 === Dk ? void 0 : Dk.userInput) !== bk.userInput ? mk[Mk] = null !== (lk = null !== (pk = bk.userInput.initialValue) && void 0 !== pk ? pk : Kk) && void 0 !== lk ? lk : "#000000" : mk[Mk] = null !== (yk = null !== Kk && void 0 !== Kk ? Kk : bk.userInput.initialValue) && void 0 !== yk ? yk : "#000000");
                  case "player": {
                    const kk = (0, VD.i)(fk, Sk, bk.userInput);
                    return void(Kk && kk.includes(Kk) ? mk[Mk] = Kk : mk[Mk] = kk.length > 0 ? kk[0] : null)
                  }
                }
              };
            for (const wk in rk)
              for (const kk in rk[wk].items) {
                var Kk;
                const ik = rk[wk].items[kk];
                Mk(wk, kk, null === (Kk = ek[wk]) || void 0 === Kk ? void 0 : Kk.items[kk], ik)
              }
            const xk = Jf.fromShopInfo(rk);
            for (const wk in rk) {
              var nk;
              if (Dk.doesCategoryExist(wk)) {
                (null === (nk = ek[wk]) || void 0 === nk ? void 0 : nk.redDot) === rk[wk].redDot && xk.updateCategoryRedDot(wk, Dk.categoryHasRedDot(wk));
                for (const kk in rk[wk].items) {
                  var Uk, Hk;
                  Dk.doesItemExist(wk, kk) && (null === (Uk = ek[wk]) || void 0 === Uk || null === (Hk = Uk.items[kk]) || void 0 === Hk ? void 0 : Hk.redDot) === rk[wk].items[kk].redDot && xk.updateItemRedDot(wk, kk, Dk.itemHasRedDot(wk, kk))
                }
              }
            }
            return {
              shopInfo: rk,
              userInputsPerItem: mk,
              redDotInfo: xk,
              autoSelectCategory: Pk
            }
          }(kk, nk.shopInfo, nk.userInputsPerItem, nk.redDotInfo, bk, rk), Pk = {
            shopInfo: ek,
            userInputsPerItem: ik,
            redDotInfo: Dk
          };
          if (null === Sk || fk)
            if (ek[nk.selectedCategoryKey]) Pk.selectedCategoryKey = nk.selectedCategoryKey;
            else {
              const kk = tD(ek);
              Pk.selectedCategoryKey = kk.length > 0 ? kk[0] : null
            }
          else Pk.selectedCategoryKey = Sk;
          return 0 === Object.keys(ek).length && fk && jk.b.set({
            openEverythingMenuName: null
          }), Pk
        },
        Wk = (kk, ek, ik) => {
          const Dk = nk.selectedCategoryKey,
            fk = kS(Dk, kk),
            Sk = null !== ik && void 0 !== ik ? ik : nk.userInputsPerItem[fk],
            bk = {
              categoryKey: Dk,
              itemKey: kk,
              userInput: Sk
            };
          if (lk.current = Dk, ek.isRewardedAd) {
            if (Date.now() - Yk.current < 5e3) return;
            (0, re.X)((() => {
              var ik, Dk, Sk;
              console.log("bought rewarded ad");
              const rk = bk.categoryKey ? null === (ik = Ak.current.shopInfo[bk.categoryKey]) || void 0 === ik ? void 0 : ik.items[kk] : null;
              if (!rk || !rk.isRewardedAd) return void console.warn("Shop item no longer valid or a rewarded ad, early out");
              (null === (Dk = ek.userInput) || void 0 === Dk ? void 0 : Dk.type) === (null === rk || void 0 === rk || null === (Sk = rk.userInput) || void 0 === Sk ? void 0 : Sk.type) ? (bk.userInput = Ak.current.userInputsPerItem[fk], pk.gameBridge.send("buyShopItem", bk), ek.onBoughtMessage && Ek(ek.onBoughtMessage)) : console.warn("Shop item input type changed, early out")
            })), Yk.current = Date.now()
          } else {
            pk.gameBridge.send("buyShopItem", bk), vk({
              awaitingPurchase: !0
            }), clearTimeout(Lk.current), Lk.current = setTimeout((() => {
              Ck.current = null, vk({
                awaitingPurchase: !1
              })
            }), 1e3);
            const kk = (0, VD.c)(ek, Sk);
            if (Ck.current = null, !isNaN(kk) && eS(nk.currencyAmounts, ek.currency)) {
              0 !== kk && (Ck.current = {
                currency: ek.currency,
                amountBefore: nk.currencyAmounts[ek.currency].amount
              });
              const ik = {
                ...nk.currencyAmounts
              };
              ik[ek.currency].amount -= kk, vk({
                currencyAmounts: ik
              })
            }
            ek.onBoughtMessage && Ek(ek.onBoughtMessage)
          }
        },
        tk = (kk, ek) => {
          if (null === ek || !kk.shopInfo[ek]) return kk;
          let ik = kk.redDotInfo;
          return ik.categoryHasRedDot(ek) && (ik.updateCategoryRedDot(ek, !1), ik = ik.shallowCopy()), {
            ...kk,
            selectedCategoryKey: ek,
            redDotInfo: ik
          }
        },
        Xk = kk => {
          Uk((ek => tk(ek, kk)))
        };
      (0, qe.c)(hD.k, (() => {
        Uk((kk => {
          const ek = (0, hD.o)(tD(kk.shopInfo), kk.selectedCategoryKey, (ek => (0, hD.j)(kk.shopInfo[ek].items)));
          return ek === kk.selectedCategoryKey ? kk : tk(kk, ek)
        }))
      })), (0, qe.c)("showShopFromServer", (kk => {
        let {
          toggle: ek,
          Db: ik
        } = kk;
        ik && Xk(ik), 0 === Object.keys(nk.shopInfo).length || ek && fk ? jk.b.set({
          openEverythingMenuName: null
        }) : jk.b.set({
          openEverythingMenuName: Me.r.SHOP
        })
      })), (0, qe.c)("closeShopOnDamaged", (() => {
        fk && jk.b.set({
          openEverythingMenuName: null
        })
      })), (0, qe.c)("overShopInfo", (kk => {
        Ek(kk)
      })), (0, Hk.d)("currencyAmounts", (kk => {
        var ek;
        const ik = Ck.current;
        ik && (null === kk || void 0 === kk || null === (ek = kk[ik.currency]) || void 0 === ek ? void 0 : ek.amount) === ik.amountBefore ? vk({
          currencyAmounts: kk
        }) : (Ck.current = null, vk({
          currencyAmounts: kk,
          awaitingPurchase: !1
        }))
      })), (0, Hk.d)("shopInfo", (kk => {
        vk({
          ...hk(kk),
          awaitingPurchase: !1
        })
      }));
      const Bk = (0, Dk.useRef)({
        playerIds: bk,
        localPlayerId: rk
      });
      (0, Dk.useEffect)((() => {
        Bk.current.playerIds === bk && Bk.current.localPlayerId === rk || (Bk.current = {
          playerIds: bk,
          localPlayerId: rk
        }, Uk((kk => {
          const ek = hk(kk.shopInfo);
          return {
            ...kk,
            ...ek
          }
        })))
      }), [bk, rk]);
      const ck = nk.selectedCategoryKey,
        Tk = (kk, ek) => {
          var ik, Dk;
          return (isNaN(ek) || (0, oe.F)(kk.currency) || eS(nk.currencyAmounts, kk.currency) && ek <= nk.currencyAmounts[kk.currency].amount) && (null === (ik = kk.canBuy) || void 0 === ik || ik) && !(null !== (Dk = kk.hidden) && void 0 !== Dk && Dk)
        },
        Zk = (kk, ek) => {
          var ik, Dk, fk;
          const bk = kS(ck, kk),
            rk = nk.shopInfo[ck].items[kk],
            Mk = nk.userInputsPerItem[bk],
            xk = (0, VD.c)(rk, Mk),
            Uk = Tk(rk, xk),
            Hk = rk.enchant,
            wk = Hk ? (0, ak.db)(null !== (ik = rk.customTitle) && void 0 !== ik ? ik : kk, {
              colour: ak.$[Hk.tier]
            }) : null !== (Dk = rk.customTitle) && void 0 !== Dk ? Dk : kk,
            lk = ek => {
              const ik = null !== ek && void 0 !== ek ? ek : Mk,
                Dk = void 0 !== ek ? (0, VD.c)(rk, ek) : xk;
              Tk(rk, Dk) && null !== ik && Wk(kk, rk, ek);
              let fk = nk.redDotInfo;
              fk.itemHasRedDot(ck, kk) && (fk.updateItemRedDot(ck, kk, !1), fk = fk.shallowCopy()), vk({
                redDotInfo: fk
              })
            };
          return (0, Kk.jsxs)("div", {
            className: Sk()("ShopItem", {
              ShopItemNoInput: !rk.userInput,
              ShopItemNoInputCanBuy: !rk.userInput && Uk,
              ShopItemNoInputSelected: rk.isSelected,
              ShopItemEnchant: !!Hk
            }),
            "data-pad-focusable": !rk.userInput || void 0,
            "data-pad-unavailable": !rk.userInput && !Uk || void 0,
            "data-pad-repeat": null !== (fk = (0, hD.d)(rk)) && void 0 !== fk ? fk : void 0,
            "data-pad-repeat-wait": nk.awaitingPurchase || void 0,
            onClick: () => {
              if (Hk && uk.current) {
                if (dk !== bk) return void Fk(bk);
                Fk(null)
              }
              rk.userInput || lk()
            },
            onPointerDown: kk => {
              Hk && (uk.current = (0, uD.r)(kk))
            },
            onPointerEnter: kk => {
              Hk && !(0, uD.r)(kk) && Fk(bk)
            },
            onPointerLeave: kk => {
              Hk && !(0, uD.r)(kk) && Fk((kk => kk === bk ? null : kk))
            },
            style: {
              zIndex: Object.keys(nk.shopInfo[ck].items).length - ek
            },
            children: [nk.redDotInfo.itemHasRedDot(ck, kk) && (0, Kk.jsx)(Pk.e, {
              top: "-6px",
              right: "-6px"
            }), rk.badge && (0, Kk.jsx)("div", {
              className: "ShopBadgeContainer",
              children: (0, Kk.jsx)("div", {
                className: Sk()("ShopBadgeMain", rk.badge.type),
                children: (0, Kk.jsx)(ID.e, {
                  text: rk.badge.text
                })
              })
            }), (0, Kk.jsx)("div", {
              className: "ShopItemLeft",
              children: rk.image && (0, Kk.jsx)(DS, {
                item: rk,
                minWidth: 5,
                minHeight: 4.8
              })
            }), (0, Kk.jsxs)("div", {
              className: "ShopItemRight",
              children: [(0, Kk.jsxs)("div", {
                className: "ShopItemHeader",
                children: [(0, Kk.jsx)("div", {
                  className: "ShopItemHeaderTitle",
                  children: (0, Kk.jsx)(ID.e, {
                    text: wk
                  })
                }), (0, Kk.jsx)("div", {
                  className: "ShopItemHeaderDescription",
                  children: (0, Kk.jsx)(ID.e, {
                    text: rk.description
                  })
                })]
              }), rk.userInput && (0, Kk.jsxs)("div", {
                className: "ShopItemInputsContainer",
                onClick: kk => {
                  kk.stopPropagation()
                },
                children: [(0, Kk.jsx)(bS, {
                  item: rk,
                  currInput: Mk,
                  updateInput: ek => {
                    ((kk, ek, ik) => {
                      const Dk = kS(kk, ek),
                        fk = {
                          ...nk.userInputsPerItem
                        };
                      fk[Dk] = ik, vk({
                        userInputsPerItem: fk
                      })
                    })(ck, kk, ek)
                  },
                  onSubmit: kk => {
                    lk(kk)
                  }
                }), ("dropdown" !== rk.userInput.type || !rk.userInput.autoSubmit) && (0, Kk.jsx)(mk.f, {
                  className: "ItemCostButton",
                  disabled: !Uk && null !== Mk,
                  onClick: () => {
                    lk()
                  },
                  children: (0, Kk.jsx)(SS, {
                    item: rk,
                    cost: xk,
                    currencyAmounts: nk.currencyAmounts
                  })
                })]
              })]
            }), !rk.userInput && (0, Kk.jsx)("div", {
              className: "ShopItemNoInputCost",
              children: (0, Kk.jsx)(SS, {
                item: rk,
                cost: xk,
                currencyAmounts: nk.currencyAmounts
              })
            }), Hk && dk === bk && (0, Kk.jsxs)("div", {
              className: "ShopItemEnchantInfo SmallTextBold",
              children: [(0, Kk.jsx)(ID.e, {
                text: wk
              }), (0, Kk.jsx)("div", {
                className: "ShopItemEnchantInfoDescription",
                children: (0, Kk.jsx)(ID.e, {
                  text: (0, FD.b)("", Hk.enchantments, Hk.enchantmentData)
                })
              })]
            })]
          }, bk)
        },
        Ok = function(kk) {
          for (const ek in kk)
            if (kk[ek].smp) return !0;
          return !1
        }(nk.shopInfo),
        gk = bf(nk.shopInfo, ck);
      return (0, Kk.jsx)(jD.b, {
        className: "Menu ShopBody",
        show: fk,
        children: 0 !== Object.keys(nk.shopInfo).length && (0, Kk.jsxs)(Kk.Fragment, {
          children: [(0, Kk.jsxs)("div", {
            className: "MenuSideBar",
            children: [(0, Kk.jsx)(xk, {
              items: tD(nk.shopInfo).map((kk => {
                var ek;
                return {
                  id: kk,
                  title: null !== (ek = nk.shopInfo[kk].customTitle) && void 0 !== ek ? ek : kk,
                  redDot: nk.redDotInfo.categoryHasRedDot(kk)
                }
              })),
              link: Mk ? {
                faIcon: "users-gear",
                title: "lobbyManageEntry:manageLobby",
                onClick: () => {
                  (0, WD.d)({
                    page: (0, WD.b)(),
                    source: "shop"
                  })
                }
              } : void 0,
              selectedItemId: ck,
              onClick: Xk,
              padStartsOnTab: (0, hD.h)(ck)
            }), (0, Kk.jsx)("div", {
              className: "MenuSideBarFooter",
              children: nk.currencyAmounts && Object.keys(nk.currencyAmounts).map((kk => {
                var ek;
                const ik = nk.currencyAmounts[kk];
                return ik.hidden ? null : (0, Kk.jsxs)("div", {
                  className: "ShopCurrencyDiv " + (qk ? "SmallText" : ""),
                  children: [(0, Kk.jsxs)("div", {
                    className: "ShopCurrencyDetails",
                    children: [(0, Kk.jsx)("div", {
                      className: "ShopCurrencyAmtIcon",
                      style: {
                        color: ik.iconColour
                      },
                      children: (0, Kk.jsx)(MS, {
                        iconName: ik.icon
                      })
                    }), "\xa0", (0, dD.b)(ik.amount, 6)]
                  }), (null === (ek = ik.subtext) || void 0 === ek ? void 0 : ek.length) > 0 && (0, Kk.jsx)("div", {
                    className: "ShopCurrencySubtext",
                    children: (0, Kk.jsx)(ID.e, {
                      text: ik.subtext
                    })
                  })]
                }, kk)
              }))
            })]
          }), (0, Kk.jsxs)("div", {
            className: "MenuBody ShopMenuBody",
            children: [Ok && (0, Kk.jsx)(Rf, {
              show: fk,
              shopInfo: nk.shopInfo,
              selectedCategoryKey: ck,
              buy: (kk, ek, ik) => {
                Wk(kk, ek, ik)
              },
              canAfford: Tk,
              message: nk.onBoughtInfo
            }), null === gk && (0, Kk.jsxs)(Kk.Fragment, {
              children: [(0, Kk.jsx)("div", {
                className: Sk()("ShopOnBoughtInfo", {
                  ShopOnBoughtInfoShow: null !== nk.onBoughtInfo
                }),
                children: (0, Kk.jsx)(ID.e, {
                  text: wk.current
                })
              }), (0, Kk.jsx)("div", {
                className: "ShopItemsWrapper",
                children: (0, Kk.jsxs)("div", {
                  className: "ShopItemsInner",
                  children: [(null === (ek = nk.shopInfo[ck]) || void 0 === ek ? void 0 : ek.description) && (0, Kk.jsx)("div", {
                    className: "ShopCategoryDescription",
                    children: (0, Kk.jsx)(ID.e, {
                      text: nk.shopInfo[ck].description
                    })
                  }), fk && (0, Kk.jsx)("div", {
                    className: "ShopItems",
                    ref: yk,
                    "data-pad-initial-area": !0,
                    children: tD(null === (ik = nk.shopInfo[ck]) || void 0 === ik ? void 0 : ik.items).map(((kk, ek) => Zk(kk, ek)))
                  })]
                })
              })]
            })]
          })]
        })
      })
    }));

    function DS(kk) {
      let {
        item: ek,
        minWidth: ik,
        minHeight: Dk
      } = kk;
      const {
        image: fk,
        schematicId: Sk,
        imageColour: bk
      } = ek;
      if (Sk) return (0, Kk.jsx)("div", {
        className: "ShopSchematic",
        style: {
          width: `${ik}rem`,
          height: `${Dk}rem`
        },
        children: (0, Kk.jsx)(zD.e, {
          game: {
            schematicId: Sk
          }
        })
      });
      var Pk, mk;
      if ((0, qD.e)(fk)) return (0, Kk.jsx)("div", {
        className: "ShopBlock",
        style: {
          minWidth: `${ik}rem`,
          height: "0",
          minHeight: `${Dk}rem`
        },
        children: (0, Kk.jsx)(qD.c, {
          itemName: fk,
          amount: null !== (Pk = ek.amount) && void 0 !== Pk ? Pk : 0,
          amountFontSize: Dk / 4 + "rem",
          enchantmentTier: null === (mk = ek.enchant) || void 0 === mk ? void 0 : mk.tier
        })
      });
      const Mk = fk.slice(-4);
      return ".jpg" === Mk || ".png" === Mk ? (0, Kk.jsx)(fS, {
        image: fk,
        minWidth: ik
      }) : (0, Kk.jsx)(rk.d, {
        name: fk,
        className: "SelectedItemImage",
        style: {
          color: bk
        }
      })
    }

    function fS(kk) {
      let {
        image: ek,
        minWidth: ik
      } = kk;
      const {
        gameNameWithVariation: Dk
      } = (0, eD.h)("connectedGame"), fk = ek.endsWith(".jpg");
      return (0, Kk.jsx)("img", {
        className: Sk()({
          ShopPixelImage: !fk
        }),
        style: {
          width: `${fk?1.6*ik:ik}rem`,
          height: "auto",
          fontSize: "1.25rem"
        },
        src: `/textures/games/${(0,ak.Db)(Dk)}/${ek}`,
        alt: ek,
        draggable: !1
      })
    }

    function SS(kk) {
      let {
        item: ek,
        cost: ik,
        currencyAmounts: Dk
      } = kk;
      const fk = !isNaN(ik) && 0 !== ik && eS(Dk, ek.currency);
      let Sk = null;
      return ek.buyButtonText ? Sk = ek.buyButtonText : fk ? (Sk = ik, ek.sell && (Sk = -1 * ik), Sk = Sk.toString()) : 0 === ik ? Sk = "Free" : ek.isRewardedAd && (Sk = "Watch ad"), (0, oe.F)(Sk) || " " === Sk ? null : (0, Kk.jsxs)("div", {
        className: "BuyItemCostAndIcon",
        children: [fk && (0, Kk.jsx)("div", {
          style: {
            color: Dk[ek.currency].iconColour
          },
          className: "BuyItemIcon",
          children: (0, Kk.jsx)(MS, {
            iconName: Dk[ek.currency].icon
          })
        }), (0, Kk.jsx)("div", {
          className: "BuyItemCost",
          children: (0, Kk.jsx)(ID.e, {
            text: Sk
          })
        })]
      })
    }

    function bS(kk) {
      let {
        item: ek,
        currInput: ik,
        updateInput: fk,
        onSubmit: Sk
      } = kk;
      const {
        t: rk
      } = (0, bk.D)(), Pk = (0, Dk.useRef)(null);
      if ((0, Dk.useEffect)((() => {
          const kk = Pk.current;
          kk && kk.value !== ik && document.activeElement !== kk && (kk.value = null !== ik && void 0 !== ik ? ik : "")
        }), [ik]), !ek.userInput) return null;
      let mk = ek.userInput;
      if (lk.featureFlags.sanitizeShopInput && "text" === ek.userInput.type && (mk = {
          type: "number",
          placeholderText: "Numbers Only"
        }), "text" === mk.type || "number" === mk.type) {
        var Mk, xk;
        console.assert(void 0 !== ik, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(ek)}`);
        const kk = "text" === mk.type && mk.wordCharsOnly;
        return (0, Kk.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputTextWrapper",
          children: (0, Kk.jsx)(Lk.b, {
            className: "ShopItemUserInputText",
            placeholderText: rk(mk.placeholderText),
            defaultValue: ik,
            domRef: Pk,
            onValueChange: (ek, ik) => {
              !0 === kk && (ek = (0, vD.ib)(ek)), Pk.current.value = ek, fk(ek)
            },
            onEnter: Sk,
            type: mk.type
          }, (null !== (Mk = mk.initialValue) && void 0 !== Mk ? Mk : "") + (null !== (xk = mk.placeholderText) && void 0 !== xk ? xk : ""))
        })
      }
      if ("dropdown" === mk.type) {
        console.assert(void 0 !== ik, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(ek)}`);
        const kk = mk.autoSubmit;
        return (0, Kk.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputDropdown",
          children: (0, Kk.jsx)(je.e, {
            options: mk.dropdownOptions.map((kk => (0, VD.e)(kk))),
            value: ik,
            onChange: ek => {
              let {
                value: ik
              } = ek;
              fk(ik), kk && Sk(ik)
            }
          })
        })
      }
      return "player" === mk.type ? (0, Kk.jsx)(rS, {
        userInput: mk,
        currInput: ik,
        updateInput: fk
      }) : "color" === mk.type ? (0, Kk.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputColor",
        children: (0, Kk.jsx)("input", {
          type: "color",
          value: ik,
          onChange: kk => {
            fk(kk.target.value)
          }
        })
      }) : null
    }

    function rS(kk) {
      let {
        userInput: ek,
        currInput: ik,
        updateInput: Dk
      } = kk;
      const fk = (0, eD.h)("players"),
        Sk = (0, eD.h)("hiddenPlayerNames"),
        bk = (0, VD.i)(fk.ids, fk.localId, ek);
      return (0, Kk.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputDropdown",
        children: (0, Kk.jsx)(je.e, {
          options: bk.map((kk => {
            const {
              name: ek
            } = fk.byId[kk];
            return {
              value: kk,
              label: null === ek ? "" : (0, QD.f)(ek, Sk)
            }
          })),
          value: ik,
          onChange: kk => {
            let {
              value: ek
            } = kk;
            Dk(ek)
          }
        })
      })
    }

    function PS(kk) {
      let {
        ids: ek
      } = kk;
      return ek
    }

    function mS(kk) {
      let {
        localId: ek
      } = kk;
      return ek
    }

    function MS(kk) {
      let {
        iconName: ek
      } = kk;
      return pk.gameBridge.lookup("isItemName", ek) ? (0, Kk.jsx)(qD.c, {
        itemName: ek,
        amount: 1
      }) : (0, Kk.jsx)(rk.d, {
        name: ek,
        className: "2x"
      })
    }
    var KS = ik(1614);
    const xS = (0, ik(1375).i)((kk => kk.PadLobbyShortcuts)),
      nS = (0, Dk.lazy)((() => Promise.resolve().then((() => ik(4587))).then((kk => ({
        default: kk.Lobbyleaderboard
      }))))),
      US = (0, Dk.lazy)((() => ik.e(218).then((() => ik(40669))).then((kk => ({
        default: kk.LobbyManageView
      })))));

    function HS(kk) {
      let {
        show: ek
      } = kk;
      return ek ? (0, Kk.jsx)(wS, {}) : null
    }

    function wS() {
      const kk = (0, aD.c)();
      return (0, Kk.jsxs)(Kk.Fragment, {
        children: [(0, Kk.jsx)(xS, {}), (0, Kk.jsxs)(Dk.Suspense, {
          fallback: (0, Kk.jsx)("div", {
            className: "CharacterCustomisationLoading",
            children: (0, Kk.jsx)(Ck.d, {})
          }),
          children: [kk && (0, Kk.jsx)(US, {
            leaderboard: (0, Kk.jsx)(nS, {})
          }), !kk && (0, Kk.jsx)(nS, {})]
        })]
      })
    }
    var lS = ik(1530),
      pS = ik(2981),
      yS = ik(1688),
      YS = ik(3034),
      LS = ik(2630),
      CS = ik(1452),
      AS = ik(1415),
      jS = ik(2946),
      sS = ik(2972),
      dS = ik(2312);
    const VS = "storeRecentGiftRecipients",
      FS = new Map;

    function uS() {
      try {
        const kk = ge.f.getItem(VS);
        return Array.isArray(kk) ? kk.filter((kk => "string" === typeof(null === kk || void 0 === kk ? void 0 : kk.name) && kk.name.length > 0)).map((kk => ({
          name: kk.name,
          cosmetics: kk.cosmetics && "object" === typeof kk.cosmetics ? kk.cosmetics : null
        }))) : []
      } catch {
        return []
      }
    }

    function qS(kk) {
      var ek;
      const [ik, fk] = (0, Dk.useState)(""), [Sk, bk] = (0, Dk.useState)("search"), [rk, Pk] = (0, Dk.useState)(null), [mk, Mk] = (0, Dk.useState)(null), Kk = (0, Dk.useRef)(null), xk = (0, Dk.useRef)(null);
      (0, Dk.useEffect)((() => () => {
        Kk.current && clearTimeout(Kk.current)
      }), []);
      const nk = null !== (ek = null === rk || void 0 === rk ? void 0 : rk.name) && void 0 !== ek ? ek : null;

      function Uk() {
        Kk.current && (clearTimeout(Kk.current), Kk.current = null)
      }(0, Dk.useEffect)((() => {
        if (null === nk || kk === Fk.NULL_USER_CONTEXT) return;
        const ek = nk.toLowerCase();
        if (ek === kk.getPlayerName().toLowerCase()) return void Mk({
          name: nk,
          result: {
            giftRecipientFound: !1,
            giftRecipientError: "store:giftRecipientIsYou"
          }
        });
        const ik = FS.get(ek);
        if (ik) return void Mk({
          name: nk,
          result: ik
        });
        let Dk = !1;
        return async function(kk, ek) {
          try {
            const ik = await (0, Fk.postJsonWithMetricsCookiesAndJsonResponse)(`${uk.clientSideServerUrls.indexUrl}/index/store/gift-recipient`, {
              giftRecipientName: ek
            }, {
              retries: 1
            }, kk.getMetricsCookies());
            if ("boolean" !== typeof(null === ik || void 0 === ik ? void 0 : ik.giftRecipientFound)) throw new Error(`Unexpected gift recipient lookup response: ${JSON.stringify(ik)}`);
            return ik
          } catch (ik) {
            return console.error("Failed to look up gift recipient:", ik), {
              giftRecipientFound: !1,
              giftRecipientError: "store:giftRecipientLookupFailed"
            }
          }
        }(kk, nk).catch((kk => (console.error("Gift recipient lookup failed:", kk), {
          giftRecipientFound: !1,
          giftRecipientError: "store:giftRecipientLookupFailed"
        }))).then((kk => {
          !0 !== kk.giftRecipientFound && "store:giftRecipientLookupFailed" === kk.giftRecipientError || FS.set(ek, kk), Dk || Mk({
            name: nk,
            result: kk
          })
        })), () => {
          Dk = !0
        }
      }), [nk, kk]);
      const Hk = (0, Dk.useMemo)((() => {
        const kk = ik.trim();
        if (!kk) return {
          status: "none"
        };
        if (!rk || rk.name !== kk || (null === mk || void 0 === mk ? void 0 : mk.name) !== rk.name) return {
          status: "pending",
          name: kk
        };
        const ek = mk.result;
        return !1 === ek.giftRecipientFound ? {
          status: "error",
          name: rk.name,
          error: ek.giftRecipientError
        } : {
          status: "found",
          name: ek.giftRecipientName,
          ownedPacks: ek.giftRecipientOwnedPacks,
          hasSuperRank: ek.giftRecipientHasSuperRank,
          isSubscriber: ek.giftRecipientIsSubscriber
        }
      }), [ik, rk, mk]);
      (0, Dk.useEffect)((() => {
        "found" === Hk.status && "typed" === (null === rk || void 0 === rk ? void 0 : rk.source) && xk.current !== Hk.name && (xk.current = Hk.name, (0, Jk.reportAnalyticsClick)({
          id: "store.gift_recipient",
          value: "typed"
        }))
      }), [Hk, rk]);
      const wk = (null === mk || void 0 === mk ? void 0 : mk.name) === (null === rk || void 0 === rk ? void 0 : rk.name) ? null === mk || void 0 === mk ? void 0 : mk.result : null,
        lk = !0 === (null === wk || void 0 === wk ? void 0 : wk.giftRecipientFound) ? wk.giftRecipientCosmetics : null;
      return {
        query: ik,
        via: Sk,
        recipient: Hk,
        recipientCosmetics: lk,
        type: function(kk) {
          fk(kk), bk("search"), Uk();
          const ek = kk.trim();
          ek ? Kk.current = setTimeout((() => {
            Pk({
              name: ek,
              source: "typed"
            })
          }), 400) : Pk(null)
        },
        choose: function(kk, ek) {
          Uk(), fk(kk), bk("typed" === ek ? "search" : "prefilled" === ek ? "prefilled" : "suggestion"), Pk({
            name: kk,
            source: ek
          }), "typed" !== ek && "prefilled" !== ek && (0, Jk.reportAnalyticsClick)({
            id: "store.gift_recipient",
            value: ek
          })
        },
        clear: function() {
          Uk(), fk(""), bk("search"), Pk(null)
        },
        recordGift: function(kk, ek) {
          ! function(kk) {
            FS.delete(kk.toLowerCase())
          }(kk), Mk((ik => {
            if (!ik || ik.name.toLowerCase() !== kk.toLowerCase() || !0 !== ik.result.giftRecipientFound || "superRank" === ek) return ik;
            const Dk = ik.result.giftRecipientOwnedPacks;
            return {
              ...ik,
              result: {
                ...ik.result,
                giftRecipientOwnedPacks: Dk.includes(ek) ? Dk : [...Dk, ek]
              }
            }
          }))
        }
      }
    }
    var IS = ik(2308),
      zS = ik(4592),
      QS = ik(247),
      vS = ik(3082);
    const ES = ["pointerdown", "pointermove", "keydown", "wheel", "touchstart", "scroll", "blur", "focus"];
    var hS = ik(2246),
      aS = ik(581),
      WS = ik(2359),
      tS = ik(2540);

    function XS(kk) {
      let {
        cosmetics: ek
      } = kk;
      return (0, Kk.jsx)("span", {
        className: "StoreRecipientAvatar",
        children: (0, Kk.jsx)(WS.b, {
          cosmetics: ek
        })
      })
    }

    function BS(kk, ek) {
      var ik, Dk;
      const fk = null !== (ik = kk.friend) && void 0 !== ik ? ik : {
        isError: !1,
        name: kk.name,
        ranks: [],
        cosmetics: null !== (Dk = kk.cosmetics) && void 0 !== Dk ? Dk : {},
        nameColour: aS.b,
        location: {
          status: "noGamePlayed"
        }
      };
      return ek ? {
        ...fk,
        cosmetics: ek
      } : fk
    }

    function cS(kk) {
      let {
        pending: ek
      } = kk;
      return (0, Kk.jsx)("span", {
        className: "StoreRecipientLoader",
        children: ek && (0, Kk.jsx)(Ck.d, {})
      })
    }

    function TS(kk) {
      var ek;
      let {
        selfName: ik,
        giftRecipient: fk,
        suggestionsVersion: Pk,
        pulseSignal: Mk,
        disabled: xk
      } = kk;
      const {
        t: nk
      } = (0, bk.D)(), Uk = (0, Bk.i)(), Hk = (0, Dk.useRef)(null), wk = (0, Dk.useRef)(null), {
        query: pk,
        via: yk,
        recipient: Yk,
        recipientCosmetics: Ck
      } = fk, Ak = (0, dS.n)(pk), jk = (0, Dk.useMemo)((() => {
        const kk = lk.featureFlags.useSocialFeatures ? Uk.friends.filter((kk => !kk.isError)) : [];
        return (0, dS.i)({
          onlineFriends: (0, Bk.f)(kk),
          recentRecipients: uS(),
          friends: kk,
          selfName: ik,
          max: 8
        })
      }), [Uk.friends, ik, Pk]), sk = pk.trim().toLowerCase(), dk = "search" !== yk && sk ? jk.find((kk => kk.name.toLowerCase() === sk)) : void 0, Vk = dk && "prefilled" === yk ? [dk, ...jk.filter((kk => kk !== dk))] : jk, Fk = "" !== sk && !dk, uk = Fk ? pk : "", qk = Vk.length > 0;
      (0, Dk.useEffect)((() => {
        Hk.current && Hk.current.value !== uk && (Hk.current.value = uk)
      }), [uk]), (0, Dk.useEffect)((() => {
        Hk.current && (Hk.current.disabled = xk)
      }), [xk, Mk]);
      const Ik = (0, Dk.useRef)(0);

      function Qk() {
        "self" !== Ak && (0, Jk.reportAnalyticsClick)({
          id: "store.mode",
          value: "self"
        }), fk.clear()
      }

      function vk(kk) {
        var ek, ik;
        if (xk) return;
        if (" " === kk.key || "Enter" === kk.key) return kk.preventDefault(), void kk.currentTarget.click();
        const Dk = Array.from(null !== (ek = null === (ik = wk.current) || void 0 === ik ? void 0 : ik.querySelectorAll("[role=radio]")) && void 0 !== ek ? ek : []),
          fk = Dk.indexOf(kk.currentTarget);
        let Sk;
        "ArrowRight" === kk.key || "ArrowDown" === kk.key ? Sk = Dk[(fk + 1) % Dk.length] : "ArrowLeft" === kk.key || "ArrowUp" === kk.key ? Sk = Dk[(fk - 1 + Dk.length) % Dk.length] : "Home" === kk.key ? Sk = Dk[0] : "End" === kk.key && (Sk = Dk[Dk.length - 1]), Sk && (kk.preventDefault(), Sk.focus(), Sk.click())
      }(0, Dk.useEffect)((() => {
        var kk;
        Mk > Ik.current && !xk && (Ik.current = Mk, null === (kk = Hk.current) || void 0 === kk || kk.focus())
      }), [Mk, xk]);
      const Ek = "self" === Ak,
        hk = null !== (ek = null === dk || void 0 === dk ? void 0 : dk.name) && void 0 !== ek ? ek : null,
        ak = "error" === Yk.status ? Yk.error : null,
        Wk = "store:giftRecipientLookupFailed" === ak;
      return (0, Kk.jsxs)("div", {
        className: Sk()("StoreRecipientStrip", {
          StoreRecipientStripDisabled: xk,
          StoreRecipientStripNoChips: !qk
        }),
        children: [(0, Kk.jsx)("span", {
          className: "StoreRecipientLabel",
          "aria-hidden": !0,
          children: nk("store:buyingFor")
        }), (0, Kk.jsxs)("div", {
          ref: wk,
          className: "StoreRecipientRadios",
          role: "radiogroup",
          "aria-label": nk("store:whoIsItFor"),
          children: [(0, Kk.jsxs)("div", {
            role: "radio",
            "data-pad-focusable": !0,
            "aria-checked": Ek,
            tabIndex: xk || !Ek && null !== hk ? -1 : 0,
            className: Sk()("StoreRecipientMe", {
              StoreRecipientChecked: Ek
            }),
            onClick: () => {
              xk || Qk()
            },
            onKeyDown: vk,
            children: [(0, Kk.jsx)(rk.d, {
              name: "user"
            }), " ", nk("store:me")]
          }), qk && (0, Kk.jsx)("div", {
            className: "StoreRecipientChips",
            children: Vk.map((kk => {
              const ek = kk === dk;
              return (0, Kk.jsx)("div", {
                role: "radio",
                "data-pad-focusable": !0,
                "aria-checked": ek,
                tabIndex: !xk && ek ? 0 : -1,
                title: kk.name,
                className: Sk()("StoreRecipientChip", {
                  StoreRecipientChecked: ek
                }),
                onClick: () => {
                  xk || function(kk) {
                    "gift" !== Ak && (0, Jk.reportAnalyticsClick)({
                      id: "store.mode",
                      value: "gift"
                    }), fk.choose(kk.name, kk.kind)
                  }(kk)
                },
                onKeyDown: vk,
                children: (0, Kk.jsx)(tS.d, {
                  playerSocialPreview: BS(kk, ek ? Ck : null),
                  opensProfileCard: !1,
                  isFriend: null !== kk.friend,
                  hideFriendBadge: !0,
                  showLocation: null !== kk.friend,
                  status: null === kk.friend ? null : void 0,
                  trailing: ek ? (0, Kk.jsx)(cS, {
                    pending: "pending" === Yk.status
                  }) : void 0
                })
              }, kk.name)
            }))
          })]
        }), (0, Kk.jsxs)("div", {
          className: Sk()("StoreRecipientSearch", {
            StoreRecipientChecked: Fk,
            StoreRecipientSearchPulse: Mk > 0 && !Fk,
            StoreRecipientSearchError: null !== ak && !Wk
          }),
          onClick: () => {
            var kk;
            null === (kk = Hk.current) || void 0 === kk || kk.focus()
          },
          children: [Fk && "found" === Yk.status && Ck && (0, Kk.jsx)(XS, {
            cosmetics: Ck
          }), !(Fk && "found" === Yk.status && Ck) && (0, Kk.jsx)(rk.d, {
            name: "magnifying-glass",
            className: "StoreRecipientSearchIcon"
          }), (0, Kk.jsx)(Lk.b, {
            className: "StoreRecipientSearchInput",
            domRef: Hk,
            placeholderText: nk("store:searchName"),
            defaultValue: uk,
            maxLength: zk.h,
            onValueChange: function(kk) {
              "gift" !== Ak && kk.trim() && (0, Jk.reportAnalyticsClick)({
                id: "store.mode",
                value: "gift"
              }), fk.type(kk)
            },
            onEnter: () => {
              var kk;
              const ek = null === (kk = Hk.current) || void 0 === kk ? void 0 : kk.value.trim();
              ek && fk.choose(ek, "typed")
            },
            blurOnEnter: !0
          }), Fk && (0, Kk.jsx)(cS, {
            pending: "pending" === Yk.status
          }), Fk && (0, Kk.jsx)("div", {
            ...(0, mk.db)({
              disabled: xk
            }),
            "aria-label": nk("store:clearRecipient"),
            title: nk("store:clearRecipient"),
            className: "StoreRecipientClear",
            onClick: kk => {
              kk.stopPropagation(), xk || Qk()
            },
            children: (0, Kk.jsx)(rk.d, {
              name: "xmark"
            })
          })]
        }, Mk), ak && (0, Kk.jsx)("div", {
          className: Sk()("StoreRecipientPopover", {
            StoreRecipientPopoverSoft: Wk
          }),
          role: "status",
          children: nk(ak)
        })]
      })
    }
    var oS = ik(2299),
      ZS = ik(2216),
      OS = ik(3529),
      gS = ik(3084),
      GS = ik(2259);
    const NS = ik.p + "static/media/superRankPreviewPoster.e64783181b692cc31e08.webp";

    function RS() {
      (0, GS.k)(NS, {
        lowPriority: !1
      })
    }

    function JS(kk) {
      let {
        onBack: ek,
        cta: ik,
        recipient: fk,
        afterCta: Sk
      } = kk;
      const {
        t: Pk
      } = (0, bk.D)(), [Mk, xk] = (0, Dk.useState)("starting"), nk = (0, Dk.useRef)(null), Uk = (0, Qe.e)(), Hk = (0, Dk.useRef)(null), wk = (0, Dk.useCallback)((() => {
        const kk = nk.current;
        null !== kk.error && kk.load();
        const ek = kk.play();
        Hk.current = ek, ek.catch((kk => {
          (0, OS.b)("Failed to play Super Rank video", kk), Uk.current && Hk.current === ek && xk("failed")
        }))
      }), [Uk]);
      return (0, Dk.useEffect)((() => {
        const kk = nk.current;
        let ek;

        function ik() {
          clearTimeout(ek), ek = setTimeout(wk, 3e3)
        }
        return wk(), kk.addEventListener("ended", ik), () => {
          clearTimeout(ek), kk.removeEventListener("ended", ik)
        }
      }), [wk]), (0, Kk.jsxs)("div", {
        className: "StoreSuperRankDetail",
        children: [(0, Kk.jsxs)("div", {
          className: "StoreDetailHeader",
          children: [(0, Kk.jsx)(mk.e, {
            className: "StoreDetailBackButton",
            onClick: ek,
            padBack: !0,
            children: Pk("general:back")
          }), (0, Kk.jsxs)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: [(0, Kk.jsx)(rk.d, {
              name: "bolt"
            }), " ", Pk("homePage:superRank")]
          }), fk]
        }), (0, Kk.jsxs)("div", {
          className: "StoreSuperRankDetailBody",
          children: [(0, Kk.jsxs)("div", {
            className: "StoreSuperRankVideo",
            children: [(0, Kk.jsx)("video", {
              ref: nk,
              src: `${uk.clientSideServerUrls.staticUrl}/videos/SuperRankPreview.mp4`,
              poster: NS,
              muted: !0,
              playsInline: !0,
              controls: "playing" === Mk,
              onPlaying: () => {
                xk("playing")
              },
              onError: () => {
                xk("failed")
              }
            }), ("failed" === Mk || "loading" === Mk) && (0, Kk.jsx)("div", {
              className: "StoreSuperRankPlay",
              children: (0, Kk.jsx)(mk.f, {
                ariaLabel: Pk("general:play"),
                loading: "loading" === Mk,
                onClick: () => {
                  xk("loading"), wk()
                },
                touchPressOn: "pointerup",
                children: (0, Kk.jsx)(rk.d, {
                  name: "play"
                })
              })
            })]
          }), (0, Kk.jsxs)("div", {
            className: "StoreSuperRankDetailSide",
            children: [(0, Kk.jsx)("div", {
              className: "StoreSuperRankDetailTable",
              children: (0, Kk.jsx)(gS.d, {})
            }), (0, Kk.jsxs)("div", {
              className: "StoreTileActions",
              children: [ik, Sk]
            })]
          })]
        })]
      })
    }
    var kb = ik(2558),
      eb = ik(3480),
      ib = ik(3069),
      Db = ik(3077);
    const fb = [aS.o.yellow, aS.o.green, aS.o.aqua, aS.o.blue, aS.o.purple, aS.o.red];

    function Sb(kk) {
      return "needsRecipient" === kk || "lookingUp" === kk || "gift" === kk || "recipientOwns" === kk || "recipientSharesOwned" === kk || "recipientSubscribed" === kk
    }

    function bb(kk) {
      const {
        onKeyDown: ek,
        ...ik
      } = (0, mk.db)();
      return {
        ...ik,
        "aria-label": kk,
        onKeyDown: kk => {
          kk.target === kk.currentTarget && (null === ek || void 0 === ek || ek(kk))
        }
      }
    }

    function rb(kk) {
      let {
        text: ek
      } = kk;
      return (0, Kk.jsx)("span", {
        className: "StoreRainbowText",
        children: Array.from(ek).map(((kk, ek) => (0, Kk.jsx)("span", {
          style: {
            color: fb[ek % fb.length]
          },
          children: kk
        }, ek)))
      })
    }
    const Pb = {
      recipientOwns: "store:alreadyOwns",
      sharesOwned: "store:sharesOwned",
      recipientSharesOwned: "store:recipientSharesOwned",
      subscribed: "store:subscribed",
      recipientSubscribed: "store:recipientSubscribed"
    };

    function mb(kk) {
      let {
        state: ek,
        item: ik,
        price: Dk,
        busy: fk,
        highlight: Pk = !1,
        onAct: Mk,
        onNeedRecipient: xk,
        onLogin: nk
      } = kk;
      const {
        t: Uk
      } = (0, bk.D)(), Hk = "superRank" === ik ? vk.l.product.days : null, wk = kk => null === Hk ? Uk(kk ? "general:gift" : "general:buy") : Uk(kk ? "store:giftDays" : "store:buyDays", {
        days: Hk
      }), lk = (kk, ek) => {
        const ik = (0, Kk.jsxs)(Kk.Fragment, {
          children: [null === kk && (0, Kk.jsx)("span", {
            className: "StoreCtaLabel StoreCtaLabelPending"
          }), null !== kk && (0, Kk.jsx)("span", {
            className: "StoreCtaLabel",
            title: kk,
            children: kk
          })]
        });
        return null !== Hk ? (0, Kk.jsxs)(Kk.Fragment, {
          children: [ek && (0, Kk.jsx)("span", {
            className: "StoreCtaIcon",
            children: ek
          }), ik, (0, Kk.jsxs)("span", {
            className: "StoreCtaPrice",
            children: ["\xb7", (0, Kk.jsx)(ZS.c, {
              amount: Dk
            })]
          })]
        }) : (0, Kk.jsxs)(Kk.Fragment, {
          children: [(0, Kk.jsxs)("span", {
            className: "StoreCtaLead",
            children: [ik, "\xb7"]
          }), (0, Kk.jsxs)("span", {
            className: "StoreCtaPrice",
            children: [ek, (0, Kk.jsx)(ZS.c, {
              amount: Dk
            })]
          })]
        })
      };
      let pk;
      switch (ek) {
        case "pending":
          pk = (0, Kk.jsx)(mk.r, {
            className: "StoreCtaButton",
            disabled: !0,
            children: lk(null)
          });
          break;
        case "login":
          pk = (0, Kk.jsx)(mk.r, {
            className: "StoreCtaButton",
            onClick: nk,
            children: lk(wk(!1))
          });
          break;
        case "owned":
          pk = (0, Kk.jsx)(mk.j, {
            className: "StoreCtaButton",
            onClick: () => {
              jk.b.set({
                openEverythingMenuName: Me.r.CUSTOMISATION
              })
            },
            children: (0, Kk.jsxs)("span", {
              className: "StoreCtaLabel",
              children: [(0, Kk.jsx)(rk.d, {
                name: "shirt"
              }), " ", Uk("store:equip")]
            })
          });
          break;
        case "recipientOwns":
        case "sharesOwned":
        case "recipientSharesOwned":
        case "subscribed":
        case "recipientSubscribed":
          pk = (0, Kk.jsx)(mk.r, {
            className: "StoreCtaButton",
            disabled: !0,
            children: (0, Kk.jsx)("span", {
              className: "StoreCtaLabel",
              children: Uk(Pb[ek])
            })
          });
          break;
        case "needsRecipient":
        case "lookingUp":
        case "gift":
          pk = (0, Kk.jsx)(mk.r, {
            className: "StoreCtaButton",
            disabled: "needsRecipient" === ek || null === Dk,
            loading: "lookingUp" === ek || fk,
            onClick: Mk,
            analyticsClick: {
              id: "store.gift",
              value: ik
            },
            children: lk(wk(!0), dS.c)
          });
          break;
        case "buy":
        case "recharge":
          pk = (0, Kk.jsx)(mk.r, {
            className: "StoreCtaButton",
            loading: fk,
            disabled: null === Dk,
            onClick: Mk,
            analyticsClick: {
              id: "store.buy",
              value: ik
            },
            children: lk(wk(!1))
          })
      }
      return (0, Kk.jsx)("div", {
        className: Sk()("StoreCta", {
          StoreCtaHighlight: Pk,
          StoreCtaLabelFirst: null !== Hk
        }),
        onClick: kk => {
          kk.stopPropagation(), "needsRecipient" === ek && xk()
        },
        children: pk
      })
    }

    function Mb() {
      const {
        t: kk
      } = (0, bk.D)();
      return (0, Kk.jsxs)("ul", {
        className: "StorePerks",
        children: [(0, Kk.jsxs)("li", {
          children: [(0, Kk.jsx)(rk.d, {
            name: "check"
          }), (0, Kk.jsx)(rb, {
            text: kk("store:colourfulNames")
          })]
        }), (0, Kk.jsxs)("li", {
          children: [(0, Kk.jsx)(rk.d, {
            name: "check"
          }), kk("store:perkCapes")]
        }), (0, Kk.jsxs)("li", {
          children: [(0, Kk.jsx)(rk.d, {
            name: "check"
          }), kk("store:perkNoAdverts")]
        }), (0, Kk.jsxs)("li", {
          children: [(0, Kk.jsx)(rk.d, {
            name: "check"
          }), kk("store:perkFriends", {
            count: (0, Nk.b)(["super"])
          })]
        })]
      })
    }

    function Kb(kk) {
      let {
        daysLeft: ek,
        totalDays: ik,
        urgent: Dk
      } = kk;
      const {
        t: fk
      } = (0, bk.D)(), rk = ik > 0 ? Math.min(1, Math.max(.03, ek / ik)) : 1;
      return (0, Kk.jsxs)("div", {
        className: Sk()("StoreSuperRankMeterArea", {
          StoreSuperRankMeterUrgent: Dk
        }),
        children: [(0, Kk.jsx)("span", {
          className: "StoreSuperRankDaysLeft",
          children: 1 === ek ? fk("store:oneDayLeft") : fk("store:daysLeft", {
            days: ek
          })
        }), (0, Kk.jsx)("div", {
          className: "StoreSuperRankMeter",
          children: (0, Kk.jsx)("i", {
            style: {
              width: 100 * rk + "%"
            }
          })
        })]
      })
    }

    function xb(kk) {
      let {
        state: ek,
        urgent: ik,
        daysLeft: Dk,
        totalDays: fk,
        recipientHasSuperRank: Pk,
        busy: mk,
        highlight: Mk,
        onOpen: xk,
        onAct: nk,
        onNeedRecipient: Uk,
        onLogin: Hk
      } = kk;
      const {
        t: wk
      } = (0, bk.D)(), lk = Sb(ek), {
        days: pk
      } = vk.l.product, yk = wk("store:recipientHasSuperRank", {
        giftDays: pk
      }), Yk = gk("subscribed" === ek);
      return (0, Kk.jsxs)("div", {
        className: Sk()("StoreTile StoreSuperRankTile", {
          StoreTileGift: lk,
          StoreSuperRankTileUrgent: "recharge" === ek && ik,
          StoreSuperRankTileWithChip: Pk,
          StoreSuperRankTileGiftReady: "gift" === ek
        }),
        ...bb(wk("homePage:superRank")),
        "data-store-item": "superRank",
        onPointerEnter: RS,
        onFocus: RS,
        onClick: xk,
        children: [(0, Kk.jsx)("div", {
          className: "StoreSuperRankArt",
          style: {
            backgroundImage: `url(${hS.g})`
          }
        }), lk && (0, Kk.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, Kk.jsxs)("div", {
          className: "StoreTileContent",
          children: [Pk && (0, Kk.jsx)("span", {
            className: "StoreChip StoreChipGift",
            title: yk,
            children: yk
          }), (0, Kk.jsxs)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: [(0, Kk.jsx)(rk.d, {
              name: "bolt"
            }), " ", wk("homePage:superRank")]
          }), lk && (0, Kk.jsx)("div", {
            className: "StoreTilePitch",
            children: wk("store:giftPitch", {
              days: pk
            })
          }), "recharge" === ek && (0, Kk.jsx)(Kb, {
            daysLeft: Dk,
            totalDays: fk,
            urgent: ik
          }), Yk && (0, Kk.jsx)("div", {
            className: "StoreSuperRankMeterArea",
            children: (0, Kk.jsx)("span", {
              className: "StoreSuperRankDaysLeft",
              children: Yk
            })
          }), (0, Kk.jsx)(Mb, {}), (0, Kk.jsxs)("div", {
            className: "StoreTileActions",
            children: [(0, Kk.jsx)(mb, {
              state: ek,
              item: "superRank",
              price: vk.l.price,
              busy: mk,
              highlight: Mk,
              onAct: nk,
              onNeedRecipient: Uk,
              onLogin: Hk
            }), "needsRecipient" === ek && (0, Kk.jsx)("span", {
              className: "StoreTileNote StoreTileNoteGift",
              children: wk("store:pickRecipientFirst")
            }), "recharge" === ek && ik && (0, Kk.jsx)("span", {
              className: "StoreTileNote StoreSuperRankEnding",
              children: 1 === Dk ? wk("store:endsInOneDay") : wk("store:endsInDays", {
                days: Dk
              })
            })]
          })]
        })]
      })
    }
    const nb = {
      common: "StorePackTileCommon",
      rare: "StorePackTileRare",
      epic: "StorePackTileEpic",
      legendary: "StorePackTileLegendary",
      mythic: "StorePackTileMythic"
    };

    function Ub(kk) {
      var ek;
      let {
        pack: ik,
        state: fk,
        busy: Pk,
        onOpen: mk,
        onAct: Mk,
        onNeedRecipient: xk,
        onLogin: nk
      } = kk;
      const {
        t: Uk
      } = (0, bk.D)(), Hk = lS.e[ik], wk = jS.j[ik], lk = (0, hS.n)(ik), pk = (0, Dk.useRef)(null);
      (0, ib.i)(ik, pk);
      const yk = Sb(fk),
        Yk = null !== (ek = Hk.displayName) && void 0 !== ek ? ek : ik,
        Lk = (0, eb.e)((() => {
          (0, kb.f)();
          const kk = (0, ib.e)(ik);
          void 0 !== kk && (0, GS.k)((0, ib.b)(kk))
        })),
        [Ck] = (0, Dk.useState)(vS.i);
      return (0, Kk.jsxs)("div", {
        className: Sk()("StoreTile StorePackTile", nb[Hk.tier], {
          StorePackTileOwned: "owned" === fk,
          StorePackTileRecipientOwns: "recipientOwns" === fk,
          StoreTileGift: yk
        }),
        ...bb(Yk),
        ref: pk,
        "data-store-item": ik,
        onClick: mk,
        onPointerMove: kk => {
          "mouse" !== kk.pointerType || 0 === kk.movementX && 0 === kk.movementY || Ck || Lk.start()
        },
        onPointerLeave: Lk.cancel,
        children: [wk && (0, Kk.jsx)(wk, {}), (0, Kk.jsx)("div", {
          className: "StorePackCharacters",
          children: lk.map((kk => (0, Kk.jsx)("div", {
            className: "StorePackCharacter",
            style: {
              backgroundImage: `url(${(0,hS.k)(kk)})`
            }
          }, kk)))
        }), (0, Kk.jsx)("div", {
          className: "StoreTileScrim"
        }), yk && (0, Kk.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, Kk.jsxs)("div", {
          className: "StoreTileContent",
          children: [(0, Kk.jsx)("div", {
            className: "StoreTileTitle",
            children: Yk
          }), (0, Kk.jsxs)("div", {
            className: "StoreTileMeta",
            children: [(0, Kk.jsx)(Db.e, {
              tier: Hk.tier
            }), " \xb7 ", Uk("store:itemCount", {
              count: (0, oS.g)(ik)
            }), "owned" === fk && (0, Kk.jsxs)("span", {
              className: "StoreTileOwned",
              children: [" \xb7 ", (0, Kk.jsx)(rk.d, {
                name: "check"
              }), " ", Uk("general:owned")]
            })]
          }), (0, Kk.jsx)(mb, {
            state: fk,
            item: ik,
            price: (0, vk.e)(ik),
            busy: Pk,
            onAct: Mk,
            onNeedRecipient: xk,
            onLogin: nk
          })]
        })]
      })
    }
    var Hb = ik(3037),
      wb = ik(1524),
      lb = ik(1417),
      pb = ik(3510);

    function yb() {
      return (0, Kk.jsx)("span", {
        className: "NewBadge",
        children: "NEW"
      })
    }
    var Yb = ik(1329),
      Lb = ik(1537),
      Cb = ik(33799);

    function Ab(kk) {
      let {
        character: ek,
        drawn: ik,
        onDrawn: fk
      } = kk;
      const bk = (0, Dk.useRef)(null),
        rk = (0, Cb.g)(ek);
      return (0, Kk.jsx)("div", {
        className: Sk()("StoreCharacterLive", {
          StoreCharacterLiveDrawn: ik
        }),
        children: (0, Kk.jsx)(Dk.Suspense, {
          fallback: null,
          children: (0, Kk.jsx)(kb.b, {
            ref: bk,
            framing: "store",
            turntableFromYaw: ik ? rk.yaw : null,
            onReady: () => {
              var kk, ik;
              null === (kk = bk.current) || void 0 === kk || kk.setOrbit(rk), null === (ik = bk.current) || void 0 === ik || ik.setAllCosmetics(Lb.c[ek].cosmetics)
            },
            onDrawn: fk
          })
        })
      })
    }
    const jb = {
        common: "StoreCharacterCardCommon",
        rare: "StoreCharacterCardRare",
        epic: "StoreCharacterCardEpic",
        legendary: "StoreCharacterCardLegendary",
        mythic: "StoreCharacterCardMythic"
      },
      sb = new Set(["wildSpirits"]);

    function db(kk) {
      var ek;
      let {
        tile: ik,
        design: fk,
        canGoLive: Pk,
        live: mk,
        busy: Mk,
        highlight: xk,
        onLiveStart: nk,
        onLiveEnd: Uk,
        onOpen: Hk,
        onAct: wk,
        onNeedRecipient: lk,
        onLogin: pk
      } = kk;
      const {
        t: yk
      } = (0, bk.D)(), {
        pack: Yk,
        state: Lk
      } = ik, Ck = lS.e[Yk], Ak = (0, lS.f)(Yk), jk = (0, hS.m)(Yk), sk = jS.j[jk], dk = sb.has(jk), {
        tier: Vk
      } = Ck, Fk = "legendary" === Vk || "mythic" === Vk, uk = (0, Dk.useRef)(null);
      (0, Yb.d)(uk, "epic" === Vk || Fk || dk);
      const [qk, zk] = (0, Dk.useState)(!1);
      return !mk && qk && zk(!1), (0, Kk.jsxs)("div", {
        ref: uk,
        className: Sk()("StoreCharacterCard", `StoreCharacterCard${fk}`, jb[Vk], {
          StoreCharacterCardOwned: "owned" === Lk || "recipientOwns" === Lk,
          StoreCharacterCardGift: Sb(Lk),
          StoreCharacterCardItem: void 0 === Ak
        }),
        onPointerMove: kk => {
          "mouse" !== kk.pointerType || 0 === kk.movementX && 0 === kk.movementY || !Pk || mk || void 0 === Ak || nk()
        },
        onPointerLeave: Uk,
        children: [(0, Kk.jsx)("div", {
          className: "StoreCharacterBackdrop",
          children: sk && (0, Kk.jsx)(sk, {
            simple: !0
          })
        }), Fk && (0, Kk.jsx)("div", {
          className: "StoreCharacterRays"
        }), (0, Kk.jsxs)(Ik.LinkPreserveSearch, {
          className: "StoreCharacterLink",
          to: (0, wb.h)({
            kind: "pack",
            pack: Yk
          }),
          "data-store-item": Yk,
          onClick: kk => {
            (0, lb.b)(kk) && (kk.preventDefault(), Hk())
          },
          children: [(0, Kk.jsxs)("div", {
            className: "StoreCharacterStage",
            children: [(0, Kk.jsx)("div", {
              className: "StoreCharacterHalo"
            }), (0, Kk.jsx)("div", {
              className: Sk()("StoreCharacterFigure", {
                StoreCharacterFigureCovered: qk
              }),
              style: {
                backgroundImage: `url(${(0,hS.r)(Yk)})`
              }
            }), mk && void 0 !== Ak && (0, Kk.jsx)(Ab, {
              character: Ak,
              drawn: qk,
              onDrawn: () => {
                zk(!0)
              }
            })]
          }), (0, Kk.jsx)("div", {
            className: "StoreCharacterName",
            children: null !== (ek = Ck.displayName) && void 0 !== ek ? ek : Yk
          }), (0, Kk.jsx)(Db.e, {
            tier: Vk,
            className: "StoreCharacterTier"
          })]
        }), (0, Kk.jsx)("div", {
          className: "StoreCharacterScrim"
        }), dk && (0, Kk.jsx)("span", {
          className: "StoreCharacterNew",
          children: (0, Kk.jsx)(yb, {})
        }), "owned" === Lk && (0, Kk.jsx)("span", {
          className: "StoreCharacterOwned",
          title: yk("general:owned"),
          "aria-label": yk("general:owned"),
          children: (0, Kk.jsx)(rk.d, {
            name: "check"
          })
        }), (0, Kk.jsx)("div", {
          className: "StoreCharacterPlate",
          children: (0, Kk.jsx)(mb, {
            state: Lk,
            item: Yk,
            price: (0, vk.e)(Yk),
            busy: Mk,
            highlight: xk,
            onAct: wk,
            onNeedRecipient: lk,
            onLogin: pk
          })
        })]
      })
    }

    function Vb(kk) {
      let {
        tiles: ek,
        busy: ik,
        highlightItem: fk,
        onOpen: Sk,
        onAct: bk,
        onNeedRecipient: rk,
        onLogin: Pk
      } = kk;
      const mk = (0, pb.k)("storeCharacterCardFoil"),
        Mk = (0, pb.k)("storeCharacterCardSpotlight"),
        xk = mk ? "Foil" : Mk ? "Spotlight" : "Showcase",
        [nk] = (0, Dk.useState)(vS.i),
        [Uk, Hk] = (0, Dk.useState)(null);
      return (0, Kk.jsx)("div", {
        className: "StoreCharacterGrid",
        children: ek.map((kk => (0, Kk.jsx)(db, {
          tile: kk,
          design: xk,
          canGoLive: !nk,
          live: Uk === kk.pack,
          busy: ik,
          highlight: fk === kk.pack,
          onLiveStart: () => {
            Hk(kk.pack)
          },
          onLiveEnd: () => {
            Hk((ek => ek === kk.pack ? null : ek))
          },
          onOpen: () => {
            Sk(kk.pack)
          },
          onAct: () => {
            bk(kk.pack)
          },
          onNeedRecipient: rk,
          onLogin: () => {
            Pk(kk.pack)
          }
        }, kk.pack)))
      })
    }
    var Fb = ik(33809);

    function ub(kk) {
      let {
        title: ek
      } = kk;
      return (0, Kk.jsx)("h2", {
        className: "StoreSectionDivider",
        children: (0, Kk.jsx)("span", {
          className: "StoreSectionDividerTitle",
          children: ek
        })
      })
    }

    function qb(kk) {
      let {
        mountAtOnce: ek,
        children: ik
      } = kk;
      const fk = (0, Dk.useRef)(null),
        [Sk, bk] = (0, Dk.useState)(ek),
        rk = (0, Fb.b)();
      return (0, Dk.useLayoutEffect)((() => {
        const kk = fk.current;
        kk && kk.getBoundingClientRect().top < kk.parentElement.getBoundingClientRect().bottom && bk(!0)
      }), []), Sk || rk ? (0, Kk.jsx)(Kk.Fragment, {
        children: ik
      }) : (0, Kk.jsx)("div", {
        ref: fk
      })
    }

    function Ib(kk) {
      let {
        layout: ek,
        mountAtOnce: ik,
        bundleGift: Dk,
        superRankTotalDays: fk,
        busy: Sk,
        highlightItem: rk,
        onOpen: Pk,
        onAct: mk,
        onNeedRecipient: Mk,
        onLogin: xk
      } = kk;
      const {
        t: nk
      } = (0, bk.D)(), Uk = ek.packs.filter((kk => void 0 === (0, lS.f)(kk.pack) && !(0, lS.m)(kk.pack))), Hk = ek.packs.filter((kk => void 0 !== (0, lS.f)(kk.pack))), wk = ek.packs.filter((kk => (0, lS.m)(kk.pack)));
      return (0, Kk.jsxs)(Kk.Fragment, {
        children: [(0, Kk.jsx)(Hb.c, {
          className: "StoreSuperGems",
          gift: Dk,
          highlightSku: rk
        }), (0, Kk.jsx)(ub, {
          title: nk("store:rank")
        }), (0, Kk.jsx)(xb, {
          state: ek.superRank.state,
          urgent: ek.superRank.urgent,
          daysLeft: ek.superRankDaysLeft,
          totalDays: fk,
          recipientHasSuperRank: ek.recipientHasSuperRank,
          busy: Sk,
          highlight: "superRank" === rk,
          onOpen: () => {
            Pk("superRank")
          },
          onAct: () => {
            mk("superRank")
          },
          onNeedRecipient: Mk,
          onLogin: () => {
            xk("superRank")
          }
        }), (0, Kk.jsxs)(qb, {
          mountAtOnce: ik,
          children: [(0, Kk.jsx)(ub, {
            title: nk("store:bundles")
          }), (0, Kk.jsx)("div", {
            className: "StorePackGrid",
            children: Uk.map((kk => (0, Kk.jsx)(Ub, {
              pack: kk.pack,
              state: kk.state,
              busy: Sk,
              onOpen: () => {
                Pk(kk.pack)
              },
              onAct: () => {
                mk(kk.pack)
              },
              onNeedRecipient: Mk,
              onLogin: () => {
                xk(kk.pack)
              }
            }, kk.pack)))
          }), (0, Kk.jsxs)(qb, {
            mountAtOnce: ik,
            children: [(0, Kk.jsx)(ub, {
              title: nk("store:characters")
            }), (0, Kk.jsx)(Vb, {
              tiles: Hk,
              busy: Sk,
              highlightItem: rk,
              onOpen: Pk,
              onAct: mk,
              onNeedRecipient: Mk,
              onLogin: xk
            }), wk.length > 0 && (0, Kk.jsxs)(Kk.Fragment, {
              children: [(0, Kk.jsx)(ub, {
                title: nk("store:premiumItems")
              }), (0, Kk.jsx)(Vb, {
                tiles: wk,
                busy: Sk,
                highlightItem: rk,
                onOpen: Pk,
                onAct: mk,
                onNeedRecipient: Mk,
                onLogin: xk
              })]
            })]
          })]
        })]
      })
    }

    function zb(kk) {
      let {
        state: ek,
        mode: ik,
        giftName: Dk,
        busy: fk,
        highlight: Sk,
        purchaseError: rk,
        onBack: Pk,
        onChooseRecipient: Mk,
        onAct: xk,
        onLogin: nk
      } = kk;
      const {
        t: Uk
      } = (0, bk.D)(), Hk = gk("gift" !== ik);
      return (0, Kk.jsx)(JS, {
        onBack: Pk,
        recipient: "gift" === ik && (0, Kk.jsxs)(Kk.Fragment, {
          children: [Dk && (0, Kk.jsxs)("span", {
            className: "StoreDetailRecipient",
            title: Uk("store:giftFor", {
              name: Dk
            }),
            children: [dS.c, " ", Uk("store:giftFor", {
              name: Dk
            })]
          }), !Dk && (0, Kk.jsxs)("div", {
            ...(0, mk.db)(),
            className: "StoreDetailRecipient StoreDetailRecipientChoose",
            onClick: Mk,
            children: [dS.c, " ", Uk("store:chooseRecipient")]
          })]
        }),
        cta: (0, Kk.jsx)(mb, {
          state: ek,
          item: "superRank",
          price: vk.l.price,
          busy: fk,
          highlight: Sk,
          onAct: xk,
          onNeedRecipient: Mk,
          onLogin: nk
        }),
        afterCta: (0, Kk.jsxs)(Kk.Fragment, {
          children: [Hk && (0, Kk.jsx)("span", {
            className: "StoreTileNote",
            children: Hk
          }), rk && (0, Kk.jsx)("span", {
            className: "StoreTileNote StoreTileNoteError",
            children: Uk(rk)
          })]
        })
      })
    }
    var Qb = ik(146);
    const vb = Qb.o("kind", [Qb.D({
      kind: Qb.x("refused"),
      heldTierId: Qb.W(),
      until: Qb.C()
    }), Qb.D({
      kind: Qb.x("refund"),
      tierId: Qb.W(),
      refundedMs: Qb.C(),
      forfeitedMs: Qb.C(),
      premiumCurrency: Qb.C()
    }), Qb.D({
      kind: Qb.x("none")
    })]);
    async function Eb(kk) {
      const ek = await (0, Fk.postJsonWithMetricsCookiesAndJsonResponse)(`${uk.clientSideServerUrls.indexUrl}/index/ranks/subscribe-preview`, {
        productId: kk
      }, {
        retries: 1
      });
      return vb.parse(ek)
    }
    var hb = ik(3015),
      ab = ik(3042);

    function Wb(kk, ek) {
      const ik = Math.max(1, Math.round(ek / ak.g));
      return [1 === ik ? `${kk}OneDay` : kk, {
        days: ik.toLocaleString()
      }]
    }

    function tb() {
      return "true" === new URLSearchParams(window.location.search).get("tempSubscription") && (0, tk.purchasesAllowed)() ? (0, Kk.jsx)(Xb, {}) : null
    }

    function Xb() {
      const {
        t: kk
      } = (0, bk.D)(), {
        userContext: ek
      } = (0, Uk.d)(), {
        purchaseUnderWay: ik,
        notice: fk,
        subscribe: Sk
      } = (0, hb.c)(), [rk, Pk] = (0, Dk.useState)(null), [Mk, xk] = (0, Dk.useState)(0), [nk, Hk] = (0, Dk.useState)(!1), wk = (0, Dk.useRef)(!0), lk = ek !== Fk.NULL_USER_CONTEXT, pk = null !== rk && rk.loadedFor === ek ? rk.offer : null, yk = null === fk || void 0 === fk ? void 0 : fk.pendingIntentId, Yk = (0, Dk.useRef)(yk);

      function Lk() {
        xk((kk => kk + 1))
      }
      async function Ck(kk) {
        Hk(!1), await Sk(kk), wk.current && Lk()
      }
      if ((0, Dk.useEffect)((() => (wk.current = !0, () => {
          wk.current = !1
        })), []), (0, Dk.useEffect)((() => {
          void 0 !== Yk.current && void 0 === yk && Lk(), Yk.current = yk
        }), [yk]), (0, Dk.useEffect)((() => {
          if (!lk) return;
          let kk = !1;
          return Hk(!1), async function() {
            const {
              offering: kk
            } = await (0, Pe.d)().getOfferings("superRankPage"), ek = null === kk || void 0 === kk ? void 0 : kk.packages.find((kk => null !== kk.price));
            return void 0 === ek ? {
              kind: "unavailable"
            } : {
              kind: "loaded",
              pkg: ek,
              preview: await Eb(ek.productId)
            }
          }().catch((kk => (console.error("Billing: loading the Super Rank subscription or its preview failed:", kk), {
            kind: "loadFailed"
          }))).then((ik => {
            kk || Pk((kk => "loadFailed" === ik.kind && (null === kk || void 0 === kk ? void 0 : kk.loadedFor) === ek ? kk : {
              loadedFor: ek,
              offer: ik
            }))
          })), () => {
            kk = !0
          }
        }), [ek, lk, Mk]), null === pk) return null;
      if ("loaded" !== pk.kind) return (0, Kk.jsx)(ab.i, {
        notice: {
          kind: "error",
          key: "unavailable" === pk.kind ? "payments:subscriptionUnavailable" : "payments:subscriptionLoadFailed"
        },
        className: "StoreTempSubscribe SmallTextBold"
      });
      const {
        pkg: Ak,
        preview: jk
      } = pk;
      if ("refused" === jk.kind) return (0, Kk.jsx)(ab.i, {
        notice: {
          kind: "error",
          key: "payments:subscribeRefusedGemRank",
          values: {
            date: new Date(jk.until).toLocaleDateString()
          }
        },
        className: "StoreTempSubscribe SmallTextBold"
      });
      const sk = (0, Hb.f)(Ak.price);
      if (nk && "refund" === jk.kind) {
        const {
          refundedMs: ek,
          forfeitedMs: Dk,
          premiumCurrency: fk
        } = jk, Sk = Dk + (0 === fk ? ek : 0), [bk, rk] = Wb("payments:subscribeRefundsGemRank", ek), [Pk, Mk] = Wb("payments:subscribeForfeitsGemRank", Sk);
        return (0, Kk.jsxs)("div", {
          className: "StoreTempSubscribe SmallTextBold",
          children: [(0, Kk.jsx)("div", {
            children: kk("payments:subscribeEndsGemRank")
          }), fk > 0 && (0, Kk.jsx)("div", {
            children: kk(bk, {
              ...rk,
              amount: fk.toLocaleString()
            })
          }), Sk > 0 && (0, Kk.jsx)("div", {
            children: kk(Pk, Mk)
          }), (0, Kk.jsxs)("div", {
            className: "StoreTempSubscribeButtons",
            children: [(0, Kk.jsx)(mk.j, {
              onClick: () => {
                Hk(!1)
              },
              children: kk("general:cancel")
            }), (0, Kk.jsx)(mk.r, {
              onClick: () => {
                Ck(Ak)
              },
              loading: ik,
              children: kk("payments:subscribeContinue", {
                price: sk
              })
            })]
          })]
        })
      }
      return (0, Kk.jsxs)("div", {
        className: "StoreTempSubscribe",
        children: [(0, Kk.jsx)(ab.i, {
          notice: fk,
          className: "SmallTextBold"
        }), (0, Kk.jsx)(ab.c, {
          className: "SmallTextBold"
        }), (0, Kk.jsx)(mk.r, {
          onClick: () => {
            "refund" === jk.kind ? Hk(!0) : Ck(Ak)
          },
          disabled: void 0 !== yk,
          loading: ik,
          children: kk("payments:subscribeToSuperRank", {
            price: sk
          })
        })]
      })
    }
    const Bb = {
      kind: "board"
    };
    let cb = !1;

    function Tb(kk) {
      return "found" === kk.status || "error" === kk.status && "store:giftRecipientLookupFailed" === kk.error ? kk.name : null
    }(0, Wk.t)(pS.prefetchBillingOfferings);
    const ob = (0, Dk.memo)((function(kk) {
      var ek;
      let {
        show: fk
      } = kk;
      const {
        t: rk
      } = (0, bk.D)(), {
        userContext: Pk
      } = (0, Uk.d)(), mk = Pk !== Fk.NULL_USER_CONTEXT, Mk = qS(Pk), [xk, nk] = (0, wk.c)(), {
        page: Hk,
        urlMode: lk,
        goTo: pk
      } = (0, IS.c)(), yk = function(kk) {
        return "superRank" === kk.kind ? "superRank" : "pack" === kk.kind ? kk.pack : null
      }(Hk), {
        openEverythingMenuName: Yk,
        gameState: Lk
      } = (0, jk.n)(["openEverythingMenuName", "gameState"]), Ck = null !== Yk;
      ! function(kk, ek) {
        const [fk] = (0, Dk.useState)(vS.i), [Sk, bk] = (0, Dk.useState)(!1);
        fk && ek && !Sk && bk(!0);
        const rk = (0, MD.n)(),
          Pk = fk && Sk && kk && !rk;
        (0, Dk.useEffect)((() => {
          if (!Pk) return;
          let kk = null,
            ek = null,
            Dk = null;
          const fk = () => !document.hasFocus() || document.activeElement instanceof HTMLIFrameElement || (0, Pe.d)().purchaseUnderWay,
            Sk = () => {
              var ik;
              null === (ik = Dk) || void 0 === ik || ik(), Dk = null, null !== kk && (clearTimeout(kk), kk = null), null !== ek && (clearTimeout(ek), ek = null)
            },
            bk = () => {
              (0, zS.q)(!1), (0, zS.o)(!1), Sk(), kk = setTimeout((() => {
                kk = null, Dk = (0, QS.c)((() => {
                  Dk = null, fk() ? bk() : ((0, zS.q)(!0), ek = setTimeout((() => {
                    ek = null, Dk = (0, QS.c)((() => {
                      Dk = null, fk() ? bk() : (0, zS.o)(!0)
                    }))
                  }), 3e3), Promise.resolve().then((() => ik(4587))).then((kk => {
                    kk.startBackgroundGameSetup()
                  }), (kk => {
                    console.warn("Background game setup: its chunk failed to load", kk)
                  })))
                }))
              }), 2e3)
            };
          for (const ik of ES) window.addEventListener(ik, bk, {
            capture: !0,
            passive: !0
          });
          return bk(), () => {
            for (const kk of ES) window.removeEventListener(kk, bk, {
              capture: !0
            });
            Sk(), (0, zS.q)(!1), (0, zS.o)(!1)
          }
        }), [Pk])
      }(fk && Ck, "pack" === Hk.kind);
      const Ak = "landingPage" === Lk;
      (0, Dk.useEffect)((() => {
        Ck && (0, pS.prefetchBillingOfferings)()
      }), [Ck]), (0, Dk.useEffect)((() => {
        Ck && !fk && Ak && (0, hS.v)()
      }), [Ck, fk, Ak]);
      const [sk, dk] = (0, Dk.useState)(0), [Vk, uk] = (0, Dk.useState)(null), [qk, Ik] = (0, Dk.useState)(null), [zk, Qk] = (0, Dk.useState)(null), [Ek, hk] = (0, Dk.useState)(null), ak = (0, Dk.useRef)(null), Xk = (0, Dk.useRef)(null), Bk = (0, Dk.useRef)(null), ck = (0, Dk.useRef)(!1), Tk = (0, Wk.y)(), Zk = (0, Dk.useRef)(0), Ok = (0, Dk.useRef)(!1);

      function gk() {
        dk((kk => kk + 1))
      }(0, Dk.useEffect)((() => {
        if (fk) {
          if (cb = !0, (0, Wk.k)(), Tk && Tk.seq !== Zk.current) {
            var kk;
            Zk.current = Tk.seq, "loginResume" !== Tk.source && (0, Wk.v)();
            const ek = (0, Wk.b)(Tk);
            lk || pk(ek), hk(null !== (kk = Tk.highlight) && void 0 !== kk ? kk : null), Ik(null), "gift" === Tk.mode && Tk.giftRecipientName ? Mk.choose(Tk.giftRecipientName, "prefilled") : "current" !== Tk.mode && Mk.clear(), "gift" !== Tk.mode || Tk.giftRecipientName || gk(), (0, Jk.reportAnalyticsClick)({
              id: "store.open",
              value: Tk.source
            })
          } else Ok.current || (0, Jk.reportAnalyticsClick)({
            id: "store.open",
            value: "menuTab"
          });
          Ok.current = !0
        } else Ok.current = !1
      }), [fk, Tk]), (0, Dk.useEffect)((() => {
        if (!Ek) return;
        const kk = setTimeout((() => {
          hk(null)
        }), 4e3);
        return () => {
          clearTimeout(kk)
        }
      }), [Ek]), (0, Dk.useLayoutEffect)((() => {
        const kk = ak.current;
        if (!fk || !kk) return Xk.current = null, void(Bk.current = null);
        var ek;
        if (yk) Xk.current = yk, null === (ek = kk.querySelector(".StoreDetailBackButton, .CosmeticShopDetailBackButton")) || void 0 === ek || ek.focus();
        else if (Xk.current) {
          const ek = Bk.current;
          null !== ek && (kk.scrollTop = ek);
          const ik = kk.querySelector(`[data-store-item="${Xk.current}"]`);
          if (ik) {
            const Dk = ik.getBoundingClientRect(),
              fk = kk.getBoundingClientRect();
            ik.focus({
              preventScroll: null !== ek && Dk.bottom > fk.top && Dk.top < fk.bottom
            })
          }
          Xk.current = null
        }
      }), [yk, fk]), (0, Dk.useEffect)((() => {
        Ik(null)
      }), [Mk.query]), (0, Dk.useEffect)((() => {
        if (!zk) return;
        const kk = setTimeout((() => {
          Qk(null)
        }), 8e3);
        return () => {
          clearTimeout(kk)
        }
      }), [zk]);
      const Gk = Pk.superRankInfo,
        Nk = Pk.isLoggedIn() || (0, tk.guestsMayBuy)(),
        Rk = Pk.getOwnedCosmeticPacks(),
        ke = (0, dS.n)(Mk.query),
        ee = (0, dS.f)({
          mode: ke,
          loggedIn: mk ? Nk : null,
          superRankInfo: Gk,
          now: Date.now(),
          ownedPacks: Rk,
          packs: lS.t,
          recipient: Mk.recipient
        });
      (0, Dk.useEffect)((() => {
        if (!Nk || !fk) return;
        const kk = (0, Wk.v)(),
          ek = kk && (0, dS.l)(kk, lS.t);
        kk && ek && ((0, Jk.reportAnalyticsClick)({
          id: "store.login_resume",
          value: kk.item
        }), (0, Wk.m)(ek))
      }), [Nk, fk]);
      const ie = (0, dS.o)({
        superRankDaysLeft: ee.superRankDaysLeft,
        openedThisSession: cb || fk,
        seenNewItems: (0, Wk.i)()
      });
      if ((0, Dk.useEffect)((() => {
          (0, Wk.u)(ie)
        }), [ie]), !fk || !(0, tk.purchasesAllowed)()) return null;
      const De = nk > xk && xk <= 700,
        fe = !De && nk <= 420,
        Se = "gift" === ke ? Tb(Mk.recipient) : null,
        be = null !== Vk;

      function re(kk) {
        (0, YS.e)(kk, "gift" === ke ? Mk.query.trim() : null)
      }

      function me(kk, ek) {
        (0, Jk.reportAnalyticsClick)({
          id: "store.purchase_done",
          value: `${ek?"gift":"self"}:${kk}`
        }), ek && (Mk.recordGift(ek.name, kk), Me(ek))
      }

      function Me(kk) {
        ! function(kk) {
          try {
            ge.f.setItem(VS, (0, dS.u)(uS(), kk))
          } catch {}
        }({
          name: kk.name,
          cosmetics: kk.cosmetics
        }), pk(Bb), Qk((ek => {
          var ik;
          return {
            name: kk.name,
            seq: (null !== (ik = null === ek || void 0 === ek ? void 0 : ek.seq) && void 0 !== ik ? ik : 0) + 1
          }
        }))
      }
      async function Ke(kk) {
        var ek, ik;
        if (ck.current) return;
        if (!Nk) return void re(kk);
        Ik(null), hk(null);
        const Dk = "gift" === ke ? {
          name: Tb(Mk.recipient),
          cosmetics: Mk.recipientCosmetics
        } : null;
        if (Dk && !Dk.name) return void gk();
        const fk = "superRank" === kk ? vk.l.id : (0, vk.b)(kk);
        ck.current = !0;
        const Sk = await (0, sS.d)(fk, null !== (ek = null === Dk || void 0 === Dk ? void 0 : Dk.name) && void 0 !== ek ? ek : null);
        if (ck.current = !1, !Sk) return;
        uk(kk);
        const bk = await LS.d.purchase(fk, null !== (ik = null === Dk || void 0 === Dk ? void 0 : Dk.name) && void 0 !== ik ? ik : null);
        uk(null), bk ? Ik(bk) : (me(kk, Dk), Dk || (await (0, CS.flushClientAnalyticsEvents)(), (0, yS.refreshWithoutConfirmation)("superRank" === kk ? "/super-rank-welcome" : `/pack-welcome/${kk}`)))
      }
      const xe = Sk()("Store", {
        StoreGift: "gift" === ke,
        StorePortrait: De,
        StoreCompact: fe
      });
      if ("pack" === Hk.kind) {
        const kk = Hk.pack,
          ek = ee.packs.find((ek => ek.pack === kk));
        return (0, Kk.jsx)("div", {
          ref: ak,
          className: "CosmeticShopContainer",
          children: (0, Kk.jsx)(jS.d, {
            pack: kk,
            onBack: () => {
              pk(Bb)
            },
            onPurchased: ek => {
              me(kk, ek ? {
                name: ek,
                cosmetics: null
              } : null)
            },
            giftCta: "gift" === ke && Se && ek && (0, Kk.jsxs)(Kk.Fragment, {
              children: [(0, Kk.jsx)(mb, {
                state: ek.state,
                item: kk,
                price: (ne = kk, "superRank" === ne ? vk.l.price : (0, vk.e)(ne)),
                busy: be,
                onAct: () => {
                  Ke(kk)
                },
                onNeedRecipient: () => {
                  pk(Bb), gk()
                },
                onLogin: () => {
                  re(kk)
                },
                highlight: Ek === kk
              }), qk && (0, Kk.jsx)("span", {
                className: "CosmeticShopGiftError SmallTextBold",
                children: rk(qk)
              })]
            }),
            ownedPacks: Rk,
            startAsGift: "gift" === ke,
            initialGiftRecipient: "gift" === ke ? null !== Se && void 0 !== Se ? Se : Mk.query.trim() : "",
            highlightCta: Ek === kk
          }, kk)
        })
      }
      var ne;
      return "superRank" === Hk.kind ? (0, Kk.jsx)("div", {
        ref: ak,
        className: Sk()(xe, "StoreDetailView"),
        children: (0, Kk.jsx)(zb, {
          state: ee.superRank.state,
          mode: ke,
          giftName: Se,
          busy: be,
          highlight: "superRank" === Ek,
          purchaseError: qk,
          onBack: () => {
            pk(Bb)
          },
          onChooseRecipient: () => {
            pk(Bb), gk()
          },
          onAct: () => {
            Ke("superRank")
          },
          onLogin: () => {
            re("superRank")
          }
        })
      }) : (0, Kk.jsxs)("div", {
        ref: ak,
        className: xe,
        onScroll: kk => {
          Bk.current = kk.currentTarget.scrollTop
        },
        children: [(0, Kk.jsx)("div", {
          className: "StoreTopRow",
          children: (0, Kk.jsx)(TS, {
            selfName: mk ? Pk.getPlayerName() : "",
            giftRecipient: Mk,
            suggestionsVersion: null !== (ek = null === zk || void 0 === zk ? void 0 : zk.seq) && void 0 !== ek ? ek : 0,
            pulseSignal: sk,
            disabled: be || !mk
          })
        }), zk && (0, Kk.jsxs)("div", {
          className: "StoreNotice StoreNoticeGiftSent",
          onClick: () => {
            Qk(null)
          },
          children: [(0, Kk.jsx)(AS.b, {
            showSignal: zk.seq
          }), dS.c, " ", rk("store:giftSent", {
            name: zk.name
          })]
        }, zk.seq), !zk && qk && (0, Kk.jsx)("div", {
          className: "StoreNotice StoreNoticeError",
          children: rk(qk)
        }), (0, Kk.jsx)(Ib, {
          layout: ee,
          mountAtOnce: null !== Xk.current,
          bundleGift: "gift" === ke ? {
            recipientName: Se,
            lookingUp: "pending" === Mk.recipient.status,
            busy: be,
            onNeedRecipient: gk,
            onSent: kk => {
              (0, Jk.reportAnalyticsClick)({
                id: "store.purchase_done",
                value: "gift:superGems"
              }), Me({
                name: kk,
                cosmetics: Mk.recipientCosmetics
              })
            }
          } : null,
          superRankTotalDays: (0, dS.p)(Gk),
          busy: be,
          highlightItem: Ek,
          onOpen: function(kk) {
            (0, Jk.reportAnalyticsClick)({
              id: "store.item_open",
              value: kk
            }), pk((0, Wk.f)(kk))
          },
          onAct: Ke,
          onNeedRecipient: gk,
          onLogin: re
        }), "gift" !== ke && (0, Kk.jsx)(tb, {})]
      })
    }));
    var Zb = ik(2625),
      Ob = ik(8676),
      gb = ik(8505),
      Gb = ik(2677),
      Nb = ik(2529),
      Rb = ik(2580),
      Jb = ik(2589),
      kr = ik(2591),
      er = ik(2671),
      ir = ik(2660),
      Dr = ik(2334),
      fr = ik(2374),
      Sr = ik(2363),
      br = ik(1998),
      rr = ik(2599),
      Pr = ik(2381);

    function mr(kk) {
      let {
        show: ek
      } = kk;
      return ek ? (0, Kk.jsx)(Mr, {}) : null
    }

    function Mr() {
      const {
        t: kk
      } = (0, bk.D)(), {
        followsLeader: ek
      } = (0, Nb.d)(), {
        loading: ik,
        friends: fk,
        requests: Pk,
        invites: Mk
      } = (0, Bk.i)(), {
        userContext: xk
      } = (0, Uk.d)(), [nk, Hk] = (0, Dk.useState)(Pr.f);
      (0, Dk.useEffect)((() => {
        (0, Pr.b)()
      }), []);
      const wk = Pk.map((kk => kk.name)),
        {
          state: lk,
          recentRequesters: pk
        } = (0, ir.t)(),
        yk = new Map([...("loaded" === lk.status ? lk.recentPlayers : []).map((kk => [kk.preview.name, kk])), ...pk.map((kk => [kk.name, kk]))]),
        Yk = (0, Dk.useRef)(null),
        [Ak, jk] = (0, Dk.useState)(""),
        [sk, dk] = (0, Dk.useState)("Enter"),
        [Vk, Fk] = (0, Dk.useState)(null);

      function uk() {
        Ak && (dk("Loading"), (0, Sr.g)(Ak, "social_menu").then((kk => {
          if (Yk.current) switch (kk.kind) {
            case "sent":
              dk("Success");
              break;
            case "becameFriends":
              dk("BecameFriends");
              break;
            case "failed":
              Fk(kk.message), dk("Error")
          }
        })))
      }
      return (0, Dk.useEffect)((() => {
        if ("Enter" === sk || "Loading" === sk) return;
        const kk = setTimeout((() => {
          Yk.current.value = "", jk(""), dk("Enter")
        }), "Success" === sk ? 1e3 : 4e3);
        return () => {
          clearTimeout(kk)
        }
      }), [sk]), (0, Kk.jsx)("div", {
        className: "SocialMenu",
        children: (0, Kk.jsxs)("div", {
          className: "SocialMenuInner",
          children: [(0, Kk.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, Kk.jsxs)("div", {
              className: "SocialMenuBox SocialMenuAddFriend",
              children: [(0, Kk.jsx)(kr.d, {
                label: kk("socialBar:addFriend")
              }), (0, Kk.jsxs)("div", {
                className: "AddFriendBody",
                children: [(0, Kk.jsxs)("div", {
                  className: Sk()("AddFriendBodyOverlay", {
                    [`AddFriendBodyOverlay${sk}`]: !0
                  }),
                  children: ["Loading" === sk && (0, Kk.jsx)(Ck.d, {}), "Success" === sk && (0, Kk.jsx)(rk.d, {
                    name: "check"
                  }), "BecameFriends" === sk && (0, Kk.jsx)(Kk.Fragment, {
                    children: kk("socialBar:nowFriends", {
                      playerName: Ak
                    })
                  }), "Error" === sk && Vk && (0, Kk.jsx)(Kk.Fragment, {
                    children: kk(Vk.translationKey, Vk.params)
                  })]
                }), (0, Kk.jsxs)("div", {
                  className: "PlayerSearch",
                  children: [(0, Kk.jsx)(Lk.b, {
                    className: "PlayerSearchInput",
                    placeholderText: kk("socialBar:enterPlayerName"),
                    domRef: Yk,
                    onValueChange: kk => {
                      jk((0, zk.p)(kk)), Yk.current.value = (0, zk.p)(kk)
                    },
                    onEnter: () => {
                      Ak && (0, Jk.reportAnalyticsClick)({
                        id: "social.add_friend",
                        value: "social_menu"
                      }), uk()
                    }
                  }), (0, Kk.jsxs)(mk.f, {
                    className: "PlayerSearchInputButton SmallTextLight",
                    onClick: () => {
                      uk()
                    },
                    analyticsClick: {
                      id: "social.add_friend",
                      value: "social_menu"
                    },
                    children: [(0, Kk.jsx)(rk.d, {
                      name: "user-plus"
                    }), " ", kk("socialBar:sendRequest")]
                  })]
                })]
              }), (0, Kk.jsx)(rr.b, {
                surface: "social_menu",
                prefetchOnMount: !0
              })]
            }), Mk.length > 0 && (0, Kk.jsxs)("div", {
              className: "SocialMenuBox SocialMenuInvites",
              children: [(0, Kk.jsx)(kr.d, {
                label: kk("socialBar:invites"),
                meta: Mk.length
              }), Mk.map((ek => (0, Kk.jsxs)("div", {
                className: "SocialMenuInvite",
                children: [(0, Kk.jsx)("div", {
                  className: "SocialMenuInviteIcon",
                  children: (0, Kk.jsx)(Dr.b, {
                    invite: ek
                  })
                }), (0, Kk.jsx)("div", {
                  className: "SocialMenuInviteText",
                  children: (0, Kk.jsx)(Dr.f, {
                    invite: ek
                  })
                }), (0, Kk.jsx)(mk.r, {
                  className: "SocialMenuInviteJoin SmallTextLight",
                  onClick: () => {
                    (0, fr.e)(ek)
                  },
                  analyticsClick: {
                    id: "social.accept_invite",
                    value: `social_menu:${ek.destination.kind}`
                  },
                  children: kk("general:join")
                }), (0, Kk.jsx)(Gk.i, {
                  tooltipInner: (0, Kk.jsx)(Kk.Fragment, {
                    children: kk("general:decline")
                  }),
                  delayShow: 0,
                  children: (0, Kk.jsx)(mk.j, {
                    className: "SocialMenuInviteDecline",
                    padDefaultFocus: "invite" === (null === nk || void 0 === nk ? void 0 : nk.kind) && nk.inviteId === ek.id,
                    onClick: () => {
                      Bk.d.declineInvite(ek.id)
                    },
                    analyticsClick: {
                      id: "social.decline_invite",
                      value: `social_menu:${ek.destination.kind}`
                    },
                    children: (0, Kk.jsx)(rk.d, {
                      name: "xmark"
                    })
                  })
                })]
              }, ek.id)))]
            }), (0, Kk.jsxs)("div", {
              className: Sk()("SocialMenuBox SocialMenuRequests", {
                SocialMenuBoxEmpty: !ik && 0 === Pk.length
              }),
              children: [(0, Kk.jsx)(kr.d, {
                label: (0, Kk.jsxs)(Kk.Fragment, {
                  children: [(0, Kk.jsx)(rk.d, {
                    name: br.g
                  }), " ", kk("socialBar:requests")]
                }),
                meta: (0, Kk.jsxs)(Kk.Fragment, {
                  children: [Pk.length, Pk.length === Nk.q && (0, Kk.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: kk("socialBar:limitReached")
                  })]
                })
              }), ik && (0, Kk.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, Kk.jsx)(Ck.d, {})
              }), !ik && 0 === Pk.length && (0, Kk.jsx)("div", {
                className: "SocialMenuEmpty",
                children: kk("socialBar:noFriendRequests")
              }), !ik && Pk.length > 0 && (0, Kk.jsx)("div", {
                className: "PlayerRows",
                children: (0, Kk.jsx)(Yf.e, {
                  lazyLoadedClassName: "SocialMenuRequestsLazy",
                  observerUpdateDeps: [Pk],
                  children: Pk.map(((ek, ik) => {
                    const Dk = yk.get(ek.name);
                    return (0, Kk.jsxs)(Jb.i, {
                      playerSocialPreview: ek,
                      zIndex: Pk.length - ik,
                      padDefaultFocus: (0, Pr.e)(nk, ek.name, ik),
                      status: Dk && (0, Kk.jsx)(er.c, {
                        gameNameWithVariation: Dk.gameNameWithVariation,
                        isPrivateLobby: Dk.isPrivateLobby
                      }),
                      children: [(0, Kk.jsx)(Gk.i, {
                        tooltipInner: (0, Kk.jsx)(Kk.Fragment, {
                          children: kk("general:accept")
                        }),
                        delayShow: 0,
                        children: (0, Kk.jsx)(mk.f, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            Hk((0, Pr.d)(wk, ik)), (0, Sr.c)(ek.name, !0, {
                              source: "social_menu",
                              announceFriend: !1
                            })
                          },
                          analyticsClick: {
                            id: "social.accept_friend_request",
                            value: "social_menu"
                          },
                          children: (0, Kk.jsx)(rk.d, {
                            name: "check"
                          })
                        })
                      }), (0, Kk.jsx)(Gk.i, {
                        tooltipInner: (0, Kk.jsx)(Kk.Fragment, {
                          children: kk("general:decline")
                        }),
                        delayShow: 0,
                        children: (0, Kk.jsx)(mk.j, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            Hk((0, Pr.d)(wk, ik)), (0, Sr.c)(ek.name, !1, {
                              source: "social_menu"
                            })
                          },
                          analyticsClick: {
                            id: "social.decline_friend_request",
                            value: "social_menu"
                          },
                          children: (0, Kk.jsx)(rk.d, {
                            name: "xmark"
                          })
                        })
                      })]
                    }, `${ek.name}_${ek.isError}`)
                  }))
                })
              })]
            }), (0, Kk.jsx)(er.f, {})]
          }), (0, Kk.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, Kk.jsxs)("div", {
              className: "SocialMenuBox SocialMenuParty",
              children: [(0, Kk.jsx)(kr.d, {
                label: kk("socialBar:party")
              }), (0, Kk.jsx)(Rb.d, {})]
            }), (0, Kk.jsxs)("div", {
              className: "SocialMenuBox SocialMenuFriends",
              children: [(0, Kk.jsx)(kr.d, {
                label: (0, Kk.jsxs)(Kk.Fragment, {
                  children: [(0, Kk.jsx)(rk.d, {
                    name: br.c
                  }), " ", kk("socialBar:friends")]
                }),
                meta: (0, Kk.jsxs)(Kk.Fragment, {
                  children: [fk.length, fk.length >= (0, Nk.b)(xk.getPlayerRanks()) && (0, Kk.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: kk("socialBar:limitReached")
                  })]
                })
              }), ik && (0, Kk.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, Kk.jsx)(Ck.d, {})
              }), !ik && 0 === fk.length && (0, Kk.jsx)("div", {
                className: "SocialMenuEmpty",
                children: kk("socialBar:noFriends")
              }), !ik && fk.length > 0 && (0, Kk.jsx)("div", {
                className: "PlayerRows",
                children: (0, Kk.jsx)(Yf.e, {
                  lazyLoadedClassName: "SocialMenuFriendsLazy",
                  observerUpdateDeps: [fk],
                  children: fk.map(((kk, ik) => (0, Kk.jsx)(Jb.i, {
                    playerSocialPreview: kk,
                    isFriend: !0,
                    hideFriendBadge: !0,
                    onFriendRemoved: kk => {
                      Bk.d.removeFriendFromState(kk)
                    },
                    zIndex: fk.length - ik,
                    children: (0, Kk.jsx)(Jb.e, {
                      friend: kk,
                      followsLeader: ek,
                      analyticsSurface: "social_menu"
                    })
                  }, `${kk.name}_${kk.isError}`)))
                })
              })]
            })]
          })]
        })
      })
    }
    var Kr = ik(2516);
    const xr = kk => {
        let {
          action: ek,
          padAction: ik
        } = kk;
        const {
          isTouchScreen: Dk
        } = (0, jk.n)(["isTouchScreen"]), fk = (0, MD.n)();
        return Dk && !fk ? null : (0, Kk.jsx)(DD.d, {
          className: "EverythingMenuTabKey",
          noaAction: ek,
          padHidesKey: !0,
          padMenuShortcut: ik
        })
      },
      nr = (0, Dk.memo)((function() {
        const {
          t: kk
        } = (0, bk.D)(), {
          gameState: ek,
          openEverythingMenuName: ik,
          initSdkSelectorFinished: fk,
          crosshairGameView: rk
        } = (0, jk.n)(["gameState", "openEverythingMenuName", "initSdkSelectorFinished", "crosshairGameView"]), {
          userContext: Pk
        } = (0, Uk.d)(), Mk = (0, tk.purchasesAllowed)(), xk = (0, Wk.z)(), nk = (kk, ek) => (0, Kk.jsx)(xr, {
          action: kk,
          padAction: ek
        }), [Hk, wk] = (0, Dk.useState)(null), pk = (0, Dk.useRef)(null), yk = {
          ..."inGame" === ek ? {} : (0, mk.db)({
            focusOnClick: !1
          }),
          ...YD.f
        }, Yk = kk => {
          const ek = (0, LD.f)((ek => {
            (0, mk.ab)(ek.currentTarget), jk.b.set({
              openEverythingMenuName: kk
            })
          }), "pointerup");
          return {
            ...yk,
            onPointerDown: kk => {
              yk.onPointerDown(kk), ek.onPointerDown(kk)
            },
            onPointerUp: kk => {
              yk.onPointerUp(kk), ek.onPointerUp(kk)
            },
            onClick: ek.onClick
          }
        }, Lk = null !== ik, Ck = ik !== Me.r.COSMETIC_SHOP && !rk;
        async function Ak() {
          await async function() {
            if (!Hk) return;
            await Hk(), wk(null)
          }(), jk.b.set({
            openEverythingMenuName: null
          })
        }
        const sk = (0, Dk.useRef)(null),
          dk = (0, Dk.useCallback)((() => null !== sk.current && (0, gb.c)(sk.current)), []);

        function Fk() {
          dk() || Ak()
        }(0, Dk.useEffect)((() => (0, KS.x)(dk)), [dk]);
        const uk = (0, Dk.useMemo)((() => "inGame" === ek ? {
          text: kk("settingsMenu:exitGame"),
          onClick: () => {
            (0, Ob.e)()
          }
        } : (0, Vk.e)() ? {
          text: kk("settingsMenu:exitGame"),
          onClick: () => {
            re.m.discordActivity().then((kk => {
              kk.exit("User exited the game")
            }))
          }
        } : null), [ek, kk]);
        const qk = (0, Kk.jsx)("div", {
          className: "EverythingMenuCloseButtonClickZone",
          onClick: Fk,
          children: (0, Kk.jsx)(mk.n, {
            className: "EverythingMenuCloseButton"
          })
        });
        return (0, Kk.jsx)(CD.d, {
          showing: Lk,
          globallyUniqueKey: "EverythingMenu",
          alwaysMountChildren: !0,
          keepsMovement: ik === Me.r.SHOP,
          doGameplayStartStopOnShow: "inGame" === ek,
          children: (0, Kk.jsx)(jD.b, {
            className: "EverythingMenuContainer",
            show: Lk && !rk,
            children: (0, Kk.jsx)(AD.e, {
              close: Fk,
              togglePointerLock: !1,
              children: (0, Kk.jsxs)("div", {
                className: "EverythingMenu",
                children: [!(0, KS.n)(ik) && (0, Kk.jsxs)("div", {
                  className: "EverythingMenuTabList",
                  children: [(0, Kk.jsxs)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerStart",
                    children: [uk && (0, Kk.jsx)(mk.e, {
                      className: "EverythingMenuBackButton",
                      padDestructive: !0,
                      onClick: () => {
                        uk.onClick()
                      },
                      children: uk.text
                    }), Lk && Mk && (0, Kk.jsx)("div", {
                      ...yk,
                      className: "EverythingMenuWallet",
                      title: kk("homePage:getPremiumCurrency"),
                      onClick: () => {
                        (0, Wk.m)({
                          mode: "current",
                          source: "menuWallet"
                        })
                      },
                      children: (0, Kk.jsx)(Zb.g, {})
                    })]
                  }), (0, Kk.jsxs)("div", {
                    className: "EverythingMenuTabListInner",
                    "data-pad-tabs": "1",
                    children: [(0, Kk.jsxs)("div", {
                      ...Yk(Me.r.SETTINGS),
                      "data-pad-tab": !0,
                      "data-pad-selected": ik === Me.r.SETTINGS ? "true" : void 0,
                      className: Sk()("EverythingMenuTab", {
                        EverythingMenuTabActive: ik === Me.r.SETTINGS
                      }),
                      children: [kk("general:settings"), nk("OpenSettings", "pause")]
                    }), (0, Kk.jsxs)("div", {
                      ...Yk(Me.r.CUSTOMISATION),
                      "data-pad-tab": !0,
                      "data-pad-selected": ik === Me.r.CUSTOMISATION ? "true" : void 0,
                      className: Sk()("EverythingMenuTab", {
                        EverythingMenuTabActive: ik === Me.r.CUSTOMISATION
                      }),
                      children: [kk("general:player"), nk("OpenCharacterCustomization")]
                    }), lk.featureFlags.useSocialFeatures && (0, Kk.jsxs)("div", {
                      ...Yk(Me.r.SOCIAL),
                      "data-pad-tab": !0,
                      "data-pad-selected": ik === Me.r.SOCIAL ? "true" : void 0,
                      className: Sk()("EverythingMenuTab", {
                        EverythingMenuTabActive: ik === Me.r.SOCIAL
                      }),
                      ...(0, Jk.d)({
                        id: "social.open_menu",
                        value: "menu_tab"
                      }, ik === Me.r.SOCIAL),
                      children: [kk("socialBar:social"), (0, Kk.jsx)(Kr.b, {})]
                    }), Mk && (0, Kk.jsxs)("div", {
                      ...Yk(Me.r.COSMETIC_SHOP),
                      "data-pad-tab": !0,
                      "data-pad-selected": ik === Me.r.COSMETIC_SHOP ? "true" : void 0,
                      className: Sk()("EverythingMenuTab EverythingMenuTabCosmeticShop", {
                        EverythingMenuTabActive: ik === Me.r.COSMETIC_SHOP
                      }),
                      children: [(0, Kk.jsx)("span", {
                        className: "EverythingMenuTabCosmeticShopText",
                        children: kk("store:title")
                      }), "new" === xk && (0, Kk.jsx)(yb, {}), "dot" === xk && (0, Kk.jsx)("span", {
                        className: "EverythingMenuTabStoreBadge EverythingMenuTabStoreDot"
                      })]
                    }), "inGame" === ek && (0, Kk.jsxs)("div", {
                      ...Yk(Me.r.LOBBY_LEADERBOARD),
                      "data-pad-tab": !0,
                      "data-pad-selected": ik === Me.r.LOBBY_LEADERBOARD ? "true" : void 0,
                      className: Sk()("EverythingMenuTab", {
                        EverythingMenuTabActive: ik === Me.r.LOBBY_LEADERBOARD
                      }),
                      children: [kk("general:lobby"), nk("OpenLobbyLeaderboard", "leaderboard")]
                    })]
                  }), (0, Kk.jsx)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerEnd",
                    children: qk
                  })]
                }), (0, KS.n)(ik) && qk, (0, Kk.jsxs)("div", {
                  ref: sk,
                  className: "EverythingMenuBody",
                  "data-pad-initial-area": !0,
                  style: {
                    "--everythingMenuBodyBackgroundOpacity": "inGame" === ek ? "0.85" : "1"
                  },
                  children: [(0, Kk.jsx)(HD, {
                    show: ik === Me.r.SETTINGS,
                    setBeforeResumeCallback: wk
                  }), (0, Kk.jsx)(yD, {
                    show: ik === Me.r.CUSTOMISATION
                  }), (0, Kk.jsx)(Dk.Suspense, {
                    fallback: null,
                    children: (0, Kk.jsx)(iS, {
                      show: ik === Me.r.SHOP
                    })
                  }), (0, Kk.jsx)(HS, {
                    show: ik === Me.r.LOBBY_LEADERBOARD
                  }), (0, Kk.jsx)(ob, {
                    show: ik === Me.r.COSMETIC_SHOP
                  }), (0, Kk.jsx)(mr, {
                    show: ik === Me.r.SOCIAL
                  })]
                }), !(0, lk.isMobileApp)() && (0, sD.f)(Pk.getPlayerRanks()) && (0, Kk.jsx)(jD.b, {
                  ref: pk,
                  className: "EverythingMenuBannerDiv",
                  show: Ck,
                  "data-pad-hint-bar-avoid": !0,
                  "data-pad-no-step-in": !0,
                  children: (0, Kk.jsx)(Gb.b, {
                    info: {
                      adId: 2,
                      adType: "leaderboard",
                      adAlias: "banner_shop"
                    },
                    sizeInfo: {
                      parentRef: pk
                    },
                    showing: Lk && Ck,
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
  33765: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Sk
    });
    var Dk = ik(314),
      fk = ik(33774);

    function Sk(kk, ek, ik) {
      const Sk = Object.entries(ek).sort(((kk, ek) => ek[1] - kk[1])),
        bk = (0, Dk.db)(kk);
      bk.push(kk ? "\n\n" : "\n");
      for (const [fk, Uk] of Sk) {
        var rk, Pk, mk;
        const kk = null !== (rk = null === ik || void 0 === ik || null === (Pk = ik[fk]) || void 0 === Pk ? void 0 : Pk.icon) && void 0 !== rk ? rk : `${fk} Enchantment`;
        bk.push({
          icon: kk,
          style: {
            fontSize: "1.5rem"
          }
        }), bk.push({
          str: `${fk} ${null!==(mk=(0,Dk.K)(Uk))&&void 0!==mk?mk:Uk}\n`
        })
      }
      bk.push({
        str: "\n"
      });
      for (const [Dk, Uk] of Sk) {
        var Mk, Kk, xk, nk;
        const kk = null !== (Mk = null === ik || void 0 === ik || null === (Kk = ik[Dk]) || void 0 === Kk ? void 0 : Kk.icon) && void 0 !== Mk ? Mk : `${Dk} Enchantment`,
          ek = null !== (xk = null === ik || void 0 === ik || null === (nk = ik[Dk]) || void 0 === nk ? void 0 : nk.description) && void 0 !== xk ? xk : (0, fk.j)(Dk);
        bk.push({
          icon: kk,
          style: {
            fontSize: "1.25rem",
            opacity: .75
          }
        }), bk.push({
          str: ek,
          style: {
            fontSize: "0.8em",
            fontWeight: "normal",
            opacity: .75
          }
        }), bk.push({
          str: "\n"
        })
      }
      return bk
    }
  },
  33779: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => mk,
      h: () => pk,
      k: () => wk,
      l: () => Pk,
      m: () => lk,
      q: () => Mk,
      r: () => xk,
      v: () => Hk,
      w: () => Kk
    });
    var Dk = ik(302),
      fk = ik(594),
      Sk = ik(314),
      bk = ik(4177),
      rk = ik(33765);

    function Pk(kk, ek) {
      var ik;
      let {
        player: Dk,
        chestOrCreative: fk
      } = kk;
      var Sk;
      return ek < Dk.length ? null !== (Sk = Dk[ek]) && void 0 !== Sk ? Sk : null : null !== (ik = fk[ek - Dk.length]) && void 0 !== ik ? ik : null
    }

    function mk(kk) {
      var ek;
      return null !== (ek = kk.amount) && void 0 !== ek ? ek : 0
    }

    function Mk(kk) {
      return 0 === kk.button || void 0 === kk.button
    }

    function Kk(kk) {
      return !!kk.shiftKey
    }

    function xk(kk) {
      return "touches" in kk || "touch" === kk.pointerType || "pen" === kk.pointerType
    }
    const nk = new Set,
      Uk = 50;

    function Hk(kk, ek) {
      var ik;
      const Dk = null === (ik = kk[ek]) || void 0 === ik ? void 0 : ik.displayName;
      return (0, fk.F)(Dk) ? "string" !== typeof ek ? "" : (!nk.has(ek) && nk.size < Uk && (nk.add(ek), console.warn(`No item called "${ek}", so its hover shows the name as given`)), ek) : Dk
    }

    function wk(kk, ek, ik) {
      var Pk, mk, Mk, Kk, xk, nk, Uk, wk, lk, pk, yk, Yk, Lk, Ck;
      const Ak = kk.attributes,
        jk = null !== (Pk = null === (mk = ek[kk.name]) || void 0 === mk ? void 0 : mk.rootName) && void 0 !== Pk ? Pk : kk.name,
        sk = null !== (Mk = null !== (Kk = Ak.customDisplayName) && void 0 !== Kk ? Kk : null === (xk = ek[kk.name]) || void 0 === xk ? void 0 : xk.displayName) && void 0 !== Mk ? Mk : Hk(ek, jk);
      let dk = sk;
      const Vk = null === (nk = Ak.customAttributes) || void 0 === nk ? void 0 : nk.enchantmentTier;
      Vk && (dk = (0, Sk.db)(sk, {
        colour: Sk.$[Vk]
      }));
      const Fk = null !== (Uk = null !== (wk = null !== (lk = function(kk, ek) {
        var ik;
        if (void 0 === kk || null !== (ik = ek.customAttributes) && void 0 !== ik && ik.author) return kk;
        const fk = (0, Dk.hc)(kk);
        return fk.every((kk => "string" === typeof kk)) ? kk : fk.map((kk => "string" === typeof kk ? kk : {
          icon: kk.icon,
          style: {
            fontSize: "1.5em"
          }
        }))
      }(Ak.customDescription, Ak)) && void 0 !== lk ? lk : null === (pk = ek[kk.name]) || void 0 === pk ? void 0 : pk.description) && void 0 !== wk ? wk : null === (yk = ek[jk]) || void 0 === yk ? void 0 : yk.description) && void 0 !== Uk ? Uk : "";
      let uk = Fk;
      if (null !== (Yk = Ak.customAttributes) && void 0 !== Yk && Yk.enchantments) uk = (0, rk.b)(Fk, Ak.customAttributes.enchantments, Ak.customAttributes.enchantmentData);
      else if (ik[jk]) uk = (0, Sk.db)(Fk), uk.push({
        str: "\n"
      }), uk.push({
        str: "Enchantable",
        style: {
          fontSize: "0.8em",
          fontWeight: "normal",
          opacity: .4
        }
      });
      else if (null !== (Lk = Ak.customAttributes) && void 0 !== Lk && Lk.mobSettings) {
        var qk, Ik;
        const kk = Ak.customAttributes.mobSettings;
        var zk, Qk;
        if (uk = [], (0, fk.F)(Ak.customAttributes.health) || (uk.push({
            str: "\n"
          }), uk.push({
            icon: "Health",
            style: {
              fontSize: "1.5em"
            }
          }), uk.push({
            str: " "
          }), uk.push({
            str: Ak.customAttributes.health.toString()
          }), (0, fk.F)(kk.maxHealth) || (uk.push({
            str: "/"
          }), uk.push({
            str: kk.maxHealth.toString()
          }))), !(0, fk.F)(kk.attackDamage) && kk.attackDamage > 0 && (uk.push({
            str: "\n"
          }), uk.push({
            icon: "Iron Sword",
            style: {
              fontSize: "1.5em"
            }
          }), uk.push({
            str: " "
          }), uk.push({
            str: kk.attackDamage.toString()
          })), !(0, fk.F)(kk.secondaryAttackDamage) && kk.secondaryAttackDamage > 0 && (uk.push({
            str: "\n"
          }), uk.push({
            icon: "Stone Crossbow",
            style: {
              fontSize: "1.5em"
            }
          }), uk.push({
            str: " "
          }), uk.push({
            str: kk.secondaryAttackDamage.toString()
          })), (0, fk.F)(kk.baseRunningSpeed) || (uk.push({
            str: "\n"
          }), uk.push({
            icon: "Speed",
            style: {
              fontSize: "1.5em"
            }
          }), uk.push({
            str: " "
          }), uk.push({
            str: kk.baseRunningSpeed.toFixed(2)
          })), "Saddled" === kk.metaInfo) uk.push({
          str: "\n"
        }), uk.push({
          str: {
            translationKey: "general:has"
          }
        }), uk.push({
          str: " "
        }), uk.push({
          icon: null !== (zk = null === (Qk = kk.tameInfo) || void 0 === Qk ? void 0 : Qk.saddleItemName) && void 0 !== zk ? zk : "Saddle",
          style: {
            fontSize: "1.5em"
          }
        });
        if (uk.push({
            str: "\n"
          }), uk.push({
            str: "\n"
          }), kk.petInfo && null !== (qk = kk.tameInfo) && void 0 !== qk && qk.supportsFriendship) {
          const ek = bk.b.getIconsFromFriendshipPoints(kk.petInfo.friendshipPoints);
          for (const kk of ek) uk.push({
            icon: kk,
            style: {
              fontSize: "1.5em"
            }
          });
          uk.push({
            str: "\n"
          });
          const ik = bk.b.getMobHungerLevel(kk.petInfo.lastFedAt);
          for (const kk of bk.b.hungerLevelIcons[ik]) uk.push({
            icon: kk,
            style: {
              fontSize: "1.5em"
            }
          });
          uk.push({
            str: " "
          }), uk.push({
            str: bk.b.hungerLevelTranslations[ik],
            style: {
              fontWeight: "bolder"
            }
          })
        }
        if (kk.tameInfo && null !== (Ik = kk.tameInfo) && void 0 !== Ik && Ik.supportsFriendship) {
          var vk, Ek;
          let ek = null !== (vk = kk.tameInfo.likedFoods) && void 0 !== vk ? vk : [];
          uk.push({
            str: "\n"
          }), uk.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: bk.b.feedTextColours[bk.b.MobFoodType.Superliked]
            }
          }), uk.push({
            str: " "
          }), null !== (Ek = kk.petInfo) && void 0 !== Ek && Ek.superlikedFoodKnown ? (uk.push({
            icon: kk.petInfo.superlikedFood,
            style: {
              fontSize: "1.5em"
            }
          }), ek = ek.filter((ek => ek !== kk.petInfo.superlikedFood))) : uk.push({
            icon: "Question Mark",
            style: {
              fontSize: "1.5em"
            }
          }), uk.push({
            str: "\n"
          }), uk.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: bk.b.feedTextColours[bk.b.MobFoodType.Liked]
            }
          }), uk.push({
            str: " "
          });
          for (const kk of ek) uk.push({
            icon: kk,
            style: {
              fontSize: "1.5em"
            }
          });
          uk.push({
            str: "\n"
          }), uk.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: bk.b.feedTextColours[bk.b.MobFoodType.Neutral]
            }
          }), uk.push({
            str: " "
          });
          for (const ik of null !== (hk = kk.tameInfo.neutralFoods) && void 0 !== hk ? hk : []) {
            var hk;
            uk.push({
              icon: ik,
              style: {
                fontSize: "1.5em"
              }
            })
          }
          uk.push({
            str: "\n"
          }), uk.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: bk.b.feedTextColours[bk.b.MobFoodType.Disliked]
            }
          }), uk.push({
            str: " "
          });
          for (const ik of null !== (ak = kk.tameInfo.dislikedFoods) && void 0 !== ak ? ak : []) {
            var ak;
            uk.push({
              icon: ik,
              style: {
                fontSize: "1.5em"
              }
            })
          }
        }
        uk.length > 0 ? (uk.shift(), uk.unshift(...(0, Sk.db)(Fk))) : uk = (0, Sk.db)(Fk)
      }
      return {
        name: dk,
        desc: uk,
        fontStyle: null !== (Ck = Ak.customAttributes) && void 0 !== Ck && Ck.author ? "italic" : "normal"
      }
    }

    function lk(kk, ek, ik, Dk) {
      const fk = Pk(kk, ik),
        Sk = Pk(kk, Dk);
      if (!fk) return !1;
      const bk = ek[fk.name].armourReduction,
        rk = ek[Sk.name].armourReduction;
      if (rk === bk) {
        var mk, Mk, Kk, xk;
        const kk = null !== (mk = null === (Mk = fk.attributes.customAttributes) || void 0 === Mk ? void 0 : Mk.enchantmentTier) && void 0 !== mk ? mk : "Tier 0",
          ek = null !== (Kk = null === (xk = Sk.attributes.customAttributes) || void 0 === xk ? void 0 : xk.enchantmentTier) && void 0 !== Kk ? Kk : "Tier 0";
        return parseInt(kk.replace("Tier ", "")) >= parseInt(ek.replace("Tier ", ""))
      }
      return bk > rk
    }

    function pk(kk) {
      let ek;
      if ("number" === typeof kk) {
        const ik = document.querySelector(`[data-inven-idx="${kk}"]`);
        if (!ik) return null;
        ek = ik.getBoundingClientRect()
      } else ek = kk.getBoundingClientRect();
      return {
        x: ek.left + ek.width / 2,
        y: ek.top + ek.height / 2
      }
    }
  },
  33682: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => nk,
      e: () => Uk,
      h: () => Hk
    });
    var Dk = ik(1410),
      fk = ik(60),
      Sk = ik(1291),
      bk = ik(4471),
      rk = ik(2343),
      Pk = ik(1172),
      mk = ik(99),
      Mk = ik(1922),
      Kk = ik(1327),
      xk = ik(1066);

    function nk(kk) {
      let {
        show: ek,
        onClose: ik
      } = kk;
      const {
        requestedGameNameWithVariation: Dk,
        lobbyName: fk,
        shownLobbyName: Sk
      } = (0, Mk.h)("connectedGame"), Pk = (0, rk.b)(Dk, fk, !1);
      return mk.featureFlags.canUseInviteLinks && (0, xk.jsx)(bk.e, {
        show: ek,
        close: ik,
        padShowsHud: !0,
        togglePointerLock: !1,
        globallyUniqueKey: "InviteLinkBox",
        doGameplayStartStopOnShow: !0,
        children: (0, xk.jsxs)("div", {
          className: "InviteLinkBox AnimFadeInScaleUp",
          children: [(0, xk.jsx)("div", {
            className: "InviteLinkBoxHeader SmallTextBold",
            children: "Invite Friends"
          }), (0, xk.jsxs)("div", {
            className: "InviteLinkBoxDescription SmallTextLight",
            children: [(0, xk.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: '"Join Lobby Name" Button Info'
            }), "Game: ", null === Pk ? (0, xk.jsx)(Kk.d, {}) : Pk, (0, xk.jsx)("br", {}), "Lobby Name: ", Sk, (0, xk.jsx)("br", {}), (0, xk.jsx)("br", {}), (0, xk.jsx)("br", {}), (0, xk.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: "Link"
            })]
          }), (0, xk.jsx)(Uk, {})]
        })
      })
    }

    function Uk() {
      var kk;
      const {
        t: ek
      } = (0, Pk.D)(), ik = null !== (kk = Hk(mk.featureFlags.canUseInviteLinks)) && void 0 !== kk ? kk : "Loading Link...", [Sk, bk] = (0, fk.useState)(0), [rk, Mk] = (0, fk.useReducer)((kk => kk + 1), 0);
      return (0, fk.useEffect)((() => {
        const kk = setTimeout((() => {
          Mk()
        }), 1100);
        return () => {
          clearTimeout(kk)
        }
      }), [Sk]), mk.featureFlags.canUseInviteLinks && (0, xk.jsxs)("div", {
        className: "InviteLinkInnerWrapper",
        children: [(0, xk.jsx)("div", {
          className: "InviteLinkInner",
          children: ik
        }), (0, xk.jsx)(Dk.f, {
          className: "InviteLinkCopyButton",
          onClick: () => {
            navigator.clipboard.writeText(ik).catch((kk => {
              console.error("Failed to copy invite link:", kk)
            })), bk(Date.now())
          },
          disabled: Date.now() - Sk < 1e3,
          children: Date.now() - Sk < 1e3 ? ek("general:copied") : ek("general:copy")
        })]
      })
    }

    function Hk(kk) {
      const [ek, ik] = (0, fk.useState)(null);
      return (0, fk.useEffect)((() => {
        if (!kk) return;
        let ek = !0;
        return (0, Sk.v)().then((kk => {
          ek && ik(kk)
        })).catch((kk => {
          console.error("Failed to get invite link:", kk)
        })), () => {
          ek = !1
        }
      }), [kk]), ek
    }
  },
  33757: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => mk
    });
    var Dk = ik(60),
      fk = ik(1021),
      Sk = ik.n(fk),
      bk = ik(1922),
      rk = ik(1066);

    function Pk(kk) {
      const ek = Math.floor(kk / 3600),
        ik = Math.floor(kk % 3600 / 60),
        Dk = Math.floor(kk % 60),
        fk = `${ik.toString().padStart(2,"0")}:${Dk.toString().padStart(2,"0")}`;
      return ek > 0 ? `${ek}:${fk}` : fk
    }
    const mk = (0, Dk.memo)((function(kk) {
      let {
        className: ek
      } = kk;
      const {
        recording: ik,
        seconds: Dk
      } = (0, bk.h)("replayRecorder");
      return ik ? (0, rk.jsxs)("div", {
        className: Sk()("RecordingIndicator", ek),
        children: [(0, rk.jsx)("span", {
          className: "RecordingIndicatorDot"
        }), (0, rk.jsx)("span", {
          className: "RecordingIndicatorLabel",
          children: "REC"
        }), (0, rk.jsx)("span", {
          className: "RecordingIndicatorTime",
          children: Pk(Dk)
        })]
      }) : null
    }))
  },
  4823: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => wk
    });
    var Dk = ik(1021),
      fk = ik.n(Dk),
      Sk = ik(4571),
      bk = ik(1172),
      rk = ik(1033),
      Pk = ik(1410),
      mk = ik(1459),
      Mk = ik(1333),
      Kk = ik(2494),
      xk = ik(1066);
    const nk = {
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

    function Uk(kk) {
      let {
        platform: ek
      } = kk;
      const ik = "youtube" === ek;
      return (0, xk.jsxs)("span", {
        className: fk()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: ik
        }),
        children: [ik && (0, xk.jsx)(Kk.e, {
          variant: "white"
        }), !ik && (0, xk.jsx)(rk.d, {
          name: nk[ek].icon,
          kit: "brands"
        })]
      })
    }

    function Hk(kk) {
      let {
        platform: ek,
        link: ik,
        editable: Dk,
        userContext: fk,
        onLinksUpdated: Kk
      } = kk;
      const {
        t: Hk
      } = (0, bk.D)(), wk = nk[ek];
      if (!ik && !Dk) return null;

      function lk() {
        var kk;
        if (!fk || !Kk) return;
        Mk.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: wk.name
            }
          },
          prefixText: Sk.x[ek],
          placeholderText: "playBloxd",
          initialValue: null !== (kk = null === ik || void 0 === ik ? void 0 : ik.handle) && void 0 !== kk ? kk : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: ik ? "general:remove" : void 0
        }).getResult().then((async kk => {
          if ("notificationTornDown" !== kk && null !== kk) try {
            "submit" === kk.type ? await mk.b.setSocialLink(fk, ek, kk.value) : await mk.b.clearSocialLink(fk, ek), Kk()
          } catch (ik) {
            console.error("Failed to update social link", ik), Mk.NotificationProvider.showAlertPopup({
              title: ik.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (ik) {
        const kk = `@${ik.handle}`;
        return (0, xk.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: wk.color
          },
          href: ik.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, xk.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, xk.jsx)(Uk, {
              platform: ek
            }), (0, xk.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, xk.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: kk
              })
            })]
          }), Dk && (0, xk.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, Pk.db)({
              stopPropagation: !0
            }),
            onClick: kk => {
              kk.stopPropagation(), kk.preventDefault(), lk()
            },
            children: (0, xk.jsx)(rk.d, {
              name: "pen-to-square"
            })
          }), !Dk && (0, xk.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, xk.jsx)(rk.d, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, xk.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: wk.color
        },
        ...(0, Pk.db)(),
        onClick: () => {
          lk()
        },
        children: [(0, xk.jsx)(Uk, {
          platform: ek
        }), (0, xk.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, xk.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: wk.name
          }), (0, xk.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: Hk("homePage:profileSocialLinkAdd")
          })]
        }), (0, xk.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, xk.jsx)(rk.d, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function wk(kk) {
      let {
        socialLinks: ek,
        editable: ik = !1,
        userContext: Dk,
        onLinksUpdated: fk
      } = kk;
      if (!ik && 0 === ek.length) return null;
      const bk = new Map(ek.map((kk => [kk.platform, kk]))),
        rk = ik ? Sk.w : ek.map((kk => kk.platform));
      return (0, xk.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, xk.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: rk.map((kk => (0, xk.jsx)(Hk, {
            platform: kk,
            link: bk.get(kk),
            editable: ik,
            userContext: Dk,
            onLinksUpdated: fk
          }, kk)))
        })
      })
    }
  },
  33763: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Sk
    });
    var Dk = ik(4479),
      fk = ik(4482);

    function Sk(kk) {
      let {
        children: ek,
        showing: ik,
        globallyUniqueKey: Sk,
        alwaysMountChildren: bk = !1,
        doGameplayStartStopOnShow: rk = !0,
        keepsMovement: Pk = !1
      } = kk;
      return (0, fk.c)(!0, ik, Sk, Pk), (0, Dk.c)(rk, ik), ik || bk ? ek : null
    }
  },
  33809: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Sk
    });
    var Dk = ik(60),
      fk = ik(3521);

    function Sk() {
      const [kk, ek] = (0, Dk.useState)(!1);
      return (0, Dk.useLayoutEffect)((() => {
        let kk = !0;
        return (0, fk.f)().then((() => {
          kk && ek(!0)
        })), () => {
          kk = !1
        }
      }), []), kk
    }
  },
  6414: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => Sk
    });
    var Dk = ik(60),
      fk = ik(38);

    function Sk(kk, ek) {
      var ik;
      const [Sk, bk] = (0, Dk.useState)(null !== (ik = fk.f.getItem(kk)) && void 0 !== ik ? ik : ek);
      return [Sk, ek => {
        fk.f.setItem(kk, ek), bk(ek)
      }]
    }
  },
  33735: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Hk,
      h: () => Uk
    });
    ik(33737);
    var Dk = ik(1021),
      fk = ik.n(Dk),
      Sk = ik(60),
      bk = ik(33727);

    function rk(kk, ek) {
      return Math.max(1, Math.round(kk * ek))
    }

    function Pk(kk, ek) {
      const ik = ek * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
        Dk = function(kk, ek) {
          if (kk.lines) return rk(kk.lineThickness, ek) % 2;
          if (kk.dot) return rk(kk.dotSize, ek) % 2;
          return mk(kk, ek) % 2
        }(kk, ek),
        fk = Mk(kk.lineThickness * ik, Dk),
        Sk = rk(kk.lineLength, ik),
        bk = Math.round(kk.gap * ik),
        Pk = kk.outline > 0 ? rk(kk.outline, ik) : 0,
        xk = [];
      if (kk.lines && (xk.push({
          x: fk + bk,
          y: 0,
          w: Sk,
          h: fk,
          arm: "right"
        }), xk.push({
          x: -bk - Sk,
          y: 0,
          w: Sk,
          h: fk,
          arm: "left"
        }), xk.push({
          x: 0,
          y: fk + bk,
          w: fk,
          h: Sk,
          arm: "down"
        }), kk.tStyle || xk.push({
          x: 0,
          y: -bk - Sk,
          w: fk,
          h: Sk,
          arm: "up"
        }), 0 === bk && xk.push({
          x: 0,
          y: 0,
          w: fk,
          h: fk
        })), kk.dot) {
        const ek = Mk(kk.dotSize * ik, Dk),
          Sk = kk.lines && 0 === bk && kk.dotSize > kk.lineThickness ? Math.max(ek, fk + 2) : ek,
          rk = (fk - Sk) / 2;
        xk.push({
          x: rk,
          y: rk,
          w: Sk,
          h: Sk
        })
      }
      const nk = xk.map((kk => ({
        ...kk,
        x: kk.x - Pk,
        y: kk.y - Pk,
        w: kk.w + 2 * Pk,
        h: kk.h + 2 * Pk
      })));
      let Uk = null,
        Hk = null;
      if (kk.circle) {
        const ek = rk(kk.circleThickness, ik),
          Sk = function(kk, ek) {
            return kk + (kk % 2 === ek ? 0 : 1)
          }(mk(kk, ik), Dk),
          bk = (fk - Sk) / 2;
        Uk = Kk(bk, Sk, ek), Pk > 0 && (Hk = Kk(bk - Pk, Sk + 2 * Pk, ek + 2 * Pk))
      }
      return {
        cell: fk,
        fills: xk,
        outlines: Pk > 0 ? nk : [],
        ring: Uk,
        ringOutline: Hk
      }
    }

    function mk(kk, ek) {
      return Math.round(kk.circleRadius * ek * 2 + rk(kk.circleThickness, ek))
    }

    function Mk(kk, ek) {
      return Math.max(2 - ek, 2 * Math.round((kk - ek) / 2) + ek)
    }

    function Kk(kk, ek, ik) {
      const Dk = 2 * ik >= ek - 1;
      return {
        x: kk,
        y: kk,
        size: ek,
        border: Math.min(ik, Math.floor(ek / 2)),
        filled: Dk
      }
    }
    var xk = ik(1066);
    const nk = 1.4;

    function Uk(kk, ek) {
      return kk && ek ? `scale(${nk})` : "scale(1)"
    }

    function Hk(kk) {
      return "classic" === kk.settings.style ? (0, xk.jsx)(pk, {
        ...kk
      }) : (0, xk.jsx)(sk, {
        ...kk
      })
    }
    const wk = .125;

    function lk(kk, ek) {
      const ik = {};
      if (kk.color !== bk.h.color && (ik.color = (0, bk.j)(kk.color)), kk.opacity !== bk.h.opacity && (ik.opacity = kk.opacity / 100), kk.outline !== bk.h.outline || kk.outlineColor !== bk.h.outlineColor) {
        const ek = kk.outline,
          Dk = (0, bk.j)(kk.outlineColor);
        ik.textShadow = ek > 0 ? `-${ek}px 0 ${Dk}, 0 ${ek}px ${Dk}, ${ek}px 0 ${Dk}, 0 -${ek}px ${Dk}` : "none"
      }
      if (kk.size !== bk.h.size) {
        const Dk = kk.size / 100;
        ik.fontSize = ek ? `calc(max(1.3rem, 18px) * ${Dk})` : `calc(1.3rem * ${Dk})`, ik.marginTop = `-${wk}em`, ik.transformOrigin = `50% calc(50% + ${wk}em)`
      }
      return ik
    }

    function pk(kk) {
      let {
        settings: ek,
        touch: ik,
        inPreview: Dk,
        inEditor: Sk,
        pressed: bk = !1,
        pressRef: rk
      } = kk;
      return (0, xk.jsx)("div", {
        className: fk()("Crosshair", {
          Touch: ik,
          CrosshairInPreview: Dk,
          CrosshairInEditor: Sk || Dk
        }),
        ref: rk,
        style: {
          transform: Uk(bk, ek.growOnClick),
          ...lk(ek, ik)
        },
        children: "+"
      })
    }

    function yk(kk, ek) {
      return kk / ek + "px"
    }

    function Yk(kk, ek, ik, Dk) {
      return {
        ...Ak(kk, ek, ik),
        width: yk(kk.w, ik),
        height: yk(kk.h, ik),
        background: Dk
      }
    }

    function Lk(kk, ek, ik) {
      return {
        left: yk(kk.x, ek),
        top: yk(kk.y, ek),
        width: yk(kk.size, ek),
        height: yk(kk.size, ek),
        borderWidth: yk(kk.border, ek),
        borderColor: ik,
        background: kk.filled ? ik : void 0
      }
    }
    const Ck = {
      left: [-1, 0],
      right: [1, 0],
      up: [0, -1],
      down: [0, 1]
    };

    function Ak(kk, ek, ik) {
      const [Dk, fk] = kk.arm ? Ck[kk.arm] : [0, 0], Sk = Math.round(ek * ik);
      return {
        left: yk(kk.x + Dk * Sk, ik),
        top: yk(kk.y + fk * Sk, ik)
      }
    }

    function jk(kk) {
      return kk.arm ? {
        "data-arm": kk.arm,
        "data-x": kk.x,
        "data-y": kk.y
      } : {}
    }

    function sk(kk) {
      let {
        settings: ek,
        inPreview: ik,
        inEditor: Dk,
        pressed: rk = !1,
        spread: mk,
        spreadRef: Mk
      } = kk;
      const Kk = (0, Sk.useRef)(null),
        {
          box: Uk,
          dpr: Hk
        } = function(kk) {
          const [ek, ik] = (0, Sk.useState)({
            box: {
              left: 0,
              top: 0,
              width: 0,
              height: 0
            },
            dpr: 1
          });
          return (0, Sk.useLayoutEffect)((() => {
            const ek = kk.current;
            if (!ek) return;
            const Dk = () => {
              const kk = ek.getBoundingClientRect(),
                Dk = window.devicePixelRatio || 1;
              ik((ek => ek.dpr === Dk && ek.box.left === kk.left && ek.box.top === kk.top && ek.box.width === kk.width && ek.box.height === kk.height ? ek : {
                box: {
                  left: kk.left,
                  top: kk.top,
                  width: kk.width,
                  height: kk.height
                },
                dpr: Dk
              }))
            };
            Dk();
            const fk = new ResizeObserver(Dk);
            return fk.observe(ek), window.addEventListener("resize", Dk), window.addEventListener("scroll", Dk, !0), () => {
              fk.disconnect(), window.removeEventListener("resize", Dk), window.removeEventListener("scroll", Dk, !0)
            }
          }), [kk]), ek
        }(Kk),
        wk = (0, Sk.useRef)(Hk);
      wk.current = Hk;
      const lk = Pk(ek, Hk, rk && ek.growOnClick ? nk : 1),
        pk = function(kk, ek, ik) {
          const Dk = Math.round((kk.left + kk.width / 2) * ik - ek / 2),
            fk = Math.round((kk.top + kk.height / 2) * ik - ek / 2);
          return {
            x: Dk / ik - kk.left,
            y: fk / ik - kk.top
          }
        }(Uk, lk.cell, Hk),
        yk = (0, bk.j)(ek.color),
        Ck = (0, bk.j)(ek.outlineColor),
        sk = (0, Sk.useRef)(0);
      (0, Sk.useLayoutEffect)((() => {
        if (Mk) return Mk.current = kk => {
          var ek;
          sk.current = kk, null === (ek = Kk.current) || void 0 === ek || ek.querySelectorAll("[data-arm]").forEach((ek => {
            Object.assign(ek.style, Ak(function(kk) {
              return {
                x: Number(kk.dataset.x),
                y: Number(kk.dataset.y),
                arm: kk.dataset.arm
              }
            }(ek), kk, wk.current))
          }))
        }, () => {
          Mk.current = null
        }
      }), [Mk]);
      const dk = null !== mk && void 0 !== mk ? mk : sk.current;
      return (0, xk.jsx)("div", {
        ref: Kk,
        className: fk()("CrosshairShapes", {
          CrosshairInPreview: ik,
          CrosshairInEditor: Dk || ik,
          CrosshairSpreads: void 0 !== Mk
        }),
        children: (0, xk.jsx)("div", {
          className: "CrosshairShapesOrigin",
          style: {
            left: pk.x,
            top: pk.y,
            opacity: ek.opacity / 100
          },
          children: (0, xk.jsxs)("div", {
            className: "CrosshairShapesPress",
            children: [lk.ringOutline && (0, xk.jsx)("div", {
              className: "CrosshairRing",
              style: Lk(lk.ringOutline, Hk, Ck)
            }), lk.outlines.map(((kk, ek) => (0, xk.jsx)("div", {
              className: "CrosshairPart",
              ...jk(kk),
              style: Yk(kk, dk, Hk, Ck)
            }, `o${ek}`))), lk.ring && (0, xk.jsx)("div", {
              className: "CrosshairRing",
              style: Lk(lk.ring, Hk, yk)
            }), lk.fills.map(((kk, ek) => (0, xk.jsx)("div", {
              className: "CrosshairPart",
              ...jk(kk),
              style: Yk(kk, dk, Hk, yk)
            }, `f${ek}`)))]
          })
        })
      })
    }
  },
  33743: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Mk,
      f: () => wk,
      h: () => Hk
    });
    var Dk = ik(33727);
    const fk = "XH1-",
      Sk = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
      bk = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
      rk = ["color", "outlineColor"],
      Pk = 1 + 3 * rk.length + bk.length + 1,
      mk = Math.ceil(8 * Pk / Math.log2(62)),
      Mk = fk.length + mk;

    function Kk(kk) {
      let ek = 90;
      for (const ik of kk) ek = 31 * ek + ik & 255;
      return ek
    }
    const xk = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      nk = BigInt(xk.length);

    function Uk(kk, ek) {
      let ik = 0n;
      for (const fk of kk) {
        const kk = xk.indexOf(fk);
        if (kk < 0) return null;
        ik = ik * nk + BigInt(kk)
      }
      if (ik >> BigInt(8 * ek) !== 0n) return null;
      const Dk = [];
      for (let fk = 0; fk < ek; fk++) Dk.unshift(Number(0xffn & ik)), ik >>= 8n;
      return Dk
    }

    function Hk(kk) {
      let ek = "shapes" === kk.style ? 1 : 0;
      Sk.forEach(((ik, Dk) => {
        kk[ik] && (ek |= 1 << Dk + 1)
      }));
      const ik = [ek];
      for (const fk of rk) {
        const ek = (0, Dk.i)(fk, kk[fk]);
        ik.push(ek >> 16 & 255, ek >> 8 & 255, 255 & ek)
      }
      for (const fk of bk) {
        const {
          min: ek,
          step: Sk
        } = Dk.d[fk];
        ik.push(Math.round(((0, Dk.i)(fk, kk[fk]) - ek) / Sk))
      }
      return ik.push(Kk(ik)), fk + function(kk, ek) {
        let ik = 0n;
        for (const fk of kk) ik = ik << 8n | BigInt(fk);
        let Dk = "";
        for (let fk = 0; fk < ek; fk++) Dk = xk[Number(ik % nk)] + Dk, ik /= nk;
        return Dk
      }(ik, mk)
    }

    function wk(kk) {
      for (const ek of kk.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${mk}})`, "gi"))) {
        const kk = lk(Uk(ek[1], Pk));
        if (kk) return kk
      }
      return null
    }

    function lk(kk) {
      if (!kk || kk.length !== Pk || Kk(kk.slice(0, -1)) !== kk[kk.length - 1]) return null;
      const ek = kk[0],
        ik = {
          ...Dk.h,
          style: 1 & ek ? "shapes" : "classic"
        };
      Sk.forEach(((kk, Dk) => {
        ik[kk] = 0 !== (ek & 1 << Dk + 1)
      }));
      let fk = 1;
      for (const Dk of rk) ik[Dk] = kk[fk] << 16 | kk[fk + 1] << 8 | kk[fk + 2], fk += 3;
      for (const Sk of bk) {
        const {
          min: ek,
          step: bk
        } = Dk.d[Sk];
        ik[Sk] = (0, Dk.i)(Sk, ek + kk[fk] * bk), fk++
      }
      return ik
    }
  },
  33727: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Dk,
      h: () => fk,
      i: () => Sk,
      j: () => mk,
      l: () => Pk,
      p: () => Mk,
      q: () => rk,
      t: () => bk
    });
    const Dk = {
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
      fk = Object.freeze({
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

    function Sk(kk, ek) {
      var ik;
      const {
        min: Sk,
        max: bk,
        step: rk
      } = Dk[kk];
      if (!Number.isFinite(ek)) return fk[kk];
      const Pk = (null !== (ik = String(rk).split(".")[1]) && void 0 !== ik ? ik : "").length,
        mk = Number((Math.round(ek / rk) * rk).toFixed(Pk));
      return Math.min(bk, Math.max(Sk, mk))
    }

    function bk(kk, ek, ik) {
      const Dk = "number" === typeof ik ? Sk(ek, ik) : ik;
      return {
        ...kk,
        [ek]: Dk
      }
    }

    function rk(kk, ek) {
      let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      return Object.keys(fk).every((Dk => ik.includes(Dk) || kk[Dk] === ek[Dk]))
    }

    function Pk(kk) {
      return rk(kk, fk)
    }

    function mk(kk) {
      return `#${kk.toString(16).padStart(6,"0")}`
    }

    function Mk(kk) {
      const ek = /^#?([0-9a-f]{6})$/i.exec(kk.trim());
      return ek ? parseInt(ek[1], 16) : null
    }
  },
  33750: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Kk,
      d: () => xk
    });
    var Dk = ik(60),
      fk = ik(38),
      Sk = ik(33743),
      bk = ik(33727);
    const rk = "crosshairCode";
    let Pk = null;
    const mk = new Set;

    function Mk() {
      if (null === Pk) {
        var kk;
        const ek = fk.f.getItem(rk);
        Pk = null !== (kk = "string" === typeof ek ? (0, Sk.f)(ek) : null) && void 0 !== kk ? kk : bk.h
      }
      return Pk
    }

    function Kk(kk) {
      Pk = kk, (0, bk.l)(kk) ? fk.f.removeItem(rk) : fk.f.setItem(rk, (0, Sk.h)(kk));
      for (const ek of mk) ek()
    }

    function xk() {
      const [kk, ek] = (0, Dk.useState)(Mk);
      return (0, Dk.useEffect)((() => {
        const kk = () => {
          ek(Mk())
        };
        return kk(), ik = kk, mk.add(ik), () => {
          mk.delete(ik)
        };
        var ik
      }), []), kk
    }
  },
  8712: (kk, ek, ik) => {
    function Dk(kk) {
      return {
        x: (kk.left + kk.right) / 2,
        y: (kk.top + kk.bottom) / 2
      }
    }

    function fk(kk) {
      return 0 === kk.length ? null : kk.reduce(((kk, ek) => ({
        left: Math.min(kk.left, ek.left),
        top: Math.min(kk.top, ek.top),
        right: Math.max(kk.right, ek.right),
        bottom: Math.max(kk.bottom, ek.bottom)
      })))
    }

    function Sk(kk, ek) {
      const ik = Math.max(0, (ek - (kk.right - kk.left)) / 2),
        Dk = Math.max(0, (ek - (kk.bottom - kk.top)) / 2);
      return {
        left: kk.left - ik,
        top: kk.top - Dk,
        right: kk.right + ik,
        bottom: kk.bottom + Dk
      }
    }

    function bk(kk, ek) {
      return ek.x >= kk.left && ek.x <= kk.right && ek.y >= kk.top && ek.y <= kk.bottom
    }

    function rk(kk, ek, ik) {
      let fk = null,
        rk = 1 / 0;
      for (const {
          id: Dk,
          box: Sk
        }
        of ek) {
        const ek = (Sk.right - Sk.left) * (Sk.bottom - Sk.top);
        bk(Sk, kk) && ek < rk && (rk = ek, fk = Dk)
      }
      if (null !== fk) return fk;
      let Pk = 1 / 0;
      for (const {
          id: mk,
          box: Mk
        }
        of ek) {
        if (!bk(Sk(Mk, ik), kk)) continue;
        const ek = Dk(Mk),
          rk = Math.hypot(kk.x - ek.x, kk.y - ek.y);
        rk < Pk && (Pk = rk, fk = mk)
      }
      return fk
    }

    function Pk(kk, ek, ik) {
      return {
        left: ik.left,
        top: ik.top,
        right: kk - ik.right,
        bottom: ek - ik.bottom
      }
    }

    function mk(kk, ek, ik, Dk) {
      const fk = (kk, ek, ik) => Math.max(Math.min(ek, 0), Math.min(Math.max(ik, 0), kk));
      return {
        x: fk(ek, Dk.left - kk.left, Dk.right - kk.right),
        y: fk(ik, Dk.top - kk.top, Dk.bottom - kk.bottom)
      }
    }

    function Mk(kk, ek, ik, Dk, fk) {
      const Sk = kk.dx * Dk + ek,
        bk = kk.dy * fk + ik,
        rk = kk => Math.max(-1, Math.min(1, kk));
      return {
        dx: rk(Sk / Dk),
        dy: rk(bk / fk)
      }
    }

    function Kk(kk, ek, ik, Dk) {
      return ek <= 0 || ik <= 0 ? 1 : Math.max(.05, Math.min(1, kk / ek, Dk / ik))
    }

    function xk(kk, ek, ik) {
      return Math.min(kk.right, ek.right) - Math.max(kk.left, ek.left) > ik && Math.min(kk.bottom, ek.bottom) - Math.max(kk.top, ek.top) > ik
    }

    function nk(kk, ek) {
      const ik = (kk, ek, ik, Dk) => ek - kk > Dk - ik ? ik - kk > ek - Dk ? Dk - ek : ik - kk : kk < ik ? ik - kk : ek > Dk ? Dk - ek : 0;
      return {
        x: ik(kk.left, kk.right, ek.left, ek.right),
        y: ik(kk.top, kk.bottom, ek.top, ek.bottom)
      }
    }

    function Uk(kk, ek) {
      let {
        avoid: ik = null,
        bounds: Dk = null
      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, fk = 0, Sk = 1 / 0;
      return kk.forEach(((kk, bk) => {
        const rk = ek.filter((ek => xk(kk, ek, 0))).length,
          Pk = null !== Dk && (kk.left < Dk.left || kk.top < Dk.top || kk.right > Dk.right || kk.bottom > Dk.bottom),
          mk = rk + (ik && xk(kk, ik, 0) ? 1e3 : 0) + (Pk ? 1e6 : 0);
        mk < Sk && (fk = bk, Sk = mk)
      })), fk
    }
    ik.d(ek, {
      A: () => fk,
      c: () => Dk,
      d: () => bk,
      h: () => xk,
      i: () => mk,
      m: () => Sk,
      o: () => Uk,
      q: () => Mk,
      u: () => rk,
      v: () => Kk,
      x: () => Pk,
      z: () => nk
    })
  },
  33723: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => Sk,
      h: () => fk
    });
    var Dk = ik(22);

    function fk(kk, ek) {
      return kk && !ek
    }

    function Sk() {
      return fk(Dk.b.get("isTouchScreen"), Dk.b.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  8511: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => fk,
      f: () => Dk
    });
    const Dk = "controllerOpenKeyboard",
      fk = "controllerKeyboardVisible"
  },
  33673: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Dk
    });
    const Dk = new Set(["chunkBorders"])
  },
  33664: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      ALL_DEV_TOOLS: () => bk,
      coreDevTools: () => mk,
      devTools: () => Pk
    });
    var Dk = ik(610),
      fk = ik(1284),
      Sk = ik(33673);
    const bk = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function rk() {
      const {
        noaDevTools: kk
      } = await ik.e(234).then((() => ik(40655)));
      return kk
    }
    const Pk = new class {
        constructor() {
          this.loadHost = rk, this.tools = bk
        }
        setHost(kk) {
          this.tools = null === kk ? bk : kk.tools, this.loadHost = null === kk ? rk : async () => kk
        }
        supports(kk) {
          return this.tools.has(kk)
        }
        async downloadScene(kk, ek) {
          const ik = await this.loadHost();
          await ik.downloadScene(kk, ek)
        }
        async setAmbientLightIntensity(kk) {
          const ek = await this.loadHost();
          await ek.setAmbientLightIntensity(kk)
        }
      },
      mk = {
        tools: Sk.c,
        downloadScene: async () => {
          throw new Error("This client can't download the scene")
        },
        setAmbientLightIntensity: async () => {
          throw new Error("This client can't set the ambient light")
        }
      };
    Dk.s && Pk.setHost(mk), (0, fk.s)((() => {
      Pk.setHost(mk)
    }))
  },
  33801: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => bk,
      e: () => fk,
      f: () => Mk
    });
    var Dk = ik(1537);

    function fk(kk) {
      var ek;
      return {
        ...bk.store,
        yaw: bk.store.yaw + (null !== (ek = Dk.c[kk].previewYaw) && void 0 !== ek ? ek : 0)
      }
    }
    const Sk = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      bk = {
        player: Sk,
        store: {
          ...Sk,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function rk(kk, ek) {
      kk instanceof Promise ? kk.then(ek).catch((kk => {
        console.error("Couldn't open the preview", kk)
      })) : ek(kk)
    }
    class Pk {
      constructor(kk) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, rk(kk, (kk => {
          this.closed ? kk.close() : (this.opened = kk, null !== this.size && kk.resize(this.size.width, this.size.height), null !== this.view && kk.show(this.view))
        }))
      }
      show(kk) {
        var ek;
        this.view = kk, null === (ek = this.opened) || void 0 === ek || ek.show(kk)
      }
      resize(kk, ek) {
        var ik;
        this.size = {
          width: kk,
          height: ek
        }, null === (ik = this.opened) || void 0 === ik || ik.resize(kk, ek)
      }
      close() {
        var kk;
        this.closed = !0, null === (kk = this.opened) || void 0 === kk || kk.close(), this.opened = null
      }
    }
    class mk {
      constructor(kk) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(kk).then((kk => kk.ready)), rk(kk, (kk => {
          this.closed ? kk.close() : (this.opened = kk, null !== this.size && kk.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var kk, ek;
        return null !== (kk = null === (ek = this.opened) || void 0 === ek ? void 0 : ek.isReady()) && void 0 !== kk && kk
      }
      setCosmetic(kk, ek) {
        var ik;
        null === (ik = this.opened) || void 0 === ik || ik.setCosmetic(kk, ek)
      }
      playEmote(kk) {
        var ek;
        null === (ek = this.opened) || void 0 === ek || ek.playEmote(kk)
      }
      setOrbit(kk) {
        var ek;
        null === (ek = this.opened) || void 0 === ek || ek.setOrbit(kk)
      }
      resetCamera() {
        var kk;
        null === (kk = this.opened) || void 0 === kk || kk.resetCamera()
      }
      async untilDrawn(kk) {
        var ek;
        await this.ready, await (null === (ek = this.opened) || void 0 === ek ? void 0 : ek.untilDrawn(kk))
      }
      resize(kk, ek) {
        var ik;
        this.size = {
          width: kk,
          height: ek
        }, null === (ik = this.opened) || void 0 === ik || ik.resize(kk, ek)
      }
      close() {
        var kk;
        this.closed = !0, null === (kk = this.opened) || void 0 === kk || kk.close(), this.opened = null
      }
    }
    const Mk = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(kk) {
        this.host = kk
      }
      setDefaultHost(kk) {
        this.makeDefault = kk
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(kk) {
        return new Pk(this.current().openMob(kk))
      }
      openPet(kk) {
        return new Pk(this.current().openPet(kk))
      }
      openMobLineup(kk) {
        return new Pk(this.current().openMobLineup(kk))
      }
      openCharacter(kk, ek) {
        return new mk(this.current().openCharacter(kk, ek))
      }
    }
  },
  33799: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Dk.d,
      g: () => Dk.e,
      h: () => Dk.f
    });
    var Dk = ik(33801);
    class fk {
      constructor(kk) {
        this.load = kk, this.loaded = null, this.loading = null
      }
      run(kk) {
        return null !== this.loaded ? kk(this.loaded) : (this.loading ??= this.load().then((kk => (this.loaded = kk, kk)), (kk => {
          throw this.loading = null, kk
        })), this.loading.then(kk))
      }
    }
    class Sk {
      constructor() {
        this.mobScene = new fk((() => Promise.all([ik.e(72), ik.e(230), ik.e(229), ik.e(250), ik.e(96), ik.e(251), ik.e(75), ik.e(74), ik.e(248), ik.e(73), ik.e(258), ik.e(252), ik.e(257), ik.e(255), ik.e(247), ik.e(272), ik.e(226), ik.e(242), ik.e(253), ik.e(256), ik.e(77), ik.e(188), ik.e(220), ik.e(95), ik.e(223), ik.e(238), ik.e(120), ik.e(239), ik.e(76), ik.e(119), ik.e(159)]).then((() => ik(40671))))), this.characterScene = new fk((() => Promise.all([ik.e(72), ik.e(230), ik.e(229), ik.e(250), ik.e(96), ik.e(251), ik.e(75), ik.e(74), ik.e(248), ik.e(73), ik.e(258), ik.e(252), ik.e(257), ik.e(255), ik.e(247), ik.e(272), ik.e(226), ik.e(242), ik.e(253), ik.e(256), ik.e(77), ik.e(188), ik.e(220), ik.e(95), ik.e(223), ik.e(238), ik.e(120), ik.e(239), ik.e(76), ik.e(119), ik.e(158)]).then((() => ik(40742)))))
      }
      openMob(kk) {
        return this.mobScene.run((ek => ek.openMobPreview(kk)))
      }
      openPet(kk) {
        return this.mobScene.run((ek => ek.openPetPreview(kk)))
      }
      openMobLineup(kk) {
        return this.mobScene.run((ek => ek.openMobLineupPreview(kk)))
      }
      openCharacter(kk, ek) {
        return this.characterScene.run((ik => ik.openCharacterPreview(kk, ek)))
      }
    }
    Dk.f.setDefaultHost((() => new Sk))
  },
  6505: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => fk,
      f: () => Sk
    });
    var Dk = ik(38);
    const fk = "shaderPack";
    async function Sk() {
      var kk;
      let ek = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (kk = await Dk.e.getItem(fk, ek)) && void 0 !== kk ? kk : null
    }
  },
  33693: (kk, ek, ik) => {
    function Dk(kk, ek) {
      return kk && !ek
    }
    ik.d(ek, {
      e: () => Dk
    })
  },
  33721: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => Sk
    });
    var Dk = ik(1046);

    function fk() {
      var kk, ek;
      return null !== (kk = null === (ek = screen.orientation) || void 0 === ek ? void 0 : ek.type) && void 0 !== kk ? kk : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const Sk = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && fk() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = fk(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, Dk.cH)(new Error("Game view size held for 60 s"))
        }), 6e4)
      }
      release() {
        clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
          if (document.hidden) document.addEventListener("visibilitychange", this.releaseWhenShown);
          else {
            this.holding = !1;
            for (const kk of this.resizers) kk()
          }
        }), 1e3)
      }
      heldSizer(kk) {
        let ek = !1;
        return () => {
          if (ek && this.isHeld()) return null;
          const ik = kk();
          return ek ||= null !== ik, ik
        }
      }
      onRelease(kk) {
        return this.resizers.add(kk), () => {
          this.resizers.delete(kk)
        }
      }
    }
  },
  8708: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => rk,
      e: () => Pk
    });
    var Dk = ik(22),
      fk = ik(1302),
      Sk = ik(99);
    const bk = {
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

    function rk() {
      return (0, Sk.isMobile)() && "function" === typeof navigator.vibrate
    }
    const Pk = new class {
      constructor(kk) {
        this.deps = kk, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(kk, ek) {
        var ik;
        if (!this.deps.enabled()) return;
        const Dk = bk[kk],
          fk = null !== ek && void 0 !== ek ? ek : Dk.pattern;
        if (null === fk) return void console.warn("No vibration pattern for", kk);
        const Sk = this.deps.now();
        Sk - this.lastAnyAt < 40 && Dk.priority < this.playingPriority || Sk - (null !== (ik = this.lastAt.get(kk)) && void 0 !== ik ? ik : -1 / 0) < Dk.minGapMs || Sk < this.playingUntil && Dk.priority < this.playingPriority || (this.lastAt.set(kk, Sk), this.lastAnyAt = Sk, this.playingUntil = Sk + fk.reduce(((kk, ek) => kk + ek), 0), this.playingPriority = Dk.priority, this.deps.vibrate(fk))
      }
    }({
      vibrate: kk => {
        navigator.vibrate([...kk])
      },
      now: () => performance.now(),
      enabled: () => rk() && Dk.b.get("isTouchScreen") && Dk.b.get("clientEscMenuOptions").vibration && !(0, fk.e)()
    })
  },
  33685: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => nk,
      i: () => xk
    });
    var Dk = ik(22),
      fk = ik(1659),
      Sk = ik(38),
      bk = ik(1333),
      rk = ik(3622),
      Pk = ik(1432),
      mk = ik(1371);
    const Mk = 2592e5,
      Kk = "notificationOptInLastPromptedAt";
    async function xk() {
      var kk;
      const ek = await nk();
      if (null === ek) return;
      const ik = null !== (kk = Sk.f.getItem(Kk)) && void 0 !== kk ? kk : 0;
      if (Date.now() - ik < Mk) return;
      if ((0, mk.d)()) return;
      const Dk = await bk.NotificationProvider.showPromptPopup({
        icon: "bell",
        title: "mobilePushNotifications:optInTitle",
        subtitle: fk.b.supports("notifications") ? "mobilePushNotifications:optInSubtitle" : "mobilePushNotifications:optInSubtitleBrowser",
        confirmText: "mobilePushNotifications:optInConfirm",
        cancelText: "mobilePushNotifications:optInCancel",
        padStartsOn: "cancel"
      }).getResult();
      "notificationTornDown" !== Dk && (Sk.f.setItem(Kk, Date.now()), (0, Pk.reportAnalyticsClick)({
        id: !0 === Dk ? "push.allow" : "push.deny",
        value: fk.b.supports("notifications") ? "app" : "browser"
      }), !0 === Dk && ek().catch((kk => {
        console.error("Failed to ask for push notifications:", kk)
      })))
    }
    async function nk() {
      return await fk.b.ready, fk.b.supports("notifications") ? Dk.b.get("mobilePushNotificationsCanAsk") ? async () => {
        fk.b.request("notifications.requestPermission", {}).then((kk => {
          let {
            canAsk: ek
          } = kk;
          Dk.b.set({
            mobilePushNotificationsCanAsk: ek
          })
        }), (kk => {
          console.error("The app couldn't ask for push notifications:", kk)
        }))
      }: null: await rk.b.canAsk() ? () => rk.b.requestPermission() : null
    }
  },
  33701: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => rk,
      h: () => Pk
    });
    var Dk = ik(22);
    const fk = 24,
      Sk = "farNametags",
      bk = 1e5;

    function rk() {
      var kk;
      return null === (kk = Dk.b.get("showDistantNametags")) || void 0 === kk || kk
    }

    function Pk() {
      var kk;
      return null !== (kk = function() {
        const kk = new URLSearchParams(window.location.search).get(Sk),
          ek = null === kk || "" === kk ? NaN : Number(kk);
        return Number.isFinite(ek) && ek >= 0 ? Math.min(ek, bk) : null
      }()) && void 0 !== kk ? kk : rk() ? 0 : fk
    }
  },
  33788: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => fk,
      e: () => bk
    });
    const Dk = [{
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

    function fk(kk) {
      let ek, ik = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof kk) {
        if (!Number.isFinite(kk)) return "0";
        if (Math.abs(kk) < 100) {
          const ek = kk < 0 ? "-" : "",
            ik = Math.abs(kk);
          return ik >= 10 ? `${ek}${ik.toFixed(1).replace(/\.0$/,"")}` : `${ek}${ik.toFixed(2).replace(/\.?0+$/,"")}`
        }
        ek = BigInt(Math.floor(kk))
      } else ek = kk;
      const fk = ek < 0n ? -ek : ek,
        Sk = ek < 0n ? "-" : "",
        bk = fk.toString();
      if (bk.length <= ik) return `${Sk}${bk}`;
      const rk = 3 * Math.floor((bk.length - 1) / 3);
      if (rk < 3) return `${Sk}${bk}`;
      if (rk > 3 * Dk.length) {
        const kk = bk[0],
          ek = bk.slice(1, 3).replace(/0+$/, "");
        return `${Sk}${ek?`${kk}.${ek}`:kk}e${bk.length-1}`
      }
      const {
        threshold: Pk,
        suffix: mk
      } = Dk[Dk.length - rk / 3], Mk = fk / Pk, Kk = Number(1000n * (fk % Pk) / Pk), xk = Number(Mk) + Kk / 1e3;
      let nk;
      return nk = xk >= 100 ? Math.floor(xk).toString() : xk >= 10 ? xk.toFixed(1).replace(/\.0$/, "") : xk.toFixed(2).replace(/\.?0+$/, ""), `${Sk}${nk}${mk}`
    }
    const Sk = Dk.map((kk => {
      let {
        threshold: ek,
        suffix: ik
      } = kk;
      return {
        threshold: Number(ek),
        suffix: ik
      }
    })).filter((kk => {
      let {
        threshold: ek
      } = kk;
      return Number.isFinite(ek)
    }));

    function bk(kk) {
      const ek = Math.abs(kk),
        ik = kk < 0 ? "-" : "";
      for (const {
          threshold: Dk,
          suffix: fk
        }
        of Sk)
        if (ek >= Dk) {
          const kk = ek / Dk;
          if (kk >= 1e3) return `${ik}${ek.toExponential(2).replace("e+","e")}`;
          let Sk;
          return Sk = kk >= 100 ? Math.floor(kk).toString() : kk >= 10 ? kk.toFixed(1).replace(/\.0$/, "") : kk.toFixed(2).replace(/\.?0+$/, ""), `${ik}${Sk}${fk}`
        } return `${ik}${ek}`
    }
  },
  33774: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Mk,
      f: () => xk,
      i: () => Kk,
      j: () => bk,
      k: () => mk,
      l: () => Pk
    });
    var Dk = ik(314);
    const fk = ["Wood Enchanting Table", "Stone Enchanting Table", "Iron Enchanting Table", "Gold Enchanting Table", "Diamond Enchanting Table"],
      Sk = {
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

    function bk(kk) {
      var ek;
      return null !== (ek = Sk[kk]) && void 0 !== ek ? ek : {
        translationKey: ""
      }
    }
    const rk = {
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

    function Pk(kk) {
      return fk.includes(kk)
    }

    function mk(kk) {
      var ek;
      return !0 === (null === kk || void 0 === kk || null === (ek = kk.customAttributes) || void 0 === ek ? void 0 : ek.cannotEnchant)
    }

    function Mk(kk, ek) {
      const {
        max: ik
      } = rk[kk].at(-1);
      return ek <= ik
    }

    function Kk(kk) {
      const ek = Math.sin(kk / 80),
        ik = kk => {
          if (kk <= 0) return 0;
          if (kk > 1) return 1;
          let ek = 0;
          const ik = [1, 7, 21, 35, 35, 21, 7, 1];
          for (let Dk = 0; Dk < ik.length; Dk++) {
            ek += (Dk % 2 === 0 ? 1 : -1) * ik[Dk] * Math.pow(kk, 2 + Dk) / (2 + Dk)
          }
          return 72 * ek
        },
        Dk = .3 - .78 * ek,
        fk = .5 - .78 * ek,
        Sk = .6 - .7 * ek,
        bk = .8 - .6 * ek;
      let rk = ik(Dk),
        Pk = ik(fk) - rk,
        mk = ik(Sk) - Pk - rk,
        Mk = ik(bk) - mk - Pk - rk;
      Dk < .041 && (Pk /= 1 - rk, mk /= 1 - rk, Mk /= 1 - rk, rk = 0), fk < .041 && (rk /= 1 - Pk, mk /= 1 - Pk, Mk /= 1 - Pk, Pk = 0), Sk < .041 && (rk /= 1 - mk, Pk /= 1 - mk, Mk /= 1 - mk, mk = 0), bk < .041 && (rk /= 1 - Mk, Pk /= 1 - Mk, mk /= 1 - Mk, Mk = 0);
      return {
        commonProb: rk,
        uncommonProb: Pk,
        rareProb: mk,
        epicProb: Mk,
        legendaryProb: 1 - (Mk + mk + Pk + rk)
      }
    }

    function xk(kk, ek) {
      const {
        min: ik,
        max: fk
      } = rk[kk][ek], Sk = Dk.c.sampleUniformIntDistribution(ik, fk, "includeMax");
      return {
        ...Kk(Sk),
        level: Sk
      }
    }
  },
  8611: (kk, ek, ik) => {
    function Dk(kk, ek) {
      return !kk.hidden && (ek || !kk.isRewardedAd)
    }

    function fk(kk) {
      return "object" === typeof kk ? kk.option : kk
    }

    function Sk(kk, ek) {
      var ik;
      if ("dropdown" === (null === (ik = kk.userInput) || void 0 === ik ? void 0 : ik.type) && "object" === typeof kk.userInput.dropdownOptions[0]) {
        for (const ik of kk.userInput.dropdownOptions)
          if (fk(ik) === ek) return "object" === typeof ik ? ik.cost : kk.cost;
        console.error("Didn't find matching option for dropdown item. Item:", kk, "input:", ek)
      }
      return kk.cost
    }

    function bk(kk, ek, ik) {
      var Dk;
      const fk = null !== (Dk = ik.excludedPlayers) && void 0 !== Dk ? Dk : [ek];
      return kk.filter((kk => !fk.includes(kk)))
    }
    ik.d(ek, {
      c: () => Sk,
      e: () => fk,
      i: () => bk,
      m: () => Dk
    })
  },
  33737: () => {},
  12544: kk => {
    kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAaUlEQVR4AWyOQQ6AIAwECwGNr/HkYzz4Hy9+WEkq01BDDCRDy3ZbGo9rU2c/V+1Bj9JOeW7RokaTBO0zpDxJXmYJKXjdohlwOqbWi4YaJFIgcYEIaGAT+JvHCDNQ8El9ziQz/BdzE00vAAAA//+cTXaSAAAABklEQVQDAHI9N5g1NM74AAAAAElFTkSuQmCC"
  },
  13760: kk => {
    kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAGBJREFUGJVNjjEOxEAIA+dW22Rpk2+nSndPZFtMewU6FBdIjJHx536+ABARUl7XCbjvyV9mJqX7BtY6RkS0t9bRc0op5ZuaGTAqtPZCpfG+AqSs8FFlulh7s6j7rh9d9wclFjd0V4Z2HAAAAABJRU5ErkJggg=="
  },
  15177: kk => {
    kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAbUlEQVR4nESOSwqAMAxEow0pive/gIcTBBdSsZh+NG20DlnkM8MLhnXuzHSnAwBaI8LIV2RXOiIkaGfMKfXGyByZparbyQZpGNUV/KaHGrWowZKVgSx8Qr8vzdXgAkYFCIn9mZP7E8pQ1Q9fzAMAAP//PTNTFgAAAAZJREFUAwAk1D9dXrbJngAAAABJRU5ErkJggg=="
  },
  15657: kk => {
    kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAE1JREFUGJVNjsEOwDAIQp/GZv3/j+xx5zVbsh0wZFxEImCsc88RRwHsB5OaI8SA636hjwosNXSUWuRTphxp5iahHX+pozQs+Yt0rU1SPg0CIfgDMgomAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);