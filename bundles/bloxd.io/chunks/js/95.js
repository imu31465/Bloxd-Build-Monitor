export const id = 95;
export const ids = [95];
export const modules = {
  4646: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      default: () => hu
    });
    var Eu = yu(64),
      Ku = yu(1483),
      Qu = yu(343),
      mu = yu(1213),
      Ju = yu(1566),
      Nu = yu(1240),
      Xu = yu(1499),
      Vu = yu(1447),
      ru = yu(2521);
    const Bu = {
      retries: 2,
      minTimeout: 2e3
    };
    var xu = yu(1093),
      Su = yu(1562),
      pu = yu(1107),
      Tu = yu(1825),
      Wu = yu(1170),
      ju = yu(1199),
      Hu = yu(3296),
      du = yu(1300),
      bu = yu(1408),
      Cu = yu(1467),
      ku = yu(2475),
      eu = yu(2484),
      Au = yu(4652),
      Du = yu(2066),
      Mu = yu(1035),
      Iu = yu.n(Mu),
      Gu = yu(1043),
      Uu = yu(4659),
      nu = yu(27),
      su = yu(1855),
      tu = yu(3459),
      lu = yu(1952),
      gu = yu(3403),
      cu = yu(106),
      Lu = yu(4322),
      zu = yu(1079);
    const Fu = [Au];

    function wu(uu) {
      let {
        icon: Ru,
        label: yu,
        value: Eu
      } = uu;
      return (0, zu.jsxs)("div", {
        className: "PlayerProfileStat",
        children: [(0, zu.jsx)(Gu.c, {
          name: Ru,
          className: "PlayerProfileStatIcon"
        }), (0, zu.jsxs)("div", {
          className: "PlayerProfileStatText",
          children: [(0, zu.jsx)("div", {
            className: "PlayerProfileStatLabel SmallTextLight",
            children: yu
          }), (0, zu.jsx)("div", {
            className: "PlayerProfileStatValue",
            children: Eu
          })]
        })]
      })
    }

    function Zu(uu) {
      let {
        profile: Ru
      } = uu;
      const {
        t: yu,
        selectedLanguage: Eu
      } = (0, Wu.E)();
      let Ku = yu("homePage:profileUnknown");
      if (Ru.lastOnline) {
        const uu = (0, Wu.n)(Eu.code, "homePage:profileTimeAgo");
        Ku = yu("homePage:profileTimeAgo", {
          time: (0, Qu.fb)(uu, Ru.lastOnline, Date.now())
        })
      }
      let mu = yu("homePage:profileUnknown");
      return Ru.accountCreatedAt && (mu = new Date(Ru.accountCreatedAt).toLocaleDateString(void 0, {
        year: "numeric",
        month: "short",
        day: "numeric"
      })), (0, zu.jsxs)("div", {
        className: "PlayerProfileStats",
        children: [(0, zu.jsx)(wu, {
          icon: "hourglass",
          label: yu("homePage:profileTimePlayed"),
          value: (0, tu.c)(Ru.totalPlayMinutes)
        }), (0, zu.jsx)(wu, {
          icon: "wifi",
          label: yu("homePage:profileLastOnline"),
          value: Ku
        }), (0, zu.jsx)(wu, {
          icon: "calendar",
          label: yu("homePage:profileJoined"),
          value: mu
        })]
      })
    }

    function hu() {
      const {
        t: uu
      } = (0, Wu.E)(), Ru = (0, Cu.useNavigatePreserveSearch)(), yu = (0, xu.k)(), {
        playerName: Au,
        playerUrlName: Mu
      } = (0, Ku.A)(), tu = (0, Ku.s)(), wu = (0, mu.e)(tu.pathname), hu = wu && ("urlId" in wu ? `urlId:${wu.urlId}` : `name:${wu.lowerCaseName}`), Pu = (0, Eu.useRef)(hu);
      Pu.current = hu;
      const {
        userContext: iu,
        isUserContextUpdating: Yu
      } = (0, pu.d)(), ou = (0, Eu.useRef)(null), qu = (0, Eu.useRef)(null), Ou = (0, Eu.useRef)(null), vu = (0, Eu.useRef)(!1), au = (0, Eu.useRef)((0, Qu.mc)(Fu)), [fu, uR] = (0, Eu.useState)((() => {
        const uu = wu && eu.b.peek(iu, wu);
        return uu ? {
          status: "loaded",
          profile: uu,
          playerKey: hu
        } : {
          status: "loading"
        }
      })), [RR, yR] = (0, Eu.useState)(0);
      (0, Eu.useEffect)(ku.c, []), (0, Eu.useEffect)((() => {
        su.gameBridge.send("leaveGame", {
          reloadPath: null
        }), nu.d.set({
          gameState: "landingPage",
          openEverythingMenuName: null,
          openInGameMenuName: null
        })
      }), [tu.key]);
      const ER = () => {
        const uu = (0, Cu.getPreviousLocation)();
        null === uu || uu.startsWith("/play") ? (0, Cu.navigateToHomePage)() : Ru(-1)
      };
      (0, Lu.c)(ER), (0, Eu.useEffect)((() => {
        var uu;
        if (Yu) return;
        if (!wu) return void uR({
          status: "notFound",
          playerKey: hu
        });
        const Ru = "urlId" in wu && (null === (uu = qu.current) || void 0 === uu ? void 0 : uu.urlId) === wu.urlId && Ou.current === iu;
        if (Ru && vu.current) return;
        const yu = Ru ? null : eu.b.peek(iu, wu);
        let Eu = !1;
        const Ku = uu => "loaded" === uu.status && (uu.playerKey === hu || "urlId" in wu && uu.profile.urlId === wu.urlId);
        return yu ? (Ou.current = iu, vu.current = !1, uR({
          status: "loaded",
          profile: yu,
          playerKey: hu
        }), eu.b.invalidate(wu)) : uR((uu => Ku(uu) ? uu : {
          status: "loading"
        })), async function(uu, Ru) {
          if ("lowerCaseName" in Ru && Ru.lowerCaseName.length > Nu.k) return {
            status: "notFound"
          };
          try {
            return {
              status: "loaded",
              profile: await Vu.e.getPlayerProfile(uu, Ru, Bu)
            }
          } catch (yu) {
            return (0, ru.b)(yu) ? {
              status: "notFound"
            } : (console.error("Failed to load user profile", yu), {
              status: "failed"
            })
          }
        }(iu, wu).then((uu => {
          Eu || ("loaded" === uu.status && (Ou.current = iu, vu.current = !0), uR((Ru => "failed" === uu.status && Ku(Ru) ? Ru : {
            ...uu,
            playerKey: hu
          })))
        })), () => {
          Eu = !0
        }
      }), [Yu, hu, iu, RR]);
      const KR = "loading" === fu.status || fu.playerKey === hu || "loaded" === fu.status && !!wu && "urlId" in wu && fu.profile.urlId === wu.urlId ? fu : {
          status: "loading"
        },
        QR = "loaded" === KR.status ? KR.profile : null,
        mR = "loading" === KR.status ? null : function(uu) {
          if ("loaded" === uu.status) {
            const {
              profile: Ru
            } = uu;
            return (0, Xu.N)({
              urlId: Ru.urlId,
              name: Ru.player.name,
              ranks: Ru.player.ranks,
              socialLinks: Ru.socialLinks
            })
          }
          return "notFound" === uu.status ? (0, Xu.T)() : null
        }(KR),
        JR = null !== QR && void 0 !== QR && QR.urlId ? (0, mu.f)({
          urlId: QR.urlId,
          name: QR.player.name
        }) : null;
      (0, Su.f)(JR);
      const NR = null !== QR && void 0 !== QR && QR.player.cosmetics.profileEffect ? Du.i[QR.player.cosmetics.profileEffect] : void 0,
        XR = null !== QR && !Yu && iu.getPlayerName().toLowerCase() === QR.player.name.toLowerCase(),
        VR = (0, lu.b)(null === QR || void 0 === QR ? void 0 : QR.player.name),
        rR = XR && iu.playerHasRank("youtuber");
      qu.current = QR;
      const BR = (0, Eu.useCallback)((() => {
          wu && (eu.b.invalidate(wu), eu.b.get(iu, wu).then((uu => {
            Pu.current === hu && (vu.current = !0, uR({
              status: "loaded",
              profile: uu,
              playerKey: hu
            }))
          })).catch((uu => {
            console.error("Failed to refresh user profile", uu)
          })))
        }), [hu, iu]),
        xR = (0, Eu.useCallback)((() => {
          var uu;
          const Ru = qu.current;
          return !(!Ru || null === (uu = ou.current) || void 0 === uu || !uu.isReady()) && (ou.current.setAllCosmetics(Ru.player.cosmetics), !0)
        }), []);
      return (0, Eu.useEffect)((() => {
        if (!QR) return;
        let uu, Ru = !1;
        const yu = () => {
          Ru || xR() || (uu = setTimeout(yu, 100))
        };
        return yu(), () => {
          Ru = !0, clearTimeout(uu)
        }
      }), [QR, xR]), (0, zu.jsxs)("div", {
        className: Iu()("PlayerProfile", {
          PlayerProfilePortrait: yu
        }),
        children: [mR && (0, zu.jsx)(Ju.d, {
          meta: mR
        }), (0, zu.jsxs)("div", {
          className: "PlayerProfileBackgroundContainer",
          children: [NR && (0, zu.jsx)(NR, {}), !NR && (0, zu.jsx)("div", {
            className: "PlayerProfileBackground",
            style: {
              backgroundImage: `url(${au.current})`
            }
          })]
        }), (0, zu.jsxs)("div", {
          className: "PlayerProfileHeader",
          children: [(0, zu.jsx)(bu.b, {
            onClick: ER,
            children: uu("general:back")
          }), QR && !Yu && !XR && cu.featureFlags.useSocialFeatures && (0, zu.jsx)("div", {
            className: "PlayerProfileExclusionActions",
            children: (0, zu.jsx)(gu.d, {
              playerName: QR.player.name,
              className: "SmallTextLight"
            })
          })]
        }), "loading" === KR.status && (0, zu.jsx)("div", {
          className: "PlayerProfileCentredMessage",
          children: (0, zu.jsx)(du.b, {})
        }), ("notFound" === KR.status || "failed" === KR.status) && (0, zu.jsxs)("div", {
          className: "PlayerProfileCentredMessage PlayerProfileError",
          children: [(0, zu.jsx)(Gu.c, {
            name: "face-dizzy"
          }), (0, zu.jsx)("div", {
            className: "PlayerProfileErrorText",
            children: "notFound" === KR.status ? uu("socialBar:playerNotFound", {
              playerName: null !== Mu && void 0 !== Mu ? Mu : Au
            }) : uu("playerProfile:loadFailed")
          }), "failed" === KR.status && (0, zu.jsx)(bu.e, {
            onClick: () => {
              yR((uu => uu + 1))
            },
            children: uu("general:tryAgain")
          })]
        }), QR && (0, zu.jsxs)("div", {
          className: "PlayerProfileContent",
          children: [(0, zu.jsxs)("div", {
            className: "PlayerProfileLeft",
            children: [(0, zu.jsx)("div", {
              className: "PlayerProfileName FullyFancyText",
              children: (0, zu.jsx)(Tu.d, {
                text: (0, ju.v)(QR.player.ranks, QR.player.name, QR.player.nameColour),
                friendBadgeFor: VR ? QR.player.name : void 0
              })
            }), (0, zu.jsx)("div", {
              className: "PlayerProfileModel",
              children: (0, zu.jsx)(Eu.Suspense, {
                fallback: (0, zu.jsx)("div", {
                  className: "PlayerProfileModelLoading",
                  children: (0, zu.jsx)(du.b, {})
                }),
                children: (0, zu.jsx)(ku.b, {
                  ref: ou,
                  onReady: () => {
                    xR()
                  }
                })
              })
            })]
          }), (0, zu.jsxs)("div", {
            className: "PlayerProfileRight",
            children: [(0, zu.jsx)(Zu, {
              profile: QR
            }), (QR.socialLinks.length > 0 || rR) && (0, zu.jsx)(Uu.c, {
              socialLinks: QR.socialLinks,
              editable: rR,
              userContext: iu,
              onLinksUpdated: BR
            }), (0, zu.jsxs)("div", {
              className: "PlayerProfileGames",
              children: [(0, zu.jsx)("div", {
                className: "PlayerProfileGamesTitle SmallTextBold",
                children: uu("homePage:profileReleasedGames")
              }), 0 === QR.releasedGames.length && (0, zu.jsx)("div", {
                className: "PlayerProfileNoGames",
                children: uu("homePage:profileNoReleasedGames")
              }), QR.releasedGames.length > 0 && (0, zu.jsx)("div", {
                className: "PlayerProfileGamesGrid",
                children: QR.releasedGames.map((uu => (0, zu.jsx)(Hu.e, {
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
  4659: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Tu
    });
    var Eu = yu(1035),
      Ku = yu.n(Eu),
      Qu = yu(4425),
      mu = yu(1170),
      Ju = yu(1043),
      Nu = yu(1408),
      Xu = yu(1447),
      Vu = yu(1311),
      ru = yu(2393),
      Bu = yu(1079);
    const xu = {
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

    function Su(uu) {
      let {
        platform: Ru
      } = uu;
      const yu = "youtube" === Ru;
      return (0, Bu.jsxs)("span", {
        className: Ku()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: yu
        }),
        children: [yu && (0, Bu.jsx)(ru.c, {
          variant: "white"
        }), !yu && (0, Bu.jsx)(Ju.c, {
          name: xu[Ru].icon,
          kit: "brands"
        })]
      })
    }

    function pu(uu) {
      let {
        platform: Ru,
        link: yu,
        editable: Eu,
        userContext: Ku,
        onLinksUpdated: ru
      } = uu;
      const {
        t: pu
      } = (0, mu.E)(), Tu = xu[Ru];
      if (!yu && !Eu) return null;

      function Wu() {
        var uu;
        if (!Ku || !ru) return;
        Vu.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: Tu.name
            }
          },
          prefixText: Qu.y[Ru],
          placeholderText: "playBloxd",
          initialValue: null !== (uu = null === yu || void 0 === yu ? void 0 : yu.handle) && void 0 !== uu ? uu : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: yu ? "general:remove" : void 0
        }).getResult().then((async uu => {
          if ("notificationTornDown" !== uu && null !== uu) try {
            "submit" === uu.type ? await Xu.e.setSocialLink(Ku, Ru, uu.value) : await Xu.e.clearSocialLink(Ku, Ru), ru()
          } catch (yu) {
            console.error("Failed to update social link", yu), Vu.NotificationProvider.showAlertPopup({
              title: yu.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (yu) {
        const uu = `@${yu.handle}`;
        return (0, Bu.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: Tu.color
          },
          href: yu.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, Bu.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, Bu.jsx)(Su, {
              platform: Ru
            }), (0, Bu.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, Bu.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: uu
              })
            })]
          }), Eu && (0, Bu.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, Nu.U)({
              stopPropagation: !0
            }),
            onClick: uu => {
              uu.stopPropagation(), uu.preventDefault(), Wu()
            },
            children: (0, Bu.jsx)(Ju.c, {
              name: "pen-to-square"
            })
          }), !Eu && (0, Bu.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, Bu.jsx)(Ju.c, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, Bu.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: Tu.color
        },
        ...(0, Nu.U)(),
        onClick: () => {
          Wu()
        },
        children: [(0, Bu.jsx)(Su, {
          platform: Ru
        }), (0, Bu.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, Bu.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: Tu.name
          }), (0, Bu.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: pu("homePage:profileSocialLinkAdd")
          })]
        }), (0, Bu.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, Bu.jsx)(Ju.c, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function Tu(uu) {
      let {
        socialLinks: Ru,
        editable: yu = !1,
        userContext: Eu,
        onLinksUpdated: Ku
      } = uu;
      if (!yu && 0 === Ru.length) return null;
      const mu = new Map(Ru.map((uu => [uu.platform, uu]))),
        Ju = yu ? Qu.w : Ru.map((uu => uu.platform));
      return (0, Bu.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, Bu.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: Ju.map((uu => (0, Bu.jsx)(pu, {
            platform: uu,
            link: mu.get(uu),
            editable: yu,
            userContext: Eu,
            onLinksUpdated: Ku
          }, uu)))
        })
      })
    }
  },
  4652: uu => {
    uu.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGOws7P7D8Kmpqb/NTU1wTQymwGbAhANwwzIOmAYxQRkCXNzczBGtgrFBGQFKFZgsxtuAi67YY5HMQGbAgCIxWSBYHJzHAAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);