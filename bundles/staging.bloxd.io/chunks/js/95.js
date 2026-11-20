export const id = 95;
export const ids = [95];
export const modules = {
  4504: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      default: () => lz
    });
    var Fz = sz(65),
      Wz = sz(1493),
      Xz = sz(321),
      Oz = sz(1220),
      oz = sz(1558),
      vz = sz(1253),
      Uz = sz(1511),
      Kz = sz(1466),
      uz = sz(2472);
    const Nz = {
      retries: 2,
      minTimeout: 2e3
    };
    var bz = sz(1106),
      wz = sz(1550),
      Dz = sz(1116),
      gz = sz(1831),
      Hz = sz(1173),
      Bz = sz(1213),
      Pz = sz(3158),
      rz = sz(1306),
      Yz = sz(1419),
      xz = sz(1483),
      mz = sz(2411),
      Jz = sz(2421),
      Iz = sz(4509),
      Cz = sz(2075),
      ez = sz(1020),
      Zz = sz.n(ez),
      Gz = sz(1036),
      Tz = sz(4514),
      cz = sz(30),
      jz = sz(1857),
      Az = sz(3309),
      yz = sz(1951),
      Mz = sz(3263),
      dz = sz(106),
      hz = sz(4191),
      Qz = sz(1087);
    const kz = [Iz];

    function iz(zz) {
      let {
        icon: tz,
        label: sz,
        value: Fz
      } = zz;
      return (0, Qz.jsxs)("div", {
        className: "PlayerProfileStat",
        children: [(0, Qz.jsx)(Gz.c, {
          name: tz,
          className: "PlayerProfileStatIcon"
        }), (0, Qz.jsxs)("div", {
          className: "PlayerProfileStatText",
          children: [(0, Qz.jsx)("div", {
            className: "PlayerProfileStatLabel SmallTextLight",
            children: sz
          }), (0, Qz.jsx)("div", {
            className: "PlayerProfileStatValue",
            children: Fz
          })]
        })]
      })
    }

    function Lz(zz) {
      let {
        profile: tz
      } = zz;
      const {
        t: sz,
        selectedLanguage: Fz
      } = (0, Hz.B)();
      let Wz = sz("homePage:profileUnknown");
      if (tz.lastOnline) {
        const zz = (0, Hz.o)(Fz.code, "homePage:profileTimeAgo");
        Wz = sz("homePage:profileTimeAgo", {
          time: (0, Xz.bb)(zz, tz.lastOnline, Date.now())
        })
      }
      let Oz = sz("homePage:profileUnknown");
      return tz.accountCreatedAt && (Oz = new Date(tz.accountCreatedAt).toLocaleDateString(void 0, {
        year: "numeric",
        month: "short",
        day: "numeric"
      })), (0, Qz.jsxs)("div", {
        className: "PlayerProfileStats",
        children: [(0, Qz.jsx)(iz, {
          icon: "hourglass",
          label: sz("homePage:profileTimePlayed"),
          value: (0, Az.b)(tz.totalPlayMinutes)
        }), (0, Qz.jsx)(iz, {
          icon: "wifi",
          label: sz("homePage:profileLastOnline"),
          value: Wz
        }), (0, Qz.jsx)(iz, {
          icon: "calendar",
          label: sz("homePage:profileJoined"),
          value: Oz
        })]
      })
    }

    function lz() {
      const {
        t: zz
      } = (0, Hz.B)(), tz = (0, xz.useNavigatePreserveSearch)(), sz = (0, bz.i)(), {
        playerName: Iz,
        playerUrlName: ez
      } = (0, Wz.C)(), Az = (0, Wz.s)(), iz = (0, Oz.d)(Az.pathname), lz = iz && ("urlId" in iz ? `urlId:${iz.urlId}` : `name:${iz.lowerCaseName}`), nz = (0, Fz.useRef)(lz);
      nz.current = lz;
      const {
        userContext: az,
        isUserContextUpdating: qz
      } = (0, Dz.b)(), Sz = (0, Fz.useRef)(null), Vz = (0, Fz.useRef)(null), Rz = (0, Fz.useRef)(null), pz = (0, Fz.useRef)(!1), fz = (0, Fz.useRef)((0, Xz.ac)(kz)), [Ez, zt] = (0, Fz.useState)((() => {
        const zz = iz && Jz.c.peek(az, iz);
        return zz ? {
          status: "loaded",
          profile: zz,
          playerKey: lz
        } : {
          status: "loading"
        }
      })), [tt, st] = (0, Fz.useState)(0);
      (0, Fz.useEffect)(mz.f, []), (0, Fz.useEffect)((() => {
        jz.gameBridge.send("leaveGame", {
          reloadPath: null
        }), cz.b.set({
          gameState: "landingPage",
          openEverythingMenuName: null,
          openInGameMenuName: null
        })
      }), [Az.key]);
      const Ft = () => {
        const zz = (0, xz.getPreviousLocation)();
        null === zz || zz.startsWith("/play") ? (0, xz.navigateToHomePage)() : tz(-1)
      };
      (0, hz.b)(Ft), (0, Fz.useEffect)((() => {
        var zz;
        if (qz) return;
        if (!iz) return void zt({
          status: "notFound",
          playerKey: lz
        });
        const tz = "urlId" in iz && (null === (zz = Vz.current) || void 0 === zz ? void 0 : zz.urlId) === iz.urlId && Rz.current === az;
        if (tz && pz.current) return;
        const sz = tz ? null : Jz.c.peek(az, iz);
        let Fz = !1;
        const Wz = zz => "loaded" === zz.status && (zz.playerKey === lz || "urlId" in iz && zz.profile.urlId === iz.urlId);
        return sz ? (Rz.current = az, pz.current = !1, zt({
          status: "loaded",
          profile: sz,
          playerKey: lz
        }), Jz.c.invalidate(iz)) : zt((zz => Wz(zz) ? zz : {
          status: "loading"
        })), async function(zz, tz) {
          if ("lowerCaseName" in tz && tz.lowerCaseName.length > vz.i) return {
            status: "notFound"
          };
          try {
            return {
              status: "loaded",
              profile: await Kz.d.getPlayerProfile(zz, tz, Nz)
            }
          } catch (sz) {
            return (0, uz.b)(sz) ? {
              status: "notFound"
            } : (console.error("Failed to load user profile", sz), {
              status: "failed"
            })
          }
        }(az, iz).then((zz => {
          Fz || ("loaded" === zz.status && (Rz.current = az, pz.current = !0), zt((tz => "failed" === zz.status && Wz(tz) ? tz : {
            ...zz,
            playerKey: lz
          })))
        })), () => {
          Fz = !0
        }
      }), [qz, lz, az, tt]);
      const Wt = "loading" === Ez.status || Ez.playerKey === lz || "loaded" === Ez.status && !!iz && "urlId" in iz && Ez.profile.urlId === iz.urlId ? Ez : {
          status: "loading"
        },
        Xt = "loaded" === Wt.status ? Wt.profile : null,
        Ot = "loading" === Wt.status ? null : function(zz) {
          if ("loaded" === zz.status) {
            const {
              profile: tz
            } = zz;
            return (0, Uz.N)({
              urlId: tz.urlId,
              name: tz.player.name,
              ranks: tz.player.ranks,
              socialLinks: tz.socialLinks
            })
          }
          return "notFound" === zz.status ? (0, Uz.V)() : null
        }(Wt),
        ot = null !== Xt && void 0 !== Xt && Xt.urlId ? (0, Oz.h)({
          urlId: Xt.urlId,
          name: Xt.player.name
        }) : null;
      (0, wz.h)(ot);
      const vt = null !== Xt && void 0 !== Xt && Xt.player.cosmetics.profileEffect ? Cz.f[Xt.player.cosmetics.profileEffect] : void 0,
        Ut = null !== Xt && !qz && az.getPlayerName().toLowerCase() === Xt.player.name.toLowerCase(),
        Kt = (0, yz.b)(null === Xt || void 0 === Xt ? void 0 : Xt.player.name),
        ut = Ut && az.playerHasRank("youtuber");
      Vz.current = Xt;
      const Nt = (0, Fz.useCallback)((() => {
          iz && (Jz.c.invalidate(iz), Jz.c.get(az, iz).then((zz => {
            nz.current === lz && (pz.current = !0, zt({
              status: "loaded",
              profile: zz,
              playerKey: lz
            }))
          })).catch((zz => {
            console.error("Failed to refresh user profile", zz)
          })))
        }), [lz, az]),
        bt = (0, Fz.useCallback)((() => {
          var zz;
          const tz = Vz.current;
          return !(!tz || null === (zz = Sz.current) || void 0 === zz || !zz.isReady()) && (Sz.current.setAllCosmetics(tz.player.cosmetics), !0)
        }), []);
      return (0, Fz.useEffect)((() => {
        if (!Xt) return;
        let zz, tz = !1;
        const sz = () => {
          tz || bt() || (zz = setTimeout(sz, 100))
        };
        return sz(), () => {
          tz = !0, clearTimeout(zz)
        }
      }), [Xt, bt]), (0, Qz.jsxs)("div", {
        className: Zz()("PlayerProfile", {
          PlayerProfilePortrait: sz
        }),
        children: [Ot && (0, Qz.jsx)(oz.c, {
          meta: Ot
        }), (0, Qz.jsxs)("div", {
          className: "PlayerProfileBackgroundContainer",
          children: [vt && (0, Qz.jsx)(vt, {}), !vt && (0, Qz.jsx)("div", {
            className: "PlayerProfileBackground",
            style: {
              backgroundImage: `url(${fz.current})`
            }
          })]
        }), (0, Qz.jsxs)("div", {
          className: "PlayerProfileHeader",
          children: [(0, Qz.jsx)(Yz.e, {
            onClick: Ft,
            children: zz("general:back")
          }), Xt && !qz && !Ut && dz.featureFlags.useSocialFeatures && (0, Qz.jsx)("div", {
            className: "PlayerProfileExclusionActions",
            children: (0, Qz.jsx)(Mz.d, {
              playerName: Xt.player.name,
              className: "SmallTextLight"
            })
          })]
        }), "loading" === Wt.status && (0, Qz.jsx)("div", {
          className: "PlayerProfileCentredMessage",
          children: (0, Qz.jsx)(rz.d, {})
        }), ("notFound" === Wt.status || "failed" === Wt.status) && (0, Qz.jsxs)("div", {
          className: "PlayerProfileCentredMessage PlayerProfileError",
          children: [(0, Qz.jsx)(Gz.c, {
            name: "face-dizzy"
          }), (0, Qz.jsx)("div", {
            className: "PlayerProfileErrorText",
            children: "notFound" === Wt.status ? zz("socialBar:playerNotFound", {
              playerName: null !== ez && void 0 !== ez ? ez : Iz
            }) : zz("playerProfile:loadFailed")
          }), "failed" === Wt.status && (0, Qz.jsx)(Yz.h, {
            onClick: () => {
              st((zz => zz + 1))
            },
            children: zz("general:tryAgain")
          })]
        }), Xt && (0, Qz.jsxs)("div", {
          className: "PlayerProfileContent",
          children: [(0, Qz.jsxs)("div", {
            className: "PlayerProfileLeft",
            children: [(0, Qz.jsx)("div", {
              className: "PlayerProfileName FullyFancyText",
              children: (0, Qz.jsx)(gz.c, {
                text: (0, Bz.w)(Xt.player.ranks, Xt.player.name, Xt.player.nameColour),
                friendBadgeFor: Kt ? Xt.player.name : void 0
              })
            }), (0, Qz.jsx)("div", {
              className: "PlayerProfileModel",
              children: (0, Qz.jsx)(Fz.Suspense, {
                fallback: (0, Qz.jsx)("div", {
                  className: "PlayerProfileModelLoading",
                  children: (0, Qz.jsx)(rz.d, {})
                }),
                children: (0, Qz.jsx)(mz.b, {
                  ref: Sz,
                  onReady: () => {
                    bt()
                  }
                })
              })
            })]
          }), (0, Qz.jsxs)("div", {
            className: "PlayerProfileRight",
            children: [(0, Qz.jsx)(Lz, {
              profile: Xt
            }), (Xt.socialLinks.length > 0 || ut) && (0, Qz.jsx)(Tz.d, {
              socialLinks: Xt.socialLinks,
              editable: ut,
              userContext: az,
              onLinksUpdated: Nt
            }), (0, Qz.jsxs)("div", {
              className: "PlayerProfileGames",
              children: [(0, Qz.jsx)("div", {
                className: "PlayerProfileGamesTitle SmallTextBold",
                children: zz("homePage:profileReleasedGames")
              }), 0 === Xt.releasedGames.length && (0, Qz.jsx)("div", {
                className: "PlayerProfileNoGames",
                children: zz("homePage:profileNoReleasedGames")
              }), Xt.releasedGames.length > 0 && (0, Qz.jsx)("div", {
                className: "PlayerProfileGamesGrid",
                children: Xt.releasedGames.map((zz => (0, Qz.jsx)(Pz.g, {
                  source: {
                    type: "preview",
                    preview: zz
                  },
                  gameWidth: "100%",
                  useLongRatio: !0,
                  hideFavourites: !0,
                  entrySource: "other"
                }, zz.schematicId)))
              })]
            })]
          })]
        })]
      })
    }
  },
  4514: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => gz
    });
    var Fz = sz(1020),
      Wz = sz.n(Fz),
      Xz = sz(4295),
      Oz = sz(1173),
      oz = sz(1036),
      vz = sz(1419),
      Uz = sz(1466),
      Kz = sz(1319),
      uz = sz(2341),
      Nz = sz(1087);
    const bz = {
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

    function wz(zz) {
      let {
        platform: tz
      } = zz;
      const sz = "youtube" === tz;
      return (0, Nz.jsxs)("span", {
        className: Wz()("PlayerProfileSocialLinkIcon", {
          PlayerProfileSocialLinkIconYoutube: sz
        }),
        children: [sz && (0, Nz.jsx)(uz.c, {
          variant: "white"
        }), !sz && (0, Nz.jsx)(oz.c, {
          name: bz[tz].icon,
          kit: "brands"
        })]
      })
    }

    function Dz(zz) {
      let {
        platform: tz,
        link: sz,
        editable: Fz,
        userContext: Wz,
        onLinksUpdated: uz
      } = zz;
      const {
        t: Dz
      } = (0, Oz.B)(), gz = bz[tz];
      if (!sz && !Fz) return null;

      function Hz() {
        var zz;
        if (!Wz || !uz) return;
        Kz.NotificationProvider.showInputPopup({
          title: "homePage:profileSocialLinkEditTitle",
          textOpts: {
            title: {
              platform: gz.name
            }
          },
          prefixText: Xz.p[tz],
          placeholderText: "playBloxd",
          initialValue: null !== (zz = null === sz || void 0 === sz ? void 0 : sz.handle) && void 0 !== zz ? zz : "",
          maxLength: 30,
          submitText: "general:save",
          secondaryButtonText: sz ? "general:remove" : void 0
        }).getResult().then((async zz => {
          if ("notificationTornDown" !== zz && null !== zz) try {
            "submit" === zz.type ? await Uz.d.setSocialLink(Wz, tz, zz.value) : await Uz.d.clearSocialLink(Wz, tz), uz()
          } catch (sz) {
            console.error("Failed to update social link", sz), Kz.NotificationProvider.showAlertPopup({
              title: sz.errorMessageForUser,
              confirmText: "general:ok"
            })
          }
        }))
      }
      if (sz) {
        const zz = `@${sz.handle}`;
        return (0, Nz.jsxs)("a", {
          className: "PlayerProfileSocialLink",
          style: {
            background: gz.color
          },
          href: sz.profileUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [(0, Nz.jsxs)("div", {
            className: "PlayerProfileSocialLinkMain",
            children: [(0, Nz.jsx)(wz, {
              platform: tz
            }), (0, Nz.jsx)("span", {
              className: "PlayerProfileSocialLinkText",
              children: (0, Nz.jsx)("span", {
                className: "PlayerProfileSocialLinkName SmallTextBold",
                children: zz
              })
            })]
          }), Fz && (0, Nz.jsx)("button", {
            type: "button",
            className: "PlayerProfileSocialLinkEditButton",
            ...(0, vz.T)({
              stopPropagation: !0
            }),
            onClick: zz => {
              zz.stopPropagation(), zz.preventDefault(), Hz()
            },
            children: (0, Nz.jsx)(oz.c, {
              name: "pen-to-square"
            })
          }), !Fz && (0, Nz.jsx)("span", {
            className: "PlayerProfileSocialLinkArrow",
            children: (0, Nz.jsx)(oz.c, {
              name: "arrow-up-right-from-square"
            })
          })]
        })
      }
      return (0, Nz.jsxs)("button", {
        type: "button",
        className: "PlayerProfileSocialLink PlayerProfileSocialLinkUnlinked",
        style: {
          background: gz.color
        },
        ...(0, vz.T)(),
        onClick: () => {
          Hz()
        },
        children: [(0, Nz.jsx)(wz, {
          platform: tz
        }), (0, Nz.jsxs)("span", {
          className: "PlayerProfileSocialLinkText",
          children: [(0, Nz.jsx)("span", {
            className: "PlayerProfileSocialLinkName SmallTextBold",
            children: gz.name
          }), (0, Nz.jsx)("span", {
            className: "PlayerProfileSocialLinkCount SmallTextLight",
            children: Dz("homePage:profileSocialLinkAdd")
          })]
        }), (0, Nz.jsx)("span", {
          className: "PlayerProfileSocialLinkEditButton",
          children: (0, Nz.jsx)(oz.c, {
            name: "pen-to-square"
          })
        })]
      })
    }

    function gz(zz) {
      let {
        socialLinks: tz,
        editable: sz = !1,
        userContext: Fz,
        onLinksUpdated: Wz
      } = zz;
      if (!sz && 0 === tz.length) return null;
      const Oz = new Map(tz.map((zz => [zz.platform, zz]))),
        oz = sz ? Xz.n : tz.map((zz => zz.platform));
      return (0, Nz.jsx)("div", {
        className: "PlayerProfileSocialLinks",
        children: (0, Nz.jsx)("div", {
          className: "PlayerProfileSocialLinksList",
          children: oz.map((zz => (0, Nz.jsx)(Dz, {
            platform: zz,
            link: Oz.get(zz),
            editable: sz,
            userContext: Fz,
            onLinksUpdated: Wz
          }, zz)))
        })
      })
    }
  },
  4509: zz => {
    zz.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQ0lEQVR4nGOws7P7D8Kmpqb/NTU1wTQymwGbAhANwwzIOmAYxQRkCXNzczBGtgrFBGQFKFZgsxtuAi67YY5HMQGbAgCIxWSBYHJzHAAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);