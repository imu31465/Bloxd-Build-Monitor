export const id = 89;
export const ids = [89];
export const modules = {
  4284: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      default: () => CJ
    });
    var FJ = ZJ(47),
      UJ = ZJ(1421),
      eJ = ZJ(235),
      XJ = ZJ(1133),
      AJ = ZJ(1505),
      qJ = ZJ(1168),
      jJ = ZJ(1447),
      YJ = ZJ(1389),
      hJ = ZJ(2304);
    const DJ = {
      retries: 2,
      minTimeout: 2e3
    };
    var sJ = ZJ(1009),
      nJ = ZJ(1498),
      GJ = ZJ(1022),
      fJ = ZJ(1675),
      xJ = ZJ(1086),
      rJ = ZJ(1122),
      vJ = ZJ(2969),
      mJ = ZJ(1232),
      QJ = ZJ(1329),
      EJ = ZJ(1406),
      VJ = ZJ(2258),
      KJ = ZJ(2265),
      yJ = ZJ(4292),
      SJ = ZJ(1931),
      IJ = ZJ(926),
      MJ = ZJ.n(IJ),
      bJ = ZJ(942),
      wJ = ZJ(4301),
      WJ = ZJ(13),
      gJ = ZJ(1703),
      HJ = ZJ(3117),
      PJ = ZJ(1804),
      kJ = ZJ(3074),
      pJ = ZJ(80),
      dJ = ZJ(3977),
      zJ = ZJ(990);
    const NJ = [yJ];

    function OJ(JJ) {
      let {
        icon: cJ,
        label: ZJ,
        value: FJ
      } = JJ;
      return (0, zJ.jsxs)("div", {
        className: "PlayerProfileStat",
        children: [(0, zJ.jsx)(bJ.c, {
          name: cJ,
          className: "PlayerProfileStatIcon"
        }), (0, zJ.jsxs)("div", {
          className: "PlayerProfileStatText",
          children: [(0, zJ.jsx)("div", {
            className: "PlayerProfileStatLabel SmallTextLight",
            children: ZJ
          }), (0, zJ.jsx)("div", {
            className: "PlayerProfileStatValue",
            children: FJ
          })]
        })]
      })
    }

    function TJ(JJ) {
      let {
        profile: cJ
      } = JJ;
      const {
        t: ZJ,
        selectedLanguage: FJ
      } = (0, xJ.F)();
      let UJ = ZJ("homePage:profileUnknown");
      if (cJ.lastOnline) {
        const JJ = (0, xJ.q)(FJ.code, "homePage:profileTimeAgo");
        UJ = ZJ("homePage:profileTimeAgo", {
          time: (0, eJ._)(JJ, cJ.lastOnline, Date.now())
        })
      }
      let XJ = ZJ("homePage:profileUnknown");
      return cJ.accountCreatedAt && (XJ = new Date(cJ.accountCreatedAt).toLocaleDateString(void 0, {
        year: "numeric",
        month: "short",
        day: "numeric"
      })), (0, zJ.jsxs)("div", {
        className: "PlayerProfileStats",
        children: [(0, zJ.jsx)(OJ, {
          icon: "hourglass",
          label: ZJ("homePage:profileTimePlayed"),
          value: (0, HJ.d)(cJ.totalPlayMinutes)
        }), (0, zJ.jsx)(OJ, {
          icon: "wifi",
          label: ZJ("homePage:profileLastOnline"),
          value: UJ
        }), (0, zJ.jsx)(OJ, {
          icon: "calendar",
          label: ZJ("homePage:profileJoined"),
          value: XJ
        })]
      })
    }

    function CJ() {
      const {
        t: JJ
      } = (0, xJ.F)(), cJ = (0, EJ.useNavigatePreserveSearch)(), ZJ = (0, sJ.h)(), {
        playerName: yJ,
        playerUrlName: IJ
      } = (0, UJ.x)(), HJ = (0, UJ.q)(), OJ = (0, XJ.f)(HJ.pathname), CJ = OJ && ("urlId" in OJ ? `urlId:${OJ.urlId}` : `name:${OJ.lowerCaseName}`), uJ = (0, FJ.useRef)(CJ);
      uJ.current = CJ;
      const {
        userContext: iJ,
        isUserContextUpdating: RJ
      } = (0, GJ.d)(), LJ = (0, FJ.useRef)(null), aJ = (0, FJ.useRef)(null), BJ = (0, FJ.useRef)(null), tJ = (0, FJ.useRef)(!1), oJ = (0, FJ.useRef)((0, eJ.Vb)(NJ)), [lJ, Jc] = (0, FJ.useState)((() => {
        const JJ = OJ && KJ.c.peek(iJ, OJ);
        return JJ ? {
          status: "loaded",
          profile: JJ,
          playerKey: CJ
        } : {
          status: "loading"
        }
      })), [cc, Zc] = (0, FJ.useState)(0);
      (0, FJ.useEffect)(VJ.d, []), (0, FJ.useEffect)((() => {
        gJ.gameBridge.send("leaveGame", {
          reloadPath: null
        }), WJ.d.set({
          gameState: "landingPage",
          openEverythingMenuName: null,
          openInGameMenuName: null
        })
      }), [HJ.key]);
      const Fc = () => {
        const JJ = (0, EJ.getPreviousLocation)();
        null === JJ || JJ.startsWith("/play") ? (0, EJ.navigateToHomePage)() : cJ(-1)
      };
      (0, dJ.d)(Fc), (0, FJ.useEffect)((() => {
        var JJ;
        if (RJ) return;
        if (!OJ) return void Jc({
          status: "notFound",
          playerKey: CJ
        });
        const cJ = "urlId" in OJ && (null === (JJ = aJ.current) || void 0 === JJ ? void 0 : JJ.urlId) === OJ.urlId && BJ.current === iJ;
        if (cJ && tJ.current) return;
        const ZJ = cJ ? null : KJ.c.peek(iJ, OJ);
        let FJ = !1;
        const UJ = JJ => "loaded" === JJ.status && (JJ.playerKey === CJ || "urlId" in OJ && JJ.profile.urlId === OJ.urlId);
        return ZJ ? (BJ.current = iJ, tJ.current = !1, Jc({
          status: "loaded",
          profile: ZJ,
          playerKey: CJ
        }), KJ.c.invalidate(OJ)) : Jc((JJ => UJ(JJ) ? JJ : {
          status: "loading"
        })), async function(JJ, cJ) {
          if ("lowerCaseName" in cJ && cJ.lowerCaseName.length > qJ.i) return {
            status: "notFound"
          };
          try {
            return {
              status: "loaded",
              profile: await YJ.c.getPlayerProfile(JJ, cJ, DJ)
            }
          } catch (ZJ) {
            return (0, hJ.d)(ZJ) ? {
              status: "notFound"
            } : (console.error("Failed to load user profile", ZJ), {
              status: "failed"
            })
          }
        }(iJ, OJ).then((JJ => {
          FJ || ("loaded" === JJ.status && (BJ.current = iJ, tJ.current = !0), Jc((cJ => "failed" === JJ.status && UJ(cJ) ? cJ : {
            ...JJ,
            playerKey: CJ
          })))
        })), () => {
          FJ = !0
        }
      }), [RJ, CJ, iJ, cc]);
      const Uc = "loading" === lJ.status || lJ.playerKey === CJ || "loaded" === lJ.status && !!OJ && "urlId" in OJ && lJ.profile.urlId === OJ.urlId ? lJ : {
          status: "loading"
        },
        ec = "loaded" === Uc.status ? Uc.profile : null,
        Xc = "loading" === Uc.status ? null : function(JJ) {
          if ("loaded" === JJ.status) {
            const {
              profile: cJ
            } = JJ;
            return (0, jJ.V)({
              urlId: cJ.urlId,
              name: cJ.player.name,
              ranks: cJ.player.ranks,
              socialLinks: cJ.socialLinks
            })
          }
          return "notFound" === JJ.status ? (0, jJ.$)() : null
        }(Uc),
        Ac = null !== ec && void 0 !== ec && ec.urlId ? (0, XJ.h)({
          urlId: ec.urlId,
          name: ec.player.name
        }) : null;
      (0, nJ.e)(Ac);
      const qc = null !== ec && void 0 !== ec && ec.player.cosmetics.profileEffect ? SJ.h[ec.player.cosmetics.profileEffect] : void 0,
        jc = null !== ec && !RJ && iJ.getPlayerName().toLowerCase() === ec.player.name.toLowerCase(),
        Yc = (0, PJ.d)(null === ec || void 0 === ec ? void 0 : ec.player.name),
        hc = jc && iJ.playerHasRank("youtuber");
      aJ.current = ec;
      const Dc = (0, FJ.useCallback)((() => {
          OJ && (KJ.c.invalidate(OJ), KJ.c.get(iJ, OJ).then((JJ => {
            uJ.current === CJ && (tJ.current = !0, Jc({
              status: "loaded",
              profile: JJ,
              playerKey: CJ
            }))
          })).catch((JJ => {
            console.error("Failed to refresh user profile", JJ)
          })))
        }), [CJ, iJ]),
        sc = (0, FJ.useCallback)((() => {
          var JJ;
          const cJ = aJ.current;
          return !(!cJ || null === (JJ = LJ.current) || void 0 === JJ || !JJ.isReady()) && (LJ.current.setAllCosmetics(cJ.player.cosmetics), !0)
        }), []);
      return (0, FJ.useEffect)((() => {
        if (!ec) return;
        let JJ, cJ = !1;
        const ZJ = () => {
          cJ || sc() || (JJ = setTimeout(ZJ, 100))
        };
        return ZJ(), () => {
          cJ = !0, clearTimeout(JJ)
        }
      }), [ec, sc]), (0, zJ.jsxs)("div", {
        className: MJ()("PlayerProfile", {
          PlayerProfilePortrait: ZJ
        }),
        children: [Xc && (0, zJ.jsx)(AJ.d, {
          meta: Xc
        }), (0, zJ.jsxs)("div", {
          className: "PlayerProfileBackgroundContainer",
          children: [qc && (0, zJ.jsx)(qc, {}), !qc && (0, zJ.jsx)("div", {
            className: "PlayerProfileBackground",
            style: {
              backgroundImage: `url(${oJ.current})`
            }
          })]
        }), (0, zJ.jsxs)("div", {
          className: "PlayerProfileHeader",
          children: [(0, zJ.jsx)(QJ.b, {
            onClick: Fc,
            children: JJ("general:back")
          }), ec && !RJ && !jc && pJ.featureFlags.useSocialFeatures && (0, zJ.jsx)("div", {
            className: "PlayerProfileExclusionActions",
            children: (0, zJ.jsx)(kJ.c, {
              playerName: ec.player.name,
              className: "SmallTextLight"
            })
          })]
        }), "loading" === Uc.status && (0, zJ.jsx)("div", {
          className: "PlayerProfileCentredMessage",
          children: (0, zJ.jsx)(mJ.c, {})
        }), ("notFound" === Uc.status || "failed" === Uc.status) && (0, zJ.jsxs)("div", {
          className: "PlayerProfileCentredMessage PlayerProfileError",
          children: [(0, zJ.jsx)(bJ.c, {
            name: "face-dizzy"
          }), (0, zJ.jsx)("div", {
            className: "PlayerProfileErrorText",
            children: "notFound" === Uc.status ? JJ("socialBar:playerNotFound", {
              playerName: null !== IJ && void 0 !== IJ ? IJ : yJ
            }) : JJ("playerProfile:loadFailed")
          }), "failed" === Uc.status && (0, zJ.jsx)(QJ.d, {
            onClick: () => {
              Zc((JJ => JJ + 1))
            },
            children: JJ("general:tryAgain")
          })]
        }), ec && (0, zJ.jsxs)("div", {
          className: "PlayerProfileContent",
          children: [(0, zJ.jsxs)("div", {
            className: "PlayerProfileLeft",
            children: [(0, zJ.jsx)("div", {
              className: "PlayerProfileName FullyFancyText",
              children: (0, zJ.jsx)(fJ.d, {
                text: (0, rJ.v)(ec.player.ranks, ec.player.name, ec.player.nameColour),
                friendBadgeFor: Yc ? ec.player.name : void 0
              })
            }), (0, zJ.jsx)("div", {
              className: "PlayerProfileModel",
              children: (0, zJ.jsx)(FJ.Suspense, {
                fallback: (0, zJ.jsx)("div", {
                  className: "PlayerProfileModelLoading",
                  children: (0, zJ.jsx)(mJ.c, {})
                }),
                children: (0, zJ.jsx)(VJ.c, {
                  ref: LJ,
                  onReady: () => {
                    sc()
                  }
                })
              })
            })]
          }), (0, zJ.jsxs)("div", {
            className: "PlayerProfileRight",
            children: [(0, zJ.jsx)(TJ, {
              profile: ec
            }), (ec.socialLinks.length > 0 || hc) && (0, zJ.jsx)(wJ.d, {
              socialLinks: ec.socialLinks,
              editable: hc,
              userContext: iJ,
              onLinksUpdated: Dc
            }), (0, zJ.jsxs)("div", {
              className: "PlayerProfileGames",
              children: [(0, zJ.jsx)("div", {
                className: "PlayerProfileGamesTitle SmallTextBold",
                children: JJ("homePage:profileReleasedGames")
              }), 0 === ec.releasedGames.length && (0, zJ.jsx)("div", {
                className: "PlayerProfileNoGames",
                children: JJ("homePage:profileNoReleasedGames")
              }), ec.releasedGames.length > 0 && (0, zJ.jsx)("div", {
                className: "PlayerProfileGamesGrid",
                children: ec.releasedGames.map((JJ => (0, zJ.jsx)(vJ.f, {
                  source: {
                    type: "preview",
                    preview: JJ
                  },
                  gameWidth: "100%",
                  useLongRatio: !0,
                  hideFavourites: !0,
                  entrySource: "other"
                }, JJ.schematicId)))
              })]
            })]
          })]
        })]
      })
    }
  },
  4301: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => fJ
    });
    var FJ = ZJ(926),
      UJ = ZJ.n(FJ),
      eJ = ZJ(4054),
      XJ = ZJ(1086),
      AJ = ZJ(942),
      qJ = ZJ(1329),
      jJ = ZJ(1389),
      YJ = ZJ(1247),
      hJ = ZJ(2189),
      DJ = ZJ(990);
    const sJ = {
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

    function nJ(JJ) {
      let {
        platform: cJ
      } = JJ;
      const ZJ = "youtube" === cJ;
      return (0, DJ.jsxs)("span", {
        className: UJ()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: ZJ
        }),
        children: [ZJ && (0, DJ.jsx)(hJ.d, {
          variant: "white"
        }), !ZJ && (0, DJ.jsx)(AJ.c, {
          name: sJ[cJ].icon,
          kit: "brands"
        })]
      })
    }

    function GJ(JJ) {
      let {
        platform: cJ,
        link: ZJ,
        editable: FJ,
        userContext: UJ,
        onLinksUpdated: hJ
      } = JJ;
      const {
        t: GJ
      } = (0, XJ.F)(), fJ = sJ[cJ];
      if (!ZJ && !FJ) return null;

      function xJ() {
        var JJ;
        if (!UJ || !hJ) return;
        YJ.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: fJ.name
            }
          },
          prefixText: eJ.s[cJ],
          placeholderText: "playBloxd",
          initialValue: null !== (JJ = null === ZJ || void 0 === ZJ ? void 0 : ZJ.handle) && void 0 !== JJ ? JJ : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: ZJ ? "general:remove" : void 0
        }).getResult().then((async JJ => {
          if ("notificationTornDown" !== JJ && null !== JJ) try {
            "submit" === JJ.type ? await jJ.c.setSocialLink(UJ, cJ, JJ.value) : await jJ.c.clearSocialLink(UJ, cJ), hJ()
          } catch (ZJ) {
            console.error("Failed to update social link", ZJ), YJ.NotificationProvider.showAlertPopup({
              title: ZJ.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (ZJ) {
        const JJ = `@${ZJ.handle}`;
        return (0, DJ.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: fJ.color
          },
          href: ZJ.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, DJ.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, DJ.jsx)(nJ, {
              platform: cJ
            }), (0, DJ.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, DJ.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: JJ
              })
            })]
          }), FJ && (0, DJ.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, qJ.U)({
              stopPropagation: !0
            }),
            onClick: JJ => {
              JJ.stopPropagation(), JJ.preventDefault(), xJ()
            },
            children: (0, DJ.jsx)(AJ.c, {
              name: "pen-to-square"
            })
          }), !FJ && (0, DJ.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, DJ.jsx)(AJ.c, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, DJ.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: fJ.color
        },
        ...(0, qJ.U)(),
        onClick: () => {
          xJ()
        },
        children: [(0, DJ.jsx)(nJ, {
          platform: cJ
        }), (0, DJ.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, DJ.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: fJ.name
          }), (0, DJ.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: GJ("homePage:profileSocialLinkAdd")
          })]
        }), (0, DJ.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, DJ.jsx)(AJ.c, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function fJ(JJ) {
      let {
        socialLinks: cJ,
        editable: ZJ = !1,
        userContext: FJ,
        onLinksUpdated: UJ
      } = JJ;
      if (!ZJ && 0 === cJ.length) return null;
      const XJ = new Map(cJ.map((JJ => [JJ.platform, JJ]))),
        AJ = ZJ ? eJ.o : cJ.map((JJ => JJ.platform));
      return (0, DJ.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, DJ.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: AJ.map((JJ => (0, DJ.jsx)(GJ, {
            platform: JJ,
            link: XJ.get(JJ),
            editable: ZJ,
            userContext: FJ,
            onLinksUpdated: UJ
          }, JJ)))
        })
      })
    }
  },
  4292: JJ => {
    JJ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGOws7P7D8Kmpqb/NTU1wTQymwGbAhANwwzIOmAYxQRkCXNzczBGtgrFBGQFKFZgsxtuAi67YY5HMQGbAgCIxWSBYHJzHAAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);