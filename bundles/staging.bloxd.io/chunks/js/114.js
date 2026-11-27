export const id = 114;
export const ids = [114];
export const modules = {
  5695: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      default: () => wr
    });
    var Zr = Qr(72),
      Wr = Qr(1653),
      ar = Qr(379),
      jr = Qr(1283),
      Ir = Qr(1743),
      fr = Qr(1321),
      Er = Qr(1675),
      pr = Qr(1629),
      xr = Qr(3733);
    const mr = {
      retries: 2,
      minTimeout: 2e3
    };
    var Nr = Qr(1171),
      Ur = Qr(1738),
      tr = Qr(1181),
      hr = Qr(2057),
      zr = Qr(1251),
      Yr = Qr(1279),
      nr = Qr(4743),
      er = Qr(1444),
      Kr = Qr(1576),
      yr = Qr(1644),
      Br = Qr(3672),
      Tr = Qr(3686),
      vr = Qr(5698),
      Or = Qr(3045),
      Lr = Qr(1155),
      lr = Qr.n(Lr),
      Xr = Qr(1448),
      Pr = Qr(5707),
      Hr = Qr(26),
      qr = Qr(2089),
      Rr = Qr(4881),
      gr = Qr(2168),
      Cr = Qr(4849),
      Mr = Qr(109),
      Gr = Qr(5320),
      kr = Qr(1338);
    const Ar = [vr];

    function Vr(rr) {
      let {
        icon: Sr,
        label: Qr,
        value: Zr
      } = rr;
      return (0, kr.jsxs)("div", {
        className: "PlayerProfileStat",
        children: [(0, kr.jsx)(Xr.c, {
          name: Sr,
          className: "PlayerProfileStatIcon"
        }), (0, kr.jsxs)("div", {
          className: "PlayerProfileStatText",
          children: [(0, kr.jsx)("div", {
            className: "PlayerProfileStatLabel SmallTextLight",
            children: Qr
          }), (0, kr.jsx)("div", {
            className: "PlayerProfileStatValue",
            children: Zr
          })]
        })]
      })
    }

    function ir(rr) {
      let {
        profile: Sr
      } = rr;
      const {
        t: Qr,
        selectedLanguage: Zr
      } = (0, zr.E)();
      let Wr = Qr("homePage:profileUnknown");
      if (Sr.lastOnline) {
        const rr = (0, zr.m)(Zr.code, "homePage:profileTimeAgo");
        Wr = Qr("homePage:profileTimeAgo", {
          time: (0, ar.W)(rr, Sr.lastOnline, Date.now())
        })
      }
      let jr = Qr("homePage:profileUnknown");
      return Sr.accountCreatedAt && (jr = new Date(Sr.accountCreatedAt).toLocaleDateString(void 0, {
        year: "numeric",
        month: "short",
        day: "numeric"
      })), (0, kr.jsxs)("div", {
        className: "PlayerProfileStats",
        children: [(0, kr.jsx)(Vr, {
          icon: "hourglass",
          label: Qr("homePage:profileTimePlayed"),
          value: (0, Rr.e)(Sr.totalPlayMinutes)
        }), (0, kr.jsx)(Vr, {
          icon: "wifi",
          label: Qr("homePage:profileLastOnline"),
          value: Wr
        }), (0, kr.jsx)(Vr, {
          icon: "calendar",
          label: Qr("homePage:profileJoined"),
          value: jr
        })]
      })
    }

    function wr() {
      const {
        t: rr
      } = (0, zr.E)(), Sr = (0, yr.useNavigatePreserveSearch)(), Qr = (0, Nr.j)(), {
        playerName: vr,
        playerUrlName: Lr
      } = (0, Wr.w)(), Rr = (0, Wr.s)(), Vr = (0, jr.h)(Rr.pathname), wr = Vr && ("urlId" in Vr ? `urlId:${Vr.urlId}` : `name:${Vr.lowerCaseName}`), cr = (0, Zr.useRef)(wr);
      cr.current = wr;
      const {
        userContext: Fr,
        isUserContextUpdating: or
      } = (0, tr.c)(), br = (0, Zr.useRef)(null), Jr = (0, Zr.useRef)(null), Dr = (0, Zr.useRef)(null), dr = (0, Zr.useRef)(!1), sr = (0, Zr.useRef)((0, ar.Yb)(Ar)), [ur, rS] = (0, Zr.useState)((() => {
        const rr = Vr && Tr.d.peek(Fr, Vr);
        return rr ? {
          status: "loaded",
          profile: rr,
          playerKey: wr
        } : {
          status: "loading"
        }
      })), [SS, QS] = (0, Zr.useState)(0);
      (0, Zr.useEffect)(Br.f, []), (0, Zr.useEffect)((() => {
        qr.gameBridge.send("leaveGame", {
          reloadPath: null
        }), Hr.c.set({
          gameState: "landingPage",
          openEverythingMenuName: null,
          openInGameMenuName: null
        })
      }), [Rr.key]);
      const ZS = () => {
        const rr = (0, yr.getPreviousLocation)();
        null === rr || rr.startsWith("/play") ? (0, yr.navigateToHomePage)() : Sr(-1)
      };
      (0, Gr.e)(ZS), (0, Zr.useEffect)((() => {
        var rr;
        if (or) return;
        if (!Vr) return void rS({
          status: "notFound",
          playerKey: wr
        });
        const Sr = "urlId" in Vr && (null === (rr = Jr.current) || void 0 === rr ? void 0 : rr.urlId) === Vr.urlId && Dr.current === Fr;
        if (Sr && dr.current) return;
        const Qr = Sr ? null : Tr.d.peek(Fr, Vr);
        let Zr = !1;
        const Wr = rr => "loaded" === rr.status && (rr.playerKey === wr || "urlId" in Vr && rr.profile.urlId === Vr.urlId);
        return Qr ? (Dr.current = Fr, dr.current = !1, rS({
          status: "loaded",
          profile: Qr,
          playerKey: wr
        }), Tr.d.invalidate(Vr)) : rS((rr => Wr(rr) ? rr : {
          status: "loading"
        })), async function(rr, Sr) {
          if ("lowerCaseName" in Sr && Sr.lowerCaseName.length > fr.h) return {
            status: "notFound"
          };
          try {
            return {
              status: "loaded",
              profile: await pr.c.getPlayerProfile(rr, Sr, mr)
            }
          } catch (Qr) {
            return (0, xr.e)(Qr) ? {
              status: "notFound"
            } : (console.error("Failed to load user profile", Qr), {
              status: "failed"
            })
          }
        }(Fr, Vr).then((rr => {
          Zr || ("loaded" === rr.status && (Dr.current = Fr, dr.current = !0), rS((Sr => "failed" === rr.status && Wr(Sr) ? Sr : {
            ...rr,
            playerKey: wr
          })))
        })), () => {
          Zr = !0
        }
      }), [or, wr, Fr, SS]);
      const WS = "loading" === ur.status || ur.playerKey === wr || "loaded" === ur.status && !!Vr && "urlId" in Vr && ur.profile.urlId === Vr.urlId ? ur : {
          status: "loading"
        },
        aS = "loaded" === WS.status ? WS.profile : null,
        jS = "loading" === WS.status ? null : function(rr) {
          if ("loaded" === rr.status) {
            const {
              profile: Sr
            } = rr;
            return (0, Er.V)({
              urlId: Sr.urlId,
              name: Sr.player.name,
              ranks: Sr.player.ranks,
              socialLinks: Sr.socialLinks
            })
          }
          return "notFound" === rr.status ? (0, Er.bb)() : null
        }(WS),
        IS = null !== aS && void 0 !== aS && aS.urlId ? (0, jr.l)({
          urlId: aS.urlId,
          name: aS.player.name
        }) : null;
      (0, Ur.e)(IS);
      const fS = null !== aS && void 0 !== aS && aS.player.cosmetics.profileEffect ? Or.f[aS.player.cosmetics.profileEffect] : void 0,
        ES = null !== aS && !or && Fr.getPlayerName().toLowerCase() === aS.player.name.toLowerCase(),
        pS = (0, gr.c)(null === aS || void 0 === aS ? void 0 : aS.player.name),
        xS = ES && Fr.playerHasRank("youtuber");
      Jr.current = aS;
      const mS = (0, Zr.useCallback)((() => {
          Vr && (Tr.d.invalidate(Vr), Tr.d.get(Fr, Vr).then((rr => {
            cr.current === wr && (dr.current = !0, rS({
              status: "loaded",
              profile: rr,
              playerKey: wr
            }))
          })).catch((rr => {
            console.error("Failed to refresh user profile", rr)
          })))
        }), [wr, Fr]),
        NS = (0, Zr.useCallback)((() => {
          var rr;
          const Sr = Jr.current;
          return !(!Sr || null === (rr = br.current) || void 0 === rr || !rr.isReady()) && (br.current.setAllCosmetics(Sr.player.cosmetics), !0)
        }), []);
      return (0, Zr.useEffect)((() => {
        if (!aS) return;
        let rr, Sr = !1;
        const Qr = () => {
          Sr || NS() || (rr = setTimeout(Qr, 100))
        };
        return Qr(), () => {
          Sr = !0, clearTimeout(rr)
        }
      }), [aS, NS]), (0, kr.jsxs)("div", {
        className: lr()("PlayerProfile", {
          PlayerProfilePortrait: Qr
        }),
        children: [jS && (0, kr.jsx)(Ir.b, {
          meta: jS
        }), (0, kr.jsxs)("div", {
          className: "PlayerProfileBackgroundContainer",
          children: [fS && (0, kr.jsx)(fS, {}), !fS && (0, kr.jsx)("div", {
            className: "PlayerProfileBackground",
            style: {
              backgroundImage: `url(${sr.current})`
            }
          })]
        }), (0, kr.jsxs)("div", {
          className: "PlayerProfileHeader",
          children: [(0, kr.jsx)(Kr.d, {
            onClick: ZS,
            children: rr("general:back")
          }), aS && !or && !ES && Mr.featureFlags.useSocialFeatures && (0, kr.jsx)("div", {
            className: "PlayerProfileExclusionActions",
            children: (0, kr.jsx)(Cr.b, {
              playerName: aS.player.name,
              className: "SmallTextLight"
            })
          })]
        }), "loading" === WS.status && (0, kr.jsx)("div", {
          className: "PlayerProfileCentredMessage",
          children: (0, kr.jsx)(er.c, {})
        }), ("notFound" === WS.status || "failed" === WS.status) && (0, kr.jsxs)("div", {
          className: "PlayerProfileCentredMessage PlayerProfileError",
          children: [(0, kr.jsx)(Xr.c, {
            name: "face-dizzy"
          }), (0, kr.jsx)("div", {
            className: "PlayerProfileErrorText",
            children: "notFound" === WS.status ? rr("socialBar:playerNotFound", {
              playerName: null !== Lr && void 0 !== Lr ? Lr : vr
            }) : rr("playerProfile:loadFailed")
          }), "failed" === WS.status && (0, kr.jsx)(Kr.h, {
            onClick: () => {
              QS((rr => rr + 1))
            },
            children: rr("general:tryAgain")
          })]
        }), aS && (0, kr.jsxs)("div", {
          className: "PlayerProfileContent",
          children: [(0, kr.jsxs)("div", {
            className: "PlayerProfileLeft",
            children: [(0, kr.jsx)("div", {
              className: "PlayerProfileName FullyFancyText",
              children: (0, kr.jsx)(hr.c, {
                text: (0, Yr.x)(aS.player.ranks, aS.player.name, aS.player.nameColour),
                friendBadgeFor: pS ? aS.player.name : void 0
              })
            }), (0, kr.jsx)("div", {
              className: "PlayerProfileModel",
              children: (0, kr.jsx)(Zr.Suspense, {
                fallback: (0, kr.jsx)("div", {
                  className: "PlayerProfileModelLoading",
                  children: (0, kr.jsx)(er.c, {})
                }),
                children: (0, kr.jsx)(Br.b, {
                  ref: br,
                  onReady: () => {
                    NS()
                  }
                })
              })
            })]
          }), (0, kr.jsxs)("div", {
            className: "PlayerProfileRight",
            children: [(0, kr.jsx)(ir, {
              profile: aS
            }), (aS.socialLinks.length > 0 || xS) && (0, kr.jsx)(Pr.e, {
              socialLinks: aS.socialLinks,
              editable: xS,
              userContext: Fr,
              onLinksUpdated: mS
            }), (0, kr.jsxs)("div", {
              className: "PlayerProfileGames",
              children: [(0, kr.jsx)("div", {
                className: "PlayerProfileGamesTitle SmallTextBold",
                children: rr("homePage:profileReleasedGames")
              }), 0 === aS.releasedGames.length && (0, kr.jsx)("div", {
                className: "PlayerProfileNoGames",
                children: rr("homePage:profileNoReleasedGames")
              }), aS.releasedGames.length > 0 && (0, kr.jsx)("div", {
                className: "PlayerProfileGamesGrid",
                children: aS.releasedGames.map((rr => (0, kr.jsx)(nr.e, {
                  source: {
                    type: "preview",
                    preview: rr
                  },
                  gameWidth: "100%",
                  useLongRatio: !0,
                  hideFavourites: !0,
                  entrySource: "other"
                }, rr.schematicId)))
              })]
            })]
          })]
        })]
      })
    }
  },
  5707: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => hr
    });
    var Zr = Qr(1155),
      Wr = Qr.n(Zr),
      ar = Qr(5390),
      jr = Qr(1251),
      Ir = Qr(1448),
      fr = Qr(1576),
      Er = Qr(1629),
      pr = Qr(1475),
      xr = Qr(3536),
      mr = Qr(1338);
    const Nr = {
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

    function Ur(rr) {
      let {
        platform: Sr
      } = rr;
      const Qr = "youtube" === Sr;
      return (0, mr.jsxs)("span", {
        className: Wr()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: Qr
        }),
        children: [Qr && (0, mr.jsx)(xr.c, {
          variant: "white"
        }), !Qr && (0, mr.jsx)(Ir.c, {
          name: Nr[Sr].icon,
          kit: "brands"
        })]
      })
    }

    function tr(rr) {
      let {
        platform: Sr,
        link: Qr,
        editable: Zr,
        userContext: Wr,
        onLinksUpdated: xr
      } = rr;
      const {
        t: tr
      } = (0, jr.E)(), hr = Nr[Sr];
      if (!Qr && !Zr) return null;

      function zr() {
        var rr;
        if (!Wr || !xr) return;
        pr.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: hr.name
            }
          },
          prefixText: ar.v[Sr],
          placeholderText: "playBloxd",
          initialValue: null !== (rr = null === Qr || void 0 === Qr ? void 0 : Qr.handle) && void 0 !== rr ? rr : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: Qr ? "general:remove" : void 0
        }).getResult().then((async rr => {
          if ("notificationTornDown" !== rr && null !== rr) try {
            "submit" === rr.type ? await Er.c.setSocialLink(Wr, Sr, rr.value) : await Er.c.clearSocialLink(Wr, Sr), xr()
          } catch (Qr) {
            console.error("Failed to update social link", Qr), pr.NotificationProvider.showAlertPopup({
              title: Qr.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (Qr) {
        const rr = `@${Qr.handle}`;
        return (0, mr.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: hr.color
          },
          href: Qr.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, mr.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, mr.jsx)(Ur, {
              platform: Sr
            }), (0, mr.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, mr.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: rr
              })
            })]
          }), Zr && (0, mr.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, fr._)({
              stopPropagation: !0
            }),
            onClick: rr => {
              rr.stopPropagation(), rr.preventDefault(), zr()
            },
            children: (0, mr.jsx)(Ir.c, {
              name: "pen-to-square"
            })
          }), !Zr && (0, mr.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, mr.jsx)(Ir.c, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, mr.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: hr.color
        },
        ...(0, fr._)(),
        onClick: () => {
          zr()
        },
        children: [(0, mr.jsx)(Ur, {
          platform: Sr
        }), (0, mr.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, mr.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: hr.name
          }), (0, mr.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: tr("homePage:profileSocialLinkAdd")
          })]
        }), (0, mr.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, mr.jsx)(Ir.c, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function hr(rr) {
      let {
        socialLinks: Sr,
        editable: Qr = !1,
        userContext: Zr,
        onLinksUpdated: Wr
      } = rr;
      if (!Qr && 0 === Sr.length) return null;
      const jr = new Map(Sr.map((rr => [rr.platform, rr]))),
        Ir = Qr ? ar.r : Sr.map((rr => rr.platform));
      return (0, mr.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, mr.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: Ir.map((rr => (0, mr.jsx)(tr, {
            platform: rr,
            link: jr.get(rr),
            editable: Qr,
            userContext: Zr,
            onLinksUpdated: Wr
          }, rr)))
        })
      })
    }
  },
  5698: rr => {
    rr.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGOws7P7D8Kmpqb/NTU1wTQymwGbAhANwwzIOmAYxQRkCXNzczBGtgrFBGQFKFZgsxtuAi67YY5HMQGbAgCIxWSBYHJzHAAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);