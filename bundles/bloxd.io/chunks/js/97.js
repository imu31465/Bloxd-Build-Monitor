export const id = 97;
export const ids = [97, 185];
export const modules = {
  8789: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      EverythingMenu: () => bY
    });
    var Ab = Ub(52),
      Mb = Ub(984),
      Tb = Ub.n(Mb),
      Eb = Ub(1134),
      Yb = Ub(990),
      Bb = Ub(1961),
      eb = Ub(1047),
      vb = Ub(1023);

    function Lb(bb) {
      let {
        items: ab,
        onClick: Ub,
        selectedItemId: Ab,
        className: Mb,
        padStartsOnTab: Lb = !0
      } = bb;
      const {
        t: Pb
      } = (0, Eb.A)(), Xb = (0, eb.k)(), jb = [];
      for (const Tb of ab) {
        var Rb;
        const bb = jb[jb.length - 1];
        var kb;
        if (bb && bb.title === (null !== (Rb = Tb.section) && void 0 !== Rb ? Rb : null)) bb.items.push(Tb);
        else jb.push({
          title: null !== (kb = Tb.section) && void 0 !== kb ? kb : null,
          items: [Tb]
        })
      }
      return (0, vb.jsx)("div", {
        className: Tb()("MenuSideBarBody", Mb),
        "data-pad-tabs": "2",
        children: jb.map(((bb, ab) => {
          var Mb;
          return (0, vb.jsxs)("div", {
            className: "MenuSideBarSection",
            children: [bb.title && (0, vb.jsx)("div", {
              className: "MenuSideBarSectionTitle",
              children: Pb(bb.title)
            }), bb.items.map((bb => {
              var ab;
              const Mb = !!bb.iconElement || !!bb.faIcon;
              return (0, vb.jsxs)("div", {
                "data-pad-tab": !0,
                "data-pad-selected": Ab === bb.id ? "true" : void 0,
                "data-pad-default-focus": Lb && Ab === bb.id || void 0,
                className: Tb()("MenuSideBarBodyTab", {
                  ActiveMenuSideBarBodyTab: Ab === bb.id
                }),
                onClick: () => {
                  Ub(bb.id)
                },
                children: [Mb && (0, vb.jsx)("div", {
                  className: "MenuSideBarBodyTabIcon",
                  children: null !== (ab = bb.iconElement) && void 0 !== ab ? ab : (0, vb.jsx)(Yb.e, {
                    name: bb.faIcon
                  })
                }), (!Xb || !Mb) && (0, vb.jsx)("div", {
                  children: Pb(bb.title)
                }), bb.redDot && (0, vb.jsx)(Bb.d, {
                  top: "-0.2rem",
                  right: "-1rem"
                })]
              }, bb.id)
            }))]
          }, null !== (Mb = bb.title) && void 0 !== Mb ? Mb : ab)
        }))
      })
    }
    var Pb = Ub(2708),
      Xb = Ub(1060),
      jb = Ub(2268),
      Rb = Ub(1055),
      kb = Ub(1352),
      yb = Ub(101),
      Zb = Ub(1824),
      Db = Ub(2118),
      zb = Ub(2126),
      xb = Ub(1589),
      ib = Ub(1254),
      fb = Ub(4673),
      mb = Ub(19),
      pb = Ub(8794);

    function Nb(bb) {
      let {
        setApplySettingsCallback: ab
      } = bb;
      const {
        clientEscMenuOptions: Ub
      } = (0, mb.n)(["clientEscMenuOptions"]), [Mb, Tb] = (0, Ab.useState)(!1), [Eb, Yb] = (0, Ab.useState)(!1), [Bb, eb] = (0, Ab.useState)(6400), [Lb, Pb] = (0, Ab.useState)(3600), [Xb, jb] = (0, Ab.useState)(!1), [Rb, yb] = (0, Ab.useState)(!1);

      function Zb(bb) {
        const ab = "screenshot" === bb ? Yb : Tb;
        ab(!0);
        const Ub = Xb ? "normals" : Rb ? "depth" : null;
        pb.devTools.downloadScene(bb, {
          width: Bb,
          height: Lb,
          colouring: Ub
        }).catch((bb => {
          console.error("Couldn't download the scene", bb)
        })).finally((() => {
          ab(!1)
        }))
      }
      return (0, vb.jsxs)("div", {
        className: "DeveloperToolsCategory",
        children: [(0, vb.jsx)(fb.d, {
          label: "Disable Ambient Occlusion",
          checked: Ub.disableAmbientOcclusion,
          onClick: bb => {
            mb.c.setClientEscMenuOptions({
              disableAmbientOcclusion: bb
            }), ab((() => fb.h))
          },
          circleInfoText: "Disables ambient occlusion which is the shadow effect that makes corners and crevices darker."
        }), pb.devTools.supports("ambientLight") && (0, vb.jsx)(fb.g, {
          name: "Ambient Lighting Intensity",
          min: 0,
          max: 1,
          step: .01,
          initValue: Ub.ambientLightIntensity,
          onChange: bb => {
            pb.devTools.setAmbientLightIntensity(bb).then((() => {
              mb.c.setClientEscMenuOptions({
                ambientLightIntensity: bb
              })
            })).catch((bb => {
              console.error("Couldn't set the ambient light", bb)
            }))
          },
          circleInfoText: "Sets the intensity of the white ambient light in the scene. The default is 0.5."
        }), pb.devTools.supports("weaponRaycasts") && (0, vb.jsx)(fb.d, {
          label: "Show Weapon Raycasts",
          checked: Ub.showWeaponRaycasts,
          onClick: bb => {
            mb.c.setClientEscMenuOptions({
              showWeaponRaycasts: bb
            })
          },
          circleInfoText: "Draws debug lines for the raw raycasts used by locally fired weapons."
        }), pb.devTools.supports("sceneDownload") && (0, vb.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, vb.jsxs)("div", {
            className: "SettingBox WarningBorder",
            children: [(0, vb.jsx)(fb.d, {
              label: "Apply normal-based coloring",
              checked: Xb,
              onClick: bb => {
                jb(bb), bb && yb(!1)
              },
              circleInfoText: "Colors faces based on their normal direction (red=X, green=Y, blue=Z)."
            }), (0, vb.jsx)(fb.d, {
              label: "Apply depth-based coloring",
              checked: Rb,
              onClick: bb => {
                yb(bb), bb && jb(!1)
              },
              circleInfoText: "Colors from white (near) to black (far) based on distance from camera. Only works for screenshot export."
            }), (0, vb.jsxs)("div", {
              className: "SettingBox DeveloperToolsCategoryScreenshotSettings",
              children: [(0, vb.jsx)("div", {
                className: "SettingLabel",
                children: "Screenshot size in pixels (width x height)"
              }), (0, vb.jsx)(xb.c, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (bb, ab) => {
                  const Ub = parseInt(bb) || 6400;
                  eb(Ub)
                },
                placeholderText: "width",
                maxLength: 10,
                defaultValue: Bb.toString()
              }), (0, vb.jsx)("span", {
                children: "X"
              }), (0, vb.jsx)(xb.c, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (bb, ab) => {
                  const Ub = parseInt(bb) || 3600;
                  Pb(Ub)
                },
                placeholderText: "height",
                maxLength: 10,
                defaultValue: Lb.toString()
              })]
            }), (0, vb.jsxs)("div", {
              className: "DeveloperToolsCategoryExportButtons",
              children: [(0, vb.jsxs)(kb.g, {
                onClick: () => {
                  Zb("screenshot")
                },
                disabled: Eb,
                children: [Eb && (0, vb.jsx)(ib.b, {}), "Download Screenshot"]
              }), (0, vb.jsxs)(kb.g, {
                onClick: () => {
                  Zb("glb")
                },
                disabled: Mb,
                children: [Mb && (0, vb.jsx)(ib.b, {}), "Download GLB"]
              })]
            })]
          }), (0, vb.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: 'To download GLB of scene with textures you need to "Disable Block Texture Atlas" in graphic settings first (you will need to reload the page to apply the setting).'
          })]
        })]
      })
    }
    var Wb = Ub(137),
      Hb = Ub(1065),
      Ib = Ub(1142),
      db = Ub(2717),
      Fb = Ub(1433),
      hb = Ub(1208),
      Gb = Ub(1180),
      Qb = Ub(2794),
      qb = Ub(1943),
      ub = Ub(1413),
      rb = Ub(325),
      Kb = Ub(2132),
      ob = Ub(2147),
      lb = Ub(2480),
      tb = Ub(1552),
      wb = Ub(2776),
      sb = Ub(2753),
      gb = Ub(2802),
      Cb = Ub(212);

    function Vb(bb) {
      const {
        t: ab,
        selectedLanguage: Ub
      } = (0, Eb.A)(), {
        userContext: Mb
      } = (0, Xb.c)(), {
        superRankInfo: Tb
      } = Mb, Yb = bb && ((0, rb.mc)(Tb) || Mb.ranksMayChange) && (0, ob.purchasesAllowed)(), {
        accountId: Bb,
        data: eb
      } = (0, lb.h)(wb.c, Yb);
      if ((0, Ab.useEffect)((() => {
          if (Yb) return wb.c.watchAccount(), tb.d.addRefetchListener("billing", (bb => {
            "reconnected" === bb ? wb.c.refreshAfterReconnect() : wb.c.refresh()
          }))
        }), [Yb]), !Yb || !(0, rb.mc)(Tb) || null === eb || Bb !== Mb.whamm) return null;
      const vb = function(bb, ab, Ub) {
        const Ab = gb.g[(0, gb.c)(gb.g, ab)],
          Mb = void 0 === Ab ? void 0 : (0, Cb.c)(bb.entitlements, Ab.entitlementId);
        return void 0 === Mb || null === Mb.expiresAt || (0, sb.e)(Mb) <= Ub ? null : Mb.willRenew && null === Mb.billingIssueDetectedAt ? {
          renews: !0,
          at: Math.max(Mb.expiresAt, Ub)
        } : {
          renews: !1,
          at: (0, sb.e)(Mb)
        }
      }(eb, Tb.tier, Date.now());
      if (null === vb) return null;
      const Lb = vb.renews ? "store:renewsOn" : "store:endsOn";
      return ab(Lb, {
        date: new Date(vb.at).toLocaleDateString((0, Eb.l)(Ub.code, Lb), {
          year: "numeric",
          month: "short",
          day: "numeric"
        })
      })
    }
    var Ob = Ub(1268),
      cb = Ub(1150),
      Jb = Ub(4575),
      nb = Ub(1384),
      Sb = Ub(3327),
      ba = Ub(2111);

    function aa(bb) {
      let {
        showing: ab
      } = bb;
      const {
        t: Ub
      } = (0, Eb.A)(), {
        data: Ab,
        failed: Mb
      } = (0, lb.h)(Sb.h, ab);
      return 0 === (null === Ab || void 0 === Ab ? void 0 : Ab.length) || null === Ab && !Mb ? null : (0, vb.jsxs)("div", {
        className: "SettingBox AccountSettingsPaymentHistory",
        children: [(0, vb.jsx)("div", {
          className: "AccountSettingsLabel",
          children: Ub("paymentHistory:title")
        }), null === Ab && Mb && (0, vb.jsx)("div", {
          className: "AccountSettingsPaymentHistoryError",
          children: Ub("paymentHistory:loadFailed")
        }), null !== Ab && (0, vb.jsx)("ul", {
          className: "PaymentHistoryList",
          children: Ab.map((bb => (0, vb.jsxs)("li", {
            className: "PaymentHistoryEntry",
            children: [(0, vb.jsx)(ba.c, {
              entry: bb
            }), (0, vb.jsxs)("div", {
              className: "PaymentHistoryEntryText",
              children: [(0, vb.jsx)("div", {
                children: (0, ba.f)(Ub, bb)
              }), (0, vb.jsxs)("div", {
                className: "PaymentHistoryEntryDate",
                children: [new Date(bb.at).toLocaleDateString(), "number" === typeof bb.orderId && ` \xb7 ${Ub("paymentHistory:order",{orderId:bb.orderId})}`]
              })]
            })]
          }, (0, Sb.d)(bb))))
        })]
      })
    }
    var Ua = Ub(1778),
      Aa = Ub(1192),
      Ma = Ub(1260),
      Ta = Ub(1238),
      Ea = Ub(1687),
      Ya = Ub(2740);
    async function Ba() {
      try {
        return function(bb) {
          const ab = new Map;
          for (const {
              store: Ub,
              status: Ab,
              autoRenewStatus: Mb,
              managementUrl: Tb
            }
            of Object.values(bb.subscriptions)) !(0, sb.i)(Ub) || (0, sb.l)(Ab) || "willNotRenew" === Mb || ab.has(Ub) || ab.set(Ub, null !== Tb && void 0 !== Tb ? Tb : sb.n[Ub]);
          return Array.from(ab, (bb => {
            let [ab, Ub] = bb;
            return {
              store: ab,
              managementUrl: Ub
            }
          }))
        }(await (0, Ea.o)((0, Ya.f)().getCustomerInfo(), 5e3, "CustomerInfo got no answer in 5 s"))
      } catch (bb) {
        return console.error("Billing: loading CustomerInfo for the player's store subscriptions failed:", bb), null
      }
    }
    var ea = Ub(307),
      va = Ub(2334);
    const La = {
      appStore: {
        name: "App Store",
        ...ea.Rb.appStore
      },
      googlePlay: {
        name: "Google Play",
        ...ea.Rb.googlePlay
      },
      discord: {
        name: "Discord",
        ...ea.Rb.discord
      }
    };

    function Pa(bb) {
      let {
        warning: ab,
        subscriptions: Ub
      } = bb;
      const {
        t: Ab
      } = (0, Eb.A)();
      return null !== Ub && 0 === Ub.length ? (0, vb.jsx)(vb.Fragment, {
        children: Ab(ab)
      }) : (0, vb.jsxs)("div", {
        className: "DeleteAccountSubtitle",
        children: [Ab(ab), null === Ub && (0, vb.jsx)("div", {
          className: "DeleteAccountSubtitleNote",
          children: Ab("auth:deleteAccountSubscriptionsLoadFailed")
        }), null !== Ub && (0, vb.jsxs)(vb.Fragment, {
          children: [(0, vb.jsx)("div", {
            className: "DeleteAccountSubtitleNote",
            children: Ab("auth:deleteAccountStoreSubscriptions")
          }), (0, vb.jsx)(va.c, {
            className: "DeleteAccountSubtitleLinks",
            links: Ub.map((bb => {
              let {
                store: ab,
                managementUrl: Ub
              } = bb;
              return {
                ...La[ab],
                url: Ub
              }
            }))
          })]
        })]
      })
    }

    function Xa(bb) {
      let {
        showing: ab
      } = bb;
      const {
        userContext: Ub,
        isUserContextUpdating: Mb
      } = (0, Xb.c)(), {
        t: Tb
      } = (0, Eb.A)(), [Yb, Bb] = (0, Ab.useState)(!1), [eb, Lb] = (0, Ab.useState)(null), Pb = (0, Ab.useRef)(ab);
      (0, Ab.useEffect)((() => (Pb.current = ab, () => {
        Pb.current = !1
      })), [ab]);
      const jb = Mb || Yb;
      async function Rb() {
        const bb = function(bb) {
            if ((0, Wb.d)()) return "auth:discordActivityDeleteAccountWarning";
            return bb ? "auth:deleteAccountWarning" : "auth:deleteGuestAccountWarning"
          }(Ub.isLoggedIn()),
          ab = (0, Ua.e)(Ub.availableUserContextTypes) ? await Ba() : [];
        if (!Pb.current) return Aa.e.ok();
        if (!0 !== await Ma.NotificationProvider.showPromptPopup({
            title: "auth:deleteAccountPopupTitleNamed",
            textOpts: {
              title: {
                playerName: (0, hb.d)(Ub.getPlayerName(), !yb.featureFlags.canSeeRealPlayerNames)
              }
            },
            subtitle: (0, vb.jsx)(Pa, {
              warning: bb,
              subscriptions: ab
            }),
            confirmText: "auth:deleteAccount",
            destructive: !0,
            confirmTooltip: "auth:deleteAccountPopupConfirmTooltip",
            cancelText: "general:cancel",
            cancelTooltip: "auth:deleteAccountPopupCancelTooltip"
          }).getResult()) return Aa.e.ok();
        const Ab = await (0, Hb.postJsonWithMetricsCookiesAndJsonResponse)(`${Ib.clientSideServerUrls.indexUrl}/index/metrics/revoke-cookies`, {
          gameState: mb.c.get("gameState")
        }, {
          retries: 3
        }, Ub.getMetricsCookies());
        if (Ab.error) return Aa.e.error(Ab.error);
        if ((0, Wb.d)()) {
          (await Ta.j.discordActivity()).exit("User deleted their account")
        }
        return (0, Hb.forgetStoredGuestAccount)(Ub.whamm), (0, Hb.forceGlobalSignOut)(!0), Aa.e.ok()
      }
      return (0, vb.jsxs)("div", {
        className: "AccountSettingsDeleteAccountButtonContainer",
        children: [(0, vb.jsxs)(kb.D, {
          onClick: async function() {
            if (!Yb) {
              Bb(!0);
              try {
                const bb = await Rb(),
                  ab = bb.isError() ? bb.asError().message : null;
                Lb(ab)
              } catch (bb) {
                console.error("Failed to delete account:", bb), Lb(Tb("auth:genericDeleteAccountError"))
              }
              Bb(!1)
            }
          },
          className: "AccountSettingsDeleteAccountButton",
          disabled: jb,
          children: [jb && (0, vb.jsx)("div", {
            className: "DeletingAccountLoader",
            children: (0, vb.jsx)(ib.b, {})
          }), Tb("auth:deleteAccount")]
        }), eb && (0, vb.jsx)("div", {
          className: "DeleteAccountError",
          children: eb
        })]
      })
    }
    var ja = Ub(3252),
      Ra = Ub(3271),
      ka = Ub(3265);

    function ya(bb) {
      let {
        showing: ab
      } = bb;
      const {
        t: Ub
      } = (0, Eb.A)(), {
        data: Ab,
        failed: Mb
      } = (0, lb.h)(ja.b, ab), Tb = null === Ab ? null : (0, ja.c)(Ab);
      return (0, vb.jsxs)("div", {
        className: "SettingBox BlockedAndIgnoredPlayers",
        children: [(0, vb.jsx)("div", {
          className: "AccountSettingsLabel",
          children: Ub("settingsMenu:blockedAndIgnoredPlayers")
        }), null === Tb && !Mb && (0, vb.jsx)(ib.b, {}), null === Tb && Mb && (0, vb.jsxs)("div", {
          className: "BlockedAndIgnoredPlayersError",
          children: [Ub("settingsMenu:blockedAndIgnoredPlayersLoadFailed"), (0, vb.jsx)(kb.g, {
            className: "SmallTextLight",
            onClick: () => {
              ja.b.refresh()
            },
            children: Ub("general:tryAgain")
          })]
        }), 0 === (null === Tb || void 0 === Tb ? void 0 : Tb.length) && (0, vb.jsx)("div", {
          className: "BlockedAndIgnoredPlayersEmpty",
          children: Ub("settingsMenu:noBlockedOrIgnoredPlayers")
        }), null !== Tb && Tb.length > 0 && (0, vb.jsx)("ul", {
          className: "BlockedAndIgnoredPlayersList",
          children: Tb.map((bb => {
            let {
              name: ab,
              exclusion: Ab
            } = bb;
            const Mb = ka.e[Ab];
            return (0, vb.jsxs)("li", {
              className: "BlockedAndIgnoredPlayer",
              children: [(0, vb.jsx)("div", {
                className: "BlockedAndIgnoredPlayerName",
                children: ab
              }), (0, vb.jsx)(kb.h, {
                className: "SmallTextLight",
                onClick: () => {
                  (0, Ra.d)(Mb, ab, {
                    chatMessage: null
                  })
                },
                children: Ub(ka.i[Mb].text)
              })]
            }, ab)
          }))
        })]
      })
    }
    const Za = (0, Ab.memo)((function(bb) {
      var ab;
      let {
        showing: Ub,
        inGame: Mb
      } = bb;
      const {
        t: Bb,
        selectedLanguage: eb
      } = (0, Eb.A)(), {
        hideSocialLocationFrom: Lb
      } = (0, mb.n)(["hideSocialLocationFrom"]), jb = (0, Pb.d)(), {
        userContext: Rb,
        isUserContextUpdating: Zb
      } = (0, Xb.c)(), [Db, zb] = (0, Ab.useState)(null !== (ab = Rb.getPlayerName()) && void 0 !== ab ? ab : ""), [pb, Nb] = (0, Ab.useState)(null), {
        purchasing: lb,
        outcome: tb,
        purchase: wb
      } = (0, db.c)("/super-rank-welcome"), sb = (0, rb.Ub)((0, Eb.l)(eb.code, "general:timeLeft"), Rb.superRankInfo), gb = Vb(Ub), Cb = sb ? Bb("general:timeLeft", {
        time: sb
      }) : gb, [Sb, ba] = (0, Ab.useState)(!1), [Ua, Aa] = (0, Ab.useState)(!1), Ma = (0, Ab.useRef)(null), Ta = (0, Ab.useRef)(null), Ea = (0, qb.e)({
        showProgressUpdateMessage: !0,
        enabled: !0
      }), Ya = null === Ea, Ba = null !== Ea && void 0 !== Ea ? Ea : [], ea = Rb !== Hb.NULL_USER_CONTEXT && !Rb.isLoggedIn(), va = ea && 0 !== (null === Ea || void 0 === Ea ? void 0 : Ea.length), [La, Pa] = (0, Ab.useState)([]), [ja, Ra] = (0, Ab.useState)(!1), ka = Rb.playerHasRank("youtuber"), Za = (0, Ab.useCallback)((() => ub.b.getPlayerProfile(Rb, {
        lowerCaseName: Rb.getPlayerName().toLowerCase()
      }).then((bb => {
        Pa(bb.socialLinks)
      })).catch((bb => {
        console.error("Failed to refresh social links", bb)
      }))), [Rb]);

      function za(bb) {
        bb !== Db && ((0, hb.o)(bb) ? (bb = (0, hb.q)(bb), Nb("Only letters, numbers, and _")) : Nb(null), Ma.current && (Ma.current.value = bb), zb(bb))
      }
      return (0, Ab.useEffect)((() => (!0 === Ub ? (clearInterval(Ta.current), Ta.current = setInterval(jb, 1e3)) : clearInterval(Ta.current), () => {
        clearInterval(Ta.current)
      })), [Ub, jb]), (0, Ab.useEffect)((() => {
        var bb;
        zb(null !== (bb = Rb.getPlayerName()) && void 0 !== bb ? bb : "")
      }), [Rb]), (0, Ab.useEffect)((() => {
        if (!Ub || !ka || Zb) return;
        let bb = !1;
        return Ra(!0), Pa([]), ub.b.getPlayerProfile(Rb, {
          lowerCaseName: Rb.getPlayerName().toLowerCase()
        }).then((ab => {
          bb || Pa(ab.socialLinks)
        })).catch((bb => {
          console.error("Failed to load social links", bb)
        })).finally((() => {
          bb || Ra(!1)
        })), () => {
          bb = !0
        }
      }), [Ub, ka, Zb, Rb]), (0, vb.jsxs)("div", {
        className: Tb()("SettingsMenuRightInner AccountSettings", {
          AccountSettingsLocked: Mb
        }),
        children: [Mb && (0, vb.jsx)("div", {
          className: "AccountSettingsInGameWarning",
          children: Bb("settingsMenu:accountSettingsInGameWarning")
        }), (0, vb.jsxs)("div", {
          className: "SettingBox SetAccountNameDiv SmallTextLight",
          children: [(0, vb.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsNameLabel",
            children: [Bb("homePage:discordNamePopupTitle"), (0, vb.jsxs)(Fb.LinkPreserveSearch, {
              className: "AccountSettingsViewProfile",
              to: (0, Gb.f)({
                name: Rb.getPlayerName()
              }),
              onClick: () => {
                mb.c.set({
                  openEverythingMenuName: null
                })
              },
              children: [(0, vb.jsx)(Yb.e, {
                name: "arrow-up-right-from-square"
              }), " ", Bb("profileCard:viewProfile")]
            })]
          }), (0, vb.jsxs)("div", {
            className: "EnterAccNameDivWrapper",
            "data-pad-initial-area": !0,
            children: [(0, vb.jsxs)("div", {
              className: "EnterAccNameInputRow",
              children: [yb.featureFlags.canChangeName && (0, vb.jsx)(xb.c, {
                className: "EnterName",
                placeholderText: Bb("homePage:enterName"),
                maxLength: hb.i,
                defaultValue: Db,
                onValueChange: bb => {
                  za(bb)
                },
                forcedText: Sb || !yb.featureFlags.canChangeName ? Db : null,
                blurOnEnter: !0,
                domRef: Ma
              }), (0, vb.jsx)(kb.g, {
                className: "ChooseRandomNameButton",
                onClick: () => {
                  za((0, hb.f)())
                },
                children: (0, vb.jsx)(Yb.e, {
                  name: "dice",
                  className: "ChooseRandomNameIcon"
                })
              }), !yb.featureFlags.canChangeName && (0, vb.jsx)("div", {
                className: "EnterName NoInput",
                children: (0, hb.d)(Db, !yb.featureFlags.canSeeRealPlayerNames)
              })]
            }), (0, vb.jsx)(kb.g, {
              className: "ChooseNameButton",
              disabled: Sb || Db === Rb.getPlayerName(),
              onClick: () => {
                Db.length < hb.m ? Nb(Bb("homePage:changeNameMinLengthError", {
                  length: hb.m
                })) : Db.length > hb.i ? Nb(Bb("homePage:changeNameMaxLengthError", {
                  length: hb.i
                })) : (ba(!0), Nb(null), async function(bb, ab, Ub, Ab) {
                  const Mb = await (0, Hb.postJsonWithMetricsCookiesAndJsonResponse)(`${Ib.clientSideServerUrls.indexUrl}/index/name/update`, {
                    name: bb
                  }, {
                    retries: 3
                  }, ab.getMetricsCookies()).catch((bb => (console.error("Bad response from the server when trying to update name:", bb), {
                    err: "An error occurred trying to change your name! Please report on discord what steps you took to get this error message."
                  })));
                  Mb.err ? (console.error("Error when trying to get with new name from DB", Mb.err), Ab(Mb.err)) : !0 === Mb.nameExists ? Ab("Name is already taken") : Ub(bb)
                }(Db, Rb, (bb => {
                  Rb.setPlayerName(bb), ba(!1)
                }), (bb => {
                  Nb(bb), ba(!1)
                })))
              },
              children: Bb("general:choose")
            })]
          }), pb && (0, vb.jsx)("div", {
            className: "ChooseAccNameError",
            children: pb
          })]
        }), (0, vb.jsx)(fb.d, {
          label: (() => {
            if ((0, cb.l)(Lb)) {
              const bb = (0, Eb.l)(eb.code, "general:timeLeft"),
                ab = (0, rb.$)(bb, Date.now(), Lb + cb.h);
              return `${Bb("settingsMenu:hideSocialLocation")} (${Bb("general:timeLeft",{time:ab})})`
            }
            return Bb("settingsMenu:hideSocialLocation")
          })(),
          onClick: () => {
            const bb = !(0, cb.l)(Lb);
            (0, nb.reportAnalyticsClick)({
              id: "social.hide_location",
              value: bb ? "on" : "off"
            }), Aa(!0), ub.b.setHideSocialLocation(Rb, bb).then((() => {
              mb.c.set({
                hideSocialLocationFrom: bb ? Date.now() : null
              })
            })).finally((() => {
              Aa(!1)
            }))
          },
          checked: (0, cb.l)(Lb),
          disabled: Ua
        }), ka && (0, vb.jsxs)("div", {
          className: "SettingBox AccountSettingsSocialLinks",
          children: [(0, vb.jsx)("div", {
            className: "AccountSettingsLabel",
            children: Bb("settingsMenu:socialLinks")
          }), ja && (0, vb.jsx)(ib.b, {}), !ja && (0, vb.jsx)(Jb.b, {
            socialLinks: La,
            editable: !0,
            userContext: Rb,
            onLinksUpdated: Za
          })]
        }), (0, vb.jsxs)("div", {
          className: "SettingBox",
          children: [(0, vb.jsx)("div", {
            className: "AccountSettingsLabel",
            children: Bb(va ? "auth:loginOrSwitchAccount" : "auth:login")
          }), Ya && (0, vb.jsx)(ib.b, {}), !Ya && 0 === Ba.length && (0, vb.jsx)("div", {
            className: "NoLoginOptions",
            children: Bb("auth:noLoginOptions")
          }), !Ya && Ba.length > 0 && "crazygames" !== Wb.p && (0, vb.jsx)("div", {
            className: "AccountSettingsLoginButtons",
            children: Ba
          }), !Ya && Ba.length > 0 && "crazygames" === Wb.p && (0, vb.jsxs)("div", {
            className: "AccountSettingsLoginButtons",
            children: [Ba[0], Ba.length > 1 && (0, vb.jsxs)(vb.Fragment, {
              children: [(0, vb.jsxs)("div", {
                className: "LegacyLoginOptionsHeader",
                children: [(0, vb.jsx)("span", {
                  className: "LegacyLoginOptionsTitle",
                  children: Bb("auth:legacyLoginOptions")
                }), (0, vb.jsx)(Ob.d, {
                  className: "LegacyLoginOptionsInfoIcon",
                  hoverInfo: Bb("auth:legacyLoginOptionsInfo")
                })]
              }), (0, vb.jsx)("div", {
                className: "LegacyAccountSettingsLoginButtons",
                children: Ba.slice(1)
              })]
            })]
          }), yb.featureFlags.useLogin && (null !== Rb.loggedInInfo || Rb.isLoggedIn()) && (0, vb.jsxs)(vb.Fragment, {
            children: [(0, vb.jsx)("div", {
              className: "AccountSettingsLoginDivider"
            }), (0, vb.jsxs)(kb.D, {
              onClick: () => {
                (0, Hb.forceGlobalSignOut)()
              },
              className: "AccountSettingsSignedInButton",
              children: [(0, vb.jsx)(Yb.e, {
                name: "right-from-bracket"
              }), Bb("auth:signOut")]
            })]
          })]
        }), !Rb.playerHasRank("super") && (0, ob.purchasesAllowed)() && (0, vb.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, vb.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: [(0, vb.jsx)(Yb.e, {
              name: "bolt"
            }), Bb("homePage:superRank")]
          }), (0, vb.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [(0, vb.jsxs)(kb.m, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, Kb.m)({
                  mode: "self",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, vb.jsx)(Yb.e, {
                name: "bolt"
              }), Bb("homePage:getSuperRank")]
            }), (0, vb.jsxs)(kb.m, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, Kb.m)({
                  mode: "gift",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, vb.jsx)(Yb.e, {
                name: "bolt"
              }), Bb("homePage:giftSuperRank")]
            })]
          })]
        }), Rb.playerHasRank("super") && (0, vb.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, vb.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: [(0, vb.jsx)(Yb.e, {
              name: "bolt"
            }), Bb("homePage:superRank"), Cb && (0, vb.jsxs)("div", {
              className: "AccountSettingsSuperRankTimeLeft",
              children: ["(", Cb, ")"]
            })]
          }), (0, ob.purchasesAllowed)() && (0, vb.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [!(0, rb.mc)(Rb.superRankInfo) && (0, vb.jsxs)(kb.m, {
              className: "AccountSettingsSuperRankProlong",
              loading: lb,
              onClick: () => {
                wb(Qb.q.id, null)
              },
              children: [(0, vb.jsx)(Yb.e, {
                name: "bolt"
              }), Bb("settingsMenu:getSuperRankAdditionalDaysPremiumCurrency", {
                days: Qb.q.product.days,
                price: Qb.q.price
              })]
            }), (0, vb.jsxs)(kb.m, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, Kb.m)({
                  mode: "gift",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, vb.jsx)(Yb.e, {
                name: "bolt"
              }), Bb("homePage:giftSuperRank")]
            })]
          }), tb && (0, vb.jsx)("div", {
            className: "AccountSettingsSuperRankProlongError SmallTextBold",
            children: Bb(tb.translationKey)
          })]
        }), (0, vb.jsx)(aa, {
          showing: Ub
        }), yb.featureFlags.useSocialFeatures && (0, vb.jsx)(ya, {
          showing: Ub
        }), (0, vb.jsxs)("div", {
          className: "SettingBoxGroup AccountSettingsDeleteAccountGroup",
          children: [(0, vb.jsxs)("div", {
            className: "SettingBox AccountSettingsDeleteAccount SettingBoxWarning",
            children: [(0, vb.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: Bb(Da(ea, va))
            }), (0, Wb.d)() && (0, vb.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: Bb("auth:discordActivityKickWarning")
            }), (0, vb.jsx)(Xa, {
              showing: Ub
            })]
          }), (0, vb.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: Bb("auth:deleteAccountWarning")
          })]
        })]
      })
    }));

    function Da(bb, ab) {
      return bb ? ab ? "auth:deleteGuestAccountButtonTitle" : "auth:deleteGuestAccountWarning" : "auth:deleteAccountButtonTitle"
    }
    var za = Ub(8802),
      xa = Ub(2851),
      ia = Ub(1198),
      fa = Ub(1335);
    const ma = (0, Ab.memo)((function(bb) {
        let {
          inGame: ab
        } = bb;
        const {
          t: Ub,
          selectedLanguage: Ab
        } = (0, Eb.A)(), {
          clientEscMenuOptions: Mb,
          showDebugOverlay: Tb
        } = (0, mb.n)(["clientEscMenuOptions", "showDebugOverlay"]), Yb = (0, jb.h)("hideCoordinates");
        let Bb = "settingsMenu:showCoordinates",
          eb = "settingsMenu:showChunkCoordinates";

        function Lb(bb) {
          const ab = new Intl.DisplayNames([bb], {
            type: "language"
          }).of(bb);
          return ab.charAt(0).toUpperCase() + ab.slice(1)
        }
        return Yb && (Bb = "settingsMenu:showCoordinatesHidden", eb = "settingsMenu:showChunkCoordinatesHidden"), (0, vb.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [ab && yb.featureFlags.canUseInviteLinks && (0, vb.jsxs)("div", {
            className: "SettingBox",
            children: [(0, vb.jsx)("div", {
              className: "SettingsMenuInviteHeader",
              children: Ub("settingsMenu:inviteLink")
            }), (0, vb.jsx)(za.d, {})]
          }), (0, vb.jsxs)("div", {
            className: "SettingBox",
            children: [(0, vb.jsx)("div", {
              className: "SliderText",
              style: {
                marginBottom: "10px"
              },
              children: Ub("settingsMenu:language")
            }), (0, vb.jsx)(xa.c, {
              options: Object.entries(Eb.g).map((bb => {
                let [ab, Ub] = bb;
                return {
                  label: (0, vb.jsxs)("div", {
                    className: "SettingsMenuLanguageOption",
                    children: [(0, vb.jsx)("img", {
                      src: Ub.flagImg,
                      alt: "flag"
                    }), (0, vb.jsxs)("span", {
                      children: [Lb(ab), " ", (0, vb.jsxs)("span", {
                        className: "SettingsMenuLanguageOptionCode",
                        children: ["(", ab, ")"]
                      })]
                    })]
                  }),
                  value: ab
                }
              })),
              value: Ab.code,
              onChange: bb => {
                ia.f.get().setCurrentLanguage(bb.value)
              }
            })]
          }), !(0, yb.isMobileApp)() && (0, fa.g)() && yb.featureFlags.useForceRotateForceFullscreenOverlay && (0, vb.jsx)(fb.d, {
            label: Ub("settingsMenu:disableFullscreenMode"),
            checked: Mb.disableFullscreen,
            onClick: bb => {
              mb.c.setClientEscMenuOptions({
                disableFullscreen: bb
              })
            }
          }), (0, vb.jsx)(fb.d, {
            label: Ub(Bb),
            checked: Mb.showCoordinates,
            onClick: bb => {
              mb.c.setClientEscMenuOptions({
                showCoordinates: bb
              })
            },
            disabled: Yb
          }), (0, vb.jsx)(fb.d, {
            label: Ub(eb),
            checked: Mb.showChunkCoordinates,
            onClick: bb => {
              mb.c.setClientEscMenuOptions({
                showChunkCoordinates: bb
              })
            },
            disabled: Yb
          }), (0, vb.jsx)(fb.d, {
            label: Ub("settingsMenu:showFps"),
            checked: Mb.showFPS,
            onClick: bb => {
              mb.c.setClientEscMenuOptions({
                showFPS: bb
              })
            }
          }), (0, vb.jsx)(fb.d, {
            label: Ub("settingsMenu:disableBunnyHopping"),
            checked: Mb.disableBunnyHopping,
            onClick: bb => {
              mb.c.setClientEscMenuOptions({
                disableBunnyHopping: bb
              })
            }
          }), (0, Ta.w)() && (0, vb.jsx)(fb.d, {
            label: Ub("settingsMenu:showChat"),
            checked: Mb.showChat,
            onClick: bb => {
              mb.c.setClientEscMenuOptions({
                showChat: bb
              })
            }
          }), (0, vb.jsx)(fb.d, {
            label: Ub("settingsMenu:showDebugOverlay"),
            checked: Tb,
            onClick: bb => {
              mb.c.set({
                showDebugOverlay: bb
              })
            }
          }), yb.featureFlags.useSocialFeatures && (0, vb.jsx)(fb.d, {
            label: Ub("settingsMenu:showFriendOnlineToasts"),
            checked: Mb.showFriendOnlineToasts,
            onClick: bb => {
              mb.c.setClientEscMenuOptions({
                showFriendOnlineToasts: bb
              })
            }
          }), (0, vb.jsx)(fb.d, {
            label: Ub("settingsMenu:showNewItemIndicator"),
            checked: Mb.showNewItemIndicator,
            onClick: bb => {
              mb.c.setClientEscMenuOptions({
                showNewItemIndicator: bb
              })
            }
          })]
        })
      })),
      pa = (0, Ab.memo)((function() {
        const {
          t: bb
        } = (0, Eb.A)(), {
          soundVolume: ab,
          musicVolume: Ub
        } = (0, mb.n)(["soundVolume", "musicVolume"]);
        return (0, vb.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [(0, vb.jsx)(fb.g, {
            name: bb("settingsMenu:musicVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: Ub,
            onChange: bb => {
              mb.c.set({
                musicVolume: Math.round(100 * bb) / 100
              })
            },
            format: bb => bb.toFixed(2)
          }), (0, vb.jsx)(fb.g, {
            name: bb("settingsMenu:soundEffectsVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: ab,
            onChange: bb => {
              mb.c.set({
                soundVolume: Math.round(100 * bb) / 100
              })
            },
            format: bb => bb.toFixed(2)
          })]
        })
      }));
    var Na = Ub(675),
      Wa = Ub(1345),
      Ha = Ub(3332),
      Ia = Ub(8807),
      da = Ub(3170);
    const Fa = {
      app: "notificationSettings:pushTargetsApp",
      browser: "notificationSettings:pushTargetsBrowser",
      msnPlay: "notificationSettings:pushTargetsMsnPlay"
    };

    function ha() {
      const {
        t: bb
      } = (0, Eb.A)(), ab = (0, da.b)(), {
        mobilePushNotificationsCanAsk: Ub
      } = (0, mb.n)(["mobilePushNotificationsCanAsk"]), [Mb, Tb] = (0, Ab.useState)(null), [Yb, Bb] = (0, Ab.useState)(!1), [eb, Lb] = (0, Ab.useState)(null), [Pb, Xb] = (0, Ab.useState)(!1), jb = (0, Ab.useCallback)((() => {
        (0, Ha.e)().then((bb => {
          ab.current && (Tb(bb), Bb(!1))
        })).catch((bb => {
          console.error("Failed to load push notification targets:", bb), ab.current && Bb(!0)
        }))
      }), [ab]), Rb = (0, Ab.useCallback)((() => {
        (0, Ia.d)().then((bb => {
          ab.current && Lb((() => bb))
        }))
      }), [ab]);
      (0, Ab.useEffect)((() => {
        jb()
      }), [jb]), (0, Ab.useEffect)((() => {
        Rb()
      }), [Rb, Ub]), (0, Wa.f)(Ha.j, jb);
      const yb = null === Mb ? [] : Object.keys(Fa).filter((bb => Mb[bb] > 0));
      return (0, vb.jsxs)("div", {
        className: "SettingBox PushNotificationSettings",
        children: [(0, vb.jsx)("div", {
          className: "SliderText",
          children: bb("notificationSettings:pushNotifications")
        }), null === Mb && Yb && (0, vb.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: bb("notificationSettings:pushTargetsLoadFailed")
        }), null !== Mb && 0 === yb.length && (0, vb.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: bb("notificationSettings:pushTargetsNone")
        }), yb.length > 0 && (0, vb.jsx)("ul", {
          className: "PushNotificationSettingsTargets",
          children: yb.map((ab => {
            var Ub;
            return (0, vb.jsx)("li", {
              children: bb(Fa[ab], {
                count: null !== (Ub = null === Mb || void 0 === Mb ? void 0 : Mb[ab]) && void 0 !== Ub ? Ub : 0
              })
            }, ab)
          }))
        }), null !== eb && (0, vb.jsx)(kb.g, {
          className: "PushNotificationSettingsButton",
          loading: Pb,
          onClick: () => {
            Xb(!0), eb().catch((bb => {
              console.error("Failed to turn on push notifications:", bb)
            })).finally((() => {
              ab.current && (Xb(!1), Rb())
            }))
          },
          children: bb("notificationSettings:pushTurnOn")
        })]
      })
    }
    const Ga = {
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
      Qa = (0, Ab.memo)((function() {
        const {
          t: bb
        } = (0, Eb.A)(), {
          clientEscMenuOptions: ab
        } = (0, mb.n)(["clientEscMenuOptions"]);
        return (0, vb.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [(0, vb.jsx)(fb.e, {
            label: bb("notificationSettings:friendRequests"),
            options: Na.c.map((ab => ({
              value: ab,
              label: bb(Ga[ab].label)
            }))),
            value: ab.friendRequestNotifications,
            onChange: bb => {
              mb.c.setClientEscMenuOptions({
                friendRequestNotifications: bb
              })
            },
            circleInfoText: (0, vb.jsx)("div", {
              className: "NotificationSettingLevelsInfo",
              children: Na.c.map((ab => (0, vb.jsxs)("div", {
                children: [(0, vb.jsx)("b", {
                  children: bb(Ga[ab].label)
                }), ": ", bb(Ga[ab].info)]
              }, ab)))
            })
          }), (0, vb.jsx)(ha, {})]
        })
      }));
    var qa = Ub(4188),
      ua = Ub(205),
      ra = Ub(292),
      Ka = Ub(6294),
      oa = Ub(3132),
      la = Ub(8815),
      ta = Ub(591),
      wa = Ub(22);
    var sa = Ub(603),
      ga = Ub(31),
      Ca = Ub(4056);
    const Va = new Map([
      ["chunkHorizAddDist", "horizontal"],
      ["chunkVertAddDist", "vertical"]
    ]);

    function Oa(bb) {
      return Va.has(bb) ? Zb.gameBridge.lookup("iZ", null) : null
    }

    function ca(bb) {
      if (!(0, ta.I)(mb.c.get("clientEscMenuOptions")[bb])) return mb.c.get("clientEscMenuOptions")[bb];
      const ab = Oa(bb);
      return null !== ab ? ab[Va.get(bb)] : ga.f.getItem(bb)
    }

    function Ja(bb, ab) {
      if ("useTouchControls" === bb) return void(0, Ca.d)(ab);
      bb in mb.c.get("clientEscMenuOptions") && mb.c.setClientEscMenuOptions({
        [bb]: ab
      });
      const Ub = Oa(bb);
      null !== Ub && Zb.gameBridge.send("setChunkAddDistance", {
        ...Ub,
        [Va.get(bb)]: ab
      }), ga.f.setItem(bb, ab)
    }
    var na = Ub(4095),
      Sa = Ub(8820),
      bU = Ub(8822),
      aU = Ub(4183);

    function UU(bb) {
      var ab, Mb, Yb, Bb;
      let {
        minChunkAddDist: eb,
        getValue: Lb,
        onChange: Pb,
        setApplySettingsCallback: Xb
      } = bb;
      const {
        t: Rb
      } = (0, Eb.A)(), {
        clientEscMenuOptions: kb
      } = (0, mb.n)(["clientEscMenuOptions", "showDistantNametags"]), Zb = (0, Ab.useRef)(Lb("showFog")), Db = (0, Ab.useRef)(kb.antiAliasing), zb = (0, Ab.useRef)(kb.useWebGpu), [xb, ib] = (0, Ab.useState)(null), [Nb, Wb] = (0, Ab.useState)((() => (0, oa.g)(yb.featureFlags.settings.canUseShaderPacks))), [Hb] = (0, Ab.useState)((() => mb.c.isWebGpuDefaultOff())), [Ib] = (0, Ab.useState)(ra.f);
      (0, Ab.useEffect)((() => {
        let bb = !1;
        return (0, yb.hasUsableWebGpuAdapter)().then((ab => {
          bb || ib(ab)
        })), (0, oa.k)(yb.featureFlags.settings.canUseShaderPacks) && (0, Ka.f)().then((async ab => {
          const Ab = null !== ab && await async function(bb) {
            const [{
              isShaderPackActive: ab
            }, {
              loadPageShaderPackCompiler: Ab
            }] = await Promise.all([Ub.e(127).then((() => Ub(6285))), Promise.all([Ub.e(74), Ub.e(131), Ub.e(130)]).then((() => Ub(6244)))]);
            return ab(bb, await Ab())
          }(ab);
          bb || Wb(Ab)
        })), () => {
          bb = !0
        }
      }), []);
      const db = function(bb, ab, Ub, Ab, Mb) {
          return (0, la.d)(Ub, Ab) && !0 === ab ? {
            translationKey: "settingsMenu:newWebGpuForcedOnByShaderPack",
            checked: !0,
            disabled: !0
          } : {
            translationKey: !1 !== ab ? "settingsMenu:newWebGpu" : Mb ? "settingsMenu:newWebGpuDisabledUntilRestart" : "settingsMenu:newWebGpuUnsupported",
            checked: bb && !1 !== ab,
            disabled: !0 !== ab
          }
        }(kb.useWebGpu, xb, Nb, Hb, Ib),
        Fb = (kb.useWebGpu || (0, la.d)(Nb, Hb)) && Nb && !0 === xb,
        hb = (0, jb.h)("lightingOverride"),
        Gb = !(0, ta.I)(hb);
      let Qb = "settingsMenu:enableLighting";
      Gb && (Qb = hb ? "settingsMenu:enableLightingForcedOn" : "settingsMenu:enableLightingForcedOff");
      const qb = bb => {
          var ab, Ub, Ab;
          const Mb = null !== (ab = bb.showFog) && void 0 !== ab ? ab : Lb("showFog"),
            Tb = null !== (Ub = bb.antiAliasing) && void 0 !== Ub ? Ub : kb.antiAliasing,
            Eb = null !== (Ab = bb.useWebGpu) && void 0 !== Ab ? Ab : kb.useWebGpu,
            Yb = !sa.o && Mb !== Zb.current || Tb !== Db.current || Eb !== zb.current;
          Xb(Yb ? () => fb.h : null)
        },
        ub = (0, jb.h)("fogChunkDistanceOverride"),
        rb = (0, jb.h)("fogBlockDistanceOverride"),
        Kb = !(0, ta.I)(ub) || !(0, ta.I)(rb),
        ob = Kb ? "settingsMenu:showFogForcedOn" : "settingsMenu:showFog",
        [lb, tb] = (0, qa.f)(eb),
        [wb, sb] = (0, aU.e)(eb),
        gb = Rb("settingsMenu:chunkLoadDistanceDeviceLimit"),
        Cb = wb < lb,
        Vb = Math.min(null !== (ab = Lb("chunkHorizAddDist")) && void 0 !== ab ? ab : eb[0], wb),
        Ob = !Kb && function(bb, ab) {
          return !0 === bb.showFog && bb.fogChunkDistance > ab
        }(kb, Vb);
      return (0, vb.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [(0, vb.jsx)(fb.g, {
          name: Rb("settingsMenu:horizontalChunkLoadDistance"),
          min: eb[0],
          max: lb,
          selectableMax: wb,
          cappedNote: gb,
          step: 1,
          initValue: Vb,
          onChange: bb => {
            !0 === Lb("showFog") && bb < Lb("fogChunkDistance") && Pb("fogChunkDistance", bb), Pb("chunkHorizAddDist", bb), wa.m.IR("updatedChunkLoadDist")
          },
          circleInfoText: Rb("settingsMenu:chunkLoadDistanceInfo")
        }), (0, vb.jsx)(fb.g, {
          name: Rb("settingsMenu:verticalChunkLoadDistance"),
          min: eb[1],
          max: tb,
          selectableMax: sb,
          cappedNote: Cb ? void 0 : gb,
          step: 1,
          initValue: Math.min(null !== (Mb = Lb("chunkVertAddDist")) && void 0 !== Mb ? Mb : eb[1], sb),
          onChange: bb => {
            Pb("chunkVertAddDist", bb), wa.m.IR("updatedChunkLoadDist")
          },
          circleInfoText: Rb("settingsMenu:chunkLoadDistanceInfo"),
          className: "VerticalChunkLoadSlider"
        }), (0, vb.jsx)(fb.d, {
          label: Rb("settingsMenu:chunkFadeIn"),
          checked: kb.chunkFadeIn,
          onClick: bb => {
            mb.c.setClientEscMenuOptions({
              chunkFadeIn: bb
            })
          },
          circleInfoText: Rb("settingsMenu:chunkFadeInInfo")
        }), pb.devTools.supports("chunkBorders") && (0, vb.jsx)(fb.d, {
          label: Rb("settingsMenu:showChunkBorders"),
          checked: kb.showChunkBorders,
          onClick: bb => {
            mb.c.setClientEscMenuOptions({
              showChunkBorders: bb
            })
          },
          circleInfoText: Rb("settingsMenu:showChunkBordersInfo")
        }), (0, vb.jsx)(fb.d, {
          label: Rb(Qb),
          checked: kb.enableLighting,
          onClick: bb => {
            mb.c.setClientEscMenuOptions({
              enableLighting: bb
            })
          },
          disabled: Gb
        }), (0, vb.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, vb.jsx)(fb.d, {
            label: Rb(ob),
            checked: kb.showFog,
            onClick: bb => {
              qb({
                showFog: bb
              }), mb.c.setClientEscMenuOptions({
                showFog: bb
              })
            },
            disabled: Kb,
            className: Tb()({
              SettingBoxWarning: Ob
            })
          }), (0, vb.jsx)(fb.g, {
            name: Rb("settingsMenu:fogChunkDistance"),
            min: eb[0],
            max: ua.c.maxChunkHorizAddDistance,
            step: 1,
            initValue: null !== (Yb = kb.fogChunkDistance) && void 0 !== Yb ? Yb : eb[0],
            onChange: bb => {
              mb.c.setClientEscMenuOptions({
                fogChunkDistance: bb
              }), wa.m.IR("fogChunkDistanceChanged", bb)
            },
            circleInfoText: Rb("settingsMenu:fogChunkDistanceInfo"),
            disabled: Kb || !1 === Lb("showFog"),
            className: Tb()({
              SettingBoxWarning: Ob
            })
          }), Ob && (0, vb.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: Rb("settingsMenu:fogChunkDistanceInfo")
          })]
        }), !sa.o && (0, vb.jsx)(fb.d, {
          label: Rb(Fb ? "settingsMenu:disableBlockTextureAtlasUnavailableWithShaderPack" : "settingsMenu:disableBlockTextureAtlas"),
          checked: !Fb && kb.disableTexAtlas,
          onClick: bb => {
            mb.c.setClientEscMenuOptions({
              disableTexAtlas: bb
            })
          },
          circleInfoText: Rb("settingsMenu:disableBlockTextureAtlasInfo"),
          disabled: Fb
        }), (0, vb.jsx)(fb.g, {
          name: Rb("settingsMenu:fieldOfView"),
          min: 50,
          max: 160,
          step: 1,
          initValue: kb.cameraFOV,
          onChange: bb => {
            mb.c.setClientEscMenuOptions({
              cameraFOV: bb
            })
          }
        }), (0, vb.jsx)(fb.d, {
          label: Rb("settingsMenu:disableViewBobbing"),
          checked: kb.disableBobbing,
          onClick: bb => {
            mb.c.setClientEscMenuOptions({
              disableBobbing: bb
            })
          },
          circleInfoText: Rb("settingsMenu:disableViewBobbingInfo")
        }), (0, vb.jsx)(fb.d, {
          label: Rb("settingsMenu:antiAliasing"),
          checked: kb.antiAliasing,
          onClick: bb => {
            qb({
              antiAliasing: bb
            }), (0, na.f)("antiAliasing"), mb.c.setClientEscMenuOptions({
              antiAliasing: bb
            })
          },
          circleInfoText: Rb("settingsMenu:antiAliasingInfo")
        }), (0, vb.jsx)(fb.g, {
          name: Rb("settingsMenu:pixelScale"),
          min: 1,
          max: 8,
          step: 1,
          initValue: null !== (Bb = kb.pixelScale) && void 0 !== Bb ? Bb : 1,
          onChange: bb => {
            (bb !== mb.c.get("clientEscMenuOptions").pixelScale || (0, bU.p)()) && (0, na.f)("pixelScale"), mb.c.setClientEscMenuOptions({
              pixelScale: bb
            })
          },
          circleInfoText: Rb("settingsMenu:pixelScaleInfo"),
          format: bb => `${bb}x`
        }), (0, vb.jsx)(fb.d, {
          label: Rb("settingsMenu:pixelSmoothing"),
          checked: kb.pixelSmoothing,
          onClick: bb => {
            mb.c.setClientEscMenuOptions({
              pixelSmoothing: bb
            })
          },
          circleInfoText: Rb("settingsMenu:pixelSmoothingInfo")
        }), sa.o && (0, vb.jsx)(fb.d, {
          label: Rb("settingsMenu:distantNametags"),
          checked: (0, Sa.d)(),
          onClick: bb => {
            mb.c.set({
              showDistantNametags: bb
            })
          },
          circleInfoText: Rb("settingsMenu:distantNametagsInfo")
        }), (0, vb.jsx)(fb.d, {
          label: Rb(db.translationKey),
          checked: db.checked,
          onClick: bb => {
            qb({
              useWebGpu: bb
            }), mb.c.setClientEscMenuOptions({
              useWebGpu: bb
            })
          },
          circleInfoText: Rb("settingsMenu:newWebGpuInfo"),
          disabled: db.disabled
        })]
      })
    }
    var AU = Ub(4088),
      MU = Ub(8427),
      TU = Ub(8836),
      EU = Ub(8432),
      YU = Ub(8842);
    const BU = {
        color: 16777215,
        name: "white"
      },
      eU = {
        color: 0,
        name: "black"
      },
      vU = [BU, {
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
      }, eU],
      LU = [eU, BU];

    function PU(bb) {
      return `${bb} px`
    }

    function XU(bb) {
      return `${bb}%`
    }

    function jU(bb) {
      let {
        label: ab,
        value: Ub,
        swatches: Ab,
        onChange: Mb
      } = bb;
      const {
        t: Yb
      } = (0, Eb.A)(), Bb = !Ab.some((bb => bb.color === Ub));
      return (0, vb.jsxs)("div", {
        className: "SettingBox CrosshairColorRow",
        children: [(0, vb.jsx)("div", {
          className: "SliderText",
          children: ab
        }), (0, vb.jsxs)("div", {
          className: "CrosshairSwatches",
          role: "radiogroup",
          "aria-label": ab,
          children: [Ab.map((bb => {
            let {
              color: ab,
              name: Ab
            } = bb;
            return (0, vb.jsx)("button", {
              type: "button",
              role: "radio",
              "aria-checked": ab === Ub,
              "aria-label": Yb(`crosshairSettings:color_${Ab}`),
              "data-pad-focusable": !0,
              className: Tb()("CrosshairSwatch", {
                Selected: ab === Ub
              }),
              style: {
                background: (0, YU.i)(ab)
              },
              onClick: () => {
                Mb(ab)
              }
            }, ab)
          })), (0, vb.jsx)("label", {
            className: Tb()("CrosshairSwatch CrosshairSwatchCustom", {
              Selected: Bb
            }),
            style: Bb ? {
              background: (0, YU.i)(Ub)
            } : void 0,
            title: Yb("crosshairSettings:customColor"),
            "data-pad-focusable": !0,
            children: (0, vb.jsx)("input", {
              type: "color",
              "aria-label": Yb("crosshairSettings:customColor"),
              value: (0, YU.i)(Ub),
              onChange: bb => {
                const ab = (0, YU.n)(bb.target.value);
                null !== ab && Mb(ab)
              }
            })
          })]
        })]
      })
    }

    function RU(bb) {
      let {
        settings: ab,
        onChange: Ub
      } = bb;
      const {
        t: Ab
      } = (0, Eb.A)(), Mb = (bb, Ab) => {
        Ub((0, YU.q)(ab, bb, Ab))
      }, Tb = function(bb, Ub) {
        let Ab = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : PU;
        const {
          min: Tb,
          max: Eb,
          step: Yb
        } = YU.b[bb];
        return (0, vb.jsx)(fb.g, {
          name: Ub,
          min: Tb,
          max: Eb,
          step: Yb,
          initValue: ab[bb],
          format: Ab,
          onChange: ab => {
            Mb(bb, ab)
          }
        }, bb)
      }, Yb = ["lines", "dot", "circle"].filter((bb => ab[bb])), Bb = (bb, Ub, Ab) => (0, vb.jsx)(fb.d, {
        label: Ub,
        checked: ab[bb],
        disabled: 1 === Yb.length && Yb[0] === bb,
        circleInfoText: Ab,
        onClick: ab => {
          Mb(bb, ab)
        }
      }, bb), eb = "shapes" === ab.style;
      return (0, vb.jsxs)(vb.Fragment, {
        children: [(0, vb.jsx)(fb.e, {
          label: Ab("crosshairSettings:style"),
          options: [{
            value: "classic",
            label: Ab("crosshairSettings:styleClassic")
          }, {
            value: "shapes",
            label: Ab("crosshairSettings:styleShapes")
          }],
          value: ab.style,
          onChange: bb => {
            Mb("style", bb)
          }
        }), (0, vb.jsx)(jU, {
          label: Ab("crosshairSettings:color"),
          value: ab.color,
          swatches: vU,
          onChange: bb => {
            Mb("color", bb)
          }
        }), Tb("opacity", Ab("crosshairSettings:opacity"), XU), !eb && Tb("size", Ab("crosshairSettings:size"), XU), eb && (0, vb.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [Bb("lines", Ab("crosshairSettings:lines")), ab.lines && Tb("lineLength", Ab("crosshairSettings:lineLength")), ab.lines && Tb("lineThickness", Ab("crosshairSettings:lineThickness")), ab.lines && Tb("gap", Ab("crosshairSettings:gap")), ab.lines && Bb("tStyle", Ab("crosshairSettings:tStyle"))]
        }), eb && (0, vb.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [Bb("dot", Ab("crosshairSettings:dot")), ab.dot && Tb("dotSize", Ab("crosshairSettings:dotSize"))]
        }), eb && (0, vb.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [Bb("circle", Ab("crosshairSettings:circle")), ab.circle && Tb("circleRadius", Ab("crosshairSettings:circleRadius")), ab.circle && Tb("circleThickness", Ab("crosshairSettings:circleThickness"))]
        }), (0, vb.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [Tb("outline", Ab("crosshairSettings:outline"), (bb => bb > 0 ? PU(bb) : Ab("crosshairSettings:off"))), ab.outline > 0 && (0, vb.jsx)(jU, {
            label: Ab("crosshairSettings:outlineColor"),
            value: ab.outlineColor,
            swatches: LU,
            onChange: bb => {
              Mb("outlineColor", bb)
            }
          })]
        }), Bb("growOnClick", Ab("crosshairSettings:growOnClick")), eb && Bb("forGuns", Ab("crosshairSettings:forGuns"), Ab("crosshairSettings:forGunsInfo"))]
      })
    }
    var kU = Ub(75),
      yU = Ub(1213),
      ZU = Ub(8849),
      DU = Ub(8855),
      zU = Ub(8863),
      xU = Ub(8871);
    const iU = ["sky", "grass", "stone", "sand", "snow", "night"],
      fU = "4rem";

    function mU(bb) {
      return {
        backgroundImage: `url(${bb})`,
        backgroundSize: `${fU} ${fU}`,
        backgroundRepeat: "repeat",
        imageRendering: "pixelated"
      }
    }

    function pU(bb) {
      return {
        ...(() => {
          switch (bb) {
            case "sky":
              return {
                backgroundImage: "linear-gradient(#3d8fe0 0%, #8cc8f5 45%, #d6eefc 58%, #6fae4a 58.01%, #4f8a33 100%)", backgroundSize: "100vw 100vh", backgroundRepeat: "no-repeat"
              };
            case "grass":
              return mU(ZU);
            case "stone":
              return mU(DU);
            case "sand":
              return mU(zU);
            case "snow":
              return mU(xU);
            case "night":
              return {
                backgroundImage: "radial-gradient(circle at 50% 50%, #1e2a4a 0%, #070b16 100vmax)", backgroundSize: "100vw 100vh", backgroundRepeat: "no-repeat"
              }
          }
        })(),
        backgroundPosition: "center"
      }
    }

    function NU(bb) {
      return Object.freeze({
        ...YU.d,
        style: "shapes",
        outline: 1,
        lines: !1,
        ...bb
      })
    }
    const WU = [{
        id: "default",
        settings: YU.d
      }, {
        id: "cross",
        settings: NU({
          color: 5046092,
          lines: !0,
          lineLength: 7,
          lineThickness: 2,
          gap: 3
        })
      }, {
        id: "crossDot",
        settings: NU({
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
        settings: NU({
          dot: !0,
          dotSize: 4
        })
      }, {
        id: "circle",
        settings: NU({
          circle: !0,
          circleRadius: 12,
          circleThickness: 1.5,
          dot: !0,
          dotSize: 2
        })
      }, {
        id: "tShape",
        settings: NU({
          color: 16731391,
          lines: !0,
          lineLength: 7,
          lineThickness: 2,
          gap: 3,
          tStyle: !0
        })
      }, {
        id: "tiny",
        settings: NU({
          color: 16776960,
          lines: !0,
          lineLength: 3,
          lineThickness: 1,
          gap: 2
        })
      }, {
        id: "bold",
        settings: NU({
          lines: !0,
          lineLength: 10,
          lineThickness: 3,
          gap: 0,
          outline: 1.5
        })
      }],
      HU = ["growOnClick", "forGuns"];
    var IU = Ub(8879);

    function dU(bb) {
      let {
        label: ab,
        selected: Ub,
        onClick: Ab,
        className: Mb,
        style: Eb,
        children: Yb
      } = bb;
      return (0, vb.jsx)("button", {
        type: "button",
        role: "radio",
        "aria-checked": Ub,
        title: ab,
        "aria-label": ab,
        "data-pad-focusable": !0,
        className: Tb()("CrosshairBackdropSwatch", Mb, {
          Selected: Ub
        }),
        style: Eb,
        onClick: Ab,
        children: Yb
      })
    }

    function FU(bb) {
      let {
        backdrop: ab,
        onChange: Ub,
        game: Ab
      } = bb;
      const {
        t: Mb
      } = (0, Eb.A)();
      return (0, vb.jsxs)("div", {
        className: "CrosshairBackdrops",
        role: "radiogroup",
        "aria-label": Mb("crosshairSettings:background"),
        children: [Ab && (0, vb.jsx)(dU, {
          label: Mb("crosshairSettings:bg_game"),
          selected: Ab.selected,
          onClick: Ab.onSelect,
          className: "CrosshairGameSwatch",
          children: (0, vb.jsx)(Yb.e, {
            name: "cube"
          })
        }), iU.map((bb => (0, vb.jsx)(dU, {
          label: Mb(`crosshairSettings:bg_${bb}`),
          selected: !(null !== Ab && void 0 !== Ab && Ab.selected) && bb === ab,
          style: pU(bb),
          onClick: () => {
            Ub(bb)
          }
        }, bb)))]
      })
    }

    function hU(bb) {
      let {
        settings: ab,
        touch: Ub,
        backdrop: Ab,
        onChange: Mb
      } = bb;
      const {
        t: Yb
      } = (0, Eb.A)(), Bb = function(bb) {
        var ab;
        return null !== (ab = WU.find((ab => (0, YU.o)(ab.settings, bb, HU)))) && void 0 !== ab ? ab : null
      }(ab);
      return (0, vb.jsx)("div", {
        className: "CrosshairPresets",
        role: "radiogroup",
        "aria-label": Yb("crosshairSettings:presets"),
        children: WU.map((bb => {
          const Eb = (null === Bb || void 0 === Bb ? void 0 : Bb.id) === bb.id;
          return (0, vb.jsxs)("button", {
            type: "button",
            role: "radio",
            "aria-checked": Eb,
            "data-pad-focusable": !0,
            className: Tb()("CrosshairPreset", {
              Selected: Eb
            }),
            onClick: () => {
              Mb(function(bb, ab) {
                return {
                  ...ab.settings,
                  growOnClick: bb.growOnClick,
                  forGuns: bb.forGuns
                }
              }(ab, bb))
            },
            children: [(0, vb.jsx)("div", {
              className: "CrosshairPresetStage",
              style: pU(Ab),
              children: (0, vb.jsx)(IU.e, {
                settings: bb.settings,
                touch: Ub,
                inPreview: !0
              })
            }), (0, vb.jsx)("div", {
              className: "CrosshairPresetName",
              children: Yb(`crosshairSettings:preset_${bb.id}`)
            })]
          }, bb.id)
        }))
      })
    }
    var GU = Ub(1584);

    function QU(bb, ab) {
      const [Ub, Mb] = (0, Ab.useState)(!1), Tb = () => {
        Mb(!1)
      }, [Eb, Yb] = (0, Ab.useState)(!1), Bb = (0, Ab.useRef)({
        growOnClick: bb.growOnClick,
        forGuns: bb.forGuns
      });
      (0, Ab.useEffect)((() => {
        const ab = Bb.current;
        Bb.current = {
          growOnClick: bb.growOnClick,
          forGuns: bb.forGuns
        }, (bb.growOnClick && !ab.growOnClick || bb.forGuns && !ab.forGuns) && Yb(!0)
      }), [bb.growOnClick, bb.forGuns]), (0, Ab.useEffect)((() => {
        if (!Eb) return;
        const bb = setTimeout((() => {
          Yb(!1)
        }), 600);
        return () => {
          clearTimeout(bb)
        }
      }), [Eb]);
      const eb = Ub || Eb;
      return {
        view: {
          pressed: eb,
          spread: eb && bb.forGuns && !bb.growOnClick ? 6 : 0
        },
        handlers: {
          onPointerDown: bb => {
            !bb.target.closest(ab) && (0, GU.c)(bb.currentTarget, bb.pointerId) && Mb(!0)
          },
          onPointerUp: Tb,
          onPointerCancel: Tb,
          onLostPointerCapture: Tb
        }
      }
    }

    function qU(bb) {
      let {
        settings: ab,
        touch: Ub,
        backdrop: Ab,
        className: Mb,
        children: Eb,
        label: Yb
      } = bb;
      const Bb = QU(ab, ".CrosshairStageControls");
      return (0, vb.jsxs)("div", {
        className: Tb()("CrosshairStage", Mb),
        style: pU(Ab),
        ...Bb.handlers,
        children: [(0, vb.jsx)("div", {
          className: "CrosshairStageHold",
          role: "img",
          "aria-label": Yb,
          children: (0, vb.jsx)(IU.e, {
            settings: ab,
            touch: Ub,
            inPreview: !0,
            ...Bb.view
          })
        }), Eb]
      })
    }
    const uU = "crosshairFullScreen";

    function rU(bb) {
      let {
        settings: ab,
        touch: Ub,
        backdrop: Mb,
        onBackdrop: Bb,
        inGame: eb,
        onChange: Lb,
        onClose: Pb
      } = bb;
      const {
        t: Xb
      } = (0, Eb.A)(), jb = (0, Ab.useRef)(null);
      (0, yU.r)("popup", jb, Pb),
      function(bb) {
        const ab = (0, Ab.useRef)(bb);
        ab.current = bb, (0, Ab.useEffect)((() => {
          window.history.pushState({
            ...window.history.state,
            [uU]: !0
          }, "");
          let bb = !1;
          const Ub = () => {
            bb = !0, ab.current()
          };
          return window.addEventListener("popstate", Ub), () => {
            var ab;
            window.removeEventListener("popstate", Ub), !bb && null !== (ab = window.history.state) && void 0 !== ab && ab[uU] && window.history.back()
          }
        }), [])
      }(Pb);
      const Rb = (0, Ab.useRef)(Pb);
      Rb.current = Pb, (0, Ab.useEffect)((() => {
        function bb(bb) {
          "Escape" === bb.key && (bb.stopPropagation(), Rb.current())
        }
        return window.addEventListener("keydown", bb, !0), () => {
          window.removeEventListener("keydown", bb, !0)
        }
      }), []);
      const yb = QU(ab, ".CrosshairFullScreenPanel"),
        [Zb, Db] = (0, Ab.useState)(!0),
        zb = Zb && eb;
      (0, Ab.useEffect)((() => {
        if (zb) return mb.c.set({
          crosshairGameView: !0
        }), () => {
          mb.c.set({
            crosshairGameView: !1
          })
        }
      }), [zb]);
      const [xb, ib] = (0, Ab.useState)(!0);
      return (0, kU.createPortal)((0, vb.jsxs)("div", {
        ref: jb,
        className: "CrosshairFullScreen",
        style: zb ? void 0 : pU(Mb),
        ...yb.handlers,
        children: [(0, vb.jsx)(IU.e, {
          settings: ab,
          touch: Ub,
          inEditor: !0,
          ...yb.view
        }), (0, vb.jsxs)("div", {
          className: Tb()("CrosshairFullScreenPanel", {
            Collapsed: !xb
          }),
          children: [(0, vb.jsxs)("div", {
            className: "CrosshairFullScreenBar",
            children: [(0, vb.jsx)(FU, {
              backdrop: Mb,
              onChange: bb => {
                Db(!1), Bb(bb)
              },
              game: eb ? {
                selected: zb,
                onSelect: () => {
                  Db(!0)
                }
              } : void 0
            }), (0, vb.jsx)(kb.M, {
              className: "CrosshairPanelToggle",
              ariaLabel: Xb(xb ? "crosshairSettings:hideEditor" : "crosshairSettings:showEditor"),
              onClick: () => {
                ib(!xb)
              },
              children: (0, vb.jsx)(Yb.e, {
                name: xb ? "caret-up" : "pen"
              })
            }), (0, vb.jsx)(kb.g, {
              className: "CrosshairFullScreenDone",
              onClick: Pb,
              padDefaultFocus: !0,
              children: Xb("crosshairSettings:done")
            })]
          }), xb && (0, vb.jsxs)("div", {
            className: "CrosshairFullScreenFields",
            children: [(0, vb.jsx)(hU, {
              settings: ab,
              touch: Ub,
              backdrop: Mb,
              onChange: Lb
            }), (0, vb.jsx)(RU, {
              settings: ab,
              onChange: Lb
            })]
          })]
        })]
      }), document.body)
    }
    var KU = Ub(2469),
      oU = Ub(8889);

    function lU(bb) {
      let {
        settings: ab,
        onChange: Ub
      } = bb;
      const {
        t: Mb
      } = (0, Eb.A)(), Bb = (0, oU.h)(ab), [eb, Lb] = (0, KU.k)(), [Pb, Xb] = (0, Ab.useState)(!1), jb = (0, Ab.useRef)(null), [Rb, yb] = (0, KU.k)(), [Zb, Db] = (0, Ab.useState)(!1);
      return (0, vb.jsxs)("div", {
        className: "SettingBox CrosshairShare",
        children: [(0, vb.jsxs)("div", {
          className: "CrosshairShareRow",
          children: [(0, vb.jsxs)(kb.M, {
            className: Tb()("CrosshairCopy", {
              ActiveSecondaryButton: eb
            }),
            onClick: () => {
              (0, KU.h)(Bb, {
                useShareSheet: !1,
                onOutcome: bb => {
                  Xb("failed" === bb), "copied" === bb && Lb()
                }
              })
            },
            children: [(0, vb.jsx)(Yb.e, {
              name: eb ? "check" : "copy"
            }), " ", Mb(eb ? "general:copied" : "crosshairSettings:copy")]
          }), (0, vb.jsx)(xb.c, {
            className: "CrosshairPaste",
            domRef: jb,
            ariaLabel: Mb("crosshairSettings:paste"),
            placeholderText: Mb("crosshairSettings:paste"),
            onValueChange: bb => {
              const ab = (0, oU.f)(bb);
              Db(!ab && bb.trim().length >= oU.e), ab && (Ub(ab), jb.current.value = "", yb())
            }
          })]
        }), Pb && (0, vb.jsx)("input", {
          className: "CrosshairCode",
          readOnly: !0,
          value: Bb,
          "aria-label": Mb("crosshairSettings:copy"),
          onFocus: bb => {
            bb.currentTarget.select()
          }
        }), (0, vb.jsxs)("div", {
          "aria-live": "polite",
          children: [Zb && (0, vb.jsx)("div", {
            className: "CrosshairShareNote Error",
            children: Mb("crosshairSettings:pasteInvalid")
          }), Rb && !Zb && (0, vb.jsx)("div", {
            className: "CrosshairShareNote",
            children: Mb("crosshairSettings:applied")
          })]
        })]
      })
    }
    var tU = Ub(8892);
    let wU = "sky";

    function sU(bb) {
      let {
        showing: ab
      } = bb;
      const {
        t: Ub
      } = (0, Eb.A)(), {
        isTouchScreen: Mb,
        gameState: Tb,
        clientEscMenuOptions: Bb
      } = (0, mb.n)(["isTouchScreen", "gameState", "clientEscMenuOptions"]), eb = (0, tU.g)(), [Lb, Pb] = (0, Ab.useState)(wU), Xb = bb => {
        wU = bb, Pb(bb)
      }, [jb, Rb] = (0, Ab.useState)(!1);
      return (0, Ab.useEffect)((() => {
        ab || Rb(!1)
      }), [ab]), (0, vb.jsxs)("div", {
        className: "SettingsMenuRightInner CrosshairCategory",
        children: [(0, vb.jsx)("div", {
          className: "CrosshairPreviewSticky",
          children: (0, vb.jsx)(qU, {
            className: "CrosshairPreviewStage",
            settings: eb,
            touch: Mb,
            backdrop: Lb,
            label: Ub("crosshairSettings:preview"),
            children: (0, vb.jsxs)("div", {
              className: "CrosshairPreviewBar CrosshairStageControls",
              children: [(0, vb.jsx)(FU, {
                backdrop: Lb,
                onChange: Xb
              }), (0, vb.jsxs)(kb.M, {
                className: "CrosshairFullScreenButton",
                onClick: () => {
                  Rb(!0)
                },
                children: [(0, vb.jsx)(Yb.e, {
                  name: "expand"
                }), " ", Ub("crosshairSettings:fullScreen")]
              })]
            })
          })
        }), (0, vb.jsx)("div", {
          className: "SettingBox",
          children: (0, vb.jsx)(hU, {
            settings: eb,
            touch: Mb,
            backdrop: Lb,
            onChange: tU.d
          })
        }), (0, vb.jsx)(lU, {
          settings: eb,
          onChange: tU.d
        }), Mb && (0, vb.jsx)(EU.b, {
          note: (0, TU.f)(Mb, Bb.touchActionButtons) ? Ub("crosshairSettings:touchNote") : void 0
        }), (0, vb.jsx)(RU, {
          settings: eb,
          onChange: tU.d
        }), jb && (0, vb.jsx)(rU, {
          settings: eb,
          touch: Mb,
          backdrop: Lb,
          onBackdrop: Xb,
          inGame: "inGame" === Tb,
          onChange: tU.d,
          onClose: () => {
            Rb(!1)
          }
        })]
      })
    }
    var gU = Ub(8430),
      CU = Ub(1296),
      VU = Ub(4668),
      OU = Ub(8898),
      cU = Ub(1858),
      JU = Ub(3996),
      nU = Ub(1867),
      SU = Ub(679);
    const bA = (0, Ab.memo)((function() {
      const {
        clientEscMenuOptions: bb
      } = (0, mb.n)(["clientEscMenuOptions"]), {
        recording: ab,
        clipping: Ub,
        hasClipBuffer: Mb
      } = (0, cU.k)("replayRecorder"), Eb = (0, cU.g)("connectedGame", (bb => bb.replay)), Yb = (0, JU.j)(), Bb = !1 === (0, jb.h)("canRecordReplays");
      (0, Ab.useEffect)((() => {
        Zb.gameBridge.send("setRecorderPrefs", {
          clipping: bb.enableClipping,
          clipSeconds: bb.clipDurationSeconds
        })
      }), [bb.enableClipping, bb.clipDurationSeconds]);
      const eb = Yb || Eb,
        Lb = !eb && !Bb,
        Pb = ab || Lb,
        Xb = Lb,
        Rb = Xb && Ub && !ab;

      function yb() {
        Pb && Zb.gameBridge.send("toggleRecording", null)
      }
      return (0, vb.jsxs)("div", {
        className: "SettingsMenuRightInner ReplayViewerCategory",
        children: [(0, vb.jsxs)("div", {
          className: "SettingBox",
          children: [(0, vb.jsx)("div", {
            className: "ReplayViewerCategoryRecordingRow",
            children: ab ? (0, vb.jsxs)(vb.Fragment, {
              children: [(0, vb.jsxs)(kb.D, {
                className: "ReplayViewerCategoryButton",
                onClick: yb,
                disabled: !Pb,
                children: [(0, vb.jsx)("span", {
                  children: "Stop Recording"
                }), (0, vb.jsx)(nU.b, {
                  noaAction: "recordGame"
                })]
              }), (0, vb.jsx)(OU.c, {
                className: "ReplayViewerCategoryRecordingIndicator"
              })]
            }) : (0, vb.jsxs)(kb.g, {
              className: "ReplayViewerCategoryButton",
              onClick: yb,
              disabled: !Pb,
              children: [(0, vb.jsx)("span", {
                children: "Start Recording"
              }), (0, vb.jsx)(nU.b, {
                noaAction: "recordGame"
              })]
            })
          }), Bb && (0, vb.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Recording is turned off in this game."
          }), eb && !ab && (0, vb.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Close Replay Mode to start recording."
          })]
        }), (0, vb.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, vb.jsx)(fb.d, {
            label: "Enable clipping",
            checked: bb.enableClipping,
            disabled: !Xb,
            onClick: function(bb) {
              Xb && mb.c.setClientEscMenuOptions({
                enableClipping: bb
              })
            },
            className: Tb()({
              SettingBoxDisabled: !Xb
            })
          }), (0, vb.jsx)(fb.g, {
            name: "Clip duration (seconds)",
            min: SU.h,
            max: SU.g,
            step: SU.c,
            initValue: bb.clipDurationSeconds,
            onChange: function(bb) {
              mb.c.setClientEscMenuOptions({
                clipDurationSeconds: bb
              })
            },
            circleInfoText: "Longer clip durations use more memory and may affect performance.",
            disabled: !Xb || !bb.enableClipping
          })]
        }), (0, vb.jsxs)("div", {
          className: "SettingBox",
          children: [(0, vb.jsxs)(kb.g, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              Rb && Zb.gameBridge.send("saveClip", null)
            },
            disabled: !Rb,
            children: [(0, vb.jsx)("span", {
              children: "Record clip"
            }), (0, vb.jsx)(nU.b, {
              noaAction: "recordClip"
            })]
          }), bb.enableClipping && !Mb && Xb && !ab && (0, vb.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clip buffer is filling \u2014 play for a moment, then save."
          }), ab && (0, vb.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clipping pauses while a full recording is active."
          })]
        }), (0, vb.jsxs)("div", {
          className: "SettingBox",
          children: [(0, vb.jsxs)(kb.g, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              (0, JU.i)(!0), mb.c.set({
                openEverythingMenuName: null
              })
            },
            disabled: Yb,
            children: [(0, vb.jsx)("span", {
              children: "Open Replay Mode"
            }), (0, vb.jsx)(nU.b, {
              noaAction: "replayViewerOpen"
            })]
          }), Yb && (0, vb.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Replay Mode is already open."
          })]
        }), (0, vb.jsxs)("div", {
          className: "SettingBox",
          children: [(0, vb.jsx)("div", {
            className: "ReplayViewerCategoryTutorialTitle",
            children: "How to use Replay Mode"
          }), (0, vb.jsx)("iframe", {
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
    var aA = Ub(1786);
    const UA = {
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
        icon: () => (0, vb.jsx)("svg", {
          className: "svg-inline--fa",
          viewBox: "0 0 640 512",
          "aria-hidden": "true",
          children: (0, vb.jsx)("path", {
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
      QX: {
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

    function AA() {
      return Promise.all([Ub.e(74), Ub.e(131), Ub.e(125), Ub.e(122)]).then((() => Ub(40177))).then((bb => ({
        default: bb.ShaderPackCategory
      })), (bb => (console.error("Failed to load the shader pack settings", bb), {
        default: MA
      })))
    }

    function MA() {
      const {
        t: bb
      } = (0, Eb.A)();
      return (0, vb.jsx)("div", {
        className: "SettingsMenuRightInner",
        children: bb("shaderPack:tabLoadFailed")
      })
    }
    var TA = Ub(1294);
    const EA = (0, Ab.lazy)((() => Ub.e(263).then((() => Ub(40170))).then((bb => ({
        default: bb.BloxdInformation
      }))))),
      YA = (0, Ab.lazy)(AA);

    function BA(bb) {
      return bb ? "general" : "account"
    }
    const eA = new Map,
      vA = (0, Ab.memo)((function(bb) {
        let {
          show: ab,
          setBeforeResumeCallback: Ub
        } = bb;
        (0, Rb.e)();
        const {
          gameState: Mb,
          openSettingsCategory: Tb
        } = (0, mb.n)(["gameState", "openSettingsCategory"]), {
          userContext: Bb
        } = (0, Xb.c)(), {
          t: eb
        } = (0, Eb.A)(), xb = (0, Pb.d)(), ib = (0, jb.h)("minChunkAddDist"), fb = "inGame" === Mb, [pb, Hb] = (0, Ab.useState)(BA(fb)), [Ib, db] = (0, Ab.useState)(null), [Fb, hb] = (0, Ab.useState)([]), Gb = (0, Ab.useRef)(function() {
          const bb = new Date,
            ab = 6 * (bb.getMonth() + bb.getDate()) % ea.r.length;
          return [...ea.r, ...ea.r].slice(ab, ab + 6)
        }()), Qb = (0, Ab.useRef)(null), qb = (0, Wa.i)(CU.i, (0, CU.d)()), ub = Object.keys(UA).filter((bb => {
          switch (bb) {
            case "replayViewer":
              return fb;
            case "developerTools":
              return Bb.playerHasRank("developer") || !1;
            case "texturePack":
              return yb.featureFlags.settings.canChangeTexturePack;
            case "QX":
              return yb.featureFlags.settings.canUseShaderPacks;
            case "notifications":
              return yb.featureFlags.useSocialFeatures;
            case "alternativeDomains":
              return "crazygames" !== Wb.p;
            case "controller":
              return yb.featureFlags.useControllerSupport && (qb || "controller" === pb);
            default:
              return !0
          }
        }));
        (0, Wa.f)("toggleFullCoordinateOverlay", (() => {
          const bb = ca("showCoordinates") && ca("showChunkCoordinates") && ca("showFPS");
          Ja("showCoordinates", !bb), Ja("showChunkCoordinates", !bb), Ja("showFPS", !bb), xb()
        })), (0, Wa.f)("updatedChunkLoadDist", (() => {
          xb()
        })), (0, Ab.useEffect)((() => {
          if (db(null), null === mb.c.get("openSettingsCategory")) {
            const bb = (0, TA.d)() ? eA.get(fb) : void 0;
            Hb(bb && ub.includes(bb) ? bb : BA(fb))
          }
        }), [ab]), (0, Ab.useEffect)((() => {
          null !== Tb && (Hb(Tb), eA.set(fb, Tb), mb.c.set({
            openSettingsCategory: null
          }))
        }), [Tb, fb]), (0, Ab.useLayoutEffect)((() => {
          Qb.current && (Qb.current.scrollTop = 0)
        }), [pb, ab]), (0, Ab.useEffect)((() => {
          "updateLog" === pb && (0, zb.e)().then(hb)
        }), [pb]), (0, Ab.useEffect)((() => {
          if ((0, ta.I)(ib)) return;
          const [bb, ab] = (0, AU.e)(), [Ub, Ab] = (0, qa.f)(ib), Mb = (0, aA.c)(ib[0], bb, Ub), Tb = (0, aA.c)(ib[1], ab, Ab);
          Zb.gameBridge.send("setChunkAddDistance", {
            horizontal: Mb,
            vertical: Tb
          })
        }), [ib]);
        const rb = (0, Ab.useCallback)((async () => {
          Ib && (await Ib(), db(null))
        }), [Ib]);

        function Kb() {
          mb.c.set({
            openEverythingMenuName: null
          })
        }
        return (0, Ab.useEffect)((() => {
          Ub((() => rb))
        }), [rb, Ub]), (0, vb.jsxs)("div", {
          className: "SettingsMenu Menu",
          style: ab ? {} : {
            display: "none"
          },
          children: [(0, vb.jsx)("div", {
            className: "MenuSideBar",
            children: (0, vb.jsx)("div", {
              className: "MenuSideBarBody",
              children: (0, vb.jsx)(Lb, {
                items: ub.map((bb => {
                  const ab = UA[bb].icon;
                  return {
                    id: bb,
                    faIcon: "string" === typeof ab ? ab : void 0,
                    iconElement: "string" === typeof ab ? void 0 : (0, vb.jsx)(ab, {}),
                    title: eb(UA[bb].displayName),
                    redDot: !1
                  }
                })),
                selectedItemId: pb,
                onClick: bb => {
                  !async function(bb) {
                    await rb(), Hb(bb), eA.set(fb, bb)
                  }(bb)
                }
              })
            })
          }), (0, vb.jsxs)("div", {
            ref: Qb,
            className: "MenuBody SettingsMenuRight",
            children: ["account" === pb && (0, vb.jsx)(Za, {
              showing: ab,
              inGame: fb
            }), "general" === pb && (0, vb.jsx)(ma, {
              inGame: fb
            }), "audio" === pb && (0, vb.jsx)(pa, {}), "notifications" === pb && (0, vb.jsx)(Qa, {}), "graphics" === pb && (0, vb.jsx)(UU, {
              minChunkAddDist: null !== ib && void 0 !== ib ? ib : [2, 2],
              getValue: ca,
              onChange: Ja,
              setApplySettingsCallback: db
            }), "controls" === pb && (0, vb.jsx)(MU.e, {}), "crosshair" === pb && (0, vb.jsx)(sU, {
              showing: ab
            }), "controller" === pb && yb.featureFlags.useControllerSupport && (0, vb.jsx)(gU.c, {}), yb.featureFlags.settings.canChangeTexturePack && "texturePack" === pb && (0, vb.jsx)(VU.d, {
              setApplySettingsCallback: db
            }), yb.featureFlags.settings.canUseShaderPacks && "QX" === pb && (0, vb.jsx)(Ab.Suspense, {
              fallback: null,
              children: (0, vb.jsx)(YA, {
                setApplySettingsCallback: db
              })
            }), "updateLog" === pb && (0, vb.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, vb.jsx)("div", {
                className: "UpdateLogsContainer",
                children: Fb.map(((bb, ab) => (0, vb.jsx)(Db.b, {
                  updateLog: bb,
                  index: ab,
                  close: Kb
                }, ab)))
              })
            }), "information" === pb && (0, vb.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, vb.jsx)(Ab.Suspense, {
                fallback: null,
                children: (0, vb.jsx)(EA, {})
              })
            }), "alternativeDomains" === pb && (0, vb.jsxs)("div", {
              className: "SettingsMenuRightInner",
              children: [(0, vb.jsx)("div", {
                className: "AlternativeDomainsTitle",
                children: eb("settingsMenu:unblockedDomainsDescription")
              }), (0, vb.jsx)("div", {
                className: "AlternativeDomainsList",
                children: Gb.current.map((bb => (0, vb.jsxs)(kb.g, {
                  onClick: () => {
                    window.open(`https://${bb}`)
                  },
                  children: [(0, vb.jsx)(Yb.e, {
                    name: "arrow-up-right-from-square"
                  }), " ", bb]
                }, bb)))
              })]
            }), "replayViewer" === pb && (0, vb.jsx)(bA, {}), "developerTools" === pb && (0, vb.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, vb.jsx)(Nb, {
                setApplySettingsCallback: db
              })
            }), null !== Ib && (0, vb.jsx)("div", {
              className: "SettingsMenuRightFooter",
              children: (0, vb.jsx)(kb.g, {
                className: "SettingsMenuRightFooterButton",
                onClick: rb,
                children: eb("general:apply")
              })
            })]
          })]
        })
      }));
    var LA = Ub(2424);
    const PA = ["characters", "emote", "skin", "hat", "head", "eyebrows", "eyes", "back", "body", "legs", "shoes", "profileEffect", "cape", "nameColour"],
      XA = (0, Ab.lazy)((() => Promise.resolve().then((() => Ub(4340))).then((bb => {
        bb.needGameClientAfterPaint();
        const ab = bb.matchmakingLibrariesPromise.then((bb => (0, LA.e)(bb.loadCharacterCustomisationUI(), (bb => bb.CharacterCustomisationUI))));
        return Promise.all([bb.ensureGameSetup(), ab]).then((bb => {
          let [, ab] = bb;
          return ab
        }))
      }))));

    function jA(bb) {
      let {
        show: ab
      } = bb;
      const {
        userContext: Ub
      } = (0, Xb.c)(), [Mb, Tb] = (0, Ab.useState)("characters");
      if (!ab) return null;
      const Eb = PA.filter((bb => "cape" !== bb && "nameColour" !== bb || Ub.getPlayerRanks().includes("super") || (0, ob.purchasesAllowed)())).map((bb => ({
        id: bb,
        faIcon: ea.w[bb],
        title: ea.A[bb],
        redDot: !1
      })));
      return (0, vb.jsxs)("div", {
        className: "Menu CharCustomisation",
        children: [(0, vb.jsx)("div", {
          className: "MenuSideBar",
          children: (0, vb.jsx)(Lb, {
            items: Eb,
            selectedItemId: Mb,
            onClick: bb => {
              Tb(bb)
            }
          })
        }), (0, vb.jsx)("div", {
          className: "MenuBody",
          children: (0, vb.jsx)(Ab.Suspense, {
            fallback: (0, vb.jsx)("div", {
              className: "CharacterCustomisationLoading",
              children: (0, vb.jsx)(ib.b, {})
            }),
            children: (0, vb.jsx)(XA, {
              selectedTab: Mb
            })
          })
        })]
      })
    }
    var RA = Ub(1370),
      kA = Ub(8906),
      yA = Ub(4211),
      ZA = Ub(3090),
      DA = Ub(3142),
      zA = Ub(8930),
      xA = Ub(8334),
      iA = Ub(8910),
      fA = Ub(8917),
      mA = Ub(1812),
      pA = Ub(1794),
      NA = Ub(4595),
      WA = Ub(1203),
      HA = Ub(1162),
      IA = Ub(1578),
      dA = Ub(8418);

    function FA(bb) {
      return bb ? Object.keys(bb).sort(((ab, Ub) => {
        var Ab, Mb, Tb, Eb;
        const Yb = (null !== (Ab = null === (Mb = bb[Ub]) || void 0 === Mb ? void 0 : Mb.sortPriority) && void 0 !== Ab ? Ab : 0) - (null !== (Tb = null === (Eb = bb[ab]) || void 0 === Eb ? void 0 : Eb.sortPriority) && void 0 !== Tb ? Tb : 0);
        return 0 !== Yb ? Yb : ab.localeCompare(Ub)
      })) : []
    }
    const hA = [{
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

    function GA(bb) {
      for (const {
          threshold: ab,
          suffix: Ub
        }
        of hA)
        if (bb >= ab) {
          const Ab = bb / ab;
          return Ab >= 100 ? `${Math.floor(Ab)}${Ub}` : Ab >= 10 ? `${Ab.toFixed(1).replace(/\.0$/,"")}${Ub}` : `${Ab.toFixed(2).replace(/\.?0+$/,"")}${Ub}`
        } return String(bb)
    }
    var QA = Ub(4690);
    const qA = {
        normal: "0.8em",
        big: "1em"
      },
      uA = (0, Ab.memo)((function(bb) {
        let {
          item: ab,
          amount: Ub = 0,
          size: Ab = "normal",
          tier: Mb = null
        } = bb;
        return (0, vb.jsx)("div", {
          className: Tb()("SmpSlot", `SmpSlot-${Ab}`),
          children: ab && (0, vb.jsx)(mA.c, {
            itemName: ab,
            amount: Ub > 1 ? Ub : 0,
            amountFontSize: qA[Ab],
            enchantmentTier: Mb
          })
        })
      }));

    function rA(bb) {
      let {
        amount: ab,
        exact: Ub = !1,
        className: Ab
      } = bb;
      return (0, vb.jsxs)("span", {
        className: Tb()("SmpGold", Ab),
        children: [(0, vb.jsx)("span", {
          className: "SmpCoin",
          children: (0, vb.jsx)(mA.c, {
            itemName: "Gold Coin",
            amount: 0
          })
        }), Ub ? ab.toLocaleString("en-US") : GA(ab)]
      })
    }

    function KA(bb) {
      let {
        count: ab = 5,
        grid: Ub = !1
      } = bb;
      return (0, vb.jsx)("div", {
        className: Ub ? "SmpCardGrid" : "SmpList",
        "aria-hidden": "true",
        children: Array.from({
          length: ab
        }, ((bb, ab) => (0, vb.jsxs)("div", {
          className: Tb()(Ub ? "SmpListingCard" : "SmpRow", "SmpSkeleton"),
          children: [(0, vb.jsx)("div", {
            className: Tb()("SmpSlot", Ub ? "SmpSlot-big" : "SmpSlot-normal")
          }), (0, vb.jsxs)("div", {
            className: "SmpRowText",
            children: [(0, vb.jsx)("b", {}), (0, vb.jsx)("small", {})]
          }), (0, vb.jsx)("div", {
            className: "SmpSkeletonButton"
          })]
        }, ab)))
      })
    }

    function oA(bb) {
      let {
        title: ab,
        children: Ub
      } = bb;
      return (0, vb.jsxs)("div", {
        className: "SmpEmpty",
        children: [(0, vb.jsx)("b", {
          children: ab
        }), Ub && (0, vb.jsx)("small", {
          children: Ub
        })]
      })
    }

    function lA(bb) {
      let {
        entry: ab
      } = bb;
      return (0, vb.jsx)(oA, {
        title: (0, vb.jsx)(pA.c, {
          text: ab.item.customTitle
        }),
        children: (0, vb.jsx)(pA.c, {
          text: ab.item.description
        })
      })
    }

    function tA(bb) {
      return (0, vb.jsx)(QA.e, {
        ...bb,
        className: Tb()("SmpChoice", bb.className),
        reselectable: !0
      })
    }

    function wA() {
      return (0, vb.jsx)("span", {
        className: "SmpLoader",
        children: (0, vb.jsx)(ib.b, {})
      })
    }

    function sA(bb) {
      let {
        value: ab,
        onChange: Ub,
        min: Mb = 1,
        max: Tb,
        step: Eb = 1,
        label: Yb
      } = bb;
      const Bb = (0, Ab.useRef)(null),
        eb = (0, Ab.useRef)(ab);
      eb.current = ab;
      const [Lb, Pb] = (0, Ab.useState)(null), Xb = bb => Math.max(Mb, Math.min(Tb, Math.floor(bb))), jb = bb => {
        const ab = eb.current,
          Ab = "function" === typeof Eb ? Eb(ab, bb) : Eb,
          Mb = Xb(ab + Ab * bb);
        eb.current = Mb, Ub(Mb)
      };
      (0, Ab.useEffect)((() => {
        if (null === Lb) return;
        let bb;
        const ab = () => {
            Pb(null)
          },
          Ub = setTimeout((() => {
            bb = setInterval((() => {
              jb(Lb);
              const bb = eb.current;
              (Lb > 0 ? bb >= Tb : bb <= Mb) && ab()
            }), 70)
          }), 380);
        return window.addEventListener("pointerup", ab), window.addEventListener("pointercancel", ab), window.addEventListener("blur", ab), () => {
          clearTimeout(Ub), clearInterval(bb), window.removeEventListener("pointerup", ab), window.removeEventListener("pointercancel", ab), window.removeEventListener("blur", ab)
        }
      }), [Lb]), (0, Ab.useEffect)((() => {
        const bb = Bb.current;
        bb && document.activeElement !== bb && bb.value !== String(ab) && (bb.value = String(ab))
      }), [ab]), (0, Ab.useEffect)((() => {
        const bb = Bb.current;
        if (!bb) return;
        const ab = () => {
          bb.value = String(eb.current)
        };
        return bb.addEventListener("blur", ab), () => {
          bb.removeEventListener("blur", ab)
        }
      }), []);
      const Rb = bb => (0, vb.jsx)("button", {
        type: "button",
        className: "SmpStepButton",
        "aria-label": `${bb>0?"More":"Less"} ${Yb}`,
        disabled: bb > 0 ? ab >= Tb : ab <= Mb,
        onPointerDown: ab => {
          0 === ab.button && (jb(bb), Pb(bb))
        },
        onKeyDown: ab => {
          "Enter" !== ab.key && " " !== ab.key || jb(bb)
        },
        onContextMenu: bb => {
          bb.preventDefault()
        },
        children: bb > 0 ? "+" : "\u2212"
      });
      return (0, vb.jsxs)("div", {
        className: "SmpStepper",
        children: [Rb(-1), (0, vb.jsx)(xb.c, {
          className: "SmpStepperInput",
          domRef: Bb,
          defaultValue: String(ab),
          ariaLabel: Yb,
          type: "text",
          blurOnEnter: !0,
          onValueChange: bb => {
            const ab = bb.replace(/[^\d]/g, "");
            Bb.current && ab !== bb && (Bb.current.value = ab), "" !== ab && Ub(Xb(Number(ab)))
          }
        }), Rb(1)]
      })
    }

    function gA(bb) {
      return Math.max(1, 10 ** Math.max(0, Math.floor(Math.log10(Math.max(1, bb))) - 1))
    }
    var CA = Ub(8922),
      VA = Ub(1189);
    const OA = ["building", "colours", "nature", "decoration", "utility", "tools", "combat", "food", "mobs", "materials", "worldTools"];
    VA.u, rb.qc.length;
    new Map;
    var cA = Ub(2989);

    function JA(bb, ab) {
      var Ub;
      return ab && (null === (Ub = bb[ab]) || void 0 === Ub ? void 0 : Ub.smp) || null
    }

    function nA(bb, ab) {
      const Ub = [];
      for (const Mb of FA(bb)) {
        var Ab;
        const Tb = bb[Mb];
        (null === (Ab = Tb.smp) || void 0 === Ab ? void 0 : Ab.kind) === ab && Ub.push({
          key: Mb,
          item: Tb,
          meta: Tb.smp
        })
      }
      return Ub
    }

    function SA(bb, ab) {
      var Ub;
      return null !== (Ub = nA(bb, ab)[0]) && void 0 !== Ub ? Ub : null
    }
    const bM = "50% 0% 50% 0%",
      aM = [{
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

    function UM(bb) {
      const ab = bb - (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now());
      for (const {
          divisor: Ub,
          suffix: Ab
        }
        of aM)
        if (ab >= Ub) return `${Math.floor(ab/Ub)}${Ab}`;
      return "<1s"
    }

    function AM(bb) {
      const ab = bb.map(xA.g),
        Ub = [];
      return ab.forEach(((bb, Ab) => {
        const Mb = function(bb) {
            const ab = bb.match(/\d+/);
            return ab ? Number(ab[0]) : 0
          }(bb),
          Tb = Ab === ab.length - 1;
        (Tb || 1 === Mb || 10 === Mb || 100 === Mb) && Ub.push({
          label: bb,
          quantity: Mb,
          isAll: Tb
        })
      })), Ub
    }
    let MM = null;

    function TM(bb, ab) {
      const Ub = ab.trim().toLowerCase();
      if (!Ub) return [];
      const Ab = bb => {
          if (bb === Ub) return 0;
          if (bb.startsWith(Ub)) return 1;
          const ab = bb.indexOf(Ub);
          return -1 === ab ? -1 : 2 + ab
        },
        Mb = [];
      for (const Yb of bb) {
        const bb = [Ab(Yb.lowerLabel), Ab(Yb.lowerName)].filter((bb => -1 !== bb));
        bb.length && Mb.push({
          item: Yb,
          rank: Math.min(...bb)
        })
      }
      if (Mb.length > 0) return Mb.sort(((bb, ab) => bb.rank - ab.rank)).map((bb => bb.item));
      const Tb = [...Ub],
        Eb = bb => {
          let ab = 0;
          for (const Ub of Tb) {
            if (ab = bb.indexOf(Ub, ab), -1 === ab) return !1;
            ab++
          }
          return !0
        };
      return bb.filter((bb => Eb(bb.lowerLabel) || Eb(bb.lowerName)))
    }

    function EM(bb, ab) {
      var Ub;
      return null !== (Ub = null === bb || void 0 === bb ? void 0 : bb[ab]) && void 0 !== Ub ? Ub : ab
    }

    function YM(bb, ab) {
      const Ub = bb.userInput;
      return void 0 !== ab && "dropdown" === (null === Ub || void 0 === Ub ? void 0 : Ub.type) && Ub.dropdownOptions.map(xA.g).includes(ab) ? ab : function(bb) {
        const ab = bb.userInput;
        if ("dropdown" !== (null === ab || void 0 === ab ? void 0 : ab.type) || 0 === ab.dropdownOptions.length) return null;
        const Ub = ab.dropdownOptions.map(xA.g);
        return ab.initialValue && Ub.includes(ab.initialValue) ? ab.initialValue : Ub[Ub.length - 1]
      }(bb)
    }

    function BM(bb) {
      return void 0 === bb ? "" : JSON.stringify(bb)
    }
    const eM = (0, Ab.createContext)(null);

    function vM() {
      return (0, Ab.useContext)(eM)
    }
    var LM = Ub(2490);
    const PM = (0, Ab.memo)((function(bb) {
        let {
          name: ab,
          label: Ub,
          onPick: Ab
        } = bb;
        return (0, vb.jsxs)("button", {
          type: "button",
          className: "SmpCatalogueTile",
          title: Ub,
          onClick: () => {
            Ab(ab)
          },
          children: [(0, vb.jsx)(uA, {
            item: ab,
            size: "big"
          }), (0, vb.jsx)("span", {
            children: Ub
          })]
        })
      })),
      XM = (0, Ab.memo)((function(bb) {
        let {
          items: ab,
          query: Ub,
          onPick: Mb
        } = bb;
        const {
          t: Tb
        } = (0, Eb.A)(), [Yb, Bb] = (0, Ab.useState)(new Set), eb = (0, Ab.useMemo)((() => function(bb) {
          const ab = new Map;
          for (const Ub of bb) {
            let bb = ab.get(Ub.category);
            bb || (bb = [], ab.set(Ub.category, bb)), bb.push(Ub)
          }
          return [...OA, "other"].filter((bb => ab.has(bb))).map((bb => ({
            category: bb,
            items: ab.get(bb)
          })))
        }(ab)), [ab]), Lb = (0, Ab.useMemo)((() => TM(ab, Ub).slice(0, 60)), [ab, Ub]);
        return Ub.trim() ? 0 === Lb.length ? (0, vb.jsx)(oA, {
          title: Tb("smpShop:noItemsFound", {
            query: Ub.trim()
          }),
          children: Tb("smpShop:tryShorterName")
        }) : (0, vb.jsx)(LM.c, {
          lazyLoadedClassName: "SmpCatalogueGrid",
          observerRoot: "SmpBody",
          rootMargin: bM,
          observerUpdateDeps: [Ub],
          children: Lb.map((bb => (0, vb.jsx)(PM, {
            name: bb.name,
            label: bb.label,
            onPick: Mb
          }, bb.name)))
        }) : (0, vb.jsx)(vb.Fragment, {
          children: eb.map((bb => {
            let {
              category: ab,
              items: Ub
            } = bb;
            const Ab = Yb.has(ab) || Ub.length <= 48,
              Eb = Ab ? Ub : Ub.slice(0, 48);
            return (0, vb.jsxs)("section", {
              className: "SmpCatalogueSection",
              children: [(0, vb.jsxs)("h4", {
                children: [Tb("other" === ab ? "smpShop:otherItems" : `creativeInventory:${ab}`), !Ab && (0, vb.jsx)("button", {
                  type: "button",
                  className: "SmpLink",
                  onClick: () => {
                    Bb(new Set([...Yb, ab]))
                  },
                  children: Tb("smpShop:showAll", {
                    count: Ub.length
                  })
                })]
              }), (0, vb.jsx)(LM.c, {
                lazyLoadedClassName: "SmpCatalogueGrid",
                observerRoot: "SmpBody",
                rootMargin: bM,
                observerUpdateDeps: [Ab],
                children: Eb.map((bb => (0, vb.jsx)(PM, {
                  name: bb.name,
                  label: bb.label,
                  onPick: Mb
                }, bb.name)))
              })]
            }, ab)
          }))
        })
      }));

    function jM(bb, ab) {
      const {
        searched: Ub,
        shown: Mb,
        searchFor: Tb,
        loading: Eb
      } = function(bb, ab) {
        var Ub;
        const Mb = vM(),
          [Tb, Eb] = (0, Ab.useState)(void 0),
          Yb = (0, Ab.useRef)(void 0),
          Bb = (0, Ab.useRef)(0),
          eb = (0, Ab.useRef)(void 0),
          vb = null !== (Ub = null === bb || void 0 === bb ? void 0 : bb.meta.item) && void 0 !== Ub ? Ub : null,
          Lb = !!bb && Mb.isPending(bb.key);
        (0, Ab.useEffect)((() => {
          if (!bb || Lb || !ab || void 0 === Tb || Tb === vb) return;
          const Ub = Tb === Yb.current && Mb.gaveUpAt(bb.key) > Bb.current && eb.current !== Tb;
          (Tb !== Yb.current || Ub) && Mb.act(bb.key, null !== Tb && void 0 !== Tb ? Tb : "*", Ub) && (Ub && (eb.current = Tb), Yb.current = Tb, Bb.current = Date.now())
        }), [bb, Lb, ab, Tb, vb, Mb]);
        const Pb = (0, Ab.useCallback)((bb => {
            Yb.current = void 0, eb.current = void 0, Eb(bb)
          }), []),
          Xb = void 0 !== Tb && Tb !== vb && (Lb || Yb.current !== Tb);
        return {
          searched: vb,
          shown: Xb ? Tb : vb,
          searchFor: Pb,
          loading: Xb || Lb || null !== vb && !ab
        }
      }(bb, ab), Yb = (0, Ab.useMemo)((() => function() {
        var bb;
        let ab = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          Ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          Ab = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const Mb = `${(0,cA.l)()}\x1f${ab.join("\x1e")}\x1f${Ub.join("\x1e")}\x1f${JSON.stringify(Ab)}`;
        if ((null === (bb = MM) || void 0 === bb ? void 0 : bb.key) === Mb) return MM.items;
        const Tb = new Set(Ub),
          Eb = new Set,
          Yb = [],
          Bb = (bb, ab) => {
            var Ub;
            if (!bb || Eb.has(bb) || Tb.has(bb)) return;
            Eb.add(bb);
            const Mb = null !== (Ub = Ab[bb]) && void 0 !== Ub ? Ub : bb;
            Yb.push({
              name: bb,
              label: Mb,
              lowerLabel: Mb.toLowerCase(),
              lowerName: bb.toLowerCase(),
              category: ab
            })
          };
        for (const vb of (0, CA.creativeItemIds)()) {
          var eb;
          (0, CA.itemIsDisabled)(vb, !0, !0, !1) || (0, CA.showOnlyInCreativeSearch)(vb) || Bb((0, cA.h)(vb), null !== (eb = (0, CA.creativeCategoryOf)(vb)) && void 0 !== eb ? eb : "other")
        }
        for (const vb of ab) Bb(vb, "other");
        return MM = {
          key: Mb,
          items: Yb
        }, Yb
      }(null === bb || void 0 === bb ? void 0 : bb.meta.extra, null === bb || void 0 === bb ? void 0 : bb.meta.excluded, null === bb || void 0 === bb ? void 0 : bb.meta.names)), [null === bb || void 0 === bb ? void 0 : bb.meta.extra, null === bb || void 0 === bb ? void 0 : bb.meta.excluded, null === bb || void 0 === bb ? void 0 : bb.meta.names]), [Bb, eb] = (0, Ab.useState)(""), [vb, Lb] = (0, Ab.useState)(0), [Pb, Xb] = (0, Ab.useState)("recent"), jb = (0, Ab.useCallback)((bb => {
        eb(""), Lb((bb => bb + 1)), Tb(bb)
      }), [Tb]), Rb = "browse" === Pb || "" !== Bb.trim();
      return {
        searched: Ub,
        shown: Mb,
        searchFor: Tb,
        loading: Eb,
        catalogue: Yb,
        names: null === bb || void 0 === bb ? void 0 : bb.meta.names,
        query: Bb,
        setQuery: eb,
        searchBoxKey: vb,
        pickItem: jb,
        setView: Xb,
        browsing: Rb
      }
    }

    function RM(bb) {
      let {
        browser: ab,
        children: Ub
      } = bb;
      const {
        t: Ab
      } = (0, Eb.A)(), Mb = vM();
      return (0, vb.jsxs)("div", {
        className: "SmpTopBar",
        children: [(0, vb.jsx)("div", {
          className: "SmpSearch",
          children: (0, vb.jsx)(xb.c, {
            className: "SmpSearchInput",
            placeholderText: Ab("smpShop:searchPlaceholder"),
            defaultValue: ab.query,
            onValueChange: bb => {
              ab.setQuery(bb), ab.searched && bb.trim() && ab.searchFor(null)
            },
            blurOnEnter: !0,
            onEnter: () => {
              const bb = TM(ab.catalogue, ab.query)[0];
              bb ? ab.pickItem(bb.name) : ab.query.trim() && Mb.notify(Ab("smpShop:noItemsFound", {
                query: ab.query.trim()
              }))
            }
          }, ab.searchBoxKey)
        }), Ub]
      })
    }

    function kM(bb) {
      let {
        browser: ab,
        recentLabel: Ub,
        children: Ab
      } = bb;
      const {
        t: Mb
      } = (0, Eb.A)();
      return (0, vb.jsxs)("div", {
        className: "SmpViewBar",
        children: [(0, vb.jsx)(tA, {
          options: [{
            value: "recent",
            label: Ub
          }, {
            value: "browse",
            label: Mb("smpShop:browseItems")
          }],
          value: ab.browsing ? "browse" : "recent",
          onChange: ab.setView,
          ariaLabel: Mb("smpShop:show")
        }), !ab.browsing && Ab]
      })
    }

    function yM(bb) {
      let {
        item: ab,
        names: Ub,
        summary: Ab,
        onBack: Mb,
        children: Tb
      } = bb;
      const {
        t: Yb
      } = (0, Eb.A)();
      return (0, vb.jsxs)("div", {
        className: "SmpItemHeader",
        children: [(0, vb.jsx)(kb.e, {
          className: "SmpBackButton",
          onClick: Mb,
          children: Yb("general:back")
        }), (0, vb.jsx)(uA, {
          item: ab,
          size: "big"
        }), (0, vb.jsxs)("div", {
          className: "SmpItemHeaderText",
          children: [(0, vb.jsx)("b", {
            children: EM(Ub, ab)
          }), Ab && (0, vb.jsx)("small", {
            children: Ab
          })]
        }), Tb]
      })
    }

    function ZM(bb) {
      let {
        browser: ab,
        className: Ub,
        action: Ab,
        above: Mb,
        list: Eb,
        summary: Yb,
        recentLabel: Bb,
        listControls: eb,
        onBack: Lb
      } = bb;
      return (0, vb.jsxs)("div", {
        className: Tb()("SmpScreen", Ub),
        children: [(0, vb.jsx)(RM, {
          browser: ab,
          children: Ab
        }), ab.shown && (0, vb.jsx)(yM, {
          item: ab.shown,
          names: ab.names,
          summary: !ab.loading && Yb,
          onBack: () => {
            null === Lb || void 0 === Lb || Lb(), ab.searchFor(null)
          },
          children: eb
        }), Mb, ab.shown ? Eb : (0, vb.jsxs)(vb.Fragment, {
          children: [(0, vb.jsx)(kM, {
            browser: ab,
            recentLabel: Bb,
            children: eb
          }), ab.browsing ? (0, vb.jsx)(XM, {
            items: ab.catalogue,
            query: ab.query,
            onPick: ab.pickItem
          }) : Eb]
        })]
      })
    }

    function DM(bb, ab) {
      const Ub = bb.map((bb => {
        let {
          meta: ab
        } = bb;
        return ab.pricePerItem
      }));
      return "min" === ab ? Math.min(...Ub) : Math.max(...Ub)
    }
    var zM = Ub(6188);
    const xM = (0, Ab.memo)((function(bb) {
      var ab;
      const {
        t: Ub
      } = (0, Eb.A)(), Ab = null === bb.seller, Mb = bb.quantity * bb.pricePerItem;
      return (0, vb.jsxs)("div", {
        className: bb.grid ? "SmpListingCard" : "SmpRow SmpListingRow",
        children: [(0, vb.jsx)(uA, {
          item: bb.item,
          amount: bb.quantity,
          size: bb.grid ? "big" : "normal",
          tier: bb.tier
        }), (0, vb.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, vb.jsx)("b", {
            children: (0, vb.jsx)(pA.c, {
              text: null !== (ab = bb.title) && void 0 !== ab ? ab : `${bb.quantity}x ${bb.item}`
            })
          }), (0, vb.jsxs)("small", {
            className: "SmpListingFacts",
            children: [(0, vb.jsx)("span", {
              children: Ab ? Ub("smpShop:you") : (0, vb.jsx)(pA.c, {
                text: [{
                  entityName: bb.seller
                }]
              })
            }), (0, vb.jsx)("span", {
              children: Ub("smpShop:timeLeft", {
                time: UM(bb.expiresAt)
              })
            })]
          })]
        }), (0, vb.jsxs)("div", {
          className: "SmpRowPrice",
          children: [(0, vb.jsx)(rA, {
            amount: bb.pricePerItem
          }), (0, vb.jsx)("small", {
            children: Ub("smpShop:each")
          })]
        }), (0, vb.jsx)(kb.g, {
          className: "SmpBuyButton",
          disabled: Ab || !bb.canAfford && !bb.busy,
          loading: bb.busy,
          onClick: () => {
            bb.onBuy(bb.itemKey)
          },
          children: Ab ? Ub("smpShop:yours") : (0, vb.jsx)(rA, {
            amount: Mb
          })
        })]
      })
    }));

    function iM(bb) {
      let {
        view: ab,
        onChange: Ub
      } = bb;
      const {
        t: Ab
      } = (0, Eb.A)();
      return (0, vb.jsx)(QA.e, {
        className: "SmpChoice SmpViewToggle",
        ariaLabel: Ab("smpShop:layout"),
        options: [{
          value: "list",
          label: (0, vb.jsx)(Yb.e, {
            name: "list"
          }),
          ariaLabel: Ab("smpShop:listView")
        }, {
          value: "grid",
          label: (0, vb.jsx)(Yb.e, {
            name: "grid-2"
          }),
          ariaLabel: Ab("smpShop:gridView")
        }],
        value: ab,
        onChange: Ub
      })
    }

    function fM(bb) {
      let {
        entries: ab,
        view: Ub
      } = bb;
      const {
        t: Ab
      } = (0, Eb.A)(), Mb = vM(), Tb = "grid" === Ub;
      return (0, vb.jsxs)(vb.Fragment, {
        children: [!Tb && (0, vb.jsxs)("div", {
          className: "SmpColumns",
          "aria-hidden": "true",
          children: [(0, vb.jsx)("span", {}), (0, vb.jsx)("span", {
            children: Ab("smpShop:columnItem")
          }), (0, vb.jsx)("span", {
            children: Ab("smpShop:columnPriceEach")
          }), (0, vb.jsx)("span", {
            children: Ab("smpShop:columnTotal")
          })]
        }), (0, vb.jsx)(LM.c, {
          lazyLoadedClassName: Tb ? "SmpCardGrid" : "SmpList",
          observerRoot: "SmpBody",
          rootMargin: bM,
          observerUpdateDeps: [ab.length],
          children: ab.map((bb => {
            var ab, Ub;
            let {
              key: Ab,
              item: Eb,
              meta: Yb
            } = bb;
            const Bb = Yb.quantity * Yb.pricePerItem;
            return (0, vb.jsx)(xM, {
              itemKey: Ab,
              item: Yb.item,
              title: Eb.customTitle,
              quantity: Yb.quantity,
              pricePerItem: Yb.pricePerItem,
              seller: Yb.seller,
              expiresAt: Yb.expiresAt,
              tier: null !== (ab = null === (Ub = Eb.enchant) || void 0 === Ub ? void 0 : Ub.tier) && void 0 !== ab ? ab : null,
              busy: Mb.isPending(Ab) || null !== Yb.seller && !1 === Eb.canBuy,
              canAfford: Mb.canAfford(Eb, Bb),
              grid: Tb,
              onBuy: Mb.act
            }, Ab)
          }))
        }, Ub)]
      })
    }
    const mM = [1, 10, 100],
      pM = [1, 10, 100, 999];

    function NM(bb) {
      var ab, Ub, Mb, Bb, eb, Lb, Pb, Xb, jb, Rb;
      const {
        t: yb
      } = (0, Eb.A)(), Zb = vM(), {
        creator: Db,
        mode: zb
      } = bb, [ib, fb] = (0, Ab.useState)(null !== (ab = null === Db || void 0 === Db ? void 0 : Db.meta.item) && void 0 !== ab ? ab : null), [mb, pb] = (0, Ab.useState)(1), [Nb, Wb] = (0, Ab.useState)(0), [Hb, Ib] = (0, Ab.useState)(""), [db, Fb] = (0, Ab.useState)(0), hb = (0, Ab.useRef)(ib), Gb = (0, Ab.useRef)(!1), [Qb, qb] = (0, Ab.useState)(!1), ub = null !== (Ub = null === Db || void 0 === Db ? void 0 : Db.meta.item) && void 0 !== Ub ? Ub : null, rb = null !== (Mb = null === Db || void 0 === Db ? void 0 : Db.meta.PY) && void 0 !== Mb ? Mb : 0;
      (0, Ab.useEffect)((() => {
        bb.searching || null === ub || ub === hb.current || (hb.current = ub, Gb.current = !1, fb(ub), Wb(0), pb("list" === zb ? Math.max(1, rb) : 1))
      }), [ub, bb.searching]);
      const Kb = !!Db && !!ib && Db.meta.item === ib,
        ob = Kb ? Db.meta.PY : null !== (Bb = null === (eb = bb.inventory) || void 0 === eb || null === (Lb = eb.find((bb => bb.item === ib))) || void 0 === Lb ? void 0 : Lb.quantity) && void 0 !== Bb ? Bb : 0,
        lb = "list" === zb ? Math.max(1, ob) : 45954,
        tb = null !== (Pb = bb.prices[0]) && void 0 !== Pb ? Pb : null,
        wb = bb.prices.length ? Math.round(bb.prices.reduce(((bb, ab) => bb + ab), 0) / bb.prices.length) : null,
        sb = null === (Xb = bb.inventory) || void 0 === Xb || null === (jb = Xb.find((bb => bb.item === ib))) || void 0 === jb ? void 0 : jb.sellPrice;
      (0, Ab.useEffect)((() => {
        var bb;
        Kb && (pb((bb => "list" === zb ? Math.min(Math.max(1, bb), Math.max(1, ob)) : bb)), Gb.current || Wb(null !== (bb = null !== tb && void 0 !== tb ? tb : wb) && void 0 !== bb ? bb : Math.max(1, null !== sb && void 0 !== sb ? sb : 1)))
      }), [Kb, ob, ib, tb, wb]);
      const gb = bb => {
          Gb.current = !0, Wb(bb)
        },
        Cb = ab => {
          var Ub, Ab, Mb;
          hb.current = ab, Gb.current = !1, qb(!1), Ib(""), Fb((bb => bb + 1)), fb(ab), Wb(0), pb("list" === zb && null !== (Ub = null === (Ab = bb.inventory) || void 0 === Ab || null === (Mb = Ab.find((bb => bb.item === ab))) || void 0 === Mb ? void 0 : Mb.quantity) && void 0 !== Ub ? Ub : 1), (null === Db || void 0 === Db ? void 0 : Db.meta.item) !== ab && bb.onPickItem(ab)
        },
        Vb = mb * Nb,
        Ob = "list" === zb && null !== Db && void 0 !== Db && Db.meta.fee ? function(bb, ab) {
          const Ub = Math.max(0, ab - bb.taxFreeAllowance);
          return Math.ceil(Math.round(Ub * bb.rate * 1e6) / 1e6)
        }(Db.meta.fee, Vb) : 0,
        cb = !!Db && Zb.isPending(Db.key),
        Jb = Kb && !bb.searching && mb >= 1 && Nb >= 1 && ("order" === zb || ob >= mb) && !cb,
        nb = !!ib && !Kb && !bb.searching && mb >= 1 && Nb >= 1,
        Sb = () => {
          Jb ? Zb.act(Db.key, `${mb}|${Nb}`) : nb && (bb.onPickItem(ib), qb(!0))
        };
      (0, Ab.useEffect)((() => {
        Qb && Kb && !bb.searching && (qb(!1), Sb())
      }), [Qb, Kb, bb.searching]);
      const ba = !!ib && !Kb && (bb.searching || Qb),
        aa = ib ? EM(bb.names, ib) : "",
        Ua = (0, Ab.useMemo)((() => TM(bb.catalogue, Hb).slice(0, 8)), [bb.catalogue, Hb]),
        Aa = ("list" === zb ? mM.filter((bb => bb < ob)) : pM).map((bb => ({
          value: bb,
          label: String(bb)
        })));
      "list" === zb && ob > 0 && Aa.push({
        value: ob,
        label: yb("smpShop:all", {
          count: ob
        })
      });
      const Ma = [];
      return null !== tb && (tb > 1 && Ma.push({
        value: tb - 1,
        label: yb("smpShop:undercut", {
          price: GA(tb - 1)
        })
      }), Ma.push({
        value: tb,
        label: yb("smpShop:lowest", {
          price: GA(tb)
        })
      })), null !== wb && wb !== tb && Ma.push({
        value: wb,
        label: yb("smpShop:average", {
          price: GA(wb)
        })
      }), (0, vb.jsxs)("div", {
        className: "SmpTradeForm",
        children: [(0, vb.jsxs)("div", {
          className: "SmpTradeFormHead",
          children: [(0, vb.jsx)("b", {
            children: yb("list" === zb ? "smpShop:sellOnMarket" : "smpShop:createOrder")
          }), (0, vb.jsx)("button", {
            type: "button",
            className: "SmpIconButton",
            "aria-label": yb("smpShop:close"),
            onClick: bb.onClose,
            children: (0, vb.jsx)(Yb.e, {
              name: "xmark"
            })
          })]
        }), "list" === zb && (0, vb.jsx)("div", {
          className: "SmpPicker",
          role: "listbox",
          children: null !== (Rb = bb.inventory) && void 0 !== Rb && Rb.length ? bb.inventory.map((bb => {
            let {
              item: ab,
              quantity: Ub
            } = bb;
            return (0, vb.jsx)("button", {
              type: "button",
              title: ab,
              className: Tb()("SmpPickerSlot", {
                SmpPickerSlotOn: ab === ib
              }),
              onClick: () => {
                Cb(ab)
              },
              children: (0, vb.jsx)(uA, {
                item: ab,
                amount: Ub
              })
            }, ab)
          })) : (0, vb.jsx)("span", {
            className: "SmpMuted",
            children: yb("smpShop:nothingToList")
          })
        }), ("list" === zb || !ib) && (0, vb.jsxs)("div", {
          className: "SmpItemSearch",
          children: [(0, vb.jsx)(xb.c, {
            className: "SmpSearchInput",
            placeholderText: yb("list" === zb ? "smpShop:listSearchPlaceholder" : "smpShop:orderSearchPlaceholder"),
            defaultValue: Hb,
            onValueChange: Ib,
            blurOnEnter: !0,
            onEnter: () => {
              Ua[0] && Cb(Ua[0].name)
            }
          }, db), Ua.length > 0 && (0, vb.jsx)("div", {
            className: "SmpPicker",
            children: Ua.map((bb => {
              let {
                name: ab
              } = bb;
              return (0, vb.jsx)("button", {
                type: "button",
                title: ab,
                className: Tb()("SmpPickerSlot", {
                  SmpPickerSlotOn: ab === ib
                }),
                onClick: () => {
                  Cb(ab)
                },
                children: (0, vb.jsx)(uA, {
                  item: ab
                })
              }, ab)
            }))
          })]
        }), ib && (0, vb.jsxs)(vb.Fragment, {
          children: [(0, vb.jsxs)("div", {
            className: "SmpPickedName",
            children: [aa, ba && (0, vb.jsx)(wA, {})]
          }), (0, vb.jsxs)("div", {
            className: "SmpFormGrid",
            children: [(0, vb.jsxs)("div", {
              className: "SmpField",
              children: [(0, vb.jsxs)("span", {
                children: [yb("smpShop:quantity"), "list" === zb && Kb && (0, vb.jsx)("small", {
                  children: yb("smpShop:youHave", {
                    count: ob
                  })
                })]
              }), (0, vb.jsx)(sA, {
                value: mb,
                onChange: pb,
                max: lb,
                label: yb("smpShop:quantity")
              }), (0, vb.jsx)(tA, {
                options: Aa,
                value: mb,
                onChange: pb,
                ariaLabel: yb("smpShop:quantity")
              })]
            }), (0, vb.jsxs)("div", {
              className: "SmpField",
              children: [(0, vb.jsx)("span", {
                children: yb("smpShop:pricePerItem")
              }), (0, vb.jsx)(sA, {
                value: Math.max(1, Nb),
                onChange: gb,
                max: 9999999,
                step: gA,
                label: yb("smpShop:pricePerItem")
              }), (0, vb.jsx)(tA, {
                options: Ma,
                value: Nb,
                onChange: gb,
                ariaLabel: yb("smpShop:pricePerItem")
              })]
            })]
          }), "list" === zb && (0, vb.jsxs)("div", {
            className: "SmpTradeSummary",
            children: [(0, vb.jsxs)("span", {
              children: [yb("smpShop:youGet"), " ", (0, vb.jsx)(rA, {
                amount: Math.max(0, Vb - Ob),
                exact: !0
              })]
            }), (0, vb.jsx)("small", {
              children: Ob > 0 ? yb("smpShop:listingFee", {
                fee: Ob.toLocaleString("en-US")
              }) : yb("smpShop:listingRules")
            })]
          }), (0, vb.jsx)(kb.s, {
            className: "SmpSubmit",
            disabled: !Jb && !nb && !cb,
            loading: cb || ba || Kb && bb.searching,
            onClick: Sb,
            children: "list" === zb ? yb("smpShop:listButton", {
              count: mb,
              item: aa
            }) : (0, vb.jsxs)(vb.Fragment, {
              children: [yb("smpShop:orderButton", {
                count: mb,
                item: aa
              }), " ", Nb >= 1 && (0, vb.jsx)(rA, {
                amount: Vb
              })]
            })
          })]
        })]
      })
    }

    function WM() {
      var bb;
      const {
        t: ab
      } = (0, Eb.A)(), Ub = vM(), Mb = null === (bb = Ub.shopInfo[Ub.categoryKey]) || void 0 === bb ? void 0 : bb.items, Tb = SA(Mb, "search"), Yb = SA(Mb, "creator"), Bb = nA(Mb, "enchantedCreator"), eb = nA(Mb, "listing"), Lb = SA(Mb, "empty"), Pb = jM(Tb, eb.length > 0 || null !== Lb), {
        searched: Xb,
        shown: jb,
        loading: Rb
      } = Pb, [yb, Zb] = (0, Ab.useState)(!1), [Db, zb] = function() {
        const [bb, ab] = (0, zM.b)("smpMarketView", "list");
        return ["grid" === bb ? "grid" : "list", ab]
      }(), xb = "grid" === Db, ib = (0, Ab.useMemo)((() => eb.filter((bb => {
        let {
          meta: ab
        } = bb;
        return null !== ab.seller && ab.item === Xb
      })).map((bb => {
        let {
          meta: ab
        } = bb;
        return ab.pricePerItem
      })).sort(((bb, ab) => bb - ab))), [eb, Xb]), fb = (0, Ab.useMemo)((() => {
        const bb = new Set(Pb.catalogue.map((bb => {
          let {
            name: ab
          } = bb;
          return ab
        })));
        return function(bb) {
          for (const ab in bb)
            if ("sell" === bb[ab].smp) return nA(bb[ab].items, "sell").filter((bb => {
              let {
                item: ab
              } = bb;
              return !ab.enchant
            })).map((bb => {
              let {
                meta: ab
              } = bb;
              return {
                item: ab.item,
                quantity: ab.quantity,
                sellPrice: ab.pricePerItem
              }
            }));
          return []
        }(Ub.shopInfo).filter((ab => {
          let {
            item: Ub
          } = ab;
          return bb.has(Ub)
        }))
      }), [Ub.shopInfo, Pb.catalogue]);
      return (0, vb.jsx)(ZM, {
        browser: Pb,
        className: "SmpMarketTab",
        recentLabel: ab("smpShop:recentlyListed"),
        action: (0, vb.jsx)(kb.s, {
          className: "SmpSellButton",
          onClick: () => {
            Zb((bb => !bb))
          },
          children: ab("smpShop:sell")
        }),
        above: yb && (0, vb.jsxs)(vb.Fragment, {
          children: [(0, vb.jsx)(NM, {
            mode: "list",
            creator: Yb,
            inventory: fb,
            catalogue: Pb.catalogue,
            names: Pb.names,
            searching: Rb,
            prices: ib,
            onPickItem: Pb.searchFor,
            onClose: () => {
              Zb(!1)
            }
          }), Bb.length > 0 && (0, vb.jsx)(HM, {
            entries: Bb
          })]
        }),
        listControls: (0, vb.jsx)(iM, {
          view: Db,
          onChange: zb
        }),
        summary: jb && (eb.length > 0 ? ab(1 === eb.length ? "smpShop:listingSummaryOne" : "smpShop:listingSummary", {
          count: eb.length,
          price: GA(DM(eb, "min"))
        }) : ab("smpShop:noOneSelling", {
          item: EM(Pb.names, jb)
        })),
        list: Rb ? (0, vb.jsx)(KA, {
          grid: xb
        }) : eb.length > 0 ? (0, vb.jsx)(fM, {
          entries: eb,
          view: Db
        }) : Lb ? (0, vb.jsx)(lA, {
          entry: Lb
        }) : (0, vb.jsx)(KA, {
          count: 3,
          grid: xb
        })
      })
    }

    function HM(bb) {
      let {
        entries: ab
      } = bb;
      const {
        t: Ub
      } = (0, Eb.A)(), Mb = vM(), [Tb, Yb] = (0, Ab.useState)({});
      return (0, vb.jsx)("div", {
        className: "SmpList",
        children: ab.map((bb => {
          var ab, Ab, Eb;
          let {
            key: Bb,
            item: eb,
            meta: Lb
          } = bb;
          const Pb = null !== (ab = Tb[Bb]) && void 0 !== ab ? ab : 1;
          return (0, vb.jsxs)("div", {
            className: "SmpRow",
            children: [(0, vb.jsx)(uA, {
              item: Lb.item,
              amount: Lb.quantity,
              tier: null !== (Ab = null === (Eb = eb.enchant) || void 0 === Eb ? void 0 : Eb.tier) && void 0 !== Ab ? Ab : null
            }), (0, vb.jsxs)("div", {
              className: "SmpRowText",
              children: [(0, vb.jsx)("b", {
                children: (0, vb.jsx)(pA.c, {
                  text: eb.customTitle
                })
              }), (0, vb.jsx)("small", {
                children: Ub("smpShop:enchantedListing")
              })]
            }), (0, vb.jsx)(sA, {
              value: Pb,
              onChange: bb => {
                Yb({
                  ...Tb,
                  [Bb]: bb
                })
              },
              max: 9999999,
              step: gA,
              label: Ub("smpShop:pricePerItem")
            }), (0, vb.jsxs)(kb.s, {
              loading: Mb.isPending(Bb),
              onClick: () => {
                Mb.act(Bb, String(Pb))
              },
              children: [Ub("smpShop:list"), " ", (0, vb.jsx)(rA, {
                amount: Pb
              })]
            })]
          }, Bb)
        }))
      })
    }
    const IM = (0, Ab.memo)((function(bb) {
      let {
        itemKey: ab,
        item: Ub,
        quantity: Ab,
        pricePerItem: Mb,
        tier: Eb,
        selected: Yb,
        onSelect: Bb
      } = bb;
      return (0, vb.jsxs)("button", {
        type: "button",
        className: Tb()("SmpInventorySlot", {
          SmpInventorySlotOn: Yb
        }),
        title: Ub,
        onClick: () => {
          Bb(ab)
        },
        children: [(0, vb.jsx)(uA, {
          item: Ub,
          amount: Ab,
          tier: Eb
        }), (0, vb.jsx)(rA, {
          amount: Mb
        })]
      })
    }));

    function dM() {
      var bb;
      const {
        t: ab
      } = (0, Eb.A)(), Ub = vM(), Mb = null === (bb = Ub.shopInfo[Ub.categoryKey]) || void 0 === bb ? void 0 : bb.items, Yb = nA(Mb, "sell"), Bb = SA(Mb, "empty"), [eb, Lb] = (0, Ab.useState)(null), [Pb, Xb] = (0, Ab.useState)({}), jb = Yb.find((bb => {
        let {
          key: ab
        } = bb;
        return ab === eb
      }));
      return 0 === Yb.length ? (0, vb.jsx)("div", {
        className: "SmpScreen",
        children: (0, vb.jsx)(oA, {
          title: Bb ? (0, vb.jsx)(pA.c, {
            text: Bb.item.customTitle
          }) : ab("smpShop:nothingToSell"),
          children: Bb && (0, vb.jsx)(pA.c, {
            text: Bb.item.description
          })
        })
      }) : (0, vb.jsxs)("div", {
        className: "SmpScreen SmpInstantSellTab",
        children: [(0, vb.jsx)("div", {
          className: "SmpInventoryGrid",
          children: Yb.map((bb => {
            var ab, Ub;
            let {
              key: Ab,
              item: Mb,
              meta: Tb
            } = bb;
            return (0, vb.jsx)(IM, {
              itemKey: Ab,
              item: Tb.item,
              quantity: Tb.quantity,
              pricePerItem: Tb.pricePerItem,
              tier: null !== (ab = null === (Ub = Mb.enchant) || void 0 === Ub ? void 0 : Ub.tier) && void 0 !== ab ? ab : null,
              selected: Ab === eb,
              onSelect: Lb
            }, Ab)
          }))
        }), (0, vb.jsx)("div", {
          className: Tb()("SmpSellBar", {
            SmpSellBarIdle: !jb
          }),
          children: jb ? (0, vb.jsx)(FM, {
            entry: jb,
            choice: YM(jb.item, Pb[jb.key]),
            onChoose: bb => {
              Xb({
                ...Pb,
                [jb.key]: bb
              })
            }
          }) : (0, vb.jsx)("span", {
            className: "SmpMuted",
            children: ab("smpShop:tapToSell")
          })
        })]
      })
    }

    function FM(bb) {
      var ab, Ub, Ab, Mb;
      let {
        entry: Tb,
        choice: Yb,
        onChoose: Bb
      } = bb;
      const {
        t: eb
      } = (0, Eb.A)(), Lb = vM(), {
        key: Pb,
        item: Xb,
        meta: jb
      } = Tb, Rb = AM("dropdown" === (null === (ab = Xb.userInput) || void 0 === ab ? void 0 : ab.type) ? Xb.userInput.dropdownOptions : []), yb = null === Yb ? 0 : -(0, xA.c)(Xb, Yb);
      return (0, vb.jsxs)(vb.Fragment, {
        children: [(0, vb.jsx)(uA, {
          item: jb.item,
          amount: jb.quantity,
          tier: null !== (Ub = null === (Ab = Xb.enchant) || void 0 === Ab ? void 0 : Ab.tier) && void 0 !== Ub ? Ub : null
        }), (0, vb.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, vb.jsx)("b", {
            children: (0, vb.jsx)(pA.c, {
              text: null !== (Mb = Xb.customTitle) && void 0 !== Mb ? Mb : jb.item
            })
          }), (0, vb.jsx)("small", {
            children: eb("smpShop:sellEach", {
              count: jb.quantity
            })
          })]
        }), (0, vb.jsx)(tA, {
          options: Rb.map((bb => {
            let {
              label: ab,
              quantity: Ub,
              isAll: Ab
            } = bb;
            return {
              value: ab,
              label: Ab ? eb("smpShop:all", {
                count: Ub
              }) : String(Ub)
            }
          })),
          value: Yb,
          onChange: Bb,
          ariaLabel: eb("smpShop:quantity")
        }), (0, vb.jsxs)(kb.s, {
          loading: Lb.isPending(Pb),
          disabled: null === Yb,
          onClick: () => {
            Lb.act(Pb, Yb)
          },
          children: [eb("smpShop:sellButton"), " ", (0, vb.jsx)(rA, {
            amount: yb
          })]
        })]
      })
    }

    function hM() {
      var bb;
      const {
        t: ab
      } = (0, Eb.A)(), Ub = vM(), Ab = null === (bb = Ub.shopInfo[Ub.categoryKey]) || void 0 === bb ? void 0 : bb.items, Mb = nA(Ab, "collect"), Tb = nA(Ab, "myListing"), Yb = (bb, ab) => Ub.isPending(bb) || !1 === ab.canBuy;
      return (0, vb.jsxs)("div", {
        className: "SmpScreen",
        children: [(0, vb.jsx)("h3", {
          className: "SmpSectionTitle",
          children: ab("smpShop:readyToCollect")
        }), Mb.length > 0 ? (0, vb.jsx)("div", {
          className: "SmpList",
          children: Mb.map((bb => {
            var Ab, Mb;
            let {
              key: Tb,
              item: Eb,
              meta: Bb
            } = bb;
            return (0, vb.jsxs)("div", {
              className: "SmpRow",
              children: [(0, vb.jsx)(uA, {
                item: "sold" === Bb.type ? "Gold Coin" : Bb.item,
                amount: "sold" === Bb.type ? 0 : Bb.quantity,
                tier: null !== (Ab = null === (Mb = Eb.enchant) || void 0 === Mb ? void 0 : Mb.tier) && void 0 !== Ab ? Ab : null
              }), (0, vb.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, vb.jsx)("b", {
                  children: (0, vb.jsx)(pA.c, {
                    text: Eb.customTitle
                  })
                }), (0, vb.jsx)("small", {
                  children: (0, vb.jsx)(pA.c, {
                    text: Eb.description
                  })
                })]
              }), (0, vb.jsx)(kb.m, {
                loading: Yb(Tb, Eb),
                onClick: () => {
                  Ub.act(Tb)
                },
                children: ab("smpShop:collect")
              })]
            }, Tb)
          }))
        }) : (0, vb.jsx)(oA, {
          title: ab("smpShop:nothingToCollect"),
          children: ab("smpShop:nothingToCollectHint")
        }), (0, vb.jsx)("h3", {
          className: "SmpSectionTitle",
          children: ab("smpShop:activeListings", {
            count: Tb.length
          })
        }), Tb.length > 0 ? (0, vb.jsx)("div", {
          className: "SmpList",
          children: Tb.map((bb => {
            var Ab, Mb;
            let {
              key: Tb,
              item: Eb,
              meta: Bb
            } = bb;
            return (0, vb.jsxs)("div", {
              className: "SmpRow",
              children: [(0, vb.jsx)(uA, {
                item: Bb.item,
                amount: Bb.quantity,
                tier: null !== (Ab = null === (Mb = Eb.enchant) || void 0 === Mb ? void 0 : Mb.tier) && void 0 !== Ab ? Ab : null
              }), (0, vb.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, vb.jsx)("b", {
                  children: (0, vb.jsx)(pA.c, {
                    text: Eb.customTitle
                  })
                }), (0, vb.jsx)("small", {
                  children: ab("smpShop:timeLeft", {
                    time: UM(Bb.expiresAt)
                  })
                })]
              }), (0, vb.jsxs)("div", {
                className: "SmpRowPrice",
                children: [(0, vb.jsx)(rA, {
                  amount: Bb.pricePerItem
                }), (0, vb.jsx)("small", {
                  children: ab("smpShop:each")
                })]
              }), (0, vb.jsx)(kb.D, {
                loading: Yb(Tb, Eb),
                onClick: () => {
                  Ub.act(Tb)
                },
                children: ab("smpShop:cancel")
              })]
            }, Tb)
          }))
        }) : (0, vb.jsx)(oA, {
          title: ab("smpShop:noActiveListings"),
          children: ab("smpShop:noActiveListingsHint")
        })]
      })
    }

    function GM(bb) {
      let {
        done: ab,
        of: Ub
      } = bb;
      return (0, vb.jsx)("span", {
        className: "SmpProgress",
        children: (0, vb.jsx)("i", {
          style: {
            width: `${Math.min(100,ab/Math.max(1,Ub)*100)}%`
          }
        })
      })
    }

    function QM(bb) {
      var ab, Ub, Ab;
      let {
        entry: Mb,
        choice: Tb,
        onChoose: Yb
      } = bb;
      const {
        t: Bb
      } = (0, Eb.A)(), eb = vM(), {
        key: Lb,
        item: Pb,
        meta: Xb
      } = Mb, jb = "dropdown" === (null === (ab = Pb.userInput) || void 0 === ab ? void 0 : ab.type) ? Pb.userInput.dropdownOptions : [], Rb = !0 === Xb.processing, yb = null !== Xb.creator && (Xb.PY > 0 || Rb), Zb = yb && Xb.PY > 0 ? AM(jb) : [], Db = null === Tb ? 0 : null !== (Ub = null === (Ab = Zb.find((bb => bb.label === Tb))) || void 0 === Ab ? void 0 : Ab.quantity) && void 0 !== Ub ? Ub : 0;
      return (0, vb.jsxs)("div", {
        className: "SmpRow SmpOrderRow",
        children: [(0, vb.jsx)(uA, {
          item: Xb.item
        }), (0, vb.jsxs)("div", {
          className: "SmpRowText",
          children: [(0, vb.jsx)("b", {
            children: (0, vb.jsx)(pA.c, {
              text: Pb.customTitle
            })
          }), (0, vb.jsxs)("small", {
            children: [(0, vb.jsx)(rA, {
              amount: Xb.pricePerItem
            }), " ", Bb("smpShop:each"), " \xb7", " ", null === Xb.creator ? Bb("smpShop:you") : (0, vb.jsx)(pA.c, {
              text: [{
                entityName: Xb.creator
              }]
            })]
          }), (0, vb.jsx)(GM, {
            done: Xb.delivered,
            of: Xb.wanted
          })]
        }), yb ? (0, vb.jsxs)(vb.Fragment, {
          children: [(0, vb.jsx)(tA, {
            options: Zb.map((bb => {
              let {
                label: ab,
                quantity: Ub,
                isAll: Ab
              } = bb;
              return {
                value: ab,
                label: Ab ? Bb("smpShop:max", {
                  count: Ub
                }) : String(Ub)
              }
            })),
            value: Tb,
            onChange: Yb,
            ariaLabel: Bb("smpShop:quantity")
          }), (0, vb.jsxs)(kb.s, {
            loading: eb.isPending(Lb) || Rb,
            disabled: null === Tb,
            onClick: () => {
              eb.act(Lb, Tb)
            },
            children: [Bb("smpShop:deliver"), " ", (0, vb.jsx)(rA, {
              amount: Db * Xb.pricePerItem
            })]
          })]
        }) : (0, vb.jsx)("span", {
          className: "SmpMuted SmpRowNote",
          children: null === Xb.creator ? Bb("smpShop:yourOrder") : Bb("smpShop:youHave", {
            count: 0
          })
        })]
      })
    }

    function qM() {
      var bb;
      const {
        t: ab
      } = (0, Eb.A)(), Ub = vM(), Mb = null === (bb = Ub.shopInfo[Ub.categoryKey]) || void 0 === bb ? void 0 : bb.items, Tb = SA(Mb, "search"), Yb = SA(Mb, "creator"), Bb = nA(Mb, "order"), eb = SA(Mb, "empty"), Lb = jM(Tb, Bb.length > 0 || null !== eb), [Pb, Xb] = (0, Ab.useState)(!1), [jb, Rb] = (0, Ab.useState)({});
      return (0, vb.jsx)(ZM, {
        browser: Lb,
        recentLabel: ab("smpShop:recentOrders"),
        action: (0, vb.jsx)(kb.s, {
          onClick: () => {
            Xb((bb => !bb))
          },
          children: ab("smpShop:createOrder")
        }),
        above: Pb && (0, vb.jsx)(NM, {
          mode: "order",
          creator: Yb,
          catalogue: Lb.catalogue,
          names: Lb.names,
          searching: Lb.loading,
          prices: [],
          onPickItem: Lb.searchFor,
          onClose: () => {
            Xb(!1)
          }
        }),
        onBack: () => {
          Xb(!1)
        },
        summary: Bb.length > 0 && ab(1 === Bb.length ? "smpShop:orderSummaryOne" : "smpShop:orderSummary", {
          count: Bb.length,
          price: GA(DM(Bb, "max"))
        }),
        list: Lb.loading ? (0, vb.jsx)(KA, {}) : Bb.length > 0 ? (0, vb.jsx)(LM.c, {
          lazyLoadedClassName: "SmpList",
          observerRoot: "SmpBody",
          rootMargin: bM,
          observerUpdateDeps: [Bb.length],
          children: Bb.map((bb => (0, vb.jsx)(QM, {
            entry: bb,
            choice: YM(bb.item, jb[bb.key]),
            onChoose: ab => {
              Rb({
                ...jb,
                [bb.key]: ab
              })
            }
          }, bb.key)))
        }) : eb ? (0, vb.jsx)(lA, {
          entry: eb
        }) : (0, vb.jsx)(KA, {
          count: 3
        })
      })
    }

    function uM() {
      var bb;
      const {
        t: ab
      } = (0, Eb.A)(), Ub = vM(), Ab = nA(null === (bb = Ub.shopInfo[Ub.categoryKey]) || void 0 === bb ? void 0 : bb.items, "myOrder");
      return 0 === Ab.length ? (0, vb.jsx)("div", {
        className: "SmpScreen",
        children: (0, vb.jsx)(oA, {
          title: ab("smpShop:noOrders"),
          children: ab("smpShop:noOrdersHint")
        })
      }) : (0, vb.jsx)("div", {
        className: "SmpScreen",
        children: (0, vb.jsx)("div", {
          className: "SmpList",
          children: Ab.map((bb => {
            let {
              key: Ab,
              item: Mb,
              meta: Tb
            } = bb;
            const Eb = Ub.isPending(Ab) || !1 === Mb.canBuy;
            return (0, vb.jsxs)("div", {
              className: "SmpRow",
              children: [(0, vb.jsx)(uA, {
                item: Tb.item,
                amount: Tb.collectable
              }), (0, vb.jsxs)("div", {
                className: "SmpRowText",
                children: [(0, vb.jsx)("b", {
                  children: (0, vb.jsx)(pA.c, {
                    text: Mb.customTitle
                  })
                }), (0, vb.jsxs)("small", {
                  children: [(0, vb.jsx)(rA, {
                    amount: Tb.pricePerItem
                  }), " ", ab("smpShop:each"), Tb.collectable > 0 && ` \xb7 ${ab("smpShop:readyCount",{count:Tb.collectable})}`]
                }), (0, vb.jsx)(GM, {
                  done: Tb.delivered,
                  of: Tb.wanted
                })]
              }), Tb.collectable > 0 ? (0, vb.jsx)(kb.m, {
                loading: Eb,
                onClick: () => {
                  Ub.act(Ab)
                },
                children: ab("smpShop:collectCount", {
                  count: Tb.collectable
                })
              }) : (0, vb.jsx)(kb.D, {
                loading: Eb,
                onClick: () => {
                  Ub.act(Ab)
                },
                children: ab("smpShop:cancel")
              })]
            }, Ab)
          }))
        })
      })
    }
    const rM = new Set(["search", "creator", "enchantedCreator", "collect", "myOrder", "order"]),
      KM = {
        sell: "coins",
        market: "store",
        collect: "backpack",
        orders: "file-clipboard",
        myOrders: "location-check"
      };

    function oM(bb, ab) {
      let Ub = !1;
      const Ab = {};
      for (const Mb in bb) ab(Mb, bb[Mb]) ? Ab[Mb] = bb[Mb] : Ub = !0;
      return Ub ? Ab : bb
    }

    function lM(bb) {
      var ab, Ub, Mb, Bb;
      const {
        show: eb,
        shopInfo: Lb,
        selectedCategoryKey: Pb
      } = bb, {
        t: Xb
      } = (0, Eb.A)(), jb = null !== Pb && void 0 !== Pb ? Pb : "", Rb = JA(Lb, jb), kb = null === (ab = Lb[jb]) || void 0 === ab ? void 0 : ab.items, yb = null !== Rb, [Zb, Db] = (0, Ab.useState)({}), [zb, xb] = (0, Ab.useState)([]), [ib, fb] = (0, Ab.useState)(!1), [mb, pb] = (0, Ab.useState)(null), [, Nb] = (0, Ab.useState)(0), Wb = (0, Ab.useRef)(0), Hb = (0, Ab.useRef)({}), Ib = (0, Ab.useRef)({
        items: kb,
        pending: Zb,
        shopInfo: Lb,
        active: yb,
        canAfford: bb.canAfford,
        buy: bb.buy
      });
      Ib.current = {
        items: kb,
        pending: Zb,
        shopInfo: Lb,
        active: yb,
        canAfford: bb.canAfford,
        buy: bb.buy
      };
      const db = (0, Ab.useCallback)((bb => {
        Wb.current++;
        const ab = Wb.current;
        xb((Ub => [{
          id: ab,
          text: bb
        }, ...Ub].slice(0, 8))), pb(ab)
      }), []);
      (0, Ab.useEffect)((() => {
        if (null === mb) return;
        const bb = setTimeout((() => {
          pb(null)
        }), 3e3);
        return () => {
          clearTimeout(bb)
        }
      }), [mb]), (0, Ab.useEffect)((() => {
        const ab = bb.message;
        if (!ab) return;
        const {
          shopInfo: Ub,
          active: Ab,
          items: Mb
        } = Ib.current, Tb = null !== ab.categoryKey ? null !== JA(Ub, ab.categoryKey) : Ab;
        (Tb || Ab) && db(ab.text), Tb && Db((bb => oM(bb, (bb => {
          var ab, Ub;
          return !rM.has(null === Mb || void 0 === Mb || null === (ab = Mb[bb]) || void 0 === ab || null === (Ub = ab.smp) || void 0 === Ub ? void 0 : Ub.kind)
        }))))
      }), [bb.message, db]), (0, Ab.useEffect)((() => {
        Db((bb => oM(bb, ((bb, ab) => BM(null === kb || void 0 === kb ? void 0 : kb[bb]) === ab.snapshot))))
      }), [Lb, kb]);
      const Fb = Object.keys(Zb).length > 0;
      (0, Ab.useEffect)((() => {
        if (!Fb) return;
        const bb = setInterval((() => {
          Nb((bb => bb + 1));
          const bb = Date.now(),
            {
              pending: ab,
              items: Ub
            } = Ib.current,
            Ab = Object.keys(ab).filter((Ub => bb - ab[Ub].at >= 12e3));
          if (0 === Ab.length) return;
          const Mb = Ab.some((bb => {
            var Ab, Mb;
            return "search" !== (null === Ub || void 0 === Ub || null === (Ab = Ub[bb]) || void 0 === Ab || null === (Mb = Ab.smp) || void 0 === Mb ? void 0 : Mb.kind) || ab[bb].resend
          }));
          for (const Tb of Ab) Hb.current[Tb] = bb;
          Db((bb => oM(bb, (bb => !Ab.includes(bb))))), Mb && db(Xb("smpShop:noAnswer"))
        }), 500);
        return () => {
          clearInterval(bb)
        }
      }), [Fb]), (0, Ab.useEffect)((() => {
        Db({})
      }), [jb]), (0, Ab.useEffect)((() => {
        eb || fb(!1)
      }), [eb]);
      const hb = (0, Ab.useCallback)((function(bb, ab) {
          let Ub = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const {
            items: Ab,
            pending: Mb,
            canAfford: Tb,
            buy: Eb
          } = Ib.current, Yb = null === Ab || void 0 === Ab ? void 0 : Ab[bb];
          if (!Yb || bb in Mb || !1 === Yb.canBuy) return !1;
          if (!Tb(Yb, (0, xA.c)(Yb, ab))) return !1;
          Eb(bb, Yb, ab);
          const Bb = {
            snapshot: BM(Yb),
            at: Date.now(),
            resend: Ub
          };
          return Ib.current.pending = {
            ...Ib.current.pending,
            [bb]: Bb
          }, Db((ab => ({
            ...ab,
            [bb]: Bb
          }))), !0
        }), []),
        Gb = (0, Ab.useMemo)((() => ({
          shopInfo: Lb,
          categoryKey: jb,
          canAfford: bb.canAfford,
          isPending: bb => bb in Zb,
          gaveUpAt: bb => {
            var ab;
            return null !== (ab = Hb.current[bb]) && void 0 !== ab ? ab : 0
          },
          act: hb,
          notify: db
        })), [Lb, jb, bb.canAfford, Zb, hb, db]),
        Qb = Math.min(...Object.values(Zb).map((bb => bb.at))),
        qb = Fb && Date.now() - Qb > 1500,
        ub = zb.length > 1,
        rb = null !== (Ub = null === (Mb = Lb[jb]) || void 0 === Mb ? void 0 : Mb.customTitle) && void 0 !== Ub ? Ub : jb,
        Kb = null === (Bb = Lb[jb]) || void 0 === Bb ? void 0 : Bb.description;
      let ob = null;
      return "market" === Rb ? ob = (0, vb.jsx)(WM, {}) : "sell" === Rb ? ob = (0, vb.jsx)(dM, {}) : "collect" === Rb ? ob = (0, vb.jsx)(hM, {}) : "orders" === Rb ? ob = (0, vb.jsx)(qM, {}) : "myOrders" === Rb && (ob = (0, vb.jsx)(uM, {})), (0, vb.jsx)(eM.Provider, {
        value: Gb,
        children: (0, vb.jsx)("div", {
          className: "SmpShopHost",
          hidden: !yb,
          children: (0, vb.jsxs)("div", {
            className: "SmpShop",
            children: [(0, vb.jsx)("header", {
              className: "SmpHeader",
              children: (0, vb.jsxs)("div", {
                className: "SmpHeaderTitle",
                children: [(0, vb.jsxs)("h2", {
                  children: [Rb && (0, vb.jsx)(Yb.e, {
                    name: KM[Rb]
                  }), Xb(rb)]
                }), Kb && (0, vb.jsx)("p", {
                  children: (0, vb.jsx)(pA.c, {
                    text: Kb
                  })
                })]
              })
            }), (0, vb.jsx)("main", {
              className: "SmpBody",
              "data-pad-initial-area": !0,
              children: eb && ob
            }), (0, vb.jsxs)("button", {
              type: "button",
              className: Tb()("SmpStatus", {
                SmpStatusWaiting: Fb,
                SmpStatusFresh: !Fb && null !== mb,
                SmpStatusHasHistory: ub
              }),
              "aria-live": "polite",
              "aria-expanded": ub ? ib : void 0,
              onClick: () => {
                ub && fb((bb => !bb))
              },
              children: [Fb ? (0, vb.jsxs)("span", {
                className: "SmpStatusText",
                children: [(0, vb.jsx)(wA, {}), Xb(qb ? "smpShop:slowConnection" : "smpShop:waiting")]
              }) : zb[0] ? (0, vb.jsx)("span", {
                className: "SmpStatusText",
                children: (0, vb.jsx)(pA.c, {
                  text: zb[0].text
                })
              }, zb[0].id) : (0, vb.jsx)("span", {
                className: "SmpStatusText SmpMuted",
                children: Xb("smpShop:ready")
              }), ub && (0, vb.jsx)("small", {
                children: Xb("smpShop:recentMessages", {
                  count: zb.length
                })
              })]
            }), ib && ub && (0, vb.jsx)("div", {
              className: "SmpStatusHistory",
              children: zb.map((bb => (0, vb.jsx)("div", {
                children: (0, vb.jsx)(pA.c, {
                  text: bb.text
                })
              }, bb.id)))
            })]
          })
        })
      })
    }
    class tM {
      constructor(bb) {
        this.info = bb
      }
      static fromShopInfo(bb) {
        const ab = {};
        for (const Ub in bb) {
          const Ab = !0 === bb[Ub].redDot && !0 !== bb[Ub].forceRemoveRedDot;
          ab[Ub] = {
            redDot: Ab,
            items: {}
          };
          for (const Mb in bb[Ub].items) {
            const Ab = bb[Ub].items[Mb],
              Tb = !0 === Ab.redDot && !0 !== Ab.forceRemoveRedDot;
            ab[Ub].items[Mb] = {
              redDot: Tb
            }
          }
        }
        return new tM(ab)
      }
      anyCategoryHasRedDots() {
        for (const bb in this.info)
          if (this.categoryHasRedDot(bb)) return !0;
        return !1
      }
      doesCategoryExist(bb) {
        return !(0, ta.I)(this.info[bb])
      }
      categoryHasRedDot(bb) {
        return !0 === this.info[bb].redDot
      }
      updateCategoryRedDot(bb, ab) {
        this.info[bb].redDot = ab
      }
      doesItemExist(bb, ab) {
        return this.doesCategoryExist(bb) && !(0, ta.I)(this.info[bb].items[ab])
      }
      itemHasRedDot(bb, ab) {
        return !0 === this.info[bb].items[ab].redDot
      }
      updateItemRedDot(bb, ab, Ub) {
        this.info[bb].items[ab].redDot = Ub
      }
      shallowCopy() {
        return new tM(this.info)
      }
    }

    function wM(bb, ab) {
      return `${bb}\x1f${ab}`
    }

    function sM(bb, ab) {
      return !(0, ta.I)(ab) && !(0, ta.I)(bb) && ab in bb
    }
    const gM = (0, Ab.memo)((function(bb) {
      var ab, Ub;
      let {
        show: Mb
      } = bb;
      const Eb = (0, cU.g)("players", nM),
        Yb = (0, cU.g)("players", SM),
        [eb, Pb] = (0, Ab.useState)({
          shopInfo: {},
          userInputsPerItem: {},
          redDotInfo: tM.fromShopInfo({}),
          currencyAmounts: {},
          selectedCategoryKey: null,
          onBoughtInfo: null,
          awaitingPurchase: !1
        }),
        Xb = (0, Ab.useRef)(""),
        Rb = (0, Ab.useRef)(null),
        yb = (0, Ab.useRef)(null),
        Db = (0, Ab.useRef)(0),
        zb = (0, Ab.useRef)(void 0),
        xb = (0, Ab.useRef)(null),
        ib = (0, Ab.useRef)(eb),
        fb = eb.redDotInfo.anyCategoryHasRedDots(),
        [pb, Nb] = (0, Ab.useState)(null),
        Hb = (0, Ab.useRef)(!1);
      let Ib = !1,
        db = 0,
        Fb = 0;
      if (eb.currencyAmounts) {
        for (const bb in eb.currencyAmounts) {
          var hb;
          const ab = eb.currencyAmounts[bb];
          ab.hidden || (db++, (null === (hb = ab.subtext) || void 0 === hb ? void 0 : hb.length) > 0 && Fb++)
        }
        Ib = db + Fb > 4
      }(0, Ab.useEffect)((() => {
        wa.m.IR("showShopIconRedDot", fb, !0)
      }), [fb]), (0, Ab.useEffect)((() => {
        Zb.gameBridge.send("setShopOpen", Mb), Mb || (clearTimeout(zb.current), Pb((bb => bb.awaitingPurchase ? {
          ...bb,
          awaitingPurchase: !1
        } : bb)))
      }), [Mb]), (0, Ab.useEffect)((() => () => {
        Zb.gameBridge.send("setShopOpen", !1), clearTimeout(zb.current)
      }), []), (0, Ab.useEffect)((() => {
        ib.current = eb
      }), [eb]), (0, Ab.useEffect)((() => {
        if (null === pb) return;
        return (0, IA.e)("pointerdown", (bb => {
          const ab = bb.target;
          null !== ab && void 0 !== ab && ab.closest(".ShopItem") || Nb(null)
        }))
      }), [pb]);
      const Gb = bb => {
          Pb((ab => ({
            ...ab,
            ...bb
          })))
        },
        Qb = bb => {
          var ab;
          clearTimeout(null === (ab = eb.onBoughtInfo) || void 0 === ab ? void 0 : ab.timeout);
          const Ub = setTimeout((() => {
            Gb({
              onBoughtInfo: null
            })
          }), 3e3);
          Xb.current = bb, Gb({
            onBoughtInfo: {
              text: bb,
              timeout: Ub,
              categoryKey: Rb.current
            }
          })
        },
        qb = bb => {
          const {
            shopInfo: ab,
            userInputsPerItem: Ub,
            redDotInfo: Ab,
            autoSelectCategory: Tb
          } = function(bb, ab, Ub, Ab, Mb, Tb) {
            if ((0, ta.I)(bb) || 0 === Object.keys(bb).length) return {
              shopInfo: {},
              userInputsPerItem: {},
              redDotInfo: tM.fromShopInfo({}),
              autoSelectCategory: null
            };
            const Eb = Wb.l[Wb.p].adConfig.showRewardedAds,
              Yb = {};
            let Bb = null;
            for (const kb in bb) {
              const ab = bb[kb],
                Ub = {};
              let Ab = !1;
              for (const bb in ab.items) {
                const Mb = ab.items[bb];
                (0, xA.n)(Mb, Eb) && (Ub[bb] = Mb, Ab = !0)
              }
              Ab && (Yb[kb] = {
                ...ab,
                items: Ub
              }, !0 === ab.autoSelectCategory && (Bb = kb))
            }
            const eb = {},
              vb = (bb, ab, Ab, Eb) => {
                var Yb, Bb;
                const vb = wM(bb, ab),
                  Lb = null !== (Yb = Ub[vb]) && void 0 !== Yb ? Yb : Ub[ab];
                if (null !== (Bb = Eb.userInput) && void 0 !== Bb && Bb.type) switch (Eb.userInput.type) {
                  case "dropdown": {
                    var Pb;
                    const bb = !Lb || !Eb.userInput.dropdownOptions.some((bb => (0, xA.g)(bb) === Lb)),
                      ab = Eb.userInput.shouldResetSelectionOnOptionsChange && ("dropdown" !== (null === Ab || void 0 === Ab || null === (Pb = Ab.userInput) || void 0 === Pb ? void 0 : Pb.type) || JSON.stringify(Ab.userInput.dropdownOptions) !== JSON.stringify(Eb.userInput.dropdownOptions)),
                      Ub = Eb.userInput,
                      Mb = !(0, ta.I)(Ub.initialValue) && Ub.dropdownOptions.some((bb => (0, xA.g)(bb) === Ub.initialValue));
                    var Xb;
                    return void(bb || ab ? Mb ? eb[vb] = null !== (Xb = Eb.userInput.initialValue) && void 0 !== Xb ? Xb : null : Eb.userInput.dropdownOptions.length > 0 ? eb[vb] = (0, xA.g)(Eb.userInput.dropdownOptions[0]) : eb[vb] = null : eb[vb] = Lb)
                  }
                  case "text":
                  case "number":
                    var jb, Rb, kb;
                    return void((null === Ab || void 0 === Ab ? void 0 : Ab.userInput) !== Eb.userInput ? eb[vb] = null !== (jb = null !== (Rb = Eb.userInput.initialValue) && void 0 !== Rb ? Rb : Lb) && void 0 !== jb ? jb : "" : eb[vb] = null !== (kb = null !== Lb && void 0 !== Lb ? Lb : Eb.userInput.initialValue) && void 0 !== kb ? kb : "");
                  case "color":
                    var yb, Zb, Db;
                    return void((null === Ab || void 0 === Ab ? void 0 : Ab.userInput) !== Eb.userInput ? eb[vb] = null !== (yb = null !== (Zb = Eb.userInput.initialValue) && void 0 !== Zb ? Zb : Lb) && void 0 !== yb ? yb : "#000000" : eb[vb] = null !== (Db = null !== Lb && void 0 !== Lb ? Lb : Eb.userInput.initialValue) && void 0 !== Db ? Db : "#000000");
                  case "player": {
                    const bb = (0, xA.j)(Mb, Tb, Eb.userInput);
                    return void(Lb && bb.includes(Lb) ? eb[vb] = Lb : eb[vb] = bb.length > 0 ? bb[0] : null)
                  }
                }
              };
            for (const kb in Yb)
              for (const bb in Yb[kb].items) {
                var Lb;
                const Ub = Yb[kb].items[bb];
                vb(kb, bb, null === (Lb = ab[kb]) || void 0 === Lb ? void 0 : Lb.items[bb], Ub)
              }
            const Pb = tM.fromShopInfo(Yb);
            for (const kb in Yb) {
              var Xb;
              if (Ab.doesCategoryExist(kb)) {
                (null === (Xb = ab[kb]) || void 0 === Xb ? void 0 : Xb.redDot) === Yb[kb].redDot && Pb.updateCategoryRedDot(kb, Ab.categoryHasRedDot(kb));
                for (const bb in Yb[kb].items) {
                  var jb, Rb;
                  Ab.doesItemExist(kb, bb) && (null === (jb = ab[kb]) || void 0 === jb || null === (Rb = jb.items[bb]) || void 0 === Rb ? void 0 : Rb.redDot) === Yb[kb].items[bb].redDot && Pb.updateItemRedDot(kb, bb, Ab.itemHasRedDot(kb, bb))
                }
              }
            }
            return {
              shopInfo: Yb,
              userInputsPerItem: eb,
              redDotInfo: Pb,
              autoSelectCategory: Bb
            }
          }(bb, eb.shopInfo, eb.userInputsPerItem, eb.redDotInfo, Eb, Yb), Bb = {
            shopInfo: ab,
            userInputsPerItem: Ub,
            redDotInfo: Ab
          };
          if (null === Tb || Mb)
            if (ab[eb.selectedCategoryKey]) Bb.selectedCategoryKey = eb.selectedCategoryKey;
            else {
              const bb = FA(ab);
              Bb.selectedCategoryKey = bb.length > 0 ? bb[0] : null
            }
          else Bb.selectedCategoryKey = Tb;
          return 0 === Object.keys(ab).length && Mb && mb.c.set({
            openEverythingMenuName: null
          }), Bb
        },
        ub = (bb, ab, Ub) => {
          const Ab = eb.selectedCategoryKey,
            Mb = wM(Ab, bb),
            Tb = null !== Ub && void 0 !== Ub ? Ub : eb.userInputsPerItem[Mb],
            Eb = {
              categoryKey: Ab,
              itemKey: bb,
              userInput: Tb
            };
          if (Rb.current = Ab, ab.isRewardedAd) {
            if (Date.now() - Db.current < 5e3) return;
            (0, Ta.Z)((() => {
              var Ub, Ab, Tb;
              console.log("bought rewarded ad");
              const Yb = Eb.categoryKey ? null === (Ub = ib.current.shopInfo[Eb.categoryKey]) || void 0 === Ub ? void 0 : Ub.items[bb] : null;
              if (!Yb || !Yb.isRewardedAd) return void console.warn("Shop item no longer valid or a rewarded ad, early out");
              (null === (Ab = ab.userInput) || void 0 === Ab ? void 0 : Ab.type) === (null === Yb || void 0 === Yb || null === (Tb = Yb.userInput) || void 0 === Tb ? void 0 : Tb.type) ? (Eb.userInput = ib.current.userInputsPerItem[Mb], Zb.gameBridge.send("buyShopItem", Eb), ab.onBoughtMessage && Qb(ab.onBoughtMessage)) : console.warn("Shop item input type changed, early out")
            })), Db.current = Date.now()
          } else {
            Zb.gameBridge.send("buyShopItem", Eb), Gb({
              awaitingPurchase: !0
            }), clearTimeout(zb.current), zb.current = setTimeout((() => {
              xb.current = null, Gb({
                awaitingPurchase: !1
              })
            }), 1e3);
            const bb = (0, xA.c)(ab, Tb);
            if (xb.current = null, !isNaN(bb) && sM(eb.currencyAmounts, ab.currency)) {
              0 !== bb && (xb.current = {
                currency: ab.currency,
                amountBefore: eb.currencyAmounts[ab.currency].amount
              });
              const Ub = {
                ...eb.currencyAmounts
              };
              Ub[ab.currency].amount -= bb, Gb({
                currencyAmounts: Ub
              })
            }
            ab.onBoughtMessage && Qb(ab.onBoughtMessage)
          }
        },
        Kb = (bb, ab) => {
          if (null === ab || !bb.shopInfo[ab]) return bb;
          let Ub = bb.redDotInfo;
          return Ub.categoryHasRedDot(ab) && (Ub.updateCategoryRedDot(ab, !1), Ub = Ub.shallowCopy()), {
            ...bb,
            selectedCategoryKey: ab,
            redDotInfo: Ub
          }
        },
        ob = bb => {
          Pb((ab => Kb(ab, bb)))
        };
      (0, Wa.f)(dA.m, (() => {
        Pb((bb => {
          const ab = (0, dA.q)(FA(bb.shopInfo), bb.selectedCategoryKey, (ab => (0, dA.i)(bb.shopInfo[ab].items)));
          return ab === bb.selectedCategoryKey ? bb : Kb(bb, ab)
        }))
      })), (0, Wa.f)("showShopFromServer", (bb => {
        let {
          toggle: ab,
          Da: Ub
        } = bb;
        Ub && ob(Ub), 0 === Object.keys(eb.shopInfo).length || ab && Mb ? mb.c.set({
          openEverythingMenuName: null
        }) : mb.c.set({
          openEverythingMenuName: ea.j.SHOP
        })
      })), (0, Wa.f)("closeShopOnDamaged", (() => {
        Mb && mb.c.set({
          openEverythingMenuName: null
        })
      })), (0, Wa.f)("overShopInfo", (bb => {
        Qb(bb)
      })), (0, jb.f)("currencyAmounts", (bb => {
        var ab;
        const Ub = xb.current;
        Ub && (null === bb || void 0 === bb || null === (ab = bb[Ub.currency]) || void 0 === ab ? void 0 : ab.amount) === Ub.amountBefore ? Gb({
          currencyAmounts: bb
        }) : (xb.current = null, Gb({
          currencyAmounts: bb,
          awaitingPurchase: !1
        }))
      })), (0, jb.f)("shopInfo", (bb => {
        Gb({
          ...qb(bb),
          awaitingPurchase: !1
        })
      }));
      const lb = (0, Ab.useRef)({
        playerIds: Eb,
        localPlayerId: Yb
      });
      (0, Ab.useEffect)((() => {
        lb.current.playerIds === Eb && lb.current.localPlayerId === Yb || (lb.current = {
          playerIds: Eb,
          localPlayerId: Yb
        }, Pb((bb => {
          const ab = qb(bb.shopInfo);
          return {
            ...bb,
            ...ab
          }
        })))
      }), [Eb, Yb]);
      const tb = eb.selectedCategoryKey,
        wb = (bb, ab) => {
          var Ub, Ab;
          return (isNaN(ab) || (0, ta.I)(bb.currency) || sM(eb.currencyAmounts, bb.currency) && ab <= eb.currencyAmounts[bb.currency].amount) && (null === (Ub = bb.canBuy) || void 0 === Ub || Ub) && !(null !== (Ab = bb.hidden) && void 0 !== Ab && Ab)
        },
        sb = (bb, ab) => {
          var Ub, Ab, Mb;
          const Eb = wM(tb, bb),
            Yb = eb.shopInfo[tb].items[bb],
            Lb = eb.userInputsPerItem[Eb],
            Pb = (0, xA.c)(Yb, Lb),
            Xb = wb(Yb, Pb),
            jb = Yb.enchant,
            Rb = jb ? (0, rb.kb)(null !== (Ub = Yb.customTitle) && void 0 !== Ub ? Ub : bb, {
              colour: rb.fb[jb.tier]
            }) : null !== (Ab = Yb.customTitle) && void 0 !== Ab ? Ab : bb,
            yb = ab => {
              const Ub = null !== ab && void 0 !== ab ? ab : Lb,
                Ab = void 0 !== ab ? (0, xA.c)(Yb, ab) : Pb;
              wb(Yb, Ab) && null !== Ub && ub(bb, Yb, ab);
              let Mb = eb.redDotInfo;
              Mb.itemHasRedDot(tb, bb) && (Mb.updateItemRedDot(tb, bb, !1), Mb = Mb.shallowCopy()), Gb({
                redDotInfo: Mb
              })
            };
          return (0, vb.jsxs)("div", {
            className: Tb()("ShopItem", {
              ShopItemNoInput: !Yb.userInput,
              ShopItemNoInputCanBuy: !Yb.userInput && Xb,
              ShopItemNoInputSelected: Yb.isSelected,
              ShopItemEnchant: !!jb
            }),
            "data-pad-focusable": !Yb.userInput || void 0,
            "data-pad-unavailable": !Yb.userInput && !Xb || void 0,
            "data-pad-repeat": null !== (Mb = (0, dA.b)(Yb)) && void 0 !== Mb ? Mb : void 0,
            "data-pad-repeat-wait": eb.awaitingPurchase || void 0,
            onClick: () => {
              if (jb && Hb.current) {
                if (pb !== Eb) return void Nb(Eb);
                Nb(null)
              }
              Yb.userInput || yb()
            },
            onPointerDown: bb => {
              jb && (Hb.current = (0, fA.r)(bb))
            },
            onPointerEnter: bb => {
              jb && !(0, fA.r)(bb) && Nb(Eb)
            },
            onPointerLeave: bb => {
              jb && !(0, fA.r)(bb) && Nb((bb => bb === Eb ? null : bb))
            },
            style: {
              zIndex: Object.keys(eb.shopInfo[tb].items).length - ab
            },
            children: [eb.redDotInfo.itemHasRedDot(tb, bb) && (0, vb.jsx)(Bb.d, {
              top: "-6px",
              right: "-6px"
            }), Yb.badge && (0, vb.jsx)("div", {
              className: "ShopBadgeContainer",
              children: (0, vb.jsx)("div", {
                className: Tb()("ShopBadgeMain", Yb.badge.type),
                children: (0, vb.jsx)(pA.c, {
                  text: Yb.badge.text
                })
              })
            }), (0, vb.jsx)("div", {
              className: "ShopItemLeft",
              children: Yb.image && (0, vb.jsx)(CM, {
                item: Yb,
                minWidth: 5,
                minHeight: 4.8
              })
            }), (0, vb.jsxs)("div", {
              className: "ShopItemRight",
              children: [(0, vb.jsxs)("div", {
                className: "ShopItemHeader",
                children: [(0, vb.jsx)("div", {
                  className: "ShopItemHeaderTitle",
                  children: (0, vb.jsx)(pA.c, {
                    text: Rb
                  })
                }), (0, vb.jsx)("div", {
                  className: "ShopItemHeaderDescription",
                  children: (0, vb.jsx)(pA.c, {
                    text: Yb.description
                  })
                })]
              }), Yb.userInput && (0, vb.jsxs)("div", {
                className: "ShopItemInputsContainer",
                onClick: bb => {
                  bb.stopPropagation()
                },
                children: [(0, vb.jsx)(cM, {
                  item: Yb,
                  currInput: Lb,
                  updateInput: ab => {
                    ((bb, ab, Ub) => {
                      const Ab = wM(bb, ab),
                        Mb = {
                          ...eb.userInputsPerItem
                        };
                      Mb[Ab] = Ub, Gb({
                        userInputsPerItem: Mb
                      })
                    })(tb, bb, ab)
                  },
                  onSubmit: bb => {
                    yb(bb)
                  }
                }), ("dropdown" !== Yb.userInput.type || !Yb.userInput.autoSubmit) && (0, vb.jsx)(kb.g, {
                  className: "ItemCostButton",
                  disabled: !Xb && null !== Lb,
                  onClick: () => {
                    yb()
                  },
                  children: (0, vb.jsx)(OM, {
                    item: Yb,
                    cost: Pb,
                    currencyAmounts: eb.currencyAmounts
                  })
                })]
              })]
            }), !Yb.userInput && (0, vb.jsx)("div", {
              className: "ShopItemNoInputCost",
              children: (0, vb.jsx)(OM, {
                item: Yb,
                cost: Pb,
                currencyAmounts: eb.currencyAmounts
              })
            }), jb && pb === Eb && (0, vb.jsxs)("div", {
              className: "ShopItemEnchantInfo SmallTextBold",
              children: [(0, vb.jsx)(pA.c, {
                text: Rb
              }), (0, vb.jsx)("div", {
                className: "ShopItemEnchantInfoDescription",
                children: (0, vb.jsx)(pA.c, {
                  text: (0, iA.b)("", jb.enchantments, jb.enchantmentData)
                })
              })]
            })]
          }, Eb)
        },
        gb = function(bb) {
          for (const ab in bb)
            if (bb[ab].smp) return !0;
          return !1
        }(eb.shopInfo),
        Cb = JA(eb.shopInfo, tb);
      return (0, vb.jsx)(ZA.d, {
        className: "Menu ShopBody",
        show: Mb,
        children: 0 !== Object.keys(eb.shopInfo).length && (0, vb.jsxs)(vb.Fragment, {
          children: [(0, vb.jsxs)("div", {
            className: "MenuSideBar",
            children: [(0, vb.jsx)(Lb, {
              items: FA(eb.shopInfo).map((bb => {
                var ab;
                return {
                  id: bb,
                  title: null !== (ab = eb.shopInfo[bb].customTitle) && void 0 !== ab ? ab : bb,
                  redDot: eb.redDotInfo.categoryHasRedDot(bb)
                }
              })),
              selectedItemId: tb,
              onClick: ob,
              padStartsOnTab: (0, dA.f)(tb)
            }), (0, vb.jsx)("div", {
              className: "MenuSideBarFooter",
              children: eb.currencyAmounts && Object.keys(eb.currencyAmounts).map((bb => {
                var ab;
                const Ub = eb.currencyAmounts[bb];
                return Ub.hidden ? null : (0, vb.jsxs)("div", {
                  className: "ShopCurrencyDiv " + (Ib ? "SmallText" : ""),
                  children: [(0, vb.jsxs)("div", {
                    className: "ShopCurrencyDetails",
                    children: [(0, vb.jsx)("div", {
                      className: "ShopCurrencyAmtIcon",
                      style: {
                        color: Ub.iconColour
                      },
                      children: (0, vb.jsx)(bT, {
                        iconName: Ub.icon
                      })
                    }), "\xa0", (0, zA.d)(Ub.amount, 6)]
                  }), (null === (ab = Ub.subtext) || void 0 === ab ? void 0 : ab.length) > 0 && (0, vb.jsx)("div", {
                    className: "ShopCurrencySubtext",
                    children: (0, vb.jsx)(pA.c, {
                      text: Ub.subtext
                    })
                  })]
                }, bb)
              }))
            })]
          }), (0, vb.jsxs)("div", {
            className: "MenuBody ShopMenuBody",
            children: [gb && (0, vb.jsx)(lM, {
              show: Mb,
              shopInfo: eb.shopInfo,
              selectedCategoryKey: tb,
              buy: (bb, ab, Ub) => {
                ub(bb, ab, Ub)
              },
              canAfford: wb,
              message: eb.onBoughtInfo
            }), null === Cb && (0, vb.jsxs)(vb.Fragment, {
              children: [(0, vb.jsx)("div", {
                className: Tb()("ShopOnBoughtInfo", {
                  ShopOnBoughtInfoShow: null !== eb.onBoughtInfo
                }),
                children: (0, vb.jsx)(pA.c, {
                  text: Xb.current
                })
              }), (0, vb.jsx)("div", {
                className: "ShopItemsWrapper",
                children: (0, vb.jsxs)("div", {
                  className: "ShopItemsInner",
                  children: [(null === (ab = eb.shopInfo[tb]) || void 0 === ab ? void 0 : ab.description) && (0, vb.jsx)("div", {
                    className: "ShopCategoryDescription",
                    children: (0, vb.jsx)(pA.c, {
                      text: eb.shopInfo[tb].description
                    })
                  }), Mb && (0, vb.jsx)("div", {
                    className: "ShopItems",
                    ref: yb,
                    "data-pad-initial-area": !0,
                    children: FA(null === (Ub = eb.shopInfo[tb]) || void 0 === Ub ? void 0 : Ub.items).map(((bb, ab) => sb(bb, ab)))
                  })]
                })
              })]
            })]
          })]
        })
      })
    }));

    function CM(bb) {
      let {
        item: ab,
        minWidth: Ub,
        minHeight: Ab
      } = bb;
      const {
        image: Mb,
        schematicId: Tb,
        imageColour: Eb
      } = ab;
      if (Tb) return (0, vb.jsx)("div", {
        className: "ShopSchematic",
        style: {
          width: `${Ub}rem`,
          height: `${Ab}rem`
        },
        children: (0, vb.jsx)(NA.e, {
          game: {
            schematicId: Tb
          }
        })
      });
      var Bb, eb;
      if ((0, mA.f)(Mb)) return (0, vb.jsx)("div", {
        className: "ShopBlock",
        style: {
          minWidth: `${Ub}rem`,
          height: "0",
          minHeight: `${Ab}rem`
        },
        children: (0, vb.jsx)(mA.c, {
          itemName: Mb,
          amount: null !== (Bb = ab.amount) && void 0 !== Bb ? Bb : 0,
          amountFontSize: Ab / 4 + "rem",
          enchantmentTier: null === (eb = ab.enchant) || void 0 === eb ? void 0 : eb.tier
        })
      });
      const Lb = Mb.slice(-4);
      return ".jpg" === Lb || ".png" === Lb ? (0, vb.jsx)(VM, {
        image: Mb,
        minWidth: Ub
      }) : (0, vb.jsx)(Yb.e, {
        name: Mb,
        className: "SelectedItemImage",
        style: {
          color: Eb
        }
      })
    }

    function VM(bb) {
      let {
        image: ab,
        minWidth: Ub
      } = bb;
      const {
        gameNameWithVariation: Ab
      } = (0, cU.k)("connectedGame"), Mb = ab.endsWith(".jpg");
      return (0, vb.jsx)("img", {
        className: Tb()({
          ShopPixelImage: !Mb
        }),
        style: {
          width: `${Mb?1.6*Ub:Ub}rem`,
          height: "auto",
          fontSize: "1.25rem"
        },
        src: `/textures/games/${(0,rb.Gb)(Ab)}/${ab}`,
        alt: ab,
        draggable: !1
      })
    }

    function OM(bb) {
      let {
        item: ab,
        cost: Ub,
        currencyAmounts: Ab
      } = bb;
      const Mb = !isNaN(Ub) && 0 !== Ub && sM(Ab, ab.currency);
      let Tb = null;
      return ab.buyButtonText ? Tb = ab.buyButtonText : Mb ? (Tb = Ub, ab.sell && (Tb = -1 * Ub), Tb = Tb.toString()) : 0 === Ub ? Tb = "Free" : ab.isRewardedAd && (Tb = "Watch ad"), (0, ta.I)(Tb) || " " === Tb ? null : (0, vb.jsxs)("div", {
        className: "BuyItemCostAndIcon",
        children: [Mb && (0, vb.jsx)("div", {
          style: {
            color: Ab[ab.currency].iconColour
          },
          className: "BuyItemIcon",
          children: (0, vb.jsx)(bT, {
            iconName: Ab[ab.currency].icon
          })
        }), (0, vb.jsx)("div", {
          className: "BuyItemCost",
          children: (0, vb.jsx)(pA.c, {
            text: Tb
          })
        })]
      })
    }

    function cM(bb) {
      let {
        item: ab,
        currInput: Ub,
        updateInput: Mb,
        onSubmit: Tb
      } = bb;
      const {
        t: Yb
      } = (0, Eb.A)(), Bb = (0, Ab.useRef)(null);
      if ((0, Ab.useEffect)((() => {
          const bb = Bb.current;
          bb && bb.value !== Ub && document.activeElement !== bb && (bb.value = null !== Ub && void 0 !== Ub ? Ub : "")
        }), [Ub]), !ab.userInput) return null;
      let eb = ab.userInput;
      if (yb.featureFlags.sanitizeShopInput && "text" === ab.userInput.type && (eb = {
          type: "number",
          placeholderText: "Numbers Only"
        }), "text" === eb.type || "number" === eb.type) {
        var Lb, Pb;
        console.assert(void 0 !== Ub, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(ab)}`);
        const bb = "text" === eb.type && eb.wordCharsOnly;
        return (0, vb.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputTextWrapper",
          children: (0, vb.jsx)(xb.c, {
            className: "ShopItemUserInputText",
            placeholderText: Yb(eb.placeholderText),
            defaultValue: Ub,
            domRef: Bb,
            onValueChange: (ab, Ub) => {
              !0 === bb && (ab = (0, HA.ob)(ab)), Bb.current.value = ab, Mb(ab)
            },
            onEnter: Tb,
            type: eb.type
          }, (null !== (Lb = eb.initialValue) && void 0 !== Lb ? Lb : "") + (null !== (Pb = eb.placeholderText) && void 0 !== Pb ? Pb : ""))
        })
      }
      if ("dropdown" === eb.type) {
        console.assert(void 0 !== Ub, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(ab)}`);
        const bb = eb.autoSubmit;
        return (0, vb.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputDropdown",
          children: (0, vb.jsx)(xa.c, {
            options: eb.dropdownOptions.map((bb => (0, xA.g)(bb))),
            value: Ub,
            onChange: ab => {
              let {
                value: Ub
              } = ab;
              Mb(Ub), bb && Tb(Ub)
            }
          })
        })
      }
      return "player" === eb.type ? (0, vb.jsx)(JM, {
        userInput: eb,
        currInput: Ub,
        updateInput: Mb
      }) : "color" === eb.type ? (0, vb.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputColor",
        children: (0, vb.jsx)("input", {
          type: "color",
          value: Ub,
          onChange: bb => {
            Mb(bb.target.value)
          }
        })
      }) : null
    }

    function JM(bb) {
      let {
        userInput: ab,
        currInput: Ub,
        updateInput: Ab
      } = bb;
      const Mb = (0, cU.k)("players"),
        Tb = (0, cU.k)("hiddenPlayerNames"),
        Eb = (0, xA.j)(Mb.ids, Mb.localId, ab);
      return (0, vb.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputDropdown",
        children: (0, vb.jsx)(xa.c, {
          options: Eb.map((bb => {
            const {
              name: ab
            } = Mb.byId[bb];
            return {
              value: bb,
              label: null === ab ? "" : (0, WA.d)(ab, Tb)
            }
          })),
          value: Ub,
          onChange: bb => {
            let {
              value: ab
            } = bb;
            Ab(ab)
          }
        })
      })
    }

    function nM(bb) {
      let {
        ids: ab
      } = bb;
      return ab
    }

    function SM(bb) {
      let {
        localId: ab
      } = bb;
      return ab
    }

    function bT(bb) {
      let {
        iconName: ab
      } = bb;
      return Zb.gameBridge.lookup("isItemName", ab) ? (0, vb.jsx)(mA.c, {
        itemName: ab,
        amount: 1
      }) : (0, vb.jsx)(Yb.e, {
        name: ab,
        className: "2x"
      })
    }
    var aT = Ub(1548);
    const UT = (0, Ub(1304).e)((bb => bb.PadLobbyShortcuts)),
      AT = (0, Ab.lazy)((() => Promise.resolve().then((() => Ub(4340))).then((bb => ({
        default: bb.Lobbyleaderboard
      })))));

    function MT(bb) {
      let {
        show: ab
      } = bb;
      return ab ? (0, vb.jsxs)(vb.Fragment, {
        children: [(0, vb.jsx)(UT, {}), (0, vb.jsx)(Ab.Suspense, {
          fallback: (0, vb.jsx)("div", {
            className: "CharacterCustomisationLoading",
            children: (0, vb.jsx)(ib.b, {})
          }),
          children: (0, vb.jsx)(AT, {})
        })]
      }) : null
    }
    var TT = Ub(1476),
      ET = Ub(2732),
      YT = Ub(1639),
      BT = Ub(2783),
      eT = Ub(2476),
      vT = Ub(1405),
      LT = Ub(1358),
      PT = Ub(2706),
      XT = Ub(2725),
      jT = Ub(2201);
    const RT = "storeRecentGiftRecipients",
      kT = new Map;

    function yT() {
      try {
        const bb = ga.f.getItem(RT);
        return Array.isArray(bb) ? bb.filter((bb => "string" === typeof(null === bb || void 0 === bb ? void 0 : bb.name) && bb.name.length > 0)).map((bb => ({
          name: bb.name,
          cosmetics: bb.cosmetics && "object" === typeof bb.cosmetics ? bb.cosmetics : null
        }))) : []
      } catch {
        return []
      }
    }

    function ZT(bb) {
      var ab;
      const [Ub, Mb] = (0, Ab.useState)(""), [Tb, Eb] = (0, Ab.useState)("search"), [Yb, Bb] = (0, Ab.useState)(null), [eb, vb] = (0, Ab.useState)(null), Lb = (0, Ab.useRef)(null), Pb = (0, Ab.useRef)(null);
      (0, Ab.useEffect)((() => () => {
        Lb.current && clearTimeout(Lb.current)
      }), []);
      const Xb = null !== (ab = null === Yb || void 0 === Yb ? void 0 : Yb.name) && void 0 !== ab ? ab : null;

      function jb() {
        Lb.current && (clearTimeout(Lb.current), Lb.current = null)
      }(0, Ab.useEffect)((() => {
        if (null === Xb || bb === Hb.NULL_USER_CONTEXT) return;
        const ab = Xb.toLowerCase();
        if (ab === bb.getPlayerName().toLowerCase()) return void vb({
          name: Xb,
          result: {
            giftRecipientFound: !1,
            giftRecipientError: "store:giftRecipientIsYou"
          }
        });
        const Ub = kT.get(ab);
        if (Ub) return void vb({
          name: Xb,
          result: Ub
        });
        let Ab = !1;
        return async function(bb, ab) {
          try {
            const Ub = await (0, Hb.postJsonWithMetricsCookiesAndJsonResponse)(`${Ib.clientSideServerUrls.indexUrl}/index/store/gift-recipient`, {
              giftRecipientName: ab
            }, {
              retries: 1
            }, bb.getMetricsCookies());
            if ("boolean" !== typeof(null === Ub || void 0 === Ub ? void 0 : Ub.giftRecipientFound)) throw new Error(`Unexpected gift recipient lookup response: ${JSON.stringify(Ub)}`);
            return Ub
          } catch (Ub) {
            return console.error("Failed to look up gift recipient:", Ub), {
              giftRecipientFound: !1,
              giftRecipientError: "store:giftRecipientLookupFailed"
            }
          }
        }(bb, Xb).catch((bb => (console.error("Gift recipient lookup failed:", bb), {
          giftRecipientFound: !1,
          giftRecipientError: "store:giftRecipientLookupFailed"
        }))).then((bb => {
          !0 !== bb.giftRecipientFound && "store:giftRecipientLookupFailed" === bb.giftRecipientError || kT.set(ab, bb), Ab || vb({
            name: Xb,
            result: bb
          })
        })), () => {
          Ab = !0
        }
      }), [Xb, bb]);
      const Rb = (0, Ab.useMemo)((() => {
        const bb = Ub.trim();
        if (!bb) return {
          status: "none"
        };
        if (!Yb || Yb.name !== bb || (null === eb || void 0 === eb ? void 0 : eb.name) !== Yb.name) return {
          status: "pending",
          name: bb
        };
        const ab = eb.result;
        return !1 === ab.giftRecipientFound ? {
          status: "error",
          name: Yb.name,
          error: ab.giftRecipientError
        } : {
          status: "found",
          name: ab.giftRecipientName,
          ownedPacks: ab.giftRecipientOwnedPacks,
          hasSuperRank: ab.giftRecipientHasSuperRank,
          isSubscriber: ab.giftRecipientIsSubscriber
        }
      }), [Ub, Yb, eb]);
      (0, Ab.useEffect)((() => {
        "found" === Rb.status && "typed" === (null === Yb || void 0 === Yb ? void 0 : Yb.source) && Pb.current !== Rb.name && (Pb.current = Rb.name, (0, nb.reportAnalyticsClick)({
          id: "store.gift_recipient",
          value: "typed"
        }))
      }), [Rb, Yb]);
      const kb = (null === eb || void 0 === eb ? void 0 : eb.name) === (null === Yb || void 0 === Yb ? void 0 : Yb.name) ? null === eb || void 0 === eb ? void 0 : eb.result : null,
        yb = !0 === (null === kb || void 0 === kb ? void 0 : kb.giftRecipientFound) ? kb.giftRecipientCosmetics : null;
      return {
        query: Ub,
        via: Tb,
        recipient: Rb,
        recipientCosmetics: yb,
        type: function(bb) {
          Mb(bb), Eb("search"), jb();
          const ab = bb.trim();
          ab ? Lb.current = setTimeout((() => {
            Bb({
              name: ab,
              source: "typed"
            })
          }), 400) : Bb(null)
        },
        choose: function(bb, ab) {
          jb(), Mb(bb), Eb("typed" === ab ? "search" : "prefilled" === ab ? "prefilled" : "suggestion"), Bb({
            name: bb,
            source: ab
          }), "typed" !== ab && "prefilled" !== ab && (0, nb.reportAnalyticsClick)({
            id: "store.gift_recipient",
            value: ab
          })
        },
        clear: function() {
          jb(), Mb(""), Eb("search"), Bb(null)
        },
        recordGift: function(bb, ab) {
          ! function(bb) {
            kT.delete(bb.toLowerCase())
          }(bb), vb((Ub => {
            if (!Ub || Ub.name.toLowerCase() !== bb.toLowerCase() || !0 !== Ub.result.giftRecipientFound || "superRank" === ab) return Ub;
            const Ab = Ub.result.giftRecipientOwnedPacks;
            return {
              ...Ub,
              result: {
                ...Ub.result,
                giftRecipientOwnedPacks: Ab.includes(ab) ? Ab : [...Ab, ab]
              }
            }
          }))
        }
      }
    }
    var DT = Ub(2199),
      zT = Ub(4346),
      xT = Ub(263),
      iT = Ub(2829);
    const fT = ["pointerdown", "pointermove", "keydown", "wheel", "touchstart", "scroll", "blur", "focus"];
    var mT = Ub(2141),
      pT = Ub(574),
      NT = Ub(2227),
      WT = Ub(2397);

    function HT(bb) {
      let {
        cosmetics: ab
      } = bb;
      return (0, vb.jsx)("span", {
        className: "StoreRecipientAvatar",
        children: (0, vb.jsx)(NT.d, {
          cosmetics: ab
        })
      })
    }

    function IT(bb, ab) {
      var Ub, Ab;
      const Mb = null !== (Ub = bb.friend) && void 0 !== Ub ? Ub : {
        isError: !1,
        name: bb.name,
        ranks: [],
        cosmetics: null !== (Ab = bb.cosmetics) && void 0 !== Ab ? Ab : {},
        nameColour: pT.b,
        location: {
          status: "noGamePlayed"
        }
      };
      return ab ? {
        ...Mb,
        cosmetics: ab
      } : Mb
    }

    function dT(bb) {
      let {
        recipient: ab
      } = bb;
      return "pending" === ab.status ? (0, vb.jsx)("span", {
        className: "StoreRecipientStatus",
        children: (0, vb.jsx)(ib.b, {})
      }) : "found" === ab.status ? (0, vb.jsx)(Yb.e, {
        name: "check",
        className: "StoreRecipientStatus StoreRecipientStatusFound"
      }) : null
    }

    function FT(bb) {
      var ab;
      let {
        selfName: Ub,
        giftRecipient: Mb,
        suggestionsVersion: Bb,
        pulseSignal: eb,
        disabled: Lb
      } = bb;
      const {
        t: Pb
      } = (0, Eb.A)(), Xb = (0, tb.l)(), jb = (0, Ab.useRef)(null), Rb = (0, Ab.useRef)(null), {
        query: Zb,
        via: Db,
        recipient: zb,
        recipientCosmetics: ib
      } = Mb, fb = (0, jT.t)(Zb), mb = (0, Ab.useMemo)((() => {
        const bb = yb.featureFlags.useSocialFeatures ? Xb.friends.filter((bb => !bb.isError)) : [];
        return (0, jT.l)({
          onlineFriends: (0, tb.g)(bb),
          recentRecipients: yT(),
          friends: bb,
          selfName: Ub,
          max: 8
        })
      }), [Xb.friends, Ub, Bb]), pb = Zb.trim().toLowerCase(), Nb = "search" !== Db && pb ? mb.find((bb => bb.name.toLowerCase() === pb)) : void 0, Wb = Nb && "prefilled" === Db ? [Nb, ...mb.filter((bb => bb !== Nb))] : mb, Hb = "" !== pb && !Nb, Ib = Hb ? Zb : "", db = Wb.length > 0;
      (0, Ab.useEffect)((() => {
        jb.current && jb.current.value !== Ib && (jb.current.value = Ib)
      }), [Ib]), (0, Ab.useEffect)((() => {
        jb.current && (jb.current.disabled = Lb)
      }), [Lb, eb]);
      const Fb = (0, Ab.useRef)(0);

      function Gb() {
        "self" !== fb && (0, nb.reportAnalyticsClick)({
          id: "store.mode",
          value: "self"
        }), Mb.clear()
      }

      function Qb(bb) {
        var ab, Ub;
        if (Lb) return;
        if (" " === bb.key || "Enter" === bb.key) return bb.preventDefault(), void bb.currentTarget.click();
        const Ab = Array.from(null !== (ab = null === (Ub = Rb.current) || void 0 === Ub ? void 0 : Ub.querySelectorAll("[role=radio]")) && void 0 !== ab ? ab : []),
          Mb = Ab.indexOf(bb.currentTarget);
        let Tb;
        "ArrowRight" === bb.key || "ArrowDown" === bb.key ? Tb = Ab[(Mb + 1) % Ab.length] : "ArrowLeft" === bb.key || "ArrowUp" === bb.key ? Tb = Ab[(Mb - 1 + Ab.length) % Ab.length] : "Home" === bb.key ? Tb = Ab[0] : "End" === bb.key && (Tb = Ab[Ab.length - 1]), Tb && (bb.preventDefault(), Tb.focus(), Tb.click())
      }(0, Ab.useEffect)((() => {
        var bb;
        eb > Fb.current && !Lb && (Fb.current = eb, null === (bb = jb.current) || void 0 === bb || bb.focus())
      }), [eb, Lb]);
      const qb = "self" === fb,
        ub = null !== (ab = null === Nb || void 0 === Nb ? void 0 : Nb.name) && void 0 !== ab ? ab : null,
        rb = "error" === zb.status ? zb.error : null,
        Kb = "store:giftRecipientLookupFailed" === rb;
      return (0, vb.jsxs)("div", {
        className: Tb()("StoreRecipientStrip", {
          StoreRecipientStripDisabled: Lb,
          StoreRecipientStripNoChips: !db
        }),
        children: [(0, vb.jsx)("span", {
          className: "StoreRecipientLabel",
          "aria-hidden": !0,
          children: Pb("store:buyingFor")
        }), (0, vb.jsxs)("div", {
          ref: Rb,
          className: "StoreRecipientRadios",
          role: "radiogroup",
          "aria-label": Pb("store:whoIsItFor"),
          children: [(0, vb.jsxs)("div", {
            role: "radio",
            "data-pad-focusable": !0,
            "aria-checked": qb,
            tabIndex: Lb || !qb && null !== ub ? -1 : 0,
            className: Tb()("StoreRecipientMe", {
              StoreRecipientChecked: qb
            }),
            onClick: () => {
              Lb || Gb()
            },
            onKeyDown: Qb,
            children: [(0, vb.jsx)(Yb.e, {
              name: "user"
            }), " ", Pb("store:me")]
          }), db && (0, vb.jsx)("div", {
            className: "StoreRecipientChips",
            children: Wb.map((bb => {
              const ab = bb === Nb;
              return (0, vb.jsx)("div", {
                role: "radio",
                "data-pad-focusable": !0,
                "aria-checked": ab,
                tabIndex: !Lb && ab ? 0 : -1,
                title: bb.name,
                className: Tb()("StoreRecipientChip", {
                  StoreRecipientChecked: ab
                }),
                onClick: () => {
                  Lb || function(bb) {
                    "gift" !== fb && (0, nb.reportAnalyticsClick)({
                      id: "store.mode",
                      value: "gift"
                    }), Mb.choose(bb.name, bb.kind)
                  }(bb)
                },
                onKeyDown: Qb,
                children: (0, vb.jsx)(WT.h, {
                  playerSocialPreview: IT(bb, ab ? ib : null),
                  opensProfileCard: !1,
                  isFriend: null !== bb.friend,
                  hideFriendBadge: !0,
                  showLocation: null !== bb.friend,
                  status: null === bb.friend ? null : void 0,
                  trailing: ab ? (0, vb.jsx)(dT, {
                    recipient: zb
                  }) : void 0
                })
              }, bb.name)
            }))
          })]
        }), (0, vb.jsxs)("div", {
          className: Tb()("StoreRecipientSearch", {
            StoreRecipientChecked: Hb,
            StoreRecipientSearchPulse: eb > 0 && !Hb,
            StoreRecipientSearchError: null !== rb && !Kb
          }),
          onClick: () => {
            var bb;
            null === (bb = jb.current) || void 0 === bb || bb.focus()
          },
          children: [Hb && "found" === zb.status && ib && (0, vb.jsx)(HT, {
            cosmetics: ib
          }), !(Hb && "found" === zb.status && ib) && (0, vb.jsx)(Yb.e, {
            name: "magnifying-glass",
            className: "StoreRecipientSearchIcon"
          }), (0, vb.jsx)(xb.c, {
            className: "StoreRecipientSearchInput",
            domRef: jb,
            placeholderText: Pb("store:searchName"),
            defaultValue: Ib,
            maxLength: hb.i,
            onValueChange: function(bb) {
              "gift" !== fb && bb.trim() && (0, nb.reportAnalyticsClick)({
                id: "store.mode",
                value: "gift"
              }), Mb.type(bb)
            },
            onEnter: () => {
              var bb;
              const ab = null === (bb = jb.current) || void 0 === bb ? void 0 : bb.value.trim();
              ab && Mb.choose(ab, "typed")
            },
            blurOnEnter: !0
          }), Hb && (0, vb.jsx)(dT, {
            recipient: zb
          }), Hb && (0, vb.jsx)("div", {
            ...(0, kb.Q)({
              disabled: Lb
            }),
            "aria-label": Pb("store:clearRecipient"),
            title: Pb("store:clearRecipient"),
            className: "StoreRecipientClear",
            onClick: bb => {
              bb.stopPropagation(), Lb || Gb()
            },
            children: (0, vb.jsx)(Yb.e, {
              name: "xmark"
            })
          })]
        }, eb), rb && (0, vb.jsx)("div", {
          className: Tb()("StoreRecipientPopover", {
            StoreRecipientPopoverSoft: Kb
          }),
          role: "status",
          children: Pb(rb)
        })]
      })
    }
    var hT = Ub(2190),
      GT = Ub(2113),
      QT = Ub(3246),
      qT = Ub(2838),
      uT = Ub(2152);
    const rT = Ub.p + "static/media/superRankPreviewPoster.e64783181b692cc31e08.webp";

    function KT() {
      (0, uT.i)(rT, {
        lowPriority: !1
      })
    }

    function oT(bb) {
      let {
        onBack: ab,
        cta: Ub,
        recipient: Mb,
        afterCta: Tb
      } = bb;
      const {
        t: Bb
      } = (0, Eb.A)(), [eb, Lb] = (0, Ab.useState)("starting"), Pb = (0, Ab.useRef)(null), Xb = (0, da.b)(), jb = (0, Ab.useRef)(null), Rb = (0, Ab.useCallback)((() => {
        const bb = Pb.current;
        null !== bb.error && bb.load();
        const ab = bb.play();
        jb.current = ab, ab.catch((bb => {
          (0, QT.b)("Failed to play Super Rank video", bb), Xb.current && jb.current === ab && Lb("failed")
        }))
      }), [Xb]);
      return (0, Ab.useEffect)((() => {
        const bb = Pb.current;
        let ab;

        function Ub() {
          clearTimeout(ab), ab = setTimeout(Rb, 3e3)
        }
        return Rb(), bb.addEventListener("ended", Ub), () => {
          clearTimeout(ab), bb.removeEventListener("ended", Ub)
        }
      }), [Rb]), (0, vb.jsxs)("div", {
        className: "StoreSuperRankDetail",
        children: [(0, vb.jsxs)("div", {
          className: "StoreDetailHeader",
          children: [(0, vb.jsx)(kb.e, {
            className: "StoreDetailBackButton",
            onClick: ab,
            padBack: !0,
            children: Bb("general:back")
          }), (0, vb.jsxs)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: [(0, vb.jsx)(Yb.e, {
              name: "bolt"
            }), " ", Bb("homePage:superRank")]
          }), Mb]
        }), (0, vb.jsxs)("div", {
          className: "StoreSuperRankDetailBody",
          children: [(0, vb.jsxs)("div", {
            className: "StoreSuperRankVideo",
            children: [(0, vb.jsx)("video", {
              ref: Pb,
              src: `${Ib.clientSideServerUrls.staticUrl}/videos/SuperRankPreview.mp4`,
              poster: rT,
              muted: !0,
              playsInline: !0,
              controls: "playing" === eb,
              onPlaying: () => {
                Lb("playing")
              },
              onError: () => {
                Lb("failed")
              }
            }), ("failed" === eb || "loading" === eb) && (0, vb.jsx)("div", {
              className: "StoreSuperRankPlay",
              children: (0, vb.jsx)(kb.g, {
                ariaLabel: Bb("general:play"),
                loading: "loading" === eb,
                onClick: () => {
                  Lb("loading"), Rb()
                },
                touchPressOn: "pointerup",
                children: (0, vb.jsx)(Yb.e, {
                  name: "play"
                })
              })
            })]
          }), (0, vb.jsxs)("div", {
            className: "StoreSuperRankDetailSide",
            children: [(0, vb.jsx)("div", {
              className: "StoreSuperRankDetailTable",
              children: (0, vb.jsx)(qT.e, {})
            }), (0, vb.jsxs)("div", {
              className: "StoreTileActions",
              children: [Ub, Tb]
            })]
          })]
        })]
      })
    }
    var lT = Ub(2417),
      tT = Ub(3209),
      wT = Ub(2814),
      sT = Ub(2822);
    const gT = [pT.t.yellow, pT.t.green, pT.t.aqua, pT.t.blue, pT.t.purple, pT.t.red];

    function CT(bb) {
      return "needsRecipient" === bb || "lookingUp" === bb || "gift" === bb || "recipientOwns" === bb || "recipientSharesOwned" === bb || "recipientSubscribed" === bb
    }

    function VT(bb) {
      const {
        onKeyDown: ab,
        ...Ub
      } = (0, kb.Q)();
      return {
        ...Ub,
        "aria-label": bb,
        onKeyDown: bb => {
          bb.target === bb.currentTarget && (null === ab || void 0 === ab || ab(bb))
        }
      }
    }

    function OT(bb) {
      let {
        text: ab
      } = bb;
      return (0, vb.jsx)("span", {
        className: "StoreRainbowText",
        children: Array.from(ab).map(((bb, ab) => (0, vb.jsx)("span", {
          style: {
            color: gT[ab % gT.length]
          },
          children: bb
        }, ab)))
      })
    }
    const cT = {
      recipientOwns: "store:alreadyOwns",
      sharesOwned: "store:sharesOwned",
      recipientSharesOwned: "store:recipientSharesOwned",
      subscribed: "store:subscribed",
      recipientSubscribed: "store:recipientSubscribed"
    };

    function JT(bb) {
      let {
        state: ab,
        item: Ub,
        price: Ab,
        busy: Mb,
        highlight: Bb = !1,
        onAct: eb,
        onNeedRecipient: Lb,
        onLogin: Pb
      } = bb;
      const {
        t: Xb
      } = (0, Eb.A)(), jb = "superRank" === Ub ? Qb.q.product.days : null, Rb = bb => null === jb ? Xb(bb ? "general:gift" : "general:buy") : Xb(bb ? "store:giftDays" : "store:buyDays", {
        days: jb
      }), yb = (bb, ab) => (0, vb.jsxs)(vb.Fragment, {
        children: [ab && (0, vb.jsx)("span", {
          className: "StoreCtaIcon",
          children: ab
        }), null === bb && (0, vb.jsx)("span", {
          className: "StoreCtaLabel StoreCtaLabelPending"
        }), null !== bb && (0, vb.jsx)("span", {
          className: "StoreCtaLabel",
          title: bb,
          children: bb
        }), (0, vb.jsxs)("span", {
          className: "StoreCtaPrice",
          children: ["\xb7", (0, vb.jsx)(GT.d, {
            amount: Ab
          })]
        })]
      });
      let Zb;
      switch (ab) {
        case "pending":
          Zb = (0, vb.jsx)(kb.m, {
            className: "StoreCtaButton",
            disabled: !0,
            children: yb(null)
          });
          break;
        case "login":
          Zb = (0, vb.jsx)(kb.m, {
            className: "StoreCtaButton",
            onClick: Pb,
            children: yb(Rb(!1))
          });
          break;
        case "owned":
          Zb = (0, vb.jsx)(kb.h, {
            className: "StoreCtaButton",
            onClick: () => {
              mb.c.set({
                openEverythingMenuName: ea.j.CUSTOMISATION
              })
            },
            children: (0, vb.jsxs)("span", {
              className: "StoreCtaLabel",
              children: [(0, vb.jsx)(Yb.e, {
                name: "shirt"
              }), " ", Xb("store:equip")]
            })
          });
          break;
        case "recipientOwns":
        case "sharesOwned":
        case "recipientSharesOwned":
        case "subscribed":
        case "recipientSubscribed":
          Zb = (0, vb.jsx)(kb.m, {
            className: "StoreCtaButton",
            disabled: !0,
            children: (0, vb.jsx)("span", {
              className: "StoreCtaLabel",
              children: Xb(cT[ab])
            })
          });
          break;
        case "needsRecipient":
        case "lookingUp":
        case "gift":
          Zb = (0, vb.jsx)(kb.m, {
            className: "StoreCtaButton",
            disabled: "needsRecipient" === ab || null === Ab,
            loading: "lookingUp" === ab || Mb,
            onClick: eb,
            analyticsClick: {
              id: "store.gift",
              value: Ub
            },
            children: yb(Rb(!0), jT.e)
          });
          break;
        case "buy":
        case "recharge":
          Zb = (0, vb.jsx)(kb.m, {
            className: "StoreCtaButton",
            loading: Mb,
            disabled: null === Ab,
            onClick: eb,
            analyticsClick: {
              id: "store.buy",
              value: Ub
            },
            children: yb(Rb(!1))
          })
      }
      return (0, vb.jsx)("div", {
        className: Tb()("StoreCta", {
          StoreCtaHighlight: Bb
        }),
        onClick: bb => {
          bb.stopPropagation(), "needsRecipient" === ab && Lb()
        },
        children: Zb
      })
    }

    function nT() {
      const {
        t: bb
      } = (0, Eb.A)();
      return (0, vb.jsxs)("ul", {
        className: "StorePerks",
        children: [(0, vb.jsxs)("li", {
          children: [(0, vb.jsx)(Yb.e, {
            name: "check"
          }), (0, vb.jsx)(OT, {
            text: bb("store:colourfulNames")
          })]
        }), (0, vb.jsxs)("li", {
          children: [(0, vb.jsx)(Yb.e, {
            name: "check"
          }), bb("store:perkCapes")]
        }), (0, vb.jsxs)("li", {
          children: [(0, vb.jsx)(Yb.e, {
            name: "check"
          }), bb("store:perkNoAdverts")]
        }), (0, vb.jsxs)("li", {
          children: [(0, vb.jsx)(Yb.e, {
            name: "check"
          }), bb("store:perkFriends", {
            count: (0, cb.c)(["super"])
          })]
        })]
      })
    }

    function ST(bb) {
      let {
        daysLeft: ab,
        totalDays: Ub,
        urgent: Ab
      } = bb;
      const {
        t: Mb
      } = (0, Eb.A)(), Yb = Ub > 0 ? Math.min(1, Math.max(.03, ab / Ub)) : 1;
      return (0, vb.jsxs)("div", {
        className: Tb()("StoreSuperRankMeterArea", {
          StoreSuperRankMeterUrgent: Ab
        }),
        children: [(0, vb.jsx)("span", {
          className: "StoreSuperRankDaysLeft",
          children: 1 === ab ? Mb("store:oneDayLeft") : Mb("store:daysLeft", {
            days: ab
          })
        }), (0, vb.jsx)("div", {
          className: "StoreSuperRankMeter",
          children: (0, vb.jsx)("i", {
            style: {
              width: 100 * Yb + "%"
            }
          })
        })]
      })
    }

    function bE(bb) {
      let {
        state: ab,
        urgent: Ub,
        daysLeft: Ab,
        totalDays: Mb,
        recipientHasSuperRank: Bb,
        busy: eb,
        highlight: Lb,
        onOpen: Pb,
        onAct: Xb,
        onNeedRecipient: jb,
        onLogin: Rb
      } = bb;
      const {
        t: kb
      } = (0, Eb.A)(), yb = CT(ab), {
        days: Zb
      } = Qb.q.product, Db = kb("store:recipientHasSuperRank", {
        giftDays: Zb
      }), zb = Vb("subscribed" === ab);
      return (0, vb.jsxs)("div", {
        className: Tb()("StoreTile StoreSuperRankTile", {
          StoreTileGift: yb,
          StoreSuperRankTileUrgent: "recharge" === ab && Ub,
          StoreSuperRankTileWithChip: Bb,
          StoreSuperRankTileGiftReady: "gift" === ab
        }),
        ...VT(kb("homePage:superRank")),
        "data-store-item": "superRank",
        onPointerEnter: KT,
        onFocus: KT,
        onClick: Pb,
        children: [(0, vb.jsx)("div", {
          className: "StoreSuperRankArt",
          style: {
            backgroundImage: `url(${mT.e})`
          }
        }), yb && (0, vb.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, vb.jsxs)("div", {
          className: "StoreTileContent",
          children: [Bb && (0, vb.jsx)("span", {
            className: "StoreChip StoreChipGift",
            title: Db,
            children: Db
          }), (0, vb.jsxs)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: [(0, vb.jsx)(Yb.e, {
              name: "bolt"
            }), " ", kb("homePage:superRank")]
          }), yb && (0, vb.jsx)("div", {
            className: "StoreTilePitch",
            children: kb("store:giftPitch", {
              days: Zb
            })
          }), "recharge" === ab && (0, vb.jsx)(ST, {
            daysLeft: Ab,
            totalDays: Mb,
            urgent: Ub
          }), zb && (0, vb.jsx)("div", {
            className: "StoreSuperRankMeterArea",
            children: (0, vb.jsx)("span", {
              className: "StoreSuperRankDaysLeft",
              children: zb
            })
          }), (0, vb.jsx)(nT, {}), (0, vb.jsxs)("div", {
            className: "StoreTileActions",
            children: [(0, vb.jsx)(JT, {
              state: ab,
              item: "superRank",
              price: Qb.q.price,
              busy: eb,
              highlight: Lb,
              onAct: Xb,
              onNeedRecipient: jb,
              onLogin: Rb
            }), "needsRecipient" === ab && (0, vb.jsx)("span", {
              className: "StoreTileNote StoreTileNoteGift",
              children: kb("store:pickRecipientFirst")
            }), "recharge" === ab && Ub && (0, vb.jsx)("span", {
              className: "StoreTileNote StoreSuperRankEnding",
              children: 1 === Ab ? kb("store:endsInOneDay") : kb("store:endsInDays", {
                days: Ab
              })
            })]
          })]
        })]
      })
    }
    const aE = {
      common: "StorePackTileCommon",
      rare: "StorePackTileRare",
      epic: "StorePackTileEpic",
      legendary: "StorePackTileLegendary",
      mythic: "StorePackTileMythic"
    };

    function UE(bb) {
      var ab;
      let {
        pack: Ub,
        state: Mb,
        busy: Bb,
        onOpen: eb,
        onAct: Lb,
        onNeedRecipient: Pb,
        onLogin: Xb
      } = bb;
      const {
        t: jb
      } = (0, Eb.A)(), Rb = TT.d[Ub], kb = PT.f[Ub], yb = (0, mT.m)(Ub), Zb = (0, Ab.useRef)(null);
      (0, wT.h)(Ub, Zb);
      const Db = CT(Mb),
        zb = null !== (ab = Rb.displayName) && void 0 !== ab ? ab : Ub,
        xb = (0, tT.b)((() => {
          (0, lT.f)();
          const bb = (0, wT.f)(Ub);
          void 0 !== bb && (0, uT.i)((0, wT.c)(bb))
        })),
        [ib] = (0, Ab.useState)(iT.i);
      return (0, vb.jsxs)("div", {
        className: Tb()("StoreTile StorePackTile", aE[Rb.tier], {
          StorePackTileOwned: "owned" === Mb,
          StorePackTileRecipientOwns: "recipientOwns" === Mb,
          StoreTileGift: Db
        }),
        ...VT(zb),
        ref: Zb,
        "data-store-item": Ub,
        onClick: eb,
        onPointerMove: bb => {
          "mouse" !== bb.pointerType || 0 === bb.movementX && 0 === bb.movementY || ib || xb.start()
        },
        onPointerLeave: xb.cancel,
        children: [kb && (0, vb.jsx)(kb, {}), (0, vb.jsx)("div", {
          className: "StorePackCharacters",
          children: yb.map((bb => (0, vb.jsx)("div", {
            className: "StorePackCharacter",
            style: {
              backgroundImage: `url(${(0,mT.h)(bb)})`
            }
          }, bb)))
        }), (0, vb.jsx)("div", {
          className: "StoreTileScrim"
        }), Db && (0, vb.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, vb.jsxs)("div", {
          className: "StoreTileContent",
          children: [(0, vb.jsx)("div", {
            className: "StoreTileTitle",
            children: zb
          }), (0, vb.jsxs)("div", {
            className: "StoreTileMeta",
            children: [(0, vb.jsx)(sT.e, {
              tier: Rb.tier
            }), " \xb7 ", jb("store:itemCount", {
              count: (0, hT.g)(Ub)
            }), "owned" === Mb && (0, vb.jsxs)("span", {
              className: "StoreTileOwned",
              children: [" \xb7 ", (0, vb.jsx)(Yb.e, {
                name: "check"
              }), " ", jb("general:owned")]
            })]
          }), (0, vb.jsx)(JT, {
            state: Mb,
            item: Ub,
            price: (0, Qb.i)(Ub),
            busy: Bb,
            onAct: Lb,
            onNeedRecipient: Pb,
            onLogin: Xb
          })]
        })]
      })
    }
    var AE = Ub(2786),
      ME = Ub(1472),
      TE = Ub(1365),
      EE = Ub(3228);

    function YE() {
      return (0, vb.jsx)("span", {
        className: "NewBadge",
        children: "NEW"
      })
    }
    var BE = Ub(1257),
      eE = Ub(1485),
      vE = Ub(8945);

    function LE(bb) {
      let {
        character: ab,
        drawn: Ub,
        onDrawn: Mb
      } = bb;
      const Eb = (0, Ab.useRef)(null),
        Yb = (0, vE.h)(ab);
      return (0, vb.jsx)("div", {
        className: Tb()("StoreCharacterLive", {
          StoreCharacterLiveDrawn: Ub
        }),
        children: (0, vb.jsx)(Ab.Suspense, {
          fallback: null,
          children: (0, vb.jsx)(lT.c, {
            ref: Eb,
            framing: "store",
            turntableFromYaw: Ub ? Yb.yaw : null,
            onReady: () => {
              var bb, Ub;
              null === (bb = Eb.current) || void 0 === bb || bb.setOrbit(Yb), null === (Ub = Eb.current) || void 0 === Ub || Ub.setAllCosmetics(eE.d[ab].cosmetics)
            },
            onDrawn: Mb
          })
        })
      })
    }
    const PE = {
        common: "StoreCharacterCardCommon",
        rare: "StoreCharacterCardRare",
        epic: "StoreCharacterCardEpic",
        legendary: "StoreCharacterCardLegendary",
        mythic: "StoreCharacterCardMythic"
      },
      XE = new Set(["wildSpirits"]);

    function jE(bb) {
      var ab;
      let {
        tile: Ub,
        design: Mb,
        canGoLive: Bb,
        live: eb,
        busy: Lb,
        highlight: Pb,
        onLiveStart: Xb,
        onLiveEnd: jb,
        onOpen: Rb,
        onAct: kb,
        onNeedRecipient: yb,
        onLogin: Zb
      } = bb;
      const {
        t: Db
      } = (0, Eb.A)(), {
        pack: zb,
        state: xb
      } = Ub, ib = TT.d[zb], fb = (0, TT.f)(zb), mb = (0, mT.i)(zb), pb = PT.f[mb], Nb = XE.has(mb), {
        tier: Wb
      } = ib, Hb = "legendary" === Wb || "mythic" === Wb, Ib = (0, Ab.useRef)(null);
      (0, BE.b)(Ib, "epic" === Wb || Hb || Nb);
      const [db, hb] = (0, Ab.useState)(!1);
      return !eb && db && hb(!1), (0, vb.jsxs)("div", {
        ref: Ib,
        className: Tb()("StoreCharacterCard", `StoreCharacterCard${Mb}`, PE[Wb], {
          StoreCharacterCardOwned: "owned" === xb || "recipientOwns" === xb,
          StoreCharacterCardGift: CT(xb),
          StoreCharacterCardItem: void 0 === fb
        }),
        onPointerMove: bb => {
          "mouse" !== bb.pointerType || 0 === bb.movementX && 0 === bb.movementY || !Bb || eb || void 0 === fb || Xb()
        },
        onPointerLeave: jb,
        children: [(0, vb.jsx)("div", {
          className: "StoreCharacterBackdrop",
          children: pb && (0, vb.jsx)(pb, {
            simple: !0
          })
        }), Hb && (0, vb.jsx)("div", {
          className: "StoreCharacterRays"
        }), (0, vb.jsxs)(Fb.LinkPreserveSearch, {
          className: "StoreCharacterLink",
          to: (0, ME.e)({
            kind: "pack",
            pack: zb
          }),
          "data-store-item": zb,
          onClick: bb => {
            (0, TE.e)(bb) && (bb.preventDefault(), Rb())
          },
          children: [(0, vb.jsxs)("div", {
            className: "StoreCharacterStage",
            children: [(0, vb.jsx)("div", {
              className: "StoreCharacterHalo"
            }), (0, vb.jsx)("div", {
              className: Tb()("StoreCharacterFigure", {
                StoreCharacterFigureCovered: db
              }),
              style: {
                backgroundImage: `url(${(0,mT.r)(zb)})`
              }
            }), eb && void 0 !== fb && (0, vb.jsx)(LE, {
              character: fb,
              drawn: db,
              onDrawn: () => {
                hb(!0)
              }
            })]
          }), (0, vb.jsx)("div", {
            className: "StoreCharacterName",
            children: null !== (ab = ib.displayName) && void 0 !== ab ? ab : zb
          }), (0, vb.jsx)(sT.e, {
            tier: Wb,
            className: "StoreCharacterTier"
          })]
        }), (0, vb.jsx)("div", {
          className: "StoreCharacterScrim"
        }), Nb && (0, vb.jsx)("span", {
          className: "StoreCharacterNew",
          children: (0, vb.jsx)(YE, {})
        }), "owned" === xb && (0, vb.jsx)("span", {
          className: "StoreCharacterOwned",
          title: Db("general:owned"),
          "aria-label": Db("general:owned"),
          children: (0, vb.jsx)(Yb.e, {
            name: "check"
          })
        }), (0, vb.jsx)("div", {
          className: "StoreCharacterPlate",
          children: (0, vb.jsx)(JT, {
            state: xb,
            item: zb,
            price: (0, Qb.i)(zb),
            busy: Lb,
            highlight: Pb,
            onAct: kb,
            onNeedRecipient: yb,
            onLogin: Zb
          })
        })]
      })
    }

    function RE(bb) {
      let {
        tiles: ab,
        busy: Ub,
        highlightItem: Mb,
        onOpen: Tb,
        onAct: Eb,
        onNeedRecipient: Yb,
        onLogin: Bb
      } = bb;
      const eb = (0, EE.m)("storeCharacterCardFoil"),
        Lb = (0, EE.m)("storeCharacterCardSpotlight"),
        Pb = eb ? "Foil" : Lb ? "Spotlight" : "Showcase",
        [Xb] = (0, Ab.useState)(iT.i),
        [jb, Rb] = (0, Ab.useState)(null);
      return (0, vb.jsx)("div", {
        className: "StoreCharacterGrid",
        children: ab.map((bb => (0, vb.jsx)(jE, {
          tile: bb,
          design: Pb,
          canGoLive: !Xb,
          live: jb === bb.pack,
          busy: Ub,
          highlight: Mb === bb.pack,
          onLiveStart: () => {
            Rb(bb.pack)
          },
          onLiveEnd: () => {
            Rb((ab => ab === bb.pack ? null : ab))
          },
          onOpen: () => {
            Tb(bb.pack)
          },
          onAct: () => {
            Eb(bb.pack)
          },
          onNeedRecipient: Yb,
          onLogin: () => {
            Bb(bb.pack)
          }
        }, bb.pack)))
      })
    }
    var kE = Ub(8957);

    function yE(bb) {
      let {
        title: ab
      } = bb;
      return (0, vb.jsx)("h2", {
        className: "StoreSectionDivider",
        children: (0, vb.jsx)("span", {
          className: "StoreSectionDividerTitle",
          children: ab
        })
      })
    }

    function ZE(bb) {
      let {
        mountAtOnce: ab,
        children: Ub
      } = bb;
      const Mb = (0, Ab.useRef)(null),
        [Tb, Eb] = (0, Ab.useState)(ab),
        Yb = (0, kE.c)();
      return (0, Ab.useLayoutEffect)((() => {
        const bb = Mb.current;
        bb && bb.getBoundingClientRect().top < bb.parentElement.getBoundingClientRect().bottom && Eb(!0)
      }), []), Tb || Yb ? (0, vb.jsx)(vb.Fragment, {
        children: Ub
      }) : (0, vb.jsx)("div", {
        ref: Mb
      })
    }

    function DE(bb) {
      let {
        layout: ab,
        mountAtOnce: Ub,
        bundleGift: Ab,
        superRankTotalDays: Mb,
        busy: Tb,
        highlightItem: Yb,
        onOpen: Bb,
        onAct: eb,
        onNeedRecipient: Lb,
        onLogin: Pb
      } = bb;
      const {
        t: Xb
      } = (0, Eb.A)(), jb = ab.packs.filter((bb => void 0 === (0, TT.f)(bb.pack) && !(0, TT.k)(bb.pack))), Rb = ab.packs.filter((bb => void 0 !== (0, TT.f)(bb.pack))), kb = ab.packs.filter((bb => (0, TT.k)(bb.pack)));
      return (0, vb.jsxs)(vb.Fragment, {
        children: [(0, vb.jsx)(AE.b, {
          className: "StoreSuperGems",
          gift: Ab,
          highlightSku: Yb
        }), (0, vb.jsx)(yE, {
          title: Xb("store:rank")
        }), (0, vb.jsx)(bE, {
          state: ab.superRank.state,
          urgent: ab.superRank.urgent,
          daysLeft: ab.superRankDaysLeft,
          totalDays: Mb,
          recipientHasSuperRank: ab.recipientHasSuperRank,
          busy: Tb,
          highlight: "superRank" === Yb,
          onOpen: () => {
            Bb("superRank")
          },
          onAct: () => {
            eb("superRank")
          },
          onNeedRecipient: Lb,
          onLogin: () => {
            Pb("superRank")
          }
        }), (0, vb.jsxs)(ZE, {
          mountAtOnce: Ub,
          children: [(0, vb.jsx)(yE, {
            title: Xb("store:bundles")
          }), (0, vb.jsx)("div", {
            className: "StorePackGrid",
            children: jb.map((bb => (0, vb.jsx)(UE, {
              pack: bb.pack,
              state: bb.state,
              busy: Tb,
              onOpen: () => {
                Bb(bb.pack)
              },
              onAct: () => {
                eb(bb.pack)
              },
              onNeedRecipient: Lb,
              onLogin: () => {
                Pb(bb.pack)
              }
            }, bb.pack)))
          }), (0, vb.jsxs)(ZE, {
            mountAtOnce: Ub,
            children: [(0, vb.jsx)(yE, {
              title: Xb("store:characters")
            }), (0, vb.jsx)(RE, {
              tiles: Rb,
              busy: Tb,
              highlightItem: Yb,
              onOpen: Bb,
              onAct: eb,
              onNeedRecipient: Lb,
              onLogin: Pb
            }), kb.length > 0 && (0, vb.jsxs)(vb.Fragment, {
              children: [(0, vb.jsx)(yE, {
                title: Xb("store:premiumItems")
              }), (0, vb.jsx)(RE, {
                tiles: kb,
                busy: Tb,
                highlightItem: Yb,
                onOpen: Bb,
                onAct: eb,
                onNeedRecipient: Lb,
                onLogin: Pb
              })]
            })]
          })]
        })]
      })
    }

    function zE(bb) {
      let {
        state: ab,
        mode: Ub,
        giftName: Ab,
        busy: Mb,
        highlight: Tb,
        purchaseError: Yb,
        onBack: Bb,
        onChooseRecipient: eb,
        onAct: Lb,
        onLogin: Pb
      } = bb;
      const {
        t: Xb
      } = (0, Eb.A)(), jb = Vb("gift" !== Ub);
      return (0, vb.jsx)(oT, {
        onBack: Bb,
        recipient: "gift" === Ub && (0, vb.jsxs)(vb.Fragment, {
          children: [Ab && (0, vb.jsxs)("span", {
            className: "StoreDetailRecipient",
            title: Xb("store:giftFor", {
              name: Ab
            }),
            children: [jT.e, " ", Xb("store:giftFor", {
              name: Ab
            })]
          }), !Ab && (0, vb.jsxs)("div", {
            ...(0, kb.Q)(),
            className: "StoreDetailRecipient StoreDetailRecipientChoose",
            onClick: eb,
            children: [jT.e, " ", Xb("store:chooseRecipient")]
          })]
        }),
        cta: (0, vb.jsx)(JT, {
          state: ab,
          item: "superRank",
          price: Qb.q.price,
          busy: Mb,
          highlight: Tb,
          onAct: Lb,
          onNeedRecipient: eb,
          onLogin: Pb
        }),
        afterCta: (0, vb.jsxs)(vb.Fragment, {
          children: [jb && (0, vb.jsx)("span", {
            className: "StoreTileNote",
            children: jb
          }), Yb && (0, vb.jsx)("span", {
            className: "StoreTileNote StoreTileNoteError",
            children: Xb(Yb)
          })]
        })
      })
    }
    var xE = Ub(150);
    const iE = xE.k("kind", [xE.x({
      kind: xE.r("refused"),
      heldTierId: xE.R(),
      until: xE.v()
    }), xE.x({
      kind: xE.r("refund"),
      tierId: xE.R(),
      refundedMs: xE.v(),
      forfeitedMs: xE.v(),
      premiumCurrency: xE.v()
    }), xE.x({
      kind: xE.r("none")
    })]);
    async function fE(bb) {
      const ab = await (0, Hb.postJsonWithMetricsCookiesAndJsonResponse)(`${Ib.clientSideServerUrls.indexUrl}/index/ranks/subscribe-preview`, {
        productId: bb
      }, {
        retries: 1
      });
      return iE.parse(ab)
    }
    var mE = Ub(2766),
      pE = Ub(2788);

    function NE(bb, ab) {
      const Ub = Math.max(1, Math.round(ab / rb.g));
      return [1 === Ub ? `${bb}OneDay` : bb, {
        days: Ub.toLocaleString()
      }]
    }

    function WE() {
      return "true" === new URLSearchParams(window.location.search).get("tempSubscription") && (0, ob.purchasesAllowed)() ? (0, vb.jsx)(HE, {}) : null
    }

    function HE() {
      const {
        t: bb
      } = (0, Eb.A)(), {
        userContext: ab
      } = (0, Xb.c)(), {
        purchaseUnderWay: Ub,
        notice: Mb,
        subscribe: Tb
      } = (0, mE.b)(), [Yb, Bb] = (0, Ab.useState)(null), [eb, Lb] = (0, Ab.useState)(0), [Pb, jb] = (0, Ab.useState)(!1), Rb = (0, Ab.useRef)(!0), yb = ab !== Hb.NULL_USER_CONTEXT, Zb = null !== Yb && Yb.loadedFor === ab ? Yb.offer : null, Db = null === Mb || void 0 === Mb ? void 0 : Mb.pendingIntentId, zb = (0, Ab.useRef)(Db);

      function xb() {
        Lb((bb => bb + 1))
      }
      async function ib(bb) {
        jb(!1), await Tb(bb), Rb.current && xb()
      }
      if ((0, Ab.useEffect)((() => (Rb.current = !0, () => {
          Rb.current = !1
        })), []), (0, Ab.useEffect)((() => {
          void 0 !== zb.current && void 0 === Db && xb(), zb.current = Db
        }), [Db]), (0, Ab.useEffect)((() => {
          if (!yb) return;
          let bb = !1;
          return jb(!1), async function() {
            const {
              offering: bb
            } = await (0, Ya.f)().getOfferings("superRankPage"), ab = null === bb || void 0 === bb ? void 0 : bb.packages.find((bb => null !== bb.price));
            return void 0 === ab ? {
              kind: "unavailable"
            } : {
              kind: "loaded",
              pkg: ab,
              preview: await fE(ab.productId)
            }
          }().catch((bb => (console.error("Billing: loading the Super Rank subscription or its preview failed:", bb), {
            kind: "loadFailed"
          }))).then((Ub => {
            bb || Bb((bb => "loadFailed" === Ub.kind && (null === bb || void 0 === bb ? void 0 : bb.loadedFor) === ab ? bb : {
              loadedFor: ab,
              offer: Ub
            }))
          })), () => {
            bb = !0
          }
        }), [ab, yb, eb]), null === Zb) return null;
      if ("loaded" !== Zb.kind) return (0, vb.jsx)(pE.g, {
        notice: {
          kind: "error",
          key: "unavailable" === Zb.kind ? "payments:subscriptionUnavailable" : "payments:subscriptionLoadFailed"
        },
        className: "StoreTempSubscribe SmallTextBold"
      });
      const {
        pkg: fb,
        preview: mb
      } = Zb;
      if ("refused" === mb.kind) return (0, vb.jsx)(pE.g, {
        notice: {
          kind: "error",
          key: "payments:subscribeRefusedGemRank",
          values: {
            date: new Date(mb.until).toLocaleDateString()
          }
        },
        className: "StoreTempSubscribe SmallTextBold"
      });
      const pb = (0, AE.d)(fb.price);
      if (Pb && "refund" === mb.kind) {
        const {
          refundedMs: ab,
          forfeitedMs: Ab,
          premiumCurrency: Mb
        } = mb, Tb = Ab + (0 === Mb ? ab : 0), [Eb, Yb] = NE("payments:subscribeRefundsGemRank", ab), [Bb, eb] = NE("payments:subscribeForfeitsGemRank", Tb);
        return (0, vb.jsxs)("div", {
          className: "StoreTempSubscribe SmallTextBold",
          children: [(0, vb.jsx)("div", {
            children: bb("payments:subscribeEndsGemRank")
          }), Mb > 0 && (0, vb.jsx)("div", {
            children: bb(Eb, {
              ...Yb,
              amount: Mb.toLocaleString()
            })
          }), Tb > 0 && (0, vb.jsx)("div", {
            children: bb(Bb, eb)
          }), (0, vb.jsxs)("div", {
            className: "StoreTempSubscribeButtons",
            children: [(0, vb.jsx)(kb.h, {
              onClick: () => {
                jb(!1)
              },
              children: bb("general:cancel")
            }), (0, vb.jsx)(kb.m, {
              onClick: () => {
                ib(fb)
              },
              loading: Ub,
              children: bb("payments:subscribeContinue", {
                price: pb
              })
            })]
          })]
        })
      }
      return (0, vb.jsxs)("div", {
        className: "StoreTempSubscribe",
        children: [(0, vb.jsx)(pE.g, {
          notice: Mb,
          className: "SmallTextBold"
        }), (0, vb.jsx)(pE.c, {
          className: "SmallTextBold"
        }), (0, vb.jsx)(kb.m, {
          onClick: () => {
            "refund" === mb.kind ? jb(!0) : ib(fb)
          },
          disabled: void 0 !== Db,
          loading: Ub,
          children: bb("payments:subscribeToSuperRank", {
            price: pb
          })
        })]
      })
    }
    const IE = {
      kind: "board"
    };
    let dE = !1;

    function FE(bb) {
      return "found" === bb.status || "error" === bb.status && "store:giftRecipientLookupFailed" === bb.error ? bb.name : null
    }(0, Kb.s)(ET.prefetchBillingOfferings);
    const hE = (0, Ab.memo)((function(bb) {
      var ab;
      let {
        show: Mb
      } = bb;
      const {
        t: Yb
      } = (0, Eb.A)(), {
        userContext: Bb
      } = (0, Xb.c)(), eb = Bb !== Hb.NULL_USER_CONTEXT, Lb = ZT(Bb), [Pb, jb] = (0, Rb.e)(), {
        page: kb,
        urlMode: yb,
        goTo: Zb
      } = (0, DT.h)(), Db = function(bb) {
        return "superRank" === bb.kind ? "superRank" : "pack" === bb.kind ? bb.pack : null
      }(kb), {
        openEverythingMenuName: zb,
        gameState: xb
      } = (0, mb.n)(["openEverythingMenuName", "gameState"]), ib = null !== zb;
      ! function(bb, ab) {
        const [Mb] = (0, Ab.useState)(iT.i), [Tb, Eb] = (0, Ab.useState)(!1);
        Mb && ab && !Tb && Eb(!0);
        const Yb = (0, TA.o)(),
          Bb = Mb && Tb && bb && !Yb;
        (0, Ab.useEffect)((() => {
          if (!Bb) return;
          let bb = null,
            ab = null,
            Ab = null;
          const Mb = () => !document.hasFocus() || document.activeElement instanceof HTMLIFrameElement || (0, Ya.f)().purchaseUnderWay,
            Tb = () => {
              var Ub;
              null === (Ub = Ab) || void 0 === Ub || Ub(), Ab = null, null !== bb && (clearTimeout(bb), bb = null), null !== ab && (clearTimeout(ab), ab = null)
            },
            Eb = () => {
              (0, zT.r)(!1), (0, zT.o)(!1), Tb(), bb = setTimeout((() => {
                bb = null, Ab = (0, xT.b)((() => {
                  Ab = null, Mb() ? Eb() : ((0, zT.r)(!0), ab = setTimeout((() => {
                    ab = null, Ab = (0, xT.b)((() => {
                      Ab = null, Mb() ? Eb() : (0, zT.o)(!0)
                    }))
                  }), 3e3), Promise.resolve().then((() => Ub(4340))).then((bb => {
                    bb.startBackgroundGameSetup()
                  }), (bb => {
                    console.warn("Background game setup: its chunk failed to load", bb)
                  })))
                }))
              }), 2e3)
            };
          for (const Ub of fT) window.addEventListener(Ub, Eb, {
            capture: !0,
            passive: !0
          });
          return Eb(), () => {
            for (const bb of fT) window.removeEventListener(bb, Eb, {
              capture: !0
            });
            Tb(), (0, zT.r)(!1), (0, zT.o)(!1)
          }
        }), [Bb])
      }(Mb && ib, "pack" === kb.kind);
      const fb = "landingPage" === xb;
      (0, Ab.useEffect)((() => {
        ib && (0, ET.prefetchBillingOfferings)()
      }), [ib]), (0, Ab.useEffect)((() => {
        ib && !Mb && fb && (0, mT.s)()
      }), [ib, Mb, fb]);
      const [pb, Nb] = (0, Ab.useState)(0), [Wb, Ib] = (0, Ab.useState)(null), [db, Fb] = (0, Ab.useState)(null), [hb, Gb] = (0, Ab.useState)(null), [qb, ub] = (0, Ab.useState)(null), rb = (0, Ab.useRef)(null), lb = (0, Ab.useRef)(null), tb = (0, Ab.useRef)(!1), wb = (0, Kb.E)(), sb = (0, Ab.useRef)(0), gb = (0, Ab.useRef)(!1);

      function Cb() {
        Nb((bb => bb + 1))
      }(0, Ab.useEffect)((() => {
        if (Mb) {
          if (dE = !0, (0, Kb.j)(), wb && wb.seq !== sb.current) {
            var bb;
            sb.current = wb.seq, "loginResume" !== wb.source && (0, Kb.A)();
            const ab = (0, Kb.b)(wb);
            yb || Zb(ab), ub(null !== (bb = wb.highlight) && void 0 !== bb ? bb : null), Fb(null), "gift" === wb.mode && wb.giftRecipientName ? Lb.choose(wb.giftRecipientName, "prefilled") : "current" !== wb.mode && Lb.clear(), "gift" !== wb.mode || wb.giftRecipientName || Cb(), (0, nb.reportAnalyticsClick)({
              id: "store.open",
              value: wb.source
            })
          } else gb.current || (0, nb.reportAnalyticsClick)({
            id: "store.open",
            value: "menuTab"
          });
          gb.current = !0
        } else gb.current = !1
      }), [Mb, wb]), (0, Ab.useEffect)((() => {
        if (!qb) return;
        const bb = setTimeout((() => {
          ub(null)
        }), 4e3);
        return () => {
          clearTimeout(bb)
        }
      }), [qb]), (0, Ab.useEffect)((() => {
        const bb = rb.current;
        var ab;
        if (Mb && bb) {
          if (Db) lb.current = Db, null === (ab = bb.querySelector(".StoreDetailBackButton, .CosmeticShopDetailBackButton")) || void 0 === ab || ab.focus();
          else if (lb.current) {
            var Ub;
            null === (Ub = bb.querySelector(`[data-store-item="${lb.current}"]`)) || void 0 === Ub || Ub.focus(), lb.current = null
          }
        } else lb.current = null
      }), [Db, Mb]), (0, Ab.useEffect)((() => {
        Fb(null)
      }), [Lb.query]), (0, Ab.useEffect)((() => {
        if (!hb) return;
        const bb = setTimeout((() => {
          Gb(null)
        }), 8e3);
        return () => {
          clearTimeout(bb)
        }
      }), [hb]);
      const Vb = Bb.superRankInfo,
        Ob = Bb.isLoggedIn() || (0, ob.guestsMayBuy)(),
        cb = Bb.getOwnedCosmeticPacks(),
        Jb = (0, jT.t)(Lb.query),
        Sb = (0, jT.h)({
          mode: Jb,
          loggedIn: eb ? Ob : null,
          superRankInfo: Vb,
          now: Date.now(),
          ownedPacks: cb,
          packs: TT.s,
          recipient: Lb.recipient
        });
      (0, Ab.useEffect)((() => {
        if (!Ob || !Mb) return;
        const bb = (0, Kb.A)(),
          ab = bb && (0, jT.p)(bb, TT.s);
        bb && ab && ((0, nb.reportAnalyticsClick)({
          id: "store.login_resume",
          value: bb.item
        }), (0, Kb.m)(ab))
      }), [Ob, Mb]);
      const ba = (0, jT.v)({
        superRankDaysLeft: Sb.superRankDaysLeft,
        openedThisSession: dE || Mb,
        seenNewItems: (0, Kb.g)()
      });
      if ((0, Ab.useEffect)((() => {
          (0, Kb.w)(ba)
        }), [ba]), !Mb || !(0, ob.purchasesAllowed)()) return null;
      const aa = jb > Pb && Pb <= 700,
        Ua = !aa && jb <= 420,
        Aa = "gift" === Jb ? FE(Lb.recipient) : null,
        Ma = null !== Wb;

      function Ta(bb) {
        (0, BT.d)(bb, "gift" === Jb ? Lb.query.trim() : null)
      }

      function Ea(bb, ab) {
        (0, nb.reportAnalyticsClick)({
          id: "store.purchase_done",
          value: `${ab?"gift":"self"}:${bb}`
        }), ab && (Lb.recordGift(ab.name, bb), Ba(ab))
      }

      function Ba(bb) {
        ! function(bb) {
          try {
            ga.f.setItem(RT, (0, jT.F)(yT(), bb))
          } catch {}
        }({
          name: bb.name,
          cosmetics: bb.cosmetics
        }), Zb(IE), Gb((ab => {
          var Ub;
          return {
            name: bb.name,
            seq: (null !== (Ub = null === ab || void 0 === ab ? void 0 : ab.seq) && void 0 !== Ub ? Ub : 0) + 1
          }
        }))
      }
      async function ea(bb) {
        var ab, Ub;
        if (tb.current) return;
        if (!Ob) return void Ta(bb);
        Fb(null), ub(null);
        const Ab = "gift" === Jb ? {
          name: FE(Lb.recipient),
          cosmetics: Lb.recipientCosmetics
        } : null;
        if (Ab && !Ab.name) return void Cb();
        const Mb = "superRank" === bb ? Qb.q.id : (0, Qb.e)(bb);
        tb.current = !0;
        const Tb = await (0, XT.b)(Mb, null !== (ab = null === Ab || void 0 === Ab ? void 0 : Ab.name) && void 0 !== ab ? ab : null);
        if (tb.current = !1, !Tb) return;
        Ib(bb);
        const Eb = await eT.c.purchase(Mb, null !== (Ub = null === Ab || void 0 === Ab ? void 0 : Ab.name) && void 0 !== Ub ? Ub : null);
        Ib(null), Eb ? Fb(Eb) : (Ea(bb, Ab), Ab || (await (0, vT.flushClientAnalyticsEvents)(), (0, YT.refreshWithoutConfirmation)("superRank" === bb ? "/super-rank-welcome" : `/pack-welcome/${bb}`)))
      }
      const va = Tb()("Store", {
        StoreGift: "gift" === Jb,
        StorePortrait: aa,
        StoreCompact: Ua
      });
      if ("pack" === kb.kind) {
        const bb = kb.pack,
          ab = Sb.packs.find((ab => ab.pack === bb));
        return (0, vb.jsx)("div", {
          ref: rb,
          className: "CosmeticShopContainer",
          children: (0, vb.jsx)(PT.c, {
            pack: bb,
            onBack: () => {
              Zb(IE)
            },
            onPurchased: ab => {
              Ea(bb, ab ? {
                name: ab,
                cosmetics: null
              } : null)
            },
            giftCta: "gift" === Jb && Aa && ab && (0, vb.jsxs)(vb.Fragment, {
              children: [(0, vb.jsx)(JT, {
                state: ab.state,
                item: bb,
                price: (La = bb, "superRank" === La ? Qb.q.price : (0, Qb.i)(La)),
                busy: Ma,
                onAct: () => {
                  ea(bb)
                },
                onNeedRecipient: () => {
                  Zb(IE), Cb()
                },
                onLogin: () => {
                  Ta(bb)
                },
                highlight: qb === bb
              }), db && (0, vb.jsx)("span", {
                className: "CosmeticShopGiftError SmallTextBold",
                children: Yb(db)
              })]
            }),
            ownedPacks: cb,
            startAsGift: "gift" === Jb,
            initialGiftRecipient: "gift" === Jb ? null !== Aa && void 0 !== Aa ? Aa : Lb.query.trim() : "",
            highlightCta: qb === bb
          }, bb)
        })
      }
      var La;
      return "superRank" === kb.kind ? (0, vb.jsx)("div", {
        ref: rb,
        className: Tb()(va, "StoreDetailView"),
        children: (0, vb.jsx)(zE, {
          state: Sb.superRank.state,
          mode: Jb,
          giftName: Aa,
          busy: Ma,
          highlight: "superRank" === qb,
          purchaseError: db,
          onBack: () => {
            Zb(IE)
          },
          onChooseRecipient: () => {
            Zb(IE), Cb()
          },
          onAct: () => {
            ea("superRank")
          },
          onLogin: () => {
            Ta("superRank")
          }
        })
      }) : (0, vb.jsxs)("div", {
        ref: rb,
        className: va,
        children: [(0, vb.jsx)("div", {
          className: "StoreTopRow",
          children: (0, vb.jsx)(FT, {
            selfName: eb ? Bb.getPlayerName() : "",
            giftRecipient: Lb,
            suggestionsVersion: null !== (ab = null === hb || void 0 === hb ? void 0 : hb.seq) && void 0 !== ab ? ab : 0,
            pulseSignal: pb,
            disabled: Ma || !eb
          })
        }), hb && (0, vb.jsxs)("div", {
          className: "StoreNotice StoreNoticeGiftSent",
          onClick: () => {
            Gb(null)
          },
          children: [(0, vb.jsx)(LT.d, {
            showSignal: hb.seq
          }), jT.e, " ", Yb("store:giftSent", {
            name: hb.name
          })]
        }, hb.seq), !hb && db && (0, vb.jsx)("div", {
          className: "StoreNotice StoreNoticeError",
          children: Yb(db)
        }), (0, vb.jsx)(DE, {
          layout: Sb,
          mountAtOnce: null !== lb.current,
          bundleGift: "gift" === Jb ? {
            recipientName: Aa,
            lookingUp: "pending" === Lb.recipient.status,
            busy: Ma,
            onNeedRecipient: Cb,
            onSent: bb => {
              (0, nb.reportAnalyticsClick)({
                id: "store.purchase_done",
                value: "gift:superGems"
              }), Ba({
                name: bb,
                cosmetics: Lb.recipientCosmetics
              })
            }
          } : null,
          superRankTotalDays: (0, jT.y)(Vb),
          busy: Ma,
          highlightItem: qb,
          onOpen: function(bb) {
            (0, nb.reportAnalyticsClick)({
              id: "store.item_open",
              value: bb
            }), Zb((0, Kb.e)(bb))
          },
          onAct: ea,
          onNeedRecipient: Cb,
          onLogin: Ta
        }), "gift" !== Jb && (0, vb.jsx)(WE, {})]
      })
    }));
    var GE = Ub(2472),
      QE = Ub(8410),
      qE = Ub(2528),
      uE = Ub(2386),
      rE = Ub(2445),
      KE = Ub(2451),
      oE = Ub(2453),
      lE = Ub(2522),
      tE = Ub(2503),
      wE = Ub(2218),
      sE = Ub(2238),
      gE = Ub(2229),
      CE = Ub(1934),
      VE = Ub(2455),
      OE = Ub(2246);

    function cE(bb) {
      let {
        show: ab
      } = bb;
      return ab ? (0, vb.jsx)(JE, {}) : null
    }

    function JE() {
      const {
        t: bb
      } = (0, Eb.A)(), {
        followsLeader: ab
      } = (0, uE.f)(), {
        loading: Ub,
        friends: Mb,
        requests: Bb,
        invites: eb
      } = (0, tb.l)(), {
        userContext: Lb
      } = (0, Xb.c)(), [Pb, jb] = (0, Ab.useState)(OE.j);
      (0, Ab.useEffect)((() => {
        (0, OE.b)()
      }), []);
      const Rb = Bb.map((bb => bb.name)),
        {
          state: yb,
          recentRequesters: Zb
        } = (0, tE.o)(),
        Db = new Map([...("loaded" === yb.status ? yb.recentPlayers : []).map((bb => [bb.preview.name, bb])), ...Zb.map((bb => [bb.name, bb]))]),
        zb = (0, Ab.useRef)(null),
        [fb, mb] = (0, Ab.useState)(""),
        [pb, Nb] = (0, Ab.useState)("Enter"),
        [Wb, Hb] = (0, Ab.useState)(null);

      function Ib() {
        fb && (Nb("Loading"), (0, gE.l)(fb, "social_menu").then((bb => {
          if (zb.current) switch (bb.kind) {
            case "sent":
              Nb("Success");
              break;
            case "becameFriends":
              Nb("BecameFriends");
              break;
            case "failed":
              Hb(bb.message), Nb("Error")
          }
        })))
      }
      return (0, Ab.useEffect)((() => {
        if ("Enter" === pb || "Loading" === pb) return;
        const bb = setTimeout((() => {
          zb.current.value = "", mb(""), Nb("Enter")
        }), "Success" === pb ? 1e3 : 4e3);
        return () => {
          clearTimeout(bb)
        }
      }), [pb]), (0, vb.jsx)("div", {
        className: "SocialMenu",
        children: (0, vb.jsxs)("div", {
          className: "SocialMenuInner",
          children: [(0, vb.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, vb.jsxs)("div", {
              className: "SocialMenuBox SocialMenuAddFriend",
              children: [(0, vb.jsx)(oE.b, {
                label: bb("socialBar:addFriend")
              }), (0, vb.jsxs)("div", {
                className: "AddFriendBody",
                children: [(0, vb.jsxs)("div", {
                  className: Tb()("AddFriendBodyOverlay", {
                    [`AddFriendBodyOverlay${pb}`]: !0
                  }),
                  children: ["Loading" === pb && (0, vb.jsx)(ib.b, {}), "Success" === pb && (0, vb.jsx)(Yb.e, {
                    name: "check"
                  }), "BecameFriends" === pb && (0, vb.jsx)(vb.Fragment, {
                    children: bb("socialBar:nowFriends", {
                      playerName: fb
                    })
                  }), "Error" === pb && Wb && (0, vb.jsx)(vb.Fragment, {
                    children: bb(Wb.translationKey, Wb.params)
                  })]
                }), (0, vb.jsxs)("div", {
                  className: "PlayerSearch",
                  children: [(0, vb.jsx)(xb.c, {
                    className: "PlayerSearchInput",
                    placeholderText: bb("socialBar:enterPlayerName"),
                    domRef: zb,
                    onValueChange: bb => {
                      mb((0, hb.q)(bb)), zb.current.value = (0, hb.q)(bb)
                    },
                    onEnter: () => {
                      fb && (0, nb.reportAnalyticsClick)({
                        id: "social.add_friend",
                        value: "social_menu"
                      }), Ib()
                    }
                  }), (0, vb.jsxs)(kb.g, {
                    className: "PlayerSearchInputButton SmallTextLight",
                    onClick: () => {
                      Ib()
                    },
                    analyticsClick: {
                      id: "social.add_friend",
                      value: "social_menu"
                    },
                    children: [(0, vb.jsx)(Yb.e, {
                      name: "user-plus"
                    }), " ", bb("socialBar:sendRequest")]
                  })]
                })]
              }), (0, vb.jsx)(VE.c, {
                surface: "social_menu",
                prefetchOnMount: !0
              })]
            }), eb.length > 0 && (0, vb.jsxs)("div", {
              className: "SocialMenuBox SocialMenuInvites",
              children: [(0, vb.jsx)(oE.b, {
                label: bb("socialBar:invites"),
                meta: eb.length
              }), eb.map((ab => (0, vb.jsxs)("div", {
                className: "SocialMenuInvite",
                children: [(0, vb.jsx)("div", {
                  className: "SocialMenuInviteIcon",
                  children: (0, vb.jsx)(wE.b, {
                    invite: ab
                  })
                }), (0, vb.jsx)("div", {
                  className: "SocialMenuInviteText",
                  children: (0, vb.jsx)(wE.f, {
                    invite: ab
                  })
                }), (0, vb.jsx)(kb.m, {
                  className: "SocialMenuInviteJoin SmallTextLight",
                  onClick: () => {
                    (0, sE.f)(ab)
                  },
                  analyticsClick: {
                    id: "social.accept_invite",
                    value: `social_menu:${ab.destination.kind}`
                  },
                  children: bb("general:join")
                }), (0, vb.jsx)(Ob.g, {
                  tooltipInner: (0, vb.jsx)(vb.Fragment, {
                    children: bb("general:decline")
                  }),
                  delayShow: 0,
                  children: (0, vb.jsx)(kb.h, {
                    className: "SocialMenuInviteDecline",
                    padDefaultFocus: "invite" === (null === Pb || void 0 === Pb ? void 0 : Pb.kind) && Pb.inviteId === ab.id,
                    onClick: () => {
                      tb.d.declineInvite(ab.id)
                    },
                    analyticsClick: {
                      id: "social.decline_invite",
                      value: `social_menu:${ab.destination.kind}`
                    },
                    children: (0, vb.jsx)(Yb.e, {
                      name: "xmark"
                    })
                  })
                })]
              }, ab.id)))]
            }), (0, vb.jsxs)("div", {
              className: Tb()("SocialMenuBox SocialMenuRequests", {
                SocialMenuBoxEmpty: !Ub && 0 === Bb.length
              }),
              children: [(0, vb.jsx)(oE.b, {
                label: (0, vb.jsxs)(vb.Fragment, {
                  children: [(0, vb.jsx)(Yb.e, {
                    name: CE.c
                  }), " ", bb("socialBar:requests")]
                }),
                meta: (0, vb.jsxs)(vb.Fragment, {
                  children: [Bb.length, Bb.length === cb.p && (0, vb.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: bb("socialBar:limitReached")
                  })]
                })
              }), Ub && (0, vb.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, vb.jsx)(ib.b, {})
              }), !Ub && 0 === Bb.length && (0, vb.jsx)("div", {
                className: "SocialMenuEmpty",
                children: bb("socialBar:noFriendRequests")
              }), !Ub && Bb.length > 0 && (0, vb.jsx)("div", {
                className: "PlayerRows",
                children: (0, vb.jsx)(LM.c, {
                  lazyLoadedClassName: "SocialMenuRequestsLazy",
                  observerUpdateDeps: [Bb],
                  children: Bb.map(((ab, Ub) => {
                    const Ab = Db.get(ab.name);
                    return (0, vb.jsxs)(KE.d, {
                      playerSocialPreview: ab,
                      zIndex: Bb.length - Ub,
                      padDefaultFocus: (0, OE.h)(Pb, ab.name, Ub),
                      status: Ab && (0, vb.jsx)(lE.d, {
                        gameNameWithVariation: Ab.gameNameWithVariation,
                        isPrivateLobby: Ab.isPrivateLobby
                      }),
                      children: [(0, vb.jsx)(Ob.g, {
                        tooltipInner: (0, vb.jsx)(vb.Fragment, {
                          children: bb("general:accept")
                        }),
                        delayShow: 0,
                        children: (0, vb.jsx)(kb.g, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            jb((0, OE.f)(Rb, Ub)), (0, gE.h)(ab.name, !0, {
                              source: "social_menu",
                              announceFriend: !1
                            })
                          },
                          analyticsClick: {
                            id: "social.accept_friend_request",
                            value: "social_menu"
                          },
                          children: (0, vb.jsx)(Yb.e, {
                            name: "check"
                          })
                        })
                      }), (0, vb.jsx)(Ob.g, {
                        tooltipInner: (0, vb.jsx)(vb.Fragment, {
                          children: bb("general:decline")
                        }),
                        delayShow: 0,
                        children: (0, vb.jsx)(kb.h, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            jb((0, OE.f)(Rb, Ub)), (0, gE.h)(ab.name, !1, {
                              source: "social_menu"
                            })
                          },
                          analyticsClick: {
                            id: "social.decline_friend_request",
                            value: "social_menu"
                          },
                          children: (0, vb.jsx)(Yb.e, {
                            name: "xmark"
                          })
                        })
                      })]
                    }, `${ab.name}_${ab.isError}`)
                  }))
                })
              })]
            }), (0, vb.jsx)(lE.h, {})]
          }), (0, vb.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, vb.jsxs)("div", {
              className: "SocialMenuBox SocialMenuParty",
              children: [(0, vb.jsx)(oE.b, {
                label: bb("socialBar:party")
              }), (0, vb.jsx)(rE.b, {})]
            }), (0, vb.jsxs)("div", {
              className: "SocialMenuBox SocialMenuFriends",
              children: [(0, vb.jsx)(oE.b, {
                label: (0, vb.jsxs)(vb.Fragment, {
                  children: [(0, vb.jsx)(Yb.e, {
                    name: CE.b
                  }), " ", bb("socialBar:friends")]
                }),
                meta: (0, vb.jsxs)(vb.Fragment, {
                  children: [Mb.length, Mb.length >= (0, cb.c)(Lb.getPlayerRanks()) && (0, vb.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: bb("socialBar:limitReached")
                  })]
                })
              }), Ub && (0, vb.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, vb.jsx)(ib.b, {})
              }), !Ub && 0 === Mb.length && (0, vb.jsx)("div", {
                className: "SocialMenuEmpty",
                children: bb("socialBar:noFriends")
              }), !Ub && Mb.length > 0 && (0, vb.jsx)("div", {
                className: "PlayerRows",
                children: (0, vb.jsx)(LM.c, {
                  lazyLoadedClassName: "SocialMenuFriendsLazy",
                  observerUpdateDeps: [Mb],
                  children: Mb.map(((bb, Ub) => (0, vb.jsx)(KE.d, {
                    playerSocialPreview: bb,
                    isFriend: !0,
                    hideFriendBadge: !0,
                    onFriendRemoved: bb => {
                      tb.d.removeFriendFromState(bb)
                    },
                    zIndex: Mb.length - Ub,
                    children: (0, vb.jsx)(KE.b, {
                      friend: bb,
                      followsLeader: ab,
                      analyticsSurface: "social_menu"
                    })
                  }, `${bb.name}_${bb.isError}`)))
                })
              })]
            })]
          })]
        })
      })
    }
    var nE = Ub(2364);
    const SE = bb => {
        let {
          action: ab,
          padAction: Ub
        } = bb;
        const {
          isTouchScreen: Ab
        } = (0, mb.n)(["isTouchScreen"]), Mb = (0, TA.o)();
        return Ab && !Mb ? null : (0, vb.jsx)(nU.b, {
          className: "EverythingMenuTabKey",
          noaAction: ab,
          padHidesKey: !0,
          padMenuShortcut: Ub
        })
      },
      bY = (0, Ab.memo)((function() {
        const {
          t: bb
        } = (0, Eb.A)(), {
          gameState: ab,
          openEverythingMenuName: Ub,
          initSdkSelectorFinished: Mb,
          crosshairGameView: Yb
        } = (0, mb.n)(["gameState", "openEverythingMenuName", "initSdkSelectorFinished", "crosshairGameView"]), {
          userContext: Bb
        } = (0, Xb.c)(), eb = (0, ob.purchasesAllowed)(), Lb = (0, Kb.G)(), Pb = (bb, ab) => (0, vb.jsx)(SE, {
          action: bb,
          padAction: ab
        }), [jb, Rb] = (0, Ab.useState)(null), Zb = (0, Ab.useRef)(null), Db = {
          ..."inGame" === ab ? {} : (0, kb.Q)({
            focusOnClick: !1
          }),
          ...RA.e
        }, zb = null !== Ub, xb = Ub !== ea.j.COSMETIC_SHOP && !Yb;
        async function ib() {
          await async function() {
            if (!jb) return;
            await jb(), Rb(null)
          }(), mb.c.set({
            openEverythingMenuName: null
          })
        }
        const fb = (0, Ab.useMemo)((() => "inGame" === ab ? {
          text: bb("settingsMenu:exitGame"),
          onClick: () => {
            (0, QE.e)()
          }
        } : (0, Wb.d)() ? {
          text: bb("settingsMenu:exitGame"),
          onClick: () => {
            Ta.j.discordActivity().then((bb => {
              bb.exit("User exited the game")
            }))
          }
        } : null), [ab, bb]);
        const pb = (0, vb.jsx)("div", {
          className: "EverythingMenuCloseButtonClickZone",
          onClick: () => {
            ib()
          },
          children: (0, vb.jsx)(kb.k, {
            className: "EverythingMenuCloseButton"
          })
        });
        return (0, vb.jsx)(kA.d, {
          showing: zb,
          globallyUniqueKey: "EverythingMenu",
          alwaysMountChildren: !0,
          keepsMovement: Ub === ea.j.SHOP,
          doGameplayStartStopOnShow: "inGame" === ab,
          children: (0, vb.jsx)(ZA.d, {
            className: "EverythingMenuContainer",
            show: zb && !Yb,
            children: (0, vb.jsx)(yA.d, {
              close: () => {
                ib()
              },
              togglePointerLock: !1,
              children: (0, vb.jsxs)("div", {
                className: "EverythingMenu",
                children: [!(0, aT.j)(Ub) && (0, vb.jsxs)("div", {
                  className: "EverythingMenuTabList",
                  children: [(0, vb.jsxs)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerStart",
                    children: [fb && (0, vb.jsx)(kb.e, {
                      className: "EverythingMenuBackButton",
                      padDestructive: !0,
                      onClick: () => {
                        fb.onClick()
                      },
                      children: fb.text
                    }), zb && eb && (0, vb.jsx)("div", {
                      ...Db,
                      className: "EverythingMenuWallet",
                      title: bb("homePage:getPremiumCurrency"),
                      onClick: () => {
                        (0, Kb.m)({
                          mode: "current",
                          source: "menuWallet"
                        })
                      },
                      children: (0, vb.jsx)(GE.h, {})
                    })]
                  }), (0, vb.jsxs)("div", {
                    className: "EverythingMenuTabListInner",
                    "data-pad-tabs": "1",
                    children: [(0, vb.jsxs)("div", {
                      ...Db,
                      "data-pad-tab": !0,
                      "data-pad-selected": Ub === ea.j.SETTINGS ? "true" : void 0,
                      className: Tb()("EverythingMenuTab", {
                        EverythingMenuTabActive: Ub === ea.j.SETTINGS
                      }),
                      onClick: () => {
                        mb.c.set({
                          openEverythingMenuName: ea.j.SETTINGS
                        })
                      },
                      children: [bb("general:settings"), Pb("OpenSettings", "pause")]
                    }), (0, vb.jsxs)("div", {
                      ...Db,
                      "data-pad-tab": !0,
                      "data-pad-selected": Ub === ea.j.CUSTOMISATION ? "true" : void 0,
                      className: Tb()("EverythingMenuTab", {
                        EverythingMenuTabActive: Ub === ea.j.CUSTOMISATION
                      }),
                      onClick: () => {
                        mb.c.set({
                          openEverythingMenuName: ea.j.CUSTOMISATION
                        })
                      },
                      children: [bb("general:player"), Pb("OpenCharacterCustomization")]
                    }), yb.featureFlags.useSocialFeatures && (0, vb.jsxs)("div", {
                      ...Db,
                      "data-pad-tab": !0,
                      "data-pad-selected": Ub === ea.j.SOCIAL ? "true" : void 0,
                      className: Tb()("EverythingMenuTab", {
                        EverythingMenuTabActive: Ub === ea.j.SOCIAL
                      }),
                      ...(0, nb.e)({
                        id: "social.open_menu",
                        value: "menu_tab"
                      }, Ub === ea.j.SOCIAL),
                      onClick: () => {
                        mb.c.set({
                          openEverythingMenuName: ea.j.SOCIAL
                        })
                      },
                      children: [bb("socialBar:social"), (0, vb.jsx)(nE.c, {})]
                    }), eb && (0, vb.jsxs)("div", {
                      ...Db,
                      "data-pad-tab": !0,
                      "data-pad-selected": Ub === ea.j.COSMETIC_SHOP ? "true" : void 0,
                      className: Tb()("EverythingMenuTab EverythingMenuTabCosmeticShop", {
                        EverythingMenuTabActive: Ub === ea.j.COSMETIC_SHOP
                      }),
                      onClick: () => {
                        mb.c.set({
                          openEverythingMenuName: ea.j.COSMETIC_SHOP
                        })
                      },
                      children: [(0, vb.jsx)("span", {
                        className: "EverythingMenuTabCosmeticShopText",
                        children: bb("store:title")
                      }), "new" === Lb && (0, vb.jsx)(YE, {}), "dot" === Lb && (0, vb.jsx)("span", {
                        className: "EverythingMenuTabStoreBadge EverythingMenuTabStoreDot"
                      })]
                    }), "inGame" === ab && (0, vb.jsxs)("div", {
                      ...Db,
                      "data-pad-tab": !0,
                      "data-pad-selected": Ub === ea.j.LOBBY_LEADERBOARD ? "true" : void 0,
                      className: Tb()("EverythingMenuTab", {
                        EverythingMenuTabActive: Ub === ea.j.LOBBY_LEADERBOARD
                      }),
                      onClick: () => {
                        mb.c.set({
                          openEverythingMenuName: ea.j.LOBBY_LEADERBOARD
                        })
                      },
                      children: [bb("general:lobby"), Pb("OpenLobbyLeaderboard", "leaderboard")]
                    })]
                  }), (0, vb.jsx)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerEnd",
                    children: pb
                  })]
                }), (0, aT.j)(Ub) && pb, (0, vb.jsxs)("div", {
                  className: "EverythingMenuBody",
                  "data-pad-initial-area": !0,
                  style: {
                    "--everythingMenuBodyBackgroundOpacity": "inGame" === ab ? "0.85" : "1"
                  },
                  children: [(0, vb.jsx)(vA, {
                    show: Ub === ea.j.SETTINGS,
                    setBeforeResumeCallback: Rb
                  }), (0, vb.jsx)(jA, {
                    show: Ub === ea.j.CUSTOMISATION
                  }), (0, vb.jsx)(Ab.Suspense, {
                    fallback: null,
                    children: (0, vb.jsx)(gM, {
                      show: Ub === ea.j.SHOP
                    })
                  }), (0, vb.jsx)(MT, {
                    show: Ub === ea.j.LOBBY_LEADERBOARD
                  }), (0, vb.jsx)(hE, {
                    show: Ub === ea.j.COSMETIC_SHOP
                  }), (0, vb.jsx)(cE, {
                    show: Ub === ea.j.SOCIAL
                  })]
                }), !(0, yb.isMobileApp)() && (0, DA.g)(Bb.getPlayerRanks()) && (0, vb.jsx)(ZA.d, {
                  ref: Zb,
                  className: "EverythingMenuBannerDiv",
                  show: xb,
                  "data-pad-hint-bar-avoid": !0,
                  "data-pad-no-step-in": !0,
                  children: (0, vb.jsx)(qE.b, {
                    info: {
                      adId: 2,
                      adType: "leaderboard",
                      adAlias: "banner_shop"
                    },
                    sizeInfo: {
                      parentRef: Zb
                    },
                    showing: zb && xb,
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
  8910: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Tb
    });
    var Ab = Ub(325),
      Mb = Ub(8914);

    function Tb(bb, ab, Ub) {
      const Tb = Object.entries(ab).sort(((bb, ab) => ab[1] - bb[1])),
        Eb = (0, Ab.kb)(bb);
      Eb.push(bb ? "\n\n" : "\n");
      for (const [Mb, jb] of Tb) {
        var Yb, Bb, eb;
        const bb = null !== (Yb = null === Ub || void 0 === Ub || null === (Bb = Ub[Mb]) || void 0 === Bb ? void 0 : Bb.icon) && void 0 !== Yb ? Yb : `${Mb} Enchantment`;
        Eb.push({
          icon: bb,
          style: {
            fontSize: "1.5rem"
          }
        }), Eb.push({
          str: `${Mb} ${null!==(eb=(0,Ab.O)(jb))&&void 0!==eb?eb:jb}\n`
        })
      }
      Eb.push({
        str: "\n"
      });
      for (const [Ab, jb] of Tb) {
        var vb, Lb, Pb, Xb;
        const bb = null !== (vb = null === Ub || void 0 === Ub || null === (Lb = Ub[Ab]) || void 0 === Lb ? void 0 : Lb.icon) && void 0 !== vb ? vb : `${Ab} Enchantment`,
          ab = null !== (Pb = null === Ub || void 0 === Ub || null === (Xb = Ub[Ab]) || void 0 === Xb ? void 0 : Xb.description) && void 0 !== Pb ? Pb : (0, Mb.i)(Ab);
        Eb.push({
          icon: bb,
          style: {
            fontSize: "1.25rem",
            opacity: .75
          }
        }), Eb.push({
          str: ab,
          style: {
            fontSize: "0.8em",
            fontWeight: "normal",
            opacity: .75
          }
        }), Eb.push({
          str: "\n"
        })
      }
      return Eb
    }
  },
  8917: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => eb,
      f: () => Zb,
      g: () => kb,
      k: () => Bb,
      l: () => yb,
      p: () => vb,
      r: () => Pb,
      t: () => Rb,
      w: () => Lb
    });
    var Ab = Ub(307),
      Mb = Ub(591),
      Tb = Ub(325),
      Eb = Ub(3951),
      Yb = Ub(8910);

    function Bb(bb, ab) {
      var Ub;
      let {
        player: Ab,
        chestOrCreative: Mb
      } = bb;
      var Tb;
      return ab < Ab.length ? null !== (Tb = Ab[ab]) && void 0 !== Tb ? Tb : null : null !== (Ub = Mb[ab - Ab.length]) && void 0 !== Ub ? Ub : null
    }

    function eb(bb) {
      var ab;
      return null !== (ab = bb.amount) && void 0 !== ab ? ab : 0
    }

    function vb(bb) {
      return 0 === bb.button || void 0 === bb.button
    }

    function Lb(bb) {
      return !!bb.shiftKey
    }

    function Pb(bb) {
      return "touches" in bb || "touch" === bb.pointerType || "pen" === bb.pointerType
    }
    const Xb = new Set,
      jb = 50;

    function Rb(bb, ab) {
      var Ub;
      const Ab = null === (Ub = bb[ab]) || void 0 === Ub ? void 0 : Ub.displayName;
      return (0, Mb.I)(Ab) ? "string" !== typeof ab ? "" : (!Xb.has(ab) && Xb.size < jb && (Xb.add(ab), console.warn(`No item called "${ab}", so its hover shows the name as given`)), ab) : Ab
    }

    function kb(bb, ab, Ub) {
      var Bb, eb, vb, Lb, Pb, Xb, jb, kb, yb, Zb, Db, zb, xb, ib;
      const fb = bb.attributes,
        mb = null !== (Bb = null === (eb = ab[bb.name]) || void 0 === eb ? void 0 : eb.rootName) && void 0 !== Bb ? Bb : bb.name,
        pb = null !== (vb = null !== (Lb = fb.customDisplayName) && void 0 !== Lb ? Lb : null === (Pb = ab[bb.name]) || void 0 === Pb ? void 0 : Pb.displayName) && void 0 !== vb ? vb : Rb(ab, mb);
      let Nb = pb;
      const Wb = null === (Xb = fb.customAttributes) || void 0 === Xb ? void 0 : Xb.enchantmentTier;
      Wb && (Nb = (0, Tb.kb)(pb, {
        colour: Tb.fb[Wb]
      }));
      const Hb = null !== (jb = null !== (kb = null !== (yb = function(bb, ab) {
        var Ub;
        if (void 0 === bb || null !== (Ub = ab.customAttributes) && void 0 !== Ub && Ub.author) return bb;
        const Mb = (0, Ab.cc)(bb);
        return Mb.every((bb => "string" === typeof bb)) ? bb : Mb.map((bb => "string" === typeof bb ? bb : {
          icon: bb.icon,
          style: {
            fontSize: "1.5em"
          }
        }))
      }(fb.customDescription, fb)) && void 0 !== yb ? yb : null === (Zb = ab[bb.name]) || void 0 === Zb ? void 0 : Zb.description) && void 0 !== kb ? kb : null === (Db = ab[mb]) || void 0 === Db ? void 0 : Db.description) && void 0 !== jb ? jb : "";
      let Ib = Hb;
      if (null !== (zb = fb.customAttributes) && void 0 !== zb && zb.enchantments) Ib = (0, Yb.b)(Hb, fb.customAttributes.enchantments, fb.customAttributes.enchantmentData);
      else if (Ub[mb]) Ib = (0, Tb.kb)(Hb), Ib.push({
        str: "\n"
      }), Ib.push({
        str: "Enchantable",
        style: {
          fontSize: "0.8em",
          fontWeight: "normal",
          opacity: .4
        }
      });
      else if (null !== (xb = fb.customAttributes) && void 0 !== xb && xb.mobSettings) {
        var db, Fb;
        const bb = fb.customAttributes.mobSettings;
        var hb, Gb;
        if (Ib = [], (0, Mb.I)(fb.customAttributes.health) || (Ib.push({
            str: "\n"
          }), Ib.push({
            icon: "Health",
            style: {
              fontSize: "1.5em"
            }
          }), Ib.push({
            str: " "
          }), Ib.push({
            str: fb.customAttributes.health.toString()
          }), (0, Mb.I)(bb.maxHealth) || (Ib.push({
            str: "/"
          }), Ib.push({
            str: bb.maxHealth.toString()
          }))), !(0, Mb.I)(bb.attackDamage) && bb.attackDamage > 0 && (Ib.push({
            str: "\n"
          }), Ib.push({
            icon: "Iron Sword",
            style: {
              fontSize: "1.5em"
            }
          }), Ib.push({
            str: " "
          }), Ib.push({
            str: bb.attackDamage.toString()
          })), !(0, Mb.I)(bb.secondaryAttackDamage) && bb.secondaryAttackDamage > 0 && (Ib.push({
            str: "\n"
          }), Ib.push({
            icon: "Stone Crossbow",
            style: {
              fontSize: "1.5em"
            }
          }), Ib.push({
            str: " "
          }), Ib.push({
            str: bb.secondaryAttackDamage.toString()
          })), (0, Mb.I)(bb.baseRunningSpeed) || (Ib.push({
            str: "\n"
          }), Ib.push({
            icon: "Speed",
            style: {
              fontSize: "1.5em"
            }
          }), Ib.push({
            str: " "
          }), Ib.push({
            str: bb.baseRunningSpeed.toFixed(2)
          })), "Saddled" === bb.metaInfo) Ib.push({
          str: "\n"
        }), Ib.push({
          str: {
            translationKey: "general:has"
          }
        }), Ib.push({
          str: " "
        }), Ib.push({
          icon: null !== (hb = null === (Gb = bb.tameInfo) || void 0 === Gb ? void 0 : Gb.saddleItemName) && void 0 !== hb ? hb : "Saddle",
          style: {
            fontSize: "1.5em"
          }
        });
        if (Ib.push({
            str: "\n"
          }), Ib.push({
            str: "\n"
          }), bb.petInfo && null !== (db = bb.tameInfo) && void 0 !== db && db.supportsFriendship) {
          const ab = Eb.c.getIconsFromFriendshipPoints(bb.petInfo.friendshipPoints);
          for (const bb of ab) Ib.push({
            icon: bb,
            style: {
              fontSize: "1.5em"
            }
          });
          Ib.push({
            str: "\n"
          });
          const Ub = Eb.c.getMobHungerLevel(bb.petInfo.lastFedAt);
          for (const bb of Eb.c.hungerLevelIcons[Ub]) Ib.push({
            icon: bb,
            style: {
              fontSize: "1.5em"
            }
          });
          Ib.push({
            str: " "
          }), Ib.push({
            str: Eb.c.hungerLevelTranslations[Ub],
            style: {
              fontWeight: "bolder"
            }
          })
        }
        if (bb.tameInfo && null !== (Fb = bb.tameInfo) && void 0 !== Fb && Fb.supportsFriendship) {
          var Qb, qb;
          let ab = null !== (Qb = bb.tameInfo.likedFoods) && void 0 !== Qb ? Qb : [];
          Ib.push({
            str: "\n"
          }), Ib.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: Eb.c.feedTextColours[Eb.c.MobFoodType.Superliked]
            }
          }), Ib.push({
            str: " "
          }), null !== (qb = bb.petInfo) && void 0 !== qb && qb.superlikedFoodKnown ? (Ib.push({
            icon: bb.petInfo.superlikedFood,
            style: {
              fontSize: "1.5em"
            }
          }), ab = ab.filter((ab => ab !== bb.petInfo.superlikedFood))) : Ib.push({
            icon: "Question Mark",
            style: {
              fontSize: "1.5em"
            }
          }), Ib.push({
            str: "\n"
          }), Ib.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: Eb.c.feedTextColours[Eb.c.MobFoodType.Liked]
            }
          }), Ib.push({
            str: " "
          });
          for (const bb of ab) Ib.push({
            icon: bb,
            style: {
              fontSize: "1.5em"
            }
          });
          Ib.push({
            str: "\n"
          }), Ib.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: Eb.c.feedTextColours[Eb.c.MobFoodType.Neutral]
            }
          }), Ib.push({
            str: " "
          });
          for (const Ub of null !== (ub = bb.tameInfo.neutralFoods) && void 0 !== ub ? ub : []) {
            var ub;
            Ib.push({
              icon: Ub,
              style: {
                fontSize: "1.5em"
              }
            })
          }
          Ib.push({
            str: "\n"
          }), Ib.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: Eb.c.feedTextColours[Eb.c.MobFoodType.Disliked]
            }
          }), Ib.push({
            str: " "
          });
          for (const Ub of null !== (rb = bb.tameInfo.dislikedFoods) && void 0 !== rb ? rb : []) {
            var rb;
            Ib.push({
              icon: Ub,
              style: {
                fontSize: "1.5em"
              }
            })
          }
        }
        Ib.length > 0 ? (Ib.shift(), Ib.unshift(...(0, Tb.kb)(Hb))) : Ib = (0, Tb.kb)(Hb)
      }
      return {
        name: Nb,
        desc: Ib,
        fontStyle: null !== (ib = fb.customAttributes) && void 0 !== ib && ib.author ? "italic" : "normal"
      }
    }

    function yb(bb, ab, Ub, Ab) {
      const Mb = Bb(bb, Ub),
        Tb = Bb(bb, Ab);
      if (!Mb) return !1;
      const Eb = ab[Mb.name].armourReduction,
        Yb = ab[Tb.name].armourReduction;
      if (Yb === Eb) {
        var eb, vb, Lb, Pb;
        const bb = null !== (eb = null === (vb = Mb.attributes.customAttributes) || void 0 === vb ? void 0 : vb.enchantmentTier) && void 0 !== eb ? eb : "Tier 0",
          ab = null !== (Lb = null === (Pb = Tb.attributes.customAttributes) || void 0 === Pb ? void 0 : Pb.enchantmentTier) && void 0 !== Lb ? Lb : "Tier 0";
        return parseInt(bb.replace("Tier ", "")) >= parseInt(ab.replace("Tier ", ""))
      }
      return Eb > Yb
    }

    function Zb(bb) {
      let ab;
      if ("number" === typeof bb) {
        const Ub = document.querySelector(`[data-inven-idx="${bb}"]`);
        if (!Ub) return null;
        ab = Ub.getBoundingClientRect()
      } else ab = bb.getBoundingClientRect();
      return {
        x: ab.left + ab.width / 2,
        y: ab.top + ab.height / 2
      }
    }
  },
  8802: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Xb,
      d: () => jb,
      h: () => Rb
    });
    var Ab = Ub(1352),
      Mb = Ub(52),
      Tb = Ub(1238),
      Eb = Ub(4211),
      Yb = Ub(2221),
      Bb = Ub(1134),
      eb = Ub(101),
      vb = Ub(1858),
      Lb = Ub(1254),
      Pb = Ub(1023);

    function Xb(bb) {
      let {
        show: ab,
        onClose: Ub
      } = bb;
      const {
        requestedGameNameWithVariation: Ab,
        lobbyName: Mb,
        shownLobbyName: Tb
      } = (0, vb.k)("connectedGame"), Bb = (0, Yb.e)(Ab, Mb, !1);
      return eb.featureFlags.canUseInviteLinks && (0, Pb.jsx)(Eb.d, {
        show: ab,
        close: Ub,
        padShowsHud: !0,
        togglePointerLock: !1,
        globallyUniqueKey: "InviteLinkBox",
        doGameplayStartStopOnShow: !0,
        children: (0, Pb.jsxs)("div", {
          className: "InviteLinkBox AnimFadeInScaleUp",
          children: [(0, Pb.jsx)("div", {
            className: "InviteLinkBoxHeader SmallTextBold",
            children: "Invite Friends"
          }), (0, Pb.jsxs)("div", {
            className: "InviteLinkBoxDescription SmallTextLight",
            children: [(0, Pb.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: '"Join Lobby Name" Button Info'
            }), "Game: ", null === Bb ? (0, Pb.jsx)(Lb.b, {}) : Bb, (0, Pb.jsx)("br", {}), "Lobby Name: ", Tb, (0, Pb.jsx)("br", {}), (0, Pb.jsx)("br", {}), (0, Pb.jsx)("br", {}), (0, Pb.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: "Link"
            })]
          }), (0, Pb.jsx)(jb, {})]
        })
      })
    }

    function jb() {
      var bb;
      const {
        t: ab
      } = (0, Bb.A)(), Ub = null !== (bb = Rb(eb.featureFlags.canUseInviteLinks)) && void 0 !== bb ? bb : "Loading Link...", [Tb, Eb] = (0, Mb.useState)(0), [Yb, vb] = (0, Mb.useReducer)((bb => bb + 1), 0);
      return (0, Mb.useEffect)((() => {
        const bb = setTimeout((() => {
          vb()
        }), 1100);
        return () => {
          clearTimeout(bb)
        }
      }), [Tb]), eb.featureFlags.canUseInviteLinks && (0, Pb.jsxs)("div", {
        className: "InviteLinkInnerWrapper",
        children: [(0, Pb.jsx)("div", {
          className: "InviteLinkInner",
          children: Ub
        }), (0, Pb.jsx)(Ab.g, {
          className: "InviteLinkCopyButton",
          onClick: () => {
            navigator.clipboard.writeText(Ub).catch((bb => {
              console.error("Failed to copy invite link:", bb)
            })), Eb(Date.now())
          },
          disabled: Date.now() - Tb < 1e3,
          children: Date.now() - Tb < 1e3 ? ab("general:copied") : ab("general:copy")
        })]
      })
    }

    function Rb(bb) {
      const [ab, Ub] = (0, Mb.useState)(null);
      return (0, Mb.useEffect)((() => {
        if (!bb) return;
        let ab = !0;
        return (0, Tb.y)().then((bb => {
          ab && Ub(bb)
        })).catch((bb => {
          console.error("Failed to get invite link:", bb)
        })), () => {
          ab = !1
        }
      }), [bb]), ab
    }
  },
  8898: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => eb
    });
    var Ab = Ub(52),
      Mb = Ub(984),
      Tb = Ub.n(Mb),
      Eb = Ub(1858),
      Yb = Ub(1023);

    function Bb(bb) {
      const ab = Math.floor(bb / 3600),
        Ub = Math.floor(bb % 3600 / 60),
        Ab = Math.floor(bb % 60),
        Mb = `${Ub.toString().padStart(2,"0")}:${Ab.toString().padStart(2,"0")}`;
      return ab > 0 ? `${ab}:${Mb}` : Mb
    }
    const eb = (0, Ab.memo)((function(bb) {
      let {
        className: ab
      } = bb;
      const {
        recording: Ub,
        seconds: Ab
      } = (0, Eb.k)("replayRecorder");
      return Ub ? (0, Yb.jsxs)("div", {
        className: Tb()("RecordingIndicator", ab),
        children: [(0, Yb.jsx)("span", {
          className: "RecordingIndicatorDot"
        }), (0, Yb.jsx)("span", {
          className: "RecordingIndicatorLabel",
          children: "REC"
        }), (0, Yb.jsx)("span", {
          className: "RecordingIndicatorTime",
          children: Bb(Ab)
        })]
      }) : null
    }))
  },
  4575: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => kb
    });
    var Ab = Ub(984),
      Mb = Ub.n(Ab),
      Tb = Ub(4329),
      Eb = Ub(1134),
      Yb = Ub(990),
      Bb = Ub(1352),
      eb = Ub(1413),
      vb = Ub(1260),
      Lb = Ub(2337),
      Pb = Ub(1023);
    const Xb = {
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

    function jb(bb) {
      let {
        platform: ab
      } = bb;
      const Ub = "youtube" === ab;
      return (0, Pb.jsxs)("span", {
        className: Mb()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: Ub
        }),
        children: [Ub && (0, Pb.jsx)(Lb.e, {
          variant: "white"
        }), !Ub && (0, Pb.jsx)(Yb.e, {
          name: Xb[ab].icon,
          kit: "brands"
        })]
      })
    }

    function Rb(bb) {
      let {
        platform: ab,
        link: Ub,
        editable: Ab,
        userContext: Mb,
        onLinksUpdated: Lb
      } = bb;
      const {
        t: Rb
      } = (0, Eb.A)(), kb = Xb[ab];
      if (!Ub && !Ab) return null;

      function yb() {
        var bb;
        if (!Mb || !Lb) return;
        vb.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: kb.name
            }
          },
          prefixText: Tb.z[ab],
          placeholderText: "playBloxd",
          initialValue: null !== (bb = null === Ub || void 0 === Ub ? void 0 : Ub.handle) && void 0 !== bb ? bb : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: Ub ? "general:remove" : void 0
        }).getResult().then((async bb => {
          if ("notificationTornDown" !== bb && null !== bb) try {
            "submit" === bb.type ? await eb.b.setSocialLink(Mb, ab, bb.value) : await eb.b.clearSocialLink(Mb, ab), Lb()
          } catch (Ub) {
            console.error("Failed to update social link", Ub), vb.NotificationProvider.showAlertPopup({
              title: Ub.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (Ub) {
        const bb = `@${Ub.handle}`;
        return (0, Pb.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: kb.color
          },
          href: Ub.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, Pb.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, Pb.jsx)(jb, {
              platform: ab
            }), (0, Pb.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, Pb.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: bb
              })
            })]
          }), Ab && (0, Pb.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, Bb.Q)({
              stopPropagation: !0
            }),
            onClick: bb => {
              bb.stopPropagation(), bb.preventDefault(), yb()
            },
            children: (0, Pb.jsx)(Yb.e, {
              name: "pen-to-square"
            })
          }), !Ab && (0, Pb.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, Pb.jsx)(Yb.e, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, Pb.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: kb.color
        },
        ...(0, Bb.Q)(),
        onClick: () => {
          yb()
        },
        children: [(0, Pb.jsx)(jb, {
          platform: ab
        }), (0, Pb.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, Pb.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: kb.name
          }), (0, Pb.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: Rb("homePage:profileSocialLinkAdd")
          })]
        }), (0, Pb.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, Pb.jsx)(Yb.e, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function kb(bb) {
      let {
        socialLinks: ab,
        editable: Ub = !1,
        userContext: Ab,
        onLinksUpdated: Mb
      } = bb;
      if (!Ub && 0 === ab.length) return null;
      const Eb = new Map(ab.map((bb => [bb.platform, bb]))),
        Yb = Ub ? Tb.v : ab.map((bb => bb.platform));
      return (0, Pb.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, Pb.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: Yb.map((bb => (0, Pb.jsx)(Rb, {
            platform: bb,
            link: Eb.get(bb),
            editable: Ub,
            userContext: Ab,
            onLinksUpdated: Mb
          }, bb)))
        })
      })
    }
  },
  8906: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Tb
    });
    var Ab = Ub(4218),
      Mb = Ub(4225);

    function Tb(bb) {
      let {
        children: ab,
        showing: Ub,
        globallyUniqueKey: Tb,
        alwaysMountChildren: Eb = !1,
        doGameplayStartStopOnShow: Yb = !0,
        keepsMovement: Bb = !1
      } = bb;
      return (0, Mb.b)(!0, Ub, Tb, Bb), (0, Ab.c)(Yb, Ub), Ub || Eb ? ab : null
    }
  },
  8957: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Tb
    });
    var Ab = Ub(52),
      Mb = Ub(3237);

    function Tb() {
      const [bb, ab] = (0, Ab.useState)(!1);
      return (0, Ab.useLayoutEffect)((() => {
        let bb = !0;
        return (0, Mb.b)().then((() => {
          bb && ab(!0)
        })), () => {
          bb = !1
        }
      }), []), bb
    }
  },
  6188: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Tb
    });
    var Ab = Ub(52),
      Mb = Ub(31);

    function Tb(bb, ab) {
      var Ub;
      const [Tb, Eb] = (0, Ab.useState)(null !== (Ub = Mb.f.getItem(bb)) && void 0 !== Ub ? Ub : ab);
      return [Tb, ab => {
        Mb.f.setItem(bb, ab), Eb(ab)
      }]
    }
  },
  8879: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Pb,
      f: () => Lb
    });
    Ub(8884);
    var Ab = Ub(984),
      Mb = Ub.n(Ab),
      Tb = Ub(52),
      Eb = Ub(8842);

    function Yb(bb, ab) {
      return Math.max(1, Math.round(bb * ab))
    }

    function Bb(bb, ab, Ub) {
      const Ab = 2 * Ub >= ab - 1;
      return {
        x: bb,
        y: bb,
        size: ab,
        border: Math.min(Ub, Math.floor(ab / 2)),
        filled: Ab
      }
    }
    var eb = Ub(1023);
    const vb = 1.4;

    function Lb(bb, ab) {
      return bb && ab ? `scale(${vb})` : "scale(1)"
    }

    function Pb(bb) {
      return "classic" === bb.settings.style ? (0, eb.jsx)(Rb, {
        ...bb
      }) : (0, eb.jsx)(ib, {
        ...bb
      })
    }
    const Xb = .125;

    function jb(bb, ab) {
      const Ub = {};
      if (bb.color !== Eb.d.color && (Ub.color = (0, Eb.i)(bb.color)), bb.opacity !== Eb.d.opacity && (Ub.opacity = bb.opacity / 100), bb.outline !== Eb.d.outline || bb.outlineColor !== Eb.d.outlineColor) {
        const ab = bb.outline,
          Ab = (0, Eb.i)(bb.outlineColor);
        Ub.textShadow = ab > 0 ? `-${ab}px 0 ${Ab}, 0 ${ab}px ${Ab}, ${ab}px 0 ${Ab}, 0 -${ab}px ${Ab}` : "none"
      }
      if (bb.size !== Eb.d.size) {
        const Ab = bb.size / 100;
        Ub.fontSize = ab ? `calc(max(1.3rem, 18px) * ${Ab})` : `calc(1.3rem * ${Ab})`, Ub.marginTop = `-${Xb}em`, Ub.transformOrigin = `50% calc(50% + ${Xb}em)`
      }
      return Ub
    }

    function Rb(bb) {
      let {
        settings: ab,
        touch: Ub,
        inPreview: Ab,
        inEditor: Tb,
        pressed: Eb = !1,
        pressRef: Yb
      } = bb;
      return (0, eb.jsx)("div", {
        className: Mb()("Crosshair", {
          Touch: Ub,
          CrosshairInPreview: Ab,
          CrosshairInEditor: Tb || Ab
        }),
        ref: Yb,
        style: {
          transform: Lb(Eb, ab.growOnClick),
          ...jb(ab, Ub)
        },
        children: "+"
      })
    }

    function kb(bb, ab) {
      return bb / ab + "px"
    }

    function yb(bb, ab, Ub, Ab) {
      return {
        ...zb(bb, ab, Ub),
        width: kb(bb.w, Ub),
        height: kb(bb.h, Ub),
        background: Ab
      }
    }

    function Zb(bb, ab, Ub) {
      return {
        left: kb(bb.x, ab),
        top: kb(bb.y, ab),
        width: kb(bb.size, ab),
        height: kb(bb.size, ab),
        borderWidth: kb(bb.border, ab),
        borderColor: Ub,
        background: bb.filled ? Ub : void 0
      }
    }
    const Db = {
      left: [-1, 0],
      right: [1, 0],
      up: [0, -1],
      down: [0, 1]
    };

    function zb(bb, ab, Ub) {
      const [Ab, Mb] = bb.arm ? Db[bb.arm] : [0, 0], Tb = Math.round(ab * Ub);
      return {
        left: kb(bb.x + Ab * Tb, Ub),
        top: kb(bb.y + Mb * Tb, Ub)
      }
    }

    function xb(bb) {
      return bb.arm ? {
        "data-arm": bb.arm,
        "data-x": bb.x,
        "data-y": bb.y
      } : {}
    }

    function ib(bb) {
      let {
        settings: ab,
        inPreview: Ub,
        inEditor: Ab,
        pressed: Lb = !1,
        spread: Pb,
        spreadRef: Xb
      } = bb;
      const jb = (0, Tb.useRef)(null),
        {
          box: Rb,
          dpr: kb
        } = function(bb) {
          const [ab, Ub] = (0, Tb.useState)({
            box: {
              left: 0,
              top: 0,
              width: 0,
              height: 0
            },
            dpr: 1
          });
          return (0, Tb.useLayoutEffect)((() => {
            const ab = bb.current;
            if (!ab) return;
            const Ab = () => {
              const bb = ab.getBoundingClientRect(),
                Ab = window.devicePixelRatio || 1;
              Ub((ab => ab.dpr === Ab && ab.box.left === bb.left && ab.box.top === bb.top && ab.box.width === bb.width && ab.box.height === bb.height ? ab : {
                box: {
                  left: bb.left,
                  top: bb.top,
                  width: bb.width,
                  height: bb.height
                },
                dpr: Ab
              }))
            };
            Ab();
            const Mb = new ResizeObserver(Ab);
            return Mb.observe(ab), window.addEventListener("resize", Ab), window.addEventListener("scroll", Ab, !0), () => {
              Mb.disconnect(), window.removeEventListener("resize", Ab), window.removeEventListener("scroll", Ab, !0)
            }
          }), [bb]), ab
        }(jb),
        Db = (0, Tb.useRef)(kb);
      Db.current = kb;
      const ib = function(bb, ab) {
          const Ub = Yb(bb.lineThickness, ab),
            Ab = Yb(bb.lineLength, ab),
            Mb = Math.round(bb.gap * ab),
            Tb = Yb(bb.dotSize, ab),
            Eb = bb.outline > 0 ? Yb(bb.outline, ab) : 0,
            eb = Yb(bb.circleThickness, ab),
            vb = bb.circle ? Math.round(bb.circleRadius * ab * 2 + eb) : 0,
            Lb = function(bb, ab, Ub, Ab) {
              return bb.lines ? ab : bb.dot ? Ub : bb.circle && Ab % 2 === 0 ? 2 : 1
            }(bb, Ub, Tb, vb),
            Pb = [];
          if (bb.lines && (Pb.push({
              x: Lb + Mb,
              y: 0,
              w: Ab,
              h: Ub,
              arm: "right"
            }), Pb.push({
              x: -Mb - Ab,
              y: 0,
              w: Ab,
              h: Ub,
              arm: "left"
            }), Pb.push({
              x: 0,
              y: Lb + Mb,
              w: Ub,
              h: Ab,
              arm: "down"
            }), bb.tStyle || Pb.push({
              x: 0,
              y: -Mb - Ab,
              w: Ub,
              h: Ab,
              arm: "up"
            }), 0 === Mb && Pb.push({
              x: 0,
              y: 0,
              w: Ub,
              h: Ub
            })), bb.dot) {
            const bb = Math.floor((Lb - Tb) / 2);
            Pb.push({
              x: bb,
              y: bb,
              w: Tb,
              h: Tb
            })
          }
          const Xb = Pb.map((bb => ({
            ...bb,
            x: bb.x - Eb,
            y: bb.y - Eb,
            w: bb.w + 2 * Eb,
            h: bb.h + 2 * Eb
          })));
          let jb = null,
            Rb = null;
          if (bb.circle) {
            const bb = vb + ((vb - Lb) % 2 === 0 ? 0 : 1),
              ab = (Lb - bb) / 2;
            jb = Bb(ab, bb, eb), Eb > 0 && (Rb = Bb(ab - Eb, bb + 2 * Eb, eb + 2 * Eb))
          }
          return {
            cell: Lb,
            fills: Pb,
            outlines: Eb > 0 ? Xb : [],
            ring: jb,
            ringOutline: Rb
          }
        }(Lb && ab.growOnClick ? function(bb, ab) {
          return {
            ...bb,
            outline: bb.outline * ab,
            lineLength: bb.lineLength * ab,
            lineThickness: bb.lineThickness * ab,
            gap: bb.gap * ab,
            dotSize: bb.dotSize * ab,
            circleRadius: bb.circleRadius * ab,
            circleThickness: bb.circleThickness * ab
          }
        }(ab, vb) : ab, kb),
        fb = function(bb, ab, Ub) {
          const Ab = Math.round((bb.left + bb.width / 2) * Ub - ab / 2),
            Mb = Math.round((bb.top + bb.height / 2) * Ub - ab / 2);
          return {
            x: Ab / Ub - bb.left,
            y: Mb / Ub - bb.top
          }
        }(Rb, ib.cell, kb),
        mb = (0, Eb.i)(ab.color),
        pb = (0, Eb.i)(ab.outlineColor),
        Nb = (0, Tb.useRef)(0);
      (0, Tb.useLayoutEffect)((() => {
        if (Xb) return Xb.current = bb => {
          var ab;
          Nb.current = bb, null === (ab = jb.current) || void 0 === ab || ab.querySelectorAll("[data-arm]").forEach((ab => {
            Object.assign(ab.style, zb(function(bb) {
              return {
                x: Number(bb.dataset.x),
                y: Number(bb.dataset.y),
                arm: bb.dataset.arm
              }
            }(ab), bb, Db.current))
          }))
        }, () => {
          Xb.current = null
        }
      }), [Xb]);
      const Wb = null !== Pb && void 0 !== Pb ? Pb : Nb.current;
      return (0, eb.jsx)("div", {
        ref: jb,
        className: Mb()("CrosshairShapes", {
          CrosshairInPreview: Ub,
          CrosshairInEditor: Ab || Ub,
          CrosshairSpreads: void 0 !== Xb
        }),
        children: (0, eb.jsx)("div", {
          className: "CrosshairShapesOrigin",
          style: {
            left: fb.x,
            top: fb.y,
            opacity: ab.opacity / 100
          },
          children: (0, eb.jsxs)("div", {
            className: "CrosshairShapesPress",
            children: [ib.ringOutline && (0, eb.jsx)("div", {
              className: "CrosshairRing",
              style: Zb(ib.ringOutline, kb, pb)
            }), ib.outlines.map(((bb, ab) => (0, eb.jsx)("div", {
              className: "CrosshairPart",
              ...xb(bb),
              style: yb(bb, Wb, kb, pb)
            }, `o${ab}`))), ib.ring && (0, eb.jsx)("div", {
              className: "CrosshairRing",
              style: Zb(ib.ring, kb, mb)
            }), ib.fills.map(((bb, ab) => (0, eb.jsx)("div", {
              className: "CrosshairPart",
              ...xb(bb),
              style: yb(bb, Wb, kb, mb)
            }, `f${ab}`)))]
          })
        })
      })
    }
  },
  8889: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => vb,
      f: () => kb,
      h: () => Rb
    });
    var Ab = Ub(8842);
    const Mb = "XH1-",
      Tb = ["lines", "dot", "circle", "tStyle", "growOnClick", "forGuns"],
      Eb = ["opacity", "outline", "size", "lineLength", "lineThickness", "gap", "dotSize", "circleRadius", "circleThickness"],
      Yb = ["color", "outlineColor"],
      Bb = 1 + 3 * Yb.length + Eb.length + 1,
      eb = Math.ceil(8 * Bb / Math.log2(62)),
      vb = Mb.length + eb;

    function Lb(bb) {
      let ab = 90;
      for (const Ub of bb) ab = 31 * ab + Ub & 255;
      return ab
    }
    const Pb = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
      Xb = BigInt(Pb.length);

    function jb(bb, ab) {
      let Ub = 0n;
      for (const Mb of bb) {
        const bb = Pb.indexOf(Mb);
        if (bb < 0) return null;
        Ub = Ub * Xb + BigInt(bb)
      }
      if (Ub >> BigInt(8 * ab) !== 0n) return null;
      const Ab = [];
      for (let Mb = 0; Mb < ab; Mb++) Ab.unshift(Number(0xffn & Ub)), Ub >>= 8n;
      return Ab
    }

    function Rb(bb) {
      let ab = "shapes" === bb.style ? 1 : 0;
      Tb.forEach(((Ub, Ab) => {
        bb[Ub] && (ab |= 1 << Ab + 1)
      }));
      const Ub = [ab];
      for (const Mb of Yb) {
        const ab = (0, Ab.e)(Mb, bb[Mb]);
        Ub.push(ab >> 16 & 255, ab >> 8 & 255, 255 & ab)
      }
      for (const Mb of Eb) {
        const {
          min: ab,
          step: Tb
        } = Ab.b[Mb];
        Ub.push(Math.round(((0, Ab.e)(Mb, bb[Mb]) - ab) / Tb))
      }
      return Ub.push(Lb(Ub)), Mb + function(bb, ab) {
        let Ub = 0n;
        for (const Mb of bb) Ub = Ub << 8n | BigInt(Mb);
        let Ab = "";
        for (let Mb = 0; Mb < ab; Mb++) Ab = Pb[Number(Ub % Xb)] + Ab, Ub /= Xb;
        return Ab
      }(Ub, eb)
    }

    function kb(bb) {
      for (const ab of bb.matchAll(new RegExp(`XH1-([0-9A-Za-z]{${eb}})`, "gi"))) {
        const bb = yb(jb(ab[1], Bb));
        if (bb) return bb
      }
      return null
    }

    function yb(bb) {
      if (!bb || bb.length !== Bb || Lb(bb.slice(0, -1)) !== bb[bb.length - 1]) return null;
      const ab = bb[0],
        Ub = {
          ...Ab.d,
          style: 1 & ab ? "shapes" : "classic"
        };
      Tb.forEach(((bb, Ab) => {
        Ub[bb] = 0 !== (ab & 1 << Ab + 1)
      }));
      let Mb = 1;
      for (const Ab of Yb) Ub[Ab] = bb[Mb] << 16 | bb[Mb + 1] << 8 | bb[Mb + 2], Mb += 3;
      for (const Tb of Eb) {
        const {
          min: ab,
          step: Eb
        } = Ab.b[Tb];
        Ub[Tb] = (0, Ab.e)(Tb, ab + bb[Mb] * Eb), Mb++
      }
      return Ub
    }
  },
  8842: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Ab,
      d: () => Mb,
      e: () => Tb,
      i: () => eb,
      l: () => Bb,
      n: () => vb,
      o: () => Yb,
      q: () => Eb
    });
    const Ab = {
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
      Mb = Object.freeze({
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

    function Tb(bb, ab) {
      var Ub;
      const {
        min: Tb,
        max: Eb,
        step: Yb
      } = Ab[bb];
      if (!Number.isFinite(ab)) return Mb[bb];
      const Bb = (null !== (Ub = String(Yb).split(".")[1]) && void 0 !== Ub ? Ub : "").length,
        eb = Number((Math.round(ab / Yb) * Yb).toFixed(Bb));
      return Math.min(Eb, Math.max(Tb, eb))
    }

    function Eb(bb, ab, Ub) {
      const Ab = "number" === typeof Ub ? Tb(ab, Ub) : Ub;
      return {
        ...bb,
        [ab]: Ab
      }
    }

    function Yb(bb, ab) {
      let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      return Object.keys(Mb).every((Ab => Ub.includes(Ab) || bb[Ab] === ab[Ab]))
    }

    function Bb(bb) {
      return Yb(bb, Mb)
    }

    function eb(bb) {
      return `#${bb.toString(16).padStart(6,"0")}`
    }

    function vb(bb) {
      const ab = /^#?([0-9a-f]{6})$/i.exec(bb.trim());
      return ab ? parseInt(ab[1], 16) : null
    }
  },
  8892: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Lb,
      g: () => Pb
    });
    var Ab = Ub(52),
      Mb = Ub(31),
      Tb = Ub(8889),
      Eb = Ub(8842);
    const Yb = "crosshairCode";
    let Bb = null;
    const eb = new Set;

    function vb() {
      if (null === Bb) {
        var bb;
        const ab = Mb.f.getItem(Yb);
        Bb = null !== (bb = "string" === typeof ab ? (0, Tb.f)(ab) : null) && void 0 !== bb ? bb : Eb.d
      }
      return Bb
    }

    function Lb(bb) {
      Bb = bb, (0, Eb.l)(bb) ? Mb.f.removeItem(Yb) : Mb.f.setItem(Yb, (0, Tb.h)(bb));
      for (const ab of eb) ab()
    }

    function Pb() {
      const [bb, ab] = (0, Ab.useState)(vb);
      return (0, Ab.useEffect)((() => {
        const bb = () => {
          ab(vb())
        };
        return bb(), Ub = bb, eb.add(Ub), () => {
          eb.delete(Ub)
        };
        var Ub
      }), []), bb
    }
  },
  8450: (bb, ab, Ub) => {
    function Ab(bb) {
      return {
        x: (bb.left + bb.right) / 2,
        y: (bb.top + bb.bottom) / 2
      }
    }

    function Mb(bb) {
      return 0 === bb.length ? null : bb.reduce(((bb, ab) => ({
        left: Math.min(bb.left, ab.left),
        top: Math.min(bb.top, ab.top),
        right: Math.max(bb.right, ab.right),
        bottom: Math.max(bb.bottom, ab.bottom)
      })))
    }

    function Tb(bb, ab) {
      const Ub = Math.max(0, (ab - (bb.right - bb.left)) / 2),
        Ab = Math.max(0, (ab - (bb.bottom - bb.top)) / 2);
      return {
        left: bb.left - Ub,
        top: bb.top - Ab,
        right: bb.right + Ub,
        bottom: bb.bottom + Ab
      }
    }

    function Eb(bb, ab) {
      return ab.x >= bb.left && ab.x <= bb.right && ab.y >= bb.top && ab.y <= bb.bottom
    }

    function Yb(bb, ab, Ub) {
      let Mb = null,
        Yb = 1 / 0;
      for (const {
          id: Ab,
          box: Tb
        }
        of ab) {
        const ab = (Tb.right - Tb.left) * (Tb.bottom - Tb.top);
        Eb(Tb, bb) && ab < Yb && (Yb = ab, Mb = Ab)
      }
      if (null !== Mb) return Mb;
      let Bb = 1 / 0;
      for (const {
          id: eb,
          box: vb
        }
        of ab) {
        if (!Eb(Tb(vb, Ub), bb)) continue;
        const ab = Ab(vb),
          Yb = Math.hypot(bb.x - ab.x, bb.y - ab.y);
        Yb < Bb && (Bb = Yb, Mb = eb)
      }
      return Mb
    }

    function Bb(bb, ab, Ub) {
      return {
        left: Ub.left,
        top: Ub.top,
        right: bb - Ub.right,
        bottom: ab - Ub.bottom
      }
    }

    function eb(bb, ab, Ub, Ab) {
      const Mb = (bb, ab, Ub) => Math.max(Math.min(ab, 0), Math.min(Math.max(Ub, 0), bb));
      return {
        x: Mb(ab, Ab.left - bb.left, Ab.right - bb.right),
        y: Mb(Ub, Ab.top - bb.top, Ab.bottom - bb.bottom)
      }
    }

    function vb(bb, ab, Ub, Ab, Mb) {
      const Tb = bb.dx * Ab + ab,
        Eb = bb.dy * Mb + Ub,
        Yb = bb => Math.max(-1, Math.min(1, bb));
      return {
        dx: Yb(Tb / Ab),
        dy: Yb(Eb / Mb)
      }
    }

    function Lb(bb, ab, Ub, Ab) {
      return ab <= 0 || Ub <= 0 ? 1 : Math.max(.05, Math.min(1, bb / ab, Ab / Ub))
    }

    function Pb(bb, ab, Ub) {
      return Math.min(bb.right, ab.right) - Math.max(bb.left, ab.left) > Ub && Math.min(bb.bottom, ab.bottom) - Math.max(bb.top, ab.top) > Ub
    }

    function Xb(bb, ab) {
      const Ub = (bb, ab, Ub, Ab) => ab - bb > Ab - Ub ? Ub - bb > ab - Ab ? Ab - ab : Ub - bb : bb < Ub ? Ub - bb : ab > Ab ? Ab - ab : 0;
      return {
        x: Ub(bb.left, bb.right, ab.left, ab.right),
        y: Ub(bb.top, bb.bottom, ab.top, ab.bottom)
      }
    }

    function jb(bb, ab) {
      let {
        avoid: Ub = null,
        bounds: Ab = null
      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, Mb = 0, Tb = 1 / 0;
      return bb.forEach(((bb, Eb) => {
        const Yb = ab.filter((ab => Pb(bb, ab, 0))).length,
          Bb = null !== Ab && (bb.left < Ab.left || bb.top < Ab.top || bb.right > Ab.right || bb.bottom > Ab.bottom),
          eb = Yb + (Ub && Pb(bb, Ub, 0) ? 1e3 : 0) + (Bb ? 1e6 : 0);
        eb < Tb && (Mb = Eb, Tb = eb)
      })), Mb
    }
    Ub.d(ab, {
      b: () => Ab,
      c: () => Eb,
      e: () => Pb,
      h: () => eb,
      k: () => Tb,
      m: () => jb,
      o: () => vb,
      s: () => Yb,
      t: () => Lb,
      v: () => Bb,
      w: () => Xb,
      x: () => Mb
    })
  },
  8836: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Tb,
      f: () => Mb
    });
    var Ab = Ub(19);

    function Mb(bb, ab) {
      return bb && !ab
    }

    function Tb() {
      return Mb(Ab.c.get("isTouchScreen"), Ab.c.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  8797: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Ab
    });
    const Ab = new Set(["chunkBorders"])
  },
  8794: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      ALL_DEV_TOOLS: () => Eb,
      coreDevTools: () => eb,
      devTools: () => Bb
    });
    var Ab = Ub(603),
      Mb = Ub(1227),
      Tb = Ub(8797);
    const Eb = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function Yb() {
      const {
        noaDevTools: bb
      } = await Ub.e(230).then((() => Ub(40174)));
      return bb
    }
    const Bb = new class {
        constructor() {
          this.loadHost = Yb, this.tools = Eb
        }
        setHost(bb) {
          this.tools = null === bb ? Eb : bb.tools, this.loadHost = null === bb ? Yb : async () => bb
        }
        supports(bb) {
          return this.tools.has(bb)
        }
        async downloadScene(bb, ab) {
          const Ub = await this.loadHost();
          await Ub.downloadScene(bb, ab)
        }
        async setAmbientLightIntensity(bb) {
          const ab = await this.loadHost();
          await ab.setAmbientLightIntensity(bb)
        }
      },
      eb = {
        tools: Tb.e,
        downloadScene: async () => {
          throw new Error("This client can't download the scene")
        },
        setAmbientLightIntensity: async () => {
          throw new Error("This client can't set the ambient light")
        }
      };
    Ab.o && Bb.setHost(eb), (0, Mb.p)((() => {
      Bb.setHost(eb)
    }))
  },
  8951: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Eb,
      h: () => Mb,
      l: () => vb
    });
    var Ab = Ub(1485);

    function Mb(bb) {
      var ab;
      return {
        ...Eb.store,
        yaw: Eb.store.yaw + (null !== (ab = Ab.d[bb].previewYaw) && void 0 !== ab ? ab : 0)
      }
    }
    const Tb = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      Eb = {
        player: Tb,
        store: {
          ...Tb,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function Yb(bb, ab) {
      bb instanceof Promise ? bb.then(ab).catch((bb => {
        console.error("Couldn't open the preview", bb)
      })) : ab(bb)
    }
    class Bb {
      constructor(bb) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, Yb(bb, (bb => {
          this.closed ? bb.close() : (this.opened = bb, null !== this.size && bb.resize(this.size.width, this.size.height), null !== this.view && bb.show(this.view))
        }))
      }
      show(bb) {
        var ab;
        this.view = bb, null === (ab = this.opened) || void 0 === ab || ab.show(bb)
      }
      resize(bb, ab) {
        var Ub;
        this.size = {
          width: bb,
          height: ab
        }, null === (Ub = this.opened) || void 0 === Ub || Ub.resize(bb, ab)
      }
      close() {
        var bb;
        this.closed = !0, null === (bb = this.opened) || void 0 === bb || bb.close(), this.opened = null
      }
    }
    class eb {
      constructor(bb) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(bb).then((bb => bb.ready)), Yb(bb, (bb => {
          this.closed ? bb.close() : (this.opened = bb, null !== this.size && bb.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var bb, ab;
        return null !== (bb = null === (ab = this.opened) || void 0 === ab ? void 0 : ab.isReady()) && void 0 !== bb && bb
      }
      setCosmetic(bb, ab) {
        var Ub;
        null === (Ub = this.opened) || void 0 === Ub || Ub.setCosmetic(bb, ab)
      }
      playEmote(bb) {
        var ab;
        null === (ab = this.opened) || void 0 === ab || ab.playEmote(bb)
      }
      setOrbit(bb) {
        var ab;
        null === (ab = this.opened) || void 0 === ab || ab.setOrbit(bb)
      }
      resetCamera() {
        var bb;
        null === (bb = this.opened) || void 0 === bb || bb.resetCamera()
      }
      async untilDrawn(bb) {
        var ab;
        await this.ready, await (null === (ab = this.opened) || void 0 === ab ? void 0 : ab.untilDrawn(bb))
      }
      resize(bb, ab) {
        var Ub;
        this.size = {
          width: bb,
          height: ab
        }, null === (Ub = this.opened) || void 0 === Ub || Ub.resize(bb, ab)
      }
      close() {
        var bb;
        this.closed = !0, null === (bb = this.opened) || void 0 === bb || bb.close(), this.opened = null
      }
    }
    const vb = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(bb) {
        this.host = bb
      }
      setDefaultHost(bb) {
        this.makeDefault = bb
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(bb) {
        return new Bb(this.current().openMob(bb))
      }
      openPet(bb) {
        return new Bb(this.current().openPet(bb))
      }
      openMobLineup(bb) {
        return new Bb(this.current().openMobLineup(bb))
      }
      openCharacter(bb, ab) {
        return new eb(this.current().openCharacter(bb, ab))
      }
    }
  },
  8945: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Ab.d,
      h: () => Ab.h,
      l: () => Ab.l
    });
    var Ab = Ub(8951);
    class Mb {
      constructor(bb) {
        this.load = bb, this.loaded = null, this.loading = null
      }
      run(bb) {
        return null !== this.loaded ? bb(this.loaded) : (this.loading ??= this.load().then((bb => (this.loaded = bb, bb)), (bb => {
          throw this.loading = null, bb
        })), this.loading.then(bb))
      }
    }
    class Tb {
      constructor() {
        this.mobScene = new Mb((() => Promise.all([Ub.e(69), Ub.e(226), Ub.e(225), Ub.e(244), Ub.e(94), Ub.e(245), Ub.e(72), Ub.e(71), Ub.e(242), Ub.e(70), Ub.e(252), Ub.e(246), Ub.e(251), Ub.e(249), Ub.e(241), Ub.e(218), Ub.e(264), Ub.e(222), Ub.e(236), Ub.e(247), Ub.e(250), Ub.e(74), Ub.e(196), Ub.e(215), Ub.e(219), Ub.e(93), Ub.e(113), Ub.e(234), Ub.e(73), Ub.e(112), Ub.e(153)]).then((() => Ub(40179))))), this.characterScene = new Mb((() => Promise.all([Ub.e(69), Ub.e(226), Ub.e(225), Ub.e(244), Ub.e(94), Ub.e(245), Ub.e(72), Ub.e(71), Ub.e(242), Ub.e(70), Ub.e(252), Ub.e(246), Ub.e(251), Ub.e(249), Ub.e(241), Ub.e(218), Ub.e(264), Ub.e(222), Ub.e(236), Ub.e(247), Ub.e(250), Ub.e(74), Ub.e(196), Ub.e(215), Ub.e(219), Ub.e(93), Ub.e(113), Ub.e(234), Ub.e(73), Ub.e(112), Ub.e(152)]).then((() => Ub(40271)))))
      }
      openMob(bb) {
        return this.mobScene.run((ab => ab.openMobPreview(bb)))
      }
      openPet(bb) {
        return this.mobScene.run((ab => ab.openPetPreview(bb)))
      }
      openMobLineup(bb) {
        return this.mobScene.run((ab => ab.openMobLineupPreview(bb)))
      }
      openCharacter(bb, ab) {
        return this.characterScene.run((Ub => Ub.openCharacterPreview(bb, ab)))
      }
    }
    Ab.l.setDefaultHost((() => new Tb))
  },
  6294: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Mb,
      f: () => Tb
    });
    var Ab = Ub(31);
    const Mb = "shaderPack";
    async function Tb() {
      var bb;
      let ab = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (bb = await Ab.c.getItem(Mb, ab)) && void 0 !== bb ? bb : null
    }
  },
  8815: (bb, ab, Ub) => {
    function Ab(bb, ab) {
      return bb && !ab
    }
    Ub.d(ab, {
      d: () => Ab
    })
  },
  8834: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Tb
    });
    var Ab = Ub(1003);

    function Mb() {
      var bb, ab;
      return null !== (bb = null === (ab = screen.orientation) || void 0 === ab ? void 0 : ab.type) && void 0 !== bb ? bb : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const Tb = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && Mb() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = Mb(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, Ab.UR)(new Error("Game view size held for 60 s"))
        }), 6e4)
      }
      release() {
        clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
          if (document.hidden) document.addEventListener("visibilitychange", this.releaseWhenShown);
          else {
            this.holding = !1;
            for (const bb of this.resizers) bb()
          }
        }), 1e3)
      }
      heldSizer(bb) {
        let ab = !1;
        return () => {
          if (ab && this.isHeld()) return null;
          const Ub = bb();
          return ab ||= null !== Ub, Ub
        }
      }
      onRelease(bb) {
        return this.resizers.add(bb), () => {
          this.resizers.delete(bb)
        }
      }
    }
  },
  8441: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Yb,
      f: () => Bb
    });
    var Ab = Ub(19),
      Mb = Ub(1242),
      Tb = Ub(101);
    const Eb = {
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

    function Yb() {
      return (0, Tb.isMobile)() && "function" === typeof navigator.vibrate
    }
    const Bb = new class {
      constructor(bb) {
        this.deps = bb, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(bb, ab) {
        var Ub;
        if (!this.deps.enabled()) return;
        const Ab = Eb[bb],
          Mb = null !== ab && void 0 !== ab ? ab : Ab.pattern;
        if (null === Mb) return void console.warn("No vibration pattern for", bb);
        const Tb = this.deps.now();
        Tb - this.lastAnyAt < 40 && Ab.priority < this.playingPriority || Tb - (null !== (Ub = this.lastAt.get(bb)) && void 0 !== Ub ? Ub : -1 / 0) < Ab.minGapMs || Tb < this.playingUntil && Ab.priority < this.playingPriority || (this.lastAt.set(bb, Tb), this.lastAnyAt = Tb, this.playingUntil = Tb + Mb.reduce(((bb, ab) => bb + ab), 0), this.playingPriority = Ab.priority, this.deps.vibrate(Mb))
      }
    }({
      vibrate: bb => {
        navigator.vibrate([...bb])
      },
      now: () => performance.now(),
      enabled: () => Yb() && Ab.c.get("isTouchScreen") && Ab.c.get("clientEscMenuOptions").vibration && !(0, Mb.f)()
    })
  },
  8807: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Xb,
      e: () => Pb
    });
    var Ab = Ub(19),
      Mb = Ub(1605),
      Tb = Ub(31),
      Eb = Ub(1260),
      Yb = Ub(3330),
      Bb = Ub(1384),
      eb = Ub(1294);
    const vb = 2592e5,
      Lb = "notificationOptInLastPromptedAt";
    async function Pb() {
      var bb;
      const ab = await Xb();
      if (null === ab) return;
      const Ub = null !== (bb = Tb.f.getItem(Lb)) && void 0 !== bb ? bb : 0;
      if (Date.now() - Ub < vb) return;
      if ((0, eb.d)()) return;
      const Ab = await Eb.NotificationProvider.showPromptPopup({
        icon: "bell",
        title: "mobilePushNotifications:optInTitle",
        subtitle: Mb.d.supports("notifications") ? "mobilePushNotifications:optInSubtitle" : "mobilePushNotifications:optInSubtitleBrowser",
        confirmText: "mobilePushNotifications:optInConfirm",
        cancelText: "mobilePushNotifications:optInCancel",
        padStartsOn: "cancel"
      }).getResult();
      "notificationTornDown" !== Ab && (Tb.f.setItem(Lb, Date.now()), (0, Bb.reportAnalyticsClick)({
        id: !0 === Ab ? "push.allow" : "push.deny",
        value: Mb.d.supports("notifications") ? "app" : "browser"
      }), !0 === Ab && ab().catch((bb => {
        console.error("Failed to ask for push notifications:", bb)
      })))
    }
    async function Xb() {
      return await Mb.d.ready, Mb.d.supports("notifications") ? Ab.c.get("mobilePushNotificationsCanAsk") ? async () => {
        Mb.d.request("notifications.requestPermission", {}).then((bb => {
          let {
            canAsk: ab
          } = bb;
          Ab.c.set({
            mobilePushNotificationsCanAsk: ab
          })
        }), (bb => {
          console.error("The app couldn't ask for push notifications:", bb)
        }))
      }: null: await Yb.c.canAsk() ? () => Yb.c.requestPermission() : null
    }
  },
  8820: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Yb,
      e: () => Bb
    });
    var Ab = Ub(19);
    const Mb = 24,
      Tb = "farNametags",
      Eb = 1e5;

    function Yb() {
      var bb;
      return null === (bb = Ab.c.get("showDistantNametags")) || void 0 === bb || bb
    }

    function Bb() {
      var bb;
      return null !== (bb = function() {
        const bb = new URLSearchParams(window.location.search).get(Tb),
          ab = null === bb || "" === bb ? NaN : Number(bb);
        return Number.isFinite(ab) && ab >= 0 ? Math.min(ab, Eb) : null
      }()) && void 0 !== bb ? bb : Yb() ? 0 : Mb
    }
  },
  8930: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Mb,
      g: () => Eb
    });
    const Ab = [{
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

    function Mb(bb) {
      let ab, Ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof bb) {
        if (!Number.isFinite(bb)) return "0";
        if (Math.abs(bb) < 100) {
          const ab = bb < 0 ? "-" : "",
            Ub = Math.abs(bb);
          return Ub >= 10 ? `${ab}${Ub.toFixed(1).replace(/\.0$/,"")}` : `${ab}${Ub.toFixed(2).replace(/\.?0+$/,"")}`
        }
        ab = BigInt(Math.floor(bb))
      } else ab = bb;
      const Mb = ab < 0n ? -ab : ab,
        Tb = ab < 0n ? "-" : "",
        Eb = Mb.toString();
      if (Eb.length <= Ub) return `${Tb}${Eb}`;
      const Yb = 3 * Math.floor((Eb.length - 1) / 3);
      if (Yb < 3) return `${Tb}${Eb}`;
      if (Yb > 3 * Ab.length) {
        const bb = Eb[0],
          ab = Eb.slice(1, 3).replace(/0+$/, "");
        return `${Tb}${ab?`${bb}.${ab}`:bb}e${Eb.length-1}`
      }
      const {
        threshold: Bb,
        suffix: eb
      } = Ab[Ab.length - Yb / 3], vb = Mb / Bb, Lb = Number(1000n * (Mb % Bb) / Bb), Pb = Number(vb) + Lb / 1e3;
      let Xb;
      return Xb = Pb >= 100 ? Math.floor(Pb).toString() : Pb >= 10 ? Pb.toFixed(1).replace(/\.0$/, "") : Pb.toFixed(2).replace(/\.?0+$/, ""), `${Tb}${Xb}${eb}`
    }
    const Tb = Ab.map((bb => {
      let {
        threshold: ab,
        suffix: Ub
      } = bb;
      return {
        threshold: Number(ab),
        suffix: Ub
      }
    })).filter((bb => {
      let {
        threshold: ab
      } = bb;
      return Number.isFinite(ab)
    }));

    function Eb(bb) {
      const ab = Math.abs(bb),
        Ub = bb < 0 ? "-" : "";
      for (const {
          threshold: Ab,
          suffix: Mb
        }
        of Tb)
        if (ab >= Ab) {
          const bb = ab / Ab;
          if (bb >= 1e3) return `${Ub}${ab.toExponential(2).replace("e+","e")}`;
          let Tb;
          return Tb = bb >= 100 ? Math.floor(bb).toString() : bb >= 10 ? bb.toFixed(1).replace(/\.0$/, "") : bb.toFixed(2).replace(/\.?0+$/, ""), `${Ub}${Tb}${Mb}`
        } return `${Ub}${ab}`
    }
  },
  8914: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => vb,
      f: () => Pb,
      h: () => Lb,
      i: () => Eb,
      m: () => eb,
      n: () => Bb
    });
    var Ab = Ub(325);
    const Mb = ["Wood Enchanting Table", "Stone Enchanting Table", "Iron Enchanting Table", "Gold Enchanting Table", "Diamond Enchanting Table"],
      Tb = {
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

    function Eb(bb) {
      var ab;
      return null !== (ab = Tb[bb]) && void 0 !== ab ? ab : {
        translationKey: ""
      }
    }
    const Yb = {
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

    function Bb(bb) {
      return Mb.includes(bb)
    }

    function eb(bb) {
      var ab;
      return !0 === (null === bb || void 0 === bb || null === (ab = bb.customAttributes) || void 0 === ab ? void 0 : ab.cannotEnchant)
    }

    function vb(bb, ab) {
      const {
        max: Ub
      } = Yb[bb].at(-1);
      return ab <= Ub
    }

    function Lb(bb) {
      const ab = Math.sin(bb / 80),
        Ub = bb => {
          if (bb <= 0) return 0;
          if (bb > 1) return 1;
          let ab = 0;
          const Ub = [1, 7, 21, 35, 35, 21, 7, 1];
          for (let Ab = 0; Ab < Ub.length; Ab++) {
            ab += (Ab % 2 === 0 ? 1 : -1) * Ub[Ab] * Math.pow(bb, 2 + Ab) / (2 + Ab)
          }
          return 72 * ab
        },
        Ab = .3 - .78 * ab,
        Mb = .5 - .78 * ab,
        Tb = .6 - .7 * ab,
        Eb = .8 - .6 * ab;
      let Yb = Ub(Ab),
        Bb = Ub(Mb) - Yb,
        eb = Ub(Tb) - Bb - Yb,
        vb = Ub(Eb) - eb - Bb - Yb;
      Ab < .041 && (Bb /= 1 - Yb, eb /= 1 - Yb, vb /= 1 - Yb, Yb = 0), Mb < .041 && (Yb /= 1 - Bb, eb /= 1 - Bb, vb /= 1 - Bb, Bb = 0), Tb < .041 && (Yb /= 1 - eb, Bb /= 1 - eb, vb /= 1 - eb, eb = 0), Eb < .041 && (Yb /= 1 - vb, Bb /= 1 - vb, eb /= 1 - vb, vb = 0);
      return {
        commonProb: Yb,
        uncommonProb: Bb,
        rareProb: eb,
        epicProb: vb,
        legendaryProb: 1 - (vb + eb + Bb + Yb)
      }
    }

    function Pb(bb, ab) {
      const {
        min: Ub,
        max: Mb
      } = Yb[bb][ab], Tb = Ab.d.sampleUniformIntDistribution(Ub, Mb, "includeMax");
      return {
        ...Lb(Tb),
        level: Tb
      }
    }
  },
  8334: (bb, ab, Ub) => {
    function Ab(bb, ab) {
      return !bb.hidden && (ab || !bb.isRewardedAd)
    }

    function Mb(bb) {
      return "object" === typeof bb ? bb.option : bb
    }

    function Tb(bb, ab) {
      var Ub;
      if ("dropdown" === (null === (Ub = bb.userInput) || void 0 === Ub ? void 0 : Ub.type) && "object" === typeof bb.userInput.dropdownOptions[0]) {
        for (const Ub of bb.userInput.dropdownOptions)
          if (Mb(Ub) === ab) return "object" === typeof Ub ? Ub.cost : bb.cost;
        console.error("Didn't find matching option for dropdown item. Item:", bb, "input:", ab)
      }
      return bb.cost
    }

    function Eb(bb, ab, Ub) {
      var Ab;
      const Mb = null !== (Ab = Ub.excludedPlayers) && void 0 !== Ab ? Ab : [ab];
      return bb.filter((bb => !Mb.includes(bb)))
    }
    Ub.d(ab, {
      c: () => Tb,
      g: () => Mb,
      j: () => Eb,
      n: () => Ab
    })
  },
  8884: () => {},
  8849: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAaUlEQVR4AWyOQQ6AIAwECwGNr/HkYzz4Hy9+WEkq01BDDCRDy3ZbGo9rU2c/V+1Bj9JOeW7RokaTBO0zpDxJXmYJKXjdohlwOqbWi4YaJFIgcYEIaGAT+JvHCDNQ8El9ziQz/BdzE00vAAAA//+cTXaSAAAABklEQVQDAHI9N5g1NM74AAAAAElFTkSuQmCC"
  },
  8855: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAGBJREFUGJVNjjEOxEAIA+dW22Rpk2+nSndPZFtMewU6FBdIjJHx536+ABARUl7XCbjvyV9mJqX7BtY6RkS0t9bRc0op5ZuaGTAqtPZCpfG+AqSs8FFlulh7s6j7rh9d9wclFjd0V4Z2HAAAAABJRU5ErkJggg=="
  },
  8863: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAbUlEQVR4nESOSwqAMAxEow0pive/gIcTBBdSsZh+NG20DlnkM8MLhnXuzHSnAwBaI8LIV2RXOiIkaGfMKfXGyByZparbyQZpGNUV/KaHGrWowZKVgSx8Qr8vzdXgAkYFCIn9mZP7E8pQ1Q9fzAMAAP//PTNTFgAAAAZJREFUAwAk1D9dXrbJngAAAABJRU5ErkJggg=="
  },
  8871: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAE1JREFUGJVNjsEOwDAIQp/GZv3/j+xx5zVbsh0wZFxEImCsc88RRwHsB5OaI8SA636hjwosNXSUWuRTphxp5iahHX+pozQs+Yt0rU1SPg0CIfgDMgomAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);