export const id = 99;
export const ids = [99];
export const modules = {
  4988: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      default: () => Fp
    });
    var Op = cp(62),
      op = cp(1543),
      Ip = cp(337),
      Sp = cp(1244),
      xp = cp(1626),
      Lp = cp(1284),
      Yp = cp(1569),
      Dp = cp(1520),
      Ap = cp(2749);
    const Pp = {
      retries: 2,
      minTimeout: 2e3
    };
    var Wp = cp(1133),
      yp = cp(1623),
      Up = cp(1141),
      wp = cp(1929),
      vp = cp(1201),
      tp = cp(1234),
      Hp = cp(3581),
      dp = cp(1361),
      ep = cp(1480),
      jp = cp(1538),
      kp = cp(2690),
      mp = cp(2700),
      Rp = cp(4994),
      qp = cp(2210),
      Mp = cp(1049),
      Cp = cp.n(Mp),
      Ep = cp(1060),
      Xp = cp(5e3),
      lp = cp(25),
      Qp = cp(1956),
      Jp = cp(3740),
      Bp = cp(2057),
      Np = cp(3680),
      Tp = cp(104),
      fp = cp(4648),
      bp = cp(1112);
    const hp = [Rp];

    function ap(pp) {
      let {
        icon: ip,
        label: cp,
        value: Op
      } = pp;
      return (0, bp.jsxs)("div", {
        className: "PlayerProfileStat",
        children: [(0, bp.jsx)(Ep.d, {
          name: ip,
          className: "PlayerProfileStatIcon"
        }), (0, bp.jsxs)("div", {
          className: "PlayerProfileStatText",
          children: [(0, bp.jsx)("div", {
            className: "PlayerProfileStatLabel SmallTextLight",
            children: cp
          }), (0, bp.jsx)("div", {
            className: "PlayerProfileStatValue",
            children: Op
          })]
        })]
      })
    }

    function np(pp) {
      let {
        profile: ip
      } = pp;
      const {
        t: cp,
        selectedLanguage: Op
      } = (0, vp.H)();
      let op = cp("homePage:profileUnknown");
      if (ip.lastOnline) {
        const pp = (0, vp.p)(Op.code, "homePage:profileTimeAgo");
        op = cp("homePage:profileTimeAgo", {
          time: (0, Ip.cb)(pp, ip.lastOnline, Date.now())
        })
      }
      let Sp = cp("homePage:profileUnknown");
      return ip.accountCreatedAt && (Sp = new Date(ip.accountCreatedAt).toLocaleDateString(void 0, {
        year: "numeric",
        month: "short",
        day: "numeric"
      })), (0, bp.jsxs)("div", {
        className: "PlayerProfileStats",
        children: [(0, bp.jsx)(ap, {
          icon: "hourglass",
          label: cp("homePage:profileTimePlayed"),
          value: (0, Jp.b)(ip.totalPlayMinutes)
        }), (0, bp.jsx)(ap, {
          icon: "wifi",
          label: cp("homePage:profileLastOnline"),
          value: op
        }), (0, bp.jsx)(ap, {
          icon: "calendar",
          label: cp("homePage:profileJoined"),
          value: Sp
        })]
      })
    }

    function Fp() {
      const {
        t: pp
      } = (0, vp.H)(), ip = (0, jp.useNavigatePreserveSearch)(), cp = (0, Wp.h)(), {
        playerName: Rp,
        playerUrlName: Mp
      } = (0, op.A)(), Jp = (0, op.r)(), ap = (0, Sp.f)(Jp.pathname), Fp = ap && ("urlId" in ap ? `urlId:${ap.urlId}` : `name:${ap.lowerCaseName}`), gp = (0, Op.useRef)(Fp);
      gp.current = Fp;
      const {
        userContext: Gp,
        isUserContextUpdating: rp
      } = (0, Up.b)(), Zp = (0, Op.useRef)(null), zp = (0, Op.useRef)(null), sp = (0, Op.useRef)(null), Kp = (0, Op.useRef)(!1), Vp = (0, Op.useRef)((0, Ip.Ub)(hp)), [ii, ci] = (0, Op.useState)((() => {
        const pp = ap && mp.c.peek(Gp, ap);
        return pp ? {
          status: "loaded",
          profile: pp,
          playerKey: Fp
        } : {
          status: "loading"
        }
      })), [Oi, oi] = (0, Op.useState)(0);
      (0, Op.useEffect)(kp.g, []), (0, Op.useEffect)((() => {
        Qp.gameBridge.send("leaveGame", {
          reloadPath: null
        }), lp.c.set({
          gameState: "landingPage",
          openEverythingMenuName: null,
          openInGameMenuName: null
        })
      }), [Jp.key]);
      const Ii = () => {
        const pp = (0, jp.getPreviousLocation)();
        null === pp || pp.startsWith("/play") ? (0, jp.navigateToHomePage)() : ip(-1)
      };
      (0, fp.e)(Ii), (0, Op.useEffect)((() => {
        var pp;
        if (rp) return;
        if (!ap) return void ci({
          status: "notFound",
          playerKey: Fp
        });
        const ip = "urlId" in ap && (null === (pp = zp.current) || void 0 === pp ? void 0 : pp.urlId) === ap.urlId && sp.current === Gp;
        if (ip && Kp.current) return;
        const cp = ip ? null : mp.c.peek(Gp, ap);
        let Op = !1;
        const op = pp => "loaded" === pp.status && (pp.playerKey === Fp || "urlId" in ap && pp.profile.urlId === ap.urlId);
        return cp ? (sp.current = Gp, Kp.current = !1, ci({
          status: "loaded",
          profile: cp,
          playerKey: Fp
        }), mp.c.invalidate(ap)) : ci((pp => op(pp) ? pp : {
          status: "loading"
        })), async function(pp, ip) {
          if ("lowerCaseName" in ip && ip.lowerCaseName.length > Lp.i) return {
            status: "notFound"
          };
          try {
            return {
              status: "loaded",
              profile: await Dp.b.getPlayerProfile(pp, ip, Pp)
            }
          } catch (cp) {
            return (0, Ap.c)(cp) ? {
              status: "notFound"
            } : (console.error("Failed to load user profile", cp), {
              status: "failed"
            })
          }
        }(Gp, ap).then((pp => {
          Op || ("loaded" === pp.status && (sp.current = Gp, Kp.current = !0), ci((ip => "failed" === pp.status && op(ip) ? ip : {
            ...pp,
            playerKey: Fp
          })))
        })), () => {
          Op = !0
        }
      }), [rp, Fp, Gp, Oi]);
      const Si = "loading" === ii.status || ii.playerKey === Fp || "loaded" === ii.status && !!ap && "urlId" in ap && ii.profile.urlId === ap.urlId ? ii : {
          status: "loading"
        },
        xi = "loaded" === Si.status ? Si.profile : null,
        Li = "loading" === Si.status ? null : function(pp) {
          if ("loaded" === pp.status) {
            const {
              profile: ip
            } = pp;
            return (0, Yp.T)({
              urlId: ip.urlId,
              name: ip.player.name,
              ranks: ip.player.ranks,
              socialLinks: ip.socialLinks
            })
          }
          return "notFound" === pp.status ? (0, Yp.Y)() : null
        }(Si),
        Yi = null !== xi && void 0 !== xi && xi.urlId ? (0, Sp.g)({
          urlId: xi.urlId,
          name: xi.player.name
        }) : null;
      (0, yp.e)(Yi);
      const Di = null !== xi && void 0 !== xi && xi.player.cosmetics.profileEffect ? qp.f[xi.player.cosmetics.profileEffect] : void 0,
        Ai = null !== xi && !rp && Gp.getPlayerName().toLowerCase() === xi.player.name.toLowerCase(),
        Pi = (0, Bp.d)(null === xi || void 0 === xi ? void 0 : xi.player.name),
        Wi = Ai && Gp.playerHasRank("youtuber");
      zp.current = xi;
      const yi = (0, Op.useCallback)((() => {
          ap && (mp.c.invalidate(ap), mp.c.get(Gp, ap).then((pp => {
            gp.current === Fp && (Kp.current = !0, ci({
              status: "loaded",
              profile: pp,
              playerKey: Fp
            }))
          })).catch((pp => {
            console.error("Failed to refresh user profile", pp)
          })))
        }), [Fp, Gp]),
        Ui = (0, Op.useCallback)((() => {
          var pp;
          const ip = zp.current;
          return !(!ip || null === (pp = Zp.current) || void 0 === pp || !pp.isReady()) && (Zp.current.setAllCosmetics(ip.player.cosmetics), !0)
        }), []);
      return (0, Op.useEffect)((() => {
        if (!xi) return;
        let pp, ip = !1;
        const cp = () => {
          ip || Ui() || (pp = setTimeout(cp, 100))
        };
        return cp(), () => {
          ip = !0, clearTimeout(pp)
        }
      }), [xi, Ui]), (0, bp.jsxs)("div", {
        className: Cp()("PlayerProfile", {
          PlayerProfilePortrait: cp
        }),
        children: [Li && (0, bp.jsx)(xp.c, {
          meta: Li
        }), (0, bp.jsxs)("div", {
          className: "PlayerProfileBackgroundContainer",
          children: [Di && (0, bp.jsx)(Di, {}), !Di && (0, bp.jsx)("div", {
            className: "PlayerProfileBackground",
            style: {
              backgroundImage: `url(${Vp.current})`
            }
          })]
        }), (0, bp.jsxs)("div", {
          className: "PlayerProfileHeader",
          children: [(0, bp.jsx)(ep.d, {
            onClick: Ii,
            children: pp("general:back")
          }), xi && !rp && !Ai && Tp.featureFlags.useSocialFeatures && (0, bp.jsx)("div", {
            className: "PlayerProfileExclusionActions",
            children: (0, bp.jsx)(Np.d, {
              playerName: xi.player.name,
              className: "SmallTextLight"
            })
          })]
        }), "loading" === Si.status && (0, bp.jsx)("div", {
          className: "PlayerProfileCentredMessage",
          children: (0, bp.jsx)(dp.c, {})
        }), ("notFound" === Si.status || "failed" === Si.status) && (0, bp.jsxs)("div", {
          className: "PlayerProfileCentredMessage PlayerProfileError",
          children: [(0, bp.jsx)(Ep.d, {
            name: "face-dizzy"
          }), (0, bp.jsx)("div", {
            className: "PlayerProfileErrorText",
            children: "notFound" === Si.status ? pp("socialBar:playerNotFound", {
              playerName: null !== Mp && void 0 !== Mp ? Mp : Rp
            }) : pp("playerProfile:loadFailed")
          }), "failed" === Si.status && (0, bp.jsx)(ep.f, {
            onClick: () => {
              oi((pp => pp + 1))
            },
            children: pp("general:tryAgain")
          })]
        }), xi && (0, bp.jsxs)("div", {
          className: "PlayerProfileContent",
          children: [(0, bp.jsxs)("div", {
            className: "PlayerProfileLeft",
            children: [(0, bp.jsx)("div", {
              className: "PlayerProfileName FullyFancyText",
              children: (0, bp.jsx)(wp.e, {
                text: (0, tp.z)(xi.player.ranks, xi.player.name, xi.player.nameColour),
                friendBadgeFor: Pi ? xi.player.name : void 0
              })
            }), (0, bp.jsx)("div", {
              className: "PlayerProfileModel",
              children: (0, bp.jsx)(Op.Suspense, {
                fallback: (0, bp.jsx)("div", {
                  className: "PlayerProfileModelLoading",
                  children: (0, bp.jsx)(dp.c, {})
                }),
                children: (0, bp.jsx)(kp.e, {
                  ref: Zp,
                  onReady: () => {
                    Ui()
                  }
                })
              })
            })]
          }), (0, bp.jsxs)("div", {
            className: "PlayerProfileRight",
            children: [(0, bp.jsx)(np, {
              profile: xi
            }), (xi.socialLinks.length > 0 || Wi) && (0, bp.jsx)(Xp.d, {
              socialLinks: xi.socialLinks,
              editable: Wi,
              userContext: Gp,
              onLinksUpdated: yi
            }), (0, bp.jsxs)("div", {
              className: "PlayerProfileGames",
              children: [(0, bp.jsx)("div", {
                className: "PlayerProfileGamesTitle SmallTextBold",
                children: pp("homePage:profileReleasedGames")
              }), 0 === xi.releasedGames.length && (0, bp.jsx)("div", {
                className: "PlayerProfileNoGames",
                children: pp("homePage:profileNoReleasedGames")
              }), xi.releasedGames.length > 0 && (0, bp.jsx)("div", {
                className: "PlayerProfileGamesGrid",
                children: xi.releasedGames.map((pp => (0, bp.jsx)(Hp.g, {
                  source: {
                    type: "preview",
                    preview: pp
                  },
                  gameWidth: "100%",
                  useLongRatio: !0,
                  hideFavourites: !0,
                  entrySource: "other"
                }, pp.schematicId)))
              })]
            })]
          })]
        })]
      })
    }
  },
  5e3: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => wp
    });
    var Op = cp(1049),
      op = cp.n(Op),
      Ip = cp(4735),
      Sp = cp(1201),
      xp = cp(1060),
      Lp = cp(1480),
      Yp = cp(1520),
      Dp = cp(1372),
      Ap = cp(2568),
      Pp = cp(1112);
    const Wp = {
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

    function yp(pp) {
      let {
        platform: ip
      } = pp;
      const cp = "youtube" === ip;
      return (0, Pp.jsxs)("span", {
        className: op()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: cp
        }),
        children: [cp && (0, Pp.jsx)(Ap.d, {
          variant: "white"
        }), !cp && (0, Pp.jsx)(xp.d, {
          name: Wp[ip].icon,
          kit: "brands"
        })]
      })
    }

    function Up(pp) {
      let {
        platform: ip,
        link: cp,
        editable: Op,
        userContext: op,
        onLinksUpdated: Ap
      } = pp;
      const {
        t: Up
      } = (0, Sp.H)(), wp = Wp[ip];
      if (!cp && !Op) return null;

      function vp() {
        var pp;
        if (!op || !Ap) return;
        Dp.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: wp.name
            }
          },
          prefixText: Ip.u[ip],
          placeholderText: "playBloxd",
          initialValue: null !== (pp = null === cp || void 0 === cp ? void 0 : cp.handle) && void 0 !== pp ? pp : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: cp ? "general:remove" : void 0
        }).getResult().then((async pp => {
          if ("notificationTornDown" !== pp && null !== pp) try {
            "submit" === pp.type ? await Yp.b.setSocialLink(op, ip, pp.value) : await Yp.b.clearSocialLink(op, ip), Ap()
          } catch (cp) {
            console.error("Failed to update social link", cp), Dp.NotificationProvider.showAlertPopup({
              title: cp.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (cp) {
        const pp = `@${cp.handle}`;
        return (0, Pp.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: wp.color
          },
          href: cp.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, Pp.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, Pp.jsx)(yp, {
              platform: ip
            }), (0, Pp.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, Pp.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: pp
              })
            })]
          }), Op && (0, Pp.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, Lp.bb)({
              stopPropagation: !0
            }),
            onClick: pp => {
              pp.stopPropagation(), pp.preventDefault(), vp()
            },
            children: (0, Pp.jsx)(xp.d, {
              name: "pen-to-square"
            })
          }), !Op && (0, Pp.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, Pp.jsx)(xp.d, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, Pp.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: wp.color
        },
        ...(0, Lp.bb)(),
        onClick: () => {
          vp()
        },
        children: [(0, Pp.jsx)(yp, {
          platform: ip
        }), (0, Pp.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, Pp.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: wp.name
          }), (0, Pp.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: Up("homePage:profileSocialLinkAdd")
          })]
        }), (0, Pp.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, Pp.jsx)(xp.d, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function wp(pp) {
      let {
        socialLinks: ip,
        editable: cp = !1,
        userContext: Op,
        onLinksUpdated: op
      } = pp;
      if (!cp && 0 === ip.length) return null;
      const Sp = new Map(ip.map((pp => [pp.platform, pp]))),
        xp = cp ? Ip.q : ip.map((pp => pp.platform));
      return (0, Pp.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, Pp.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: xp.map((pp => (0, Pp.jsx)(Up, {
            platform: pp,
            link: Sp.get(pp),
            editable: cp,
            userContext: Op,
            onLinksUpdated: op
          }, pp)))
        })
      })
    }
  },
  4994: pp => {
    pp.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGOws7P7D8Kmpqb/NTU1wTQymwGbAhANwwzIOmAYxQRkCXNzczBGtgrFBGQFKFZgsxtuAi67YY5HMQGbAgCIxWSBYHJzHAAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);