export const id = 99;
export const ids = [99];
export const modules = {
  5043: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      default: () => Lu
    });
    var su = ju(58),
      Uu = ju(1580),
      Zu = ju(349),
      Xu = ju(1293),
      lu = ju(1667),
      qu = ju(1320),
      fu = ju(1600),
      Cu = ju(1559),
      bu = ju(2801);
    const cu = {
      retries: 2,
      minTimeout: 2e3
    };
    var Nu = ju(1170),
      Ou = ju(1662),
      Yu = ju(1178),
      hu = ju(1964),
      Du = ju(1244),
      gu = ju(1278),
      Mu = ju(3667),
      eu = ju(1393),
      Gu = ju(1506),
      pu = ju(1570),
      wu = ju(2738),
      Ju = ju(2750),
      du = ju(5046),
      au = ju(2260),
      Pu = ju(1105),
      ou = ju.n(Pu),
      ku = ju(1116),
      mu = ju(5052),
      vu = ju(22),
      Ku = ju(1986),
      Vu = ju(3836),
      ru = ju(2075),
      Qu = ju(3796),
      iu = ju(91),
      Wu = ju(4737),
      Su = ju(1154);
    const Iu = [du];

    function Fu(uu) {
      let {
        icon: Eu,
        label: ju,
        value: su
      } = uu;
      return (0, Su.jsxs)("div", {
        className: "PlayerProfileStat",
        children: [(0, Su.jsx)(ku.e, {
          name: Eu,
          className: "PlayerProfileStatIcon"
        }), (0, Su.jsxs)("div", {
          className: "PlayerProfileStatText",
          children: [(0, Su.jsx)("div", {
            className: "PlayerProfileStatLabel SmallTextLight",
            children: ju
          }), (0, Su.jsx)("div", {
            className: "PlayerProfileStatValue",
            children: su
          })]
        })]
      })
    }

    function Bu(uu) {
      let {
        profile: Eu
      } = uu;
      const {
        t: ju,
        selectedLanguage: su
      } = (0, Du.A)();
      let Uu = ju("homePage:profileUnknown");
      if (Eu.lastOnline) {
        const uu = (0, Du.n)(su.code, "homePage:profileTimeAgo");
        Uu = ju("homePage:profileTimeAgo", {
          time: (0, Zu._)(uu, Eu.lastOnline, Date.now())
        })
      }
      let Xu = ju("homePage:profileUnknown");
      return Eu.accountCreatedAt && (Xu = new Date(Eu.accountCreatedAt).toLocaleDateString(void 0, {
        year: "numeric",
        month: "short",
        day: "numeric"
      })), (0, Su.jsxs)("div", {
        className: "PlayerProfileStats",
        children: [(0, Su.jsx)(Fu, {
          icon: "hourglass",
          label: ju("homePage:profileTimePlayed"),
          value: (0, Vu.e)(Eu.totalPlayMinutes)
        }), (0, Su.jsx)(Fu, {
          icon: "wifi",
          label: ju("homePage:profileLastOnline"),
          value: Uu
        }), (0, Su.jsx)(Fu, {
          icon: "calendar",
          label: ju("homePage:profileJoined"),
          value: Xu
        })]
      })
    }

    function Lu() {
      const {
        t: uu
      } = (0, Du.A)(), Eu = (0, pu.useNavigatePreserveSearch)(), ju = (0, Nu.l)(), {
        playerName: du,
        playerUrlName: Pu
      } = (0, Uu.B)(), Vu = (0, Uu.r)(), Fu = (0, Xu.g)(Vu.pathname), Lu = Fu && ("urlId" in Fu ? `urlId:${Fu.urlId}` : `name:${Fu.lowerCaseName}`), tu = (0, su.useRef)(Lu);
      tu.current = Lu;
      const {
        userContext: xu,
        isUserContextUpdating: Tu
      } = (0, Yu.c)(), Hu = (0, su.useRef)(null), Au = (0, su.useRef)(null), nu = (0, su.useRef)(null), yu = (0, su.useRef)(!1), zu = (0, su.useRef)((0, Zu.dc)(Iu)), [Ru, uE] = (0, su.useState)((() => {
        const uu = Fu && Ju.e.peek(xu, Fu);
        return uu ? {
          status: "loaded",
          profile: uu,
          playerKey: Lu
        } : {
          status: "loading"
        }
      })), [EE, jE] = (0, su.useState)(0);
      (0, su.useEffect)(wu.f, []), (0, su.useEffect)((() => {
        Ku.gameBridge.send("leaveGame", {
          reloadPath: null
        }), vu.d.set({
          gameState: "landingPage",
          openEverythingMenuName: null,
          openInGameMenuName: null
        })
      }), [Vu.key]);
      const sE = () => {
        const uu = (0, pu.getPreviousLocation)();
        null === uu || uu.startsWith("/play") ? (0, pu.navigateToHomePage)() : Eu(-1)
      };
      (0, Wu.b)(sE), (0, su.useEffect)((() => {
        var uu;
        if (Tu) return;
        if (!Fu) return void uE({
          status: "notFound",
          playerKey: Lu
        });
        const Eu = "urlId" in Fu && (null === (uu = Au.current) || void 0 === uu ? void 0 : uu.urlId) === Fu.urlId && nu.current === xu;
        if (Eu && yu.current) return;
        const ju = Eu ? null : Ju.e.peek(xu, Fu);
        let su = !1;
        const Uu = uu => "loaded" === uu.status && (uu.playerKey === Lu || "urlId" in Fu && uu.profile.urlId === Fu.urlId);
        return ju ? (nu.current = xu, yu.current = !1, uE({
          status: "loaded",
          profile: ju,
          playerKey: Lu
        }), Ju.e.invalidate(Fu)) : uE((uu => Uu(uu) ? uu : {
          status: "loading"
        })), async function(uu, Eu) {
          if ("lowerCaseName" in Eu && Eu.lowerCaseName.length > qu.g) return {
            status: "notFound"
          };
          try {
            return {
              status: "loaded",
              profile: await Cu.b.getPlayerProfile(uu, Eu, cu)
            }
          } catch (ju) {
            return (0, bu.b)(ju) ? {
              status: "notFound"
            } : (console.error("Failed to load user profile", ju), {
              status: "failed"
            })
          }
        }(xu, Fu).then((uu => {
          su || ("loaded" === uu.status && (nu.current = xu, yu.current = !0), uE((Eu => "failed" === uu.status && Uu(Eu) ? Eu : {
            ...uu,
            playerKey: Lu
          })))
        })), () => {
          su = !0
        }
      }), [Tu, Lu, xu, EE]);
      const UE = "loading" === Ru.status || Ru.playerKey === Lu || "loaded" === Ru.status && !!Fu && "urlId" in Fu && Ru.profile.urlId === Fu.urlId ? Ru : {
          status: "loading"
        },
        ZE = "loaded" === UE.status ? UE.profile : null,
        XE = "loading" === UE.status ? null : function(uu) {
          if ("loaded" === uu.status) {
            const {
              profile: Eu
            } = uu;
            return (0, fu.X)({
              urlId: Eu.urlId,
              name: Eu.player.name,
              ranks: Eu.player.ranks,
              socialLinks: Eu.socialLinks
            })
          }
          return "notFound" === uu.status ? (0, fu.hb)() : null
        }(UE),
        lE = null !== ZE && void 0 !== ZE && ZE.urlId ? (0, Xu.i)({
          urlId: ZE.urlId,
          name: ZE.player.name
        }) : null;
      (0, Ou.c)(lE);
      const qE = null !== ZE && void 0 !== ZE && ZE.player.cosmetics.profileEffect ? au.e[ZE.player.cosmetics.profileEffect] : void 0,
        fE = null !== ZE && !Tu && xu.getPlayerName().toLowerCase() === ZE.player.name.toLowerCase(),
        CE = (0, ru.b)(null === ZE || void 0 === ZE ? void 0 : ZE.player.name),
        bE = fE && xu.playerHasRank("youtuber");
      Au.current = ZE;
      const cE = (0, su.useCallback)((() => {
          Fu && (Ju.e.invalidate(Fu), Ju.e.get(xu, Fu).then((uu => {
            tu.current === Lu && (yu.current = !0, uE({
              status: "loaded",
              profile: uu,
              playerKey: Lu
            }))
          })).catch((uu => {
            console.error("Failed to refresh user profile", uu)
          })))
        }), [Lu, xu]),
        NE = (0, su.useCallback)((() => {
          var uu;
          const Eu = Au.current;
          return !(!Eu || null === (uu = Hu.current) || void 0 === uu || !uu.isReady()) && (Hu.current.setAllCosmetics(Eu.player.cosmetics), !0)
        }), []);
      return (0, su.useEffect)((() => {
        if (!ZE) return;
        let uu, Eu = !1;
        const ju = () => {
          Eu || NE() || (uu = setTimeout(ju, 100))
        };
        return ju(), () => {
          Eu = !0, clearTimeout(uu)
        }
      }), [ZE, NE]), (0, Su.jsxs)("div", {
        className: ou()("PlayerProfile", {
          PlayerProfilePortrait: ju
        }),
        children: [XE && (0, Su.jsx)(lu.d, {
          meta: XE
        }), (0, Su.jsxs)("div", {
          className: "PlayerProfileBackgroundContainer",
          children: [qE && (0, Su.jsx)(qE, {}), !qE && (0, Su.jsx)("div", {
            className: "PlayerProfileBackground",
            style: {
              backgroundImage: `url(${zu.current})`
            }
          })]
        }), (0, Su.jsxs)("div", {
          className: "PlayerProfileHeader",
          children: [(0, Su.jsx)(Gu.d, {
            onClick: sE,
            children: uu("general:back")
          }), ZE && !Tu && !fE && iu.featureFlags.useSocialFeatures && (0, Su.jsx)("div", {
            className: "PlayerProfileExclusionActions",
            children: (0, Su.jsx)(Qu.c, {
              playerName: ZE.player.name,
              className: "SmallTextLight"
            })
          })]
        }), "loading" === UE.status && (0, Su.jsx)("div", {
          className: "PlayerProfileCentredMessage",
          children: (0, Su.jsx)(eu.b, {})
        }), ("notFound" === UE.status || "failed" === UE.status) && (0, Su.jsxs)("div", {
          className: "PlayerProfileCentredMessage PlayerProfileError",
          children: [(0, Su.jsx)(ku.e, {
            name: "face-dizzy"
          }), (0, Su.jsx)("div", {
            className: "PlayerProfileErrorText",
            children: "notFound" === UE.status ? uu("socialBar:playerNotFound", {
              playerName: null !== Pu && void 0 !== Pu ? Pu : du
            }) : uu("playerProfile:loadFailed")
          }), "failed" === UE.status && (0, Su.jsx)(Gu.f, {
            onClick: () => {
              jE((uu => uu + 1))
            },
            children: uu("general:tryAgain")
          })]
        }), ZE && (0, Su.jsxs)("div", {
          className: "PlayerProfileContent",
          children: [(0, Su.jsxs)("div", {
            className: "PlayerProfileLeft",
            children: [(0, Su.jsx)("div", {
              className: "PlayerProfileName FullyFancyText",
              children: (0, Su.jsx)(hu.d, {
                text: (0, gu.w)(ZE.player.ranks, ZE.player.name, ZE.player.nameColour),
                friendBadgeFor: CE ? ZE.player.name : void 0
              })
            }), (0, Su.jsx)("div", {
              className: "PlayerProfileModel",
              children: (0, Su.jsx)(su.Suspense, {
                fallback: (0, Su.jsx)("div", {
                  className: "PlayerProfileModelLoading",
                  children: (0, Su.jsx)(eu.b, {})
                }),
                children: (0, Su.jsx)(wu.c, {
                  ref: Hu,
                  onReady: () => {
                    NE()
                  }
                })
              })
            })]
          }), (0, Su.jsxs)("div", {
            className: "PlayerProfileRight",
            children: [(0, Su.jsx)(Bu, {
              profile: ZE
            }), (ZE.socialLinks.length > 0 || bE) && (0, Su.jsx)(mu.e, {
              socialLinks: ZE.socialLinks,
              editable: bE,
              userContext: xu,
              onLinksUpdated: cE
            }), (0, Su.jsxs)("div", {
              className: "PlayerProfileGames",
              children: [(0, Su.jsx)("div", {
                className: "PlayerProfileGamesTitle SmallTextBold",
                children: uu("homePage:profileReleasedGames")
              }), 0 === ZE.releasedGames.length && (0, Su.jsx)("div", {
                className: "PlayerProfileNoGames",
                children: uu("homePage:profileNoReleasedGames")
              }), ZE.releasedGames.length > 0 && (0, Su.jsx)("div", {
                className: "PlayerProfileGamesGrid",
                children: ZE.releasedGames.map((uu => (0, Su.jsx)(Mu.e, {
                  source: {
                    type: "preview",
                    preview: uu
                  },
                  gameWidth: "100%",
                  useLongRatio: !0,
                  hideFavourites: !0,
                  entrySource: "other"
                }, uu.schematicId)))
              })]
            })]
          })]
        })]
      })
    }
  },
  5052: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => hu
    });
    var su = ju(1105),
      Uu = ju.n(su),
      Zu = ju(4821),
      Xu = ju(1244),
      lu = ju(1116),
      qu = ju(1506),
      fu = ju(1559),
      Cu = ju(1405),
      bu = ju(2637),
      cu = ju(1154);
    const Nu = {
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

    function Ou(uu) {
      let {
        platform: Eu
      } = uu;
      const ju = "youtube" === Eu;
      return (0, cu.jsxs)("span", {
        className: Uu()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: ju
        }),
        children: [ju && (0, cu.jsx)(bu.b, {
          variant: "white"
        }), !ju && (0, cu.jsx)(lu.e, {
          name: Nu[Eu].icon,
          kit: "brands"
        })]
      })
    }

    function Yu(uu) {
      let {
        platform: Eu,
        link: ju,
        editable: su,
        userContext: Uu,
        onLinksUpdated: bu
      } = uu;
      const {
        t: Yu
      } = (0, Xu.A)(), hu = Nu[Eu];
      if (!ju && !su) return null;

      function Du() {
        var uu;
        if (!Uu || !bu) return;
        Cu.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: hu.name
            }
          },
          prefixText: Zu.v[Eu],
          placeholderText: "playBloxd",
          initialValue: null !== (uu = null === ju || void 0 === ju ? void 0 : ju.handle) && void 0 !== uu ? uu : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: ju ? "general:remove" : void 0
        }).getResult().then((async uu => {
          if ("notificationTornDown" !== uu && null !== uu) try {
            "submit" === uu.type ? await fu.b.setSocialLink(Uu, Eu, uu.value) : await fu.b.clearSocialLink(Uu, Eu), bu()
          } catch (ju) {
            console.error("Failed to update social link", ju), Cu.NotificationProvider.showAlertPopup({
              title: ju.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (ju) {
        const uu = `@${ju.handle}`;
        return (0, cu.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: hu.color
          },
          href: ju.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, cu.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, cu.jsx)(Ou, {
              platform: Eu
            }), (0, cu.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, cu.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: uu
              })
            })]
          }), su && (0, cu.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, qu.ib)({
              stopPropagation: !0
            }),
            onClick: uu => {
              uu.stopPropagation(), uu.preventDefault(), Du()
            },
            children: (0, cu.jsx)(lu.e, {
              name: "pen-to-square"
            })
          }), !su && (0, cu.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, cu.jsx)(lu.e, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, cu.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: hu.color
        },
        ...(0, qu.ib)(),
        onClick: () => {
          Du()
        },
        children: [(0, cu.jsx)(Ou, {
          platform: Eu
        }), (0, cu.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, cu.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: hu.name
          }), (0, cu.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: Yu("homePage:profileSocialLinkAdd")
          })]
        }), (0, cu.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, cu.jsx)(lu.e, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function hu(uu) {
      let {
        socialLinks: Eu,
        editable: ju = !1,
        userContext: su,
        onLinksUpdated: Uu
      } = uu;
      if (!ju && 0 === Eu.length) return null;
      const Xu = new Map(Eu.map((uu => [uu.platform, uu]))),
        lu = ju ? Zu.r : Eu.map((uu => uu.platform));
      return (0, cu.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, cu.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: lu.map((uu => (0, cu.jsx)(Yu, {
            platform: uu,
            link: Xu.get(uu),
            editable: ju,
            userContext: su,
            onLinksUpdated: Uu
          }, uu)))
        })
      })
    }
  },
  5046: uu => {
    uu.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGOws7P7D8Kmpqb/NTU1wTQymwGbAhANwwzIOmAYxQRkCXNzczBGtgrFBGQFKFZgsxtuAi67YY5HMQGbAgCIxWSBYHJzHAAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);