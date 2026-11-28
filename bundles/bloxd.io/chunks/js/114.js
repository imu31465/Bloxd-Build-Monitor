export const id = 114;
export const ids = [114];
export const modules = {
  5776: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      default: () => ab
    });
    var eb = Mb(64),
      Hb = Mb(1696),
      pb = Mb(382),
      Vb = Mb(1309),
      gb = Mb(1799),
      lb = Mb(1333),
      Lb = Mb(1720),
      Ib = Mb(1677),
      Ob = Mb(3872);
    const Ub = {
      retries: 2,
      minTimeout: 2e3
    };
    var tb = Mb(1168),
      Cb = Mb(1793),
      Eb = Mb(1179),
      Fb = Mb(2116),
      Bb = Mb(1259),
      sb = Mb(1301),
      mb = Mb(4881),
      hb = Mb(1468),
      zb = Mb(1616),
      Xb = Mb(1686),
      xb = Mb(3813),
      jb = Mb(3826),
      Kb = Mb(5783),
      rb = Mb(3121),
      Rb = Mb(1159),
      Db = Mb.n(Rb),
      cb = Mb(1475),
      Yb = Mb(5789),
      Zb = Mb(26),
      fb = Mb(2142),
      Ab = Mb(5011),
      Wb = Mb(2218),
      Jb = Mb(4985),
      Sb = Mb(110),
      Nb = Mb(5405),
      vb = Mb(1364);
    const Qb = [Kb];

    function Gb(bb) {
      let {
        icon: wb,
        label: Mb,
        value: eb
      } = bb;
      return (0, vb.jsxs)("div", {
        className: "PlayerProfileStat",
        children: [(0, vb.jsx)(cb.b, {
          name: wb,
          className: "PlayerProfileStatIcon"
        }), (0, vb.jsxs)("div", {
          className: "PlayerProfileStatText",
          children: [(0, vb.jsx)("div", {
            className: "PlayerProfileStatLabel SmallTextLight",
            children: Mb
          }), (0, vb.jsx)("div", {
            className: "PlayerProfileStatValue",
            children: eb
          })]
        })]
      })
    }

    function qb(bb) {
      let {
        profile: wb
      } = bb;
      const {
        t: Mb,
        selectedLanguage: eb
      } = (0, Bb.C)();
      let Hb = Mb("homePage:profileUnknown");
      if (wb.lastOnline) {
        const bb = (0, Bb.l)(eb.code, "homePage:profileTimeAgo");
        Hb = Mb("homePage:profileTimeAgo", {
          time: (0, pb.ib)(bb, wb.lastOnline, Date.now())
        })
      }
      let Vb = Mb("homePage:profileUnknown");
      return wb.accountCreatedAt && (Vb = new Date(wb.accountCreatedAt).toLocaleDateString(void 0, {
        year: "numeric",
        month: "short",
        day: "numeric"
      })), (0, vb.jsxs)("div", {
        className: "PlayerProfileStats",
        children: [(0, vb.jsx)(Gb, {
          icon: "hourglass",
          label: Mb("homePage:profileTimePlayed"),
          value: (0, Ab.c)(wb.totalPlayMinutes)
        }), (0, vb.jsx)(Gb, {
          icon: "wifi",
          label: Mb("homePage:profileLastOnline"),
          value: Hb
        }), (0, vb.jsx)(Gb, {
          icon: "calendar",
          label: Mb("homePage:profileJoined"),
          value: Vb
        })]
      })
    }

    function ab() {
      const {
        t: bb
      } = (0, Bb.C)(), wb = (0, Xb.useNavigatePreserveSearch)(), Mb = (0, tb.h)(), {
        playerName: Kb,
        playerUrlName: Rb
      } = (0, Hb.E)(), Ab = (0, Hb.v)(), Gb = (0, Vb.e)(Ab.pathname), ab = Gb && ("urlId" in Gb ? `urlId:${Gb.urlId}` : `name:${Gb.lowerCaseName}`), ib = (0, eb.useRef)(ab);
      ib.current = ab;
      const {
        userContext: ub,
        isUserContextUpdating: db
      } = (0, Eb.e)(), Pb = (0, eb.useRef)(null), nb = (0, eb.useRef)(null), yb = (0, eb.useRef)(null), ob = (0, eb.useRef)(!1), Tb = (0, eb.useRef)((0, pb.jc)(Qb)), [kb, bw] = (0, eb.useState)((() => {
        const bb = Gb && jb.d.peek(ub, Gb);
        return bb ? {
          status: "loaded",
          profile: bb,
          playerKey: ab
        } : {
          status: "loading"
        }
      })), [ww, Mw] = (0, eb.useState)(0);
      (0, eb.useEffect)(xb.i, []), (0, eb.useEffect)((() => {
        fb.gameBridge.send("leaveGame", {
          reloadPath: null
        }), Zb.c.set({
          gameState: "landingPage",
          openEverythingMenuName: null,
          openInGameMenuName: null
        })
      }), [Ab.key]);
      const ew = () => {
        const bb = (0, Xb.getPreviousLocation)();
        null === bb || bb.startsWith("/play") ? (0, Xb.navigateToHomePage)() : wb(-1)
      };
      (0, Nb.e)(ew), (0, eb.useEffect)((() => {
        var bb;
        if (db) return;
        if (!Gb) return void bw({
          status: "notFound",
          playerKey: ab
        });
        const wb = "urlId" in Gb && (null === (bb = nb.current) || void 0 === bb ? void 0 : bb.urlId) === Gb.urlId && yb.current === ub;
        if (wb && ob.current) return;
        const Mb = wb ? null : jb.d.peek(ub, Gb);
        let eb = !1;
        const Hb = bb => "loaded" === bb.status && (bb.playerKey === ab || "urlId" in Gb && bb.profile.urlId === Gb.urlId);
        return Mb ? (yb.current = ub, ob.current = !1, bw({
          status: "loaded",
          profile: Mb,
          playerKey: ab
        }), jb.d.invalidate(Gb)) : bw((bb => Hb(bb) ? bb : {
          status: "loading"
        })), async function(bb, wb) {
          if ("lowerCaseName" in wb && wb.lowerCaseName.length > lb.g) return {
            status: "notFound"
          };
          try {
            return {
              status: "loaded",
              profile: await Ib.e.getPlayerProfile(bb, wb, Ub)
            }
          } catch (Mb) {
            return (0, Ob.e)(Mb) ? {
              status: "notFound"
            } : (console.error("Failed to load user profile", Mb), {
              status: "failed"
            })
          }
        }(ub, Gb).then((bb => {
          eb || ("loaded" === bb.status && (yb.current = ub, ob.current = !0), bw((wb => "failed" === bb.status && Hb(wb) ? wb : {
            ...bb,
            playerKey: ab
          })))
        })), () => {
          eb = !0
        }
      }), [db, ab, ub, ww]);
      const Hw = "loading" === kb.status || kb.playerKey === ab || "loaded" === kb.status && !!Gb && "urlId" in Gb && kb.profile.urlId === Gb.urlId ? kb : {
          status: "loading"
        },
        pw = "loaded" === Hw.status ? Hw.profile : null,
        Vw = "loading" === Hw.status ? null : function(bb) {
          if ("loaded" === bb.status) {
            const {
              profile: wb
            } = bb;
            return (0, Lb.L)({
              urlId: wb.urlId,
              name: wb.player.name,
              ranks: wb.player.ranks,
              socialLinks: wb.socialLinks
            })
          }
          return "notFound" === bb.status ? (0, Lb._)() : null
        }(Hw),
        gw = null !== pw && void 0 !== pw && pw.urlId ? (0, Vb.g)({
          urlId: pw.urlId,
          name: pw.player.name
        }) : null;
      (0, Cb.d)(gw);
      const lw = null !== pw && void 0 !== pw && pw.player.cosmetics.profileEffect ? rb.h[pw.player.cosmetics.profileEffect] : void 0,
        Lw = null !== pw && !db && ub.getPlayerName().toLowerCase() === pw.player.name.toLowerCase(),
        Iw = (0, Wb.e)(null === pw || void 0 === pw ? void 0 : pw.player.name),
        Ow = Lw && ub.playerHasRank("youtuber");
      nb.current = pw;
      const Uw = (0, eb.useCallback)((() => {
          Gb && (jb.d.invalidate(Gb), jb.d.get(ub, Gb).then((bb => {
            ib.current === ab && (ob.current = !0, bw({
              status: "loaded",
              profile: bb,
              playerKey: ab
            }))
          })).catch((bb => {
            console.error("Failed to refresh user profile", bb)
          })))
        }), [ab, ub]),
        tw = (0, eb.useCallback)((() => {
          var bb;
          const wb = nb.current;
          return !(!wb || null === (bb = Pb.current) || void 0 === bb || !bb.isReady()) && (Pb.current.setAllCosmetics(wb.player.cosmetics), !0)
        }), []);
      return (0, eb.useEffect)((() => {
        if (!pw) return;
        let bb, wb = !1;
        const Mb = () => {
          wb || tw() || (bb = setTimeout(Mb, 100))
        };
        return Mb(), () => {
          wb = !0, clearTimeout(bb)
        }
      }), [pw, tw]), (0, vb.jsxs)("div", {
        className: Db()("PlayerProfile", {
          PlayerProfilePortrait: Mb
        }),
        children: [Vw && (0, vb.jsx)(gb.d, {
          meta: Vw
        }), (0, vb.jsxs)("div", {
          className: "PlayerProfileBackgroundContainer",
          children: [lw && (0, vb.jsx)(lw, {}), !lw && (0, vb.jsx)("div", {
            className: "PlayerProfileBackground",
            style: {
              backgroundImage: `url(${Tb.current})`
            }
          })]
        }), (0, vb.jsxs)("div", {
          className: "PlayerProfileHeader",
          children: [(0, vb.jsx)(zb.b, {
            onClick: ew,
            children: bb("general:back")
          }), pw && !db && !Lw && Sb.featureFlags.useSocialFeatures && (0, vb.jsx)("div", {
            className: "PlayerProfileExclusionActions",
            children: (0, vb.jsx)(Jb.c, {
              playerName: pw.player.name,
              className: "SmallTextLight"
            })
          })]
        }), "loading" === Hw.status && (0, vb.jsx)("div", {
          className: "PlayerProfileCentredMessage",
          children: (0, vb.jsx)(hb.c, {})
        }), ("notFound" === Hw.status || "failed" === Hw.status) && (0, vb.jsxs)("div", {
          className: "PlayerProfileCentredMessage PlayerProfileError",
          children: [(0, vb.jsx)(cb.b, {
            name: "face-dizzy"
          }), (0, vb.jsx)("div", {
            className: "PlayerProfileErrorText",
            children: "notFound" === Hw.status ? bb("socialBar:playerNotFound", {
              playerName: null !== Rb && void 0 !== Rb ? Rb : Kb
            }) : bb("playerProfile:loadFailed")
          }), "failed" === Hw.status && (0, vb.jsx)(zb.f, {
            onClick: () => {
              Mw((bb => bb + 1))
            },
            children: bb("general:tryAgain")
          })]
        }), pw && (0, vb.jsxs)("div", {
          className: "PlayerProfileContent",
          children: [(0, vb.jsxs)("div", {
            className: "PlayerProfileLeft",
            children: [(0, vb.jsx)("div", {
              className: "PlayerProfileName FullyFancyText",
              children: (0, vb.jsx)(Fb.d, {
                text: (0, sb.r)(pw.player.ranks, pw.player.name, pw.player.nameColour),
                friendBadgeFor: Iw ? pw.player.name : void 0
              })
            }), (0, vb.jsx)("div", {
              className: "PlayerProfileModel",
              children: (0, vb.jsx)(eb.Suspense, {
                fallback: (0, vb.jsx)("div", {
                  className: "PlayerProfileModelLoading",
                  children: (0, vb.jsx)(hb.c, {})
                }),
                children: (0, vb.jsx)(xb.e, {
                  ref: Pb,
                  onReady: () => {
                    tw()
                  }
                })
              })
            })]
          }), (0, vb.jsxs)("div", {
            className: "PlayerProfileRight",
            children: [(0, vb.jsx)(qb, {
              profile: pw
            }), (pw.socialLinks.length > 0 || Ow) && (0, vb.jsx)(Yb.c, {
              socialLinks: pw.socialLinks,
              editable: Ow,
              userContext: ub,
              onLinksUpdated: Uw
            }), (0, vb.jsxs)("div", {
              className: "PlayerProfileGames",
              children: [(0, vb.jsx)("div", {
                className: "PlayerProfileGamesTitle SmallTextBold",
                children: bb("homePage:profileReleasedGames")
              }), 0 === pw.releasedGames.length && (0, vb.jsx)("div", {
                className: "PlayerProfileNoGames",
                children: bb("homePage:profileNoReleasedGames")
              }), pw.releasedGames.length > 0 && (0, vb.jsx)("div", {
                className: "PlayerProfileGamesGrid",
                children: pw.releasedGames.map((bb => (0, vb.jsx)(mb.f, {
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
  5789: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Fb
    });
    var eb = Mb(1159),
      Hb = Mb.n(eb),
      pb = Mb(5480),
      Vb = Mb(1259),
      gb = Mb(1475),
      lb = Mb(1616),
      Lb = Mb(1677),
      Ib = Mb(1504),
      Ob = Mb(3666),
      Ub = Mb(1364);
    const tb = {
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

    function Cb(bb) {
      let {
        platform: wb
      } = bb;
      const Mb = "youtube" === wb;
      return (0, Ub.jsxs)("span", {
        className: Hb()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: Mb
        }),
        children: [Mb && (0, Ub.jsx)(Ob.e, {
          variant: "white"
        }), !Mb && (0, Ub.jsx)(gb.b, {
          name: tb[wb].icon,
          kit: "brands"
        })]
      })
    }

    function Eb(bb) {
      let {
        platform: wb,
        link: Mb,
        editable: eb,
        userContext: Hb,
        onLinksUpdated: Ob
      } = bb;
      const {
        t: Eb
      } = (0, Vb.C)(), Fb = tb[wb];
      if (!Mb && !eb) return null;

      function Bb() {
        var bb;
        if (!Hb || !Ob) return;
        Ib.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: Fb.name
            }
          },
          prefixText: pb.B[wb],
          placeholderText: "playBloxd",
          initialValue: null !== (bb = null === Mb || void 0 === Mb ? void 0 : Mb.handle) && void 0 !== bb ? bb : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: Mb ? "general:remove" : void 0
        }).getResult().then((async bb => {
          if ("notificationTornDown" !== bb && null !== bb) try {
            "submit" === bb.type ? await Lb.e.setSocialLink(Hb, wb, bb.value) : await Lb.e.clearSocialLink(Hb, wb), Ob()
          } catch (Mb) {
            console.error("Failed to update social link", Mb), Ib.NotificationProvider.showAlertPopup({
              title: Mb.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (Mb) {
        const bb = `@${Mb.handle}`;
        return (0, Ub.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: Fb.color
          },
          href: Mb.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, Ub.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, Ub.jsx)(Cb, {
              platform: wb
            }), (0, Ub.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, Ub.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: bb
              })
            })]
          }), eb && (0, Ub.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, lb.bb)({
              stopPropagation: !0
            }),
            onClick: bb => {
              bb.stopPropagation(), bb.preventDefault(), Bb()
            },
            children: (0, Ub.jsx)(gb.b, {
              name: "pen-to-square"
            })
          }), !eb && (0, Ub.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, Ub.jsx)(gb.b, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, Ub.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: Fb.color
        },
        ...(0, lb.bb)(),
        onClick: () => {
          Bb()
        },
        children: [(0, Ub.jsx)(Cb, {
          platform: wb
        }), (0, Ub.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, Ub.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: Fb.name
          }), (0, Ub.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: Eb("homePage:profileSocialLinkAdd")
          })]
        }), (0, Ub.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, Ub.jsx)(gb.b, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function Fb(bb) {
      let {
        socialLinks: wb,
        editable: Mb = !1,
        userContext: eb,
        onLinksUpdated: Hb
      } = bb;
      if (!Mb && 0 === wb.length) return null;
      const Vb = new Map(wb.map((bb => [bb.platform, bb]))),
        gb = Mb ? pb.y : wb.map((bb => bb.platform));
      return (0, Ub.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, Ub.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: gb.map((bb => (0, Ub.jsx)(Eb, {
            platform: bb,
            link: Vb.get(bb),
            editable: Mb,
            userContext: eb,
            onLinksUpdated: Hb
          }, bb)))
        })
      })
    }
  },
  5783: bb => {
    bb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGOws7P7D8Kmpqb/NTU1wTQymwGbAhANwwzIOmAYxQRkCXNzczBGtgrFBGQFKFZgsxtuAi67YY5HMQGbAgCIxWSBYHJzHAAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);