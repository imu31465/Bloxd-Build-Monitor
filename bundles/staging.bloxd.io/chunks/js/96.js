export const id = 96;
export const ids = [96];
export const modules = {
  4759: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      default: () => hd
    });
    var pd = kd(56),
      Nd = kd(1557),
      Wd = kd(313),
      Pd = kd(1253),
      Zd = kd(1653),
      gd = kd(1288),
      Cd = kd(1578),
      Kd = kd(1520),
      od = kd(2545);
    const ld = {
      retries: 2,
      minTimeout: 2e3
    };
    var Qd = kd(1124),
      Ld = kd(1646),
      Od = kd(1140),
      ed = kd(1904),
      Rd = kd(1211),
      Id = kd(1245),
      Gd = kd(3332),
      vd = kd(1359),
      xd = kd(1461),
      qd = kd(1543),
      Bd = kd(2500),
      sd = kd(2509),
      ad = kd(4761),
      Md = kd(2126),
      Fd = kd(1044),
      Yd = kd.n(Fd),
      md = kd(1059),
      bd = kd(4770),
      Sd = kd(22),
      jd = kd(1932),
      Xd = kd(3524),
      fd = kd(2004),
      nd = kd(3465),
      Ud = kd(95),
      yd = kd(4403),
      Dd = kd(1103);
    const Td = [ad];

    function Ed(dd) {
      let {
        icon: Jd,
        label: kd,
        value: pd
      } = dd;
      return (0, Dd.jsxs)("div", {
        className: "PlayerProfileStat",
        children: [(0, Dd.jsx)(md.e, {
          name: Jd,
          className: "PlayerProfileStatIcon"
        }), (0, Dd.jsxs)("div", {
          className: "PlayerProfileStatText",
          children: [(0, Dd.jsx)("div", {
            className: "PlayerProfileStatLabel SmallTextLight",
            children: kd
          }), (0, Dd.jsx)("div", {
            className: "PlayerProfileStatValue",
            children: pd
          })]
        })]
      })
    }

    function cd(dd) {
      let {
        profile: Jd
      } = dd;
      const {
        t: kd,
        selectedLanguage: pd
      } = (0, Rd.B)();
      let Nd = kd("homePage:profileUnknown");
      if (Jd.lastOnline) {
        const dd = (0, Rd.n)(pd.code, "homePage:profileTimeAgo");
        Nd = kd("homePage:profileTimeAgo", {
          time: (0, Wd.ib)(dd, Jd.lastOnline, Date.now())
        })
      }
      let Pd = kd("homePage:profileUnknown");
      return Jd.accountCreatedAt && (Pd = new Date(Jd.accountCreatedAt).toLocaleDateString(void 0, {
        year: "numeric",
        month: "short",
        day: "numeric"
      })), (0, Dd.jsxs)("div", {
        className: "PlayerProfileStats",
        children: [(0, Dd.jsx)(Ed, {
          icon: "hourglass",
          label: kd("homePage:profileTimePlayed"),
          value: (0, Xd.c)(Jd.totalPlayMinutes)
        }), (0, Dd.jsx)(Ed, {
          icon: "wifi",
          label: kd("homePage:profileLastOnline"),
          value: Nd
        }), (0, Dd.jsx)(Ed, {
          icon: "calendar",
          label: kd("homePage:profileJoined"),
          value: Pd
        })]
      })
    }

    function hd() {
      const {
        t: dd
      } = (0, Rd.B)(), Jd = (0, qd.useNavigatePreserveSearch)(), kd = (0, Qd.g)(), {
        playerName: ad,
        playerUrlName: Fd
      } = (0, Nd.y)(), Xd = (0, Nd.v)(), Ed = (0, Pd.e)(Xd.pathname), hd = Ed && ("urlId" in Ed ? `urlId:${Ed.urlId}` : `name:${Ed.lowerCaseName}`), rd = (0, pd.useRef)(hd);
      rd.current = hd;
      const {
        userContext: ud,
        isUserContextUpdating: td
      } = (0, Od.c)(), Vd = (0, pd.useRef)(null), zd = (0, pd.useRef)(null), Hd = (0, pd.useRef)(null), wd = (0, pd.useRef)(!1), Ad = (0, pd.useRef)((0, Wd.gc)(Td)), [dJ, JJ] = (0, pd.useState)((() => {
        const dd = Ed && sd.c.peek(ud, Ed);
        return dd ? {
          status: "loaded",
          profile: dd,
          playerKey: hd
        } : {
          status: "loading"
        }
      })), [kJ, pJ] = (0, pd.useState)(0);
      (0, pd.useEffect)(Bd.i, []), (0, pd.useEffect)((() => {
        jd.gameBridge.send("leaveGame", {
          reloadPath: null
        }), Sd.d.set({
          gameState: "landingPage",
          openEverythingMenuName: null,
          openInGameMenuName: null
        })
      }), [Xd.key]);
      const NJ = () => {
        const dd = (0, qd.getPreviousLocation)();
        null === dd || dd.startsWith("/play") ? (0, qd.navigateToHomePage)() : Jd(-1)
      };
      (0, yd.d)(NJ), (0, pd.useEffect)((() => {
        var dd;
        if (td) return;
        if (!Ed) return void JJ({
          status: "notFound",
          playerKey: hd
        });
        const Jd = "urlId" in Ed && (null === (dd = zd.current) || void 0 === dd ? void 0 : dd.urlId) === Ed.urlId && Hd.current === ud;
        if (Jd && wd.current) return;
        const kd = Jd ? null : sd.c.peek(ud, Ed);
        let pd = !1;
        const Nd = dd => "loaded" === dd.status && (dd.playerKey === hd || "urlId" in Ed && dd.profile.urlId === Ed.urlId);
        return kd ? (Hd.current = ud, wd.current = !1, JJ({
          status: "loaded",
          profile: kd,
          playerKey: hd
        }), sd.c.invalidate(Ed)) : JJ((dd => Nd(dd) ? dd : {
          status: "loading"
        })), async function(dd, Jd) {
          if ("lowerCaseName" in Jd && Jd.lowerCaseName.length > gd.h) return {
            status: "notFound"
          };
          try {
            return {
              status: "loaded",
              profile: await Kd.d.getPlayerProfile(dd, Jd, ld)
            }
          } catch (kd) {
            return (0, od.c)(kd) ? {
              status: "notFound"
            } : (console.error("Failed to load user profile", kd), {
              status: "failed"
            })
          }
        }(ud, Ed).then((dd => {
          pd || ("loaded" === dd.status && (Hd.current = ud, wd.current = !0), JJ((Jd => "failed" === dd.status && Nd(Jd) ? Jd : {
            ...dd,
            playerKey: hd
          })))
        })), () => {
          pd = !0
        }
      }), [td, hd, ud, kJ]);
      const WJ = "loading" === dJ.status || dJ.playerKey === hd || "loaded" === dJ.status && !!Ed && "urlId" in Ed && dJ.profile.urlId === Ed.urlId ? dJ : {
          status: "loading"
        },
        PJ = "loaded" === WJ.status ? WJ.profile : null,
        ZJ = "loading" === WJ.status ? null : function(dd) {
          if ("loaded" === dd.status) {
            const {
              profile: Jd
            } = dd;
            return (0, Cd.P)({
              urlId: Jd.urlId,
              name: Jd.player.name,
              ranks: Jd.player.ranks,
              socialLinks: Jd.socialLinks
            })
          }
          return "notFound" === dd.status ? (0, Cd.V)() : null
        }(WJ),
        gJ = null !== PJ && void 0 !== PJ && PJ.urlId ? (0, Pd.h)({
          urlId: PJ.urlId,
          name: PJ.player.name
        }) : null;
      (0, Ld.e)(gJ);
      const CJ = null !== PJ && void 0 !== PJ && PJ.player.cosmetics.profileEffect ? Md.c[PJ.player.cosmetics.profileEffect] : void 0,
        KJ = null !== PJ && !td && ud.getPlayerName().toLowerCase() === PJ.player.name.toLowerCase(),
        oJ = (0, fd.e)(null === PJ || void 0 === PJ ? void 0 : PJ.player.name),
        lJ = KJ && ud.playerHasRank("youtuber");
      zd.current = PJ;
      const QJ = (0, pd.useCallback)((() => {
          Ed && (sd.c.invalidate(Ed), sd.c.get(ud, Ed).then((dd => {
            rd.current === hd && (wd.current = !0, JJ({
              status: "loaded",
              profile: dd,
              playerKey: hd
            }))
          })).catch((dd => {
            console.error("Failed to refresh user profile", dd)
          })))
        }), [hd, ud]),
        LJ = (0, pd.useCallback)((() => {
          var dd;
          const Jd = zd.current;
          return !(!Jd || null === (dd = Vd.current) || void 0 === dd || !dd.isReady()) && (Vd.current.setAllCosmetics(Jd.player.cosmetics), !0)
        }), []);
      return (0, pd.useEffect)((() => {
        if (!PJ) return;
        let dd, Jd = !1;
        const kd = () => {
          Jd || LJ() || (dd = setTimeout(kd, 100))
        };
        return kd(), () => {
          Jd = !0, clearTimeout(dd)
        }
      }), [PJ, LJ]), (0, Dd.jsxs)("div", {
        className: Yd()("PlayerProfile", {
          PlayerProfilePortrait: kd
        }),
        children: [ZJ && (0, Dd.jsx)(Zd.e, {
          meta: ZJ
        }), (0, Dd.jsxs)("div", {
          className: "PlayerProfileBackgroundContainer",
          children: [CJ && (0, Dd.jsx)(CJ, {}), !CJ && (0, Dd.jsx)("div", {
            className: "PlayerProfileBackground",
            style: {
              backgroundImage: `url(${Ad.current})`
            }
          })]
        }), (0, Dd.jsxs)("div", {
          className: "PlayerProfileHeader",
          children: [(0, Dd.jsx)(xd.b, {
            onClick: NJ,
            children: dd("general:back")
          }), PJ && !td && !KJ && Ud.featureFlags.useSocialFeatures && (0, Dd.jsx)("div", {
            className: "PlayerProfileExclusionActions",
            children: (0, Dd.jsx)(nd.d, {
              playerName: PJ.player.name,
              className: "SmallTextLight"
            })
          })]
        }), "loading" === WJ.status && (0, Dd.jsx)("div", {
          className: "PlayerProfileCentredMessage",
          children: (0, Dd.jsx)(vd.b, {})
        }), ("notFound" === WJ.status || "failed" === WJ.status) && (0, Dd.jsxs)("div", {
          className: "PlayerProfileCentredMessage PlayerProfileError",
          children: [(0, Dd.jsx)(md.e, {
            name: "face-dizzy"
          }), (0, Dd.jsx)("div", {
            className: "PlayerProfileErrorText",
            children: "notFound" === WJ.status ? dd("socialBar:playerNotFound", {
              playerName: null !== Fd && void 0 !== Fd ? Fd : ad
            }) : dd("playerProfile:loadFailed")
          }), "failed" === WJ.status && (0, Dd.jsx)(xd.d, {
            onClick: () => {
              pJ((dd => dd + 1))
            },
            children: dd("general:tryAgain")
          })]
        }), PJ && (0, Dd.jsxs)("div", {
          className: "PlayerProfileContent",
          children: [(0, Dd.jsxs)("div", {
            className: "PlayerProfileLeft",
            children: [(0, Dd.jsx)("div", {
              className: "PlayerProfileName FullyFancyText",
              children: (0, Dd.jsx)(ed.c, {
                text: (0, Id.x)(PJ.player.ranks, PJ.player.name, PJ.player.nameColour),
                friendBadgeFor: oJ ? PJ.player.name : void 0
              })
            }), (0, Dd.jsx)("div", {
              className: "PlayerProfileModel",
              children: (0, Dd.jsx)(pd.Suspense, {
                fallback: (0, Dd.jsx)("div", {
                  className: "PlayerProfileModelLoading",
                  children: (0, Dd.jsx)(vd.b, {})
                }),
                children: (0, Dd.jsx)(Bd.e, {
                  ref: Vd,
                  onReady: () => {
                    LJ()
                  }
                })
              })
            })]
          }), (0, Dd.jsxs)("div", {
            className: "PlayerProfileRight",
            children: [(0, Dd.jsx)(cd, {
              profile: PJ
            }), (PJ.socialLinks.length > 0 || lJ) && (0, Dd.jsx)(bd.b, {
              socialLinks: PJ.socialLinks,
              editable: lJ,
              userContext: ud,
              onLinksUpdated: QJ
            }), (0, Dd.jsxs)("div", {
              className: "PlayerProfileGames",
              children: [(0, Dd.jsx)("div", {
                className: "PlayerProfileGamesTitle SmallTextBold",
                children: dd("homePage:profileReleasedGames")
              }), 0 === PJ.releasedGames.length && (0, Dd.jsx)("div", {
                className: "PlayerProfileNoGames",
                children: dd("homePage:profileNoReleasedGames")
              }), PJ.releasedGames.length > 0 && (0, Dd.jsx)("div", {
                className: "PlayerProfileGamesGrid",
                children: PJ.releasedGames.map((dd => (0, Dd.jsx)(Gd.h, {
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
  4770: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => ed
    });
    var pd = kd(1044),
      Nd = kd.n(pd),
      Wd = kd(4498),
      Pd = kd(1211),
      Zd = kd(1059),
      gd = kd(1461),
      Cd = kd(1520),
      Kd = kd(1371),
      od = kd(2418),
      ld = kd(1103);
    const Qd = {
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

    function Ld(dd) {
      let {
        platform: Jd
      } = dd;
      const kd = "youtube" === Jd;
      return (0, ld.jsxs)("span", {
        className: Nd()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: kd
        }),
        children: [kd && (0, ld.jsx)(od.d, {
          variant: "white"
        }), !kd && (0, ld.jsx)(Zd.e, {
          name: Qd[Jd].icon,
          kit: "brands"
        })]
      })
    }

    function Od(dd) {
      let {
        platform: Jd,
        link: kd,
        editable: pd,
        userContext: Nd,
        onLinksUpdated: od
      } = dd;
      const {
        t: Od
      } = (0, Pd.B)(), ed = Qd[Jd];
      if (!kd && !pd) return null;

      function Rd() {
        var dd;
        if (!Nd || !od) return;
        Kd.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: ed.name
            }
          },
          prefixText: Wd.z[Jd],
          placeholderText: "playBloxd",
          initialValue: null !== (dd = null === kd || void 0 === kd ? void 0 : kd.handle) && void 0 !== dd ? dd : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: kd ? "general:remove" : void 0
        }).getResult().then((async dd => {
          if ("notificationTornDown" !== dd && null !== dd) try {
            "submit" === dd.type ? await Cd.d.setSocialLink(Nd, Jd, dd.value) : await Cd.d.clearSocialLink(Nd, Jd), od()
          } catch (kd) {
            console.error("Failed to update social link", kd), Kd.NotificationProvider.showAlertPopup({
              title: kd.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (kd) {
        const dd = `@${kd.handle}`;
        return (0, ld.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: ed.color
          },
          href: kd.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, ld.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, ld.jsx)(Ld, {
              platform: Jd
            }), (0, ld.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, ld.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: dd
              })
            })]
          }), pd && (0, ld.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, gd.P)({
              stopPropagation: !0
            }),
            onClick: dd => {
              dd.stopPropagation(), dd.preventDefault(), Rd()
            },
            children: (0, ld.jsx)(Zd.e, {
              name: "pen-to-square"
            })
          }), !pd && (0, ld.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, ld.jsx)(Zd.e, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, ld.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: ed.color
        },
        ...(0, gd.P)(),
        onClick: () => {
          Rd()
        },
        children: [(0, ld.jsx)(Ld, {
          platform: Jd
        }), (0, ld.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, ld.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: ed.name
          }), (0, ld.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: Od("homePage:profileSocialLinkAdd")
          })]
        }), (0, ld.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, ld.jsx)(Zd.e, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function ed(dd) {
      let {
        socialLinks: Jd,
        editable: kd = !1,
        userContext: pd,
        onLinksUpdated: Nd
      } = dd;
      if (!kd && 0 === Jd.length) return null;
      const Pd = new Map(Jd.map((dd => [dd.platform, dd]))),
        Zd = kd ? Wd.v : Jd.map((dd => dd.platform));
      return (0, ld.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, ld.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: Zd.map((dd => (0, ld.jsx)(Od, {
            platform: dd,
            link: Pd.get(dd),
            editable: kd,
            userContext: pd,
            onLinksUpdated: Nd
          }, dd)))
        })
      })
    }
  },
  4761: dd => {
    dd.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGOws7P7D8Kmpqb/NTU1wTQymwGbAhANwwzIOmAYxQRkCXNzczBGtgrFBGQFKFZgsxtuAi67YY5HMQGbAgCIxWSBYHJzHAAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);