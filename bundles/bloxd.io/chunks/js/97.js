export const id = 97;
export const ids = [97];
export const modules = {
  4815: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      default: () => ck
    });
    var Dk = ik(60),
      fk = ik(1496),
      Sk = ik(314),
      bk = ik(1216),
      rk = ik(1587),
      Pk = ik(1248),
      mk = ik(1519),
      Mk = ik(1459),
      Kk = ik(2613);
    const xk = {
      retries: 2,
      minTimeout: 2e3
    };
    var nk = ik(1085),
      Uk = ik(1579),
      Hk = ik(1095),
      wk = ik(1858),
      lk = ik(1172),
      pk = ik(1207),
      yk = ik(3433),
      Yk = ik(1327),
      Lk = ik(1410),
      Ck = ik(1479),
      Ak = ik(2558),
      jk = ik(2570),
      sk = ik(4817),
      dk = ik(2130),
      Vk = ik(1021),
      Fk = ik.n(Vk),
      uk = ik(1033),
      qk = ik(4823),
      Ik = ik(22),
      zk = ik(1893),
      Qk = ik(3595),
      vk = ik(1981),
      Ek = ik(3539),
      hk = ik(99),
      ak = ik(4496),
      Wk = ik(1066);
    const tk = [sk];

    function Xk(kk) {
      let {
        icon: ek,
        label: ik,
        value: Dk
      } = kk;
      return (0, Wk.jsxs)("div", {
        className: "PlayerProfileStat",
        children: [(0, Wk.jsx)(uk.d, {
          name: ek,
          className: "PlayerProfileStatIcon"
        }), (0, Wk.jsxs)("div", {
          className: "PlayerProfileStatText",
          children: [(0, Wk.jsx)("div", {
            className: "PlayerProfileStatLabel SmallTextLight",
            children: ik
          }), (0, Wk.jsx)("div", {
            className: "PlayerProfileStatValue",
            children: Dk
          })]
        })]
      })
    }

    function Bk(kk) {
      let {
        profile: ek
      } = kk;
      const {
        t: ik,
        selectedLanguage: Dk
      } = (0, lk.D)();
      let fk = ik("homePage:profileUnknown");
      if (ek.lastOnline) {
        const kk = (0, lk.n)(Dk.code, "homePage:profileTimeAgo");
        fk = ik("homePage:profileTimeAgo", {
          time: (0, Sk.T)(kk, ek.lastOnline, Date.now())
        })
      }
      let bk = ik("homePage:profileUnknown");
      return ek.accountCreatedAt && (bk = new Date(ek.accountCreatedAt).toLocaleDateString(void 0, {
        year: "numeric",
        month: "short",
        day: "numeric"
      })), (0, Wk.jsxs)("div", {
        className: "PlayerProfileStats",
        children: [(0, Wk.jsx)(Xk, {
          icon: "hourglass",
          label: ik("homePage:profileTimePlayed"),
          value: (0, Qk.e)(ek.totalPlayMinutes)
        }), (0, Wk.jsx)(Xk, {
          icon: "wifi",
          label: ik("homePage:profileLastOnline"),
          value: fk
        }), (0, Wk.jsx)(Xk, {
          icon: "calendar",
          label: ik("homePage:profileJoined"),
          value: bk
        })]
      })
    }

    function ck() {
      const {
        t: kk
      } = (0, lk.D)(), ek = (0, Ck.useNavigatePreserveSearch)(), ik = (0, nk.k)(), {
        playerName: sk,
        playerUrlName: Vk
      } = (0, fk.y)(), Qk = (0, fk.p)(), Xk = (0, bk.e)(Qk.pathname), ck = Xk && ("urlId" in Xk ? `urlId:${Xk.urlId}` : `name:${Xk.lowerCaseName}`), Tk = (0, Dk.useRef)(ck);
      Tk.current = ck;
      const {
        userContext: Zk,
        isUserContextUpdating: Ok
      } = (0, Hk.d)(), gk = (0, Dk.useRef)(null), Gk = (0, Dk.useRef)(null), Nk = (0, Dk.useRef)(null), Rk = (0, Dk.useRef)(!1), Jk = (0, Dk.useRef)((0, Sk.Nb)(tk)), [ke, ee] = (0, Dk.useState)((() => {
        const kk = Xk && jk.c.peek(Zk, Xk);
        return kk ? {
          status: "loaded",
          profile: kk,
          playerKey: ck
        } : {
          status: "loading"
        }
      })), [ie, De] = (0, Dk.useState)(0);
      (0, Dk.useEffect)(Ak.f, []), (0, Dk.useEffect)((() => {
        zk.gameBridge.send("leaveGame", {
          reloadPath: null
        }), Ik.b.set({
          gameState: "landingPage",
          openEverythingMenuName: null,
          openInGameMenuName: null
        })
      }), [Qk.key]);
      const fe = () => {
        const kk = (0, Ck.getPreviousLocation)();
        null === kk || kk.startsWith("/play") ? (0, Ck.navigateToHomePage)() : ek(-1)
      };
      (0, ak.b)(fe), (0, Dk.useEffect)((() => {
        var kk;
        if (Ok) return;
        if (!Xk) return void ee({
          status: "notFound",
          playerKey: ck
        });
        const ek = "urlId" in Xk && (null === (kk = Gk.current) || void 0 === kk ? void 0 : kk.urlId) === Xk.urlId && Nk.current === Zk;
        if (ek && Rk.current) return;
        const ik = ek ? null : jk.c.peek(Zk, Xk);
        let Dk = !1;
        const fk = kk => "loaded" === kk.status && (kk.playerKey === ck || "urlId" in Xk && kk.profile.urlId === Xk.urlId);
        return ik ? (Nk.current = Zk, Rk.current = !1, ee({
          status: "loaded",
          profile: ik,
          playerKey: ck
        }), jk.c.invalidate(Xk)) : ee((kk => fk(kk) ? kk : {
          status: "loading"
        })), async function(kk, ek) {
          if ("lowerCaseName" in ek && ek.lowerCaseName.length > Pk.h) return {
            status: "notFound"
          };
          try {
            return {
              status: "loaded",
              profile: await Mk.b.getPlayerProfile(kk, ek, xk)
            }
          } catch (ik) {
            return (0, Kk.e)(ik) ? {
              status: "notFound"
            } : (console.error("Failed to load user profile", ik), {
              status: "failed"
            })
          }
        }(Zk, Xk).then((kk => {
          Dk || ("loaded" === kk.status && (Nk.current = Zk, Rk.current = !0), ee((ek => "failed" === kk.status && fk(ek) ? ek : {
            ...kk,
            playerKey: ck
          })))
        })), () => {
          Dk = !0
        }
      }), [Ok, ck, Zk, ie]);
      const Se = "loading" === ke.status || ke.playerKey === ck || "loaded" === ke.status && !!Xk && "urlId" in Xk && ke.profile.urlId === Xk.urlId ? ke : {
          status: "loading"
        },
        be = "loaded" === Se.status ? Se.profile : null,
        re = "loading" === Se.status ? null : function(kk) {
          if ("loaded" === kk.status) {
            const {
              profile: ek
            } = kk;
            return (0, mk.R)({
              urlId: ek.urlId,
              name: ek.player.name,
              ranks: ek.player.ranks,
              socialLinks: ek.socialLinks
            })
          }
          return "notFound" === kk.status ? (0, mk.$)() : null
        }(Se),
        Pe = null !== be && void 0 !== be && be.urlId ? (0, bk.f)({
          urlId: be.urlId,
          name: be.player.name
        }) : null;
      (0, Uk.h)(Pe);
      const me = null !== be && void 0 !== be && be.player.cosmetics.profileEffect ? dk.g[be.player.cosmetics.profileEffect] : void 0,
        Me = null !== be && !Ok && Zk.getPlayerName().toLowerCase() === be.player.name.toLowerCase(),
        Ke = (0, vk.b)(null === be || void 0 === be ? void 0 : be.player.name),
        xe = Me && Zk.playerHasRank("youtuber");
      Gk.current = be;
      const ne = (0, Dk.useCallback)((() => {
          Xk && (jk.c.invalidate(Xk), jk.c.get(Zk, Xk).then((kk => {
            Tk.current === ck && (Rk.current = !0, ee({
              status: "loaded",
              profile: kk,
              playerKey: ck
            }))
          })).catch((kk => {
            console.error("Failed to refresh user profile", kk)
          })))
        }), [ck, Zk]),
        Ue = (0, Dk.useCallback)((() => {
          var kk;
          const ek = Gk.current;
          return !(!ek || null === (kk = gk.current) || void 0 === kk || !kk.isReady()) && (gk.current.setAllCosmetics(ek.player.cosmetics), !0)
        }), []);
      return (0, Dk.useEffect)((() => {
        if (!be) return;
        let kk, ek = !1;
        const ik = () => {
          ek || Ue() || (kk = setTimeout(ik, 100))
        };
        return ik(), () => {
          ek = !0, clearTimeout(kk)
        }
      }), [be, Ue]), (0, Wk.jsxs)("div", {
        className: Fk()("PlayerProfile", {
          PlayerProfilePortrait: ik
        }),
        children: [re && (0, Wk.jsx)(rk.e, {
          meta: re
        }), (0, Wk.jsxs)("div", {
          className: "PlayerProfileBackgroundContainer",
          children: [me && (0, Wk.jsx)(me, {}), !me && (0, Wk.jsx)("div", {
            className: "PlayerProfileBackground",
            style: {
              backgroundImage: `url(${Jk.current})`
            }
          })]
        }), (0, Wk.jsxs)("div", {
          className: "PlayerProfileHeader",
          children: [(0, Wk.jsx)(Lk.e, {
            onClick: fe,
            children: kk("general:back")
          }), be && !Ok && !Me && hk.featureFlags.useSocialFeatures && (0, Wk.jsx)("div", {
            className: "PlayerProfileExclusionActions",
            children: (0, Wk.jsx)(Ek.d, {
              playerName: be.player.name,
              className: "SmallTextLight"
            })
          })]
        }), "loading" === Se.status && (0, Wk.jsx)("div", {
          className: "PlayerProfileCentredMessage",
          children: (0, Wk.jsx)(Yk.d, {})
        }), ("notFound" === Se.status || "failed" === Se.status) && (0, Wk.jsxs)("div", {
          className: "PlayerProfileCentredMessage PlayerProfileError",
          children: [(0, Wk.jsx)(uk.d, {
            name: "face-dizzy"
          }), (0, Wk.jsx)("div", {
            className: "PlayerProfileErrorText",
            children: "notFound" === Se.status ? kk("socialBar:playerNotFound", {
              playerName: null !== Vk && void 0 !== Vk ? Vk : sk
            }) : kk("playerProfile:loadFailed")
          }), "failed" === Se.status && (0, Wk.jsx)(Lk.f, {
            onClick: () => {
              De((kk => kk + 1))
            },
            children: kk("general:tryAgain")
          })]
        }), be && (0, Wk.jsxs)("div", {
          className: "PlayerProfileContent",
          children: [(0, Wk.jsxs)("div", {
            className: "PlayerProfileLeft",
            children: [(0, Wk.jsx)("div", {
              className: "PlayerProfileName FullyFancyText",
              children: (0, Wk.jsx)(wk.e, {
                text: (0, pk.v)(be.player.ranks, be.player.name, be.player.nameColour),
                friendBadgeFor: Ke ? be.player.name : void 0
              })
            }), (0, Wk.jsx)("div", {
              className: "PlayerProfileModel",
              children: (0, Wk.jsx)(Dk.Suspense, {
                fallback: (0, Wk.jsx)("div", {
                  className: "PlayerProfileModelLoading",
                  children: (0, Wk.jsx)(Yk.d, {})
                }),
                children: (0, Wk.jsx)(Ak.b, {
                  ref: gk,
                  onReady: () => {
                    Ue()
                  }
                })
              })
            })]
          }), (0, Wk.jsxs)("div", {
            className: "PlayerProfileRight",
            children: [(0, Wk.jsx)(Bk, {
              profile: be
            }), (be.socialLinks.length > 0 || xe) && (0, Wk.jsx)(qk.c, {
              socialLinks: be.socialLinks,
              editable: xe,
              userContext: Zk,
              onLinksUpdated: ne
            }), (0, Wk.jsxs)("div", {
              className: "PlayerProfileGames",
              children: [(0, Wk.jsx)("div", {
                className: "PlayerProfileGamesTitle SmallTextBold",
                children: kk("homePage:profileReleasedGames")
              }), 0 === be.releasedGames.length && (0, Wk.jsx)("div", {
                className: "PlayerProfileNoGames",
                children: kk("homePage:profileNoReleasedGames")
              }), be.releasedGames.length > 0 && (0, Wk.jsx)("div", {
                className: "PlayerProfileGamesGrid",
                children: be.releasedGames.map((kk => (0, Wk.jsx)(yk.g, {
                  source: {
                    type: "preview",
                    preview: kk
                  },
                  gameWidth: "100%",
                  useLongRatio: !0,
                  hideFavourites: !0,
                  entrySource: "other"
                }, kk.schematicId)))
              })]
            })]
          })]
        })]
      })
    }
  },
  4823: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => wk
    });
    var Dk = ik(1021),
      fk = ik.n(Dk),
      Sk = ik(4571),
      bk = ik(1172),
      rk = ik(1033),
      Pk = ik(1410),
      mk = ik(1459),
      Mk = ik(1333),
      Kk = ik(2494),
      xk = ik(1066);
    const nk = {
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

    function Uk(kk) {
      let {
        platform: ek
      } = kk;
      const ik = "youtube" === ek;
      return (0, xk.jsxs)("span", {
        className: fk()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: ik
        }),
        children: [ik && (0, xk.jsx)(Kk.e, {
          variant: "white"
        }), !ik && (0, xk.jsx)(rk.d, {
          name: nk[ek].icon,
          kit: "brands"
        })]
      })
    }

    function Hk(kk) {
      let {
        platform: ek,
        link: ik,
        editable: Dk,
        userContext: fk,
        onLinksUpdated: Kk
      } = kk;
      const {
        t: Hk
      } = (0, bk.D)(), wk = nk[ek];
      if (!ik && !Dk) return null;

      function lk() {
        var kk;
        if (!fk || !Kk) return;
        Mk.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: wk.name
            }
          },
          prefixText: Sk.x[ek],
          placeholderText: "playBloxd",
          initialValue: null !== (kk = null === ik || void 0 === ik ? void 0 : ik.handle) && void 0 !== kk ? kk : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: ik ? "general:remove" : void 0
        }).getResult().then((async kk => {
          if ("notificationTornDown" !== kk && null !== kk) try {
            "submit" === kk.type ? await mk.b.setSocialLink(fk, ek, kk.value) : await mk.b.clearSocialLink(fk, ek), Kk()
          } catch (ik) {
            console.error("Failed to update social link", ik), Mk.NotificationProvider.showAlertPopup({
              title: ik.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (ik) {
        const kk = `@${ik.handle}`;
        return (0, xk.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: wk.color
          },
          href: ik.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, xk.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, xk.jsx)(Uk, {
              platform: ek
            }), (0, xk.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, xk.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: kk
              })
            })]
          }), Dk && (0, xk.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, Pk.db)({
              stopPropagation: !0
            }),
            onClick: kk => {
              kk.stopPropagation(), kk.preventDefault(), lk()
            },
            children: (0, xk.jsx)(rk.d, {
              name: "pen-to-square"
            })
          }), !Dk && (0, xk.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, xk.jsx)(rk.d, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, xk.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: wk.color
        },
        ...(0, Pk.db)(),
        onClick: () => {
          lk()
        },
        children: [(0, xk.jsx)(Uk, {
          platform: ek
        }), (0, xk.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, xk.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: wk.name
          }), (0, xk.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: Hk("homePage:profileSocialLinkAdd")
          })]
        }), (0, xk.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, xk.jsx)(rk.d, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function wk(kk) {
      let {
        socialLinks: ek,
        editable: ik = !1,
        userContext: Dk,
        onLinksUpdated: fk
      } = kk;
      if (!ik && 0 === ek.length) return null;
      const bk = new Map(ek.map((kk => [kk.platform, kk]))),
        rk = ik ? Sk.w : ek.map((kk => kk.platform));
      return (0, xk.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, xk.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: rk.map((kk => (0, xk.jsx)(Hk, {
            platform: kk,
            link: bk.get(kk),
            editable: ik,
            userContext: Dk,
            onLinksUpdated: fk
          }, kk)))
        })
      })
    }
  },
  4817: kk => {
    kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGOws7P7D8Kmpqb/NTU1wTQymwGbAhANwwzIOmAYxQRkCXNzczBGtgrFBGQFKFZgsxtuAi67YY5HMQGbAgCIxWSBYHJzHAAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);