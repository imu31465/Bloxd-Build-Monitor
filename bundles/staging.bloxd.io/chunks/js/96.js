export const id = 96;
export const ids = [96];
export const modules = {
  4708: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      default: () => Uq
    });
    var Yq = gq(57),
      lq = gq(1512),
      Oq = gq(307),
      mq = gq(1219),
      xq = gq(1592),
      Aq = gq(1261),
      cq = gq(1532),
      uq = gq(1477),
      Bq = gq(2589);
    const Wq = {
      retries: 2,
      minTimeout: 2e3
    };
    var Nq = gq(1086),
      aq = gq(1587),
      Vq = gq(1101),
      dq = gq(1876),
      jq = gq(1183),
      Hq = gq(1214),
      oq = gq(3358),
      Pq = gq(1326),
      Qq = gq(1422),
      yq = gq(1498),
      tq = gq(2535),
      rq = gq(2541),
      vq = gq(4713),
      hq = gq(2121),
      nq = gq(1018),
      bq = gq.n(nq),
      iq = gq(1025),
      Zq = gq(4721),
      fq = gq(24),
      Mq = gq(1904),
      Tq = gq(3504),
      zq = gq(2002),
      Sq = gq(3469),
      pq = gq(96),
      Gq = gq(4379),
      Lq = gq(1070);
    const Jq = [vq];

    function kq(qq) {
      let {
        icon: Eq,
        label: gq,
        value: Yq
      } = qq;
      return (0, Lq.jsxs)("div", {
        className: "PlayerProfileStat",
        children: [(0, Lq.jsx)(iq.d, {
          name: Eq,
          className: "PlayerProfileStatIcon"
        }), (0, Lq.jsxs)("div", {
          className: "PlayerProfileStatText",
          children: [(0, Lq.jsx)("div", {
            className: "PlayerProfileStatLabel SmallTextLight",
            children: gq
          }), (0, Lq.jsx)("div", {
            className: "PlayerProfileStatValue",
            children: Yq
          })]
        })]
      })
    }

    function Rq(qq) {
      let {
        profile: Eq
      } = qq;
      const {
        t: gq,
        selectedLanguage: Yq
      } = (0, jq.v)();
      let lq = gq("homePage:profileUnknown");
      if (Eq.lastOnline) {
        const qq = (0, jq.h)(Yq.code, "homePage:profileTimeAgo");
        lq = gq("homePage:profileTimeAgo", {
          time: (0, Oq.lb)(qq, Eq.lastOnline, Date.now())
        })
      }
      let mq = gq("homePage:profileUnknown");
      return Eq.accountCreatedAt && (mq = new Date(Eq.accountCreatedAt).toLocaleDateString(void 0, {
        year: "numeric",
        month: "short",
        day: "numeric"
      })), (0, Lq.jsxs)("div", {
        className: "PlayerProfileStats",
        children: [(0, Lq.jsx)(kq, {
          icon: "hourglass",
          label: gq("homePage:profileTimePlayed"),
          value: (0, Tq.e)(Eq.totalPlayMinutes)
        }), (0, Lq.jsx)(kq, {
          icon: "wifi",
          label: gq("homePage:profileLastOnline"),
          value: lq
        }), (0, Lq.jsx)(kq, {
          icon: "calendar",
          label: gq("homePage:profileJoined"),
          value: mq
        })]
      })
    }

    function Uq() {
      const {
        t: qq
      } = (0, jq.v)(), Eq = (0, yq.useNavigatePreserveSearch)(), gq = (0, Nq.l)(), {
        playerName: vq,
        playerUrlName: nq
      } = (0, lq.v)(), Tq = (0, lq.q)(), kq = (0, mq.c)(Tq.pathname), Uq = kq && ("urlId" in kq ? `urlId:${kq.urlId}` : `name:${kq.lowerCaseName}`), Fq = (0, Yq.useRef)(Uq);
      Fq.current = Uq;
      const {
        userContext: sq,
        isUserContextUpdating: Xq
      } = (0, Vq.c)(), wq = (0, Yq.useRef)(null), Kq = (0, Yq.useRef)(null), Cq = (0, Yq.useRef)(null), Iq = (0, Yq.useRef)(!1), eq = (0, Yq.useRef)((0, Oq.gc)(Jq)), [Dq, qE] = (0, Yq.useState)((() => {
        const qq = kq && rq.c.peek(sq, kq);
        return qq ? {
          status: "loaded",
          profile: qq,
          playerKey: Uq
        } : {
          status: "loading"
        }
      })), [EE, gE] = (0, Yq.useState)(0);
      (0, Yq.useEffect)(tq.g, []), (0, Yq.useEffect)((() => {
        Mq.gameBridge.send("leaveGame", {
          reloadPath: null
        }), fq.b.set({
          gameState: "landingPage",
          openEverythingMenuName: null,
          openInGameMenuName: null
        })
      }), [Tq.key]);
      const YE = () => {
        const qq = (0, yq.getPreviousLocation)();
        null === qq || qq.startsWith("/play") ? (0, yq.navigateToHomePage)() : Eq(-1)
      };
      (0, Gq.b)(YE), (0, Yq.useEffect)((() => {
        var qq;
        if (Xq) return;
        if (!kq) return void qE({
          status: "notFound",
          playerKey: Uq
        });
        const Eq = "urlId" in kq && (null === (qq = Kq.current) || void 0 === qq ? void 0 : qq.urlId) === kq.urlId && Cq.current === sq;
        if (Eq && Iq.current) return;
        const gq = Eq ? null : rq.c.peek(sq, kq);
        let Yq = !1;
        const lq = qq => "loaded" === qq.status && (qq.playerKey === Uq || "urlId" in kq && qq.profile.urlId === kq.urlId);
        return gq ? (Cq.current = sq, Iq.current = !1, qE({
          status: "loaded",
          profile: gq,
          playerKey: Uq
        }), rq.c.invalidate(kq)) : qE((qq => lq(qq) ? qq : {
          status: "loading"
        })), async function(qq, Eq) {
          if ("lowerCaseName" in Eq && Eq.lowerCaseName.length > Aq.l) return {
            status: "notFound"
          };
          try {
            return {
              status: "loaded",
              profile: await uq.e.getPlayerProfile(qq, Eq, Wq)
            }
          } catch (gq) {
            return (0, Bq.e)(gq) ? {
              status: "notFound"
            } : (console.error("Failed to load user profile", gq), {
              status: "failed"
            })
          }
        }(sq, kq).then((qq => {
          Yq || ("loaded" === qq.status && (Cq.current = sq, Iq.current = !0), qE((Eq => "failed" === qq.status && lq(Eq) ? Eq : {
            ...qq,
            playerKey: Uq
          })))
        })), () => {
          Yq = !0
        }
      }), [Xq, Uq, sq, EE]);
      const lE = "loading" === Dq.status || Dq.playerKey === Uq || "loaded" === Dq.status && !!kq && "urlId" in kq && Dq.profile.urlId === kq.urlId ? Dq : {
          status: "loading"
        },
        OE = "loaded" === lE.status ? lE.profile : null,
        mE = "loading" === lE.status ? null : function(qq) {
          if ("loaded" === qq.status) {
            const {
              profile: Eq
            } = qq;
            return (0, cq.O)({
              urlId: Eq.urlId,
              name: Eq.player.name,
              ranks: Eq.player.ranks,
              socialLinks: Eq.socialLinks
            })
          }
          return "notFound" === qq.status ? (0, cq.U)() : null
        }(lE),
        xE = null !== OE && void 0 !== OE && OE.urlId ? (0, mq.d)({
          urlId: OE.urlId,
          name: OE.player.name
        }) : null;
      (0, aq.g)(xE);
      const AE = null !== OE && void 0 !== OE && OE.player.cosmetics.profileEffect ? hq.e[OE.player.cosmetics.profileEffect] : void 0,
        cE = null !== OE && !Xq && sq.getPlayerName().toLowerCase() === OE.player.name.toLowerCase(),
        uE = (0, zq.d)(null === OE || void 0 === OE ? void 0 : OE.player.name),
        BE = cE && sq.playerHasRank("youtuber");
      Kq.current = OE;
      const WE = (0, Yq.useCallback)((() => {
          kq && (rq.c.invalidate(kq), rq.c.get(sq, kq).then((qq => {
            Fq.current === Uq && (Iq.current = !0, qE({
              status: "loaded",
              profile: qq,
              playerKey: Uq
            }))
          })).catch((qq => {
            console.error("Failed to refresh user profile", qq)
          })))
        }), [Uq, sq]),
        NE = (0, Yq.useCallback)((() => {
          var qq;
          const Eq = Kq.current;
          return !(!Eq || null === (qq = wq.current) || void 0 === qq || !qq.isReady()) && (wq.current.setAllCosmetics(Eq.player.cosmetics), !0)
        }), []);
      return (0, Yq.useEffect)((() => {
        if (!OE) return;
        let qq, Eq = !1;
        const gq = () => {
          Eq || NE() || (qq = setTimeout(gq, 100))
        };
        return gq(), () => {
          Eq = !0, clearTimeout(qq)
        }
      }), [OE, NE]), (0, Lq.jsxs)("div", {
        className: bq()("PlayerProfile", {
          PlayerProfilePortrait: gq
        }),
        children: [mE && (0, Lq.jsx)(xq.c, {
          meta: mE
        }), (0, Lq.jsxs)("div", {
          className: "PlayerProfileBackgroundContainer",
          children: [AE && (0, Lq.jsx)(AE, {}), !AE && (0, Lq.jsx)("div", {
            className: "PlayerProfileBackground",
            style: {
              backgroundImage: `url(${eq.current})`
            }
          })]
        }), (0, Lq.jsxs)("div", {
          className: "PlayerProfileHeader",
          children: [(0, Lq.jsx)(Qq.d, {
            onClick: YE,
            children: qq("general:back")
          }), OE && !Xq && !cE && pq.featureFlags.useSocialFeatures && (0, Lq.jsx)("div", {
            className: "PlayerProfileExclusionActions",
            children: (0, Lq.jsx)(Sq.c, {
              playerName: OE.player.name,
              className: "SmallTextLight"
            })
          })]
        }), "loading" === lE.status && (0, Lq.jsx)("div", {
          className: "PlayerProfileCentredMessage",
          children: (0, Lq.jsx)(Pq.e, {})
        }), ("notFound" === lE.status || "failed" === lE.status) && (0, Lq.jsxs)("div", {
          className: "PlayerProfileCentredMessage PlayerProfileError",
          children: [(0, Lq.jsx)(iq.d, {
            name: "face-dizzy"
          }), (0, Lq.jsx)("div", {
            className: "PlayerProfileErrorText",
            children: "notFound" === lE.status ? qq("socialBar:playerNotFound", {
              playerName: null !== nq && void 0 !== nq ? nq : vq
            }) : qq("playerProfile:loadFailed")
          }), "failed" === lE.status && (0, Lq.jsx)(Qq.g, {
            onClick: () => {
              gE((qq => qq + 1))
            },
            children: qq("general:tryAgain")
          })]
        }), OE && (0, Lq.jsxs)("div", {
          className: "PlayerProfileContent",
          children: [(0, Lq.jsxs)("div", {
            className: "PlayerProfileLeft",
            children: [(0, Lq.jsx)("div", {
              className: "PlayerProfileName FullyFancyText",
              children: (0, Lq.jsx)(dq.c, {
                text: (0, Hq.u)(OE.player.ranks, OE.player.name, OE.player.nameColour),
                friendBadgeFor: uE ? OE.player.name : void 0
              })
            }), (0, Lq.jsx)("div", {
              className: "PlayerProfileModel",
              children: (0, Lq.jsx)(Yq.Suspense, {
                fallback: (0, Lq.jsx)("div", {
                  className: "PlayerProfileModelLoading",
                  children: (0, Lq.jsx)(Pq.e, {})
                }),
                children: (0, Lq.jsx)(tq.c, {
                  ref: wq,
                  onReady: () => {
                    NE()
                  }
                })
              })
            })]
          }), (0, Lq.jsxs)("div", {
            className: "PlayerProfileRight",
            children: [(0, Lq.jsx)(Rq, {
              profile: OE
            }), (OE.socialLinks.length > 0 || BE) && (0, Lq.jsx)(Zq.d, {
              socialLinks: OE.socialLinks,
              editable: BE,
              userContext: sq,
              onLinksUpdated: WE
            }), (0, Lq.jsxs)("div", {
              className: "PlayerProfileGames",
              children: [(0, Lq.jsx)("div", {
                className: "PlayerProfileGamesTitle SmallTextBold",
                children: qq("homePage:profileReleasedGames")
              }), 0 === OE.releasedGames.length && (0, Lq.jsx)("div", {
                className: "PlayerProfileNoGames",
                children: qq("homePage:profileNoReleasedGames")
              }), OE.releasedGames.length > 0 && (0, Lq.jsx)("div", {
                className: "PlayerProfileGamesGrid",
                children: OE.releasedGames.map((qq => (0, Lq.jsx)(oq.e, {
                  source: {
                    type: "preview",
                    preview: qq
                  },
                  gameWidth: "100%",
                  useLongRatio: !0,
                  hideFavourites: !0,
                  entrySource: "other"
                }, qq.schematicId)))
              })]
            })]
          })]
        })]
      })
    }
  },
  4721: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => dq
    });
    var Yq = gq(1018),
      lq = gq.n(Yq),
      Oq = gq(4465),
      mq = gq(1183),
      xq = gq(1025),
      Aq = gq(1422),
      cq = gq(1477),
      uq = gq(1336),
      Bq = gq(2460),
      Wq = gq(1070);
    const Nq = {
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

    function aq(qq) {
      let {
        platform: Eq
      } = qq;
      const gq = "youtube" === Eq;
      return (0, Wq.jsxs)("span", {
        className: lq()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: gq
        }),
        children: [gq && (0, Wq.jsx)(Bq.b, {
          variant: "white"
        }), !gq && (0, Wq.jsx)(xq.d, {
          name: Nq[Eq].icon,
          kit: "brands"
        })]
      })
    }

    function Vq(qq) {
      let {
        platform: Eq,
        link: gq,
        editable: Yq,
        userContext: lq,
        onLinksUpdated: Bq
      } = qq;
      const {
        t: Vq
      } = (0, mq.v)(), dq = Nq[Eq];
      if (!gq && !Yq) return null;

      function jq() {
        var qq;
        if (!lq || !Bq) return;
        uq.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: dq.name
            }
          },
          prefixText: Oq.w[Eq],
          placeholderText: "playBloxd",
          initialValue: null !== (qq = null === gq || void 0 === gq ? void 0 : gq.handle) && void 0 !== qq ? qq : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: gq ? "general:remove" : void 0
        }).getResult().then((async qq => {
          if ("notificationTornDown" !== qq && null !== qq) try {
            "submit" === qq.type ? await cq.e.setSocialLink(lq, Eq, qq.value) : await cq.e.clearSocialLink(lq, Eq), Bq()
          } catch (gq) {
            console.error("Failed to update social link", gq), uq.NotificationProvider.showAlertPopup({
              title: gq.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (gq) {
        const qq = `@${gq.handle}`;
        return (0, Wq.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: dq.color
          },
          href: gq.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, Wq.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, Wq.jsx)(aq, {
              platform: Eq
            }), (0, Wq.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, Wq.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: qq
              })
            })]
          }), Yq && (0, Wq.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, Aq.V)({
              stopPropagation: !0
            }),
            onClick: qq => {
              qq.stopPropagation(), qq.preventDefault(), jq()
            },
            children: (0, Wq.jsx)(xq.d, {
              name: "pen-to-square"
            })
          }), !Yq && (0, Wq.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, Wq.jsx)(xq.d, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, Wq.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: dq.color
        },
        ...(0, Aq.V)(),
        onClick: () => {
          jq()
        },
        children: [(0, Wq.jsx)(aq, {
          platform: Eq
        }), (0, Wq.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, Wq.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: dq.name
          }), (0, Wq.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: Vq("homePage:profileSocialLinkAdd")
          })]
        }), (0, Wq.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, Wq.jsx)(xq.d, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function dq(qq) {
      let {
        socialLinks: Eq,
        editable: gq = !1,
        userContext: Yq,
        onLinksUpdated: lq
      } = qq;
      if (!gq && 0 === Eq.length) return null;
      const mq = new Map(Eq.map((qq => [qq.platform, qq]))),
        xq = gq ? Oq.u : Eq.map((qq => qq.platform));
      return (0, Wq.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, Wq.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: xq.map((qq => (0, Wq.jsx)(Vq, {
            platform: qq,
            link: mq.get(qq),
            editable: gq,
            userContext: Yq,
            onLinksUpdated: lq
          }, qq)))
        })
      })
    }
  },
  4713: qq => {
    qq.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGOws7P7D8Kmpqb/NTU1wTQymwGbAhANwwzIOmAYxQRkCXNzczBGtgrFBGQFKFZgsxtuAi67YY5HMQGbAgCIxWSBYHJzHAAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);