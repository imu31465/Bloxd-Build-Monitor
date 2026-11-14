export const id = 82;
export const ids = [82];
export const modules = {
  3921: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      default: () => Fc
    });
    var Vc = nc(73),
      Ic = nc(1344),
      rB = nc(302),
      uc = nc(1102),
      sc = nc(1440),
      Mc = nc(1128),
      Pc = nc(1370),
      qB = nc(1314),
      Oc = nc(2092);
    const Tc = {
      retries: 2,
      minTimeout: 2e3
    };
    var fc = nc(974),
      mB = nc(1432),
      ec = nc(985),
      tB = nc(1536),
      Sc = nc(1051),
      yB = nc(1090),
      zB = nc(2648),
      pc = nc(1188),
      hc = nc(1255),
      aB = nc(1330),
      lc = nc(2045),
      Yc = nc(2052),
      Lc = nc(3929),
      gB = nc(1762),
      Uc = nc(912),
      bB = nc.n(Uc),
      Zc = nc(926),
      Qc = nc(3937),
      Cc = nc(27),
      vB = nc(1566),
      Dc = nc(2804),
      Nc = nc(1657),
      Ec = nc(2769),
      oc = nc(107),
      Wc = nc(3659),
      wc = nc(957);
    const kB = [Lc];

    function Xc(cB) {
      let {
        icon: Bc,
        label: nc,
        value: Vc
      } = cB;
      return (0, wc.jsxs)("div", {
        className: "PlayerProfileStat",
        children: [(0, wc.jsx)(Zc.e, {
          name: Bc,
          className: "PlayerProfileStatIcon"
        }), (0, wc.jsxs)("div", {
          className: "PlayerProfileStatText",
          children: [(0, wc.jsx)("div", {
            className: "PlayerProfileStatLabel SmallTextLight",
            children: nc
          }), (0, wc.jsx)("div", {
            className: "PlayerProfileStatValue",
            children: Vc
          })]
        })]
      })
    }

    function Hc(cB) {
      let {
        profile: Bc
      } = cB;
      const {
        t: nc,
        selectedLanguage: Vc
      } = (0, Sc.x)();
      let Ic = nc("homePage:profileUnknown");
      if (Bc.lastOnline) {
        const cB = (0, Sc.h)(Vc.code, "homePage:profileTimeAgo");
        Ic = nc("homePage:profileTimeAgo", {
          time: (0, rB.X)(cB, Bc.lastOnline, Date.now())
        })
      }
      let uc = nc("homePage:profileUnknown");
      return Bc.accountCreatedAt && (uc = new Date(Bc.accountCreatedAt).toLocaleDateString(void 0, {
        year: "numeric",
        month: "short",
        day: "numeric"
      })), (0, wc.jsxs)("div", {
        className: "PlayerProfileStats",
        children: [(0, wc.jsx)(Xc, {
          icon: "hourglass",
          label: nc("homePage:profileTimePlayed"),
          value: (0, Dc.c)(Bc.totalPlayMinutes)
        }), (0, wc.jsx)(Xc, {
          icon: "wifi",
          label: nc("homePage:profileLastOnline"),
          value: Ic
        }), (0, wc.jsx)(Xc, {
          icon: "calendar",
          label: nc("homePage:profileJoined"),
          value: uc
        })]
      })
    }

    function Fc() {
      const {
        t: cB
      } = (0, Sc.x)(), Bc = (0, aB.useNavigatePreserveSearch)(), nc = (0, fc.j)(), {
        playerName: Lc,
        playerUrlName: Uc
      } = (0, Ic.z)(), Dc = (0, Ic.s)(), Xc = (0, uc.g)(Dc.pathname), Fc = Xc && ("urlId" in Xc ? `urlId:${Xc.urlId}` : `name:${Xc.lowerCaseName}`), Jc = (0, Vc.useRef)(Fc);
      Jc.current = Fc;
      const {
        userContext: jB,
        isUserContextUpdating: Rc
      } = (0, ec.c)(), iB = (0, Vc.useRef)(null), Kc = (0, Vc.useRef)(null), xB = (0, Vc.useRef)(null), dc = (0, Vc.useRef)(!1), Ac = (0, Vc.useRef)((0, rB.Jb)(kB)), [Gc, cn] = (0, Vc.useState)((() => {
        const cB = Xc && Yc.d.peek(jB, Xc);
        return cB ? {
          status: "loaded",
          profile: cB,
          playerKey: Fc
        } : {
          status: "loading"
        }
      })), [BB, nB] = (0, Vc.useState)(0);
      (0, Vc.useEffect)(lc.d, []), (0, Vc.useEffect)((() => {
        vB.gameBridge.send("leaveGame", {
          reloadPath: null
        }), Cc.d.set({
          gameState: "landingPage",
          openEverythingMenuName: null,
          openInGameMenuName: null
        })
      }), [Dc.key]);
      const VB = () => {
        const cB = (0, aB.getPreviousLocation)();
        null === cB || cB.startsWith("/play") ? (0, aB.navigateToHomePage)() : Bc(-1)
      };
      (0, Wc.e)(VB), (0, Vc.useEffect)((() => {
        var cB;
        if (Rc) return;
        if (!Xc) return void cn({
          status: "notFound",
          playerKey: Fc
        });
        const Bc = "urlId" in Xc && (null === (cB = Kc.current) || void 0 === cB ? void 0 : cB.urlId) === Xc.urlId && xB.current === jB;
        if (Bc && dc.current) return;
        const nc = Bc ? null : Yc.d.peek(jB, Xc);
        let Vc = !1;
        const Ic = cB => "loaded" === cB.status && (cB.playerKey === Fc || "urlId" in Xc && cB.profile.urlId === Xc.urlId);
        return nc ? (xB.current = jB, dc.current = !1, cn({
          status: "loaded",
          profile: nc,
          playerKey: Fc
        }), Yc.d.invalidate(Xc)) : cn((cB => Ic(cB) ? cB : {
          status: "loading"
        })), async function(cB, Bc) {
          if ("lowerCaseName" in Bc && Bc.lowerCaseName.length > Mc.h) return {
            status: "notFound"
          };
          try {
            return {
              status: "loaded",
              profile: await qB.e.getPlayerProfile(cB, Bc, Tc)
            }
          } catch (nc) {
            return (0, Oc.c)(nc) ? {
              status: "notFound"
            } : (console.error("Failed to load user profile", nc), {
              status: "failed"
            })
          }
        }(jB, Xc).then((cB => {
          Vc || ("loaded" === cB.status && (xB.current = jB, dc.current = !0), cn((Bc => "failed" === cB.status && Ic(Bc) ? Bc : {
            ...cB,
            playerKey: Fc
          })))
        })), () => {
          Vc = !0
        }
      }), [Rc, Fc, jB, BB]);
      const IB = "loading" === Gc.status || Gc.playerKey === Fc || "loaded" === Gc.status && !!Xc && "urlId" in Xc && Gc.profile.urlId === Xc.urlId ? Gc : {
          status: "loading"
        },
        rn = "loaded" === IB.status ? IB.profile : null,
        uB = "loading" === IB.status ? null : function(cB) {
          if ("loaded" === cB.status) {
            const {
              profile: Bc
            } = cB;
            return (0, Pc.V)({
              urlId: Bc.urlId,
              name: Bc.player.name,
              ranks: Bc.player.ranks,
              socialLinks: Bc.socialLinks
            })
          }
          return "notFound" === cB.status ? (0, Pc.eb)() : null
        }(IB),
        sB = null !== rn && void 0 !== rn && rn.urlId ? (0, uc.h)({
          urlId: rn.urlId,
          name: rn.player.name
        }) : null;
      (0, mB.g)(sB);
      const MB = null !== rn && void 0 !== rn && rn.player.cosmetics.profileEffect ? gB.f[rn.player.cosmetics.profileEffect] : void 0,
        PB = null !== rn && !Rc && jB.getPlayerName().toLowerCase() === rn.player.name.toLowerCase(),
        qn = (0, Nc.e)(null === rn || void 0 === rn ? void 0 : rn.player.name),
        OB = PB && jB.playerHasRank("youtuber");
      Kc.current = rn;
      const TB = (0, Vc.useCallback)((() => {
          Xc && (Yc.d.invalidate(Xc), Yc.d.get(jB, Xc).then((cB => {
            Jc.current === Fc && (dc.current = !0, cn({
              status: "loaded",
              profile: cB,
              playerKey: Fc
            }))
          })).catch((cB => {
            console.error("Failed to refresh user profile", cB)
          })))
        }), [Fc, jB]),
        fB = (0, Vc.useCallback)((() => {
          var cB;
          const Bc = Kc.current;
          return !(!Bc || null === (cB = iB.current) || void 0 === cB || !cB.isReady()) && (iB.current.setAllCosmetics(Bc.player.cosmetics), !0)
        }), []);
      return (0, Vc.useEffect)((() => {
        if (!rn) return;
        let cB, Bc = !1;
        const nc = () => {
          Bc || fB() || (cB = setTimeout(nc, 100))
        };
        return nc(), () => {
          Bc = !0, clearTimeout(cB)
        }
      }), [rn, fB]), (0, wc.jsxs)("div", {
        className: bB()("PlayerProfile", {
          PlayerProfilePortrait: nc
        }),
        children: [uB && (0, wc.jsx)(sc.e, {
          meta: uB
        }), (0, wc.jsxs)("div", {
          className: "PlayerProfileBackgroundContainer",
          children: [MB && (0, wc.jsx)(MB, {}), !MB && (0, wc.jsx)("div", {
            className: "PlayerProfileBackground",
            style: {
              backgroundImage: `url(${Ac.current})`
            }
          })]
        }), (0, wc.jsxs)("div", {
          className: "PlayerProfileHeader",
          children: [(0, wc.jsx)(hc.c, {
            onClick: VB,
            children: cB("general:back")
          }), rn && !Rc && !PB && oc.featureFlags.useSocialFeatures && (0, wc.jsx)("div", {
            className: "PlayerProfileExclusionActions",
            children: (0, wc.jsx)(Ec.b, {
              playerName: rn.player.name,
              className: "SmallTextLight"
            })
          })]
        }), "loading" === IB.status && (0, wc.jsx)("div", {
          className: "PlayerProfileCentredMessage",
          children: (0, wc.jsx)(pc.e, {})
        }), ("notFound" === IB.status || "failed" === IB.status) && (0, wc.jsxs)("div", {
          className: "PlayerProfileCentredMessage PlayerProfileError",
          children: [(0, wc.jsx)(Zc.e, {
            name: "face-dizzy"
          }), (0, wc.jsx)("div", {
            className: "PlayerProfileErrorText",
            children: "notFound" === IB.status ? cB("socialBar:playerNotFound", {
              playerName: null !== Uc && void 0 !== Uc ? Uc : Lc
            }) : cB("playerProfile:loadFailed")
          }), "failed" === IB.status && (0, wc.jsx)(hc.d, {
            onClick: () => {
              nB((cB => cB + 1))
            },
            children: cB("general:tryAgain")
          })]
        }), rn && (0, wc.jsxs)("div", {
          className: "PlayerProfileContent",
          children: [(0, wc.jsxs)("div", {
            className: "PlayerProfileLeft",
            children: [(0, wc.jsx)("div", {
              className: "PlayerProfileName FullyFancyText",
              children: (0, wc.jsx)(tB.e, {
                text: (0, yB.u)(rn.player.ranks, rn.player.name, rn.player.nameColour),
                friendBadgeFor: qn ? rn.player.name : void 0
              })
            }), (0, wc.jsx)("div", {
              className: "PlayerProfileModel",
              children: (0, wc.jsx)(Vc.Suspense, {
                fallback: (0, wc.jsx)("div", {
                  className: "PlayerProfileModelLoading",
                  children: (0, wc.jsx)(pc.e, {})
                }),
                children: (0, wc.jsx)(lc.c, {
                  ref: iB,
                  onReady: () => {
                    fB()
                  }
                })
              })
            })]
          }), (0, wc.jsxs)("div", {
            className: "PlayerProfileRight",
            children: [(0, wc.jsx)(Hc, {
              profile: rn
            }), (rn.socialLinks.length > 0 || OB) && (0, wc.jsx)(Qc.b, {
              socialLinks: rn.socialLinks,
              editable: OB,
              userContext: jB,
              onLinksUpdated: TB
            }), (0, wc.jsxs)("div", {
              className: "PlayerProfileGames",
              children: [(0, wc.jsx)("div", {
                className: "PlayerProfileGamesTitle SmallTextBold",
                children: cB("homePage:profileReleasedGames")
              }), 0 === rn.releasedGames.length && (0, wc.jsx)("div", {
                className: "PlayerProfileNoGames",
                children: cB("homePage:profileNoReleasedGames")
              }), rn.releasedGames.length > 0 && (0, wc.jsx)("div", {
                className: "PlayerProfileGamesGrid",
                children: rn.releasedGames.map((cB => (0, wc.jsx)(zB.g, {
                  source: {
                    type: "preview",
                    preview: cB
                  },
                  gameWidth: "100%",
                  useLongRatio: !0,
                  hideFavourites: !0,
                  entrySource: "other"
                }, cB.schematicId)))
              })]
            })]
          })]
        })]
      })
    }
  },
  3937: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => tB
    });
    var Vc = nc(912),
      Ic = nc.n(Vc),
      rB = nc(3731),
      uc = nc(1051),
      sc = nc(926),
      Mc = nc(1255),
      Pc = nc(1314),
      qB = nc(1194),
      Oc = nc(1959),
      Tc = nc(957);
    const fc = {
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

    function mB(cB) {
      let {
        platform: Bc
      } = cB;
      const nc = "youtube" === Bc;
      return (0, Tc.jsxs)("span", {
        className: Ic()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: nc
        }),
        children: [nc && (0, Tc.jsx)(Oc.c, {
          variant: "white"
        }), !nc && (0, Tc.jsx)(sc.e, {
          name: fc[Bc].icon,
          kit: "brands"
        })]
      })
    }

    function ec(cB) {
      let {
        platform: Bc,
        link: nc,
        editable: Vc,
        userContext: Ic,
        onLinksUpdated: Oc
      } = cB;
      const {
        t: ec
      } = (0, uc.x)(), tB = fc[Bc];
      if (!nc && !Vc) return null;

      function Sc() {
        var cB;
        if (!Ic || !Oc) return;
        qB.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: tB.name
            }
          },
          prefixText: rB.t[Bc],
          placeholderText: "playBloxd",
          initialValue: null !== (cB = null === nc || void 0 === nc ? void 0 : nc.handle) && void 0 !== cB ? cB : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: nc ? "general:remove" : void 0
        }).getResult().then((async cB => {
          if ("notificationTornDown" !== cB && null !== cB) try {
            "submit" === cB.type ? await Pc.e.setSocialLink(Ic, Bc, cB.value) : await Pc.e.clearSocialLink(Ic, Bc), Oc()
          } catch (nc) {
            console.error("Failed to update social link", nc), qB.NotificationProvider.showAlertPopup({
              title: nc.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (nc) {
        const cB = `@${nc.handle}`;
        return (0, Tc.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: tB.color
          },
          href: nc.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, Tc.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, Tc.jsx)(mB, {
              platform: Bc
            }), (0, Tc.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, Tc.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: cB
              })
            })]
          }), Vc && (0, Tc.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, Mc.S)({
              stopPropagation: !0
            }),
            onClick: cB => {
              cB.stopPropagation(), cB.preventDefault(), Sc()
            },
            children: (0, Tc.jsx)(sc.e, {
              name: "pen-to-square"
            })
          }), !Vc && (0, Tc.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, Tc.jsx)(sc.e, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, Tc.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: tB.color
        },
        ...(0, Mc.S)(),
        onClick: () => {
          Sc()
        },
        children: [(0, Tc.jsx)(mB, {
          platform: Bc
        }), (0, Tc.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, Tc.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: tB.name
          }), (0, Tc.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: ec("homePage:profileSocialLinkAdd")
          })]
        }), (0, Tc.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, Tc.jsx)(sc.e, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function tB(cB) {
      let {
        socialLinks: Bc,
        editable: nc = !1,
        userContext: Vc,
        onLinksUpdated: Ic
      } = cB;
      if (!nc && 0 === Bc.length) return null;
      const uc = new Map(Bc.map((cB => [cB.platform, cB]))),
        sc = nc ? rB.r : Bc.map((cB => cB.platform));
      return (0, Tc.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, Tc.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: sc.map((cB => (0, Tc.jsx)(ec, {
            platform: cB,
            link: uc.get(cB),
            editable: nc,
            userContext: Vc,
            onLinksUpdated: Ic
          }, cB)))
        })
      })
    }
  },
  3929: cB => {
    cB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGOws7P7D8Kmpqb/NTU1wTQymwGbAhANwwzIOmAYxQRkCXNzczBGtgrFBGQFKFZgsxtuAi67YY5HMQGbAgCIxWSBYHJzHAAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);