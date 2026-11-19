export const id = 108;
export const ids = [108];
export const modules = {
  8567: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      default: () => Ou
    });
    var Ez = bz(1490),
      nz = bz(20),
      iz = bz(4407),
      lz = bz(56),
      Mz = bz(1417);
    var tz = bz(1871),
      Hz = bz(1482),
      Oz = bz(1322),
      pz = bz(1181),
      dz = bz(158),
      Fz = bz(1212),
      Zz = bz(2258),
      Rz = bz(8569);

    function Kz(zz, uz) {
      const bz = !0 === uz.debugResult.gameRefused,
        Ez = bz || uz.code === dz.k.REQUEST_TO_MATCHMAKING ? (0, Rz.g)(uz.message) : null;
      return null !== Ez ? (wz(zz, zz((0, Rz.l)(Ez)), zz(Rz.i[Ez])), !0) : !!bz && (async function(zz) {
        const {
          gameNameWithVariation: uz,
          lobbyName: bz,
          shownLobbyName: Ez
        } = tz.gameBridge.latest("connectedGame"), nz = "classic" === uz && (0, Fz.H)(bz) ? Ez : await (0, Zz.e)(zz, uz, bz);
        return "" !== nz ? zz("general:cantJoinGame", {
          game: nz
        }) : zz("general:cantJoinThisGame")
      }(zz).then((bz => {
        wz(zz, bz, uz.message)
      })), !0)
    }

    function wz(zz, uz, bz) {
      Oz.NotificationProvider.showPromptPopup({
        icon: "lock",
        title: uz,
        subtitle: bz,
        confirmText: zz("general:ok"),
        cancelText: ""
      })
    }
    var Xz = bz(4335),
      fz = bz(1118),
      sz = bz(22),
      rz = bz(1232),
      oz = bz(1673),
      Nz = bz(96),
      vz = bz(1283),
      xz = bz(1405),
      Jz = bz(4288),
      Az = bz(4132),
      Tz = bz(3016),
      Lz = bz(1089);
    const Pz = "https://discord.gg/playbloxd";

    function Gz(zz) {
      let {
        failure: uz
      } = zz;
      const {
        t: bz
      } = (0, pz.F)(), Ez = "chosen" === uz.packSource, nz = Nz.featureFlags.useDiscord ? Ez ? "texturePackLoad:failedHelpCustomPack" : "texturePackLoad:failedHelp" : Ez ? "texturePackLoad:failedHelpCustomPackNoDiscord" : "texturePackLoad:failedHelpNoDiscord";
      return (0, Lz.jsxs)(Lz.Fragment, {
        children: [bz(nz, {
          code: uz.code
        }), "default" !== uz.packSource && uz.code === Tz.m.Error && (0, Lz.jsxs)("div", {
          style: {
            paddingTop: "1rem",
            overflowWrap: "anywhere"
          },
          children: [bz("texturePackLoad:details"), " ", uz.reason]
        }), Nz.featureFlags.useDiscord && (0, Lz.jsx)("div", {
          style: {
            paddingTop: "1rem"
          },
          children: (0, Lz.jsx)("a", {
            href: Pz,
            target: "_blank",
            rel: "noreferrer",
            children: bz("texturePackLoad:reportOnDiscord")
          })
        })]
      })
    }
    var az = bz(1298),
      Vz = bz(738),
      mz = bz(1219),
      qz = bz(994),
      hz = bz(1473),
      Uz = bz(3059),
      cz = bz(2899),
      gz = bz(1326),
      Sz = bz(1305),
      yz = bz(4737),
      Dz = bz(8572),
      Qz = bz(2737);

    function Wz(zz) {
      let {
        onApply: uz,
        onSkip: bz
      } = zz;
      const {
        t: Ez
      } = (0, pz.F)();
      return (0, lz.useEffect)((() => {
        Qz.g.skipPlayWait()
      }), []), (0, Lz.jsx)(gz.g, {
        icon: "download",
        title: "customTexturePack:downloadTitle",
        subtitle: (0, Lz.jsxs)("div", {
          className: "CustomTexturePackDownloaderSubtitleText",
          children: [Ez("customTexturePack:downloadPrompt"), (0, Lz.jsx)("div", {
            className: "CustomTexturePackDownloaderWarningText",
            children: Ez("customTexturePack:authorWarning")
          }), (0, Lz.jsx)("div", {
            className: "CustomTexturePackDownloaderSecondaryText",
            children: Ez("customTexturePack:existingPackSaved")
          })]
        }),
        confirm: {
          text: "general:apply",
          onClick: uz
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: bz
        }
      })
    }
    async function ez() {
      let zz = !1;
      const uz = Oz.NotificationProvider.showCustomPopup({
        body: uz => (0, Lz.jsx)(Wz, {
          onApply: () => {
            zz = !0, uz()
          },
          onSkip: uz
        }),
        disableExitButton: !0,
        disablePressBackgroundToClose: !0
      });
      return await uz.getResult(), zz
    }
    let jz = {
      wanted: !1
    };
    let Iz = null;

    function Bz(zz) {
      zz.setGamePackConfirm(ez), Iz = zz
    }
    var Cz = bz(3238);

    function Yz(zz) {
      let {
        schematicId: uz,
        texturePackKey: bz,
        onClose: Ez
      } = zz;
      const [nz, iz] = (0, lz.useState)("prompt"), [Mz, tz] = (0, lz.useState)(null), Hz = (0, Cz.e)();

      function Oz() {
        Ez()
      }
      return "prompt" === nz ? (0, Lz.jsx)(Wz, {
        onApply: async function() {
          iz("downloading");
          try {
            const zz = await async function(zz, uz) {
              const bz = await (0, yz.c)(uz);
              if (bz) return {
                pack: bz,
                key: uz
              };
              const Ez = await fz.userContextManager.getCurrentUserContext(),
                nz = (await hz.c.getGame(Ez, zz, !0)).customTexturePackKey;
              if (!nz) return null;
              const iz = await (0, yz.c)(nz);
              if (!iz) throw new Error("The texture pack could not be found");
              return {
                pack: iz,
                key: nz
              }
            }(uz, bz);
            if (!Hz.current) return;
            if (!zz) return void Ez();
            if ((0, Uz.p)(zz.pack)) return void iz("refused");
            cz.e.setFromJson(zz.pack, "customGame"), await cz.e.saveTemporaryTexturePack(zz.key), Hz.current && (0, oz.reloadBloxd)()
          } catch (zz) {
            tz(zz instanceof Error ? zz.message : String(zz)), iz("error")
          }
        },
        onSkip: Oz
      }) : "downloading" === nz ? (0, Lz.jsx)(gz.g, {
        icon: "download",
        title: "customTexturePack:downloading",
        subtitle: (0, Lz.jsx)("div", {
          className: "CustomTexturePackDownloaderLogoLoaderContainer",
          children: (0, Lz.jsx)(Sz.c, {
            showFace: !0
          })
        })
      }) : "error" === nz ? (0, Lz.jsx)(gz.g, {
        icon: "face-worried",
        title: "customTexturePack:errorTitle",
        subtitle: Mz,
        confirm: {
          text: "customTexturePack:refreshPage",
          onClick: () => {
            window.location.reload()
          }
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: Oz
        }
      }) : "refused" === nz ? (0, Lz.jsx)(gz.g, {
        icon: "face-worried",
        title: "customTexturePack:cantApplyTitle",
        subtitle: "customTexturePack:gamePackHasExternalUrls",
        confirm: {
          text: "general:continue",
          onClick: Oz
        }
      }) : null
    }
    var kz = bz(8584),
      zu = bz(4106),
      uu = bz(1723),
      bu = bz(2982),
      Eu = bz(3189),
      nu = bz(4425),
      iu = bz(1273),
      lu = bz(606),
      Mu = bz(696);

    function tu() {
      const zz = nz.e.get("clientEscMenuOptions");
      tz.gameBridge.send("setLookSensitivity", nz.e.get("isTouchScreen") ? (0, Mu.n)(zz) : zz.mouseSensitivity)
    }
    async function Hu(zz, uz, bz) {
      const Ez = (0, nu.I)(uz);
      async function lz(zz, uz, bz, Ez) {
        var lz;
        if (Ez.aborted) return null;
        null === nz.e.get("gameEntrySource") && (0, nz.k)("directPlayUrl"), lu.x && (0, Dz.d)().catch((() => {})), nz.e.set({
          gameState: "findingLobby"
        }), sz.k.sK("loadingScreenState", "loadingPage:findingLobby");
        const Mz = await fz.userContextManager.getCurrentUserContext();
        tz.gameBridge.send("setRequestedGame", {
          gameNameWithVariation: uz,
          discordContext: zz instanceof mz.h ? zz.getSerialisableParams() : null
        }), (0, uu.e)();
        const Hz = await async function(zz, uz, bz, Ez, nz) {
          try {
            await iz.reqLibsLoadedPromise
          } catch (lz) {
            return rz.b.errorWithCode(lz.toString(), dz.k.LOAD_REQUIRED_LIBS, {
              error: lz,
              severity: "medium"
            })
          }
          return sz.k.sK("matchmakeAndPlayStepCompleted", {
            step: dz.k.LOAD_REQUIRED_LIBS,
            totalSubSteps: 1
          }), (0, iz.matchmakeAndPlayMaybeUnloaded)(zz, uz, bz, Ez, nz)
        }(zz, uz, bz, Mz, Ez), Oz = Hz.isError() ? Hz.asError() : null;
        if (Oz && !Oz.debugResult.ob) {
          console.log("Failed to join lobby:", Oz.message);
          const zz = "timedOut" === Oz.debugResult.gameServerUnreachable;
          (0, bu.f)("matchmake_failed", Oz.message, zz ? "CONNECT_TO_GAME_SERVER_TIMEOUT" : dz.k[Oz.code])
        }
        if (Ez.aborted) return tz.gameBridge.send("leaveGame", {
          reloadPath: null
        }), null;
        if (null !== Oz && void 0 !== Oz && Oz.debugResult.ob) return console.log("Join cancelled:", Oz.message), null;
        if (Oz) return Hz;
        const {
          gameNameWithVariation: pz,
          lobbyName: Zz,
          addLobbyToRecentlyPlayed: Rz
        } = Hz.getValue();
        let Kz;
        tu(), (0, iu.y)().setGameViewShown(!0);
        const wz = null === (lz = Vz.b[pz]) || void 0 === lz ? void 0 : lz.recentlyPlayedAs;
        return Kz = (0, qz.k)(pz) ? {
          type: "custom",
          name: "",
          schematicId: (0, qz.q)(pz),
          recentLobbies: []
        } : "classic" !== pz || (0, Fz.M)(Zz) ? wz ? {
          type: "bloxd",
          gameNameWithVariation: wz,
          recentLobbies: []
        } : {
          type: "bloxd",
          gameNameWithVariation: pz,
          recentLobbies: []
        } : {
          type: "bloxd",
          gameNameWithVariation: "classic_worlds",
          recentLobbies: []
        }, hz.c.addRecentlyPlayedGame(Mz, Kz, Rz && !wz ? Zz : void 0).then((zz => {
          Mz.setRecentlyPlayedGames(zz)
        })).catch((zz => {
          console.error("Failed to record recently played game", zz)
        })), (0, vz.E)(), Hz
      }
      return Ez && (0, nz.k)("updateRejoin"), (0, Eu.f)((async nz => {
        try {
          let Mz = zz,
            tz = await lz(Mz, uz, bz, nz);
          for (let zz = 0; Ez && zz < nu.h; zz++) {
            var iz;
            if (null === (iz = tz) || void 0 === iz || !iz.isError() || tz.asError().code !== dz.k.REQUEST_TO_MATCHMAKING) break;
            if (!await (0, nu.J)((0, nu.t)(zz), nz)) return tz;
            Mz = (0, nu.w)(Mz, zz + 1, "string" === typeof Mz && (0, Fz.M)(Mz)), tz = await lz(Mz, uz, bz, nz)
          }
          return tz
        } catch (Mz) {
          if ((0, bu.f)("matchmake_failed", Mz, "unexpected"), tz.gameBridge.send("leaveGame", {
              reloadPath: nz.aborted ? null : "/"
            }), nz.aborted) return null;
          throw Mz
        }
      }), (async zz => {
        var bz;
        if (Ez) return;
        const nz = (0, vz.y)();
        null !== nz && (await nz, zz.aborted) || (null !== (bz = Vz.b[uz]) && void 0 !== bz && bz.playAdBeforeMatchmaking ? (Qz.g.skipPlayWait(), await new Promise((zz => {
          (0, vz.$)((() => {
            zz(!0)
          }), "video_start")
        }))) : (0, vz.$)((() => {}), "video_start"))
      }))
    }

    function Ou() {
      const {
        t: zz
      } = (0, pz.F)(), uz = (0, Hz.useNavigatePreserveSearch)(), bz = (0, Ez.v)(), Rz = (0, Ez.D)(), wz = (0, lz.useRef)({
        t: zz,
        navigate: uz
      });
      wz.current = {
        t: zz,
        navigate: uz
      };
      const sz = (0, lz.useRef)("");
      sz.current = bz.pathname + bz.search;
      const {
        gameState: rz,
        clientEscMenuOptions: Pz
      } = (0, nz.m)(["gameState", "clientEscMenuOptions"]), Vz = (0, lz.useRef)(null), mz = (0, lz.useRef)(null);
      var Uz;
      (0, Eu.i)(), (0, Eu.m)(), Uz = lu.x, (0, lz.useEffect)((() => {
        if (!Uz) return;
        let zz = !0;
        return (0, Dz.d)().then((uz => {
          zz && Bz(uz)
        })).catch((() => {})), () => {
          var uz;
          zz = !1, jz.wanted = !1, null === (uz = Iz) || void 0 === uz || uz.setGamePackConfirm(null), Iz = null
        }
      }), [Uz]), (0, lz.useEffect)((() => {
        var zz;
        (0, iz.needGameClientNow)();
        const {
          t: uz,
          navigate: Ez
        } = wz.current, lz = (0, kz.e)(Rz, bz.search);
        if (Rz.lobbyName && !new URLSearchParams(bz.search).has("lobby")) return void Ez((0, az.c)(lz.gameNameWithVariation, lz.lobbyName), {
          replace: !0
        });
        let Mz = Promise.resolve({
          shouldMatchmake: !0
        });
        if ("/play/discord-custom-lobby" === bz.pathname) {
          const zz = nz.e.get("discordContext");
          if (!zz) return void Ez("/");
          Mz = Xz.e.setupDiscordLobby(zz, "classic").then((() => ({
            shouldMatchmake: !0,
            discordContext: zz
          }))).catch((uz => (console.error("Failed to setup discord lobby", uz), {
            shouldMatchmake: !1,
            discordContext: zz
          })))
        } else if (!lz.gameNameWithVariation || !(0, Fz.J)(lz.gameNameWithVariation)) return console.error(`Valid game name with variation is required. Received ${lz.gameNameWithVariation}`), void Ez(-1);
        if (lz.gameNameWithVariation === Vz.current && lz.lobbyName === mz.current) return;
        if (tz.gameBridge.latest("connectedGame").replay) return void(0, Eu.e)(null);
        (0, vz.z)(), nz.e.set({
          gameState: "loadingScreen"
        });
        const Hz = function() {
          jz.wanted = !1;
          const zz = {
            wanted: !0
          };
          return jz = zz, () => zz.wanted
        }();
        if ("releaseCountdown" === (null === (zz = (0, Zz.f)(lz.gameNameWithVariation)) || void 0 === zz ? void 0 : zz.type)) return console.error(`Game hasn't been released yet: ${lz.gameNameWithVariation}`), void Ez(-1);
        const pz = lz.gameNameWithVariation;
        if (pz && (lu.x || (0, qz.k)(pz))) {
          const zz = lu.x ? Promise.all([(0, Dz.d)(), fz.userContextManager.getCurrentUserContext()]).then((zz => {
            let [uz, bz] = zz;
            if (Hz()) return Bz(uz), uz.packForGame(pz, bz, Hz)
          })) : async function(zz) {
            await cz.e.indexedDbValuesAreLoaded();
            const uz = await fz.userContextManager.getCurrentUserContext(),
              bz = (0, qz.q)(zz);
            let Ez;
            try {
              Ez = await hz.c.getGame(uz, bz, !0)
            } catch (lz) {
              return void console.error("Failed to get game", lz)
            }
            const nz = Ez.customTexturePackKey;
            if (!nz) return void(cz.e.isUsingTemporaryTexturePack() && ((0, oz.reloadBloxd)(), await new Promise((() => {}))));
            if (cz.e.isUsingTemporaryTexturePack() && cz.e.getTemporaryTexturePackSource() === nz) return;
            const iz = Oz.NotificationProvider.showCustomPopup({
              body: zz => (0, Lz.jsx)(Yz, {
                schematicId: bz,
                texturePackKey: nz,
                onClose: zz
              }),
              disableExitButton: !0,
              disablePressBackgroundToClose: !0
            });
            await iz.getResult()
          }(pz), uz = Mz;
          Mz = zz.catch((zz => {
            console.error("Failed to check for custom texture pack", zz)
          })).then((() => uz))
        }(0, Eu.e)(null);
        let rz = !1;
        const xz = bz.pathname + bz.search,
          Pz = () => !rz && sz.current === xz;
        return Mz.then((zz => {
          let {
            shouldMatchmake: bz,
            discordContext: iz
          } = zz;
          Pz() && (bz ? Hu(null !== iz && void 0 !== iz ? iz : lz.lobbyName, iz ? "classic" : lz.gameNameWithVariation, lz.directJoinVmUrl).then((zz => {
            var bz;
            if (null !== zz && Pz())
              if (zz.isError()) {
                var iz;
                const Mz = zz.asError(),
                  Hz = null !== (iz = Mz.debugResult.severity) && void 0 !== iz ? iz : "high";
                if (Mz.code === dz.k.SHADER_PACK) return void(0, zu.c)(Mz.message, Ez);
                const pz = nz.e.get("gameEntrySource"),
                  Fz = Mz.code === dz.k.INITIALISE_WEBGL ? (0, Az.b)() : null,
                  {
                    error: Zz
                  } = Mz.debugResult;
                let Rz;
                if (Kz(uz, Mz)) Rz = Promise.resolve(!1);
                else if (null !== Fz) Rz = (0, Az.g)(Fz);
                else if (Zz instanceof Tz.p) bz = Zz, Rz = Oz.NotificationProvider.showPromptPopup({
                  icon: "face-dizzy",
                  title: "texturePackLoad:failedTitle",
                  subtitle: (0, Lz.jsx)(Gz, {
                    failure: bz
                  }),
                  confirmText: "general:tryAgain",
                  cancelText: "general:back"
                }).getResult().then((zz => !0 === zz));
                else {
                  let zz;
                  switch (Hz) {
                    case "low":
                      zz = "face-diagonal-mouth";
                      break;
                    case "medium":
                      zz = "face-worried";
                      break;
                    case "high":
                      zz = "face-dizzy"
                  }
                  Rz = Oz.NotificationProvider.showPromptPopup({
                    icon: zz,
                    title: dz.w[Mz.code],
                    subtitle: (0, Lz.jsxs)(Lz.Fragment, {
                      children: [Mz.debugResult.gameServerUnreachable ? uz((0, Nz.isMobile)() ? "general:gameServerUnreachableMobile" : "general:gameServerUnreachable") : Mz.message, Mz.debugResult.error instanceof Error && (0, Lz.jsx)("div", {
                        style: {
                          fontSize: "0.9rem",
                          paddingTop: "1rem"
                        },
                        children: (0, Lz.jsx)(Jz.c, {
                          errorString: Mz.debugResult.error.stack
                        })
                      })]
                    }),
                    confirmText: uz("general:tryAgain"),
                    cancelText: uz("general:cancel")
                  }).getResult().then((zz => !0 === zz))
                }
                Rz.then((zz => {
                  if (zz) {
                    (0, nz.k)(pz);
                    const zz = (0, az.c)(lz.gameNameWithVariation, lz.lobbyName);
                    "low" === Hz ? Ez(zz) : (0, oz.reloadBloxd)(zz)
                  }
                })), tz.gameBridge.send("leaveGame", {
                  reloadPath: "/"
                }), Ez(-1)
              } else {
                Vz.current = zz.getValue().gameNameWithVariation, mz.current = zz.getValue().lobbyName;
                const uz = (0, az.c)(Vz.current, zz.getValue().lobbyName);
                Ez(uz, {
                  replace: !0
                })
              }
          })).catch((zz => {
            if (!Pz()) return;
            Oz.NotificationProvider.showPromptPopup({
              icon: "face-dizzy",
              title: "Unexpected Error",
              subtitle: (0, Lz.jsxs)(Lz.Fragment, {
                children: [uz("homePage:pleaseCopyError"), (0, Lz.jsx)("div", {
                  style: {
                    fontSize: "0.9rem",
                    paddingTop: "1rem"
                  },
                  children: (0, Lz.jsx)(Jz.c, {
                    errorString: zz.stack
                  })
                })]
              }),
              confirmText: uz("general:tryAgain"),
              cancelText: uz("general:cancel")
            }).getResult().then((zz => {
              !0 === zz && (0, oz.reloadBloxd)((0, az.c)(lz.gameNameWithVariation, lz.lobbyName))
            })), Ez(-1)
          })) : Ez(-1))
        })), () => {
          rz = !0
        }
      }), [Rz, bz.search, bz.pathname]), (0, lz.useEffect)((() => {
        Pz.disableFullscreen && (0, xz.e)() ? (0, xz.k)() : !Pz.disableFullscreen && (0, xz.g)() && (0, xz.u)()
      }), [rz, Pz]), (0, lz.useEffect)((() => {
        "inGame" === rz && tu()
      }), [rz, Pz]), (0, lz.useEffect)((() => {
        "inGame" !== rz && nz.e.set({
          openInGameMenuName: null
        })
      }), [rz]);
      const gz = function(zz) {
        const uz = (0, nz.g)(zz),
          [bz, Ez] = (0, lz.useState)(0),
          [iz, tz] = (0, lz.useState)(!1);
        (0, Mz.g)("gameJoined", (() => {
          (0, nz.g)(nz.e.get("gameState")) && (Ez((zz => zz + 1)), tz(!0))
        })), (0, lz.useEffect)((() => {
          uz || tz(!1)
        }), [uz]);
        const Hz = "inGame" === zz;
        return {
          mounted: Hz || uz && iz,
          shown: Hz,
          key: bz
        }
      }(rz);
      return (0, Lz.jsx)(Lz.Fragment, {
        children: gz.mounted && (0, Lz.jsx)(iz.InGameUi, {
          shown: gz.shown
        }, gz.key)
      })
    }
  },
  4737: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => nz
    });
    var Ez = bz(1195);
    async function nz(zz) {
      const uz = await fetch(`${Ez.clientSideServerUrls.s3Url}/${zz}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === uz.status || 403 === uz.status) return null;
      if (!uz.ok) throw new Error(`Failed to download the texture pack (${uz.status})`);
      return await uz.json()
    }
  },
  8584: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => lz
    });
    var Ez = bz(1298),
      nz = bz(1212),
      iz = bz(588);

    function lz(zz) {
      return zz = function(zz, uz) {
        var bz;
        const Ez = new URLSearchParams(uz),
          nz = Ez.get("lobby"),
          iz = Ez.get("vm"),
          lz = null !== (bz = nz) && void 0 !== bz ? bz : zz.lobbyName,
          Mz = null !== iz && void 0 !== iz ? iz : zz.directJoinVmUrl;
        if (lz === zz.lobbyName && Mz === zz.directJoinVmUrl) return zz;
        return {
          ...zz,
          lobbyName: lz,
          directJoinVmUrl: Mz
        }
      }(zz, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), zz = function(zz) {
        if ((0, iz.F)(zz.directJoinVmUrl)) return zz;
        const uz = (0, nz.cb)(zz.directJoinVmUrl);
        null === uz && (zz.directJoinVmUrl = void 0);
        return zz
      }(zz = function(zz) {
        if ((0, iz.F)(zz.gameNameWithVariation)) return zz;
        return zz.gameNameWithVariation = (0, Ez.l)(zz.gameNameWithVariation), zz
      }(zz))
    }
  },
  8581: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => iz,
      g: () => nz
    });
    let Ez = !1;

    function nz() {
      Ez = !0
    }

    function iz() {
      return Ez
    }
  },
  8572: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => Oz,
      h: () => pz
    });
    var Ez = bz(2899),
      nz = bz(2181),
      iz = bz(2954),
      lz = bz(4400),
      Mz = bz(3248),
      tz = bz(8581);
    let Hz = null;

    function Oz() {
      return lz.b.cancelDownloadForJoin(), (0, Mz.d)(), (0, nz.h)(), (0, tz.g)(), (0, iz.f)(), Promise.all([bz.e(69), bz.e(72), bz.e(71), bz.e(70), bz.e(83), bz.e(259), bz.e(199), bz.e(216), bz.e(237), bz.e(212), bz.e(46)]).then((() => bz(39840))).catch((() => {})), Promise.all([bz.e(74), bz.e(132), bz.e(87), bz.e(55)]).then((() => bz(39931))).then((zz => {
        let {
          startJoinLoad: uz
        } = zz;
        uz()
      }), (() => {})), Hz ??= Promise.all([bz.e(71), bz.e(74), bz.e(129), bz.e(73), bz.e(132), bz.e(262), bz.e(186), bz.e(87), bz.e(86), bz.e(85), bz.e(212), bz.e(60)]).then((() => bz(40042))).then((zz => (zz.startWasmPlay(), zz.followPageUiPack((zz => {
        Ez.e.showGamePack(zz)
      })), zz)), (zz => {
        throw Hz = null, zz
      })), Hz
    }

    function pz() {
      return Promise.all([bz.e(71), bz.e(74), bz.e(129), bz.e(73), bz.e(132), bz.e(262), bz.e(186), bz.e(87), bz.e(86), bz.e(85), bz.e(212), bz.e(60)]).then((() => bz(40042))).then((zz => {
        zz.startWasmPreviews(), zz.prefetchWasmPreviews()
      }))
    }
  },
  8569: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => iz,
      e: () => lz,
      g: () => Mz,
      i: () => Hz,
      l: () => tz
    });
    var Ez = bz(195),
      nz = bz(4385);

    function iz(zz) {
      return lz(zz) === Ez.b.gameOrPluginOnPlayerAuthRejected.code
    }

    function lz(zz) {
      return "object" === typeof zz && null !== zz ? zz.code : void 0
    }

    function Mz(zz) {
      var uz;
      return null !== (uz = Object.keys(nz.e).find((uz => nz.e[uz] === zz))) && void 0 !== uz ? uz : null
    }

    function tz(zz) {
      return "notWhitelisted" === zz ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const Hz = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);