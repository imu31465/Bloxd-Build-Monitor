export const id = 99;
export const ids = [99];
export const modules = {
  4979: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      default: () => KT
    });
    var WT = mT(63),
      zT = mT(1641),
      MT = mT(366),
      gT = mT(1327),
      nT = mT(1731),
      HT = mT(1367),
      kT = mT(1667),
      jT = mT(1613),
      lT = mT(2779);
    const LT = {
      retries: 2,
      minTimeout: 2e3
    };
    var pT = mT(1213),
      BT = mT(1723),
      ZT = mT(1225),
      cT = mT(2023),
      vT = mT(1288),
      fT = mT(1321),
      qT = mT(3568),
      iT = mT(1446),
      bT = mT(1569),
      OT = mT(1633),
      eT = mT(2727),
      YT = mT(2733),
      JT = mT(4988),
      xT = mT(2286),
      dT = mT(1126),
      wT = mT.n(dT),
      tT = mT(1135),
      aT = mT(4995),
      yT = mT(25),
      XT = mT(2046),
      IT = mT(3748),
      QT = mT(2131),
      sT = mT(3692),
      FT = mT(102),
      PT = mT(4655),
      VT = mT(1188);
    const uT = [JT];

    function CT(TT) {
      let {
        icon: UT,
        label: mT,
        value: WT
      } = TT;
      return (0, VT.jsxs)("div", {
        className: "PlayerProfileStat",
        children: [(0, VT.jsx)(tT.c, {
          name: UT,
          className: "PlayerProfileStatIcon"
        }), (0, VT.jsxs)("div", {
          className: "PlayerProfileStatText",
          children: [(0, VT.jsx)("div", {
            className: "PlayerProfileStatLabel SmallTextLight",
            children: mT
          }), (0, VT.jsx)("div", {
            className: "PlayerProfileStatValue",
            children: WT
          })]
        })]
      })
    }

    function rT(TT) {
      let {
        profile: UT
      } = TT;
      const {
        t: mT,
        selectedLanguage: WT
      } = (0, vT.z)();
      let zT = mT("homePage:profileUnknown");
      if (UT.lastOnline) {
        const TT = (0, vT.m)(WT.code, "homePage:profileTimeAgo");
        zT = mT("homePage:profileTimeAgo", {
          time: (0, MT.nb)(TT, UT.lastOnline, Date.now())
        })
      }
      let gT = mT("homePage:profileUnknown");
      return UT.accountCreatedAt && (gT = new Date(UT.accountCreatedAt).toLocaleDateString(void 0, {
        year: "numeric",
        month: "short",
        day: "numeric"
      })), (0, VT.jsxs)("div", {
        className: "PlayerProfileStats",
        children: [(0, VT.jsx)(CT, {
          icon: "hourglass",
          label: mT("homePage:profileTimePlayed"),
          value: (0, IT.b)(UT.totalPlayMinutes)
        }), (0, VT.jsx)(CT, {
          icon: "wifi",
          label: mT("homePage:profileLastOnline"),
          value: zT
        }), (0, VT.jsx)(CT, {
          icon: "calendar",
          label: mT("homePage:profileJoined"),
          value: gT
        })]
      })
    }

    function KT() {
      const {
        t: TT
      } = (0, vT.z)(), UT = (0, OT.useNavigatePreserveSearch)(), mT = (0, pT.i)(), {
        playerName: JT,
        playerUrlName: dT
      } = (0, zT.y)(), IT = (0, zT.p)(), CT = (0, gT.i)(IT.pathname), KT = CT && ("urlId" in CT ? `urlId:${CT.urlId}` : `name:${CT.lowerCaseName}`), ST = (0, WT.useRef)(KT);
      ST.current = KT;
      const {
        userContext: GT,
        isUserContextUpdating: NT
      } = (0, ZT.d)(), ET = (0, WT.useRef)(null), hT = (0, WT.useRef)(null), DT = (0, WT.useRef)(null), oT = (0, WT.useRef)(!1), AT = (0, WT.useRef)((0, MT.pc)(uT)), [RT, TU] = (0, WT.useState)((() => {
        const TT = CT && YT.d.peek(GT, CT);
        return TT ? {
          status: "loaded",
          profile: TT,
          playerKey: KT
        } : {
          status: "loading"
        }
      })), [UU, mU] = (0, WT.useState)(0);
      (0, WT.useEffect)(eT.h, []), (0, WT.useEffect)((() => {
        XT.gameBridge.send("leaveGame", {
          reloadPath: null
        }), yT.b.set({
          gameState: "landingPage",
          openEverythingMenuName: null,
          openInGameMenuName: null
        })
      }), [IT.key]);
      const WU = () => {
        const TT = (0, OT.getPreviousLocation)();
        null === TT || TT.startsWith("/play") ? (0, OT.navigateToHomePage)() : UT(-1)
      };
      (0, PT.d)(WU), (0, WT.useEffect)((() => {
        var TT;
        if (NT) return;
        if (!CT) return void TU({
          status: "notFound",
          playerKey: KT
        });
        const UT = "urlId" in CT && (null === (TT = hT.current) || void 0 === TT ? void 0 : TT.urlId) === CT.urlId && DT.current === GT;
        if (UT && oT.current) return;
        const mT = UT ? null : YT.d.peek(GT, CT);
        let WT = !1;
        const zT = TT => "loaded" === TT.status && (TT.playerKey === KT || "urlId" in CT && TT.profile.urlId === CT.urlId);
        return mT ? (DT.current = GT, oT.current = !1, TU({
          status: "loaded",
          profile: mT,
          playerKey: KT
        }), YT.d.invalidate(CT)) : TU((TT => zT(TT) ? TT : {
          status: "loading"
        })), async function(TT, UT) {
          if ("lowerCaseName" in UT && UT.lowerCaseName.length > HT.h) return {
            status: "notFound"
          };
          try {
            return {
              status: "loaded",
              profile: await jT.b.getPlayerProfile(TT, UT, LT)
            }
          } catch (mT) {
            return (0, lT.c)(mT) ? {
              status: "notFound"
            } : (console.error("Failed to load user profile", mT), {
              status: "failed"
            })
          }
        }(GT, CT).then((TT => {
          WT || ("loaded" === TT.status && (DT.current = GT, oT.current = !0), TU((UT => "failed" === TT.status && zT(UT) ? UT : {
            ...TT,
            playerKey: KT
          })))
        })), () => {
          WT = !0
        }
      }), [NT, KT, GT, UU]);
      const zU = "loading" === RT.status || RT.playerKey === KT || "loaded" === RT.status && !!CT && "urlId" in CT && RT.profile.urlId === CT.urlId ? RT : {
          status: "loading"
        },
        MU = "loaded" === zU.status ? zU.profile : null,
        gU = "loading" === zU.status ? null : function(TT) {
          if ("loaded" === TT.status) {
            const {
              profile: UT
            } = TT;
            return (0, kT.L)({
              urlId: UT.urlId,
              name: UT.player.name,
              ranks: UT.player.ranks,
              socialLinks: UT.socialLinks
            })
          }
          return "notFound" === TT.status ? (0, kT.V)() : null
        }(zU),
        nU = null !== MU && void 0 !== MU && MU.urlId ? (0, gT.m)({
          urlId: MU.urlId,
          name: MU.player.name
        }) : null;
      (0, BT.i)(nU);
      const HU = null !== MU && void 0 !== MU && MU.player.cosmetics.profileEffect ? xT.c[MU.player.cosmetics.profileEffect] : void 0,
        kU = null !== MU && !NT && GT.getPlayerName().toLowerCase() === MU.player.name.toLowerCase(),
        jU = (0, QT.c)(null === MU || void 0 === MU ? void 0 : MU.player.name),
        lU = kU && GT.playerHasRank("youtuber");
      hT.current = MU;
      const LU = (0, WT.useCallback)((() => {
          CT && (YT.d.invalidate(CT), YT.d.get(GT, CT).then((TT => {
            ST.current === KT && (oT.current = !0, TU({
              status: "loaded",
              profile: TT,
              playerKey: KT
            }))
          })).catch((TT => {
            console.error("Failed to refresh user profile", TT)
          })))
        }), [KT, GT]),
        pU = (0, WT.useCallback)((() => {
          var TT;
          const UT = hT.current;
          return !(!UT || null === (TT = ET.current) || void 0 === TT || !TT.isReady()) && (ET.current.setAllCosmetics(UT.player.cosmetics), !0)
        }), []);
      return (0, WT.useEffect)((() => {
        if (!MU) return;
        let TT, UT = !1;
        const mT = () => {
          UT || pU() || (TT = setTimeout(mT, 100))
        };
        return mT(), () => {
          UT = !0, clearTimeout(TT)
        }
      }), [MU, pU]), (0, VT.jsxs)("div", {
        className: wT()("PlayerProfile", {
          PlayerProfilePortrait: mT
        }),
        children: [gU && (0, VT.jsx)(nT.e, {
          meta: gU
        }), (0, VT.jsxs)("div", {
          className: "PlayerProfileBackgroundContainer",
          children: [HU && (0, VT.jsx)(HU, {}), !HU && (0, VT.jsx)("div", {
            className: "PlayerProfileBackground",
            style: {
              backgroundImage: `url(${AT.current})`
            }
          })]
        }), (0, VT.jsxs)("div", {
          className: "PlayerProfileHeader",
          children: [(0, VT.jsx)(bT.d, {
            onClick: WU,
            children: TT("general:back")
          }), MU && !NT && !kU && FT.featureFlags.useSocialFeatures && (0, VT.jsx)("div", {
            className: "PlayerProfileExclusionActions",
            children: (0, VT.jsx)(sT.d, {
              playerName: MU.player.name,
              className: "SmallTextLight"
            })
          })]
        }), "loading" === zU.status && (0, VT.jsx)("div", {
          className: "PlayerProfileCentredMessage",
          children: (0, VT.jsx)(iT.c, {})
        }), ("notFound" === zU.status || "failed" === zU.status) && (0, VT.jsxs)("div", {
          className: "PlayerProfileCentredMessage PlayerProfileError",
          children: [(0, VT.jsx)(tT.c, {
            name: "face-dizzy"
          }), (0, VT.jsx)("div", {
            className: "PlayerProfileErrorText",
            children: "notFound" === zU.status ? TT("socialBar:playerNotFound", {
              playerName: null !== dT && void 0 !== dT ? dT : JT
            }) : TT("playerProfile:loadFailed")
          }), "failed" === zU.status && (0, VT.jsx)(bT.e, {
            onClick: () => {
              mU((TT => TT + 1))
            },
            children: TT("general:tryAgain")
          })]
        }), MU && (0, VT.jsxs)("div", {
          className: "PlayerProfileContent",
          children: [(0, VT.jsxs)("div", {
            className: "PlayerProfileLeft",
            children: [(0, VT.jsx)("div", {
              className: "PlayerProfileName FullyFancyText",
              children: (0, VT.jsx)(cT.e, {
                text: (0, fT.z)(MU.player.ranks, MU.player.name, MU.player.nameColour),
                friendBadgeFor: jU ? MU.player.name : void 0
              })
            }), (0, VT.jsx)("div", {
              className: "PlayerProfileModel",
              children: (0, VT.jsx)(WT.Suspense, {
                fallback: (0, VT.jsx)("div", {
                  className: "PlayerProfileModelLoading",
                  children: (0, VT.jsx)(iT.c, {})
                }),
                children: (0, VT.jsx)(eT.e, {
                  ref: ET,
                  onReady: () => {
                    pU()
                  }
                })
              })
            })]
          }), (0, VT.jsxs)("div", {
            className: "PlayerProfileRight",
            children: [(0, VT.jsx)(rT, {
              profile: MU
            }), (MU.socialLinks.length > 0 || lU) && (0, VT.jsx)(aT.d, {
              socialLinks: MU.socialLinks,
              editable: lU,
              userContext: GT,
              onLinksUpdated: LU
            }), (0, VT.jsxs)("div", {
              className: "PlayerProfileGames",
              children: [(0, VT.jsx)("div", {
                className: "PlayerProfileGamesTitle SmallTextBold",
                children: TT("homePage:profileReleasedGames")
              }), 0 === MU.releasedGames.length && (0, VT.jsx)("div", {
                className: "PlayerProfileNoGames",
                children: TT("homePage:profileNoReleasedGames")
              }), MU.releasedGames.length > 0 && (0, VT.jsx)("div", {
                className: "PlayerProfileGamesGrid",
                children: MU.releasedGames.map((TT => (0, VT.jsx)(qT.f, {
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
  4995: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => cT
    });
    var WT = mT(1126),
      zT = mT.n(WT),
      MT = mT(4731),
      gT = mT(1288),
      nT = mT(1135),
      HT = mT(1569),
      kT = mT(1613),
      jT = mT(1457),
      lT = mT(2632),
      LT = mT(1188);
    const pT = {
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

    function BT(TT) {
      let {
        platform: UT
      } = TT;
      const mT = "youtube" === UT;
      return (0, LT.jsxs)("span", {
        className: zT()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: mT
        }),
        children: [mT && (0, LT.jsx)(lT.c, {
          variant: "white"
        }), !mT && (0, LT.jsx)(nT.c, {
          name: pT[UT].icon,
          kit: "brands"
        })]
      })
    }

    function ZT(TT) {
      let {
        platform: UT,
        link: mT,
        editable: WT,
        userContext: zT,
        onLinksUpdated: lT
      } = TT;
      const {
        t: ZT
      } = (0, gT.z)(), cT = pT[UT];
      if (!mT && !WT) return null;

      function vT() {
        var TT;
        if (!zT || !lT) return;
        jT.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: cT.name
            }
          },
          prefixText: MT.o[UT],
          placeholderText: "playBloxd",
          initialValue: null !== (TT = null === mT || void 0 === mT ? void 0 : mT.handle) && void 0 !== TT ? TT : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: mT ? "general:remove" : void 0
        }).getResult().then((async TT => {
          if ("notificationTornDown" !== TT && null !== TT) try {
            "submit" === TT.type ? await kT.b.setSocialLink(zT, UT, TT.value) : await kT.b.clearSocialLink(zT, UT), lT()
          } catch (mT) {
            console.error("Failed to update social link", mT), jT.NotificationProvider.showAlertPopup({
              title: mT.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (mT) {
        const TT = `@${mT.handle}`;
        return (0, LT.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: cT.color
          },
          href: mT.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, LT.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, LT.jsx)(BT, {
              platform: UT
            }), (0, LT.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, LT.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: TT
              })
            })]
          }), WT && (0, LT.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, HT.R)({
              stopPropagation: !0
            }),
            onClick: TT => {
              TT.stopPropagation(), TT.preventDefault(), vT()
            },
            children: (0, LT.jsx)(nT.c, {
              name: "pen-to-square"
            })
          }), !WT && (0, LT.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, LT.jsx)(nT.c, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, LT.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: cT.color
        },
        ...(0, HT.R)(),
        onClick: () => {
          vT()
        },
        children: [(0, LT.jsx)(BT, {
          platform: UT
        }), (0, LT.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, LT.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: cT.name
          }), (0, LT.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: ZT("homePage:profileSocialLinkAdd")
          })]
        }), (0, LT.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, LT.jsx)(nT.c, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function cT(TT) {
      let {
        socialLinks: UT,
        editable: mT = !1,
        userContext: WT,
        onLinksUpdated: zT
      } = TT;
      if (!mT && 0 === UT.length) return null;
      const gT = new Map(UT.map((TT => [TT.platform, TT]))),
        nT = mT ? MT.n : UT.map((TT => TT.platform));
      return (0, LT.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, LT.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: nT.map((TT => (0, LT.jsx)(ZT, {
            platform: TT,
            link: gT.get(TT),
            editable: mT,
            userContext: WT,
            onLinksUpdated: zT
          }, TT)))
        })
      })
    }
  },
  4988: TT => {
    TT.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGOws7P7D8Kmpqb/NTU1wTQymwGbAhANwwzIOmAYxQRkCXNzczBGtgrFBGQFKFZgsxtuAi67YY5HMQGbAgCIxWSBYHJzHAAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);