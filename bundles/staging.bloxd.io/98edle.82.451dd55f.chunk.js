export const id = 82;
export const ids = [82, 172];
export const modules = {
  8061: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      EverythingMenu: () => bz
    });
    var wW = MW(75),
      CW = MW(897),
      zR = MW.n(CW),
      AW = MW(1027),
      bR = MW(904),
      yR = MW(1650),
      NW = MW(958),
      eW = MW(940);

    function BW(WW) {
      let {
        items: RW,
        onClick: MW,
        selectedItemId: wW,
        className: CW,
        padStartsOnTab: BW = !0
      } = WW;
      const {
        t: tR
      } = (0, AW.C)(), TW = (0, NW.f)(), gR = [];
      for (const zR of RW) {
        var iR;
        const WW = gR[gR.length - 1];
        var YW;
        if (WW && WW.title === (null !== (iR = zR.section) && void 0 !== iR ? iR : null)) WW.items.push(zR);
        else gR.push({
          title: null !== (YW = zR.section) && void 0 !== YW ? YW : null,
          items: [zR]
        })
      }
      return (0, eW.jsx)("div", {
        className: zR()("MenuSideBarBody", CW),
        "data-pad-tabs": "2",
        children: gR.map(((WW, RW) => {
          var CW;
          return (0, eW.jsxs)("div", {
            className: "MenuSideBarSection",
            children: [WW.title && (0, eW.jsx)("div", {
              className: "MenuSideBarSectionTitle",
              children: tR(WW.title)
            }), WW.items.map((WW => {
              var RW;
              const CW = !!WW.iconElement || !!WW.faIcon;
              return (0, eW.jsxs)("div", {
                "data-pad-tab": !0,
                "data-pad-selected": wW === WW.id ? "true" : void 0,
                "data-pad-default-focus": BW && wW === WW.id || void 0,
                className: zR()("MenuSideBarBodyTab", {
                  ActiveMenuSideBarBodyTab: wW === WW.id
                }),
                onClick: () => {
                  MW(WW.id)
                },
                children: [CW && (0, eW.jsx)("div", {
                  className: "MenuSideBarBodyTabIcon",
                  children: null !== (RW = WW.iconElement) && void 0 !== RW ? RW : (0, eW.jsx)(bR.e, {
                    name: WW.faIcon
                  })
                }), (!TW || !CW) && (0, eW.jsx)("div", {
                  children: tR(WW.title)
                }), WW.redDot && (0, eW.jsx)(yR.d, {
                  top: "-0.2rem",
                  right: "-1rem"
                })]
              }, WW.id)
            }))]
          }, null !== (CW = WW.title) && void 0 !== CW ? CW : RW)
        }))
      })
    }
    var tR = MW(2221),
      TW = MW(969),
      gR = MW(1953),
      iR = MW(964),
      YW = MW(1255),
      JW = MW(116),
      PW = MW(1544),
      IW = MW(1854),
      oW = MW(1859),
      lW = MW(1489),
      FW = MW(1157),
      fW = MW(3965),
      QW = MW(27),
      rR = MW(8068);

    function cR(WW) {
      let {
        setApplySettingsCallback: RW
      } = WW;
      const {
        clientEscMenuOptions: MW
      } = (0, QW.i)(["clientEscMenuOptions"]), [CW, zR] = (0, wW.useState)(!1), [AW, bR] = (0, wW.useState)(!1), [yR, NW] = (0, wW.useState)(6400), [BW, tR] = (0, wW.useState)(3600), [TW, gR] = (0, wW.useState)(!1), [iR, JW] = (0, wW.useState)(!1);

      function PW(WW) {
        const RW = "screenshot" === WW ? bR : zR;
        RW(!0);
        const MW = TW ? "normals" : iR ? "depth" : null;
        rR.devTools.downloadScene(WW, {
          width: yR,
          height: BW,
          colouring: MW
        }).catch((WW => {
          console.error("Couldn't download the scene", WW)
        })).finally((() => {
          RW(!1)
        }))
      }
      return (0, eW.jsxs)("div", {
        className: "DeveloperToolsCategory",
        children: [(0, eW.jsx)(fW.b, {
          label: "Disable Ambient Occlusion",
          checked: MW.disableAmbientOcclusion,
          onClick: WW => {
            QW.b.setClientEscMenuOptions({
              disableAmbientOcclusion: WW
            }), RW((() => fW.i))
          },
          circleInfoText: "Disables ambient occlusion which is the shadow effect that makes corners and crevices darker."
        }), rR.devTools.supports("ambientLight") && (0, eW.jsx)(fW.g, {
          name: "Ambient Lighting Intensity",
          min: 0,
          max: 1,
          step: .01,
          initValue: MW.ambientLightIntensity,
          onChange: WW => {
            rR.devTools.setAmbientLightIntensity(WW).then((() => {
              QW.b.setClientEscMenuOptions({
                ambientLightIntensity: WW
              })
            })).catch((WW => {
              console.error("Couldn't set the ambient light", WW)
            }))
          },
          circleInfoText: "Sets the intensity of the white ambient light in the scene. The default is 0.5."
        }), rR.devTools.supports("weaponRaycasts") && (0, eW.jsx)(fW.b, {
          label: "Show Weapon Raycasts",
          checked: MW.showWeaponRaycasts,
          onClick: WW => {
            QW.b.setClientEscMenuOptions({
              showWeaponRaycasts: WW
            })
          },
          circleInfoText: "Draws debug lines for the raw raycasts used by locally fired weapons."
        }), rR.devTools.supports("sceneDownload") && (0, eW.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, eW.jsxs)("div", {
            className: "SettingBox WarningBorder",
            children: [(0, eW.jsx)(fW.b, {
              label: "Apply normal-based coloring",
              checked: TW,
              onClick: WW => {
                gR(WW), WW && JW(!1)
              },
              circleInfoText: "Colors faces based on their normal direction (red=X, green=Y, blue=Z)."
            }), (0, eW.jsx)(fW.b, {
              label: "Apply depth-based coloring",
              checked: iR,
              onClick: WW => {
                JW(WW), WW && gR(!1)
              },
              circleInfoText: "Colors from white (near) to black (far) based on distance from camera. Only works for screenshot export."
            }), (0, eW.jsxs)("div", {
              className: "SettingBox DeveloperToolsCategoryScreenshotSettings",
              children: [(0, eW.jsx)("div", {
                className: "SettingLabel",
                children: "Screenshot size in pixels (width x height)"
              }), (0, eW.jsx)(lW.e, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (WW, RW) => {
                  const MW = parseInt(WW) || 6400;
                  NW(MW)
                },
                placeholderText: "width",
                maxLength: 10,
                defaultValue: yR.toString()
              }), (0, eW.jsx)("span", {
                children: "X"
              }), (0, eW.jsx)(lW.e, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (WW, RW) => {
                  const MW = parseInt(WW) || 3600;
                  tR(MW)
                },
                placeholderText: "height",
                maxLength: 10,
                defaultValue: BW.toString()
              })]
            }), (0, eW.jsxs)("div", {
              className: "DeveloperToolsCategoryExportButtons",
              children: [(0, eW.jsxs)(YW.h, {
                onClick: () => {
                  PW("screenshot")
                },
                disabled: AW,
                children: [AW && (0, eW.jsx)(FW.d, {}), "Download Screenshot"]
              }), (0, eW.jsxs)(YW.h, {
                onClick: () => {
                  PW("glb")
                },
                disabled: CW,
                children: [CW && (0, eW.jsx)(FW.d, {}), "Download GLB"]
              })]
            })]
          }), (0, eW.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: 'To download GLB of scene with textures you need to "Disable Block Texture Atlas" in graphic settings first (you will need to reload the page to apply the setting).'
          })]
        })]
      })
    }
    var XW = MW(1072),
      jR = MW(1166),
      kR = MW(151),
      aR = MW(975),
      sW = MW(1033),
      dW = MW(1135),
      pW = MW(2224),
      hW = MW(1330),
      UW = MW(1099),
      EW = MW(1064),
      VW = MW(2260),
      mR = MW(1630),
      xR = MW(1314),
      vR = MW(284),
      KW = MW(1862),
      uW = MW(1495),
      OW = MW(1180),
      nW = MW(1045),
      GW = MW(3861),
      LW = MW(1285),
      HW = MW(2733),
      DW = MW(2092),
      qR = MW(1845);

    function ZW(WW) {
      let {
        showing: RW
      } = WW;
      const {
        t: MW
      } = (0, AW.C)(), {
        data: wW,
        failed: CW
      } = (0, DW.f)(HW.g, RW);
      return 0 === (null === wW || void 0 === wW ? void 0 : wW.length) || null === wW && !CW ? null : (0, eW.jsxs)("div", {
        className: "SettingBox AccountSettingsPaymentHistory",
        children: [(0, eW.jsx)("div", {
          className: "AccountSettingsLabel",
          children: MW("paymentHistory:title")
        }), null === wW && CW && (0, eW.jsx)("div", {
          className: "AccountSettingsPaymentHistoryError",
          children: MW("paymentHistory:loadFailed")
        }), null !== wW && (0, eW.jsx)("ul", {
          className: "PaymentHistoryList",
          children: wW.map((WW => (0, eW.jsxs)("li", {
            className: "PaymentHistoryEntry",
            children: [(0, eW.jsx)(qR.e, {
              entry: WW
            }), (0, eW.jsxs)("div", {
              className: "PaymentHistoryEntryText",
              children: [(0, eW.jsx)("div", {
                children: (0, qR.j)(MW, WW)
              }), (0, eW.jsxs)("div", {
                className: "PaymentHistoryEntryDate",
                children: [new Date(WW.at).toLocaleDateString(), "number" === typeof WW.orderId && ` \xb7 ${MW("paymentHistory:order",{orderId:WW.orderId})}`]
              })]
            })]
          }, (0, HW.d)(WW))))
        })]
      })
    }
    var SW = MW(2682),
      WR = MW(2697),
      RR = MW(2691);

    function MR(WW) {
      let {
        showing: RW
      } = WW;
      const {
        t: MW
      } = (0, AW.C)(), {
        data: wW,
        failed: CW
      } = (0, DW.f)(SW.d, RW), zR = null === wW ? null : (0, SW.h)(wW);
      return (0, eW.jsxs)("div", {
        className: "SettingBox BlockedAndIgnoredPlayers",
        children: [(0, eW.jsx)("div", {
          className: "AccountSettingsLabel",
          children: MW("settingsMenu:blockedAndIgnoredPlayers")
        }), null === zR && !CW && (0, eW.jsx)(FW.d, {}), null === zR && CW && (0, eW.jsxs)("div", {
          className: "BlockedAndIgnoredPlayersError",
          children: [MW("settingsMenu:blockedAndIgnoredPlayersLoadFailed"), (0, eW.jsx)(YW.h, {
            className: "SmallTextLight",
            onClick: () => {
              SW.d.refresh()
            },
            children: MW("general:tryAgain")
          })]
        }), 0 === (null === zR || void 0 === zR ? void 0 : zR.length) && (0, eW.jsx)("div", {
          className: "BlockedAndIgnoredPlayersEmpty",
          children: MW("settingsMenu:noBlockedOrIgnoredPlayers")
        }), null !== zR && zR.length > 0 && (0, eW.jsx)("ul", {
          className: "BlockedAndIgnoredPlayersList",
          children: zR.map((WW => {
            let {
              name: RW,
              exclusion: wW
            } = WW;
            const CW = RR.f[wW];
            return (0, eW.jsxs)("li", {
              className: "BlockedAndIgnoredPlayer",
              children: [(0, eW.jsx)("div", {
                className: "BlockedAndIgnoredPlayerName",
                children: RW
              }), (0, eW.jsx)(YW.j, {
                className: "SmallTextLight",
                onClick: () => {
                  (0, WR.e)(CW, RW)
                },
                children: MW(RR.g[CW].text)
              })]
            }, RW)
          }))
        })]
      })
    }
    const wR = (0, wW.memo)((function(WW) {
      var RW;
      let {
        showing: MW,
        inGame: CW
      } = WW;
      const {
        t: yR,
        selectedLanguage: NW
      } = (0, AW.C)(), {
        reactNativeFeatureFlags: BW,
        hideSocialLocationFrom: gR
      } = (0, QW.i)(["reactNativeFeatureFlags", "hideSocialLocationFrom"]), iR = (0, tR.b)(), {
        userContext: PW,
        isUserContextUpdating: IW
      } = (0, TW.c)(), [oW, rR] = (0, wW.useState)(null !== (RW = PW.getPlayerName()) && void 0 !== RW ? RW : ""), [cR, XW] = (0, wW.useState)(null), {
        purchasing: jR,
        outcome: dW,
        purchase: HW
      } = (0, pW.b)("/super-rank-welcome"), [DW, qR] = (0, wW.useState)(!1), [SW, WR] = (0, wW.useState)(!1), RR = (0, wW.useRef)(null), wR = (0, wW.useRef)(null), zM = (0, mR.h)({
        showProgressUpdateMessage: !0,
        enabled: !0
      }), AR = null === zM, bM = null !== zM && void 0 !== zM ? zM : [], [yM, NR] = (0, wW.useState)([]), [eR, BR] = (0, wW.useState)(!1), tM = PW.playerHasRank("youtuber"), TR = (0, wW.useCallback)((() => xR.c.getPlayerProfile(PW, {
        lowerCaseName: PW.getPlayerName().toLowerCase()
      }).then((WW => {
        NR(WW.socialLinks)
      })).catch((WW => {
        console.error("Failed to refresh social links", WW)
      }))), [PW]);

      function gM(WW) {
        WW !== oW && ((0, UW.m)(WW) ? (WW = (0, UW.o)(WW), XW("Only letters, numbers, and _")) : XW(null), RR.current && (RR.current.value = WW), rR(WW))
      }
      return (0, wW.useEffect)((() => (!0 === MW ? (clearInterval(wR.current), wR.current = setInterval(iR, 1e3)) : clearInterval(wR.current), () => {
        clearInterval(wR.current)
      })), [MW, iR]), (0, wW.useEffect)((() => {
        var WW;
        rR(null !== (WW = PW.getPlayerName()) && void 0 !== WW ? WW : "")
      }), [PW]), (0, wW.useEffect)((() => {
        if (!MW || !tM || IW) return;
        let WW = !1;
        return BR(!0), NR([]), xR.c.getPlayerProfile(PW, {
          lowerCaseName: PW.getPlayerName().toLowerCase()
        }).then((RW => {
          WW || NR(RW.socialLinks)
        })).catch((WW => {
          console.error("Failed to load social links", WW)
        })).finally((() => {
          WW || BR(!1)
        })), () => {
          WW = !0
        }
      }), [MW, tM, IW, PW]), (0, eW.jsxs)("div", {
        className: zR()("SettingsMenuRightInner AccountSettings", {
          AccountSettingsLocked: CW
        }),
        children: [CW && (0, eW.jsx)("div", {
          className: "AccountSettingsInGameWarning",
          children: yR("settingsMenu:accountSettingsInGameWarning")
        }), (0, eW.jsxs)("div", {
          className: "SettingBox SetAccountNameDiv SmallTextLight",
          children: [(0, eW.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsNameLabel",
            children: [yR("homePage:discordNamePopupTitle"), (0, eW.jsxs)(hW.LinkPreserveSearch, {
              className: "AccountSettingsViewProfile",
              to: (0, EW.g)({
                name: PW.getPlayerName()
              }),
              onClick: () => {
                QW.b.set({
                  openEverythingMenuName: null
                })
              },
              children: [(0, eW.jsx)(bR.e, {
                name: "arrow-up-right-from-square"
              }), " ", yR("profileCard:viewProfile")]
            })]
          }), (0, eW.jsxs)("div", {
            className: "EnterAccNameDivWrapper",
            "data-pad-initial-area": !0,
            children: [(0, eW.jsxs)("div", {
              className: "EnterAccNameInputRow",
              children: [JW.featureFlags.canChangeName && (0, eW.jsx)(lW.e, {
                className: "EnterName",
                placeholderText: yR("homePage:enterName"),
                maxLength: UW.h,
                defaultValue: oW,
                onValueChange: WW => {
                  gM(WW)
                },
                forcedText: DW || !JW.featureFlags.canChangeName ? oW : null,
                blurOnEnter: !0,
                domRef: RR
              }), (0, eW.jsx)(YW.h, {
                className: "ChooseRandomNameButton",
                onClick: () => {
                  gM((0, UW.g)())
                },
                children: (0, eW.jsx)(bR.e, {
                  name: "dice",
                  className: "ChooseRandomNameIcon"
                })
              }), !JW.featureFlags.canChangeName && (0, eW.jsx)("div", {
                className: "EnterName NoInput",
                children: (0, UW.d)(oW, !JW.featureFlags.canSeeRealPlayerNames)
              })]
            }), (0, eW.jsx)(YW.h, {
              className: "ChooseNameButton",
              disabled: DW || oW === PW.getPlayerName(),
              onClick: () => {
                oW.length < UW.i ? XW(yR("homePage:changeNameMinLengthError", {
                  length: UW.i
                })) : oW.length > UW.h ? XW(yR("homePage:changeNameMaxLengthError", {
                  length: UW.h
                })) : (qR(!0), XW(null), async function(WW, RW, MW, wW) {
                  const CW = await (0, aR.postJsonWithMetricsCookiesAndJsonResponse)(`${sW.clientSideServerUrls.indexUrl}/index/name/update`, {
                    name: WW
                  }, {
                    retries: 3
                  }, RW.getMetricsCookies()).catch((WW => (console.error("Bad response from the server when trying to update name:", WW), {
                    err: "An error occurred trying to change your name! Please report on discord what steps you took to get this error message."
                  })));
                  CW.err ? (console.error("Error when trying to get with new name from DB", CW.err), wW(CW.err)) : !0 === CW.nameExists ? wW("Name is already taken") : MW(WW)
                }(oW, PW, (WW => {
                  PW.setPlayerName(WW), qR(!1)
                }), (WW => {
                  XW(WW), qR(!1)
                })))
              },
              children: yR("general:choose")
            })]
          }), cR && (0, eW.jsx)("div", {
            className: "ChooseAccNameError",
            children: cR
          })]
        }), (0, eW.jsx)(fW.b, {
          label: (() => {
            if ((0, nW.p)(gR)) {
              const WW = (0, AW.m)(NW.code, "general:timeLeft"),
                RW = (0, vR.bb)(WW, Date.now(), gR + nW.m);
              return `${yR("settingsMenu:hideSocialLocation")} (${yR("general:timeLeft",{time:RW})})`
            }
            return yR("settingsMenu:hideSocialLocation")
          })(),
          onClick: () => {
            const WW = !(0, nW.p)(gR);
            (0, LW.c)({
              id: "social.hide_location",
              value: WW ? "on" : "off"
            }), WR(!0), xR.c.setHideSocialLocation(PW, WW).then((() => {
              QW.b.set({
                hideSocialLocationFrom: WW ? Date.now() : null
              })
            })).finally((() => {
              WR(!1)
            }))
          },
          checked: (0, nW.p)(gR),
          disabled: SW
        }), tM && (0, eW.jsxs)("div", {
          className: "SettingBox AccountSettingsSocialLinks",
          children: [(0, eW.jsx)("div", {
            className: "AccountSettingsLabel",
            children: yR("settingsMenu:socialLinks")
          }), eR && (0, eW.jsx)(FW.d, {}), !eR && (0, eW.jsx)(GW.e, {
            socialLinks: yM,
            editable: !0,
            userContext: PW,
            onLinksUpdated: TR
          })]
        }), (0, eW.jsxs)("div", {
          className: "SettingBox",
          children: [(0, eW.jsx)("div", {
            className: "AccountSettingsLabel",
            children: yR("auth:login")
          }), AR && (0, eW.jsx)(FW.d, {}), !AR && 0 === bM.length && (0, eW.jsx)("div", {
            className: "NoLoginOptions",
            children: yR("auth:noLoginOptions")
          }), !AR && bM.length > 0 && "crazygames" !== kR.u && (0, eW.jsx)("div", {
            className: "AccountSettingsLoginButtons",
            children: bM
          }), !AR && bM.length > 0 && "crazygames" === kR.u && (0, eW.jsxs)("div", {
            className: "AccountSettingsLoginButtons",
            children: [bM[0], bM.length > 1 && (0, eW.jsxs)(eW.Fragment, {
              children: [(0, eW.jsxs)("div", {
                className: "LegacyLoginOptionsHeader",
                children: [(0, eW.jsx)("span", {
                  className: "LegacyLoginOptionsTitle",
                  children: yR("auth:legacyLoginOptions")
                }), (0, eW.jsx)(OW.b, {
                  className: "LegacyLoginOptionsInfoIcon",
                  hoverInfo: yR("auth:legacyLoginOptionsInfo")
                })]
              }), (0, eW.jsx)("div", {
                className: "LegacyAccountSettingsLoginButtons",
                children: bM.slice(1)
              })]
            })]
          }), JW.featureFlags.useLogin && BW.useLogin && (null !== PW.loggedInInfo || PW.isLoggedIn()) && (0, eW.jsxs)(eW.Fragment, {
            children: [(0, eW.jsx)("div", {
              className: "AccountSettingsLoginDivider"
            }), (0, eW.jsx)(YW.E, {
              onClick: () => {
                (0, aR.forceGlobalSignOut)()
              },
              className: "AccountSettingsSignedInButton",
              children: yR("auth:signOut")
            })]
          })]
        }), !PW.playerHasRank("super") && (0, uW.siteSupportsPurchases)() && (0, eW.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, eW.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: [(0, eW.jsx)(bR.e, {
              name: "bolt"
            }), yR("homePage:superRank")]
          }), (0, eW.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [(0, eW.jsxs)(YW.m, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, KW.k)({
                  mode: "self",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, eW.jsx)(bR.e, {
                name: "bolt"
              }), yR("homePage:getSuperRank")]
            }), (0, eW.jsxs)(YW.m, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, KW.k)({
                  mode: "gift",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, eW.jsx)(bR.e, {
                name: "bolt"
              }), yR("homePage:giftSuperRank")]
            })]
          })]
        }), PW.playerHasRank("super") && (0, eW.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, eW.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: [(0, eW.jsx)(bR.e, {
              name: "bolt"
            }), yR("homePage:superRank"), (0, eW.jsxs)("div", {
              className: "AccountSettingsSuperRankTimeLeft",
              children: ["(", yR("general:timeLeft", {
                time: (0, vR.fc)((0, AW.m)(NW.code, "general:timeLeft"), PW.superRankInfo)
              }), ")"]
            })]
          }), (0, uW.siteSupportsPurchases)() && (0, eW.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [(0, eW.jsxs)(YW.m, {
              className: "AccountSettingsSuperRankProlong",
              loading: jR,
              onClick: () => {
                HW(VW.j.id, null)
              },
              children: [(0, eW.jsx)(bR.e, {
                name: "bolt"
              }), yR("settingsMenu:getSuperRankAdditionalDaysPremiumCurrency", {
                days: VW.j.product.days,
                price: VW.j.price
              })]
            }), (0, eW.jsxs)(YW.m, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, KW.k)({
                  mode: "gift",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, eW.jsx)(bR.e, {
                name: "bolt"
              }), yR("homePage:giftSuperRank")]
            })]
          }), dW && (0, eW.jsx)("div", {
            className: "AccountSettingsSuperRankProlongError SmallTextBold",
            children: yR(dW.translationKey)
          })]
        }), (0, eW.jsx)(ZW, {
          showing: MW
        }), JW.featureFlags.useSocialFeatures && (0, eW.jsx)(MR, {
          showing: MW
        }), (0, eW.jsxs)("div", {
          className: "SettingBoxGroup AccountSettingsDeleteAccountGroup",
          children: [(0, eW.jsxs)("div", {
            className: "SettingBox AccountSettingsDeleteAccount SettingBoxWarning",
            children: [(0, eW.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: yR("auth:deleteAccountButtonTitle")
            }), (0, kR.e)() && (0, eW.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: yR("auth:discordActivityKickWarning")
            }), (0, eW.jsx)(CR, {})]
          }), (0, eW.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: yR("auth:deleteAccountWarning")
          })]
        })]
      })
    }));

    function CR() {
      const {
        userContext: WW,
        isUserContextUpdating: RW
      } = (0, TW.c)(), {
        t: MW
      } = (0, AW.C)(), [CW, zR] = (0, wW.useState)(!1), [bR, yR] = (0, wW.useState)(null), NW = RW || CW;
      return (0, eW.jsxs)("div", {
        className: "AccountSettingsDeleteAccountButtonContainer",
        children: [(0, eW.jsxs)(YW.E, {
          onClick: async function() {
            if (!CW) {
              zR(!0);
              try {
                const RW = await async function() {
                  if (!await jR.NotificationProvider.showPromptPopup({
                      title: "auth:deleteAccountPopupTitleNamed",
                      textOpts: {
                        title: {
                          playerName: (0, UW.d)(WW.getPlayerName(), !JW.featureFlags.canSeeRealPlayerNames)
                        }
                      },
                      subtitle: (0, kR.e)() ? "auth:discordActivityDeleteAccountWarning" : "auth:deleteAccountWarning",
                      confirmText: "auth:deleteAccount",
                      destructive: !0,
                      confirmTooltip: "auth:deleteAccountPopupConfirmTooltip",
                      cancelText: "general:cancel",
                      cancelTooltip: "auth:deleteAccountPopupCancelTooltip"
                    }).getResult()) return XW.e.ok();
                  const RW = await (0, aR.postJsonWithMetricsCookiesAndJsonResponse)(`${sW.clientSideServerUrls.indexUrl}/index/metrics/revoke-cookies`, {}, {
                    retries: 3
                  }, WW.getMetricsCookies());
                  if (RW.error) return XW.e.error(RW.error);
                  (0, kR.e)() && (await dW.l.discordActivity()).exit("User deleted their account");
                  return (0, aR.forgetStoredGuestAccount)(WW.whamm), (0, aR.forceGlobalSignOut)(!0), XW.e.ok()
                }(), MW = RW.isError() ? RW.asError().message : null;
                yR(MW)
              } catch (RW) {
                console.error("Failed to delete account:", RW), yR(MW("auth:genericDeleteAccountError"))
              }
              zR(!1)
            }
          },
          className: "AccountSettingsDeleteAccountButton",
          disabled: NW,
          children: [NW && (0, eW.jsx)("div", {
            className: "DeletingAccountLoader",
            children: (0, eW.jsx)(FW.d, {})
          }), MW("auth:deleteAccount")]
        }), bR && (0, eW.jsx)("div", {
          className: "DeleteAccountError",
          children: bR
        })]
      })
    }
    var zM = MW(8084),
      AR = MW(2273),
      bM = MW(1080),
      yM = MW(1235);
    const NR = (0, wW.memo)((function(WW) {
        let {
          inGame: RW
        } = WW;
        const {
          t: MW,
          selectedLanguage: wW
        } = (0, AW.C)(), {
          clientEscMenuOptions: CW,
          showDebugOverlay: zR
        } = (0, QW.i)(["clientEscMenuOptions", "showDebugOverlay"]), bR = (0, gR.h)("hideCoordinates");
        let yR = "settingsMenu:showCoordinates",
          NW = "settingsMenu:showChunkCoordinates";

        function BW(WW) {
          const RW = new Intl.DisplayNames([WW], {
            type: "language"
          }).of(WW);
          return RW.charAt(0).toUpperCase() + RW.slice(1)
        }
        return bR && (yR = "settingsMenu:showCoordinatesHidden", NW = "settingsMenu:showChunkCoordinatesHidden"), (0, eW.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [RW && JW.featureFlags.canUseInviteLinks && (0, eW.jsxs)("div", {
            className: "SettingBox",
            children: [(0, eW.jsx)("div", {
              className: "SettingsMenuInviteHeader",
              children: MW("settingsMenu:inviteLink")
            }), (0, eW.jsx)(zM.e, {})]
          }), (0, eW.jsxs)("div", {
            className: "SettingBox",
            children: [(0, eW.jsx)("div", {
              className: "SliderText",
              style: {
                marginBottom: "10px"
              },
              children: MW("settingsMenu:language")
            }), (0, eW.jsx)(AR.b, {
              options: Object.entries(AW.g).map((WW => {
                let [RW, MW] = WW;
                return {
                  label: (0, eW.jsxs)("div", {
                    className: "SettingsMenuLanguageOption",
                    children: [(0, eW.jsx)("img", {
                      src: MW.flagImg,
                      alt: "flag"
                    }), (0, eW.jsxs)("span", {
                      children: [BW(RW), " ", (0, eW.jsxs)("span", {
                        className: "SettingsMenuLanguageOptionCode",
                        children: ["(", RW, ")"]
                      })]
                    })]
                  }),
                  value: RW
                }
              })),
              value: wW.code,
              onChange: WW => {
                bM.d.get().setCurrentLanguage(WW.value)
              }
            })]
          }), !(0, JW.isMobile)() && (0, yM.e)() && JW.featureFlags.useForceRotateForceFullscreenOverlay && (0, eW.jsx)(fW.b, {
            label: MW("settingsMenu:disableFullscreenMode"),
            checked: CW.disableFullscreen,
            onClick: WW => {
              QW.b.setClientEscMenuOptions({
                disableFullscreen: WW
              })
            }
          }), (0, eW.jsx)(fW.b, {
            label: MW(yR),
            checked: CW.showCoordinates,
            onClick: WW => {
              QW.b.setClientEscMenuOptions({
                showCoordinates: WW
              })
            },
            disabled: bR
          }), (0, eW.jsx)(fW.b, {
            label: MW(NW),
            checked: CW.showChunkCoordinates,
            onClick: WW => {
              QW.b.setClientEscMenuOptions({
                showChunkCoordinates: WW
              })
            },
            disabled: bR
          }), (0, eW.jsx)(fW.b, {
            label: MW("settingsMenu:showFps"),
            checked: CW.showFPS,
            onClick: WW => {
              QW.b.setClientEscMenuOptions({
                showFPS: WW
              })
            }
          }), (0, eW.jsx)(fW.b, {
            label: MW("settingsMenu:disableBunnyHopping"),
            checked: CW.disableBunnyHopping,
            onClick: WW => {
              QW.b.setClientEscMenuOptions({
                disableBunnyHopping: WW
              })
            }
          }), (0, dW.z)() && (0, eW.jsx)(fW.b, {
            label: MW("settingsMenu:showChat"),
            checked: CW.showChat,
            onClick: WW => {
              QW.b.setClientEscMenuOptions({
                showChat: WW
              })
            }
          }), (0, eW.jsx)(fW.b, {
            label: MW("settingsMenu:showDebugOverlay"),
            checked: zR,
            onClick: WW => {
              QW.b.set({
                showDebugOverlay: WW
              })
            }
          }), JW.featureFlags.useSocialFeatures && (0, eW.jsx)(fW.b, {
            label: MW("settingsMenu:showFriendOnlineToasts"),
            checked: CW.showFriendOnlineToasts,
            onClick: WW => {
              QW.b.setClientEscMenuOptions({
                showFriendOnlineToasts: WW
              })
            }
          }), (0, eW.jsx)(fW.b, {
            label: MW("settingsMenu:showNewItemIndicator"),
            checked: CW.showNewItemIndicator,
            onClick: WW => {
              QW.b.setClientEscMenuOptions({
                showNewItemIndicator: WW
              })
            }
          })]
        })
      })),
      eR = (0, wW.memo)((function() {
        const {
          t: WW
        } = (0, AW.C)(), {
          soundVolume: RW,
          musicVolume: MW
        } = (0, QW.i)(["soundVolume", "musicVolume"]);
        return (0, eW.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [(0, eW.jsx)(fW.g, {
            name: WW("settingsMenu:musicVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: MW,
            onChange: WW => {
              QW.b.set({
                musicVolume: Math.round(100 * WW) / 100
              })
            },
            format: WW => WW.toFixed(2)
          }), (0, eW.jsx)(fW.g, {
            name: WW("settingsMenu:soundEffectsVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: RW,
            onChange: WW => {
              QW.b.set({
                soundVolume: Math.round(100 * WW) / 100
              })
            },
            format: WW => WW.toFixed(2)
          })]
        })
      }));
    var BR = MW(267),
      tM = MW(1253),
      TR = MW(2754),
      gM = MW(8088),
      iM = MW(2592);
    const YR = {
      app: "notificationSettings:pushTargetsApp",
      browser: "notificationSettings:pushTargetsBrowser",
      msnPlay: "notificationSettings:pushTargetsMsnPlay"
    };

    function JR() {
      const {
        t: WW
      } = (0, AW.C)(), RW = (0, iM.e)(), {
        mobilePushNotificationsCanAsk: MW
      } = (0, QW.i)(["mobilePushNotificationsCanAsk"]), [CW, zR] = (0, wW.useState)(null), [bR, yR] = (0, wW.useState)(!1), [NW, BW] = (0, wW.useState)(null), [tR, TW] = (0, wW.useState)(!1), gR = (0, wW.useCallback)((() => {
        (0, TR.c)().then((WW => {
          RW.current && (zR(WW), yR(!1))
        })).catch((WW => {
          console.error("Failed to load push notification targets:", WW), RW.current && yR(!0)
        }))
      }), [RW]), iR = (0, wW.useCallback)((() => {
        (0, gM.e)().then((WW => {
          RW.current && BW((() => WW))
        }))
      }), [RW]);
      (0, wW.useEffect)((() => {
        gR()
      }), [gR]), (0, wW.useEffect)((() => {
        iR()
      }), [iR, MW]), (0, tM.f)(TR.i, gR);
      const JW = null === CW ? [] : Object.keys(YR).filter((WW => CW[WW] > 0));
      return (0, eW.jsxs)("div", {
        className: "SettingBox PushNotificationSettings",
        children: [(0, eW.jsx)("div", {
          className: "SliderText",
          children: WW("notificationSettings:pushNotifications")
        }), null === CW && bR && (0, eW.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: WW("notificationSettings:pushTargetsLoadFailed")
        }), null !== CW && 0 === JW.length && (0, eW.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: WW("notificationSettings:pushTargetsNone")
        }), JW.length > 0 && (0, eW.jsx)("ul", {
          className: "PushNotificationSettingsTargets",
          children: JW.map((RW => {
            var MW;
            return (0, eW.jsx)("li", {
              children: WW(YR[RW], {
                count: null !== (MW = null === CW || void 0 === CW ? void 0 : CW[RW]) && void 0 !== MW ? MW : 0
              })
            }, RW)
          }))
        }), null !== NW && (0, eW.jsx)(YW.h, {
          className: "PushNotificationSettingsButton",
          loading: tR,
          onClick: () => {
            TW(!0), NW().catch((WW => {
              console.error("Failed to turn on push notifications:", WW)
            })).finally((() => {
              RW.current && (TW(!1), iR())
            }))
          },
          children: WW("notificationSettings:pushTurnOn")
        })]
      })
    }
    const PR = {
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
      IR = (0, wW.memo)((function() {
        const {
          t: WW
        } = (0, AW.C)(), {
          clientEscMenuOptions: RW
        } = (0, QW.i)(["clientEscMenuOptions"]);
        return (0, eW.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [(0, eW.jsx)(fW.f, {
            label: WW("notificationSettings:friendRequests"),
            options: BR.b.map((RW => ({
              value: RW,
              label: WW(PR[RW].label)
            }))),
            value: RW.friendRequestNotifications,
            onChange: WW => {
              QW.b.setClientEscMenuOptions({
                friendRequestNotifications: WW
              })
            },
            circleInfoText: (0, eW.jsx)("div", {
              className: "NotificationSettingLevelsInfo",
              children: BR.b.map((RW => (0, eW.jsxs)("div", {
                children: [(0, eW.jsx)("b", {
                  children: WW(PR[RW].label)
                }), ": ", WW(PR[RW].info)]
              }, RW)))
            })
          }), (0, eW.jsx)(JR, {})]
        })
      }));
    var oR = MW(3557),
      lR = MW(173),
      FR = MW(230),
      fR = MW(5661),
      QR = MW(2518),
      rM = MW(8091),
      cM = MW(564),
      XR = MW(33);
    var jM = MW(253),
      kM = MW(50);
    const aM = new Map([
      ["chunkHorizAddDist", "horizontal"],
      ["chunkVertAddDist", "vertical"]
    ]);

    function sR(WW) {
      return aM.has(WW) ? PW.gameBridge.lookup("zk", null) : null
    }

    function dR(WW) {
      if (!(0, cM.S)(QW.b.get("clientEscMenuOptions")[WW])) return QW.b.get("clientEscMenuOptions")[WW];
      const RW = sR(WW);
      return null !== RW ? RW[aM.get(WW)] : kM.g.getItem(WW)
    }

    function pR(WW, RW) {
      if ("useTouchControls" === WW) return void QW.b.set({
        isTouchScreen: RW
      });
      WW in QW.b.get("clientEscMenuOptions") && QW.b.setClientEscMenuOptions({
        [WW]: RW
      });
      const MW = sR(WW);
      null !== MW && PW.gameBridge.send("setChunkAddDistance", {
        ...MW,
        [aM.get(WW)]: RW
      }), kM.g.setItem(WW, RW)
    }
    var hR = MW(8097),
      UR = MW(8103),
      ER = MW(8106),
      VR = MW(3544);

    function mM(WW) {
      var RW, CW, bR, yR;
      let {
        minChunkAddDist: NW,
        getValue: BW,
        onChange: tR,
        setApplySettingsCallback: TW
      } = WW;
      const {
        t: iR
      } = (0, AW.C)(), {
        clientEscMenuOptions: YW
      } = (0, QW.i)(["clientEscMenuOptions", "showDistantNametags"]), PW = (0, wW.useRef)(BW("showFog")), IW = (0, wW.useRef)(YW.antiAliasing), oW = (0, wW.useRef)(YW.useWebGpu), [lW, FW] = (0, wW.useState)(null), [cR, XW] = (0, wW.useState)((() => (0, QR.f)(JW.featureFlags.settings.canUseShaderPacks))), [jR] = (0, wW.useState)((() => QW.b.isWebGpuDefaultOff())), [kR] = (0, wW.useState)(FR.f);
      (0, wW.useEffect)((() => {
        let WW = !1;
        return (0, JW.hasUsableWebGpuAdapter)().then((RW => {
          WW || FW(RW)
        })), (0, QR.k)(JW.featureFlags.settings.canUseShaderPacks) && (0, fR.h)().then((async RW => {
          const wW = null !== RW && await async function(WW) {
            const [{
              isShaderPackActive: RW
            }, {
              loadPageShaderPackCompiler: wW
            }] = await Promise.all([MW.e(113).then((() => MW(5656))), Promise.all([MW.e(120), MW.e(117), MW.e(116)]).then((() => MW(5621)))]);
            return RW(WW, await wW())
          }(RW);
          WW || XW(wW)
        })), () => {
          WW = !0
        }
      }), []);
      const aR = function(WW, RW, MW, wW, CW) {
          return (0, rM.e)(MW, wW) && !0 === RW ? {
            translationKey: "settingsMenu:newWebGpuForcedOnByShaderPack",
            checked: !0,
            disabled: !0
          } : {
            translationKey: !1 !== RW ? "settingsMenu:newWebGpu" : CW ? "settingsMenu:newWebGpuDisabledUntilRestart" : "settingsMenu:newWebGpuUnsupported",
            checked: WW && !1 !== RW,
            disabled: !0 !== RW
          }
        }(YW.useWebGpu, lW, cR, jR, kR),
        sW = (YW.useWebGpu || (0, rM.e)(cR, jR)) && cR && !0 === lW,
        dW = (0, gR.h)("lightingOverride"),
        pW = !(0, cM.S)(dW);
      let hW = "settingsMenu:enableLighting";
      pW && (hW = dW ? "settingsMenu:enableLightingForcedOn" : "settingsMenu:enableLightingForcedOff");
      const UW = WW => {
          var RW, MW, wW;
          const CW = null !== (RW = WW.showFog) && void 0 !== RW ? RW : BW("showFog"),
            zR = null !== (MW = WW.antiAliasing) && void 0 !== MW ? MW : YW.antiAliasing,
            AW = null !== (wW = WW.useWebGpu) && void 0 !== wW ? wW : YW.useWebGpu,
            bR = !jM.q && CW !== PW.current || zR !== IW.current || AW !== oW.current;
          TW(bR ? () => fW.i : null)
        },
        EW = (0, gR.h)("fogChunkDistanceOverride"),
        VW = (0, gR.h)("fogBlockDistanceOverride"),
        mR = !(0, cM.S)(EW) || !(0, cM.S)(VW),
        xR = mR ? "settingsMenu:showFogForcedOn" : "settingsMenu:showFog",
        [vR, KW] = (0, oR.f)(NW),
        [uW, OW] = (0, VR.d)(NW),
        nW = iR("settingsMenu:chunkLoadDistanceDeviceLimit"),
        GW = uW < vR,
        LW = Math.min(null !== (RW = BW("chunkHorizAddDist")) && void 0 !== RW ? RW : NW[0], uW),
        HW = !mR && function(WW, RW) {
          return !0 === WW.showFog && WW.fogChunkDistance > RW
        }(YW, LW);
      return (0, eW.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [(0, eW.jsx)(fW.g, {
          name: iR("settingsMenu:horizontalChunkLoadDistance"),
          min: NW[0],
          max: vR,
          selectableMax: uW,
          cappedNote: nW,
          step: 1,
          initValue: LW,
          onChange: WW => {
            !0 === BW("showFog") && WW < BW("fogChunkDistance") && tR("fogChunkDistance", WW), tR("chunkHorizAddDist", WW), XR.k.Sz("updatedChunkLoadDist")
          },
          circleInfoText: iR("settingsMenu:chunkLoadDistanceInfo")
        }), (0, eW.jsx)(fW.g, {
          name: iR("settingsMenu:verticalChunkLoadDistance"),
          min: NW[1],
          max: KW,
          selectableMax: OW,
          cappedNote: GW ? void 0 : nW,
          step: 1,
          initValue: Math.min(null !== (CW = BW("chunkVertAddDist")) && void 0 !== CW ? CW : NW[1], OW),
          onChange: WW => {
            tR("chunkVertAddDist", WW), XR.k.Sz("updatedChunkLoadDist")
          },
          circleInfoText: iR("settingsMenu:chunkLoadDistanceInfo"),
          className: "VerticalChunkLoadSlider"
        }), (0, eW.jsx)(fW.b, {
          label: iR("settingsMenu:chunkFadeIn"),
          checked: YW.chunkFadeIn,
          onClick: WW => {
            QW.b.setClientEscMenuOptions({
              chunkFadeIn: WW
            })
          },
          circleInfoText: iR("settingsMenu:chunkFadeInInfo")
        }), rR.devTools.supports("chunkBorders") && (0, eW.jsx)(fW.b, {
          label: iR("settingsMenu:showChunkBorders"),
          checked: YW.showChunkBorders,
          onClick: WW => {
            QW.b.setClientEscMenuOptions({
              showChunkBorders: WW
            })
          },
          circleInfoText: iR("settingsMenu:showChunkBordersInfo")
        }), (0, eW.jsx)(fW.b, {
          label: iR(hW),
          checked: YW.enableLighting,
          onClick: WW => {
            QW.b.setClientEscMenuOptions({
              enableLighting: WW
            })
          },
          disabled: pW
        }), (0, eW.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, eW.jsx)(fW.b, {
            label: iR(xR),
            checked: YW.showFog,
            onClick: WW => {
              UW({
                showFog: WW
              }), QW.b.setClientEscMenuOptions({
                showFog: WW
              })
            },
            disabled: mR,
            className: zR()({
              SettingBoxWarning: HW
            })
          }), (0, eW.jsx)(fW.g, {
            name: iR("settingsMenu:fogChunkDistance"),
            min: NW[0],
            max: lR.c.maxChunkHorizAddDistance,
            step: 1,
            initValue: null !== (bR = YW.fogChunkDistance) && void 0 !== bR ? bR : NW[0],
            onChange: WW => {
              QW.b.setClientEscMenuOptions({
                fogChunkDistance: WW
              }), XR.k.Sz("fogChunkDistanceChanged", WW)
            },
            circleInfoText: iR("settingsMenu:fogChunkDistanceInfo"),
            disabled: mR || !1 === BW("showFog"),
            className: zR()({
              SettingBoxWarning: HW
            })
          }), HW && (0, eW.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: iR("settingsMenu:fogChunkDistanceInfo")
          })]
        }), !jM.q && (0, eW.jsx)(fW.b, {
          label: iR(sW ? "settingsMenu:disableBlockTextureAtlasUnavailableWithShaderPack" : "settingsMenu:disableBlockTextureAtlas"),
          checked: !sW && YW.disableTexAtlas,
          onClick: WW => {
            QW.b.setClientEscMenuOptions({
              disableTexAtlas: WW
            })
          },
          circleInfoText: iR("settingsMenu:disableBlockTextureAtlasInfo"),
          disabled: sW
        }), (0, eW.jsx)(fW.g, {
          name: iR("settingsMenu:fieldOfView"),
          min: 50,
          max: 160,
          step: 1,
          initValue: YW.cameraFOV,
          onChange: WW => {
            QW.b.setClientEscMenuOptions({
              cameraFOV: WW
            })
          }
        }), (0, eW.jsx)(fW.b, {
          label: iR("settingsMenu:disableViewBobbing"),
          checked: YW.disableBobbing,
          onClick: WW => {
            QW.b.setClientEscMenuOptions({
              disableBobbing: WW
            })
          },
          circleInfoText: iR("settingsMenu:disableViewBobbingInfo")
        }), (0, eW.jsx)(fW.b, {
          label: iR("settingsMenu:antiAliasing"),
          checked: YW.antiAliasing,
          onClick: WW => {
            UW({
              antiAliasing: WW
            }), (0, hR.g)("antiAliasing"), QW.b.setClientEscMenuOptions({
              antiAliasing: WW
            })
          },
          circleInfoText: iR("settingsMenu:antiAliasingInfo")
        }), (0, eW.jsx)(fW.g, {
          name: iR("settingsMenu:pixelScale"),
          min: 1,
          max: 8,
          step: 1,
          initValue: null !== (yR = YW.pixelScale) && void 0 !== yR ? yR : 1,
          onChange: WW => {
            (WW !== QW.b.get("clientEscMenuOptions").pixelScale || (0, ER.q)()) && (0, hR.g)("pixelScale"), QW.b.setClientEscMenuOptions({
              pixelScale: WW
            })
          },
          circleInfoText: iR("settingsMenu:pixelScaleInfo"),
          format: WW => `${WW}x`
        }), (0, eW.jsx)(fW.b, {
          label: iR("settingsMenu:pixelSmoothing"),
          checked: YW.pixelSmoothing,
          onClick: WW => {
            QW.b.setClientEscMenuOptions({
              pixelSmoothing: WW
            })
          },
          circleInfoText: iR("settingsMenu:pixelSmoothingInfo")
        }), jM.q && (0, eW.jsx)(fW.b, {
          label: iR("settingsMenu:distantNametags"),
          checked: (0, UR.b)(),
          onClick: WW => {
            QW.b.set({
              showDistantNametags: WW
            })
          },
          circleInfoText: iR("settingsMenu:distantNametagsInfo")
        }), (0, eW.jsx)(fW.b, {
          label: iR(aR.translationKey),
          checked: aR.checked,
          onClick: WW => {
            UW({
              useWebGpu: WW
            }), QW.b.setClientEscMenuOptions({
              useWebGpu: WW
            })
          },
          circleInfoText: iR("settingsMenu:newWebGpuInfo"),
          disabled: aR.disabled
        })]
      })
    }
    var xM = MW(3552),
      vM = MW(7742),
      KR = MW(7749),
      uR = MW(1213),
      OR = MW(3959),
      nR = MW(8126),
      GR = MW(1571),
      LR = MW(3395),
      HR = MW(1573),
      DR = MW(276);
    const qM = (0, wW.memo)((function() {
      const {
        clientEscMenuOptions: WW
      } = (0, QW.i)(["clientEscMenuOptions"]), {
        recording: RW,
        clipping: MW,
        hasClipBuffer: CW
      } = (0, GR.h)("replayRecorder"), AW = (0, GR.f)("connectedGame", (WW => WW.replay)), bR = (0, LR.n)(), yR = !1 === (0, gR.h)("canRecordReplays");
      (0, wW.useEffect)((() => {
        PW.gameBridge.send("setRecorderPrefs", {
          clipping: WW.enableClipping,
          clipSeconds: WW.clipDurationSeconds
        })
      }), [WW.enableClipping, WW.clipDurationSeconds]);
      const NW = bR || AW,
        BW = !NW && !yR,
        tR = RW || BW,
        TW = BW,
        iR = TW && MW && !RW;

      function JW() {
        tR && PW.gameBridge.send("toggleRecording", null)
      }
      return (0, eW.jsxs)("div", {
        className: "SettingsMenuRightInner ReplayViewerCategory",
        children: [(0, eW.jsxs)("div", {
          className: "SettingBox",
          children: [(0, eW.jsx)("div", {
            className: "ReplayViewerCategoryRecordingRow",
            children: RW ? (0, eW.jsxs)(eW.Fragment, {
              children: [(0, eW.jsxs)(YW.E, {
                className: "ReplayViewerCategoryButton",
                onClick: JW,
                disabled: !tR,
                children: [(0, eW.jsx)("span", {
                  children: "Stop Recording"
                }), (0, eW.jsx)(HR.b, {
                  noaAction: "recordGame"
                })]
              }), (0, eW.jsx)(nR.e, {
                className: "ReplayViewerCategoryRecordingIndicator"
              })]
            }) : (0, eW.jsxs)(YW.h, {
              className: "ReplayViewerCategoryButton",
              onClick: JW,
              disabled: !tR,
              children: [(0, eW.jsx)("span", {
                children: "Start Recording"
              }), (0, eW.jsx)(HR.b, {
                noaAction: "recordGame"
              })]
            })
          }), yR && (0, eW.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Recording is turned off in this game."
          }), NW && !RW && (0, eW.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Close Replay Mode to start recording."
          })]
        }), (0, eW.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, eW.jsx)(fW.b, {
            label: "Enable clipping",
            checked: WW.enableClipping,
            disabled: !TW,
            onClick: function(WW) {
              TW && QW.b.setClientEscMenuOptions({
                enableClipping: WW
              })
            },
            className: zR()({
              SettingBoxDisabled: !TW
            })
          }), (0, eW.jsx)(fW.g, {
            name: "Clip duration (seconds)",
            min: DR.m,
            max: DR.k,
            step: DR.d,
            initValue: WW.clipDurationSeconds,
            onChange: function(WW) {
              QW.b.setClientEscMenuOptions({
                clipDurationSeconds: WW
              })
            },
            circleInfoText: "Longer clip durations use more memory and may affect performance.",
            disabled: !TW || !WW.enableClipping
          })]
        }), (0, eW.jsxs)("div", {
          className: "SettingBox",
          children: [(0, eW.jsxs)(YW.h, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              iR && PW.gameBridge.send("saveClip", null)
            },
            disabled: !iR,
            children: [(0, eW.jsx)("span", {
              children: "Record clip"
            }), (0, eW.jsx)(HR.b, {
              noaAction: "recordClip"
            })]
          }), WW.enableClipping && !CW && TW && !RW && (0, eW.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clip buffer is filling \u2014 play for a moment, then save."
          }), RW && (0, eW.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clipping pauses while a full recording is active."
          })]
        }), (0, eW.jsxs)("div", {
          className: "SettingBox",
          children: [(0, eW.jsxs)(YW.h, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              (0, LR.k)(!0), QW.b.set({
                openEverythingMenuName: null
              })
            },
            disabled: bR,
            children: [(0, eW.jsx)("span", {
              children: "Open Replay Mode"
            }), (0, eW.jsx)(HR.b, {
              noaAction: "replayViewerOpen"
            })]
          }), bR && (0, eW.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Replay Mode is already open."
          })]
        }), (0, eW.jsxs)("div", {
          className: "SettingBox",
          children: [(0, eW.jsx)("div", {
            className: "ReplayViewerCategoryTutorialTitle",
            children: "How to use Replay Mode"
          }), (0, eW.jsx)("iframe", {
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
    var ZR = MW(232),
      SR = MW(1050);
    const WM = {
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
        icon: () => (0, eW.jsx)("svg", {
          className: "svg-inline--fa",
          viewBox: "0 0 640 512",
          "aria-hidden": "true",
          children: (0, eW.jsx)("path", {
            fill: "currentColor",
            d: "M256 20H384A36 36 0 0 1 420 56V208A36 36 0 0 1 384 244H256A36 36 0 0 1 220 208V56A36 36 0 0 1 256 20ZM262 166L378 166L320 90ZM36 268H164A36 36 0 0 1 200 304V456A36 36 0 0 1 164 492H36A36 36 0 0 1 0 456V304A36 36 0 0 1 36 268ZM134 438L134 322L58 380ZM256 268H384A36 36 0 0 1 420 304V456A36 36 0 0 1 384 492H256A36 36 0 0 1 220 456V304A36 36 0 0 1 256 268ZM378 346L262 346L320 422ZM476 268H604A36 36 0 0 1 640 304V456A36 36 0 0 1 604 492H476A36 36 0 0 1 440 456V304A36 36 0 0 1 476 268ZM506 322L506 438L582 380Z"
          })
        }),
        displayName: "settingsMenu:controls"
      },
      controller: {
        icon: "fa-solid fa-gamepad",
        displayName: "gamepadSettings:tab"
      },
      texturePack: {
        icon: "fa-solid fa-folder-image",
        displayName: "settingsMenu:texturePack"
      },
      ww: {
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

    function RM() {
      return Promise.all([MW.e(120), MW.e(117), MW.e(111), MW.e(108)]).then((() => MW(38556))).then((WW => ({
        default: WW.ShaderPackCategory
      })), (WW => (console.error("Failed to load the shader pack settings", WW), {
        default: MM
      })))
    }

    function MM() {
      const {
        t: WW
      } = (0, AW.C)();
      return (0, eW.jsx)("div", {
        className: "SettingsMenuRightInner",
        children: WW("shaderPack:tabLoadFailed")
      })
    }
    var wM = MW(1208);
    const CM = (0, wW.lazy)((() => MW.e(242).then((() => MW(38543))).then((WW => ({
        default: WW.BloxdInformation
      }))))),
      zw = (0, wW.lazy)(RM);

    function AM(WW) {
      return WW ? "general" : "account"
    }
    const bw = new Map,
      yw = (0, wW.memo)((function(WW) {
        let {
          show: RW,
          setBeforeResumeCallback: MW
        } = WW;
        (0, iR.b)();
        const {
          gameState: CW,
          openSettingsCategory: zR
        } = (0, QW.i)(["gameState", "openSettingsCategory"]), {
          userContext: yR
        } = (0, TW.c)(), {
          t: NW
        } = (0, AW.C)(), lW = (0, tR.b)(), FW = (0, gR.h)("minChunkAddDist"), fW = "inGame" === CW, [rR, XW] = (0, wW.useState)(AM(fW)), [jR, aR] = (0, wW.useState)(null), [sW, dW] = (0, wW.useState)([]), pW = (0, wW.useRef)(function() {
          const WW = new Date,
            RW = 6 * (WW.getMonth() + WW.getDate()) % ZR.z.length;
          return [...ZR.z, ...ZR.z].slice(RW, RW + 6)
        }()), hW = (0, wW.useRef)(null), UW = (0, tM.i)(uR.h, (0, uR.d)()), EW = Object.keys(WM).filter((WW => {
          switch (WW) {
            case "replayViewer":
              return fW;
            case "developerTools":
              return yR.playerHasRank("developer") || !1;
            case "texturePack":
              return JW.featureFlags.settings.canChangeTexturePack;
            case "ww":
              return JW.featureFlags.settings.canUseShaderPacks;
            case "notifications":
              return JW.featureFlags.useSocialFeatures;
            case "alternativeDomains":
              return "crazygames" !== kR.u;
            case "controller":
              return JW.featureFlags.useControllerSupport && (UW || "controller" === rR);
            default:
              return !0
          }
        }));
        (0, tM.f)("toggleFullCoordinateOverlay", (() => {
          const WW = dR("showCoordinates") && dR("showChunkCoordinates") && dR("showFPS");
          pR("showCoordinates", !WW), pR("showChunkCoordinates", !WW), pR("showFPS", !WW), lW()
        })), (0, tM.f)("updatedChunkLoadDist", (() => {
          lW()
        })), (0, wW.useEffect)((() => {
          if (aR(null), null === QW.b.get("openSettingsCategory")) {
            const WW = (0, wM.d)() ? bw.get(fW) : void 0;
            XW(WW && EW.includes(WW) ? WW : AM(fW))
          }
        }), [RW]), (0, wW.useEffect)((() => {
          null !== zR && (XW(zR), bw.set(fW, zR), QW.b.set({
            openSettingsCategory: null
          }))
        }), [zR, fW]), (0, wW.useLayoutEffect)((() => {
          hW.current && (hW.current.scrollTop = 0)
        }), [rR, RW]), (0, wW.useEffect)((() => {
          "updateLog" === rR && (0, oW.b)().then(dW)
        }), [rR]), (0, wW.useEffect)((() => {
          if ((0, cM.S)(FW)) return;
          const [WW, RW] = (0, xM.f)(), [MW, wW] = (0, oR.f)(FW), CW = (0, SR.e)(FW[0], WW, MW), zR = (0, SR.e)(FW[1], RW, wW);
          PW.gameBridge.send("setChunkAddDistance", {
            horizontal: CW,
            vertical: zR
          })
        }), [FW]);
        const VW = (0, wW.useCallback)((async () => {
          jR && (await jR(), aR(null))
        }), [jR]);

        function mR() {
          QW.b.set({
            openEverythingMenuName: null
          })
        }
        return (0, wW.useEffect)((() => {
          MW((() => VW))
        }), [VW, MW]), (0, eW.jsxs)("div", {
          className: "SettingsMenu Menu",
          style: RW ? {} : {
            display: "none"
          },
          children: [(0, eW.jsx)("div", {
            className: "MenuSideBar",
            children: (0, eW.jsx)("div", {
              className: "MenuSideBarBody",
              children: (0, eW.jsx)(BW, {
                items: EW.map((WW => {
                  const RW = WM[WW].icon;
                  return {
                    id: WW,
                    faIcon: "string" === typeof RW ? RW : void 0,
                    iconElement: "string" === typeof RW ? void 0 : (0, eW.jsx)(RW, {}),
                    title: NW(WM[WW].displayName),
                    redDot: !1
                  }
                })),
                selectedItemId: rR,
                onClick: WW => {
                  !async function(WW) {
                    await VW(), XW(WW), bw.set(fW, WW)
                  }(WW)
                }
              })
            })
          }), (0, eW.jsxs)("div", {
            ref: hW,
            className: "MenuBody SettingsMenuRight",
            children: ["account" === rR && (0, eW.jsx)(wR, {
              showing: RW,
              inGame: fW
            }), "general" === rR && (0, eW.jsx)(NR, {
              inGame: fW
            }), "audio" === rR && (0, eW.jsx)(eR, {}), "notifications" === rR && (0, eW.jsx)(IR, {}), "graphics" === rR && (0, eW.jsx)(mM, {
              minChunkAddDist: null !== FW && void 0 !== FW ? FW : [2, 2],
              getValue: dR,
              onChange: pR,
              setApplySettingsCallback: aR
            }), "controls" === rR && (0, eW.jsx)(vM.e, {}), "controller" === rR && JW.featureFlags.useControllerSupport && (0, eW.jsx)(KR.b, {}), JW.featureFlags.settings.canChangeTexturePack && "texturePack" === rR && (0, eW.jsx)(OR.e, {
              setApplySettingsCallback: aR
            }), JW.featureFlags.settings.canUseShaderPacks && "ww" === rR && (0, eW.jsx)(wW.Suspense, {
              fallback: null,
              children: (0, eW.jsx)(zw, {
                setApplySettingsCallback: aR
              })
            }), "updateLog" === rR && (0, eW.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, eW.jsx)("div", {
                className: "UpdateLogsContainer",
                children: sW.map(((WW, RW) => (0, eW.jsx)(IW.e, {
                  updateLog: WW,
                  index: RW,
                  close: mR
                }, RW)))
              })
            }), "information" === rR && (0, eW.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, eW.jsx)(wW.Suspense, {
                fallback: null,
                children: (0, eW.jsx)(CM, {})
              })
            }), "alternativeDomains" === rR && (0, eW.jsxs)("div", {
              className: "SettingsMenuRightInner",
              children: [(0, eW.jsx)("div", {
                className: "AlternativeDomainsTitle",
                children: NW("settingsMenu:unblockedDomainsDescription")
              }), (0, eW.jsx)("div", {
                className: "AlternativeDomainsList",
                children: pW.current.map((WW => (0, eW.jsxs)(YW.h, {
                  onClick: () => {
                    window.open(`https://${WW}`)
                  },
                  children: [(0, eW.jsx)(bR.e, {
                    name: "arrow-up-right-from-square"
                  }), " ", WW]
                }, WW)))
              })]
            }), "replayViewer" === rR && (0, eW.jsx)(qM, {}), "developerTools" === rR && (0, eW.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, eW.jsx)(cR, {
                setApplySettingsCallback: aR
              })
            }), null !== jR && (0, eW.jsx)("div", {
              className: "SettingsMenuRightFooter",
              children: (0, eW.jsx)(YW.h, {
                className: "SettingsMenuRightFooterButton",
                onClick: VW,
                children: NW("general:apply")
              })
            })]
          })]
        })
      }));
    var NM = MW(2036);
    const eM = ["characters", "emote", "skin", "hat", "head", "eyebrows", "eyes", "back", "body", "legs", "shoes", "profileEffect", "cape", "nameColour"],
      BM = (0, wW.lazy)((() => Promise.resolve().then((() => MW(3654))).then((WW => {
        WW.needGameClientAfterPaint();
        const RW = WW.matchmakingLibrariesPromise.then((WW => (0, NM.b)(WW.loadCharacterCustomisationUI(), (WW => WW.CharacterCustomisationUI))));
        return Promise.all([WW.ensureGameSetup(), RW]).then((WW => {
          let [, RW] = WW;
          return RW
        }))
      }))));

    function tw(WW) {
      let {
        show: RW
      } = WW;
      const {
        userContext: MW
      } = (0, TW.c)(), [CW, zR] = (0, wW.useState)("characters");
      if (!RW) return null;
      const AW = eM.filter((WW => "cape" !== WW && "nameColour" !== WW || MW.getPlayerRanks().includes("super") || (0, uW.siteSupportsPurchases)())).map((WW => ({
        id: WW,
        faIcon: ZR.D[WW],
        title: ZR.F[WW],
        redDot: !1
      })));
      return (0, eW.jsxs)("div", {
        className: "Menu CharCustomisation",
        children: [(0, eW.jsx)("div", {
          className: "MenuSideBar",
          children: (0, eW.jsx)(BW, {
            items: AW,
            selectedItemId: CW,
            onClick: WW => {
              zR(WW)
            }
          })
        }), (0, eW.jsx)("div", {
          className: "MenuBody",
          children: (0, eW.jsx)(wW.Suspense, {
            fallback: (0, eW.jsx)("div", {
              className: "CharacterCustomisationLoading",
              children: (0, eW.jsx)(FW.d, {})
            }),
            children: (0, eW.jsx)(BM, {
              selectedTab: CW
            })
          })
        })]
      })
    }
    var TM = MW(1273),
      gw = MW(8135),
      iw = MW(3573),
      YM = MW(2541),
      JM = MW(2571),
      PM = MW(8157),
      IM = MW(7651),
      oM = MW(8144),
      lM = MW(8153),
      FM = MW(1537),
      fM = MW(1523),
      QM = MW(3893),
      rw = MW(1090),
      cwW = MW(1053),
      XM = MW(1480),
      jw = MW(7736);
    class kw {
      constructor(WW) {
        this.info = WW
      }
      static fromShopInfo(WW) {
        const RW = {};
        for (const MW in WW) {
          const wW = !0 === WW[MW].redDot && !0 !== WW[MW].forceRemoveRedDot;
          RW[MW] = {
            redDot: wW,
            items: {}
          };
          for (const CW in WW[MW].items) {
            const wW = WW[MW].items[CW],
              zR = !0 === wW.redDot && !0 !== wW.forceRemoveRedDot;
            RW[MW].items[CW] = {
              redDot: zR
            }
          }
        }
        return new kw(RW)
      }
      anyCategoryHasRedDots() {
        for (const WW in this.info)
          if (this.categoryHasRedDot(WW)) return !0;
        return !1
      }
      doesCategoryExist(WW) {
        return !(0, cM.S)(this.info[WW])
      }
      categoryHasRedDot(WW) {
        return !0 === this.info[WW].redDot
      }
      updateCategoryRedDot(WW, RW) {
        this.info[WW].redDot = RW
      }
      doesItemExist(WW, RW) {
        return this.doesCategoryExist(WW) && !(0, cM.S)(this.info[WW].items[RW])
      }
      itemHasRedDot(WW, RW) {
        return !0 === this.info[WW].items[RW].redDot
      }
      updateItemRedDot(WW, RW, MW) {
        this.info[WW].items[RW].redDot = MW
      }
      shallowCopy() {
        return new kw(this.info)
      }
    }

    function aw(WW, RW) {
      return `${WW}\x1f${RW}`
    }

    function sM(WW) {
      return WW ? Object.keys(WW).sort(((RW, MW) => {
        var wW, CW, zR, AW;
        const bR = (null !== (wW = null === (CW = WW[MW]) || void 0 === CW ? void 0 : CW.sortPriority) && void 0 !== wW ? wW : 0) - (null !== (zR = null === (AW = WW[RW]) || void 0 === AW ? void 0 : AW.sortPriority) && void 0 !== zR ? zR : 0);
        return 0 !== bR ? bR : RW.localeCompare(MW)
      })) : []
    }

    function dM(WW, RW) {
      return !(0, cM.S)(RW) && !(0, cM.S)(WW) && RW in WW
    }
    const pM = (0, wW.memo)((function(WW) {
      var RW, MW;
      let {
        show: CW
      } = WW;
      const AW = (0, GR.f)("players", xw),
        bR = (0, GR.f)("players", vw),
        [NW, tR] = (0, wW.useState)({
          shopInfo: {},
          userInputsPerItem: {},
          redDotInfo: kw.fromShopInfo({}),
          currencyAmounts: {},
          selectedCategoryKey: null,
          onBoughtInfo: null,
          awaitingPurchase: !1
        }),
        TW = (0, wW.useRef)(""),
        iR = (0, wW.useRef)(null),
        JW = (0, wW.useRef)(0),
        IW = (0, wW.useRef)(void 0),
        oW = (0, wW.useRef)(null),
        lW = (0, wW.useRef)(NW),
        FW = NW.redDotInfo.anyCategoryHasRedDots(),
        [fW, rR] = (0, wW.useState)(null),
        cR = (0, wW.useRef)(!1);
      let XW = !1,
        jR = 0,
        aR = 0;
      if (NW.currencyAmounts) {
        for (const WW in NW.currencyAmounts) {
          var sW;
          const RW = NW.currencyAmounts[WW];
          RW.hidden || (jR++, (null === (sW = RW.subtext) || void 0 === sW ? void 0 : sW.length) > 0 && aR++)
        }
        XW = jR + aR > 4
      }(0, wW.useEffect)((() => {
        XR.k.Sz("showShopIconRedDot", FW, !0)
      }), [FW]), (0, wW.useEffect)((() => {
        PW.gameBridge.send("setShopOpen", CW), CW || (clearTimeout(IW.current), tR((WW => WW.awaitingPurchase ? {
          ...WW,
          awaitingPurchase: !1
        } : WW)))
      }), [CW]), (0, wW.useEffect)((() => () => {
        PW.gameBridge.send("setShopOpen", !1), clearTimeout(IW.current)
      }), []), (0, wW.useEffect)((() => {
        lW.current = NW
      }), [NW]), (0, wW.useEffect)((() => {
        if (null === fW) return;
        return (0, XM.b)("pointerdown", (WW => {
          const RW = WW.target;
          null !== RW && void 0 !== RW && RW.closest(".ShopItem") || rR(null)
        }))
      }), [fW]);
      const pW = WW => {
          tR((RW => ({
            ...RW,
            ...WW
          })))
        },
        hW = WW => {
          var RW;
          clearTimeout(null === (RW = NW.onBoughtInfo) || void 0 === RW ? void 0 : RW.timeout);
          const MW = setTimeout((() => {
            pW({
              onBoughtInfo: null
            })
          }), 3e3);
          TW.current = WW, pW({
            onBoughtInfo: {
              text: WW,
              timeout: MW
            }
          })
        },
        UW = WW => {
          const {
            shopInfo: RW,
            userInputsPerItem: MW,
            redDotInfo: wW,
            autoSelectCategory: zR
          } = function(WW, RW, MW, wW, CW, zR) {
            if ((0, cM.S)(WW) || 0 === Object.keys(WW).length) return {
              shopInfo: {},
              userInputsPerItem: {},
              redDotInfo: kw.fromShopInfo({}),
              autoSelectCategory: null
            };
            const AW = kR.r[kR.u].adConfig.showRewardedAds,
              bR = {};
            let yR = null;
            for (const YW in WW) {
              const RW = WW[YW],
                MW = {};
              let wW = !1;
              for (const WW in RW.items) {
                const CW = RW.items[WW];
                (0, IM.m)(CW, AW) && (MW[WW] = CW, wW = !0)
              }
              wW && (bR[YW] = {
                ...RW,
                items: MW
              }, !0 === RW.autoSelectCategory && (yR = YW))
            }
            const NW = {},
              eW = (WW, RW, wW, AW) => {
                var bR, yR;
                const eW = aw(WW, RW),
                  BW = null !== (bR = MW[eW]) && void 0 !== bR ? bR : MW[RW];
                if (null !== (yR = AW.userInput) && void 0 !== yR && yR.type) switch (AW.userInput.type) {
                  case "dropdown": {
                    var tR;
                    const WW = !BW || !AW.userInput.dropdownOptions.some((WW => (0, IM.h)(WW) === BW)),
                      RW = AW.userInput.shouldResetSelectionOnOptionsChange && ("dropdown" !== (null === wW || void 0 === wW || null === (tR = wW.userInput) || void 0 === tR ? void 0 : tR.type) || JSON.stringify(wW.userInput.dropdownOptions) !== JSON.stringify(AW.userInput.dropdownOptions)),
                      MW = AW.userInput,
                      CW = !(0, cM.S)(MW.initialValue) && MW.dropdownOptions.some((WW => (0, IM.h)(WW) === MW.initialValue));
                    var TW;
                    return void(WW || RW ? CW ? NW[eW] = null !== (TW = AW.userInput.initialValue) && void 0 !== TW ? TW : null : AW.userInput.dropdownOptions.length > 0 ? NW[eW] = (0, IM.h)(AW.userInput.dropdownOptions[0]) : NW[eW] = null : NW[eW] = BW)
                  }
                  case "text":
                  case "number":
                    var gR, iR, YW;
                    return void((null === wW || void 0 === wW ? void 0 : wW.userInput) !== AW.userInput ? NW[eW] = null !== (gR = null !== (iR = AW.userInput.initialValue) && void 0 !== iR ? iR : BW) && void 0 !== gR ? gR : "" : NW[eW] = null !== (YW = null !== BW && void 0 !== BW ? BW : AW.userInput.initialValue) && void 0 !== YW ? YW : "");
                  case "color":
                    var JW, PW, IW;
                    return void((null === wW || void 0 === wW ? void 0 : wW.userInput) !== AW.userInput ? NW[eW] = null !== (JW = null !== (PW = AW.userInput.initialValue) && void 0 !== PW ? PW : BW) && void 0 !== JW ? JW : "#000000" : NW[eW] = null !== (IW = null !== BW && void 0 !== BW ? BW : AW.userInput.initialValue) && void 0 !== IW ? IW : "#000000");
                  case "player": {
                    const WW = (0, IM.l)(CW, zR, AW.userInput);
                    return void(BW && WW.includes(BW) ? NW[eW] = BW : NW[eW] = WW.length > 0 ? WW[0] : null)
                  }
                }
              };
            for (const YW in bR)
              for (const WW in bR[YW].items) {
                var BW;
                const MW = bR[YW].items[WW];
                eW(YW, WW, null === (BW = RW[YW]) || void 0 === BW ? void 0 : BW.items[WW], MW)
              }
            const tR = kw.fromShopInfo(bR);
            for (const YW in bR) {
              var TW;
              if (wW.doesCategoryExist(YW)) {
                (null === (TW = RW[YW]) || void 0 === TW ? void 0 : TW.redDot) === bR[YW].redDot && tR.updateCategoryRedDot(YW, wW.categoryHasRedDot(YW));
                for (const WW in bR[YW].items) {
                  var gR, iR;
                  wW.doesItemExist(YW, WW) && (null === (gR = RW[YW]) || void 0 === gR || null === (iR = gR.items[WW]) || void 0 === iR ? void 0 : iR.redDot) === bR[YW].items[WW].redDot && tR.updateItemRedDot(YW, WW, wW.itemHasRedDot(YW, WW))
                }
              }
            }
            return {
              shopInfo: bR,
              userInputsPerItem: NW,
              redDotInfo: tR,
              autoSelectCategory: yR
            }
          }(WW, NW.shopInfo, NW.userInputsPerItem, NW.redDotInfo, AW, bR), yR = {
            shopInfo: RW,
            userInputsPerItem: MW,
            redDotInfo: wW
          };
          if (null === zR || CW)
            if (RW[NW.selectedCategoryKey]) yR.selectedCategoryKey = NW.selectedCategoryKey;
            else {
              const WW = sM(RW);
              yR.selectedCategoryKey = WW.length > 0 ? WW[0] : null
            }
          else yR.selectedCategoryKey = zR;
          return 0 === Object.keys(RW).length && CW && QW.b.set({
            openEverythingMenuName: null
          }), yR
        },
        EW = (WW, RW) => {
          if (null === RW || !WW.shopInfo[RW]) return WW;
          let MW = WW.redDotInfo;
          return MW.categoryHasRedDot(RW) && (MW.updateCategoryRedDot(RW, !1), MW = MW.shallowCopy()), {
            ...WW,
            selectedCategoryKey: RW,
            redDotInfo: MW
          }
        },
        VW = WW => {
          tR((RW => EW(RW, WW)))
        };
      (0, tM.f)(jw.k, (() => {
        tR((WW => {
          const RW = (0, jw.l)(sM(WW.shopInfo), WW.selectedCategoryKey, (RW => (0, jw.g)(WW.shopInfo[RW].items)));
          return RW === WW.selectedCategoryKey ? WW : EW(WW, RW)
        }))
      })), (0, tM.f)("showShopFromServer", (WW => {
        let {
          toggle: RW,
          b_: MW
        } = WW;
        MW && VW(MW), 0 === Object.keys(NW.shopInfo).length || RW && CW ? QW.b.set({
          openEverythingMenuName: null
        }) : QW.b.set({
          openEverythingMenuName: ZR.t.SHOP
        })
      })), (0, tM.f)("closeShopOnDamaged", (() => {
        CW && QW.b.set({
          openEverythingMenuName: null
        })
      })), (0, tM.f)("overShopInfo", (WW => {
        hW(WW)
      })), (0, gR.f)("currencyAmounts", (WW => {
        var RW;
        const MW = oW.current;
        MW && (null === WW || void 0 === WW || null === (RW = WW[MW.currency]) || void 0 === RW ? void 0 : RW.amount) === MW.amountBefore ? pW({
          currencyAmounts: WW
        }) : (oW.current = null, pW({
          currencyAmounts: WW,
          awaitingPurchase: !1
        }))
      })), (0, gR.f)("shopInfo", (WW => {
        pW({
          ...UW(WW),
          awaitingPurchase: !1
        })
      }));
      const mR = (0, wW.useRef)({
        playerIds: AW,
        localPlayerId: bR
      });
      (0, wW.useEffect)((() => {
        mR.current.playerIds === AW && mR.current.localPlayerId === bR || (mR.current = {
          playerIds: AW,
          localPlayerId: bR
        }, tR((WW => {
          const RW = UW(WW.shopInfo);
          return {
            ...WW,
            ...RW
          }
        })))
      }), [AW, bR]);
      const xR = NW.selectedCategoryKey,
        KW = (WW, RW) => {
          var MW, wW;
          return (isNaN(RW) || (0, cM.S)(WW.currency) || dM(NW.currencyAmounts, WW.currency) && RW <= NW.currencyAmounts[WW.currency].amount) && (null === (MW = WW.canBuy) || void 0 === MW || MW) && !(null !== (wW = WW.hidden) && void 0 !== wW && wW)
        },
        uW = (WW, RW) => {
          var MW, wW, CW;
          const AW = aw(xR, WW),
            bR = NW.shopInfo[xR].items[WW],
            BW = NW.userInputsPerItem[AW],
            tR = (0, IM.e)(bR, BW),
            TW = KW(bR, tR),
            gR = bR.enchant,
            iR = gR ? (0, vR.pb)(null !== (MW = bR.customTitle) && void 0 !== MW ? MW : WW, {
              colour: vR.lb[gR.tier]
            }) : null !== (wW = bR.customTitle) && void 0 !== wW ? wW : WW,
            FW = RW => {
              const MW = null !== RW && void 0 !== RW ? RW : BW,
                wW = void 0 !== RW ? (0, IM.e)(bR, RW) : tR;
              KW(bR, wW) && null !== MW && ((WW, RW, MW) => {
                const wW = NW.selectedCategoryKey,
                  CW = aw(wW, WW),
                  zR = null !== MW && void 0 !== MW ? MW : NW.userInputsPerItem[CW],
                  AW = {
                    categoryKey: wW,
                    itemKey: WW,
                    userInput: zR
                  };
                if (RW.isRewardedAd) {
                  if (Date.now() - JW.current < 5e3) return;
                  (0, dW._)((() => {
                    var MW, wW, zR;
                    console.log("bought rewarded ad");
                    const bR = AW.categoryKey ? null === (MW = lW.current.shopInfo[AW.categoryKey]) || void 0 === MW ? void 0 : MW.items[WW] : null;
                    bR && bR.isRewardedAd ? (null === (wW = RW.userInput) || void 0 === wW ? void 0 : wW.type) === (null === bR || void 0 === bR || null === (zR = bR.userInput) || void 0 === zR ? void 0 : zR.type) ? (AW.userInput = lW.current.userInputsPerItem[CW], PW.gameBridge.send("buyShopItem", AW), RW.onBoughtMessage && hW(RW.onBoughtMessage)) : console.warn("Shop item input type changed, early out") : console.warn("Shop item no longer valid or a rewarded ad, early out")
                  })), JW.current = Date.now()
                } else {
                  PW.gameBridge.send("buyShopItem", AW), pW({
                    awaitingPurchase: !0
                  }), clearTimeout(IW.current), IW.current = setTimeout((() => {
                    oW.current = null, pW({
                      awaitingPurchase: !1
                    })
                  }), 1e3);
                  const WW = (0, IM.e)(RW, zR);
                  if (oW.current = null, !isNaN(WW) && dM(NW.currencyAmounts, RW.currency)) {
                    0 !== WW && (oW.current = {
                      currency: RW.currency,
                      amountBefore: NW.currencyAmounts[RW.currency].amount
                    });
                    const MW = {
                      ...NW.currencyAmounts
                    };
                    MW[RW.currency].amount -= WW, pW({
                      currencyAmounts: MW
                    })
                  }
                  RW.onBoughtMessage && hW(RW.onBoughtMessage)
                }
              })(WW, bR, RW);
              let CW = NW.redDotInfo;
              CW.itemHasRedDot(xR, WW) && (CW.updateItemRedDot(xR, WW, !1), CW = CW.shallowCopy()), pW({
                redDotInfo: CW
              })
            };
          return (0, eW.jsxs)("div", {
            className: zR()("ShopItem", {
              ShopItemNoInput: !bR.userInput,
              ShopItemNoInputCanBuy: !bR.userInput && TW,
              ShopItemNoInputSelected: bR.isSelected,
              ShopItemEnchant: !!gR
            }),
            "data-pad-focusable": !bR.userInput || void 0,
            "data-pad-unavailable": !bR.userInput && !TW || void 0,
            "data-pad-repeat": null !== (CW = (0, jw.c)(bR)) && void 0 !== CW ? CW : void 0,
            "data-pad-repeat-wait": NW.awaitingPurchase || void 0,
            onClick: () => {
              if (gR && cR.current) {
                if (fW !== AW) return void rR(AW);
                rR(null)
              }
              bR.userInput || FW()
            },
            onPointerDown: WW => {
              gR && (cR.current = (0, lM.t)(WW))
            },
            onPointerEnter: WW => {
              gR && !(0, lM.t)(WW) && rR(AW)
            },
            onPointerLeave: WW => {
              gR && !(0, lM.t)(WW) && rR((WW => WW === AW ? null : WW))
            },
            style: {
              zIndex: Object.keys(NW.shopInfo[xR].items).length - RW
            },
            children: [NW.redDotInfo.itemHasRedDot(xR, WW) && (0, eW.jsx)(yR.d, {
              top: "-6px",
              right: "-6px"
            }), bR.badge && (0, eW.jsx)("div", {
              className: "ShopBadgeContainer",
              children: (0, eW.jsx)("div", {
                className: zR()("ShopBadgeMain", bR.badge.type),
                children: (0, eW.jsx)(fM.c, {
                  text: bR.badge.text
                })
              })
            }), (0, eW.jsx)("div", {
              className: "ShopItemLeft",
              children: bR.image && (0, eW.jsx)(hM, {
                item: bR,
                minWidth: 5,
                minHeight: 4.8
              })
            }), (0, eW.jsxs)("div", {
              className: "ShopItemRight",
              children: [(0, eW.jsxs)("div", {
                className: "ShopItemHeader",
                children: [(0, eW.jsx)("div", {
                  className: "ShopItemHeaderTitle",
                  children: (0, eW.jsx)(fM.c, {
                    text: iR
                  })
                }), (0, eW.jsx)("div", {
                  className: "ShopItemHeaderDescription",
                  children: (0, eW.jsx)(fM.c, {
                    text: bR.description
                  })
                })]
              }), bR.userInput && (0, eW.jsxs)("div", {
                className: "ShopItemInputsContainer",
                onClick: WW => {
                  WW.stopPropagation()
                },
                children: [(0, eW.jsx)(VM, {
                  item: bR,
                  currInput: BW,
                  updateInput: RW => {
                    ((WW, RW, MW) => {
                      const wW = aw(WW, RW),
                        CW = {
                          ...NW.userInputsPerItem
                        };
                      CW[wW] = MW, pW({
                        userInputsPerItem: CW
                      })
                    })(xR, WW, RW)
                  },
                  onSubmit: WW => {
                    FW(WW)
                  }
                }), ("dropdown" !== bR.userInput.type || !bR.userInput.autoSubmit) && (0, eW.jsx)(YW.h, {
                  className: "ItemCostButton",
                  disabled: !TW && null !== BW,
                  onClick: () => {
                    FW()
                  },
                  children: (0, eW.jsx)(EM, {
                    item: bR,
                    cost: tR,
                    currencyAmounts: NW.currencyAmounts
                  })
                })]
              })]
            }), !bR.userInput && (0, eW.jsx)("div", {
              className: "ShopItemNoInputCost",
              children: (0, eW.jsx)(EM, {
                item: bR,
                cost: tR,
                currencyAmounts: NW.currencyAmounts
              })
            }), gR && fW === AW && (0, eW.jsxs)("div", {
              className: "ShopItemEnchantInfo SmallTextBold",
              children: [(0, eW.jsx)(fM.c, {
                text: iR
              }), (0, eW.jsx)("div", {
                className: "ShopItemEnchantInfoDescription",
                children: (0, eW.jsx)(fM.c, {
                  text: (0, oM.e)("", gR.enchantments, gR.enchantmentData)
                })
              })]
            })]
          }, AW)
        };
      return (0, eW.jsx)(YM.b, {
        className: "Menu ShopBody",
        show: CW,
        children: 0 !== Object.keys(NW.shopInfo).length && (0, eW.jsxs)(eW.Fragment, {
          children: [(0, eW.jsxs)("div", {
            className: "MenuSideBar",
            children: [(0, eW.jsx)(BW, {
              items: sM(NW.shopInfo).map((WW => {
                var RW;
                return {
                  id: WW,
                  title: null !== (RW = NW.shopInfo[WW].customTitle) && void 0 !== RW ? RW : WW,
                  redDot: NW.redDotInfo.categoryHasRedDot(WW)
                }
              })),
              selectedItemId: xR,
              onClick: VW,
              padStartsOnTab: (0, jw.d)(xR)
            }), (0, eW.jsx)("div", {
              className: "MenuSideBarFooter",
              children: NW.currencyAmounts && Object.keys(NW.currencyAmounts).map((WW => {
                var RW;
                const MW = NW.currencyAmounts[WW];
                return MW.hidden ? null : (0, eW.jsxs)("div", {
                  className: "ShopCurrencyDiv " + (XW ? "SmallText" : ""),
                  children: [(0, eW.jsxs)("div", {
                    className: "ShopCurrencyDetails",
                    children: [(0, eW.jsx)("div", {
                      className: "ShopCurrencyAmtIcon",
                      style: {
                        color: MW.iconColour
                      },
                      children: (0, eW.jsx)(KM, {
                        iconName: MW.icon
                      })
                    }), "\xa0", (0, PM.e)(MW.amount, 6)]
                  }), (null === (RW = MW.subtext) || void 0 === RW ? void 0 : RW.length) > 0 && (0, eW.jsx)("div", {
                    className: "ShopCurrencySubtext",
                    children: (0, eW.jsx)(fM.c, {
                      text: MW.subtext
                    })
                  })]
                }, WW)
              }))
            })]
          }), (0, eW.jsxs)("div", {
            className: "MenuBody ShopMenuBody",
            children: [(0, eW.jsx)("div", {
              className: zR()("ShopOnBoughtInfo", {
                ShopOnBoughtInfoShow: null !== NW.onBoughtInfo
              }),
              children: (0, eW.jsx)(fM.c, {
                text: TW.current
              })
            }), (0, eW.jsx)("div", {
              className: "ShopItemsWrapper",
              children: (0, eW.jsxs)("div", {
                className: "ShopItemsInner",
                children: [(null === (RW = NW.shopInfo[xR]) || void 0 === RW ? void 0 : RW.description) && (0, eW.jsx)("div", {
                  className: "ShopCategoryDescription",
                  children: (0, eW.jsx)(fM.c, {
                    text: NW.shopInfo[xR].description
                  })
                }), CW && (0, eW.jsx)("div", {
                  className: "ShopItems",
                  ref: iR,
                  "data-pad-initial-area": !0,
                  children: sM(null === (MW = NW.shopInfo[xR]) || void 0 === MW ? void 0 : MW.items).map(((WW, RW) => uW(WW, RW)))
                })]
              })
            })]
          })]
        })
      })
    }));

    function hM(WW) {
      let {
        item: RW,
        minWidth: MW,
        minHeight: wW
      } = WW;
      const {
        image: CW,
        schematicId: zR,
        imageColour: AW
      } = RW;
      if (zR) return (0, eW.jsx)("div", {
        className: "ShopSchematic",
        style: {
          width: `${MW}rem`,
          height: `${wW}rem`
        },
        children: (0, eW.jsx)(QM.e, {
          game: {
            schematicId: zR
          }
        })
      });
      var yR, NW;
      if ((0, FM.d)(CW)) return (0, eW.jsx)("div", {
        className: "ShopBlock",
        style: {
          minWidth: `${MW}rem`,
          height: "0",
          minHeight: `${wW}rem`
        },
        children: (0, eW.jsx)(FM.c, {
          itemName: CW,
          amount: null !== (yR = RW.amount) && void 0 !== yR ? yR : 0,
          amountFontSize: wW / 4 + "rem",
          enchantmentTier: null === (NW = RW.enchant) || void 0 === NW ? void 0 : NW.tier
        })
      });
      const BW = CW.slice(-4);
      return ".jpg" === BW || ".png" === BW ? (0, eW.jsx)(UM, {
        image: CW,
        minWidth: MW
      }) : (0, eW.jsx)(bR.e, {
        name: CW,
        className: "SelectedItemImage",
        style: {
          color: AW
        }
      })
    }

    function UM(WW) {
      let {
        image: RW,
        minWidth: MW
      } = WW;
      const {
        gameNameWithVariation: wW
      } = (0, GR.h)("connectedGame"), CW = RW.endsWith(".jpg");
      return (0, eW.jsx)("img", {
        className: zR()({
          ShopPixelImage: !CW
        }),
        style: {
          width: `${CW?1.6*MW:MW}rem`,
          height: "auto",
          fontSize: "1.25rem"
        },
        src: `/textures/games/${(0,vR.Pb)(wW)}/${RW}`,
        alt: RW,
        draggable: !1
      })
    }

    function EM(WW) {
      let {
        item: RW,
        cost: MW,
        currencyAmounts: wW
      } = WW;
      const CW = !isNaN(MW) && 0 !== MW && dM(wW, RW.currency);
      let zR = null;
      return RW.buyButtonText ? zR = RW.buyButtonText : CW ? (zR = MW, RW.sell && (zR = -1 * MW), zR = zR.toString()) : 0 === MW ? zR = "Free" : RW.isRewardedAd && (zR = "Watch ad"), (0, cM.S)(zR) || " " === zR ? null : (0, eW.jsxs)("div", {
        className: "BuyItemCostAndIcon",
        children: [CW && (0, eW.jsx)("div", {
          style: {
            color: wW[RW.currency].iconColour
          },
          className: "BuyItemIcon",
          children: (0, eW.jsx)(KM, {
            iconName: wW[RW.currency].icon
          })
        }), (0, eW.jsx)("div", {
          className: "BuyItemCost",
          children: (0, eW.jsx)(fM.c, {
            text: zR
          })
        })]
      })
    }

    function VM(WW) {
      let {
        item: RW,
        currInput: MW,
        updateInput: CW,
        onSubmit: zR
      } = WW;
      const {
        t: bR
      } = (0, AW.C)(), yR = (0, wW.useRef)(null);
      if ((0, wW.useEffect)((() => {
          const WW = yR.current;
          WW && WW.value !== MW && document.activeElement !== WW && (WW.value = null !== MW && void 0 !== MW ? MW : "")
        }), [MW]), !RW.userInput) return null;
      let NW = RW.userInput;
      if (JW.featureFlags.sanitizeShopInput && "text" === RW.userInput.type && (NW = {
          type: "number",
          placeholderText: "Numbers Only"
        }), "text" === NW.type || "number" === NW.type) {
        var BW, tR;
        console.assert(void 0 !== MW, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(RW)}`);
        const WW = "text" === NW.type && NW.wordCharsOnly;
        return (0, eW.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputTextWrapper",
          children: (0, eW.jsx)(lW.e, {
            className: "ShopItemUserInputText",
            placeholderText: bR(NW.placeholderText),
            defaultValue: MW,
            domRef: yR,
            onValueChange: (RW, MW) => {
              !0 === WW && (RW = (0, cwW.$)(RW)), yR.current.value = RW, CW(RW)
            },
            onEnter: zR,
            type: NW.type
          }, (null !== (BW = NW.initialValue) && void 0 !== BW ? BW : "") + (null !== (tR = NW.placeholderText) && void 0 !== tR ? tR : ""))
        })
      }
      if ("dropdown" === NW.type) {
        console.assert(void 0 !== MW, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(RW)}`);
        const WW = NW.autoSubmit;
        return (0, eW.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputDropdown",
          children: (0, eW.jsx)(AR.b, {
            options: NW.dropdownOptions.map((WW => (0, IM.h)(WW))),
            value: MW,
            onChange: RW => {
              let {
                value: MW
              } = RW;
              CW(MW), WW && zR(MW)
            }
          })
        })
      }
      return "player" === NW.type ? (0, eW.jsx)(mw, {
        userInput: NW,
        currInput: MW,
        updateInput: CW
      }) : "color" === NW.type ? (0, eW.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputColor",
        children: (0, eW.jsx)("input", {
          type: "color",
          value: MW,
          onChange: WW => {
            CW(WW.target.value)
          }
        })
      }) : null
    }

    function mw(WW) {
      let {
        userInput: RW,
        currInput: MW,
        updateInput: wW
      } = WW;
      const CW = (0, GR.h)("players"),
        zR = (0, GR.h)("hiddenPlayerNames"),
        AW = (0, IM.l)(CW.ids, CW.localId, RW);
      return (0, eW.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputDropdown",
        children: (0, eW.jsx)(AR.b, {
          options: AW.map((WW => {
            const {
              name: RW
            } = CW.byId[WW];
            return {
              value: WW,
              label: null === RW ? "" : (0, rw.f)(RW, zR)
            }
          })),
          value: MW,
          onChange: WW => {
            let {
              value: RW
            } = WW;
            wW(RW)
          }
        })
      })
    }

    function xw(WW) {
      let {
        ids: RW
      } = WW;
      return RW
    }

    function vw(WW) {
      let {
        localId: RW
      } = WW;
      return RW
    }

    function KM(WW) {
      let {
        iconName: RW
      } = WW;
      return PW.gameBridge.lookup("isItemName", RW) ? (0, eW.jsx)(FM.c, {
        itemName: RW,
        amount: 1
      }) : (0, eW.jsx)(bR.e, {
        name: RW,
        className: "2x"
      })
    }
    var uM = MW(1459);
    const OM = (0, MW(1216).g)((WW => WW.PadLobbyShortcuts)),
      nM = (0, wW.lazy)((() => Promise.resolve().then((() => MW(3654))).then((WW => ({
        default: WW.Lobbyleaderboard
      })))));

    function GM(WW) {
      let {
        show: RW
      } = WW;
      return RW ? (0, eW.jsxs)(eW.Fragment, {
        children: [(0, eW.jsx)(OM, {}), (0, eW.jsx)(wW.Suspense, {
          fallback: (0, eW.jsx)("div", {
            className: "CharacterCustomisationLoading",
            children: (0, eW.jsx)(FW.d, {})
          }),
          children: (0, eW.jsx)(nM, {})
        })]
      }) : null
    }
    var LM = MW(1392),
      HM = MW(2090),
      DM = MW(1306),
      qw = MW(1264),
      ZM = MW(2218),
      SM = MW(1723),
      Ww = MW(2228),
      Rw = MW(1875);
    const Mw = "storeRecentGiftRecipients",
      ww = new Map;

    function Cw() {
      try {
        const WW = kM.g.getItem(Mw);
        return Array.isArray(WW) ? WW.filter((WW => "string" === typeof(null === WW || void 0 === WW ? void 0 : WW.name) && WW.name.length > 0)).map((WW => ({
          name: WW.name,
          cosmetics: WW.cosmetics && "object" === typeof WW.cosmetics ? WW.cosmetics : null
        }))) : []
      } catch {
        return []
      }
    }

    function zC(WW) {
      var RW;
      const [MW, CW] = (0, wW.useState)(""), [zR, AW] = (0, wW.useState)("search"), [bR, yR] = (0, wW.useState)(null), [NW, eW] = (0, wW.useState)(null), BW = (0, wW.useRef)(null), tR = (0, wW.useRef)(null);
      (0, wW.useEffect)((() => () => {
        BW.current && clearTimeout(BW.current)
      }), []);
      const TW = null !== (RW = null === bR || void 0 === bR ? void 0 : bR.name) && void 0 !== RW ? RW : null;

      function gR() {
        BW.current && (clearTimeout(BW.current), BW.current = null)
      }(0, wW.useEffect)((() => {
        if (null === TW) return;
        const RW = TW.toLowerCase();
        if (RW === WW.getPlayerName().toLowerCase()) return void eW({
          name: TW,
          result: {
            giftRecipientFound: !1,
            giftRecipientError: "store:giftRecipientIsYou"
          }
        });
        const MW = ww.get(RW);
        if (MW) return void eW({
          name: TW,
          result: MW
        });
        let wW = !1;
        return async function(WW, RW) {
          try {
            const MW = await (0, aR.postJsonWithMetricsCookiesAndJsonResponse)(`${sW.clientSideServerUrls.indexUrl}/index/xsolla/gift-recipient`, {
              giftRecipientName: RW
            }, {
              retries: 1
            }, WW.getMetricsCookies());
            if ("boolean" !== typeof(null === MW || void 0 === MW ? void 0 : MW.giftRecipientFound)) throw new Error(`Unexpected gift recipient lookup response: ${JSON.stringify(MW)}`);
            return MW
          } catch (MW) {
            return console.error("Failed to look up gift recipient:", MW), {
              giftRecipientFound: !1,
              giftRecipientError: "store:giftRecipientLookupFailed"
            }
          }
        }(WW, TW).catch((WW => (console.error("Gift recipient lookup failed:", WW), {
          giftRecipientFound: !1,
          giftRecipientError: "store:giftRecipientLookupFailed"
        }))).then((WW => {
          !0 !== WW.giftRecipientFound && "store:giftRecipientLookupFailed" === WW.giftRecipientError || ww.set(RW, WW), wW || eW({
            name: TW,
            result: WW
          })
        })), () => {
          wW = !0
        }
      }), [TW, WW]);
      const iR = (0, wW.useMemo)((() => {
        const WW = MW.trim();
        if (!WW) return {
          status: "none"
        };
        if (!bR || bR.name !== WW || (null === NW || void 0 === NW ? void 0 : NW.name) !== bR.name) return {
          status: "pending",
          name: WW
        };
        const RW = NW.result;
        return !1 === RW.giftRecipientFound ? {
          status: "error",
          name: bR.name,
          error: RW.giftRecipientError
        } : {
          status: "found",
          name: RW.giftRecipientName,
          ownedPacks: RW.giftRecipientOwnedPacks,
          superRankDaysLeft: RW.giftRecipientSuperRankDaysLeft
        }
      }), [MW, bR, NW]);
      (0, wW.useEffect)((() => {
        "found" === iR.status && "typed" === (null === bR || void 0 === bR ? void 0 : bR.source) && tR.current !== iR.name && (tR.current = iR.name, (0, LW.c)({
          id: "store.gift_recipient",
          value: "typed"
        }))
      }), [iR, bR]);
      const YW = (null === NW || void 0 === NW ? void 0 : NW.name) === (null === bR || void 0 === bR ? void 0 : bR.name) ? null === NW || void 0 === NW ? void 0 : NW.result : null,
        JW = !0 === (null === YW || void 0 === YW ? void 0 : YW.giftRecipientFound) ? YW.giftRecipientCosmetics : null;
      return {
        query: MW,
        via: zR,
        recipient: iR,
        recipientCosmetics: JW,
        type: function(WW) {
          CW(WW), AW("search"), gR();
          const RW = WW.trim();
          RW ? BW.current = setTimeout((() => {
            yR({
              name: RW,
              source: "typed"
            })
          }), 400) : yR(null)
        },
        choose: function(WW, RW) {
          gR(), CW(WW), AW("typed" === RW ? "search" : "prefilled" === RW ? "prefilled" : "suggestion"), yR({
            name: WW,
            source: RW
          }), "typed" !== RW && "prefilled" !== RW && (0, LW.c)({
            id: "store.gift_recipient",
            value: RW
          })
        },
        clear: function() {
          gR(), CW(""), AW("search"), yR(null)
        },
        recordGift: function(WW, RW) {
          ! function(WW) {
            ww.delete(WW.toLowerCase())
          }(WW), eW((MW => {
            if (!MW || MW.name.toLowerCase() !== WW.toLowerCase() || !0 !== MW.result.giftRecipientFound || "superRank" === RW) return MW;
            const wW = MW.result.giftRecipientOwnedPacks;
            return {
              ...MW,
              result: {
                ...MW.result,
                giftRecipientOwnedPacks: wW.includes(RW) ? wW : [...wW, RW]
              }
            }
          }))
        }
      }
    }
    var Aw = MW(1869),
      bC = MW(540),
      yC = MW(1464),
      Nw = MW(1903),
      ew = MW(2011);

    function Bw(WW) {
      let {
        cosmetics: RW
      } = WW;
      return (0, eW.jsx)("span", {
        className: "StoreRecipientAvatar",
        children: (0, eW.jsx)(Nw.b, {
          cosmetics: RW
        })
      })
    }

    function tC(WW, RW) {
      var MW, wW;
      const CW = null !== (MW = WW.friend) && void 0 !== MW ? MW : {
        isError: !1,
        name: WW.name,
        ranks: [],
        cosmetics: null !== (wW = WW.cosmetics) && void 0 !== wW ? wW : {},
        nameColour: bC.e,
        location: {
          status: "noGamePlayed"
        }
      };
      return RW ? {
        ...CW,
        cosmetics: RW
      } : CW
    }

    function Tw(WW) {
      let {
        recipient: RW
      } = WW;
      return "pending" === RW.status ? (0, eW.jsx)("span", {
        className: "StoreRecipientStatus",
        children: (0, eW.jsx)(FW.d, {})
      }) : "found" === RW.status ? (0, eW.jsx)(bR.e, {
        name: "check",
        className: "StoreRecipientStatus StoreRecipientStatusFound"
      }) : null
    }

    function gC(WW) {
      var RW;
      let {
        selfName: MW,
        giftRecipient: CW,
        suggestionsVersion: yR,
        pulseSignal: NW,
        disabled: BW
      } = WW;
      const {
        t: tR
      } = (0, AW.C)(), TW = (0, yC.g)(), gR = (0, wW.useRef)(null), iR = (0, wW.useRef)(null), {
        query: PW,
        via: IW,
        recipient: oW,
        recipientCosmetics: FW
      } = CW, fW = (0, Rw.o)(PW), QW = (0, wW.useMemo)((() => {
        const WW = JW.featureFlags.useSocialFeatures ? TW.friends.filter((WW => !WW.isError)) : [];
        return (0, Rw.n)({
          onlineFriends: (0, yC.d)(WW),
          recentRecipients: Cw(),
          friends: WW,
          selfName: MW,
          max: 8
        })
      }), [TW.friends, MW, yR]), rR = PW.trim().toLowerCase(), cR = "search" !== IW && rR ? QW.find((WW => WW.name.toLowerCase() === rR)) : void 0, XW = cR && "prefilled" === IW ? [cR, ...QW.filter((WW => WW !== cR))] : QW, jR = "" !== rR && !cR, kR = jR ? PW : "", aR = XW.length > 0;

      function sW() {
        "self" !== fW && (0, LW.c)({
          id: "store.mode",
          value: "self"
        }), CW.clear()
      }

      function dW(WW) {
        var RW, MW;
        if (BW) return;
        if (" " === WW.key || "Enter" === WW.key) return WW.preventDefault(), void WW.currentTarget.click();
        const wW = Array.from(null !== (RW = null === (MW = iR.current) || void 0 === MW ? void 0 : MW.querySelectorAll("[role=radio]")) && void 0 !== RW ? RW : []),
          CW = wW.indexOf(WW.currentTarget);
        let zR;
        "ArrowRight" === WW.key || "ArrowDown" === WW.key ? zR = wW[(CW + 1) % wW.length] : "ArrowLeft" === WW.key || "ArrowUp" === WW.key ? zR = wW[(CW - 1 + wW.length) % wW.length] : "Home" === WW.key ? zR = wW[0] : "End" === WW.key && (zR = wW[wW.length - 1]), zR && (WW.preventDefault(), zR.focus(), zR.click())
      }(0, wW.useEffect)((() => {
        gR.current && gR.current.value !== kR && (gR.current.value = kR)
      }), [kR]), (0, wW.useEffect)((() => {
        gR.current && (gR.current.disabled = BW)
      }), [BW, NW]), (0, wW.useEffect)((() => {
        var WW;
        NW > 0 && (null === (WW = gR.current) || void 0 === WW || WW.focus())
      }), [NW]);
      const pW = "self" === fW,
        hW = null !== (RW = null === cR || void 0 === cR ? void 0 : cR.name) && void 0 !== RW ? RW : null,
        EW = "error" === oW.status ? oW.error : null,
        VW = "store:giftRecipientLookupFailed" === EW;
      return (0, eW.jsxs)("div", {
        className: zR()("StoreRecipientStrip", {
          StoreRecipientStripDisabled: BW,
          StoreRecipientStripNoChips: !aR
        }),
        children: [(0, eW.jsx)("span", {
          className: "StoreRecipientLabel",
          "aria-hidden": !0,
          children: tR("store:buyingFor")
        }), (0, eW.jsxs)("div", {
          ref: iR,
          className: "StoreRecipientRadios",
          role: "radiogroup",
          "aria-label": tR("store:whoIsItFor"),
          children: [(0, eW.jsxs)("div", {
            role: "radio",
            "data-pad-focusable": !0,
            "aria-checked": pW,
            tabIndex: BW || !pW && null !== hW ? -1 : 0,
            className: zR()("StoreRecipientMe", {
              StoreRecipientChecked: pW
            }),
            onClick: () => {
              BW || sW()
            },
            onKeyDown: dW,
            children: [(0, eW.jsx)(bR.e, {
              name: "user"
            }), " ", tR("store:me")]
          }), aR && (0, eW.jsx)("div", {
            className: "StoreRecipientChips",
            children: XW.map((WW => {
              const RW = WW === cR;
              return (0, eW.jsx)("div", {
                role: "radio",
                "data-pad-focusable": !0,
                "aria-checked": RW,
                tabIndex: !BW && RW ? 0 : -1,
                title: WW.name,
                className: zR()("StoreRecipientChip", {
                  StoreRecipientChecked: RW
                }),
                onClick: () => {
                  BW || function(WW) {
                    "gift" !== fW && (0, LW.c)({
                      id: "store.mode",
                      value: "gift"
                    }), CW.choose(WW.name, WW.kind)
                  }(WW)
                },
                onKeyDown: dW,
                children: (0, eW.jsx)(ew.e, {
                  playerSocialPreview: tC(WW, RW ? FW : null),
                  opensProfileCard: !1,
                  isFriend: null !== WW.friend,
                  hideFriendBadge: !0,
                  showLocation: null !== WW.friend,
                  status: null === WW.friend ? null : void 0,
                  trailing: RW ? (0, eW.jsx)(Tw, {
                    recipient: oW
                  }) : void 0
                })
              }, WW.name)
            }))
          })]
        }), (0, eW.jsxs)("div", {
          className: zR()("StoreRecipientSearch", {
            StoreRecipientChecked: jR,
            StoreRecipientSearchPulse: NW > 0 && !jR,
            StoreRecipientSearchError: null !== EW && !VW
          }),
          onClick: () => {
            var WW;
            null === (WW = gR.current) || void 0 === WW || WW.focus()
          },
          children: [jR && "found" === oW.status && FW && (0, eW.jsx)(Bw, {
            cosmetics: FW
          }), !(jR && "found" === oW.status && FW) && (0, eW.jsx)(bR.e, {
            name: "magnifying-glass",
            className: "StoreRecipientSearchIcon"
          }), (0, eW.jsx)(lW.e, {
            className: "StoreRecipientSearchInput",
            domRef: gR,
            placeholderText: tR("store:searchName"),
            defaultValue: kR,
            maxLength: UW.h,
            onValueChange: function(WW) {
              "gift" !== fW && WW.trim() && (0, LW.c)({
                id: "store.mode",
                value: "gift"
              }), CW.type(WW)
            },
            onEnter: () => {
              var WW;
              const RW = null === (WW = gR.current) || void 0 === WW ? void 0 : WW.value.trim();
              RW && CW.choose(RW, "typed")
            },
            blurOnEnter: !0
          }), jR && (0, eW.jsx)(Tw, {
            recipient: oW
          }), jR && (0, eW.jsx)("div", {
            ...(0, YW.V)({
              disabled: BW
            }),
            "aria-label": tR("store:clearRecipient"),
            title: tR("store:clearRecipient"),
            className: "StoreRecipientClear",
            onClick: WW => {
              WW.stopPropagation(), BW || sW()
            },
            children: (0, eW.jsx)(bR.e, {
              name: "xmark"
            })
          })]
        }, NW), EW && (0, eW.jsx)("div", {
          className: zR()("StoreRecipientPopover", {
            StoreRecipientPopoverSoft: VW
          }),
          role: "status",
          children: tR(EW)
        })]
      })
    }
    var iC = MW(1828),
      Yw = MW(2249),
      Jw = MW(1848);
    const Pw = [bC.r.yellow, bC.r.green, bC.r.aqua, bC.r.blue, bC.r.purple, bC.r.red];

    function Iw(WW) {
      return "needsRecipient" === WW || "lookingUp" === WW || "gift" === WW || "recipientOwns" === WW
    }

    function ow(WW) {
      const {
        onKeyDown: RW,
        ...MW
      } = (0, YW.V)();
      return {
        ...MW,
        "aria-label": WW,
        onKeyDown: WW => {
          WW.target === WW.currentTarget && (null === RW || void 0 === RW || RW(WW))
        }
      }
    }

    function lw(WW) {
      let {
        text: RW
      } = WW;
      return (0, eW.jsx)("span", {
        className: "StoreRainbowText",
        children: Array.from(RW).map(((WW, RW) => (0, eW.jsx)("span", {
          style: {
            color: Pw[RW % Pw.length]
          },
          children: WW
        }, RW)))
      })
    }

    function Fw(WW) {
      let {
        state: RW,
        item: MW,
        price: wW,
        busy: CW,
        highlight: yR = !1,
        onAct: NW,
        onNeedRecipient: BW,
        onLogin: tR = SM.e
      } = WW;
      const {
        t: TW
      } = (0, AW.C)(), gR = "superRank" === MW ? VW.j.product.days : null, iR = WW => null === gR ? TW(WW ? "general:gift" : "general:buy") : TW(WW ? "store:giftDays" : "store:buyDays", {
        days: gR
      }), JW = (WW, RW) => (0, eW.jsxs)(eW.Fragment, {
        children: [RW && (0, eW.jsx)("span", {
          className: "StoreCtaIcon",
          children: RW
        }), (0, eW.jsx)("span", {
          className: "StoreCtaLabel",
          title: WW,
          children: WW
        }), (0, eW.jsxs)("span", {
          className: "StoreCtaPrice",
          children: ["\xb7", (0, eW.jsx)(Jw.b, {
            amount: wW
          })]
        })]
      });
      let PW;
      switch (RW) {
        case "login":
          PW = (0, eW.jsx)(YW.m, {
            className: "StoreCtaButton",
            onClick: tR,
            children: JW(TW("store:logIn"))
          });
          break;
        case "owned":
          PW = (0, eW.jsx)(YW.j, {
            className: "StoreCtaButton",
            onClick: () => {
              QW.b.set({
                openEverythingMenuName: ZR.t.CUSTOMISATION
              })
            },
            children: (0, eW.jsxs)("span", {
              className: "StoreCtaLabel",
              children: [(0, eW.jsx)(bR.e, {
                name: "shirt"
              }), " ", TW("store:equip")]
            })
          });
          break;
        case "recipientOwns":
          PW = (0, eW.jsx)(YW.m, {
            className: "StoreCtaButton",
            disabled: !0,
            children: (0, eW.jsx)("span", {
              className: "StoreCtaLabel",
              children: TW("store:alreadyOwns")
            })
          });
          break;
        case "needsRecipient":
        case "lookingUp":
        case "gift":
          PW = (0, eW.jsx)(YW.m, {
            className: "StoreCtaButton",
            disabled: "needsRecipient" === RW || null === wW,
            loading: "lookingUp" === RW || CW,
            onClick: NW,
            analyticsClick: {
              id: "store.gift",
              value: MW
            },
            children: JW(iR(!0), Rw.e)
          });
          break;
        case "buy":
        case "recharge":
          PW = (0, eW.jsx)(YW.m, {
            className: "StoreCtaButton",
            loading: CW,
            disabled: null === wW,
            onClick: NW,
            analyticsClick: {
              id: "store.buy",
              value: MW
            },
            children: JW(iR(!1))
          })
      }
      return (0, eW.jsx)("div", {
        className: zR()("StoreCta", {
          StoreCtaHighlight: yR
        }),
        onClick: WW => {
          WW.stopPropagation(), "needsRecipient" === RW && BW()
        },
        children: PW
      })
    }

    function fw() {
      const {
        t: WW
      } = (0, AW.C)();
      return (0, eW.jsxs)("ul", {
        className: "StorePerks",
        children: [(0, eW.jsxs)("li", {
          children: [(0, eW.jsx)(bR.e, {
            name: "check"
          }), (0, eW.jsx)(lw, {
            text: WW("store:colourfulNames")
          })]
        }), (0, eW.jsxs)("li", {
          children: [(0, eW.jsx)(bR.e, {
            name: "check"
          }), WW("store:perkCapes")]
        }), (0, eW.jsxs)("li", {
          children: [(0, eW.jsx)(bR.e, {
            name: "check"
          }), WW("store:perkNoAdverts")]
        }), (0, eW.jsxs)("li", {
          children: [(0, eW.jsx)(bR.e, {
            name: "check"
          }), WW("store:perkFriends", {
            count: (0, nW.e)(["super"])
          })]
        })]
      })
    }

    function Qw(WW) {
      let {
        daysLeft: RW,
        totalDays: MW,
        urgent: wW
      } = WW;
      const {
        t: CW
      } = (0, AW.C)(), bR = MW > 0 ? Math.min(1, Math.max(.03, RW / MW)) : 1;
      return (0, eW.jsxs)("div", {
        className: zR()("StoreSuperRankMeterArea", {
          StoreSuperRankMeterUrgent: wW
        }),
        children: [(0, eW.jsx)("span", {
          className: "StoreSuperRankDaysLeft",
          children: 1 === RW ? CW("store:oneDayLeft") : CW("store:daysLeft", {
            days: RW
          })
        }), (0, eW.jsx)("div", {
          className: "StoreSuperRankMeter",
          children: (0, eW.jsx)("i", {
            style: {
              width: 100 * bR + "%"
            }
          })
        })]
      })
    }

    function rC(WW) {
      let {
        state: RW,
        urgent: MW,
        daysLeft: wW,
        totalDays: CW,
        recipientSuperRankDaysLeft: yR,
        busy: NW,
        highlight: BW,
        onOpen: tR,
        onAct: TW,
        onNeedRecipient: gR,
        onLogin: iR
      } = WW;
      const {
        t: YW
      } = (0, AW.C)(), JW = Iw(RW), {
        days: PW
      } = VW.j.product, IW = YW("store:recipientHasSuperRank", {
        days: yR,
        giftDays: PW
      });
      return (0, eW.jsxs)("div", {
        className: zR()("StoreTile StoreSuperRankTile", {
          StoreTileGift: JW,
          StoreSuperRankTileUrgent: "recharge" === RW && MW,
          StoreSuperRankTileWithChip: JW && "gift" === RW && null !== yR,
          StoreSuperRankTileGiftReady: "gift" === RW
        }),
        ...ow(YW("homePage:superRank")),
        "data-store-item": "superRank",
        onClick: tR,
        children: [(0, eW.jsx)("div", {
          className: "StoreSuperRankArt",
          style: {
            backgroundImage: "url(/textures/charSkins/previews/cape_super_preview.png)"
          }
        }), JW && (0, eW.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, eW.jsxs)("div", {
          className: "StoreTileContent",
          children: [JW && "gift" === RW && null !== yR && (0, eW.jsx)("span", {
            className: "StoreChip StoreChipGift",
            title: IW,
            children: IW
          }), (0, eW.jsxs)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: [(0, eW.jsx)(bR.e, {
              name: "bolt"
            }), " ", YW("homePage:superRank")]
          }), JW && (0, eW.jsx)("div", {
            className: "StoreTilePitch",
            children: YW("store:giftPitch", {
              days: PW
            })
          }), "recharge" === RW && (0, eW.jsx)(Qw, {
            daysLeft: wW,
            totalDays: CW,
            urgent: MW
          }), (0, eW.jsx)(fw, {}), (0, eW.jsxs)("div", {
            className: "StoreTileActions",
            children: [(0, eW.jsx)(Fw, {
              state: RW,
              item: "superRank",
              price: VW.j.price,
              busy: NW,
              highlight: BW,
              onAct: TW,
              onNeedRecipient: gR,
              onLogin: iR
            }), "needsRecipient" === RW && (0, eW.jsx)("span", {
              className: "StoreTileNote StoreTileNoteGift",
              children: YW("store:pickRecipientFirst")
            }), "recharge" === RW && MW && (0, eW.jsx)("span", {
              className: "StoreTileNote StoreSuperRankEnding",
              children: 1 === wW ? YW("store:endsInOneDay") : YW("store:endsInDays", {
                days: wW
              })
            })]
          })]
        })]
      })
    }
    const cC = {
      standard: "StorePackTileStandard",
      enhanced: "StorePackTileEnhanced",
      premium: "StorePackTilePremium"
    };

    function Xw(WW) {
      var RW;
      let {
        pack: MW,
        state: wW,
        busy: CW,
        onOpen: yR,
        onAct: NW,
        onNeedRecipient: BW,
        onLogin: tR
      } = WW;
      const {
        t: TW
      } = (0, AW.C)(), gR = LM.b[MW], iR = ZM.k[MW], YW = Object.entries(Yw.d).filter((WW => {
        let [, RW] = WW;
        return RW.cosmeticPack === MW
      })), JW = Iw(wW), PW = null !== (RW = gR.displayName) && void 0 !== RW ? RW : MW;
      return (0, eW.jsxs)("div", {
        className: zR()("StoreTile StorePackTile", gR.tier && cC[gR.tier], {
          StorePackTileOwned: "owned" === wW,
          StorePackTileRecipientOwns: "recipientOwns" === wW,
          StoreTileGift: JW
        }),
        ...ow(PW),
        "data-store-item": MW,
        onClick: yR,
        children: [iR && (0, eW.jsx)(iR, {}), (0, eW.jsx)("div", {
          className: "StorePackCharacters",
          children: YW.map((WW => {
            let [RW] = WW;
            return (0, eW.jsx)("div", {
              className: "StorePackCharacter",
              style: {
                backgroundImage: `url(/textures/charSkins/previews/character_${RW}_preview.png)`
              }
            }, RW)
          }))
        }), (0, eW.jsx)("div", {
          className: "StoreTileScrim"
        }), JW && (0, eW.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, eW.jsxs)("div", {
          className: "StoreTileContent",
          children: [(0, eW.jsx)("div", {
            className: "StoreTileTitle",
            children: PW
          }), (0, eW.jsxs)("div", {
            className: "StoreTileMeta",
            children: [TW("store:itemCount", {
              count: (0, iC.m)(MW)
            }), "owned" === wW && (0, eW.jsxs)("span", {
              className: "StoreTileOwned",
              children: [" \xb7 ", (0, eW.jsx)(bR.e, {
                name: "check"
              }), " ", TW("general:owned")]
            })]
          }), (0, eW.jsx)(Fw, {
            state: wW,
            item: MW,
            price: (0, VW.c)(MW),
            busy: CW,
            onAct: NW,
            onNeedRecipient: BW,
            onLogin: tR
          })]
        })]
      })
    }
    var jC = MW(2257);

    function kC(WW) {
      let {
        layout: RW,
        bundleGift: MW,
        superRankDaysLeft: wW,
        superRankTotalDays: CW,
        busy: zR,
        highlightItem: AW,
        onOpen: bR,
        onAct: yR,
        onNeedRecipient: NW,
        onLogin: BW
      } = WW;
      return (0, eW.jsxs)(eW.Fragment, {
        children: [(0, eW.jsx)(jC.e, {
          className: "StoreSuperGems",
          gift: MW
        }), (0, eW.jsx)(rC, {
          state: RW.superRank.state,
          urgent: RW.superRank.urgent,
          daysLeft: wW,
          totalDays: CW,
          recipientSuperRankDaysLeft: RW.recipientSuperRankDaysLeft,
          busy: zR,
          highlight: "superRank" === AW,
          onOpen: () => {
            bR("superRank")
          },
          onAct: () => {
            yR("superRank")
          },
          onNeedRecipient: NW,
          onLogin: () => {
            BW("superRank")
          }
        }), (0, eW.jsx)("div", {
          className: "StorePackGrid",
          children: RW.packs.map((WW => (0, eW.jsx)(Xw, {
            pack: WW.pack,
            state: WW.state,
            busy: zR,
            onOpen: () => {
              bR(WW.pack)
            },
            onAct: () => {
              yR(WW.pack)
            },
            onNeedRecipient: NW,
            onLogin: () => {
              BW(WW.pack)
            }
          }, WW.pack)))
        })]
      })
    }
    var aC = MW(2678),
      sw = MW(2266);

    function dw(WW) {
      let {
        onBack: RW,
        cta: MW,
        recipient: CW,
        afterCta: zR
      } = WW;
      const {
        t: yR
      } = (0, AW.C)(), [NW, BW] = (0, wW.useState)(!0), tR = (0, wW.useRef)(null);
      return (0, wW.useEffect)((() => {
        const WW = tR.current;
        let RW;

        function MW() {
          BW(!1)
        }

        function wW() {
          clearTimeout(RW), RW = setTimeout((() => {
            WW.play().catch((WW => {
              (0, aC.c)("Failed to replay Super Rank video", WW)
            }))
          }), 3e3)
        }
        return WW.addEventListener("loadeddata", MW), WW.addEventListener("ended", wW), () => {
          clearTimeout(RW), WW.removeEventListener("loadeddata", MW), WW.removeEventListener("ended", wW)
        }
      }), []), (0, eW.jsxs)("div", {
        className: "StoreSuperRankDetail",
        children: [(0, eW.jsxs)("div", {
          className: "StoreDetailHeader",
          children: [(0, eW.jsx)(YW.d, {
            className: "StoreDetailBackButton",
            onClick: RW,
            padBack: !0,
            children: yR("general:back")
          }), (0, eW.jsxs)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: [(0, eW.jsx)(bR.e, {
              name: "bolt"
            }), " ", yR("homePage:superRank")]
          }), CW]
        }), (0, eW.jsxs)("div", {
          className: "StoreSuperRankDetailBody",
          children: [(0, eW.jsxs)("div", {
            className: "StoreSuperRankVideo",
            children: [NW && (0, eW.jsx)(FW.d, {}), (0, eW.jsx)("video", {
              ref: tR,
              autoPlay: !0,
              muted: !0,
              playsInline: !0,
              controls: !0,
              children: (0, eW.jsx)("source", {
                src: `${sW.clientSideServerUrls.staticUrl}/videos/SuperRankPreview.mp4`,
                type: "video/mp4"
              })
            })]
          }), (0, eW.jsxs)("div", {
            className: "StoreSuperRankDetailSide",
            children: [(0, eW.jsx)("div", {
              className: "StoreSuperRankDetailTable",
              children: (0, eW.jsx)(sw.d, {})
            }), (0, eW.jsxs)("div", {
              className: "StoreTileActions",
              children: [MW, zR]
            })]
          })]
        })]
      })
    }

    function pw(WW) {
      let {
        state: RW,
        mode: MW,
        giftName: wW,
        busy: CW,
        highlight: zR,
        purchaseError: bR,
        onBack: yR,
        onChooseRecipient: NW,
        onAct: BW,
        onLogin: tR
      } = WW;
      const {
        t: TW
      } = (0, AW.C)();
      return (0, eW.jsx)(dw, {
        onBack: yR,
        recipient: "gift" === MW && (0, eW.jsxs)(eW.Fragment, {
          children: [wW && (0, eW.jsxs)("span", {
            className: "StoreDetailRecipient",
            title: TW("store:giftFor", {
              name: wW
            }),
            children: [Rw.e, " ", TW("store:giftFor", {
              name: wW
            })]
          }), !wW && (0, eW.jsxs)("div", {
            ...(0, YW.V)(),
            className: "StoreDetailRecipient StoreDetailRecipientChoose",
            onClick: NW,
            children: [Rw.e, " ", TW("store:chooseRecipient")]
          })]
        }),
        cta: (0, eW.jsx)(Fw, {
          state: RW,
          item: "superRank",
          price: VW.j.price,
          busy: CW,
          highlight: zR,
          onAct: BW,
          onNeedRecipient: NW,
          onLogin: tR
        }),
        afterCta: (0, eW.jsx)(eW.Fragment, {
          children: bR && (0, eW.jsx)("span", {
            className: "StoreTileNote StoreTileNoteError",
            children: TW(bR)
          })
        })
      })
    }
    const hw = {
      kind: "board"
    };
    let Uw = !1;

    function Ew(WW) {
      return "superRank" === WW.kind ? "superRank" : "pack" === WW.kind ? WW.pack : null
    }

    function Vw(WW) {
      return "found" === WW.status || "error" === WW.status && "store:giftRecipientLookupFailed" === WW.error ? WW.name : null
    }
    const mC = (0, wW.memo)((function(WW) {
      var RW, MW;
      let {
        show: CW
      } = WW;
      const {
        t: bR
      } = (0, AW.C)(), {
        userContext: yR
      } = (0, TW.c)(), NW = zC(yR), [BW, tR] = (0, iR.b)(), {
        page: gR,
        urlMode: YW,
        goTo: JW
      } = (0, Aw.d)(), PW = Ew(gR), [IW, oW] = (0, wW.useState)(0), [lW, fW] = (0, wW.useState)(null), [QW, rR] = (0, wW.useState)(null), [cR, XW] = (0, wW.useState)(null), [jR, kR] = (0, wW.useState)(null), sW = (0, wW.useRef)(null), dW = (0, wW.useRef)(null), pW = (0, wW.useRef)(!1), hW = (0, KW.w)(), UW = (0, wW.useRef)(0), EW = (0, wW.useRef)(!1);

      function mR() {
        oW((WW => WW + 1))
      }(0, wW.useEffect)((() => {
        if (CW) {
          if (Uw = !0, hW && hW.seq !== UW.current) {
            UW.current = hW.seq;
            const WW = (0, KW.e)(hW);
            YW || JW(WW), kR(hW.highlight ? Ew(WW) : null), rR(null), "gift" === hW.mode && hW.giftRecipientName ? NW.choose(hW.giftRecipientName, "prefilled") : "current" !== hW.mode && NW.clear(), "gift" !== hW.mode || hW.giftRecipientName || mR(), (0, LW.c)({
              id: "store.open",
              value: hW.source
            })
          } else EW.current || (0, LW.c)({
            id: "store.open",
            value: "menuTab"
          });
          EW.current = !0
        } else EW.current = !1
      }), [CW, hW]), (0, wW.useEffect)((() => {
        if (!jR) return;
        const WW = setTimeout((() => {
          kR(null)
        }), 4e3);
        return () => {
          clearTimeout(WW)
        }
      }), [jR]), (0, wW.useEffect)((() => {
        const WW = sW.current;
        var RW;
        if (CW && WW)
          if (PW) dW.current = PW, null === (RW = WW.querySelector(".StoreDetailBackButton, .CosmeticShopDetailBackButton")) || void 0 === RW || RW.focus();
          else if (dW.current) {
          var MW;
          null === (MW = WW.querySelector(`[data-store-item="${dW.current}"]`)) || void 0 === MW || MW.focus(), dW.current = null
        }
      }), [PW, CW]), (0, wW.useEffect)((() => {
        rR(null)
      }), [NW.query]), (0, wW.useEffect)((() => {
        if (!cR) return;
        const WW = setTimeout((() => {
          XW(null)
        }), 8e3);
        return () => {
          clearTimeout(WW)
        }
      }), [cR]);
      const xR = yR.superRankInfo,
        OW = xR ? (0, vR.jc)(xR) : 0,
        nW = (0, Rw.k)(OW),
        GW = OW > 0,
        HW = yR.isLoggedIn(),
        DW = yR.getOwnedCosmeticPacks(),
        qR = (0, Rw.o)(NW.query),
        ZW = (0, Rw.h)({
          mode: qR,
          loggedIn: HW,
          hasSuperRank: GW,
          superRankDaysLeft: nW,
          ownedPacks: DW,
          packs: LM.g,
          recipient: NW.recipient
        });
      (0, wW.useEffect)((() => {
        if (!HW || !CW) return;
        const WW = (0, KW.u)();
        var RW;
        WW && ("superRank" === (RW = WW.item) || LM.g.includes(RW)) && ((0, LW.c)({
          id: "store.login_resume",
          value: WW.item
        }), (0, KW.k)({
          mode: WW.mode,
          source: "loginResume",
          giftRecipientName: "gift" === WW.mode && WW.recipient ? WW.recipient : void 0,
          openItem: WW.item,
          highlight: !0
        }))
      }), [HW, CW]);
      const SW = (0, Rw.r)({
        hasSuperRank: HW && GW,
        superRankDaysLeft: nW,
        openedThisSession: Uw || CW
      });
      if ((0, wW.useEffect)((() => {
          (0, KW.r)(SW)
        }), [SW]), !CW || !(0, uW.siteSupportsPurchases)()) return null;
      const WR = tR > BW && BW <= 700,
        RR = !WR && tR <= 420,
        MR = "gift" === qR ? Vw(NW.recipient) : null,
        wR = null !== lW;

      function CR(WW) {
        (0, KW.o)({
          item: WW,
          mode: qR,
          recipient: "gift" === qR ? NW.query.trim() : ""
        }), (0, SM.e)()
      }

      function zM(WW, RW) {
        (0, LW.c)({
          id: "store.purchase_done",
          value: `${RW?"gift":"self"}:${WW}`
        }), RW && (NW.recordGift(RW.name, WW), AR(RW))
      }

      function AR(WW) {
        ! function(WW) {
          try {
            kM.g.setItem(Mw, (0, Rw.z)(Cw(), WW))
          } catch {}
        }({
          name: WW.name,
          cosmetics: WW.cosmetics
        }), JW(hw), XW((RW => {
          var MW;
          return {
            name: WW.name,
            seq: (null !== (MW = null === RW || void 0 === RW ? void 0 : RW.seq) && void 0 !== MW ? MW : 0) + 1
          }
        }))
      }
      async function bM(WW) {
        var RW, MW;
        if (pW.current) return;
        if (!HW) return void CR(WW);
        rR(null), kR(null);
        const wW = "gift" === qR ? {
          name: Vw(NW.recipient),
          cosmetics: NW.recipientCosmetics
        } : null;
        if (wW && !wW.name) return void mR();
        const CW = "superRank" === WW ? VW.j.id : (0, VW.b)(WW);
        pW.current = !0;
        const zR = await (0, Ww.c)(CW, null !== (RW = null === wW || void 0 === wW ? void 0 : wW.name) && void 0 !== RW ? RW : null);
        if (pW.current = !1, !zR) return;
        fW(WW);
        const AW = await HM.e.purchase(CW, null !== (MW = null === wW || void 0 === wW ? void 0 : wW.name) && void 0 !== MW ? MW : null);
        fW(null), AW ? rR(AW) : (zM(WW, wW), wW || (await (0, DM.flushClientAnalyticsEvents)(), (0, uW.refreshWithoutConfirmation)("superRank" === WW ? "/super-rank-welcome" : `/pack-welcome/${WW}`)))
      }
      const yM = zR()("Store", {
        StoreGift: "gift" === qR,
        StorePortrait: WR,
        StoreCompact: RR
      });
      if (yR === aR.NULL_USER_CONTEXT) return (0, eW.jsx)("div", {
        className: yM,
        children: (0, eW.jsx)(FW.d, {})
      });
      if ("pack" === gR.kind) {
        const WW = gR.pack,
          RW = ZW.packs.find((RW => RW.pack === WW));
        return (0, eW.jsx)("div", {
          ref: sW,
          className: "CosmeticShopContainer",
          children: (0, eW.jsx)(ZM.g, {
            pack: WW,
            onBack: () => {
              JW(hw)
            },
            onPurchased: RW => {
              zM(WW, RW ? {
                name: RW,
                cosmetics: null
              } : null)
            },
            giftCta: "gift" === qR && MR && RW && (0, eW.jsxs)(eW.Fragment, {
              children: [(0, eW.jsx)(Fw, {
                state: RW.state,
                item: WW,
                price: (NR = WW, "superRank" === NR ? VW.j.price : (0, VW.c)(NR)),
                busy: wR,
                onAct: () => {
                  bM(WW)
                },
                onNeedRecipient: () => {
                  JW(hw), mR()
                }
              }), QW && (0, eW.jsx)("span", {
                className: "CosmeticShopGiftError SmallTextBold",
                children: bR(QW)
              })]
            }),
            ownedPacks: DW,
            startAsGift: "gift" === qR,
            initialGiftRecipient: "gift" === qR ? null !== MR && void 0 !== MR ? MR : NW.query.trim() : "",
            highlightCta: jR === WW
          }, WW)
        })
      }
      var NR;
      return "superRank" === gR.kind ? (0, eW.jsx)("div", {
        ref: sW,
        className: zR()(yM, "StoreDetailView"),
        children: (0, eW.jsx)(pw, {
          state: ZW.superRank.state,
          mode: qR,
          giftName: MR,
          busy: wR,
          highlight: "superRank" === jR,
          purchaseError: QW,
          onBack: () => {
            JW(hw)
          },
          onChooseRecipient: () => {
            JW(hw), mR()
          },
          onAct: () => {
            bM("superRank")
          },
          onLogin: () => {
            CR("superRank")
          }
        })
      }) : (0, eW.jsxs)("div", {
        ref: sW,
        className: yM,
        children: [(0, eW.jsx)("div", {
          className: "StoreTopRow",
          children: (0, eW.jsx)(gC, {
            selfName: yR.getPlayerName(),
            giftRecipient: NW,
            suggestionsVersion: null !== (RW = null === cR || void 0 === cR ? void 0 : cR.seq) && void 0 !== RW ? RW : 0,
            pulseSignal: IW,
            disabled: wR
          })
        }), cR && (0, eW.jsxs)("div", {
          className: "StoreNotice StoreNoticeGiftSent",
          onClick: () => {
            XW(null)
          },
          children: [(0, eW.jsx)(qw.b, {
            showSignal: cR.seq
          }), Rw.e, " ", bR("store:giftSent", {
            name: cR.name
          })]
        }, cR.seq), !cR && QW && (0, eW.jsx)("div", {
          className: "StoreNotice StoreNoticeError",
          children: bR(QW)
        }), (0, eW.jsx)(kC, {
          layout: ZW,
          bundleGift: "gift" === qR ? {
            recipientName: MR,
            lookingUp: "pending" === NW.recipient.status,
            busy: wR,
            onNeedRecipient: mR,
            onSent: WW => {
              (0, LW.c)({
                id: "store.purchase_done",
                value: "gift:superGems"
              }), AR({
                name: WW,
                cosmetics: NW.recipientCosmetics
              })
            }
          } : null,
          superRankDaysLeft: nW,
          superRankTotalDays: null !== (MW = null === xR || void 0 === xR ? void 0 : xR.superRankForDays) && void 0 !== MW ? MW : 0,
          busy: wR,
          highlightItem: jR,
          onOpen: function(WW) {
            (0, LW.c)({
              id: "store.item_open",
              value: WW
            }), JW((0, KW.g)(WW))
          },
          onAct: bM,
          onNeedRecipient: mR,
          onLogin: CR
        })]
      })
    }));
    var xC = MW(2088),
      vC = MW(7733),
      Kw = MW(2127),
      uw = MW(1998),
      Ow = MW(2049),
      nw = MW(2059),
      Gw = MW(2068),
      Lw = MW(2122),
      Hw = MW(2112),
      Dw = MW(2103),
      qC = MW(1890),
      Zw = MW(1922),
      Sw = MW(1906),
      WC = MW(1624),
      RC = MW(2074),
      MC = MW(1931);

    function wC(WW) {
      let {
        show: RW
      } = WW;
      return RW ? (0, eW.jsx)(CC, {}) : null
    }

    function CC() {
      const {
        t: WW
      } = (0, AW.C)(), {
        followsLeader: RW
      } = (0, uw.i)(), {
        loading: MW,
        friends: CW,
        requests: yR,
        invites: NW
      } = (0, yC.g)(), {
        userContext: BW
      } = (0, TW.c)(), [tR, gR] = (0, wW.useState)(MC.k);
      (0, wW.useEffect)((() => {
        (0, MC.b)()
      }), []);
      const iR = yR.map((WW => WW.name)),
        {
          state: JW,
          recentRequesters: PW
        } = (0, Hw.q)(),
        IW = new Map([...("loaded" === JW.status ? JW.recentPlayers : []).map((WW => [WW.preview.name, WW])), ...PW.map((WW => [WW.name, WW]))]),
        oW = (0, wW.useRef)(null),
        [fW, QW] = (0, wW.useState)(""),
        [rR, cR] = (0, wW.useState)("Enter"),
        [XW, jR] = (0, wW.useState)(null);

      function kR() {
        fW && (cR("Loading"), (0, Sw.f)(fW, "social_menu").then((WW => {
          if (oW.current) switch (WW.kind) {
            case "sent":
              cR("Success");
              break;
            case "becameFriends":
              cR("BecameFriends");
              break;
            case "failed":
              jR(WW.message), cR("Error")
          }
        })))
      }
      return (0, wW.useEffect)((() => {
        if ("Enter" === rR || "Loading" === rR) return;
        const WW = setTimeout((() => {
          oW.current.value = "", QW(""), cR("Enter")
        }), "Success" === rR ? 1e3 : 4e3);
        return () => {
          clearTimeout(WW)
        }
      }), [rR]), (0, eW.jsx)("div", {
        className: "SocialMenu",
        children: (0, eW.jsxs)("div", {
          className: "SocialMenuInner",
          children: [(0, eW.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, eW.jsxs)("div", {
              className: "SocialMenuBox SocialMenuAddFriend",
              children: [(0, eW.jsx)(Gw.b, {
                label: WW("socialBar:addFriend")
              }), (0, eW.jsxs)("div", {
                className: "AddFriendBody",
                children: [(0, eW.jsxs)("div", {
                  className: zR()("AddFriendBodyOverlay", {
                    [`AddFriendBodyOverlay${rR}`]: !0
                  }),
                  children: ["Loading" === rR && (0, eW.jsx)(FW.d, {}), "Success" === rR && (0, eW.jsx)(bR.e, {
                    name: "check"
                  }), "BecameFriends" === rR && (0, eW.jsx)(eW.Fragment, {
                    children: WW("socialBar:nowFriends", {
                      playerName: fW
                    })
                  }), "Error" === rR && XW && (0, eW.jsx)(eW.Fragment, {
                    children: WW(XW.translationKey, XW.params)
                  })]
                }), (0, eW.jsxs)("div", {
                  className: "PlayerSearch",
                  children: [(0, eW.jsx)(lW.e, {
                    className: "PlayerSearchInput",
                    placeholderText: WW("socialBar:enterPlayerName"),
                    domRef: oW,
                    onValueChange: WW => {
                      QW((0, UW.o)(WW)), oW.current.value = (0, UW.o)(WW)
                    },
                    onEnter: () => {
                      fW && (0, LW.c)({
                        id: "social.add_friend",
                        value: "social_menu"
                      }), kR()
                    }
                  }), (0, eW.jsxs)(YW.h, {
                    className: "PlayerSearchInputButton SmallTextLight",
                    onClick: () => {
                      kR()
                    },
                    analyticsClick: {
                      id: "social.add_friend",
                      value: "social_menu"
                    },
                    children: [(0, eW.jsx)(bR.e, {
                      name: "user-plus"
                    }), " ", WW("socialBar:sendRequest")]
                  })]
                })]
              }), (0, eW.jsx)(RC.c, {
                surface: "social_menu",
                prefetchOnMount: !0
              })]
            }), NW.length > 0 && (0, eW.jsxs)("div", {
              className: "SocialMenuBox SocialMenuInvites",
              children: [(0, eW.jsx)(Gw.b, {
                label: WW("socialBar:invites"),
                meta: NW.length
              }), NW.map((RW => (0, eW.jsxs)("div", {
                className: "SocialMenuInvite",
                children: [(0, eW.jsx)("div", {
                  className: "SocialMenuInviteIcon",
                  children: (0, eW.jsx)(qC.d, {
                    invite: RW
                  })
                }), (0, eW.jsx)("div", {
                  className: "SocialMenuInviteText",
                  children: (0, eW.jsx)(qC.f, {
                    invite: RW
                  })
                }), (0, eW.jsx)(YW.m, {
                  className: "SocialMenuInviteJoin SmallTextLight",
                  onClick: () => {
                    (0, Zw.g)(RW)
                  },
                  analyticsClick: {
                    id: "social.accept_invite",
                    value: `social_menu:${RW.destination.kind}`
                  },
                  children: WW("general:join")
                }), (0, eW.jsx)(OW.e, {
                  tooltipInner: (0, eW.jsx)(eW.Fragment, {
                    children: WW("general:decline")
                  }),
                  delayShow: 0,
                  children: (0, eW.jsx)(YW.j, {
                    className: "SocialMenuInviteDecline",
                    padDefaultFocus: "invite" === (null === tR || void 0 === tR ? void 0 : tR.kind) && tR.inviteId === RW.id,
                    onClick: () => {
                      yC.b.declineInvite(RW.id)
                    },
                    analyticsClick: {
                      id: "social.decline_invite",
                      value: `social_menu:${RW.destination.kind}`
                    },
                    children: (0, eW.jsx)(bR.e, {
                      name: "xmark"
                    })
                  })
                })]
              }, RW.id)))]
            }), (0, eW.jsxs)("div", {
              className: zR()("SocialMenuBox SocialMenuRequests", {
                SocialMenuBoxEmpty: !MW && 0 === yR.length
              }),
              children: [(0, eW.jsx)(Gw.b, {
                label: (0, eW.jsxs)(eW.Fragment, {
                  children: [(0, eW.jsx)(bR.e, {
                    name: WC.g
                  }), " ", WW("socialBar:requests")]
                }),
                meta: (0, eW.jsxs)(eW.Fragment, {
                  children: [yR.length, yR.length === nW.r && (0, eW.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: WW("socialBar:limitReached")
                  })]
                })
              }), MW && (0, eW.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, eW.jsx)(FW.d, {})
              }), !MW && 0 === yR.length && (0, eW.jsx)("div", {
                className: "SocialMenuEmpty",
                children: WW("socialBar:noFriendRequests")
              }), !MW && yR.length > 0 && (0, eW.jsx)("div", {
                className: "PlayerRows",
                children: (0, eW.jsx)(Dw.e, {
                  lazyLoadedClassName: "SocialMenuRequestsLazy",
                  observerUpdateDeps: [yR],
                  children: yR.map(((RW, MW) => {
                    const wW = IW.get(RW.name);
                    return (0, eW.jsxs)(nw.e, {
                      playerSocialPreview: RW,
                      zIndex: yR.length - MW,
                      padDefaultFocus: (0, MC.g)(tR, RW.name, MW),
                      status: wW && (0, eW.jsx)(Lw.b, {
                        gameNameWithVariation: wW.gameNameWithVariation,
                        isPrivateLobby: wW.isPrivateLobby
                      }),
                      children: [(0, eW.jsx)(OW.e, {
                        tooltipInner: (0, eW.jsx)(eW.Fragment, {
                          children: WW("general:accept")
                        }),
                        delayShow: 0,
                        children: (0, eW.jsx)(YW.h, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            gR((0, MC.f)(iR, MW)), (0, Sw.e)(RW.name, !0, {
                              source: "social_menu",
                              announceFriend: !1
                            })
                          },
                          analyticsClick: {
                            id: "social.accept_friend_request",
                            value: "social_menu"
                          },
                          children: (0, eW.jsx)(bR.e, {
                            name: "check"
                          })
                        })
                      }), (0, eW.jsx)(OW.e, {
                        tooltipInner: (0, eW.jsx)(eW.Fragment, {
                          children: WW("general:decline")
                        }),
                        delayShow: 0,
                        children: (0, eW.jsx)(YW.j, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            gR((0, MC.f)(iR, MW)), (0, Sw.e)(RW.name, !1, {
                              source: "social_menu"
                            })
                          },
                          analyticsClick: {
                            id: "social.decline_friend_request",
                            value: "social_menu"
                          },
                          children: (0, eW.jsx)(bR.e, {
                            name: "xmark"
                          })
                        })
                      })]
                    }, `${RW.name}_${RW.isError}`)
                  }))
                })
              })]
            }), (0, eW.jsx)(Lw.d, {})]
          }), (0, eW.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, eW.jsxs)("div", {
              className: "SocialMenuBox SocialMenuParty",
              children: [(0, eW.jsx)(Gw.b, {
                label: WW("socialBar:party")
              }), (0, eW.jsx)(Ow.b, {})]
            }), (0, eW.jsxs)("div", {
              className: "SocialMenuBox SocialMenuFriends",
              children: [(0, eW.jsx)(Gw.b, {
                label: (0, eW.jsxs)(eW.Fragment, {
                  children: [(0, eW.jsx)(bR.e, {
                    name: WC.d
                  }), " ", WW("socialBar:friends")]
                }),
                meta: (0, eW.jsxs)(eW.Fragment, {
                  children: [CW.length, CW.length >= (0, nW.e)(BW.getPlayerRanks()) && (0, eW.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: WW("socialBar:limitReached")
                  })]
                })
              }), MW && (0, eW.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, eW.jsx)(FW.d, {})
              }), !MW && 0 === CW.length && (0, eW.jsx)("div", {
                className: "SocialMenuEmpty",
                children: WW("socialBar:noFriends")
              }), !MW && CW.length > 0 && (0, eW.jsx)("div", {
                className: "PlayerRows",
                children: (0, eW.jsx)(Dw.e, {
                  lazyLoadedClassName: "SocialMenuFriendsLazy",
                  observerUpdateDeps: [CW],
                  children: CW.map(((WW, MW) => (0, eW.jsx)(nw.e, {
                    playerSocialPreview: WW,
                    isFriend: !0,
                    hideFriendBadge: !0,
                    onFriendRemoved: WW => {
                      yC.b.removeFriendFromState(WW)
                    },
                    zIndex: CW.length - MW,
                    children: (0, eW.jsx)(nw.d, {
                      friend: WW,
                      followsLeader: RW,
                      analyticsSurface: "social_menu"
                    })
                  }, `${WW.name}_${WW.isError}`)))
                })
              })]
            })]
          })]
        })
      })
    }
    var zz = MW(1991);
    const AC = WW => {
        let {
          action: RW,
          padAction: MW
        } = WW;
        const {
          isTouchScreen: wW
        } = (0, QW.i)(["isTouchScreen"]), CW = (0, wM.q)();
        return wW && !CW ? null : (0, eW.jsx)(HR.b, {
          className: "EverythingMenuTabKey",
          noaAction: RW,
          padHidesKey: !0,
          padMenuShortcut: MW
        })
      },
      bz = (0, wW.memo)((function() {
        const {
          t: WW
        } = (0, AW.C)(), {
          gameState: RW,
          openEverythingMenuName: MW,
          initSdkSelectorFinished: CW
        } = (0, QW.i)(["gameState", "openEverythingMenuName", "initSdkSelectorFinished"]), {
          userContext: bR
        } = (0, TW.c)(), yR = (0, uW.siteSupportsPurchases)(), NW = (0, KW.y)(), BW = (WW, RW) => (0, eW.jsx)(AC, {
          action: WW,
          padAction: RW
        }), [tR, gR] = (0, wW.useState)(null), iR = (0, wW.useRef)(null), PW = {
          ..."inGame" === RW ? {} : (0, YW.V)({
            focusOnClick: !1
          }),
          ...TM.c
        }, IW = null !== MW, oW = MW !== ZR.t.COSMETIC_SHOP;
        async function lW() {
          await async function() {
            if (!tR) return;
            await tR(), gR(null)
          }(), QW.b.set({
            openEverythingMenuName: null
          })
        }
        const FW = (0, wW.useMemo)((() => "inGame" === RW ? {
          text: WW("settingsMenu:exitGame"),
          onClick: () => {
            (0, vC.e)()
          }
        } : (0, kR.e)() ? {
          text: WW("settingsMenu:exitGame"),
          onClick: () => {
            dW.l.discordActivity().then((WW => {
              WW.exit("User exited the game")
            }))
          }
        } : null), [RW, WW]);
        const fW = (0, eW.jsx)("div", {
          className: "EverythingMenuCloseButtonClickZone",
          onClick: () => {
            lW()
          },
          children: (0, eW.jsx)(YW.l, {
            className: "EverythingMenuCloseButton"
          })
        });
        return (0, eW.jsx)(gw.c, {
          showing: IW,
          globallyUniqueKey: "EverythingMenu",
          alwaysMountChildren: !0,
          doGameplayStartStopOnShow: "inGame" === RW,
          children: (0, eW.jsx)(YM.b, {
            className: "EverythingMenuContainer",
            show: IW,
            children: (0, eW.jsx)(iw.b, {
              close: () => {
                lW()
              },
              togglePointerLock: !1,
              children: (0, eW.jsxs)("div", {
                className: "EverythingMenu",
                children: [!(0, uM.l)(MW) && (0, eW.jsxs)("div", {
                  className: "EverythingMenuTabList",
                  children: [(0, eW.jsxs)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerStart",
                    children: [FW && (0, eW.jsx)(YW.d, {
                      className: "EverythingMenuBackButton",
                      padDestructive: !0,
                      onClick: () => {
                        FW.onClick()
                      },
                      children: FW.text
                    }), IW && yR && (0, eW.jsx)("div", {
                      ...PW,
                      className: "EverythingMenuWallet",
                      title: WW("homePage:getPremiumCurrency"),
                      onClick: () => {
                        (0, KW.k)({
                          mode: "current",
                          source: "menuWallet"
                        })
                      },
                      children: (0, eW.jsx)(xC.h, {})
                    })]
                  }), (0, eW.jsxs)("div", {
                    className: "EverythingMenuTabListInner",
                    "data-pad-tabs": "1",
                    children: [(0, eW.jsxs)("div", {
                      ...PW,
                      "data-pad-tab": !0,
                      "data-pad-selected": MW === ZR.t.SETTINGS ? "true" : void 0,
                      className: zR()("EverythingMenuTab", {
                        EverythingMenuTabActive: MW === ZR.t.SETTINGS
                      }),
                      onClick: () => {
                        QW.b.set({
                          openEverythingMenuName: ZR.t.SETTINGS
                        })
                      },
                      children: [WW("general:settings"), BW("OpenSettings", "pause")]
                    }), (0, eW.jsxs)("div", {
                      ...PW,
                      "data-pad-tab": !0,
                      "data-pad-selected": MW === ZR.t.CUSTOMISATION ? "true" : void 0,
                      className: zR()("EverythingMenuTab", {
                        EverythingMenuTabActive: MW === ZR.t.CUSTOMISATION
                      }),
                      onClick: () => {
                        QW.b.set({
                          openEverythingMenuName: ZR.t.CUSTOMISATION
                        })
                      },
                      children: [WW("general:player"), BW("OpenCharacterCustomization")]
                    }), JW.featureFlags.useSocialFeatures && (0, eW.jsxs)("div", {
                      ...PW,
                      "data-pad-tab": !0,
                      "data-pad-selected": MW === ZR.t.SOCIAL ? "true" : void 0,
                      className: zR()("EverythingMenuTab", {
                        EverythingMenuTabActive: MW === ZR.t.SOCIAL
                      }),
                      ...(0, LW.b)({
                        id: "social.open_menu",
                        value: "menu_tab"
                      }, MW === ZR.t.SOCIAL),
                      onClick: () => {
                        QW.b.set({
                          openEverythingMenuName: ZR.t.SOCIAL
                        })
                      },
                      children: [WW("socialBar:social"), (0, eW.jsx)(zz.d, {})]
                    }), yR && (0, eW.jsxs)("div", {
                      ...PW,
                      "data-pad-tab": !0,
                      "data-pad-selected": MW === ZR.t.COSMETIC_SHOP ? "true" : void 0,
                      className: zR()("EverythingMenuTab EverythingMenuTabCosmeticShop", {
                        EverythingMenuTabActive: MW === ZR.t.COSMETIC_SHOP
                      }),
                      onClick: () => {
                        QW.b.set({
                          openEverythingMenuName: ZR.t.COSMETIC_SHOP
                        })
                      },
                      children: [(0, eW.jsx)("span", {
                        className: "EverythingMenuTabCosmeticShopText",
                        children: WW("store:title")
                      }), "dot" === NW && (0, eW.jsx)("span", {
                        className: "EverythingMenuTabStoreBadge EverythingMenuTabStoreDot"
                      })]
                    }), "inGame" === RW && (0, eW.jsxs)("div", {
                      ...PW,
                      "data-pad-tab": !0,
                      "data-pad-selected": MW === ZR.t.LOBBY_LEADERBOARD ? "true" : void 0,
                      className: zR()("EverythingMenuTab", {
                        EverythingMenuTabActive: MW === ZR.t.LOBBY_LEADERBOARD
                      }),
                      onClick: () => {
                        QW.b.set({
                          openEverythingMenuName: ZR.t.LOBBY_LEADERBOARD
                        })
                      },
                      children: [WW("general:lobby"), BW("OpenLobbyLeaderboard", "leaderboard")]
                    })]
                  }), (0, eW.jsx)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerEnd",
                    children: fW
                  })]
                }), (0, uM.l)(MW) && fW, (0, eW.jsxs)("div", {
                  className: "EverythingMenuBody",
                  "data-pad-initial-area": !0,
                  style: {
                    "--everythingMenuBodyBackgroundOpacity": "inGame" === RW ? "0.85" : "1"
                  },
                  children: [(0, eW.jsx)(yw, {
                    show: MW === ZR.t.SETTINGS,
                    setBeforeResumeCallback: gR
                  }), (0, eW.jsx)(tw, {
                    show: MW === ZR.t.CUSTOMISATION
                  }), (0, eW.jsx)(wW.Suspense, {
                    fallback: null,
                    children: (0, eW.jsx)(pM, {
                      show: MW === ZR.t.SHOP
                    })
                  }), (0, eW.jsx)(GM, {
                    show: MW === ZR.t.LOBBY_LEADERBOARD
                  }), (0, eW.jsx)(mC, {
                    show: MW === ZR.t.COSMETIC_SHOP
                  }), (0, eW.jsx)(wC, {
                    show: MW === ZR.t.SOCIAL
                  })]
                }), !(0, JW.isMobileApp)() && (0, JM.f)(bR.getPlayerRanks()) && (0, eW.jsx)(YM.b, {
                  ref: iR,
                  className: "EverythingMenuBannerDiv",
                  show: oW,
                  "data-pad-hint-bar-avoid": !0,
                  "data-pad-no-step-in": !0,
                  children: (0, eW.jsx)(Kw.e, {
                    info: {
                      adId: 2,
                      adType: "leaderboard",
                      adAlias: "banner_shop"
                    },
                    sizeInfo: {
                      parentRef: iR
                    },
                    showing: IW && oW,
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
  3893: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => tR
    });
    var wW = MW(897),
      CW = MW.n(wW),
      zR = MW(904),
      AW = MW(1157),
      bR = MW(2601),
      yR = MW(151),
      NW = MW(2640),
      eW = MW(2628),
      BW = MW(940);

    function tR(WW) {
      let {
        game: RW
      } = WW;
      const MW = (0, yR.n)() ? "large" : "small",
        wW = (0, NW.f)(RW, MW),
        tR = (0, bR.c)(wW),
        TW = void 0 !== tR.blurhash;
      return (0, BW.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [tR.isLoading && !TW && (0, BW.jsx)(AW.d, {
          loaderType: "Secondary"
        }), !tR.failed && (null !== tR.src || TW) && (0, BW.jsx)("div", {
          className: CW()("SchematicImage", eW.g, {
            SchematicImageFadeIn: tR.fadeIn && !TW
          }),
          style: (0, eW.c)(tR),
          children: (0, BW.jsx)(eW.b, {
            image: tR
          })
        }), tR.failed && (0, BW.jsx)("div", {
          className: "SchematicImageError",
          children: (0, BW.jsx)(zR.e, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  4e3: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => TW
    });
    var wW = MW(75),
      CW = MW(897),
      zR = MW.n(CW),
      AW = MW(3933),
      bR = MW(1157),
      yR = MW(1027),
      NW = MW(2295),
      eW = MW(2420),
      BW = MW(904),
      tR = MW(940);

    function TW(WW) {
      let {
        folderName: RW,
        onTexturePackUpdated: CW,
        disabled: TW = !1,
        maxFileSizeMb: gR,
        packOwner: iR
      } = WW;
      const {
        t: YW
      } = (0, yR.C)(), [JW, PW] = (0, wW.useState)(!1), [IW, oW] = (0, wW.useState)(null), [lW, FW] = (0, wW.useState)(null), fW = (0, wW.useRef)(null);
      const {
        getRootProps: QW,
        getInputProps: rR,
        isDragActive: cR
      } = (0, AW.d)({
        onDrop: async function(WW) {
          PW(!0);
          try {
            const RW = await (0, NW.n)(WW);
            if ("customGame" === iR && (0, eW.h)(RW)) return void oW(YW(eW.c));
            if (void 0 !== gR) {
              const WW = JSON.stringify(RW).length / 1048576;
              if (WW > gR) return void oW(`File size is too large. Max size is ${gR}MB. Current size is ${WW}MB.`)
            }
            oW(null), FW(null), CW(RW), fW.current = RW,
              function(WW, RW) {
                const wW = WW.modelOverrides;
                wW && Promise.all([MW.e(181), MW.e(180)]).then((() => MW(32642))).then((MW => {
                  let {
                    packDisplayName: CW,
                    refusedPackModels: zR,
                    packModelSummary: AW
                  } = MW;
                  const bR = CW(WW.metaData);
                  RW(AW(bR, zR(bR, wW, !1)))
                })).catch((WW => {
                  console.error("Checking the texture pack's models failed:", WW)
                }))
              }(RW, (WW => {
                fW.current === RW && FW(WW)
              }))
          } catch {
            oW("Invalid Texture Pack Folder")
          } finally {
            PW(!1)
          }
        },
        useFsAccessApi: !1,
        disabled: TW
      });
      return (0, tR.jsxs)("div", {
        className: "CustomTexturePackContainer",
        children: [(0, tR.jsxs)("div", {
          className: "CustomTextureWarning",
          children: [YW("settingsMenu:customTextureWarning"), ".", (0, tR.jsx)("br", {}), YW("settingsMenu:viewDocumentation"), ":", " ", (0, tR.jsx)("a", {
            href: "https://github.com/Bloxdy/texturePacks",
            target: "_blank",
            rel: "noreferrer",
            children: "github.com/Bloxdy/texturePacks"
          })]
        }), IW && (0, tR.jsxs)("div", {
          className: "CustomTextureError",
          children: [YW("general:error"), ": ", IW]
        }), lW && (0, tR.jsx)("div", {
          className: "CustomTextureError",
          children: lW
        }), (0, tR.jsxs)("div", {
          ...QW({
            className: zR()("CustomTextureFolderUpload", {
              ActiveDrag: cR,
              Disabled: TW
            })
          }),
          children: [(0, tR.jsx)("input", {
            ...rR({
              webkitdirectory: "true"
            })
          }), JW && (0, tR.jsx)("div", {
            className: "CustomTextureFolderUploadLoading",
            children: (0, tR.jsx)(bR.d, {})
          }), !JW && !cR && RW && (0, tR.jsxs)(tR.Fragment, {
            children: [(0, tR.jsx)("div", {
              className: "CustomTextureFolderUploadIcon Active",
              children: (0, tR.jsx)(BW.e, {
                name: "folder-image"
              })
            }), (0, tR.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions Active",
              children: RW
            })]
          }), !JW && (cR || !RW) && (0, tR.jsxs)(tR.Fragment, {
            children: [(0, tR.jsx)("div", {
              className: "CustomTextureFolderUploadIcon",
              children: (0, tR.jsx)(BW.e, {
                name: "up-from-bracket"
              })
            }), (0, tR.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions",
              children: "Drag and drop a Texture Pack folder here"
            })]
          })]
        })]
      })
    }
  },
  3959: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => gR,
      g: () => iR
    });
    var wW = MW(2295),
      CW = MW(2301),
      zR = MW(75),
      AW = MW(897),
      bR = MW.n(AW),
      yR = MW(1157),
      NW = MW(2289),
      eW = MW(1166),
      BW = MW(3965),
      tR = MW(4e3),
      TW = MW(940);

    function gR(WW) {
      var RW;
      let {
        setApplySettingsCallback: MW
      } = WW;
      const [, AW] = (0, zR.useReducer)((WW => WW + 1), 0), bR = (0, zR.useRef)(!1), yR = (0, zR.useRef)(null);

      function gR() {
        yR.current !== NW.d.getId() || NW.d.getId() === CW.n.CUSTOM && bR.current ? MW((() => BW.i)) : MW(null)
      }
      async function YW(WW) {
        if (NW.d.getId() !== WW.metaData.id) {
          if (NW.d.getId() === CW.n.CUSTOM && NW.d.getFromFolderName()) {
            const WW = eW.NotificationProvider.showPromptPopup({
              title: "settingsMenu:loseChangesTitle",
              subtitle: "settingsMenu:loseChangesSubtitle",
              confirmText: "general:continue",
              destructive: !0,
              confirmTooltip: "",
              cancelText: "general:cancel",
              cancelTooltip: ""
            });
            if (!0 !== await WW.getResult()) return
          }
          NW.d.setFromJson(WW, "player"), NW.d.saveTexturePack(), gR(), AW()
        }
      }(0, zR.useEffect)((() => {
        yR.current = NW.d.getId()
      }), []);
      const JW = wW.d,
        PW = [JW, ...Object.values(CW.n).filter((WW => WW !== JW))];
      return (0, TW.jsx)(TW.Fragment, {
        children: (0, TW.jsxs)("div", {
          className: "TexturePackCategory SettingsMenuRightInner",
          children: [(0, TW.jsx)("div", {
            className: "TexturePackList",
            children: PW.map((WW => (0, TW.jsx)(iR, {
              id: WW,
              isSelected: WW === NW.d.getId(),
              setSelected: YW
            }, WW)))
          }), NW.d.getId() === CW.n.CUSTOM && (0, TW.jsx)(tR.d, {
            folderName: null !== (RW = NW.d.getFromFolderName()) && void 0 !== RW ? RW : null,
            onTexturePackUpdated: function(WW) {
              NW.d.setFromJson(WW, "player"), NW.d.saveTexturePack(), bR.current = !0, gR(), AW()
            },
            packOwner: "player"
          })]
        })
      })
    }

    function iR(WW) {
      let {
        id: RW,
        isSelected: MW,
        setSelected: AW,
        disabled: NW = !1
      } = WW;
      const [eW, BW] = (0, zR.useState)(!0), [tR, gR] = (0, zR.useState)(""), [iR, YW] = (0, zR.useState)(""), [JW, PW] = (0, zR.useState)(""), IW = (0, zR.useRef)({});
      return (0, zR.useEffect)((() => {
        (0, wW.m)(RW).then((WW => {
          var RW;
          WW && (IW.current = WW, BW(!1), gR(IW.current.metaData.name), YW(IW.current.metaData.author), PW(null !== (RW = IW.current.metaData.previewImage) && void 0 !== RW ? RW : ""))
        })).catch((WW => {
          console.warn(`Failed to fetch texture pack ${RW}`, WW)
        }))
      }), [RW]), (0, TW.jsxs)("div", {
        "data-pad-focusable": !0,
        "aria-disabled": NW || void 0,
        className: bR()("TexturePack", {
          Selected: MW,
          Custom: RW === CW.n.CUSTOM,
          Disabled: NW
        }),
        onClick: () => {
          eW || NW || AW(IW.current)
        },
        children: [(0, TW.jsx)("div", {
          className: "TexturePackBg",
          style: {
            backgroundImage: JW ? `url(${JW})` : void 0
          }
        }), eW && (0, TW.jsx)("div", {
          className: "TexturePackName",
          children: (0, TW.jsx)(yR.d, {})
        }), !eW && tR && (0, TW.jsx)("div", {
          className: "TexturePackName",
          children: tR
        }), !eW && iR && (0, TW.jsx)("div", {
          className: "TexturePackAuthor",
          children: iR
        })]
      })
    }
  },
  3861: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => YW
    });
    var wW = MW(897),
      CW = MW.n(wW),
      zR = MW(3648),
      AW = MW(1027),
      bR = MW(904),
      yR = MW(1255),
      NW = MW(1314),
      eW = MW(1166),
      BW = MW(1971),
      tR = MW(940);
    const TW = {
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

    function gR(WW) {
      let {
        platform: RW
      } = WW;
      const MW = "youtube" === RW;
      return (0, tR.jsxs)("span", {
        className: CW()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: MW
        }),
        children: [MW && (0, tR.jsx)(BW.b, {
          variant: "white"
        }), !MW && (0, tR.jsx)(bR.e, {
          name: TW[RW].icon,
          kit: "brands"
        })]
      })
    }

    function iR(WW) {
      let {
        platform: RW,
        link: MW,
        editable: wW,
        userContext: CW,
        onLinksUpdated: BW
      } = WW;
      const {
        t: iR
      } = (0, AW.C)(), YW = TW[RW];
      if (!MW && !wW) return null;

      function JW() {
        var WW;
        if (!CW || !BW) return;
        eW.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: YW.name
            }
          },
          prefixText: zR.y[RW],
          placeholderText: "playBloxd",
          initialValue: null !== (WW = null === MW || void 0 === MW ? void 0 : MW.handle) && void 0 !== WW ? WW : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: MW ? "general:remove" : void 0
        }).getResult().then((async WW => {
          if ("notificationTornDown" !== WW && null !== WW) try {
            "submit" === WW.type ? await NW.c.setSocialLink(CW, RW, WW.value) : await NW.c.clearSocialLink(CW, RW), BW()
          } catch (MW) {
            console.error("Failed to update social link", MW), eW.NotificationProvider.showAlertPopup({
              title: MW.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (MW) {
        const WW = `@${MW.handle}`;
        return (0, tR.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: YW.color
          },
          href: MW.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, tR.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, tR.jsx)(gR, {
              platform: RW
            }), (0, tR.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, tR.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: WW
              })
            })]
          }), wW && (0, tR.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, yR.V)({
              stopPropagation: !0
            }),
            onClick: WW => {
              WW.stopPropagation(), WW.preventDefault(), JW()
            },
            children: (0, tR.jsx)(bR.e, {
              name: "pen-to-square"
            })
          }), !wW && (0, tR.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, tR.jsx)(bR.e, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, tR.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: YW.color
        },
        ...(0, yR.V)(),
        onClick: () => {
          JW()
        },
        children: [(0, tR.jsx)(gR, {
          platform: RW
        }), (0, tR.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, tR.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: YW.name
          }), (0, tR.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: iR("homePage:profileSocialLinkAdd")
          })]
        }), (0, tR.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, tR.jsx)(bR.e, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function YW(WW) {
      let {
        socialLinks: RW,
        editable: MW = !1,
        userContext: wW,
        onLinksUpdated: CW
      } = WW;
      if (!MW && 0 === RW.length) return null;
      const AW = new Map(RW.map((WW => [WW.platform, WW]))),
        bR = MW ? zR.w : RW.map((WW => WW.platform));
      return (0, tR.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, tR.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: bR.map((WW => (0, tR.jsx)(iR, {
            platform: WW,
            link: AW.get(WW),
            editable: MW,
            userContext: wW,
            onLinksUpdated: CW
          }, WW)))
        })
      })
    }
  },
  8076: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => wW
    });
    const wW = new Set(["chunkBorders"])
  },
  8068: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      ALL_DEV_TOOLS: () => AW,
      coreDevTools: () => NW,
      devTools: () => yR
    });
    var wW = MW(253),
      CW = MW(1126),
      zR = MW(8076);
    const AW = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function bR() {
      const {
        noaDevTools: WW
      } = await MW.e(210).then((() => MW(38552)));
      return WW
    }
    const yR = new class {
        constructor() {
          this.loadHost = bR, this.tools = AW
        }
        setHost(WW) {
          this.tools = null === WW ? AW : WW.tools, this.loadHost = null === WW ? bR : async () => WW
        }
        supports(WW) {
          return this.tools.has(WW)
        }
        async downloadScene(WW, RW) {
          const MW = await this.loadHost();
          await MW.downloadScene(WW, RW)
        }
        async setAmbientLightIntensity(WW) {
          const RW = await this.loadHost();
          await RW.setAmbientLightIntensity(WW)
        }
      },
      NW = {
        tools: zR.b,
        downloadScene: async () => {
          throw new Error("This client can't download the scene")
        },
        setAmbientLightIntensity: async () => {
          throw new Error("This client can't set the ambient light")
        }
      };
    wW.q && yR.setHost(NW), (0, CW.k)((() => {
      yR.setHost(NW)
    }))
  },
  8091: (WW, RW, MW) => {
    function wW(WW, RW) {
      return WW && !RW
    }
    MW.d(RW, {
      e: () => wW
    })
  },
  7759: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => bR,
      d: () => yR
    });
    var wW = MW(27),
      CW = MW(1148),
      zR = MW(116);
    const AW = {
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
      autorunReady: {
        pattern: [8],
        priority: 2,
        minGapMs: 0
      },
      autorunLocked: {
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

    function bR() {
      return (0, zR.isMobile)() && "function" === typeof navigator.vibrate
    }
    const yR = new class {
      constructor(WW) {
        this.deps = WW, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(WW, RW) {
        var MW;
        if (!this.deps.enabled()) return;
        const wW = AW[WW],
          CW = null !== RW && void 0 !== RW ? RW : wW.pattern;
        if (null === CW) return void console.warn("No vibration pattern for", WW);
        const zR = this.deps.now();
        zR - this.lastAnyAt < 40 && wW.priority < this.playingPriority || zR - (null !== (MW = this.lastAt.get(WW)) && void 0 !== MW ? MW : -1 / 0) < wW.minGapMs || zR < this.playingUntil && wW.priority < this.playingPriority || (this.lastAt.set(WW, zR), this.lastAnyAt = zR, this.playingUntil = zR + CW.reduce(((WW, RW) => WW + RW), 0), this.playingPriority = wW.priority, this.deps.vibrate(CW))
      }
    }({
      vibrate: WW => {
        navigator.vibrate([...WW])
      },
      now: () => performance.now(),
      enabled: () => bR() && wW.b.get("isTouchScreen") && wW.b.get("clientEscMenuOptions").vibration && !(0, CW.f)()
    })
  },
  8121: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => zR,
      g: () => bR,
      i: () => AW,
      m: () => eW,
      p: () => BW,
      s: () => NW
    });
    var wW = MW(173);
    const CW = 33554432,
      zR = 6144,
      AW = 4608,
      bR = 512,
      yR = 4;

    function NW(WW) {
      return "number" === typeof WW && WW < yR
    }

    function eW(WW) {
      return Math.floor(CW * WW / zR)
    }

    function BW(WW) {
      const RW = WW - Math.floor(WW / 6);
      let MW = wW.c.maxChunkHorizAddDistance,
        CW = wW.c.maxChunkVertAddDistance;
      if (tR(MW + 1, CW + 1) <= RW) return null;
      for (; tR(MW + 1, CW + 1) > RW && (MW > 0 || CW > 0);) MW > CW ? MW-- : CW--;
      return {
        horizontal: MW,
        vertical: CW
      }
    }

    function tR(WW, RW) {
      const MW = Math.max(WW, RW);
      let wW = 0;
      for (let CW = -MW; CW <= MW; CW++)
        for (let zR = -MW; zR <= MW; zR++)
          for (let AW = -MW; AW <= MW; AW++) TW(WW, RW, CW, zR, AW) && wW++;
      return wW
    }

    function TW(WW, RW, MW, wW, CW) {
      const zR = MW * MW + CW * CW;
      return WW === RW ? zR + wW * wW <= WW * WW : WW > RW ? Math.abs(wW) <= RW && zR + wW * wW <= WW * WW : zR <= WW * WW && zR + wW * wW <= RW * RW
    }
  },
  8103: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => bR,
      c: () => yR
    });
    var wW = MW(27);
    const CW = 24,
      zR = "farNametags",
      AW = 1e5;

    function bR() {
      var WW;
      return null === (WW = wW.b.get("showDistantNametags")) || void 0 === WW || WW
    }

    function yR() {
      var WW;
      return null !== (WW = function() {
        const WW = new URLSearchParams(window.location.search).get(zR),
          RW = null === WW || "" === WW ? NaN : Number(WW);
        return Number.isFinite(RW) && RW >= 0 ? Math.min(RW, AW) : null
      }()) && void 0 !== WW ? WW : bR() ? 0 : CW
    }
  },
  8118: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => NW,
      f: () => eW,
      g: () => bR,
      h: () => tR
    });
    var wW = MW(116),
      CW = MW(50),
      zR = MW(8121);
    const AW = "rendererGpuVendor";

    function bR() {
      return "0" === new URLSearchParams(window.location.search).get("qualitySteps")
    }
    let yR = null;

    function NW() {
      return yR ??= BW(), yR
    }

    function eW() {
      var WW;
      return null !== (WW = yR) && void 0 !== WW ? WW : BW()
    }

    function BW() {
      var WW;
      const RW = "deviceMemory" in navigator ? navigator.deviceMemory : void 0,
        MW = CW.g.getItem(AW),
        yR = null !== (WW = (0, wW.peekGpuVendor)()) && void 0 !== WW ? WW : "string" === typeof MW ? MW : null;
      return !bR() && function(WW, RW) {
        return (0, zR.s)(WW) || "powervr" === RW
      }(RW, yR)
    }

    function tR(WW) {
      const RW = (0, wW.normaliseGpuVendor)(WW);
      CW.g.getItem(AW) !== RW && CW.g.setItem(AW, RW)
    }
  },
  8157: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => CW,
      g: () => AW
    });
    const wW = [{
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

    function CW(WW) {
      let RW, MW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof WW) {
        if (!Number.isFinite(WW)) return "0";
        if (Math.abs(WW) < 100) {
          const RW = WW < 0 ? "-" : "",
            MW = Math.abs(WW);
          return MW >= 10 ? `${RW}${MW.toFixed(1).replace(/\.0$/,"")}` : `${RW}${MW.toFixed(2).replace(/\.?0+$/,"")}`
        }
        RW = BigInt(Math.floor(WW))
      } else RW = WW;
      const CW = RW < 0n ? -RW : RW,
        zR = RW < 0n ? "-" : "",
        AW = CW.toString();
      if (AW.length <= MW) return `${zR}${AW}`;
      const bR = 3 * Math.floor((AW.length - 1) / 3);
      if (bR < 3) return `${zR}${AW}`;
      if (bR > 3 * wW.length) {
        const WW = AW[0],
          RW = AW.slice(1, 3).replace(/0+$/, "");
        return `${zR}${RW?`${WW}.${RW}`:WW}e${AW.length-1}`
      }
      const {
        threshold: yR,
        suffix: NW
      } = wW[wW.length - bR / 3], eW = CW / yR, BW = Number(1000n * (CW % yR) / yR), tR = Number(eW) + BW / 1e3;
      let TW;
      return TW = tR >= 100 ? Math.floor(tR).toString() : tR >= 10 ? tR.toFixed(1).replace(/\.0$/, "") : tR.toFixed(2).replace(/\.?0+$/, ""), `${zR}${TW}${NW}`
    }
    const zR = wW.map((WW => {
      let {
        threshold: RW,
        suffix: MW
      } = WW;
      return {
        threshold: Number(RW),
        suffix: MW
      }
    })).filter((WW => {
      let {
        threshold: RW
      } = WW;
      return Number.isFinite(RW)
    }));

    function AW(WW) {
      const RW = Math.abs(WW),
        MW = WW < 0 ? "-" : "";
      for (const {
          threshold: wW,
          suffix: CW
        }
        of zR)
        if (RW >= wW) {
          const WW = RW / wW;
          if (WW >= 1e3) return `${MW}${RW.toExponential(2).replace("e+","e")}`;
          let zR;
          return zR = WW >= 100 ? Math.floor(WW).toString() : WW >= 10 ? WW.toFixed(1).replace(/\.0$/, "") : WW.toFixed(2).replace(/\.?0+$/, ""), `${MW}${zR}${CW}`
        } return `${MW}${RW}`
    }
  },
  8147: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => eW,
      e: () => tR,
      f: () => BW,
      g: () => AW,
      i: () => NW,
      j: () => yR
    });
    var wW = MW(284);
    const CW = ["Wood Enchanting Table", "Stone Enchanting Table", "Iron Enchanting Table", "Gold Enchanting Table", "Diamond Enchanting Table"],
      zR = {
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

    function AW(WW) {
      var RW;
      return null !== (RW = zR[WW]) && void 0 !== RW ? RW : {
        translationKey: ""
      }
    }
    const bR = {
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

    function yR(WW) {
      return CW.includes(WW)
    }

    function NW(WW) {
      var RW;
      return !0 === (null === WW || void 0 === WW || null === (RW = WW.customAttributes) || void 0 === RW ? void 0 : RW.cannotEnchant)
    }

    function eW(WW, RW) {
      const {
        max: MW
      } = bR[WW].at(-1);
      return RW <= MW
    }

    function BW(WW) {
      const RW = Math.sin(WW / 80),
        MW = WW => {
          if (WW <= 0) return 0;
          if (WW > 1) return 1;
          let RW = 0;
          const MW = [1, 7, 21, 35, 35, 21, 7, 1];
          for (let wW = 0; wW < MW.length; wW++) {
            RW += (wW % 2 === 0 ? 1 : -1) * MW[wW] * Math.pow(WW, 2 + wW) / (2 + wW)
          }
          return 72 * RW
        },
        wW = .3 - .78 * RW,
        CW = .5 - .78 * RW,
        zR = .6 - .7 * RW,
        AW = .8 - .6 * RW;
      let bR = MW(wW),
        yR = MW(CW) - bR,
        NW = MW(zR) - yR - bR,
        eW = MW(AW) - NW - yR - bR;
      wW < .041 && (yR /= 1 - bR, NW /= 1 - bR, eW /= 1 - bR, bR = 0), CW < .041 && (bR /= 1 - yR, NW /= 1 - yR, eW /= 1 - yR, yR = 0), zR < .041 && (bR /= 1 - NW, yR /= 1 - NW, eW /= 1 - NW, NW = 0), AW < .041 && (bR /= 1 - eW, yR /= 1 - eW, NW /= 1 - eW, eW = 0);
      return {
        commonProb: bR,
        uncommonProb: yR,
        rareProb: NW,
        epicProb: eW,
        legendaryProb: 1 - (eW + NW + yR + bR)
      }
    }

    function tR(WW, RW) {
      const {
        min: MW,
        max: CW
      } = bR[WW][RW], zR = wW.d.sampleUniformIntDistribution(MW, CW, "includeMax");
      return {
        ...BW(zR),
        level: zR
      }
    }
  },
  7651: (WW, RW, MW) => {
    function wW(WW, RW) {
      return !WW.hidden && (RW || !WW.isRewardedAd)
    }

    function CW(WW) {
      return "object" === typeof WW ? WW.option : WW
    }

    function zR(WW, RW) {
      var MW;
      if ("dropdown" === (null === (MW = WW.userInput) || void 0 === MW ? void 0 : MW.type) && "object" === typeof WW.userInput.dropdownOptions[0]) {
        for (const MW of WW.userInput.dropdownOptions)
          if (CW(MW) === RW) return "object" === typeof MW ? MW.cost : WW.cost;
        console.error("Didn't find matching option for dropdown item. Item:", WW, "input:", RW)
      }
      return WW.cost
    }

    function AW(WW, RW, MW) {
      var wW;
      const CW = null !== (wW = MW.excludedPlayers) && void 0 !== wW ? wW : [RW];
      return WW.filter((WW => !CW.includes(WW)))
    }
    MW.d(RW, {
      e: () => zR,
      h: () => CW,
      l: () => AW,
      m: () => wW
    })
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);