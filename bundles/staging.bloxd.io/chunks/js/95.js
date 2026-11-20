export const id = 95;
export const ids = [95];
export const modules = {
  4591: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      default: () => wb
    });
    var kb = sb(64),
      Wb = sb(1511),
      ab = sb(344),
      Tb = sb(1246),
      Ub = sb(1603),
      Ib = sb(1271),
      Hb = sb(1534),
      fb = sb(1474),
      Mb = sb(2510);
    const Xb = {
      retries: 2,
      minTimeout: 2e3
    };
    var nb = sb(1104),
      mb = sb(1599),
      lb = sb(1117),
      Qb = sb(1839),
      eb = sb(1197),
      Cb = sb(1235),
      Nb = sb(3263),
      Vb = sb(1327),
      Lb = sb(1431),
      ub = sb(1495),
      Yb = sb(2455),
      hb = sb(2464),
      Jb = sb(4598),
      gb = sb(2084),
      Bb = sb(1033),
      tb = sb.n(Bb),
      yb = sb(1039),
      Pb = sb(4600),
      Db = sb(19),
      Eb = sb(1870),
      ib = sb(3430),
      Ob = sb(1960),
      Gb = sb(3381),
      Kb = sb(117),
      Zb = sb(4293),
      zb = sb(1087);
    const qb = [Jb];

    function db(bb) {
      let {
        icon: cb,
        label: sb,
        value: kb
      } = bb;
      return (0, zb.jsxs)("div", {
        className: "PlayerProfileStat",
        children: [(0, zb.jsx)(yb.b, {
          name: cb,
          className: "PlayerProfileStatIcon"
        }), (0, zb.jsxs)("div", {
          className: "PlayerProfileStatText",
          children: [(0, zb.jsx)("div", {
            className: "PlayerProfileStatLabel SmallTextLight",
            children: sb
          }), (0, zb.jsx)("div", {
            className: "PlayerProfileStatValue",
            children: kb
          })]
        })]
      })
    }

    function Ab(bb) {
      let {
        profile: cb
      } = bb;
      const {
        t: sb,
        selectedLanguage: kb
      } = (0, eb.E)();
      let Wb = sb("homePage:profileUnknown");
      if (cb.lastOnline) {
        const bb = (0, eb.m)(kb.code, "homePage:profileTimeAgo");
        Wb = sb("homePage:profileTimeAgo", {
          time: (0, ab.db)(bb, cb.lastOnline, Date.now())
        })
      }
      let Tb = sb("homePage:profileUnknown");
      return cb.accountCreatedAt && (Tb = new Date(cb.accountCreatedAt).toLocaleDateString(void 0, {
        year: "numeric",
        month: "short",
        day: "numeric"
      })), (0, zb.jsxs)("div", {
        className: "PlayerProfileStats",
        children: [(0, zb.jsx)(db, {
          icon: "hourglass",
          label: sb("homePage:profileTimePlayed"),
          value: (0, ib.e)(cb.totalPlayMinutes)
        }), (0, zb.jsx)(db, {
          icon: "wifi",
          label: sb("homePage:profileLastOnline"),
          value: Wb
        }), (0, zb.jsx)(db, {
          icon: "calendar",
          label: sb("homePage:profileJoined"),
          value: Tb
        })]
      })
    }

    function wb() {
      const {
        t: bb
      } = (0, eb.E)(), cb = (0, ub.useNavigatePreserveSearch)(), sb = (0, nb.j)(), {
        playerName: Jb,
        playerUrlName: Bb
      } = (0, Wb.D)(), ib = (0, Wb.r)(), db = (0, Tb.i)(ib.pathname), wb = db && ("urlId" in db ? `urlId:${db.urlId}` : `name:${db.lowerCaseName}`), rb = (0, kb.useRef)(wb);
      rb.current = wb;
      const {
        userContext: ob,
        isUserContextUpdating: Sb
      } = (0, lb.c)(), Rb = (0, kb.useRef)(null), vb = (0, kb.useRef)(null), Fb = (0, kb.useRef)(null), xb = (0, kb.useRef)(!1), jb = (0, kb.useRef)((0, ab.cc)(qb)), [pb, bc] = (0, kb.useState)((() => {
        const bb = db && hb.d.peek(ob, db);
        return bb ? {
          status: "loaded",
          profile: bb,
          playerKey: wb
        } : {
          status: "loading"
        }
      })), [cc, sc] = (0, kb.useState)(0);
      (0, kb.useEffect)(Yb.d, []), (0, kb.useEffect)((() => {
        Eb.gameBridge.send("leaveGame", {
          reloadPath: null
        }), Db.d.set({
          gameState: "landingPage",
          openEverythingMenuName: null,
          openInGameMenuName: null
        })
      }), [ib.key]);
      const kc = () => {
        const bb = (0, ub.getPreviousLocation)();
        null === bb || bb.startsWith("/play") ? (0, ub.navigateToHomePage)() : cb(-1)
      };
      (0, Zb.d)(kc), (0, kb.useEffect)((() => {
        var bb;
        if (Sb) return;
        if (!db) return void bc({
          status: "notFound",
          playerKey: wb
        });
        const cb = "urlId" in db && (null === (bb = vb.current) || void 0 === bb ? void 0 : bb.urlId) === db.urlId && Fb.current === ob;
        if (cb && xb.current) return;
        const sb = cb ? null : hb.d.peek(ob, db);
        let kb = !1;
        const Wb = bb => "loaded" === bb.status && (bb.playerKey === wb || "urlId" in db && bb.profile.urlId === db.urlId);
        return sb ? (Fb.current = ob, xb.current = !1, bc({
          status: "loaded",
          profile: sb,
          playerKey: wb
        }), hb.d.invalidate(db)) : bc((bb => Wb(bb) ? bb : {
          status: "loading"
        })), async function(bb, cb) {
          if ("lowerCaseName" in cb && cb.lowerCaseName.length > Ib.l) return {
            status: "notFound"
          };
          try {
            return {
              status: "loaded",
              profile: await fb.b.getPlayerProfile(bb, cb, Xb)
            }
          } catch (sb) {
            return (0, Mb.c)(sb) ? {
              status: "notFound"
            } : (console.error("Failed to load user profile", sb), {
              status: "failed"
            })
          }
        }(ob, db).then((bb => {
          kb || ("loaded" === bb.status && (Fb.current = ob, xb.current = !0), bc((cb => "failed" === bb.status && Wb(cb) ? cb : {
            ...bb,
            playerKey: wb
          })))
        })), () => {
          kb = !0
        }
      }), [Sb, wb, ob, cc]);
      const Wc = "loading" === pb.status || pb.playerKey === wb || "loaded" === pb.status && !!db && "urlId" in db && pb.profile.urlId === db.urlId ? pb : {
          status: "loading"
        },
        ac = "loaded" === Wc.status ? Wc.profile : null,
        Tc = "loading" === Wc.status ? null : function(bb) {
          if ("loaded" === bb.status) {
            const {
              profile: cb
            } = bb;
            return (0, Hb.Q)({
              urlId: cb.urlId,
              name: cb.player.name,
              ranks: cb.player.ranks,
              socialLinks: cb.socialLinks
            })
          }
          return "notFound" === bb.status ? (0, Hb.W)() : null
        }(Wc),
        Uc = null !== ac && void 0 !== ac && ac.urlId ? (0, Tb.k)({
          urlId: ac.urlId,
          name: ac.player.name
        }) : null;
      (0, mb.g)(Uc);
      const Ic = null !== ac && void 0 !== ac && ac.player.cosmetics.profileEffect ? gb.h[ac.player.cosmetics.profileEffect] : void 0,
        Hc = null !== ac && !Sb && ob.getPlayerName().toLowerCase() === ac.player.name.toLowerCase(),
        fc = (0, Ob.e)(null === ac || void 0 === ac ? void 0 : ac.player.name),
        Mc = Hc && ob.playerHasRank("youtuber");
      vb.current = ac;
      const Xc = (0, kb.useCallback)((() => {
          db && (hb.d.invalidate(db), hb.d.get(ob, db).then((bb => {
            rb.current === wb && (xb.current = !0, bc({
              status: "loaded",
              profile: bb,
              playerKey: wb
            }))
          })).catch((bb => {
            console.error("Failed to refresh user profile", bb)
          })))
        }), [wb, ob]),
        nc = (0, kb.useCallback)((() => {
          var bb;
          const cb = vb.current;
          return !(!cb || null === (bb = Rb.current) || void 0 === bb || !bb.isReady()) && (Rb.current.setAllCosmetics(cb.player.cosmetics), !0)
        }), []);
      return (0, kb.useEffect)((() => {
        if (!ac) return;
        let bb, cb = !1;
        const sb = () => {
          cb || nc() || (bb = setTimeout(sb, 100))
        };
        return sb(), () => {
          cb = !0, clearTimeout(bb)
        }
      }), [ac, nc]), (0, zb.jsxs)("div", {
        className: tb()("PlayerProfile", {
          PlayerProfilePortrait: sb
        }),
        children: [Tc && (0, zb.jsx)(Ub.e, {
          meta: Tc
        }), (0, zb.jsxs)("div", {
          className: "PlayerProfileBackgroundContainer",
          children: [Ic && (0, zb.jsx)(Ic, {}), !Ic && (0, zb.jsx)("div", {
            className: "PlayerProfileBackground",
            style: {
              backgroundImage: `url(${jb.current})`
            }
          })]
        }), (0, zb.jsxs)("div", {
          className: "PlayerProfileHeader",
          children: [(0, zb.jsx)(Lb.b, {
            onClick: kc,
            children: bb("general:back")
          }), ac && !Sb && !Hc && Kb.featureFlags.useSocialFeatures && (0, zb.jsx)("div", {
            className: "PlayerProfileExclusionActions",
            children: (0, zb.jsx)(Gb.e, {
              playerName: ac.player.name,
              className: "SmallTextLight"
            })
          })]
        }), "loading" === Wc.status && (0, zb.jsx)("div", {
          className: "PlayerProfileCentredMessage",
          children: (0, zb.jsx)(Vb.d, {})
        }), ("notFound" === Wc.status || "failed" === Wc.status) && (0, zb.jsxs)("div", {
          className: "PlayerProfileCentredMessage PlayerProfileError",
          children: [(0, zb.jsx)(yb.b, {
            name: "face-dizzy"
          }), (0, zb.jsx)("div", {
            className: "PlayerProfileErrorText",
            children: "notFound" === Wc.status ? bb("socialBar:playerNotFound", {
              playerName: null !== Bb && void 0 !== Bb ? Bb : Jb
            }) : bb("playerProfile:loadFailed")
          }), "failed" === Wc.status && (0, zb.jsx)(Lb.d, {
            onClick: () => {
              sc((bb => bb + 1))
            },
            children: bb("general:tryAgain")
          })]
        }), ac && (0, zb.jsxs)("div", {
          className: "PlayerProfileContent",
          children: [(0, zb.jsxs)("div", {
            className: "PlayerProfileLeft",
            children: [(0, zb.jsx)("div", {
              className: "PlayerProfileName FullyFancyText",
              children: (0, zb.jsx)(Qb.d, {
                text: (0, Cb.t)(ac.player.ranks, ac.player.name, ac.player.nameColour),
                friendBadgeFor: fc ? ac.player.name : void 0
              })
            }), (0, zb.jsx)("div", {
              className: "PlayerProfileModel",
              children: (0, zb.jsx)(kb.Suspense, {
                fallback: (0, zb.jsx)("div", {
                  className: "PlayerProfileModelLoading",
                  children: (0, zb.jsx)(Vb.d, {})
                }),
                children: (0, zb.jsx)(Yb.b, {
                  ref: Rb,
                  onReady: () => {
                    nc()
                  }
                })
              })
            })]
          }), (0, zb.jsxs)("div", {
            className: "PlayerProfileRight",
            children: [(0, zb.jsx)(Ab, {
              profile: ac
            }), (ac.socialLinks.length > 0 || Mc) && (0, zb.jsx)(Pb.d, {
              socialLinks: ac.socialLinks,
              editable: Mc,
              userContext: ob,
              onLinksUpdated: Xc
            }), (0, zb.jsxs)("div", {
              className: "PlayerProfileGames",
              children: [(0, zb.jsx)("div", {
                className: "PlayerProfileGamesTitle SmallTextBold",
                children: bb("homePage:profileReleasedGames")
              }), 0 === ac.releasedGames.length && (0, zb.jsx)("div", {
                className: "PlayerProfileNoGames",
                children: bb("homePage:profileNoReleasedGames")
              }), ac.releasedGames.length > 0 && (0, zb.jsx)("div", {
                className: "PlayerProfileGamesGrid",
                children: ac.releasedGames.map((bb => (0, zb.jsx)(Nb.h, {
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
  4600: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Qb
    });
    var kb = sb(1033),
      Wb = sb.n(kb),
      ab = sb(4384),
      Tb = sb(1197),
      Ub = sb(1039),
      Ib = sb(1431),
      Hb = sb(1474),
      fb = sb(1332),
      Mb = sb(2391),
      Xb = sb(1087);
    const nb = {
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

    function mb(bb) {
      let {
        platform: cb
      } = bb;
      const sb = "youtube" === cb;
      return (0, Xb.jsxs)("span", {
        className: Wb()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: sb
        }),
        children: [sb && (0, Xb.jsx)(Mb.b, {
          variant: "white"
        }), !sb && (0, Xb.jsx)(Ub.b, {
          name: nb[cb].icon,
          kit: "brands"
        })]
      })
    }

    function lb(bb) {
      let {
        platform: cb,
        link: sb,
        editable: kb,
        userContext: Wb,
        onLinksUpdated: Mb
      } = bb;
      const {
        t: lb
      } = (0, Tb.E)(), Qb = nb[cb];
      if (!sb && !kb) return null;

      function eb() {
        var bb;
        if (!Wb || !Mb) return;
        fb.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: Qb.name
            }
          },
          prefixText: ab.y[cb],
          placeholderText: "playBloxd",
          initialValue: null !== (bb = null === sb || void 0 === sb ? void 0 : sb.handle) && void 0 !== bb ? bb : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: sb ? "general:remove" : void 0
        }).getResult().then((async bb => {
          if ("notificationTornDown" !== bb && null !== bb) try {
            "submit" === bb.type ? await Hb.b.setSocialLink(Wb, cb, bb.value) : await Hb.b.clearSocialLink(Wb, cb), Mb()
          } catch (sb) {
            console.error("Failed to update social link", sb), fb.NotificationProvider.showAlertPopup({
              title: sb.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (sb) {
        const bb = `@${sb.handle}`;
        return (0, Xb.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: Qb.color
          },
          href: sb.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, Xb.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, Xb.jsx)(mb, {
              platform: cb
            }), (0, Xb.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, Xb.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: bb
              })
            })]
          }), kb && (0, Xb.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, Ib.U)({
              stopPropagation: !0
            }),
            onClick: bb => {
              bb.stopPropagation(), bb.preventDefault(), eb()
            },
            children: (0, Xb.jsx)(Ub.b, {
              name: "pen-to-square"
            })
          }), !kb && (0, Xb.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, Xb.jsx)(Ub.b, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, Xb.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: Qb.color
        },
        ...(0, Ib.U)(),
        onClick: () => {
          eb()
        },
        children: [(0, Xb.jsx)(mb, {
          platform: cb
        }), (0, Xb.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, Xb.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: Qb.name
          }), (0, Xb.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: lb("homePage:profileSocialLinkAdd")
          })]
        }), (0, Xb.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, Xb.jsx)(Ub.b, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function Qb(bb) {
      let {
        socialLinks: cb,
        editable: sb = !1,
        userContext: kb,
        onLinksUpdated: Wb
      } = bb;
      if (!sb && 0 === cb.length) return null;
      const Tb = new Map(cb.map((bb => [bb.platform, bb]))),
        Ub = sb ? ab.w : cb.map((bb => bb.platform));
      return (0, Xb.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, Xb.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: Ub.map((bb => (0, Xb.jsx)(lb, {
            platform: bb,
            link: Tb.get(bb),
            editable: sb,
            userContext: kb,
            onLinksUpdated: Wb
          }, bb)))
        })
      })
    }
  },
  4598: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGOws7P7D8Kmpqb/NTU1wTQymwGbAhANwwzIOmAYxQRkCXNzczBGtgrFBGQFKFZgsxtuAi67YY5HMQGbAgCIxWSBYHJzHAAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);