export const id = 96;
export const ids = [96];
export const modules = {
  4713: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      default: () => hQ
    });
    var LQ = wQ(53),
      qQ = wQ(1515),
      oQ = wQ(317),
      DQ = wQ(1246),
      kQ = wQ(1612),
      vQ = wQ(1282),
      mQ = wQ(1539),
      uQ = wQ(1489),
      HQ = wQ(2574);
    const bQ = {
      retries: 2,
      minTimeout: 2e3
    };
    var YQ = wQ(1130),
      xQ = wQ(1607),
      AQ = wQ(1140),
      tQ = wQ(1873),
      eQ = wQ(1207),
      MQ = wQ(1237),
      GQ = wQ(3356),
      pQ = wQ(1348),
      cQ = wQ(1451),
      CQ = wQ(1503),
      SQ = wQ(2507),
      iQ = wQ(2518),
      WQ = wQ(4716),
      RQ = wQ(2088),
      OQ = wQ(1070),
      sQ = wQ.n(OQ),
      rQ = wQ(1079),
      IQ = wQ(4721),
      UQ = wQ(17),
      NQ = wQ(1897),
      TQ = wQ(3516),
      KQ = wQ(1988),
      zQ = wQ(3467),
      lQ = wQ(96),
      jQ = wQ(4400),
      aQ = wQ(1107);
    const XQ = [WQ];

    function fQ(QQ) {
      let {
        icon: FQ,
        label: wQ,
        value: LQ
      } = QQ;
      return (0, aQ.jsxs)("div", {
        className: "PlayerProfileStat",
        children: [(0, aQ.jsx)(rQ.c, {
          name: FQ,
          className: "PlayerProfileStatIcon"
        }), (0, aQ.jsxs)("div", {
          className: "PlayerProfileStatText",
          children: [(0, aQ.jsx)("div", {
            className: "PlayerProfileStatLabel SmallTextLight",
            children: wQ
          }), (0, aQ.jsx)("div", {
            className: "PlayerProfileStatValue",
            children: LQ
          })]
        })]
      })
    }

    function VQ(QQ) {
      let {
        profile: FQ
      } = QQ;
      const {
        t: wQ,
        selectedLanguage: LQ
      } = (0, eQ.y)();
      let qQ = wQ("homePage:profileUnknown");
      if (FQ.lastOnline) {
        const QQ = (0, eQ.k)(LQ.code, "homePage:profileTimeAgo");
        qQ = wQ("homePage:profileTimeAgo", {
          time: (0, oQ.db)(QQ, FQ.lastOnline, Date.now())
        })
      }
      let DQ = wQ("homePage:profileUnknown");
      return FQ.accountCreatedAt && (DQ = new Date(FQ.accountCreatedAt).toLocaleDateString(void 0, {
        year: "numeric",
        month: "short",
        day: "numeric"
      })), (0, aQ.jsxs)("div", {
        className: "PlayerProfileStats",
        children: [(0, aQ.jsx)(fQ, {
          icon: "hourglass",
          label: wQ("homePage:profileTimePlayed"),
          value: (0, TQ.e)(FQ.totalPlayMinutes)
        }), (0, aQ.jsx)(fQ, {
          icon: "wifi",
          label: wQ("homePage:profileLastOnline"),
          value: qQ
        }), (0, aQ.jsx)(fQ, {
          icon: "calendar",
          label: wQ("homePage:profileJoined"),
          value: DQ
        })]
      })
    }

    function hQ() {
      const {
        t: QQ
      } = (0, eQ.y)(), FQ = (0, CQ.useNavigatePreserveSearch)(), wQ = (0, YQ.i)(), {
        playerName: WQ,
        playerUrlName: OQ
      } = (0, qQ.y)(), TQ = (0, qQ.r)(), fQ = (0, DQ.c)(TQ.pathname), hQ = fQ && ("urlId" in fQ ? `urlId:${fQ.urlId}` : `name:${fQ.lowerCaseName}`), JQ = (0, LQ.useRef)(hQ);
      JQ.current = hQ;
      const {
        userContext: EQ,
        isUserContextUpdating: nQ
      } = (0, AQ.e)(), gQ = (0, LQ.useRef)(null), PQ = (0, LQ.useRef)(null), ZQ = (0, LQ.useRef)(null), yQ = (0, LQ.useRef)(!1), BQ = (0, LQ.useRef)((0, oQ.gc)(XQ)), [dQ, QF] = (0, LQ.useState)((() => {
        const QQ = fQ && iQ.e.peek(EQ, fQ);
        return QQ ? {
          status: "loaded",
          profile: QQ,
          playerKey: hQ
        } : {
          status: "loading"
        }
      })), [FF, wF] = (0, LQ.useState)(0);
      (0, LQ.useEffect)(SQ.e, []), (0, LQ.useEffect)((() => {
        NQ.gameBridge.send("leaveGame", {
          reloadPath: null
        }), UQ.c.set({
          gameState: "landingPage",
          openEverythingMenuName: null,
          openInGameMenuName: null
        })
      }), [TQ.key]);
      const LF = () => {
        const QQ = (0, CQ.getPreviousLocation)();
        null === QQ || QQ.startsWith("/play") ? (0, CQ.navigateToHomePage)() : FQ(-1)
      };
      (0, jQ.c)(LF), (0, LQ.useEffect)((() => {
        var QQ;
        if (nQ) return;
        if (!fQ) return void QF({
          status: "notFound",
          playerKey: hQ
        });
        const FQ = "urlId" in fQ && (null === (QQ = PQ.current) || void 0 === QQ ? void 0 : QQ.urlId) === fQ.urlId && ZQ.current === EQ;
        if (FQ && yQ.current) return;
        const wQ = FQ ? null : iQ.e.peek(EQ, fQ);
        let LQ = !1;
        const qQ = QQ => "loaded" === QQ.status && (QQ.playerKey === hQ || "urlId" in fQ && QQ.profile.urlId === fQ.urlId);
        return wQ ? (ZQ.current = EQ, yQ.current = !1, QF({
          status: "loaded",
          profile: wQ,
          playerKey: hQ
        }), iQ.e.invalidate(fQ)) : QF((QQ => qQ(QQ) ? QQ : {
          status: "loading"
        })), async function(QQ, FQ) {
          if ("lowerCaseName" in FQ && FQ.lowerCaseName.length > vQ.k) return {
            status: "notFound"
          };
          try {
            return {
              status: "loaded",
              profile: await uQ.b.getPlayerProfile(QQ, FQ, bQ)
            }
          } catch (wQ) {
            return (0, HQ.d)(wQ) ? {
              status: "notFound"
            } : (console.error("Failed to load user profile", wQ), {
              status: "failed"
            })
          }
        }(EQ, fQ).then((QQ => {
          LQ || ("loaded" === QQ.status && (ZQ.current = EQ, yQ.current = !0), QF((FQ => "failed" === QQ.status && qQ(FQ) ? FQ : {
            ...QQ,
            playerKey: hQ
          })))
        })), () => {
          LQ = !0
        }
      }), [nQ, hQ, EQ, FF]);
      const qF = "loading" === dQ.status || dQ.playerKey === hQ || "loaded" === dQ.status && !!fQ && "urlId" in fQ && dQ.profile.urlId === fQ.urlId ? dQ : {
          status: "loading"
        },
        oF = "loaded" === qF.status ? qF.profile : null,
        DF = "loading" === qF.status ? null : function(QQ) {
          if ("loaded" === QQ.status) {
            const {
              profile: FQ
            } = QQ;
            return (0, mQ.V)({
              urlId: FQ.urlId,
              name: FQ.player.name,
              ranks: FQ.player.ranks,
              socialLinks: FQ.socialLinks
            })
          }
          return "notFound" === QQ.status ? (0, mQ.cb)() : null
        }(qF),
        kF = null !== oF && void 0 !== oF && oF.urlId ? (0, DQ.e)({
          urlId: oF.urlId,
          name: oF.player.name
        }) : null;
      (0, xQ.h)(kF);
      const vF = null !== oF && void 0 !== oF && oF.player.cosmetics.profileEffect ? RQ.d[oF.player.cosmetics.profileEffect] : void 0,
        mF = null !== oF && !nQ && EQ.getPlayerName().toLowerCase() === oF.player.name.toLowerCase(),
        uF = (0, KQ.d)(null === oF || void 0 === oF ? void 0 : oF.player.name),
        HF = mF && EQ.playerHasRank("youtuber");
      PQ.current = oF;
      const bF = (0, LQ.useCallback)((() => {
          fQ && (iQ.e.invalidate(fQ), iQ.e.get(EQ, fQ).then((QQ => {
            JQ.current === hQ && (yQ.current = !0, QF({
              status: "loaded",
              profile: QQ,
              playerKey: hQ
            }))
          })).catch((QQ => {
            console.error("Failed to refresh user profile", QQ)
          })))
        }), [hQ, EQ]),
        YF = (0, LQ.useCallback)((() => {
          var QQ;
          const FQ = PQ.current;
          return !(!FQ || null === (QQ = gQ.current) || void 0 === QQ || !QQ.isReady()) && (gQ.current.setAllCosmetics(FQ.player.cosmetics), !0)
        }), []);
      return (0, LQ.useEffect)((() => {
        if (!oF) return;
        let QQ, FQ = !1;
        const wQ = () => {
          FQ || YF() || (QQ = setTimeout(wQ, 100))
        };
        return wQ(), () => {
          FQ = !0, clearTimeout(QQ)
        }
      }), [oF, YF]), (0, aQ.jsxs)("div", {
        className: sQ()("PlayerProfile", {
          PlayerProfilePortrait: wQ
        }),
        children: [DF && (0, aQ.jsx)(kQ.c, {
          meta: DF
        }), (0, aQ.jsxs)("div", {
          className: "PlayerProfileBackgroundContainer",
          children: [vF && (0, aQ.jsx)(vF, {}), !vF && (0, aQ.jsx)("div", {
            className: "PlayerProfileBackground",
            style: {
              backgroundImage: `url(${BQ.current})`
            }
          })]
        }), (0, aQ.jsxs)("div", {
          className: "PlayerProfileHeader",
          children: [(0, aQ.jsx)(cQ.b, {
            onClick: LF,
            children: QQ("general:back")
          }), oF && !nQ && !mF && lQ.featureFlags.useSocialFeatures && (0, aQ.jsx)("div", {
            className: "PlayerProfileExclusionActions",
            children: (0, aQ.jsx)(zQ.b, {
              playerName: oF.player.name,
              className: "SmallTextLight"
            })
          })]
        }), "loading" === qF.status && (0, aQ.jsx)("div", {
          className: "PlayerProfileCentredMessage",
          children: (0, aQ.jsx)(pQ.c, {})
        }), ("notFound" === qF.status || "failed" === qF.status) && (0, aQ.jsxs)("div", {
          className: "PlayerProfileCentredMessage PlayerProfileError",
          children: [(0, aQ.jsx)(rQ.c, {
            name: "face-dizzy"
          }), (0, aQ.jsx)("div", {
            className: "PlayerProfileErrorText",
            children: "notFound" === qF.status ? QQ("socialBar:playerNotFound", {
              playerName: null !== OQ && void 0 !== OQ ? OQ : WQ
            }) : QQ("playerProfile:loadFailed")
          }), "failed" === qF.status && (0, aQ.jsx)(cQ.f, {
            onClick: () => {
              wF((QQ => QQ + 1))
            },
            children: QQ("general:tryAgain")
          })]
        }), oF && (0, aQ.jsxs)("div", {
          className: "PlayerProfileContent",
          children: [(0, aQ.jsxs)("div", {
            className: "PlayerProfileLeft",
            children: [(0, aQ.jsx)("div", {
              className: "PlayerProfileName FullyFancyText",
              children: (0, aQ.jsx)(tQ.e, {
                text: (0, MQ.D)(oF.player.ranks, oF.player.name, oF.player.nameColour),
                friendBadgeFor: uF ? oF.player.name : void 0
              })
            }), (0, aQ.jsx)("div", {
              className: "PlayerProfileModel",
              children: (0, aQ.jsx)(LQ.Suspense, {
                fallback: (0, aQ.jsx)("div", {
                  className: "PlayerProfileModelLoading",
                  children: (0, aQ.jsx)(pQ.c, {})
                }),
                children: (0, aQ.jsx)(SQ.d, {
                  ref: gQ,
                  onReady: () => {
                    YF()
                  }
                })
              })
            })]
          }), (0, aQ.jsxs)("div", {
            className: "PlayerProfileRight",
            children: [(0, aQ.jsx)(VQ, {
              profile: oF
            }), (oF.socialLinks.length > 0 || HF) && (0, aQ.jsx)(IQ.b, {
              socialLinks: oF.socialLinks,
              editable: HF,
              userContext: EQ,
              onLinksUpdated: bF
            }), (0, aQ.jsxs)("div", {
              className: "PlayerProfileGames",
              children: [(0, aQ.jsx)("div", {
                className: "PlayerProfileGamesTitle SmallTextBold",
                children: QQ("homePage:profileReleasedGames")
              }), 0 === oF.releasedGames.length && (0, aQ.jsx)("div", {
                className: "PlayerProfileNoGames",
                children: QQ("homePage:profileNoReleasedGames")
              }), oF.releasedGames.length > 0 && (0, aQ.jsx)("div", {
                className: "PlayerProfileGamesGrid",
                children: oF.releasedGames.map((QQ => (0, aQ.jsx)(GQ.f, {
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
  4721: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => tQ
    });
    var LQ = wQ(1070),
      qQ = wQ.n(LQ),
      oQ = wQ(4486),
      DQ = wQ(1207),
      kQ = wQ(1079),
      vQ = wQ(1451),
      mQ = wQ(1489),
      uQ = wQ(1362),
      HQ = wQ(2433),
      bQ = wQ(1107);
    const YQ = {
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

    function xQ(QQ) {
      let {
        platform: FQ
      } = QQ;
      const wQ = "youtube" === FQ;
      return (0, bQ.jsxs)("span", {
        className: qQ()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: wQ
        }),
        children: [wQ && (0, bQ.jsx)(HQ.e, {
          variant: "white"
        }), !wQ && (0, bQ.jsx)(kQ.c, {
          name: YQ[FQ].icon,
          kit: "brands"
        })]
      })
    }

    function AQ(QQ) {
      let {
        platform: FQ,
        link: wQ,
        editable: LQ,
        userContext: qQ,
        onLinksUpdated: HQ
      } = QQ;
      const {
        t: AQ
      } = (0, DQ.y)(), tQ = YQ[FQ];
      if (!wQ && !LQ) return null;

      function eQ() {
        var QQ;
        if (!qQ || !HQ) return;
        uQ.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: tQ.name
            }
          },
          prefixText: oQ.v[FQ],
          placeholderText: "playBloxd",
          initialValue: null !== (QQ = null === wQ || void 0 === wQ ? void 0 : wQ.handle) && void 0 !== QQ ? QQ : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: wQ ? "general:remove" : void 0
        }).getResult().then((async QQ => {
          if ("notificationTornDown" !== QQ && null !== QQ) try {
            "submit" === QQ.type ? await mQ.b.setSocialLink(qQ, FQ, QQ.value) : await mQ.b.clearSocialLink(qQ, FQ), HQ()
          } catch (wQ) {
            console.error("Failed to update social link", wQ), uQ.NotificationProvider.showAlertPopup({
              title: wQ.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (wQ) {
        const QQ = `@${wQ.handle}`;
        return (0, bQ.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: tQ.color
          },
          href: wQ.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, bQ.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, bQ.jsx)(xQ, {
              platform: FQ
            }), (0, bQ.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, bQ.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: QQ
              })
            })]
          }), LQ && (0, bQ.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, vQ.S)({
              stopPropagation: !0
            }),
            onClick: QQ => {
              QQ.stopPropagation(), QQ.preventDefault(), eQ()
            },
            children: (0, bQ.jsx)(kQ.c, {
              name: "pen-to-square"
            })
          }), !LQ && (0, bQ.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, bQ.jsx)(kQ.c, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, bQ.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: tQ.color
        },
        ...(0, vQ.S)(),
        onClick: () => {
          eQ()
        },
        children: [(0, bQ.jsx)(xQ, {
          platform: FQ
        }), (0, bQ.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, bQ.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: tQ.name
          }), (0, bQ.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: AQ("homePage:profileSocialLinkAdd")
          })]
        }), (0, bQ.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, bQ.jsx)(kQ.c, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function tQ(QQ) {
      let {
        socialLinks: FQ,
        editable: wQ = !1,
        userContext: LQ,
        onLinksUpdated: qQ
      } = QQ;
      if (!wQ && 0 === FQ.length) return null;
      const DQ = new Map(FQ.map((QQ => [QQ.platform, QQ]))),
        kQ = wQ ? oQ.t : FQ.map((QQ => QQ.platform));
      return (0, bQ.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, bQ.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: kQ.map((QQ => (0, bQ.jsx)(AQ, {
            platform: QQ,
            link: DQ.get(QQ),
            editable: wQ,
            userContext: LQ,
            onLinksUpdated: qQ
          }, QQ)))
        })
      })
    }
  },
  4716: QQ => {
    QQ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGOws7P7D8Kmpqb/NTU1wTQymwGbAhANwwzIOmAYxQRkCXNzczBGtgrFBGQFKFZgsxtuAi67YY5HMQGbAgCIxWSBYHJzHAAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);