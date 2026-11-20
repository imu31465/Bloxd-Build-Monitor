export const id = 95;
export const ids = [95];
export const modules = {
  4559: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      default: () => wb
    });
    var Ab = Ub(52),
      Mb = Ub(1446),
      Tb = Ub(325),
      Eb = Ub(1180),
      Yb = Ub(1527),
      Bb = Ub(1208),
      eb = Ub(1464),
      vb = Ub(1413),
      Lb = Ub(2467);
    const Pb = {
      retries: 2,
      minTimeout: 2e3
    };
    var Xb = Ub(1047),
      jb = Ub(1520),
      Rb = Ub(1060),
      kb = Ub(1794),
      yb = Ub(1134),
      Zb = Ub(1162),
      Db = Ub(3161),
      zb = Ub(1254),
      xb = Ub(1352),
      ib = Ub(1433),
      fb = Ub(2417),
      mb = Ub(2433),
      pb = Ub(4567),
      Nb = Ub(2039),
      Wb = Ub(984),
      Hb = Ub.n(Wb),
      Ib = Ub(990),
      db = Ub(4575),
      Fb = Ub(19),
      hb = Ub(1824),
      Gb = Ub(3309),
      Qb = Ub(1924),
      qb = Ub(3259),
      ub = Ub(101),
      rb = Ub(4234),
      Kb = Ub(1023);
    const ob = [pb];

    function lb(bb) {
      let {
        icon: ab,
        label: Ub,
        value: Ab
      } = bb;
      return (0, Kb.jsxs)("div", {
        className: "PlayerProfileStat",
        children: [(0, Kb.jsx)(Ib.e, {
          name: ab,
          className: "PlayerProfileStatIcon"
        }), (0, Kb.jsxs)("div", {
          className: "PlayerProfileStatText",
          children: [(0, Kb.jsx)("div", {
            className: "PlayerProfileStatLabel SmallTextLight",
            children: Ub
          }), (0, Kb.jsx)("div", {
            className: "PlayerProfileStatValue",
            children: Ab
          })]
        })]
      })
    }

    function tb(bb) {
      let {
        profile: ab
      } = bb;
      const {
        t: Ub,
        selectedLanguage: Ab
      } = (0, yb.A)();
      let Mb = Ub("homePage:profileUnknown");
      if (ab.lastOnline) {
        const bb = (0, yb.l)(Ab.code, "homePage:profileTimeAgo");
        Mb = Ub("homePage:profileTimeAgo", {
          time: (0, Tb.$)(bb, ab.lastOnline, Date.now())
        })
      }
      let Eb = Ub("homePage:profileUnknown");
      return ab.accountCreatedAt && (Eb = new Date(ab.accountCreatedAt).toLocaleDateString(void 0, {
        year: "numeric",
        month: "short",
        day: "numeric"
      })), (0, Kb.jsxs)("div", {
        className: "PlayerProfileStats",
        children: [(0, Kb.jsx)(lb, {
          icon: "hourglass",
          label: Ub("homePage:profileTimePlayed"),
          value: (0, Gb.b)(ab.totalPlayMinutes)
        }), (0, Kb.jsx)(lb, {
          icon: "wifi",
          label: Ub("homePage:profileLastOnline"),
          value: Mb
        }), (0, Kb.jsx)(lb, {
          icon: "calendar",
          label: Ub("homePage:profileJoined"),
          value: Eb
        })]
      })
    }

    function wb() {
      const {
        t: bb
      } = (0, yb.A)(), ab = (0, ib.useNavigatePreserveSearch)(), Ub = (0, Xb.k)(), {
        playerName: pb,
        playerUrlName: Wb
      } = (0, Mb.F)(), Gb = (0, Mb.v)(), lb = (0, Eb.e)(Gb.pathname), wb = lb && ("urlId" in lb ? `urlId:${lb.urlId}` : `name:${lb.lowerCaseName}`), sb = (0, Ab.useRef)(wb);
      sb.current = wb;
      const {
        userContext: gb,
        isUserContextUpdating: Cb
      } = (0, Rb.c)(), Vb = (0, Ab.useRef)(null), Ob = (0, Ab.useRef)(null), cb = (0, Ab.useRef)(null), Jb = (0, Ab.useRef)(!1), nb = (0, Ab.useRef)((0, Tb.Ob)(ob)), [Sb, ba] = (0, Ab.useState)((() => {
        const bb = lb && mb.c.peek(gb, lb);
        return bb ? {
          status: "loaded",
          profile: bb,
          playerKey: wb
        } : {
          status: "loading"
        }
      })), [aa, Ua] = (0, Ab.useState)(0);
      (0, Ab.useEffect)(fb.f, []), (0, Ab.useEffect)((() => {
        hb.gameBridge.send("leaveGame", {
          reloadPath: null
        }), Fb.c.set({
          gameState: "landingPage",
          openEverythingMenuName: null,
          openInGameMenuName: null
        })
      }), [Gb.key]);
      const Aa = () => {
        const bb = (0, ib.getPreviousLocation)();
        null === bb || bb.startsWith("/play") ? (0, ib.navigateToHomePage)() : ab(-1)
      };
      (0, rb.c)(Aa), (0, Ab.useEffect)((() => {
        var bb;
        if (Cb) return;
        if (!lb) return void ba({
          status: "notFound",
          playerKey: wb
        });
        const ab = "urlId" in lb && (null === (bb = Ob.current) || void 0 === bb ? void 0 : bb.urlId) === lb.urlId && cb.current === gb;
        if (ab && Jb.current) return;
        const Ub = ab ? null : mb.c.peek(gb, lb);
        let Ab = !1;
        const Mb = bb => "loaded" === bb.status && (bb.playerKey === wb || "urlId" in lb && bb.profile.urlId === lb.urlId);
        return Ub ? (cb.current = gb, Jb.current = !1, ba({
          status: "loaded",
          profile: Ub,
          playerKey: wb
        }), mb.c.invalidate(lb)) : ba((bb => Mb(bb) ? bb : {
          status: "loading"
        })), async function(bb, ab) {
          if ("lowerCaseName" in ab && ab.lowerCaseName.length > Bb.i) return {
            status: "notFound"
          };
          try {
            return {
              status: "loaded",
              profile: await vb.b.getPlayerProfile(bb, ab, Pb)
            }
          } catch (Ub) {
            return (0, Lb.b)(Ub) ? {
              status: "notFound"
            } : (console.error("Failed to load user profile", Ub), {
              status: "failed"
            })
          }
        }(gb, lb).then((bb => {
          Ab || ("loaded" === bb.status && (cb.current = gb, Jb.current = !0), ba((ab => "failed" === bb.status && Mb(ab) ? ab : {
            ...bb,
            playerKey: wb
          })))
        })), () => {
          Ab = !0
        }
      }), [Cb, wb, gb, aa]);
      const Ma = "loading" === Sb.status || Sb.playerKey === wb || "loaded" === Sb.status && !!lb && "urlId" in lb && Sb.profile.urlId === lb.urlId ? Sb : {
          status: "loading"
        },
        Ta = "loaded" === Ma.status ? Ma.profile : null,
        Ea = "loading" === Ma.status ? null : function(bb) {
          if ("loaded" === bb.status) {
            const {
              profile: ab
            } = bb;
            return (0, eb.N)({
              urlId: ab.urlId,
              name: ab.player.name,
              ranks: ab.player.ranks,
              socialLinks: ab.socialLinks
            })
          }
          return "notFound" === bb.status ? (0, eb.S)() : null
        }(Ma),
        Ya = null !== Ta && void 0 !== Ta && Ta.urlId ? (0, Eb.f)({
          urlId: Ta.urlId,
          name: Ta.player.name
        }) : null;
      (0, jb.d)(Ya);
      const Ba = null !== Ta && void 0 !== Ta && Ta.player.cosmetics.profileEffect ? Nb.f[Ta.player.cosmetics.profileEffect] : void 0,
        ea = null !== Ta && !Cb && gb.getPlayerName().toLowerCase() === Ta.player.name.toLowerCase(),
        va = (0, Qb.c)(null === Ta || void 0 === Ta ? void 0 : Ta.player.name),
        La = ea && gb.playerHasRank("youtuber");
      Ob.current = Ta;
      const Pa = (0, Ab.useCallback)((() => {
          lb && (mb.c.invalidate(lb), mb.c.get(gb, lb).then((bb => {
            sb.current === wb && (Jb.current = !0, ba({
              status: "loaded",
              profile: bb,
              playerKey: wb
            }))
          })).catch((bb => {
            console.error("Failed to refresh user profile", bb)
          })))
        }), [wb, gb]),
        Xa = (0, Ab.useCallback)((() => {
          var bb;
          const ab = Ob.current;
          return !(!ab || null === (bb = Vb.current) || void 0 === bb || !bb.isReady()) && (Vb.current.setAllCosmetics(ab.player.cosmetics), !0)
        }), []);
      return (0, Ab.useEffect)((() => {
        if (!Ta) return;
        let bb, ab = !1;
        const Ub = () => {
          ab || Xa() || (bb = setTimeout(Ub, 100))
        };
        return Ub(), () => {
          ab = !0, clearTimeout(bb)
        }
      }), [Ta, Xa]), (0, Kb.jsxs)("div", {
        className: Hb()("PlayerProfile", {
          PlayerProfilePortrait: Ub
        }),
        children: [Ea && (0, Kb.jsx)(Yb.c, {
          meta: Ea
        }), (0, Kb.jsxs)("div", {
          className: "PlayerProfileBackgroundContainer",
          children: [Ba && (0, Kb.jsx)(Ba, {}), !Ba && (0, Kb.jsx)("div", {
            className: "PlayerProfileBackground",
            style: {
              backgroundImage: `url(${nb.current})`
            }
          })]
        }), (0, Kb.jsxs)("div", {
          className: "PlayerProfileHeader",
          children: [(0, Kb.jsx)(xb.e, {
            onClick: Aa,
            children: bb("general:back")
          }), Ta && !Cb && !ea && ub.featureFlags.useSocialFeatures && (0, Kb.jsx)("div", {
            className: "PlayerProfileExclusionActions",
            children: (0, Kb.jsx)(qb.d, {
              playerName: Ta.player.name,
              className: "SmallTextLight"
            })
          })]
        }), "loading" === Ma.status && (0, Kb.jsx)("div", {
          className: "PlayerProfileCentredMessage",
          children: (0, Kb.jsx)(zb.b, {})
        }), ("notFound" === Ma.status || "failed" === Ma.status) && (0, Kb.jsxs)("div", {
          className: "PlayerProfileCentredMessage PlayerProfileError",
          children: [(0, Kb.jsx)(Ib.e, {
            name: "face-dizzy"
          }), (0, Kb.jsx)("div", {
            className: "PlayerProfileErrorText",
            children: "notFound" === Ma.status ? bb("socialBar:playerNotFound", {
              playerName: null !== Wb && void 0 !== Wb ? Wb : pb
            }) : bb("playerProfile:loadFailed")
          }), "failed" === Ma.status && (0, Kb.jsx)(xb.g, {
            onClick: () => {
              Ua((bb => bb + 1))
            },
            children: bb("general:tryAgain")
          })]
        }), Ta && (0, Kb.jsxs)("div", {
          className: "PlayerProfileContent",
          children: [(0, Kb.jsxs)("div", {
            className: "PlayerProfileLeft",
            children: [(0, Kb.jsx)("div", {
              className: "PlayerProfileName FullyFancyText",
              children: (0, Kb.jsx)(kb.c, {
                text: (0, Zb.z)(Ta.player.ranks, Ta.player.name, Ta.player.nameColour),
                friendBadgeFor: va ? Ta.player.name : void 0
              })
            }), (0, Kb.jsx)("div", {
              className: "PlayerProfileModel",
              children: (0, Kb.jsx)(Ab.Suspense, {
                fallback: (0, Kb.jsx)("div", {
                  className: "PlayerProfileModelLoading",
                  children: (0, Kb.jsx)(zb.b, {})
                }),
                children: (0, Kb.jsx)(fb.c, {
                  ref: Vb,
                  onReady: () => {
                    Xa()
                  }
                })
              })
            })]
          }), (0, Kb.jsxs)("div", {
            className: "PlayerProfileRight",
            children: [(0, Kb.jsx)(tb, {
              profile: Ta
            }), (Ta.socialLinks.length > 0 || La) && (0, Kb.jsx)(db.b, {
              socialLinks: Ta.socialLinks,
              editable: La,
              userContext: gb,
              onLinksUpdated: Pa
            }), (0, Kb.jsxs)("div", {
              className: "PlayerProfileGames",
              children: [(0, Kb.jsx)("div", {
                className: "PlayerProfileGamesTitle SmallTextBold",
                children: bb("homePage:profileReleasedGames")
              }), 0 === Ta.releasedGames.length && (0, Kb.jsx)("div", {
                className: "PlayerProfileNoGames",
                children: bb("homePage:profileNoReleasedGames")
              }), Ta.releasedGames.length > 0 && (0, Kb.jsx)("div", {
                className: "PlayerProfileGamesGrid",
                children: Ta.releasedGames.map((bb => (0, Kb.jsx)(Db.f, {
                  source: {
                    type: "preview",
                    preview: bb
                  },
                  gameWidth: "100%",
                  useLongRatio: !0,
                  hideFavourites: !0,
                  entrySource: "other"
                }, bb.schematicId)))
              })]
            })]
          })]
        })]
      })
    }
  },
  4575: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => kb
    });
    var Ab = Ub(984),
      Mb = Ub.n(Ab),
      Tb = Ub(4329),
      Eb = Ub(1134),
      Yb = Ub(990),
      Bb = Ub(1352),
      eb = Ub(1413),
      vb = Ub(1260),
      Lb = Ub(2337),
      Pb = Ub(1023);
    const Xb = {
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

    function jb(bb) {
      let {
        platform: ab
      } = bb;
      const Ub = "youtube" === ab;
      return (0, Pb.jsxs)("span", {
        className: Mb()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: Ub
        }),
        children: [Ub && (0, Pb.jsx)(Lb.e, {
          variant: "white"
        }), !Ub && (0, Pb.jsx)(Yb.e, {
          name: Xb[ab].icon,
          kit: "brands"
        })]
      })
    }

    function Rb(bb) {
      let {
        platform: ab,
        link: Ub,
        editable: Ab,
        userContext: Mb,
        onLinksUpdated: Lb
      } = bb;
      const {
        t: Rb
      } = (0, Eb.A)(), kb = Xb[ab];
      if (!Ub && !Ab) return null;

      function yb() {
        var bb;
        if (!Mb || !Lb) return;
        vb.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: kb.name
            }
          },
          prefixText: Tb.z[ab],
          placeholderText: "playBloxd",
          initialValue: null !== (bb = null === Ub || void 0 === Ub ? void 0 : Ub.handle) && void 0 !== bb ? bb : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: Ub ? "general:remove" : void 0
        }).getResult().then((async bb => {
          if ("notificationTornDown" !== bb && null !== bb) try {
            "submit" === bb.type ? await eb.b.setSocialLink(Mb, ab, bb.value) : await eb.b.clearSocialLink(Mb, ab), Lb()
          } catch (Ub) {
            console.error("Failed to update social link", Ub), vb.NotificationProvider.showAlertPopup({
              title: Ub.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (Ub) {
        const bb = `@${Ub.handle}`;
        return (0, Pb.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: kb.color
          },
          href: Ub.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, Pb.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, Pb.jsx)(jb, {
              platform: ab
            }), (0, Pb.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, Pb.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: bb
              })
            })]
          }), Ab && (0, Pb.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, Bb.Q)({
              stopPropagation: !0
            }),
            onClick: bb => {
              bb.stopPropagation(), bb.preventDefault(), yb()
            },
            children: (0, Pb.jsx)(Yb.e, {
              name: "pen-to-square"
            })
          }), !Ab && (0, Pb.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, Pb.jsx)(Yb.e, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, Pb.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: kb.color
        },
        ...(0, Bb.Q)(),
        onClick: () => {
          yb()
        },
        children: [(0, Pb.jsx)(jb, {
          platform: ab
        }), (0, Pb.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, Pb.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: kb.name
          }), (0, Pb.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: Rb("homePage:profileSocialLinkAdd")
          })]
        }), (0, Pb.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, Pb.jsx)(Yb.e, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function kb(bb) {
      let {
        socialLinks: ab,
        editable: Ub = !1,
        userContext: Ab,
        onLinksUpdated: Mb
      } = bb;
      if (!Ub && 0 === ab.length) return null;
      const Eb = new Map(ab.map((bb => [bb.platform, bb]))),
        Yb = Ub ? Tb.v : ab.map((bb => bb.platform));
      return (0, Pb.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, Pb.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: Yb.map((bb => (0, Pb.jsx)(Rb, {
            platform: bb,
            link: Eb.get(bb),
            editable: Ub,
            userContext: Ab,
            onLinksUpdated: Mb
          }, bb)))
        })
      })
    }
  },
  4567: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGOws7P7D8Kmpqb/NTU1wTQymwGbAhANwwzIOmAYxQRkCXNzczBGtgrFBGQFKFZgsxtuAi67YY5HMQGbAgCIxWSBYHJzHAAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);