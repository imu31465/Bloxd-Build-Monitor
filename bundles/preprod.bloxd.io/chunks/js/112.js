export const id = 112;
export const ids = [112];
export const modules = {
  5393: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      default: () => nU
    });
    var cU = zU(61),
      yU = zU(1577),
      QU = zU(344),
      AU = zU(1250),
      FU = zU(1660),
      oU = zU(1280),
      DU = zU(1596),
      EU = zU(1545),
      YU = zU(2900);
    const NU = {
      retries: 2,
      minTimeout: 2e3
    };
    var IU = zU(1115),
      pU = zU(1652),
      aU = zU(1129),
      tU = zU(1978),
      gU = zU(1193),
      kU = zU(1236),
      GU = zU(3869),
      BU = zU(1384),
      ZU = zU(1494),
      RU = zU(1568),
      PU = zU(2852),
      WU = zU(2861),
      dU = zU(5396),
      LU = zU(2236),
      eU = zU(1106),
      CU = zU.n(eU),
      wU = zU(1390),
      qU = zU(5401),
      OU = zU(27),
      SU = zU(2005),
      rU = zU(3998),
      uU = zU(2099),
      fU = zU(3974),
      iU = zU(97),
      HU = zU(4991),
      MU = zU(1305);
    const vU = [dU];

    function VU(UU) {
      let {
        icon: XU,
        label: zU,
        value: cU
      } = UU;
      return (0, MU.jsxs)("div", {
        className: "PlayerProfileStat",
        children: [(0, MU.jsx)(wU.d, {
          name: XU,
          className: "PlayerProfileStatIcon"
        }), (0, MU.jsxs)("div", {
          className: "PlayerProfileStatText",
          children: [(0, MU.jsx)("div", {
            className: "PlayerProfileStatLabel SmallTextLight",
            children: zU
          }), (0, MU.jsx)("div", {
            className: "PlayerProfileStatValue",
            children: cU
          })]
        })]
      })
    }

    function sU(UU) {
      let {
        profile: XU
      } = UU;
      const {
        t: zU,
        selectedLanguage: cU
      } = (0, gU.I)();
      let yU = zU("homePage:profileUnknown");
      if (XU.lastOnline) {
        const UU = (0, gU.l)(cU.code, "homePage:profileTimeAgo");
        yU = zU("homePage:profileTimeAgo", {
          time: (0, QU.eb)(UU, XU.lastOnline, Date.now())
        })
      }
      let AU = zU("homePage:profileUnknown");
      return XU.accountCreatedAt && (AU = new Date(XU.accountCreatedAt).toLocaleDateString(void 0, {
        year: "numeric",
        month: "short",
        day: "numeric"
      })), (0, MU.jsxs)("div", {
        className: "PlayerProfileStats",
        children: [(0, MU.jsx)(VU, {
          icon: "hourglass",
          label: zU("homePage:profileTimePlayed"),
          value: (0, rU.e)(XU.totalPlayMinutes)
        }), (0, MU.jsx)(VU, {
          icon: "wifi",
          label: zU("homePage:profileLastOnline"),
          value: yU
        }), (0, MU.jsx)(VU, {
          icon: "calendar",
          label: zU("homePage:profileJoined"),
          value: AU
        })]
      })
    }

    function nU() {
      const {
        t: UU
      } = (0, gU.I)(), XU = (0, RU.useNavigatePreserveSearch)(), zU = (0, IU.h)(), {
        playerName: dU,
        playerUrlName: eU
      } = (0, yU.C)(), rU = (0, yU.w)(), VU = (0, AU.f)(rU.pathname), nU = VU && ("urlId" in VU ? `urlId:${VU.urlId}` : `name:${VU.lowerCaseName}`), mU = (0, cU.useRef)(nU);
      mU.current = nU;
      const {
        userContext: lU,
        isUserContextUpdating: xU
      } = (0, aU.d)(), JU = (0, cU.useRef)(null), jU = (0, cU.useRef)(null), KU = (0, cU.useRef)(null), bU = (0, cU.useRef)(!1), TU = (0, cU.useRef)((0, QU.hc)(vU)), [hU, UX] = (0, cU.useState)((() => {
        const UU = VU && WU.e.peek(lU, VU);
        return UU ? {
          status: "loaded",
          profile: UU,
          playerKey: nU
        } : {
          status: "loading"
        }
      })), [XX, zX] = (0, cU.useState)(0);
      (0, cU.useEffect)(PU.f, []), (0, cU.useEffect)((() => {
        SU.gameBridge.send("leaveGame", {
          reloadPath: null
        }), OU.e.set({
          gameState: "landingPage",
          openEverythingMenuName: null,
          openInGameMenuName: null
        })
      }), [rU.key]);
      const cX = () => {
        const UU = (0, RU.getPreviousLocation)();
        null === UU || UU.startsWith("/play") ? (0, RU.navigateToHomePage)() : XU(-1)
      };
      (0, HU.e)(cX), (0, cU.useEffect)((() => {
        var UU;
        if (xU) return;
        if (!VU) return void UX({
          status: "notFound",
          playerKey: nU
        });
        const XU = "urlId" in VU && (null === (UU = jU.current) || void 0 === UU ? void 0 : UU.urlId) === VU.urlId && KU.current === lU;
        if (XU && bU.current) return;
        const zU = XU ? null : WU.e.peek(lU, VU);
        let cU = !1;
        const yU = UU => "loaded" === UU.status && (UU.playerKey === nU || "urlId" in VU && UU.profile.urlId === VU.urlId);
        return zU ? (KU.current = lU, bU.current = !1, UX({
          status: "loaded",
          profile: zU,
          playerKey: nU
        }), WU.e.invalidate(VU)) : UX((UU => yU(UU) ? UU : {
          status: "loading"
        })), async function(UU, XU) {
          if ("lowerCaseName" in XU && XU.lowerCaseName.length > oU.h) return {
            status: "notFound"
          };
          try {
            return {
              status: "loaded",
              profile: await EU.c.getPlayerProfile(UU, XU, NU)
            }
          } catch (zU) {
            return (0, YU.c)(zU) ? {
              status: "notFound"
            } : (console.error("Failed to load user profile", zU), {
              status: "failed"
            })
          }
        }(lU, VU).then((UU => {
          cU || ("loaded" === UU.status && (KU.current = lU, bU.current = !0), UX((XU => "failed" === UU.status && yU(XU) ? XU : {
            ...UU,
            playerKey: nU
          })))
        })), () => {
          cU = !0
        }
      }), [xU, nU, lU, XX]);
      const yX = "loading" === hU.status || hU.playerKey === nU || "loaded" === hU.status && !!VU && "urlId" in VU && hU.profile.urlId === VU.urlId ? hU : {
          status: "loading"
        },
        QX = "loaded" === yX.status ? yX.profile : null,
        AX = "loading" === yX.status ? null : function(UU) {
          if ("loaded" === UU.status) {
            const {
              profile: XU
            } = UU;
            return (0, DU.W)({
              urlId: XU.urlId,
              name: XU.player.name,
              ranks: XU.player.ranks,
              socialLinks: XU.socialLinks
            })
          }
          return "notFound" === UU.status ? (0, DU.eb)() : null
        }(yX),
        FX = null !== QX && void 0 !== QX && QX.urlId ? (0, AU.j)({
          urlId: QX.urlId,
          name: QX.player.name
        }) : null;
      (0, pU.g)(FX);
      const oX = null !== QX && void 0 !== QX && QX.player.cosmetics.profileEffect ? LU.h[QX.player.cosmetics.profileEffect] : void 0,
        DX = null !== QX && !xU && lU.getPlayerName().toLowerCase() === QX.player.name.toLowerCase(),
        EX = (0, uU.b)(null === QX || void 0 === QX ? void 0 : QX.player.name),
        YX = DX && lU.playerHasRank("youtuber");
      jU.current = QX;
      const NX = (0, cU.useCallback)((() => {
          VU && (WU.e.invalidate(VU), WU.e.get(lU, VU).then((UU => {
            mU.current === nU && (bU.current = !0, UX({
              status: "loaded",
              profile: UU,
              playerKey: nU
            }))
          })).catch((UU => {
            console.error("Failed to refresh user profile", UU)
          })))
        }), [nU, lU]),
        IX = (0, cU.useCallback)((() => {
          var UU;
          const XU = jU.current;
          return !(!XU || null === (UU = JU.current) || void 0 === UU || !UU.isReady()) && (JU.current.setAllCosmetics(XU.player.cosmetics), !0)
        }), []);
      return (0, cU.useEffect)((() => {
        if (!QX) return;
        let UU, XU = !1;
        const zU = () => {
          XU || IX() || (UU = setTimeout(zU, 100))
        };
        return zU(), () => {
          XU = !0, clearTimeout(UU)
        }
      }), [QX, IX]), (0, MU.jsxs)("div", {
        className: CU()("PlayerProfile", {
          PlayerProfilePortrait: zU
        }),
        children: [AX && (0, MU.jsx)(FU.d, {
          meta: AX
        }), (0, MU.jsxs)("div", {
          className: "PlayerProfileBackgroundContainer",
          children: [oX && (0, MU.jsx)(oX, {}), !oX && (0, MU.jsx)("div", {
            className: "PlayerProfileBackground",
            style: {
              backgroundImage: `url(${TU.current})`
            }
          })]
        }), (0, MU.jsxs)("div", {
          className: "PlayerProfileHeader",
          children: [(0, MU.jsx)(ZU.e, {
            onClick: cX,
            children: UU("general:back")
          }), QX && !xU && !DX && iU.featureFlags.useSocialFeatures && (0, MU.jsx)("div", {
            className: "PlayerProfileExclusionActions",
            children: (0, MU.jsx)(fU.d, {
              playerName: QX.player.name,
              className: "SmallTextLight"
            })
          })]
        }), "loading" === yX.status && (0, MU.jsx)("div", {
          className: "PlayerProfileCentredMessage",
          children: (0, MU.jsx)(BU.b, {})
        }), ("notFound" === yX.status || "failed" === yX.status) && (0, MU.jsxs)("div", {
          className: "PlayerProfileCentredMessage PlayerProfileError",
          children: [(0, MU.jsx)(wU.d, {
            name: "face-dizzy"
          }), (0, MU.jsx)("div", {
            className: "PlayerProfileErrorText",
            children: "notFound" === yX.status ? UU("socialBar:playerNotFound", {
              playerName: null !== eU && void 0 !== eU ? eU : dU
            }) : UU("playerProfile:loadFailed")
          }), "failed" === yX.status && (0, MU.jsx)(ZU.f, {
            onClick: () => {
              zX((UU => UU + 1))
            },
            children: UU("general:tryAgain")
          })]
        }), QX && (0, MU.jsxs)("div", {
          className: "PlayerProfileContent",
          children: [(0, MU.jsxs)("div", {
            className: "PlayerProfileLeft",
            children: [(0, MU.jsx)("div", {
              className: "PlayerProfileName FullyFancyText",
              children: (0, MU.jsx)(tU.d, {
                text: (0, kU.t)(QX.player.ranks, QX.player.name, QX.player.nameColour),
                friendBadgeFor: EX ? QX.player.name : void 0
              })
            }), (0, MU.jsx)("div", {
              className: "PlayerProfileModel",
              children: (0, MU.jsx)(cU.Suspense, {
                fallback: (0, MU.jsx)("div", {
                  className: "PlayerProfileModelLoading",
                  children: (0, MU.jsx)(BU.b, {})
                }),
                children: (0, MU.jsx)(PU.d, {
                  ref: JU,
                  onReady: () => {
                    IX()
                  }
                })
              })
            })]
          }), (0, MU.jsxs)("div", {
            className: "PlayerProfileRight",
            children: [(0, MU.jsx)(sU, {
              profile: QX
            }), (QX.socialLinks.length > 0 || YX) && (0, MU.jsx)(qU.e, {
              socialLinks: QX.socialLinks,
              editable: YX,
              userContext: lU,
              onLinksUpdated: NX
            }), (0, MU.jsxs)("div", {
              className: "PlayerProfileGames",
              children: [(0, MU.jsx)("div", {
                className: "PlayerProfileGamesTitle SmallTextBold",
                children: UU("homePage:profileReleasedGames")
              }), 0 === QX.releasedGames.length && (0, MU.jsx)("div", {
                className: "PlayerProfileNoGames",
                children: UU("homePage:profileNoReleasedGames")
              }), QX.releasedGames.length > 0 && (0, MU.jsx)("div", {
                className: "PlayerProfileGamesGrid",
                children: QX.releasedGames.map((UU => (0, MU.jsx)(GU.g, {
                  source: {
                    type: "preview",
                    preview: UU
                  },
                  gameWidth: "100%",
                  useLongRatio: !0,
                  hideFavourites: !0,
                  entrySource: "other"
                }, UU.schematicId)))
              })]
            })]
          })]
        })]
      })
    }
  },
  5401: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => tU
    });
    var cU = zU(1106),
      yU = zU.n(cU),
      QU = zU(5071),
      AU = zU(1193),
      FU = zU(1390),
      oU = zU(1494),
      DU = zU(1545),
      EU = zU(1410),
      YU = zU(2692),
      NU = zU(1305);
    const IU = {
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

    function pU(UU) {
      let {
        platform: XU
      } = UU;
      const zU = "youtube" === XU;
      return (0, NU.jsxs)("span", {
        className: yU()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: zU
        }),
        children: [zU && (0, NU.jsx)(YU.d, {
          variant: "white"
        }), !zU && (0, NU.jsx)(FU.d, {
          name: IU[XU].icon,
          kit: "brands"
        })]
      })
    }

    function aU(UU) {
      let {
        platform: XU,
        link: zU,
        editable: cU,
        userContext: yU,
        onLinksUpdated: YU
      } = UU;
      const {
        t: aU
      } = (0, AU.I)(), tU = IU[XU];
      if (!zU && !cU) return null;

      function gU() {
        var UU;
        if (!yU || !YU) return;
        EU.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: tU.name
            }
          },
          prefixText: QU.q[XU],
          placeholderText: "playBloxd",
          initialValue: null !== (UU = null === zU || void 0 === zU ? void 0 : zU.handle) && void 0 !== UU ? UU : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: zU ? "general:remove" : void 0
        }).getResult().then((async UU => {
          if ("notificationTornDown" !== UU && null !== UU) try {
            "submit" === UU.type ? await DU.c.setSocialLink(yU, XU, UU.value) : await DU.c.clearSocialLink(yU, XU), YU()
          } catch (zU) {
            console.error("Failed to update social link", zU), EU.NotificationProvider.showAlertPopup({
              title: zU.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (zU) {
        const UU = `@${zU.handle}`;
        return (0, NU.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: tU.color
          },
          href: zU.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, NU.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, NU.jsx)(pU, {
              platform: XU
            }), (0, NU.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, NU.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: UU
              })
            })]
          }), cU && (0, NU.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, oU.W)({
              stopPropagation: !0
            }),
            onClick: UU => {
              UU.stopPropagation(), UU.preventDefault(), gU()
            },
            children: (0, NU.jsx)(FU.d, {
              name: "pen-to-square"
            })
          }), !cU && (0, NU.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, NU.jsx)(FU.d, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, NU.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: tU.color
        },
        ...(0, oU.W)(),
        onClick: () => {
          gU()
        },
        children: [(0, NU.jsx)(pU, {
          platform: XU
        }), (0, NU.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, NU.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: tU.name
          }), (0, NU.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: aU("homePage:profileSocialLinkAdd")
          })]
        }), (0, NU.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, NU.jsx)(FU.d, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function tU(UU) {
      let {
        socialLinks: XU,
        editable: zU = !1,
        userContext: cU,
        onLinksUpdated: yU
      } = UU;
      if (!zU && 0 === XU.length) return null;
      const AU = new Map(XU.map((UU => [UU.platform, UU]))),
        FU = zU ? QU.m : XU.map((UU => UU.platform));
      return (0, NU.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, NU.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: FU.map((UU => (0, NU.jsx)(aU, {
            platform: UU,
            link: AU.get(UU),
            editable: zU,
            userContext: cU,
            onLinksUpdated: yU
          }, UU)))
        })
      })
    }
  },
  5396: UU => {
    UU.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGOws7P7D8Kmpqb/NTU1wTQymwGbAhANwwzIOmAYxQRkCXNzczBGtgrFBGQFKFZgsxtuAi67YY5HMQGbAgCIxWSBYHJzHAAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);