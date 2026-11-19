export const id = 96;
export const ids = [96];
export const modules = {
  4364: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      default: () => sT
    });
    var iT = IT(46),
      zT = IT(1484),
      kT = IT(314),
      WT = IT(1207),
      XT = IT(1556),
      BT = IT(1236),
      FT = IT(1501),
      ST = IT(1451),
      DT = IT(2377);
    const LT = {
      retries: 2,
      minTimeout: 2e3
    };
    var xT = IT(1102),
      cT = IT(1551),
      KT = IT(1110),
      MT = IT(1729),
      rT = IT(1171),
      AT = IT(1193),
      gT = IT(3041),
      hT = IT(1310),
      wT = IT(1408),
      mT = IT(1468),
      eT = IT(2322),
      RT = IT(2336),
      uT = IT(4369),
      vT = IT(1957),
      ET = IT(1042),
      fT = IT.n(ET),
      CT = IT(1055),
      jT = IT(4375),
      JT = IT(12),
      UT = IT(1751),
      aT = IT(3193),
      YT = IT(1841),
      QT = IT(3152),
      OT = IT(90),
      HT = IT(4068),
      nT = IT(1083);
    const qT = [uT];

    function ZT(TT) {
      let {
        icon: oT,
        label: IT,
        value: iT
      } = TT;
      return (0, nT.jsxs)("div", {
        className: "PlayerProfileStat",
        children: [(0, nT.jsx)(CT.e, {
          name: oT,
          className: "PlayerProfileStatIcon"
        }), (0, nT.jsxs)("div", {
          className: "PlayerProfileStatText",
          children: [(0, nT.jsx)("div", {
            className: "PlayerProfileStatLabel SmallTextLight",
            children: IT
          }), (0, nT.jsx)("div", {
            className: "PlayerProfileStatValue",
            children: iT
          })]
        })]
      })
    }

    function lT(TT) {
      let {
        profile: oT
      } = TT;
      const {
        t: IT,
        selectedLanguage: iT
      } = (0, rT.t)();
      let zT = IT("homePage:profileUnknown");
      if (oT.lastOnline) {
        const TT = (0, rT.l)(iT.code, "homePage:profileTimeAgo");
        zT = IT("homePage:profileTimeAgo", {
          time: (0, kT.cb)(TT, oT.lastOnline, Date.now())
        })
      }
      let WT = IT("homePage:profileUnknown");
      return oT.accountCreatedAt && (WT = new Date(oT.accountCreatedAt).toLocaleDateString(void 0, {
        year: "numeric",
        month: "short",
        day: "numeric"
      })), (0, nT.jsxs)("div", {
        className: "PlayerProfileStats",
        children: [(0, nT.jsx)(ZT, {
          icon: "hourglass",
          label: IT("homePage:profileTimePlayed"),
          value: (0, aT.d)(oT.totalPlayMinutes)
        }), (0, nT.jsx)(ZT, {
          icon: "wifi",
          label: IT("homePage:profileLastOnline"),
          value: zT
        }), (0, nT.jsx)(ZT, {
          icon: "calendar",
          label: IT("homePage:profileJoined"),
          value: WT
        })]
      })
    }

    function sT() {
      const {
        t: TT
      } = (0, rT.t)(), oT = (0, mT.useNavigatePreserveSearch)(), IT = (0, xT.n)(), {
        playerName: uT,
        playerUrlName: ET
      } = (0, zT.C)(), aT = (0, zT.t)(), ZT = (0, WT.d)(aT.pathname), sT = ZT && ("urlId" in ZT ? `urlId:${ZT.urlId}` : `name:${ZT.lowerCaseName}`), tT = (0, iT.useRef)(sT);
      tT.current = sT;
      const {
        userContext: GT,
        isUserContextUpdating: pT
      } = (0, KT.b)(), bT = (0, iT.useRef)(null), yT = (0, iT.useRef)(null), NT = (0, iT.useRef)(null), PT = (0, iT.useRef)(!1), dT = (0, iT.useRef)((0, kT.Tb)(qT)), [VT, To] = (0, iT.useState)((() => {
        const TT = ZT && RT.d.peek(GT, ZT);
        return TT ? {
          status: "loaded",
          profile: TT,
          playerKey: sT
        } : {
          status: "loading"
        }
      })), [oo, Io] = (0, iT.useState)(0);
      (0, iT.useEffect)(eT.d, []), (0, iT.useEffect)((() => {
        UT.gameBridge.send("leaveGame", {
          reloadPath: null
        }), JT.c.set({
          gameState: "landingPage",
          openEverythingMenuName: null,
          openInGameMenuName: null
        })
      }), [aT.key]);
      const io = () => {
        const TT = (0, mT.getPreviousLocation)();
        null === TT || TT.startsWith("/play") ? (0, mT.navigateToHomePage)() : oT(-1)
      };
      (0, HT.e)(io), (0, iT.useEffect)((() => {
        var TT;
        if (pT) return;
        if (!ZT) return void To({
          status: "notFound",
          playerKey: sT
        });
        const oT = "urlId" in ZT && (null === (TT = yT.current) || void 0 === TT ? void 0 : TT.urlId) === ZT.urlId && NT.current === GT;
        if (oT && PT.current) return;
        const IT = oT ? null : RT.d.peek(GT, ZT);
        let iT = !1;
        const zT = TT => "loaded" === TT.status && (TT.playerKey === sT || "urlId" in ZT && TT.profile.urlId === ZT.urlId);
        return IT ? (NT.current = GT, PT.current = !1, To({
          status: "loaded",
          profile: IT,
          playerKey: sT
        }), RT.d.invalidate(ZT)) : To((TT => zT(TT) ? TT : {
          status: "loading"
        })), async function(TT, oT) {
          if ("lowerCaseName" in oT && oT.lowerCaseName.length > BT.h) return {
            status: "notFound"
          };
          try {
            return {
              status: "loaded",
              profile: await ST.e.getPlayerProfile(TT, oT, LT)
            }
          } catch (IT) {
            return (0, DT.d)(IT) ? {
              status: "notFound"
            } : (console.error("Failed to load user profile", IT), {
              status: "failed"
            })
          }
        }(GT, ZT).then((TT => {
          iT || ("loaded" === TT.status && (NT.current = GT, PT.current = !0), To((oT => "failed" === TT.status && zT(oT) ? oT : {
            ...TT,
            playerKey: sT
          })))
        })), () => {
          iT = !0
        }
      }), [pT, sT, GT, oo]);
      const zo = "loading" === VT.status || VT.playerKey === sT || "loaded" === VT.status && !!ZT && "urlId" in ZT && VT.profile.urlId === ZT.urlId ? VT : {
          status: "loading"
        },
        ko = "loaded" === zo.status ? zo.profile : null,
        Wo = "loading" === zo.status ? null : function(TT) {
          if ("loaded" === TT.status) {
            const {
              profile: oT
            } = TT;
            return (0, FT.W)({
              urlId: oT.urlId,
              name: oT.player.name,
              ranks: oT.player.ranks,
              socialLinks: oT.socialLinks
            })
          }
          return "notFound" === TT.status ? (0, FT.bb)() : null
        }(zo),
        Xo = null !== ko && void 0 !== ko && ko.urlId ? (0, WT.h)({
          urlId: ko.urlId,
          name: ko.player.name
        }) : null;
      (0, cT.c)(Xo);
      const Bo = null !== ko && void 0 !== ko && ko.player.cosmetics.profileEffect ? vT.h[ko.player.cosmetics.profileEffect] : void 0,
        Fo = null !== ko && !pT && GT.getPlayerName().toLowerCase() === ko.player.name.toLowerCase(),
        So = (0, YT.d)(null === ko || void 0 === ko ? void 0 : ko.player.name),
        Do = Fo && GT.playerHasRank("youtuber");
      yT.current = ko;
      const Lo = (0, iT.useCallback)((() => {
          ZT && (RT.d.invalidate(ZT), RT.d.get(GT, ZT).then((TT => {
            tT.current === sT && (PT.current = !0, To({
              status: "loaded",
              profile: TT,
              playerKey: sT
            }))
          })).catch((TT => {
            console.error("Failed to refresh user profile", TT)
          })))
        }), [sT, GT]),
        xo = (0, iT.useCallback)((() => {
          var TT;
          const oT = yT.current;
          return !(!oT || null === (TT = bT.current) || void 0 === TT || !TT.isReady()) && (bT.current.setAllCosmetics(oT.player.cosmetics), !0)
        }), []);
      return (0, iT.useEffect)((() => {
        if (!ko) return;
        let TT, oT = !1;
        const IT = () => {
          oT || xo() || (TT = setTimeout(IT, 100))
        };
        return IT(), () => {
          oT = !0, clearTimeout(TT)
        }
      }), [ko, xo]), (0, nT.jsxs)("div", {
        className: fT()("PlayerProfile", {
          PlayerProfilePortrait: IT
        }),
        children: [Wo && (0, nT.jsx)(XT.e, {
          meta: Wo
        }), (0, nT.jsxs)("div", {
          className: "PlayerProfileBackgroundContainer",
          children: [Bo && (0, nT.jsx)(Bo, {}), !Bo && (0, nT.jsx)("div", {
            className: "PlayerProfileBackground",
            style: {
              backgroundImage: `url(${dT.current})`
            }
          })]
        }), (0, nT.jsxs)("div", {
          className: "PlayerProfileHeader",
          children: [(0, nT.jsx)(wT.c, {
            onClick: io,
            children: TT("general:back")
          }), ko && !pT && !Fo && OT.featureFlags.useSocialFeatures && (0, nT.jsx)("div", {
            className: "PlayerProfileExclusionActions",
            children: (0, nT.jsx)(QT.e, {
              playerName: ko.player.name,
              className: "SmallTextLight"
            })
          })]
        }), "loading" === zo.status && (0, nT.jsx)("div", {
          className: "PlayerProfileCentredMessage",
          children: (0, nT.jsx)(hT.d, {})
        }), ("notFound" === zo.status || "failed" === zo.status) && (0, nT.jsxs)("div", {
          className: "PlayerProfileCentredMessage PlayerProfileError",
          children: [(0, nT.jsx)(CT.e, {
            name: "face-dizzy"
          }), (0, nT.jsx)("div", {
            className: "PlayerProfileErrorText",
            children: "notFound" === zo.status ? TT("socialBar:playerNotFound", {
              playerName: null !== ET && void 0 !== ET ? ET : uT
            }) : TT("playerProfile:loadFailed")
          }), "failed" === zo.status && (0, nT.jsx)(wT.e, {
            onClick: () => {
              Io((TT => TT + 1))
            },
            children: TT("general:tryAgain")
          })]
        }), ko && (0, nT.jsxs)("div", {
          className: "PlayerProfileContent",
          children: [(0, nT.jsxs)("div", {
            className: "PlayerProfileLeft",
            children: [(0, nT.jsx)("div", {
              className: "PlayerProfileName FullyFancyText",
              children: (0, nT.jsx)(MT.c, {
                text: (0, AT.x)(ko.player.ranks, ko.player.name, ko.player.nameColour),
                friendBadgeFor: So ? ko.player.name : void 0
              })
            }), (0, nT.jsx)("div", {
              className: "PlayerProfileModel",
              children: (0, nT.jsx)(iT.Suspense, {
                fallback: (0, nT.jsx)("div", {
                  className: "PlayerProfileModelLoading",
                  children: (0, nT.jsx)(hT.d, {})
                }),
                children: (0, nT.jsx)(eT.c, {
                  ref: bT,
                  onReady: () => {
                    xo()
                  }
                })
              })
            })]
          }), (0, nT.jsxs)("div", {
            className: "PlayerProfileRight",
            children: [(0, nT.jsx)(lT, {
              profile: ko
            }), (ko.socialLinks.length > 0 || Do) && (0, nT.jsx)(jT.b, {
              socialLinks: ko.socialLinks,
              editable: Do,
              userContext: GT,
              onLinksUpdated: Lo
            }), (0, nT.jsxs)("div", {
              className: "PlayerProfileGames",
              children: [(0, nT.jsx)("div", {
                className: "PlayerProfileGamesTitle SmallTextBold",
                children: TT("homePage:profileReleasedGames")
              }), 0 === ko.releasedGames.length && (0, nT.jsx)("div", {
                className: "PlayerProfileNoGames",
                children: TT("homePage:profileNoReleasedGames")
              }), ko.releasedGames.length > 0 && (0, nT.jsx)("div", {
                className: "PlayerProfileGamesGrid",
                children: ko.releasedGames.map((TT => (0, nT.jsx)(gT.g, {
                  source: {
                    type: "preview",
                    preview: TT
                  },
                  gameWidth: "100%",
                  useLongRatio: !0,
                  hideFavourites: !0,
                  entrySource: "other"
                }, TT.schematicId)))
              })]
            })]
          })]
        })]
      })
    }
  },
  4375: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => MT
    });
    var iT = IT(1042),
      zT = IT.n(iT),
      kT = IT(4145),
      WT = IT(1171),
      XT = IT(1055),
      BT = IT(1408),
      FT = IT(1451),
      ST = IT(1325),
      DT = IT(2251),
      LT = IT(1083);
    const xT = {
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

    function cT(TT) {
      let {
        platform: oT
      } = TT;
      const IT = "youtube" === oT;
      return (0, LT.jsxs)("span", {
        className: zT()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: IT
        }),
        children: [IT && (0, LT.jsx)(DT.d, {
          variant: "white"
        }), !IT && (0, LT.jsx)(XT.e, {
          name: xT[oT].icon,
          kit: "brands"
        })]
      })
    }

    function KT(TT) {
      let {
        platform: oT,
        link: IT,
        editable: iT,
        userContext: zT,
        onLinksUpdated: DT
      } = TT;
      const {
        t: KT
      } = (0, WT.t)(), MT = xT[oT];
      if (!IT && !iT) return null;

      function rT() {
        var TT;
        if (!zT || !DT) return;
        ST.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: MT.name
            }
          },
          prefixText: kT.w[oT],
          placeholderText: "playBloxd",
          initialValue: null !== (TT = null === IT || void 0 === IT ? void 0 : IT.handle) && void 0 !== TT ? TT : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: IT ? "general:remove" : void 0
        }).getResult().then((async TT => {
          if ("notificationTornDown" !== TT && null !== TT) try {
            "submit" === TT.type ? await FT.e.setSocialLink(zT, oT, TT.value) : await FT.e.clearSocialLink(zT, oT), DT()
          } catch (IT) {
            console.error("Failed to update social link", IT), ST.NotificationProvider.showAlertPopup({
              title: IT.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (IT) {
        const TT = `@${IT.handle}`;
        return (0, LT.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: MT.color
          },
          href: IT.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, LT.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, LT.jsx)(cT, {
              platform: oT
            }), (0, LT.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, LT.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: TT
              })
            })]
          }), iT && (0, LT.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, BT.Q)({
              stopPropagation: !0
            }),
            onClick: TT => {
              TT.stopPropagation(), TT.preventDefault(), rT()
            },
            children: (0, LT.jsx)(XT.e, {
              name: "pen-to-square"
            })
          }), !iT && (0, LT.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, LT.jsx)(XT.e, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, LT.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: MT.color
        },
        ...(0, BT.Q)(),
        onClick: () => {
          rT()
        },
        children: [(0, LT.jsx)(cT, {
          platform: oT
        }), (0, LT.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, LT.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: MT.name
          }), (0, LT.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: KT("homePage:profileSocialLinkAdd")
          })]
        }), (0, LT.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, LT.jsx)(XT.e, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function MT(TT) {
      let {
        socialLinks: oT,
        editable: IT = !1,
        userContext: iT,
        onLinksUpdated: zT
      } = TT;
      if (!IT && 0 === oT.length) return null;
      const WT = new Map(oT.map((TT => [TT.platform, TT]))),
        XT = IT ? kT.s : oT.map((TT => TT.platform));
      return (0, LT.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, LT.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: XT.map((TT => (0, LT.jsx)(KT, {
            platform: TT,
            link: WT.get(TT),
            editable: IT,
            userContext: iT,
            onLinksUpdated: zT
          }, TT)))
        })
      })
    }
  },
  4369: TT => {
    TT.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGOws7P7D8Kmpqb/NTU1wTQymwGbAhANwwzIOmAYxQRkCXNzczBGtgrFBGQFKFZgsxtuAi67YY5HMQGbAgCIxWSBYHJzHAAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);