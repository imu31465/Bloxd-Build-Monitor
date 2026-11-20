export const id = 95;
export const ids = [95];
export const modules = {
  4589: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      default: () => Zk
    });
    var Rk = Bk(61),
      tk = Bk(1473),
      ak = Bk(291),
      Xk = Bk(1183),
      bk = Bk(1563),
      wk = Bk(1219),
      dk = Bk(1490),
      sk = Bk(1441),
      Vk = Bk(2524);
    const Jk = {
      retries: 2,
      minTimeout: 2e3
    };
    var Ak = Bk(1083),
      ek = Bk(1556),
      yk = Bk(1096),
      fk = Bk(1812),
      mk = Bk(1149),
      Wk = Bk(1173),
      vk = Bk(3284),
      ik = Bk(1288),
      Yk = Bk(1389),
      Lk = Bk(1459),
      Ok = Bk(2457),
      Ek = Bk(2475),
      Sk = Bk(4592),
      Nk = Bk(2049),
      Hk = Bk(1020),
      uk = Bk.n(Hk),
      Mk = Bk(1028),
      gk = Bk(4599),
      Uk = Bk(22),
      ck = Bk(1847),
      Gk = Bk(3439),
      Tk = Bk(1929),
      rk = Bk(3395),
      Dk = Bk(98),
      zk = Bk(4291),
      Pk = Bk(1069);
    const hk = [Sk];

    function qk(kk) {
      let {
        icon: Fk,
        label: Bk,
        value: Rk
      } = kk;
      return (0, Pk.jsxs)("div", {
        className: "PlayerProfileStat",
        children: [(0, Pk.jsx)(Mk.d, {
          name: Fk,
          className: "PlayerProfileStatIcon"
        }), (0, Pk.jsxs)("div", {
          className: "PlayerProfileStatText",
          children: [(0, Pk.jsx)("div", {
            className: "PlayerProfileStatLabel SmallTextLight",
            children: Bk
          }), (0, Pk.jsx)("div", {
            className: "PlayerProfileStatValue",
            children: Rk
          })]
        })]
      })
    }

    function Ck(kk) {
      let {
        profile: Fk
      } = kk;
      const {
        t: Bk,
        selectedLanguage: Rk
      } = (0, mk.x)();
      let tk = Bk("homePage:profileUnknown");
      if (Fk.lastOnline) {
        const kk = (0, mk.j)(Rk.code, "homePage:profileTimeAgo");
        tk = Bk("homePage:profileTimeAgo", {
          time: (0, ak.gb)(kk, Fk.lastOnline, Date.now())
        })
      }
      let Xk = Bk("homePage:profileUnknown");
      return Fk.accountCreatedAt && (Xk = new Date(Fk.accountCreatedAt).toLocaleDateString(void 0, {
        year: "numeric",
        month: "short",
        day: "numeric"
      })), (0, Pk.jsxs)("div", {
        className: "PlayerProfileStats",
        children: [(0, Pk.jsx)(qk, {
          icon: "hourglass",
          label: Bk("homePage:profileTimePlayed"),
          value: (0, Gk.b)(Fk.totalPlayMinutes)
        }), (0, Pk.jsx)(qk, {
          icon: "wifi",
          label: Bk("homePage:profileLastOnline"),
          value: tk
        }), (0, Pk.jsx)(qk, {
          icon: "calendar",
          label: Bk("homePage:profileJoined"),
          value: Xk
        })]
      })
    }

    function Zk() {
      const {
        t: kk
      } = (0, mk.x)(), Fk = (0, Lk.useNavigatePreserveSearch)(), Bk = (0, Ak.m)(), {
        playerName: Sk,
        playerUrlName: Hk
      } = (0, tk.x)(), Gk = (0, tk.s)(), qk = (0, Xk.i)(Gk.pathname), Zk = qk && ("urlId" in qk ? `urlId:${qk.urlId}` : `name:${qk.lowerCaseName}`), pk = (0, Rk.useRef)(Zk);
      pk.current = Zk;
      const {
        userContext: Kk,
        isUserContextUpdating: xk
      } = (0, yk.e)(), jk = (0, Rk.useRef)(null), lk = (0, Rk.useRef)(null), nk = (0, Rk.useRef)(null), Ik = (0, Rk.useRef)(!1), Qk = (0, Rk.useRef)((0, ak.dc)(hk)), [kF, FF] = (0, Rk.useState)((() => {
        const kk = qk && Ek.b.peek(Kk, qk);
        return kk ? {
          status: "loaded",
          profile: kk,
          playerKey: Zk
        } : {
          status: "loading"
        }
      })), [BF, RF] = (0, Rk.useState)(0);
      (0, Rk.useEffect)(Ok.c, []), (0, Rk.useEffect)((() => {
        ck.gameBridge.send("leaveGame", {
          reloadPath: null
        }), Uk.c.set({
          gameState: "landingPage",
          openEverythingMenuName: null,
          openInGameMenuName: null
        })
      }), [Gk.key]);
      const tF = () => {
        const kk = (0, Lk.getPreviousLocation)();
        null === kk || kk.startsWith("/play") ? (0, Lk.navigateToHomePage)() : Fk(-1)
      };
      (0, zk.d)(tF), (0, Rk.useEffect)((() => {
        var kk;
        if (xk) return;
        if (!qk) return void FF({
          status: "notFound",
          playerKey: Zk
        });
        const Fk = "urlId" in qk && (null === (kk = lk.current) || void 0 === kk ? void 0 : kk.urlId) === qk.urlId && nk.current === Kk;
        if (Fk && Ik.current) return;
        const Bk = Fk ? null : Ek.b.peek(Kk, qk);
        let Rk = !1;
        const tk = kk => "loaded" === kk.status && (kk.playerKey === Zk || "urlId" in qk && kk.profile.urlId === qk.urlId);
        return Bk ? (nk.current = Kk, Ik.current = !1, FF({
          status: "loaded",
          profile: Bk,
          playerKey: Zk
        }), Ek.b.invalidate(qk)) : FF((kk => tk(kk) ? kk : {
          status: "loading"
        })), async function(kk, Fk) {
          if ("lowerCaseName" in Fk && Fk.lowerCaseName.length > wk.f) return {
            status: "notFound"
          };
          try {
            return {
              status: "loaded",
              profile: await sk.b.getPlayerProfile(kk, Fk, Jk)
            }
          } catch (Bk) {
            return (0, Vk.c)(Bk) ? {
              status: "notFound"
            } : (console.error("Failed to load user profile", Bk), {
              status: "failed"
            })
          }
        }(Kk, qk).then((kk => {
          Rk || ("loaded" === kk.status && (nk.current = Kk, Ik.current = !0), FF((Fk => "failed" === kk.status && tk(Fk) ? Fk : {
            ...kk,
            playerKey: Zk
          })))
        })), () => {
          Rk = !0
        }
      }), [xk, Zk, Kk, BF]);
      const aF = "loading" === kF.status || kF.playerKey === Zk || "loaded" === kF.status && !!qk && "urlId" in qk && kF.profile.urlId === qk.urlId ? kF : {
          status: "loading"
        },
        XF = "loaded" === aF.status ? aF.profile : null,
        bF = "loading" === aF.status ? null : function(kk) {
          if ("loaded" === kk.status) {
            const {
              profile: Fk
            } = kk;
            return (0, dk.T)({
              urlId: Fk.urlId,
              name: Fk.player.name,
              ranks: Fk.player.ranks,
              socialLinks: Fk.socialLinks
            })
          }
          return "notFound" === kk.status ? (0, dk.ab)() : null
        }(aF),
        wF = null !== XF && void 0 !== XF && XF.urlId ? (0, Xk.j)({
          urlId: XF.urlId,
          name: XF.player.name
        }) : null;
      (0, ek.e)(wF);
      const dF = null !== XF && void 0 !== XF && XF.player.cosmetics.profileEffect ? Nk.f[XF.player.cosmetics.profileEffect] : void 0,
        sF = null !== XF && !xk && Kk.getPlayerName().toLowerCase() === XF.player.name.toLowerCase(),
        VF = (0, Tk.e)(null === XF || void 0 === XF ? void 0 : XF.player.name),
        JF = sF && Kk.playerHasRank("youtuber");
      lk.current = XF;
      const AF = (0, Rk.useCallback)((() => {
          qk && (Ek.b.invalidate(qk), Ek.b.get(Kk, qk).then((kk => {
            pk.current === Zk && (Ik.current = !0, FF({
              status: "loaded",
              profile: kk,
              playerKey: Zk
            }))
          })).catch((kk => {
            console.error("Failed to refresh user profile", kk)
          })))
        }), [Zk, Kk]),
        eF = (0, Rk.useCallback)((() => {
          var kk;
          const Fk = lk.current;
          return !(!Fk || null === (kk = jk.current) || void 0 === kk || !kk.isReady()) && (jk.current.setAllCosmetics(Fk.player.cosmetics), !0)
        }), []);
      return (0, Rk.useEffect)((() => {
        if (!XF) return;
        let kk, Fk = !1;
        const Bk = () => {
          Fk || eF() || (kk = setTimeout(Bk, 100))
        };
        return Bk(), () => {
          Fk = !0, clearTimeout(kk)
        }
      }), [XF, eF]), (0, Pk.jsxs)("div", {
        className: uk()("PlayerProfile", {
          PlayerProfilePortrait: Bk
        }),
        children: [bF && (0, Pk.jsx)(bk.e, {
          meta: bF
        }), (0, Pk.jsxs)("div", {
          className: "PlayerProfileBackgroundContainer",
          children: [dF && (0, Pk.jsx)(dF, {}), !dF && (0, Pk.jsx)("div", {
            className: "PlayerProfileBackground",
            style: {
              backgroundImage: `url(${Qk.current})`
            }
          })]
        }), (0, Pk.jsxs)("div", {
          className: "PlayerProfileHeader",
          children: [(0, Pk.jsx)(Yk.c, {
            onClick: tF,
            children: kk("general:back")
          }), XF && !xk && !sF && Dk.featureFlags.useSocialFeatures && (0, Pk.jsx)("div", {
            className: "PlayerProfileExclusionActions",
            children: (0, Pk.jsx)(rk.d, {
              playerName: XF.player.name,
              className: "SmallTextLight"
            })
          })]
        }), "loading" === aF.status && (0, Pk.jsx)("div", {
          className: "PlayerProfileCentredMessage",
          children: (0, Pk.jsx)(ik.b, {})
        }), ("notFound" === aF.status || "failed" === aF.status) && (0, Pk.jsxs)("div", {
          className: "PlayerProfileCentredMessage PlayerProfileError",
          children: [(0, Pk.jsx)(Mk.d, {
            name: "face-dizzy"
          }), (0, Pk.jsx)("div", {
            className: "PlayerProfileErrorText",
            children: "notFound" === aF.status ? kk("socialBar:playerNotFound", {
              playerName: null !== Hk && void 0 !== Hk ? Hk : Sk
            }) : kk("playerProfile:loadFailed")
          }), "failed" === aF.status && (0, Pk.jsx)(Yk.g, {
            onClick: () => {
              RF((kk => kk + 1))
            },
            children: kk("general:tryAgain")
          })]
        }), XF && (0, Pk.jsxs)("div", {
          className: "PlayerProfileContent",
          children: [(0, Pk.jsxs)("div", {
            className: "PlayerProfileLeft",
            children: [(0, Pk.jsx)("div", {
              className: "PlayerProfileName FullyFancyText",
              children: (0, Pk.jsx)(fk.d, {
                text: (0, Wk.y)(XF.player.ranks, XF.player.name, XF.player.nameColour),
                friendBadgeFor: VF ? XF.player.name : void 0
              })
            }), (0, Pk.jsx)("div", {
              className: "PlayerProfileModel",
              children: (0, Pk.jsx)(Rk.Suspense, {
                fallback: (0, Pk.jsx)("div", {
                  className: "PlayerProfileModelLoading",
                  children: (0, Pk.jsx)(ik.b, {})
                }),
                children: (0, Pk.jsx)(Ok.b, {
                  ref: jk,
                  onReady: () => {
                    eF()
                  }
                })
              })
            })]
          }), (0, Pk.jsxs)("div", {
            className: "PlayerProfileRight",
            children: [(0, Pk.jsx)(Ck, {
              profile: XF
            }), (XF.socialLinks.length > 0 || JF) && (0, Pk.jsx)(gk.d, {
              socialLinks: XF.socialLinks,
              editable: JF,
              userContext: Kk,
              onLinksUpdated: AF
            }), (0, Pk.jsxs)("div", {
              className: "PlayerProfileGames",
              children: [(0, Pk.jsx)("div", {
                className: "PlayerProfileGamesTitle SmallTextBold",
                children: kk("homePage:profileReleasedGames")
              }), 0 === XF.releasedGames.length && (0, Pk.jsx)("div", {
                className: "PlayerProfileNoGames",
                children: kk("homePage:profileNoReleasedGames")
              }), XF.releasedGames.length > 0 && (0, Pk.jsx)("div", {
                className: "PlayerProfileGamesGrid",
                children: XF.releasedGames.map((kk => (0, Pk.jsx)(vk.g, {
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
  4599: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => fk
    });
    var Rk = Bk(1020),
      tk = Bk.n(Rk),
      ak = Bk(4380),
      Xk = Bk(1149),
      bk = Bk(1028),
      wk = Bk(1389),
      dk = Bk(1441),
      sk = Bk(1300),
      Vk = Bk(2384),
      Jk = Bk(1069);
    const Ak = {
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

    function ek(kk) {
      let {
        platform: Fk
      } = kk;
      const Bk = "youtube" === Fk;
      return (0, Jk.jsxs)("span", {
        className: tk()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: Bk
        }),
        children: [Bk && (0, Jk.jsx)(Vk.e, {
          variant: "white"
        }), !Bk && (0, Jk.jsx)(bk.d, {
          name: Ak[Fk].icon,
          kit: "brands"
        })]
      })
    }

    function yk(kk) {
      let {
        platform: Fk,
        link: Bk,
        editable: Rk,
        userContext: tk,
        onLinksUpdated: Vk
      } = kk;
      const {
        t: yk
      } = (0, Xk.x)(), fk = Ak[Fk];
      if (!Bk && !Rk) return null;

      function mk() {
        var kk;
        if (!tk || !Vk) return;
        sk.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: fk.name
            }
          },
          prefixText: ak.A[Fk],
          placeholderText: "playBloxd",
          initialValue: null !== (kk = null === Bk || void 0 === Bk ? void 0 : Bk.handle) && void 0 !== kk ? kk : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: Bk ? "general:remove" : void 0
        }).getResult().then((async kk => {
          if ("notificationTornDown" !== kk && null !== kk) try {
            "submit" === kk.type ? await dk.b.setSocialLink(tk, Fk, kk.value) : await dk.b.clearSocialLink(tk, Fk), Vk()
          } catch (Bk) {
            console.error("Failed to update social link", Bk), sk.NotificationProvider.showAlertPopup({
              title: Bk.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (Bk) {
        const kk = `@${Bk.handle}`;
        return (0, Jk.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: fk.color
          },
          href: Bk.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, Jk.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, Jk.jsx)(ek, {
              platform: Fk
            }), (0, Jk.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, Jk.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: kk
              })
            })]
          }), Rk && (0, Jk.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, wk.R)({
              stopPropagation: !0
            }),
            onClick: kk => {
              kk.stopPropagation(), kk.preventDefault(), mk()
            },
            children: (0, Jk.jsx)(bk.d, {
              name: "pen-to-square"
            })
          }), !Rk && (0, Jk.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, Jk.jsx)(bk.d, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, Jk.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: fk.color
        },
        ...(0, wk.R)(),
        onClick: () => {
          mk()
        },
        children: [(0, Jk.jsx)(ek, {
          platform: Fk
        }), (0, Jk.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, Jk.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: fk.name
          }), (0, Jk.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: yk("homePage:profileSocialLinkAdd")
          })]
        }), (0, Jk.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, Jk.jsx)(bk.d, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function fk(kk) {
      let {
        socialLinks: Fk,
        editable: Bk = !1,
        userContext: Rk,
        onLinksUpdated: tk
      } = kk;
      if (!Bk && 0 === Fk.length) return null;
      const Xk = new Map(Fk.map((kk => [kk.platform, kk]))),
        bk = Bk ? ak.w : Fk.map((kk => kk.platform));
      return (0, Jk.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, Jk.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: bk.map((kk => (0, Jk.jsx)(yk, {
            platform: kk,
            link: Xk.get(kk),
            editable: Bk,
            userContext: Rk,
            onLinksUpdated: tk
          }, kk)))
        })
      })
    }
  },
  4592: kk => {
    kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGOws7P7D8Kmpqb/NTU1wTQymwGbAhANwwzIOmAYxQRkCXNzczBGtgrFBGQFKFZgsxtuAi67YY5HMQGbAgCIxWSBYHJzHAAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);