export const id = 109;
export const ids = [109];
export const modules = {
  8317: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      default: () => Fo
    });
    var iT = IT(1484),
      zT = IT(12),
      kT = IT(4163),
      WT = IT(46),
      XT = IT(1403);
    var BT = IT(1751),
      FT = IT(1468),
      ST = IT(1325),
      DT = IT(1171),
      LT = IT(4137);
    const xT = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    };
    var cT = IT(4098),
      KT = IT(159),
      MT = IT(1117),
      rT = IT(16),
      AT = IT(1216),
      gT = IT(1665),
      hT = IT(90),
      wT = IT(1280),
      mT = IT(1398),
      eT = IT(4046),
      RT = IT(3888),
      uT = IT(2814),
      vT = IT(1083);
    const ET = "https://discord.gg/playbloxd";

    function fT(TT) {
      let {
        failure: oT
      } = TT;
      const {
        t: IT
      } = (0, DT.t)(), iT = "chosen" === oT.packSource, zT = hT.featureFlags.useDiscord ? iT ? "texturePackLoad:failedHelpCustomPack" : "texturePackLoad:failedHelp" : iT ? "texturePackLoad:failedHelpCustomPackNoDiscord" : "texturePackLoad:failedHelpNoDiscord";
      return (0, vT.jsxs)(vT.Fragment, {
        children: [IT(zT, {
          code: oT.code
        }), "default" !== oT.packSource && oT.code === uT.m.Error && (0, vT.jsxs)("div", {
          style: {
            paddingTop: "1rem",
            overflowWrap: "anywhere"
          },
          children: [IT("texturePackLoad:details"), " ", oT.reason]
        }), hT.featureFlags.useDiscord && (0, vT.jsx)("div", {
          style: {
            paddingTop: "1rem"
          },
          children: (0, vT.jsx)("a", {
            href: ET,
            target: "_blank",
            rel: "noreferrer",
            children: IT("texturePackLoad:reportOnDiscord")
          })
        })]
      })
    }
    var CT = IT(2174),
      jT = IT(1296),
      JT = IT(748),
      UT = IT(1199),
      aT = IT(1007),
      YT = IT(1451),
      QT = IT(1193),
      OT = IT(2851),
      HT = IT(2710),
      nT = IT(1332),
      qT = IT(1310),
      ZT = IT(4465),
      lT = IT(8325),
      sT = IT(2585);

    function tT(TT) {
      let {
        onApply: oT,
        onSkip: IT
      } = TT;
      const {
        t: iT
      } = (0, DT.t)();
      return (0, WT.useEffect)((() => {
        sT.g.skipPlayWait()
      }), []), (0, vT.jsx)(nT.l, {
        icon: "download",
        title: "customTexturePack:downloadTitle",
        subtitle: (0, vT.jsxs)("div", {
          className: "CustomTexturePackDownloaderSubtitleText",
          children: [iT("customTexturePack:downloadPrompt"), (0, vT.jsx)("div", {
            className: "CustomTexturePackDownloaderWarningText",
            children: iT("customTexturePack:authorWarning")
          }), (0, vT.jsx)("div", {
            className: "CustomTexturePackDownloaderSecondaryText",
            children: iT("customTexturePack:existingPackSaved")
          })]
        }),
        confirm: {
          text: "general:apply",
          onClick: oT
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: IT
        }
      })
    }
    async function GT() {
      let TT = !1;
      const oT = ST.NotificationProvider.showCustomPopup({
        body: oT => (0, vT.jsx)(tT, {
          onApply: () => {
            TT = !0, oT()
          },
          onSkip: oT
        }),
        disableExitButton: !0,
        disablePressBackgroundToClose: !0
      });
      return await oT.getResult(), TT
    }
    let pT = {
      wanted: !1
    };
    let bT = null;

    function yT(TT) {
      TT.setGamePackConfirm(GT), bT = TT
    }
    var NT = IT(3049);

    function PT(TT) {
      let {
        schematicId: oT,
        texturePackKey: IT,
        onClose: iT
      } = TT;
      const [zT, kT] = (0, WT.useState)("prompt"), [XT, BT] = (0, WT.useState)(null), FT = (0, NT.c)();

      function ST() {
        iT()
      }
      return "prompt" === zT ? (0, vT.jsx)(tT, {
        onApply: async function() {
          kT("downloading");
          try {
            const TT = await async function(TT, oT) {
              const IT = await (0, ZT.c)(oT);
              if (IT) return {
                pack: IT,
                key: oT
              };
              const iT = await MT.userContextManager.getCurrentUserContext(),
                zT = (await YT.e.getGame(iT, TT, !0)).customTexturePackKey;
              if (!zT) return null;
              const kT = await (0, ZT.c)(zT);
              if (!kT) throw new Error("The texture pack could not be found");
              return {
                pack: kT,
                key: zT
              }
            }(oT, IT);
            if (!FT.current) return;
            if (!TT) return void iT();
            if ((0, OT.h)(TT.pack)) return void kT("refused");
            HT.e.setFromJson(TT.pack, "customGame"), await HT.e.saveTemporaryTexturePack(TT.key), FT.current && (0, gT.reloadBloxd)()
          } catch (TT) {
            BT(TT instanceof Error ? TT.message : String(TT)), kT("error")
          }
        },
        onSkip: ST
      }) : "downloading" === zT ? (0, vT.jsx)(nT.l, {
        icon: "download",
        title: "customTexturePack:downloading",
        subtitle: (0, vT.jsx)("div", {
          className: "CustomTexturePackDownloaderLogoLoaderContainer",
          children: (0, vT.jsx)(qT.d, {
            showFace: !0
          })
        })
      }) : "error" === zT ? (0, vT.jsx)(nT.l, {
        icon: "face-worried",
        title: "customTexturePack:errorTitle",
        subtitle: XT,
        confirm: {
          text: "customTexturePack:refreshPage",
          onClick: () => {
            window.location.reload()
          }
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: ST
        }
      }) : "refused" === zT ? (0, vT.jsx)(nT.l, {
        icon: "face-worried",
        title: "customTexturePack:cantApplyTitle",
        subtitle: "customTexturePack:gamePackHasExternalUrls",
        confirm: {
          text: "general:continue",
          onClick: ST
        }
      }) : null
    }
    var dT = IT(8335),
      VT = IT(3867),
      To = IT(1684),
      oo = IT(2788),
      Io = IT(2992),
      io = IT(4181),
      zo = IT(1266),
      ko = IT(637),
      Wo = IT(712);

    function Xo() {
      const TT = zT.c.get("clientEscMenuOptions");
      BT.gameBridge.send("setLookSensitivity", zT.c.get("isTouchScreen") ? (0, Wo.n)(TT) : TT.mouseSensitivity)
    }
    async function Bo(TT, oT, IT) {
      const iT = (0, io.L)(oT);
      async function WT(TT, oT, IT, iT) {
        var WT;
        if (iT.aborted) return null;
        null === zT.c.get("gameEntrySource") && (0, zT.h)("directPlayUrl"), ko.u && (0, lT.c)().catch((() => {})), zT.c.set({
          gameState: "findingLobby"
        }), rT.h.XM("loadingScreenState", "loadingPage:findingLobby");
        const XT = await MT.userContextManager.getCurrentUserContext();
        BT.gameBridge.send("setRequestedGame", {
          gameNameWithVariation: oT,
          discordContext: TT instanceof UT.i ? TT.getSerialisableParams() : null
        }), (0, To.i)();
        const FT = await async function(TT, oT, IT, iT, zT) {
          try {
            await kT.reqLibsLoadedPromise
          } catch (WT) {
            return AT.b.errorWithCode(WT.toString(), KT.j.LOAD_REQUIRED_LIBS, {
              error: WT,
              severity: "medium"
            })
          }
          return rT.h.XM("matchmakeAndPlayStepCompleted", {
            step: KT.j.LOAD_REQUIRED_LIBS,
            totalSubSteps: 1
          }), (0, kT.matchmakeAndPlayMaybeUnloaded)(TT, oT, IT, iT, zT)
        }(TT, oT, IT, XT, iT), ST = FT.isError() ? FT.asError() : null;
        if (ST && !ST.debugResult.Jo) {
          console.log("Failed to join lobby:", ST.message);
          const TT = "timedOut" === ST.debugResult.gameServerUnreachable;
          (0, oo.i)("matchmake_failed", ST.message, TT ? "CONNECT_TO_GAME_SERVER_TIMEOUT" : KT.j[ST.code])
        }
        if (iT.aborted) return BT.gameBridge.send("leaveGame", {
          reloadPath: null
        }), null;
        if (null !== ST && void 0 !== ST && ST.debugResult.Jo) return console.log("Join cancelled:", ST.message), null;
        if (ST) return FT;
        const {
          gameNameWithVariation: DT,
          lobbyName: LT,
          addLobbyToRecentlyPlayed: xT
        } = FT.getValue();
        let cT;
        Xo(), (0, zo.A)().setGameViewShown(!0);
        const gT = null === (WT = JT.d[DT]) || void 0 === WT ? void 0 : WT.recentlyPlayedAs;
        return cT = (0, aT.m)(DT) ? {
          type: "custom",
          name: "",
          schematicId: (0, aT.p)(DT),
          recentLobbies: []
        } : "classic" !== DT || (0, QT.L)(LT) ? gT ? {
          type: "bloxd",
          gameNameWithVariation: gT,
          recentLobbies: []
        } : {
          type: "bloxd",
          gameNameWithVariation: DT,
          recentLobbies: []
        } : {
          type: "bloxd",
          gameNameWithVariation: "classic_worlds",
          recentLobbies: []
        }, YT.e.addRecentlyPlayedGame(XT, cT, xT && !gT ? LT : void 0).then((TT => {
          XT.setRecentlyPlayedGames(TT)
        })).catch((TT => {
          console.error("Failed to record recently played game", TT)
        })), (0, wT.Q)(), FT
      }
      return iT && (0, zT.h)("updateRejoin"), (0, Io.k)((async zT => {
        try {
          let XT = TT,
            BT = await WT(XT, oT, IT, zT);
          for (let TT = 0; iT && TT < io.k; TT++) {
            var kT;
            if (null === (kT = BT) || void 0 === kT || !kT.isError() || BT.asError().code !== KT.j.REQUEST_TO_MATCHMAKING) break;
            if (!await (0, io.N)((0, io.t)(TT), zT)) return BT;
            XT = (0, io.x)(XT, TT + 1, "string" === typeof XT && (0, QT.L)(XT)), BT = await WT(XT, oT, IT, zT)
          }
          return BT
        } catch (XT) {
          if ((0, oo.i)("matchmake_failed", XT, "unexpected"), BT.gameBridge.send("leaveGame", {
              reloadPath: zT.aborted ? null : "/"
            }), zT.aborted) return null;
          throw XT
        }
      }), (async TT => {
        var IT;
        if (iT) return;
        const zT = (0, wT.J)();
        null !== zT && (await zT, TT.aborted) || (null !== (IT = JT.d[oT]) && void 0 !== IT && IT.playAdBeforeMatchmaking ? (sT.g.skipPlayWait(), await new Promise((TT => {
          (0, wT.db)((() => {
            TT(!0)
          }), "video_start")
        }))) : (0, wT.db)((() => {}), "video_start"))
      }))
    }

    function Fo() {
      const {
        t: TT
      } = (0, DT.t)(), oT = (0, FT.useNavigatePreserveSearch)(), IT = (0, iT.t)(), rT = (0, iT.C)(), AT = (0, WT.useRef)({
        t: TT,
        navigate: oT
      });
      AT.current = {
        t: TT,
        navigate: oT
      };
      const ET = (0, WT.useRef)("");
      ET.current = IT.pathname + IT.search;
      const {
        gameState: JT,
        clientEscMenuOptions: UT
      } = (0, zT.k)(["gameState", "clientEscMenuOptions"]), OT = (0, WT.useRef)(null), nT = (0, WT.useRef)(null);
      var qT;
      (0, Io.l)(), (0, Io.o)(), qT = ko.u, (0, WT.useEffect)((() => {
        if (!qT) return;
        let TT = !0;
        return (0, lT.c)().then((oT => {
          TT && yT(oT)
        })).catch((() => {})), () => {
          var oT;
          TT = !1, pT.wanted = !1, null === (oT = bT) || void 0 === oT || oT.setGamePackConfirm(null), bT = null
        }
      }), [qT]), (0, WT.useEffect)((() => {
        var TT;
        (0, kT.needGameClientNow)();
        const {
          t: oT,
          navigate: iT
        } = AT.current, WT = (0, dT.d)(rT, IT.search);
        if (rT.lobbyName && !new URLSearchParams(IT.search).has("lobby")) return void iT((0, jT.c)(WT.gameNameWithVariation, WT.lobbyName), {
          replace: !0
        });
        let XT = Promise.resolve({
          shouldMatchmake: !0
        });
        if ("/play/discord-custom-lobby" === IT.pathname) {
          const TT = zT.c.get("discordContext");
          if (!TT) return void iT("/");
          XT = cT.e.setupDiscordLobby(TT, "classic").then((() => ({
            shouldMatchmake: !0,
            discordContext: TT
          }))).catch((oT => (console.error("Failed to setup discord lobby", oT), {
            shouldMatchmake: !1,
            discordContext: TT
          })))
        } else if (!WT.gameNameWithVariation || !(0, QT.J)(WT.gameNameWithVariation)) return console.error(`Valid game name with variation is required. Received ${WT.gameNameWithVariation}`), void iT(-1);
        if (WT.gameNameWithVariation === OT.current && WT.lobbyName === nT.current) return;
        if (BT.gameBridge.latest("connectedGame").replay) return void(0, Io.g)(null);
        (0, wT.L)(), zT.c.set({
          gameState: "loadingScreen"
        });
        const FT = function() {
          pT.wanted = !1;
          const TT = {
            wanted: !0
          };
          return pT = TT, () => TT.wanted
        }();
        if ("releaseCountdown" === (null === (TT = (0, CT.c)(WT.gameNameWithVariation)) || void 0 === TT ? void 0 : TT.type)) return console.error(`Game hasn't been released yet: ${WT.gameNameWithVariation}`), void iT(-1);
        const DT = WT.gameNameWithVariation;
        if (DT && (ko.u || (0, aT.m)(DT))) {
          const TT = ko.u ? Promise.all([(0, lT.c)(), MT.userContextManager.getCurrentUserContext()]).then((TT => {
            let [oT, IT] = TT;
            if (FT()) return yT(oT), oT.packForGame(DT, IT, FT)
          })) : async function(TT) {
            await HT.e.indexedDbValuesAreLoaded();
            const oT = await MT.userContextManager.getCurrentUserContext(),
              IT = (0, aT.p)(TT);
            let iT;
            try {
              iT = await YT.e.getGame(oT, IT, !0)
            } catch (WT) {
              return void console.error("Failed to get game", WT)
            }
            const zT = iT.customTexturePackKey;
            if (!zT) return void(HT.e.isUsingTemporaryTexturePack() && ((0, gT.reloadBloxd)(), await new Promise((() => {}))));
            if (HT.e.isUsingTemporaryTexturePack() && HT.e.getTemporaryTexturePackSource() === zT) return;
            const kT = ST.NotificationProvider.showCustomPopup({
              body: TT => (0, vT.jsx)(PT, {
                schematicId: IT,
                texturePackKey: zT,
                onClose: TT
              }),
              disableExitButton: !0,
              disablePressBackgroundToClose: !0
            });
            await kT.getResult()
          }(DT), oT = XT;
          XT = TT.catch((TT => {
            console.error("Failed to check for custom texture pack", TT)
          })).then((() => oT))
        }(0, Io.g)(null);
        let mT = !1;
        const JT = IT.pathname + IT.search,
          UT = () => !mT && ET.current === JT;
        return XT.then((TT => {
          let {
            shouldMatchmake: IT,
            discordContext: kT
          } = TT;
          UT() && (IT ? Bo(null !== kT && void 0 !== kT ? kT : WT.lobbyName, kT ? "classic" : WT.gameNameWithVariation, WT.directJoinVmUrl).then((TT => {
            var IT, kT;
            if (null !== TT && UT())
              if (TT.isError()) {
                var XT;
                const FT = TT.asError(),
                  DT = null !== (XT = FT.debugResult.severity) && void 0 !== XT ? XT : "high";
                if (FT.code === KT.j.SHADER_PACK) return void(0, VT.e)(FT.message, iT);
                const cT = zT.c.get("gameEntrySource"),
                  MT = FT.code === KT.j.INITIALISE_WEBGL ? (0, RT.b)() : null,
                  {
                    error: rT
                  } = FT.debugResult,
                  AT = FT.code === KT.j.REQUEST_TO_MATCHMAKING ? function(TT) {
                    var oT;
                    return null !== (oT = Object.keys(LT.c).find((oT => LT.c[oT] === TT))) && void 0 !== oT ? oT : null
                  }(FT.message) : null;
                let wT;
                if (null !== AT) ST.NotificationProvider.showPromptPopup({
                  icon: "lock",
                  title: oT((kT = AT, "notWhitelisted" === kT ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld")),
                  subtitle: oT(xT[AT]),
                  confirmText: oT("general:ok"),
                  cancelText: ""
                }), wT = Promise.resolve(!1);
                else if (null !== MT) wT = (0, RT.g)(MT);
                else if (rT instanceof uT.q) IT = rT, wT = ST.NotificationProvider.showPromptPopup({
                  icon: "face-dizzy",
                  title: "texturePackLoad:failedTitle",
                  subtitle: (0, vT.jsx)(fT, {
                    failure: IT
                  }),
                  confirmText: "general:tryAgain",
                  cancelText: "general:back"
                }).getResult().then((TT => !0 === TT));
                else {
                  let TT;
                  switch (DT) {
                    case "low":
                      TT = "face-diagonal-mouth";
                      break;
                    case "medium":
                      TT = "face-worried";
                      break;
                    case "high":
                      TT = "face-dizzy"
                  }
                  wT = ST.NotificationProvider.showPromptPopup({
                    icon: TT,
                    title: KT.C[FT.code],
                    subtitle: (0, vT.jsxs)(vT.Fragment, {
                      children: [FT.debugResult.gameServerUnreachable ? oT((0, hT.isMobile)() ? "general:gameServerUnreachableMobile" : "general:gameServerUnreachable") : FT.message, FT.debugResult.error instanceof Error && (0, vT.jsx)("div", {
                        style: {
                          fontSize: "0.9rem",
                          paddingTop: "1rem"
                        },
                        children: (0, vT.jsx)(eT.e, {
                          errorString: FT.debugResult.error.stack
                        })
                      })]
                    }),
                    confirmText: oT("general:tryAgain"),
                    cancelText: oT("general:cancel")
                  }).getResult().then((TT => !0 === TT))
                }
                wT.then((TT => {
                  if (TT) {
                    (0, zT.h)(cT);
                    const TT = (0, jT.c)(WT.gameNameWithVariation, WT.lobbyName);
                    "low" === DT ? iT(TT) : (0, gT.reloadBloxd)(TT)
                  }
                })), BT.gameBridge.send("leaveGame", {
                  reloadPath: "/"
                }), iT(-1)
              } else {
                OT.current = TT.getValue().gameNameWithVariation, nT.current = TT.getValue().lobbyName;
                const oT = (0, jT.c)(OT.current, TT.getValue().lobbyName);
                iT(oT, {
                  replace: !0
                })
              }
          })).catch((TT => {
            if (!UT()) return;
            ST.NotificationProvider.showPromptPopup({
              icon: "face-dizzy",
              title: "Unexpected Error",
              subtitle: (0, vT.jsxs)(vT.Fragment, {
                children: [oT("homePage:pleaseCopyError"), (0, vT.jsx)("div", {
                  style: {
                    fontSize: "0.9rem",
                    paddingTop: "1rem"
                  },
                  children: (0, vT.jsx)(eT.e, {
                    errorString: TT.stack
                  })
                })]
              }),
              confirmText: oT("general:tryAgain"),
              cancelText: oT("general:cancel")
            }).getResult().then((TT => {
              !0 === TT && (0, gT.reloadBloxd)((0, jT.c)(WT.gameNameWithVariation, WT.lobbyName))
            })), iT(-1)
          })) : iT(-1))
        })), () => {
          mT = !0
        }
      }), [rT, IT.search, IT.pathname]), (0, WT.useEffect)((() => {
        UT.disableFullscreen && (0, mT.e)() ? (0, mT.j)() : !UT.disableFullscreen && (0, mT.f)() && (0, mT.p)()
      }), [JT, UT]), (0, WT.useEffect)((() => {
        "inGame" === JT && Xo()
      }), [JT, UT]), (0, WT.useEffect)((() => {
        "inGame" !== JT && zT.c.set({
          openInGameMenuName: null
        })
      }), [JT]);
      const ZT = function(TT) {
        const oT = (0, zT.e)(TT),
          [IT, iT] = (0, WT.useState)(0),
          [kT, BT] = (0, WT.useState)(!1);
        (0, XT.g)("gameJoined", (() => {
          (0, zT.e)(zT.c.get("gameState")) && (iT((TT => TT + 1)), BT(!0))
        })), (0, WT.useEffect)((() => {
          oT || BT(!1)
        }), [oT]);
        const FT = "inGame" === TT;
        return {
          mounted: FT || oT && kT,
          shown: FT,
          key: IT
        }
      }(JT);
      return (0, vT.jsx)(vT.Fragment, {
        children: ZT.mounted && (0, vT.jsx)(kT.InGameUi, {
          shown: ZT.shown
        }, ZT.key)
      })
    }
  },
  4465: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => zT
    });
    var iT = IT(1183);
    async function zT(TT) {
      const oT = await fetch(`${iT.clientSideServerUrls.s3Url}/${TT}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === oT.status || 403 === oT.status) return null;
      if (!oT.ok) throw new Error(`Failed to download the texture pack (${oT.status})`);
      return await oT.json()
    }
  },
  8335: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => WT
    });
    var iT = IT(1296),
      zT = IT(1193),
      kT = IT(618);

    function WT(TT) {
      return TT = function(TT, oT) {
        var IT;
        const iT = new URLSearchParams(oT),
          zT = iT.get("lobby"),
          kT = iT.get("vm"),
          WT = null !== (IT = zT) && void 0 !== IT ? IT : TT.lobbyName,
          XT = null !== kT && void 0 !== kT ? kT : TT.directJoinVmUrl;
        if (WT === TT.lobbyName && XT === TT.directJoinVmUrl) return TT;
        return {
          ...TT,
          lobbyName: WT,
          directJoinVmUrl: XT
        }
      }(TT, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), TT = function(TT) {
        if ((0, kT.K)(TT.directJoinVmUrl)) return TT;
        const oT = (0, zT.db)(TT.directJoinVmUrl);
        null === oT && (TT.directJoinVmUrl = void 0);
        return TT
      }(TT = function(TT) {
        if ((0, kT.K)(TT.gameNameWithVariation)) return TT;
        return TT.gameNameWithVariation = (0, iT.i)(TT.gameNameWithVariation), TT
      }(TT))
    }
  },
  8329: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => kT,
      f: () => zT
    });
    let iT = !1;

    function zT() {
      iT = !0
    }

    function kT() {
      return iT
    }
  },
  8325: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => ST,
      e: () => DT
    });
    var iT = IT(2710),
      zT = IT(2089),
      kT = IT(2750),
      WT = IT(4152),
      XT = IT(3061),
      BT = IT(8329);
    let FT = null;

    function ST() {
      return WT.b.cancelDownloadForJoin(), (0, XT.e)(), (0, zT.d)(), (0, BT.f)(), (0, kT.i)(), Promise.all([IT.e(69), IT.e(72), IT.e(71), IT.e(70), IT.e(83), IT.e(258), IT.e(237), IT.e(211), IT.e(235), IT.e(207), IT.e(46)]).then((() => IT(39457))).catch((() => {})), Promise.all([IT.e(74), IT.e(133), IT.e(87), IT.e(55)]).then((() => IT(39544))).then((TT => {
        let {
          startJoinLoad: oT
        } = TT;
        oT()
      }), (() => {})), FT ??= Promise.all([IT.e(71), IT.e(74), IT.e(130), IT.e(73), IT.e(133), IT.e(261), IT.e(185), IT.e(87), IT.e(86), IT.e(85), IT.e(207), IT.e(60)]).then((() => IT(39647))).then((TT => (TT.startWasmPlay(), TT.followPageUiPack((TT => {
        iT.e.showGamePack(TT)
      })), TT)), (TT => {
        throw FT = null, TT
      })), FT
    }

    function DT() {
      return Promise.all([IT.e(71), IT.e(74), IT.e(130), IT.e(73), IT.e(133), IT.e(261), IT.e(185), IT.e(87), IT.e(86), IT.e(85), IT.e(207), IT.e(60)]).then((() => IT(39647))).then((TT => {
        TT.startWasmPreviews(), TT.prefetchWasmPreviews()
      }))
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);