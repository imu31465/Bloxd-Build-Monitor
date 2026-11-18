export const id = 85;
export const ids = [85];
export const modules = {
  4078: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      default: () => Dy
    });
    var Uy = Wy(55),
      hy = Wy(1370),
      fy = Wy(258),
      Zy = Wy(1093),
      cb = Wy(1436),
      Py = Wy(1130),
      oy = Wy(1387),
      By = Wy(1339),
      Ky = Wy(2141);
    const ey = {
      retries: 2,
      minTimeout: 2e3
    };
    var qb = Wy(965),
      sy = Wy(1434),
      Sy = Wy(980),
      Ey = Wy(1546),
      ly = Wy(1042),
      mb = Wy(1080),
      Cy = Wy(2781),
      Ty = Wy(1194),
      Vy = Wy(1273),
      Jy = Wy(1356),
      gb = Wy(2088),
      Gy = Wy(2102),
      Oy = Wy(4086),
      Ry = Wy(1788),
      vb = Wy(898),
      ib = Wy.n(vb),
      My = Wy(910),
      Yy = Wy(4093),
      Xy = Wy(19),
      ny = Wy(1572),
      uy = Wy(2937),
      rb = Wy(1660),
      Hy = Wy(2893),
      ab = Wy(94),
      Fy = Wy(3750),
      py = Wy(952);
    const Ly = [Oy];

    function Qy(yb) {
      let {
        icon: bb,
        label: Wy,
        value: Uy
      } = yb;
      return (0, py.jsxs)("div", {
        className: "PlayerProfileStat",
        children: [(0, py.jsx)(My.e, {
          name: bb,
          className: "PlayerProfileStatIcon"
        }), (0, py.jsxs)("div", {
          className: "PlayerProfileStatText",
          children: [(0, py.jsx)("div", {
            className: "PlayerProfileStatLabel SmallTextLight",
            children: Wy
          }), (0, py.jsx)("div", {
            className: "PlayerProfileStatValue",
            children: Uy
          })]
        })]
      })
    }

    function jb(yb) {
      let {
        profile: bb
      } = yb;
      const {
        t: Wy,
        selectedLanguage: Uy
      } = (0, ly.D)();
      let hy = Wy("homePage:profileUnknown");
      if (bb.lastOnline) {
        const yb = (0, ly.o)(Uy.code, "homePage:profileTimeAgo");
        hy = Wy("homePage:profileTimeAgo", {
          time: (0, fy.bb)(yb, bb.lastOnline, Date.now())
        })
      }
      let Zy = Wy("homePage:profileUnknown");
      return bb.accountCreatedAt && (Zy = new Date(bb.accountCreatedAt).toLocaleDateString(void 0, {
        year: "numeric",
        month: "short",
        day: "numeric"
      })), (0, py.jsxs)("div", {
        className: "PlayerProfileStats",
        children: [(0, py.jsx)(Qy, {
          icon: "hourglass",
          label: Wy("homePage:profileTimePlayed"),
          value: (0, uy.c)(bb.totalPlayMinutes)
        }), (0, py.jsx)(Qy, {
          icon: "wifi",
          label: Wy("homePage:profileLastOnline"),
          value: hy
        }), (0, py.jsx)(Qy, {
          icon: "calendar",
          label: Wy("homePage:profileJoined"),
          value: Zy
        })]
      })
    }

    function Dy() {
      const {
        t: yb
      } = (0, ly.D)(), bb = (0, Jy.useNavigatePreserveSearch)(), Wy = (0, qb.f)(), {
        playerName: Oy,
        playerUrlName: vb
      } = (0, hy.F)(), uy = (0, hy.y)(), Qy = (0, Zy.e)(uy.pathname), Dy = Qy && ("urlId" in Qy ? `urlId:${Qy.urlId}` : `name:${Qy.lowerCaseName}`), tb = (0, Uy.useRef)(Dy);
      tb.current = Dy;
      const {
        userContext: wy,
        isUserContextUpdating: kb
      } = (0, Sy.c)(), Ny = (0, Uy.useRef)(null), zb = (0, Uy.useRef)(null), Iy = (0, Uy.useRef)(null), xb = (0, Uy.useRef)(!1), Ay = (0, Uy.useRef)((0, fy._b)(Ly)), [dy, yW] = (0, Uy.useState)((() => {
        const yb = Qy && Gy.b.peek(wy, Qy);
        return yb ? {
          status: "loaded",
          profile: yb,
          playerKey: Dy
        } : {
          status: "loading"
        }
      })), [bW, Wb] = (0, Uy.useState)(0);
      (0, Uy.useEffect)(gb.g, []), (0, Uy.useEffect)((() => {
        ny.gameBridge.send("leaveGame", {
          reloadPath: null
        }), Xy.d.set({
          gameState: "landingPage",
          openEverythingMenuName: null,
          openInGameMenuName: null
        })
      }), [uy.key]);
      const Ub = () => {
        const yb = (0, Jy.getPreviousLocation)();
        null === yb || yb.startsWith("/play") ? (0, Jy.navigateToHomePage)() : bb(-1)
      };
      (0, Fy.e)(Ub), (0, Uy.useEffect)((() => {
        var yb;
        if (kb) return;
        if (!Qy) return void yW({
          status: "notFound",
          playerKey: Dy
        });
        const bb = "urlId" in Qy && (null === (yb = zb.current) || void 0 === yb ? void 0 : yb.urlId) === Qy.urlId && Iy.current === wy;
        if (bb && xb.current) return;
        const Wy = bb ? null : Gy.b.peek(wy, Qy);
        let Uy = !1;
        const hy = yb => "loaded" === yb.status && (yb.playerKey === Dy || "urlId" in Qy && yb.profile.urlId === Qy.urlId);
        return Wy ? (Iy.current = wy, xb.current = !1, yW({
          status: "loaded",
          profile: Wy,
          playerKey: Dy
        }), Gy.b.invalidate(Qy)) : yW((yb => hy(yb) ? yb : {
          status: "loading"
        })), async function(yb, bb) {
          if ("lowerCaseName" in bb && bb.lowerCaseName.length > Py.k) return {
            status: "notFound"
          };
          try {
            return {
              status: "loaded",
              profile: await By.c.getPlayerProfile(yb, bb, ey)
            }
          } catch (Wy) {
            return (0, Ky.d)(Wy) ? {
              status: "notFound"
            } : (console.error("Failed to load user profile", Wy), {
              status: "failed"
            })
          }
        }(wy, Qy).then((yb => {
          Uy || ("loaded" === yb.status && (Iy.current = wy, xb.current = !0), yW((bb => "failed" === yb.status && hy(bb) ? bb : {
            ...yb,
            playerKey: Dy
          })))
        })), () => {
          Uy = !0
        }
      }), [kb, Dy, wy, bW]);
      const hb = "loading" === dy.status || dy.playerKey === Dy || "loaded" === dy.status && !!Qy && "urlId" in Qy && dy.profile.urlId === Qy.urlId ? dy : {
          status: "loading"
        },
        fb = "loaded" === hb.status ? hb.profile : null,
        Zb = "loading" === hb.status ? null : function(yb) {
          if ("loaded" === yb.status) {
            const {
              profile: bb
            } = yb;
            return (0, oy.O)({
              urlId: bb.urlId,
              name: bb.player.name,
              ranks: bb.player.ranks,
              socialLinks: bb.socialLinks
            })
          }
          return "notFound" === yb.status ? (0, oy.X)() : null
        }(hb),
        cW = null !== fb && void 0 !== fb && fb.urlId ? (0, Zy.f)({
          urlId: fb.urlId,
          name: fb.player.name
        }) : null;
      (0, sy.d)(cW);
      const Pb = null !== fb && void 0 !== fb && fb.player.cosmetics.profileEffect ? Ry.f[fb.player.cosmetics.profileEffect] : void 0,
        ob = null !== fb && !kb && wy.getPlayerName().toLowerCase() === fb.player.name.toLowerCase(),
        Bb = (0, rb.d)(null === fb || void 0 === fb ? void 0 : fb.player.name),
        Kb = ob && wy.playerHasRank("youtuber");
      zb.current = fb;
      const eb = (0, Uy.useCallback)((() => {
          Qy && (Gy.b.invalidate(Qy), Gy.b.get(wy, Qy).then((yb => {
            tb.current === Dy && (xb.current = !0, yW({
              status: "loaded",
              profile: yb,
              playerKey: Dy
            }))
          })).catch((yb => {
            console.error("Failed to refresh user profile", yb)
          })))
        }), [Dy, wy]),
        qW = (0, Uy.useCallback)((() => {
          var yb;
          const bb = zb.current;
          return !(!bb || null === (yb = Ny.current) || void 0 === yb || !yb.isReady()) && (Ny.current.setAllCosmetics(bb.player.cosmetics), !0)
        }), []);
      return (0, Uy.useEffect)((() => {
        if (!fb) return;
        let yb, bb = !1;
        const Wy = () => {
          bb || qW() || (yb = setTimeout(Wy, 100))
        };
        return Wy(), () => {
          bb = !0, clearTimeout(yb)
        }
      }), [fb, qW]), (0, py.jsxs)("div", {
        className: ib()("PlayerProfile", {
          PlayerProfilePortrait: Wy
        }),
        children: [Zb && (0, py.jsx)(cb.c, {
          meta: Zb
        }), (0, py.jsxs)("div", {
          className: "PlayerProfileBackgroundContainer",
          children: [Pb && (0, py.jsx)(Pb, {}), !Pb && (0, py.jsx)("div", {
            className: "PlayerProfileBackground",
            style: {
              backgroundImage: `url(${Ay.current})`
            }
          })]
        }), (0, py.jsxs)("div", {
          className: "PlayerProfileHeader",
          children: [(0, py.jsx)(Vy.d, {
            onClick: Ub,
            children: yb("general:back")
          }), fb && !kb && !ob && ab.featureFlags.useSocialFeatures && (0, py.jsx)("div", {
            className: "PlayerProfileExclusionActions",
            children: (0, py.jsx)(Hy.c, {
              playerName: fb.player.name,
              className: "SmallTextLight"
            })
          })]
        }), "loading" === hb.status && (0, py.jsx)("div", {
          className: "PlayerProfileCentredMessage",
          children: (0, py.jsx)(Ty.e, {})
        }), ("notFound" === hb.status || "failed" === hb.status) && (0, py.jsxs)("div", {
          className: "PlayerProfileCentredMessage PlayerProfileError",
          children: [(0, py.jsx)(My.e, {
            name: "face-dizzy"
          }), (0, py.jsx)("div", {
            className: "PlayerProfileErrorText",
            children: "notFound" === hb.status ? yb("socialBar:playerNotFound", {
              playerName: null !== vb && void 0 !== vb ? vb : Oy
            }) : yb("playerProfile:loadFailed")
          }), "failed" === hb.status && (0, py.jsx)(Vy.f, {
            onClick: () => {
              Wb((yb => yb + 1))
            },
            children: yb("general:tryAgain")
          })]
        }), fb && (0, py.jsxs)("div", {
          className: "PlayerProfileContent",
          children: [(0, py.jsxs)("div", {
            className: "PlayerProfileLeft",
            children: [(0, py.jsx)("div", {
              className: "PlayerProfileName FullyFancyText",
              children: (0, py.jsx)(Ey.d, {
                text: (0, mb.v)(fb.player.ranks, fb.player.name, fb.player.nameColour),
                friendBadgeFor: Bb ? fb.player.name : void 0
              })
            }), (0, py.jsx)("div", {
              className: "PlayerProfileModel",
              children: (0, py.jsx)(Uy.Suspense, {
                fallback: (0, py.jsx)("div", {
                  className: "PlayerProfileModelLoading",
                  children: (0, py.jsx)(Ty.e, {})
                }),
                children: (0, py.jsx)(gb.e, {
                  ref: Ny,
                  onReady: () => {
                    qW()
                  }
                })
              })
            })]
          }), (0, py.jsxs)("div", {
            className: "PlayerProfileRight",
            children: [(0, py.jsx)(jb, {
              profile: fb
            }), (fb.socialLinks.length > 0 || Kb) && (0, py.jsx)(Yy.c, {
              socialLinks: fb.socialLinks,
              editable: Kb,
              userContext: wy,
              onLinksUpdated: eb
            }), (0, py.jsxs)("div", {
              className: "PlayerProfileGames",
              children: [(0, py.jsx)("div", {
                className: "PlayerProfileGamesTitle SmallTextBold",
                children: yb("homePage:profileReleasedGames")
              }), 0 === fb.releasedGames.length && (0, py.jsx)("div", {
                className: "PlayerProfileNoGames",
                children: yb("homePage:profileNoReleasedGames")
              }), fb.releasedGames.length > 0 && (0, py.jsx)("div", {
                className: "PlayerProfileGamesGrid",
                children: fb.releasedGames.map((yb => (0, py.jsx)(Cy.f, {
                  source: {
                    type: "preview",
                    preview: yb
                  },
                  gameWidth: "100%",
                  useLongRatio: !0,
                  hideFavourites: !0,
                  entrySource: "other"
                }, yb.schematicId)))
              })]
            })]
          })]
        })]
      })
    }
  },
  4093: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => Ey
    });
    var Uy = Wy(898),
      hy = Wy.n(Uy),
      fy = Wy(3850),
      Zy = Wy(1042),
      cb = Wy(910),
      Py = Wy(1273),
      oy = Wy(1339),
      By = Wy(1207),
      Ky = Wy(2032),
      ey = Wy(952);
    const qb = {
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

    function sy(yb) {
      let {
        platform: bb
      } = yb;
      const Wy = "youtube" === bb;
      return (0, ey.jsxs)("span", {
        className: hy()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: Wy
        }),
        children: [Wy && (0, ey.jsx)(Ky.b, {
          variant: "white"
        }), !Wy && (0, ey.jsx)(cb.e, {
          name: qb[bb].icon,
          kit: "brands"
        })]
      })
    }

    function Sy(yb) {
      let {
        platform: bb,
        link: Wy,
        editable: Uy,
        userContext: hy,
        onLinksUpdated: Ky
      } = yb;
      const {
        t: Sy
      } = (0, Zy.D)(), Ey = qb[bb];
      if (!Wy && !Uy) return null;

      function ly() {
        var yb;
        if (!hy || !Ky) return;
        By.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: Ey.name
            }
          },
          prefixText: fy.v[bb],
          placeholderText: "playBloxd",
          initialValue: null !== (yb = null === Wy || void 0 === Wy ? void 0 : Wy.handle) && void 0 !== yb ? yb : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: Wy ? "general:remove" : void 0
        }).getResult().then((async yb => {
          if ("notificationTornDown" !== yb && null !== yb) try {
            "submit" === yb.type ? await oy.c.setSocialLink(hy, bb, yb.value) : await oy.c.clearSocialLink(hy, bb), Ky()
          } catch (Wy) {
            console.error("Failed to update social link", Wy), By.NotificationProvider.showAlertPopup({
              title: Wy.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (Wy) {
        const yb = `@${Wy.handle}`;
        return (0, ey.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: Ey.color
          },
          href: Wy.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, ey.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, ey.jsx)(sy, {
              platform: bb
            }), (0, ey.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, ey.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: yb
              })
            })]
          }), Uy && (0, ey.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, Py.Q)({
              stopPropagation: !0
            }),
            onClick: yb => {
              yb.stopPropagation(), yb.preventDefault(), ly()
            },
            children: (0, ey.jsx)(cb.e, {
              name: "pen-to-square"
            })
          }), !Uy && (0, ey.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, ey.jsx)(cb.e, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, ey.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: Ey.color
        },
        ...(0, Py.Q)(),
        onClick: () => {
          ly()
        },
        children: [(0, ey.jsx)(sy, {
          platform: bb
        }), (0, ey.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, ey.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: Ey.name
          }), (0, ey.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: Sy("homePage:profileSocialLinkAdd")
          })]
        }), (0, ey.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, ey.jsx)(cb.e, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function Ey(yb) {
      let {
        socialLinks: bb,
        editable: Wy = !1,
        userContext: Uy,
        onLinksUpdated: hy
      } = yb;
      if (!Wy && 0 === bb.length) return null;
      const Zy = new Map(bb.map((yb => [yb.platform, yb]))),
        cb = Wy ? fy.u : bb.map((yb => yb.platform));
      return (0, ey.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, ey.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: cb.map((yb => (0, ey.jsx)(Sy, {
            platform: yb,
            link: Zy.get(yb),
            editable: Wy,
            userContext: Uy,
            onLinksUpdated: hy
          }, yb)))
        })
      })
    }
  },
  4086: yb => {
    yb.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGOws7P7D8Kmpqb/NTU1wTQymwGbAhANwwzIOmAYxQRkCXNzczBGtgrFBGQFKFZgsxtuAi67YY5HMQGbAgCIxWSBYHJzHAAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);