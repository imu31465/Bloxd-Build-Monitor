export const id = 109;
export const ids = [109];
export const modules = {
  8565: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      default: () => lz
    });
    var hv = Pv(1505),
      Sv = Pv(22),
      ev = Pv(4420),
      gv = Pv(52),
      pv = Pv(1439);
    var dv = Pv(1876),
      Nv = Pv(1492),
      lv = Pv(1336),
      Tv = Pv(1175),
      Wv = Pv(144),
      wv = Pv(1209),
      av = Pv(2277),
      sv = Pv(8572);

    function Cv(vv, zv) {
      const Pv = !0 === zv.debugResult.gameRefused,
        hv = Pv || zv.code === Wv.o.REQUEST_TO_MATCHMAKING ? (0, sv.h)(zv.message) : null;
      return null !== hv ? (iv(vv, vv((0, sv.n)(hv)), vv(sv.k[hv])), !0) : !!Pv && (async function(vv) {
        const {
          gameNameWithVariation: zv,
          lobbyName: Pv,
          shownLobbyName: hv
        } = dv.gameBridge.latest("connectedGame"), Sv = "classic" === zv && (0, wv.N)(Pv) ? hv : await (0, av.d)(vv, zv, Pv);
        return "" !== Sv ? vv("general:cantJoinGame", {
          game: Sv
        }) : vv("general:cantJoinThisGame")
      }(vv).then((Pv => {
        iv(vv, Pv, zv.message)
      })), !0)
    }

    function iv(vv, zv, Pv) {
      lv.NotificationProvider.showPromptPopup({
        icon: "lock",
        title: zv,
        subtitle: Pv,
        confirmText: vv("general:ok"),
        cancelText: ""
      })
    }
    var cv = Pv(4342),
      Gv = Pv(1114),
      mv = Pv(26),
      jv = Pv(1230),
      fv = Pv(1692),
      Fv = Pv(73),
      Yv = Pv(1295),
      nv = Pv(1426),
      Ov = Pv(4283),
      Dv = Pv(4117),
      Kv = Pv(3013),
      Vv = Pv(1082);
    const Uv = "https://discord.gg/playbloxd";

    function Rv(vv) {
      let {
        failure: zv
      } = vv;
      const {
        t: Pv
      } = (0, Tv.x)(), hv = "chosen" === zv.packSource, Sv = Fv.featureFlags.useDiscord ? hv ? "texturePackLoad:failedHelpCustomPack" : "texturePackLoad:failedHelp" : hv ? "texturePackLoad:failedHelpCustomPackNoDiscord" : "texturePackLoad:failedHelpNoDiscord";
      return (0, Vv.jsxs)(Vv.Fragment, {
        children: [Pv(Sv, {
          code: zv.code
        }), "default" !== zv.packSource && zv.code === Kv.l.Error && (0, Vv.jsxs)("div", {
          style: {
            paddingTop: "1rem",
            overflowWrap: "anywhere"
          },
          children: [Pv("texturePackLoad:details"), " ", zv.reason]
        }), Fv.featureFlags.useDiscord && (0, Vv.jsx)("div", {
          style: {
            paddingTop: "1rem"
          },
          children: (0, Vv.jsx)("a", {
            href: Uv,
            target: "_blank",
            rel: "noreferrer",
            children: Pv("texturePackLoad:reportOnDiscord")
          })
        })]
      })
    }
    var xv = Pv(1311),
      tv = Pv(763),
      qv = Pv(1212),
      Iv = Pv(1002),
      Qv = Pv(1482),
      Zv = Pv(3043),
      Av = Pv(2934),
      Lv = Pv(1342),
      Hv = Pv(1327),
      Mv = Pv(4719),
      yv = Pv(8575),
      Bv = Pv(2747);

    function Jv(vv) {
      let {
        onApply: zv,
        onSkip: Pv
      } = vv;
      const {
        t: hv
      } = (0, Tv.x)();
      return (0, gv.useEffect)((() => {
        Bv.f.skipPlayWait()
      }), []), (0, Vv.jsx)(Lv.h, {
        icon: "download",
        title: "customTexturePack:downloadTitle",
        subtitle: (0, Vv.jsxs)("div", {
          className: "CustomTexturePackDownloaderSubtitleText",
          children: [hv("customTexturePack:downloadPrompt"), (0, Vv.jsx)("div", {
            className: "CustomTexturePackDownloaderWarningText",
            children: hv("customTexturePack:authorWarning")
          }), (0, Vv.jsx)("div", {
            className: "CustomTexturePackDownloaderSecondaryText",
            children: hv("customTexturePack:existingPackSaved")
          })]
        }),
        confirm: {
          text: "general:apply",
          onClick: zv
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: Pv
        }
      })
    }
    async function Ev() {
      let vv = !1;
      const zv = lv.NotificationProvider.showCustomPopup({
        body: zv => (0, Vv.jsx)(Jv, {
          onApply: () => {
            vv = !0, zv()
          },
          onSkip: zv
        }),
        disableExitButton: !0,
        disablePressBackgroundToClose: !0
      });
      return await zv.getResult(), vv
    }
    let ov = {
      wanted: !1
    };
    let bv = null;

    function rv(vv) {
      vv.setGamePackConfirm(Ev), bv = vv
    }
    var kv = Pv(3247);

    function Xv(vv) {
      let {
        schematicId: zv,
        texturePackKey: Pv,
        onClose: hv
      } = vv;
      const [Sv, ev] = (0, gv.useState)("prompt"), [pv, dv] = (0, gv.useState)(null), Nv = (0, kv.b)();

      function lv() {
        hv()
      }
      return "prompt" === Sv ? (0, Vv.jsx)(Jv, {
        onApply: async function() {
          ev("downloading");
          try {
            const vv = await async function(vv, zv) {
              const Pv = await (0, Mv.d)(zv);
              if (Pv) return {
                pack: Pv,
                key: zv
              };
              const hv = await Gv.userContextManager.getCurrentUserContext(),
                Sv = (await Qv.e.getGame(hv, vv, !0)).customTexturePackKey;
              if (!Sv) return null;
              const ev = await (0, Mv.d)(Sv);
              if (!ev) throw new Error("The texture pack could not be found");
              return {
                pack: ev,
                key: Sv
              }
            }(zv, Pv);
            if (!Nv.current) return;
            if (!vv) return void hv();
            if ((0, Zv.m)(vv.pack)) return void ev("refused");
            Av.b.setFromJson(vv.pack, "customGame"), await Av.b.saveTemporaryTexturePack(vv.key), Nv.current && (0, fv.reloadBloxd)()
          } catch (vv) {
            dv(vv instanceof Error ? vv.message : String(vv)), ev("error")
          }
        },
        onSkip: lv
      }) : "downloading" === Sv ? (0, Vv.jsx)(Lv.h, {
        icon: "download",
        title: "customTexturePack:downloading",
        subtitle: (0, Vv.jsx)("div", {
          className: "CustomTexturePackDownloaderLogoLoaderContainer",
          children: (0, Vv.jsx)(Hv.c, {
            showFace: !0
          })
        })
      }) : "error" === Sv ? (0, Vv.jsx)(Lv.h, {
        icon: "face-worried",
        title: "customTexturePack:errorTitle",
        subtitle: pv,
        confirm: {
          text: "customTexturePack:refreshPage",
          onClick: () => {
            window.location.reload()
          }
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: lv
        }
      }) : "refused" === Sv ? (0, Vv.jsx)(Lv.h, {
        icon: "face-worried",
        title: "customTexturePack:cantApplyTitle",
        subtitle: "customTexturePack:gamePackHasExternalUrls",
        confirm: {
          text: "general:continue",
          onClick: lv
        }
      }) : null
    }
    var uv = Pv(8580),
      vz = Pv(4091),
      zz = Pv(1736),
      Pz = Pv(2715),
      hz = Pv(3187),
      Sz = Pv(4444),
      ez = Pv(1285),
      gz = Pv(635),
      pz = Pv(716);

    function dz() {
      const vv = Sv.c.get("clientEscMenuOptions");
      dv.gameBridge.send("setLookSensitivity", Sv.c.get("isTouchScreen") ? (0, pz.k)(vv) : vv.mouseSensitivity)
    }
    async function Nz(vv, zv, Pv) {
      const hv = (0, Sz.H)(zv);
      async function gv(vv, zv, Pv, hv) {
        var gv;
        if (hv.aborted) return null;
        null === Sv.c.get("gameEntrySource") && (0, Sv.g)("directPlayUrl"), gz.r && (0, yv.c)().catch((() => {})), Sv.c.set({
          gameState: "findingLobby"
        }), mv.j.zC("loadingScreenState", "loadingPage:findingLobby");
        const pv = await Gv.userContextManager.getCurrentUserContext();
        dv.gameBridge.send("setRequestedGame", {
          gameNameWithVariation: zv,
          discordContext: vv instanceof qv.e ? vv.getSerialisableParams() : null
        }), (0, zz.f)();
        const Nv = await async function(vv, zv, Pv, hv, Sv) {
          try {
            await ev.reqLibsLoadedPromise
          } catch (gv) {
            return jv.e.errorWithCode(gv.toString(), Wv.o.LOAD_REQUIRED_LIBS, {
              error: gv,
              severity: "medium"
            })
          }
          return mv.j.zC("matchmakeAndPlayStepCompleted", {
            step: Wv.o.LOAD_REQUIRED_LIBS,
            totalSubSteps: 1
          }), (0, ev.matchmakeAndPlayMaybeUnloaded)(vv, zv, Pv, hv, Sv)
        }(vv, zv, Pv, pv, hv), lv = Nv.isError() ? Nv.asError() : null;
        if (lv && !lv.debugResult.ev) {
          console.log("Failed to join lobby:", lv.message);
          const vv = "timedOut" === lv.debugResult.gameServerUnreachable;
          (0, Pz.e)("matchmake_failed", lv.message, vv ? "CONNECT_TO_GAME_SERVER_TIMEOUT" : Wv.o[lv.code])
        }
        if (hv.aborted) return dv.gameBridge.send("leaveGame", {
          reloadPath: null
        }), null;
        if (null !== lv && void 0 !== lv && lv.debugResult.ev) return console.log("Join cancelled:", lv.message), null;
        if (lv) return Nv;
        const {
          gameNameWithVariation: Tv,
          lobbyName: av,
          addLobbyToRecentlyPlayed: sv
        } = Nv.getValue();
        let Cv;
        dz(), (0, ez.D)().setGameViewShown(!0);
        const iv = null === (gv = tv.e[Tv]) || void 0 === gv ? void 0 : gv.recentlyPlayedAs;
        return Cv = (0, Iv.l)(Tv) ? {
          type: "custom",
          name: "",
          schematicId: (0, Iv.q)(Tv),
          recentLobbies: []
        } : "classic" !== Tv || (0, wv.S)(av) ? iv ? {
          type: "bloxd",
          gameNameWithVariation: iv,
          recentLobbies: []
        } : {
          type: "bloxd",
          gameNameWithVariation: Tv,
          recentLobbies: []
        } : {
          type: "bloxd",
          gameNameWithVariation: "classic_worlds",
          recentLobbies: []
        }, Qv.e.addRecentlyPlayedGame(pv, Cv, sv && !iv ? av : void 0).then((vv => {
          pv.setRecentlyPlayedGames(vv)
        })).catch((vv => {
          console.error("Failed to record recently played game", vv)
        })), (0, Yv.N)(), Nv
      }
      return hv && (0, Sv.g)("updateRejoin"), (0, hz.j)((async Sv => {
        try {
          let pv = vv,
            dv = await gv(pv, zv, Pv, Sv);
          for (let vv = 0; hv && vv < Sz.j; vv++) {
            var ev;
            if (null === (ev = dv) || void 0 === ev || !ev.isError() || dv.asError().code !== Wv.o.REQUEST_TO_MATCHMAKING) break;
            if (!await (0, Sz.J)((0, Sz.u)(vv), Sv)) return dv;
            pv = (0, Sz.w)(pv, vv + 1, "string" === typeof pv && (0, wv.S)(pv)), dv = await gv(pv, zv, Pv, Sv)
          }
          return dv
        } catch (pv) {
          if ((0, Pz.e)("matchmake_failed", pv, "unexpected"), dv.gameBridge.send("leaveGame", {
              reloadPath: Sv.aborted ? null : "/"
            }), Sv.aborted) return null;
          throw pv
        }
      }), (async vv => {
        var Pv;
        if (hv) return;
        const Sv = (0, Yv.I)();
        null !== Sv && (await Sv, vv.aborted) || (null !== (Pv = tv.e[zv]) && void 0 !== Pv && Pv.playAdBeforeMatchmaking ? (Bv.f.skipPlayWait(), await new Promise((vv => {
          (0, Yv.eb)((() => {
            vv(!0)
          }), "video_start")
        }))) : (0, Yv.eb)((() => {}), "video_start"))
      }))
    }

    function lz() {
      const {
        t: vv
      } = (0, Tv.x)(), zv = (0, Nv.useNavigatePreserveSearch)(), Pv = (0, hv.p)(), sv = (0, hv.B)(), iv = (0, gv.useRef)({
        t: vv,
        navigate: zv
      });
      iv.current = {
        t: vv,
        navigate: zv
      };
      const mv = (0, gv.useRef)("");
      mv.current = Pv.pathname + Pv.search;
      const {
        gameState: jv,
        clientEscMenuOptions: Uv
      } = (0, Sv.i)(["gameState", "clientEscMenuOptions"]), tv = (0, gv.useRef)(null), qv = (0, gv.useRef)(null);
      var Zv;
      (0, hz.n)(), (0, hz.p)(), Zv = gz.r, (0, gv.useEffect)((() => {
        if (!Zv) return;
        let vv = !0;
        return (0, yv.c)().then((zv => {
          vv && rv(zv)
        })).catch((() => {})), () => {
          var zv;
          vv = !1, ov.wanted = !1, null === (zv = bv) || void 0 === zv || zv.setGamePackConfirm(null), bv = null
        }
      }), [Zv]), (0, gv.useEffect)((() => {
        var vv;
        (0, ev.needGameClientNow)();
        const {
          t: zv,
          navigate: hv
        } = iv.current, gv = (0, uv.b)(sv, Pv.search);
        if (sv.lobbyName && !new URLSearchParams(Pv.search).has("lobby")) return void hv((0, xv.e)(gv.gameNameWithVariation, gv.lobbyName), {
          replace: !0
        });
        let pv = Promise.resolve({
          shouldMatchmake: !0
        });
        if ("/play/discord-custom-lobby" === Pv.pathname) {
          const vv = Sv.c.get("discordContext");
          if (!vv) return void hv("/");
          pv = cv.e.setupDiscordLobby(vv, "classic").then((() => ({
            shouldMatchmake: !0,
            discordContext: vv
          }))).catch((zv => (console.error("Failed to setup discord lobby", zv), {
            shouldMatchmake: !1,
            discordContext: vv
          })))
        } else if (!gv.gameNameWithVariation || !(0, wv.P)(gv.gameNameWithVariation)) return console.error(`Valid game name with variation is required. Received ${gv.gameNameWithVariation}`), void hv(-1);
        if (gv.gameNameWithVariation === tv.current && gv.lobbyName === qv.current) return;
        if (dv.gameBridge.latest("connectedGame").replay) return void(0, hz.h)(null);
        (0, Yv.J)(), Sv.c.set({
          gameState: "loadingScreen"
        });
        const Nv = function() {
          ov.wanted = !1;
          const vv = {
            wanted: !0
          };
          return ov = vv, () => vv.wanted
        }();
        if ("releaseCountdown" === (null === (vv = (0, av.f)(gv.gameNameWithVariation)) || void 0 === vv ? void 0 : vv.type)) return console.error(`Game hasn't been released yet: ${gv.gameNameWithVariation}`), void hv(-1);
        const Tv = gv.gameNameWithVariation;
        if (Tv && (gz.r || (0, Iv.l)(Tv))) {
          const vv = gz.r ? Promise.all([(0, yv.c)(), Gv.userContextManager.getCurrentUserContext()]).then((vv => {
            let [zv, Pv] = vv;
            if (Nv()) return rv(zv), zv.packForGame(Tv, Pv, Nv)
          })) : async function(vv) {
            await Av.b.indexedDbValuesAreLoaded();
            const zv = await Gv.userContextManager.getCurrentUserContext(),
              Pv = (0, Iv.q)(vv);
            let hv;
            try {
              hv = await Qv.e.getGame(zv, Pv, !0)
            } catch (gv) {
              return void console.error("Failed to get game", gv)
            }
            const Sv = hv.customTexturePackKey;
            if (!Sv) return void(Av.b.isUsingTemporaryTexturePack() && ((0, fv.reloadBloxd)(), await new Promise((() => {}))));
            if (Av.b.isUsingTemporaryTexturePack() && Av.b.getTemporaryTexturePackSource() === Sv) return;
            const ev = lv.NotificationProvider.showCustomPopup({
              body: vv => (0, Vv.jsx)(Xv, {
                schematicId: Pv,
                texturePackKey: Sv,
                onClose: vv
              }),
              disableExitButton: !0,
              disablePressBackgroundToClose: !0
            });
            await ev.getResult()
          }(Tv), zv = pv;
          pv = vv.catch((vv => {
            console.error("Failed to check for custom texture pack", vv)
          })).then((() => zv))
        }(0, hz.h)(null);
        let jv = !1;
        const nv = Pv.pathname + Pv.search,
          Uv = () => !jv && mv.current === nv;
        return pv.then((vv => {
          let {
            shouldMatchmake: Pv,
            discordContext: ev
          } = vv;
          Uv() && (Pv ? Nz(null !== ev && void 0 !== ev ? ev : gv.lobbyName, ev ? "classic" : gv.gameNameWithVariation, gv.directJoinVmUrl).then((vv => {
            var Pv;
            if (null !== vv && Uv())
              if (vv.isError()) {
                var ev;
                const pv = vv.asError(),
                  Nv = null !== (ev = pv.debugResult.severity) && void 0 !== ev ? ev : "high";
                if (pv.code === Wv.o.SHADER_PACK) return void(0, vz.e)(pv.message, hv);
                const Tv = Sv.c.get("gameEntrySource"),
                  wv = pv.code === Wv.o.INITIALISE_WEBGL ? (0, Dv.d)() : null,
                  {
                    error: av
                  } = pv.debugResult;
                let sv;
                if (Cv(zv, pv)) sv = Promise.resolve(!1);
                else if (null !== wv) sv = (0, Dv.h)(wv);
                else if (av instanceof Kv.n) Pv = av, sv = lv.NotificationProvider.showPromptPopup({
                  icon: "face-dizzy",
                  title: "texturePackLoad:failedTitle",
                  subtitle: (0, Vv.jsx)(Rv, {
                    failure: Pv
                  }),
                  confirmText: "general:tryAgain",
                  cancelText: "general:back"
                }).getResult().then((vv => !0 === vv));
                else {
                  let vv;
                  switch (Nv) {
                    case "low":
                      vv = "face-diagonal-mouth";
                      break;
                    case "medium":
                      vv = "face-worried";
                      break;
                    case "high":
                      vv = "face-dizzy"
                  }
                  sv = lv.NotificationProvider.showPromptPopup({
                    icon: vv,
                    title: Wv.B[pv.code],
                    subtitle: (0, Vv.jsxs)(Vv.Fragment, {
                      children: [pv.debugResult.gameServerUnreachable ? zv((0, Fv.isMobile)() ? "general:gameServerUnreachableMobile" : "general:gameServerUnreachable") : pv.message, pv.debugResult.error instanceof Error && (0, Vv.jsx)("div", {
                        style: {
                          fontSize: "0.9rem",
                          paddingTop: "1rem"
                        },
                        children: (0, Vv.jsx)(Ov.c, {
                          errorString: pv.debugResult.error.stack
                        })
                      })]
                    }),
                    confirmText: zv("general:tryAgain"),
                    cancelText: zv("general:cancel")
                  }).getResult().then((vv => !0 === vv))
                }
                sv.then((vv => {
                  if (vv) {
                    (0, Sv.g)(Tv);
                    const vv = (0, xv.e)(gv.gameNameWithVariation, gv.lobbyName);
                    "low" === Nv ? hv(vv) : (0, fv.reloadBloxd)(vv)
                  }
                })), dv.gameBridge.send("leaveGame", {
                  reloadPath: "/"
                }), hv(-1)
              } else {
                tv.current = vv.getValue().gameNameWithVariation, qv.current = vv.getValue().lobbyName;
                const zv = (0, xv.e)(tv.current, vv.getValue().lobbyName);
                hv(zv, {
                  replace: !0
                })
              }
          })).catch((vv => {
            if (!Uv()) return;
            lv.NotificationProvider.showPromptPopup({
              icon: "face-dizzy",
              title: "Unexpected Error",
              subtitle: (0, Vv.jsxs)(Vv.Fragment, {
                children: [zv("homePage:pleaseCopyError"), (0, Vv.jsx)("div", {
                  style: {
                    fontSize: "0.9rem",
                    paddingTop: "1rem"
                  },
                  children: (0, Vv.jsx)(Ov.c, {
                    errorString: vv.stack
                  })
                })]
              }),
              confirmText: zv("general:tryAgain"),
              cancelText: zv("general:cancel")
            }).getResult().then((vv => {
              !0 === vv && (0, fv.reloadBloxd)((0, xv.e)(gv.gameNameWithVariation, gv.lobbyName))
            })), hv(-1)
          })) : hv(-1))
        })), () => {
          jv = !0
        }
      }), [sv, Pv.search, Pv.pathname]), (0, gv.useEffect)((() => {
        Uv.disableFullscreen && (0, nv.b)() ? (0, nv.e)() : !Uv.disableFullscreen && (0, nv.d)() && (0, nv.m)()
      }), [jv, Uv]), (0, gv.useEffect)((() => {
        "inGame" === jv && dz()
      }), [jv, Uv]), (0, gv.useEffect)((() => {
        "inGame" !== jv && Sv.c.set({
          openInGameMenuName: null
        })
      }), [jv]);
      const Lv = function(vv) {
        const zv = (0, Sv.d)(vv),
          [Pv, hv] = (0, gv.useState)(0),
          [ev, dv] = (0, gv.useState)(!1);
        (0, pv.g)("gameJoined", (() => {
          (0, Sv.d)(Sv.c.get("gameState")) && (hv((vv => vv + 1)), dv(!0))
        })), (0, gv.useEffect)((() => {
          zv || dv(!1)
        }), [zv]);
        const Nv = "inGame" === vv;
        return {
          mounted: Nv || zv && ev,
          shown: Nv,
          key: Pv
        }
      }(jv);
      return (0, Vv.jsx)(Vv.Fragment, {
        children: Lv.mounted && (0, Vv.jsx)(ev.InGameUi, {
          shown: Lv.shown
        }, Lv.key)
      })
    }
  },
  4719: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => Sv
    });
    var hv = Pv(1184);
    async function Sv(vv) {
      const zv = await fetch(`${hv.clientSideServerUrls.s3Url}/${vv}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === zv.status || 403 === zv.status) return null;
      if (!zv.ok) throw new Error(`Failed to download the texture pack (${zv.status})`);
      return await zv.json()
    }
  },
  8580: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => gv
    });
    var hv = Pv(1311),
      Sv = Pv(1209),
      ev = Pv(626);

    function gv(vv) {
      return vv = function(vv, zv) {
        var Pv;
        const hv = new URLSearchParams(zv),
          Sv = hv.get("lobby"),
          ev = hv.get("vm"),
          gv = null !== (Pv = Sv) && void 0 !== Pv ? Pv : vv.lobbyName,
          pv = null !== ev && void 0 !== ev ? ev : vv.directJoinVmUrl;
        if (gv === vv.lobbyName && pv === vv.directJoinVmUrl) return vv;
        return {
          ...vv,
          lobbyName: gv,
          directJoinVmUrl: pv
        }
      }(vv, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), vv = function(vv) {
        if ((0, ev.N)(vv.directJoinVmUrl)) return vv;
        const zv = (0, Sv.db)(vv.directJoinVmUrl);
        null === zv && (vv.directJoinVmUrl = void 0);
        return vv
      }(vv = function(vv) {
        if ((0, ev.N)(vv.gameNameWithVariation)) return vv;
        return vv.gameNameWithVariation = (0, hv.n)(vv.gameNameWithVariation), vv
      }(vv))
    }
  },
  8578: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => ev,
      g: () => Sv
    });
    let hv = !1;

    function Sv() {
      hv = !0
    }

    function ev() {
      return hv
    }
  },
  8575: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => lv,
      e: () => Tv
    });
    var hv = Pv(2934),
      Sv = Pv(2213),
      ev = Pv(2972),
      gv = Pv(4402),
      pv = Pv(3258),
      dv = Pv(8578);
    let Nv = null;

    function lv() {
      return gv.c.cancelDownloadForJoin(), (0, pv.b)(), (0, Sv.f)(), (0, dv.g)(), (0, ev.h)(), Promise.all([Pv.e(70), Pv.e(73), Pv.e(72), Pv.e(71), Pv.e(84), Pv.e(261), Pv.e(199), Pv.e(217), Pv.e(239), Pv.e(212), Pv.e(46)]).then((() => Pv(39984))).catch((() => {})), Promise.all([Pv.e(75), Pv.e(132), Pv.e(88), Pv.e(56)]).then((() => Pv(40061))).then((vv => {
        let {
          startJoinLoad: zv
        } = vv;
        zv()
      }), (() => {})), Nv ??= Promise.all([Pv.e(72), Pv.e(75), Pv.e(129), Pv.e(132), Pv.e(263), Pv.e(186), Pv.e(88), Pv.e(87), Pv.e(86), Pv.e(212), Pv.e(61)]).then((() => Pv(40153))).then((vv => (vv.startWasmPlay(), vv.followPageUiPack((vv => {
        hv.b.showGamePack(vv)
      })), vv)), (vv => {
        throw Nv = null, vv
      })), Nv
    }

    function Tv() {
      return Promise.all([Pv.e(72), Pv.e(75), Pv.e(129), Pv.e(132), Pv.e(263), Pv.e(186), Pv.e(88), Pv.e(87), Pv.e(86), Pv.e(212), Pv.e(61)]).then((() => Pv(40153))).then((vv => {
        vv.startWasmPreviews(), vv.prefetchWasmPreviews()
      }))
    }
  },
  8572: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => ev,
      g: () => gv,
      h: () => pv,
      k: () => Nv,
      n: () => dv
    });
    var hv = Pv(185),
      Sv = Pv(4386);

    function ev(vv) {
      return gv(vv) === hv.b.gameOrPluginOnPlayerAuthRejected.code
    }

    function gv(vv) {
      return "object" === typeof vv && null !== vv ? vv.code : void 0
    }

    function pv(vv) {
      var zv;
      return null !== (zv = Object.keys(Sv.d).find((zv => Sv.d[zv] === vv))) && void 0 !== zv ? zv : null
    }

    function dv(vv) {
      return "notWhitelisted" === vv ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const Nv = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);