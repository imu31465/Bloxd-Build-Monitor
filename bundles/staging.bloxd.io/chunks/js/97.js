export const id = 97;
export const ids = [97];
export const modules = {
  4874: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      default: () => dk
    });
    var Xk = Ik(58),
      Tk = Ik(1485),
      ik = Ik(337),
      yk = Ik(1223),
      lk = Ik(1560),
      ak = Ik(1253),
      qk = Ik(1511),
      Lk = Ik(1453),
      tk = Ik(2595);
    const Zk = {
      retries: 2,
      minTimeout: 2e3
    };
    var jk = Ik(1103),
      ek = Ik(1556),
      wk = Ik(1118),
      Hk = Ik(1849),
      Jk = Ik(1179),
      xk = Ik(1217),
      Pk = Ik(3414),
      Kk = Ik(1318),
      Qk = Ik(1406),
      sk = Ik(1475),
      Vk = Ik(2538),
      zk = Ik(2552),
      Sk = Ik(4877),
      vk = Ik(2089),
      Ek = Ik(1055),
      Ok = Ik.n(Ek),
      nk = Ik(1066),
      Gk = Ik(4884),
      pk = Ik(25),
      uk = Ik(1875),
      bk = Ik(3588),
      Rk = Ik(1950),
      Uk = Ik(3539),
      Ck = Ik(95),
      Nk = Ik(4543),
      ck = Ik(1096);
    const Wk = [Sk];

    function fk(kk) {
      let {
        icon: Fk,
        label: Ik,
        value: Xk
      } = kk;
      return (0, ck.jsxs)("div", {
        className: "PlayerProfileStat",
        children: [(0, ck.jsx)(nk.e, {
          name: Fk,
          className: "PlayerProfileStatIcon"
        }), (0, ck.jsxs)("div", {
          className: "PlayerProfileStatText",
          children: [(0, ck.jsx)("div", {
            className: "PlayerProfileStatLabel SmallTextLight",
            children: Ik
          }), (0, ck.jsx)("div", {
            className: "PlayerProfileStatValue",
            children: Xk
          })]
        })]
      })
    }

    function Bk(kk) {
      let {
        profile: Fk
      } = kk;
      const {
        t: Ik,
        selectedLanguage: Xk
      } = (0, Jk.y)();
      let Tk = Ik("homePage:profileUnknown");
      if (Fk.lastOnline) {
        const kk = (0, Jk.l)(Xk.code, "homePage:profileTimeAgo");
        Tk = Ik("homePage:profileTimeAgo", {
          time: (0, ik.gb)(kk, Fk.lastOnline, Date.now())
        })
      }
      let yk = Ik("homePage:profileUnknown");
      return Fk.accountCreatedAt && (yk = new Date(Fk.accountCreatedAt).toLocaleDateString(void 0, {
        year: "numeric",
        month: "short",
        day: "numeric"
      })), (0, ck.jsxs)("div", {
        className: "PlayerProfileStats",
        children: [(0, ck.jsx)(fk, {
          icon: "hourglass",
          label: Ik("homePage:profileTimePlayed"),
          value: (0, bk.c)(Fk.totalPlayMinutes)
        }), (0, ck.jsx)(fk, {
          icon: "wifi",
          label: Ik("homePage:profileLastOnline"),
          value: Tk
        }), (0, ck.jsx)(fk, {
          icon: "calendar",
          label: Ik("homePage:profileJoined"),
          value: yk
        })]
      })
    }

    function dk() {
      const {
        t: kk
      } = (0, Jk.y)(), Fk = (0, sk.useNavigatePreserveSearch)(), Ik = (0, jk.h)(), {
        playerName: Sk,
        playerUrlName: Ek
      } = (0, Tk.A)(), bk = (0, Tk.q)(), fk = (0, yk.f)(bk.pathname), dk = fk && ("urlId" in fk ? `urlId:${fk.urlId}` : `name:${fk.lowerCaseName}`), Yk = (0, Xk.useRef)(dk);
      Yk.current = dk;
      const {
        userContext: Ak,
        isUserContextUpdating: gk
      } = (0, wk.d)(), mk = (0, Xk.useRef)(null), hk = (0, Xk.useRef)(null), rk = (0, Xk.useRef)(null), Dk = (0, Xk.useRef)(!1), Mk = (0, Xk.useRef)((0, ik.lc)(Wk)), [kF, FF] = (0, Xk.useState)((() => {
        const kk = fk && zk.c.peek(Ak, fk);
        return kk ? {
          status: "loaded",
          profile: kk,
          playerKey: dk
        } : {
          status: "loading"
        }
      })), [IF, XF] = (0, Xk.useState)(0);
      (0, Xk.useEffect)(Vk.e, []), (0, Xk.useEffect)((() => {
        uk.gameBridge.send("leaveGame", {
          reloadPath: null
        }), pk.d.set({
          gameState: "landingPage",
          openEverythingMenuName: null,
          openInGameMenuName: null
        })
      }), [bk.key]);
      const TF = () => {
        const kk = (0, sk.getPreviousLocation)();
        null === kk || kk.startsWith("/play") ? (0, sk.navigateToHomePage)() : Fk(-1)
      };
      (0, Nk.b)(TF), (0, Xk.useEffect)((() => {
        var kk;
        if (gk) return;
        if (!fk) return void FF({
          status: "notFound",
          playerKey: dk
        });
        const Fk = "urlId" in fk && (null === (kk = hk.current) || void 0 === kk ? void 0 : kk.urlId) === fk.urlId && rk.current === Ak;
        if (Fk && Dk.current) return;
        const Ik = Fk ? null : zk.c.peek(Ak, fk);
        let Xk = !1;
        const Tk = kk => "loaded" === kk.status && (kk.playerKey === dk || "urlId" in fk && kk.profile.urlId === fk.urlId);
        return Ik ? (rk.current = Ak, Dk.current = !1, FF({
          status: "loaded",
          profile: Ik,
          playerKey: dk
        }), zk.c.invalidate(fk)) : FF((kk => Tk(kk) ? kk : {
          status: "loading"
        })), async function(kk, Fk) {
          if ("lowerCaseName" in Fk && Fk.lowerCaseName.length > ak.j) return {
            status: "notFound"
          };
          try {
            return {
              status: "loaded",
              profile: await Lk.e.getPlayerProfile(kk, Fk, Zk)
            }
          } catch (Ik) {
            return (0, tk.c)(Ik) ? {
              status: "notFound"
            } : (console.error("Failed to load user profile", Ik), {
              status: "failed"
            })
          }
        }(Ak, fk).then((kk => {
          Xk || ("loaded" === kk.status && (rk.current = Ak, Dk.current = !0), FF((Fk => "failed" === kk.status && Tk(Fk) ? Fk : {
            ...kk,
            playerKey: dk
          })))
        })), () => {
          Xk = !0
        }
      }), [gk, dk, Ak, IF]);
      const iF = "loading" === kF.status || kF.playerKey === dk || "loaded" === kF.status && !!fk && "urlId" in fk && kF.profile.urlId === fk.urlId ? kF : {
          status: "loading"
        },
        yF = "loaded" === iF.status ? iF.profile : null,
        lF = "loading" === iF.status ? null : function(kk) {
          if ("loaded" === kk.status) {
            const {
              profile: Fk
            } = kk;
            return (0, qk.X)({
              urlId: Fk.urlId,
              name: Fk.player.name,
              ranks: Fk.player.ranks,
              socialLinks: Fk.socialLinks
            })
          }
          return "notFound" === kk.status ? (0, qk.eb)() : null
        }(iF),
        aF = null !== yF && void 0 !== yF && yF.urlId ? (0, yk.i)({
          urlId: yF.urlId,
          name: yF.player.name
        }) : null;
      (0, ek.e)(aF);
      const qF = null !== yF && void 0 !== yF && yF.player.cosmetics.profileEffect ? vk.d[yF.player.cosmetics.profileEffect] : void 0,
        LF = null !== yF && !gk && Ak.getPlayerName().toLowerCase() === yF.player.name.toLowerCase(),
        tF = (0, Rk.e)(null === yF || void 0 === yF ? void 0 : yF.player.name),
        ZF = LF && Ak.playerHasRank("youtuber");
      hk.current = yF;
      const jF = (0, Xk.useCallback)((() => {
          fk && (zk.c.invalidate(fk), zk.c.get(Ak, fk).then((kk => {
            Yk.current === dk && (Dk.current = !0, FF({
              status: "loaded",
              profile: kk,
              playerKey: dk
            }))
          })).catch((kk => {
            console.error("Failed to refresh user profile", kk)
          })))
        }), [dk, Ak]),
        eF = (0, Xk.useCallback)((() => {
          var kk;
          const Fk = hk.current;
          return !(!Fk || null === (kk = mk.current) || void 0 === kk || !kk.isReady()) && (mk.current.setAllCosmetics(Fk.player.cosmetics), !0)
        }), []);
      return (0, Xk.useEffect)((() => {
        if (!yF) return;
        let kk, Fk = !1;
        const Ik = () => {
          Fk || eF() || (kk = setTimeout(Ik, 100))
        };
        return Ik(), () => {
          Fk = !0, clearTimeout(kk)
        }
      }), [yF, eF]), (0, ck.jsxs)("div", {
        className: Ok()("PlayerProfile", {
          PlayerProfilePortrait: Ik
        }),
        children: [lF && (0, ck.jsx)(lk.d, {
          meta: lF
        }), (0, ck.jsxs)("div", {
          className: "PlayerProfileBackgroundContainer",
          children: [qF && (0, ck.jsx)(qF, {}), !qF && (0, ck.jsx)("div", {
            className: "PlayerProfileBackground",
            style: {
              backgroundImage: `url(${Mk.current})`
            }
          })]
        }), (0, ck.jsxs)("div", {
          className: "PlayerProfileHeader",
          children: [(0, ck.jsx)(Qk.c, {
            onClick: TF,
            children: kk("general:back")
          }), yF && !gk && !LF && Ck.featureFlags.useSocialFeatures && (0, ck.jsx)("div", {
            className: "PlayerProfileExclusionActions",
            children: (0, ck.jsx)(Uk.c, {
              playerName: yF.player.name,
              className: "SmallTextLight"
            })
          })]
        }), "loading" === iF.status && (0, ck.jsx)("div", {
          className: "PlayerProfileCentredMessage",
          children: (0, ck.jsx)(Kk.c, {})
        }), ("notFound" === iF.status || "failed" === iF.status) && (0, ck.jsxs)("div", {
          className: "PlayerProfileCentredMessage PlayerProfileError",
          children: [(0, ck.jsx)(nk.e, {
            name: "face-dizzy"
          }), (0, ck.jsx)("div", {
            className: "PlayerProfileErrorText",
            children: "notFound" === iF.status ? kk("socialBar:playerNotFound", {
              playerName: null !== Ek && void 0 !== Ek ? Ek : Sk
            }) : kk("playerProfile:loadFailed")
          }), "failed" === iF.status && (0, ck.jsx)(Qk.d, {
            onClick: () => {
              XF((kk => kk + 1))
            },
            children: kk("general:tryAgain")
          })]
        }), yF && (0, ck.jsxs)("div", {
          className: "PlayerProfileContent",
          children: [(0, ck.jsxs)("div", {
            className: "PlayerProfileLeft",
            children: [(0, ck.jsx)("div", {
              className: "PlayerProfileName FullyFancyText",
              children: (0, ck.jsx)(Hk.c, {
                text: (0, xk.y)(yF.player.ranks, yF.player.name, yF.player.nameColour),
                friendBadgeFor: tF ? yF.player.name : void 0
              })
            }), (0, ck.jsx)("div", {
              className: "PlayerProfileModel",
              children: (0, ck.jsx)(Xk.Suspense, {
                fallback: (0, ck.jsx)("div", {
                  className: "PlayerProfileModelLoading",
                  children: (0, ck.jsx)(Kk.c, {})
                }),
                children: (0, ck.jsx)(Vk.c, {
                  ref: mk,
                  onReady: () => {
                    eF()
                  }
                })
              })
            })]
          }), (0, ck.jsxs)("div", {
            className: "PlayerProfileRight",
            children: [(0, ck.jsx)(Bk, {
              profile: yF
            }), (yF.socialLinks.length > 0 || ZF) && (0, ck.jsx)(Gk.e, {
              socialLinks: yF.socialLinks,
              editable: ZF,
              userContext: Ak,
              onLinksUpdated: jF
            }), (0, ck.jsxs)("div", {
              className: "PlayerProfileGames",
              children: [(0, ck.jsx)("div", {
                className: "PlayerProfileGamesTitle SmallTextBold",
                children: kk("homePage:profileReleasedGames")
              }), 0 === yF.releasedGames.length && (0, ck.jsx)("div", {
                className: "PlayerProfileNoGames",
                children: kk("homePage:profileNoReleasedGames")
              }), yF.releasedGames.length > 0 && (0, ck.jsx)("div", {
                className: "PlayerProfileGamesGrid",
                children: yF.releasedGames.map((kk => (0, ck.jsx)(Pk.c, {
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
  4884: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => Hk
    });
    var Xk = Ik(1055),
      Tk = Ik.n(Xk),
      ik = Ik(4619),
      yk = Ik(1179),
      lk = Ik(1066),
      ak = Ik(1406),
      qk = Ik(1453),
      Lk = Ik(1324),
      tk = Ik(2424),
      Zk = Ik(1096);
    const jk = {
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
      const Ik = "youtube" === Fk;
      return (0, Zk.jsxs)("span", {
        className: Tk()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: Ik
        }),
        children: [Ik && (0, Zk.jsx)(tk.b, {
          variant: "white"
        }), !Ik && (0, Zk.jsx)(lk.e, {
          name: jk[Fk].icon,
          kit: "brands"
        })]
      })
    }

    function wk(kk) {
      let {
        platform: Fk,
        link: Ik,
        editable: Xk,
        userContext: Tk,
        onLinksUpdated: tk
      } = kk;
      const {
        t: wk
      } = (0, yk.y)(), Hk = jk[Fk];
      if (!Ik && !Xk) return null;

      function Jk() {
        var kk;
        if (!Tk || !tk) return;
        Lk.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: Hk.name
            }
          },
          prefixText: ik.u[Fk],
          placeholderText: "playBloxd",
          initialValue: null !== (kk = null === Ik || void 0 === Ik ? void 0 : Ik.handle) && void 0 !== kk ? kk : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: Ik ? "general:remove" : void 0
        }).getResult().then((async kk => {
          if ("notificationTornDown" !== kk && null !== kk) try {
            "submit" === kk.type ? await qk.e.setSocialLink(Tk, Fk, kk.value) : await qk.e.clearSocialLink(Tk, Fk), tk()
          } catch (Ik) {
            console.error("Failed to update social link", Ik), Lk.NotificationProvider.showAlertPopup({
              title: Ik.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (Ik) {
        const kk = `@${Ik.handle}`;
        return (0, Zk.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: Hk.color
          },
          href: Ik.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, Zk.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, Zk.jsx)(ek, {
              platform: Fk
            }), (0, Zk.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, Zk.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: kk
              })
            })]
          }), Xk && (0, Zk.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, ak.Y)({
              stopPropagation: !0
            }),
            onClick: kk => {
              kk.stopPropagation(), kk.preventDefault(), Jk()
            },
            children: (0, Zk.jsx)(lk.e, {
              name: "pen-to-square"
            })
          }), !Xk && (0, Zk.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, Zk.jsx)(lk.e, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, Zk.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: Hk.color
        },
        ...(0, ak.Y)(),
        onClick: () => {
          Jk()
        },
        children: [(0, Zk.jsx)(ek, {
          platform: Fk
        }), (0, Zk.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, Zk.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: Hk.name
          }), (0, Zk.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: wk("homePage:profileSocialLinkAdd")
          })]
        }), (0, Zk.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, Zk.jsx)(lk.e, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function Hk(kk) {
      let {
        socialLinks: Fk,
        editable: Ik = !1,
        userContext: Xk,
        onLinksUpdated: Tk
      } = kk;
      if (!Ik && 0 === Fk.length) return null;
      const yk = new Map(Fk.map((kk => [kk.platform, kk]))),
        lk = Ik ? ik.t : Fk.map((kk => kk.platform));
      return (0, Zk.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, Zk.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: lk.map((kk => (0, Zk.jsx)(wk, {
            platform: kk,
            link: yk.get(kk),
            editable: Ik,
            userContext: Xk,
            onLinksUpdated: Tk
          }, kk)))
        })
      })
    }
  },
  4877: kk => {
    kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGOws7P7D8Kmpqb/NTU1wTQymwGbAhANwwzIOmAYxQRkCXNzczBGtgrFBGQFKFZgsxtuAi67YY5HMQGbAgCIxWSBYHJzHAAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);