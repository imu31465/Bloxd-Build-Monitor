export const id = 102;
export const ids = [102];
export const modules = {
  5231: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      default: () => eQ
    });
    var wQ = XQ(61),
      qQ = XQ(1581),
      TQ = XQ(402),
      zQ = XQ(1268),
      sQ = XQ(1676),
      FQ = XQ(1302),
      PQ = XQ(1607),
      gQ = XQ(1548),
      JQ = XQ(2826);
    const rQ = {
      retries: 2,
      minTimeout: 2e3
    };
    var IQ = XQ(1154),
      jQ = XQ(1674),
      BQ = XQ(1162),
      yQ = XQ(1975),
      VQ = XQ(1226),
      DQ = XQ(1257),
      pQ = XQ(3732),
      GQ = XQ(1391),
      UQ = XQ(1507),
      bQ = XQ(1567),
      vQ = XQ(2776),
      dQ = XQ(2783),
      HQ = XQ(5239),
      aQ = XQ(2237),
      lQ = XQ(1081),
      hQ = XQ.n(lQ),
      iQ = XQ(1094),
      cQ = XQ(5241),
      AQ = XQ(26),
      RQ = XQ(2003),
      EQ = XQ(3871),
      CQ = XQ(2094),
      uQ = XQ(3842),
      LQ = XQ(105),
      kQ = XQ(4875),
      fQ = XQ(1145);
    const SQ = [HQ];

    function tQ(QQ) {
      let {
        icon: WQ,
        label: XQ,
        value: wQ
      } = QQ;
      return (0, fQ.jsxs)("div", {
        className: "PlayerProfileStat",
        children: [(0, fQ.jsx)(iQ.d, {
          name: WQ,
          className: "PlayerProfileStatIcon"
        }), (0, fQ.jsxs)("div", {
          className: "PlayerProfileStatText",
          children: [(0, fQ.jsx)("div", {
            className: "PlayerProfileStatLabel SmallTextLight",
            children: XQ
          }), (0, fQ.jsx)("div", {
            className: "PlayerProfileStatValue",
            children: wQ
          })]
        })]
      })
    }

    function oQ(QQ) {
      let {
        profile: WQ
      } = QQ;
      const {
        t: XQ,
        selectedLanguage: wQ
      } = (0, VQ.C)();
      let qQ = XQ("homePage:profileUnknown");
      if (WQ.lastOnline) {
        const QQ = (0, VQ.n)(wQ.code, "homePage:profileTimeAgo");
        qQ = XQ("homePage:profileTimeAgo", {
          time: (0, TQ.bb)(QQ, WQ.lastOnline, Date.now())
        })
      }
      let zQ = XQ("homePage:profileUnknown");
      return WQ.accountCreatedAt && (zQ = new Date(WQ.accountCreatedAt).toLocaleDateString(void 0, {
        year: "numeric",
        month: "short",
        day: "numeric"
      })), (0, fQ.jsxs)("div", {
        className: "PlayerProfileStats",
        children: [(0, fQ.jsx)(tQ, {
          icon: "hourglass",
          label: XQ("homePage:profileTimePlayed"),
          value: (0, EQ.d)(WQ.totalPlayMinutes)
        }), (0, fQ.jsx)(tQ, {
          icon: "wifi",
          label: XQ("homePage:profileLastOnline"),
          value: qQ
        }), (0, fQ.jsx)(tQ, {
          icon: "calendar",
          label: XQ("homePage:profileJoined"),
          value: zQ
        })]
      })
    }

    function eQ() {
      const {
        t: QQ
      } = (0, VQ.C)(), WQ = (0, bQ.useNavigatePreserveSearch)(), XQ = (0, IQ.i)(), {
        playerName: HQ,
        playerUrlName: lQ
      } = (0, qQ.E)(), EQ = (0, qQ.w)(), tQ = (0, zQ.f)(EQ.pathname), eQ = tQ && ("urlId" in tQ ? `urlId:${tQ.urlId}` : `name:${tQ.lowerCaseName}`), nQ = (0, wQ.useRef)(eQ);
      nQ.current = eQ;
      const {
        userContext: xQ,
        isUserContextUpdating: YQ
      } = (0, BQ.c)(), NQ = (0, wQ.useRef)(null), ZQ = (0, wQ.useRef)(null), OQ = (0, wQ.useRef)(null), KQ = (0, wQ.useRef)(!1), mQ = (0, wQ.useRef)((0, TQ.Yb)(SQ)), [MQ, QW] = (0, wQ.useState)((() => {
        const QQ = tQ && dQ.e.peek(xQ, tQ);
        return QQ ? {
          status: "loaded",
          profile: QQ,
          playerKey: eQ
        } : {
          status: "loading"
        }
      })), [WW, XW] = (0, wQ.useState)(0);
      (0, wQ.useEffect)(vQ.g, []), (0, wQ.useEffect)((() => {
        RQ.gameBridge.send("leaveGame", {
          reloadPath: null
        }), AQ.b.set({
          gameState: "landingPage",
          openEverythingMenuName: null,
          openInGameMenuName: null
        })
      }), [EQ.key]);
      const wW = () => {
        const QQ = (0, bQ.getPreviousLocation)();
        null === QQ || QQ.startsWith("/play") ? (0, bQ.navigateToHomePage)() : WQ(-1)
      };
      (0, kQ.b)(wW), (0, wQ.useEffect)((() => {
        var QQ;
        if (YQ) return;
        if (!tQ) return void QW({
          status: "notFound",
          playerKey: eQ
        });
        const WQ = "urlId" in tQ && (null === (QQ = ZQ.current) || void 0 === QQ ? void 0 : QQ.urlId) === tQ.urlId && OQ.current === xQ;
        if (WQ && KQ.current) return;
        const XQ = WQ ? null : dQ.e.peek(xQ, tQ);
        let wQ = !1;
        const qQ = QQ => "loaded" === QQ.status && (QQ.playerKey === eQ || "urlId" in tQ && QQ.profile.urlId === tQ.urlId);
        return XQ ? (OQ.current = xQ, KQ.current = !1, QW({
          status: "loaded",
          profile: XQ,
          playerKey: eQ
        }), dQ.e.invalidate(tQ)) : QW((QQ => qQ(QQ) ? QQ : {
          status: "loading"
        })), async function(QQ, WQ) {
          if ("lowerCaseName" in WQ && WQ.lowerCaseName.length > FQ.j) return {
            status: "notFound"
          };
          try {
            return {
              status: "loaded",
              profile: await gQ.e.getPlayerProfile(QQ, WQ, rQ)
            }
          } catch (XQ) {
            return (0, JQ.c)(XQ) ? {
              status: "notFound"
            } : (console.error("Failed to load user profile", XQ), {
              status: "failed"
            })
          }
        }(xQ, tQ).then((QQ => {
          wQ || ("loaded" === QQ.status && (OQ.current = xQ, KQ.current = !0), QW((WQ => "failed" === QQ.status && qQ(WQ) ? WQ : {
            ...QQ,
            playerKey: eQ
          })))
        })), () => {
          wQ = !0
        }
      }), [YQ, eQ, xQ, WW]);
      const qW = "loading" === MQ.status || MQ.playerKey === eQ || "loaded" === MQ.status && !!tQ && "urlId" in tQ && MQ.profile.urlId === tQ.urlId ? MQ : {
          status: "loading"
        },
        TW = "loaded" === qW.status ? qW.profile : null,
        zW = "loading" === qW.status ? null : function(QQ) {
          if ("loaded" === QQ.status) {
            const {
              profile: WQ
            } = QQ;
            return (0, PQ.Q)({
              urlId: WQ.urlId,
              name: WQ.player.name,
              ranks: WQ.player.ranks,
              socialLinks: WQ.socialLinks
            })
          }
          return "notFound" === QQ.status ? (0, PQ.W)() : null
        }(qW),
        sW = null !== TW && void 0 !== TW && TW.urlId ? (0, zQ.h)({
          urlId: TW.urlId,
          name: TW.player.name
        }) : null;
      (0, jQ.g)(sW);
      const FW = null !== TW && void 0 !== TW && TW.player.cosmetics.profileEffect ? aQ.d[TW.player.cosmetics.profileEffect] : void 0,
        PW = null !== TW && !YQ && xQ.getPlayerName().toLowerCase() === TW.player.name.toLowerCase(),
        gW = (0, CQ.b)(null === TW || void 0 === TW ? void 0 : TW.player.name),
        JW = PW && xQ.playerHasRank("youtuber");
      ZQ.current = TW;
      const rW = (0, wQ.useCallback)((() => {
          tQ && (dQ.e.invalidate(tQ), dQ.e.get(xQ, tQ).then((QQ => {
            nQ.current === eQ && (KQ.current = !0, QW({
              status: "loaded",
              profile: QQ,
              playerKey: eQ
            }))
          })).catch((QQ => {
            console.error("Failed to refresh user profile", QQ)
          })))
        }), [eQ, xQ]),
        IW = (0, wQ.useCallback)((() => {
          var QQ;
          const WQ = ZQ.current;
          return !(!WQ || null === (QQ = NQ.current) || void 0 === QQ || !QQ.isReady()) && (NQ.current.setAllCosmetics(WQ.player.cosmetics), !0)
        }), []);
      return (0, wQ.useEffect)((() => {
        if (!TW) return;
        let QQ, WQ = !1;
        const XQ = () => {
          WQ || IW() || (QQ = setTimeout(XQ, 100))
        };
        return XQ(), () => {
          WQ = !0, clearTimeout(QQ)
        }
      }), [TW, IW]), (0, fQ.jsxs)("div", {
        className: hQ()("PlayerProfile", {
          PlayerProfilePortrait: XQ
        }),
        children: [zW && (0, fQ.jsx)(sQ.d, {
          meta: zW
        }), (0, fQ.jsxs)("div", {
          className: "PlayerProfileBackgroundContainer",
          children: [FW && (0, fQ.jsx)(FW, {}), !FW && (0, fQ.jsx)("div", {
            className: "PlayerProfileBackground",
            style: {
              backgroundImage: `url(${mQ.current})`
            }
          })]
        }), (0, fQ.jsxs)("div", {
          className: "PlayerProfileHeader",
          children: [(0, fQ.jsx)(UQ.e, {
            onClick: wW,
            children: QQ("general:back")
          }), TW && !YQ && !PW && LQ.featureFlags.useSocialFeatures && (0, fQ.jsx)("div", {
            className: "PlayerProfileExclusionActions",
            children: (0, fQ.jsx)(uQ.c, {
              playerName: TW.player.name,
              className: "SmallTextLight"
            })
          })]
        }), "loading" === qW.status && (0, fQ.jsx)("div", {
          className: "PlayerProfileCentredMessage",
          children: (0, fQ.jsx)(GQ.e, {})
        }), ("notFound" === qW.status || "failed" === qW.status) && (0, fQ.jsxs)("div", {
          className: "PlayerProfileCentredMessage PlayerProfileError",
          children: [(0, fQ.jsx)(iQ.d, {
            name: "face-dizzy"
          }), (0, fQ.jsx)("div", {
            className: "PlayerProfileErrorText",
            children: "notFound" === qW.status ? QQ("socialBar:playerNotFound", {
              playerName: null !== lQ && void 0 !== lQ ? lQ : HQ
            }) : QQ("playerProfile:loadFailed")
          }), "failed" === qW.status && (0, fQ.jsx)(UQ.h, {
            onClick: () => {
              XW((QQ => QQ + 1))
            },
            children: QQ("general:tryAgain")
          })]
        }), TW && (0, fQ.jsxs)("div", {
          className: "PlayerProfileContent",
          children: [(0, fQ.jsxs)("div", {
            className: "PlayerProfileLeft",
            children: [(0, fQ.jsx)("div", {
              className: "PlayerProfileName FullyFancyText",
              children: (0, fQ.jsx)(yQ.e, {
                text: (0, DQ.u)(TW.player.ranks, TW.player.name, TW.player.nameColour),
                friendBadgeFor: gW ? TW.player.name : void 0
              })
            }), (0, fQ.jsx)("div", {
              className: "PlayerProfileModel",
              children: (0, fQ.jsx)(wQ.Suspense, {
                fallback: (0, fQ.jsx)("div", {
                  className: "PlayerProfileModelLoading",
                  children: (0, fQ.jsx)(GQ.e, {})
                }),
                children: (0, fQ.jsx)(vQ.c, {
                  ref: NQ,
                  onReady: () => {
                    IW()
                  }
                })
              })
            })]
          }), (0, fQ.jsxs)("div", {
            className: "PlayerProfileRight",
            children: [(0, fQ.jsx)(oQ, {
              profile: TW
            }), (TW.socialLinks.length > 0 || JW) && (0, fQ.jsx)(cQ.e, {
              socialLinks: TW.socialLinks,
              editable: JW,
              userContext: xQ,
              onLinksUpdated: rW
            }), (0, fQ.jsxs)("div", {
              className: "PlayerProfileGames",
              children: [(0, fQ.jsx)("div", {
                className: "PlayerProfileGamesTitle SmallTextBold",
                children: QQ("homePage:profileReleasedGames")
              }), 0 === TW.releasedGames.length && (0, fQ.jsx)("div", {
                className: "PlayerProfileNoGames",
                children: QQ("homePage:profileNoReleasedGames")
              }), TW.releasedGames.length > 0 && (0, fQ.jsx)("div", {
                className: "PlayerProfileGamesGrid",
                children: TW.releasedGames.map((QQ => (0, fQ.jsx)(pQ.d, {
                  source: {
                    type: "preview",
                    preview: QQ
                  },
                  gameWidth: "100%",
                  useLongRatio: !0,
                  hideFavourites: !0,
                  entrySource: "other"
                }, QQ.schematicId)))
              })]
            })]
          })]
        })]
      })
    }
  },
  5241: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => yQ
    });
    var wQ = XQ(1081),
      qQ = XQ.n(wQ),
      TQ = XQ(4958),
      zQ = XQ(1226),
      sQ = XQ(1094),
      FQ = XQ(1507),
      PQ = XQ(1548),
      gQ = XQ(1404),
      JQ = XQ(2614),
      rQ = XQ(1145);
    const IQ = {
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

    function jQ(QQ) {
      let {
        platform: WQ
      } = QQ;
      const XQ = "youtube" === WQ;
      return (0, rQ.jsxs)("span", {
        className: qQ()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: XQ
        }),
        children: [XQ && (0, rQ.jsx)(JQ.c, {
          variant: "white"
        }), !XQ && (0, rQ.jsx)(sQ.d, {
          name: IQ[WQ].icon,
          kit: "brands"
        })]
      })
    }

    function BQ(QQ) {
      let {
        platform: WQ,
        link: XQ,
        editable: wQ,
        userContext: qQ,
        onLinksUpdated: JQ
      } = QQ;
      const {
        t: BQ
      } = (0, zQ.C)(), yQ = IQ[WQ];
      if (!XQ && !wQ) return null;

      function VQ() {
        var QQ;
        if (!qQ || !JQ) return;
        gQ.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: yQ.name
            }
          },
          prefixText: TQ.t[WQ],
          placeholderText: "playBloxd",
          initialValue: null !== (QQ = null === XQ || void 0 === XQ ? void 0 : XQ.handle) && void 0 !== QQ ? QQ : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: XQ ? "general:remove" : void 0
        }).getResult().then((async QQ => {
          if ("notificationTornDown" !== QQ && null !== QQ) try {
            "submit" === QQ.type ? await PQ.e.setSocialLink(qQ, WQ, QQ.value) : await PQ.e.clearSocialLink(qQ, WQ), JQ()
          } catch (XQ) {
            console.error("Failed to update social link", XQ), gQ.NotificationProvider.showAlertPopup({
              title: XQ.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (XQ) {
        const QQ = `@${XQ.handle}`;
        return (0, rQ.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: yQ.color
          },
          href: XQ.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, rQ.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, rQ.jsx)(jQ, {
              platform: WQ
            }), (0, rQ.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, rQ.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: QQ
              })
            })]
          }), wQ && (0, rQ.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, FQ.ab)({
              stopPropagation: !0
            }),
            onClick: QQ => {
              QQ.stopPropagation(), QQ.preventDefault(), VQ()
            },
            children: (0, rQ.jsx)(sQ.d, {
              name: "pen-to-square"
            })
          }), !wQ && (0, rQ.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, rQ.jsx)(sQ.d, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, rQ.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: yQ.color
        },
        ...(0, FQ.ab)(),
        onClick: () => {
          VQ()
        },
        children: [(0, rQ.jsx)(jQ, {
          platform: WQ
        }), (0, rQ.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, rQ.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: yQ.name
          }), (0, rQ.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: BQ("homePage:profileSocialLinkAdd")
          })]
        }), (0, rQ.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, rQ.jsx)(sQ.d, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function yQ(QQ) {
      let {
        socialLinks: WQ,
        editable: XQ = !1,
        userContext: wQ,
        onLinksUpdated: qQ
      } = QQ;
      if (!XQ && 0 === WQ.length) return null;
      const zQ = new Map(WQ.map((QQ => [QQ.platform, QQ]))),
        sQ = XQ ? TQ.s : WQ.map((QQ => QQ.platform));
      return (0, rQ.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, rQ.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: sQ.map((QQ => (0, rQ.jsx)(BQ, {
            platform: QQ,
            link: zQ.get(QQ),
            editable: XQ,
            userContext: wQ,
            onLinksUpdated: qQ
          }, QQ)))
        })
      })
    }
  },
  5239: QQ => {
    QQ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGOws7P7D8Kmpqb/NTU1wTQymwGbAhANwwzIOmAYxQRkCXNzczBGtgrFBGQFKFZgsxtuAi67YY5HMQGbAgCIxWSBYHJzHAAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);