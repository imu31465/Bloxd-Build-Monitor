export const id = 98;
export const ids = [98, 186];
export const modules = {
  9158: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      EverythingMenu: () => xx
    });
    var Yq = gq(57),
      lq = gq(1018),
      Oq = gq.n(lq),
      mq = gq(1183),
      xq = gq(1025),
      Aq = gq(2054),
      cq = gq(1422),
      uq = gq(1086),
      Bq = gq(1070);

    function Wq(qq) {
      let {
        items: Eq,
        link: gq,
        onClick: Yq,
        selectedItemId: lq,
        className: Wq,
        padStartsOnTab: Nq = !0
      } = qq;
      const {
        t: aq
      } = (0, mq.v)(), Vq = (0, uq.l)(), dq = [];
      for (const Oq of Eq) {
        var jq;
        const qq = dq[dq.length - 1];
        var Hq;
        if (qq && qq.title === (null !== (jq = Oq.section) && void 0 !== jq ? jq : null)) qq.items.push(Oq);
        else dq.push({
          title: null !== (Hq = Oq.section) && void 0 !== Hq ? Hq : null,
          items: [Oq]
        })
      }
      return (0, Bq.jsxs)("div", {
        className: Oq()("MenuSideBarBody", Wq),
        "data-pad-tabs": "2",
        children: [dq.map(((qq, Eq) => {
          var gq;
          return (0, Bq.jsxs)("div", {
            className: "MenuSideBarSection",
            children: [qq.title && (0, Bq.jsx)("div", {
              className: "MenuSideBarSectionTitle",
              children: aq(qq.title)
            }), qq.items.map((qq => {
              var Eq;
              const gq = !!qq.iconElement || !!qq.faIcon;
              return (0, Bq.jsxs)("div", {
                "data-pad-tab": !0,
                "data-pad-selected": lq === qq.id ? "true" : void 0,
                "data-pad-default-focus": Nq && lq === qq.id || void 0,
                className: Oq()("MenuSideBarBodyTab", {
                  ActiveMenuSideBarBodyTab: lq === qq.id
                }),
                onClick: () => {
                  Yq(qq.id)
                },
                children: [gq && (0, Bq.jsx)("div", {
                  className: "MenuSideBarBodyTabIcon",
                  children: null !== (Eq = qq.iconElement) && void 0 !== Eq ? Eq : (0, Bq.jsx)(xq.d, {
                    name: qq.faIcon
                  })
                }), (!Vq || !gq) && (0, Bq.jsx)("div", {
                  children: aq(qq.title)
                }), qq.redDot && (0, Bq.jsx)(Aq.d, {
                  top: "-0.2rem",
                  right: "-1rem"
                })]
              }, qq.id)
            }))]
          }, null !== (gq = qq.title) && void 0 !== gq ? gq : Eq)
        })), gq && (0, Bq.jsxs)("div", {
          ...(0, cq.V)(),
          "data-pad-destructive": !0,
          className: "MenuSideBarBodyTab MenuSideBarLink",
          onClick: gq.onClick,
          children: [(0, Bq.jsx)("div", {
            className: "MenuSideBarBodyTabIcon",
            children: (0, Bq.jsx)(xq.d, {
              name: gq.faIcon
            })
          }), (0, Bq.jsx)("div", {
            children: aq(gq.title)
          }), (0, Bq.jsx)(xq.d, {
            name: "arrow-right",
            className: "MenuSideBarLinkArrow"
          })]
        })]
      })
    }
    var Nq = gq(2907),
      aq = gq(1101),
      Vq = gq(2383),
      dq = gq(3018),
      jq = gq(96),
      Hq = gq(1904),
      oq = gq(2218),
      Pq = gq(2226),
      Qq = gq(1659),
      yq = gq(1326),
      tq = gq(4828),
      rq = gq(24),
      vq = gq(9160);

    function hq(qq) {
      let {
        setApplySettingsCallback: Eq
      } = qq;
      const {
        clientEscMenuOptions: gq
      } = (0, rq.j)(["clientEscMenuOptions"]), [lq, Oq] = (0, Yq.useState)(!1), [mq, xq] = (0, Yq.useState)(!1), [Aq, uq] = (0, Yq.useState)(6400), [Wq, Nq] = (0, Yq.useState)(3600), [aq, Vq] = (0, Yq.useState)(!1), [dq, jq] = (0, Yq.useState)(!1);

      function Hq(qq) {
        const Eq = "screenshot" === qq ? xq : Oq;
        Eq(!0);
        const gq = aq ? "normals" : dq ? "depth" : null;
        vq.devTools.downloadScene(qq, {
          width: Aq,
          height: Wq,
          colouring: gq
        }).catch((qq => {
          console.error("Couldn't download the scene", qq)
        })).finally((() => {
          Eq(!1)
        }))
      }
      return (0, Bq.jsxs)("div", {
        className: "DeveloperToolsCategory",
        children: [(0, Bq.jsx)(tq.d, {
          label: "Disable Ambient Occlusion",
          checked: gq.disableAmbientOcclusion,
          onClick: qq => {
            rq.b.setClientEscMenuOptions({
              disableAmbientOcclusion: qq
            }), Eq((() => tq.l))
          },
          circleInfoText: "Disables ambient occlusion which is the shadow effect that makes corners and crevices darker."
        }), vq.devTools.supports("ambientLight") && (0, Bq.jsx)(tq.h, {
          name: "Ambient Lighting Intensity",
          min: 0,
          max: 1,
          step: .01,
          initValue: gq.ambientLightIntensity,
          onChange: qq => {
            vq.devTools.setAmbientLightIntensity(qq).then((() => {
              rq.b.setClientEscMenuOptions({
                ambientLightIntensity: qq
              })
            })).catch((qq => {
              console.error("Couldn't set the ambient light", qq)
            }))
          },
          circleInfoText: "Sets the intensity of the white ambient light in the scene. The default is 0.5."
        }), vq.devTools.supports("weaponRaycasts") && (0, Bq.jsx)(tq.d, {
          label: "Show Weapon Raycasts",
          checked: gq.showWeaponRaycasts,
          onClick: qq => {
            rq.b.setClientEscMenuOptions({
              showWeaponRaycasts: qq
            })
          },
          circleInfoText: "Draws debug lines for the raw raycasts used by locally fired weapons."
        }), vq.devTools.supports("sceneDownload") && (0, Bq.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, Bq.jsxs)("div", {
            className: "SettingBox WarningBorder",
            children: [(0, Bq.jsx)(tq.d, {
              label: "Apply normal-based coloring",
              checked: aq,
              onClick: qq => {
                Vq(qq), qq && jq(!1)
              },
              circleInfoText: "Colors faces based on their normal direction (red=X, green=Y, blue=Z)."
            }), (0, Bq.jsx)(tq.d, {
              label: "Apply depth-based coloring",
              checked: dq,
              onClick: qq => {
                jq(qq), qq && Vq(!1)
              },
              circleInfoText: "Colors from white (near) to black (far) based on distance from camera. Only works for screenshot export."
            }), (0, Bq.jsxs)("div", {
              className: "SettingBox DeveloperToolsCategoryScreenshotSettings",
              children: [(0, Bq.jsx)("div", {
                className: "SettingLabel",
                children: "Screenshot size in pixels (width x height)"
              }), (0, Bq.jsx)(Qq.b, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (qq, Eq) => {
                  const gq = parseInt(qq) || 6400;
                  uq(gq)
                },
                placeholderText: "width",
                maxLength: 10,
                defaultValue: Aq.toString()
              }), (0, Bq.jsx)("span", {
                children: "X"
              }), (0, Bq.jsx)(Qq.b, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (qq, Eq) => {
                  const gq = parseInt(qq) || 3600;
                  Nq(gq)
                },
                placeholderText: "height",
                maxLength: 10,
                defaultValue: Wq.toString()
              })]
            }), (0, Bq.jsxs)("div", {
              className: "DeveloperToolsCategoryExportButtons",
              children: [(0, Bq.jsxs)(cq.g, {
                onClick: () => {
                  Hq("screenshot")
                },
                disabled: mq,
                children: [mq && (0, Bq.jsx)(yq.e, {}), "Download Screenshot"]
              }), (0, Bq.jsxs)(cq.g, {
                onClick: () => {
                  Hq("glb")
                },
                disabled: lq,
                children: [lq && (0, Bq.jsx)(yq.e, {}), "Download GLB"]
              })]
            })]
          }), (0, Bq.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: 'To download GLB of scene with textures you need to "Disable Block Texture Atlas" in graphic settings first (you will need to reload the page to apply the setting).'
          })]
        })]
      })
    }
    var nq = gq(136),
      bq = gq(1109),
      iq = gq(1195),
      Zq = gq(2916),
      fq = gq(1498),
      Mq = gq(1261),
      Tq = gq(1219),
      zq = gq(2990),
      Sq = gq(2020),
      pq = gq(1477),
      Gq = gq(307),
      Lq = gq(2235),
      Jq = gq(2250),
      kq = gq(2601),
      Rq = gq(1628),
      Uq = gq(2965),
      Fq = gq(2940),
      sq = gq(2992),
      Xq = gq(201);

    function wq(qq) {
      const {
        t: Eq,
        selectedLanguage: gq
      } = (0, mq.v)(), {
        userContext: lq
      } = (0, aq.c)(), {
        superRankInfo: Oq
      } = lq, xq = qq && ((0, Gq.Jc)(Oq) || lq.ranksMayChange) && (0, Jq.purchasesAllowed)(), {
        accountId: Aq,
        data: cq
      } = (0, kq.h)(Uq.c, xq);
      if ((0, Yq.useEffect)((() => {
          if (xq) return Uq.c.watchAccount(), Rq.c.addRefetchListener("billing", (qq => {
            "reconnected" === qq ? Uq.c.refreshAfterReconnect() : Uq.c.refresh()
          }))
        }), [xq]), !xq || !(0, Gq.Jc)(Oq) || null === cq || Aq !== lq.whamm) return null;
      const uq = function(qq, Eq, gq) {
        const Yq = sq.f[(0, sq.d)(sq.f, Eq)],
          lq = void 0 === Yq ? void 0 : (0, Xq.b)(qq.entitlements, Yq.entitlementId);
        return void 0 === lq || null === lq.expiresAt || (0, Fq.g)(lq) <= gq ? null : lq.willRenew && null === lq.billingIssueDetectedAt ? {
          renews: !0,
          at: Math.max(lq.expiresAt, gq)
        } : {
          renews: !1,
          at: (0, Fq.g)(lq)
        }
      }(cq, Oq.tier, Date.now());
      if (null === uq) return null;
      const Bq = uq.renews ? "store:renewsOn" : "store:endsOn";
      return Eq(Bq, {
        date: new Date(uq.at).toLocaleDateString((0, mq.h)(gq.code, Bq), {
          year: "numeric",
          month: "short",
          day: "numeric"
        })
      })
    }
    var Kq = gq(1341),
      Cq = gq(1207),
      Iq = gq(4721),
      eq = gq(1448),
      Dq = gq(3517),
      qE = gq(2201);

    function EE(qq) {
      let {
        showing: Eq
      } = qq;
      const {
        t: gq
      } = (0, mq.v)(), {
        data: Yq,
        failed: lq
      } = (0, kq.h)(Dq.d, Eq);
      return 0 === (null === Yq || void 0 === Yq ? void 0 : Yq.length) || null === Yq && !lq ? null : (0, Bq.jsxs)("div", {
        className: "SettingBox AccountSettingsPaymentHistory",
        children: [(0, Bq.jsx)("div", {
          className: "AccountSettingsLabel",
          children: gq("paymentHistory:title")
        }), null === Yq && lq && (0, Bq.jsx)("div", {
          className: "AccountSettingsPaymentHistoryError",
          children: gq("paymentHistory:loadFailed")
        }), null !== Yq && (0, Bq.jsx)("ul", {
          className: "PaymentHistoryList",
          children: Yq.map((qq => (0, Bq.jsxs)("li", {
            className: "PaymentHistoryEntry",
            children: [(0, Bq.jsx)(qE.e, {
              entry: qq
            }), (0, Bq.jsxs)("div", {
              className: "PaymentHistoryEntryText",
              children: [(0, Bq.jsx)("div", {
                children: (0, qE.j)(gq, qq)
              }), (0, Bq.jsxs)("div", {
                className: "PaymentHistoryEntryDate",
                children: [new Date(qq.at).toLocaleDateString(), "number" === typeof qq.orderId && ` \xb7 ${gq("paymentHistory:order",{orderId:qq.orderId})}`]
              })]
            })]
          }, (0, Dq.b)(qq))))
        })]
      })
    }
    var gE = gq(1864),
      YE = gq(1234),
      lE = gq(1336),
      OE = gq(1298),
      mE = gq(1758),
      xE = gq(2929);
    async function AE() {
      try {
        return function(qq) {
          const Eq = new Map;
          for (const {
              store: gq,
              status: Yq,
              autoRenewStatus: lq,
              managementUrl: Oq
            }
            of Object.values(qq.subscriptions)) !(0, Fq.j)(gq) || (0, Fq.m)(Yq) || "willNotRenew" === lq || Eq.has(gq) || Eq.set(gq, null !== Oq && void 0 !== Oq ? Oq : Fq.p[gq]);
          return Array.from(Eq, (qq => {
            let [Eq, gq] = qq;
            return {
              store: Eq,
              managementUrl: gq
            }
          }))
        }(await (0, mE.k)((0, xE.d)().getCustomerInfo(), 5e3, "CustomerInfo got no answer in 5 s"))
      } catch (qq) {
        return console.error("Billing: loading CustomerInfo for the player's store subscriptions failed:", qq), null
      }
    }
    var cE = gq(296),
      uE = gq(2454);
    const BE = {
      appStore: {
        name: "App Store",
        ...cE.Pb.appStore
      },
      googlePlay: {
        name: "Google Play",
        ...cE.Pb.googlePlay
      },
      discord: {
        name: "Discord",
        ...cE.Pb.discord
      }
    };

    function WE(qq) {
      let {
        warning: Eq,
        subscriptions: gq
      } = qq;
      const {
        t: Yq
      } = (0, mq.v)();
      return null !== gq && 0 === gq.length ? (0, Bq.jsx)(Bq.Fragment, {
        children: Yq(Eq)
      }) : (0, Bq.jsxs)("div", {
        className: "DeleteAccountSubtitle",
        children: [Yq(Eq), null === gq && (0, Bq.jsx)("div", {
          className: "DeleteAccountSubtitleNote",
          children: Yq("auth:deleteAccountSubscriptionsLoadFailed")
        }), null !== gq && (0, Bq.jsxs)(Bq.Fragment, {
          children: [(0, Bq.jsx)("div", {
            className: "DeleteAccountSubtitleNote",
            children: Yq("auth:deleteAccountStoreSubscriptions")
          }), (0, Bq.jsx)(uE.e, {
            className: "DeleteAccountSubtitleLinks",
            links: gq.map((qq => {
              let {
                store: Eq,
                managementUrl: gq
              } = qq;
              return {
                ...BE[Eq],
                url: gq
              }
            }))
          })]
        })]
      })
    }

    function NE(qq) {
      let {
        showing: Eq
      } = qq;
      const {
        userContext: gq,
        isUserContextUpdating: lq
      } = (0, aq.c)(), {
        t: Oq
      } = (0, mq.v)(), [xq, Aq] = (0, Yq.useState)(!1), [uq, Wq] = (0, Yq.useState)(null), Nq = (0, Yq.useRef)(Eq);
      (0, Yq.useEffect)((() => (Nq.current = Eq, () => {
        Nq.current = !1
      })), [Eq]);
      const Vq = lq || xq;
      async function dq() {
        const qq = function(qq) {
            if ((0, nq.c)()) return "auth:discordActivityDeleteAccountLossWarning";
            return qq ? "auth:deleteAccountLossWarning" : "auth:deleteGuestAccountWarning"
          }(gq.isLoggedIn()),
          Eq = (0, gE.c)(gq.availableUserContextTypes) ? await AE() : [];
        if (!Nq.current) return YE.b.ok();
        if (!0 !== await lE.NotificationProvider.showPromptPopup({
            title: "auth:deleteAccountPopupTitleNamed",
            textOpts: {
              title: {
                playerName: (0, Mq.e)(gq.getPlayerName(), !jq.featureFlags.canSeeRealPlayerNames)
              }
            },
            subtitle: (0, Bq.jsx)(WE, {
              warning: qq,
              subscriptions: Eq
            }),
            confirmText: "auth:deleteAccount",
            destructive: !0,
            confirmTooltip: "auth:deleteAccountPopupConfirmTooltip",
            cancelText: "general:cancel",
            cancelTooltip: "auth:deleteAccountPopupCancelTooltip"
          }).getResult()) return YE.b.ok();
        const Yq = await (0, bq.postJsonWithMetricsCookiesAndJsonResponse)(`${iq.clientSideServerUrls.indexUrl}/index/metrics/revoke-cookies`, {
          gameState: rq.b.get("gameState")
        }, {
          retries: 3
        }, gq.getMetricsCookies());
        if (Yq.error) return YE.b.error(Yq.error);
        if ((0, nq.c)()) {
          (await OE.q.discordActivity()).exit("User deleted their account")
        }
        return (0, bq.forgetStoredGuestAccount)(gq.whamm), (0, bq.forceGlobalSignOut)(!0), YE.b.ok()
      }
      return (0, Bq.jsxs)("div", {
        className: "AccountSettingsDeleteAccountButtonContainer",
        children: [(0, Bq.jsxs)(cq.K, {
          onClick: async function() {
            if (!xq) {
              Aq(!0);
              try {
                const qq = await dq(),
                  Eq = qq.isError() ? qq.asError().message : null;
                Wq(Eq)
              } catch (qq) {
                console.error("Failed to delete account:", qq), Wq(Oq("auth:genericDeleteAccountError"))
              }
              Aq(!1)
            }
          },
          className: "AccountSettingsDeleteAccountButton",
          disabled: Vq,
          children: [Vq && (0, Bq.jsx)("div", {
            className: "DeletingAccountLoader",
            children: (0, Bq.jsx)(yq.e, {})
          }), Oq("auth:deleteAccount")]
        }), uq && (0, Bq.jsx)("div", {
          className: "DeleteAccountError",
          children: uq
        })]
      })
    }
    var aE = gq(3466),
      VE = gq(3476),
      dE = gq(3471);

    function jE(qq) {
      let {
        showing: Eq
      } = qq;
      const {
        t: gq
      } = (0, mq.v)(), {
        data: Yq,
        failed: lq
      } = (0, kq.h)(aE.d, Eq), Oq = null === Yq ? null : (0, aE.h)(Yq);
      return (0, Bq.jsxs)("div", {
        className: "SettingBox BlockedAndIgnoredPlayers",
        children: [(0, Bq.jsx)("div", {
          className: "AccountSettingsLabel",
          children: gq("settingsMenu:blockedAndIgnoredPlayers")
        }), null === Oq && !lq && (0, Bq.jsx)(yq.e, {}), null === Oq && lq && (0, Bq.jsxs)("div", {
          className: "BlockedAndIgnoredPlayersError",
          children: [gq("settingsMenu:blockedAndIgnoredPlayersLoadFailed"), (0, Bq.jsx)(cq.g, {
            className: "SmallTextLight",
            onClick: () => {
              aE.d.refresh()
            },
            children: gq("general:tryAgain")
          })]
        }), 0 === (null === Oq || void 0 === Oq ? void 0 : Oq.length) && (0, Bq.jsx)("div", {
          className: "BlockedAndIgnoredPlayersEmpty",
          children: gq("settingsMenu:noBlockedOrIgnoredPlayers")
        }), null !== Oq && Oq.length > 0 && (0, Bq.jsx)("ul", {
          className: "BlockedAndIgnoredPlayersList",
          children: Oq.map((qq => {
            let {
              name: Eq,
              exclusion: Yq
            } = qq;
            const lq = dE.e[Yq];
            return (0, Bq.jsxs)("li", {
              className: "BlockedAndIgnoredPlayer",
              children: [(0, Bq.jsx)("div", {
                className: "BlockedAndIgnoredPlayerName",
                children: Eq
              }), (0, Bq.jsx)(cq.i, {
                className: "SmallTextLight",
                onClick: () => {
                  (0, VE.g)(lq, Eq, {
                    chatMessage: null
                  })
                },
                children: gq(dE.f[lq].text)
              })]
            }, Eq)
          }))
        })]
      })
    }
    const HE = (0, Yq.memo)((function(qq) {
      var Eq;
      let {
        showing: gq,
        inGame: lq
      } = qq;
      const {
        t: Aq,
        selectedLanguage: uq
      } = (0, mq.v)(), {
        hideSocialLocationFrom: Wq
      } = (0, rq.j)(["hideSocialLocationFrom"]), Vq = (0, Nq.c)(), {
        userContext: dq,
        isUserContextUpdating: Hq
      } = (0, aq.c)(), [oq, Pq] = (0, Yq.useState)(null !== (Eq = dq.getPlayerName()) && void 0 !== Eq ? Eq : ""), [vq, hq] = (0, Yq.useState)(null), {
        purchasing: kq,
        outcome: Rq,
        purchase: Uq
      } = (0, Zq.c)("/super-rank-welcome"), Fq = (0, Gq.nc)((0, mq.h)(uq.code, "general:timeLeft"), dq.superRankInfo), sq = wq(gq), Xq = Fq ? Aq("general:timeLeft", {
        time: Fq
      }) : sq, [Dq, qE] = (0, Yq.useState)(!1), [gE, YE] = (0, Yq.useState)(!1), lE = (0, Yq.useRef)(null), OE = (0, Yq.useRef)(null), mE = (0, Sq.e)({
        showProgressUpdateMessage: !0,
        enabled: !0
      }), xE = null === mE, AE = null !== mE && void 0 !== mE ? mE : [], cE = dq !== bq.NULL_USER_CONTEXT && !dq.isLoggedIn(), uE = cE && 0 !== (null === mE || void 0 === mE ? void 0 : mE.length), [BE, WE] = (0, Yq.useState)([]), [aE, VE] = (0, Yq.useState)(!1), dE = dq.playerHasRank("youtuber"), HE = (0, Yq.useCallback)((() => pq.e.getPlayerProfile(dq, {
        lowerCaseName: dq.getPlayerName().toLowerCase()
      }).then((qq => {
        WE(qq.socialLinks)
      })).catch((qq => {
        console.error("Failed to refresh social links", qq)
      }))), [dq]);

      function PE(qq) {
        qq !== oq && ((0, Mq.r)(qq) ? (qq = (0, Mq.t)(qq), hq("Only letters, numbers, and _")) : hq(null), lE.current && (lE.current.value = qq), Pq(qq))
      }
      return (0, Yq.useEffect)((() => (!0 === gq ? (clearInterval(OE.current), OE.current = setInterval(Vq, 1e3)) : clearInterval(OE.current), () => {
        clearInterval(OE.current)
      })), [gq, Vq]), (0, Yq.useEffect)((() => {
        var qq;
        Pq(null !== (qq = dq.getPlayerName()) && void 0 !== qq ? qq : "")
      }), [dq]), (0, Yq.useEffect)((() => {
        if (!gq || !dE || Hq) return;
        let qq = !1;
        return VE(!0), WE([]), pq.e.getPlayerProfile(dq, {
          lowerCaseName: dq.getPlayerName().toLowerCase()
        }).then((Eq => {
          qq || WE(Eq.socialLinks)
        })).catch((qq => {
          console.error("Failed to load social links", qq)
        })).finally((() => {
          qq || VE(!1)
        })), () => {
          qq = !0
        }
      }), [gq, dE, Hq, dq]), (0, Bq.jsxs)("div", {
        className: Oq()("SettingsMenuRightInner AccountSettings", {
          AccountSettingsLocked: lq
        }),
        children: [lq && (0, Bq.jsx)("div", {
          className: "AccountSettingsInGameWarning",
          children: Aq("settingsMenu:accountSettingsInGameWarning")
        }), (0, Bq.jsxs)("div", {
          className: "SettingBox SetAccountNameDiv SmallTextLight",
          children: [(0, Bq.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsNameLabel",
            children: [Aq("homePage:discordNamePopupTitle"), (0, Bq.jsxs)(fq.LinkPreserveSearch, {
              className: "AccountSettingsViewProfile",
              to: (0, Tq.d)({
                name: dq.getPlayerName()
              }),
              onClick: () => {
                rq.b.set({
                  openEverythingMenuName: null
                })
              },
              children: [(0, Bq.jsx)(xq.d, {
                name: "arrow-up-right-from-square"
              }), " ", Aq("profileCard:viewProfile")]
            })]
          }), (0, Bq.jsxs)("div", {
            className: "EnterAccNameDivWrapper",
            "data-pad-initial-area": !0,
            children: [(0, Bq.jsxs)("div", {
              className: "EnterAccNameInputRow",
              children: [jq.featureFlags.canChangeName && (0, Bq.jsx)(Qq.b, {
                className: "EnterName",
                placeholderText: Aq("homePage:enterName"),
                maxLength: Mq.l,
                defaultValue: oq,
                onValueChange: qq => {
                  PE(qq)
                },
                forcedText: Dq || !jq.featureFlags.canChangeName ? oq : null,
                blurOnEnter: !0,
                domRef: lE
              }), (0, Bq.jsx)(cq.g, {
                className: "ChooseRandomNameButton",
                onClick: () => {
                  PE((0, Mq.h)())
                },
                children: (0, Bq.jsx)(xq.d, {
                  name: "dice",
                  className: "ChooseRandomNameIcon"
                })
              }), !jq.featureFlags.canChangeName && (0, Bq.jsx)("div", {
                className: "EnterName NoInput",
                children: (0, Mq.e)(oq, !jq.featureFlags.canSeeRealPlayerNames)
              })]
            }), (0, Bq.jsx)(cq.g, {
              className: "ChooseNameButton",
              disabled: Dq || oq === dq.getPlayerName(),
              onClick: () => {
                oq.length < Mq.n ? hq(Aq("homePage:changeNameMinLengthError", {
                  length: Mq.n
                })) : oq.length > Mq.l ? hq(Aq("homePage:changeNameMaxLengthError", {
                  length: Mq.l
                })) : (qE(!0), hq(null), async function(qq, Eq, gq, Yq) {
                  const lq = await (0, bq.postJsonWithMetricsCookiesAndJsonResponse)(`${iq.clientSideServerUrls.indexUrl}/index/name/update`, {
                    name: qq
                  }, {
                    retries: 3
                  }, Eq.getMetricsCookies()).catch((qq => (console.error("Bad response from the server when trying to update name:", qq), {
                    err: "An error occurred trying to change your name! Please report on discord what steps you took to get this error message."
                  })));
                  lq.err ? (console.error("Error when trying to get with new name from DB", lq.err), Yq(lq.err)) : !0 === lq.nameExists ? Yq("Name is already taken") : gq(qq)
                }(oq, dq, (qq => {
                  dq.setPlayerName(qq), qE(!1)
                }), (qq => {
                  hq(qq), qE(!1)
                })))
              },
              children: Aq("general:choose")
            })]
          }), vq && (0, Bq.jsx)("div", {
            className: "ChooseAccNameError",
            children: vq
          })]
        }), (0, Bq.jsx)(tq.d, {
          label: (() => {
            if ((0, Cq.l)(Wq)) {
              const qq = (0, mq.h)(uq.code, "general:timeLeft"),
                Eq = (0, Gq.lb)(qq, Date.now(), Wq + Cq.k);
              return `${Aq("settingsMenu:hideSocialLocation")} (${Aq("general:timeLeft",{time:Eq})})`
            }
            return Aq("settingsMenu:hideSocialLocation")
          })(),
          onClick: () => {
            const qq = !(0, Cq.l)(Wq);
            (0, eq.reportAnalyticsClick)({
              id: "social.hide_location",
              value: qq ? "on" : "off"
            }), YE(!0), pq.e.setHideSocialLocation(dq, qq).then((() => {
              rq.b.set({
                hideSocialLocationFrom: qq ? Date.now() : null
              })
            })).finally((() => {
              YE(!1)
            }))
          },
          checked: (0, Cq.l)(Wq),
          disabled: gE
        }), dE && (0, Bq.jsxs)("div", {
          className: "SettingBox AccountSettingsSocialLinks",
          children: [(0, Bq.jsx)("div", {
            className: "AccountSettingsLabel",
            children: Aq("settingsMenu:socialLinks")
          }), aE && (0, Bq.jsx)(yq.e, {}), !aE && (0, Bq.jsx)(Iq.d, {
            socialLinks: BE,
            editable: !0,
            userContext: dq,
            onLinksUpdated: HE
          })]
        }), (0, Bq.jsxs)("div", {
          className: "SettingBox",
          children: [(0, Bq.jsx)("div", {
            className: "AccountSettingsLabel",
            children: Aq(uE ? "auth:loginOrSwitchAccount" : "auth:login")
          }), xE && (0, Bq.jsx)(yq.e, {}), !xE && 0 === AE.length && (0, Bq.jsx)("div", {
            className: "NoLoginOptions",
            children: Aq("auth:noLoginOptions")
          }), !xE && AE.length > 0 && "crazygames" !== nq.n && (0, Bq.jsx)("div", {
            className: "AccountSettingsLoginButtons",
            children: AE
          }), !xE && AE.length > 0 && "crazygames" === nq.n && (0, Bq.jsxs)("div", {
            className: "AccountSettingsLoginButtons",
            children: [AE[0], AE.length > 1 && (0, Bq.jsxs)(Bq.Fragment, {
              children: [(0, Bq.jsxs)("div", {
                className: "LegacyLoginOptionsHeader",
                children: [(0, Bq.jsx)("span", {
                  className: "LegacyLoginOptionsTitle",
                  children: Aq("auth:legacyLoginOptions")
                }), (0, Bq.jsx)(Kq.c, {
                  className: "LegacyLoginOptionsInfoIcon",
                  hoverInfo: Aq("auth:legacyLoginOptionsInfo")
                })]
              }), (0, Bq.jsx)("div", {
                className: "LegacyAccountSettingsLoginButtons",
                children: AE.slice(1)
              })]
            })]
          }), jq.featureFlags.useLogin && (null !== dq.loggedInInfo || dq.isLoggedIn()) && (0, Bq.jsxs)(Bq.Fragment, {
            children: [(0, Bq.jsx)("div", {
              className: "AccountSettingsLoginDivider"
            }), (0, Bq.jsxs)(cq.K, {
              onClick: () => {
                (0, bq.forceGlobalSignOut)()
              },
              className: "AccountSettingsSignedInButton",
              children: [(0, Bq.jsx)(xq.d, {
                name: "right-from-bracket"
              }), Aq("auth:signOut")]
            })]
          })]
        }), !dq.playerHasRank("super") && (0, Jq.purchasesAllowed)() && (0, Bq.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, Bq.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: [(0, Bq.jsx)(xq.d, {
              name: "bolt"
            }), Aq("homePage:superRank")]
          }), (0, Bq.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [(0, Bq.jsxs)(cq.p, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, Lq.n)({
                  mode: "self",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, Bq.jsx)(xq.d, {
                name: "bolt"
              }), Aq("homePage:getSuperRank")]
            }), (0, Bq.jsxs)(cq.p, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, Lq.n)({
                  mode: "gift",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, Bq.jsx)(xq.d, {
                name: "bolt"
              }), Aq("homePage:giftSuperRank")]
            })]
          })]
        }), dq.playerHasRank("super") && (0, Bq.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, Bq.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: [(0, Bq.jsx)(xq.d, {
              name: "bolt"
            }), Aq("homePage:superRank"), Xq && (0, Bq.jsxs)("div", {
              className: "AccountSettingsSuperRankTimeLeft",
              children: ["(", Xq, ")"]
            })]
          }), (0, Jq.purchasesAllowed)() && (0, Bq.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [!(0, Gq.Jc)(dq.superRankInfo) && (0, Bq.jsxs)(cq.p, {
              className: "AccountSettingsSuperRankProlong",
              loading: kq,
              onClick: () => {
                Uq(zq.n.id, null)
              },
              children: [(0, Bq.jsx)(xq.d, {
                name: "bolt"
              }), Aq("settingsMenu:getSuperRankAdditionalDaysPremiumCurrency", {
                days: zq.n.product.days,
                price: zq.n.price
              })]
            }), (0, Bq.jsxs)(cq.p, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, Lq.n)({
                  mode: "gift",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, Bq.jsx)(xq.d, {
                name: "bolt"
              }), Aq("homePage:giftSuperRank")]
            })]
          }), Rq && (0, Bq.jsx)("div", {
            className: "AccountSettingsSuperRankProlongError SmallTextBold",
            children: Aq(Rq.translationKey)
          })]
        }), (0, Bq.jsx)(EE, {
          showing: gq
        }), jq.featureFlags.useSocialFeatures && (0, Bq.jsx)(jE, {
          showing: gq
        }), (0, Bq.jsxs)("div", {
          className: "SettingBoxGroup AccountSettingsDeleteAccountGroup",
          children: [(0, Bq.jsxs)("div", {
            className: "SettingBox AccountSettingsDeleteAccount SettingBoxWarning",
            children: [(0, Bq.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: Aq(oE(cE, uE))
            }), (0, nq.c)() && (0, Bq.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: Aq("auth:discordActivityKickWarning")
            }), (0, Bq.jsx)(NE, {
              showing: gq
            })]
          }), (0, Bq.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: Aq("auth:deleteAccountWarning")
          })]
        })]
      })
    }));

    function oE(qq, Eq) {
      return qq ? Eq ? "auth:deleteGuestAccountButtonTitle" : "auth:deleteGuestAccountWarning" : "auth:deleteAccountButtonTitle"
    }
    var PE = gq(9176),
      QE = gq(3040),
      yE = gq(1241),
      tE = gq(1405);
    const rE = (0, Yq.memo)((function(qq) {
        let {
          inGame: Eq
        } = qq;
        const {
          t: gq,
          selectedLanguage: Yq
        } = (0, mq.v)(), {
          clientEscMenuOptions: lq,
          showDebugOverlay: Oq
        } = (0, rq.j)(["clientEscMenuOptions", "showDebugOverlay"]), xq = (0, Vq.h)("hideCoordinates");
        let Aq = "settingsMenu:showCoordinates",
          cq = "settingsMenu:showChunkCoordinates";

        function uq(qq) {
          const Eq = new Intl.DisplayNames([qq], {
            type: "language"
          }).of(qq);
          return Eq.charAt(0).toUpperCase() + Eq.slice(1)
        }
        return xq && (Aq = "settingsMenu:showCoordinatesHidden", cq = "settingsMenu:showChunkCoordinatesHidden"), (0, Bq.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [Eq && jq.featureFlags.canUseInviteLinks && (0, Bq.jsxs)("div", {
            className: "SettingBox",
            children: [(0, Bq.jsx)("div", {
              className: "SettingsMenuInviteHeader",
              children: gq("settingsMenu:inviteLink")
            }), (0, Bq.jsx)(PE.e, {})]
          }), (0, Bq.jsxs)("div", {
            className: "SettingBox",
            children: [(0, Bq.jsx)("div", {
              className: "SliderText",
              style: {
                marginBottom: "10px"
              },
              children: gq("settingsMenu:language")
            }), (0, Bq.jsx)(QE.d, {
              options: Object.entries(mq.f).map((qq => {
                let [Eq, gq] = qq;
                return {
                  label: (0, Bq.jsxs)("div", {
                    className: "SettingsMenuLanguageOption",
                    children: [(0, Bq.jsx)("img", {
                      src: gq.flagImg,
                      alt: "flag"
                    }), (0, Bq.jsxs)("span", {
                      children: [uq(Eq), " ", (0, Bq.jsxs)("span", {
                        className: "SettingsMenuLanguageOptionCode",
                        children: ["(", Eq, ")"]
                      })]
                    })]
                  }),
                  value: Eq
                }
              })),
              value: Yq.code,
              onChange: qq => {
                yE.h.get().setCurrentLanguage(qq.value)
              }
            })]
          }), !(0, jq.isMobileApp)() && (0, tE.d)() && jq.featureFlags.useForceRotateForceFullscreenOverlay && (0, Bq.jsx)(tq.d, {
            label: gq("settingsMenu:disableFullscreenMode"),
            checked: lq.disableFullscreen,
            onClick: qq => {
              rq.b.setClientEscMenuOptions({
                disableFullscreen: qq
              })
            }
          }), (0, Bq.jsx)(tq.d, {
            label: gq(Aq),
            checked: lq.showCoordinates,
            onClick: qq => {
              rq.b.setClientEscMenuOptions({
                showCoordinates: qq
              })
            },
            disabled: xq
          }), (0, Bq.jsx)(tq.d, {
            label: gq(cq),
            checked: lq.showChunkCoordinates,
            onClick: qq => {
              rq.b.setClientEscMenuOptions({
                showChunkCoordinates: qq
              })
            },
            disabled: xq
          }), (0, Bq.jsx)(tq.d, {
            label: gq("settingsMenu:showFps"),
            checked: lq.showFPS,
            onClick: qq => {
              rq.b.setClientEscMenuOptions({
                showFPS: qq
              })
            }
          }), (0, Bq.jsx)(tq.d, {
            label: gq("settingsMenu:disableBunnyHopping"),
            checked: lq.disableBunnyHopping,
            onClick: qq => {
              rq.b.setClientEscMenuOptions({
                disableBunnyHopping: qq
              })
            }
          }), (0, OE.F)() && (0, Bq.jsx)(tq.d, {
            label: gq("settingsMenu:showChat"),
            checked: lq.showChat,
            onClick: qq => {
              rq.b.setClientEscMenuOptions({
                showChat: qq
              })
            }
          }), (0, Bq.jsx)(tq.d, {
            label: gq("settingsMenu:showDebugOverlay"),
            checked: Oq,
            onClick: qq => {
              rq.b.set({
                showDebugOverlay: qq
              })
            }
          }), jq.featureFlags.useSocialFeatures && (0, Bq.jsx)(tq.d, {
            label: gq("settingsMenu:showFriendOnlineToasts"),
            checked: lq.showFriendOnlineToasts,
            onClick: qq => {
              rq.b.setClientEscMenuOptions({
                showFriendOnlineToasts: qq
              })
            }
          }), (0, Bq.jsx)(tq.d, {
            label: gq("settingsMenu:showNewItemIndicator"),
            checked: lq.showNewItemIndicator,
            onClick: qq => {
              rq.b.setClientEscMenuOptions({
                showNewItemIndicator: qq
              })
            }
          })]
        })
      })),
      vE = (0, Yq.memo)((function() {
        const {
          t: qq
        } = (0, mq.v)(), {
          soundVolume: Eq,
          musicVolume: gq
        } = (0, rq.j)(["soundVolume", "musicVolume"]);
        return (0, Bq.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [(0, Bq.jsx)(tq.h, {
            name: qq("settingsMenu:musicVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: gq,
            onChange: qq => {
              rq.b.set({
                musicVolume: Math.round(100 * qq) / 100
              })
            },
            format: qq => qq.toFixed(2)
          }), (0, Bq.jsx)(tq.h, {
            name: qq("settingsMenu:soundEffectsVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: Eq,
            onChange: qq => {
              rq.b.set({
                soundVolume: Math.round(100 * qq) / 100
              })
            },
            format: qq => qq.toFixed(2)
          })]
        })
      }));
    var hE = gq(687),
      nE = gq(1416),
      bE = gq(3531),
      iE = gq(9178),
      ZE = gq(3369);
    const fE = {
      app: "notificationSettings:pushTargetsApp",
      browser: "notificationSettings:pushTargetsBrowser",
      msnPlay: "notificationSettings:pushTargetsMsnPlay"
    };

    function ME() {
      const {
        t: qq
      } = (0, mq.v)(), Eq = (0, ZE.c)(), {
        mobilePushNotificationsCanAsk: gq
      } = (0, rq.j)(["mobilePushNotificationsCanAsk"]), [lq, Oq] = (0, Yq.useState)(null), [xq, Aq] = (0, Yq.useState)(!1), [uq, Wq] = (0, Yq.useState)(null), [Nq, aq] = (0, Yq.useState)(!1), Vq = (0, Yq.useCallback)((() => {
        (0, bE.e)().then((qq => {
          Eq.current && (Oq(qq), Aq(!1))
        })).catch((qq => {
          console.error("Failed to load push notification targets:", qq), Eq.current && Aq(!0)
        }))
      }), [Eq]), dq = (0, Yq.useCallback)((() => {
        (0, iE.d)().then((qq => {
          Eq.current && Wq((() => qq))
        }))
      }), [Eq]);
      (0, Yq.useEffect)((() => {
        Vq()
      }), [Vq]), (0, Yq.useEffect)((() => {
        dq()
      }), [dq, gq]), (0, nE.f)(bE.k, Vq);
      const jq = null === lq ? [] : Object.keys(fE).filter((qq => lq[qq] > 0));
      return (0, Bq.jsxs)("div", {
        className: "SettingBox PushNotificationSettings",
        children: [(0, Bq.jsx)("div", {
          className: "SliderText",
          children: qq("notificationSettings:pushNotifications")
        }), null === lq && xq && (0, Bq.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: qq("notificationSettings:pushTargetsLoadFailed")
        }), null !== lq && 0 === jq.length && (0, Bq.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: qq("notificationSettings:pushTargetsNone")
        }), jq.length > 0 && (0, Bq.jsx)("ul", {
          className: "PushNotificationSettingsTargets",
          children: jq.map((Eq => {
            var gq;
            return (0, Bq.jsx)("li", {
              children: qq(fE[Eq], {
                count: null !== (gq = null === lq || void 0 === lq ? void 0 : lq[Eq]) && void 0 !== gq ? gq : 0
              })
            }, Eq)
          }))
        }), null !== uq && (0, Bq.jsx)(cq.g, {
          className: "PushNotificationSettingsButton",
          loading: Nq,
          onClick: () => {
            aq(!0), uq().catch((qq => {
              console.error("Failed to turn on push notifications:", qq)
            })).finally((() => {
              Eq.current && (aq(!1), dq())
            }))
          },
          children: qq("notificationSettings:pushTurnOn")
        })]
      })
    }
    const TE = {
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
      zE = (0, Yq.memo)((function() {
        const {
          t: qq
        } = (0, mq.v)(), {
          clientEscMenuOptions: Eq
        } = (0, rq.j)(["clientEscMenuOptions"]);
        return (0, Bq.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [(0, Bq.jsx)(tq.f, {
            label: qq("notificationSettings:friendRequests"),
            options: hE.e.map((Eq => ({
              value: Eq,
              label: qq(TE[Eq].label)
            }))),
            value: Eq.friendRequestNotifications,
            onChange: qq => {
              rq.b.setClientEscMenuOptions({
                friendRequestNotifications: qq
              })
            },
            circleInfoText: (0, Bq.jsx)("div", {
              className: "NotificationSettingLevelsInfo",
              children: hE.e.map((Eq => (0, Bq.jsxs)("div", {
                children: [(0, Bq.jsx)("b", {
                  children: qq(TE[Eq].label)
                }), ": ", qq(TE[Eq].info)]
              }, Eq)))
            })
          }), (0, Bq.jsx)(ME, {})]
        })
      }));
    var SE = gq(4334),
      pE = gq(190),
      GE = gq(275),
      LE = gq(6535),
      JE = gq(3324),
      kE = gq(9185),
      RE = gq(598),
      UE = gq(31);
    var FE = gq(611),
      sE = gq(38),
      XE = gq(4201);
    const wE = new Map([
      ["chunkHorizAddDist", "horizontal"],
      ["chunkVertAddDist", "vertical"]
    ]);

    function KE(qq) {
      return wE.has(qq) ? Hq.gameBridge.lookup("Gy", null) : null
    }

    function CE(qq) {
      if (!(0, RE.H)(rq.b.get("clientEscMenuOptions")[qq])) return rq.b.get("clientEscMenuOptions")[qq];
      const Eq = KE(qq);
      return null !== Eq ? Eq[wE.get(qq)] : sE.i.getItem(qq)
    }

    function IE(qq, Eq) {
      if ("useTouchControls" === qq) return void(0, XE.e)(Eq);
      qq in rq.b.get("clientEscMenuOptions") && rq.b.setClientEscMenuOptions({
        [qq]: Eq
      });
      const gq = KE(qq);
      null !== gq && Hq.gameBridge.send("setChunkAddDistance", {
        ...gq,
        [wE.get(qq)]: Eq
      }), sE.i.setItem(qq, Eq)
    }
    var eE = gq(4248),
      DE = gq(9189),
      qg = gq(9191),
      Eg = gq(4325);

    function gg(qq) {
      var Eq, lq, xq, Aq;
      let {
        minChunkAddDist: cq,
        getValue: uq,
        onChange: Wq,
        setApplySettingsCallback: Nq
      } = qq;
      const {
        t: aq
      } = (0, mq.v)(), {
        clientEscMenuOptions: dq
      } = (0, rq.j)(["clientEscMenuOptions", "showDistantNametags"]), Hq = (0, Yq.useRef)(uq("showFog")), oq = (0, Yq.useRef)(dq.antiAliasing), Pq = (0, Yq.useRef)(dq.useWebGpu), [Qq, yq] = (0, Yq.useState)(null), [hq, nq] = (0, Yq.useState)((() => (0, JE.d)(jq.featureFlags.settings.canUseShaderPacks))), [bq] = (0, Yq.useState)((() => rq.b.isWebGpuDefaultOff())), [iq] = (0, Yq.useState)(GE.f);
      (0, Yq.useEffect)((() => {
        let qq = !1;
        return (0, jq.hasUsableWebGpuAdapter)().then((Eq => {
          qq || yq(Eq)
        })), (0, JE.h)(jq.featureFlags.settings.canUseShaderPacks) && (0, LE.d)().then((async Eq => {
          const Yq = null !== Eq && await async function(qq) {
            const [{
              isShaderPackActive: Eq
            }, {
              loadPageShaderPackCompiler: Yq
            }] = await Promise.all([gq.e(128).then((() => gq(6531))), Promise.all([gq.e(75), gq.e(132), gq.e(131)]).then((() => gq(6496)))]);
            return Eq(qq, await Yq())
          }(Eq);
          qq || nq(Yq)
        })), () => {
          qq = !0
        }
      }), []);
      const Zq = function(qq, Eq, gq, Yq, lq) {
          return (0, kE.b)(gq, Yq) && !0 === Eq ? {
            translationKey: "settingsMenu:newWebGpuForcedOnByShaderPack",
            checked: !0,
            disabled: !0
          } : {
            translationKey: !1 !== Eq ? "settingsMenu:newWebGpu" : lq ? "settingsMenu:newWebGpuDisabledUntilRestart" : "settingsMenu:newWebGpuUnsupported",
            checked: qq && !1 !== Eq,
            disabled: !0 !== Eq
          }
        }(dq.useWebGpu, Qq, hq, bq, iq),
        fq = (dq.useWebGpu || (0, kE.b)(hq, bq)) && hq && !0 === Qq,
        Mq = (0, Vq.h)("lightingOverride"),
        Tq = !(0, RE.H)(Mq);
      let zq = "settingsMenu:enableLighting";
      Tq && (zq = Mq ? "settingsMenu:enableLightingForcedOn" : "settingsMenu:enableLightingForcedOff");
      const Sq = qq => {
          var Eq, gq, Yq;
          const lq = null !== (Eq = qq.showFog) && void 0 !== Eq ? Eq : uq("showFog"),
            Oq = null !== (gq = qq.antiAliasing) && void 0 !== gq ? gq : dq.antiAliasing,
            mq = null !== (Yq = qq.useWebGpu) && void 0 !== Yq ? Yq : dq.useWebGpu,
            xq = !FE.v && lq !== Hq.current || Oq !== oq.current || mq !== Pq.current;
          Nq(xq ? () => tq.l : null)
        },
        pq = (0, Vq.h)("fogChunkDistanceOverride"),
        Gq = (0, Vq.h)("fogBlockDistanceOverride"),
        Lq = !(0, RE.H)(pq) || !(0, RE.H)(Gq),
        Jq = Lq ? "settingsMenu:showFogForcedOn" : "settingsMenu:showFog",
        [kq, Rq] = (0, SE.h)(cq),
        [Uq, Fq] = (0, Eg.g)(cq),
        sq = aq("settingsMenu:chunkLoadDistanceDeviceLimit"),
        Xq = Uq < kq,
        wq = Math.min(null !== (Eq = uq("chunkHorizAddDist")) && void 0 !== Eq ? Eq : cq[0], Uq),
        Kq = !Lq && function(qq, Eq) {
          return !0 === qq.showFog && qq.fogChunkDistance > Eq
        }(dq, wq);
      return (0, Bq.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [(0, Bq.jsx)(tq.h, {
          name: aq("settingsMenu:horizontalChunkLoadDistance"),
          min: cq[0],
          max: kq,
          selectableMax: Uq,
          cappedNote: sq,
          step: 1,
          initValue: wq,
          onChange: qq => {
            !0 === uq("showFog") && qq < uq("fogChunkDistance") && Wq("fogChunkDistance", qq), Wq("chunkHorizAddDist", qq), UE.i.TV("updatedChunkLoadDist")
          },
          circleInfoText: aq("settingsMenu:chunkLoadDistanceInfo")
        }), (0, Bq.jsx)(tq.h, {
          name: aq("settingsMenu:verticalChunkLoadDistance"),
          min: cq[1],
          max: Rq,
          selectableMax: Fq,
          cappedNote: Xq ? void 0 : sq,
          step: 1,
          initValue: Math.min(null !== (lq = uq("chunkVertAddDist")) && void 0 !== lq ? lq : cq[1], Fq),
          onChange: qq => {
            Wq("chunkVertAddDist", qq), UE.i.TV("updatedChunkLoadDist")
          },
          circleInfoText: aq("settingsMenu:chunkLoadDistanceInfo"),
          className: "VerticalChunkLoadSlider"
        }), (0, Bq.jsx)(tq.d, {
          label: aq("settingsMenu:chunkFadeIn"),
          checked: dq.chunkFadeIn,
          onClick: qq => {
            rq.b.setClientEscMenuOptions({
              chunkFadeIn: qq
            })
          },
          circleInfoText: aq("settingsMenu:chunkFadeInInfo")
        }), vq.devTools.supports("chunkBorders") && (0, Bq.jsx)(tq.d, {
          label: aq("settingsMenu:showChunkBorders"),
          checked: dq.showChunkBorders,
          onClick: qq => {
            rq.b.setClientEscMenuOptions({
              showChunkBorders: qq
            })
          },
          circleInfoText: aq("settingsMenu:showChunkBordersInfo")
        }), (0, Bq.jsx)(tq.d, {
          label: aq(zq),
          checked: dq.enableLighting,
          onClick: qq => {
            rq.b.setClientEscMenuOptions({
              enableLighting: qq
            })
          },
          disabled: Tq
        }), (0, Bq.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, Bq.jsx)(tq.d, {
            label: aq(Jq),
            checked: dq.showFog,
            onClick: qq => {
              Sq({
                showFog: qq
              }), rq.b.setClientEscMenuOptions({
                showFog: qq
              })
            },
            disabled: Lq,
            className: Oq()({
              SettingBoxWarning: Kq
            })
          }), (0, Bq.jsx)(tq.h, {
            name: aq("settingsMenu:fogChunkDistance"),
            min: cq[0],
            max: pE.c.maxChunkHorizAddDistance,
            step: 1,
            initValue: null !== (xq = dq.fogChunkDistance) && void 0 !== xq ? xq : cq[0],
            onChange: qq => {
              rq.b.setClientEscMenuOptions({
                fogChunkDistance: qq
              }), UE.i.TV("fogChunkDistanceChanged", qq)
            },
            circleInfoText: aq("settingsMenu:fogChunkDistanceInfo"),
            disabled: Lq || !1 === uq("showFog"),
            className: Oq()({
              SettingBoxWarning: Kq
            })
          }), Kq && (0, Bq.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: aq("settingsMenu:fogChunkDistanceInfo")
          })]
        }), !FE.v && (0, Bq.jsx)(tq.d, {
          label: aq(fq ? "settingsMenu:disableBlockTextureAtlasUnavailableWithShaderPack" : "settingsMenu:disableBlockTextureAtlas"),
          checked: !fq && dq.disableTexAtlas,
          onClick: qq => {
            rq.b.setClientEscMenuOptions({
              disableTexAtlas: qq
            })
          },
          circleInfoText: aq("settingsMenu:disableBlockTextureAtlasInfo"),
          disabled: fq
        }), (0, Bq.jsx)(tq.h, {
          name: aq("settingsMenu:fieldOfView"),
          min: 50,
          max: 160,
          step: 1,
          initValue: dq.cameraFOV,
          onChange: qq => {
            rq.b.setClientEscMenuOptions({
              cameraFOV: qq
            })
          }
        }), (0, Bq.jsx)(tq.d, {
          label: aq("settingsMenu:disableViewBobbing"),
          checked: dq.disableBobbing,
          onClick: qq => {
            rq.b.setClientEscMenuOptions({
              disableBobbing: qq
            })
          },
          circleInfoText: aq("settingsMenu:disableViewBobbingInfo")
        }), (0, Bq.jsx)(tq.d, {
          label: aq("settingsMenu:antiAliasing"),
          checked: dq.antiAliasing,
          onClick: qq => {
            Sq({
              antiAliasing: qq
            }), (0, eE.e)("antiAliasing"), rq.b.setClientEscMenuOptions({
              antiAliasing: qq
            })
          },
          circleInfoText: aq("settingsMenu:antiAliasingInfo")
        }), (0, Bq.jsx)(tq.h, {
          name: aq("settingsMenu:pixelScale"),
          min: 1,
          max: 8,
          step: 1,
          initValue: null !== (Aq = dq.pixelScale) && void 0 !== Aq ? Aq : 1,
          onChange: qq => {
            (qq !== rq.b.get("clientEscMenuOptions").pixelScale || (0, qg.p)()) && (0, eE.e)("pixelScale"), rq.b.setClientEscMenuOptions({
              pixelScale: qq
            })
          },
          circleInfoText: aq("settingsMenu:pixelScaleInfo"),
          format: qq => `${qq}x`
        }), (0, Bq.jsx)(tq.d, {
          label: aq("settingsMenu:pixelSmoothing"),
          checked: dq.pixelSmoothing,
          onClick: qq => {
            rq.b.setClientEscMenuOptions({
              pixelSmoothing: qq
            })
          },
          circleInfoText: aq("settingsMenu:pixelSmoothingInfo")
        }), FE.v && (0, Bq.jsx)(tq.d, {
          label: aq("settingsMenu:distantNametags"),
          checked: (0, DE.e)(),
          onClick: qq => {
            rq.b.set({
              showDistantNametags: qq
            })
          },
          circleInfoText: aq("settingsMenu:distantNametagsInfo")
        }), (0, Bq.jsx)(tq.d, {
          label: aq(Zq.translationKey),
          checked: Zq.checked,
          onClick: qq => {
            Sq({
              useWebGpu: qq
            }), rq.b.setClientEscMenuOptions({
              useWebGpu: qq
            })
          },
          circleInfoText: aq("settingsMenu:newWebGpuInfo"),
          disabled: Zq.disabled
        })]
      })
    }
    var Yg = gq(4243),
      lg = gq(8834),
      Og = gq(9207),
      mg = gq(8843),
      xg = gq(9216);
    const Ag = {
        color: 16777215,
        name: "white"
      },
      cg = {
        color: 0,
        name: "black"
      },
      ug = [Ag, {
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
      }, cg],
      Bg = [cg, Ag];

    function Wg(qq) {
      return `${qq} px`
    }

    function Ng(qq) {
      return `${qq}%`
    }

    function ag(qq) {
      let {
        label: Eq,
        value: gq,
        swatches: Yq,
        onChange: lq
      } = qq;
      const {
        t: xq
      } = (0, mq.v)(), Aq = !Yq.some((qq => qq.color === gq));
      return (0, Bq.jsxs)("div", {
        className: "SettingBox CrosshairColorRow",
        children: [(0, Bq.jsx)("div", {
          className: "SliderText",
          children: Eq
        }), (0, Bq.jsxs)("div", {
          className: "CrosshairSwatches",
          role: "radiogroup",
          "aria-label": Eq,
          children: [Yq.map((qq => {
            let {
              color: Eq,
              name: Yq
            } = qq;
            return (0, Bq.jsx)("button", {
              type: "button",
              role: "radio",
              "aria-checked": Eq === gq,
              "aria-label": xq(`crosshairSettings:color_${Yq}`),
              "data-pad-focusable": !0,
              className: Oq()("CrosshairSwatch", {
                Selected: Eq === gq
              }),
              style: {
                background: (0, xg.k)(Eq)
              },
              onClick: () => {
                lq(Eq)
              }
            }, Eq)
          })), (0, Bq.jsx)("label", {
            className: Oq()("CrosshairSwatch CrosshairSwatchCustom", {
              Selected: Aq
            }),
            style: Aq ? {
              background: (0, xg.k)(gq)
            } : void 0,
            title: xq("crosshairSettings:customColor"),
            "data-pad-focusable": !0,
            children: (0, Bq.jsx)("input", {
              type: "color",
              "aria-label": xq("crosshairSettings:customColor"),
              value: (0, xg.k)(gq),
              onChange: qq => {
                const Eq = (0, xg.q)(qq.target.value);
                null !== Eq && lq(Eq)
              }
            })
          })]
        })]
      })
    }

    function Vg(qq) {
      let {
        settings: Eq,
        onChange: gq
      } = qq;
      const {
        t: Yq
      } = (0, mq.v)(), lq = (qq, Yq) => {
        gq((0, xg.v)(Eq, qq, Yq))
      }, Oq = function(qq, gq) {
        let Yq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Wg;
        const {
          min: Oq,
          max: mq,
          step: xq
        } = xg.e[qq];
        return (0, Bq.jsx)(tq.h, {
          name: gq,
          min: Oq,
          max: mq,
          step: xq,
          initValue: Eq[qq],
          format: Yq,
          onChange: Eq => {
            lq(qq, Eq)
          }
        }, qq)
      }, xq = ["lines", "dot", "circle"].filter((qq => Eq[qq])), Aq = (qq, gq, Yq) => (0, Bq.jsx)(tq.d, {
        label: gq,
        checked: Eq[qq],
        disabled: 1 === xq.length && xq[0] === qq,
        circleInfoText: Yq,
        onClick: Eq => {
          lq(qq, Eq)
        }
      }, qq), cq = "shapes" === Eq.style;
      return (0, Bq.jsxs)(Bq.Fragment, {
        children: [(0, Bq.jsx)(tq.f, {
          label: Yq("crosshairSettings:style"),
          options: [{
            value: "classic",
            label: Yq("crosshairSettings:styleClassic")
          }, {
            value: "shapes",
            label: Yq("crosshairSettings:styleShapes")
          }],
          value: Eq.style,
          onChange: qq => {
            lq("style", qq)
          }
        }), (0, Bq.jsx)(ag, {
          label: Yq("crosshairSettings:color"),
          value: Eq.color,
          swatches: ug,
          onChange: qq => {
            lq("color", qq)
          }
        }), Oq("opacity", Yq("crosshairSettings:opacity"), Ng), !cq && Oq("size", Yq("crosshairSettings:size"), Ng), cq && (0, Bq.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [Aq("lines", Yq("crosshairSettings:lines")), Eq.lines && Oq("lineLength", Yq("crosshairSettings:lineLength")), Eq.lines && Oq("lineThickness", Yq("crosshairSettings:lineThickness")), Eq.lines && Oq("gap", Yq("crosshairSettings:gap")), Eq.lines && Aq("tStyle", Yq("crosshairSettings:tStyle"))]
        }), cq && (0, Bq.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [Aq("dot", Yq("crosshairSettings:dot")), Eq.dot && Oq("dotSize", Yq("crosshairSettings:dotSize"))]
        }), cq && (0, Bq.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [Aq("circle", Yq("crosshairSettings:circle")), Eq.circle && Oq("circleRadius", Yq("crosshairSettings:circleRadius")), Eq.circle && Oq("circleThickness", Yq("crosshairSettings:circleThickness"))]
        }), (0, Bq.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [Oq("outline", Yq("crosshairSettings:outline"), (qq => qq > 0 ? Wg(qq) : Yq("crosshairSettings:off"))), Eq.outline > 0 && (0, Bq.jsx)(ag, {
            label: Yq("crosshairSettings:outlineColor"),
            value: Eq.outlineColor,
            swatches: Bg,
            onChange: qq => {
              lq("outlineColor", qq)
            }
          })]
        }), Aq("growOnClick", Yq("crosshairSettings:growOnClick")), cq && Aq("forGuns", Yq("crosshairSettings:forGuns"), Yq("crosshairSettings:forGunsInfo"))]
      })
    }
    var dg = gq(71),
      jg = gq(1267),
      Hg = gq(9224),
      og = gq(9230),
      Pg = gq(9233),
      Qg = gq(9239);
    const yg = ["sky", "grass", "stone", "sand", "snow", "night"],
      tg = "4rem";

    function rg(qq) {
      return {
        backgroundImage: `url(${qq})`,
        backgroundSize: `${tg} ${tg}`,
        backgroundRepeat: "repeat",
        imageRendering: "pixelated"
      }
    }

    function vg(qq) {
      return {
        ...(() => {
          switch (qq) {
            case "sky":
              return {
                backgroundImage: "linear-gradient(#3d8fe0 0%, #8cc8f5 45%, #d6eefc 58%, #6fae4a 58.01%, #4f8a33 100%)", backgroundSize: "100vw 100vh", backgroundRepeat: "no-repeat"
              };
            case "grass":
              return rg(Hg);
            case "stone":
              return rg(og);
            case "sand":
              return rg(Pg);
            case "snow":
              return rg(Qg);
            case "night":
              return {
                backgroundImage: "radial-gradient(circle at 50% 50%, #1e2a4a 0%, #070b16 100vmax)", backgroundSize: "100vw 100vh", backgroundRepeat: "no-repeat"
              }
          }
        })(),
        backgroundPosition: "center"
      }
    }

    function hg(qq) {
      return Object.freeze({
        ...xg.f,
        style: "shapes",
        outline: 1,
        lines: !1,
        ...qq
      })
    }
    const ng = [{
        id: "default",
        settings: xg.f
      }, {
        id: "cross",
        settings: hg({
          color: 5046092,
          lines: !0,
          lineLength: 7,
          lineThickness: 2,
          gap: 3
        })
      }, {
        id: "crossDot",
        settings: hg({
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
        settings: hg({
          dot: !0,
          dotSize: 4
        })
      }, {
        id: "circle",
        settings: hg({
          circle: !0,
          circleRadius: 12,
          circleThickness: 1.5,
          dot: !0,
          dotSize: 2
        })
      }, {
        id: "tShape",
        settings: hg({
          color: 16731391,
          lines: !0,
          lineLength: 7,
          lineThickness: 2,
          gap: 3,
          tStyle: !0
        })
      }, {
        id: "tiny",
        settings: hg({
          color: 16776960,
          lines: !0,
          lineLength: 3,
          lineThickness: 1,
          gap: 2
        })
      }, {
        id: "bold",
        settings: hg({
          lines: !0,
          lineLength: 10,
          lineThickness: 3,
          gap: 0,
          outline: 1.5
        })
      }],
      bg = ["growOnClick", "forGuns"];
    var ig = gq(9246);

    function Zg(qq) {
      let {
        label: Eq,
        selected: gq,
        onClick: Yq,
        className: lq,
        style: mq,
        children: xq
      } = qq;
      return (0, Bq.jsx)("button", {
        type: "button",
        role: "radio",
        "aria-checked": gq,
        title: Eq,
        "aria-label": Eq,
        "data-pad-focusable": !0,
        className: Oq()("CrosshairBackdropSwatch", lq, {
          Selected: gq
        }),
        style: mq,
        onClick: Yq,
        children: xq
      })
    }

    function fg(qq) {
      let {
        backdrop: Eq,
        onChange: gq,
        game: Yq
      } = qq;
      const {
        t: lq
      } = (0, mq.v)();
      return (0, Bq.jsxs)("div", {
        className: "CrosshairBackdrops",
        role: "radiogroup",
        "aria-label": lq("crosshairSettings:background"),
        children: [Yq && (0, Bq.jsx)(Zg, {
          label: lq("crosshairSettings:bg_game"),
          selected: Yq.selected,
          onClick: Yq.onSelect,
          className: "CrosshairGameSwatch",
          children: (0, Bq.jsx)(xq.d, {
            name: "cube"
          })
        }), yg.map((qq => (0, Bq.jsx)(Zg, {
          label: lq(`crosshairSettings:bg_${qq}`),
          selected: !(null !== Yq && void 0 !== Yq && Yq.selected) && qq === Eq,
          style: vg(qq),
          onClick: () => {
            gq(qq)
          }
        }, qq)))]
      })
    }

    function Mg(qq) {
      let {
        settings: Eq,
        touch: gq,
        backdrop: Yq,
        onChange: lq
      } = qq;
      const {
        t: xq
      } = (0, mq.v)(), Aq = function(qq) {
        var Eq;
        return null !== (Eq = ng.find((Eq => (0, xg.u)(Eq.settings, qq, bg)))) && void 0 !== Eq ? Eq : null
      }(Eq);
      return (0, Bq.jsx)("div", {
        className: "CrosshairPresets",
        role: "radiogroup",
        "aria-label": xq("crosshairSettings:presets"),
        children: ng.map((qq => {
          const mq = (null === Aq || void 0 === Aq ? void 0 : Aq.id) === qq.id;
          return (0, Bq.jsxs)("button", {
            type: "button",
            role: "radio",
            "aria-checked": mq,
            "data-pad-focusable": !0,
            className: Oq()("CrosshairPreset", {
              Selected: mq
            }),
            onClick: () => {
              lq(function(qq, Eq) {
                return {
                  ...Eq.settings,
                  growOnClick: qq.growOnClick,
                  forGuns: qq.forGuns
                }
              }(Eq, qq))
            },
            children: [(0, Bq.jsx)("div", {
              className: "CrosshairPresetStage",
              style: vg(Yq),
              children: (0, Bq.jsx)(ig.c, {
                settings: qq.settings,
                touch: gq,
                inPreview: !0
              })
            }), (0, Bq.jsx)("div", {
              className: "CrosshairPresetName",
              children: xq(`crosshairSettings:preset_${qq.id}`)
            })]
          }, qq.id)
        }))
      })
    }
    var Tg = gq(1650);

    function zg(qq, Eq) {
      const [gq, lq] = (0, Yq.useState)(!1), Oq = () => {
        lq(!1)
      }, [mq, xq] = (0, Yq.useState)(!1), Aq = (0, Yq.useRef)({
        growOnClick: qq.growOnClick,
        forGuns: qq.forGuns
      });
      (0, Yq.useEffect)((() => {
        const Eq = Aq.current;
        Aq.current = {
          growOnClick: qq.growOnClick,
          forGuns: qq.forGuns
        }, (qq.growOnClick && !Eq.growOnClick || qq.forGuns && !Eq.forGuns) && xq(!0)
      }), [qq.growOnClick, qq.forGuns]), (0, Yq.useEffect)((() => {
        if (!mq) return;
        const qq = setTimeout((() => {
          xq(!1)
        }), 600);
        return () => {
          clearTimeout(qq)
        }
      }), [mq]);
      const cq = gq || mq;
      return {
        view: {
          pressed: cq,
          spread: cq && qq.forGuns && !qq.growOnClick ? 6 : 0
        },
        handlers: {
          onPointerDown: qq => {
            !qq.target.closest(Eq) && (0, Tg.e)(qq.currentTarget, qq.pointerId) && lq(!0)
          },
          onPointerUp: Oq,
          onPointerCancel: Oq,
          onLostPointerCapture: Oq
        }
      }
    }

    function Sg(qq) {
      let {
        settings: Eq,
        touch: gq,
        backdrop: Yq,
        className: lq,
        children: mq,
        label: xq
      } = qq;
      const Aq = zg(Eq, ".CrosshairStageControls");
      return (0, Bq.jsxs)("div", {
        className: Oq()("CrosshairStage", lq),
        style: vg(Yq),
        ...Aq.handlers,
        children: [(0, Bq.jsx)("div", {
          className: "CrosshairStageHold",
          role: "img",
          "aria-label": xq,
          children: (0, Bq.jsx)(ig.c, {
            settings: Eq,
            touch: gq,
            inPreview: !0,
            ...Aq.view
          })
        }), mq]
      })
    }
    const pg = "crosshairFullScreen";

    function Gg(qq) {
      let {
        settings: Eq,
        touch: gq,
        backdrop: lq,
        onBackdrop: Aq,
        inGame: uq,
        onChange: Wq,
        onClose: Nq
      } = qq;
      const {
        t: aq
      } = (0, mq.v)(), Vq = (0, Yq.useRef)(null);
      (0, jg.w)("popup", Vq, Nq),
      function(qq) {
        const Eq = (0, Yq.useRef)(qq);
        Eq.current = qq, (0, Yq.useEffect)((() => {
          window.history.pushState({
            ...window.history.state,
            [pg]: !0
          }, "");
          let qq = !1;
          const gq = () => {
            qq = !0, Eq.current()
          };
          return window.addEventListener("popstate", gq), () => {
            var Eq;
            window.removeEventListener("popstate", gq), !qq && null !== (Eq = window.history.state) && void 0 !== Eq && Eq[pg] && window.history.back()
          }
        }), [])
      }(Nq);
      const dq = (0, Yq.useRef)(Nq);
      dq.current = Nq, (0, Yq.useEffect)((() => {
        function qq(qq) {
          "Escape" === qq.key && (qq.stopPropagation(), dq.current())
        }
        return window.addEventListener("keydown", qq, !0), () => {
          window.removeEventListener("keydown", qq, !0)
        }
      }), []);
      const jq = zg(Eq, ".CrosshairFullScreenPanel"),
        [Hq, oq] = (0, Yq.useState)(!0),
        Pq = Hq && uq;
      (0, Yq.useEffect)((() => {
        if (Pq) return rq.b.set({
          crosshairGameView: !0
        }), () => {
          rq.b.set({
            crosshairGameView: !1
          })
        }
      }), [Pq]);
      const [Qq, yq] = (0, Yq.useState)(!0);
      return (0, dg.createPortal)((0, Bq.jsxs)("div", {
        ref: Vq,
        className: "CrosshairFullScreen",
        style: Pq ? void 0 : vg(lq),
        ...jq.handlers,
        children: [(0, Bq.jsx)(ig.c, {
          settings: Eq,
          touch: gq,
          inEditor: !0,
          ...jq.view
        }), (0, Bq.jsxs)("div", {
          className: Oq()("CrosshairFullScreenPanel", {
            Collapsed: !Qq
          }),
          children: [(0, Bq.jsxs)("div", {
            className: "CrosshairFullScreenBar",
            children: [(0, Bq.jsx)(fg, {
              backdrop: lq,
              onChange: qq => {
                oq(!1), Aq(qq)
              },
              game: uq ? {
                selected: Pq,
                onSelect: () => {
                  oq(!0)
                }
              } : void 0
            }), (0, Bq.jsx)(cq.Q, {
              className: "CrosshairPanelToggle",
              ariaLabel: aq(Qq ? "crosshairSettings:hideEditor" : "crosshairSettings:showEditor"),
              onClick: () => {
                yq(!Qq)
              },
              children: (0, Bq.jsx)(xq.d, {
                name: Qq ? "caret-up" : "pen"
              })
            }), (0, Bq.jsx)(cq.g, {
              className: "CrosshairFullScreenDone",
              onClick: Nq,
              padDefaultFocus: !0,
              children: aq("crosshairSettings:done")
            })]
          }), Qq && (0, Bq.jsxs)("div", {
            className: "CrosshairFullScreenFields",
            children: [(0, Bq.jsx)(Mg, {
              settings: Eq,
              touch: gq,
              backdrop: lq,
              onChange: Wq
            }), (0, Bq.jsx)(Vg, {
              settings: Eq,
              onChange: Wq
            })]
          })]
        })]
      }), document.body)
    }
    var Lg = gq(2595),
      Jg = gq(9254);

    function kg(qq) {
      let {
        settings: Eq,
        onChange: gq
      } = qq;
      const {
        t: lq
      } = (0, mq.v)(), Aq = (0, Jg.i)(Eq), [uq, Wq] = (0, Lg.i)(), [Nq, aq] = (0, Yq.useState)(!1), Vq = (0, Yq.useRef)(null), [dq, jq] = (0, Lg.i)(), [Hq, oq] = (0, Yq.useState)(!1);
      return (0, Bq.jsxs)("div", {
        className: "SettingBox CrosshairShare",
        children: [(0, Bq.jsxs)("div", {
          className: "CrosshairShareRow",
          children: [(0, Bq.jsxs)(cq.Q, {
            className: Oq()("CrosshairCopy", {
              ActiveSecondaryButton: uq
            }),
            onClick: () => {
              (0, Lg.f)(Aq, {
                useShareSheet: !1,
                onOutcome: qq => {
                  aq("failed" === qq), "copied" === qq && Wq()
                }
              })
            },
            children: [(0, Bq.jsx)(xq.d, {
              name: uq ? "check" : "copy"
            }), " ", lq(uq ? "general:copied" : "crosshairSettings:copy")]
          }), (0, Bq.jsx)(Qq.b, {
            className: "CrosshairPaste",
            domRef: Vq,
            ariaLabel: lq("crosshairSettings:paste"),
            placeholderText: lq("crosshairSettings:paste"),
            onValueChange: qq => {
              const Eq = (0, Jg.e)(qq);
              oq(!Eq && qq.trim().length >= Jg.b), Eq && (gq(Eq), Vq.current.value = "", jq())
            }
          })]
        }), Nq && (0, Bq.jsx)("input", {
          className: "CrosshairCode",
          readOnly: !0,
          value: Aq,
          "aria-label": lq("crosshairSettings:copy"),
          onFocus: qq => {
            qq.currentTarget.select()
          }
        }), (0, Bq.jsxs)("div", {
          "aria-live": "polite",
          children: [Hq && (0, Bq.jsx)("div", {
            className: "CrosshairShareNote Error",
            children: lq("crosshairSettings:pasteInvalid")
          }), dq && !Hq && (0, Bq.jsx)("div", {
            className: "CrosshairShareNote",
            children: lq("crosshairSettings:applied")
          })]
        })]
      })
    }
    var Rg = gq(9263);
    let Ug = "sky";

    function Fg(qq) {
      let {
        showing: Eq
      } = qq;
      const {
        t: gq
      } = (0, mq.v)(), {
        isTouchScreen: lq,
        gameState: Oq,
        clientEscMenuOptions: Aq
      } = (0, rq.j)(["isTouchScreen", "gameState", "clientEscMenuOptions"]), uq = (0, Rg.f)(), [Wq, Nq] = (0, Yq.useState)(Ug), aq = qq => {
        Ug = qq, Nq(qq)
      }, [Vq, dq] = (0, Yq.useState)(!1);
      return (0, Yq.useEffect)((() => {
        Eq || dq(!1)
      }), [Eq]), (0, Bq.jsxs)("div", {
        className: "SettingsMenuRightInner CrosshairCategory",
        children: [(0, Bq.jsx)("div", {
          className: "CrosshairPreviewSticky",
          children: (0, Bq.jsx)(Sg, {
            className: "CrosshairPreviewStage",
            settings: uq,
            touch: lq,
            backdrop: Wq,
            label: gq("crosshairSettings:preview"),
            children: (0, Bq.jsxs)("div", {
              className: "CrosshairPreviewBar CrosshairStageControls",
              children: [(0, Bq.jsx)(fg, {
                backdrop: Wq,
                onChange: aq
              }), (0, Bq.jsxs)(cq.Q, {
                className: "CrosshairFullScreenButton",
                onClick: () => {
                  dq(!0)
                },
                children: [(0, Bq.jsx)(xq.d, {
                  name: "expand"
                }), " ", gq("crosshairSettings:fullScreen")]
              })]
            })
          })
        }), (0, Bq.jsx)("div", {
          className: "SettingBox",
          children: (0, Bq.jsx)(Mg, {
            settings: uq,
            touch: lq,
            backdrop: Wq,
            onChange: Rg.c
          })
        }), (0, Bq.jsx)(kg, {
          settings: uq,
          onChange: Rg.c
        }), lq && (0, Bq.jsx)(mg.e, {
          note: (0, Og.d)(lq, Aq.touchActionButtons) ? gq("crosshairSettings:touchNote") : void 0
        }), (0, Bq.jsx)(Vg, {
          settings: uq,
          onChange: Rg.c
        }), Vq && (0, Bq.jsx)(Gg, {
          settings: uq,
          touch: lq,
          backdrop: Wq,
          onBackdrop: aq,
          inGame: "inGame" === Oq,
          onChange: Rg.c,
          onClose: () => {
            dq(!1)
          }
        })]
      })
    }
    var sg = gq(8837),
      Xg = gq(1376),
      wg = gq(4826),
      Kg = gq(9270),
      Cg = gq(1942),
      Ig = gq(4135),
      eg = gq(1945),
      Dg = gq(691);
    const qY = (0, Yq.memo)((function() {
      const {
        clientEscMenuOptions: qq
      } = (0, rq.j)(["clientEscMenuOptions"]), {
        recording: Eq,
        clipping: gq,
        hasClipBuffer: lq
      } = (0, Cg.g)("replayRecorder"), mq = (0, Cg.f)("connectedGame", (qq => qq.replay)), xq = (0, Ig.o)(), Aq = !1 === (0, Vq.h)("canRecordReplays");
      (0, Yq.useEffect)((() => {
        Hq.gameBridge.send("setRecorderPrefs", {
          clipping: qq.enableClipping,
          clipSeconds: qq.clipDurationSeconds
        })
      }), [qq.enableClipping, qq.clipDurationSeconds]);
      const uq = xq || mq,
        Wq = !uq && !Aq,
        Nq = Eq || Wq,
        aq = Wq,
        dq = aq && gq && !Eq;

      function jq() {
        Nq && Hq.gameBridge.send("toggleRecording", null)
      }
      return (0, Bq.jsxs)("div", {
        className: "SettingsMenuRightInner ReplayViewerCategory",
        children: [(0, Bq.jsxs)("div", {
          className: "SettingBox",
          children: [(0, Bq.jsx)("div", {
            className: "ReplayViewerCategoryRecordingRow",
            children: Eq ? (0, Bq.jsxs)(Bq.Fragment, {
              children: [(0, Bq.jsxs)(cq.K, {
                className: "ReplayViewerCategoryButton",
                onClick: jq,
                disabled: !Nq,
                children: [(0, Bq.jsx)("span", {
                  children: "Stop Recording"
                }), (0, Bq.jsx)(eg.c, {
                  noaAction: "recordGame"
                })]
              }), (0, Bq.jsx)(Kg.b, {
                className: "ReplayViewerCategoryRecordingIndicator"
              })]
            }) : (0, Bq.jsxs)(cq.g, {
              className: "ReplayViewerCategoryButton",
              onClick: jq,
              disabled: !Nq,
              children: [(0, Bq.jsx)("span", {
                children: "Start Recording"
              }), (0, Bq.jsx)(eg.c, {
                noaAction: "recordGame"
              })]
            })
          }), Aq && (0, Bq.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Recording is turned off in this game."
          }), uq && !Eq && (0, Bq.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Close Replay Mode to start recording."
          })]
        }), (0, Bq.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, Bq.jsx)(tq.d, {
            label: "Enable clipping",
            checked: qq.enableClipping,
            disabled: !aq,
            onClick: function(qq) {
              aq && rq.b.setClientEscMenuOptions({
                enableClipping: qq
              })
            },
            className: Oq()({
              SettingBoxDisabled: !aq
            })
          }), (0, Bq.jsx)(tq.h, {
            name: "Clip duration (seconds)",
            min: Dg.j,
            max: Dg.h,
            step: Dg.d,
            initValue: qq.clipDurationSeconds,
            onChange: function(qq) {
              rq.b.setClientEscMenuOptions({
                clipDurationSeconds: qq
              })
            },
            circleInfoText: "Longer clip durations use more memory and may affect performance.",
            disabled: !aq || !qq.enableClipping
          })]
        }), (0, Bq.jsxs)("div", {
          className: "SettingBox",
          children: [(0, Bq.jsxs)(cq.g, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              dq && Hq.gameBridge.send("saveClip", null)
            },
            disabled: !dq,
            children: [(0, Bq.jsx)("span", {
              children: "Record clip"
            }), (0, Bq.jsx)(eg.c, {
              noaAction: "recordClip"
            })]
          }), qq.enableClipping && !lq && aq && !Eq && (0, Bq.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clip buffer is filling \u2014 play for a moment, then save."
          }), Eq && (0, Bq.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clipping pauses while a full recording is active."
          })]
        }), (0, Bq.jsxs)("div", {
          className: "SettingBox",
          children: [(0, Bq.jsxs)(cq.g, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              (0, Ig.l)(!0), rq.b.set({
                openEverythingMenuName: null
              })
            },
            disabled: xq,
            children: [(0, Bq.jsx)("span", {
              children: "Open Replay Mode"
            }), (0, Bq.jsx)(eg.c, {
              noaAction: "replayViewerOpen"
            })]
          }), xq && (0, Bq.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Replay Mode is already open."
          })]
        }), (0, Bq.jsxs)("div", {
          className: "SettingBox",
          children: [(0, Bq.jsx)("div", {
            className: "ReplayViewerCategoryTutorialTitle",
            children: "How to use Replay Mode"
          }), (0, Bq.jsx)("iframe", {
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
    var EY = gq(1870);
    const gY = {
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
        icon: () => (0, Bq.jsx)("svg", {
          className: "svg-inline--fa",
          viewBox: "0 0 640 512",
          "aria-hidden": "true",
          children: (0, Bq.jsx)("path", {
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
      pN: {
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

    function YY() {
      return Promise.all([gq.e(75), gq.e(132), gq.e(126), gq.e(123)]).then((() => gq(40813))).then((qq => ({
        default: qq.ShaderPackCategory
      })), (qq => (console.error("Failed to load the shader pack settings", qq), {
        default: lY
      })))
    }

    function lY() {
      const {
        t: qq
      } = (0, mq.v)();
      return (0, Bq.jsx)("div", {
        className: "SettingsMenuRightInner",
        children: qq("shaderPack:tabLoadFailed")
      })
    }
    var OY = gq(1367);
    const mY = (0, Yq.lazy)((() => gq.e(264).then((() => gq(40797))).then((qq => ({
        default: qq.BloxdInformation
      }))))),
      xY = (0, Yq.lazy)(YY);

    function AY(qq) {
      return qq ? "general" : "account"
    }
    const cY = new Map,
      uY = (0, Yq.memo)((function(qq) {
        let {
          show: Eq,
          setBeforeResumeCallback: gq
        } = qq;
        (0, dq.b)();
        const {
          gameState: lq,
          openSettingsCategory: Oq
        } = (0, rq.j)(["gameState", "openSettingsCategory"]), {
          userContext: Aq
        } = (0, aq.c)(), {
          t: uq
        } = (0, mq.v)(), Qq = (0, Nq.c)(), yq = (0, Vq.h)("minChunkAddDist"), tq = "inGame" === lq, [vq, bq] = (0, Yq.useState)(AY(tq)), [iq, Zq] = (0, Yq.useState)(null), [fq, Mq] = (0, Yq.useState)([]), Tq = (0, Yq.useRef)(function() {
          const qq = new Date,
            Eq = 6 * (qq.getMonth() + qq.getDate()) % cE.w.length;
          return [...cE.w, ...cE.w].slice(Eq, Eq + 6)
        }()), zq = (0, Yq.useRef)(null), Sq = (0, nE.h)(Xg.j, (0, Xg.c)()), pq = Object.keys(gY).filter((qq => {
          switch (qq) {
            case "replayViewer":
              return tq;
            case "developerTools":
              return Aq.playerHasRank("developer") || !1;
            case "texturePack":
              return jq.featureFlags.settings.canChangeTexturePack;
            case "pN":
              return jq.featureFlags.settings.canUseShaderPacks;
            case "notifications":
              return jq.featureFlags.useSocialFeatures;
            case "alternativeDomains":
              return "crazygames" !== nq.n;
            case "controller":
              return jq.featureFlags.useControllerSupport && (Sq || "controller" === vq);
            default:
              return !0
          }
        }));
        (0, nE.f)("toggleFullCoordinateOverlay", (() => {
          const qq = CE("showCoordinates") && CE("showChunkCoordinates") && CE("showFPS");
          IE("showCoordinates", !qq), IE("showChunkCoordinates", !qq), IE("showFPS", !qq), Qq()
        })), (0, nE.f)("updatedChunkLoadDist", (() => {
          Qq()
        })), (0, Yq.useEffect)((() => {
          if (Zq(null), null === rq.b.get("openSettingsCategory")) {
            const qq = (0, OY.c)() ? cY.get(tq) : void 0;
            bq(qq && pq.includes(qq) ? qq : AY(tq))
          }
        }), [Eq]), (0, Yq.useEffect)((() => {
          null !== Oq && (bq(Oq), cY.set(tq, Oq), rq.b.set({
            openSettingsCategory: null
          }))
        }), [Oq, tq]), (0, Yq.useLayoutEffect)((() => {
          zq.current && (zq.current.scrollTop = 0)
        }), [vq, Eq]), (0, Yq.useEffect)((() => {
          "updateLog" === vq && (0, Pq.b)().then(Mq)
        }), [vq]), (0, Yq.useEffect)((() => {
          if ((0, RE.H)(yq)) return;
          const [qq, Eq] = (0, Yg.e)(), [gq, Yq] = (0, SE.h)(yq), lq = (0, EY.e)(yq[0], qq, gq), Oq = (0, EY.e)(yq[1], Eq, Yq);
          Hq.gameBridge.send("setChunkAddDistance", {
            horizontal: lq,
            vertical: Oq
          })
        }), [yq]);
        const Gq = (0, Yq.useCallback)((async () => {
          iq && (await iq(), Zq(null))
        }), [iq]);

        function Lq() {
          rq.b.set({
            openEverythingMenuName: null
          })
        }
        return (0, Yq.useEffect)((() => {
          gq((() => Gq))
        }), [Gq, gq]), (0, Bq.jsxs)("div", {
          className: "SettingsMenu Menu",
          style: Eq ? {} : {
            display: "none"
          },
          children: [(0, Bq.jsx)("div", {
            className: "MenuSideBar",
            children: (0, Bq.jsx)("div", {
              className: "MenuSideBarBody",
              children: (0, Bq.jsx)(Wq, {
                items: pq.map((qq => {
                  const Eq = gY[qq].icon;
                  return {
                    id: qq,
                    faIcon: "string" === typeof Eq ? Eq : void 0,
                    iconElement: "string" === typeof Eq ? void 0 : (0, Bq.jsx)(Eq, {}),
                    title: uq(gY[qq].displayName),
                    redDot: !1
                  }
                })),
                selectedItemId: vq,
                onClick: qq => {
                  !async function(qq) {
                    await Gq(), bq(qq), cY.set(tq, qq)
                  }(qq)
                }
              })
            })
          }), (0, Bq.jsxs)("div", {
            ref: zq,
            className: "MenuBody SettingsMenuRight",
            children: ["account" === vq && (0, Bq.jsx)(HE, {
              showing: Eq,
              inGame: tq
            }), "general" === vq && (0, Bq.jsx)(rE, {
              inGame: tq
            }), "audio" === vq && (0, Bq.jsx)(vE, {}), "notifications" === vq && (0, Bq.jsx)(zE, {}), "graphics" === vq && (0, Bq.jsx)(gg, {
              minChunkAddDist: null !== yq && void 0 !== yq ? yq : [2, 2],
              getValue: CE,
              onChange: IE,
              setApplySettingsCallback: Zq
            }), "controls" === vq && (0, Bq.jsx)(lg.f, {}), "crosshair" === vq && (0, Bq.jsx)(Fg, {
              showing: Eq
            }), "controller" === vq && jq.featureFlags.useControllerSupport && (0, Bq.jsx)(sg.e, {}), jq.featureFlags.settings.canChangeTexturePack && "texturePack" === vq && (0, Bq.jsx)(wg.b, {
              setApplySettingsCallback: Zq
            }), jq.featureFlags.settings.canUseShaderPacks && "pN" === vq && (0, Bq.jsx)(Yq.Suspense, {
              fallback: null,
              children: (0, Bq.jsx)(xY, {
                setApplySettingsCallback: Zq
              })
            }), "updateLog" === vq && (0, Bq.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, Bq.jsx)("div", {
                className: "UpdateLogsContainer",
                children: fq.map(((qq, Eq) => (0, Bq.jsx)(oq.e, {
                  updateLog: qq,
                  index: Eq,
                  close: Lq
                }, Eq)))
              })
            }), "information" === vq && (0, Bq.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, Bq.jsx)(Yq.Suspense, {
                fallback: null,
                children: (0, Bq.jsx)(mY, {})
              })
            }), "alternativeDomains" === vq && (0, Bq.jsxs)("div", {
              className: "SettingsMenuRightInner",
              children: [(0, Bq.jsx)("div", {
                className: "AlternativeDomainsTitle",
                children: uq("settingsMenu:unblockedDomainsDescription")
              }), (0, Bq.jsx)("div", {
                className: "AlternativeDomainsList",
                children: Tq.current.map((qq => (0, Bq.jsxs)(cq.g, {
                  onClick: () => {
                    window.open(`https://${qq}`)
                  },
                  children: [(0, Bq.jsx)(xq.d, {
                    name: "arrow-up-right-from-square"
                  }), " ", qq]
                }, qq)))
              })]
            }), "replayViewer" === vq && (0, Bq.jsx)(qY, {}), "developerTools" === vq && (0, Bq.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, Bq.jsx)(hq, {
                setApplySettingsCallback: Zq
              })
            }), null !== iq && (0, Bq.jsx)("div", {
              className: "SettingsMenuRightFooter",
              children: (0, Bq.jsx)(cq.g, {
                className: "SettingsMenuRightFooterButton",
                onClick: Gq,
                children: uq("general:apply")
              })
            })]
          })]
        })
      }));
    var BY = gq(2538);
    const WY = ["characters", "emote", "skin", "hat", "head", "eyebrows", "eyes", "back", "body", "legs", "shoes", "profileEffect", "cape", "nameColour"],
      NY = (0, Yq.lazy)((() => Promise.resolve().then((() => gq(4486))).then((qq => {
        qq.needGameClientAfterPaint();
        const Eq = qq.matchmakingLibrariesPromise.then((qq => (0, BY.b)(qq.loadCharacterCustomisationUI(), (qq => qq.CharacterCustomisationUI))));
        return Promise.all([qq.ensureGameSetup(), Eq]).then((qq => {
          let [, Eq] = qq;
          return Eq
        }))
      }))));

    function aY(qq) {
      let {
        show: Eq
      } = qq;
      const {
        userContext: gq
      } = (0, aq.c)(), [lq, Oq] = (0, Yq.useState)("characters");
      if (!Eq) return null;
      const mq = WY.filter((qq => "cape" !== qq && "nameColour" !== qq || gq.getPlayerRanks().includes("super") || (0, Jq.purchasesAllowed)())).map((qq => ({
        id: qq,
        faIcon: cE.G[qq],
        title: cE.H[qq],
        redDot: !1
      })));
      return (0, Bq.jsxs)("div", {
        className: "Menu CharCustomisation",
        children: [(0, Bq.jsx)("div", {
          className: "MenuSideBar",
          children: (0, Bq.jsx)(Wq, {
            items: mq,
            selectedItemId: lq,
            onClick: qq => {
              Oq(qq)
            }
          })
        }), (0, Bq.jsx)("div", {
          className: "MenuBody",
          children: (0, Bq.jsx)(Yq.Suspense, {
            fallback: (0, Bq.jsx)("div", {
              className: "CharacterCustomisationLoading",
              children: (0, Bq.jsx)(yq.e, {})
            }),
            children: (0, Bq.jsx)(NY, {
              selectedTab: lq
            })
          })
        })]
      })
    }
    var VY = gq(1440),
      dY = gq(1442),
      jY = gq(9277),
      HY = gq(4359),
      oY = gq(3286),
      PY = gq(3337),
      QY = gq(9304),
      yY = gq(8729),
      tY = gq(9283),
      rY = gq(9297),
      vY = gq(1895),
      hY = gq(1876),
      nY = gq(4739),
      bY = gq(1252),
      iY = gq(1214),
      ZY = gq(1646),
      fY = gq(8823),
      MY = gq(2394),
      TY = gq(2402);

    function zY(qq) {
      return qq ? Object.keys(qq).sort(((Eq, gq) => {
        var Yq, lq, Oq, mq;
        const xq = (null !== (Yq = null === (lq = qq[gq]) || void 0 === lq ? void 0 : lq.sortPriority) && void 0 !== Yq ? Yq : 0) - (null !== (Oq = null === (mq = qq[Eq]) || void 0 === mq ? void 0 : mq.sortPriority) && void 0 !== Oq ? Oq : 0);
        return 0 !== xq ? xq : Eq.localeCompare(gq)
      })) : []
    }
    const SY = [{
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

    function pY(qq) {
      for (const {
          threshold: Eq,
          suffix: gq
        }
        of SY)
        if (qq >= Eq) {
          const Yq = qq / Eq;
          return Yq >= 100 ? `${Math.floor(Yq)}${gq}` : Yq >= 10 ? `${Yq.toFixed(1).replace(/\.0$/,"")}${gq}` : `${Yq.toFixed(2).replace(/\.?0+$/,"")}${gq}`
        } return String(qq)
    }
    var GY = gq(4858);
    const LY = {
        normal: "0.8em",
        big: "1em"
      },
      JY = (0, Yq.memo)((function(qq) {
        let {
          item: Eq,
          amount: gq = 0,
          size: Yq = "normal",
          tier: lq = null
        } = qq;
        return (0, Bq.jsx)("div", {
          className: Oq()("SmpSlot", `SmpSlot-${Yq}`),
          children: Eq && (0, Bq.jsx)(vY.e, {
            itemName: Eq,
            amount: gq > 1 ? gq : 0,
            amountFontSize: LY[Yq],
            enchantmentTier: lq
          })
        })
      }));

    function kY(qq) {
      let {
        amount: Eq,
        exact: gq = !1,
        className: Yq
      } = qq;
      return (0, Bq.jsxs)("span", {
        className: Oq()("SmpGold", Yq),
        children: [(0, Bq.jsx)("span", {
          className: "SmpCoin",
          children: (0, Bq.jsx)(vY.e, {
            itemName: "Gold Coin",
            amount: 0
          })
        }), gq ? Eq.toLocaleString("en-US") : pY(Eq)]
      })
    }

    function RY(qq) {
      let {
        count: Eq = 5,
        grid: gq = !1
      } = qq;
      return (0, Bq.jsx)("div", {
        className: gq ? "SmpCardGrid" : "SmpList",
        "aria-hidden": "true",
        children: Array.from({
          length: Eq
        }, ((qq, Eq) => (0, Bq.jsxs)("div", {
          className: Oq()(gq ? "SmpListingCard" : "SmpRow", "SmpSkeleton"),
          children: [(0, Bq.jsx)("div", {
            className: Oq()("SmpSlot", gq ? "SmpSlot-big" : "SmpSlot-normal")
          }), (0, Bq.jsxs)("div", {
            className: "SmpRowText",
            children: [(0, Bq.jsx)("b", {}), (0, Bq.jsx)("small", {})]
          }), (0, Bq.jsx)("div", {
            className: "SmpSkeletonButton"
          })]
        }, Eq)))
      })
    }

    function UY(qq) {
      let {
        title: Eq,
        children: gq
      } = qq;
      return (0, Bq.jsxs)("div", {
        className: "SmpEmpty",
        children: [(0, Bq.jsx)("b", {
          children: Eq
        }), gq && (0, Bq.jsx)("small", {
          children: gq
        })]
      })
    }

    function FY(qq) {
      let {
        entry: Eq
      } = qq;
      return (0, Bq.jsx)(UY, {
        title: (0, Bq.jsx)(hY.c, {
          text: Eq.item.customTitle
        }),
        children: (0, Bq.jsx)(hY.c, {
          text: Eq.item.description
        })
      })
    }

    function sY(qq) {
      return (0, Bq.jsx)(GY.c, {
        ...qq,
        className: Oq()("SmpChoice", qq.className),
        reselectable: !0
      })
    }

    function XY() {
      return (0, Bq.jsx)("span", {
        className: "SmpLoader",
        children: (0, Bq.jsx)(yq.e, {})
      })
    }

    function wY(qq) {
      let {
        value: Eq,
        onChange: gq,
        min: lq = 1,
        max: Oq,
        step: mq = 1,
        label: xq
      } = qq;
      const Aq = (0, Yq.useRef)(null),
        cq = (0, Yq.useRef)(Eq);
      cq.current = Eq;
      const [uq, Wq] = (0, Yq.useState)(null), Nq = qq => Math.max(lq, Math.min(Oq, Math.floor(qq))), aq = qq => {
        const Eq = cq.current,
          Yq = "function" === typeof mq ? mq(Eq, qq) : mq,
          lq = Nq(Eq + Yq * qq);
        cq.current = lq, gq(lq)
      };
      (0, Yq.useEffect)((() => {
        if (null === uq) return;
        let qq;
        const Eq = () => {
            Wq(null)
          },
          gq = setTimeout((() => {
            qq = setInterval((() => {
              aq(uq);
              const qq = cq.current;
              (uq > 0 ? qq >= Oq : qq <= lq) && Eq()
            }), 70)
          }), 380);
        return window.addEventListener("pointerup", Eq), window.addEventListener("pointercancel", Eq), window.addEventListener("blur", Eq), () => {
          clearTimeout(gq), clearInterval(qq), window.removeEventListener("pointerup", Eq), window.removeEventListener("pointercancel", Eq), window.removeEventListener("blur", Eq)
        }
      }), [uq]), (0, Yq.useEffect)((() => {
        const qq = Aq.current;
        qq && document.activeElement !== qq && qq.value !== String(Eq) && (qq.value = String(Eq))
      }), [Eq]), (0, Yq.useEffect)((() => {
        const qq = Aq.current;
        if (!qq) return;
        const Eq = () => {
          qq.value = String(cq.current)
        };
        return qq.addEventListener("blur", Eq), () => {
          qq.removeEventListener("blur", Eq)
        }
      }), []);
      const Vq = qq => (0, Bq.jsx)("button", {
        type: "button",
        className: "SmpStepButton",
        "aria-label": `${qq>0?"More":"Less"} ${xq}`,
        disabled: qq > 0 ? Eq >= Oq : Eq <= lq,
        onPointerDown: Eq => {
          0 === Eq.button && (aq(qq), Wq(qq))
        },
        onKeyDown: Eq => {
          "Enter" !== Eq.key && " " !== Eq.key || aq(qq)
        },
        onContextMenu: qq => {
          qq.preventDefault()
        },
        children: qq > 0 ? "+" : "\u2212"
      });
      return (0, Bq.jsxs)("div", {
        className: "SmpStepper",
        children: [Vq(-1), (0, Bq.jsx)(Qq.b, {
          className: "SmpStepperInput",
          domRef: Aq,
          defaultValue: String(Eq),
          ariaLabel: xq,
          type: "text",
          blurOnEnter: !0,
          onValueChange: qq => {
            const Eq = qq.replace(/[^\d]/g, "");
            Aq.current && Eq !== qq && (Aq.current.value = Eq), "" !== Eq && gq(Nq(Number(Eq)))
          }
        }), Vq(1)]
      })
    }

    function KY(qq) {
      return Math.max(1, 10 ** Math.max(0, Math.floor(Math.log10(Math.max(1, qq))) - 1))
    }
    var CY = gq(9301),
      IY = gq(1226);
    const eY = ["building", "colours", "nature", "decoration", "utility", "tools", "combat", "food", "mobs", "materials", "worldTools"];
    IY.A, Gq.Tc.length;
    new Map;
    var DY = gq(3166);

    function ql(qq, Eq) {
      var gq;
      return Eq && (null === (gq = qq[Eq]) || void 0 === gq ? void 0 : gq.smp) || null
    }

    function El(qq, Eq) {
      const gq = [];
      for (const lq of zY(qq)) {
        var Yq;
        const Oq = qq[lq];
        (null === (Yq = Oq.smp) || void 0 === Yq ? void 0 : Yq.kind) === Eq && gq.push({
          key: lq,
          item: Oq,
          meta: Oq.smp
        })
      }
      return gq
    }

    function gl(qq, Eq) {
      var gq;
      return null !== (gq = El(qq, Eq)[0]) && void 0 !== gq ? gq : null
    }
    const Yl = "50% 0% 50% 0%",
      ll = [{
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

    function Ol(qq) {
      const Eq = qq - (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now());
      for (const {
          divisor: gq,
          suffix: Yq
        }
        of ll)
        if (Eq >= gq) return `${Math.floor(Eq/gq)}${Yq}`;
      return "<1s"
    }

    function ml(qq) {
      const Eq = qq.map(yY.f),
        gq = [];
      return Eq.forEach(((qq, Yq) => {
        const lq = function(qq) {
            const Eq = qq.match(/\d+/);
            return Eq ? Number(Eq[0]) : 0
          }(qq),
          Oq = Yq === Eq.length - 1;
        (Oq || 1 === lq || 10 === lq || 100 === lq) && gq.push({
          label: qq,
          quantity: lq,
          isAll: Oq
        })
      })), gq
    }
    let xl = null;

    function Al(qq, Eq) {
      const gq = Eq.trim().toLowerCase();
      if (!gq) return [];
      const Yq = qq => {
          if (qq === gq) return 0;
          if (qq.startsWith(gq)) return 1;
          const Eq = qq.indexOf(gq);
          return -1 === Eq ? -1 : 2 + Eq
        },
        lq = [];
      for (const xq of qq) {
        const qq = [Yq(xq.lowerLabel), Yq(xq.lowerName)].filter((qq => -1 !== qq));
        qq.length && lq.push({
          item: xq,
          rank: Math.min(...qq)
        })
      }
      if (lq.length > 0) return lq.sort(((qq, Eq) => qq.rank - Eq.rank)).map((qq => qq.item));
      const Oq = [...gq],
        mq = qq => {
          let Eq = 0;
          for (const gq of Oq) {
            if (Eq = qq.indexOf(gq, Eq), -1 === Eq) return !1;
            Eq++
          }
          return !0
        };
      return qq.filter((qq => mq(qq.lowerLabel) || mq(qq.lowerName)))
    }

    function cl(qq, Eq) {
      var gq;
      return null !== (gq = null === qq || void 0 === qq ? void 0 : qq[Eq]) && void 0 !== gq ? gq : Eq
    }

    function ul(qq, Eq) {
      const gq = qq.userInput;
      return void 0 !== Eq && "dropdown" === (null === gq || void 0 === gq ? void 0 : gq.type) && gq.dropdownOptions.map(yY.f).includes(Eq) ? Eq : function(qq) {
        const Eq = qq.userInput;
        if ("dropdown" !== (null === Eq || void 0 === Eq ? void 0 : Eq.type) || 0 === Eq.dropdownOptions.length) return null;
        const gq = Eq.dropdownOptions.map(yY.f);
        return Eq.initialValue && gq.includes(Eq.initialValue) ? Eq.initialValue : gq[gq.length - 1]
      }(qq)
    }

    function Bl(qq) {
      return void 0 === qq ? "" : JSON.stringify(qq)
    }
    const Wl = (0, Yq.createContext)(null);

    function Nl() {
      return (0, Yq.useContext)(Wl)
    }
    var al = gq(2607);
    const Vl = (0, Yq.memo)((function(qq) {
        let {
          name: Eq,
          label: gq,
          onPick: Yq
        } = qq;
        return (0, Bq.jsxs)("button", {
          type: "button",
          className: "SmpCatalogueTile",
          title: gq,
          onClick: () => {
            Yq(Eq)
          },
          children: [(0, Bq.jsx)(JY, {
            item: Eq,
            size: "big"
          }), (0, Bq.jsx)("span", {
            children: gq
          })]
        })
      })),
      dl = (0, Yq.memo)((function(qq) {
        let {
          items: Eq,
          query: gq,
          onPick: lq
        } = qq;
        const {
          t: Oq
        } = (0, mq.v)(), [xq, Aq] = (0, Yq.useState)(new Set), cq = (0, Yq.useMemo)((() => function(qq) {
          const Eq = new Map;
          for (const gq of qq) {
            let qq = Eq.get(gq.category);
            qq || (qq = [], Eq.set(gq.category, qq)), qq.push(gq)
          }
          return [...eY, "other"].filter((qq => Eq.has(qq))).map((qq => ({
            category: qq,
            items: Eq.get(qq)
          })))
        }(Eq)), [Eq]), uq = (0, Yq.useMemo)((() => Al(Eq, gq).slice(0, 60)), [Eq, gq]);
        return gq.trim() ? 0 === uq.length ? (0, Bq.jsx)(UY, {
          title: Oq("smpShop:noItemsFound", {
            query: gq.trim()
          }),
          children: Oq("smpShop:tryShorterName")
        }) : (0, Bq.jsx)(al.c, {
          lazyLoadedClassName: "SmpCatalogueGrid",
          observerRoot: "SmpBody",
          rootMargin: Yl,
          observerUpdateDeps: [gq],
          children: uq.map((qq => (0, Bq.jsx)(Vl, {
            name: qq.name,
            label: qq.label,
            onPick: lq
          }, qq.name)))
        }) : (0, Bq.jsx)(Bq.Fragment, {
          children: cq.map((qq => {
            let {
              category: Eq,
              items: gq
            } = qq;
            const Yq = xq.has(Eq) || gq.length <= 48,
              mq = Yq ? gq : gq.slice(0, 48);
            return (0, Bq.jsxs)("section", {
              className: "SmpCatalogueSection",
              children: [(0, Bq.jsxs)("h4", {
                children: [Oq("other" === Eq ? "smpShop:otherItems" : `creativeInventory:${Eq}`), !Yq && (0, Bq.jsx)("button", {
                  type: "button",
                  className: "SmpLink",
                  onClick: () => {
                    Aq(new Set([...xq, Eq]))
                  },
                  children: Oq("smpShop:showAll", {
                    count: gq.length
                  })
                })]
              }), (0, Bq.jsx)(al.c, {
                lazyLoadedClassName: "SmpCatalogueGrid",
                observerRoot: "SmpBody",
                rootMargin: Yl,
                observerUpdateDeps: [Yq],
                children: mq.map((qq => (0, Bq.jsx)(Vl, {
                  name: qq.name,
                  label: qq.label,
                  onPick: lq
                }, qq.name)))
              })]
            }, Eq)
          }))
        })
      }));

    function jl(qq, Eq) {
      const {
        searched: gq,
        shown: lq,
        searchFor: Oq,
        loading: mq
      } = function(qq, Eq) {
        var gq;
        const lq = Nl(),
          [Oq, mq] = (0, Yq.useState)(void 0),
          xq = (0, Yq.useRef)(void 0),
          Aq = (0, Yq.useRef)(0),
          cq = (0, Yq.useRef)(void 0),
          uq = null !== (gq = null === qq || void 0 === qq ? void 0 : qq.meta.item) && void 0 !== gq ? gq : null,
          Bq = !!qq && lq.isPending(qq.key);
        (0, Yq.useEffect)((() => {
          if (!qq || Bq || !Eq || void 0 === Oq || Oq === uq) return;
          const gq = Oq === xq.current && lq.gaveUpAt(qq.key) > Aq.current && cq.current !== Oq;
          (Oq !== xq.current || gq) && lq.act(qq.key, null !== Oq && void 0 !== Oq ? Oq : "*", gq) && (gq && (cq.current = Oq), xq.current = Oq, Aq.current = Date.now())
        }), [qq, Bq, Eq, Oq, uq, lq]);
        const Wq = (0, Yq.useCallback)((qq => {
            xq.current = void 0, cq.current = void 0, mq(qq)
          }), []),
          Nq = void 0 !== Oq && Oq !== uq && (Bq || xq.current !== Oq);
        return {
          searched: uq,
          shown: Nq ? Oq : uq,
          searchFor: Wq,
          loading: Nq || Bq || null !== uq && !Eq
        }
      }(qq, Eq), xq = (0, Yq.useMemo)((() => function() {
        var qq;
        let Eq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          gq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          Yq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const lq = `${(0,DY.k)()}\x1f${Eq.join("\x1e")}\x1f${gq.join("\x1e")}\x1f${JSON.stringify(Yq)}`;
        if ((null === (qq = xl) || void 0 === qq ? void 0 : qq.key) === lq) return xl.items;
        const Oq = new Set(gq),
          mq = new Set,
          xq = [],
          Aq = (qq, Eq) => {
            var gq;
            if (!qq || mq.has(qq) || Oq.has(qq)) return;
            mq.add(qq);
            const lq = null !== (gq = Yq[qq]) && void 0 !== gq ? gq : qq;
            xq.push({
              name: qq,
              label: lq,
              lowerLabel: lq.toLowerCase(),
              lowerName: qq.toLowerCase(),
              category: Eq
            })
          };
        for (const uq of (0, CY.creativeItemIds)()) {
          var cq;
          (0, CY.itemIsDisabled)(uq, !0, !0, !1) || (0, CY.showOnlyInCreativeSearch)(uq) || Aq((0, DY.h)(uq), null !== (cq = (0, CY.creativeCategoryOf)(uq)) && void 0 !== cq ? cq : "other")
        }
        for (const uq of Eq) Aq(uq, "other");
        return xl = {
          key: lq,
          items: xq
        }, xq
      }(null === qq || void 0 === qq ? void 0 : qq.meta.extra, null === qq || void 0 === qq ? void 0 : qq.meta.excluded, null === qq || void 0 === qq ? void 0 : qq.meta.names)), [null === qq || void 0 === qq ? void 0 : qq.meta.extra, null === qq || void 0 === qq ? void 0 : qq.meta.excluded, null === qq || void 0 === qq ? void 0 : qq.meta.names]), [Aq, cq] = (0, Yq.useState)(""), [uq, Bq] = (0, Yq.useState)(0), [Wq, Nq] = (0, Yq.useState)("recent"), aq = (0, Yq.useCallback)((qq => {
        cq(""), Bq((qq => qq + 1)), Oq(qq)
      }), [Oq]), Vq = "browse" === Wq || "" !== Aq.trim();
      return {
        searched: gq,
        shown: lq,
        searchFor: Oq,
        loading: mq,
        catalogue: xq,
        names: null === qq || void 0 === qq ? void 0 : qq.meta.names,
        query: Aq,
        setQuery: cq,
        searchBoxKey: uq,
        pickItem: aq,
        setView: Nq,
        browsing: Vq
      }
    }

    function Hl(qq) {
      let {
        browser: Eq,
        children: gq
      } = qq;
      const {
        t: Yq
      } = (0, mq.v)(), lq = Nl();
      return (0, Bq.jsxs)("div", {
        className: "SmpTopBar",
        children: [(0, Bq.jsx)("div", {
          className: "SmpSearch",
          children: (0, Bq.jsx)(Qq.b, {
            className: "SmpSearchInput",
            placeholderText: Yq("smpShop:searchPlaceholder"),
            defaultValue: Eq.query,
            onValueChange: qq => {
              Eq.setQuery(qq), Eq.searched && qq.trim() && Eq.searchFor(null)
            },
            blurOnEnter: !0,
            onEnter: () => {
              const qq = Al(Eq.catalogue, Eq.query)[0];
              qq ? Eq.pickItem(qq.name) : Eq.query.trim() && lq.notify(Yq("smpShop:noItemsFound", {
                query: Eq.query.trim()
              }))
            }
          }, Eq.searchBoxKey)
        }), gq]
      })
    }

    function ol(qq) {
      let {
        browser: Eq,
        recentLabel: gq,
        children: Yq
      } = qq;
      const {
        t: lq
      } = (0, mq.v)();
      return (0, Bq.jsxs)("div", {
        className: "SmpViewBar",
        children: [(0, Bq.jsx)(sY, {
          options: [{
            value: "recent",
            label: gq
          }, {
            value: "browse",
            label: lq("smpShop:browseItems")
          }],
          value: Eq.browsing ? "browse" : "recent",
          onChange: Eq.setView,
          ariaLabel: lq("smpShop:show")
        }), !Eq.browsing && Yq]
      })
    }

    function Pl(qq) {
      let {
        item: Eq,
        names: gq,
        summary: Yq,
        onBack: lq,
        children: Oq
      } = qq;
      const {
        t: xq
      } = (0, mq.v)();
      return (0, Bq.jsxs)("div", {
        className: "SmpItemHeader",
        children: [(0, Bq.jsx)(cq.d, {
          className: "SmpBackButton",
          onClick: lq,
          children: xq("general:back")
        }), (0, Bq.jsx)(JY, {
          item: Eq,
          size: "big"
        }), (0, Bq.jsxs)("div", {
          className: "SmpItemHeaderText",
          children: [(0, Bq.jsx)("b", {
            children: cl(gq, Eq)
          }), Yq && (0, Bq.jsx)("small", {
            children: Yq
          })]
        }), Oq]
      })
    }

    function Ql(qq) {
      let {
        browser: Eq,
        className: gq,
        action: Yq,
        above: lq,
        list: mq,
        summary: xq,
        recentLabel: Aq,
        listControls: cq,
        onBack: uq
      } = qq;
      return (0, Bq.jsxs)("div", {
        className: Oq()("SmpScreen", gq),
        children: [(0, Bq.jsx)(Hl, {
          browser: Eq,
          children: Yq
        }), Eq.shown && (0, Bq.jsx)(Pl, {
          item: Eq.shown,
          names: Eq.names,
          summary: !Eq.loading && xq,
          onBack: () => {
            null === uq || void 0 === uq || uq(), Eq.searchFor(null)
          },
          children: cq
        }), lq, Eq.shown ? mq : (0, Bq.jsxs)(Bq.Fragment, {
          children: [(0, Bq.jsx)(ol, {
            browser: Eq,
            recentLabel: Aq,
            children: cq
          }), Eq.browsing ? (0, Bq.jsx)(dl, {
            items: Eq.catalogue,
            query: Eq.query,
            onPick: Eq.pickItem
          }) : mq]
        })]
      })
    }

    function yl(qq, Eq) {
      const gq = qq.map((qq => {
        let {
          meta: Eq
        } = qq;
        return Eq.pricePerItem
      }));
      return "min" === Eq ? Math.min(...gq) : Math.max(...gq)
    }
    var tl = gq(6434);
    const rl = (0, Yq.memo)((function(qq) {
      var Eq;
      const {
        t: gq
      } = (0, mq.v)(), Yq = null === qq.seller, lq = qq.quantity * qq.pricePerItem;
      return (0, Bq.jsxs)("div", {
        className: qq.grid ? "SmpListingCard" : "SmpRow SmpListingRow",
        children: [(0, Bq.jsx)(JY, {
          item: qq.item,
          amount: qq.quantity,
          size: qq.grid ? "big" : "normal",
          tier: qq.tier
        }), (0, Bq.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, Bq.jsx)("b", {
            children: (0, Bq.jsx)(hY.c, {
              text: null !== (Eq = qq.title) && void 0 !== Eq ? Eq : `${qq.quantity}x ${qq.item}`
            })
          }), (0, Bq.jsxs)("small", {
            className: "SmpListingFacts",
            children: [(0, Bq.jsx)("span", {
              children: Yq ? gq("smpShop:you") : (0, Bq.jsx)(hY.c, {
                text: [{
                  entityName: qq.seller
                }]
              })
            }), (0, Bq.jsx)("span", {
              children: gq("smpShop:timeLeft", {
                time: Ol(qq.expiresAt)
              })
            })]
          })]
        }), (0, Bq.jsxs)("div", {
          className: "SmpRowPrice",
          children: [(0, Bq.jsx)(kY, {
            amount: qq.pricePerItem
          }), (0, Bq.jsx)("small", {
            children: gq("smpShop:each")
          })]
        }), (0, Bq.jsx)(cq.g, {
          className: "SmpBuyButton",
          disabled: Yq || !qq.canAfford && !qq.busy,
          loading: qq.busy,
          onClick: () => {
            qq.onBuy(qq.itemKey)
          },
          children: Yq ? gq("smpShop:yours") : (0, Bq.jsx)(kY, {
            amount: lq
          })
        })]
      })
    }));

    function vl(qq) {
      let {
        view: Eq,
        onChange: gq
      } = qq;
      const {
        t: Yq
      } = (0, mq.v)();
      return (0, Bq.jsx)(GY.c, {
        className: "SmpChoice SmpViewToggle",
        ariaLabel: Yq("smpShop:layout"),
        options: [{
          value: "list",
          label: (0, Bq.jsx)(xq.d, {
            name: "list"
          }),
          ariaLabel: Yq("smpShop:listView")
        }, {
          value: "grid",
          label: (0, Bq.jsx)(xq.d, {
            name: "grid-2"
          }),
          ariaLabel: Yq("smpShop:gridView")
        }],
        value: Eq,
        onChange: gq
      })
    }

    function hl(qq) {
      let {
        entries: Eq,
        view: gq
      } = qq;
      const {
        t: Yq
      } = (0, mq.v)(), lq = Nl(), Oq = "grid" === gq;
      return (0, Bq.jsxs)(Bq.Fragment, {
        children: [!Oq && (0, Bq.jsxs)("div", {
          className: "SmpColumns",
          "aria-hidden": "true",
          children: [(0, Bq.jsx)("span", {}), (0, Bq.jsx)("span", {
            children: Yq("smpShop:columnItem")
          }), (0, Bq.jsx)("span", {
            children: Yq("smpShop:columnPriceEach")
          }), (0, Bq.jsx)("span", {
            children: Yq("smpShop:columnTotal")
          })]
        }), (0, Bq.jsx)(al.c, {
          lazyLoadedClassName: Oq ? "SmpCardGrid" : "SmpList",
          observerRoot: "SmpBody",
          rootMargin: Yl,
          observerUpdateDeps: [Eq.length],
          children: Eq.map((qq => {
            var Eq, gq;
            let {
              key: Yq,
              item: mq,
              meta: xq
            } = qq;
            const Aq = xq.quantity * xq.pricePerItem;
            return (0, Bq.jsx)(rl, {
              itemKey: Yq,
              item: xq.item,
              title: mq.customTitle,
              quantity: xq.quantity,
              pricePerItem: xq.pricePerItem,
              seller: xq.seller,
              expiresAt: xq.expiresAt,
              tier: null !== (Eq = null === (gq = mq.enchant) || void 0 === gq ? void 0 : gq.tier) && void 0 !== Eq ? Eq : null,
              busy: lq.isPending(Yq) || null !== xq.seller && !1 === mq.canBuy,
              canAfford: lq.canAfford(mq, Aq),
              grid: Oq,
              onBuy: lq.act
            }, Yq)
          }))
        }, gq)]
      })
    }
    const nl = [1, 10, 100],
      bl = [1, 10, 100, 999];

    function il(qq) {
      var Eq, gq, lq, Aq, uq, Wq, Nq, aq, Vq, dq;
      const {
        t: jq
      } = (0, mq.v)(), Hq = Nl(), {
        creator: oq,
        mode: Pq
      } = qq, [yq, tq] = (0, Yq.useState)(null !== (Eq = null === oq || void 0 === oq ? void 0 : oq.meta.item) && void 0 !== Eq ? Eq : null), [rq, vq] = (0, Yq.useState)(1), [hq, nq] = (0, Yq.useState)(0), [bq, iq] = (0, Yq.useState)(""), [Zq, fq] = (0, Yq.useState)(0), Mq = (0, Yq.useRef)(yq), Tq = (0, Yq.useRef)(!1), [zq, Sq] = (0, Yq.useState)(!1), pq = null !== (gq = null === oq || void 0 === oq ? void 0 : oq.meta.item) && void 0 !== gq ? gq : null, Gq = null !== (lq = null === oq || void 0 === oq ? void 0 : oq.meta.owned) && void 0 !== lq ? lq : 0;
      (0, Yq.useEffect)((() => {
        qq.searching || null === pq || pq === Mq.current || (Mq.current = pq, Tq.current = !1, tq(pq), nq(0), vq("list" === Pq ? Math.max(1, Gq) : 1))
      }), [pq, qq.searching]);
      const Lq = !!oq && !!yq && oq.meta.item === yq,
        Jq = Lq ? oq.meta.owned : null !== (Aq = null === (uq = qq.inventory) || void 0 === uq || null === (Wq = uq.find((qq => qq.item === yq))) || void 0 === Wq ? void 0 : Wq.quantity) && void 0 !== Aq ? Aq : 0,
        kq = "list" === Pq ? Math.max(1, Jq) : 45954,
        Rq = null !== (Nq = qq.prices[0]) && void 0 !== Nq ? Nq : null,
        Uq = qq.prices.length ? Math.round(qq.prices.reduce(((qq, Eq) => qq + Eq), 0) / qq.prices.length) : null,
        Fq = null === (aq = qq.inventory) || void 0 === aq || null === (Vq = aq.find((qq => qq.item === yq))) || void 0 === Vq ? void 0 : Vq.sellPrice;
      (0, Yq.useEffect)((() => {
        var qq;
        Lq && (vq((qq => "list" === Pq ? Math.min(Math.max(1, qq), Math.max(1, Jq)) : qq)), Tq.current || nq(null !== (qq = null !== Rq && void 0 !== Rq ? Rq : Uq) && void 0 !== qq ? qq : Math.max(1, null !== Fq && void 0 !== Fq ? Fq : 1)))
      }), [Lq, Jq, yq, Rq, Uq]);
      const sq = qq => {
          Tq.current = !0, nq(qq)
        },
        Xq = Eq => {
          var gq, Yq, lq;
          Mq.current = Eq, Tq.current = !1, Sq(!1), iq(""), fq((qq => qq + 1)), tq(Eq), nq(0), vq("list" === Pq && null !== (gq = null === (Yq = qq.inventory) || void 0 === Yq || null === (lq = Yq.find((qq => qq.item === Eq))) || void 0 === lq ? void 0 : lq.quantity) && void 0 !== gq ? gq : 1), (null === oq || void 0 === oq ? void 0 : oq.meta.item) !== Eq && qq.onPickItem(Eq)
        },
        wq = rq * hq,
        Kq = "list" === Pq && null !== oq && void 0 !== oq && oq.meta.fee ? function(qq, Eq) {
          const gq = Math.max(0, Eq - qq.taxFreeAllowance);
          return Math.ceil(Math.round(gq * qq.rate * 1e6) / 1e6)
        }(oq.meta.fee, wq) : 0,
        Cq = !!oq && Hq.isPending(oq.key),
        Iq = Lq && !qq.searching && rq >= 1 && hq >= 1 && ("order" === Pq || Jq >= rq) && !Cq,
        eq = !!yq && !Lq && !qq.searching && rq >= 1 && hq >= 1,
        Dq = () => {
          Iq ? Hq.act(oq.key, `${rq}|${hq}`) : eq && (qq.onPickItem(yq), Sq(!0))
        };
      (0, Yq.useEffect)((() => {
        zq && Lq && !qq.searching && (Sq(!1), Dq())
      }), [zq, Lq, qq.searching]);
      const qE = !!yq && !Lq && (qq.searching || zq),
        EE = yq ? cl(qq.names, yq) : "",
        gE = (0, Yq.useMemo)((() => Al(qq.catalogue, bq).slice(0, 8)), [qq.catalogue, bq]),
        YE = ("list" === Pq ? nl.filter((qq => qq < Jq)) : bl).map((qq => ({
          value: qq,
          label: String(qq)
        })));
      "list" === Pq && Jq > 0 && YE.push({
        value: Jq,
        label: jq("smpShop:all", {
          count: Jq
        })
      });
      const lE = [];
      return null !== Rq && (Rq > 1 && lE.push({
        value: Rq - 1,
        label: jq("smpShop:undercut", {
          price: pY(Rq - 1)
        })
      }), lE.push({
        value: Rq,
        label: jq("smpShop:lowest", {
          price: pY(Rq)
        })
      })), null !== Uq && Uq !== Rq && lE.push({
        value: Uq,
        label: jq("smpShop:average", {
          price: pY(Uq)
        })
      }), (0, Bq.jsxs)("div", {
        className: "SmpTradeForm",
        children: [(0, Bq.jsxs)("div", {
          className: "SmpTradeFormHead",
          children: [(0, Bq.jsx)("b", {
            children: jq("list" === Pq ? "smpShop:sellOnMarket" : "smpShop:createOrder")
          }), (0, Bq.jsx)("button", {
            type: "button",
            className: "SmpIconButton",
            "aria-label": jq("smpShop:close"),
            onClick: qq.onClose,
            children: (0, Bq.jsx)(xq.d, {
              name: "xmark"
            })
          })]
        }), "list" === Pq && (0, Bq.jsx)("div", {
          className: "SmpPicker",
          role: "listbox",
          children: null !== (dq = qq.inventory) && void 0 !== dq && dq.length ? qq.inventory.map((qq => {
            let {
              item: Eq,
              quantity: gq
            } = qq;
            return (0, Bq.jsx)("button", {
              type: "button",
              title: Eq,
              className: Oq()("SmpPickerSlot", {
                SmpPickerSlotOn: Eq === yq
              }),
              onClick: () => {
                Xq(Eq)
              },
              children: (0, Bq.jsx)(JY, {
                item: Eq,
                amount: gq
              })
            }, Eq)
          })) : (0, Bq.jsx)("span", {
            className: "SmpMuted",
            children: jq("smpShop:nothingToList")
          })
        }), ("list" === Pq || !yq) && (0, Bq.jsxs)("div", {
          className: "SmpItemSearch",
          children: [(0, Bq.jsx)(Qq.b, {
            className: "SmpSearchInput",
            placeholderText: jq("list" === Pq ? "smpShop:listSearchPlaceholder" : "smpShop:orderSearchPlaceholder"),
            defaultValue: bq,
            onValueChange: iq,
            blurOnEnter: !0,
            onEnter: () => {
              gE[0] && Xq(gE[0].name)
            }
          }, Zq), gE.length > 0 && (0, Bq.jsx)("div", {
            className: "SmpPicker",
            children: gE.map((qq => {
              let {
                name: Eq
              } = qq;
              return (0, Bq.jsx)("button", {
                type: "button",
                title: Eq,
                className: Oq()("SmpPickerSlot", {
                  SmpPickerSlotOn: Eq === yq
                }),
                onClick: () => {
                  Xq(Eq)
                },
                children: (0, Bq.jsx)(JY, {
                  item: Eq
                })
              }, Eq)
            }))
          })]
        }), yq && (0, Bq.jsxs)(Bq.Fragment, {
          children: [(0, Bq.jsxs)("div", {
            className: "SmpPickedName",
            children: [EE, qE && (0, Bq.jsx)(XY, {})]
          }), (0, Bq.jsxs)("div", {
            className: "SmpFormGrid",
            children: [(0, Bq.jsxs)("div", {
              className: "SmpField",
              children: [(0, Bq.jsxs)("span", {
                children: [jq("smpShop:quantity"), "list" === Pq && Lq && (0, Bq.jsx)("small", {
                  children: jq("smpShop:youHave", {
                    count: Jq
                  })
                })]
              }), (0, Bq.jsx)(wY, {
                value: rq,
                onChange: vq,
                max: kq,
                label: jq("smpShop:quantity")
              }), (0, Bq.jsx)(sY, {
                options: YE,
                value: rq,
                onChange: vq,
                ariaLabel: jq("smpShop:quantity")
              })]
            }), (0, Bq.jsxs)("div", {
              className: "SmpField",
              children: [(0, Bq.jsx)("span", {
                children: jq("smpShop:pricePerItem")
              }), (0, Bq.jsx)(wY, {
                value: Math.max(1, hq),
                onChange: sq,
                max: 9999999,
                step: KY,
                label: jq("smpShop:pricePerItem")
              }), (0, Bq.jsx)(sY, {
                options: lE,
                value: hq,
                onChange: sq,
                ariaLabel: jq("smpShop:pricePerItem")
              })]
            })]
          }), "list" === Pq && (0, Bq.jsxs)("div", {
            className: "SmpTradeSummary",
            children: [(0, Bq.jsxs)("span", {
              children: [jq("smpShop:youGet"), " ", (0, Bq.jsx)(kY, {
                amount: Math.max(0, wq - Kq),
                exact: !0
              })]
            }), (0, Bq.jsx)("small", {
              children: Kq > 0 ? jq("smpShop:listingFee", {
                fee: Kq.toLocaleString("en-US")
              }) : jq("smpShop:listingRules")
            })]
          }), (0, Bq.jsx)(cq.v, {
            className: "SmpSubmit",
            disabled: !Iq && !eq && !Cq,
            loading: Cq || qE || Lq && qq.searching,
            onClick: Dq,
            children: "list" === Pq ? jq("smpShop:listButton", {
              count: rq,
              item: EE
            }) : (0, Bq.jsxs)(Bq.Fragment, {
              children: [jq("smpShop:orderButton", {
                count: rq,
                item: EE
              }), " ", hq >= 1 && (0, Bq.jsx)(kY, {
                amount: wq
              })]
            })
          })]
        })]
      })
    }

    function Zl() {
      var qq;
      const {
        t: Eq
      } = (0, mq.v)(), gq = Nl(), lq = null === (qq = gq.shopInfo[gq.categoryKey]) || void 0 === qq ? void 0 : qq.items, Oq = gl(lq, "search"), xq = gl(lq, "creator"), Aq = El(lq, "enchantedCreator"), uq = El(lq, "listing"), Wq = gl(lq, "empty"), Nq = jl(Oq, uq.length > 0 || null !== Wq), {
        searched: aq,
        shown: Vq,
        loading: dq
      } = Nq, [jq, Hq] = (0, Yq.useState)(!1), [oq, Pq] = function() {
        const [qq, Eq] = (0, tl.b)("smpMarketView", "list");
        return ["grid" === qq ? "grid" : "list", Eq]
      }(), Qq = "grid" === oq, yq = (0, Yq.useMemo)((() => uq.filter((qq => {
        let {
          meta: Eq
        } = qq;
        return null !== Eq.seller && Eq.item === aq
      })).map((qq => {
        let {
          meta: Eq
        } = qq;
        return Eq.pricePerItem
      })).sort(((qq, Eq) => qq - Eq))), [uq, aq]), tq = (0, Yq.useMemo)((() => {
        const qq = new Set(Nq.catalogue.map((qq => {
          let {
            name: Eq
          } = qq;
          return Eq
        })));
        return function(qq) {
          for (const Eq in qq)
            if ("sell" === qq[Eq].smp) return El(qq[Eq].items, "sell").filter((qq => {
              let {
                item: Eq
              } = qq;
              return !Eq.enchant
            })).map((qq => {
              let {
                meta: Eq
              } = qq;
              return {
                item: Eq.item,
                quantity: Eq.quantity,
                sellPrice: Eq.pricePerItem
              }
            }));
          return []
        }(gq.shopInfo).filter((Eq => {
          let {
            item: gq
          } = Eq;
          return qq.has(gq)
        }))
      }), [gq.shopInfo, Nq.catalogue]);
      return (0, Bq.jsx)(Ql, {
        browser: Nq,
        className: "SmpMarketTab",
        recentLabel: Eq("smpShop:recentlyListed"),
        action: (0, Bq.jsx)(cq.v, {
          className: "SmpSellButton",
          onClick: () => {
            Hq((qq => !qq))
          },
          children: Eq("smpShop:sell")
        }),
        above: jq && (0, Bq.jsxs)(Bq.Fragment, {
          children: [(0, Bq.jsx)(il, {
            mode: "list",
            creator: xq,
            inventory: tq,
            catalogue: Nq.catalogue,
            names: Nq.names,
            searching: dq,
            prices: yq,
            onPickItem: Nq.searchFor,
            onClose: () => {
              Hq(!1)
            }
          }), Aq.length > 0 && (0, Bq.jsx)(fl, {
            entries: Aq
          })]
        }),
        listControls: (0, Bq.jsx)(vl, {
          view: oq,
          onChange: Pq
        }),
        summary: Vq && (uq.length > 0 ? Eq(1 === uq.length ? "smpShop:listingSummaryOne" : "smpShop:listingSummary", {
          count: uq.length,
          price: pY(yl(uq, "min"))
        }) : Eq("smpShop:noOneSelling", {
          item: cl(Nq.names, Vq)
        })),
        list: dq ? (0, Bq.jsx)(RY, {
          grid: Qq
        }) : uq.length > 0 ? (0, Bq.jsx)(hl, {
          entries: uq,
          view: oq
        }) : Wq ? (0, Bq.jsx)(FY, {
          entry: Wq
        }) : (0, Bq.jsx)(RY, {
          count: 3,
          grid: Qq
        })
      })
    }

    function fl(qq) {
      let {
        entries: Eq
      } = qq;
      const {
        t: gq
      } = (0, mq.v)(), lq = Nl(), [Oq, xq] = (0, Yq.useState)({});
      return (0, Bq.jsx)("div", {
        className: "SmpList",
        children: Eq.map((qq => {
          var Eq, Yq, mq;
          let {
            key: Aq,
            item: uq,
            meta: Wq
          } = qq;
          const Nq = null !== (Eq = Oq[Aq]) && void 0 !== Eq ? Eq : 1;
          return (0, Bq.jsxs)("div", {
            className: "SmpRow",
            children: [(0, Bq.jsx)(JY, {
              item: Wq.item,
              amount: Wq.quantity,
              tier: null !== (Yq = null === (mq = uq.enchant) || void 0 === mq ? void 0 : mq.tier) && void 0 !== Yq ? Yq : null
            }), (0, Bq.jsxs)("div", {
              className: "SmpRowText",
              children: [(0, Bq.jsx)("b", {
                children: (0, Bq.jsx)(hY.c, {
                  text: uq.customTitle
                })
              }), (0, Bq.jsx)("small", {
                children: gq("smpShop:enchantedListing")
              })]
            }), (0, Bq.jsx)(wY, {
              value: Nq,
              onChange: qq => {
                xq({
                  ...Oq,
                  [Aq]: qq
                })
              },
              max: 9999999,
              step: KY,
              label: gq("smpShop:pricePerItem")
            }), (0, Bq.jsxs)(cq.v, {
              loading: lq.isPending(Aq),
              onClick: () => {
                lq.act(Aq, String(Nq))
              },
              children: [gq("smpShop:list"), " ", (0, Bq.jsx)(kY, {
                amount: Nq
              })]
            })]
          }, Aq)
        }))
      })
    }
    const Ml = (0, Yq.memo)((function(qq) {
      let {
        itemKey: Eq,
        item: gq,
        quantity: Yq,
        pricePerItem: lq,
        tier: mq,
        selected: xq,
        onSelect: Aq
      } = qq;
      return (0, Bq.jsxs)("button", {
        type: "button",
        className: Oq()("SmpInventorySlot", {
          SmpInventorySlotOn: xq
        }),
        title: gq,
        onClick: () => {
          Aq(Eq)
        },
        children: [(0, Bq.jsx)(JY, {
          item: gq,
          amount: Yq,
          tier: mq
        }), (0, Bq.jsx)(kY, {
          amount: lq
        })]
      })
    }));

    function Tl() {
      var qq;
      const {
        t: Eq
      } = (0, mq.v)(), gq = Nl(), lq = null === (qq = gq.shopInfo[gq.categoryKey]) || void 0 === qq ? void 0 : qq.items, xq = El(lq, "sell"), Aq = gl(lq, "empty"), [cq, uq] = (0, Yq.useState)(null), [Wq, Nq] = (0, Yq.useState)({}), aq = xq.find((qq => {
        let {
          key: Eq
        } = qq;
        return Eq === cq
      }));
      return 0 === xq.length ? (0, Bq.jsx)("div", {
        className: "SmpScreen",
        children: (0, Bq.jsx)(UY, {
          title: Aq ? (0, Bq.jsx)(hY.c, {
            text: Aq.item.customTitle
          }) : Eq("smpShop:nothingToSell"),
          children: Aq && (0, Bq.jsx)(hY.c, {
            text: Aq.item.description
          })
        })
      }) : (0, Bq.jsxs)("div", {
        className: "SmpScreen SmpInstantSellTab",
        children: [(0, Bq.jsx)("div", {
          className: "SmpInventoryGrid",
          children: xq.map((qq => {
            var Eq, gq;
            let {
              key: Yq,
              item: lq,
              meta: Oq
            } = qq;
            return (0, Bq.jsx)(Ml, {
              itemKey: Yq,
              item: Oq.item,
              quantity: Oq.quantity,
              pricePerItem: Oq.pricePerItem,
              tier: null !== (Eq = null === (gq = lq.enchant) || void 0 === gq ? void 0 : gq.tier) && void 0 !== Eq ? Eq : null,
              selected: Yq === cq,
              onSelect: uq
            }, Yq)
          }))
        }), (0, Bq.jsx)("div", {
          className: Oq()("SmpSellBar", {
            SmpSellBarIdle: !aq
          }),
          children: aq ? (0, Bq.jsx)(zl, {
            entry: aq,
            choice: ul(aq.item, Wq[aq.key]),
            onChoose: qq => {
              Nq({
                ...Wq,
                [aq.key]: qq
              })
            }
          }) : (0, Bq.jsx)("span", {
            className: "SmpMuted",
            children: Eq("smpShop:tapToSell")
          })
        })]
      })
    }

    function zl(qq) {
      var Eq, gq, Yq, lq;
      let {
        entry: Oq,
        choice: xq,
        onChoose: Aq
      } = qq;
      const {
        t: uq
      } = (0, mq.v)(), Wq = Nl(), {
        key: Nq,
        item: aq,
        meta: Vq
      } = Oq, dq = ml("dropdown" === (null === (Eq = aq.userInput) || void 0 === Eq ? void 0 : Eq.type) ? aq.userInput.dropdownOptions : []), jq = null === xq ? 0 : -(0, yY.d)(aq, xq);
      return (0, Bq.jsxs)(Bq.Fragment, {
        children: [(0, Bq.jsx)(JY, {
          item: Vq.item,
          amount: Vq.quantity,
          tier: null !== (gq = null === (Yq = aq.enchant) || void 0 === Yq ? void 0 : Yq.tier) && void 0 !== gq ? gq : null
        }), (0, Bq.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, Bq.jsx)("b", {
            children: (0, Bq.jsx)(hY.c, {
              text: null !== (lq = aq.customTitle) && void 0 !== lq ? lq : Vq.item
            })
          }), (0, Bq.jsx)("small", {
            children: uq("smpShop:sellEach", {
              count: Vq.quantity
            })
          })]
        }), (0, Bq.jsx)(sY, {
          options: dq.map((qq => {
            let {
              label: Eq,
              quantity: gq,
              isAll: Yq
            } = qq;
            return {
              value: Eq,
              label: Yq ? uq("smpShop:all", {
                count: gq
              }) : String(gq)
            }
          })),
          value: xq,
          onChange: Aq,
          ariaLabel: uq("smpShop:quantity")
        }), (0, Bq.jsxs)(cq.v, {
          loading: Wq.isPending(Nq),
          disabled: null === xq,
          onClick: () => {
            Wq.act(Nq, xq)
          },
          children: [uq("smpShop:sellButton"), " ", (0, Bq.jsx)(kY, {
            amount: jq
          })]
        })]
      })
    }

    function Sl() {
      var qq;
      const {
        t: Eq
      } = (0, mq.v)(), gq = Nl(), Yq = null === (qq = gq.shopInfo[gq.categoryKey]) || void 0 === qq ? void 0 : qq.items, lq = El(Yq, "collect"), Oq = El(Yq, "myListing"), xq = (qq, Eq) => gq.isPending(qq) || !1 === Eq.canBuy;
      return (0, Bq.jsxs)("div", {
        className: "SmpScreen",
        children: [(0, Bq.jsx)("h3", {
          className: "SmpSectionTitle",
          children: Eq("smpShop:readyToCollect")
        }), lq.length > 0 ? (0, Bq.jsx)("div", {
          className: "SmpList",
          children: lq.map((qq => {
            var Yq, lq;
            let {
              key: Oq,
              item: mq,
              meta: Aq
            } = qq;
            return (0, Bq.jsxs)("div", {
              className: "SmpRow",
              children: [(0, Bq.jsx)(JY, {
                item: "sold" === Aq.type ? "Gold Coin" : Aq.item,
                amount: "sold" === Aq.type ? 0 : Aq.quantity,
                tier: null !== (Yq = null === (lq = mq.enchant) || void 0 === lq ? void 0 : lq.tier) && void 0 !== Yq ? Yq : null
              }), (0, Bq.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, Bq.jsx)("b", {
                  children: (0, Bq.jsx)(hY.c, {
                    text: mq.customTitle
                  })
                }), (0, Bq.jsx)("small", {
                  children: (0, Bq.jsx)(hY.c, {
                    text: mq.description
                  })
                })]
              }), (0, Bq.jsx)(cq.p, {
                loading: xq(Oq, mq),
                onClick: () => {
                  gq.act(Oq)
                },
                children: Eq("smpShop:collect")
              })]
            }, Oq)
          }))
        }) : (0, Bq.jsx)(UY, {
          title: Eq("smpShop:nothingToCollect"),
          children: Eq("smpShop:nothingToCollectHint")
        }), (0, Bq.jsx)("h3", {
          className: "SmpSectionTitle",
          children: Eq("smpShop:activeListings", {
            count: Oq.length
          })
        }), Oq.length > 0 ? (0, Bq.jsx)("div", {
          className: "SmpList",
          children: Oq.map((qq => {
            var Yq, lq;
            let {
              key: Oq,
              item: mq,
              meta: Aq
            } = qq;
            return (0, Bq.jsxs)("div", {
              className: "SmpRow",
              children: [(0, Bq.jsx)(JY, {
                item: Aq.item,
                amount: Aq.quantity,
                tier: null !== (Yq = null === (lq = mq.enchant) || void 0 === lq ? void 0 : lq.tier) && void 0 !== Yq ? Yq : null
              }), (0, Bq.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, Bq.jsx)("b", {
                  children: (0, Bq.jsx)(hY.c, {
                    text: mq.customTitle
                  })
                }), (0, Bq.jsx)("small", {
                  children: Eq("smpShop:timeLeft", {
                    time: Ol(Aq.expiresAt)
                  })
                })]
              }), (0, Bq.jsxs)("div", {
                className: "SmpRowPrice",
                children: [(0, Bq.jsx)(kY, {
                  amount: Aq.pricePerItem
                }), (0, Bq.jsx)("small", {
                  children: Eq("smpShop:each")
                })]
              }), (0, Bq.jsx)(cq.K, {
                loading: xq(Oq, mq),
                onClick: () => {
                  gq.act(Oq)
                },
                children: Eq("smpShop:cancel")
              })]
            }, Oq)
          }))
        }) : (0, Bq.jsx)(UY, {
          title: Eq("smpShop:noActiveListings"),
          children: Eq("smpShop:noActiveListingsHint")
        })]
      })
    }

    function pl(qq) {
      let {
        done: Eq,
        of: gq
      } = qq;
      return (0, Bq.jsx)("span", {
        className: "SmpProgress",
        children: (0, Bq.jsx)("i", {
          style: {
            width: `${Math.min(100,Eq/Math.max(1,gq)*100)}%`
          }
        })
      })
    }

    function Gl(qq) {
      var Eq, gq, Yq;
      let {
        entry: lq,
        choice: Oq,
        onChoose: xq
      } = qq;
      const {
        t: Aq
      } = (0, mq.v)(), uq = Nl(), {
        key: Wq,
        item: Nq,
        meta: aq
      } = lq, Vq = "dropdown" === (null === (Eq = Nq.userInput) || void 0 === Eq ? void 0 : Eq.type) ? Nq.userInput.dropdownOptions : [], dq = !0 === aq.processing, jq = null !== aq.creator && (aq.owned > 0 || dq), Hq = jq && aq.owned > 0 ? ml(Vq) : [], oq = null === Oq ? 0 : null !== (gq = null === (Yq = Hq.find((qq => qq.label === Oq))) || void 0 === Yq ? void 0 : Yq.quantity) && void 0 !== gq ? gq : 0;
      return (0, Bq.jsxs)("div", {
        className: "SmpRow SmpOrderRow",
        children: [(0, Bq.jsx)(JY, {
          item: aq.item
        }), (0, Bq.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, Bq.jsx)("b", {
            children: (0, Bq.jsx)(hY.c, {
              text: Nq.customTitle
            })
          }), (0, Bq.jsxs)("small", {
            children: [(0, Bq.jsx)(kY, {
              amount: aq.pricePerItem
            }), " ", Aq("smpShop:each"), " \xb7", " ", null === aq.creator ? Aq("smpShop:you") : (0, Bq.jsx)(hY.c, {
              text: [{
                entityName: aq.creator
              }]
            })]
          }), (0, Bq.jsx)(pl, {
            done: aq.delivered,
            of: aq.wanted
          })]
        }), jq ? (0, Bq.jsxs)(Bq.Fragment, {
          children: [(0, Bq.jsx)(sY, {
            options: Hq.map((qq => {
              let {
                label: Eq,
                quantity: gq,
                isAll: Yq
              } = qq;
              return {
                value: Eq,
                label: Yq ? Aq("smpShop:max", {
                  count: gq
                }) : String(gq)
              }
            })),
            value: Oq,
            onChange: xq,
            ariaLabel: Aq("smpShop:quantity")
          }), (0, Bq.jsxs)(cq.v, {
            loading: uq.isPending(Wq) || dq,
            disabled: null === Oq,
            onClick: () => {
              uq.act(Wq, Oq)
            },
            children: [Aq("smpShop:deliver"), " ", (0, Bq.jsx)(kY, {
              amount: oq * aq.pricePerItem
            })]
          })]
        }) : (0, Bq.jsx)("span", {
          className: "SmpMuted SmpRowNote",
          children: null === aq.creator ? Aq("smpShop:yourOrder") : Aq("smpShop:youHave", {
            count: 0
          })
        })]
      })
    }

    function Ll() {
      var qq;
      const {
        t: Eq
      } = (0, mq.v)(), gq = Nl(), lq = null === (qq = gq.shopInfo[gq.categoryKey]) || void 0 === qq ? void 0 : qq.items, Oq = gl(lq, "search"), xq = gl(lq, "creator"), Aq = El(lq, "order"), uq = gl(lq, "empty"), Wq = jl(Oq, Aq.length > 0 || null !== uq), [Nq, aq] = (0, Yq.useState)(!1), [Vq, dq] = (0, Yq.useState)({});
      return (0, Bq.jsx)(Ql, {
        browser: Wq,
        recentLabel: Eq("smpShop:recentOrders"),
        action: (0, Bq.jsx)(cq.v, {
          onClick: () => {
            aq((qq => !qq))
          },
          children: Eq("smpShop:createOrder")
        }),
        above: Nq && (0, Bq.jsx)(il, {
          mode: "order",
          creator: xq,
          catalogue: Wq.catalogue,
          names: Wq.names,
          searching: Wq.loading,
          prices: [],
          onPickItem: Wq.searchFor,
          onClose: () => {
            aq(!1)
          }
        }),
        onBack: () => {
          aq(!1)
        },
        summary: Aq.length > 0 && Eq(1 === Aq.length ? "smpShop:orderSummaryOne" : "smpShop:orderSummary", {
          count: Aq.length,
          price: pY(yl(Aq, "max"))
        }),
        list: Wq.loading ? (0, Bq.jsx)(RY, {}) : Aq.length > 0 ? (0, Bq.jsx)(al.c, {
          lazyLoadedClassName: "SmpList",
          observerRoot: "SmpBody",
          rootMargin: Yl,
          observerUpdateDeps: [Aq.length],
          children: Aq.map((qq => (0, Bq.jsx)(Gl, {
            entry: qq,
            choice: ul(qq.item, Vq[qq.key]),
            onChoose: Eq => {
              dq({
                ...Vq,
                [qq.key]: Eq
              })
            }
          }, qq.key)))
        }) : uq ? (0, Bq.jsx)(FY, {
          entry: uq
        }) : (0, Bq.jsx)(RY, {
          count: 3
        })
      })
    }

    function Jl() {
      var qq;
      const {
        t: Eq
      } = (0, mq.v)(), gq = Nl(), Yq = El(null === (qq = gq.shopInfo[gq.categoryKey]) || void 0 === qq ? void 0 : qq.items, "myOrder");
      return 0 === Yq.length ? (0, Bq.jsx)("div", {
        className: "SmpScreen",
        children: (0, Bq.jsx)(UY, {
          title: Eq("smpShop:noOrders"),
          children: Eq("smpShop:noOrdersHint")
        })
      }) : (0, Bq.jsx)("div", {
        className: "SmpScreen",
        children: (0, Bq.jsx)("div", {
          className: "SmpList",
          children: Yq.map((qq => {
            let {
              key: Yq,
              item: lq,
              meta: Oq
            } = qq;
            const mq = gq.isPending(Yq) || !1 === lq.canBuy;
            return (0, Bq.jsxs)("div", {
              className: "SmpRow",
              children: [(0, Bq.jsx)(JY, {
                item: Oq.item,
                amount: Oq.collectable
              }), (0, Bq.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, Bq.jsx)("b", {
                  children: (0, Bq.jsx)(hY.c, {
                    text: lq.customTitle
                  })
                }), (0, Bq.jsxs)("small", {
                  children: [(0, Bq.jsx)(kY, {
                    amount: Oq.pricePerItem
                  }), " ", Eq("smpShop:each"), Oq.collectable > 0 && ` \xb7 ${Eq("smpShop:readyCount",{count:Oq.collectable})}`]
                }), (0, Bq.jsx)(pl, {
                  done: Oq.delivered,
                  of: Oq.wanted
                })]
              }), Oq.collectable > 0 ? (0, Bq.jsx)(cq.p, {
                loading: mq,
                onClick: () => {
                  gq.act(Yq)
                },
                children: Eq("smpShop:collectCount", {
                  count: Oq.collectable
                })
              }) : (0, Bq.jsx)(cq.K, {
                loading: mq,
                onClick: () => {
                  gq.act(Yq)
                },
                children: Eq("smpShop:cancel")
              })]
            }, Yq)
          }))
        })
      })
    }
    const kl = new Set(["search", "creator", "enchantedCreator", "collect", "myOrder", "order"]),
      Rl = {
        sell: "coins",
        market: "store",
        collect: "backpack",
        orders: "file-clipboard",
        myOrders: "location-check"
      };

    function Ul(qq, Eq) {
      let gq = !1;
      const Yq = {};
      for (const lq in qq) Eq(lq, qq[lq]) ? Yq[lq] = qq[lq] : gq = !0;
      return gq ? Yq : qq
    }

    function Fl(qq) {
      var Eq, gq, lq, Aq;
      const {
        show: cq,
        shopInfo: uq,
        selectedCategoryKey: Wq
      } = qq, {
        t: Nq
      } = (0, mq.v)(), aq = null !== Wq && void 0 !== Wq ? Wq : "", Vq = ql(uq, aq), dq = null === (Eq = uq[aq]) || void 0 === Eq ? void 0 : Eq.items, jq = null !== Vq, [Hq, oq] = (0, Yq.useState)({}), [Pq, Qq] = (0, Yq.useState)([]), [yq, tq] = (0, Yq.useState)(!1), [rq, vq] = (0, Yq.useState)(null), [, hq] = (0, Yq.useState)(0), nq = (0, Yq.useRef)(0), bq = (0, Yq.useRef)({}), iq = (0, Yq.useRef)({
        items: dq,
        pending: Hq,
        shopInfo: uq,
        active: jq,
        canAfford: qq.canAfford,
        buy: qq.buy
      });
      iq.current = {
        items: dq,
        pending: Hq,
        shopInfo: uq,
        active: jq,
        canAfford: qq.canAfford,
        buy: qq.buy
      };
      const Zq = (0, Yq.useCallback)((qq => {
        nq.current++;
        const Eq = nq.current;
        Qq((gq => [{
          id: Eq,
          text: qq
        }, ...gq].slice(0, 8))), vq(Eq)
      }), []);
      (0, Yq.useEffect)((() => {
        if (null === rq) return;
        const qq = setTimeout((() => {
          vq(null)
        }), 3e3);
        return () => {
          clearTimeout(qq)
        }
      }), [rq]), (0, Yq.useEffect)((() => {
        const Eq = qq.message;
        if (!Eq) return;
        const {
          shopInfo: gq,
          active: Yq,
          items: lq
        } = iq.current, Oq = null !== Eq.categoryKey ? null !== ql(gq, Eq.categoryKey) : Yq;
        (Oq || Yq) && Zq(Eq.text), Oq && oq((qq => Ul(qq, (qq => {
          var Eq, gq;
          return !kl.has(null === lq || void 0 === lq || null === (Eq = lq[qq]) || void 0 === Eq || null === (gq = Eq.smp) || void 0 === gq ? void 0 : gq.kind)
        }))))
      }), [qq.message, Zq]), (0, Yq.useEffect)((() => {
        oq((qq => Ul(qq, ((qq, Eq) => Bl(null === dq || void 0 === dq ? void 0 : dq[qq]) === Eq.snapshot))))
      }), [uq, dq]);
      const fq = Object.keys(Hq).length > 0;
      (0, Yq.useEffect)((() => {
        if (!fq) return;
        const qq = setInterval((() => {
          hq((qq => qq + 1));
          const qq = Date.now(),
            {
              pending: Eq,
              items: gq
            } = iq.current,
            Yq = Object.keys(Eq).filter((gq => qq - Eq[gq].at >= 12e3));
          if (0 === Yq.length) return;
          const lq = Yq.some((qq => {
            var Yq, lq;
            return "search" !== (null === gq || void 0 === gq || null === (Yq = gq[qq]) || void 0 === Yq || null === (lq = Yq.smp) || void 0 === lq ? void 0 : lq.kind) || Eq[qq].resend
          }));
          for (const Oq of Yq) bq.current[Oq] = qq;
          oq((qq => Ul(qq, (qq => !Yq.includes(qq))))), lq && Zq(Nq("smpShop:noAnswer"))
        }), 500);
        return () => {
          clearInterval(qq)
        }
      }), [fq]), (0, Yq.useEffect)((() => {
        oq({})
      }), [aq]), (0, Yq.useEffect)((() => {
        cq || tq(!1)
      }), [cq]);
      const Mq = (0, Yq.useCallback)((function(qq, Eq) {
          let gq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const {
            items: Yq,
            pending: lq,
            canAfford: Oq,
            buy: mq
          } = iq.current, xq = null === Yq || void 0 === Yq ? void 0 : Yq[qq];
          if (!xq || qq in lq || !1 === xq.canBuy) return !1;
          if (!Oq(xq, (0, yY.d)(xq, Eq))) return !1;
          mq(qq, xq, Eq);
          const Aq = {
            snapshot: Bl(xq),
            at: Date.now(),
            resend: gq
          };
          return iq.current.pending = {
            ...iq.current.pending,
            [qq]: Aq
          }, oq((Eq => ({
            ...Eq,
            [qq]: Aq
          }))), !0
        }), []),
        Tq = (0, Yq.useMemo)((() => ({
          shopInfo: uq,
          categoryKey: aq,
          canAfford: qq.canAfford,
          isPending: qq => qq in Hq,
          gaveUpAt: qq => {
            var Eq;
            return null !== (Eq = bq.current[qq]) && void 0 !== Eq ? Eq : 0
          },
          act: Mq,
          notify: Zq
        })), [uq, aq, qq.canAfford, Hq, Mq, Zq]),
        zq = Math.min(...Object.values(Hq).map((qq => qq.at))),
        Sq = fq && Date.now() - zq > 1500,
        pq = Pq.length > 1,
        Gq = null !== (gq = null === (lq = uq[aq]) || void 0 === lq ? void 0 : lq.customTitle) && void 0 !== gq ? gq : aq,
        Lq = null === (Aq = uq[aq]) || void 0 === Aq ? void 0 : Aq.description;
      let Jq = null;
      return "market" === Vq ? Jq = (0, Bq.jsx)(Zl, {}) : "sell" === Vq ? Jq = (0, Bq.jsx)(Tl, {}) : "collect" === Vq ? Jq = (0, Bq.jsx)(Sl, {}) : "orders" === Vq ? Jq = (0, Bq.jsx)(Ll, {}) : "myOrders" === Vq && (Jq = (0, Bq.jsx)(Jl, {})), (0, Bq.jsx)(Wl.Provider, {
        value: Tq,
        children: (0, Bq.jsx)("div", {
          className: "SmpShopHost",
          hidden: !jq,
          children: (0, Bq.jsxs)("div", {
            className: "SmpShop",
            children: [(0, Bq.jsx)("header", {
              className: "SmpHeader",
              children: (0, Bq.jsxs)("div", {
                className: "SmpHeaderTitle",
                children: [(0, Bq.jsxs)("h2", {
                  children: [Vq && (0, Bq.jsx)(xq.d, {
                    name: Rl[Vq]
                  }), Nq(Gq)]
                }), Lq && (0, Bq.jsx)("p", {
                  children: (0, Bq.jsx)(hY.c, {
                    text: Lq
                  })
                })]
              })
            }), (0, Bq.jsx)("main", {
              className: "SmpBody",
              "data-pad-initial-area": !0,
              children: cq && Jq
            }), (0, Bq.jsxs)("button", {
              type: "button",
              className: Oq()("SmpStatus", {
                SmpStatusWaiting: fq,
                SmpStatusFresh: !fq && null !== rq,
                SmpStatusHasHistory: pq
              }),
              "aria-live": "polite",
              "aria-expanded": pq ? yq : void 0,
              onClick: () => {
                pq && tq((qq => !qq))
              },
              children: [fq ? (0, Bq.jsxs)("span", {
                className: "SmpStatusText",
                children: [(0, Bq.jsx)(XY, {}), Nq(Sq ? "smpShop:slowConnection" : "smpShop:waiting")]
              }) : Pq[0] ? (0, Bq.jsx)("span", {
                className: "SmpStatusText",
                children: (0, Bq.jsx)(hY.c, {
                  text: Pq[0].text
                })
              }, Pq[0].id) : (0, Bq.jsx)("span", {
                className: "SmpStatusText SmpMuted",
                children: Nq("smpShop:ready")
              }), pq && (0, Bq.jsx)("small", {
                children: Nq("smpShop:recentMessages", {
                  count: Pq.length
                })
              })]
            }), yq && pq && (0, Bq.jsx)("div", {
              className: "SmpStatusHistory",
              children: Pq.map((qq => (0, Bq.jsx)("div", {
                children: (0, Bq.jsx)(hY.c, {
                  text: qq.text
                })
              }, qq.id)))
            })]
          })
        })
      })
    }
    class sl {
      constructor(qq) {
        this.info = qq
      }
      static fromShopInfo(qq) {
        const Eq = {};
        for (const gq in qq) {
          const Yq = !0 === qq[gq].redDot && !0 !== qq[gq].forceRemoveRedDot;
          Eq[gq] = {
            redDot: Yq,
            items: {}
          };
          for (const lq in qq[gq].items) {
            const Yq = qq[gq].items[lq],
              Oq = !0 === Yq.redDot && !0 !== Yq.forceRemoveRedDot;
            Eq[gq].items[lq] = {
              redDot: Oq
            }
          }
        }
        return new sl(Eq)
      }
      anyCategoryHasRedDots() {
        for (const qq in this.info)
          if (this.categoryHasRedDot(qq)) return !0;
        return !1
      }
      doesCategoryExist(qq) {
        return !(0, RE.H)(this.info[qq])
      }
      categoryHasRedDot(qq) {
        return !0 === this.info[qq].redDot
      }
      updateCategoryRedDot(qq, Eq) {
        this.info[qq].redDot = Eq
      }
      doesItemExist(qq, Eq) {
        return this.doesCategoryExist(qq) && !(0, RE.H)(this.info[qq].items[Eq])
      }
      itemHasRedDot(qq, Eq) {
        return !0 === this.info[qq].items[Eq].redDot
      }
      updateItemRedDot(qq, Eq, gq) {
        this.info[qq].items[Eq].redDot = gq
      }
      shallowCopy() {
        return new sl(this.info)
      }
    }

    function Xl(qq, Eq) {
      return `${qq}\x1f${Eq}`
    }

    function wl(qq, Eq) {
      return !(0, RE.H)(Eq) && !(0, RE.H)(qq) && Eq in qq
    }
    const Kl = (0, Yq.memo)((function(qq) {
      var Eq, gq;
      let {
        show: lq
      } = qq;
      const mq = (0, Cg.f)("players", EO),
        xq = (0, Cg.f)("players", gO),
        uq = (0, MY.c)(),
        [Nq, aq] = (0, Yq.useState)({
          shopInfo: {},
          userInputsPerItem: {},
          redDotInfo: sl.fromShopInfo({}),
          currencyAmounts: {},
          selectedCategoryKey: null,
          onBoughtInfo: null,
          awaitingPurchase: !1
        }),
        dq = (0, Yq.useRef)(""),
        jq = (0, Yq.useRef)(null),
        oq = (0, Yq.useRef)(null),
        Pq = (0, Yq.useRef)(0),
        Qq = (0, Yq.useRef)(void 0),
        yq = (0, Yq.useRef)(null),
        tq = (0, Yq.useRef)(Nq),
        vq = Nq.redDotInfo.anyCategoryHasRedDots(),
        [hq, bq] = (0, Yq.useState)(null),
        iq = (0, Yq.useRef)(!1);
      let Zq = !1,
        fq = 0,
        Mq = 0;
      if (Nq.currencyAmounts) {
        for (const qq in Nq.currencyAmounts) {
          var Tq;
          const Eq = Nq.currencyAmounts[qq];
          Eq.hidden || (fq++, (null === (Tq = Eq.subtext) || void 0 === Tq ? void 0 : Tq.length) > 0 && Mq++)
        }
        Zq = fq + Mq > 4
      }(0, Yq.useEffect)((() => {
        UE.i.TV("showShopIconRedDot", vq, !0)
      }), [vq]), (0, Yq.useEffect)((() => {
        Hq.gameBridge.send("setShopOpen", lq), lq || (clearTimeout(Qq.current), aq((qq => qq.awaitingPurchase ? {
          ...qq,
          awaitingPurchase: !1
        } : qq)))
      }), [lq]), (0, Yq.useEffect)((() => () => {
        Hq.gameBridge.send("setShopOpen", !1), clearTimeout(Qq.current)
      }), []), (0, Yq.useEffect)((() => {
        tq.current = Nq
      }), [Nq]), (0, Yq.useEffect)((() => {
        if (null === hq) return;
        return (0, ZY.e)("pointerdown", (qq => {
          const Eq = qq.target;
          null !== Eq && void 0 !== Eq && Eq.closest(".ShopItem") || bq(null)
        }))
      }), [hq]);
      const zq = qq => {
          aq((Eq => ({
            ...Eq,
            ...qq
          })))
        },
        Sq = qq => {
          var Eq;
          clearTimeout(null === (Eq = Nq.onBoughtInfo) || void 0 === Eq ? void 0 : Eq.timeout);
          const gq = setTimeout((() => {
            zq({
              onBoughtInfo: null
            })
          }), 3e3);
          dq.current = qq, zq({
            onBoughtInfo: {
              text: qq,
              timeout: gq,
              categoryKey: jq.current
            }
          })
        },
        pq = qq => {
          const {
            shopInfo: Eq,
            userInputsPerItem: gq,
            redDotInfo: Yq,
            autoSelectCategory: Oq
          } = function(qq, Eq, gq, Yq, lq, Oq) {
            if ((0, RE.H)(qq) || 0 === Object.keys(qq).length) return {
              shopInfo: {},
              userInputsPerItem: {},
              redDotInfo: sl.fromShopInfo({}),
              autoSelectCategory: null
            };
            const mq = nq.k[nq.n].adConfig.showRewardedAds,
              xq = {};
            let Aq = null;
            for (const dq in qq) {
              const Eq = qq[dq],
                gq = {};
              let Yq = !1;
              for (const qq in Eq.items) {
                const lq = Eq.items[qq];
                (0, yY.h)(lq, mq) && (gq[qq] = lq, Yq = !0)
              }
              Yq && (xq[dq] = {
                ...Eq,
                items: gq
              }, !0 === Eq.autoSelectCategory && (Aq = dq))
            }
            const cq = {},
              uq = (qq, Eq, Yq, mq) => {
                var xq, Aq;
                const uq = Xl(qq, Eq),
                  Bq = null !== (xq = gq[uq]) && void 0 !== xq ? xq : gq[Eq];
                if (null !== (Aq = mq.userInput) && void 0 !== Aq && Aq.type) switch (mq.userInput.type) {
                  case "dropdown": {
                    var Wq;
                    const qq = !Bq || !mq.userInput.dropdownOptions.some((qq => (0, yY.f)(qq) === Bq)),
                      Eq = mq.userInput.shouldResetSelectionOnOptionsChange && ("dropdown" !== (null === Yq || void 0 === Yq || null === (Wq = Yq.userInput) || void 0 === Wq ? void 0 : Wq.type) || JSON.stringify(Yq.userInput.dropdownOptions) !== JSON.stringify(mq.userInput.dropdownOptions)),
                      gq = mq.userInput,
                      lq = !(0, RE.H)(gq.initialValue) && gq.dropdownOptions.some((qq => (0, yY.f)(qq) === gq.initialValue));
                    var Nq;
                    return void(qq || Eq ? lq ? cq[uq] = null !== (Nq = mq.userInput.initialValue) && void 0 !== Nq ? Nq : null : mq.userInput.dropdownOptions.length > 0 ? cq[uq] = (0, yY.f)(mq.userInput.dropdownOptions[0]) : cq[uq] = null : cq[uq] = Bq)
                  }
                  case "text":
                  case "number":
                    var aq, Vq, dq;
                    return void((null === Yq || void 0 === Yq ? void 0 : Yq.userInput) !== mq.userInput ? cq[uq] = null !== (aq = null !== (Vq = mq.userInput.initialValue) && void 0 !== Vq ? Vq : Bq) && void 0 !== aq ? aq : "" : cq[uq] = null !== (dq = null !== Bq && void 0 !== Bq ? Bq : mq.userInput.initialValue) && void 0 !== dq ? dq : "");
                  case "color":
                    var jq, Hq, oq;
                    return void((null === Yq || void 0 === Yq ? void 0 : Yq.userInput) !== mq.userInput ? cq[uq] = null !== (jq = null !== (Hq = mq.userInput.initialValue) && void 0 !== Hq ? Hq : Bq) && void 0 !== jq ? jq : "#000000" : cq[uq] = null !== (oq = null !== Bq && void 0 !== Bq ? Bq : mq.userInput.initialValue) && void 0 !== oq ? oq : "#000000");
                  case "player": {
                    const qq = (0, yY.g)(lq, Oq, mq.userInput);
                    return void(Bq && qq.includes(Bq) ? cq[uq] = Bq : cq[uq] = qq.length > 0 ? qq[0] : null)
                  }
                }
              };
            for (const dq in xq)
              for (const qq in xq[dq].items) {
                var Bq;
                const gq = xq[dq].items[qq];
                uq(dq, qq, null === (Bq = Eq[dq]) || void 0 === Bq ? void 0 : Bq.items[qq], gq)
              }
            const Wq = sl.fromShopInfo(xq);
            for (const dq in xq) {
              var Nq;
              if (Yq.doesCategoryExist(dq)) {
                (null === (Nq = Eq[dq]) || void 0 === Nq ? void 0 : Nq.redDot) === xq[dq].redDot && Wq.updateCategoryRedDot(dq, Yq.categoryHasRedDot(dq));
                for (const qq in xq[dq].items) {
                  var aq, Vq;
                  Yq.doesItemExist(dq, qq) && (null === (aq = Eq[dq]) || void 0 === aq || null === (Vq = aq.items[qq]) || void 0 === Vq ? void 0 : Vq.redDot) === xq[dq].items[qq].redDot && Wq.updateItemRedDot(dq, qq, Yq.itemHasRedDot(dq, qq))
                }
              }
            }
            return {
              shopInfo: xq,
              userInputsPerItem: cq,
              redDotInfo: Wq,
              autoSelectCategory: Aq
            }
          }(qq, Nq.shopInfo, Nq.userInputsPerItem, Nq.redDotInfo, mq, xq), Aq = {
            shopInfo: Eq,
            userInputsPerItem: gq,
            redDotInfo: Yq
          };
          if (null === Oq || lq)
            if (Eq[Nq.selectedCategoryKey]) Aq.selectedCategoryKey = Nq.selectedCategoryKey;
            else {
              const qq = zY(Eq);
              Aq.selectedCategoryKey = qq.length > 0 ? qq[0] : null
            }
          else Aq.selectedCategoryKey = Oq;
          return 0 === Object.keys(Eq).length && lq && rq.b.set({
            openEverythingMenuName: null
          }), Aq
        },
        Lq = (qq, Eq, gq) => {
          const Yq = Nq.selectedCategoryKey,
            lq = Xl(Yq, qq),
            Oq = null !== gq && void 0 !== gq ? gq : Nq.userInputsPerItem[lq],
            mq = {
              categoryKey: Yq,
              itemKey: qq,
              userInput: Oq
            };
          if (jq.current = Yq, Eq.isRewardedAd) {
            if (Date.now() - Pq.current < 5e3) return;
            (0, OE.kb)((() => {
              var gq, Yq, Oq;
              console.log("bought rewarded ad");
              const xq = mq.categoryKey ? null === (gq = tq.current.shopInfo[mq.categoryKey]) || void 0 === gq ? void 0 : gq.items[qq] : null;
              if (!xq || !xq.isRewardedAd) return void console.warn("Shop item no longer valid or a rewarded ad, early out");
              (null === (Yq = Eq.userInput) || void 0 === Yq ? void 0 : Yq.type) === (null === xq || void 0 === xq || null === (Oq = xq.userInput) || void 0 === Oq ? void 0 : Oq.type) ? (mq.userInput = tq.current.userInputsPerItem[lq], Hq.gameBridge.send("buyShopItem", mq), Eq.onBoughtMessage && Sq(Eq.onBoughtMessage)) : console.warn("Shop item input type changed, early out")
            })), Pq.current = Date.now()
          } else {
            Hq.gameBridge.send("buyShopItem", mq), zq({
              awaitingPurchase: !0
            }), clearTimeout(Qq.current), Qq.current = setTimeout((() => {
              yq.current = null, zq({
                awaitingPurchase: !1
              })
            }), 1e3);
            const qq = (0, yY.d)(Eq, Oq);
            if (yq.current = null, !isNaN(qq) && wl(Nq.currencyAmounts, Eq.currency)) {
              0 !== qq && (yq.current = {
                currency: Eq.currency,
                amountBefore: Nq.currencyAmounts[Eq.currency].amount
              });
              const gq = {
                ...Nq.currencyAmounts
              };
              gq[Eq.currency].amount -= qq, zq({
                currencyAmounts: gq
              })
            }
            Eq.onBoughtMessage && Sq(Eq.onBoughtMessage)
          }
        },
        Jq = (qq, Eq) => {
          if (null === Eq || !qq.shopInfo[Eq]) return qq;
          let gq = qq.redDotInfo;
          return gq.categoryHasRedDot(Eq) && (gq.updateCategoryRedDot(Eq, !1), gq = gq.shallowCopy()), {
            ...qq,
            selectedCategoryKey: Eq,
            redDotInfo: gq
          }
        },
        kq = qq => {
          aq((Eq => Jq(Eq, qq)))
        };
      (0, nE.f)(fY.m, (() => {
        aq((qq => {
          const Eq = (0, fY.n)(zY(qq.shopInfo), qq.selectedCategoryKey, (Eq => (0, fY.j)(qq.shopInfo[Eq].items)));
          return Eq === qq.selectedCategoryKey ? qq : Jq(qq, Eq)
        }))
      })), (0, nE.f)("showShopFromServer", (qq => {
        let {
          toggle: Eq,
          kg: gq
        } = qq;
        gq && kq(gq), 0 === Object.keys(Nq.shopInfo).length || Eq && lq ? rq.b.set({
          openEverythingMenuName: null
        }) : rq.b.set({
          openEverythingMenuName: cE.p.SHOP
        })
      })), (0, nE.f)("closeShopOnDamaged", (() => {
        lq && rq.b.set({
          openEverythingMenuName: null
        })
      })), (0, nE.f)("overShopInfo", (qq => {
        Sq(qq)
      })), (0, Vq.g)("currencyAmounts", (qq => {
        var Eq;
        const gq = yq.current;
        gq && (null === qq || void 0 === qq || null === (Eq = qq[gq.currency]) || void 0 === Eq ? void 0 : Eq.amount) === gq.amountBefore ? zq({
          currencyAmounts: qq
        }) : (yq.current = null, zq({
          currencyAmounts: qq,
          awaitingPurchase: !1
        }))
      })), (0, Vq.g)("shopInfo", (qq => {
        zq({
          ...pq(qq),
          awaitingPurchase: !1
        })
      }));
      const Rq = (0, Yq.useRef)({
        playerIds: mq,
        localPlayerId: xq
      });
      (0, Yq.useEffect)((() => {
        Rq.current.playerIds === mq && Rq.current.localPlayerId === xq || (Rq.current = {
          playerIds: mq,
          localPlayerId: xq
        }, aq((qq => {
          const Eq = pq(qq.shopInfo);
          return {
            ...qq,
            ...Eq
          }
        })))
      }), [mq, xq]);
      const Uq = Nq.selectedCategoryKey,
        Fq = (qq, Eq) => {
          var gq, Yq;
          return (isNaN(Eq) || (0, RE.H)(qq.currency) || wl(Nq.currencyAmounts, qq.currency) && Eq <= Nq.currencyAmounts[qq.currency].amount) && (null === (gq = qq.canBuy) || void 0 === gq || gq) && !(null !== (Yq = qq.hidden) && void 0 !== Yq && Yq)
        },
        sq = (qq, Eq) => {
          var gq, Yq, lq;
          const mq = Xl(Uq, qq),
            xq = Nq.shopInfo[Uq].items[qq],
            uq = Nq.userInputsPerItem[mq],
            Wq = (0, yY.d)(xq, uq),
            aq = Fq(xq, Wq),
            Vq = xq.enchant,
            dq = Vq ? (0, Gq.Eb)(null !== (gq = xq.customTitle) && void 0 !== gq ? gq : qq, {
              colour: Gq.Ab[Vq.tier]
            }) : null !== (Yq = xq.customTitle) && void 0 !== Yq ? Yq : qq,
            jq = Eq => {
              const gq = null !== Eq && void 0 !== Eq ? Eq : uq,
                Yq = void 0 !== Eq ? (0, yY.d)(xq, Eq) : Wq;
              Fq(xq, Yq) && null !== gq && Lq(qq, xq, Eq);
              let lq = Nq.redDotInfo;
              lq.itemHasRedDot(Uq, qq) && (lq.updateItemRedDot(Uq, qq, !1), lq = lq.shallowCopy()), zq({
                redDotInfo: lq
              })
            };
          return (0, Bq.jsxs)("div", {
            className: Oq()("ShopItem", {
              ShopItemNoInput: !xq.userInput,
              ShopItemNoInputCanBuy: !xq.userInput && aq,
              ShopItemNoInputSelected: xq.isSelected,
              ShopItemEnchant: !!Vq
            }),
            "data-pad-focusable": !xq.userInput || void 0,
            "data-pad-unavailable": !xq.userInput && !aq || void 0,
            "data-pad-repeat": null !== (lq = (0, fY.d)(xq)) && void 0 !== lq ? lq : void 0,
            "data-pad-repeat-wait": Nq.awaitingPurchase || void 0,
            onClick: () => {
              if (Vq && iq.current) {
                if (hq !== mq) return void bq(mq);
                bq(null)
              }
              xq.userInput || jq()
            },
            onPointerDown: qq => {
              Vq && (iq.current = (0, rY.q)(qq))
            },
            onPointerEnter: qq => {
              Vq && !(0, rY.q)(qq) && bq(mq)
            },
            onPointerLeave: qq => {
              Vq && !(0, rY.q)(qq) && bq((qq => qq === mq ? null : qq))
            },
            style: {
              zIndex: Object.keys(Nq.shopInfo[Uq].items).length - Eq
            },
            children: [Nq.redDotInfo.itemHasRedDot(Uq, qq) && (0, Bq.jsx)(Aq.d, {
              top: "-6px",
              right: "-6px"
            }), xq.badge && (0, Bq.jsx)("div", {
              className: "ShopBadgeContainer",
              children: (0, Bq.jsx)("div", {
                className: Oq()("ShopBadgeMain", xq.badge.type),
                children: (0, Bq.jsx)(hY.c, {
                  text: xq.badge.text
                })
              })
            }), (0, Bq.jsx)("div", {
              className: "ShopItemLeft",
              children: xq.image && (0, Bq.jsx)(Cl, {
                item: xq,
                minWidth: 5,
                minHeight: 4.8
              })
            }), (0, Bq.jsxs)("div", {
              className: "ShopItemRight",
              children: [(0, Bq.jsxs)("div", {
                className: "ShopItemHeader",
                children: [(0, Bq.jsx)("div", {
                  className: "ShopItemHeaderTitle",
                  children: (0, Bq.jsx)(hY.c, {
                    text: dq
                  })
                }), (0, Bq.jsx)("div", {
                  className: "ShopItemHeaderDescription",
                  children: (0, Bq.jsx)(hY.c, {
                    text: xq.description
                  })
                })]
              }), xq.userInput && (0, Bq.jsxs)("div", {
                className: "ShopItemInputsContainer",
                onClick: qq => {
                  qq.stopPropagation()
                },
                children: [(0, Bq.jsx)(Dl, {
                  item: xq,
                  currInput: uq,
                  updateInput: Eq => {
                    ((qq, Eq, gq) => {
                      const Yq = Xl(qq, Eq),
                        lq = {
                          ...Nq.userInputsPerItem
                        };
                      lq[Yq] = gq, zq({
                        userInputsPerItem: lq
                      })
                    })(Uq, qq, Eq)
                  },
                  onSubmit: qq => {
                    jq(qq)
                  }
                }), ("dropdown" !== xq.userInput.type || !xq.userInput.autoSubmit) && (0, Bq.jsx)(cq.g, {
                  className: "ItemCostButton",
                  disabled: !aq && null !== uq,
                  onClick: () => {
                    jq()
                  },
                  children: (0, Bq.jsx)(el, {
                    item: xq,
                    cost: Wq,
                    currencyAmounts: Nq.currencyAmounts
                  })
                })]
              })]
            }), !xq.userInput && (0, Bq.jsx)("div", {
              className: "ShopItemNoInputCost",
              children: (0, Bq.jsx)(el, {
                item: xq,
                cost: Wq,
                currencyAmounts: Nq.currencyAmounts
              })
            }), Vq && hq === mq && (0, Bq.jsxs)("div", {
              className: "ShopItemEnchantInfo SmallTextBold",
              children: [(0, Bq.jsx)(hY.c, {
                text: dq
              }), (0, Bq.jsx)("div", {
                className: "ShopItemEnchantInfoDescription",
                children: (0, Bq.jsx)(hY.c, {
                  text: (0, tY.e)("", Vq.enchantments, Vq.enchantmentData)
                })
              })]
            })]
          }, mq)
        },
        Xq = function(qq) {
          for (const Eq in qq)
            if (qq[Eq].smp) return !0;
          return !1
        }(Nq.shopInfo),
        wq = ql(Nq.shopInfo, Uq);
      return (0, Bq.jsx)(oY.d, {
        className: "Menu ShopBody",
        show: lq,
        children: 0 !== Object.keys(Nq.shopInfo).length && (0, Bq.jsxs)(Bq.Fragment, {
          children: [(0, Bq.jsxs)("div", {
            className: "MenuSideBar",
            children: [(0, Bq.jsx)(Wq, {
              items: zY(Nq.shopInfo).map((qq => {
                var Eq;
                return {
                  id: qq,
                  title: null !== (Eq = Nq.shopInfo[qq].customTitle) && void 0 !== Eq ? Eq : qq,
                  redDot: Nq.redDotInfo.categoryHasRedDot(qq)
                }
              })),
              link: uq ? {
                faIcon: "users-gear",
                title: "lobbyManageEntry:manageLobby",
                onClick: () => {
                  (0, TY.f)({
                    page: (0, TY.b)(),
                    source: "shop"
                  })
                }
              } : void 0,
              selectedItemId: Uq,
              onClick: kq,
              padStartsOnTab: (0, fY.g)(Uq)
            }), (0, Bq.jsx)("div", {
              className: "MenuSideBarFooter",
              children: Nq.currencyAmounts && Object.keys(Nq.currencyAmounts).map((qq => {
                var Eq;
                const gq = Nq.currencyAmounts[qq];
                return gq.hidden ? null : (0, Bq.jsxs)("div", {
                  className: "ShopCurrencyDiv " + (Zq ? "SmallText" : ""),
                  children: [(0, Bq.jsxs)("div", {
                    className: "ShopCurrencyDetails",
                    children: [(0, Bq.jsx)("div", {
                      className: "ShopCurrencyAmtIcon",
                      style: {
                        color: gq.iconColour
                      },
                      children: (0, Bq.jsx)(YO, {
                        iconName: gq.icon
                      })
                    }), "\xa0", (0, QY.c)(gq.amount, 6)]
                  }), (null === (Eq = gq.subtext) || void 0 === Eq ? void 0 : Eq.length) > 0 && (0, Bq.jsx)("div", {
                    className: "ShopCurrencySubtext",
                    children: (0, Bq.jsx)(hY.c, {
                      text: gq.subtext
                    })
                  })]
                }, qq)
              }))
            })]
          }), (0, Bq.jsxs)("div", {
            className: "MenuBody ShopMenuBody",
            children: [Xq && (0, Bq.jsx)(Fl, {
              show: lq,
              shopInfo: Nq.shopInfo,
              selectedCategoryKey: Uq,
              buy: (qq, Eq, gq) => {
                Lq(qq, Eq, gq)
              },
              canAfford: Fq,
              message: Nq.onBoughtInfo
            }), null === wq && (0, Bq.jsxs)(Bq.Fragment, {
              children: [(0, Bq.jsx)("div", {
                className: Oq()("ShopOnBoughtInfo", {
                  ShopOnBoughtInfoShow: null !== Nq.onBoughtInfo
                }),
                children: (0, Bq.jsx)(hY.c, {
                  text: dq.current
                })
              }), (0, Bq.jsx)("div", {
                className: "ShopItemsWrapper",
                children: (0, Bq.jsxs)("div", {
                  className: "ShopItemsInner",
                  children: [(null === (Eq = Nq.shopInfo[Uq]) || void 0 === Eq ? void 0 : Eq.description) && (0, Bq.jsx)("div", {
                    className: "ShopCategoryDescription",
                    children: (0, Bq.jsx)(hY.c, {
                      text: Nq.shopInfo[Uq].description
                    })
                  }), lq && (0, Bq.jsx)("div", {
                    className: "ShopItems",
                    ref: oq,
                    "data-pad-initial-area": !0,
                    children: zY(null === (gq = Nq.shopInfo[Uq]) || void 0 === gq ? void 0 : gq.items).map(((qq, Eq) => sq(qq, Eq)))
                  })]
                })
              })]
            })]
          })]
        })
      })
    }));

    function Cl(qq) {
      let {
        item: Eq,
        minWidth: gq,
        minHeight: Yq
      } = qq;
      const {
        image: lq,
        schematicId: Oq,
        imageColour: mq
      } = Eq;
      if (Oq) return (0, Bq.jsx)("div", {
        className: "ShopSchematic",
        style: {
          width: `${gq}rem`,
          height: `${Yq}rem`
        },
        children: (0, Bq.jsx)(nY.d, {
          game: {
            schematicId: Oq
          }
        })
      });
      var Aq, cq;
      if ((0, vY.i)(lq)) return (0, Bq.jsx)("div", {
        className: "ShopBlock",
        style: {
          minWidth: `${gq}rem`,
          height: "0",
          minHeight: `${Yq}rem`
        },
        children: (0, Bq.jsx)(vY.e, {
          itemName: lq,
          amount: null !== (Aq = Eq.amount) && void 0 !== Aq ? Aq : 0,
          amountFontSize: Yq / 4 + "rem",
          enchantmentTier: null === (cq = Eq.enchant) || void 0 === cq ? void 0 : cq.tier
        })
      });
      const uq = lq.slice(-4);
      return ".jpg" === uq || ".png" === uq ? (0, Bq.jsx)(Il, {
        image: lq,
        minWidth: gq
      }) : (0, Bq.jsx)(xq.d, {
        name: lq,
        className: "SelectedItemImage",
        style: {
          color: mq
        }
      })
    }

    function Il(qq) {
      let {
        image: Eq,
        minWidth: gq
      } = qq;
      const {
        gameNameWithVariation: Yq
      } = (0, Cg.g)("connectedGame"), lq = Eq.endsWith(".jpg");
      return (0, Bq.jsx)("img", {
        className: Oq()({
          ShopPixelImage: !lq
        }),
        style: {
          width: `${lq?1.6*gq:gq}rem`,
          height: "auto",
          fontSize: "1.25rem"
        },
        src: `/textures/games/${(0,Gq.Yb)(Yq)}/${Eq}`,
        alt: Eq,
        draggable: !1
      })
    }

    function el(qq) {
      let {
        item: Eq,
        cost: gq,
        currencyAmounts: Yq
      } = qq;
      const lq = !isNaN(gq) && 0 !== gq && wl(Yq, Eq.currency);
      let Oq = null;
      return Eq.buyButtonText ? Oq = Eq.buyButtonText : lq ? (Oq = gq, Eq.sell && (Oq = -1 * gq), Oq = Oq.toString()) : 0 === gq ? Oq = "Free" : Eq.isRewardedAd && (Oq = "Watch ad"), (0, RE.H)(Oq) || " " === Oq ? null : (0, Bq.jsxs)("div", {
        className: "BuyItemCostAndIcon",
        children: [lq && (0, Bq.jsx)("div", {
          style: {
            color: Yq[Eq.currency].iconColour
          },
          className: "BuyItemIcon",
          children: (0, Bq.jsx)(YO, {
            iconName: Yq[Eq.currency].icon
          })
        }), (0, Bq.jsx)("div", {
          className: "BuyItemCost",
          children: (0, Bq.jsx)(hY.c, {
            text: Oq
          })
        })]
      })
    }

    function Dl(qq) {
      let {
        item: Eq,
        currInput: gq,
        updateInput: lq,
        onSubmit: Oq
      } = qq;
      const {
        t: xq
      } = (0, mq.v)(), Aq = (0, Yq.useRef)(null);
      if ((0, Yq.useEffect)((() => {
          const qq = Aq.current;
          qq && qq.value !== gq && document.activeElement !== qq && (qq.value = null !== gq && void 0 !== gq ? gq : "")
        }), [gq]), !Eq.userInput) return null;
      let cq = Eq.userInput;
      if (jq.featureFlags.sanitizeShopInput && "text" === Eq.userInput.type && (cq = {
          type: "number",
          placeholderText: "Numbers Only"
        }), "text" === cq.type || "number" === cq.type) {
        var uq, Wq;
        console.assert(void 0 !== gq, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(Eq)}`);
        const qq = "text" === cq.type && cq.wordCharsOnly;
        return (0, Bq.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputTextWrapper",
          children: (0, Bq.jsx)(Qq.b, {
            className: "ShopItemUserInputText",
            placeholderText: xq(cq.placeholderText),
            defaultValue: gq,
            domRef: Aq,
            onValueChange: (Eq, gq) => {
              !0 === qq && (Eq = (0, iY.tb)(Eq)), Aq.current.value = Eq, lq(Eq)
            },
            onEnter: Oq,
            type: cq.type
          }, (null !== (uq = cq.initialValue) && void 0 !== uq ? uq : "") + (null !== (Wq = cq.placeholderText) && void 0 !== Wq ? Wq : ""))
        })
      }
      if ("dropdown" === cq.type) {
        console.assert(void 0 !== gq, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(Eq)}`);
        const qq = cq.autoSubmit;
        return (0, Bq.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputDropdown",
          children: (0, Bq.jsx)(QE.d, {
            options: cq.dropdownOptions.map((qq => (0, yY.f)(qq))),
            value: gq,
            onChange: Eq => {
              let {
                value: gq
              } = Eq;
              lq(gq), qq && Oq(gq)
            }
          })
        })
      }
      return "player" === cq.type ? (0, Bq.jsx)(qO, {
        userInput: cq,
        currInput: gq,
        updateInput: lq
      }) : "color" === cq.type ? (0, Bq.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputColor",
        children: (0, Bq.jsx)("input", {
          type: "color",
          value: gq,
          onChange: qq => {
            lq(qq.target.value)
          }
        })
      }) : null
    }

    function qO(qq) {
      let {
        userInput: Eq,
        currInput: gq,
        updateInput: Yq
      } = qq;
      const lq = (0, Cg.g)("players"),
        Oq = (0, Cg.g)("hiddenPlayerNames"),
        mq = (0, yY.g)(lq.ids, lq.localId, Eq);
      return (0, Bq.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputDropdown",
        children: (0, Bq.jsx)(QE.d, {
          options: mq.map((qq => {
            const {
              name: Eq
            } = lq.byId[qq];
            return {
              value: qq,
              label: null === Eq ? "" : (0, bY.g)(Eq, Oq)
            }
          })),
          value: gq,
          onChange: qq => {
            let {
              value: Eq
            } = qq;
            Yq(Eq)
          }
        })
      })
    }

    function EO(qq) {
      let {
        ids: Eq
      } = qq;
      return Eq
    }

    function gO(qq) {
      let {
        localId: Eq
      } = qq;
      return Eq
    }

    function YO(qq) {
      let {
        iconName: Eq
      } = qq;
      return Hq.gameBridge.lookup("isItemName", Eq) ? (0, Bq.jsx)(vY.e, {
        itemName: Eq,
        amount: 1
      }) : (0, Bq.jsx)(xq.d, {
        name: Eq,
        className: "2x"
      })
    }
    var lO = gq(1622);
    const OO = (0, gq(1380).h)((qq => qq.PadLobbyShortcuts)),
      mO = (0, Yq.lazy)((() => Promise.resolve().then((() => gq(4486))).then((qq => ({
        default: qq.Lobbyleaderboard
      }))))),
      xO = (0, Yq.lazy)((() => gq.e(215).then((() => gq(40821))).then((qq => ({
        default: qq.LobbyManageView
      })))));

    function AO(qq) {
      let {
        show: Eq
      } = qq;
      return Eq ? (0, Bq.jsx)(cO, {}) : null
    }

    function cO() {
      const qq = (0, MY.c)();
      return (0, Bq.jsxs)(Bq.Fragment, {
        children: [(0, Bq.jsx)(OO, {}), (0, Bq.jsxs)(Yq.Suspense, {
          fallback: (0, Bq.jsx)("div", {
            className: "CharacterCustomisationLoading",
            children: (0, Bq.jsx)(yq.e, {})
          }),
          children: [qq && (0, Bq.jsx)(xO, {
            leaderboard: (0, Bq.jsx)(mO, {})
          }), !qq && (0, Bq.jsx)(mO, {})]
        })]
      })
    }
    var uO = gq(1540),
      BO = gq(2924),
      WO = gq(1710),
      NO = gq(2971),
      aO = gq(2599),
      VO = gq(1468),
      dO = gq(1431),
      jO = gq(2904),
      HO = gq(2919),
      oO = gq(2307);
    const PO = "storeRecentGiftRecipients",
      QO = new Map;

    function yO() {
      try {
        const qq = sE.i.getItem(PO);
        return Array.isArray(qq) ? qq.filter((qq => "string" === typeof(null === qq || void 0 === qq ? void 0 : qq.name) && qq.name.length > 0)).map((qq => ({
          name: qq.name,
          cosmetics: qq.cosmetics && "object" === typeof qq.cosmetics ? qq.cosmetics : null
        }))) : []
      } catch {
        return []
      }
    }

    function tO(qq) {
      var Eq;
      const [gq, lq] = (0, Yq.useState)(""), [Oq, mq] = (0, Yq.useState)("search"), [xq, Aq] = (0, Yq.useState)(null), [cq, uq] = (0, Yq.useState)(null), Bq = (0, Yq.useRef)(null), Wq = (0, Yq.useRef)(null);
      (0, Yq.useEffect)((() => () => {
        Bq.current && clearTimeout(Bq.current)
      }), []);
      const Nq = null !== (Eq = null === xq || void 0 === xq ? void 0 : xq.name) && void 0 !== Eq ? Eq : null;

      function aq() {
        Bq.current && (clearTimeout(Bq.current), Bq.current = null)
      }(0, Yq.useEffect)((() => {
        if (null === Nq || qq === bq.NULL_USER_CONTEXT) return;
        const Eq = Nq.toLowerCase();
        if (Eq === qq.getPlayerName().toLowerCase()) return void uq({
          name: Nq,
          result: {
            giftRecipientFound: !1,
            giftRecipientError: "store:giftRecipientIsYou"
          }
        });
        const gq = QO.get(Eq);
        if (gq) return void uq({
          name: Nq,
          result: gq
        });
        let Yq = !1;
        return async function(qq, Eq) {
          try {
            const gq = await (0, bq.postJsonWithMetricsCookiesAndJsonResponse)(`${iq.clientSideServerUrls.indexUrl}/index/store/gift-recipient`, {
              giftRecipientName: Eq
            }, {
              retries: 1
            }, qq.getMetricsCookies());
            if ("boolean" !== typeof(null === gq || void 0 === gq ? void 0 : gq.giftRecipientFound)) throw new Error(`Unexpected gift recipient lookup response: ${JSON.stringify(gq)}`);
            return gq
          } catch (gq) {
            return console.error("Failed to look up gift recipient:", gq), {
              giftRecipientFound: !1,
              giftRecipientError: "store:giftRecipientLookupFailed"
            }
          }
        }(qq, Nq).catch((qq => (console.error("Gift recipient lookup failed:", qq), {
          giftRecipientFound: !1,
          giftRecipientError: "store:giftRecipientLookupFailed"
        }))).then((qq => {
          !0 !== qq.giftRecipientFound && "store:giftRecipientLookupFailed" === qq.giftRecipientError || QO.set(Eq, qq), Yq || uq({
            name: Nq,
            result: qq
          })
        })), () => {
          Yq = !0
        }
      }), [Nq, qq]);
      const Vq = (0, Yq.useMemo)((() => {
        const qq = gq.trim();
        if (!qq) return {
          status: "none"
        };
        if (!xq || xq.name !== qq || (null === cq || void 0 === cq ? void 0 : cq.name) !== xq.name) return {
          status: "pending",
          name: qq
        };
        const Eq = cq.result;
        return !1 === Eq.giftRecipientFound ? {
          status: "error",
          name: xq.name,
          error: Eq.giftRecipientError
        } : {
          status: "found",
          name: Eq.giftRecipientName,
          ownedPacks: Eq.giftRecipientOwnedPacks,
          hasSuperRank: Eq.giftRecipientHasSuperRank,
          isSubscriber: Eq.giftRecipientIsSubscriber
        }
      }), [gq, xq, cq]);
      (0, Yq.useEffect)((() => {
        "found" === Vq.status && "typed" === (null === xq || void 0 === xq ? void 0 : xq.source) && Wq.current !== Vq.name && (Wq.current = Vq.name, (0, eq.reportAnalyticsClick)({
          id: "store.gift_recipient",
          value: "typed"
        }))
      }), [Vq, xq]);
      const dq = (null === cq || void 0 === cq ? void 0 : cq.name) === (null === xq || void 0 === xq ? void 0 : xq.name) ? null === cq || void 0 === cq ? void 0 : cq.result : null,
        jq = !0 === (null === dq || void 0 === dq ? void 0 : dq.giftRecipientFound) ? dq.giftRecipientCosmetics : null;
      return {
        query: gq,
        via: Oq,
        recipient: Vq,
        recipientCosmetics: jq,
        type: function(qq) {
          lq(qq), mq("search"), aq();
          const Eq = qq.trim();
          Eq ? Bq.current = setTimeout((() => {
            Aq({
              name: Eq,
              source: "typed"
            })
          }), 400) : Aq(null)
        },
        choose: function(qq, Eq) {
          aq(), lq(qq), mq("typed" === Eq ? "search" : "prefilled" === Eq ? "prefilled" : "suggestion"), Aq({
            name: qq,
            source: Eq
          }), "typed" !== Eq && "prefilled" !== Eq && (0, eq.reportAnalyticsClick)({
            id: "store.gift_recipient",
            value: Eq
          })
        },
        clear: function() {
          aq(), lq(""), mq("search"), Aq(null)
        },
        recordGift: function(qq, Eq) {
          ! function(qq) {
            QO.delete(qq.toLowerCase())
          }(qq), uq((gq => {
            if (!gq || gq.name.toLowerCase() !== qq.toLowerCase() || !0 !== gq.result.giftRecipientFound || "superRank" === Eq) return gq;
            const Yq = gq.result.giftRecipientOwnedPacks;
            return {
              ...gq,
              result: {
                ...gq.result,
                giftRecipientOwnedPacks: Yq.includes(Eq) ? Yq : [...Yq, Eq]
              }
            }
          }))
        }
      }
    }
    var rO = gq(2299),
      vO = gq(4494),
      hO = gq(248),
      nO = gq(3027);
    const bO = ["pointerdown", "pointermove", "keydown", "wheel", "touchstart", "scroll", "blur", "focus"];
    var iO = gq(2243),
      ZO = gq(576),
      fO = gq(2332),
      MO = gq(2517);

    function TO(qq) {
      let {
        cosmetics: Eq
      } = qq;
      return (0, Bq.jsx)("span", {
        className: "StoreRecipientAvatar",
        children: (0, Bq.jsx)(fO.e, {
          cosmetics: Eq
        })
      })
    }

    function zO(qq, Eq) {
      var gq, Yq;
      const lq = null !== (gq = qq.friend) && void 0 !== gq ? gq : {
        isError: !1,
        name: qq.name,
        ranks: [],
        cosmetics: null !== (Yq = qq.cosmetics) && void 0 !== Yq ? Yq : {},
        nameColour: ZO.e,
        location: {
          status: "noGamePlayed"
        }
      };
      return Eq ? {
        ...lq,
        cosmetics: Eq
      } : lq
    }

    function SO(qq) {
      let {
        pending: Eq
      } = qq;
      return (0, Bq.jsx)("span", {
        className: "StoreRecipientLoader",
        children: Eq && (0, Bq.jsx)(yq.e, {})
      })
    }

    function pO(qq) {
      var Eq;
      let {
        selfName: gq,
        giftRecipient: lq,
        suggestionsVersion: Aq,
        pulseSignal: uq,
        disabled: Wq
      } = qq;
      const {
        t: Nq
      } = (0, mq.v)(), aq = (0, Rq.g)(), Vq = (0, Yq.useRef)(null), dq = (0, Yq.useRef)(null), {
        query: Hq,
        via: oq,
        recipient: Pq,
        recipientCosmetics: yq
      } = lq, tq = (0, oO.l)(Hq), rq = (0, Yq.useMemo)((() => {
        const qq = jq.featureFlags.useSocialFeatures ? aq.friends.filter((qq => !qq.isError)) : [];
        return (0, oO.g)({
          onlineFriends: (0, Rq.d)(qq),
          recentRecipients: yO(),
          friends: qq,
          selfName: gq,
          max: 8
        })
      }), [aq.friends, gq, Aq]), vq = Hq.trim().toLowerCase(), hq = "search" !== oq && vq ? rq.find((qq => qq.name.toLowerCase() === vq)) : void 0, nq = hq && "prefilled" === oq ? [hq, ...rq.filter((qq => qq !== hq))] : rq, bq = "" !== vq && !hq, iq = bq ? Hq : "", Zq = nq.length > 0;
      (0, Yq.useEffect)((() => {
        Vq.current && Vq.current.value !== iq && (Vq.current.value = iq)
      }), [iq]), (0, Yq.useEffect)((() => {
        Vq.current && (Vq.current.disabled = Wq)
      }), [Wq, uq]);
      const fq = (0, Yq.useRef)(0);

      function Tq() {
        "self" !== tq && (0, eq.reportAnalyticsClick)({
          id: "store.mode",
          value: "self"
        }), lq.clear()
      }

      function zq(qq) {
        var Eq, gq;
        if (Wq) return;
        if (" " === qq.key || "Enter" === qq.key) return qq.preventDefault(), void qq.currentTarget.click();
        const Yq = Array.from(null !== (Eq = null === (gq = dq.current) || void 0 === gq ? void 0 : gq.querySelectorAll("[role=radio]")) && void 0 !== Eq ? Eq : []),
          lq = Yq.indexOf(qq.currentTarget);
        let Oq;
        "ArrowRight" === qq.key || "ArrowDown" === qq.key ? Oq = Yq[(lq + 1) % Yq.length] : "ArrowLeft" === qq.key || "ArrowUp" === qq.key ? Oq = Yq[(lq - 1 + Yq.length) % Yq.length] : "Home" === qq.key ? Oq = Yq[0] : "End" === qq.key && (Oq = Yq[Yq.length - 1]), Oq && (qq.preventDefault(), Oq.focus(), Oq.click())
      }(0, Yq.useEffect)((() => {
        var qq;
        uq > fq.current && !Wq && (fq.current = uq, null === (qq = Vq.current) || void 0 === qq || qq.focus())
      }), [uq, Wq]);
      const Sq = "self" === tq,
        pq = null !== (Eq = null === hq || void 0 === hq ? void 0 : hq.name) && void 0 !== Eq ? Eq : null,
        Gq = "error" === Pq.status ? Pq.error : null,
        Lq = "store:giftRecipientLookupFailed" === Gq;
      return (0, Bq.jsxs)("div", {
        className: Oq()("StoreRecipientStrip", {
          StoreRecipientStripDisabled: Wq,
          StoreRecipientStripNoChips: !Zq
        }),
        children: [(0, Bq.jsx)("span", {
          className: "StoreRecipientLabel",
          "aria-hidden": !0,
          children: Nq("store:buyingFor")
        }), (0, Bq.jsxs)("div", {
          ref: dq,
          className: "StoreRecipientRadios",
          role: "radiogroup",
          "aria-label": Nq("store:whoIsItFor"),
          children: [(0, Bq.jsxs)("div", {
            role: "radio",
            "data-pad-focusable": !0,
            "aria-checked": Sq,
            tabIndex: Wq || !Sq && null !== pq ? -1 : 0,
            className: Oq()("StoreRecipientMe", {
              StoreRecipientChecked: Sq
            }),
            onClick: () => {
              Wq || Tq()
            },
            onKeyDown: zq,
            children: [(0, Bq.jsx)(xq.d, {
              name: "user"
            }), " ", Nq("store:me")]
          }), Zq && (0, Bq.jsx)("div", {
            className: "StoreRecipientChips",
            children: nq.map((qq => {
              const Eq = qq === hq;
              return (0, Bq.jsx)("div", {
                role: "radio",
                "data-pad-focusable": !0,
                "aria-checked": Eq,
                tabIndex: !Wq && Eq ? 0 : -1,
                title: qq.name,
                className: Oq()("StoreRecipientChip", {
                  StoreRecipientChecked: Eq
                }),
                onClick: () => {
                  Wq || function(qq) {
                    "gift" !== tq && (0, eq.reportAnalyticsClick)({
                      id: "store.mode",
                      value: "gift"
                    }), lq.choose(qq.name, qq.kind)
                  }(qq)
                },
                onKeyDown: zq,
                children: (0, Bq.jsx)(MO.h, {
                  playerSocialPreview: zO(qq, Eq ? yq : null),
                  opensProfileCard: !1,
                  isFriend: null !== qq.friend,
                  hideFriendBadge: !0,
                  showLocation: null !== qq.friend,
                  status: null === qq.friend ? null : void 0,
                  trailing: Eq ? (0, Bq.jsx)(SO, {
                    pending: "pending" === Pq.status
                  }) : void 0
                })
              }, qq.name)
            }))
          })]
        }), (0, Bq.jsxs)("div", {
          className: Oq()("StoreRecipientSearch", {
            StoreRecipientChecked: bq,
            StoreRecipientSearchPulse: uq > 0 && !bq,
            StoreRecipientSearchError: null !== Gq && !Lq
          }),
          onClick: () => {
            var qq;
            null === (qq = Vq.current) || void 0 === qq || qq.focus()
          },
          children: [bq && "found" === Pq.status && yq && (0, Bq.jsx)(TO, {
            cosmetics: yq
          }), !(bq && "found" === Pq.status && yq) && (0, Bq.jsx)(xq.d, {
            name: "magnifying-glass",
            className: "StoreRecipientSearchIcon"
          }), (0, Bq.jsx)(Qq.b, {
            className: "StoreRecipientSearchInput",
            domRef: Vq,
            placeholderText: Nq("store:searchName"),
            defaultValue: iq,
            maxLength: Mq.l,
            onValueChange: function(qq) {
              "gift" !== tq && qq.trim() && (0, eq.reportAnalyticsClick)({
                id: "store.mode",
                value: "gift"
              }), lq.type(qq)
            },
            onEnter: () => {
              var qq;
              const Eq = null === (qq = Vq.current) || void 0 === qq ? void 0 : qq.value.trim();
              Eq && lq.choose(Eq, "typed")
            },
            blurOnEnter: !0
          }), bq && (0, Bq.jsx)(SO, {
            pending: "pending" === Pq.status
          }), bq && (0, Bq.jsx)("div", {
            ...(0, cq.V)({
              disabled: Wq
            }),
            "aria-label": Nq("store:clearRecipient"),
            title: Nq("store:clearRecipient"),
            className: "StoreRecipientClear",
            onClick: qq => {
              qq.stopPropagation(), Wq || Tq()
            },
            children: (0, Bq.jsx)(xq.d, {
              name: "xmark"
            })
          })]
        }, uq), Gq && (0, Bq.jsx)("div", {
          className: Oq()("StoreRecipientPopover", {
            StoreRecipientPopoverSoft: Lq
          }),
          role: "status",
          children: Nq(Gq)
        })]
      })
    }
    var GO = gq(2297),
      LO = gq(2210),
      JO = gq(3458),
      kO = gq(3033),
      RO = gq(2254);
    const UO = gq.p + "static/media/superRankPreviewPoster.e64783181b692cc31e08.webp";

    function FO() {
      (0, RO.h)(UO, {
        lowPriority: !1
      })
    }

    function sO(qq) {
      let {
        onBack: Eq,
        cta: gq,
        recipient: lq,
        afterCta: Oq
      } = qq;
      const {
        t: Aq
      } = (0, mq.v)(), [uq, Wq] = (0, Yq.useState)("starting"), Nq = (0, Yq.useRef)(null), aq = (0, ZE.c)(), Vq = (0, Yq.useRef)(null), dq = (0, Yq.useCallback)((() => {
        const qq = Nq.current;
        null !== qq.error && qq.load();
        const Eq = qq.play();
        Vq.current = Eq, Eq.catch((qq => {
          (0, JO.e)("Failed to play Super Rank video", qq), aq.current && Vq.current === Eq && Wq("failed")
        }))
      }), [aq]);
      return (0, Yq.useEffect)((() => {
        const qq = Nq.current;
        let Eq;

        function gq() {
          clearTimeout(Eq), Eq = setTimeout(dq, 3e3)
        }
        return dq(), qq.addEventListener("ended", gq), () => {
          clearTimeout(Eq), qq.removeEventListener("ended", gq)
        }
      }), [dq]), (0, Bq.jsxs)("div", {
        className: "StoreSuperRankDetail",
        children: [(0, Bq.jsxs)("div", {
          className: "StoreDetailHeader",
          children: [(0, Bq.jsx)(cq.d, {
            className: "StoreDetailBackButton",
            onClick: Eq,
            padBack: !0,
            children: Aq("general:back")
          }), (0, Bq.jsxs)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: [(0, Bq.jsx)(xq.d, {
              name: "bolt"
            }), " ", Aq("homePage:superRank")]
          }), lq]
        }), (0, Bq.jsxs)("div", {
          className: "StoreSuperRankDetailBody",
          children: [(0, Bq.jsxs)("div", {
            className: "StoreSuperRankVideo",
            children: [(0, Bq.jsx)("video", {
              ref: Nq,
              src: `${iq.clientSideServerUrls.staticUrl}/videos/SuperRankPreview.mp4`,
              poster: UO,
              muted: !0,
              playsInline: !0,
              controls: "playing" === uq,
              onPlaying: () => {
                Wq("playing")
              },
              onError: () => {
                Wq("failed")
              }
            }), ("failed" === uq || "loading" === uq) && (0, Bq.jsx)("div", {
              className: "StoreSuperRankPlay",
              children: (0, Bq.jsx)(cq.g, {
                ariaLabel: Aq("general:play"),
                loading: "loading" === uq,
                onClick: () => {
                  Wq("loading"), dq()
                },
                touchPressOn: "pointerup",
                children: (0, Bq.jsx)(xq.d, {
                  name: "play"
                })
              })
            })]
          }), (0, Bq.jsxs)("div", {
            className: "StoreSuperRankDetailSide",
            children: [(0, Bq.jsx)("div", {
              className: "StoreSuperRankDetailTable",
              children: (0, Bq.jsx)(kO.d, {})
            }), (0, Bq.jsxs)("div", {
              className: "StoreTileActions",
              children: [gq, Oq]
            })]
          })]
        })]
      })
    }
    var XO = gq(2535),
      wO = gq(3422),
      KO = gq(3003),
      CO = gq(3011);
    const IO = [ZO.s.yellow, ZO.s.green, ZO.s.aqua, ZO.s.blue, ZO.s.purple, ZO.s.red];

    function eO(qq) {
      return "needsRecipient" === qq || "lookingUp" === qq || "gift" === qq || "recipientOwns" === qq || "recipientSharesOwned" === qq || "recipientSubscribed" === qq
    }

    function DO(qq) {
      const {
        onKeyDown: Eq,
        ...gq
      } = (0, cq.V)();
      return {
        ...gq,
        "aria-label": qq,
        onKeyDown: qq => {
          qq.target === qq.currentTarget && (null === Eq || void 0 === Eq || Eq(qq))
        }
      }
    }

    function qm(qq) {
      let {
        text: Eq
      } = qq;
      return (0, Bq.jsx)("span", {
        className: "StoreRainbowText",
        children: Array.from(Eq).map(((qq, Eq) => (0, Bq.jsx)("span", {
          style: {
            color: IO[Eq % IO.length]
          },
          children: qq
        }, Eq)))
      })
    }
    const Em = {
      recipientOwns: "store:alreadyOwns",
      sharesOwned: "store:sharesOwned",
      recipientSharesOwned: "store:recipientSharesOwned",
      subscribed: "store:subscribed",
      recipientSubscribed: "store:recipientSubscribed"
    };

    function gm(qq) {
      let {
        state: Eq,
        item: gq,
        price: Yq,
        busy: lq,
        highlight: Aq = !1,
        onAct: uq,
        onNeedRecipient: Wq,
        onLogin: Nq
      } = qq;
      const {
        t: aq
      } = (0, mq.v)(), Vq = "superRank" === gq ? zq.n.product.days : null, dq = qq => null === Vq ? aq(qq ? "general:gift" : "general:buy") : aq(qq ? "store:giftDays" : "store:buyDays", {
        days: Vq
      }), jq = (qq, Eq) => {
        const gq = (0, Bq.jsxs)(Bq.Fragment, {
          children: [null === qq && (0, Bq.jsx)("span", {
            className: "StoreCtaLabel StoreCtaLabelPending"
          }), null !== qq && (0, Bq.jsx)("span", {
            className: "StoreCtaLabel",
            title: qq,
            children: qq
          })]
        });
        return null !== Vq ? (0, Bq.jsxs)(Bq.Fragment, {
          children: [Eq && (0, Bq.jsx)("span", {
            className: "StoreCtaIcon",
            children: Eq
          }), gq, (0, Bq.jsxs)("span", {
            className: "StoreCtaPrice",
            children: ["\xb7", (0, Bq.jsx)(LO.b, {
              amount: Yq
            })]
          })]
        }) : (0, Bq.jsxs)(Bq.Fragment, {
          children: [(0, Bq.jsxs)("span", {
            className: "StoreCtaLead",
            children: [gq, "\xb7"]
          }), (0, Bq.jsxs)("span", {
            className: "StoreCtaPrice",
            children: [Eq, (0, Bq.jsx)(LO.b, {
              amount: Yq
            })]
          })]
        })
      };
      let Hq;
      switch (Eq) {
        case "pending":
          Hq = (0, Bq.jsx)(cq.p, {
            className: "StoreCtaButton",
            disabled: !0,
            children: jq(null)
          });
          break;
        case "login":
          Hq = (0, Bq.jsx)(cq.p, {
            className: "StoreCtaButton",
            onClick: Nq,
            children: jq(dq(!1))
          });
          break;
        case "owned":
          Hq = (0, Bq.jsx)(cq.i, {
            className: "StoreCtaButton",
            onClick: () => {
              rq.b.set({
                openEverythingMenuName: cE.p.CUSTOMISATION
              })
            },
            children: (0, Bq.jsxs)("span", {
              className: "StoreCtaLabel",
              children: [(0, Bq.jsx)(xq.d, {
                name: "shirt"
              }), " ", aq("store:equip")]
            })
          });
          break;
        case "recipientOwns":
        case "sharesOwned":
        case "recipientSharesOwned":
        case "subscribed":
        case "recipientSubscribed":
          Hq = (0, Bq.jsx)(cq.p, {
            className: "StoreCtaButton",
            disabled: !0,
            children: (0, Bq.jsx)("span", {
              className: "StoreCtaLabel",
              children: aq(Em[Eq])
            })
          });
          break;
        case "needsRecipient":
        case "lookingUp":
        case "gift":
          Hq = (0, Bq.jsx)(cq.p, {
            className: "StoreCtaButton",
            disabled: "needsRecipient" === Eq || null === Yq,
            loading: "lookingUp" === Eq || lq,
            onClick: uq,
            analyticsClick: {
              id: "store.gift",
              value: gq
            },
            children: jq(dq(!0), oO.b)
          });
          break;
        case "buy":
        case "recharge":
          Hq = (0, Bq.jsx)(cq.p, {
            className: "StoreCtaButton",
            loading: lq,
            disabled: null === Yq,
            onClick: uq,
            analyticsClick: {
              id: "store.buy",
              value: gq
            },
            children: jq(dq(!1))
          })
      }
      return (0, Bq.jsx)("div", {
        className: Oq()("StoreCta", {
          StoreCtaHighlight: Aq,
          StoreCtaLabelFirst: null !== Vq
        }),
        onClick: qq => {
          qq.stopPropagation(), "needsRecipient" === Eq && Wq()
        },
        children: Hq
      })
    }

    function Ym() {
      const {
        t: qq
      } = (0, mq.v)();
      return (0, Bq.jsxs)("ul", {
        className: "StorePerks",
        children: [(0, Bq.jsxs)("li", {
          children: [(0, Bq.jsx)(xq.d, {
            name: "check"
          }), (0, Bq.jsx)(qm, {
            text: qq("store:colourfulNames")
          })]
        }), (0, Bq.jsxs)("li", {
          children: [(0, Bq.jsx)(xq.d, {
            name: "check"
          }), qq("store:perkCapes")]
        }), (0, Bq.jsxs)("li", {
          children: [(0, Bq.jsx)(xq.d, {
            name: "check"
          }), qq("store:perkNoAdverts")]
        }), (0, Bq.jsxs)("li", {
          children: [(0, Bq.jsx)(xq.d, {
            name: "check"
          }), qq("store:perkFriends", {
            count: (0, Cq.d)(["super"])
          })]
        })]
      })
    }

    function lm(qq) {
      let {
        daysLeft: Eq,
        totalDays: gq,
        urgent: Yq
      } = qq;
      const {
        t: lq
      } = (0, mq.v)(), xq = gq > 0 ? Math.min(1, Math.max(.03, Eq / gq)) : 1;
      return (0, Bq.jsxs)("div", {
        className: Oq()("StoreSuperRankMeterArea", {
          StoreSuperRankMeterUrgent: Yq
        }),
        children: [(0, Bq.jsx)("span", {
          className: "StoreSuperRankDaysLeft",
          children: 1 === Eq ? lq("store:oneDayLeft") : lq("store:daysLeft", {
            days: Eq
          })
        }), (0, Bq.jsx)("div", {
          className: "StoreSuperRankMeter",
          children: (0, Bq.jsx)("i", {
            style: {
              width: 100 * xq + "%"
            }
          })
        })]
      })
    }

    function Om(qq) {
      let {
        state: Eq,
        urgent: gq,
        daysLeft: Yq,
        totalDays: lq,
        recipientHasSuperRank: Aq,
        busy: cq,
        highlight: uq,
        onOpen: Wq,
        onAct: Nq,
        onNeedRecipient: aq,
        onLogin: Vq
      } = qq;
      const {
        t: dq
      } = (0, mq.v)(), jq = eO(Eq), {
        days: Hq
      } = zq.n.product, oq = dq("store:recipientHasSuperRank", {
        giftDays: Hq
      }), Pq = wq("subscribed" === Eq);
      return (0, Bq.jsxs)("div", {
        className: Oq()("StoreTile StoreSuperRankTile", {
          StoreTileGift: jq,
          StoreSuperRankTileUrgent: "recharge" === Eq && gq,
          StoreSuperRankTileWithChip: Aq,
          StoreSuperRankTileGiftReady: "gift" === Eq
        }),
        ...DO(dq("homePage:superRank")),
        "data-store-item": "superRank",
        onPointerEnter: FO,
        onFocus: FO,
        onClick: Wq,
        children: [(0, Bq.jsx)("div", {
          className: "StoreSuperRankArt",
          style: {
            backgroundImage: `url(${iO.g})`
          }
        }), jq && (0, Bq.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, Bq.jsxs)("div", {
          className: "StoreTileContent",
          children: [Aq && (0, Bq.jsx)("span", {
            className: "StoreChip StoreChipGift",
            title: oq,
            children: oq
          }), (0, Bq.jsxs)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: [(0, Bq.jsx)(xq.d, {
              name: "bolt"
            }), " ", dq("homePage:superRank")]
          }), jq && (0, Bq.jsx)("div", {
            className: "StoreTilePitch",
            children: dq("store:giftPitch", {
              days: Hq
            })
          }), "recharge" === Eq && (0, Bq.jsx)(lm, {
            daysLeft: Yq,
            totalDays: lq,
            urgent: gq
          }), Pq && (0, Bq.jsx)("div", {
            className: "StoreSuperRankMeterArea",
            children: (0, Bq.jsx)("span", {
              className: "StoreSuperRankDaysLeft",
              children: Pq
            })
          }), (0, Bq.jsx)(Ym, {}), (0, Bq.jsxs)("div", {
            className: "StoreTileActions",
            children: [(0, Bq.jsx)(gm, {
              state: Eq,
              item: "superRank",
              price: zq.n.price,
              busy: cq,
              highlight: uq,
              onAct: Nq,
              onNeedRecipient: aq,
              onLogin: Vq
            }), "needsRecipient" === Eq && (0, Bq.jsx)("span", {
              className: "StoreTileNote StoreTileNoteGift",
              children: dq("store:pickRecipientFirst")
            }), "recharge" === Eq && gq && (0, Bq.jsx)("span", {
              className: "StoreTileNote StoreSuperRankEnding",
              children: 1 === Yq ? dq("store:endsInOneDay") : dq("store:endsInDays", {
                days: Yq
              })
            })]
          })]
        })]
      })
    }
    const mm = {
      common: "StorePackTileCommon",
      rare: "StorePackTileRare",
      epic: "StorePackTileEpic",
      legendary: "StorePackTileLegendary",
      mythic: "StorePackTileMythic"
    };

    function xm(qq) {
      var Eq;
      let {
        pack: gq,
        state: lq,
        busy: Aq,
        onOpen: cq,
        onAct: uq,
        onNeedRecipient: Wq,
        onLogin: Nq
      } = qq;
      const {
        t: aq
      } = (0, mq.v)(), Vq = uO.d[gq], dq = jO.l[gq], jq = (0, iO.n)(gq), Hq = (0, Yq.useRef)(null);
      (0, KO.k)(gq, Hq);
      const oq = eO(lq),
        Pq = null !== (Eq = Vq.displayName) && void 0 !== Eq ? Eq : gq,
        Qq = (0, wO.e)((() => {
          (0, XO.g)();
          const qq = (0, KO.d)(gq);
          void 0 !== qq && (0, RO.h)((0, KO.b)(qq))
        })),
        [yq] = (0, Yq.useState)(nO.i);
      return (0, Bq.jsxs)("div", {
        className: Oq()("StoreTile StorePackTile", mm[Vq.tier], {
          StorePackTileOwned: "owned" === lq,
          StorePackTileRecipientOwns: "recipientOwns" === lq,
          StoreTileGift: oq
        }),
        ...DO(Pq),
        ref: Hq,
        "data-store-item": gq,
        onClick: cq,
        onPointerMove: qq => {
          "mouse" !== qq.pointerType || 0 === qq.movementX && 0 === qq.movementY || yq || Qq.start()
        },
        onPointerLeave: Qq.cancel,
        children: [dq && (0, Bq.jsx)(dq, {}), (0, Bq.jsx)("div", {
          className: "StorePackCharacters",
          children: jq.map((qq => (0, Bq.jsx)("div", {
            className: "StorePackCharacter",
            style: {
              backgroundImage: `url(${(0,iO.h)(qq)})`
            }
          }, qq)))
        }), (0, Bq.jsx)("div", {
          className: "StoreTileScrim"
        }), oq && (0, Bq.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, Bq.jsxs)("div", {
          className: "StoreTileContent",
          children: [(0, Bq.jsx)("div", {
            className: "StoreTileTitle",
            children: Pq
          }), (0, Bq.jsxs)("div", {
            className: "StoreTileMeta",
            children: [(0, Bq.jsx)(CO.b, {
              tier: Vq.tier
            }), " \xb7 ", aq("store:itemCount", {
              count: (0, GO.d)(gq)
            }), "owned" === lq && (0, Bq.jsxs)("span", {
              className: "StoreTileOwned",
              children: [" \xb7 ", (0, Bq.jsx)(xq.d, {
                name: "check"
              }), " ", aq("general:owned")]
            })]
          }), (0, Bq.jsx)(gm, {
            state: lq,
            item: gq,
            price: (0, zq.f)(gq),
            busy: Aq,
            onAct: uq,
            onNeedRecipient: Wq,
            onLogin: Nq
          })]
        })]
      })
    }
    var Am = gq(2975),
      cm = gq(1534),
      um = gq(1435),
      Bm = gq(3443);

    function Wm() {
      return (0, Bq.jsx)("span", {
        className: "NewBadge",
        children: "NEW"
      })
    }
    var Nm = gq(1332),
      am = gq(1547),
      Vm = gq(9313);

    function dm(qq) {
      let {
        character: Eq,
        drawn: gq,
        onDrawn: lq
      } = qq;
      const mq = (0, Yq.useRef)(null),
        xq = (0, Vm.f)(Eq);
      return (0, Bq.jsx)("div", {
        className: Oq()("StoreCharacterLive", {
          StoreCharacterLiveDrawn: gq
        }),
        children: (0, Bq.jsx)(Yq.Suspense, {
          fallback: null,
          children: (0, Bq.jsx)(XO.c, {
            ref: mq,
            framing: "store",
            turntableFromYaw: gq ? xq.yaw : null,
            onReady: () => {
              var qq, gq;
              null === (qq = mq.current) || void 0 === qq || qq.setOrbit(xq), null === (gq = mq.current) || void 0 === gq || gq.setAllCosmetics(am.b[Eq].cosmetics)
            },
            onDrawn: lq
          })
        })
      })
    }
    const jm = {
        common: "StoreCharacterCardCommon",
        rare: "StoreCharacterCardRare",
        epic: "StoreCharacterCardEpic",
        legendary: "StoreCharacterCardLegendary",
        mythic: "StoreCharacterCardMythic"
      },
      Hm = new Set(["wildSpirits"]);

    function om(qq) {
      var Eq;
      let {
        tile: gq,
        design: lq,
        canGoLive: Aq,
        live: cq,
        busy: uq,
        highlight: Wq,
        onLiveStart: Nq,
        onLiveEnd: aq,
        onOpen: Vq,
        onAct: dq,
        onNeedRecipient: jq,
        onLogin: Hq
      } = qq;
      const {
        t: oq
      } = (0, mq.v)(), {
        pack: Pq,
        state: Qq
      } = gq, yq = uO.d[Pq], tq = (0, uO.h)(Pq), rq = (0, iO.l)(Pq), vq = jO.l[rq], hq = Hm.has(rq), {
        tier: nq
      } = yq, bq = "legendary" === nq || "mythic" === nq, iq = (0, Yq.useRef)(null);
      (0, Nm.e)(iq, "epic" === nq || bq || hq);
      const [Zq, Mq] = (0, Yq.useState)(!1);
      return !cq && Zq && Mq(!1), (0, Bq.jsxs)("div", {
        ref: iq,
        className: Oq()("StoreCharacterCard", `StoreCharacterCard${lq}`, jm[nq], {
          StoreCharacterCardOwned: "owned" === Qq || "recipientOwns" === Qq,
          StoreCharacterCardGift: eO(Qq),
          StoreCharacterCardItem: void 0 === tq
        }),
        onPointerMove: qq => {
          "mouse" !== qq.pointerType || 0 === qq.movementX && 0 === qq.movementY || !Aq || cq || void 0 === tq || Nq()
        },
        onPointerLeave: aq,
        children: [(0, Bq.jsx)("div", {
          className: "StoreCharacterBackdrop",
          children: vq && (0, Bq.jsx)(vq, {
            simple: !0
          })
        }), bq && (0, Bq.jsx)("div", {
          className: "StoreCharacterRays"
        }), (0, Bq.jsxs)(fq.LinkPreserveSearch, {
          className: "StoreCharacterLink",
          to: (0, cm.g)({
            kind: "pack",
            pack: Pq
          }),
          "data-store-item": Pq,
          onClick: qq => {
            (0, um.e)(qq) && (qq.preventDefault(), Vq())
          },
          children: [(0, Bq.jsxs)("div", {
            className: "StoreCharacterStage",
            children: [(0, Bq.jsx)("div", {
              className: "StoreCharacterHalo"
            }), (0, Bq.jsx)("div", {
              className: Oq()("StoreCharacterFigure", {
                StoreCharacterFigureCovered: Zq
              }),
              style: {
                backgroundImage: `url(${(0,iO.r)(Pq)})`
              }
            }), cq && void 0 !== tq && (0, Bq.jsx)(dm, {
              character: tq,
              drawn: Zq,
              onDrawn: () => {
                Mq(!0)
              }
            })]
          }), (0, Bq.jsx)("div", {
            className: "StoreCharacterName",
            children: null !== (Eq = yq.displayName) && void 0 !== Eq ? Eq : Pq
          }), (0, Bq.jsx)(CO.b, {
            tier: nq,
            className: "StoreCharacterTier"
          })]
        }), (0, Bq.jsx)("div", {
          className: "StoreCharacterScrim"
        }), hq && (0, Bq.jsx)("span", {
          className: "StoreCharacterNew",
          children: (0, Bq.jsx)(Wm, {})
        }), "owned" === Qq && (0, Bq.jsx)("span", {
          className: "StoreCharacterOwned",
          title: oq("general:owned"),
          "aria-label": oq("general:owned"),
          children: (0, Bq.jsx)(xq.d, {
            name: "check"
          })
        }), (0, Bq.jsx)("div", {
          className: "StoreCharacterPlate",
          children: (0, Bq.jsx)(gm, {
            state: Qq,
            item: Pq,
            price: (0, zq.f)(Pq),
            busy: uq,
            highlight: Wq,
            onAct: dq,
            onNeedRecipient: jq,
            onLogin: Hq
          })
        })]
      })
    }

    function Pm(qq) {
      let {
        tiles: Eq,
        busy: gq,
        highlightItem: lq,
        onOpen: Oq,
        onAct: mq,
        onNeedRecipient: xq,
        onLogin: Aq
      } = qq;
      const cq = (0, Bm.m)("storeCharacterCardFoil"),
        uq = (0, Bm.m)("storeCharacterCardSpotlight"),
        Wq = cq ? "Foil" : uq ? "Spotlight" : "Showcase",
        [Nq] = (0, Yq.useState)(nO.i),
        [aq, Vq] = (0, Yq.useState)(null);
      return (0, Bq.jsx)("div", {
        className: "StoreCharacterGrid",
        children: Eq.map((qq => (0, Bq.jsx)(om, {
          tile: qq,
          design: Wq,
          canGoLive: !Nq,
          live: aq === qq.pack,
          busy: gq,
          highlight: lq === qq.pack,
          onLiveStart: () => {
            Vq(qq.pack)
          },
          onLiveEnd: () => {
            Vq((Eq => Eq === qq.pack ? null : Eq))
          },
          onOpen: () => {
            Oq(qq.pack)
          },
          onAct: () => {
            mq(qq.pack)
          },
          onNeedRecipient: xq,
          onLogin: () => {
            Aq(qq.pack)
          }
        }, qq.pack)))
      })
    }
    var Qm = gq(9326);

    function ym(qq) {
      let {
        title: Eq
      } = qq;
      return (0, Bq.jsx)("h2", {
        className: "StoreSectionDivider",
        children: (0, Bq.jsx)("span", {
          className: "StoreSectionDividerTitle",
          children: Eq
        })
      })
    }

    function tm(qq) {
      let {
        mountAtOnce: Eq,
        children: gq
      } = qq;
      const lq = (0, Yq.useRef)(null),
        [Oq, mq] = (0, Yq.useState)(Eq),
        xq = (0, Qm.d)();
      return (0, Yq.useLayoutEffect)((() => {
        const qq = lq.current;
        qq && qq.getBoundingClientRect().top < qq.parentElement.getBoundingClientRect().bottom && mq(!0)
      }), []), Oq || xq ? (0, Bq.jsx)(Bq.Fragment, {
        children: gq
      }) : (0, Bq.jsx)("div", {
        ref: lq
      })
    }

    function rm(qq) {
      let {
        layout: Eq,
        mountAtOnce: gq,
        bundleGift: Yq,
        superRankTotalDays: lq,
        busy: Oq,
        highlightItem: xq,
        onOpen: Aq,
        onAct: cq,
        onNeedRecipient: uq,
        onLogin: Wq
      } = qq;
      const {
        t: Nq
      } = (0, mq.v)(), aq = Eq.packs.filter((qq => void 0 === (0, uO.h)(qq.pack) && !(0, uO.m)(qq.pack))), Vq = Eq.packs.filter((qq => void 0 !== (0, uO.h)(qq.pack))), dq = Eq.packs.filter((qq => (0, uO.m)(qq.pack)));
      return (0, Bq.jsxs)(Bq.Fragment, {
        children: [(0, Bq.jsx)(Am.d, {
          className: "StoreSuperGems",
          gift: Yq,
          highlightSku: xq
        }), (0, Bq.jsx)(ym, {
          title: Nq("store:rank")
        }), (0, Bq.jsx)(Om, {
          state: Eq.superRank.state,
          urgent: Eq.superRank.urgent,
          daysLeft: Eq.superRankDaysLeft,
          totalDays: lq,
          recipientHasSuperRank: Eq.recipientHasSuperRank,
          busy: Oq,
          highlight: "superRank" === xq,
          onOpen: () => {
            Aq("superRank")
          },
          onAct: () => {
            cq("superRank")
          },
          onNeedRecipient: uq,
          onLogin: () => {
            Wq("superRank")
          }
        }), (0, Bq.jsxs)(tm, {
          mountAtOnce: gq,
          children: [(0, Bq.jsx)(ym, {
            title: Nq("store:bundles")
          }), (0, Bq.jsx)("div", {
            className: "StorePackGrid",
            children: aq.map((qq => (0, Bq.jsx)(xm, {
              pack: qq.pack,
              state: qq.state,
              busy: Oq,
              onOpen: () => {
                Aq(qq.pack)
              },
              onAct: () => {
                cq(qq.pack)
              },
              onNeedRecipient: uq,
              onLogin: () => {
                Wq(qq.pack)
              }
            }, qq.pack)))
          }), (0, Bq.jsxs)(tm, {
            mountAtOnce: gq,
            children: [(0, Bq.jsx)(ym, {
              title: Nq("store:characters")
            }), (0, Bq.jsx)(Pm, {
              tiles: Vq,
              busy: Oq,
              highlightItem: xq,
              onOpen: Aq,
              onAct: cq,
              onNeedRecipient: uq,
              onLogin: Wq
            }), dq.length > 0 && (0, Bq.jsxs)(Bq.Fragment, {
              children: [(0, Bq.jsx)(ym, {
                title: Nq("store:premiumItems")
              }), (0, Bq.jsx)(Pm, {
                tiles: dq,
                busy: Oq,
                highlightItem: xq,
                onOpen: Aq,
                onAct: cq,
                onNeedRecipient: uq,
                onLogin: Wq
              })]
            })]
          })]
        })]
      })
    }

    function hm(qq) {
      let {
        state: Eq,
        mode: gq,
        giftName: Yq,
        busy: lq,
        highlight: Oq,
        purchaseError: xq,
        onBack: Aq,
        onChooseRecipient: uq,
        onAct: Wq,
        onLogin: Nq
      } = qq;
      const {
        t: aq
      } = (0, mq.v)(), Vq = wq("gift" !== gq);
      return (0, Bq.jsx)(sO, {
        onBack: Aq,
        recipient: "gift" === gq && (0, Bq.jsxs)(Bq.Fragment, {
          children: [Yq && (0, Bq.jsxs)("span", {
            className: "StoreDetailRecipient",
            title: aq("store:giftFor", {
              name: Yq
            }),
            children: [oO.b, " ", aq("store:giftFor", {
              name: Yq
            })]
          }), !Yq && (0, Bq.jsxs)("div", {
            ...(0, cq.V)(),
            className: "StoreDetailRecipient StoreDetailRecipientChoose",
            onClick: uq,
            children: [oO.b, " ", aq("store:chooseRecipient")]
          })]
        }),
        cta: (0, Bq.jsx)(gm, {
          state: Eq,
          item: "superRank",
          price: zq.n.price,
          busy: lq,
          highlight: Oq,
          onAct: Wq,
          onNeedRecipient: uq,
          onLogin: Nq
        }),
        afterCta: (0, Bq.jsxs)(Bq.Fragment, {
          children: [Vq && (0, Bq.jsx)("span", {
            className: "StoreTileNote",
            children: Vq
          }), xq && (0, Bq.jsx)("span", {
            className: "StoreTileNote StoreTileNoteError",
            children: aq(xq)
          })]
        })
      })
    }
    var nm = gq(147);
    const bm = nm.i("kind", [nm.s({
      kind: nm.n("refused"),
      heldTierId: nm.M(),
      until: nm.q()
    }), nm.s({
      kind: nm.n("refund"),
      tierId: nm.M(),
      refundedMs: nm.q(),
      forfeitedMs: nm.q(),
      premiumCurrency: nm.q()
    }), nm.s({
      kind: nm.n("none")
    })]);
    async function im(qq) {
      const Eq = await (0, bq.postJsonWithMetricsCookiesAndJsonResponse)(`${iq.clientSideServerUrls.indexUrl}/index/ranks/subscribe-preview`, {
        productId: qq
      }, {
        retries: 1
      });
      return bm.parse(Eq)
    }
    var Zm = gq(2951),
      fm = gq(2981);

    function Mm(qq, Eq) {
      const gq = Math.max(1, Math.round(Eq / Gq.k));
      return [1 === gq ? `${qq}OneDay` : qq, {
        days: gq.toLocaleString()
      }]
    }

    function Tm() {
      return "true" === new URLSearchParams(window.location.search).get("tempSubscription") && (0, Jq.purchasesAllowed)() ? (0, Bq.jsx)(zm, {}) : null
    }

    function zm() {
      const {
        t: qq
      } = (0, mq.v)(), {
        userContext: Eq
      } = (0, aq.c)(), {
        purchaseUnderWay: gq,
        notice: lq,
        subscribe: Oq
      } = (0, Zm.e)(), [xq, Aq] = (0, Yq.useState)(null), [uq, Wq] = (0, Yq.useState)(0), [Nq, Vq] = (0, Yq.useState)(!1), dq = (0, Yq.useRef)(!0), jq = Eq !== bq.NULL_USER_CONTEXT, Hq = null !== xq && xq.loadedFor === Eq ? xq.offer : null, oq = null === lq || void 0 === lq ? void 0 : lq.pendingIntentId, Pq = (0, Yq.useRef)(oq);

      function Qq() {
        Wq((qq => qq + 1))
      }
      async function yq(qq) {
        Vq(!1), await Oq(qq), dq.current && Qq()
      }
      if ((0, Yq.useEffect)((() => (dq.current = !0, () => {
          dq.current = !1
        })), []), (0, Yq.useEffect)((() => {
          void 0 !== Pq.current && void 0 === oq && Qq(), Pq.current = oq
        }), [oq]), (0, Yq.useEffect)((() => {
          if (!jq) return;
          let qq = !1;
          return Vq(!1), async function() {
            const {
              offering: qq
            } = await (0, xE.d)().getOfferings("superRankPage"), Eq = null === qq || void 0 === qq ? void 0 : qq.packages.find((qq => null !== qq.price));
            return void 0 === Eq ? {
              kind: "unavailable"
            } : {
              kind: "loaded",
              pkg: Eq,
              preview: await im(Eq.productId)
            }
          }().catch((qq => (console.error("Billing: loading the Super Rank subscription or its preview failed:", qq), {
            kind: "loadFailed"
          }))).then((gq => {
            qq || Aq((qq => "loadFailed" === gq.kind && (null === qq || void 0 === qq ? void 0 : qq.loadedFor) === Eq ? qq : {
              loadedFor: Eq,
              offer: gq
            }))
          })), () => {
            qq = !0
          }
        }), [Eq, jq, uq]), null === Hq) return null;
      if ("loaded" !== Hq.kind) return (0, Bq.jsx)(fm.i, {
        notice: {
          kind: "error",
          key: "unavailable" === Hq.kind ? "payments:subscriptionUnavailable" : "payments:subscriptionLoadFailed"
        },
        className: "StoreTempSubscribe SmallTextBold"
      });
      const {
        pkg: tq,
        preview: rq
      } = Hq;
      if ("refused" === rq.kind) return (0, Bq.jsx)(fm.i, {
        notice: {
          kind: "error",
          key: "payments:subscribeRefusedGemRank",
          values: {
            date: new Date(rq.until).toLocaleDateString()
          }
        },
        className: "StoreTempSubscribe SmallTextBold"
      });
      const vq = (0, Am.g)(tq.price);
      if (Nq && "refund" === rq.kind) {
        const {
          refundedMs: Eq,
          forfeitedMs: Yq,
          premiumCurrency: lq
        } = rq, Oq = Yq + (0 === lq ? Eq : 0), [mq, xq] = Mm("payments:subscribeRefundsGemRank", Eq), [Aq, uq] = Mm("payments:subscribeForfeitsGemRank", Oq);
        return (0, Bq.jsxs)("div", {
          className: "StoreTempSubscribe SmallTextBold",
          children: [(0, Bq.jsx)("div", {
            children: qq("payments:subscribeEndsGemRank")
          }), lq > 0 && (0, Bq.jsx)("div", {
            children: qq(mq, {
              ...xq,
              amount: lq.toLocaleString()
            })
          }), Oq > 0 && (0, Bq.jsx)("div", {
            children: qq(Aq, uq)
          }), (0, Bq.jsxs)("div", {
            className: "StoreTempSubscribeButtons",
            children: [(0, Bq.jsx)(cq.i, {
              onClick: () => {
                Vq(!1)
              },
              children: qq("general:cancel")
            }), (0, Bq.jsx)(cq.p, {
              onClick: () => {
                yq(tq)
              },
              loading: gq,
              children: qq("payments:subscribeContinue", {
                price: vq
              })
            })]
          })]
        })
      }
      return (0, Bq.jsxs)("div", {
        className: "StoreTempSubscribe",
        children: [(0, Bq.jsx)(fm.i, {
          notice: lq,
          className: "SmallTextBold"
        }), (0, Bq.jsx)(fm.d, {
          className: "SmallTextBold"
        }), (0, Bq.jsx)(cq.p, {
          onClick: () => {
            "refund" === rq.kind ? Vq(!0) : yq(tq)
          },
          disabled: void 0 !== oq,
          loading: gq,
          children: qq("payments:subscribeToSuperRank", {
            price: vq
          })
        })]
      })
    }
    const Sm = {
      kind: "board"
    };
    let pm = !1;

    function Gm(qq) {
      return "found" === qq.status || "error" === qq.status && "store:giftRecipientLookupFailed" === qq.error ? qq.name : null
    }(0, Lq.u)(BO.prefetchBillingOfferings);
    const Lm = (0, Yq.memo)((function(qq) {
      var Eq;
      let {
        show: lq
      } = qq;
      const {
        t: xq
      } = (0, mq.v)(), {
        userContext: Aq
      } = (0, aq.c)(), cq = Aq !== bq.NULL_USER_CONTEXT, uq = tO(Aq), [Wq, Nq] = (0, dq.b)(), {
        page: Vq,
        urlMode: jq,
        goTo: Hq
      } = (0, rO.g)(), oq = function(qq) {
        return "superRank" === qq.kind ? "superRank" : "pack" === qq.kind ? qq.pack : null
      }(Vq), {
        openEverythingMenuName: Pq,
        gameState: Qq
      } = (0, rq.j)(["openEverythingMenuName", "gameState"]), yq = null !== Pq;
      ! function(qq, Eq) {
        const [lq] = (0, Yq.useState)(nO.i), [Oq, mq] = (0, Yq.useState)(!1);
        lq && Eq && !Oq && mq(!0);
        const xq = (0, OY.q)(),
          Aq = lq && Oq && qq && !xq;
        (0, Yq.useEffect)((() => {
          if (!Aq) return;
          let qq = null,
            Eq = null,
            Yq = null;
          const lq = () => !document.hasFocus() || document.activeElement instanceof HTMLIFrameElement || (0, xE.d)().purchaseUnderWay,
            Oq = () => {
              var gq;
              null === (gq = Yq) || void 0 === gq || gq(), Yq = null, null !== qq && (clearTimeout(qq), qq = null), null !== Eq && (clearTimeout(Eq), Eq = null)
            },
            mq = () => {
              (0, vO.t)(!1), (0, vO.p)(!1), Oq(), qq = setTimeout((() => {
                qq = null, Yq = (0, hO.e)((() => {
                  Yq = null, lq() ? mq() : ((0, vO.t)(!0), Eq = setTimeout((() => {
                    Eq = null, Yq = (0, hO.e)((() => {
                      Yq = null, lq() ? mq() : (0, vO.p)(!0)
                    }))
                  }), 3e3), Promise.resolve().then((() => gq(4486))).then((qq => {
                    qq.startBackgroundGameSetup()
                  }), (qq => {
                    console.warn("Background game setup: its chunk failed to load", qq)
                  })))
                }))
              }), 2e3)
            };
          for (const gq of bO) window.addEventListener(gq, mq, {
            capture: !0,
            passive: !0
          });
          return mq(), () => {
            for (const qq of bO) window.removeEventListener(qq, mq, {
              capture: !0
            });
            Oq(), (0, vO.t)(!1), (0, vO.p)(!1)
          }
        }), [Aq])
      }(lq && yq, "pack" === Vq.kind);
      const tq = "landingPage" === Qq;
      (0, Yq.useEffect)((() => {
        yq && (0, BO.prefetchBillingOfferings)()
      }), [yq]), (0, Yq.useEffect)((() => {
        yq && !lq && tq && (0, iO.v)()
      }), [yq, lq, tq]);
      const [vq, hq] = (0, Yq.useState)(0), [nq, iq] = (0, Yq.useState)(null), [Zq, fq] = (0, Yq.useState)(null), [Mq, Tq] = (0, Yq.useState)(null), [Sq, pq] = (0, Yq.useState)(null), Gq = (0, Yq.useRef)(null), kq = (0, Yq.useRef)(null), Rq = (0, Yq.useRef)(null), Uq = (0, Yq.useRef)(!1), Fq = (0, Lq.A)(), sq = (0, Yq.useRef)(0), Xq = (0, Yq.useRef)(!1);

      function wq() {
        hq((qq => qq + 1))
      }(0, Yq.useEffect)((() => {
        if (lq) {
          if (pm = !0, (0, Lq.j)(), Fq && Fq.seq !== sq.current) {
            var qq;
            sq.current = Fq.seq, "loginResume" !== Fq.source && (0, Lq.z)();
            const Eq = (0, Lq.b)(Fq);
            jq || Hq(Eq), pq(null !== (qq = Fq.highlight) && void 0 !== qq ? qq : null), fq(null), "gift" === Fq.mode && Fq.giftRecipientName ? uq.choose(Fq.giftRecipientName, "prefilled") : "current" !== Fq.mode && uq.clear(), "gift" !== Fq.mode || Fq.giftRecipientName || wq(), (0, eq.reportAnalyticsClick)({
              id: "store.open",
              value: Fq.source
            })
          } else Xq.current || (0, eq.reportAnalyticsClick)({
            id: "store.open",
            value: "menuTab"
          });
          Xq.current = !0
        } else Xq.current = !1
      }), [lq, Fq]), (0, Yq.useEffect)((() => {
        if (!Sq) return;
        const qq = setTimeout((() => {
          pq(null)
        }), 4e3);
        return () => {
          clearTimeout(qq)
        }
      }), [Sq]), (0, Yq.useLayoutEffect)((() => {
        const qq = Gq.current;
        if (!lq || !qq) return kq.current = null, void(Rq.current = null);
        var Eq;
        if (oq) kq.current = oq, null === (Eq = qq.querySelector(".StoreDetailBackButton, .CosmeticShopDetailBackButton")) || void 0 === Eq || Eq.focus();
        else if (kq.current) {
          const Eq = Rq.current;
          null !== Eq && (qq.scrollTop = Eq);
          const gq = qq.querySelector(`[data-store-item="${kq.current}"]`);
          if (gq) {
            const Yq = gq.getBoundingClientRect(),
              lq = qq.getBoundingClientRect();
            gq.focus({
              preventScroll: null !== Eq && Yq.bottom > lq.top && Yq.top < lq.bottom
            })
          }
          kq.current = null
        }
      }), [oq, lq]), (0, Yq.useEffect)((() => {
        fq(null)
      }), [uq.query]), (0, Yq.useEffect)((() => {
        if (!Mq) return;
        const qq = setTimeout((() => {
          Tq(null)
        }), 8e3);
        return () => {
          clearTimeout(qq)
        }
      }), [Mq]);
      const Kq = Aq.superRankInfo,
        Cq = Aq.isLoggedIn() || (0, Jq.guestsMayBuy)(),
        Iq = Aq.getOwnedCosmeticPacks(),
        Dq = (0, oO.l)(uq.query),
        qE = (0, oO.c)({
          mode: Dq,
          loggedIn: cq ? Cq : null,
          superRankInfo: Kq,
          now: Date.now(),
          ownedPacks: Iq,
          packs: uO.w,
          recipient: uq.recipient
        });
      (0, Yq.useEffect)((() => {
        if (!Cq || !lq) return;
        const qq = (0, Lq.z)(),
          Eq = qq && (0, oO.h)(qq, uO.w);
        qq && Eq && ((0, eq.reportAnalyticsClick)({
          id: "store.login_resume",
          value: qq.item
        }), (0, Lq.n)(Eq))
      }), [Cq, lq]);
      const EE = (0, oO.p)({
        superRankDaysLeft: qE.superRankDaysLeft,
        openedThisSession: pm || lq,
        seenNewItems: (0, Lq.f)()
      });
      if ((0, Yq.useEffect)((() => {
          (0, Lq.w)(EE)
        }), [EE]), !lq || !(0, Jq.purchasesAllowed)()) return null;
      const gE = Nq > Wq && Wq <= 700,
        YE = !gE && Nq <= 420,
        lE = "gift" === Dq ? Gm(uq.recipient) : null,
        OE = null !== nq;

      function mE(qq) {
        (0, NO.c)(qq, "gift" === Dq ? uq.query.trim() : null)
      }

      function AE(qq, Eq) {
        (0, eq.reportAnalyticsClick)({
          id: "store.purchase_done",
          value: `${Eq?"gift":"self"}:${qq}`
        }), Eq && (uq.recordGift(Eq.name, qq), cE(Eq))
      }

      function cE(qq) {
        ! function(qq) {
          try {
            sE.i.setItem(PO, (0, oO.t)(yO(), qq))
          } catch {}
        }({
          name: qq.name,
          cosmetics: qq.cosmetics
        }), Hq(Sm), Tq((Eq => {
          var gq;
          return {
            name: qq.name,
            seq: (null !== (gq = null === Eq || void 0 === Eq ? void 0 : Eq.seq) && void 0 !== gq ? gq : 0) + 1
          }
        }))
      }
      async function uE(qq) {
        var Eq, gq;
        if (Uq.current) return;
        if (!Cq) return void mE(qq);
        fq(null), pq(null);
        const Yq = "gift" === Dq ? {
          name: Gm(uq.recipient),
          cosmetics: uq.recipientCosmetics
        } : null;
        if (Yq && !Yq.name) return void wq();
        const lq = "superRank" === qq ? zq.n.id : (0, zq.b)(qq);
        Uq.current = !0;
        const Oq = await (0, HO.d)(lq, null !== (Eq = null === Yq || void 0 === Yq ? void 0 : Yq.name) && void 0 !== Eq ? Eq : null);
        if (Uq.current = !1, !Oq) return;
        iq(qq);
        const mq = await aO.e.purchase(lq, null !== (gq = null === Yq || void 0 === Yq ? void 0 : Yq.name) && void 0 !== gq ? gq : null);
        iq(null), mq ? fq(mq) : (AE(qq, Yq), Yq || (await (0, VO.flushClientAnalyticsEvents)(), (0, WO.refreshWithoutConfirmation)("superRank" === qq ? "/super-rank-welcome" : `/pack-welcome/${qq}`)))
      }
      const BE = Oq()("Store", {
        StoreGift: "gift" === Dq,
        StorePortrait: gE,
        StoreCompact: YE
      });
      if ("pack" === Vq.kind) {
        const qq = Vq.pack,
          Eq = qE.packs.find((Eq => Eq.pack === qq));
        return (0, Bq.jsx)("div", {
          ref: Gq,
          className: "CosmeticShopContainer",
          children: (0, Bq.jsx)(jO.g, {
            pack: qq,
            onBack: () => {
              Hq(Sm)
            },
            onPurchased: Eq => {
              AE(qq, Eq ? {
                name: Eq,
                cosmetics: null
              } : null)
            },
            giftCta: "gift" === Dq && lE && Eq && (0, Bq.jsxs)(Bq.Fragment, {
              children: [(0, Bq.jsx)(gm, {
                state: Eq.state,
                item: qq,
                price: (WE = qq, "superRank" === WE ? zq.n.price : (0, zq.f)(WE)),
                busy: OE,
                onAct: () => {
                  uE(qq)
                },
                onNeedRecipient: () => {
                  Hq(Sm), wq()
                },
                onLogin: () => {
                  mE(qq)
                },
                highlight: Sq === qq
              }), Zq && (0, Bq.jsx)("span", {
                className: "CosmeticShopGiftError SmallTextBold",
                children: xq(Zq)
              })]
            }),
            ownedPacks: Iq,
            startAsGift: "gift" === Dq,
            initialGiftRecipient: "gift" === Dq ? null !== lE && void 0 !== lE ? lE : uq.query.trim() : "",
            highlightCta: Sq === qq
          }, qq)
        })
      }
      var WE;
      return "superRank" === Vq.kind ? (0, Bq.jsx)("div", {
        ref: Gq,
        className: Oq()(BE, "StoreDetailView"),
        children: (0, Bq.jsx)(hm, {
          state: qE.superRank.state,
          mode: Dq,
          giftName: lE,
          busy: OE,
          highlight: "superRank" === Sq,
          purchaseError: Zq,
          onBack: () => {
            Hq(Sm)
          },
          onChooseRecipient: () => {
            Hq(Sm), wq()
          },
          onAct: () => {
            uE("superRank")
          },
          onLogin: () => {
            mE("superRank")
          }
        })
      }) : (0, Bq.jsxs)("div", {
        ref: Gq,
        className: BE,
        onScroll: qq => {
          Rq.current = qq.currentTarget.scrollTop
        },
        children: [(0, Bq.jsx)("div", {
          className: "StoreTopRow",
          children: (0, Bq.jsx)(pO, {
            selfName: cq ? Aq.getPlayerName() : "",
            giftRecipient: uq,
            suggestionsVersion: null !== (Eq = null === Mq || void 0 === Mq ? void 0 : Mq.seq) && void 0 !== Eq ? Eq : 0,
            pulseSignal: vq,
            disabled: OE || !cq
          })
        }), Mq && (0, Bq.jsxs)("div", {
          className: "StoreNotice StoreNoticeGiftSent",
          onClick: () => {
            Tq(null)
          },
          children: [(0, Bq.jsx)(dO.b, {
            showSignal: Mq.seq
          }), oO.b, " ", xq("store:giftSent", {
            name: Mq.name
          })]
        }, Mq.seq), !Mq && Zq && (0, Bq.jsx)("div", {
          className: "StoreNotice StoreNoticeError",
          children: xq(Zq)
        }), (0, Bq.jsx)(rm, {
          layout: qE,
          mountAtOnce: null !== kq.current,
          bundleGift: "gift" === Dq ? {
            recipientName: lE,
            lookingUp: "pending" === uq.recipient.status,
            busy: OE,
            onNeedRecipient: wq,
            onSent: qq => {
              (0, eq.reportAnalyticsClick)({
                id: "store.purchase_done",
                value: "gift:superGems"
              }), cE({
                name: qq,
                cosmetics: uq.recipientCosmetics
              })
            }
          } : null,
          superRankTotalDays: (0, oO.q)(Kq),
          busy: OE,
          highlightItem: Sq,
          onOpen: function(qq) {
            (0, eq.reportAnalyticsClick)({
              id: "store.item_open",
              value: qq
            }), Hq((0, Lq.c)(qq))
          },
          onAct: uE,
          onNeedRecipient: wq,
          onLogin: mE
        }), "gift" !== Dq && (0, Bq.jsx)(Tm, {})]
      })
    }));
    var Jm = gq(2597),
      km = gq(8814),
      Rm = gq(8601),
      Um = gq(2653),
      Fm = gq(2506),
      sm = gq(2553),
      Xm = gq(2563),
      wm = gq(2569),
      Km = gq(2641),
      Cm = gq(2619),
      Im = gq(2322),
      em = gq(2344),
      Dm = gq(2335),
      qx = gq(2012),
      Ex = gq(2576),
      gx = gq(2352);

    function Yx(qq) {
      let {
        show: Eq
      } = qq;
      return Eq ? (0, Bq.jsx)(lx, {}) : null
    }

    function lx() {
      const {
        t: qq
      } = (0, mq.v)(), {
        followsLeader: Eq
      } = (0, Fm.c)(), {
        loading: gq,
        friends: lq,
        requests: Aq,
        invites: uq
      } = (0, Rq.g)(), {
        userContext: Wq
      } = (0, aq.c)(), [Nq, Vq] = (0, Yq.useState)(gx.j);
      (0, Yq.useEffect)((() => {
        (0, gx.b)()
      }), []);
      const dq = Aq.map((qq => qq.name)),
        {
          state: jq,
          recentRequesters: Hq
        } = (0, Cm.o)(),
        oq = new Map([...("loaded" === jq.status ? jq.recentPlayers : []).map((qq => [qq.preview.name, qq])), ...Hq.map((qq => [qq.name, qq]))]),
        Pq = (0, Yq.useRef)(null),
        [tq, rq] = (0, Yq.useState)(""),
        [vq, hq] = (0, Yq.useState)("Enter"),
        [nq, bq] = (0, Yq.useState)(null);

      function iq() {
        tq && (hq("Loading"), (0, Dm.i)(tq, "social_menu").then((qq => {
          if (Pq.current) switch (qq.kind) {
            case "sent":
              hq("Success");
              break;
            case "becameFriends":
              hq("BecameFriends");
              break;
            case "failed":
              bq(qq.message), hq("Error")
          }
        })))
      }
      return (0, Yq.useEffect)((() => {
        if ("Enter" === vq || "Loading" === vq) return;
        const qq = setTimeout((() => {
          Pq.current.value = "", rq(""), hq("Enter")
        }), "Success" === vq ? 1e3 : 4e3);
        return () => {
          clearTimeout(qq)
        }
      }), [vq]), (0, Bq.jsx)("div", {
        className: "SocialMenu",
        children: (0, Bq.jsxs)("div", {
          className: "SocialMenuInner",
          children: [(0, Bq.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, Bq.jsxs)("div", {
              className: "SocialMenuBox SocialMenuAddFriend",
              children: [(0, Bq.jsx)(wm.c, {
                label: qq("socialBar:addFriend")
              }), (0, Bq.jsxs)("div", {
                className: "AddFriendBody",
                children: [(0, Bq.jsxs)("div", {
                  className: Oq()("AddFriendBodyOverlay", {
                    [`AddFriendBodyOverlay${vq}`]: !0
                  }),
                  children: ["Loading" === vq && (0, Bq.jsx)(yq.e, {}), "Success" === vq && (0, Bq.jsx)(xq.d, {
                    name: "check"
                  }), "BecameFriends" === vq && (0, Bq.jsx)(Bq.Fragment, {
                    children: qq("socialBar:nowFriends", {
                      playerName: tq
                    })
                  }), "Error" === vq && nq && (0, Bq.jsx)(Bq.Fragment, {
                    children: qq(nq.translationKey, nq.params)
                  })]
                }), (0, Bq.jsxs)("div", {
                  className: "PlayerSearch",
                  children: [(0, Bq.jsx)(Qq.b, {
                    className: "PlayerSearchInput",
                    placeholderText: qq("socialBar:enterPlayerName"),
                    domRef: Pq,
                    onValueChange: qq => {
                      rq((0, Mq.t)(qq)), Pq.current.value = (0, Mq.t)(qq)
                    },
                    onEnter: () => {
                      tq && (0, eq.reportAnalyticsClick)({
                        id: "social.add_friend",
                        value: "social_menu"
                      }), iq()
                    }
                  }), (0, Bq.jsxs)(cq.g, {
                    className: "PlayerSearchInputButton SmallTextLight",
                    onClick: () => {
                      iq()
                    },
                    analyticsClick: {
                      id: "social.add_friend",
                      value: "social_menu"
                    },
                    children: [(0, Bq.jsx)(xq.d, {
                      name: "user-plus"
                    }), " ", qq("socialBar:sendRequest")]
                  })]
                })]
              }), (0, Bq.jsx)(Ex.b, {
                surface: "social_menu",
                prefetchOnMount: !0
              })]
            }), uq.length > 0 && (0, Bq.jsxs)("div", {
              className: "SocialMenuBox SocialMenuInvites",
              children: [(0, Bq.jsx)(wm.c, {
                label: qq("socialBar:invites"),
                meta: uq.length
              }), uq.map((Eq => (0, Bq.jsxs)("div", {
                className: "SocialMenuInvite",
                children: [(0, Bq.jsx)("div", {
                  className: "SocialMenuInviteIcon",
                  children: (0, Bq.jsx)(Im.b, {
                    invite: Eq
                  })
                }), (0, Bq.jsx)("div", {
                  className: "SocialMenuInviteText",
                  children: (0, Bq.jsx)(Im.d, {
                    invite: Eq
                  })
                }), (0, Bq.jsx)(cq.p, {
                  className: "SocialMenuInviteJoin SmallTextLight",
                  onClick: () => {
                    (0, em.e)(Eq)
                  },
                  analyticsClick: {
                    id: "social.accept_invite",
                    value: `social_menu:${Eq.destination.kind}`
                  },
                  children: qq("general:join")
                }), (0, Bq.jsx)(Kq.e, {
                  tooltipInner: (0, Bq.jsx)(Bq.Fragment, {
                    children: qq("general:decline")
                  }),
                  delayShow: 0,
                  children: (0, Bq.jsx)(cq.i, {
                    className: "SocialMenuInviteDecline",
                    padDefaultFocus: "invite" === (null === Nq || void 0 === Nq ? void 0 : Nq.kind) && Nq.inviteId === Eq.id,
                    onClick: () => {
                      Rq.c.declineInvite(Eq.id)
                    },
                    analyticsClick: {
                      id: "social.decline_invite",
                      value: `social_menu:${Eq.destination.kind}`
                    },
                    children: (0, Bq.jsx)(xq.d, {
                      name: "xmark"
                    })
                  })
                })]
              }, Eq.id)))]
            }), (0, Bq.jsxs)("div", {
              className: Oq()("SocialMenuBox SocialMenuRequests", {
                SocialMenuBoxEmpty: !gq && 0 === Aq.length
              }),
              children: [(0, Bq.jsx)(wm.c, {
                label: (0, Bq.jsxs)(Bq.Fragment, {
                  children: [(0, Bq.jsx)(xq.d, {
                    name: qx.i
                  }), " ", qq("socialBar:requests")]
                }),
                meta: (0, Bq.jsxs)(Bq.Fragment, {
                  children: [Aq.length, Aq.length === Cq.p && (0, Bq.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: qq("socialBar:limitReached")
                  })]
                })
              }), gq && (0, Bq.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, Bq.jsx)(yq.e, {})
              }), !gq && 0 === Aq.length && (0, Bq.jsx)("div", {
                className: "SocialMenuEmpty",
                children: qq("socialBar:noFriendRequests")
              }), !gq && Aq.length > 0 && (0, Bq.jsx)("div", {
                className: "PlayerRows",
                children: (0, Bq.jsx)(al.c, {
                  lazyLoadedClassName: "SocialMenuRequestsLazy",
                  observerUpdateDeps: [Aq],
                  children: Aq.map(((Eq, gq) => {
                    const Yq = oq.get(Eq.name);
                    return (0, Bq.jsxs)(Xm.i, {
                      playerSocialPreview: Eq,
                      zIndex: Aq.length - gq,
                      padDefaultFocus: (0, gx.h)(Nq, Eq.name, gq),
                      status: Yq && (0, Bq.jsx)(Km.e, {
                        gameNameWithVariation: Yq.gameNameWithVariation,
                        isPrivateLobby: Yq.isPrivateLobby
                      }),
                      children: [(0, Bq.jsx)(Kq.e, {
                        tooltipInner: (0, Bq.jsx)(Bq.Fragment, {
                          children: qq("general:accept")
                        }),
                        delayShow: 0,
                        children: (0, Bq.jsx)(cq.g, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            Vq((0, gx.e)(dq, gq)), (0, Dm.h)(Eq.name, !0, {
                              source: "social_menu",
                              announceFriend: !1
                            })
                          },
                          analyticsClick: {
                            id: "social.accept_friend_request",
                            value: "social_menu"
                          },
                          children: (0, Bq.jsx)(xq.d, {
                            name: "check"
                          })
                        })
                      }), (0, Bq.jsx)(Kq.e, {
                        tooltipInner: (0, Bq.jsx)(Bq.Fragment, {
                          children: qq("general:decline")
                        }),
                        delayShow: 0,
                        children: (0, Bq.jsx)(cq.i, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            Vq((0, gx.e)(dq, gq)), (0, Dm.h)(Eq.name, !1, {
                              source: "social_menu"
                            })
                          },
                          analyticsClick: {
                            id: "social.decline_friend_request",
                            value: "social_menu"
                          },
                          children: (0, Bq.jsx)(xq.d, {
                            name: "xmark"
                          })
                        })
                      })]
                    }, `${Eq.name}_${Eq.isError}`)
                  }))
                })
              })]
            }), (0, Bq.jsx)(Km.l, {})]
          }), (0, Bq.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, Bq.jsxs)("div", {
              className: "SocialMenuBox SocialMenuParty",
              children: [(0, Bq.jsx)(wm.c, {
                label: qq("socialBar:party")
              }), (0, Bq.jsx)(sm.d, {})]
            }), (0, Bq.jsxs)("div", {
              className: "SocialMenuBox SocialMenuFriends",
              children: [(0, Bq.jsx)(wm.c, {
                label: (0, Bq.jsxs)(Bq.Fragment, {
                  children: [(0, Bq.jsx)(xq.d, {
                    name: qx.e
                  }), " ", qq("socialBar:friends")]
                }),
                meta: (0, Bq.jsxs)(Bq.Fragment, {
                  children: [lq.length, lq.length >= (0, Cq.d)(Wq.getPlayerRanks()) && (0, Bq.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: qq("socialBar:limitReached")
                  })]
                })
              }), gq && (0, Bq.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, Bq.jsx)(yq.e, {})
              }), !gq && 0 === lq.length && (0, Bq.jsx)("div", {
                className: "SocialMenuEmpty",
                children: qq("socialBar:noFriends")
              }), !gq && lq.length > 0 && (0, Bq.jsx)("div", {
                className: "PlayerRows",
                children: (0, Bq.jsx)(al.c, {
                  lazyLoadedClassName: "SocialMenuFriendsLazy",
                  observerUpdateDeps: [lq],
                  children: lq.map(((qq, gq) => (0, Bq.jsx)(Xm.i, {
                    playerSocialPreview: qq,
                    isFriend: !0,
                    hideFriendBadge: !0,
                    onFriendRemoved: qq => {
                      Rq.c.removeFriendFromState(qq)
                    },
                    zIndex: lq.length - gq,
                    children: (0, Bq.jsx)(Xm.e, {
                      friend: qq,
                      followsLeader: Eq,
                      analyticsSurface: "social_menu"
                    })
                  }, `${qq.name}_${qq.isError}`)))
                })
              })]
            })]
          })]
        })
      })
    }
    var Ox = gq(2487);
    const mx = qq => {
        let {
          action: Eq,
          padAction: gq
        } = qq;
        const {
          isTouchScreen: Yq
        } = (0, rq.j)(["isTouchScreen"]), lq = (0, OY.q)();
        return Yq && !lq ? null : (0, Bq.jsx)(eg.c, {
          className: "EverythingMenuTabKey",
          noaAction: Eq,
          padHidesKey: !0,
          padMenuShortcut: gq
        })
      },
      xx = (0, Yq.memo)((function() {
        const {
          t: qq
        } = (0, mq.v)(), {
          gameState: Eq,
          openEverythingMenuName: gq,
          initSdkSelectorFinished: lq,
          crosshairGameView: xq
        } = (0, rq.j)(["gameState", "openEverythingMenuName", "initSdkSelectorFinished", "crosshairGameView"]), {
          userContext: Aq
        } = (0, aq.c)(), uq = (0, Jq.purchasesAllowed)(), Wq = (0, Lq.E)(), Nq = (qq, Eq) => (0, Bq.jsx)(mx, {
          action: qq,
          padAction: Eq
        }), [Vq, dq] = (0, Yq.useState)(null), Hq = (0, Yq.useRef)(null), oq = {
          ..."inGame" === Eq ? {} : (0, cq.V)({
            focusOnClick: !1
          }),
          ...VY.d
        }, Pq = qq => {
          const Eq = (0, dY.g)((Eq => {
            (0, cq.T)(Eq.currentTarget), rq.b.set({
              openEverythingMenuName: qq
            })
          }), "pointerup");
          return {
            ...oq,
            onPointerDown: qq => {
              oq.onPointerDown(qq), Eq.onPointerDown(qq)
            },
            onPointerUp: qq => {
              oq.onPointerUp(qq), Eq.onPointerUp(qq)
            },
            onClick: Eq.onClick
          }
        }, Qq = null !== gq, yq = gq !== cE.p.COSMETIC_SHOP && !xq;
        async function tq() {
          await async function() {
            if (!Vq) return;
            await Vq(), dq(null)
          }(), rq.b.set({
            openEverythingMenuName: null
          })
        }
        const vq = (0, Yq.useRef)(null),
          hq = (0, Yq.useCallback)((() => null !== vq.current && (0, Rm.f)(vq.current)), []);

        function bq() {
          hq() || tq()
        }(0, Yq.useEffect)((() => (0, lO.t)(hq)), [hq]);
        const iq = (0, Yq.useMemo)((() => "inGame" === Eq ? {
          text: qq("settingsMenu:exitGame"),
          onClick: () => {
            (0, km.b)()
          }
        } : (0, nq.c)() ? {
          text: qq("settingsMenu:exitGame"),
          onClick: () => {
            OE.q.discordActivity().then((qq => {
              qq.exit("User exited the game")
            }))
          }
        } : null), [Eq, qq]);
        const Zq = (0, Bq.jsx)("div", {
          className: "EverythingMenuCloseButtonClickZone",
          onClick: bq,
          children: (0, Bq.jsx)(cq.m, {
            className: "EverythingMenuCloseButton"
          })
        });
        return (0, Bq.jsx)(jY.b, {
          showing: Qq,
          globallyUniqueKey: "EverythingMenu",
          alwaysMountChildren: !0,
          keepsMovement: gq === cE.p.SHOP,
          doGameplayStartStopOnShow: "inGame" === Eq,
          children: (0, Bq.jsx)(oY.d, {
            className: "EverythingMenuContainer",
            show: Qq && !xq,
            children: (0, Bq.jsx)(HY.c, {
              close: bq,
              togglePointerLock: !1,
              children: (0, Bq.jsxs)("div", {
                className: "EverythingMenu",
                children: [!(0, lO.l)(gq) && (0, Bq.jsxs)("div", {
                  className: "EverythingMenuTabList",
                  children: [(0, Bq.jsxs)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerStart",
                    children: [iq && (0, Bq.jsx)(cq.d, {
                      className: "EverythingMenuBackButton",
                      padDestructive: !0,
                      onClick: () => {
                        iq.onClick()
                      },
                      children: iq.text
                    }), Qq && uq && (0, Bq.jsx)("div", {
                      ...oq,
                      className: "EverythingMenuWallet",
                      title: qq("homePage:getPremiumCurrency"),
                      onClick: () => {
                        (0, Lq.n)({
                          mode: "current",
                          source: "menuWallet"
                        })
                      },
                      children: (0, Bq.jsx)(Jm.e, {})
                    })]
                  }), (0, Bq.jsxs)("div", {
                    className: "EverythingMenuTabListInner",
                    "data-pad-tabs": "1",
                    children: [(0, Bq.jsxs)("div", {
                      ...Pq(cE.p.SETTINGS),
                      "data-pad-tab": !0,
                      "data-pad-selected": gq === cE.p.SETTINGS ? "true" : void 0,
                      className: Oq()("EverythingMenuTab", {
                        EverythingMenuTabActive: gq === cE.p.SETTINGS
                      }),
                      children: [qq("general:settings"), Nq("OpenSettings", "pause")]
                    }), (0, Bq.jsxs)("div", {
                      ...Pq(cE.p.CUSTOMISATION),
                      "data-pad-tab": !0,
                      "data-pad-selected": gq === cE.p.CUSTOMISATION ? "true" : void 0,
                      className: Oq()("EverythingMenuTab", {
                        EverythingMenuTabActive: gq === cE.p.CUSTOMISATION
                      }),
                      children: [qq("general:player"), Nq("OpenCharacterCustomization")]
                    }), jq.featureFlags.useSocialFeatures && (0, Bq.jsxs)("div", {
                      ...Pq(cE.p.SOCIAL),
                      "data-pad-tab": !0,
                      "data-pad-selected": gq === cE.p.SOCIAL ? "true" : void 0,
                      className: Oq()("EverythingMenuTab", {
                        EverythingMenuTabActive: gq === cE.p.SOCIAL
                      }),
                      ...(0, eq.d)({
                        id: "social.open_menu",
                        value: "menu_tab"
                      }, gq === cE.p.SOCIAL),
                      children: [qq("socialBar:social"), (0, Bq.jsx)(Ox.e, {})]
                    }), uq && (0, Bq.jsxs)("div", {
                      ...Pq(cE.p.COSMETIC_SHOP),
                      "data-pad-tab": !0,
                      "data-pad-selected": gq === cE.p.COSMETIC_SHOP ? "true" : void 0,
                      className: Oq()("EverythingMenuTab EverythingMenuTabCosmeticShop", {
                        EverythingMenuTabActive: gq === cE.p.COSMETIC_SHOP
                      }),
                      children: [(0, Bq.jsx)("span", {
                        className: "EverythingMenuTabCosmeticShopText",
                        children: qq("store:title")
                      }), "new" === Wq && (0, Bq.jsx)(Wm, {}), "dot" === Wq && (0, Bq.jsx)("span", {
                        className: "EverythingMenuTabStoreBadge EverythingMenuTabStoreDot"
                      })]
                    }), "inGame" === Eq && (0, Bq.jsxs)("div", {
                      ...Pq(cE.p.LOBBY_LEADERBOARD),
                      "data-pad-tab": !0,
                      "data-pad-selected": gq === cE.p.LOBBY_LEADERBOARD ? "true" : void 0,
                      className: Oq()("EverythingMenuTab", {
                        EverythingMenuTabActive: gq === cE.p.LOBBY_LEADERBOARD
                      }),
                      children: [qq("general:lobby"), Nq("OpenLobbyLeaderboard", "leaderboard")]
                    })]
                  }), (0, Bq.jsx)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerEnd",
                    children: Zq
                  })]
                }), (0, lO.l)(gq) && Zq, (0, Bq.jsxs)("div", {
                  ref: vq,
                  className: "EverythingMenuBody",
                  "data-pad-initial-area": !0,
                  style: {
                    "--everythingMenuBodyBackgroundOpacity": "inGame" === Eq ? "0.85" : "1"
                  },
                  children: [(0, Bq.jsx)(uY, {
                    show: gq === cE.p.SETTINGS,
                    setBeforeResumeCallback: dq
                  }), (0, Bq.jsx)(aY, {
                    show: gq === cE.p.CUSTOMISATION
                  }), (0, Bq.jsx)(Yq.Suspense, {
                    fallback: null,
                    children: (0, Bq.jsx)(Kl, {
                      show: gq === cE.p.SHOP
                    })
                  }), (0, Bq.jsx)(AO, {
                    show: gq === cE.p.LOBBY_LEADERBOARD
                  }), (0, Bq.jsx)(Lm, {
                    show: gq === cE.p.COSMETIC_SHOP
                  }), (0, Bq.jsx)(Yx, {
                    show: gq === cE.p.SOCIAL
                  })]
                }), !(0, jq.isMobileApp)() && (0, PY.e)(Aq.getPlayerRanks()) && (0, Bq.jsx)(oY.d, {
                  ref: Hq,
                  className: "EverythingMenuBannerDiv",
                  show: yq,
                  "data-pad-hint-bar-avoid": !0,
                  "data-pad-no-step-in": !0,
                  children: (0, Bq.jsx)(Um.d, {
                    info: {
                      adId: 2,
                      adType: "leaderboard",
                      adAlias: "banner_shop"
                    },
                    sizeInfo: {
                      parentRef: Hq
                    },
                    showing: Qq && yq,
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
  9283: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Oq
    });
    var Yq = gq(307),
      lq = gq(9292);

    function Oq(qq, Eq, gq) {
      const Oq = Object.entries(Eq).sort(((qq, Eq) => Eq[1] - qq[1])),
        mq = (0, Yq.Eb)(qq);
      mq.push(qq ? "\n\n" : "\n");
      for (const [lq, aq] of Oq) {
        var xq, Aq, cq;
        const qq = null !== (xq = null === gq || void 0 === gq || null === (Aq = gq[lq]) || void 0 === Aq ? void 0 : Aq.icon) && void 0 !== xq ? xq : `${lq} Enchantment`;
        mq.push({
          icon: qq,
          style: {
            fontSize: "1.5rem"
          }
        }), mq.push({
          str: `${lq} ${null!==(cq=(0,Yq.X)(aq))&&void 0!==cq?cq:aq}\n`
        })
      }
      mq.push({
        str: "\n"
      });
      for (const [Yq, aq] of Oq) {
        var uq, Bq, Wq, Nq;
        const qq = null !== (uq = null === gq || void 0 === gq || null === (Bq = gq[Yq]) || void 0 === Bq ? void 0 : Bq.icon) && void 0 !== uq ? uq : `${Yq} Enchantment`,
          Eq = null !== (Wq = null === gq || void 0 === gq || null === (Nq = gq[Yq]) || void 0 === Nq ? void 0 : Nq.description) && void 0 !== Wq ? Wq : (0, lq.n)(Yq);
        mq.push({
          icon: qq,
          style: {
            fontSize: "1.25rem",
            opacity: .75
          }
        }), mq.push({
          str: Eq,
          style: {
            fontSize: "0.8em",
            fontWeight: "normal",
            opacity: .75
          }
        }), mq.push({
          str: "\n"
        })
      }
      return mq
    }
  },
  9297: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => cq,
      h: () => Hq,
      i: () => dq,
      k: () => Aq,
      m: () => jq,
      n: () => uq,
      q: () => Wq,
      t: () => Vq,
      x: () => Bq
    });
    var Yq = gq(296),
      lq = gq(598),
      Oq = gq(307),
      mq = gq(4085),
      xq = gq(9283);

    function Aq(qq, Eq) {
      var gq;
      let {
        player: Yq,
        chestOrCreative: lq
      } = qq;
      var Oq;
      return Eq < Yq.length ? null !== (Oq = Yq[Eq]) && void 0 !== Oq ? Oq : null : null !== (gq = lq[Eq - Yq.length]) && void 0 !== gq ? gq : null
    }

    function cq(qq) {
      var Eq;
      return null !== (Eq = qq.amount) && void 0 !== Eq ? Eq : 0
    }

    function uq(qq) {
      return 0 === qq.button || void 0 === qq.button
    }

    function Bq(qq) {
      return !!qq.shiftKey
    }

    function Wq(qq) {
      return "touches" in qq || "touch" === qq.pointerType || "pen" === qq.pointerType
    }
    const Nq = new Set,
      aq = 50;

    function Vq(qq, Eq) {
      var gq;
      const Yq = null === (gq = qq[Eq]) || void 0 === gq ? void 0 : gq.displayName;
      return (0, lq.H)(Yq) ? "string" !== typeof Eq ? "" : (!Nq.has(Eq) && Nq.size < aq && (Nq.add(Eq), console.warn(`No item called "${Eq}", so its hover shows the name as given`)), Eq) : Yq
    }

    function dq(qq, Eq, gq) {
      var Aq, cq, uq, Bq, Wq, Nq, aq, dq, jq, Hq, oq, Pq, Qq, yq;
      const tq = qq.attributes,
        rq = null !== (Aq = null === (cq = Eq[qq.name]) || void 0 === cq ? void 0 : cq.rootName) && void 0 !== Aq ? Aq : qq.name,
        vq = null !== (uq = null !== (Bq = tq.customDisplayName) && void 0 !== Bq ? Bq : null === (Wq = Eq[qq.name]) || void 0 === Wq ? void 0 : Wq.displayName) && void 0 !== uq ? uq : Vq(Eq, rq);
      let hq = vq;
      const nq = null === (Nq = tq.customAttributes) || void 0 === Nq ? void 0 : Nq.enchantmentTier;
      nq && (hq = (0, Oq.Eb)(vq, {
        colour: Oq.Ab[nq]
      }));
      const bq = null !== (aq = null !== (dq = null !== (jq = function(qq, Eq) {
        var gq;
        if (void 0 === qq || null !== (gq = Eq.customAttributes) && void 0 !== gq && gq.author) return qq;
        const lq = (0, Yq.Zb)(qq);
        return lq.every((qq => "string" === typeof qq)) ? qq : lq.map((qq => "string" === typeof qq ? qq : {
          icon: qq.icon,
          style: {
            fontSize: "1.5em"
          }
        }))
      }(tq.customDescription, tq)) && void 0 !== jq ? jq : null === (Hq = Eq[qq.name]) || void 0 === Hq ? void 0 : Hq.description) && void 0 !== dq ? dq : null === (oq = Eq[rq]) || void 0 === oq ? void 0 : oq.description) && void 0 !== aq ? aq : "";
      let iq = bq;
      if (null !== (Pq = tq.customAttributes) && void 0 !== Pq && Pq.enchantments) iq = (0, xq.e)(bq, tq.customAttributes.enchantments, tq.customAttributes.enchantmentData);
      else if (gq[rq]) iq = (0, Oq.Eb)(bq), iq.push({
        str: "\n"
      }), iq.push({
        str: "Enchantable",
        style: {
          fontSize: "0.8em",
          fontWeight: "normal",
          opacity: .4
        }
      });
      else if (null !== (Qq = tq.customAttributes) && void 0 !== Qq && Qq.mobSettings) {
        var Zq, fq;
        const qq = tq.customAttributes.mobSettings;
        var Mq, Tq;
        if (iq = [], (0, lq.H)(tq.customAttributes.health) || (iq.push({
            str: "\n"
          }), iq.push({
            icon: "Health",
            style: {
              fontSize: "1.5em"
            }
          }), iq.push({
            str: " "
          }), iq.push({
            str: tq.customAttributes.health.toString()
          }), (0, lq.H)(qq.maxHealth) || (iq.push({
            str: "/"
          }), iq.push({
            str: qq.maxHealth.toString()
          }))), !(0, lq.H)(qq.attackDamage) && qq.attackDamage > 0 && (iq.push({
            str: "\n"
          }), iq.push({
            icon: "Iron Sword",
            style: {
              fontSize: "1.5em"
            }
          }), iq.push({
            str: " "
          }), iq.push({
            str: qq.attackDamage.toString()
          })), !(0, lq.H)(qq.secondaryAttackDamage) && qq.secondaryAttackDamage > 0 && (iq.push({
            str: "\n"
          }), iq.push({
            icon: "Stone Crossbow",
            style: {
              fontSize: "1.5em"
            }
          }), iq.push({
            str: " "
          }), iq.push({
            str: qq.secondaryAttackDamage.toString()
          })), (0, lq.H)(qq.baseRunningSpeed) || (iq.push({
            str: "\n"
          }), iq.push({
            icon: "Speed",
            style: {
              fontSize: "1.5em"
            }
          }), iq.push({
            str: " "
          }), iq.push({
            str: qq.baseRunningSpeed.toFixed(2)
          })), "Saddled" === qq.metaInfo) iq.push({
          str: "\n"
        }), iq.push({
          str: {
            translationKey: "general:has"
          }
        }), iq.push({
          str: " "
        }), iq.push({
          icon: null !== (Mq = null === (Tq = qq.tameInfo) || void 0 === Tq ? void 0 : Tq.saddleItemName) && void 0 !== Mq ? Mq : "Saddle",
          style: {
            fontSize: "1.5em"
          }
        });
        if (iq.push({
            str: "\n"
          }), iq.push({
            str: "\n"
          }), qq.petInfo && null !== (Zq = qq.tameInfo) && void 0 !== Zq && Zq.supportsFriendship) {
          const Eq = mq.c.getIconsFromFriendshipPoints(qq.petInfo.friendshipPoints);
          for (const qq of Eq) iq.push({
            icon: qq,
            style: {
              fontSize: "1.5em"
            }
          });
          iq.push({
            str: "\n"
          });
          const gq = mq.c.getMobHungerLevel(qq.petInfo.lastFedAt);
          for (const qq of mq.c.hungerLevelIcons[gq]) iq.push({
            icon: qq,
            style: {
              fontSize: "1.5em"
            }
          });
          iq.push({
            str: " "
          }), iq.push({
            str: mq.c.hungerLevelTranslations[gq],
            style: {
              fontWeight: "bolder"
            }
          })
        }
        if (qq.tameInfo && null !== (fq = qq.tameInfo) && void 0 !== fq && fq.supportsFriendship) {
          var zq, Sq;
          let Eq = null !== (zq = qq.tameInfo.likedFoods) && void 0 !== zq ? zq : [];
          iq.push({
            str: "\n"
          }), iq.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: mq.c.feedTextColours[mq.c.MobFoodType.Superliked]
            }
          }), iq.push({
            str: " "
          }), null !== (Sq = qq.petInfo) && void 0 !== Sq && Sq.superlikedFoodKnown ? (iq.push({
            icon: qq.petInfo.superlikedFood,
            style: {
              fontSize: "1.5em"
            }
          }), Eq = Eq.filter((Eq => Eq !== qq.petInfo.superlikedFood))) : iq.push({
            icon: "Question Mark",
            style: {
              fontSize: "1.5em"
            }
          }), iq.push({
            str: "\n"
          }), iq.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: mq.c.feedTextColours[mq.c.MobFoodType.Liked]
            }
          }), iq.push({
            str: " "
          });
          for (const qq of Eq) iq.push({
            icon: qq,
            style: {
              fontSize: "1.5em"
            }
          });
          iq.push({
            str: "\n"
          }), iq.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: mq.c.feedTextColours[mq.c.MobFoodType.Neutral]
            }
          }), iq.push({
            str: " "
          });
          for (const gq of null !== (pq = qq.tameInfo.neutralFoods) && void 0 !== pq ? pq : []) {
            var pq;
            iq.push({
              icon: gq,
              style: {
                fontSize: "1.5em"
              }
            })
          }
          iq.push({
            str: "\n"
          }), iq.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: mq.c.feedTextColours[mq.c.MobFoodType.Disliked]
            }
          }), iq.push({
            str: " "
          });
          for (const gq of null !== (Gq = qq.tameInfo.dislikedFoods) && void 0 !== Gq ? Gq : []) {
            var Gq;
            iq.push({
              icon: gq,
              style: {
                fontSize: "1.5em"
              }
            })
          }
        }
        iq.length > 0 ? (iq.shift(), iq.unshift(...(0, Oq.Eb)(bq))) : iq = (0, Oq.Eb)(bq)
      }
      return {
        name: hq,
        desc: iq,
        fontStyle: null !== (yq = tq.customAttributes) && void 0 !== yq && yq.author ? "italic" : "normal"
      }
    }

    function jq(qq, Eq, gq, Yq) {
      const lq = Aq(qq, gq),
        Oq = Aq(qq, Yq);
      if (!lq) return !1;
      const mq = Eq[lq.name].armourReduction,
        xq = Eq[Oq.name].armourReduction;
      if (xq === mq) {
        var cq, uq, Bq, Wq;
        const qq = null !== (cq = null === (uq = lq.attributes.customAttributes) || void 0 === uq ? void 0 : uq.enchantmentTier) && void 0 !== cq ? cq : "Tier 0",
          Eq = null !== (Bq = null === (Wq = Oq.attributes.customAttributes) || void 0 === Wq ? void 0 : Wq.enchantmentTier) && void 0 !== Bq ? Bq : "Tier 0";
        return parseInt(qq.replace("Tier ", "")) >= parseInt(Eq.replace("Tier ", ""))
      }
      return mq > xq
    }

    function Hq(qq) {
      let Eq;
      if ("number" === typeof qq) {
        const gq = document.querySelector(`[data-inven-idx="${qq}"]`);
        if (!gq) return null;
        Eq = gq.getBoundingClientRect()
      } else Eq = qq.getBoundingClientRect();
      return {
        x: Eq.left + Eq.width / 2,
        y: Eq.top + Eq.height / 2
      }
    }
  },
  9176: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Nq,
      e: () => aq,
      g: () => Vq
    });
    var Yq = gq(1422),
      lq = gq(57),
      Oq = gq(1298),
      mq = gq(4359),
      xq = gq(2325),
      Aq = gq(1183),
      cq = gq(96),
      uq = gq(1942),
      Bq = gq(1326),
      Wq = gq(1070);

    function Nq(qq) {
      let {
        show: Eq,
        onClose: gq
      } = qq;
      const {
        requestedGameNameWithVariation: Yq,
        lobbyName: lq,
        shownLobbyName: Oq
      } = (0, uq.g)("connectedGame"), Aq = (0, xq.c)(Yq, lq, !1);
      return cq.featureFlags.canUseInviteLinks && (0, Wq.jsx)(mq.c, {
        show: Eq,
        close: gq,
        padShowsHud: !0,
        togglePointerLock: !1,
        globallyUniqueKey: "InviteLinkBox",
        doGameplayStartStopOnShow: !0,
        children: (0, Wq.jsxs)("div", {
          className: "InviteLinkBox AnimFadeInScaleUp",
          children: [(0, Wq.jsx)("div", {
            className: "InviteLinkBoxHeader SmallTextBold",
            children: "Invite Friends"
          }), (0, Wq.jsxs)("div", {
            className: "InviteLinkBoxDescription SmallTextLight",
            children: [(0, Wq.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: '"Join Lobby Name" Button Info'
            }), "Game: ", null === Aq ? (0, Wq.jsx)(Bq.e, {}) : Aq, (0, Wq.jsx)("br", {}), "Lobby Name: ", Oq, (0, Wq.jsx)("br", {}), (0, Wq.jsx)("br", {}), (0, Wq.jsx)("br", {}), (0, Wq.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: "Link"
            })]
          }), (0, Wq.jsx)(aq, {})]
        })
      })
    }

    function aq() {
      var qq;
      const {
        t: Eq
      } = (0, Aq.v)(), gq = null !== (qq = Vq(cq.featureFlags.canUseInviteLinks)) && void 0 !== qq ? qq : "Loading Link...", [Oq, mq] = (0, lq.useState)(0), [xq, uq] = (0, lq.useReducer)((qq => qq + 1), 0);
      return (0, lq.useEffect)((() => {
        const qq = setTimeout((() => {
          uq()
        }), 1100);
        return () => {
          clearTimeout(qq)
        }
      }), [Oq]), cq.featureFlags.canUseInviteLinks && (0, Wq.jsxs)("div", {
        className: "InviteLinkInnerWrapper",
        children: [(0, Wq.jsx)("div", {
          className: "InviteLinkInner",
          children: gq
        }), (0, Wq.jsx)(Yq.g, {
          className: "InviteLinkCopyButton",
          onClick: () => {
            navigator.clipboard.writeText(gq).catch((qq => {
              console.error("Failed to copy invite link:", qq)
            })), mq(Date.now())
          },
          disabled: Date.now() - Oq < 1e3,
          children: Date.now() - Oq < 1e3 ? Eq("general:copied") : Eq("general:copy")
        })]
      })
    }

    function Vq(qq) {
      const [Eq, gq] = (0, lq.useState)(null);
      return (0, lq.useEffect)((() => {
        if (!qq) return;
        let Eq = !0;
        return (0, Oq.G)().then((qq => {
          Eq && gq(qq)
        })).catch((qq => {
          console.error("Failed to get invite link:", qq)
        })), () => {
          Eq = !1
        }
      }), [qq]), Eq
    }
  },
  9270: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => cq
    });
    var Yq = gq(57),
      lq = gq(1018),
      Oq = gq.n(lq),
      mq = gq(1942),
      xq = gq(1070);

    function Aq(qq) {
      const Eq = Math.floor(qq / 3600),
        gq = Math.floor(qq % 3600 / 60),
        Yq = Math.floor(qq % 60),
        lq = `${gq.toString().padStart(2,"0")}:${Yq.toString().padStart(2,"0")}`;
      return Eq > 0 ? `${Eq}:${lq}` : lq
    }
    const cq = (0, Yq.memo)((function(qq) {
      let {
        className: Eq
      } = qq;
      const {
        recording: gq,
        seconds: Yq
      } = (0, mq.g)("replayRecorder");
      return gq ? (0, xq.jsxs)("div", {
        className: Oq()("RecordingIndicator", Eq),
        children: [(0, xq.jsx)("span", {
          className: "RecordingIndicatorDot"
        }), (0, xq.jsx)("span", {
          className: "RecordingIndicatorLabel",
          children: "REC"
        }), (0, xq.jsx)("span", {
          className: "RecordingIndicatorTime",
          children: Aq(Yq)
        })]
      }) : null
    }))
  },
  4721: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => dq
    });
    var Yq = gq(1018),
      lq = gq.n(Yq),
      Oq = gq(4465),
      mq = gq(1183),
      xq = gq(1025),
      Aq = gq(1422),
      cq = gq(1477),
      uq = gq(1336),
      Bq = gq(2460),
      Wq = gq(1070);
    const Nq = {
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

    function aq(qq) {
      let {
        platform: Eq
      } = qq;
      const gq = "youtube" === Eq;
      return (0, Wq.jsxs)("span", {
        className: lq()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: gq
        }),
        children: [gq && (0, Wq.jsx)(Bq.b, {
          variant: "white"
        }), !gq && (0, Wq.jsx)(xq.d, {
          name: Nq[Eq].icon,
          kit: "brands"
        })]
      })
    }

    function Vq(qq) {
      let {
        platform: Eq,
        link: gq,
        editable: Yq,
        userContext: lq,
        onLinksUpdated: Bq
      } = qq;
      const {
        t: Vq
      } = (0, mq.v)(), dq = Nq[Eq];
      if (!gq && !Yq) return null;

      function jq() {
        var qq;
        if (!lq || !Bq) return;
        uq.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: dq.name
            }
          },
          prefixText: Oq.w[Eq],
          placeholderText: "playBloxd",
          initialValue: null !== (qq = null === gq || void 0 === gq ? void 0 : gq.handle) && void 0 !== qq ? qq : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: gq ? "general:remove" : void 0
        }).getResult().then((async qq => {
          if ("notificationTornDown" !== qq && null !== qq) try {
            "submit" === qq.type ? await cq.e.setSocialLink(lq, Eq, qq.value) : await cq.e.clearSocialLink(lq, Eq), Bq()
          } catch (gq) {
            console.error("Failed to update social link", gq), uq.NotificationProvider.showAlertPopup({
              title: gq.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (gq) {
        const qq = `@${gq.handle}`;
        return (0, Wq.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: dq.color
          },
          href: gq.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, Wq.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, Wq.jsx)(aq, {
              platform: Eq
            }), (0, Wq.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, Wq.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: qq
              })
            })]
          }), Yq && (0, Wq.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, Aq.V)({
              stopPropagation: !0
            }),
            onClick: qq => {
              qq.stopPropagation(), qq.preventDefault(), jq()
            },
            children: (0, Wq.jsx)(xq.d, {
              name: "pen-to-square"
            })
          }), !Yq && (0, Wq.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, Wq.jsx)(xq.d, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, Wq.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: dq.color
        },
        ...(0, Aq.V)(),
        onClick: () => {
          jq()
        },
        children: [(0, Wq.jsx)(aq, {
          platform: Eq
        }), (0, Wq.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, Wq.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: dq.name
          }), (0, Wq.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: Vq("homePage:profileSocialLinkAdd")
          })]
        }), (0, Wq.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, Wq.jsx)(xq.d, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function dq(qq) {
      let {
        socialLinks: Eq,
        editable: gq = !1,
        userContext: Yq,
        onLinksUpdated: lq
      } = qq;
      if (!gq && 0 === Eq.length) return null;
      const mq = new Map(Eq.map((qq => [qq.platform, qq]))),
        xq = gq ? Oq.u : Eq.map((qq => qq.platform));
      return (0, Wq.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, Wq.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: xq.map((qq => (0, Wq.jsx)(Vq, {
            platform: qq,
            link: mq.get(qq),
            editable: gq,
            userContext: Yq,
            onLinksUpdated: lq
          }, qq)))
        })
      })
    }
  },
  9277: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Oq
    });
    var Yq = gq(4364),
      lq = gq(4367);

    function Oq(qq) {
      let {
        children: Eq,
        showing: gq,
        globallyUniqueKey: Oq,
        alwaysMountChildren: mq = !1,
        doGameplayStartStopOnShow: xq = !0,
        keepsMovement: Aq = !1
      } = qq;
      return (0, lq.e)(!0, gq, Oq, Aq), (0, Yq.d)(xq, gq), gq || mq ? Eq : null
    }
  },
  9326: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Oq
    });
    var Yq = gq(57),
      lq = gq(3455);

    function Oq() {
      const [qq, Eq] = (0, Yq.useState)(!1);
      return (0, Yq.useLayoutEffect)((() => {
        let qq = !0;
        return (0, lq.b)().then((() => {
          qq && Eq(!0)
        })), () => {
          qq = !1
        }
      }), []), qq
    }
  },
  6434: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Oq
    });
    var Yq = gq(57),
      lq = gq(38);

    function Oq(qq, Eq) {
      var gq;
      const [Oq, mq] = (0, Yq.useState)(null !== (gq = lq.i.getItem(qq)) && void 0 !== gq ? gq : Eq);
      return [Oq, Eq => {
        lq.i.setItem(qq, Eq), mq(Eq)
      }]
    }
  },
  9246: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Vq,
      g: () => aq
    });
    gq(9251);
    var Yq = gq(1018),
      lq = gq.n(Yq),
      Oq = gq(57),
      mq = gq(9216);

    function xq(qq, Eq) {
      return Math.max(1, Math.round(qq * Eq))
    }

    function Aq(qq, Eq) {
      const gq = Eq * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
        Yq = function(qq, Eq) {
          if (qq.lines) return xq(qq.lineThickness, Eq) % 2;
          if (qq.dot) return xq(qq.dotSize, Eq) % 2;
          return cq(qq, Eq) % 2
        }(qq, Eq),
        lq = uq(qq.lineThickness * gq, Yq),
        Oq = xq(qq.lineLength, gq),
        mq = Math.round(qq.gap * gq),
        Aq = qq.outline > 0 ? xq(qq.outline, gq) : 0,
        Wq = [];
      if (qq.lines && (Wq.push({
          x: lq + mq,
          y: 0,
          w: Oq,
          h: lq,
          arm: "right"
        }), Wq.push({
          x: -mq - Oq,
          y: 0,
          w: Oq,
          h: lq,
          arm: "left"
        }), Wq.push({
          x: 0,
          y: lq + mq,
          w: lq,
          h: Oq,
          arm: "down"
        }), qq.tStyle || Wq.push({
          x: 0,
          y: -mq - Oq,
          w: lq,
          h: Oq,
          arm: "up"
        }), 0 === mq && Wq.push({
          x: 0,
          y: 0,
          w: lq,
          h: lq
        })), qq.dot) {
        const Eq = uq(qq.dotSize * gq, Yq),
          Oq = qq.lines && 0 === mq && qq.dotSize > qq.lineThickness ? Math.max(Eq, lq + 2) : Eq,
          xq = (lq - Oq) / 2;
        Wq.push({
          x: xq,
          y: xq,
          w: Oq,
          h: Oq
        })
      }
      const Nq = Wq.map((qq => ({
        ...qq,
        x: qq.x - Aq,
        y: qq.y - Aq,
        w: qq.w + 2 * Aq,
        h: qq.h + 2 * Aq
      })));
      let aq = null,
        Vq = null;
      if (qq.circle) {
        const Eq = xq(qq.circleThickness, gq),
          Oq = function(qq, Eq) {
            return qq + (qq % 2 === Eq ? 0 : 1)
          }(cq(qq, gq), Yq),
          mq = (lq - Oq) / 2;
        aq = Bq(mq, Oq, Eq), Aq > 0 && (Vq = Bq(mq - Aq, Oq + 2 * Aq, Eq + 2 * Aq))
      }
      return {
        cell: lq,
        fills: Wq,
        outlines: Aq > 0 ? Nq : [],
        ring: aq,
        ringOutline: Vq
      }
    }

    function cq(qq, Eq) {
      return Math.round(qq.circleRadius * Eq * 2 + xq(qq.circleThickness, Eq))
    }

    function uq(qq, Eq) {
      return Math.max(2 - Eq, 2 * Math.round((qq - Eq) / 2) + Eq)
    }

    function Bq(qq, Eq, gq) {
      const Yq = 2 * gq >= Eq - 1;
      return {
        x: qq,
        y: qq,
        size: Eq,
        border: Math.min(gq, Math.floor(Eq / 2)),
        filled: Yq
      }
    }
    var Wq = gq(1070);
    const Nq = 1.4;

    function aq(qq, Eq) {
      return qq && Eq ? `scale(${Nq})` : "scale(1)"
    }

    function Vq(qq) {
      return "classic" === qq.settings.style ? (0, Wq.jsx)(Hq, {
        ...qq
      }) : (0, Wq.jsx)(vq, {
        ...qq
      })
    }
    const dq = .125;

    function jq(qq, Eq) {
      const gq = {};
      if (qq.color !== mq.f.color && (gq.color = (0, mq.k)(qq.color)), qq.opacity !== mq.f.opacity && (gq.opacity = qq.opacity / 100), qq.outline !== mq.f.outline || qq.outlineColor !== mq.f.outlineColor) {
        const Eq = qq.outline,
          Yq = (0, mq.k)(qq.outlineColor);
        gq.textShadow = Eq > 0 ? `-${Eq}px 0 ${Yq}, 0 ${Eq}px ${Yq}, ${Eq}px 0 ${Yq}, 0 -${Eq}px ${Yq}` : "none"
      }
      if (qq.size !== mq.f.size) {
        const Yq = qq.size / 100;
        gq.fontSize = Eq ? `calc(max(1.3rem, 18px) * ${Yq})` : `calc(1.3rem * ${Yq})`, gq.marginTop = `-${dq}em`, gq.transformOrigin = `50% calc(50% + ${dq}em)`
      }
      return gq
    }

    function Hq(qq) {
      let {
        settings: Eq,
        touch: gq,
        inPreview: Yq,
        inEditor: Oq,
        pressed: mq = !1,
        pressRef: xq
      } = qq;
      return (0, Wq.jsx)("div", {
        className: lq()("Crosshair", {
          Touch: gq,
          CrosshairInPreview: Yq,
          CrosshairInEditor: Oq || Yq
        }),
        ref: xq,
        style: {
          transform: aq(mq, Eq.growOnClick),
          ...jq(Eq, gq)
        },
        children: "+"
      })
    }

    function oq(qq, Eq) {
      return qq / Eq + "px"
    }

    function Pq(qq, Eq, gq, Yq) {
      return {
        ...tq(qq, Eq, gq),
        width: oq(qq.w, gq),
        height: oq(qq.h, gq),
        background: Yq
      }
    }

    function Qq(qq, Eq, gq) {
      return {
        left: oq(qq.x, Eq),
        top: oq(qq.y, Eq),
        width: oq(qq.size, Eq),
        height: oq(qq.size, Eq),
        borderWidth: oq(qq.border, Eq),
        borderColor: gq,
        background: qq.filled ? gq : void 0
      }
    }
    const yq = {
      left: [-1, 0],
      right: [1, 0],
      up: [0, -1],
      down: [0, 1]
    };

    function tq(qq, Eq, gq) {
      const [Yq, lq] = qq.arm ? yq[qq.arm] : [0, 0], Oq = Math.round(Eq * gq);
      return {
        left: oq(qq.x + Yq * Oq, gq),
        top: oq(qq.y + lq * Oq, gq)
      }
    }

    function rq(qq) {
      return qq.arm ? {
        "data-arm": qq.arm,
        "data-x": qq.x,
        "data-y": qq.y
      } : {}
    }

    function vq(qq) {
      let {
        settings: Eq,
        inPreview: gq,
        inEditor: Yq,
        pressed: xq = !1,
        spread: cq,
        spreadRef: uq
      } = qq;
      const Bq = (0, Oq.useRef)(null),
        {
          box: aq,
          dpr: Vq
        } = function(qq) {
          const [Eq, gq] = (0, Oq.useState)({
            box: {
              left: 0,
              top: 0,
              width: 0,
              height: 0
            },
            dpr: 1
          });
          return (0, Oq.useLayoutEffect)((() => {
            const Eq = qq.current;
            if (!Eq) return;
            const Yq = () => {
              const qq = Eq.getBoundingClientRect(),
                Yq = window.devicePixelRatio || 1;
              gq((Eq => Eq.dpr === Yq && Eq.box.left === qq.left && Eq.box.top === qq.top && Eq.box.width === qq.width && Eq.box.height === qq.height ? Eq : {
                box: {
                  left: qq.left,
                  top: qq.top,
                  width: qq.width,
                  height: qq.height
                },
                dpr: Yq
              }))
            };
            Yq();
            const lq = new ResizeObserver(Yq);
            return lq.observe(Eq), window.addEventListener("resize", Yq), window.addEventListener("scroll", Yq, !0), () => {
              lq.disconnect(), window.removeEventListener("resize", Yq), window.removeEventListener("scroll", Yq, !0)
            }
          }), [qq]), Eq
        }(Bq),
        dq = (0, Oq.useRef)(Vq);
      dq.current = Vq;
      const jq = Aq(Eq, Vq, xq && Eq.growOnClick ? Nq : 1),
        Hq = function(qq, Eq, gq) {
          const Yq = Math.round((qq.left + qq.width / 2) * gq - Eq / 2),
            lq = Math.round((qq.top + qq.height / 2) * gq - Eq / 2);
          return {
            x: Yq / gq - qq.left,
            y: lq / gq - qq.top
          }
        }(aq, jq.cell, Vq),
        oq = (0, mq.k)(Eq.color),
        yq = (0, mq.k)(Eq.outlineColor),
        vq = (0, Oq.useRef)(0);
      (0, Oq.useLayoutEffect)((() => {
        if (uq) return uq.current = qq => {
          var Eq;
          vq.current = qq, null === (Eq = Bq.current) || void 0 === Eq || Eq.querySelectorAll("[data-arm]").forEach((Eq => {
            Object.assign(Eq.style, tq(function(qq) {
              return {
                x: Number(qq.dataset.x),
                y: Number(qq.dataset.y),
                arm: qq.dataset.arm
              }
            }(Eq), qq, dq.current))
          }))
        }, () => {
          uq.current = null
        }
      }), [uq]);
      const hq = null !== cq && void 0 !== cq ? cq : vq.current;
      return (0, Wq.jsx)("div", {
        ref: Bq,
        className: lq()("CrosshairShapes", {
          CrosshairInPreview: gq,
          CrosshairInEditor: Yq || gq,
          CrosshairSpreads: void 0 !== uq
        }),
        children: (0, Wq.jsx)("div", {
          className: "CrosshairShapesOrigin",
          style: {
            left: Hq.x,
            top: Hq.y,
            opacity: Eq.opacity / 100
          },
          children: (0, Wq.jsxs)("div", {
            className: "CrosshairShapesPress",
            children: [jq.ringOutline && (0, Wq.jsx)("div", {
              className: "CrosshairRing",
              style: Qq(jq.ringOutline, Vq, yq)
            }), jq.outlines.map(((qq, Eq) => (0, Wq.jsx)("div", {
              className: "CrosshairPart",
              ...rq(qq),
              style: Pq(qq, hq, Vq, yq)
            }, `o${Eq}`))), jq.ring && (0, Wq.jsx)("div", {
              className: "CrosshairRing",
              style: Qq(jq.ring, Vq, oq)
            }), jq.fills.map(((qq, Eq) => (0, Wq.jsx)("div", {
              className: "CrosshairPart",
              ...rq(qq),
              style: Pq(qq, hq, Vq, oq)
            }, `f${Eq}`)))]
          })
        })
      })
    }
  },
  9254: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => uq,
      e: () => dq,
      i: () => Vq
    });
    var Yq = gq(9216);
    const lq = "XH1-",
      Oq = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
      mq = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
      xq = ["color", "outlineColor"],
      Aq = 1 + 3 * xq.length + mq.length + 1,
      cq = Math.ceil(8 * Aq / Math.log2(62)),
      uq = lq.length + cq;

    function Bq(qq) {
      let Eq = 90;
      for (const gq of qq) Eq = 31 * Eq + gq & 255;
      return Eq
    }
    const Wq = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      Nq = BigInt(Wq.length);

    function aq(qq, Eq) {
      let gq = 0n;
      for (const lq of qq) {
        const qq = Wq.indexOf(lq);
        if (qq < 0) return null;
        gq = gq * Nq + BigInt(qq)
      }
      if (gq >> BigInt(8 * Eq) !== 0n) return null;
      const Yq = [];
      for (let lq = 0; lq < Eq; lq++) Yq.unshift(Number(0xffn & gq)), gq >>= 8n;
      return Yq
    }

    function Vq(qq) {
      let Eq = "shapes" === qq.style ? 1 : 0;
      Oq.forEach(((gq, Yq) => {
        qq[gq] && (Eq |= 1 << Yq + 1)
      }));
      const gq = [Eq];
      for (const lq of xq) {
        const Eq = (0, Yq.j)(lq, qq[lq]);
        gq.push(Eq >> 16 & 255, Eq >> 8 & 255, 255 & Eq)
      }
      for (const lq of mq) {
        const {
          min: Eq,
          step: Oq
        } = Yq.e[lq];
        gq.push(Math.round(((0, Yq.j)(lq, qq[lq]) - Eq) / Oq))
      }
      return gq.push(Bq(gq)), lq + function(qq, Eq) {
        let gq = 0n;
        for (const lq of qq) gq = gq << 8n | BigInt(lq);
        let Yq = "";
        for (let lq = 0; lq < Eq; lq++) Yq = Wq[Number(gq % Nq)] + Yq, gq /= Nq;
        return Yq
      }(gq, cq)
    }

    function dq(qq) {
      for (const Eq of qq.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${cq}})`, "gi"))) {
        const qq = jq(aq(Eq[1], Aq));
        if (qq) return qq
      }
      return null
    }

    function jq(qq) {
      if (!qq || qq.length !== Aq || Bq(qq.slice(0, -1)) !== qq[qq.length - 1]) return null;
      const Eq = qq[0],
        gq = {
          ...Yq.f,
          style: 1 & Eq ? "shapes" : "classic"
        };
      Oq.forEach(((qq, Yq) => {
        gq[qq] = 0 !== (Eq & 1 << Yq + 1)
      }));
      let lq = 1;
      for (const Yq of xq) gq[Yq] = qq[lq] << 16 | qq[lq + 1] << 8 | qq[lq + 2], lq += 3;
      for (const Oq of mq) {
        const {
          min: Eq,
          step: mq
        } = Yq.e[Oq];
        gq[Oq] = (0, Yq.j)(Oq, Eq + qq[lq] * mq), lq++
      }
      return gq
    }
  },
  9216: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Yq,
      f: () => lq,
      j: () => Oq,
      k: () => cq,
      n: () => Aq,
      q: () => uq,
      u: () => xq,
      v: () => mq
    });
    const Yq = {
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
      lq = Object.freeze({
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

    function Oq(qq, Eq) {
      var gq;
      const {
        min: Oq,
        max: mq,
        step: xq
      } = Yq[qq];
      if (!Number.isFinite(Eq)) return lq[qq];
      const Aq = (null !== (gq = String(xq).split(".")[1]) && void 0 !== gq ? gq : "").length,
        cq = Number((Math.round(Eq / xq) * xq).toFixed(Aq));
      return Math.min(mq, Math.max(Oq, cq))
    }

    function mq(qq, Eq, gq) {
      const Yq = "number" === typeof gq ? Oq(Eq, gq) : gq;
      return {
        ...qq,
        [Eq]: Yq
      }
    }

    function xq(qq, Eq) {
      let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      return Object.keys(lq).every((Yq => gq.includes(Yq) || qq[Yq] === Eq[Yq]))
    }

    function Aq(qq) {
      return xq(qq, lq)
    }

    function cq(qq) {
      return `#${qq.toString(16).padStart(6,"0")}`
    }

    function uq(qq) {
      const Eq = /^#?([0-9a-f]{6})$/i.exec(qq.trim());
      return Eq ? parseInt(Eq[1], 16) : null
    }
  },
  9263: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Bq,
      f: () => Wq
    });
    var Yq = gq(57),
      lq = gq(38),
      Oq = gq(9254),
      mq = gq(9216);
    const xq = "crosshairCode";
    let Aq = null;
    const cq = new Set;

    function uq() {
      if (null === Aq) {
        var qq;
        const Eq = lq.i.getItem(xq);
        Aq = null !== (qq = "string" === typeof Eq ? (0, Oq.e)(Eq) : null) && void 0 !== qq ? qq : mq.f
      }
      return Aq
    }

    function Bq(qq) {
      Aq = qq, (0, mq.n)(qq) ? lq.i.removeItem(xq) : lq.i.setItem(xq, (0, Oq.i)(qq));
      for (const Eq of cq) Eq()
    }

    function Wq() {
      const [qq, Eq] = (0, Yq.useState)(uq);
      return (0, Yq.useEffect)((() => {
        const qq = () => {
          Eq(uq())
        };
        return qq(), gq = qq, cq.add(gq), () => {
          cq.delete(gq)
        };
        var gq
      }), []), qq
    }
  },
  8850: (qq, Eq, gq) => {
    function Yq(qq) {
      return {
        x: (qq.left + qq.right) / 2,
        y: (qq.top + qq.bottom) / 2
      }
    }

    function lq(qq) {
      return 0 === qq.length ? null : qq.reduce(((qq, Eq) => ({
        left: Math.min(qq.left, Eq.left),
        top: Math.min(qq.top, Eq.top),
        right: Math.max(qq.right, Eq.right),
        bottom: Math.max(qq.bottom, Eq.bottom)
      })))
    }

    function Oq(qq, Eq) {
      const gq = Math.max(0, (Eq - (qq.right - qq.left)) / 2),
        Yq = Math.max(0, (Eq - (qq.bottom - qq.top)) / 2);
      return {
        left: qq.left - gq,
        top: qq.top - Yq,
        right: qq.right + gq,
        bottom: qq.bottom + Yq
      }
    }

    function mq(qq, Eq) {
      return Eq.x >= qq.left && Eq.x <= qq.right && Eq.y >= qq.top && Eq.y <= qq.bottom
    }

    function xq(qq, Eq, gq) {
      let lq = null,
        xq = 1 / 0;
      for (const {
          id: Yq,
          box: Oq
        }
        of Eq) {
        const Eq = (Oq.right - Oq.left) * (Oq.bottom - Oq.top);
        mq(Oq, qq) && Eq < xq && (xq = Eq, lq = Yq)
      }
      if (null !== lq) return lq;
      let Aq = 1 / 0;
      for (const {
          id: cq,
          box: uq
        }
        of Eq) {
        if (!mq(Oq(uq, gq), qq)) continue;
        const Eq = Yq(uq),
          xq = Math.hypot(qq.x - Eq.x, qq.y - Eq.y);
        xq < Aq && (Aq = xq, lq = cq)
      }
      return lq
    }

    function Aq(qq, Eq, gq) {
      return {
        left: gq.left,
        top: gq.top,
        right: qq - gq.right,
        bottom: Eq - gq.bottom
      }
    }

    function cq(qq, Eq, gq, Yq) {
      const lq = (qq, Eq, gq) => Math.max(Math.min(Eq, 0), Math.min(Math.max(gq, 0), qq));
      return {
        x: lq(Eq, Yq.left - qq.left, Yq.right - qq.right),
        y: lq(gq, Yq.top - qq.top, Yq.bottom - qq.bottom)
      }
    }

    function uq(qq, Eq, gq, Yq, lq) {
      const Oq = qq.dx * Yq + Eq,
        mq = qq.dy * lq + gq,
        xq = qq => Math.max(-1, Math.min(1, qq));
      return {
        dx: xq(Oq / Yq),
        dy: xq(mq / lq)
      }
    }

    function Bq(qq, Eq, gq, Yq) {
      return Eq <= 0 || gq <= 0 ? 1 : Math.max(.05, Math.min(1, qq / Eq, Yq / gq))
    }

    function Wq(qq, Eq, gq) {
      return Math.min(qq.right, Eq.right) - Math.max(qq.left, Eq.left) > gq && Math.min(qq.bottom, Eq.bottom) - Math.max(qq.top, Eq.top) > gq
    }

    function Nq(qq, Eq) {
      const gq = (qq, Eq, gq, Yq) => Eq - qq > Yq - gq ? gq - qq > Eq - Yq ? Yq - Eq : gq - qq : qq < gq ? gq - qq : Eq > Yq ? Yq - Eq : 0;
      return {
        x: gq(qq.left, qq.right, Eq.left, Eq.right),
        y: gq(qq.top, qq.bottom, Eq.top, Eq.bottom)
      }
    }

    function aq(qq, Eq) {
      let {
        avoid: gq = null,
        bounds: Yq = null
      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, lq = 0, Oq = 1 / 0;
      return qq.forEach(((qq, mq) => {
        const xq = Eq.filter((Eq => Wq(qq, Eq, 0))).length,
          Aq = null !== Yq && (qq.left < Yq.left || qq.top < Yq.top || qq.right > Yq.right || qq.bottom > Yq.bottom),
          cq = xq + (gq && Wq(qq, gq, 0) ? 1e3 : 0) + (Aq ? 1e6 : 0);
        cq < Oq && (lq = mq, Oq = cq)
      })), lq
    }
    gq.d(Eq, {
      A: () => Nq,
      D: () => lq,
      b: () => Yq,
      d: () => mq,
      e: () => Wq,
      i: () => cq,
      m: () => Oq,
      n: () => aq,
      q: () => uq,
      t: () => xq,
      v: () => Bq,
      x: () => Aq
    })
  },
  9207: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Oq,
      d: () => lq
    });
    var Yq = gq(24);

    function lq(qq, Eq) {
      return qq && !Eq
    }

    function Oq() {
      return lq(Yq.b.get("isTouchScreen"), Yq.b.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  8604: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => lq,
      e: () => Yq
    });
    const Yq = "controllerOpenKeyboard",
      lq = "controllerKeyboardVisible"
  },
  9167: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Yq
    });
    const Yq = new Set(["chunkBorders"])
  },
  9160: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      ALL_DEV_TOOLS: () => mq,
      coreDevTools: () => cq,
      devTools: () => Aq
    });
    var Yq = gq(611),
      lq = gq(1283),
      Oq = gq(9167);
    const mq = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function xq() {
      const {
        noaDevTools: qq
      } = await gq.e(231).then((() => gq(40806)));
      return qq
    }
    const Aq = new class {
        constructor() {
          this.loadHost = xq, this.tools = mq
        }
        setHost(qq) {
          this.tools = null === qq ? mq : qq.tools, this.loadHost = null === qq ? xq : async () => qq
        }
        supports(qq) {
          return this.tools.has(qq)
        }
        async downloadScene(qq, Eq) {
          const gq = await this.loadHost();
          await gq.downloadScene(qq, Eq)
        }
        async setAmbientLightIntensity(qq) {
          const Eq = await this.loadHost();
          await Eq.setAmbientLightIntensity(qq)
        }
      },
      cq = {
        tools: Oq.e,
        downloadScene: async () => {
          throw new Error("This client can't download the scene")
        },
        setAmbientLightIntensity: async () => {
          throw new Error("This client can't set the ambient light")
        }
      };
    Yq.v && Aq.setHost(cq), (0, lq.w)((() => {
      Aq.setHost(cq)
    }))
  },
  9321: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => mq,
      d: () => lq,
      f: () => uq
    });
    var Yq = gq(1547);

    function lq(qq) {
      var Eq;
      return {
        ...mq.store,
        yaw: mq.store.yaw + (null !== (Eq = Yq.b[qq].previewYaw) && void 0 !== Eq ? Eq : 0)
      }
    }
    const Oq = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      mq = {
        player: Oq,
        store: {
          ...Oq,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function xq(qq, Eq) {
      qq instanceof Promise ? qq.then(Eq).catch((qq => {
        console.error("Couldn't open the preview", qq)
      })) : Eq(qq)
    }
    class Aq {
      constructor(qq) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, xq(qq, (qq => {
          this.closed ? qq.close() : (this.opened = qq, null !== this.size && qq.resize(this.size.width, this.size.height), null !== this.view && qq.show(this.view))
        }))
      }
      show(qq) {
        var Eq;
        this.view = qq, null === (Eq = this.opened) || void 0 === Eq || Eq.show(qq)
      }
      resize(qq, Eq) {
        var gq;
        this.size = {
          width: qq,
          height: Eq
        }, null === (gq = this.opened) || void 0 === gq || gq.resize(qq, Eq)
      }
      close() {
        var qq;
        this.closed = !0, null === (qq = this.opened) || void 0 === qq || qq.close(), this.opened = null
      }
    }
    class cq {
      constructor(qq) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(qq).then((qq => qq.ready)), xq(qq, (qq => {
          this.closed ? qq.close() : (this.opened = qq, null !== this.size && qq.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var qq, Eq;
        return null !== (qq = null === (Eq = this.opened) || void 0 === Eq ? void 0 : Eq.isReady()) && void 0 !== qq && qq
      }
      setCosmetic(qq, Eq) {
        var gq;
        null === (gq = this.opened) || void 0 === gq || gq.setCosmetic(qq, Eq)
      }
      playEmote(qq) {
        var Eq;
        null === (Eq = this.opened) || void 0 === Eq || Eq.playEmote(qq)
      }
      setOrbit(qq) {
        var Eq;
        null === (Eq = this.opened) || void 0 === Eq || Eq.setOrbit(qq)
      }
      resetCamera() {
        var qq;
        null === (qq = this.opened) || void 0 === qq || qq.resetCamera()
      }
      async untilDrawn(qq) {
        var Eq;
        await this.ready, await (null === (Eq = this.opened) || void 0 === Eq ? void 0 : Eq.untilDrawn(qq))
      }
      resize(qq, Eq) {
        var gq;
        this.size = {
          width: qq,
          height: Eq
        }, null === (gq = this.opened) || void 0 === gq || gq.resize(qq, Eq)
      }
      close() {
        var qq;
        this.closed = !0, null === (qq = this.opened) || void 0 === qq || qq.close(), this.opened = null
      }
    }
    const uq = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(qq) {
        this.host = qq
      }
      setDefaultHost(qq) {
        this.makeDefault = qq
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(qq) {
        return new Aq(this.current().openMob(qq))
      }
      openPet(qq) {
        return new Aq(this.current().openPet(qq))
      }
      openMobLineup(qq) {
        return new Aq(this.current().openMobLineup(qq))
      }
      openCharacter(qq, Eq) {
        return new cq(this.current().openCharacter(qq, Eq))
      }
    }
  },
  9313: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Yq.c,
      f: () => Yq.d,
      i: () => Yq.f
    });
    var Yq = gq(9321);
    class lq {
      constructor(qq) {
        this.load = qq, this.loaded = null, this.loading = null
      }
      run(qq) {
        return null !== this.loaded ? qq(this.loaded) : (this.loading ??= this.load().then((qq => (this.loaded = qq, qq)), (qq => {
          throw this.loading = null, qq
        })), this.loading.then(qq))
      }
    }
    class Oq {
      constructor() {
        this.mobScene = new lq((() => Promise.all([gq.e(70), gq.e(227), gq.e(226), gq.e(246), gq.e(95), gq.e(247), gq.e(73), gq.e(72), gq.e(244), gq.e(71), gq.e(254), gq.e(248), gq.e(253), gq.e(251), gq.e(243), gq.e(265), gq.e(223), gq.e(238), gq.e(249), gq.e(252), gq.e(75), gq.e(197), gq.e(217), gq.e(94), gq.e(220), gq.e(235), gq.e(114), gq.e(236), gq.e(74), gq.e(113), gq.e(155)]).then((() => gq(40829))))), this.characterScene = new lq((() => Promise.all([gq.e(70), gq.e(227), gq.e(226), gq.e(246), gq.e(95), gq.e(247), gq.e(73), gq.e(72), gq.e(244), gq.e(71), gq.e(254), gq.e(248), gq.e(253), gq.e(251), gq.e(243), gq.e(265), gq.e(223), gq.e(238), gq.e(249), gq.e(252), gq.e(75), gq.e(197), gq.e(217), gq.e(94), gq.e(220), gq.e(235), gq.e(114), gq.e(236), gq.e(74), gq.e(113), gq.e(154)]).then((() => gq(40917)))))
      }
      openMob(qq) {
        return this.mobScene.run((Eq => Eq.openMobPreview(qq)))
      }
      openPet(qq) {
        return this.mobScene.run((Eq => Eq.openPetPreview(qq)))
      }
      openMobLineup(qq) {
        return this.mobScene.run((Eq => Eq.openMobLineupPreview(qq)))
      }
      openCharacter(qq, Eq) {
        return this.characterScene.run((gq => gq.openCharacterPreview(qq, Eq)))
      }
    }
    Yq.f.setDefaultHost((() => new Oq))
  },
  6535: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => lq,
      d: () => Oq
    });
    var Yq = gq(38);
    const lq = "shaderPack";
    async function Oq() {
      var qq;
      let Eq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (qq = await Yq.f.getItem(lq, Eq)) && void 0 !== qq ? qq : null
    }
  },
  9185: (qq, Eq, gq) => {
    function Yq(qq, Eq) {
      return qq && !Eq
    }
    gq.d(Eq, {
      b: () => Yq
    })
  },
  9200: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Oq
    });
    var Yq = gq(1046);

    function lq() {
      var qq, Eq;
      return null !== (qq = null === (Eq = screen.orientation) || void 0 === Eq ? void 0 : Eq.type) && void 0 !== qq ? qq : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const Oq = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && lq() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = lq(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, Yq.lV)(new Error("Game view size held for 60 s"))
        }), 6e4)
      }
      release() {
        clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
          if (document.hidden) document.addEventListener("visibilitychange", this.releaseWhenShown);
          else {
            this.holding = !1;
            for (const qq of this.resizers) qq()
          }
        }), 1e3)
      }
      heldSizer(qq) {
        let Eq = !1;
        return () => {
          if (Eq && this.isHeld()) return null;
          const gq = qq();
          return Eq ||= null !== gq, gq
        }
      }
      onRelease(qq) {
        return this.resizers.add(qq), () => {
          this.resizers.delete(qq)
        }
      }
    }
  },
  8846: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => xq,
      e: () => Aq
    });
    var Yq = gq(24),
      lq = gq(1308),
      Oq = gq(96);
    const mq = {
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

    function xq() {
      return (0, Oq.isMobile)() && "function" === typeof navigator.vibrate
    }
    const Aq = new class {
      constructor(qq) {
        this.deps = qq, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(qq, Eq) {
        var gq;
        if (!this.deps.enabled()) return;
        const Yq = mq[qq],
          lq = null !== Eq && void 0 !== Eq ? Eq : Yq.pattern;
        if (null === lq) return void console.warn("No vibration pattern for", qq);
        const Oq = this.deps.now();
        Oq - this.lastAnyAt < 40 && Yq.priority < this.playingPriority || Oq - (null !== (gq = this.lastAt.get(qq)) && void 0 !== gq ? gq : -1 / 0) < Yq.minGapMs || Oq < this.playingUntil && Yq.priority < this.playingPriority || (this.lastAt.set(qq, Oq), this.lastAnyAt = Oq, this.playingUntil = Oq + lq.reduce(((qq, Eq) => qq + Eq), 0), this.playingPriority = Yq.priority, this.deps.vibrate(lq))
      }
    }({
      vibrate: qq => {
        navigator.vibrate([...qq])
      },
      now: () => performance.now(),
      enabled: () => xq() && Yq.b.get("isTouchScreen") && Yq.b.get("clientEscMenuOptions").vibration && !(0, lq.i)()
    })
  },
  9178: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Nq,
      h: () => Wq
    });
    var Yq = gq(24),
      lq = gq(1677),
      Oq = gq(38),
      mq = gq(1336),
      xq = gq(3526),
      Aq = gq(1448),
      cq = gq(1367);
    const uq = 2592e5,
      Bq = "notificationOptInLastPromptedAt";
    async function Wq() {
      var qq;
      const Eq = await Nq();
      if (null === Eq) return;
      const gq = null !== (qq = Oq.i.getItem(Bq)) && void 0 !== qq ? qq : 0;
      if (Date.now() - gq < uq) return;
      if ((0, cq.c)()) return;
      const Yq = await mq.NotificationProvider.showPromptPopup({
        icon: "bell",
        title: "mobilePushNotifications:optInTitle",
        subtitle: lq.c.supports("notifications") ? "mobilePushNotifications:optInSubtitle" : "mobilePushNotifications:optInSubtitleBrowser",
        confirmText: "mobilePushNotifications:optInConfirm",
        cancelText: "mobilePushNotifications:optInCancel",
        padStartsOn: "cancel"
      }).getResult();
      "notificationTornDown" !== Yq && (Oq.i.setItem(Bq, Date.now()), (0, Aq.reportAnalyticsClick)({
        id: !0 === Yq ? "push.allow" : "push.deny",
        value: lq.c.supports("notifications") ? "app" : "browser"
      }), !0 === Yq && Eq().catch((qq => {
        console.error("Failed to ask for push notifications:", qq)
      })))
    }
    async function Nq() {
      return await lq.c.ready, lq.c.supports("notifications") ? Yq.b.get("mobilePushNotificationsCanAsk") ? async () => {
        lq.c.request("notifications.requestPermission", {}).then((qq => {
          let {
            canAsk: Eq
          } = qq;
          Yq.b.set({
            mobilePushNotificationsCanAsk: Eq
          })
        }), (qq => {
          console.error("The app couldn't ask for push notifications:", qq)
        }))
      }: null: await xq.c.canAsk() ? () => xq.c.requestPermission() : null
    }
  },
  9189: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => xq,
      g: () => Aq
    });
    var Yq = gq(24);
    const lq = 24,
      Oq = "farNametags",
      mq = 1e5;

    function xq() {
      var qq;
      return null === (qq = Yq.b.get("showDistantNametags")) || void 0 === qq || qq
    }

    function Aq() {
      var qq;
      return null !== (qq = function() {
        const qq = new URLSearchParams(window.location.search).get(Oq),
          Eq = null === qq || "" === qq ? NaN : Number(qq);
        return Number.isFinite(Eq) && Eq >= 0 ? Math.min(Eq, mq) : null
      }()) && void 0 !== qq ? qq : xq() ? 0 : lq
    }
  },
  9304: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => lq,
      d: () => mq
    });
    const Yq = [{
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

    function lq(qq) {
      let Eq, gq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof qq) {
        if (!Number.isFinite(qq)) return "0";
        if (Math.abs(qq) < 100) {
          const Eq = qq < 0 ? "-" : "",
            gq = Math.abs(qq);
          return gq >= 10 ? `${Eq}${gq.toFixed(1).replace(/\.0$/,"")}` : `${Eq}${gq.toFixed(2).replace(/\.?0+$/,"")}`
        }
        Eq = BigInt(Math.floor(qq))
      } else Eq = qq;
      const lq = Eq < 0n ? -Eq : Eq,
        Oq = Eq < 0n ? "-" : "",
        mq = lq.toString();
      if (mq.length <= gq) return `${Oq}${mq}`;
      const xq = 3 * Math.floor((mq.length - 1) / 3);
      if (xq < 3) return `${Oq}${mq}`;
      if (xq > 3 * Yq.length) {
        const qq = mq[0],
          Eq = mq.slice(1, 3).replace(/0+$/, "");
        return `${Oq}${Eq?`${qq}.${Eq}`:qq}e${mq.length-1}`
      }
      const {
        threshold: Aq,
        suffix: cq
      } = Yq[Yq.length - xq / 3], uq = lq / Aq, Bq = Number(1000n * (lq % Aq) / Aq), Wq = Number(uq) + Bq / 1e3;
      let Nq;
      return Nq = Wq >= 100 ? Math.floor(Wq).toString() : Wq >= 10 ? Wq.toFixed(1).replace(/\.0$/, "") : Wq.toFixed(2).replace(/\.?0+$/, ""), `${Oq}${Nq}${cq}`
    }
    const Oq = Yq.map((qq => {
      let {
        threshold: Eq,
        suffix: gq
      } = qq;
      return {
        threshold: Number(Eq),
        suffix: gq
      }
    })).filter((qq => {
      let {
        threshold: Eq
      } = qq;
      return Number.isFinite(Eq)
    }));

    function mq(qq) {
      const Eq = Math.abs(qq),
        gq = qq < 0 ? "-" : "";
      for (const {
          threshold: Yq,
          suffix: lq
        }
        of Oq)
        if (Eq >= Yq) {
          const qq = Eq / Yq;
          if (qq >= 1e3) return `${gq}${Eq.toExponential(2).replace("e+","e")}`;
          let Oq;
          return Oq = qq >= 100 ? Math.floor(qq).toString() : qq >= 10 ? qq.toFixed(1).replace(/\.0$/, "") : qq.toFixed(2).replace(/\.?0+$/, ""), `${gq}${Oq}${lq}`
        } return `${gq}${Eq}`
    }
  },
  9292: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => uq,
      h: () => Wq,
      j: () => Bq,
      n: () => mq,
      q: () => cq,
      r: () => Aq
    });
    var Yq = gq(307);
    const lq = ["Wood Enchanting Table", "Stone Enchanting Table", "Iron Enchanting Table", "Gold Enchanting Table", "Diamond Enchanting Table"],
      Oq = {
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

    function mq(qq) {
      var Eq;
      return null !== (Eq = Oq[qq]) && void 0 !== Eq ? Eq : {
        translationKey: ""
      }
    }
    const xq = {
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

    function Aq(qq) {
      return lq.includes(qq)
    }

    function cq(qq) {
      var Eq;
      return !0 === (null === qq || void 0 === qq || null === (Eq = qq.customAttributes) || void 0 === Eq ? void 0 : Eq.cannotEnchant)
    }

    function uq(qq, Eq) {
      const {
        max: gq
      } = xq[qq].at(-1);
      return Eq <= gq
    }

    function Bq(qq) {
      const Eq = Math.sin(qq / 80),
        gq = qq => {
          if (qq <= 0) return 0;
          if (qq > 1) return 1;
          let Eq = 0;
          const gq = [1, 7, 21, 35, 35, 21, 7, 1];
          for (let Yq = 0; Yq < gq.length; Yq++) {
            Eq += (Yq % 2 === 0 ? 1 : -1) * gq[Yq] * Math.pow(qq, 2 + Yq) / (2 + Yq)
          }
          return 72 * Eq
        },
        Yq = .3 - .78 * Eq,
        lq = .5 - .78 * Eq,
        Oq = .6 - .7 * Eq,
        mq = .8 - .6 * Eq;
      let xq = gq(Yq),
        Aq = gq(lq) - xq,
        cq = gq(Oq) - Aq - xq,
        uq = gq(mq) - cq - Aq - xq;
      Yq < .041 && (Aq /= 1 - xq, cq /= 1 - xq, uq /= 1 - xq, xq = 0), lq < .041 && (xq /= 1 - Aq, cq /= 1 - Aq, uq /= 1 - Aq, Aq = 0), Oq < .041 && (xq /= 1 - cq, Aq /= 1 - cq, uq /= 1 - cq, cq = 0), mq < .041 && (xq /= 1 - uq, Aq /= 1 - uq, cq /= 1 - uq, uq = 0);
      return {
        commonProb: xq,
        uncommonProb: Aq,
        rareProb: cq,
        epicProb: uq,
        legendaryProb: 1 - (uq + cq + Aq + xq)
      }
    }

    function Wq(qq, Eq) {
      const {
        min: gq,
        max: lq
      } = xq[qq][Eq], Oq = Yq.c.sampleUniformIntDistribution(gq, lq, "includeMax");
      return {
        ...Bq(Oq),
        level: Oq
      }
    }
  },
  8729: (qq, Eq, gq) => {
    function Yq(qq, Eq) {
      return !qq.hidden && (Eq || !qq.isRewardedAd)
    }

    function lq(qq) {
      return "object" === typeof qq ? qq.option : qq
    }

    function Oq(qq, Eq) {
      var gq;
      if ("dropdown" === (null === (gq = qq.userInput) || void 0 === gq ? void 0 : gq.type) && "object" === typeof qq.userInput.dropdownOptions[0]) {
        for (const gq of qq.userInput.dropdownOptions)
          if (lq(gq) === Eq) return "object" === typeof gq ? gq.cost : qq.cost;
        console.error("Didn't find matching option for dropdown item. Item:", qq, "input:", Eq)
      }
      return qq.cost
    }

    function mq(qq, Eq, gq) {
      var Yq;
      const lq = null !== (Yq = gq.excludedPlayers) && void 0 !== Yq ? Yq : [Eq];
      return qq.filter((qq => !lq.includes(qq)))
    }
    gq.d(Eq, {
      d: () => Oq,
      f: () => lq,
      g: () => mq,
      h: () => Yq
    })
  },
  9251: () => {},
  9224: qq => {
    qq.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAaUlEQVR4AWyOQQ6AIAwECwGNr/HkYzz4Hy9+WEkq01BDDCRDy3ZbGo9rU2c/V+1Bj9JOeW7RokaTBO0zpDxJXmYJKXjdohlwOqbWi4YaJFIgcYEIaGAT+JvHCDNQ8El9ziQz/BdzE00vAAAA//+cTXaSAAAABklEQVQDAHI9N5g1NM74AAAAAElFTkSuQmCC"
  },
  9230: qq => {
    qq.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAGBJREFUGJVNjjEOxEAIA+dW22Rpk2+nSndPZFtMewU6FBdIjJHx536+ABARUl7XCbjvyV9mJqX7BtY6RkS0t9bRc0op5ZuaGTAqtPZCpfG+AqSs8FFlulh7s6j7rh9d9wclFjd0V4Z2HAAAAABJRU5ErkJggg=="
  },
  9233: qq => {
    qq.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAbUlEQVR4nESOSwqAMAxEow0pive/gIcTBBdSsZh+NG20DlnkM8MLhnXuzHSnAwBaI8LIV2RXOiIkaGfMKfXGyByZparbyQZpGNUV/KaHGrWowZKVgSx8Qr8vzdXgAkYFCIn9mZP7E8pQ1Q9fzAMAAP//PTNTFgAAAAZJREFUAwAk1D9dXrbJngAAAABJRU5ErkJggg=="
  },
  9239: qq => {
    qq.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAE1JREFUGJVNjsEOwDAIQp/GZv3/j+xx5zVbsh0wZFxEImCsc88RRwHsB5OaI8SA636hjwosNXSUWuRTphxp5iahHX+pozQs+Yt0rU1SPg0CIfgDMgomAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);