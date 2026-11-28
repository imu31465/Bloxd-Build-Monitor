export const id = 114;
export const ids = [114];
export const modules = {
  5661: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      default: () => ed
    });
    var Wd = md(66),
      Fd = md(1650),
      Rd = md(405),
      Xd = md(1295),
      Kd = md(1739),
      hd = md(1322),
      vd = md(1670),
      Qd = md(1627),
      td = md(3742);
    const od = {
      retries: 2,
      minTimeout: 2e3
    };
    var Nd = md(1170),
      qd = md(1731),
      Hd = md(1186),
      yd = md(2060),
      bd = md(1238),
      Td = md(1286),
      pd = md(4711),
      Yd = md(1436),
      gd = md(1572),
      wd = md(1641),
      Ed = md(3684),
      Jd = md(3705),
      Ud = md(5666),
      xd = md(3044),
      Bd = md(1155),
      Sd = md.n(Bd),
      sd = md(1443),
      ud = md(5670),
      Vd = md(29),
      Ad = md(2092),
      rd = md(4853),
      Gd = md(2167),
      nd = md(4832),
      Ld = md(107),
      Pd = md(5220),
      zd = md(1341);
    const cd = [Ud];

    function jd(dd) {
      let {
        icon: Od,
        label: md,
        value: Wd
      } = dd;
      return (0, zd.jsxs)("div", {
        className: "PlayerProfileStat",
        children: [(0, zd.jsx)(sd.c, {
          name: Od,
          className: "PlayerProfileStatIcon"
        }), (0, zd.jsxs)("div", {
          className: "PlayerProfileStatText",
          children: [(0, zd.jsx)("div", {
            className: "PlayerProfileStatLabel SmallTextLight",
            children: md
          }), (0, zd.jsx)("div", {
            className: "PlayerProfileStatValue",
            children: Wd
          })]
        })]
      })
    }

    function Dd(dd) {
      let {
        profile: Od
      } = dd;
      const {
        t: md,
        selectedLanguage: Wd
      } = (0, bd.G)();
      let Fd = md("homePage:profileUnknown");
      if (Od.lastOnline) {
        const dd = (0, bd.p)(Wd.code, "homePage:profileTimeAgo");
        Fd = md("homePage:profileTimeAgo", {
          time: (0, Rd.Q)(dd, Od.lastOnline, Date.now())
        })
      }
      let Xd = md("homePage:profileUnknown");
      return Od.accountCreatedAt && (Xd = new Date(Od.accountCreatedAt).toLocaleDateString(void 0, {
        year: "numeric",
        month: "short",
        day: "numeric"
      })), (0, zd.jsxs)("div", {
        className: "PlayerProfileStats",
        children: [(0, zd.jsx)(jd, {
          icon: "hourglass",
          label: md("homePage:profileTimePlayed"),
          value: (0, rd.e)(Od.totalPlayMinutes)
        }), (0, zd.jsx)(jd, {
          icon: "wifi",
          label: md("homePage:profileLastOnline"),
          value: Fd
        }), (0, zd.jsx)(jd, {
          icon: "calendar",
          label: md("homePage:profileJoined"),
          value: Xd
        })]
      })
    }

    function ed() {
      const {
        t: dd
      } = (0, bd.G)(), Od = (0, wd.useNavigatePreserveSearch)(), md = (0, Nd.h)(), {
        playerName: Ud,
        playerUrlName: Bd
      } = (0, Fd.u)(), rd = (0, Fd.p)(), jd = (0, Xd.g)(rd.pathname), ed = jd && ("urlId" in jd ? `urlId:${jd.urlId}` : `name:${jd.lowerCaseName}`), Id = (0, Wd.useRef)(ed);
      Id.current = ed;
      const {
        userContext: ld,
        isUserContextUpdating: Cd
      } = (0, Hd.d)(), Zd = (0, Wd.useRef)(null), kd = (0, Wd.useRef)(null), fd = (0, Wd.useRef)(null), Md = (0, Wd.useRef)(!1), dO = (0, Wd.useRef)((0, Rd.Vb)(cd)), [OO, mO] = (0, Wd.useState)((() => {
        const dd = jd && Jd.e.peek(ld, jd);
        return dd ? {
          status: "loaded",
          profile: dd,
          playerKey: ed
        } : {
          status: "loading"
        }
      })), [WO, FO] = (0, Wd.useState)(0);
      (0, Wd.useEffect)(Ed.g, []), (0, Wd.useEffect)((() => {
        Ad.gameBridge.send("leaveGame", {
          reloadPath: null
        }), Vd.e.set({
          gameState: "landingPage",
          openEverythingMenuName: null,
          openInGameMenuName: null
        })
      }), [rd.key]);
      const RO = () => {
        const dd = (0, wd.getPreviousLocation)();
        null === dd || dd.startsWith("/play") ? (0, wd.navigateToHomePage)() : Od(-1)
      };
      (0, Pd.d)(RO), (0, Wd.useEffect)((() => {
        var dd;
        if (Cd) return;
        if (!jd) return void mO({
          status: "notFound",
          playerKey: ed
        });
        const Od = "urlId" in jd && (null === (dd = kd.current) || void 0 === dd ? void 0 : dd.urlId) === jd.urlId && fd.current === ld;
        if (Od && Md.current) return;
        const md = Od ? null : Jd.e.peek(ld, jd);
        let Wd = !1;
        const Fd = dd => "loaded" === dd.status && (dd.playerKey === ed || "urlId" in jd && dd.profile.urlId === jd.urlId);
        return md ? (fd.current = ld, Md.current = !1, mO({
          status: "loaded",
          profile: md,
          playerKey: ed
        }), Jd.e.invalidate(jd)) : mO((dd => Fd(dd) ? dd : {
          status: "loading"
        })), async function(dd, Od) {
          if ("lowerCaseName" in Od && Od.lowerCaseName.length > hd.g) return {
            status: "notFound"
          };
          try {
            return {
              status: "loaded",
              profile: await Qd.e.getPlayerProfile(dd, Od, od)
            }
          } catch (md) {
            return (0, td.c)(md) ? {
              status: "notFound"
            } : (console.error("Failed to load user profile", md), {
              status: "failed"
            })
          }
        }(ld, jd).then((dd => {
          Wd || ("loaded" === dd.status && (fd.current = ld, Md.current = !0), mO((Od => "failed" === dd.status && Fd(Od) ? Od : {
            ...dd,
            playerKey: ed
          })))
        })), () => {
          Wd = !0
        }
      }), [Cd, ed, ld, WO]);
      const XO = "loading" === OO.status || OO.playerKey === ed || "loaded" === OO.status && !!jd && "urlId" in jd && OO.profile.urlId === jd.urlId ? OO : {
          status: "loading"
        },
        KO = "loaded" === XO.status ? XO.profile : null,
        hO = "loading" === XO.status ? null : function(dd) {
          if ("loaded" === dd.status) {
            const {
              profile: Od
            } = dd;
            return (0, vd.$)({
              urlId: Od.urlId,
              name: Od.player.name,
              ranks: Od.player.ranks,
              socialLinks: Od.socialLinks
            })
          }
          return "notFound" === dd.status ? (0, vd.lb)() : null
        }(XO),
        vO = null !== KO && void 0 !== KO && KO.urlId ? (0, Xd.h)({
          urlId: KO.urlId,
          name: KO.player.name
        }) : null;
      (0, qd.g)(vO);
      const QO = null !== KO && void 0 !== KO && KO.player.cosmetics.profileEffect ? xd.c[KO.player.cosmetics.profileEffect] : void 0,
        tO = null !== KO && !Cd && ld.getPlayerName().toLowerCase() === KO.player.name.toLowerCase(),
        oO = (0, Gd.c)(null === KO || void 0 === KO ? void 0 : KO.player.name),
        NO = tO && ld.playerHasRank("youtuber");
      kd.current = KO;
      const qO = (0, Wd.useCallback)((() => {
          jd && (Jd.e.invalidate(jd), Jd.e.get(ld, jd).then((dd => {
            Id.current === ed && (Md.current = !0, mO({
              status: "loaded",
              profile: dd,
              playerKey: ed
            }))
          })).catch((dd => {
            console.error("Failed to refresh user profile", dd)
          })))
        }), [ed, ld]),
        HO = (0, Wd.useCallback)((() => {
          var dd;
          const Od = kd.current;
          return !(!Od || null === (dd = Zd.current) || void 0 === dd || !dd.isReady()) && (Zd.current.setAllCosmetics(Od.player.cosmetics), !0)
        }), []);
      return (0, Wd.useEffect)((() => {
        if (!KO) return;
        let dd, Od = !1;
        const md = () => {
          Od || HO() || (dd = setTimeout(md, 100))
        };
        return md(), () => {
          Od = !0, clearTimeout(dd)
        }
      }), [KO, HO]), (0, zd.jsxs)("div", {
        className: Sd()("PlayerProfile", {
          PlayerProfilePortrait: md
        }),
        children: [hO && (0, zd.jsx)(Kd.c, {
          meta: hO
        }), (0, zd.jsxs)("div", {
          className: "PlayerProfileBackgroundContainer",
          children: [QO && (0, zd.jsx)(QO, {}), !QO && (0, zd.jsx)("div", {
            className: "PlayerProfileBackground",
            style: {
              backgroundImage: `url(${dO.current})`
            }
          })]
        }), (0, zd.jsxs)("div", {
          className: "PlayerProfileHeader",
          children: [(0, zd.jsx)(gd.d, {
            onClick: RO,
            children: dd("general:back")
          }), KO && !Cd && !tO && Ld.featureFlags.useSocialFeatures && (0, zd.jsx)("div", {
            className: "PlayerProfileExclusionActions",
            children: (0, zd.jsx)(nd.b, {
              playerName: KO.player.name,
              className: "SmallTextLight"
            })
          })]
        }), "loading" === XO.status && (0, zd.jsx)("div", {
          className: "PlayerProfileCentredMessage",
          children: (0, zd.jsx)(Yd.c, {})
        }), ("notFound" === XO.status || "failed" === XO.status) && (0, zd.jsxs)("div", {
          className: "PlayerProfileCentredMessage PlayerProfileError",
          children: [(0, zd.jsx)(sd.c, {
            name: "face-dizzy"
          }), (0, zd.jsx)("div", {
            className: "PlayerProfileErrorText",
            children: "notFound" === XO.status ? dd("socialBar:playerNotFound", {
              playerName: null !== Bd && void 0 !== Bd ? Bd : Ud
            }) : dd("playerProfile:loadFailed")
          }), "failed" === XO.status && (0, zd.jsx)(gd.g, {
            onClick: () => {
              FO((dd => dd + 1))
            },
            children: dd("general:tryAgain")
          })]
        }), KO && (0, zd.jsxs)("div", {
          className: "PlayerProfileContent",
          children: [(0, zd.jsxs)("div", {
            className: "PlayerProfileLeft",
            children: [(0, zd.jsx)("div", {
              className: "PlayerProfileName FullyFancyText",
              children: (0, zd.jsx)(yd.d, {
                text: (0, Td.x)(KO.player.ranks, KO.player.name, KO.player.nameColour),
                friendBadgeFor: oO ? KO.player.name : void 0
              })
            }), (0, zd.jsx)("div", {
              className: "PlayerProfileModel",
              children: (0, zd.jsx)(Wd.Suspense, {
                fallback: (0, zd.jsx)("div", {
                  className: "PlayerProfileModelLoading",
                  children: (0, zd.jsx)(Yd.c, {})
                }),
                children: (0, zd.jsx)(Ed.e, {
                  ref: Zd,
                  onReady: () => {
                    HO()
                  }
                })
              })
            })]
          }), (0, zd.jsxs)("div", {
            className: "PlayerProfileRight",
            children: [(0, zd.jsx)(Dd, {
              profile: KO
            }), (KO.socialLinks.length > 0 || NO) && (0, zd.jsx)(ud.c, {
              socialLinks: KO.socialLinks,
              editable: NO,
              userContext: ld,
              onLinksUpdated: qO
            }), (0, zd.jsxs)("div", {
              className: "PlayerProfileGames",
              children: [(0, zd.jsx)("div", {
                className: "PlayerProfileGamesTitle SmallTextBold",
                children: dd("homePage:profileReleasedGames")
              }), 0 === KO.releasedGames.length && (0, zd.jsx)("div", {
                className: "PlayerProfileNoGames",
                children: dd("homePage:profileNoReleasedGames")
              }), KO.releasedGames.length > 0 && (0, zd.jsx)("div", {
                className: "PlayerProfileGamesGrid",
                children: KO.releasedGames.map((dd => (0, zd.jsx)(pd.f, {
                  source: {
                    type: "preview",
                    preview: dd
                  },
                  gameWidth: "100%",
                  useLongRatio: !0,
                  hideFavourites: !0,
                  entrySource: "other"
                }, dd.schematicId)))
              })]
            })]
          })]
        })]
      })
    }
  },
  5670: (dd, Od, md) => {
    md.d(Od, {
      c: () => yd
    });
    var Wd = md(1155),
      Fd = md.n(Wd),
      Rd = md(5301),
      Xd = md(1238),
      Kd = md(1443),
      hd = md(1572),
      vd = md(1627),
      Qd = md(1462),
      td = md(3531),
      od = md(1341);
    const Nd = {
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

    function qd(dd) {
      let {
        platform: Od
      } = dd;
      const md = "youtube" === Od;
      return (0, od.jsxs)("span", {
        className: Fd()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: md
        }),
        children: [md && (0, od.jsx)(td.b, {
          variant: "white"
        }), !md && (0, od.jsx)(Kd.c, {
          name: Nd[Od].icon,
          kit: "brands"
        })]
      })
    }

    function Hd(dd) {
      let {
        platform: Od,
        link: md,
        editable: Wd,
        userContext: Fd,
        onLinksUpdated: td
      } = dd;
      const {
        t: Hd
      } = (0, Xd.G)(), yd = Nd[Od];
      if (!md && !Wd) return null;

      function bd() {
        var dd;
        if (!Fd || !td) return;
        Qd.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: yd.name
            }
          },
          prefixText: Rd.x[Od],
          placeholderText: "playBloxd",
          initialValue: null !== (dd = null === md || void 0 === md ? void 0 : md.handle) && void 0 !== dd ? dd : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: md ? "general:remove" : void 0
        }).getResult().then((async dd => {
          if ("notificationTornDown" !== dd && null !== dd) try {
            "submit" === dd.type ? await vd.e.setSocialLink(Fd, Od, dd.value) : await vd.e.clearSocialLink(Fd, Od), td()
          } catch (md) {
            console.error("Failed to update social link", md), Qd.NotificationProvider.showAlertPopup({
              title: md.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (md) {
        const dd = `@${md.handle}`;
        return (0, od.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: yd.color
          },
          href: md.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, od.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, od.jsx)(qd, {
              platform: Od
            }), (0, od.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, od.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: dd
              })
            })]
          }), Wd && (0, od.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, hd.X)({
              stopPropagation: !0
            }),
            onClick: dd => {
              dd.stopPropagation(), dd.preventDefault(), bd()
            },
            children: (0, od.jsx)(Kd.c, {
              name: "pen-to-square"
            })
          }), !Wd && (0, od.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, od.jsx)(Kd.c, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, od.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: yd.color
        },
        ...(0, hd.X)(),
        onClick: () => {
          bd()
        },
        children: [(0, od.jsx)(qd, {
          platform: Od
        }), (0, od.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, od.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: yd.name
          }), (0, od.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: Hd("homePage:profileSocialLinkAdd")
          })]
        }), (0, od.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, od.jsx)(Kd.c, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function yd(dd) {
      let {
        socialLinks: Od,
        editable: md = !1,
        userContext: Wd,
        onLinksUpdated: Fd
      } = dd;
      if (!md && 0 === Od.length) return null;
      const Xd = new Map(Od.map((dd => [dd.platform, dd]))),
        Kd = md ? Rd.u : Od.map((dd => dd.platform));
      return (0, od.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, od.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: Kd.map((dd => (0, od.jsx)(Hd, {
            platform: dd,
            link: Xd.get(dd),
            editable: md,
            userContext: Wd,
            onLinksUpdated: Fd
          }, dd)))
        })
      })
    }
  },
  5666: dd => {
    dd.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGOws7P7D8Kmpqb/NTU1wTQymwGbAhANwwzIOmAYxQRkCXNzczBGtgrFBGQFKFZgsxtuAi67YY5HMQGbAgCIxWSBYHJzHAAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);