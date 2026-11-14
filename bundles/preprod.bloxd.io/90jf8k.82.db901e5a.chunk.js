export const id = 82;
export const ids = [82, 172];
export const modules = {
  8128: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      EverythingMenu: () => bu
    });
    var CF = SF(46),
      AF = SF(918),
      uF = SF.n(AF),
      hF = SF(1046),
      bW = SF(929),
      dF = SF(1680),
      PF = SF(983),
      RF = SF(971);

    function iW(FF) {
      let {
        items: WF,
        onClick: SF,
        selectedItemId: CF,
        className: AF,
        padStartsOnTab: iW = !0
      } = FF;
      const {
        t: eF
      } = (0, hF.B)(), EF = (0, PF.j)(), QF = [];
      for (const uF of WF) {
        var rW;
        const FF = QF[QF.length - 1];
        var gW;
        if (FF && FF.title === (null !== (rW = uF.section) && void 0 !== rW ? rW : null)) FF.items.push(uF);
        else QF.push({
          title: null !== (gW = uF.section) && void 0 !== gW ? gW : null,
          items: [uF]
        })
      }
      return (0, RF.jsx)("div", {
        className: uF()("MenuSideBarBody", AF),
        "data-pad-tabs": "2",
        children: QF.map(((FF, WF) => {
          var AF;
          return (0, RF.jsxs)("div", {
            className: "MenuSideBarSection",
            children: [FF.title && (0, RF.jsx)("div", {
              className: "MenuSideBarSectionTitle",
              children: eF(FF.title)
            }), FF.items.map((FF => {
              var WF;
              const AF = !!FF.iconElement || !!FF.faIcon;
              return (0, RF.jsxs)("div", {
                "data-pad-tab": !0,
                "data-pad-selected": CF === FF.id ? "true" : void 0,
                "data-pad-default-focus": iW && CF === FF.id || void 0,
                className: uF()("MenuSideBarBodyTab", {
                  ActiveMenuSideBarBodyTab: CF === FF.id
                }),
                onClick: () => {
                  SF(FF.id)
                },
                children: [AF && (0, RF.jsx)("div", {
                  className: "MenuSideBarBodyTabIcon",
                  children: null !== (WF = FF.iconElement) && void 0 !== WF ? WF : (0, RF.jsx)(bW.e, {
                    name: FF.faIcon
                  })
                }), (!EF || !AF) && (0, RF.jsx)("div", {
                  children: eF(FF.title)
                }), FF.redDot && (0, RF.jsx)(dF.b, {
                  top: "-0.2rem",
                  right: "-1rem"
                })]
              }, FF.id)
            }))]
          }, null !== (AF = FF.title) && void 0 !== AF ? AF : WF)
        }))
      })
    }
    var eF = SF(2279),
      EF = SF(996),
      QF = SF(1955),
      rW = SF(990),
      gW = SF(1266),
      tW = SF(89),
      TF = SF(1576),
      aW = SF(1866),
      kW = SF(1868),
      qW = SF(1504),
      VF = SF(1186),
      NF = SF(3997),
      DF = SF(11),
      LF = SF(8135);

    function mW(FF) {
      let {
        setApplySettingsCallback: WF
      } = FF;
      const {
        clientEscMenuOptions: SF
      } = (0, DF.d)(["clientEscMenuOptions"]), [AF, uF] = (0, CF.useState)(!1), [hF, bW] = (0, CF.useState)(!1), [dF, PF] = (0, CF.useState)(6400), [iW, eF] = (0, CF.useState)(3600), [EF, QF] = (0, CF.useState)(!1), [rW, tW] = (0, CF.useState)(!1);

      function TF(FF) {
        const WF = "screenshot" === FF ? bW : uF;
        WF(!0);
        const SF = EF ? "normals" : rW ? "depth" : null;
        LF.devTools.downloadScene(FF, {
          width: dF,
          height: iW,
          colouring: SF
        }).catch((FF => {
          console.error("Couldn't download the scene", FF)
        })).finally((() => {
          WF(!1)
        }))
      }
      return (0, RF.jsxs)("div", {
        className: "DeveloperToolsCategory",
        children: [(0, RF.jsx)(NF.b, {
          label: "Disable Ambient Occlusion",
          checked: SF.disableAmbientOcclusion,
          onClick: FF => {
            DF.b.setClientEscMenuOptions({
              disableAmbientOcclusion: FF
            }), WF((() => NF.k))
          },
          circleInfoText: "Disables ambient occlusion which is the shadow effect that makes corners and crevices darker."
        }), LF.devTools.supports("ambientLight") && (0, RF.jsx)(NF.j, {
          name: "Ambient Lighting Intensity",
          min: 0,
          max: 1,
          step: .01,
          initValue: SF.ambientLightIntensity,
          onChange: FF => {
            LF.devTools.setAmbientLightIntensity(FF).then((() => {
              DF.b.setClientEscMenuOptions({
                ambientLightIntensity: FF
              })
            })).catch((FF => {
              console.error("Couldn't set the ambient light", FF)
            }))
          },
          circleInfoText: "Sets the intensity of the white ambient light in the scene. The default is 0.5."
        }), LF.devTools.supports("weaponRaycasts") && (0, RF.jsx)(NF.b, {
          label: "Show Weapon Raycasts",
          checked: SF.showWeaponRaycasts,
          onClick: FF => {
            DF.b.setClientEscMenuOptions({
              showWeaponRaycasts: FF
            })
          },
          circleInfoText: "Draws debug lines for the raw raycasts used by locally fired weapons."
        }), LF.devTools.supports("sceneDownload") && (0, RF.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, RF.jsxs)("div", {
            className: "SettingBox WarningBorder",
            children: [(0, RF.jsx)(NF.b, {
              label: "Apply normal-based coloring",
              checked: EF,
              onClick: FF => {
                QF(FF), FF && tW(!1)
              },
              circleInfoText: "Colors faces based on their normal direction (red=X, green=Y, blue=Z)."
            }), (0, RF.jsx)(NF.b, {
              label: "Apply depth-based coloring",
              checked: rW,
              onClick: FF => {
                tW(FF), FF && QF(!1)
              },
              circleInfoText: "Colors from white (near) to black (far) based on distance from camera. Only works for screenshot export."
            }), (0, RF.jsxs)("div", {
              className: "SettingBox DeveloperToolsCategoryScreenshotSettings",
              children: [(0, RF.jsx)("div", {
                className: "SettingLabel",
                children: "Screenshot size in pixels (width x height)"
              }), (0, RF.jsx)(qW.d, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (FF, WF) => {
                  const SF = parseInt(FF) || 6400;
                  PF(SF)
                },
                placeholderText: "width",
                maxLength: 10,
                defaultValue: dF.toString()
              }), (0, RF.jsx)("span", {
                children: "X"
              }), (0, RF.jsx)(qW.d, {
                className: "SettingsTextInput SmallTextLight",
                onValueChange: (FF, WF) => {
                  const SF = parseInt(FF) || 3600;
                  eF(SF)
                },
                placeholderText: "height",
                maxLength: 10,
                defaultValue: iW.toString()
              })]
            }), (0, RF.jsxs)("div", {
              className: "DeveloperToolsCategoryExportButtons",
              children: [(0, RF.jsxs)(gW.e, {
                onClick: () => {
                  TF("screenshot")
                },
                disabled: hF,
                children: [hF && (0, RF.jsx)(VF.c, {}), "Download Screenshot"]
              }), (0, RF.jsxs)(gW.e, {
                onClick: () => {
                  TF("glb")
                },
                disabled: AF,
                children: [AF && (0, RF.jsx)(VF.c, {}), "Download GLB"]
              })]
            })]
          }), (0, RF.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: 'To download GLB of scene with textures you need to "Disable Block Texture Atlas" in graphic settings first (you will need to reload the page to apply the setting).'
          })]
        })]
      })
    }
    var OF = SF(1110),
      xW = SF(1189),
      ZF = SF(132),
      oF = SF(1001),
      YF = SF(1056),
      MF = SF(1168),
      cW = SF(2284),
      GF = SF(1352),
      zW = SF(1126),
      IF = SF(1099),
      fF = SF(2312),
      yW = SF(1667),
      sF = SF(1336),
      nF = SF(271),
      HF = SF(1875),
      KF = SF(1510),
      wF = SF(1198),
      XF = SF(1070),
      UF = SF(3886),
      BF = SF(1307),
      jW = SF(2843),
      vW = SF(2116),
      JF = SF(1852);

    function pF(FF) {
      let {
        showing: WF
      } = FF;
      const {
        t: SF
      } = (0, hF.B)(), {
        data: CF,
        failed: AF
      } = (0, vW.g)(jW.f, WF);
      return 0 === (null === CF || void 0 === CF ? void 0 : CF.length) || null === CF && !AF ? null : (0, RF.jsxs)("div", {
        className: "SettingBox AccountSettingsPaymentHistory",
        children: [(0, RF.jsx)("div", {
          className: "AccountSettingsLabel",
          children: SF("paymentHistory:title")
        }), null === CF && AF && (0, RF.jsx)("div", {
          className: "AccountSettingsPaymentHistoryError",
          children: SF("paymentHistory:loadFailed")
        }), null !== CF && (0, RF.jsx)("ul", {
          className: "PaymentHistoryList",
          children: CF.map((FF => (0, RF.jsxs)("li", {
            className: "PaymentHistoryEntry",
            children: [(0, RF.jsx)(JF.e, {
              entry: FF
            }), (0, RF.jsxs)("div", {
              className: "PaymentHistoryEntryText",
              children: [(0, RF.jsx)("div", {
                children: (0, JF.m)(SF, FF)
              }), (0, RF.jsxs)("div", {
                className: "PaymentHistoryEntryDate",
                children: [new Date(FF.at).toLocaleDateString(), "number" === typeof FF.orderId && ` \xb7 ${SF("paymentHistory:order",{orderId:FF.orderId})}`]
              })]
            })]
          }, (0, jW.d)(FF))))
        })]
      })
    }
    var lF = SF(2777),
      FW = SF(2791),
      WW = SF(2787);

    function SW(FF) {
      let {
        showing: WF
      } = FF;
      const {
        t: SF
      } = (0, hF.B)(), {
        data: CF,
        failed: AF
      } = (0, vW.g)(lF.d, WF), uF = null === CF ? null : (0, lF.f)(CF);
      return (0, RF.jsxs)("div", {
        className: "SettingBox BlockedAndIgnoredPlayers",
        children: [(0, RF.jsx)("div", {
          className: "AccountSettingsLabel",
          children: SF("settingsMenu:blockedAndIgnoredPlayers")
        }), null === uF && !AF && (0, RF.jsx)(VF.c, {}), null === uF && AF && (0, RF.jsxs)("div", {
          className: "BlockedAndIgnoredPlayersError",
          children: [SF("settingsMenu:blockedAndIgnoredPlayersLoadFailed"), (0, RF.jsx)(gW.e, {
            className: "SmallTextLight",
            onClick: () => {
              lF.d.refresh()
            },
            children: SF("general:tryAgain")
          })]
        }), 0 === (null === uF || void 0 === uF ? void 0 : uF.length) && (0, RF.jsx)("div", {
          className: "BlockedAndIgnoredPlayersEmpty",
          children: SF("settingsMenu:noBlockedOrIgnoredPlayers")
        }), null !== uF && uF.length > 0 && (0, RF.jsx)("ul", {
          className: "BlockedAndIgnoredPlayersList",
          children: uF.map((FF => {
            let {
              name: WF,
              exclusion: CF
            } = FF;
            const AF = WW.e[CF];
            return (0, RF.jsxs)("li", {
              className: "BlockedAndIgnoredPlayer",
              children: [(0, RF.jsx)("div", {
                className: "BlockedAndIgnoredPlayerName",
                children: WF
              }), (0, RF.jsx)(gW.f, {
                className: "SmallTextLight",
                onClick: () => {
                  (0, FW.g)(AF, WF)
                },
                children: SF(WW.f[AF].text)
              })]
            }, WF)
          }))
        })]
      })
    }
    const CW = (0, CF.memo)((function(FF) {
      var WF;
      let {
        showing: SF,
        inGame: AF
      } = FF;
      const {
        t: dF
      } = (0, hF.B)(), {
        reactNativeFeatureFlags: PF,
        hideSocialLocationFrom: iW
      } = (0, DF.d)(["reactNativeFeatureFlags", "hideSocialLocationFrom"]), QF = (0, eF.d)(), {
        userContext: rW,
        isUserContextUpdating: TF
      } = (0, EF.b)(), [aW, kW] = (0, CF.useState)(null !== (WF = rW.getPlayerName()) && void 0 !== WF ? WF : ""), [LF, mW] = (0, CF.useState)(null), {
        purchasing: OF,
        outcome: xW,
        purchase: MF
      } = (0, cW.b)("/super-rank-welcome"), [jW, vW] = (0, CF.useState)(!1), [JF, lF] = (0, CF.useState)(!1), FW = (0, CF.useRef)(null), WW = (0, CF.useRef)(null), CW = (0, yW.f)({
        showProgressUpdateMessage: !0,
        enabled: !0
      }), uW = null === CW, hW = null !== CW && void 0 !== CW ? CW : [], [bS, dW] = (0, CF.useState)([]), [PW, RW] = (0, CF.useState)(!1), iS = rW.playerHasRank("youtuber"), eW = (0, CF.useCallback)((() => sF.b.getPlayerProfile(rW, {
        lowerCaseName: rW.getPlayerName().toLowerCase()
      }).then((FF => {
        dW(FF.socialLinks)
      })).catch((FF => {
        console.error("Failed to refresh social links", FF)
      }))), [rW]);

      function EW(FF) {
        FF !== aW && ((0, zW.l)(FF) ? (FF = (0, zW.n)(FF), mW("Only letters, numbers, and _")) : mW(null), FW.current && (FW.current.value = FF), kW(FF))
      }
      return (0, CF.useEffect)((() => (!0 === SF ? (clearInterval(WW.current), WW.current = setInterval(QF, 1e3)) : clearInterval(WW.current), () => {
        clearInterval(WW.current)
      })), [SF, QF]), (0, CF.useEffect)((() => {
        var FF;
        kW(null !== (FF = rW.getPlayerName()) && void 0 !== FF ? FF : "")
      }), [rW]), (0, CF.useEffect)((() => {
        if (!SF || !iS || TF) return;
        let FF = !1;
        return RW(!0), dW([]), sF.b.getPlayerProfile(rW, {
          lowerCaseName: rW.getPlayerName().toLowerCase()
        }).then((WF => {
          FF || dW(WF.socialLinks)
        })).catch((FF => {
          console.error("Failed to load social links", FF)
        })).finally((() => {
          FF || RW(!1)
        })), () => {
          FF = !0
        }
      }), [SF, iS, TF, rW]), (0, RF.jsxs)("div", {
        className: uF()("SettingsMenuRightInner AccountSettings", {
          AccountSettingsLocked: AF
        }),
        children: [AF && (0, RF.jsx)("div", {
          className: "AccountSettingsInGameWarning",
          children: dF("settingsMenu:accountSettingsInGameWarning")
        }), (0, RF.jsxs)("div", {
          className: "SettingBox SetAccountNameDiv SmallTextLight",
          children: [(0, RF.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsNameLabel",
            children: [dF("homePage:discordNamePopupTitle"), (0, RF.jsxs)(GF.LinkPreserveSearch, {
              className: "AccountSettingsViewProfile",
              to: (0, IF.j)({
                name: rW.getPlayerName()
              }),
              onClick: () => {
                DF.b.set({
                  openEverythingMenuName: null
                })
              },
              children: [(0, RF.jsx)(bW.e, {
                name: "arrow-up-right-from-square"
              }), " ", dF("profileCard:viewProfile")]
            })]
          }), (0, RF.jsxs)("div", {
            className: "EnterAccNameDivWrapper",
            "data-pad-initial-area": !0,
            children: [(0, RF.jsxs)("div", {
              className: "EnterAccNameInputRow",
              children: [tW.featureFlags.canChangeName && (0, RF.jsx)(qW.d, {
                className: "EnterName",
                placeholderText: dF("homePage:enterName"),
                maxLength: zW.i,
                defaultValue: aW,
                onValueChange: FF => {
                  EW(FF)
                },
                forcedText: jW || !tW.featureFlags.canChangeName ? aW : null,
                blurOnEnter: !0,
                domRef: FW
              }), (0, RF.jsx)(gW.e, {
                className: "ChooseRandomNameButton",
                onClick: () => {
                  EW((0, zW.f)())
                },
                children: (0, RF.jsx)(bW.e, {
                  name: "dice",
                  className: "ChooseRandomNameIcon"
                })
              }), !tW.featureFlags.canChangeName && (0, RF.jsx)("div", {
                className: "EnterName NoInput",
                children: (0, zW.c)(aW, !tW.featureFlags.canSeeRealPlayerNames)
              })]
            }), (0, RF.jsx)(gW.e, {
              className: "ChooseNameButton",
              disabled: jW || aW === rW.getPlayerName(),
              onClick: () => {
                aW.length < zW.k ? mW(dF("homePage:changeNameMinLengthError", {
                  length: zW.k
                })) : aW.length > zW.i ? mW(dF("homePage:changeNameMaxLengthError", {
                  length: zW.i
                })) : (vW(!0), mW(null), async function(FF, WF, SF, CF) {
                  const AF = await (0, oF.postJsonWithMetricsCookiesAndJsonResponse)(`${YF.clientSideServerUrls.indexUrl}/index/name/update`, {
                    name: FF
                  }, {
                    retries: 3
                  }, WF.getMetricsCookies()).catch((FF => (console.error("Bad response from the server when trying to update name:", FF), {
                    err: "An error occurred trying to change your name! Please report on discord what steps you took to get this error message."
                  })));
                  AF.err ? (console.error("Error when trying to get with new name from DB", AF.err), CF(AF.err)) : !0 === AF.nameExists ? CF("Name is already taken") : SF(FF)
                }(aW, rW, (FF => {
                  rW.setPlayerName(FF), vW(!1)
                }), (FF => {
                  mW(FF), vW(!1)
                })))
              },
              children: dF("general:choose")
            })]
          }), LF && (0, RF.jsx)("div", {
            className: "ChooseAccNameError",
            children: LF
          })]
        }), (0, RF.jsx)(NF.b, {
          label: (() => {
            if ((0, XF.p)(iW)) {
              const {
                amt: FF,
                unit: WF
              } = (0, nF.eb)(Date.now(), iW + XF.l);
              return `${dF("settingsMenu:hideSocialLocation")} (${dF("general:timeLeft",{time:`${FF} ${WF}`})})`
            }
            return dF("settingsMenu:hideSocialLocation")
          })(),
          onClick: () => {
            const FF = !(0, XF.p)(iW);
            (0, BF.d)({
              id: "social.hide_location",
              value: FF ? "on" : "off"
            }), lF(!0), sF.b.setHideSocialLocation(rW, FF).then((() => {
              DF.b.set({
                hideSocialLocationFrom: FF ? Date.now() : null
              })
            })).finally((() => {
              lF(!1)
            }))
          },
          checked: (0, XF.p)(iW),
          disabled: JF
        }), iS && (0, RF.jsxs)("div", {
          className: "SettingBox AccountSettingsSocialLinks",
          children: [(0, RF.jsx)("div", {
            className: "AccountSettingsLabel",
            children: dF("settingsMenu:socialLinks")
          }), PW && (0, RF.jsx)(VF.c, {}), !PW && (0, RF.jsx)(UF.d, {
            socialLinks: bS,
            editable: !0,
            userContext: rW,
            onLinksUpdated: eW
          })]
        }), (0, RF.jsxs)("div", {
          className: "SettingBox",
          children: [(0, RF.jsx)("div", {
            className: "AccountSettingsLabel",
            children: dF("auth:login")
          }), uW && (0, RF.jsx)(VF.c, {}), !uW && 0 === hW.length && (0, RF.jsx)("div", {
            className: "NoLoginOptions",
            children: dF("auth:noLoginOptions")
          }), !uW && hW.length > 0 && "crazygames" !== ZF.s && (0, RF.jsx)("div", {
            className: "AccountSettingsLoginButtons",
            children: hW
          }), !uW && hW.length > 0 && "crazygames" === ZF.s && (0, RF.jsxs)("div", {
            className: "AccountSettingsLoginButtons",
            children: [hW[0], hW.length > 1 && (0, RF.jsxs)(RF.Fragment, {
              children: [(0, RF.jsxs)("div", {
                className: "LegacyLoginOptionsHeader",
                children: [(0, RF.jsx)("span", {
                  className: "LegacyLoginOptionsTitle",
                  children: dF("auth:legacyLoginOptions")
                }), (0, RF.jsx)(wF.e, {
                  className: "LegacyLoginOptionsInfoIcon",
                  hoverInfo: dF("auth:legacyLoginOptionsInfo")
                })]
              }), (0, RF.jsx)("div", {
                className: "LegacyAccountSettingsLoginButtons",
                children: hW.slice(1)
              })]
            })]
          }), tW.featureFlags.useLogin && PF.useLogin && (null !== rW.loggedInInfo || rW.isLoggedIn()) && (0, RF.jsxs)(RF.Fragment, {
            children: [(0, RF.jsx)("div", {
              className: "AccountSettingsLoginDivider"
            }), (0, RF.jsx)(gW.E, {
              onClick: () => {
                (0, oF.forceGlobalSignOut)()
              },
              className: "AccountSettingsSignedInButton",
              children: dF("auth:signOut")
            })]
          })]
        }), !rW.playerHasRank("super") && (0, KF.siteSupportsPurchases)() && (0, RF.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, RF.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: [(0, RF.jsx)(bW.e, {
              name: "bolt"
            }), dF("homePage:superRank")]
          }), (0, RF.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [(0, RF.jsxs)(gW.k, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, HF.i)({
                  mode: "self",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, RF.jsx)(bW.e, {
                name: "bolt"
              }), dF("homePage:getSuperRank")]
            }), (0, RF.jsxs)(gW.k, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, HF.i)({
                  mode: "gift",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, RF.jsx)(bW.e, {
                name: "bolt"
              }), dF("homePage:giftSuperRank")]
            })]
          })]
        }), rW.playerHasRank("super") && (0, RF.jsxs)("div", {
          className: "SettingBox AccountSettingsSuperRank",
          children: [(0, RF.jsxs)("div", {
            className: "AccountSettingsLabel AccountSettingsLabelSuperRank",
            children: [(0, RF.jsx)(bW.e, {
              name: "bolt"
            }), dF("homePage:superRank"), (0, RF.jsxs)("div", {
              className: "AccountSettingsSuperRankTimeLeft",
              children: ["(", dF("general:timeLeft", {
                time: (0, nF.ic)(rW.superRankInfo)
              }), ")"]
            })]
          }), (0, KF.siteSupportsPurchases)() && (0, RF.jsxs)("div", {
            className: "AccountSettingsSuperRankProlongContainer",
            children: [(0, RF.jsxs)(gW.k, {
              className: "AccountSettingsSuperRankProlong",
              loading: OF,
              onClick: () => {
                MF(fF.i.id, null)
              },
              children: [(0, RF.jsx)(bW.e, {
                name: "bolt"
              }), dF("settingsMenu:getSuperRankAdditionalDaysPremiumCurrency", {
                days: fF.i.product.days,
                price: fF.i.price
              })]
            }), (0, RF.jsxs)(gW.k, {
              className: "AccountSettingsSuperRankProlong",
              onClick: () => {
                (0, HF.i)({
                  mode: "gift",
                  source: "accountSettings",
                  openItem: "superRank"
                })
              },
              children: [(0, RF.jsx)(bW.e, {
                name: "bolt"
              }), dF("homePage:giftSuperRank")]
            })]
          }), xW && (0, RF.jsx)("div", {
            className: "AccountSettingsSuperRankProlongError SmallTextBold",
            children: dF(xW.translationKey)
          })]
        }), (0, RF.jsx)(pF, {
          showing: SF
        }), tW.featureFlags.useSocialFeatures && (0, RF.jsx)(SW, {
          showing: SF
        }), (0, RF.jsxs)("div", {
          className: "SettingBoxGroup AccountSettingsDeleteAccountGroup",
          children: [(0, RF.jsxs)("div", {
            className: "SettingBox AccountSettingsDeleteAccount SettingBoxWarning",
            children: [(0, RF.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: dF("auth:deleteAccountButtonTitle")
            }), (0, ZF.d)() && (0, RF.jsx)("div", {
              className: "AccountSettingsDeleteAccountButtonTitle",
              children: dF("auth:discordActivityKickWarning")
            }), (0, RF.jsx)(AW, {})]
          }), (0, RF.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: dF("auth:deleteAccountWarning")
          })]
        })]
      })
    }));

    function AW() {
      const {
        userContext: FF,
        isUserContextUpdating: WF
      } = (0, EF.b)(), {
        t: SF
      } = (0, hF.B)(), [AF, uF] = (0, CF.useState)(!1), [bW, dF] = (0, CF.useState)(null), PF = WF || AF;
      return (0, RF.jsxs)("div", {
        className: "AccountSettingsDeleteAccountButtonContainer",
        children: [(0, RF.jsxs)(gW.E, {
          onClick: async function() {
            if (!AF) {
              uF(!0);
              try {
                const WF = await async function() {
                  if (!await xW.NotificationProvider.showPromptPopup({
                      title: "auth:deleteAccountPopupTitleNamed",
                      textOpts: {
                        title: {
                          playerName: (0, zW.c)(FF.getPlayerName(), !tW.featureFlags.canSeeRealPlayerNames)
                        }
                      },
                      subtitle: (0, ZF.d)() ? "auth:discordActivityDeleteAccountWarning" : "auth:deleteAccountWarning",
                      confirmText: "auth:deleteAccount",
                      destructive: !0,
                      confirmTooltip: "auth:deleteAccountPopupConfirmTooltip",
                      cancelText: "general:cancel",
                      cancelTooltip: "auth:deleteAccountPopupCancelTooltip"
                    }).getResult()) return OF.d.ok();
                  const WF = await (0, oF.postJsonWithMetricsCookiesAndJsonResponse)(`${YF.clientSideServerUrls.indexUrl}/index/metrics/revoke-cookies`, {}, {
                    retries: 3
                  }, FF.getMetricsCookies());
                  if (WF.error) return OF.d.error(WF.error);
                  (0, ZF.d)() && (await MF.n.discordActivity()).exit("User deleted their account");
                  return (0, oF.forgetStoredGuestAccount)(FF.whamm), (0, oF.forceGlobalSignOut)(!0), OF.d.ok()
                }(), SF = WF.isError() ? WF.asError().message : null;
                dF(SF)
              } catch (WF) {
                console.error("Failed to delete account:", WF), dF(SF("auth:genericDeleteAccountError"))
              }
              uF(!1)
            }
          },
          className: "AccountSettingsDeleteAccountButton",
          disabled: PF,
          children: [PF && (0, RF.jsx)("div", {
            className: "DeletingAccountLoader",
            children: (0, RF.jsx)(VF.c, {})
          }), SF("auth:deleteAccount")]
        }), bW && (0, RF.jsx)("div", {
          className: "DeleteAccountError",
          children: bW
        })]
      })
    }
    var uW = SF(8153),
      hW = SF(2332),
      bS = SF(1115),
      dW = SF(1249);
    const PW = (0, CF.memo)((function(FF) {
        let {
          inGame: WF
        } = FF;
        const {
          t: SF,
          selectedLanguage: CF
        } = (0, hF.B)(), {
          clientEscMenuOptions: AF,
          showDebugOverlay: uF
        } = (0, DF.d)(["clientEscMenuOptions", "showDebugOverlay"]), bW = (0, QF.k)("hideCoordinates");
        let dF = "settingsMenu:showCoordinates",
          PF = "settingsMenu:showChunkCoordinates";

        function iW(FF) {
          const WF = new Intl.DisplayNames([FF], {
            type: "language"
          }).of(FF);
          return WF.charAt(0).toUpperCase() + WF.slice(1)
        }
        return bW && (dF = "settingsMenu:showCoordinatesHidden", PF = "settingsMenu:showChunkCoordinatesHidden"), (0, RF.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [WF && tW.featureFlags.canUseInviteLinks && (0, RF.jsxs)("div", {
            className: "SettingBox",
            children: [(0, RF.jsx)("div", {
              className: "SettingsMenuInviteHeader",
              children: SF("settingsMenu:inviteLink")
            }), (0, RF.jsx)(uW.g, {})]
          }), (0, RF.jsxs)("div", {
            className: "SettingBox",
            children: [(0, RF.jsx)("div", {
              className: "SliderText",
              style: {
                marginBottom: "10px"
              },
              children: SF("settingsMenu:language")
            }), (0, RF.jsx)(hW.c, {
              options: Object.entries(hF.i).map((FF => {
                let [WF, SF] = FF;
                return {
                  label: (0, RF.jsxs)("div", {
                    className: "SettingsMenuLanguageOption",
                    children: [(0, RF.jsx)("img", {
                      src: SF.flagImg,
                      alt: "flag"
                    }), (0, RF.jsxs)("span", {
                      children: [iW(WF), " ", (0, RF.jsxs)("span", {
                        className: "SettingsMenuLanguageOptionCode",
                        children: ["(", WF, ")"]
                      })]
                    })]
                  }),
                  value: WF
                }
              })),
              value: CF.code,
              onChange: FF => {
                bS.h.get().setCurrentLanguage(FF.value)
              }
            })]
          }), !(0, tW.isMobile)() && (0, dW.d)() && tW.featureFlags.useForceRotateForceFullscreenOverlay && (0, RF.jsx)(NF.b, {
            label: SF("settingsMenu:disableFullscreenMode"),
            checked: AF.disableFullscreen,
            onClick: FF => {
              DF.b.setClientEscMenuOptions({
                disableFullscreen: FF
              })
            }
          }), (0, RF.jsx)(NF.b, {
            label: SF(dF),
            checked: AF.showCoordinates,
            onClick: FF => {
              DF.b.setClientEscMenuOptions({
                showCoordinates: FF
              })
            },
            disabled: bW
          }), (0, RF.jsx)(NF.b, {
            label: SF(PF),
            checked: AF.showChunkCoordinates,
            onClick: FF => {
              DF.b.setClientEscMenuOptions({
                showChunkCoordinates: FF
              })
            },
            disabled: bW
          }), (0, RF.jsx)(NF.b, {
            label: SF("settingsMenu:showFps"),
            checked: AF.showFPS,
            onClick: FF => {
              DF.b.setClientEscMenuOptions({
                showFPS: FF
              })
            }
          }), (0, RF.jsx)(NF.b, {
            label: SF("settingsMenu:disableBunnyHopping"),
            checked: AF.disableBunnyHopping,
            onClick: FF => {
              DF.b.setClientEscMenuOptions({
                disableBunnyHopping: FF
              })
            }
          }), (0, MF.A)() && (0, RF.jsx)(NF.b, {
            label: SF("settingsMenu:showChat"),
            checked: AF.showChat,
            onClick: FF => {
              DF.b.setClientEscMenuOptions({
                showChat: FF
              })
            }
          }), (0, RF.jsx)(NF.b, {
            label: SF("settingsMenu:showDebugOverlay"),
            checked: uF,
            onClick: FF => {
              DF.b.set({
                showDebugOverlay: FF
              })
            }
          }), tW.featureFlags.useSocialFeatures && (0, RF.jsx)(NF.b, {
            label: SF("settingsMenu:showFriendOnlineToasts"),
            checked: AF.showFriendOnlineToasts,
            onClick: FF => {
              DF.b.setClientEscMenuOptions({
                showFriendOnlineToasts: FF
              })
            }
          }), (0, RF.jsx)(NF.b, {
            label: SF("settingsMenu:showNewItemIndicator"),
            checked: AF.showNewItemIndicator,
            onClick: FF => {
              DF.b.setClientEscMenuOptions({
                showNewItemIndicator: FF
              })
            }
          })]
        })
      })),
      RW = (0, CF.memo)((function() {
        const {
          t: FF
        } = (0, hF.B)(), {
          soundVolume: WF,
          musicVolume: SF
        } = (0, DF.d)(["soundVolume", "musicVolume"]);
        return (0, RF.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [(0, RF.jsx)(NF.j, {
            name: FF("settingsMenu:musicVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: SF,
            onChange: FF => {
              DF.b.set({
                musicVolume: Math.round(100 * FF) / 100
              })
            },
            format: FF => FF.toFixed(2)
          }), (0, RF.jsx)(NF.j, {
            name: FF("settingsMenu:soundEffectsVolume"),
            min: 0,
            max: 1,
            step: .01,
            initValue: WF,
            onChange: FF => {
              DF.b.set({
                soundVolume: Math.round(100 * FF) / 100
              })
            },
            format: FF => FF.toFixed(2)
          })]
        })
      }));
    var iS = SF(254),
      eW = SF(1262),
      EW = SF(2857),
      QW = SF(8157),
      rS = SF(2663);
    const gS = {
      app: "notificationSettings:pushTargetsApp",
      browser: "notificationSettings:pushTargetsBrowser",
      msnPlay: "notificationSettings:pushTargetsMsnPlay"
    };

    function tS() {
      const {
        t: FF
      } = (0, hF.B)(), WF = (0, rS.d)(), {
        mobilePushNotificationsCanAsk: SF
      } = (0, DF.d)(["mobilePushNotificationsCanAsk"]), [AF, uF] = (0, CF.useState)(null), [bW, dF] = (0, CF.useState)(!1), [PF, iW] = (0, CF.useState)(null), [eF, EF] = (0, CF.useState)(!1), QF = (0, CF.useCallback)((() => {
        (0, EW.b)().then((FF => {
          WF.current && (uF(FF), dF(!1))
        })).catch((FF => {
          console.error("Failed to load push notification targets:", FF), WF.current && dF(!0)
        }))
      }), [WF]), rW = (0, CF.useCallback)((() => {
        (0, QW.c)().then((FF => {
          WF.current && iW((() => FF))
        }))
      }), [WF]);
      (0, CF.useEffect)((() => {
        QF()
      }), [QF]), (0, CF.useEffect)((() => {
        rW()
      }), [rW, SF]), (0, eW.e)(EW.h, QF);
      const tW = null === AF ? [] : Object.keys(gS).filter((FF => AF[FF] > 0));
      return (0, RF.jsxs)("div", {
        className: "SettingBox PushNotificationSettings",
        children: [(0, RF.jsx)("div", {
          className: "SliderText",
          children: FF("notificationSettings:pushNotifications")
        }), null === AF && bW && (0, RF.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: FF("notificationSettings:pushTargetsLoadFailed")
        }), null !== AF && 0 === tW.length && (0, RF.jsx)("div", {
          className: "PushNotificationSettingsText",
          children: FF("notificationSettings:pushTargetsNone")
        }), tW.length > 0 && (0, RF.jsx)("ul", {
          className: "PushNotificationSettingsTargets",
          children: tW.map((WF => {
            var SF;
            return (0, RF.jsx)("li", {
              children: FF(gS[WF], {
                count: null !== (SF = null === AF || void 0 === AF ? void 0 : AF[WF]) && void 0 !== SF ? SF : 0
              })
            }, WF)
          }))
        }), null !== PF && (0, RF.jsx)(gW.e, {
          className: "PushNotificationSettingsButton",
          loading: eF,
          onClick: () => {
            EF(!0), PF().catch((FF => {
              console.error("Failed to turn on push notifications:", FF)
            })).finally((() => {
              WF.current && (EF(!1), rW())
            }))
          },
          children: FF("notificationSettings:pushTurnOn")
        })]
      })
    }
    const TW = {
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
      aS = (0, CF.memo)((function() {
        const {
          t: FF
        } = (0, hF.B)(), {
          clientEscMenuOptions: WF
        } = (0, DF.d)(["clientEscMenuOptions"]);
        return (0, RF.jsxs)("div", {
          className: "SettingsMenuRightInner",
          children: [(0, RF.jsx)(NF.f, {
            label: FF("notificationSettings:friendRequests"),
            options: iS.e.map((WF => ({
              value: WF,
              label: FF(TW[WF].label)
            }))),
            value: WF.friendRequestNotifications,
            onChange: FF => {
              DF.b.setClientEscMenuOptions({
                friendRequestNotifications: FF
              })
            },
            circleInfoText: (0, RF.jsx)("div", {
              className: "NotificationSettingLevelsInfo",
              children: iS.e.map((WF => (0, RF.jsxs)("div", {
                children: [(0, RF.jsx)("b", {
                  children: FF(TW[WF].label)
                }), ": ", FF(TW[WF].info)]
              }, WF)))
            })
          }), (0, RF.jsx)(tS, {})]
        })
      }));
    var kS = SF(3600),
      qS = SF(161),
      VW = SF(211),
      NW = SF(5630),
      DW = SF(2591),
      LW = SF(8166),
      mS = SF(568),
      OW = SF(20);
    var xS = SF(234),
      ZW = SF(33);
    const oW = new Map([
      ["chunkHorizAddDist", "horizontal"],
      ["chunkVertAddDist", "vertical"]
    ]);

    function YW(FF) {
      return oW.has(FF) ? TF.gameBridge.lookup("lD", null) : null
    }

    function MW(FF) {
      if (!(0, mS.Q)(DF.b.get("clientEscMenuOptions")[FF])) return DF.b.get("clientEscMenuOptions")[FF];
      const WF = YW(FF);
      return null !== WF ? WF[oW.get(FF)] : ZW.h.getItem(FF)
    }

    function cS(FF, WF) {
      if ("useTouchControls" === FF) return void DF.b.set({
        isTouchScreen: WF
      });
      FF in DF.b.get("clientEscMenuOptions") && DF.b.setClientEscMenuOptions({
        [FF]: WF
      });
      const SF = YW(FF);
      null !== SF && TF.gameBridge.send("setChunkAddDistance", {
        ...SF,
        [oW.get(FF)]: WF
      }), ZW.h.setItem(FF, WF)
    }
    var GW = SF(8172),
      zS = SF(8176),
      IW = SF(8178),
      fW = SF(3589);

    function yS(FF) {
      var WF, AF, bW, dF;
      let {
        minChunkAddDist: PF,
        getValue: iW,
        onChange: eF,
        setApplySettingsCallback: EF
      } = FF;
      const {
        t: rW
      } = (0, hF.B)(), {
        clientEscMenuOptions: gW
      } = (0, DF.d)(["clientEscMenuOptions", "showDistantNametags"]), TF = (0, CF.useRef)(iW("showFog")), aW = (0, CF.useRef)(gW.antiAliasing), kW = (0, CF.useRef)(gW.useWebGpu), [qW, VF] = (0, CF.useState)(null), [mW, OF] = (0, CF.useState)((() => (0, DW.i)(tW.featureFlags.settings.canUseShaderPacks))), [xW] = (0, CF.useState)((() => DF.b.isWebGpuDefaultOff())), [ZF] = (0, CF.useState)(VW.i);
      (0, CF.useEffect)((() => {
        let FF = !1;
        return (0, tW.hasUsableWebGpuAdapter)().then((WF => {
          FF || VF(WF)
        })), (0, DW.n)(tW.featureFlags.settings.canUseShaderPacks) && (0, NW.f)().then((async WF => {
          const CF = null !== WF && await async function(FF) {
            const [{
              isShaderPackActive: WF
            }, {
              loadPageShaderPackCompiler: CF
            }] = await Promise.all([SF.e(113).then((() => SF(5626))), Promise.all([SF.e(120), SF.e(117), SF.e(116)]).then((() => SF(5589)))]);
            return WF(FF, await CF())
          }(WF);
          FF || OF(CF)
        })), () => {
          FF = !0
        }
      }), []);
      const oF = function(FF, WF, SF, CF, AF) {
          return (0, LW.c)(SF, CF) && !0 === WF ? {
            translationKey: "settingsMenu:newWebGpuForcedOnByShaderPack",
            checked: !0,
            disabled: !0
          } : {
            translationKey: !1 !== WF ? "settingsMenu:newWebGpu" : AF ? "settingsMenu:newWebGpuDisabledUntilRestart" : "settingsMenu:newWebGpuUnsupported",
            checked: FF && !1 !== WF,
            disabled: !0 !== WF
          }
        }(gW.useWebGpu, qW, mW, xW, ZF),
        YF = (gW.useWebGpu || (0, LW.c)(mW, xW)) && mW && !0 === qW,
        MF = (0, QF.k)("lightingOverride"),
        cW = !(0, mS.Q)(MF);
      let GF = "settingsMenu:enableLighting";
      cW && (GF = MF ? "settingsMenu:enableLightingForcedOn" : "settingsMenu:enableLightingForcedOff");
      const zW = FF => {
          var WF, SF, CF;
          const AF = null !== (WF = FF.showFog) && void 0 !== WF ? WF : iW("showFog"),
            uF = null !== (SF = FF.antiAliasing) && void 0 !== SF ? SF : gW.antiAliasing,
            hF = null !== (CF = FF.useWebGpu) && void 0 !== CF ? CF : gW.useWebGpu,
            bW = !xS.h && AF !== TF.current || uF !== aW.current || hF !== kW.current;
          EF(bW ? () => NF.k : null)
        },
        IF = (0, QF.k)("fogChunkDistanceOverride"),
        fF = (0, QF.k)("fogBlockDistanceOverride"),
        yW = !(0, mS.Q)(IF) || !(0, mS.Q)(fF),
        sF = yW ? "settingsMenu:showFogForcedOn" : "settingsMenu:showFog",
        [nF, HF] = (0, kS.h)(PF),
        [KF, wF] = (0, fW.h)(PF),
        XF = rW("settingsMenu:chunkLoadDistanceDeviceLimit"),
        UF = KF < nF,
        BF = Math.min(null !== (WF = iW("chunkHorizAddDist")) && void 0 !== WF ? WF : PF[0], KF),
        jW = !yW && function(FF, WF) {
          return !0 === FF.showFog && FF.fogChunkDistance > WF
        }(gW, BF);
      return (0, RF.jsxs)("div", {
        className: "SettingsMenuRightInner",
        children: [(0, RF.jsx)(NF.j, {
          name: rW("settingsMenu:horizontalChunkLoadDistance"),
          min: PF[0],
          max: nF,
          selectableMax: KF,
          cappedNote: XF,
          step: 1,
          initValue: BF,
          onChange: FF => {
            !0 === iW("showFog") && FF < iW("fogChunkDistance") && eF("fogChunkDistance", FF), eF("chunkHorizAddDist", FF), OW.j.Uu("updatedChunkLoadDist")
          },
          circleInfoText: rW("settingsMenu:chunkLoadDistanceInfo")
        }), (0, RF.jsx)(NF.j, {
          name: rW("settingsMenu:verticalChunkLoadDistance"),
          min: PF[1],
          max: HF,
          selectableMax: wF,
          cappedNote: UF ? void 0 : XF,
          step: 1,
          initValue: Math.min(null !== (AF = iW("chunkVertAddDist")) && void 0 !== AF ? AF : PF[1], wF),
          onChange: FF => {
            eF("chunkVertAddDist", FF), OW.j.Uu("updatedChunkLoadDist")
          },
          circleInfoText: rW("settingsMenu:chunkLoadDistanceInfo"),
          className: "VerticalChunkLoadSlider"
        }), (0, RF.jsx)(NF.b, {
          label: rW("settingsMenu:chunkFadeIn"),
          checked: gW.chunkFadeIn,
          onClick: FF => {
            DF.b.setClientEscMenuOptions({
              chunkFadeIn: FF
            })
          },
          circleInfoText: rW("settingsMenu:chunkFadeInInfo")
        }), LF.devTools.supports("chunkBorders") && (0, RF.jsx)(NF.b, {
          label: rW("settingsMenu:showChunkBorders"),
          checked: gW.showChunkBorders,
          onClick: FF => {
            DF.b.setClientEscMenuOptions({
              showChunkBorders: FF
            })
          },
          circleInfoText: rW("settingsMenu:showChunkBordersInfo")
        }), (0, RF.jsx)(NF.b, {
          label: rW(GF),
          checked: gW.enableLighting,
          onClick: FF => {
            DF.b.setClientEscMenuOptions({
              enableLighting: FF
            })
          },
          disabled: cW
        }), (0, RF.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, RF.jsx)(NF.b, {
            label: rW(sF),
            checked: gW.showFog,
            onClick: FF => {
              zW({
                showFog: FF
              }), DF.b.setClientEscMenuOptions({
                showFog: FF
              })
            },
            disabled: yW,
            className: uF()({
              SettingBoxWarning: jW
            })
          }), (0, RF.jsx)(NF.j, {
            name: rW("settingsMenu:fogChunkDistance"),
            min: PF[0],
            max: qS.h.maxChunkHorizAddDistance,
            step: 1,
            initValue: null !== (bW = gW.fogChunkDistance) && void 0 !== bW ? bW : PF[0],
            onChange: FF => {
              DF.b.setClientEscMenuOptions({
                fogChunkDistance: FF
              }), OW.j.Uu("fogChunkDistanceChanged", FF)
            },
            circleInfoText: rW("settingsMenu:fogChunkDistanceInfo"),
            disabled: yW || !1 === iW("showFog"),
            className: uF()({
              SettingBoxWarning: jW
            })
          }), jW && (0, RF.jsx)("div", {
            className: "SettingBox SettingsBoxWarning",
            children: rW("settingsMenu:fogChunkDistanceInfo")
          })]
        }), !xS.h && (0, RF.jsx)(NF.b, {
          label: rW(YF ? "settingsMenu:disableBlockTextureAtlasUnavailableWithShaderPack" : "settingsMenu:disableBlockTextureAtlas"),
          checked: !YF && gW.disableTexAtlas,
          onClick: FF => {
            DF.b.setClientEscMenuOptions({
              disableTexAtlas: FF
            })
          },
          circleInfoText: rW("settingsMenu:disableBlockTextureAtlasInfo"),
          disabled: YF
        }), (0, RF.jsx)(NF.j, {
          name: rW("settingsMenu:fieldOfView"),
          min: 50,
          max: 160,
          step: 1,
          initValue: gW.cameraFOV,
          onChange: FF => {
            DF.b.setClientEscMenuOptions({
              cameraFOV: FF
            })
          }
        }), (0, RF.jsx)(NF.b, {
          label: rW("settingsMenu:disableViewBobbing"),
          checked: gW.disableBobbing,
          onClick: FF => {
            DF.b.setClientEscMenuOptions({
              disableBobbing: FF
            })
          },
          circleInfoText: rW("settingsMenu:disableViewBobbingInfo")
        }), (0, RF.jsx)(NF.b, {
          label: rW("settingsMenu:antiAliasing"),
          checked: gW.antiAliasing,
          onClick: FF => {
            zW({
              antiAliasing: FF
            }), (0, GW.g)("antiAliasing"), DF.b.setClientEscMenuOptions({
              antiAliasing: FF
            })
          },
          circleInfoText: rW("settingsMenu:antiAliasingInfo")
        }), (0, RF.jsx)(NF.j, {
          name: rW("settingsMenu:pixelScale"),
          min: 1,
          max: 8,
          step: 1,
          initValue: null !== (dF = gW.pixelScale) && void 0 !== dF ? dF : 1,
          onChange: FF => {
            (FF !== DF.b.get("clientEscMenuOptions").pixelScale || (0, IW.m)()) && (0, GW.g)("pixelScale"), DF.b.setClientEscMenuOptions({
              pixelScale: FF
            })
          },
          circleInfoText: rW("settingsMenu:pixelScaleInfo"),
          format: FF => `${FF}x`
        }), (0, RF.jsx)(NF.b, {
          label: rW("settingsMenu:pixelSmoothing"),
          checked: gW.pixelSmoothing,
          onClick: FF => {
            DF.b.setClientEscMenuOptions({
              pixelSmoothing: FF
            })
          },
          circleInfoText: rW("settingsMenu:pixelSmoothingInfo")
        }), xS.h && (0, RF.jsx)(NF.b, {
          label: rW("settingsMenu:distantNametags"),
          checked: (0, zS.c)(),
          onClick: FF => {
            DF.b.set({
              showDistantNametags: FF
            })
          },
          circleInfoText: rW("settingsMenu:distantNametagsInfo")
        }), (0, RF.jsx)(NF.b, {
          label: rW(oF.translationKey),
          checked: oF.checked,
          onClick: FF => {
            zW({
              useWebGpu: FF
            }), DF.b.setClientEscMenuOptions({
              useWebGpu: FF
            })
          },
          circleInfoText: rW("settingsMenu:newWebGpuInfo"),
          disabled: oF.disabled
        })]
      })
    }
    var sW = SF(3594),
      nW = SF(7799),
      HW = SF(7808),
      KW = SF(1227),
      wW = SF(3989),
      XW = SF(8204),
      UW = SF(1607),
      BW = SF(3462),
      jS = SF(1616),
      vS = SF(263);
    const JW = (0, CF.memo)((function() {
      const {
        clientEscMenuOptions: FF
      } = (0, DF.d)(["clientEscMenuOptions"]), {
        recording: WF,
        clipping: SF,
        hasClipBuffer: AF
      } = (0, UW.e)("replayRecorder"), hF = (0, UW.c)("connectedGame", (FF => FF.replay)), bW = (0, BW.n)(), dF = !1 === (0, QF.k)("canRecordReplays");
      (0, CF.useEffect)((() => {
        TF.gameBridge.send("setRecorderPrefs", {
          clipping: FF.enableClipping,
          clipSeconds: FF.clipDurationSeconds
        })
      }), [FF.enableClipping, FF.clipDurationSeconds]);
      const PF = bW || hF,
        iW = !PF && !dF,
        eF = WF || iW,
        EF = iW,
        rW = EF && SF && !WF;

      function tW() {
        eF && TF.gameBridge.send("toggleRecording", null)
      }
      return (0, RF.jsxs)("div", {
        className: "SettingsMenuRightInner ReplayViewerCategory",
        children: [(0, RF.jsxs)("div", {
          className: "SettingBox",
          children: [(0, RF.jsx)("div", {
            className: "ReplayViewerCategoryRecordingRow",
            children: WF ? (0, RF.jsxs)(RF.Fragment, {
              children: [(0, RF.jsxs)(gW.E, {
                className: "ReplayViewerCategoryButton",
                onClick: tW,
                disabled: !eF,
                children: [(0, RF.jsx)("span", {
                  children: "Stop Recording"
                }), (0, RF.jsx)(jS.d, {
                  noaAction: "recordGame"
                })]
              }), (0, RF.jsx)(XW.d, {
                className: "ReplayViewerCategoryRecordingIndicator"
              })]
            }) : (0, RF.jsxs)(gW.e, {
              className: "ReplayViewerCategoryButton",
              onClick: tW,
              disabled: !eF,
              children: [(0, RF.jsx)("span", {
                children: "Start Recording"
              }), (0, RF.jsx)(jS.d, {
                noaAction: "recordGame"
              })]
            })
          }), dF && (0, RF.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Recording is turned off in this game."
          }), PF && !WF && (0, RF.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Close Replay Mode to start recording."
          })]
        }), (0, RF.jsxs)("div", {
          className: "SettingBoxGroup",
          children: [(0, RF.jsx)(NF.b, {
            label: "Enable clipping",
            checked: FF.enableClipping,
            disabled: !EF,
            onClick: function(FF) {
              EF && DF.b.setClientEscMenuOptions({
                enableClipping: FF
              })
            },
            className: uF()({
              SettingBoxDisabled: !EF
            })
          }), (0, RF.jsx)(NF.j, {
            name: "Clip duration (seconds)",
            min: vS.j,
            max: vS.g,
            step: vS.b,
            initValue: FF.clipDurationSeconds,
            onChange: function(FF) {
              DF.b.setClientEscMenuOptions({
                clipDurationSeconds: FF
              })
            },
            circleInfoText: "Longer clip durations use more memory and may affect performance.",
            disabled: !EF || !FF.enableClipping
          })]
        }), (0, RF.jsxs)("div", {
          className: "SettingBox",
          children: [(0, RF.jsxs)(gW.e, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              rW && TF.gameBridge.send("saveClip", null)
            },
            disabled: !rW,
            children: [(0, RF.jsx)("span", {
              children: "Record clip"
            }), (0, RF.jsx)(jS.d, {
              noaAction: "recordClip"
            })]
          }), FF.enableClipping && !AF && EF && !WF && (0, RF.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clip buffer is filling \u2014 play for a moment, then save."
          }), WF && (0, RF.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Clipping pauses while a full recording is active."
          })]
        }), (0, RF.jsxs)("div", {
          className: "SettingBox",
          children: [(0, RF.jsxs)(gW.e, {
            className: "ReplayViewerCategoryButton",
            onClick: function() {
              (0, BW.l)(!0), DF.b.set({
                openEverythingMenuName: null
              })
            },
            disabled: bW,
            children: [(0, RF.jsx)("span", {
              children: "Open Replay Mode"
            }), (0, RF.jsx)(jS.d, {
              noaAction: "replayViewerOpen"
            })]
          }), bW && (0, RF.jsx)("div", {
            className: "ReplayViewerCategoryHint",
            children: "Replay Mode is already open."
          })]
        }), (0, RF.jsxs)("div", {
          className: "SettingBox",
          children: [(0, RF.jsx)("div", {
            className: "ReplayViewerCategoryTutorialTitle",
            children: "How to use Replay Mode"
          }), (0, RF.jsx)("iframe", {
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
    var pW = SF(220),
      lW = SF(1079);
    const FS = {
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
        icon: () => (0, RF.jsx)("svg", {
          className: "svg-inline--fa",
          viewBox: "0 0 640 512",
          "aria-hidden": "true",
          children: (0, RF.jsx)("path", {
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
      CC: {
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

    function WS() {
      return Promise.all([SF.e(120), SF.e(117), SF.e(111), SF.e(108)]).then((() => SF(38929))).then((FF => ({
        default: FF.ShaderPackCategory
      })), (FF => (console.error("Failed to load the shader pack settings", FF), {
        default: SS
      })))
    }

    function SS() {
      const {
        t: FF
      } = (0, hF.B)();
      return (0, RF.jsx)("div", {
        className: "SettingsMenuRightInner",
        children: FF("shaderPack:tabLoadFailed")
      })
    }
    var CS = SF(1223);
    const AS = (0, CF.lazy)((() => SF.e(242).then((() => SF(38919))).then((FF => ({
        default: FF.BloxdInformation
      }))))),
      uS = (0, CF.lazy)(WS);

    function hS(FF) {
      return FF ? "general" : "account"
    }
    const bC = new Map,
      dS = (0, CF.memo)((function(FF) {
        let {
          show: WF,
          setBeforeResumeCallback: SF
        } = FF;
        (0, rW.e)();
        const {
          gameState: AF,
          openSettingsCategory: uF
        } = (0, DF.d)(["gameState", "openSettingsCategory"]), {
          userContext: dF
        } = (0, EF.b)(), {
          t: PF
        } = (0, hF.B)(), qW = (0, eF.d)(), VF = (0, QF.k)("minChunkAddDist"), NF = "inGame" === AF, [LF, OF] = (0, CF.useState)(hS(NF)), [xW, oF] = (0, CF.useState)(null), [YF, MF] = (0, CF.useState)([]), cW = (0, CF.useRef)(function() {
          const FF = new Date,
            WF = 6 * (FF.getMonth() + FF.getDate()) % pW.t.length;
          return [...pW.t, ...pW.t].slice(WF, WF + 6)
        }()), GF = (0, CF.useRef)(null), zW = (0, eW.i)(KW.i, (0, KW.e)()), IF = Object.keys(FS).filter((FF => {
          switch (FF) {
            case "replayViewer":
              return NF;
            case "developerTools":
              return dF.playerHasRank("developer") || !1;
            case "texturePack":
              return tW.featureFlags.settings.canChangeTexturePack;
            case "CC":
              return tW.featureFlags.settings.canUseShaderPacks;
            case "notifications":
              return tW.featureFlags.useSocialFeatures;
            case "alternativeDomains":
              return "crazygames" !== ZF.s;
            case "controller":
              return tW.featureFlags.useControllerSupport && (zW || "controller" === LF);
            default:
              return !0
          }
        }));
        (0, eW.e)("toggleFullCoordinateOverlay", (() => {
          const FF = MW("showCoordinates") && MW("showChunkCoordinates") && MW("showFPS");
          cS("showCoordinates", !FF), cS("showChunkCoordinates", !FF), cS("showFPS", !FF), qW()
        })), (0, eW.e)("updatedChunkLoadDist", (() => {
          qW()
        })), (0, CF.useEffect)((() => {
          if (oF(null), null === DF.b.get("openSettingsCategory")) {
            const FF = (0, CS.f)() ? bC.get(NF) : void 0;
            OF(FF && IF.includes(FF) ? FF : hS(NF))
          }
        }), [WF]), (0, CF.useEffect)((() => {
          null !== uF && (OF(uF), bC.set(NF, uF), DF.b.set({
            openSettingsCategory: null
          }))
        }), [uF, NF]), (0, CF.useLayoutEffect)((() => {
          GF.current && (GF.current.scrollTop = 0)
        }), [LF, WF]), (0, CF.useEffect)((() => {
          "updateLog" === LF && (0, kW.e)().then(MF)
        }), [LF]), (0, CF.useEffect)((() => {
          if ((0, mS.Q)(VF)) return;
          const [FF, WF] = (0, sW.d)(), [SF, CF] = (0, kS.h)(VF), AF = (0, lW.g)(VF[0], FF, SF), uF = (0, lW.g)(VF[1], WF, CF);
          TF.gameBridge.send("setChunkAddDistance", {
            horizontal: AF,
            vertical: uF
          })
        }), [VF]);
        const fF = (0, CF.useCallback)((async () => {
          xW && (await xW(), oF(null))
        }), [xW]);

        function yW() {
          DF.b.set({
            openEverythingMenuName: null
          })
        }
        return (0, CF.useEffect)((() => {
          SF((() => fF))
        }), [fF, SF]), (0, RF.jsxs)("div", {
          className: "SettingsMenu Menu",
          style: WF ? {} : {
            display: "none"
          },
          children: [(0, RF.jsx)("div", {
            className: "MenuSideBar",
            children: (0, RF.jsx)("div", {
              className: "MenuSideBarBody",
              children: (0, RF.jsx)(iW, {
                items: IF.map((FF => {
                  const WF = FS[FF].icon;
                  return {
                    id: FF,
                    faIcon: "string" === typeof WF ? WF : void 0,
                    iconElement: "string" === typeof WF ? void 0 : (0, RF.jsx)(WF, {}),
                    title: PF(FS[FF].displayName),
                    redDot: !1
                  }
                })),
                selectedItemId: LF,
                onClick: FF => {
                  !async function(FF) {
                    await fF(), OF(FF), bC.set(NF, FF)
                  }(FF)
                }
              })
            })
          }), (0, RF.jsxs)("div", {
            ref: GF,
            className: "MenuBody SettingsMenuRight",
            children: ["account" === LF && (0, RF.jsx)(CW, {
              showing: WF,
              inGame: NF
            }), "general" === LF && (0, RF.jsx)(PW, {
              inGame: NF
            }), "audio" === LF && (0, RF.jsx)(RW, {}), "notifications" === LF && (0, RF.jsx)(aS, {}), "graphics" === LF && (0, RF.jsx)(yS, {
              minChunkAddDist: null !== VF && void 0 !== VF ? VF : [2, 2],
              getValue: MW,
              onChange: cS,
              setApplySettingsCallback: oF
            }), "controls" === LF && (0, RF.jsx)(nW.f, {}), "controller" === LF && tW.featureFlags.useControllerSupport && (0, RF.jsx)(HW.d, {}), tW.featureFlags.settings.canChangeTexturePack && "texturePack" === LF && (0, RF.jsx)(wW.c, {
              setApplySettingsCallback: oF
            }), tW.featureFlags.settings.canUseShaderPacks && "CC" === LF && (0, RF.jsx)(CF.Suspense, {
              fallback: null,
              children: (0, RF.jsx)(uS, {
                setApplySettingsCallback: oF
              })
            }), "updateLog" === LF && (0, RF.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, RF.jsx)("div", {
                className: "UpdateLogsContainer",
                children: YF.map(((FF, WF) => (0, RF.jsx)(aW.e, {
                  updateLog: FF,
                  index: WF,
                  close: yW
                }, WF)))
              })
            }), "information" === LF && (0, RF.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, RF.jsx)(CF.Suspense, {
                fallback: null,
                children: (0, RF.jsx)(AS, {})
              })
            }), "alternativeDomains" === LF && (0, RF.jsxs)("div", {
              className: "SettingsMenuRightInner",
              children: [(0, RF.jsx)("div", {
                className: "AlternativeDomainsTitle",
                children: PF("settingsMenu:unblockedDomainsDescription")
              }), (0, RF.jsx)("div", {
                className: "AlternativeDomainsList",
                children: cW.current.map((FF => (0, RF.jsxs)(gW.e, {
                  onClick: () => {
                    window.open(`https://${FF}`)
                  },
                  children: [(0, RF.jsx)(bW.e, {
                    name: "arrow-up-right-from-square"
                  }), " ", FF]
                }, FF)))
              })]
            }), "replayViewer" === LF && (0, RF.jsx)(JW, {}), "developerTools" === LF && (0, RF.jsx)("div", {
              className: "SettingsMenuRightInner",
              children: (0, RF.jsx)(mW, {
                setApplySettingsCallback: oF
              })
            }), null !== xW && (0, RF.jsx)("div", {
              className: "SettingsMenuRightFooter",
              children: (0, RF.jsx)(gW.e, {
                className: "SettingsMenuRightFooterButton",
                onClick: fF,
                children: PF("general:apply")
              })
            })]
          })]
        })
      }));
    var PS = SF(2038);
    const RS = ["characters", "emote", "skin", "hat", "head", "eyebrows", "eyes", "back", "body", "legs", "shoes", "profileEffect", "cape", "nameColour"],
      iC = (0, CF.lazy)((() => Promise.resolve().then((() => SF(3676))).then((FF => {
        FF.needGameClientAfterPaint();
        const WF = FF.matchmakingLibrariesPromise.then((FF => (0, PS.e)(FF.loadCharacterCustomisationUI(), (FF => FF.CharacterCustomisationUI))));
        return Promise.all([FF.ensureGameSetup(), WF]).then((FF => {
          let [, WF] = FF;
          return WF
        }))
      }))));

    function eS(FF) {
      let {
        show: WF
      } = FF;
      const {
        userContext: SF
      } = (0, EF.b)(), [AF, uF] = (0, CF.useState)("characters");
      if (!WF) return null;
      const hF = RS.filter((FF => "cape" !== FF && "nameColour" !== FF || SF.getPlayerRanks().includes("super") || (0, KF.siteSupportsPurchases)())).map((FF => ({
        id: FF,
        faIcon: pW.B[FF],
        title: pW.F[FF],
        redDot: !1
      })));
      return (0, RF.jsxs)("div", {
        className: "Menu CharCustomisation",
        children: [(0, RF.jsx)("div", {
          className: "MenuSideBar",
          children: (0, RF.jsx)(iW, {
            items: hF,
            selectedItemId: AF,
            onClick: FF => {
              uF(FF)
            }
          })
        }), (0, RF.jsx)("div", {
          className: "MenuBody",
          children: (0, RF.jsx)(CF.Suspense, {
            fallback: (0, RF.jsx)("div", {
              className: "CharacterCustomisationLoading",
              children: (0, RF.jsx)(VF.c, {})
            }),
            children: (0, RF.jsx)(iC, {
              selectedTab: AF
            })
          })
        })]
      })
    }
    var ES = SF(1289),
      QS = SF(8210),
      rC = SF(3616),
      gC = SF(2610),
      tC = SF(2642),
      TS = SF(8222),
      aC = SF(7675),
      kC = SF(8215),
      qC = SF(8220),
      VS = SF(1563),
      NS = SF(1546),
      DS = SF(3902),
      LS = SF(1124),
      mC = SF(1085),
      OS = SF(1731),
      xC = SF(7778);
    class ZS {
      constructor(FF) {
        this.info = FF
      }
      static fromShopInfo(FF) {
        const WF = {};
        for (const SF in FF) {
          const CF = !0 === FF[SF].redDot && !0 !== FF[SF].forceRemoveRedDot;
          WF[SF] = {
            redDot: CF,
            items: {}
          };
          for (const AF in FF[SF].items) {
            const CF = FF[SF].items[AF],
              uF = !0 === CF.redDot && !0 !== CF.forceRemoveRedDot;
            WF[SF].items[AF] = {
              redDot: uF
            }
          }
        }
        return new ZS(WF)
      }
      anyCategoryHasRedDots() {
        for (const FF in this.info)
          if (this.categoryHasRedDot(FF)) return !0;
        return !1
      }
      doesCategoryExist(FF) {
        return !(0, mS.Q)(this.info[FF])
      }
      categoryHasRedDot(FF) {
        return !0 === this.info[FF].redDot
      }
      updateCategoryRedDot(FF, WF) {
        this.info[FF].redDot = WF
      }
      doesItemExist(FF, WF) {
        return this.doesCategoryExist(FF) && !(0, mS.Q)(this.info[FF].items[WF])
      }
      itemHasRedDot(FF, WF) {
        return !0 === this.info[FF].items[WF].redDot
      }
      updateItemRedDot(FF, WF, SF) {
        this.info[FF].items[WF].redDot = SF
      }
      shallowCopy() {
        return new ZS(this.info)
      }
    }

    function oS(FF, WF) {
      return `${FF}\x1f${WF}`
    }

    function YS(FF) {
      return FF ? Object.keys(FF).sort(((WF, SF) => {
        var CF, AF, uF, hF;
        const bW = (null !== (CF = null === (AF = FF[SF]) || void 0 === AF ? void 0 : AF.sortPriority) && void 0 !== CF ? CF : 0) - (null !== (uF = null === (hF = FF[WF]) || void 0 === hF ? void 0 : hF.sortPriority) && void 0 !== uF ? uF : 0);
        return 0 !== bW ? bW : WF.localeCompare(SF)
      })) : []
    }

    function MS(FF, WF) {
      return !(0, mS.Q)(WF) && !(0, mS.Q)(FF) && WF in FF
    }
    const cC = (0, CF.memo)((function(FF) {
      var WF, SF;
      let {
        show: AF
      } = FF;
      const hF = (0, UW.c)("players", sS),
        bW = (0, UW.c)("players", nS),
        [PF, eF] = (0, CF.useState)({
          shopInfo: {},
          userInputsPerItem: {},
          redDotInfo: ZS.fromShopInfo({}),
          currencyAmounts: {},
          selectedCategoryKey: null,
          onBoughtInfo: null,
          awaitingPurchase: !1
        }),
        EF = (0, CF.useRef)(""),
        rW = (0, CF.useRef)(null),
        tW = (0, CF.useRef)(0),
        aW = (0, CF.useRef)(void 0),
        kW = (0, CF.useRef)(null),
        qW = (0, CF.useRef)(PF),
        VF = PF.redDotInfo.anyCategoryHasRedDots(),
        [NF, LF] = (0, CF.useState)(null),
        mW = (0, CF.useRef)(!1);
      let OF = !1,
        xW = 0,
        oF = 0;
      if (PF.currencyAmounts) {
        for (const FF in PF.currencyAmounts) {
          var YF;
          const WF = PF.currencyAmounts[FF];
          WF.hidden || (xW++, (null === (YF = WF.subtext) || void 0 === YF ? void 0 : YF.length) > 0 && oF++)
        }
        OF = xW + oF > 4
      }(0, CF.useEffect)((() => {
        OW.j.Uu("showShopIconRedDot", VF, !0)
      }), [VF]), (0, CF.useEffect)((() => {
        TF.gameBridge.send("setShopOpen", AF), AF || (clearTimeout(aW.current), eF((FF => FF.awaitingPurchase ? {
          ...FF,
          awaitingPurchase: !1
        } : FF)))
      }), [AF]), (0, CF.useEffect)((() => () => {
        TF.gameBridge.send("setShopOpen", !1), clearTimeout(aW.current)
      }), []), (0, CF.useEffect)((() => {
        qW.current = PF
      }), [PF]), (0, CF.useEffect)((() => {
        if (null === NF) return;
        return (0, OS.e)("pointerdown", (FF => {
          const WF = FF.target;
          null !== WF && void 0 !== WF && WF.closest(".ShopItem") || LF(null)
        }))
      }), [NF]);
      const cW = FF => {
          eF((WF => ({
            ...WF,
            ...FF
          })))
        },
        GF = FF => {
          var WF;
          clearTimeout(null === (WF = PF.onBoughtInfo) || void 0 === WF ? void 0 : WF.timeout);
          const SF = setTimeout((() => {
            cW({
              onBoughtInfo: null
            })
          }), 3e3);
          EF.current = FF, cW({
            onBoughtInfo: {
              text: FF,
              timeout: SF
            }
          })
        },
        zW = FF => {
          const {
            shopInfo: WF,
            userInputsPerItem: SF,
            redDotInfo: CF,
            autoSelectCategory: uF
          } = function(FF, WF, SF, CF, AF, uF) {
            if ((0, mS.Q)(FF) || 0 === Object.keys(FF).length) return {
              shopInfo: {},
              userInputsPerItem: {},
              redDotInfo: ZS.fromShopInfo({}),
              autoSelectCategory: null
            };
            const hF = ZF.n[ZF.s].adConfig.showRewardedAds,
              bW = {};
            let dF = null;
            for (const gW in FF) {
              const WF = FF[gW],
                SF = {};
              let CF = !1;
              for (const FF in WF.items) {
                const AF = WF.items[FF];
                (0, aC.m)(AF, hF) && (SF[FF] = AF, CF = !0)
              }
              CF && (bW[gW] = {
                ...WF,
                items: SF
              }, !0 === WF.autoSelectCategory && (dF = gW))
            }
            const PF = {},
              RF = (FF, WF, CF, hF) => {
                var bW, dF;
                const RF = oS(FF, WF),
                  iW = null !== (bW = SF[RF]) && void 0 !== bW ? bW : SF[WF];
                if (null !== (dF = hF.userInput) && void 0 !== dF && dF.type) switch (hF.userInput.type) {
                  case "dropdown": {
                    var eF;
                    const FF = !iW || !hF.userInput.dropdownOptions.some((FF => (0, aC.e)(FF) === iW)),
                      WF = hF.userInput.shouldResetSelectionOnOptionsChange && ("dropdown" !== (null === CF || void 0 === CF || null === (eF = CF.userInput) || void 0 === eF ? void 0 : eF.type) || JSON.stringify(CF.userInput.dropdownOptions) !== JSON.stringify(hF.userInput.dropdownOptions)),
                      SF = hF.userInput,
                      AF = !(0, mS.Q)(SF.initialValue) && SF.dropdownOptions.some((FF => (0, aC.e)(FF) === SF.initialValue));
                    var EF;
                    return void(FF || WF ? AF ? PF[RF] = null !== (EF = hF.userInput.initialValue) && void 0 !== EF ? EF : null : hF.userInput.dropdownOptions.length > 0 ? PF[RF] = (0, aC.e)(hF.userInput.dropdownOptions[0]) : PF[RF] = null : PF[RF] = iW)
                  }
                  case "text":
                  case "number":
                    var QF, rW, gW;
                    return void((null === CF || void 0 === CF ? void 0 : CF.userInput) !== hF.userInput ? PF[RF] = null !== (QF = null !== (rW = hF.userInput.initialValue) && void 0 !== rW ? rW : iW) && void 0 !== QF ? QF : "" : PF[RF] = null !== (gW = null !== iW && void 0 !== iW ? iW : hF.userInput.initialValue) && void 0 !== gW ? gW : "");
                  case "color":
                    var tW, TF, aW;
                    return void((null === CF || void 0 === CF ? void 0 : CF.userInput) !== hF.userInput ? PF[RF] = null !== (tW = null !== (TF = hF.userInput.initialValue) && void 0 !== TF ? TF : iW) && void 0 !== tW ? tW : "#000000" : PF[RF] = null !== (aW = null !== iW && void 0 !== iW ? iW : hF.userInput.initialValue) && void 0 !== aW ? aW : "#000000");
                  case "player": {
                    const FF = (0, aC.i)(AF, uF, hF.userInput);
                    return void(iW && FF.includes(iW) ? PF[RF] = iW : PF[RF] = FF.length > 0 ? FF[0] : null)
                  }
                }
              };
            for (const gW in bW)
              for (const FF in bW[gW].items) {
                var iW;
                const SF = bW[gW].items[FF];
                RF(gW, FF, null === (iW = WF[gW]) || void 0 === iW ? void 0 : iW.items[FF], SF)
              }
            const eF = ZS.fromShopInfo(bW);
            for (const gW in bW) {
              var EF;
              if (CF.doesCategoryExist(gW)) {
                (null === (EF = WF[gW]) || void 0 === EF ? void 0 : EF.redDot) === bW[gW].redDot && eF.updateCategoryRedDot(gW, CF.categoryHasRedDot(gW));
                for (const FF in bW[gW].items) {
                  var QF, rW;
                  CF.doesItemExist(gW, FF) && (null === (QF = WF[gW]) || void 0 === QF || null === (rW = QF.items[FF]) || void 0 === rW ? void 0 : rW.redDot) === bW[gW].items[FF].redDot && eF.updateItemRedDot(gW, FF, CF.itemHasRedDot(gW, FF))
                }
              }
            }
            return {
              shopInfo: bW,
              userInputsPerItem: PF,
              redDotInfo: eF,
              autoSelectCategory: dF
            }
          }(FF, PF.shopInfo, PF.userInputsPerItem, PF.redDotInfo, hF, bW), dF = {
            shopInfo: WF,
            userInputsPerItem: SF,
            redDotInfo: CF
          };
          if (null === uF || AF)
            if (WF[PF.selectedCategoryKey]) dF.selectedCategoryKey = PF.selectedCategoryKey;
            else {
              const FF = YS(WF);
              dF.selectedCategoryKey = FF.length > 0 ? FF[0] : null
            }
          else dF.selectedCategoryKey = uF;
          return 0 === Object.keys(WF).length && AF && DF.b.set({
            openEverythingMenuName: null
          }), dF
        },
        IF = (FF, WF) => {
          if (null === WF || !FF.shopInfo[WF]) return FF;
          let SF = FF.redDotInfo;
          return SF.categoryHasRedDot(WF) && (SF.updateCategoryRedDot(WF, !1), SF = SF.shallowCopy()), {
            ...FF,
            selectedCategoryKey: WF,
            redDotInfo: SF
          }
        },
        fF = FF => {
          eF((WF => IF(WF, FF)))
        };
      (0, eW.e)(xC.k, (() => {
        eF((FF => {
          const WF = (0, xC.o)(YS(FF.shopInfo), FF.selectedCategoryKey, (WF => (0, xC.j)(FF.shopInfo[WF].items)));
          return WF === FF.selectedCategoryKey ? FF : IF(FF, WF)
        }))
      })), (0, eW.e)("showShopFromServer", (FF => {
        let {
          toggle: WF,
          kFF: SF
        } = FF;
        SF && fF(SF), 0 === Object.keys(PF.shopInfo).length || WF && AF ? DF.b.set({
          openEverythingMenuName: null
        }) : DF.b.set({
          openEverythingMenuName: pW.n.SHOP
        })
      })), (0, eW.e)("closeShopOnDamaged", (() => {
        AF && DF.b.set({
          openEverythingMenuName: null
        })
      })), (0, eW.e)("overShopInfo", (FF => {
        GF(FF)
      })), (0, QF.h)("currencyAmounts", (FF => {
        var WF;
        const SF = kW.current;
        SF && (null === FF || void 0 === FF || null === (WF = FF[SF.currency]) || void 0 === WF ? void 0 : WF.amount) === SF.amountBefore ? cW({
          currencyAmounts: FF
        }) : (kW.current = null, cW({
          currencyAmounts: FF,
          awaitingPurchase: !1
        }))
      })), (0, QF.h)("shopInfo", (FF => {
        cW({
          ...zW(FF),
          awaitingPurchase: !1
        })
      }));
      const yW = (0, CF.useRef)({
        playerIds: hF,
        localPlayerId: bW
      });
      (0, CF.useEffect)((() => {
        yW.current.playerIds === hF && yW.current.localPlayerId === bW || (yW.current = {
          playerIds: hF,
          localPlayerId: bW
        }, eF((FF => {
          const WF = zW(FF.shopInfo);
          return {
            ...FF,
            ...WF
          }
        })))
      }), [hF, bW]);
      const sF = PF.selectedCategoryKey,
        HF = (FF, WF) => {
          var SF, CF;
          return (isNaN(WF) || (0, mS.Q)(FF.currency) || MS(PF.currencyAmounts, FF.currency) && WF <= PF.currencyAmounts[FF.currency].amount) && (null === (SF = FF.canBuy) || void 0 === SF || SF) && !(null !== (CF = FF.hidden) && void 0 !== CF && CF)
        },
        KF = (FF, WF) => {
          var SF, CF, AF;
          const hF = oS(sF, FF),
            bW = PF.shopInfo[sF].items[FF],
            iW = PF.userInputsPerItem[hF],
            eF = (0, aC.b)(bW, iW),
            EF = HF(bW, eF),
            QF = bW.enchant,
            rW = QF ? (0, nF.wb)(null !== (SF = bW.customTitle) && void 0 !== SF ? SF : FF, {
              colour: nF.sb[QF.tier]
            }) : null !== (CF = bW.customTitle) && void 0 !== CF ? CF : FF,
            VF = WF => {
              const SF = null !== WF && void 0 !== WF ? WF : iW,
                CF = void 0 !== WF ? (0, aC.b)(bW, WF) : eF;
              HF(bW, CF) && null !== SF && ((FF, WF, SF) => {
                const CF = PF.selectedCategoryKey,
                  AF = oS(CF, FF),
                  uF = null !== SF && void 0 !== SF ? SF : PF.userInputsPerItem[AF],
                  hF = {
                    categoryKey: CF,
                    itemKey: FF,
                    userInput: uF
                  };
                if (WF.isRewardedAd) {
                  if (Date.now() - tW.current < 5e3) return;
                  (0, MF.eb)((() => {
                    var SF, CF, uF;
                    console.log("bought rewarded ad");
                    const bW = hF.categoryKey ? null === (SF = qW.current.shopInfo[hF.categoryKey]) || void 0 === SF ? void 0 : SF.items[FF] : null;
                    bW && bW.isRewardedAd ? (null === (CF = WF.userInput) || void 0 === CF ? void 0 : CF.type) === (null === bW || void 0 === bW || null === (uF = bW.userInput) || void 0 === uF ? void 0 : uF.type) ? (hF.userInput = qW.current.userInputsPerItem[AF], TF.gameBridge.send("buyShopItem", hF), WF.onBoughtMessage && GF(WF.onBoughtMessage)) : console.warn("Shop item input type changed, early out") : console.warn("Shop item no longer valid or a rewarded ad, early out")
                  })), tW.current = Date.now()
                } else {
                  TF.gameBridge.send("buyShopItem", hF), cW({
                    awaitingPurchase: !0
                  }), clearTimeout(aW.current), aW.current = setTimeout((() => {
                    kW.current = null, cW({
                      awaitingPurchase: !1
                    })
                  }), 1e3);
                  const FF = (0, aC.b)(WF, uF);
                  if (kW.current = null, !isNaN(FF) && MS(PF.currencyAmounts, WF.currency)) {
                    0 !== FF && (kW.current = {
                      currency: WF.currency,
                      amountBefore: PF.currencyAmounts[WF.currency].amount
                    });
                    const SF = {
                      ...PF.currencyAmounts
                    };
                    SF[WF.currency].amount -= FF, cW({
                      currencyAmounts: SF
                    })
                  }
                  WF.onBoughtMessage && GF(WF.onBoughtMessage)
                }
              })(FF, bW, WF);
              let AF = PF.redDotInfo;
              AF.itemHasRedDot(sF, FF) && (AF.updateItemRedDot(sF, FF, !1), AF = AF.shallowCopy()), cW({
                redDotInfo: AF
              })
            };
          return (0, RF.jsxs)("div", {
            className: uF()("ShopItem", {
              ShopItemNoInput: !bW.userInput,
              ShopItemNoInputCanBuy: !bW.userInput && EF,
              ShopItemNoInputSelected: bW.isSelected,
              ShopItemEnchant: !!QF
            }),
            "data-pad-focusable": !bW.userInput || void 0,
            "data-pad-unavailable": !bW.userInput && !EF || void 0,
            "data-pad-repeat": null !== (AF = (0, xC.d)(bW)) && void 0 !== AF ? AF : void 0,
            "data-pad-repeat-wait": PF.awaitingPurchase || void 0,
            onClick: () => {
              if (QF && mW.current) {
                if (NF !== hF) return void LF(hF);
                LF(null)
              }
              bW.userInput || VF()
            },
            onPointerDown: FF => {
              QF && (mW.current = (0, qC.q)(FF))
            },
            onPointerEnter: FF => {
              QF && !(0, qC.q)(FF) && LF(hF)
            },
            onPointerLeave: FF => {
              QF && !(0, qC.q)(FF) && LF((FF => FF === hF ? null : FF))
            },
            style: {
              zIndex: Object.keys(PF.shopInfo[sF].items).length - WF
            },
            children: [PF.redDotInfo.itemHasRedDot(sF, FF) && (0, RF.jsx)(dF.b, {
              top: "-6px",
              right: "-6px"
            }), bW.badge && (0, RF.jsx)("div", {
              className: "ShopBadgeContainer",
              children: (0, RF.jsx)("div", {
                className: uF()("ShopBadgeMain", bW.badge.type),
                children: (0, RF.jsx)(NS.d, {
                  text: bW.badge.text
                })
              })
            }), (0, RF.jsx)("div", {
              className: "ShopItemLeft",
              children: bW.image && (0, RF.jsx)(GS, {
                item: bW,
                minWidth: 5,
                minHeight: 4.8
              })
            }), (0, RF.jsxs)("div", {
              className: "ShopItemRight",
              children: [(0, RF.jsxs)("div", {
                className: "ShopItemHeader",
                children: [(0, RF.jsx)("div", {
                  className: "ShopItemHeaderTitle",
                  children: (0, RF.jsx)(NS.d, {
                    text: rW
                  })
                }), (0, RF.jsx)("div", {
                  className: "ShopItemHeaderDescription",
                  children: (0, RF.jsx)(NS.d, {
                    text: bW.description
                  })
                })]
              }), bW.userInput && (0, RF.jsxs)("div", {
                className: "ShopItemInputsContainer",
                onClick: FF => {
                  FF.stopPropagation()
                },
                children: [(0, RF.jsx)(fS, {
                  item: bW,
                  currInput: iW,
                  updateInput: WF => {
                    ((FF, WF, SF) => {
                      const CF = oS(FF, WF),
                        AF = {
                          ...PF.userInputsPerItem
                        };
                      AF[CF] = SF, cW({
                        userInputsPerItem: AF
                      })
                    })(sF, FF, WF)
                  },
                  onSubmit: FF => {
                    VF(FF)
                  }
                }), ("dropdown" !== bW.userInput.type || !bW.userInput.autoSubmit) && (0, RF.jsx)(gW.e, {
                  className: "ItemCostButton",
                  disabled: !EF && null !== iW,
                  onClick: () => {
                    VF()
                  },
                  children: (0, RF.jsx)(IS, {
                    item: bW,
                    cost: eF,
                    currencyAmounts: PF.currencyAmounts
                  })
                })]
              })]
            }), !bW.userInput && (0, RF.jsx)("div", {
              className: "ShopItemNoInputCost",
              children: (0, RF.jsx)(IS, {
                item: bW,
                cost: eF,
                currencyAmounts: PF.currencyAmounts
              })
            }), QF && NF === hF && (0, RF.jsxs)("div", {
              className: "ShopItemEnchantInfo SmallTextBold",
              children: [(0, RF.jsx)(NS.d, {
                text: rW
              }), (0, RF.jsx)("div", {
                className: "ShopItemEnchantInfoDescription",
                children: (0, RF.jsx)(NS.d, {
                  text: (0, kC.b)("", QF.enchantments, QF.enchantmentData)
                })
              })]
            })]
          }, hF)
        };
      return (0, RF.jsx)(gC.b, {
        className: "Menu ShopBody",
        show: AF,
        children: 0 !== Object.keys(PF.shopInfo).length && (0, RF.jsxs)(RF.Fragment, {
          children: [(0, RF.jsxs)("div", {
            className: "MenuSideBar",
            children: [(0, RF.jsx)(iW, {
              items: YS(PF.shopInfo).map((FF => {
                var WF;
                return {
                  id: FF,
                  title: null !== (WF = PF.shopInfo[FF].customTitle) && void 0 !== WF ? WF : FF,
                  redDot: PF.redDotInfo.categoryHasRedDot(FF)
                }
              })),
              selectedItemId: sF,
              onClick: fF,
              padStartsOnTab: (0, xC.g)(sF)
            }), (0, RF.jsx)("div", {
              className: "MenuSideBarFooter",
              children: PF.currencyAmounts && Object.keys(PF.currencyAmounts).map((FF => {
                var WF;
                const SF = PF.currencyAmounts[FF];
                return SF.hidden ? null : (0, RF.jsxs)("div", {
                  className: "ShopCurrencyDiv " + (OF ? "SmallText" : ""),
                  children: [(0, RF.jsxs)("div", {
                    className: "ShopCurrencyDetails",
                    children: [(0, RF.jsx)("div", {
                      className: "ShopCurrencyAmtIcon",
                      style: {
                        color: SF.iconColour
                      },
                      children: (0, RF.jsx)(HS, {
                        iconName: SF.icon
                      })
                    }), "\xa0", (0, TS.d)(SF.amount, 6)]
                  }), (null === (WF = SF.subtext) || void 0 === WF ? void 0 : WF.length) > 0 && (0, RF.jsx)("div", {
                    className: "ShopCurrencySubtext",
                    children: (0, RF.jsx)(NS.d, {
                      text: SF.subtext
                    })
                  })]
                }, FF)
              }))
            })]
          }), (0, RF.jsxs)("div", {
            className: "MenuBody ShopMenuBody",
            children: [(0, RF.jsx)("div", {
              className: uF()("ShopOnBoughtInfo", {
                ShopOnBoughtInfoShow: null !== PF.onBoughtInfo
              }),
              children: (0, RF.jsx)(NS.d, {
                text: EF.current
              })
            }), (0, RF.jsx)("div", {
              className: "ShopItemsWrapper",
              children: (0, RF.jsxs)("div", {
                className: "ShopItemsInner",
                children: [(null === (WF = PF.shopInfo[sF]) || void 0 === WF ? void 0 : WF.description) && (0, RF.jsx)("div", {
                  className: "ShopCategoryDescription",
                  children: (0, RF.jsx)(NS.d, {
                    text: PF.shopInfo[sF].description
                  })
                }), AF && (0, RF.jsx)("div", {
                  className: "ShopItems",
                  ref: rW,
                  "data-pad-initial-area": !0,
                  children: YS(null === (SF = PF.shopInfo[sF]) || void 0 === SF ? void 0 : SF.items).map(((FF, WF) => KF(FF, WF)))
                })]
              })
            })]
          })]
        })
      })
    }));

    function GS(FF) {
      let {
        item: WF,
        minWidth: SF,
        minHeight: CF
      } = FF;
      const {
        image: AF,
        schematicId: uF,
        imageColour: hF
      } = WF;
      if (uF) return (0, RF.jsx)("div", {
        className: "ShopSchematic",
        style: {
          width: `${SF}rem`,
          height: `${CF}rem`
        },
        children: (0, RF.jsx)(DS.c, {
          game: {
            schematicId: uF
          }
        })
      });
      var dF, PF;
      if ((0, VS.c)(AF)) return (0, RF.jsx)("div", {
        className: "ShopBlock",
        style: {
          minWidth: `${SF}rem`,
          height: "0",
          minHeight: `${CF}rem`
        },
        children: (0, RF.jsx)(VS.b, {
          itemName: AF,
          amount: null !== (dF = WF.amount) && void 0 !== dF ? dF : 0,
          amountFontSize: CF / 4 + "rem",
          enchantmentTier: null === (PF = WF.enchant) || void 0 === PF ? void 0 : PF.tier
        })
      });
      const iW = AF.slice(-4);
      return ".jpg" === iW || ".png" === iW ? (0, RF.jsx)(zC, {
        image: AF,
        minWidth: SF
      }) : (0, RF.jsx)(bW.e, {
        name: AF,
        className: "SelectedItemImage",
        style: {
          color: hF
        }
      })
    }

    function zC(FF) {
      let {
        image: WF,
        minWidth: SF
      } = FF;
      const {
        gameNameWithVariation: CF
      } = (0, UW.e)("connectedGame"), AF = WF.endsWith(".jpg");
      return (0, RF.jsx)("img", {
        className: uF()({
          ShopPixelImage: !AF
        }),
        style: {
          width: `${AF?1.6*SF:SF}rem`,
          height: "auto",
          fontSize: "1.25rem"
        },
        src: `/textures/games/${(0,nF.Yb)(CF)}/${WF}`,
        alt: WF,
        draggable: !1
      })
    }

    function IS(FF) {
      let {
        item: WF,
        cost: SF,
        currencyAmounts: CF
      } = FF;
      const AF = !isNaN(SF) && 0 !== SF && MS(CF, WF.currency);
      let uF = null;
      return WF.buyButtonText ? uF = WF.buyButtonText : AF ? (uF = SF, WF.sell && (uF = -1 * SF), uF = uF.toString()) : 0 === SF ? uF = "Free" : WF.isRewardedAd && (uF = "Watch ad"), (0, mS.Q)(uF) || " " === uF ? null : (0, RF.jsxs)("div", {
        className: "BuyItemCostAndIcon",
        children: [AF && (0, RF.jsx)("div", {
          style: {
            color: CF[WF.currency].iconColour
          },
          className: "BuyItemIcon",
          children: (0, RF.jsx)(HS, {
            iconName: CF[WF.currency].icon
          })
        }), (0, RF.jsx)("div", {
          className: "BuyItemCost",
          children: (0, RF.jsx)(NS.d, {
            text: uF
          })
        })]
      })
    }

    function fS(FF) {
      let {
        item: WF,
        currInput: SF,
        updateInput: AF,
        onSubmit: uF
      } = FF;
      const {
        t: bW
      } = (0, hF.B)(), dF = (0, CF.useRef)(null);
      if ((0, CF.useEffect)((() => {
          const FF = dF.current;
          FF && FF.value !== SF && document.activeElement !== FF && (FF.value = null !== SF && void 0 !== SF ? SF : "")
        }), [SF]), !WF.userInput) return null;
      let PF = WF.userInput;
      if (tW.featureFlags.sanitizeShopInput && "text" === WF.userInput.type && (PF = {
          type: "number",
          placeholderText: "Numbers Only"
        }), "text" === PF.type || "number" === PF.type) {
        var iW, eF;
        console.assert(void 0 !== SF, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(WF)}`);
        const FF = "text" === PF.type && PF.wordCharsOnly;
        return (0, RF.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputTextWrapper",
          children: (0, RF.jsx)(qW.d, {
            className: "ShopItemUserInputText",
            placeholderText: bW(PF.placeholderText),
            defaultValue: SF,
            domRef: dF,
            onValueChange: (WF, SF) => {
              !0 === FF && (WF = (0, mC.lb)(WF)), dF.current.value = WF, AF(WF)
            },
            onEnter: uF,
            type: PF.type
          }, (null !== (iW = PF.initialValue) && void 0 !== iW ? iW : "") + (null !== (eF = PF.placeholderText) && void 0 !== eF ? eF : ""))
        })
      }
      if ("dropdown" === PF.type) {
        console.assert(void 0 !== SF, `Rendered ItemUserInput but currInput is undefined. Item: ${JSON.stringify(WF)}`);
        const FF = PF.autoSubmit;
        return (0, RF.jsx)("div", {
          className: "ShopItemUserInput ShopItemUserInputDropdown",
          children: (0, RF.jsx)(hW.c, {
            options: PF.dropdownOptions.map((FF => (0, aC.e)(FF))),
            value: SF,
            onChange: WF => {
              let {
                value: SF
              } = WF;
              AF(SF), FF && uF(SF)
            }
          })
        })
      }
      return "player" === PF.type ? (0, RF.jsx)(yC, {
        userInput: PF,
        currInput: SF,
        updateInput: AF
      }) : "color" === PF.type ? (0, RF.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputColor",
        children: (0, RF.jsx)("input", {
          type: "color",
          value: SF,
          onChange: FF => {
            AF(FF.target.value)
          }
        })
      }) : null
    }

    function yC(FF) {
      let {
        userInput: WF,
        currInput: SF,
        updateInput: CF
      } = FF;
      const AF = (0, UW.e)("players"),
        uF = (0, UW.e)("hiddenPlayerNames"),
        hF = (0, aC.i)(AF.ids, AF.localId, WF);
      return (0, RF.jsx)("div", {
        className: "ShopItemUserInput ShopItemUserInputDropdown",
        children: (0, RF.jsx)(hW.c, {
          options: hF.map((FF => {
            const {
              name: WF
            } = AF.byId[FF];
            return {
              value: FF,
              label: null === WF ? "" : (0, LS.g)(WF, uF)
            }
          })),
          value: SF,
          onChange: FF => {
            let {
              value: WF
            } = FF;
            CF(WF)
          }
        })
      })
    }

    function sS(FF) {
      let {
        ids: WF
      } = FF;
      return WF
    }

    function nS(FF) {
      let {
        localId: WF
      } = FF;
      return WF
    }

    function HS(FF) {
      let {
        iconName: WF
      } = FF;
      return TF.gameBridge.lookup("isItemName", WF) ? (0, RF.jsx)(VS.b, {
        itemName: WF,
        amount: 1
      }) : (0, RF.jsx)(bW.e, {
        name: WF,
        className: "2x"
      })
    }
    var KS = SF(1475);
    const wS = (0, SF(1234).k)((FF => FF.PadLobbyShortcuts)),
      XS = (0, CF.lazy)((() => Promise.resolve().then((() => SF(3676))).then((FF => ({
        default: FF.Lobbyleaderboard
      })))));

    function US(FF) {
      let {
        show: WF
      } = FF;
      return WF ? (0, RF.jsxs)(RF.Fragment, {
        children: [(0, RF.jsx)(wS, {}), (0, RF.jsx)(CF.Suspense, {
          fallback: (0, RF.jsx)("div", {
            className: "CharacterCustomisationLoading",
            children: (0, RF.jsx)(VF.c, {})
          }),
          children: (0, RF.jsx)(XS, {})
        })]
      }) : null
    }
    var BS = SF(1404),
      jC = SF(2107),
      vC = SF(1328),
      JS = SF(1273),
      pS = SF(2273),
      lS = SF(1750),
      FC = SF(2288),
      WC = SF(1890);
    const SC = "storeRecentGiftRecipients",
      CC = new Map;

    function AC() {
      try {
        const FF = ZW.h.getItem(SC);
        return Array.isArray(FF) ? FF.filter((FF => "string" === typeof(null === FF || void 0 === FF ? void 0 : FF.name) && FF.name.length > 0)).map((FF => ({
          name: FF.name,
          cosmetics: FF.cosmetics && "object" === typeof FF.cosmetics ? FF.cosmetics : null
        }))) : []
      } catch {
        return []
      }
    }

    function uC(FF) {
      var WF;
      const [SF, AF] = (0, CF.useState)(""), [uF, hF] = (0, CF.useState)("search"), [bW, dF] = (0, CF.useState)(null), [PF, RF] = (0, CF.useState)(null), iW = (0, CF.useRef)(null), eF = (0, CF.useRef)(null);
      (0, CF.useEffect)((() => () => {
        iW.current && clearTimeout(iW.current)
      }), []);
      const EF = null !== (WF = null === bW || void 0 === bW ? void 0 : bW.name) && void 0 !== WF ? WF : null;

      function QF() {
        iW.current && (clearTimeout(iW.current), iW.current = null)
      }(0, CF.useEffect)((() => {
        if (null === EF) return;
        const WF = EF.toLowerCase();
        if (WF === FF.getPlayerName().toLowerCase()) return void RF({
          name: EF,
          result: {
            giftRecipientFound: !1,
            giftRecipientError: "store:giftRecipientIsYou"
          }
        });
        const SF = CC.get(WF);
        if (SF) return void RF({
          name: EF,
          result: SF
        });
        let CF = !1;
        return async function(FF, WF) {
          try {
            const SF = await (0, oF.postJsonWithMetricsCookiesAndJsonResponse)(`${YF.clientSideServerUrls.indexUrl}/index/xsolla/gift-recipient`, {
              giftRecipientName: WF
            }, {
              retries: 1
            }, FF.getMetricsCookies());
            if ("boolean" !== typeof(null === SF || void 0 === SF ? void 0 : SF.giftRecipientFound)) throw new Error(`Unexpected gift recipient lookup response: ${JSON.stringify(SF)}`);
            return SF
          } catch (SF) {
            return console.error("Failed to look up gift recipient:", SF), {
              giftRecipientFound: !1,
              giftRecipientError: "store:giftRecipientLookupFailed"
            }
          }
        }(FF, EF).catch((FF => (console.error("Gift recipient lookup failed:", FF), {
          giftRecipientFound: !1,
          giftRecipientError: "store:giftRecipientLookupFailed"
        }))).then((FF => {
          !0 !== FF.giftRecipientFound && "store:giftRecipientLookupFailed" === FF.giftRecipientError || CC.set(WF, FF), CF || RF({
            name: EF,
            result: FF
          })
        })), () => {
          CF = !0
        }
      }), [EF, FF]);
      const rW = (0, CF.useMemo)((() => {
        const FF = SF.trim();
        if (!FF) return {
          status: "none"
        };
        if (!bW || bW.name !== FF || (null === PF || void 0 === PF ? void 0 : PF.name) !== bW.name) return {
          status: "pending",
          name: FF
        };
        const WF = PF.result;
        return !1 === WF.giftRecipientFound ? {
          status: "error",
          name: bW.name,
          error: WF.giftRecipientError
        } : {
          status: "found",
          name: WF.giftRecipientName,
          ownedPacks: WF.giftRecipientOwnedPacks,
          superRankDaysLeft: WF.giftRecipientSuperRankDaysLeft
        }
      }), [SF, bW, PF]);
      (0, CF.useEffect)((() => {
        "found" === rW.status && "typed" === (null === bW || void 0 === bW ? void 0 : bW.source) && eF.current !== rW.name && (eF.current = rW.name, (0, BF.d)({
          id: "store.gift_recipient",
          value: "typed"
        }))
      }), [rW, bW]);
      const gW = (null === PF || void 0 === PF ? void 0 : PF.name) === (null === bW || void 0 === bW ? void 0 : bW.name) ? null === PF || void 0 === PF ? void 0 : PF.result : null,
        tW = !0 === (null === gW || void 0 === gW ? void 0 : gW.giftRecipientFound) ? gW.giftRecipientCosmetics : null;
      return {
        query: SF,
        via: uF,
        recipient: rW,
        recipientCosmetics: tW,
        type: function(FF) {
          AF(FF), hF("search"), QF();
          const WF = FF.trim();
          WF ? iW.current = setTimeout((() => {
            dF({
              name: WF,
              source: "typed"
            })
          }), 400) : dF(null)
        },
        choose: function(FF, WF) {
          QF(), AF(FF), hF("typed" === WF ? "search" : "prefilled" === WF ? "prefilled" : "suggestion"), dF({
            name: FF,
            source: WF
          }), "typed" !== WF && "prefilled" !== WF && (0, BF.d)({
            id: "store.gift_recipient",
            value: WF
          })
        },
        clear: function() {
          QF(), AF(""), hF("search"), dF(null)
        },
        recordGift: function(FF, WF) {
          ! function(FF) {
            CC.delete(FF.toLowerCase())
          }(FF), RF((SF => {
            if (!SF || SF.name.toLowerCase() !== FF.toLowerCase() || !0 !== SF.result.giftRecipientFound || "superRank" === WF) return SF;
            const CF = SF.result.giftRecipientOwnedPacks;
            return {
              ...SF,
              result: {
                ...SF.result,
                giftRecipientOwnedPacks: CF.includes(WF) ? CF : [...CF, WF]
              }
            }
          }))
        }
      }
    }
    var hC = SF(1883),
      bA = SF(553),
      dC = SF(1481),
      PC = SF(1923),
      RC = SF(2012);

    function iA(FF) {
      let {
        cosmetics: WF
      } = FF;
      return (0, RF.jsx)("span", {
        className: "StoreRecipientAvatar",
        children: (0, RF.jsx)(PC.d, {
          cosmetics: WF
        })
      })
    }

    function eC(FF, WF) {
      var SF, CF;
      const AF = null !== (SF = FF.friend) && void 0 !== SF ? SF : {
        isError: !1,
        name: FF.name,
        ranks: [],
        cosmetics: null !== (CF = FF.cosmetics) && void 0 !== CF ? CF : {},
        nameColour: bA.c,
        location: {
          status: "noGamePlayed"
        }
      };
      return WF ? {
        ...AF,
        cosmetics: WF
      } : AF
    }

    function EC(FF) {
      let {
        recipient: WF
      } = FF;
      return "pending" === WF.status ? (0, RF.jsx)("span", {
        className: "StoreRecipientStatus",
        children: (0, RF.jsx)(VF.c, {})
      }) : "found" === WF.status ? (0, RF.jsx)(bW.e, {
        name: "check",
        className: "StoreRecipientStatus StoreRecipientStatusFound"
      }) : null
    }

    function QC(FF) {
      var WF;
      let {
        selfName: SF,
        giftRecipient: AF,
        suggestionsVersion: dF,
        pulseSignal: PF,
        disabled: iW
      } = FF;
      const {
        t: eF
      } = (0, hF.B)(), EF = (0, dC.n)(), QF = (0, CF.useRef)(null), rW = (0, CF.useRef)(null), {
        query: TF,
        via: aW,
        recipient: kW,
        recipientCosmetics: VF
      } = AF, NF = (0, WC.q)(TF), DF = (0, CF.useMemo)((() => {
        const FF = tW.featureFlags.useSocialFeatures ? EF.friends.filter((FF => !FF.isError)) : [];
        return (0, WC.n)({
          onlineFriends: (0, dC.h)(FF),
          recentRecipients: AC(),
          friends: FF,
          selfName: SF,
          max: 8
        })
      }), [EF.friends, SF, dF]), LF = TF.trim().toLowerCase(), mW = "search" !== aW && LF ? DF.find((FF => FF.name.toLowerCase() === LF)) : void 0, OF = mW && "prefilled" === aW ? [mW, ...DF.filter((FF => FF !== mW))] : DF, xW = "" !== LF && !mW, ZF = xW ? TF : "", oF = OF.length > 0;

      function YF() {
        "self" !== NF && (0, BF.d)({
          id: "store.mode",
          value: "self"
        }), AF.clear()
      }

      function MF(FF) {
        var WF, SF;
        if (iW) return;
        if (" " === FF.key || "Enter" === FF.key) return FF.preventDefault(), void FF.currentTarget.click();
        const CF = Array.from(null !== (WF = null === (SF = rW.current) || void 0 === SF ? void 0 : SF.querySelectorAll("[role=radio]")) && void 0 !== WF ? WF : []),
          AF = CF.indexOf(FF.currentTarget);
        let uF;
        "ArrowRight" === FF.key || "ArrowDown" === FF.key ? uF = CF[(AF + 1) % CF.length] : "ArrowLeft" === FF.key || "ArrowUp" === FF.key ? uF = CF[(AF - 1 + CF.length) % CF.length] : "Home" === FF.key ? uF = CF[0] : "End" === FF.key && (uF = CF[CF.length - 1]), uF && (FF.preventDefault(), uF.focus(), uF.click())
      }(0, CF.useEffect)((() => {
        QF.current && QF.current.value !== ZF && (QF.current.value = ZF)
      }), [ZF]), (0, CF.useEffect)((() => {
        QF.current && (QF.current.disabled = iW)
      }), [iW, PF]), (0, CF.useEffect)((() => {
        var FF;
        PF > 0 && (null === (FF = QF.current) || void 0 === FF || FF.focus())
      }), [PF]);
      const cW = "self" === NF,
        GF = null !== (WF = null === mW || void 0 === mW ? void 0 : mW.name) && void 0 !== WF ? WF : null,
        IF = "error" === kW.status ? kW.error : null,
        fF = "store:giftRecipientLookupFailed" === IF;
      return (0, RF.jsxs)("div", {
        className: uF()("StoreRecipientStrip", {
          StoreRecipientStripDisabled: iW,
          StoreRecipientStripNoChips: !oF
        }),
        children: [(0, RF.jsx)("span", {
          className: "StoreRecipientLabel",
          "aria-hidden": !0,
          children: eF("store:buyingFor")
        }), (0, RF.jsxs)("div", {
          ref: rW,
          className: "StoreRecipientRadios",
          role: "radiogroup",
          "aria-label": eF("store:whoIsItFor"),
          children: [(0, RF.jsxs)("div", {
            role: "radio",
            "data-pad-focusable": !0,
            "aria-checked": cW,
            tabIndex: iW || !cW && null !== GF ? -1 : 0,
            className: uF()("StoreRecipientMe", {
              StoreRecipientChecked: cW
            }),
            onClick: () => {
              iW || YF()
            },
            onKeyDown: MF,
            children: [(0, RF.jsx)(bW.e, {
              name: "user"
            }), " ", eF("store:me")]
          }), oF && (0, RF.jsx)("div", {
            className: "StoreRecipientChips",
            children: OF.map((FF => {
              const WF = FF === mW;
              return (0, RF.jsx)("div", {
                role: "radio",
                "data-pad-focusable": !0,
                "aria-checked": WF,
                tabIndex: !iW && WF ? 0 : -1,
                title: FF.name,
                className: uF()("StoreRecipientChip", {
                  StoreRecipientChecked: WF
                }),
                onClick: () => {
                  iW || function(FF) {
                    "gift" !== NF && (0, BF.d)({
                      id: "store.mode",
                      value: "gift"
                    }), AF.choose(FF.name, FF.kind)
                  }(FF)
                },
                onKeyDown: MF,
                children: (0, RF.jsx)(RC.d, {
                  playerSocialPreview: eC(FF, WF ? VF : null),
                  opensProfileCard: !1,
                  isFriend: null !== FF.friend,
                  hideFriendBadge: !0,
                  showLocation: null !== FF.friend,
                  status: null === FF.friend ? null : void 0,
                  trailing: WF ? (0, RF.jsx)(EC, {
                    recipient: kW
                  }) : void 0
                })
              }, FF.name)
            }))
          })]
        }), (0, RF.jsxs)("div", {
          className: uF()("StoreRecipientSearch", {
            StoreRecipientChecked: xW,
            StoreRecipientSearchPulse: PF > 0 && !xW,
            StoreRecipientSearchError: null !== IF && !fF
          }),
          onClick: () => {
            var FF;
            null === (FF = QF.current) || void 0 === FF || FF.focus()
          },
          children: [xW && "found" === kW.status && VF && (0, RF.jsx)(iA, {
            cosmetics: VF
          }), !(xW && "found" === kW.status && VF) && (0, RF.jsx)(bW.e, {
            name: "magnifying-glass",
            className: "StoreRecipientSearchIcon"
          }), (0, RF.jsx)(qW.d, {
            className: "StoreRecipientSearchInput",
            domRef: QF,
            placeholderText: eF("store:searchName"),
            defaultValue: ZF,
            maxLength: zW.i,
            onValueChange: function(FF) {
              "gift" !== NF && FF.trim() && (0, BF.d)({
                id: "store.mode",
                value: "gift"
              }), AF.type(FF)
            },
            onEnter: () => {
              var FF;
              const WF = null === (FF = QF.current) || void 0 === FF ? void 0 : FF.value.trim();
              WF && AF.choose(WF, "typed")
            },
            blurOnEnter: !0
          }), xW && (0, RF.jsx)(EC, {
            recipient: kW
          }), xW && (0, RF.jsx)("div", {
            ...(0, gW.Q)({
              disabled: iW
            }),
            "aria-label": eF("store:clearRecipient"),
            title: eF("store:clearRecipient"),
            className: "StoreRecipientClear",
            onClick: FF => {
              FF.stopPropagation(), iW || YF()
            },
            children: (0, RF.jsx)(bW.e, {
              name: "xmark"
            })
          })]
        }, PF), IF && (0, RF.jsx)("div", {
          className: uF()("StoreRecipientPopover", {
            StoreRecipientPopoverSoft: fF
          }),
          role: "status",
          children: eF(IF)
        })]
      })
    }
    var rA = SF(1834),
      gA = SF(2305),
      tA = SF(1857);
    const TC = [bA.u.yellow, bA.u.green, bA.u.aqua, bA.u.blue, bA.u.purple, bA.u.red];

    function aA(FF) {
      return "needsRecipient" === FF || "lookingUp" === FF || "gift" === FF || "recipientOwns" === FF
    }

    function kA(FF) {
      const {
        onKeyDown: WF,
        ...SF
      } = (0, gW.Q)();
      return {
        ...SF,
        "aria-label": FF,
        onKeyDown: FF => {
          FF.target === FF.currentTarget && (null === WF || void 0 === WF || WF(FF))
        }
      }
    }

    function qA(FF) {
      let {
        text: WF
      } = FF;
      return (0, RF.jsx)("span", {
        className: "StoreRainbowText",
        children: Array.from(WF).map(((FF, WF) => (0, RF.jsx)("span", {
          style: {
            color: TC[WF % TC.length]
          },
          children: FF
        }, WF)))
      })
    }

    function VC(FF) {
      let {
        state: WF,
        item: SF,
        price: CF,
        busy: AF,
        highlight: dF = !1,
        onAct: PF,
        onNeedRecipient: iW,
        onLogin: eF = lS.b
      } = FF;
      const {
        t: EF
      } = (0, hF.B)(), QF = "superRank" === SF ? fF.i.product.days : null, rW = FF => null === QF ? EF(FF ? "general:gift" : "general:buy") : EF(FF ? "store:giftDays" : "store:buyDays", {
        days: QF
      }), tW = (FF, WF) => (0, RF.jsxs)(RF.Fragment, {
        children: [WF && (0, RF.jsx)("span", {
          className: "StoreCtaIcon",
          children: WF
        }), (0, RF.jsx)("span", {
          className: "StoreCtaLabel",
          title: FF,
          children: FF
        }), (0, RF.jsxs)("span", {
          className: "StoreCtaPrice",
          children: ["\xb7", (0, RF.jsx)(tA.d, {
            amount: CF
          })]
        })]
      });
      let TF;
      switch (WF) {
        case "login":
          TF = (0, RF.jsx)(gW.k, {
            className: "StoreCtaButton",
            onClick: eF,
            children: tW(EF("store:logIn"))
          });
          break;
        case "owned":
          TF = (0, RF.jsx)(gW.f, {
            className: "StoreCtaButton",
            onClick: () => {
              DF.b.set({
                openEverythingMenuName: pW.n.CUSTOMISATION
              })
            },
            children: (0, RF.jsxs)("span", {
              className: "StoreCtaLabel",
              children: [(0, RF.jsx)(bW.e, {
                name: "shirt"
              }), " ", EF("store:equip")]
            })
          });
          break;
        case "recipientOwns":
          TF = (0, RF.jsx)(gW.k, {
            className: "StoreCtaButton",
            disabled: !0,
            children: (0, RF.jsx)("span", {
              className: "StoreCtaLabel",
              children: EF("store:alreadyOwns")
            })
          });
          break;
        case "needsRecipient":
        case "lookingUp":
        case "gift":
          TF = (0, RF.jsx)(gW.k, {
            className: "StoreCtaButton",
            disabled: "needsRecipient" === WF || null === CF,
            loading: "lookingUp" === WF || AF,
            onClick: PF,
            analyticsClick: {
              id: "store.gift",
              value: SF
            },
            children: tW(rW(!0), WC.d)
          });
          break;
        case "buy":
        case "recharge":
          TF = (0, RF.jsx)(gW.k, {
            className: "StoreCtaButton",
            loading: AF,
            disabled: null === CF,
            onClick: PF,
            analyticsClick: {
              id: "store.buy",
              value: SF
            },
            children: tW(rW(!1))
          })
      }
      return (0, RF.jsx)("div", {
        className: uF()("StoreCta", {
          StoreCtaHighlight: dF
        }),
        onClick: FF => {
          FF.stopPropagation(), "needsRecipient" === WF && iW()
        },
        children: TF
      })
    }

    function NC() {
      const {
        t: FF
      } = (0, hF.B)();
      return (0, RF.jsxs)("ul", {
        className: "StorePerks",
        children: [(0, RF.jsxs)("li", {
          children: [(0, RF.jsx)(bW.e, {
            name: "check"
          }), (0, RF.jsx)(qA, {
            text: FF("store:colourfulNames")
          })]
        }), (0, RF.jsxs)("li", {
          children: [(0, RF.jsx)(bW.e, {
            name: "check"
          }), FF("store:perkCapes")]
        }), (0, RF.jsxs)("li", {
          children: [(0, RF.jsx)(bW.e, {
            name: "check"
          }), FF("store:perkNoAdverts")]
        }), (0, RF.jsxs)("li", {
          children: [(0, RF.jsx)(bW.e, {
            name: "check"
          }), FF("store:perkFriends", {
            count: (0, XF.d)(["super"])
          })]
        })]
      })
    }

    function DC(FF) {
      let {
        daysLeft: WF,
        totalDays: SF,
        urgent: CF
      } = FF;
      const {
        t: AF
      } = (0, hF.B)(), bW = SF > 0 ? Math.min(1, Math.max(.03, WF / SF)) : 1;
      return (0, RF.jsxs)("div", {
        className: uF()("StoreSuperRankMeterArea", {
          StoreSuperRankMeterUrgent: CF
        }),
        children: [(0, RF.jsx)("span", {
          className: "StoreSuperRankDaysLeft",
          children: 1 === WF ? AF("store:oneDayLeft") : AF("store:daysLeft", {
            days: WF
          })
        }), (0, RF.jsx)("div", {
          className: "StoreSuperRankMeter",
          children: (0, RF.jsx)("i", {
            style: {
              width: 100 * bW + "%"
            }
          })
        })]
      })
    }

    function LC(FF) {
      let {
        state: WF,
        urgent: SF,
        daysLeft: CF,
        totalDays: AF,
        recipientSuperRankDaysLeft: dF,
        busy: PF,
        highlight: iW,
        onOpen: eF,
        onAct: EF,
        onNeedRecipient: QF,
        onLogin: rW
      } = FF;
      const {
        t: gW
      } = (0, hF.B)(), tW = aA(WF), {
        days: TF
      } = fF.i.product, aW = gW("store:recipientHasSuperRank", {
        days: dF,
        giftDays: TF
      });
      return (0, RF.jsxs)("div", {
        className: uF()("StoreTile StoreSuperRankTile", {
          StoreTileGift: tW,
          StoreSuperRankTileUrgent: "recharge" === WF && SF,
          StoreSuperRankTileWithChip: tW && "gift" === WF && null !== dF,
          StoreSuperRankTileGiftReady: "gift" === WF
        }),
        ...kA(gW("homePage:superRank")),
        "data-store-item": "superRank",
        onClick: eF,
        children: [(0, RF.jsx)("div", {
          className: "StoreSuperRankArt",
          style: {
            backgroundImage: "url(/textures/charSkins/previews/cape_super_preview.png)"
          }
        }), tW && (0, RF.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, RF.jsxs)("div", {
          className: "StoreTileContent",
          children: [tW && "gift" === WF && null !== dF && (0, RF.jsx)("span", {
            className: "StoreChip StoreChipGift",
            title: aW,
            children: aW
          }), (0, RF.jsxs)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: [(0, RF.jsx)(bW.e, {
              name: "bolt"
            }), " ", gW("homePage:superRank")]
          }), tW && (0, RF.jsx)("div", {
            className: "StoreTilePitch",
            children: gW("store:giftPitch", {
              days: TF
            })
          }), "recharge" === WF && (0, RF.jsx)(DC, {
            daysLeft: CF,
            totalDays: AF,
            urgent: SF
          }), (0, RF.jsx)(NC, {}), (0, RF.jsxs)("div", {
            className: "StoreTileActions",
            children: [(0, RF.jsx)(VC, {
              state: WF,
              item: "superRank",
              price: fF.i.price,
              busy: PF,
              highlight: iW,
              onAct: EF,
              onNeedRecipient: QF,
              onLogin: rW
            }), "needsRecipient" === WF && (0, RF.jsx)("span", {
              className: "StoreTileNote StoreTileNoteGift",
              children: gW("store:pickRecipientFirst")
            }), "recharge" === WF && SF && (0, RF.jsx)("span", {
              className: "StoreTileNote StoreSuperRankEnding",
              children: 1 === CF ? gW("store:endsInOneDay") : gW("store:endsInDays", {
                days: CF
              })
            })]
          })]
        })]
      })
    }
    const mA = {
      standard: "StorePackTileStandard",
      enhanced: "StorePackTileEnhanced",
      premium: "StorePackTilePremium"
    };

    function OC(FF) {
      var WF;
      let {
        pack: SF,
        state: CF,
        busy: AF,
        onOpen: dF,
        onAct: PF,
        onNeedRecipient: iW,
        onLogin: eF
      } = FF;
      const {
        t: EF
      } = (0, hF.B)(), QF = BS.d[SF], rW = pS.m[SF], gW = Object.entries(gA.b).filter((FF => {
        let [, WF] = FF;
        return WF.cosmeticPack === SF
      })), tW = aA(CF), TF = null !== (WF = QF.displayName) && void 0 !== WF ? WF : SF;
      return (0, RF.jsxs)("div", {
        className: uF()("StoreTile StorePackTile", QF.tier && mA[QF.tier], {
          StorePackTileOwned: "owned" === CF,
          StorePackTileRecipientOwns: "recipientOwns" === CF,
          StoreTileGift: tW
        }),
        ...kA(TF),
        "data-store-item": SF,
        onClick: dF,
        children: [rW && (0, RF.jsx)(rW, {}), (0, RF.jsx)("div", {
          className: "StorePackCharacters",
          children: gW.map((FF => {
            let [WF] = FF;
            return (0, RF.jsx)("div", {
              className: "StorePackCharacter",
              style: {
                backgroundImage: `url(/textures/charSkins/previews/character_${WF}_preview.png)`
              }
            }, WF)
          }))
        }), (0, RF.jsx)("div", {
          className: "StoreTileScrim"
        }), tW && (0, RF.jsx)("div", {
          className: "StoreGiftRibbon"
        }), (0, RF.jsxs)("div", {
          className: "StoreTileContent",
          children: [(0, RF.jsx)("div", {
            className: "StoreTileTitle",
            children: TF
          }), (0, RF.jsxs)("div", {
            className: "StoreTileMeta",
            children: [EF("store:itemCount", {
              count: (0, rA.o)(SF)
            }), "owned" === CF && (0, RF.jsxs)("span", {
              className: "StoreTileOwned",
              children: [" \xb7 ", (0, RF.jsx)(bW.e, {
                name: "check"
              }), " ", EF("general:owned")]
            })]
          }), (0, RF.jsx)(VC, {
            state: CF,
            item: SF,
            price: (0, fF.e)(SF),
            busy: AF,
            onAct: PF,
            onNeedRecipient: iW,
            onLogin: eF
          })]
        })]
      })
    }
    var xA = SF(2309);

    function ZC(FF) {
      let {
        layout: WF,
        bundleGift: SF,
        superRankDaysLeft: CF,
        superRankTotalDays: AF,
        busy: uF,
        highlightItem: hF,
        onOpen: bW,
        onAct: dF,
        onNeedRecipient: PF,
        onLogin: iW
      } = FF;
      return (0, RF.jsxs)(RF.Fragment, {
        children: [(0, RF.jsx)(xA.c, {
          className: "StoreSuperGems",
          gift: SF
        }), (0, RF.jsx)(LC, {
          state: WF.superRank.state,
          urgent: WF.superRank.urgent,
          daysLeft: CF,
          totalDays: AF,
          recipientSuperRankDaysLeft: WF.recipientSuperRankDaysLeft,
          busy: uF,
          highlight: "superRank" === hF,
          onOpen: () => {
            bW("superRank")
          },
          onAct: () => {
            dF("superRank")
          },
          onNeedRecipient: PF,
          onLogin: () => {
            iW("superRank")
          }
        }), (0, RF.jsx)("div", {
          className: "StorePackGrid",
          children: WF.packs.map((FF => (0, RF.jsx)(OC, {
            pack: FF.pack,
            state: FF.state,
            busy: uF,
            onOpen: () => {
              bW(FF.pack)
            },
            onAct: () => {
              dF(FF.pack)
            },
            onNeedRecipient: PF,
            onLogin: () => {
              iW(FF.pack)
            }
          }, FF.pack)))
        })]
      })
    }
    var oC = SF(2773),
      YC = SF(2325);

    function MC(FF) {
      let {
        onBack: WF,
        cta: SF,
        recipient: AF,
        afterCta: uF
      } = FF;
      const {
        t: dF
      } = (0, hF.B)(), [PF, iW] = (0, CF.useState)(!0), eF = (0, CF.useRef)(null);
      return (0, CF.useEffect)((() => {
        const FF = eF.current;
        let WF;

        function SF() {
          iW(!1)
        }

        function CF() {
          clearTimeout(WF), WF = setTimeout((() => {
            FF.play().catch((FF => {
              (0, oC.b)("Failed to replay Super Rank video", FF)
            }))
          }), 3e3)
        }
        return FF.addEventListener("loadeddata", SF), FF.addEventListener("ended", CF), () => {
          clearTimeout(WF), FF.removeEventListener("loadeddata", SF), FF.removeEventListener("ended", CF)
        }
      }), []), (0, RF.jsxs)("div", {
        className: "StoreSuperRankDetail",
        children: [(0, RF.jsxs)("div", {
          className: "StoreDetailHeader",
          children: [(0, RF.jsx)(gW.c, {
            className: "StoreDetailBackButton",
            onClick: WF,
            padBack: !0,
            children: dF("general:back")
          }), (0, RF.jsxs)("div", {
            className: "StoreTileTitle StoreSuperRankTitle",
            children: [(0, RF.jsx)(bW.e, {
              name: "bolt"
            }), " ", dF("homePage:superRank")]
          }), AF]
        }), (0, RF.jsxs)("div", {
          className: "StoreSuperRankDetailBody",
          children: [(0, RF.jsxs)("div", {
            className: "StoreSuperRankVideo",
            children: [PF && (0, RF.jsx)(VF.c, {}), (0, RF.jsx)("video", {
              ref: eF,
              autoPlay: !0,
              muted: !0,
              playsInline: !0,
              controls: !0,
              children: (0, RF.jsx)("source", {
                src: `${YF.clientSideServerUrls.staticUrl}/videos/SuperRankPreview.mp4`,
                type: "video/mp4"
              })
            })]
          }), (0, RF.jsxs)("div", {
            className: "StoreSuperRankDetailSide",
            children: [(0, RF.jsx)("div", {
              className: "StoreSuperRankDetailTable",
              children: (0, RF.jsx)(YC.b, {})
            }), (0, RF.jsxs)("div", {
              className: "StoreTileActions",
              children: [SF, uF]
            })]
          })]
        })]
      })
    }

    function cA(FF) {
      let {
        state: WF,
        mode: SF,
        giftName: CF,
        busy: AF,
        highlight: uF,
        purchaseError: bW,
        onBack: dF,
        onChooseRecipient: PF,
        onAct: iW,
        onLogin: eF
      } = FF;
      const {
        t: EF
      } = (0, hF.B)();
      return (0, RF.jsx)(MC, {
        onBack: dF,
        recipient: "gift" === SF && (0, RF.jsxs)(RF.Fragment, {
          children: [CF && (0, RF.jsxs)("span", {
            className: "StoreDetailRecipient",
            title: EF("store:giftFor", {
              name: CF
            }),
            children: [WC.d, " ", EF("store:giftFor", {
              name: CF
            })]
          }), !CF && (0, RF.jsxs)("div", {
            ...(0, gW.Q)(),
            className: "StoreDetailRecipient StoreDetailRecipientChoose",
            onClick: PF,
            children: [WC.d, " ", EF("store:chooseRecipient")]
          })]
        }),
        cta: (0, RF.jsx)(VC, {
          state: WF,
          item: "superRank",
          price: fF.i.price,
          busy: AF,
          highlight: uF,
          onAct: iW,
          onNeedRecipient: PF,
          onLogin: eF
        }),
        afterCta: (0, RF.jsx)(RF.Fragment, {
          children: bW && (0, RF.jsx)("span", {
            className: "StoreTileNote StoreTileNoteError",
            children: EF(bW)
          })
        })
      })
    }
    const GC = {
      kind: "board"
    };
    let zA = !1;

    function IC(FF) {
      return "superRank" === FF.kind ? "superRank" : "pack" === FF.kind ? FF.pack : null
    }

    function fC(FF) {
      return "found" === FF.status || "error" === FF.status && "store:giftRecipientLookupFailed" === FF.error ? FF.name : null
    }
    const yA = (0, CF.memo)((function(FF) {
      var WF, SF;
      let {
        show: AF
      } = FF;
      const {
        t: bW
      } = (0, hF.B)(), {
        userContext: dF
      } = (0, EF.b)(), PF = uC(dF), [iW, eF] = (0, rW.e)(), {
        page: QF,
        urlMode: gW,
        goTo: tW
      } = (0, hC.f)(), TF = IC(QF), [aW, kW] = (0, CF.useState)(0), [qW, NF] = (0, CF.useState)(null), [DF, LF] = (0, CF.useState)(null), [mW, OF] = (0, CF.useState)(null), [xW, ZF] = (0, CF.useState)(null), YF = (0, CF.useRef)(null), MF = (0, CF.useRef)(null), cW = (0, CF.useRef)(!1), GF = (0, HF.u)(), zW = (0, CF.useRef)(0), IF = (0, CF.useRef)(!1);

      function yW() {
        kW((FF => FF + 1))
      }(0, CF.useEffect)((() => {
        if (AF) {
          if (zA = !0, GF && GF.seq !== zW.current) {
            zW.current = GF.seq;
            const FF = (0, HF.d)(GF);
            gW || tW(FF), ZF(GF.highlight ? IC(FF) : null), LF(null), "gift" === GF.mode && GF.giftRecipientName ? PF.choose(GF.giftRecipientName, "prefilled") : "current" !== GF.mode && PF.clear(), "gift" !== GF.mode || GF.giftRecipientName || yW(), (0, BF.d)({
              id: "store.open",
              value: GF.source
            })
          } else IF.current || (0, BF.d)({
            id: "store.open",
            value: "menuTab"
          });
          IF.current = !0
        } else IF.current = !1
      }), [AF, GF]), (0, CF.useEffect)((() => {
        if (!xW) return;
        const FF = setTimeout((() => {
          ZF(null)
        }), 4e3);
        return () => {
          clearTimeout(FF)
        }
      }), [xW]), (0, CF.useEffect)((() => {
        const FF = YF.current;
        var WF;
        if (AF && FF)
          if (TF) MF.current = TF, null === (WF = FF.querySelector(".StoreDetailBackButton, .CosmeticShopDetailBackButton")) || void 0 === WF || WF.focus();
          else if (MF.current) {
          var SF;
          null === (SF = FF.querySelector(`[data-store-item="${MF.current}"]`)) || void 0 === SF || SF.focus(), MF.current = null
        }
      }), [TF, AF]), (0, CF.useEffect)((() => {
        LF(null)
      }), [PF.query]), (0, CF.useEffect)((() => {
        if (!mW) return;
        const FF = setTimeout((() => {
          OF(null)
        }), 8e3);
        return () => {
          clearTimeout(FF)
        }
      }), [mW]);
      const sF = dF.superRankInfo,
        wF = sF ? (0, nF.jc)(sF) : 0,
        XF = (0, WC.j)(wF),
        UF = wF > 0,
        jW = dF.isLoggedIn(),
        vW = dF.getOwnedCosmeticPacks(),
        JF = (0, WC.q)(PF.query),
        pF = (0, WC.g)({
          mode: JF,
          loggedIn: jW,
          hasSuperRank: UF,
          superRankDaysLeft: XF,
          ownedPacks: vW,
          packs: BS.h,
          recipient: PF.recipient
        });
      (0, CF.useEffect)((() => {
        if (!jW || !AF) return;
        const FF = (0, HF.q)();
        var WF;
        FF && ("superRank" === (WF = FF.item) || BS.h.includes(WF)) && ((0, BF.d)({
          id: "store.login_resume",
          value: FF.item
        }), (0, HF.i)({
          mode: FF.mode,
          source: "loginResume",
          giftRecipientName: "gift" === FF.mode && FF.recipient ? FF.recipient : void 0,
          openItem: FF.item,
          highlight: !0
        }))
      }), [jW, AF]);
      const lF = (0, WC.r)({
        hasSuperRank: jW && UF,
        superRankDaysLeft: XF,
        openedThisSession: zA || AF
      });
      if ((0, CF.useEffect)((() => {
          (0, HF.m)(lF)
        }), [lF]), !AF || !(0, KF.siteSupportsPurchases)()) return null;
      const FW = eF > iW && iW <= 700,
        WW = !FW && eF <= 420,
        SW = "gift" === JF ? fC(PF.recipient) : null,
        CW = null !== qW;

      function AW(FF) {
        (0, HF.j)({
          item: FF,
          mode: JF,
          recipient: "gift" === JF ? PF.query.trim() : ""
        }), (0, lS.b)()
      }

      function uW(FF, WF) {
        (0, BF.d)({
          id: "store.purchase_done",
          value: `${WF?"gift":"self"}:${FF}`
        }), WF && (PF.recordGift(WF.name, FF), hW(WF))
      }

      function hW(FF) {
        ! function(FF) {
          try {
            ZW.h.setItem(SC, (0, WC.w)(AC(), FF))
          } catch {}
        }({
          name: FF.name,
          cosmetics: FF.cosmetics
        }), tW(GC), OF((WF => {
          var SF;
          return {
            name: FF.name,
            seq: (null !== (SF = null === WF || void 0 === WF ? void 0 : WF.seq) && void 0 !== SF ? SF : 0) + 1
          }
        }))
      }
      async function bS(FF) {
        var WF, SF;
        if (cW.current) return;
        if (!jW) return void AW(FF);
        LF(null), ZF(null);
        const CF = "gift" === JF ? {
          name: fC(PF.recipient),
          cosmetics: PF.recipientCosmetics
        } : null;
        if (CF && !CF.name) return void yW();
        const AF = "superRank" === FF ? fF.i.id : (0, fF.d)(FF);
        cW.current = !0;
        const uF = await (0, FC.b)(AF, null !== (WF = null === CF || void 0 === CF ? void 0 : CF.name) && void 0 !== WF ? WF : null);
        if (cW.current = !1, !uF) return;
        NF(FF);
        const hF = await jC.b.purchase(AF, null !== (SF = null === CF || void 0 === CF ? void 0 : CF.name) && void 0 !== SF ? SF : null);
        NF(null), hF ? LF(hF) : (uW(FF, CF), CF || (await (0, vC.flushClientAnalyticsEvents)(), (0, KF.refreshWithoutConfirmation)("superRank" === FF ? "/super-rank-welcome" : `/pack-welcome/${FF}`)))
      }
      const dW = uF()("Store", {
        StoreGift: "gift" === JF,
        StorePortrait: FW,
        StoreCompact: WW
      });
      if (dF === oF.NULL_USER_CONTEXT) return (0, RF.jsx)("div", {
        className: dW,
        children: (0, RF.jsx)(VF.c, {})
      });
      if ("pack" === QF.kind) {
        const FF = QF.pack,
          WF = pF.packs.find((WF => WF.pack === FF));
        return (0, RF.jsx)("div", {
          ref: YF,
          className: "CosmeticShopContainer",
          children: (0, RF.jsx)(pS.e, {
            pack: FF,
            onBack: () => {
              tW(GC)
            },
            onPurchased: WF => {
              uW(FF, WF ? {
                name: WF,
                cosmetics: null
              } : null)
            },
            giftCta: "gift" === JF && SW && WF && (0, RF.jsxs)(RF.Fragment, {
              children: [(0, RF.jsx)(VC, {
                state: WF.state,
                item: FF,
                price: (PW = FF, "superRank" === PW ? fF.i.price : (0, fF.e)(PW)),
                busy: CW,
                onAct: () => {
                  bS(FF)
                },
                onNeedRecipient: () => {
                  tW(GC), yW()
                }
              }), DF && (0, RF.jsx)("span", {
                className: "CosmeticShopGiftError SmallTextBold",
                children: bW(DF)
              })]
            }),
            ownedPacks: vW,
            startAsGift: "gift" === JF,
            initialGiftRecipient: "gift" === JF ? null !== SW && void 0 !== SW ? SW : PF.query.trim() : "",
            highlightCta: xW === FF
          }, FF)
        })
      }
      var PW;
      return "superRank" === QF.kind ? (0, RF.jsx)("div", {
        ref: YF,
        className: uF()(dW, "StoreDetailView"),
        children: (0, RF.jsx)(cA, {
          state: pF.superRank.state,
          mode: JF,
          giftName: SW,
          busy: CW,
          highlight: "superRank" === xW,
          purchaseError: DF,
          onBack: () => {
            tW(GC)
          },
          onChooseRecipient: () => {
            tW(GC), yW()
          },
          onAct: () => {
            bS("superRank")
          },
          onLogin: () => {
            AW("superRank")
          }
        })
      }) : (0, RF.jsxs)("div", {
        ref: YF,
        className: dW,
        children: [(0, RF.jsx)("div", {
          className: "StoreTopRow",
          children: (0, RF.jsx)(QC, {
            selfName: dF.getPlayerName(),
            giftRecipient: PF,
            suggestionsVersion: null !== (WF = null === mW || void 0 === mW ? void 0 : mW.seq) && void 0 !== WF ? WF : 0,
            pulseSignal: aW,
            disabled: CW
          })
        }), mW && (0, RF.jsxs)("div", {
          className: "StoreNotice StoreNoticeGiftSent",
          onClick: () => {
            OF(null)
          },
          children: [(0, RF.jsx)(JS.e, {
            showSignal: mW.seq
          }), WC.d, " ", bW("store:giftSent", {
            name: mW.name
          })]
        }, mW.seq), !mW && DF && (0, RF.jsx)("div", {
          className: "StoreNotice StoreNoticeError",
          children: bW(DF)
        }), (0, RF.jsx)(ZC, {
          layout: pF,
          bundleGift: "gift" === JF ? {
            recipientName: SW,
            lookingUp: "pending" === PF.recipient.status,
            busy: CW,
            onNeedRecipient: yW,
            onSent: FF => {
              (0, BF.d)({
                id: "store.purchase_done",
                value: "gift:superGems"
              }), hW({
                name: FF,
                cosmetics: PF.recipientCosmetics
              })
            }
          } : null,
          superRankDaysLeft: XF,
          superRankTotalDays: null !== (SF = null === sF || void 0 === sF ? void 0 : sF.superRankForDays) && void 0 !== SF ? SF : 0,
          busy: CW,
          highlightItem: xW,
          onOpen: function(FF) {
            (0, BF.d)({
              id: "store.item_open",
              value: FF
            }), tW((0, HF.e)(FF))
          },
          onAct: bS,
          onNeedRecipient: yW,
          onLogin: AW
        })]
      })
    }));
    var sC = SF(2098),
      nC = SF(7770),
      HC = SF(2155),
      KC = SF(2007),
      wC = SF(2060),
      XC = SF(2070),
      UC = SF(2076),
      BC = SF(2147),
      jA = SF(2132),
      vA = SF(2126),
      JC = SF(1902),
      pC = SF(1932),
      lC = SF(1926),
      FA = SF(1660),
      WA = SF(2081),
      SA = SF(1934);

    function CA(FF) {
      let {
        show: WF
      } = FF;
      return WF ? (0, RF.jsx)(AA, {}) : null
    }

    function AA() {
      const {
        t: FF
      } = (0, hF.B)(), {
        followsLeader: WF
      } = (0, KC.c)(), {
        loading: SF,
        friends: AF,
        requests: dF,
        invites: PF
      } = (0, dC.n)(), {
        userContext: iW
      } = (0, EF.b)(), [eF, QF] = (0, CF.useState)(SA.i);
      (0, CF.useEffect)((() => {
        (0, SA.d)()
      }), []);
      const rW = dF.map((FF => FF.name)),
        {
          state: tW,
          recentRequesters: TF
        } = (0, jA.n)(),
        aW = new Map([...("loaded" === tW.status ? tW.recentPlayers : []).map((FF => [FF.preview.name, FF])), ...TF.map((FF => [FF.name, FF]))]),
        kW = (0, CF.useRef)(null),
        [NF, DF] = (0, CF.useState)(""),
        [LF, mW] = (0, CF.useState)("Enter"),
        [OF, xW] = (0, CF.useState)(null);

      function ZF() {
        NF && (mW("Loading"), (0, lC.f)(NF, "social_menu").then((FF => {
          if (kW.current) switch (FF.kind) {
            case "sent":
              mW("Success");
              break;
            case "becameFriends":
              mW("BecameFriends");
              break;
            case "failed":
              xW(FF.message), mW("Error")
          }
        })))
      }
      return (0, CF.useEffect)((() => {
        if ("Enter" === LF || "Loading" === LF) return;
        const FF = setTimeout((() => {
          kW.current.value = "", DF(""), mW("Enter")
        }), "Success" === LF ? 1e3 : 4e3);
        return () => {
          clearTimeout(FF)
        }
      }), [LF]), (0, RF.jsx)("div", {
        className: "SocialMenu",
        children: (0, RF.jsxs)("div", {
          className: "SocialMenuInner",
          children: [(0, RF.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, RF.jsxs)("div", {
              className: "SocialMenuBox SocialMenuAddFriend",
              children: [(0, RF.jsx)(UC.b, {
                label: FF("socialBar:addFriend")
              }), (0, RF.jsxs)("div", {
                className: "AddFriendBody",
                children: [(0, RF.jsxs)("div", {
                  className: uF()("AddFriendBodyOverlay", {
                    [`AddFriendBodyOverlay${LF}`]: !0
                  }),
                  children: ["Loading" === LF && (0, RF.jsx)(VF.c, {}), "Success" === LF && (0, RF.jsx)(bW.e, {
                    name: "check"
                  }), "BecameFriends" === LF && (0, RF.jsx)(RF.Fragment, {
                    children: FF("socialBar:nowFriends", {
                      playerName: NF
                    })
                  }), "Error" === LF && OF && (0, RF.jsx)(RF.Fragment, {
                    children: FF(OF.translationKey, OF.params)
                  })]
                }), (0, RF.jsxs)("div", {
                  className: "PlayerSearch",
                  children: [(0, RF.jsx)(qW.d, {
                    className: "PlayerSearchInput",
                    placeholderText: FF("socialBar:enterPlayerName"),
                    domRef: kW,
                    onValueChange: FF => {
                      DF((0, zW.n)(FF)), kW.current.value = (0, zW.n)(FF)
                    },
                    onEnter: () => {
                      NF && (0, BF.d)({
                        id: "social.add_friend",
                        value: "social_menu"
                      }), ZF()
                    }
                  }), (0, RF.jsxs)(gW.e, {
                    className: "PlayerSearchInputButton SmallTextLight",
                    onClick: () => {
                      ZF()
                    },
                    analyticsClick: {
                      id: "social.add_friend",
                      value: "social_menu"
                    },
                    children: [(0, RF.jsx)(bW.e, {
                      name: "user-plus"
                    }), " ", FF("socialBar:sendRequest")]
                  })]
                })]
              }), (0, RF.jsx)(WA.d, {
                surface: "social_menu",
                prefetchOnMount: !0
              })]
            }), PF.length > 0 && (0, RF.jsxs)("div", {
              className: "SocialMenuBox SocialMenuInvites",
              children: [(0, RF.jsx)(UC.b, {
                label: FF("socialBar:invites"),
                meta: PF.length
              }), PF.map((WF => (0, RF.jsxs)("div", {
                className: "SocialMenuInvite",
                children: [(0, RF.jsx)("div", {
                  className: "SocialMenuInviteIcon",
                  children: (0, RF.jsx)(JC.e, {
                    invite: WF
                  })
                }), (0, RF.jsx)("div", {
                  className: "SocialMenuInviteText",
                  children: (0, RF.jsx)(JC.g, {
                    invite: WF
                  })
                }), (0, RF.jsx)(gW.k, {
                  className: "SocialMenuInviteJoin SmallTextLight",
                  onClick: () => {
                    (0, pC.d)(WF)
                  },
                  analyticsClick: {
                    id: "social.accept_invite",
                    value: `social_menu:${WF.destination.kind}`
                  },
                  children: FF("general:join")
                }), (0, RF.jsx)(wF.g, {
                  tooltipInner: (0, RF.jsx)(RF.Fragment, {
                    children: FF("general:decline")
                  }),
                  delayShow: 0,
                  children: (0, RF.jsx)(gW.f, {
                    className: "SocialMenuInviteDecline",
                    padDefaultFocus: "invite" === (null === eF || void 0 === eF ? void 0 : eF.kind) && eF.inviteId === WF.id,
                    onClick: () => {
                      dC.e.declineInvite(WF.id)
                    },
                    analyticsClick: {
                      id: "social.decline_invite",
                      value: `social_menu:${WF.destination.kind}`
                    },
                    children: (0, RF.jsx)(bW.e, {
                      name: "xmark"
                    })
                  })
                })]
              }, WF.id)))]
            }), (0, RF.jsxs)("div", {
              className: uF()("SocialMenuBox SocialMenuRequests", {
                SocialMenuBoxEmpty: !SF && 0 === dF.length
              }),
              children: [(0, RF.jsx)(UC.b, {
                label: (0, RF.jsxs)(RF.Fragment, {
                  children: [(0, RF.jsx)(bW.e, {
                    name: FA.c
                  }), " ", FF("socialBar:requests")]
                }),
                meta: (0, RF.jsxs)(RF.Fragment, {
                  children: [dF.length, dF.length === XF.q && (0, RF.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: FF("socialBar:limitReached")
                  })]
                })
              }), SF && (0, RF.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, RF.jsx)(VF.c, {})
              }), !SF && 0 === dF.length && (0, RF.jsx)("div", {
                className: "SocialMenuEmpty",
                children: FF("socialBar:noFriendRequests")
              }), !SF && dF.length > 0 && (0, RF.jsx)("div", {
                className: "PlayerRows",
                children: (0, RF.jsx)(vA.c, {
                  lazyLoadedClassName: "SocialMenuRequestsLazy",
                  observerUpdateDeps: [dF],
                  children: dF.map(((WF, SF) => {
                    const CF = aW.get(WF.name);
                    return (0, RF.jsxs)(XC.i, {
                      playerSocialPreview: WF,
                      zIndex: dF.length - SF,
                      padDefaultFocus: (0, SA.g)(eF, WF.name, SF),
                      status: CF && (0, RF.jsx)(BC.c, {
                        gameNameWithVariation: CF.gameNameWithVariation,
                        isPrivateLobby: CF.isPrivateLobby
                      }),
                      children: [(0, RF.jsx)(wF.g, {
                        tooltipInner: (0, RF.jsx)(RF.Fragment, {
                          children: FF("general:accept")
                        }),
                        delayShow: 0,
                        children: (0, RF.jsx)(gW.e, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            QF((0, SA.e)(rW, SF)), (0, lC.b)(WF.name, !0, {
                              source: "social_menu",
                              announceFriend: !1
                            })
                          },
                          analyticsClick: {
                            id: "social.accept_friend_request",
                            value: "social_menu"
                          },
                          children: (0, RF.jsx)(bW.e, {
                            name: "check"
                          })
                        })
                      }), (0, RF.jsx)(wF.g, {
                        tooltipInner: (0, RF.jsx)(RF.Fragment, {
                          children: FF("general:decline")
                        }),
                        delayShow: 0,
                        children: (0, RF.jsx)(gW.f, {
                          className: "FriendRequestButton",
                          onClick: () => {
                            QF((0, SA.e)(rW, SF)), (0, lC.b)(WF.name, !1, {
                              source: "social_menu"
                            })
                          },
                          analyticsClick: {
                            id: "social.decline_friend_request",
                            value: "social_menu"
                          },
                          children: (0, RF.jsx)(bW.e, {
                            name: "xmark"
                          })
                        })
                      })]
                    }, `${WF.name}_${WF.isError}`)
                  }))
                })
              })]
            }), (0, RF.jsx)(BC.k, {})]
          }), (0, RF.jsxs)("div", {
            className: "SocialMenuColumn",
            children: [(0, RF.jsxs)("div", {
              className: "SocialMenuBox SocialMenuParty",
              children: [(0, RF.jsx)(UC.b, {
                label: FF("socialBar:party")
              }), (0, RF.jsx)(wC.b, {})]
            }), (0, RF.jsxs)("div", {
              className: "SocialMenuBox SocialMenuFriends",
              children: [(0, RF.jsx)(UC.b, {
                label: (0, RF.jsxs)(RF.Fragment, {
                  children: [(0, RF.jsx)(bW.e, {
                    name: FA.b
                  }), " ", FF("socialBar:friends")]
                }),
                meta: (0, RF.jsxs)(RF.Fragment, {
                  children: [AF.length, AF.length >= (0, XF.d)(iW.getPlayerRanks()) && (0, RF.jsx)("span", {
                    className: "SocialSectionTitleLimit",
                    children: FF("socialBar:limitReached")
                  })]
                })
              }), SF && (0, RF.jsx)("div", {
                className: "SocialMenuLoading",
                children: (0, RF.jsx)(VF.c, {})
              }), !SF && 0 === AF.length && (0, RF.jsx)("div", {
                className: "SocialMenuEmpty",
                children: FF("socialBar:noFriends")
              }), !SF && AF.length > 0 && (0, RF.jsx)("div", {
                className: "PlayerRows",
                children: (0, RF.jsx)(vA.c, {
                  lazyLoadedClassName: "SocialMenuFriendsLazy",
                  observerUpdateDeps: [AF],
                  children: AF.map(((FF, SF) => (0, RF.jsx)(XC.i, {
                    playerSocialPreview: FF,
                    isFriend: !0,
                    hideFriendBadge: !0,
                    onFriendRemoved: FF => {
                      dC.e.removeFriendFromState(FF)
                    },
                    zIndex: AF.length - SF,
                    children: (0, RF.jsx)(XC.e, {
                      friend: FF,
                      followsLeader: WF,
                      analyticsSurface: "social_menu"
                    })
                  }, `${FF.name}_${FF.isError}`)))
                })
              })]
            })]
          })]
        })
      })
    }
    var uA = SF(1993);
    const hA = FF => {
        let {
          action: WF,
          padAction: SF
        } = FF;
        const {
          isTouchScreen: CF
        } = (0, DF.d)(["isTouchScreen"]), AF = (0, CS.r)();
        return CF && !AF ? null : (0, RF.jsx)(jS.d, {
          className: "EverythingMenuTabKey",
          noaAction: WF,
          padHidesKey: !0,
          padMenuShortcut: SF
        })
      },
      bu = (0, CF.memo)((function() {
        const {
          t: FF
        } = (0, hF.B)(), {
          gameState: WF,
          openEverythingMenuName: SF,
          initSdkSelectorFinished: AF
        } = (0, DF.d)(["gameState", "openEverythingMenuName", "initSdkSelectorFinished"]), {
          userContext: bW
        } = (0, EF.b)(), dF = (0, KF.siteSupportsPurchases)(), PF = (0, HF.x)(), iW = (FF, WF) => (0, RF.jsx)(hA, {
          action: FF,
          padAction: WF
        }), [eF, QF] = (0, CF.useState)(null), rW = (0, CF.useRef)(null), TF = {
          ..."inGame" === WF ? {} : (0, gW.Q)({
            focusOnClick: !1
          }),
          ...ES.b
        }, aW = null !== SF, kW = SF !== pW.n.COSMETIC_SHOP;
        async function qW() {
          await async function() {
            if (!eF) return;
            await eF(), QF(null)
          }(), DF.b.set({
            openEverythingMenuName: null
          })
        }
        const VF = (0, CF.useMemo)((() => "inGame" === WF ? {
          text: FF("settingsMenu:exitGame"),
          onClick: () => {
            (0, nC.e)()
          }
        } : (0, ZF.d)() ? {
          text: FF("settingsMenu:exitGame"),
          onClick: () => {
            MF.n.discordActivity().then((FF => {
              FF.exit("User exited the game")
            }))
          }
        } : null), [WF, FF]);
        const NF = (0, RF.jsx)("div", {
          className: "EverythingMenuCloseButtonClickZone",
          onClick: () => {
            qW()
          },
          children: (0, RF.jsx)(gW.h, {
            className: "EverythingMenuCloseButton"
          })
        });
        return (0, RF.jsx)(QS.d, {
          showing: aW,
          globallyUniqueKey: "EverythingMenu",
          alwaysMountChildren: !0,
          doGameplayStartStopOnShow: "inGame" === WF,
          children: (0, RF.jsx)(gC.b, {
            className: "EverythingMenuContainer",
            show: aW,
            children: (0, RF.jsx)(rC.b, {
              close: () => {
                qW()
              },
              togglePointerLock: !1,
              children: (0, RF.jsxs)("div", {
                className: "EverythingMenu",
                children: [!(0, KS.k)(SF) && (0, RF.jsxs)("div", {
                  className: "EverythingMenuTabList",
                  children: [(0, RF.jsxs)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerStart",
                    children: [VF && (0, RF.jsx)(gW.c, {
                      className: "EverythingMenuBackButton",
                      padDestructive: !0,
                      onClick: () => {
                        VF.onClick()
                      },
                      children: VF.text
                    }), aW && dF && (0, RF.jsx)("div", {
                      ...TF,
                      className: "EverythingMenuWallet",
                      title: FF("homePage:getPremiumCurrency"),
                      onClick: () => {
                        (0, HF.i)({
                          mode: "current",
                          source: "menuWallet"
                        })
                      },
                      children: (0, RF.jsx)(sC.g, {})
                    })]
                  }), (0, RF.jsxs)("div", {
                    className: "EverythingMenuTabListInner",
                    "data-pad-tabs": "1",
                    children: [(0, RF.jsxs)("div", {
                      ...TF,
                      "data-pad-tab": !0,
                      "data-pad-selected": SF === pW.n.SETTINGS ? "true" : void 0,
                      className: uF()("EverythingMenuTab", {
                        EverythingMenuTabActive: SF === pW.n.SETTINGS
                      }),
                      onClick: () => {
                        DF.b.set({
                          openEverythingMenuName: pW.n.SETTINGS
                        })
                      },
                      children: [FF("general:settings"), iW("OpenSettings", "pause")]
                    }), (0, RF.jsxs)("div", {
                      ...TF,
                      "data-pad-tab": !0,
                      "data-pad-selected": SF === pW.n.CUSTOMISATION ? "true" : void 0,
                      className: uF()("EverythingMenuTab", {
                        EverythingMenuTabActive: SF === pW.n.CUSTOMISATION
                      }),
                      onClick: () => {
                        DF.b.set({
                          openEverythingMenuName: pW.n.CUSTOMISATION
                        })
                      },
                      children: [FF("general:player"), iW("OpenCharacterCustomization")]
                    }), tW.featureFlags.useSocialFeatures && (0, RF.jsxs)("div", {
                      ...TF,
                      "data-pad-tab": !0,
                      "data-pad-selected": SF === pW.n.SOCIAL ? "true" : void 0,
                      className: uF()("EverythingMenuTab", {
                        EverythingMenuTabActive: SF === pW.n.SOCIAL
                      }),
                      ...(0, BF.b)({
                        id: "social.open_menu",
                        value: "menu_tab"
                      }, SF === pW.n.SOCIAL),
                      onClick: () => {
                        DF.b.set({
                          openEverythingMenuName: pW.n.SOCIAL
                        })
                      },
                      children: [FF("socialBar:social"), (0, RF.jsx)(uA.e, {})]
                    }), dF && (0, RF.jsxs)("div", {
                      ...TF,
                      "data-pad-tab": !0,
                      "data-pad-selected": SF === pW.n.COSMETIC_SHOP ? "true" : void 0,
                      className: uF()("EverythingMenuTab EverythingMenuTabCosmeticShop", {
                        EverythingMenuTabActive: SF === pW.n.COSMETIC_SHOP
                      }),
                      onClick: () => {
                        DF.b.set({
                          openEverythingMenuName: pW.n.COSMETIC_SHOP
                        })
                      },
                      children: [(0, RF.jsx)("span", {
                        className: "EverythingMenuTabCosmeticShopText",
                        children: FF("store:title")
                      }), "dot" === PF && (0, RF.jsx)("span", {
                        className: "EverythingMenuTabStoreBadge EverythingMenuTabStoreDot"
                      })]
                    }), "inGame" === WF && (0, RF.jsxs)("div", {
                      ...TF,
                      "data-pad-tab": !0,
                      "data-pad-selected": SF === pW.n.LOBBY_LEADERBOARD ? "true" : void 0,
                      className: uF()("EverythingMenuTab", {
                        EverythingMenuTabActive: SF === pW.n.LOBBY_LEADERBOARD
                      }),
                      onClick: () => {
                        DF.b.set({
                          openEverythingMenuName: pW.n.LOBBY_LEADERBOARD
                        })
                      },
                      children: [FF("general:lobby"), iW("OpenLobbyLeaderboard", "leaderboard")]
                    })]
                  }), (0, RF.jsx)("div", {
                    className: "EverythingMenuTabListButtonContainer EverythingMenuTabListButtonContainerEnd",
                    children: NF
                  })]
                }), (0, KS.k)(SF) && NF, (0, RF.jsxs)("div", {
                  className: "EverythingMenuBody",
                  "data-pad-initial-area": !0,
                  style: {
                    "--everythingMenuBodyBackgroundOpacity": "inGame" === WF ? "0.85" : "1"
                  },
                  children: [(0, RF.jsx)(dS, {
                    show: SF === pW.n.SETTINGS,
                    setBeforeResumeCallback: QF
                  }), (0, RF.jsx)(eS, {
                    show: SF === pW.n.CUSTOMISATION
                  }), (0, RF.jsx)(CF.Suspense, {
                    fallback: null,
                    children: (0, RF.jsx)(cC, {
                      show: SF === pW.n.SHOP
                    })
                  }), (0, RF.jsx)(US, {
                    show: SF === pW.n.LOBBY_LEADERBOARD
                  }), (0, RF.jsx)(yA, {
                    show: SF === pW.n.COSMETIC_SHOP
                  }), (0, RF.jsx)(CA, {
                    show: SF === pW.n.SOCIAL
                  })]
                }), !(0, tW.isMobileApp)() && (0, tC.f)(bW.getPlayerRanks()) && (0, RF.jsx)(gC.b, {
                  ref: rW,
                  className: "EverythingMenuBannerDiv",
                  show: kW,
                  "data-pad-hint-bar-avoid": !0,
                  "data-pad-no-step-in": !0,
                  children: (0, RF.jsx)(HC.d, {
                    info: {
                      adId: 2,
                      adType: "leaderboard",
                      adAlias: "banner_shop"
                    },
                    sizeInfo: {
                      parentRef: rW
                    },
                    showing: aW && kW,
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
  3902: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => eF
    });
    var CF = SF(918),
      AF = SF.n(CF),
      uF = SF(929),
      hF = SF(1186),
      bW = SF(2679),
      dF = SF(132),
      PF = SF(2726),
      RF = SF(2716),
      iW = SF(971);

    function eF(FF) {
      let {
        game: WF
      } = FF;
      const SF = (0, dF.l)() ? "large" : "small",
        CF = (0, PF.e)(WF, SF),
        eF = (0, bW.e)(CF),
        EF = void 0 !== eF.blurhash;
      return (0, iW.jsxs)("div", {
        className: "SchematicImageContainer",
        children: [eF.isLoading && !EF && (0, iW.jsx)(hF.c, {
          loaderType: "Secondary"
        }), !eF.failed && (null !== eF.src || EF) && (0, iW.jsx)("div", {
          className: AF()("SchematicImage", RF.j, {
            SchematicImageFadeIn: eF.fadeIn && !EF
          }),
          style: (0, RF.f)(eF),
          children: (0, iW.jsx)(RF.d, {
            image: eF
          })
        }), eF.failed && (0, iW.jsx)("div", {
          className: "SchematicImageError",
          children: (0, iW.jsx)(uF.e, {
            name: "face-dizzy"
          })
        })]
      })
    }
  },
  4042: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => EF
    });
    var CF = SF(46),
      AF = SF(918),
      uF = SF.n(AF),
      hF = SF(3957),
      bW = SF(1186),
      dF = SF(1046),
      PF = SF(2350),
      RF = SF(2488),
      iW = SF(929),
      eF = SF(971);

    function EF(FF) {
      let {
        folderName: WF,
        onTexturePackUpdated: AF,
        disabled: EF = !1,
        maxFileSizeMb: QF,
        packOwner: rW
      } = FF;
      const {
        t: gW
      } = (0, dF.B)(), [tW, TF] = (0, CF.useState)(!1), [aW, kW] = (0, CF.useState)(null), [qW, VF] = (0, CF.useState)(null), NF = (0, CF.useRef)(null);
      const {
        getRootProps: DF,
        getInputProps: LF,
        isDragActive: mW
      } = (0, hF.c)({
        onDrop: async function(FF) {
          TF(!0);
          try {
            const WF = await (0, PF.r)(FF);
            if ("customGame" === rW && (0, RF.h)(WF)) return void kW(gW(RF.c));
            if (void 0 !== QF) {
              const FF = JSON.stringify(WF).length / 1048576;
              if (FF > QF) return void kW(`File size is too large. Max size is ${QF}MB. Current size is ${FF}MB.`)
            }
            kW(null), VF(null), AF(WF), NF.current = WF,
              function(FF, WF) {
                const CF = FF.modelOverrides;
                CF && Promise.all([SF.e(181), SF.e(180)]).then((() => SF(32956))).then((SF => {
                  let {
                    packDisplayName: AF,
                    refusedPackModels: uF,
                    packModelSummary: hF
                  } = SF;
                  const bW = AF(FF.metaData);
                  WF(hF(bW, uF(bW, CF, !1)))
                })).catch((FF => {
                  console.error("Checking the texture pack's models failed:", FF)
                }))
              }(WF, (FF => {
                NF.current === WF && VF(FF)
              }))
          } catch {
            kW("Invalid Texture Pack Folder")
          } finally {
            TF(!1)
          }
        },
        useFsAccessApi: !1,
        disabled: EF
      });
      return (0, eF.jsxs)("div", {
        className: "CustomTexturePackContainer",
        children: [(0, eF.jsxs)("div", {
          className: "CustomTextureWarning",
          children: [gW("settingsMenu:customTextureWarning"), ".", (0, eF.jsx)("br", {}), gW("settingsMenu:viewDocumentation"), ":", " ", (0, eF.jsx)("a", {
            href: "https://github.com/Bloxdy/texturePacks",
            target: "_blank",
            rel: "noreferrer",
            children: "github.com/Bloxdy/texturePacks"
          })]
        }), aW && (0, eF.jsxs)("div", {
          className: "CustomTextureError",
          children: [gW("general:error"), ": ", aW]
        }), qW && (0, eF.jsx)("div", {
          className: "CustomTextureError",
          children: qW
        }), (0, eF.jsxs)("div", {
          ...DF({
            className: uF()("CustomTextureFolderUpload", {
              ActiveDrag: mW,
              Disabled: EF
            })
          }),
          children: [(0, eF.jsx)("input", {
            ...LF({
              webkitdirectory: "true"
            })
          }), tW && (0, eF.jsx)("div", {
            className: "CustomTextureFolderUploadLoading",
            children: (0, eF.jsx)(bW.c, {})
          }), !tW && !mW && WF && (0, eF.jsxs)(eF.Fragment, {
            children: [(0, eF.jsx)("div", {
              className: "CustomTextureFolderUploadIcon Active",
              children: (0, eF.jsx)(iW.e, {
                name: "folder-image"
              })
            }), (0, eF.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions Active",
              children: WF
            })]
          }), !tW && (mW || !WF) && (0, eF.jsxs)(eF.Fragment, {
            children: [(0, eF.jsx)("div", {
              className: "CustomTextureFolderUploadIcon",
              children: (0, eF.jsx)(iW.e, {
                name: "up-from-bracket"
              })
            }), (0, eF.jsx)("div", {
              className: "CustomTextureFolderUploadInstructions",
              children: "Drag and drop a Texture Pack folder here"
            })]
          })]
        })]
      })
    }
  },
  3989: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => QF,
      d: () => rW
    });
    var CF = SF(2350),
      AF = SF(2357),
      uF = SF(46),
      hF = SF(918),
      bW = SF.n(hF),
      dF = SF(1186),
      PF = SF(2344),
      RF = SF(1189),
      iW = SF(3997),
      eF = SF(4042),
      EF = SF(971);

    function QF(FF) {
      var WF;
      let {
        setApplySettingsCallback: SF
      } = FF;
      const [, hF] = (0, uF.useReducer)((FF => FF + 1), 0), bW = (0, uF.useRef)(!1), dF = (0, uF.useRef)(null);

      function QF() {
        dF.current !== PF.e.getId() || PF.e.getId() === AF.q.CUSTOM && bW.current ? SF((() => iW.k)) : SF(null)
      }
      async function gW(FF) {
        if (PF.e.getId() !== FF.metaData.id) {
          if (PF.e.getId() === AF.q.CUSTOM && PF.e.getFromFolderName()) {
            const FF = RF.NotificationProvider.showPromptPopup({
              title: "settingsMenu:loseChangesTitle",
              subtitle: "settingsMenu:loseChangesSubtitle",
              confirmText: "general:continue",
              destructive: !0,
              confirmTooltip: "",
              cancelText: "general:cancel",
              cancelTooltip: ""
            });
            if (!0 !== await FF.getResult()) return
          }
          PF.e.setFromJson(FF, "player"), PF.e.saveTexturePack(), QF(), hF()
        }
      }(0, uF.useEffect)((() => {
        dF.current = PF.e.getId()
      }), []);
      const tW = CF.e,
        TF = [tW, ...Object.values(AF.q).filter((FF => FF !== tW))];
      return (0, EF.jsx)(EF.Fragment, {
        children: (0, EF.jsxs)("div", {
          className: "TexturePackCategory SettingsMenuRightInner",
          children: [(0, EF.jsx)("div", {
            className: "TexturePackList",
            children: TF.map((FF => (0, EF.jsx)(rW, {
              id: FF,
              isSelected: FF === PF.e.getId(),
              setSelected: gW
            }, FF)))
          }), PF.e.getId() === AF.q.CUSTOM && (0, EF.jsx)(eF.e, {
            folderName: null !== (WF = PF.e.getFromFolderName()) && void 0 !== WF ? WF : null,
            onTexturePackUpdated: function(FF) {
              PF.e.setFromJson(FF, "player"), PF.e.saveTexturePack(), bW.current = !0, QF(), hF()
            },
            packOwner: "player"
          })]
        })
      })
    }

    function rW(FF) {
      let {
        id: WF,
        isSelected: SF,
        setSelected: hF,
        disabled: PF = !1
      } = FF;
      const [RF, iW] = (0, uF.useState)(!0), [eF, QF] = (0, uF.useState)(""), [rW, gW] = (0, uF.useState)(""), [tW, TF] = (0, uF.useState)(""), aW = (0, uF.useRef)({});
      return (0, uF.useEffect)((() => {
        (0, CF.p)(WF).then((FF => {
          var WF;
          FF && (aW.current = FF, iW(!1), QF(aW.current.metaData.name), gW(aW.current.metaData.author), TF(null !== (WF = aW.current.metaData.previewImage) && void 0 !== WF ? WF : ""))
        })).catch((FF => {
          console.warn(`Failed to fetch texture pack ${WF}`, FF)
        }))
      }), [WF]), (0, EF.jsxs)("div", {
        "data-pad-focusable": !0,
        "aria-disabled": PF || void 0,
        className: bW()("TexturePack", {
          Selected: SF,
          Custom: WF === AF.q.CUSTOM,
          Disabled: PF
        }),
        onClick: () => {
          RF || PF || hF(aW.current)
        },
        children: [(0, EF.jsx)("div", {
          className: "TexturePackBg",
          style: {
            backgroundImage: tW ? `url(${tW})` : void 0
          }
        }), RF && (0, EF.jsx)("div", {
          className: "TexturePackName",
          children: (0, EF.jsx)(dF.c, {})
        }), !RF && eF && (0, EF.jsx)("div", {
          className: "TexturePackName",
          children: eF
        }), !RF && rW && (0, EF.jsx)("div", {
          className: "TexturePackAuthor",
          children: rW
        })]
      })
    }
  },
  3886: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => gW
    });
    var CF = SF(918),
      AF = SF.n(CF),
      uF = SF(3672),
      hF = SF(1046),
      bW = SF(929),
      dF = SF(1266),
      PF = SF(1336),
      RF = SF(1189),
      iW = SF(1971),
      eF = SF(971);
    const EF = {
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

    function QF(FF) {
      let {
        platform: WF
      } = FF;
      const SF = "youtube" === WF;
      return (0, eF.jsxs)("span", {
        className: AF()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: SF
        }),
        children: [SF && (0, eF.jsx)(iW.e, {
          variant: "white"
        }), !SF && (0, eF.jsx)(bW.e, {
          name: EF[WF].icon,
          kit: "brands"
        })]
      })
    }

    function rW(FF) {
      let {
        platform: WF,
        link: SF,
        editable: CF,
        userContext: AF,
        onLinksUpdated: iW
      } = FF;
      const {
        t: rW
      } = (0, hF.B)(), gW = EF[WF];
      if (!SF && !CF) return null;

      function tW() {
        var FF;
        if (!AF || !iW) return;
        RF.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: gW.name
            }
          },
          prefixText: uF.u[WF],
          placeholderText: "playBloxd",
          initialValue: null !== (FF = null === SF || void 0 === SF ? void 0 : SF.handle) && void 0 !== FF ? FF : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: SF ? "general:clear" : void 0
        }).getResult().then((async FF => {
          if ("notificationTornDown" !== FF && null !== FF) try {
            "submit" === FF.type ? await PF.b.setSocialLink(AF, WF, FF.value) : await PF.b.clearSocialLink(AF, WF), iW()
          } catch (SF) {
            console.error("Failed to update social link", SF), RF.NotificationProvider.showAlertPopup({
              title: SF.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (SF) {
        const FF = `@${SF.handle}`;
        return (0, eF.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: gW.color
          },
          href: SF.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, eF.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, eF.jsx)(QF, {
              platform: WF
            }), (0, eF.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, eF.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: FF
              })
            })]
          }), CF && (0, eF.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, dF.Q)({
              stopPropagation: !0
            }),
            onClick: FF => {
              FF.stopPropagation(), FF.preventDefault(), tW()
            },
            children: (0, eF.jsx)(bW.e, {
              name: "pen-to-square"
            })
          }), !CF && (0, eF.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, eF.jsx)(bW.e, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, eF.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: gW.color
        },
        ...(0, dF.Q)(),
        onClick: () => {
          tW()
        },
        children: [(0, eF.jsx)(QF, {
          platform: WF
        }), (0, eF.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, eF.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: gW.name
          }), (0, eF.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: rW("homePage:profileSocialLinkAdd")
          })]
        }), (0, eF.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, eF.jsx)(bW.e, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function gW(FF) {
      let {
        socialLinks: WF,
        editable: SF = !1,
        userContext: CF,
        onLinksUpdated: AF
      } = FF;
      if (!SF && 0 === WF.length) return null;
      const hF = new Map(WF.map((FF => [FF.platform, FF]))),
        bW = SF ? uF.r : WF.map((FF => FF.platform));
      return (0, eF.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, eF.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: bW.map((FF => (0, eF.jsx)(rW, {
            platform: FF,
            link: hF.get(FF),
            editable: SF,
            userContext: CF,
            onLinksUpdated: AF
          }, FF)))
        })
      })
    }
  },
  8144: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => CF
    });
    const CF = new Set(["chunkBorders"])
  },
  8135: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      ALL_DEV_TOOLS: () => hF,
      coreDevTools: () => PF,
      devTools: () => dF
    });
    var CF = SF(234),
      AF = SF(1153),
      uF = SF(8144);
    const hF = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
    async function bW() {
      const {
        noaDevTools: FF
      } = await SF.e(210).then((() => SF(38924)));
      return FF
    }
    const dF = new class {
        constructor() {
          this.loadHost = bW, this.tools = hF
        }
        setHost(FF) {
          this.tools = null === FF ? hF : FF.tools, this.loadHost = null === FF ? bW : async () => FF
        }
        supports(FF) {
          return this.tools.has(FF)
        }
        async downloadScene(FF, WF) {
          const SF = await this.loadHost();
          await SF.downloadScene(FF, WF)
        }
        async setAmbientLightIntensity(FF) {
          const WF = await this.loadHost();
          await WF.setAmbientLightIntensity(FF)
        }
      },
      PF = {
        tools: uF.d,
        downloadScene: async () => {
          throw new Error("This client can't download the scene")
        },
        setAmbientLightIntensity: async () => {
          throw new Error("This client can't set the ambient light")
        }
      };
    CF.h && dF.setHost(PF), (0, AF.g)((() => {
      dF.setHost(PF)
    }))
  },
  8166: (FF, WF, SF) => {
    function CF(FF, WF) {
      return FF && !WF
    }
    SF.d(WF, {
      c: () => CF
    })
  },
  7818: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => bW,
      f: () => dF
    });
    var CF = SF(11),
      AF = SF(1175),
      uF = SF(89);
    const hF = {
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

    function bW() {
      return (0, uF.isMobile)() && "function" === typeof navigator.vibrate
    }
    const dF = new class {
      constructor(FF) {
        this.deps = FF, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(FF, WF) {
        var SF;
        if (!this.deps.enabled()) return;
        const CF = hF[FF],
          AF = null !== WF && void 0 !== WF ? WF : CF.pattern;
        if (null === AF) return void console.warn("No vibration pattern for", FF);
        const uF = this.deps.now();
        uF - this.lastAnyAt < 40 && CF.priority < this.playingPriority || uF - (null !== (SF = this.lastAt.get(FF)) && void 0 !== SF ? SF : -1 / 0) < CF.minGapMs || uF < this.playingUntil && CF.priority < this.playingPriority || (this.lastAt.set(FF, uF), this.lastAnyAt = uF, this.playingUntil = uF + AF.reduce(((FF, WF) => FF + WF), 0), this.playingPriority = CF.priority, this.deps.vibrate(AF))
      }
    }({
      vibrate: FF => {
        navigator.vibrate([...FF])
      },
      now: () => performance.now(),
      enabled: () => bW() && CF.b.get("isTouchScreen") && CF.b.get("clientEscMenuOptions").vibration && !(0, AF.i)()
    })
  },
  8196: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => uF,
      f: () => bW,
      i: () => hF,
      k: () => RF,
      o: () => iW,
      r: () => PF
    });
    var CF = SF(161);
    const AF = 33554432,
      uF = 6144,
      hF = 4608,
      bW = 512,
      dF = 4;

    function PF(FF) {
      return "number" === typeof FF && FF < dF
    }

    function RF(FF) {
      return Math.floor(AF * FF / uF)
    }

    function iW(FF) {
      const WF = FF - Math.floor(FF / 6);
      let SF = CF.h.maxChunkHorizAddDistance,
        AF = CF.h.maxChunkVertAddDistance;
      if (eF(SF + 1, AF + 1) <= WF) return null;
      for (; eF(SF + 1, AF + 1) > WF && (SF > 0 || AF > 0);) SF > AF ? SF-- : AF--;
      return {
        horizontal: SF,
        vertical: AF
      }
    }

    function eF(FF, WF) {
      const SF = Math.max(FF, WF);
      let CF = 0;
      for (let AF = -SF; AF <= SF; AF++)
        for (let uF = -SF; uF <= SF; uF++)
          for (let hF = -SF; hF <= SF; hF++) EF(FF, WF, AF, uF, hF) && CF++;
      return CF
    }

    function EF(FF, WF, SF, CF, AF) {
      const uF = SF * SF + AF * AF;
      return FF === WF ? uF + CF * CF <= FF * FF : FF > WF ? Math.abs(CF) <= WF && uF + CF * CF <= FF * FF : uF <= FF * FF && uF + CF * CF <= WF * WF
    }
  },
  8176: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => bW,
      d: () => dF
    });
    var CF = SF(11);
    const AF = 24,
      uF = "farNametags",
      hF = 1e5;

    function bW() {
      var FF;
      return null === (FF = CF.b.get("showDistantNametags")) || void 0 === FF || FF
    }

    function dF() {
      var FF;
      return null !== (FF = function() {
        const FF = new URLSearchParams(window.location.search).get(uF),
          WF = null === FF || "" === FF ? NaN : Number(FF);
        return Number.isFinite(WF) && WF >= 0 ? Math.min(WF, hF) : null
      }()) && void 0 !== FF ? FF : bW() ? 0 : AF
    }
  },
  8189: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => PF,
      c: () => RF,
      f: () => bW,
      h: () => eF
    });
    var CF = SF(89),
      AF = SF(33),
      uF = SF(8196);
    const hF = "rendererGpuVendor";

    function bW() {
      return "0" === new URLSearchParams(window.location.search).get("qualitySteps")
    }
    let dF = null;

    function PF() {
      return dF ??= iW(), dF
    }

    function RF() {
      var FF;
      return null !== (FF = dF) && void 0 !== FF ? FF : iW()
    }

    function iW() {
      var FF;
      const WF = "deviceMemory" in navigator ? navigator.deviceMemory : void 0,
        SF = AF.h.getItem(hF),
        dF = null !== (FF = (0, CF.peekGpuVendor)()) && void 0 !== FF ? FF : "string" === typeof SF ? SF : null;
      return !bW() && function(FF, WF) {
        return (0, uF.r)(FF) || "powervr" === WF
      }(WF, dF)
    }

    function eF(FF) {
      const WF = (0, CF.normaliseGpuVendor)(FF);
      AF.h.getItem(hF) !== WF && AF.h.setItem(hF, WF)
    }
  },
  8222: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => AF,
      f: () => hF
    });
    const CF = [{
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

    function AF(FF) {
      let WF, SF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof FF) {
        if (!Number.isFinite(FF)) return "0";
        if (Math.abs(FF) < 100) {
          const WF = FF < 0 ? "-" : "",
            SF = Math.abs(FF);
          return SF >= 10 ? `${WF}${SF.toFixed(1).replace(/\.0$/,"")}` : `${WF}${SF.toFixed(2).replace(/\.?0+$/,"")}`
        }
        WF = BigInt(Math.floor(FF))
      } else WF = FF;
      const AF = WF < 0n ? -WF : WF,
        uF = WF < 0n ? "-" : "",
        hF = AF.toString();
      if (hF.length <= SF) return `${uF}${hF}`;
      const bW = 3 * Math.floor((hF.length - 1) / 3);
      if (bW < 3) return `${uF}${hF}`;
      if (bW > 3 * CF.length) {
        const FF = hF[0],
          WF = hF.slice(1, 3).replace(/0+$/, "");
        return `${uF}${WF?`${FF}.${WF}`:FF}e${hF.length-1}`
      }
      const {
        threshold: dF,
        suffix: PF
      } = CF[CF.length - bW / 3], RF = AF / dF, iW = Number(1000n * (AF % dF) / dF), eF = Number(RF) + iW / 1e3;
      let EF;
      return EF = eF >= 100 ? Math.floor(eF).toString() : eF >= 10 ? eF.toFixed(1).replace(/\.0$/, "") : eF.toFixed(2).replace(/\.?0+$/, ""), `${uF}${EF}${PF}`
    }
    const uF = CF.map((FF => {
      let {
        threshold: WF,
        suffix: SF
      } = FF;
      return {
        threshold: Number(WF),
        suffix: SF
      }
    })).filter((FF => {
      let {
        threshold: WF
      } = FF;
      return Number.isFinite(WF)
    }));

    function hF(FF) {
      const WF = Math.abs(FF),
        SF = FF < 0 ? "-" : "";
      for (const {
          threshold: CF,
          suffix: AF
        }
        of uF)
        if (WF >= CF) {
          const FF = WF / CF;
          if (FF >= 1e3) return `${SF}${WF.toExponential(2).replace("e+","e")}`;
          let uF;
          return uF = FF >= 100 ? Math.floor(FF).toString() : FF >= 10 ? FF.toFixed(1).replace(/\.0$/, "") : FF.toFixed(2).replace(/\.?0+$/, ""), `${SF}${uF}${AF}`
        } return `${SF}${WF}`
    }
  },
  8218: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => RF,
      c: () => eF,
      f: () => iW,
      j: () => hF,
      n: () => PF,
      q: () => dF
    });
    var CF = SF(271);
    const AF = ["Wood Enchanting Table", "Stone Enchanting Table", "Iron Enchanting Table", "Gold Enchanting Table", "Diamond Enchanting Table"],
      uF = {
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

    function hF(FF) {
      var WF;
      return null !== (WF = uF[FF]) && void 0 !== WF ? WF : {
        translationKey: ""
      }
    }
    const bW = {
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

    function dF(FF) {
      return AF.includes(FF)
    }

    function PF(FF) {
      var WF;
      return !0 === (null === FF || void 0 === FF || null === (WF = FF.customAttributes) || void 0 === WF ? void 0 : WF.cannotEnchant)
    }

    function RF(FF, WF) {
      const {
        max: SF
      } = bW[FF].at(-1);
      return WF <= SF
    }

    function iW(FF) {
      const WF = Math.sin(FF / 80),
        SF = FF => {
          if (FF <= 0) return 0;
          if (FF > 1) return 1;
          let WF = 0;
          const SF = [1, 7, 21, 35, 35, 21, 7, 1];
          for (let CF = 0; CF < SF.length; CF++) {
            WF += (CF % 2 === 0 ? 1 : -1) * SF[CF] * Math.pow(FF, 2 + CF) / (2 + CF)
          }
          return 72 * WF
        },
        CF = .3 - .78 * WF,
        AF = .5 - .78 * WF,
        uF = .6 - .7 * WF,
        hF = .8 - .6 * WF;
      let bW = SF(CF),
        dF = SF(AF) - bW,
        PF = SF(uF) - dF - bW,
        RF = SF(hF) - PF - dF - bW;
      CF < .041 && (dF /= 1 - bW, PF /= 1 - bW, RF /= 1 - bW, bW = 0), AF < .041 && (bW /= 1 - dF, PF /= 1 - dF, RF /= 1 - dF, dF = 0), uF < .041 && (bW /= 1 - PF, dF /= 1 - PF, RF /= 1 - PF, PF = 0), hF < .041 && (bW /= 1 - RF, dF /= 1 - RF, PF /= 1 - RF, RF = 0);
      return {
        commonProb: bW,
        uncommonProb: dF,
        rareProb: PF,
        epicProb: RF,
        legendaryProb: 1 - (RF + PF + dF + bW)
      }
    }

    function eF(FF, WF) {
      const {
        min: SF,
        max: AF
      } = bW[FF][WF], uF = CF.c.sampleUniformIntDistribution(SF, AF, "includeMax");
      return {
        ...iW(uF),
        level: uF
      }
    }
  },
  7675: (FF, WF, SF) => {
    function CF(FF, WF) {
      return !FF.hidden && (WF || !FF.isRewardedAd)
    }

    function AF(FF) {
      return "object" === typeof FF ? FF.option : FF
    }

    function uF(FF, WF) {
      var SF;
      if ("dropdown" === (null === (SF = FF.userInput) || void 0 === SF ? void 0 : SF.type) && "object" === typeof FF.userInput.dropdownOptions[0]) {
        for (const SF of FF.userInput.dropdownOptions)
          if (AF(SF) === WF) return "object" === typeof SF ? SF.cost : FF.cost;
        console.error("Didn't find matching option for dropdown item. Item:", FF, "input:", WF)
      }
      return FF.cost
    }

    function hF(FF, WF, SF) {
      var CF;
      const AF = null !== (CF = SF.excludedPlayers) && void 0 !== CF ? CF : [WF];
      return FF.filter((FF => !AF.includes(FF)))
    }
    SF.d(WF, {
      b: () => uF,
      e: () => AF,
      i: () => hF,
      m: () => CF
    })
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);