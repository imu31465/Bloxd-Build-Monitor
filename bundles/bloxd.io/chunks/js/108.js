export const id = 108;
export const ids = [108];
export const modules = {
  8389: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      default: () => Kt
    });
    var Fz = sz(1493),
      Wz = sz(30),
      Xz = sz(4304),
      Oz = sz(65),
      oz = sz(1416);
    var vz = sz(1857),
      Uz = sz(1483),
      Kz = sz(1319),
      uz = sz(1173),
      Nz = sz(161),
      bz = sz(1213),
      wz = sz(2253),
      Dz = sz(8398);

    function gz(zz, tz) {
      const sz = !0 === tz.debugResult.gameRefused,
        Fz = sz || tz.code === Nz.k.REQUEST_TO_MATCHMAKING ? (0, Dz.e)(tz.message) : null;
      return null !== Fz ? (Hz(zz, zz((0, Dz.h)(Fz)), zz(Dz.g[Fz])), !0) : !!sz && (async function(zz) {
        const {
          gameNameWithVariation: tz,
          lobbyName: sz,
          shownLobbyName: Fz
        } = vz.gameBridge.latest("connectedGame"), Wz = "classic" === tz && (0, bz.G)(sz) ? Fz : await (0, wz.e)(zz, tz, sz);
        return "" !== Wz ? zz("general:cantJoinGame", {
          game: Wz
        }) : zz("general:cantJoinThisGame")
      }(zz).then((sz => {
        Hz(zz, sz, tz.message)
      })), !0)
    }

    function Hz(zz, tz, sz) {
      Kz.NotificationProvider.showPromptPopup({
        icon: "lock",
        title: tz,
        subtitle: sz,
        confirmText: zz("general:ok"),
        cancelText: ""
      })
    }
    var Bz = sz(4229),
      Pz = sz(1120),
      rz = sz(34),
      Yz = sz(1230),
      xz = sz(1664),
      mz = sz(106),
      Jz = sz(1287),
      Iz = sz(1401),
      Cz = sz(4172),
      ez = sz(4013),
      Zz = sz(2944),
      Gz = sz(1087);
    const Tz = "https://discord.gg/playbloxd";

    function cz(zz) {
      let {
        failure: tz
      } = zz;
      const {
        t: sz
      } = (0, uz.B)(), Fz = "chosen" === tz.packSource, Wz = mz.featureFlags.useDiscord ? Fz ? "texturePackLoad:failedHelpCustomPack" : "texturePackLoad:failedHelp" : Fz ? "texturePackLoad:failedHelpCustomPackNoDiscord" : "texturePackLoad:failedHelpNoDiscord";
      return (0, Gz.jsxs)(Gz.Fragment, {
        children: [sz(Wz, {
          code: tz.code
        }), "default" !== tz.packSource && tz.code === Zz.j.Error && (0, Gz.jsxs)("div", {
          style: {
            paddingTop: "1rem",
            overflowWrap: "anywhere"
          },
          children: [sz("texturePackLoad:details"), " ", tz.reason]
        }), mz.featureFlags.useDiscord && (0, Gz.jsx)("div", {
          style: {
            paddingTop: "1rem"
          },
          children: (0, Gz.jsx)("a", {
            href: Tz,
            target: "_blank",
            rel: "noreferrer",
            children: sz("texturePackLoad:reportOnDiscord")
          })
        })]
      })
    }
    var jz = sz(1297),
      Az = sz(725),
      yz = sz(1215),
      Mz = sz(991),
      dz = sz(1466),
      hz = sz(2975),
      Qz = sz(2873),
      kz = sz(1328),
      iz = sz(1306),
      Lz = sz(4605),
      lz = sz(8401),
      nz = sz(2710);

    function az(zz) {
      let {
        onApply: tz,
        onSkip: sz
      } = zz;
      const {
        t: Fz
      } = (0, uz.B)();
      return (0, Oz.useEffect)((() => {
        nz.e.skipPlayWait()
      }), []), (0, Gz.jsx)(kz.i, {
        icon: "download",
        title: "customTexturePack:downloadTitle",
        subtitle: (0, Gz.jsxs)("div", {
          className: "CustomTexturePackDownloaderSubtitleText",
          children: [Fz("customTexturePack:downloadPrompt"), (0, Gz.jsx)("div", {
            className: "CustomTexturePackDownloaderWarningText",
            children: Fz("customTexturePack:authorWarning")
          }), (0, Gz.jsx)("div", {
            className: "CustomTexturePackDownloaderSecondaryText",
            children: Fz("customTexturePack:existingPackSaved")
          })]
        }),
        confirm: {
          text: "general:apply",
          onClick: tz
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: sz
        }
      })
    }
    async function qz() {
      let zz = !1;
      const tz = Kz.NotificationProvider.showCustomPopup({
        body: tz => (0, Gz.jsx)(az, {
          onApply: () => {
            zz = !0, tz()
          },
          onSkip: tz
        }),
        disableExitButton: !0,
        disablePressBackgroundToClose: !0
      });
      return await tz.getResult(), zz
    }
    let Sz = {
      wanted: !1
    };
    let Vz = null;

    function Rz(zz) {
      zz.setGamePackConfirm(qz), Vz = zz
    }
    var pz = sz(3163);

    function fz(zz) {
      let {
        schematicId: tz,
        texturePackKey: sz,
        onClose: Fz
      } = zz;
      const [Wz, Xz] = (0, Oz.useState)("prompt"), [oz, vz] = (0, Oz.useState)(null), Uz = (0, pz.d)();

      function Kz() {
        Fz()
      }
      return "prompt" === Wz ? (0, Gz.jsx)(az, {
        onApply: async function() {
          Xz("downloading");
          try {
            const zz = await async function(zz, tz) {
              const sz = await (0, Lz.c)(tz);
              if (sz) return {
                pack: sz,
                key: tz
              };
              const Fz = await Pz.userContextManager.getCurrentUserContext(),
                Wz = (await dz.d.getGame(Fz, zz, !0)).customTexturePackKey;
              if (!Wz) return null;
              const Xz = await (0, Lz.c)(Wz);
              if (!Xz) throw new Error("The texture pack could not be found");
              return {
                pack: Xz,
                key: Wz
              }
            }(tz, sz);
            if (!Uz.current) return;
            if (!zz) return void Fz();
            if ((0, hz.j)(zz.pack)) return void Xz("refused");
            Qz.d.setFromJson(zz.pack, "customGame"), await Qz.d.saveTemporaryTexturePack(zz.key), Uz.current && (0, xz.reloadBloxd)()
          } catch (zz) {
            vz(zz instanceof Error ? zz.message : String(zz)), Xz("error")
          }
        },
        onSkip: Kz
      }) : "downloading" === Wz ? (0, Gz.jsx)(kz.i, {
        icon: "download",
        title: "customTexturePack:downloading",
        subtitle: (0, Gz.jsx)("div", {
          className: "CustomTexturePackDownloaderLogoLoaderContainer",
          children: (0, Gz.jsx)(iz.d, {
            showFace: !0
          })
        })
      }) : "error" === Wz ? (0, Gz.jsx)(kz.i, {
        icon: "face-worried",
        title: "customTexturePack:errorTitle",
        subtitle: oz,
        confirm: {
          text: "customTexturePack:refreshPage",
          onClick: () => {
            window.location.reload()
          }
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: Kz
        }
      }) : "refused" === Wz ? (0, Gz.jsx)(kz.i, {
        icon: "face-worried",
        title: "customTexturePack:cantApplyTitle",
        subtitle: "customTexturePack:gamePackHasExternalUrls",
        confirm: {
          text: "general:continue",
          onClick: Kz
        }
      }) : null
    }
    var Ez = sz(8419),
      zt = sz(3990),
      tt = sz(1706),
      st = sz(2689),
      Ft = sz(3109),
      Wt = sz(4328),
      Xt = sz(1279),
      Ot = sz(601),
      ot = sz(695);

    function vt() {
      const zz = Wz.b.get("clientEscMenuOptions");
      vz.gameBridge.send("setLookSensitivity", Wz.b.get("isTouchScreen") ? (0, ot.n)(zz) : zz.mouseSensitivity)
    }
    async function Ut(zz, tz, sz) {
      const Fz = (0, Wt.G)(tz);
      async function Oz(zz, tz, sz, Fz) {
        var Oz;
        if (Fz.aborted) return null;
        null === Wz.b.get("gameEntrySource") && (0, Wz.e)("directPlayUrl"), Ot.p && (0, lz.c)().catch((() => {})), Wz.b.set({
          gameState: "findingLobby"
        }), rz.o.Yg("loadingScreenState", "loadingPage:findingLobby");
        const oz = await Pz.userContextManager.getCurrentUserContext();
        vz.gameBridge.send("setRequestedGame", {
          gameNameWithVariation: tz,
          discordContext: zz instanceof yz.h ? zz.getSerialisableParams() : null
        }), (0, tt.d)();
        const Uz = await async function(zz, tz, sz, Fz, Wz) {
          try {
            await Xz.reqLibsLoadedPromise
          } catch (Oz) {
            return Yz.e.errorWithCode(Oz.toString(), Nz.k.LOAD_REQUIRED_LIBS, {
              error: Oz,
              severity: "medium"
            })
          }
          return rz.o.Yg("matchmakeAndPlayStepCompleted", {
            step: Nz.k.LOAD_REQUIRED_LIBS,
            totalSubSteps: 1
          }), (0, Xz.matchmakeAndPlayMaybeUnloaded)(zz, tz, sz, Fz, Wz)
        }(zz, tz, sz, oz, Fz), Kz = Uz.isError() ? Uz.asError() : null;
        if (Kz && !Kz.debugResult.ds) {
          console.log("Failed to join lobby:", Kz.message);
          const zz = "timedOut" === Kz.debugResult.gameServerUnreachable;
          (0, st.f)("matchmake_failed", Kz.message, zz ? "CONNECT_TO_GAME_SERVER_TIMEOUT" : Nz.k[Kz.code])
        }
        if (Fz.aborted) return vz.gameBridge.send("leaveGame", {
          reloadPath: null
        }), null;
        if (null !== Kz && void 0 !== Kz && Kz.debugResult.ds) return console.log("Join cancelled:", Kz.message), null;
        if (Kz) return Uz;
        const {
          gameNameWithVariation: uz,
          lobbyName: wz,
          addLobbyToRecentlyPlayed: Dz
        } = Uz.getValue();
        let gz;
        vt(), (0, Xt.B)().setGameViewShown(!0);
        const Hz = null === (Oz = Az.e[uz]) || void 0 === Oz ? void 0 : Oz.recentlyPlayedAs;
        return gz = (0, Mz.n)(uz) ? {
          type: "custom",
          name: "",
          schematicId: (0, Mz.r)(uz),
          recentLobbies: []
        } : "classic" !== uz || (0, bz.L)(wz) ? Hz ? {
          type: "bloxd",
          gameNameWithVariation: Hz,
          recentLobbies: []
        } : {
          type: "bloxd",
          gameNameWithVariation: uz,
          recentLobbies: []
        } : {
          type: "bloxd",
          gameNameWithVariation: "classic_worlds",
          recentLobbies: []
        }, dz.d.addRecentlyPlayedGame(oz, gz, Dz && !Hz ? wz : void 0).then((zz => {
          oz.setRecentlyPlayedGames(zz)
        })).catch((zz => {
          console.error("Failed to record recently played game", zz)
        })), (0, Jz.T)(), Uz
      }
      return Fz && (0, Wz.e)("updateRejoin"), (0, Ft.d)((async Wz => {
        try {
          let oz = zz,
            vz = await Oz(oz, tz, sz, Wz);
          for (let zz = 0; Fz && zz < Wt.m; zz++) {
            var Xz;
            if (null === (Xz = vz) || void 0 === Xz || !Xz.isError() || vz.asError().code !== Nz.k.REQUEST_TO_MATCHMAKING) break;
            if (!await (0, Wt.I)((0, Wt.s)(zz), Wz)) return vz;
            oz = (0, Wt.u)(oz, zz + 1, "string" === typeof oz && (0, bz.L)(oz)), vz = await Oz(oz, tz, sz, Wz)
          }
          return vz
        } catch (oz) {
          if ((0, st.f)("matchmake_failed", oz, "unexpected"), vz.gameBridge.send("leaveGame", {
              reloadPath: Wz.aborted ? null : "/"
            }), Wz.aborted) return null;
          throw oz
        }
      }), (async zz => {
        var sz;
        if (Fz) return;
        const Wz = (0, Jz.J)();
        null !== Wz && (await Wz, zz.aborted) || (null !== (sz = Az.e[tz]) && void 0 !== sz && sz.playAdBeforeMatchmaking ? (nz.e.skipPlayWait(), await new Promise((zz => {
          (0, Jz.ib)((() => {
            zz(!0)
          }), "video_start")
        }))) : (0, Jz.ib)((() => {}), "video_start"))
      }))
    }

    function Kt() {
      const {
        t: zz
      } = (0, uz.B)(), tz = (0, Uz.useNavigatePreserveSearch)(), sz = (0, Fz.s)(), Dz = (0, Fz.C)(), Hz = (0, Oz.useRef)({
        t: zz,
        navigate: tz
      });
      Hz.current = {
        t: zz,
        navigate: tz
      };
      const rz = (0, Oz.useRef)("");
      rz.current = sz.pathname + sz.search;
      const {
        gameState: Yz,
        clientEscMenuOptions: Tz
      } = (0, Wz.h)(["gameState", "clientEscMenuOptions"]), Az = (0, Oz.useRef)(null), yz = (0, Oz.useRef)(null);
      var hz;
      (0, Ft.h)(), (0, Ft.j)(), hz = Ot.p, (0, Oz.useEffect)((() => {
        if (!hz) return;
        let zz = !0;
        return (0, lz.c)().then((tz => {
          zz && Rz(tz)
        })).catch((() => {})), () => {
          var tz;
          zz = !1, Sz.wanted = !1, null === (tz = Vz) || void 0 === tz || tz.setGamePackConfirm(null), Vz = null
        }
      }), [hz]), (0, Oz.useEffect)((() => {
        var zz;
        (0, Xz.needGameClientNow)();
        const {
          t: tz,
          navigate: Fz
        } = Hz.current, Oz = (0, Ez.c)(Dz, sz.search);
        if (Dz.lobbyName && !new URLSearchParams(sz.search).has("lobby")) return void Fz((0, jz.c)(Oz.gameNameWithVariation, Oz.lobbyName), {
          replace: !0
        });
        let oz = Promise.resolve({
          shouldMatchmake: !0
        });
        if ("/play/discord-custom-lobby" === sz.pathname) {
          const zz = Wz.b.get("discordContext");
          if (!zz) return void Fz("/");
          oz = Bz.b.setupDiscordLobby(zz, "classic").then((() => ({
            shouldMatchmake: !0,
            discordContext: zz
          }))).catch((tz => (console.error("Failed to setup discord lobby", tz), {
            shouldMatchmake: !1,
            discordContext: zz
          })))
        } else if (!Oz.gameNameWithVariation || !(0, bz.K)(Oz.gameNameWithVariation)) return console.error(`Valid game name with variation is required. Received ${Oz.gameNameWithVariation}`), void Fz(-1);
        if (Oz.gameNameWithVariation === Az.current && Oz.lobbyName === yz.current) return;
        if (vz.gameBridge.latest("connectedGame").replay) return void(0, Ft.c)(null);
        (0, Jz.N)(), Wz.b.set({
          gameState: "loadingScreen"
        });
        const Uz = function() {
          Sz.wanted = !1;
          const zz = {
            wanted: !0
          };
          return Sz = zz, () => zz.wanted
        }();
        if ("releaseCountdown" === (null === (zz = (0, wz.i)(Oz.gameNameWithVariation)) || void 0 === zz ? void 0 : zz.type)) return console.error(`Game hasn't been released yet: ${Oz.gameNameWithVariation}`), void Fz(-1);
        const uz = Oz.gameNameWithVariation;
        if (uz && (Ot.p || (0, Mz.n)(uz))) {
          const zz = Ot.p ? Promise.all([(0, lz.c)(), Pz.userContextManager.getCurrentUserContext()]).then((zz => {
            let [tz, sz] = zz;
            if (Uz()) return Rz(tz), tz.packForGame(uz, sz, Uz)
          })) : async function(zz) {
            await Qz.d.indexedDbValuesAreLoaded();
            const tz = await Pz.userContextManager.getCurrentUserContext(),
              sz = (0, Mz.r)(zz);
            let Fz;
            try {
              Fz = await dz.d.getGame(tz, sz, !0)
            } catch (Oz) {
              return void console.error("Failed to get game", Oz)
            }
            const Wz = Fz.customTexturePackKey;
            if (!Wz) return void(Qz.d.isUsingTemporaryTexturePack() && ((0, xz.reloadBloxd)(), await new Promise((() => {}))));
            if (Qz.d.isUsingTemporaryTexturePack() && Qz.d.getTemporaryTexturePackSource() === Wz) return;
            const Xz = Kz.NotificationProvider.showCustomPopup({
              body: zz => (0, Gz.jsx)(fz, {
                schematicId: sz,
                texturePackKey: Wz,
                onClose: zz
              }),
              disableExitButton: !0,
              disablePressBackgroundToClose: !0
            });
            await Xz.getResult()
          }(uz), tz = oz;
          oz = zz.catch((zz => {
            console.error("Failed to check for custom texture pack", zz)
          })).then((() => tz))
        }(0, Ft.c)(null);
        let Yz = !1;
        const Iz = sz.pathname + sz.search,
          Tz = () => !Yz && rz.current === Iz;
        return oz.then((zz => {
          let {
            shouldMatchmake: sz,
            discordContext: Xz
          } = zz;
          Tz() && (sz ? Ut(null !== Xz && void 0 !== Xz ? Xz : Oz.lobbyName, Xz ? "classic" : Oz.gameNameWithVariation, Oz.directJoinVmUrl).then((zz => {
            var sz;
            if (null !== zz && Tz())
              if (zz.isError()) {
                var Xz;
                const oz = zz.asError(),
                  Uz = null !== (Xz = oz.debugResult.severity) && void 0 !== Xz ? Xz : "high";
                if (oz.code === Nz.k.SHADER_PACK) return void(0, zt.b)(oz.message, Fz);
                const uz = Wz.b.get("gameEntrySource"),
                  bz = oz.code === Nz.k.INITIALISE_WEBGL ? (0, ez.c)() : null,
                  {
                    error: wz
                  } = oz.debugResult;
                let Dz;
                if (gz(tz, oz)) Dz = Promise.resolve(!1);
                else if (null !== bz) Dz = (0, ez.j)(bz);
                else if (wz instanceof Zz.l) sz = wz, Dz = Kz.NotificationProvider.showPromptPopup({
                  icon: "face-dizzy",
                  title: "texturePackLoad:failedTitle",
                  subtitle: (0, Gz.jsx)(cz, {
                    failure: sz
                  }),
                  confirmText: "general:tryAgain",
                  cancelText: "general:back"
                }).getResult().then((zz => !0 === zz));
                else {
                  let zz;
                  switch (Uz) {
                    case "low":
                      zz = "face-diagonal-mouth";
                      break;
                    case "medium":
                      zz = "face-worried";
                      break;
                    case "high":
                      zz = "face-dizzy"
                  }
                  Dz = Kz.NotificationProvider.showPromptPopup({
                    icon: zz,
                    title: Nz.A[oz.code],
                    subtitle: (0, Gz.jsxs)(Gz.Fragment, {
                      children: [oz.debugResult.gameServerUnreachable ? tz((0, mz.isMobile)() ? "general:gameServerUnreachableMobile" : "general:gameServerUnreachable") : oz.message, oz.debugResult.error instanceof Error && (0, Gz.jsx)("div", {
                        style: {
                          fontSize: "0.9rem",
                          paddingTop: "1rem"
                        },
                        children: (0, Gz.jsx)(Cz.b, {
                          errorString: oz.debugResult.error.stack
                        })
                      })]
                    }),
                    confirmText: tz("general:tryAgain"),
                    cancelText: tz("general:cancel")
                  }).getResult().then((zz => !0 === zz))
                }
                Dz.then((zz => {
                  if (zz) {
                    (0, Wz.e)(uz);
                    const zz = (0, jz.c)(Oz.gameNameWithVariation, Oz.lobbyName);
                    "low" === Uz ? Fz(zz) : (0, xz.reloadBloxd)(zz)
                  }
                })), vz.gameBridge.send("leaveGame", {
                  reloadPath: "/"
                }), Fz(-1)
              } else {
                Az.current = zz.getValue().gameNameWithVariation, yz.current = zz.getValue().lobbyName;
                const tz = (0, jz.c)(Az.current, zz.getValue().lobbyName);
                Fz(tz, {
                  replace: !0
                })
              }
          })).catch((zz => {
            if (!Tz()) return;
            Kz.NotificationProvider.showPromptPopup({
              icon: "face-dizzy",
              title: "Unexpected Error",
              subtitle: (0, Gz.jsxs)(Gz.Fragment, {
                children: [tz("homePage:pleaseCopyError"), (0, Gz.jsx)("div", {
                  style: {
                    fontSize: "0.9rem",
                    paddingTop: "1rem"
                  },
                  children: (0, Gz.jsx)(Cz.b, {
                    errorString: zz.stack
                  })
                })]
              }),
              confirmText: tz("general:tryAgain"),
              cancelText: tz("general:cancel")
            }).getResult().then((zz => {
              !0 === zz && (0, xz.reloadBloxd)((0, jz.c)(Oz.gameNameWithVariation, Oz.lobbyName))
            })), Fz(-1)
          })) : Fz(-1))
        })), () => {
          Yz = !0
        }
      }), [Dz, sz.search, sz.pathname]), (0, Oz.useEffect)((() => {
        Tz.disableFullscreen && (0, Iz.d)() ? (0, Iz.j)() : !Tz.disableFullscreen && (0, Iz.h)() && (0, Iz.r)()
      }), [Yz, Tz]), (0, Oz.useEffect)((() => {
        "inGame" === Yz && vt()
      }), [Yz, Tz]), (0, Oz.useEffect)((() => {
        "inGame" !== Yz && Wz.b.set({
          openInGameMenuName: null
        })
      }), [Yz]);
      const kz = function(zz) {
        const tz = (0, Wz.d)(zz),
          [sz, Fz] = (0, Oz.useState)(0),
          [Xz, vz] = (0, Oz.useState)(!1);
        (0, oz.g)("gameJoined", (() => {
          (0, Wz.d)(Wz.b.get("gameState")) && (Fz((zz => zz + 1)), vz(!0))
        })), (0, Oz.useEffect)((() => {
          tz || vz(!1)
        }), [tz]);
        const Uz = "inGame" === zz;
        return {
          mounted: Uz || tz && Xz,
          shown: Uz,
          key: sz
        }
      }(Yz);
      return (0, Gz.jsx)(Gz.Fragment, {
        children: kz.mounted && (0, Gz.jsx)(Xz.InGameUi, {
          shown: kz.shown
        }, kz.key)
      })
    }
  },
  4605: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Wz
    });
    var Fz = sz(1191);
    async function Wz(zz) {
      const tz = await fetch(`${Fz.clientSideServerUrls.s3Url}/${zz}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === tz.status || 403 === tz.status) return null;
      if (!tz.ok) throw new Error(`Failed to download the texture pack (${tz.status})`);
      return await tz.json()
    }
  },
  8419: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Oz
    });
    var Fz = sz(1297),
      Wz = sz(1213),
      Xz = sz(580);

    function Oz(zz) {
      return zz = function(zz, tz) {
        var sz;
        const Fz = new URLSearchParams(tz),
          Wz = Fz.get("lobby"),
          Xz = Fz.get("vm"),
          Oz = null !== (sz = Wz) && void 0 !== sz ? sz : zz.lobbyName,
          oz = null !== Xz && void 0 !== Xz ? Xz : zz.directJoinVmUrl;
        if (Oz === zz.lobbyName && oz === zz.directJoinVmUrl) return zz;
        return {
          ...zz,
          lobbyName: Oz,
          directJoinVmUrl: oz
        }
      }(zz, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), zz = function(zz) {
        if ((0, Xz.G)(zz.directJoinVmUrl)) return zz;
        const tz = (0, Wz.cb)(zz.directJoinVmUrl);
        null === tz && (zz.directJoinVmUrl = void 0);
        return zz
      }(zz = function(zz) {
        if ((0, Xz.G)(zz.gameNameWithVariation)) return zz;
        return zz.gameNameWithVariation = (0, Fz.j)(zz.gameNameWithVariation), zz
      }(zz))
    }
  },
  8410: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Xz,
      e: () => Wz
    });
    let Fz = !1;

    function Wz() {
      Fz = !0
    }

    function Xz() {
      return Fz
    }
  },
  8401: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Kz,
      g: () => uz
    });
    var Fz = sz(2873),
      Wz = sz(2189),
      Xz = sz(2910),
      Oz = sz(4302),
      oz = sz(3169),
      vz = sz(8410);
    let Uz = null;

    function Kz() {
      return Oz.d.cancelDownloadForJoin(), (0, oz.c)(), (0, Wz.d)(), (0, vz.e)(), (0, Xz.i)(), Promise.all([sz.e(69), sz.e(72), sz.e(71), sz.e(70), sz.e(83), sz.e(259), sz.e(199), sz.e(216), sz.e(237), sz.e(212), sz.e(46)]).then((() => sz(39803))).catch((() => {})), Promise.all([sz.e(74), sz.e(132), sz.e(87), sz.e(55)]).then((() => sz(39873))).then((zz => {
        let {
          startJoinLoad: tz
        } = zz;
        tz()
      }), (() => {})), Uz ??= Promise.all([sz.e(71), sz.e(74), sz.e(129), sz.e(73), sz.e(132), sz.e(262), sz.e(186), sz.e(87), sz.e(86), sz.e(85), sz.e(212), sz.e(60)]).then((() => sz(39950))).then((zz => (zz.startWasmPlay(), zz.followPageUiPack((zz => {
        Fz.d.showGamePack(zz)
      })), zz)), (zz => {
        throw Uz = null, zz
      })), Uz
    }

    function uz() {
      return Promise.all([sz.e(71), sz.e(74), sz.e(129), sz.e(73), sz.e(132), sz.e(262), sz.e(186), sz.e(87), sz.e(86), sz.e(85), sz.e(212), sz.e(60)]).then((() => sz(39950))).then((zz => {
        zz.startWasmPreviews(), zz.prefetchWasmPreviews()
      }))
    }
  },
  8398: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Xz,
      d: () => Oz,
      e: () => oz,
      g: () => Uz,
      h: () => vz
    });
    var Fz = sz(201),
      Wz = sz(4278);

    function Xz(zz) {
      return Oz(zz) === Fz.b.gameOrPluginOnPlayerAuthRejected.code
    }

    function Oz(zz) {
      return "object" === typeof zz && null !== zz ? zz.code : void 0
    }

    function oz(zz) {
      var tz;
      return null !== (tz = Object.keys(Wz.c).find((tz => Wz.c[tz] === zz))) && void 0 !== tz ? tz : null
    }

    function vz(zz) {
      return "notWhitelisted" === zz ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const Uz = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);