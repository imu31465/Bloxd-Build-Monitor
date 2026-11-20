export const id = 96;
export const ids = [96];
export const modules = {
  4642: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      default: () => Eb
    });
    var Bb = hb(49),
      Ob = hb(1431),
      Gb = hb(314),
      Ub = hb(1131),
      Lb = hb(1515),
      Yb = hb(1166),
      Sb = hb(1447),
      ab = hb(1398),
      Hb = hb(2491);
    const wb = {
      retries: 2,
      minTimeout: 2e3
    };
    var Zb = hb(1023),
      Xb = hb(1506),
      pb = hb(1029),
      ob = hb(1789),
      Ab = hb(1095),
      lb = hb(1124),
      Kb = hb(3268),
      Wb = hb(1242),
      Cb = hb(1357),
      db = hb(1415),
      rb = hb(2432),
      jb = hb(2444),
      nb = hb(4649),
      Db = hb(2022),
      xb = hb(958),
      zb = hb.n(xb),
      gb = hb(966),
      ib = hb(4653),
      vb = hb(13),
      tb = hb(1811),
      Jb = hb(3425),
      eb = hb(1910),
      Nb = hb(3375),
      sb = hb(86),
      Mb = hb(4318),
      mb = hb(1007);
    const Ib = [nb];

    function Pb(bb) {
      let {
        icon: ub,
        label: hb,
        value: Bb
      } = bb;
      return (0, mb.jsxs)("div", {
        className: "PlayerProfileStat",
        children: [(0, mb.jsx)(gb.e, {
          name: ub,
          className: "PlayerProfileStatIcon"
        }), (0, mb.jsxs)("div", {
          className: "PlayerProfileStatText",
          children: [(0, mb.jsx)("div", {
            className: "PlayerProfileStatLabel SmallTextLight",
            children: hb
          }), (0, mb.jsx)("div", {
            className: "PlayerProfileStatValue",
            children: Bb
          })]
        })]
      })
    }

    function qb(bb) {
      let {
        profile: ub
      } = bb;
      const {
        t: hb,
        selectedLanguage: Bb
      } = (0, Ab.K)();
      let Ob = hb("homePage:profileUnknown");
      if (ub.lastOnline) {
        const bb = (0, Ab.o)(Bb.code, "homePage:profileTimeAgo");
        Ob = hb("homePage:profileTimeAgo", {
          time: (0, Gb.fb)(bb, ub.lastOnline, Date.now())
        })
      }
      let Ub = hb("homePage:profileUnknown");
      return ub.accountCreatedAt && (Ub = new Date(ub.accountCreatedAt).toLocaleDateString(void 0, {
        year: "numeric",
        month: "short",
        day: "numeric"
      })), (0, mb.jsxs)("div", {
        className: "PlayerProfileStats",
        children: [(0, mb.jsx)(Pb, {
          icon: "hourglass",
          label: hb("homePage:profileTimePlayed"),
          value: (0, Jb.c)(ub.totalPlayMinutes)
        }), (0, mb.jsx)(Pb, {
          icon: "wifi",
          label: hb("homePage:profileLastOnline"),
          value: Ob
        }), (0, mb.jsx)(Pb, {
          icon: "calendar",
          label: hb("homePage:profileJoined"),
          value: Ub
        })]
      })
    }

    function Eb() {
      const {
        t: bb
      } = (0, Ab.K)(), ub = (0, db.useNavigatePreserveSearch)(), hb = (0, Zb.k)(), {
        playerName: nb,
        playerUrlName: xb
      } = (0, Ob.F)(), Jb = (0, Ob.x)(), Pb = (0, Ub.c)(Jb.pathname), Eb = Pb && ("urlId" in Pb ? `urlId:${Pb.urlId}` : `name:${Pb.lowerCaseName}`), yb = (0, Bb.useRef)(Eb);
      yb.current = Eb;
      const {
        userContext: Vb,
        isUserContextUpdating: Fb
      } = (0, pb.d)(), fb = (0, Bb.useRef)(null), kb = (0, Bb.useRef)(null), Tb = (0, Bb.useRef)(null), cb = (0, Bb.useRef)(!1), Qb = (0, Bb.useRef)((0, Gb.ac)(Ib)), [Rb, bu] = (0, Bb.useState)((() => {
        const bb = Pb && jb.b.peek(Vb, Pb);
        return bb ? {
          status: "loaded",
          profile: bb,
          playerKey: Eb
        } : {
          status: "loading"
        }
      })), [uu, hu] = (0, Bb.useState)(0);
      (0, Bb.useEffect)(rb.f, []), (0, Bb.useEffect)((() => {
        tb.gameBridge.send("leaveGame", {
          reloadPath: null
        }), vb.d.set({
          gameState: "landingPage",
          openEverythingMenuName: null,
          openInGameMenuName: null
        })
      }), [Jb.key]);
      const Bu = () => {
        const bb = (0, db.getPreviousLocation)();
        null === bb || bb.startsWith("/play") ? (0, db.navigateToHomePage)() : ub(-1)
      };
      (0, Mb.c)(Bu), (0, Bb.useEffect)((() => {
        var bb;
        if (Fb) return;
        if (!Pb) return void bu({
          status: "notFound",
          playerKey: Eb
        });
        const ub = "urlId" in Pb && (null === (bb = kb.current) || void 0 === bb ? void 0 : bb.urlId) === Pb.urlId && Tb.current === Vb;
        if (ub && cb.current) return;
        const hb = ub ? null : jb.b.peek(Vb, Pb);
        let Bb = !1;
        const Ob = bb => "loaded" === bb.status && (bb.playerKey === Eb || "urlId" in Pb && bb.profile.urlId === Pb.urlId);
        return hb ? (Tb.current = Vb, cb.current = !1, bu({
          status: "loaded",
          profile: hb,
          playerKey: Eb
        }), jb.b.invalidate(Pb)) : bu((bb => Ob(bb) ? bb : {
          status: "loading"
        })), async function(bb, ub) {
          if ("lowerCaseName" in ub && ub.lowerCaseName.length > Yb.l) return {
            status: "notFound"
          };
          try {
            return {
              status: "loaded",
              profile: await ab.e.getPlayerProfile(bb, ub, wb)
            }
          } catch (hb) {
            return (0, Hb.c)(hb) ? {
              status: "notFound"
            } : (console.error("Failed to load user profile", hb), {
              status: "failed"
            })
          }
        }(Vb, Pb).then((bb => {
          Bb || ("loaded" === bb.status && (Tb.current = Vb, cb.current = !0), bu((ub => "failed" === bb.status && Ob(ub) ? ub : {
            ...bb,
            playerKey: Eb
          })))
        })), () => {
          Bb = !0
        }
      }), [Fb, Eb, Vb, uu]);
      const Ou = "loading" === Rb.status || Rb.playerKey === Eb || "loaded" === Rb.status && !!Pb && "urlId" in Pb && Rb.profile.urlId === Pb.urlId ? Rb : {
          status: "loading"
        },
        Gu = "loaded" === Ou.status ? Ou.profile : null,
        Uu = "loading" === Ou.status ? null : function(bb) {
          if ("loaded" === bb.status) {
            const {
              profile: ub
            } = bb;
            return (0, Sb.G)({
              urlId: ub.urlId,
              name: ub.player.name,
              ranks: ub.player.ranks,
              socialLinks: ub.socialLinks
            })
          }
          return "notFound" === bb.status ? (0, Sb.Q)() : null
        }(Ou),
        Lu = null !== Gu && void 0 !== Gu && Gu.urlId ? (0, Ub.g)({
          urlId: Gu.urlId,
          name: Gu.player.name
        }) : null;
      (0, Xb.e)(Lu);
      const Yu = null !== Gu && void 0 !== Gu && Gu.player.cosmetics.profileEffect ? Db.g[Gu.player.cosmetics.profileEffect] : void 0,
        Su = null !== Gu && !Fb && Vb.getPlayerName().toLowerCase() === Gu.player.name.toLowerCase(),
        au = (0, eb.e)(null === Gu || void 0 === Gu ? void 0 : Gu.player.name),
        Hu = Su && Vb.playerHasRank("youtuber");
      kb.current = Gu;
      const wu = (0, Bb.useCallback)((() => {
          Pb && (jb.b.invalidate(Pb), jb.b.get(Vb, Pb).then((bb => {
            yb.current === Eb && (cb.current = !0, bu({
              status: "loaded",
              profile: bb,
              playerKey: Eb
            }))
          })).catch((bb => {
            console.error("Failed to refresh user profile", bb)
          })))
        }), [Eb, Vb]),
        Zu = (0, Bb.useCallback)((() => {
          var bb;
          const ub = kb.current;
          return !(!ub || null === (bb = fb.current) || void 0 === bb || !bb.isReady()) && (fb.current.setAllCosmetics(ub.player.cosmetics), !0)
        }), []);
      return (0, Bb.useEffect)((() => {
        if (!Gu) return;
        let bb, ub = !1;
        const hb = () => {
          ub || Zu() || (bb = setTimeout(hb, 100))
        };
        return hb(), () => {
          ub = !0, clearTimeout(bb)
        }
      }), [Gu, Zu]), (0, mb.jsxs)("div", {
        className: zb()("PlayerProfile", {
          PlayerProfilePortrait: hb
        }),
        children: [Uu && (0, mb.jsx)(Lb.c, {
          meta: Uu
        }), (0, mb.jsxs)("div", {
          className: "PlayerProfileBackgroundContainer",
          children: [Yu && (0, mb.jsx)(Yu, {}), !Yu && (0, mb.jsx)("div", {
            className: "PlayerProfileBackground",
            style: {
              backgroundImage: `url(${Qb.current})`
            }
          })]
        }), (0, mb.jsxs)("div", {
          className: "PlayerProfileHeader",
          children: [(0, mb.jsx)(Cb.d, {
            onClick: Bu,
            children: bb("general:back")
          }), Gu && !Fb && !Su && sb.featureFlags.useSocialFeatures && (0, mb.jsx)("div", {
            className: "PlayerProfileExclusionActions",
            children: (0, mb.jsx)(Nb.c, {
              playerName: Gu.player.name,
              className: "SmallTextLight"
            })
          })]
        }), "loading" === Ou.status && (0, mb.jsx)("div", {
          className: "PlayerProfileCentredMessage",
          children: (0, mb.jsx)(Wb.c, {})
        }), ("notFound" === Ou.status || "failed" === Ou.status) && (0, mb.jsxs)("div", {
          className: "PlayerProfileCentredMessage PlayerProfileError",
          children: [(0, mb.jsx)(gb.e, {
            name: "face-dizzy"
          }), (0, mb.jsx)("div", {
            className: "PlayerProfileErrorText",
            children: "notFound" === Ou.status ? bb("socialBar:playerNotFound", {
              playerName: null !== xb && void 0 !== xb ? xb : nb
            }) : bb("playerProfile:loadFailed")
          }), "failed" === Ou.status && (0, mb.jsx)(Cb.e, {
            onClick: () => {
              hu((bb => bb + 1))
            },
            children: bb("general:tryAgain")
          })]
        }), Gu && (0, mb.jsxs)("div", {
          className: "PlayerProfileContent",
          children: [(0, mb.jsxs)("div", {
            className: "PlayerProfileLeft",
            children: [(0, mb.jsx)("div", {
              className: "PlayerProfileName FullyFancyText",
              children: (0, mb.jsx)(ob.c, {
                text: (0, lb.D)(Gu.player.ranks, Gu.player.name, Gu.player.nameColour),
                friendBadgeFor: au ? Gu.player.name : void 0
              })
            }), (0, mb.jsx)("div", {
              className: "PlayerProfileModel",
              children: (0, mb.jsx)(Bb.Suspense, {
                fallback: (0, mb.jsx)("div", {
                  className: "PlayerProfileModelLoading",
                  children: (0, mb.jsx)(Wb.c, {})
                }),
                children: (0, mb.jsx)(rb.c, {
                  ref: fb,
                  onReady: () => {
                    Zu()
                  }
                })
              })
            })]
          }), (0, mb.jsxs)("div", {
            className: "PlayerProfileRight",
            children: [(0, mb.jsx)(qb, {
              profile: Gu
            }), (Gu.socialLinks.length > 0 || Hu) && (0, mb.jsx)(ib.e, {
              socialLinks: Gu.socialLinks,
              editable: Hu,
              userContext: Vb,
              onLinksUpdated: wu
            }), (0, mb.jsxs)("div", {
              className: "PlayerProfileGames",
              children: [(0, mb.jsx)("div", {
                className: "PlayerProfileGamesTitle SmallTextBold",
                children: bb("homePage:profileReleasedGames")
              }), 0 === Gu.releasedGames.length && (0, mb.jsx)("div", {
                className: "PlayerProfileNoGames",
                children: bb("homePage:profileNoReleasedGames")
              }), Gu.releasedGames.length > 0 && (0, mb.jsx)("div", {
                className: "PlayerProfileGamesGrid",
                children: Gu.releasedGames.map((bb => (0, mb.jsx)(Kb.e, {
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
  4653: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => ob
    });
    var Bb = hb(958),
      Ob = hb.n(Bb),
      Gb = hb(4409),
      Ub = hb(1095),
      Lb = hb(966),
      Yb = hb(1357),
      Sb = hb(1398),
      ab = hb(1249),
      Hb = hb(2378),
      wb = hb(1007);
    const Zb = {
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

    function Xb(bb) {
      let {
        platform: ub
      } = bb;
      const hb = "youtube" === ub;
      return (0, wb.jsxs)("span", {
        className: Ob()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: hb
        }),
        children: [hb && (0, wb.jsx)(Hb.c, {
          variant: "white"
        }), !hb && (0, wb.jsx)(Lb.e, {
          name: Zb[ub].icon,
          kit: "brands"
        })]
      })
    }

    function pb(bb) {
      let {
        platform: ub,
        link: hb,
        editable: Bb,
        userContext: Ob,
        onLinksUpdated: Hb
      } = bb;
      const {
        t: pb
      } = (0, Ub.K)(), ob = Zb[ub];
      if (!hb && !Bb) return null;

      function Ab() {
        var bb;
        if (!Ob || !Hb) return;
        ab.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: ob.name
            }
          },
          prefixText: Gb.u[ub],
          placeholderText: "playBloxd",
          initialValue: null !== (bb = null === hb || void 0 === hb ? void 0 : hb.handle) && void 0 !== bb ? bb : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: hb ? "general:remove" : void 0
        }).getResult().then((async bb => {
          if ("notificationTornDown" !== bb && null !== bb) try {
            "submit" === bb.type ? await Sb.e.setSocialLink(Ob, ub, bb.value) : await Sb.e.clearSocialLink(Ob, ub), Hb()
          } catch (hb) {
            console.error("Failed to update social link", hb), ab.NotificationProvider.showAlertPopup({
              title: hb.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (hb) {
        const bb = `@${hb.handle}`;
        return (0, wb.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: ob.color
          },
          href: hb.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, wb.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, wb.jsx)(Xb, {
              platform: ub
            }), (0, wb.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, wb.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: bb
              })
            })]
          }), Bb && (0, wb.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, Yb.V)({
              stopPropagation: !0
            }),
            onClick: bb => {
              bb.stopPropagation(), bb.preventDefault(), Ab()
            },
            children: (0, wb.jsx)(Lb.e, {
              name: "pen-to-square"
            })
          }), !Bb && (0, wb.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, wb.jsx)(Lb.e, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, wb.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: ob.color
        },
        ...(0, Yb.V)(),
        onClick: () => {
          Ab()
        },
        children: [(0, wb.jsx)(Xb, {
          platform: ub
        }), (0, wb.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, wb.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: ob.name
          }), (0, wb.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: pb("homePage:profileSocialLinkAdd")
          })]
        }), (0, wb.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, wb.jsx)(Lb.e, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function ob(bb) {
      let {
        socialLinks: ub,
        editable: hb = !1,
        userContext: Bb,
        onLinksUpdated: Ob
      } = bb;
      if (!hb && 0 === ub.length) return null;
      const Ub = new Map(ub.map((bb => [bb.platform, bb]))),
        Lb = hb ? Gb.q : ub.map((bb => bb.platform));
      return (0, wb.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, wb.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: Lb.map((bb => (0, wb.jsx)(pb, {
            platform: bb,
            link: Ub.get(bb),
            editable: hb,
            userContext: Bb,
            onLinksUpdated: Ob
          }, bb)))
        })
      })
    }
  },
  4649: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGOws7P7D8Kmpqb/NTU1wTQymwGbAhANwwzIOmAYxQRkCXNzczBGtgrFBGQFKFZgsxtuAi67YY5HMQGbAgCIxWSBYHJzHAAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);