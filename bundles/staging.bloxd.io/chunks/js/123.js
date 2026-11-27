export const id = 123;
export const ids = [123, 176];
export const modules = {
  9660: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      default: () => zi
    });
    var ye = He(1515),
      be = He(18),
      Me = He(5064),
      Ke = He(59),
      Ue = He(1432);
    var Fe = He(1983),
      Je = He(1502),
      oe = He(1340),
      Re = He(1127),
      ke = He(9663),
      qe = He(9667),
      fe = He(4974),
      Te = He(153),
      pe = He(1083),
      Xe = He(27),
      ze = He(1192),
      Be = He(1768),
      Ee = He(97),
      ge = He(1294),
      Oe = He(1425),
      de = He(4914),
      We = He(4719),
      te = He(4678),
      Ze = He(3572),
      we = He(2418),
      De = He(1315),
      Pe = He(780),
      Ae = He(1178),
      Ye = He(1033),
      Ve = He(1169),
      ae = He(3618),
      ce = He(3465),
      xe = He(1342),
      Le = He(1320),
      Ce = He(5491),
      ve = He(9674),
      ue = He(3203),
      me = He(1228);

    function le(ee) {
      let {
        onApply: ie,
        onSkip: He
      } = ee;
      const {
        t: ye
      } = (0, Re.v)();
      return (0, Ke.useEffect)((() => {
        ue.h.skipPlayWait()
      }), []), (0, me.jsx)(xe.k, {
        icon: "download",
        title: "customTexturePack:downloadTitle",
        subtitle: (0, me.jsxs)("div", {
          className: "CustomTexturePackDownloaderSubtitleText",
          children: [ye("customTexturePack:downloadPrompt"), (0, me.jsx)("div", {
            className: "CustomTexturePackDownloaderWarningText",
            children: ye("customTexturePack:authorWarning")
          }), (0, me.jsx)("div", {
            className: "CustomTexturePackDownloaderSecondaryText",
            children: ye("customTexturePack:existingPackSaved")
          })]
        }),
        confirm: {
          text: "general:apply",
          onClick: ie
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: He
        }
      })
    }
    async function Se() {
      let ee = !1;
      const ie = oe.NotificationProvider.showCustomPopup({
        body: ie => (0, me.jsx)(le, {
          onApply: () => {
            ee = !0, ie()
          },
          onSkip: ie
        }),
        disableExitButton: !0,
        disablePressBackgroundToClose: !0
      });
      return await ie.getResult(), ee
    }
    let ne = {
      wanted: !1
    };
    let je = null;

    function se(ee) {
      ee.setGamePackConfirm(Se), je = ee
    }
    var Ie = He(3871),
      he = He(1490),
      Ne = He(35),
      Ge = He(3580);

    function re(ee) {
      let {
        schematicId: ie,
        texturePackKey: He,
        onClose: ye
      } = ee;
      const [be, Me] = (0, Ke.useState)("prompt"), [Ue, Fe] = (0, Ke.useState)(null), Je = (0, Ie.c)();

      function oe() {
        ye()
      }
      return "prompt" === be ? (0, me.jsx)(le, {
        onApply: async function() {
          Me("downloading");
          try {
            const ee = await async function(ee, ie) {
              const He = await (0, Ce.e)(ie);
              if (He) return {
                pack: He,
                key: ie
              };
              const ye = await pe.userContextManager.getCurrentUserContext(),
                be = (await he.b.getGame(ye, ee, !0)).customTexturePackKey;
              if (!be) return null;
              const Me = await (0, Ce.e)(be);
              if (!Me) throw new Error("The texture pack could not be found");
              return {
                pack: Me,
                key: be
              }
            }(ie, He);
            if (!Je.current) return;
            if (!ee) return void ye();
            if ((0, ae.l)(ee.pack)) return void Me("refused");
            const be = ce.c.toJson(),
              Ke = ce.c.isUsingTemporaryTexturePack() ? "customGame" : "player";
            if (ce.c.setFromJson(ee.pack, "customGame"), await ce.c.saveTemporaryTexturePack(ee.key), Je.current) return void(0, Be.reloadBloxd)();
            ce.c.setFromJson(be, Ke), await (0, Ge.p)(Ne.e)
          } catch (ee) {
            Fe(ee instanceof Error ? ee.message : String(ee)), Me("error")
          }
        },
        onSkip: oe
      }) : "downloading" === be ? (0, me.jsx)(xe.k, {
        icon: "download",
        title: "customTexturePack:downloading",
        subtitle: (0, me.jsx)("div", {
          className: "CustomTexturePackDownloaderLogoLoaderContainer",
          children: (0, me.jsx)(Le.b, {
            showFace: !0
          })
        })
      }) : "error" === be ? (0, me.jsx)(xe.k, {
        icon: "face-worried",
        title: "customTexturePack:errorTitle",
        subtitle: Ue,
        confirm: {
          text: "customTexturePack:refreshPage",
          onClick: () => {
            window.location.reload()
          }
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: oe
        }
      }) : "refused" === be ? (0, me.jsx)(xe.k, {
        icon: "face-worried",
        title: "customTexturePack:cantApplyTitle",
        subtitle: "customTexturePack:gamePackHasExternalUrls",
        confirm: {
          text: "general:continue",
          onClick: oe
        }
      }) : null
    }
    var Qe = He(9691),
      ei = He(4665),
      ii = He(1833),
      Hi = He(1814),
      yi = He(4673),
      bi = He(2166),
      Mi = He(9693);
    var Ki = He(5129),
      Ui = He(1260),
      Fi = He(1763),
      Ji = He(645),
      oi = He(732),
      Ri = He(1851);

    function ki() {
      const ee = be.e.get("clientEscMenuOptions");
      Fe.gameBridge.send("setLookSensitivity", be.e.get("isTouchScreen") ? (0, oi.u)(ee) : ee.mouseSensitivity)
    }
    const qi = 45e3;

    function fi(ee) {
      const ie = ee.asError();
      if (ie.debugResult.Ce || (0, Fi.b)(ie.debugResult.error)) return;
      console.log("Failed to join lobby:", ie.message);
      const He = "timedOut" === ie.debugResult.gameServerUnreachable;
      (0, Hi.reportClientError)("matchmake_failed", ie.message, He ? "CONNECT_TO_GAME_SERVER_TIMEOUT" : Te.k[ie.code]);
      const {
        error: ye
      } = ie.debugResult;
      if (ye instanceof Ze.k && "default" !== ye.packSource) {
        const ee = (0, yi.g)("js", "game" === ye.packSource ? "game" : "page", (0, yi.h)(ye));
        (0, Hi.reportClientError)("texture_pack", ye, ee)
      }
    }

    function Ti(ee) {
      if (null === ee || void 0 === ee || !ee.isError()) return !1;
      const ie = ee.asError();
      return ie.code === Te.k.REQUEST_TO_MATCHMAKING && !(0, Fi.b)(ie.debugResult.error)
    }
    async function Xi(ee, ie, He) {
      const ye = (0, Ki.I)(ie);
      async function Ke(ee, ie, He, ye) {
        var Ke;
        if (ye.aborted) return null;
        null === be.e.get("gameEntrySource") && (0, be.l)("directPlayUrl"), Ji.I && (0, ve.loadWasmPlay)().catch((() => {})), be.e.set({
          gameState: "findingLobby"
        }), Xe.h.yR("loadingScreenState", "loadingPage:findingLobby");
        const Ue = await pe.userContextManager.getCurrentUserContext();
        Fe.gameBridge.send("setRequestedGame", {
          gameNameWithVariation: ie,
          discordContext: ee instanceof Ae.f ? ee.getSerialisableParams() : null
        }), (0, ii.g)(null !== (Ke = ue.h.playInputAt()) && void 0 !== Ke ? Ke : performance.now());
        const Je = await async function(ee, ie, He, ye, be) {
          try {
            await (0, Ri.k)(Me.reqLibsLoadedPromise, qi, "Required libraries timed out")
          } catch (Ke) {
            const ee = Ke instanceof Ri.f ? `Required libraries still loading after ${qi/1e3} s: ${(0,Me.requiredLibsPending)().join(", ")}` : Ke.toString();
            return ze.e.errorWithCode(ee, Te.k.LOAD_REQUIRED_LIBS, {
              error: Ke,
              severity: "medium"
            })
          }
          return Xe.h.yR("matchmakeAndPlayStepCompleted", {
            step: Te.k.LOAD_REQUIRED_LIBS,
            totalSubSteps: 1
          }), (0, Me.matchmakeAndPlayMaybeUnloaded)(ee, ie, He, ye, be)
        }(ee, ie, He, Ue, ye), oe = Je.isError() ? Je.asError() : null;
        if (ye.aborted) return oe && fi(Je), Fe.gameBridge.send("leaveGame", {
          reloadPath: null
        }), null;
        if (null !== oe && void 0 !== oe && oe.debugResult.Ce) return console.log("Join cancelled:", oe.message), null;
        if (oe) return Je;
        const {
          gameNameWithVariation: Re,
          lobbyName: ke
        } = Je.getValue();
        return ki(), (0, Ui.A)().setGameViewShown(!0), Ue.recordJoin(Re, ke), (0, ge.P)(), Je
      }
      return ye && (0, be.l)("updateRejoin"), (0, bi.g)((async be => {
        try {
          var Me;
          let Ue = ee,
            Fe = await Ke(Ue, ie, He, be);
          for (let ee = 0; ye && ee < Ki.i && (Ti(Fe) && await (0, Ki.J)((0, Ki.s)(ee), be)); ee++) Ue = (0, Ki.w)(Ue, ee + 1, "string" === typeof Ue && (0, Ve.K)(Ue)), Fe = await Ke(Ue, ie, He, be);
          return null !== (Me = Fe) && void 0 !== Me && Me.isError() && fi(Fe), Fe
        } catch (Ue) {
          if ((0, Hi.reportClientError)("matchmake_failed", Ue, "unexpected"), Fe.gameBridge.send("leaveGame", {
              reloadPath: be.aborted ? null : "/"
            }), be.aborted) return null;
          throw Ue
        }
      }), (async ee => {
        var He;
        if (ye) return;
        const be = (0, ge.G)();
        null !== be && (await be, ee.aborted) || (null !== (He = Pe.e[ie]) && void 0 !== He && He.playAdBeforeMatchmaking ? (ue.h.skipPlayWait(), await new Promise((ee => {
          (0, ge.db)((() => {
            ee(!0)
          }), "video_start")
        }))) : (0, ge.db)((() => {}), "video_start"))
      }))
    }

    function zi() {
      const {
        t: ee
      } = (0, Re.v)(), ie = (0, Je.useNavigatePreserveSearch)(), He = (0, ye.u)(), Ae = (0, ye.B)(), ae = (0, Ke.useRef)({
        t: ee,
        navigate: ie
      });
      ae.current = {
        t: ee,
        navigate: ie
      };
      const xe = (0, Ke.useRef)("");
      xe.current = He.pathname + He.search;
      const {
        gameState: Le,
        clientEscMenuOptions: Ce
      } = (0, be.m)(["gameState", "clientEscMenuOptions"]), ue = (0, Ke.useRef)(null), le = (0, Ke.useRef)(!1);
      var Se;
      (0, Ke.useEffect)((() => () => {
        Xe.h.yR("leftPlayPage")
      }), []), (0, bi.j)(), (0, bi.l)(), Se = Ji.I, (0, Ke.useEffect)((() => {
        if (!Se) return;
        let ee = !0;
        return (0, ve.loadWasmPlay)().then((ie => {
          ee && se(ie)
        })).catch((() => {})), () => {
          var ie;
          ee = !1, ne.wanted = !1, null === (ie = je) || void 0 === ie || ie.setGamePackConfirm(null), je = null
        }
      }), [Se]), (0, Ke.useEffect)((() => {
        var ee, ie, ye;
        (0, Me.needGameClientNow)();
        const {
          t: Ke,
          navigate: Ue
        } = ae.current, Re = (0, Qe.d)(Ae, He.search);
        if (Ae.lobbyName && !new URLSearchParams(He.search).has("lobby")) return void Ue((0, De.b)(Re.gameNameWithVariation, Re.lobbyName), {
          replace: !0
        });
        let Oe = Promise.resolve({
          shouldMatchmake: !0
        });
        const Le = new AbortController;
        if ("/play/discord-custom-lobby" === He.pathname) {
          const ee = be.e.get("discordContext");
          if (!ee) return void Ue("/");
          Oe = fe.c.setupDiscordLobby(ee, "classic").then((() => ({
            shouldMatchmake: !0,
            discordContext: ee
          }))).catch((ie => (console.error("Failed to setup discord lobby", ie), {
            shouldMatchmake: !1,
            discordContext: ee
          })))
        } else if (!Re.gameNameWithVariation || !(0, Ve.J)(Re.gameNameWithVariation)) return console.error(`Valid game name with variation is required. Received ${Re.gameNameWithVariation}`), void Ue(-1);
        const Ce = ue.current;
        if (null !== Ce && Re.gameNameWithVariation === Ce.gameNameWithVariation && Re.lobbyName === Ce.lobbyName) return;
        if (Fe.gameBridge.latest("connectedGame").replay) return void(0, bi.f)(null);
        if ("releaseCountdown" === (null === (ee = (0, we.i)(Re.gameNameWithVariation)) || void 0 === ee ? void 0 : ee.type)) return console.error(`Game hasn't been released yet: ${Re.gameNameWithVariation}`), void Ue(-1);
        const Se = le.current;
        le.current = !1, (0, ge.K)(), be.e.set({
          gameState: "loadingScreen"
        });
        const je = function() {
            ne.wanted = !1;
            const ee = {
              wanted: !0
            };
            return ne = ee, () => ee.wanted
          }(),
          Ie = Re.gameNameWithVariation;
        if (Ie && (Ji.I || (0, Ye.k)(Ie))) {
          const ee = Ji.I ? Promise.all([(0, ve.loadWasmPlay)(), pe.userContextManager.getCurrentUserContext()]).then((ee => {
            let [ie, He] = ee;
            if (je()) return se(ie), ie.packForGame(Ie, He, je)
          })) : async function(ee, ie) {
            await ce.c.indexedDbValuesAreLoaded();
            const He = await pe.userContextManager.getCurrentUserContext(),
              ye = (0, Ye.r)(ee);
            let be;
            try {
              be = await he.b.getGame(He, ye, !0)
            } catch (Fe) {
              return void console.error("Failed to get game", Fe)
            }
            if (null !== ie && void 0 !== ie && ie.aborted) return;
            const Me = be.customTexturePackKey;
            if (!Me) return void(ce.c.isUsingTemporaryTexturePack() && ((0, Be.reloadBloxd)(), await new Promise((() => {}))));
            if (ce.c.isUsingTemporaryTexturePack() && ce.c.getTemporaryTexturePackSource() === Me) return;
            const Ke = oe.NotificationProvider.showCustomPopup({
                body: ee => (0, me.jsx)(re, {
                  schematicId: ye,
                  texturePackKey: Me,
                  onClose: ee
                }),
                disableExitButton: !0,
                disablePressBackgroundToClose: !0
              }),
              Ue = () => {
                Ke.tearDownNotification()
              };
            null === ie || void 0 === ie || ie.addEventListener("abort", Ue, {
              once: !0
            }), await Ke.getResult(), null === ie || void 0 === ie || ie.removeEventListener("abort", Ue)
          }(Ie, Le.signal), ie = Oe;
          Oe = ee.catch((ee => {
            console.error("Failed to check for custom texture pack", ee)
          })).then((() => ie))
        }
        const Ne = {
          wasm: Ji.I,
          game: Re.gameNameWithVariation,
          custom: void 0 !== Ie && (0, Ye.k)(Ie),
          lobbyName: null !== (ie = Re.lobbyName) && void 0 !== ie ? ie : null,
          direct: null !== Re.directJoinVmUrl && void 0 !== Re.directJoinVmUrl,
          discord: "/play/discord-custom-lobby" === He.pathname,
          adBeforeMatchmaking: void 0 !== Ie && !0 === (null === (ye = Pe.e[Ie]) || void 0 === ye ? void 0 : ye.playAdBeforeMatchmaking),
          afterAnother: null !== ue.current || (0, bi.b)()
        };
        (0, Mi.f)(null);
        const Ge = !(ii = Ne).wasm || void 0 === ii.game || ii.custom || ii.direct || ii.discord || ii.adBeforeMatchmaking || ii.afterAnother ? null : () => {
          ! function(ee, ie) {
            (0, Mi.f)({
              key: (0, Mi.e)(ee, ie),
              settled: Promise.all([Me.matchmakingLibrariesPromise, pe.userContextManager.getCurrentUserContext()]).then((He => {
                let [ye, be] = He;
                if (void 0 === ye.matchmakeForAhead) throw new Error("the matchmaking chunk has no matchmaking ahead");
                return ye.matchmakeForAhead(ee, ie, be)
              })).catch((ee => ({
                result: ze.e.errorWithCode(String(ee), Te.k.REQUEST_TO_MATCHMAKING, {
                  error: ee,
                  severity: "medium"
                }),
                at: performance.now()
              })))
            })
          }(Ne.lobbyName, Ne.game)
        };
        var ii;
        const Hi = null !== ue.current;
        ue.current = null, (0, bi.f)(null);
        const yi = () => {
          Se ? (0, Je.navigateToHomePage)() : (le.current = Hi, Ue(-1))
        };
        let Ki = !1;
        const Ui = He.pathname + He.search,
          oi = () => !Ki && xe.current === Ui;
        return (0, Mi.c)(Oe, Ge, (ee => {
          let {
            shouldMatchmake: ie,
            discordContext: He
          } = ee;
          oi() && (ie ? Xi(null !== He && void 0 !== He ? He : Re.lobbyName, He ? "classic" : Re.gameNameWithVariation, Re.directJoinVmUrl).then((ee => {
            if (null !== ee && oi())
              if (ee.isError()) {
                var ie, He;
                const ye = ee.asError(),
                  Me = null !== (ie = ye.debugResult.severity) && void 0 !== ie ? ie : "high";
                if (Xe.h.yR("joinFailed", {
                    step: null !== (He = ye.code) && void 0 !== He ? He : null,
                    severity: Me
                  }), (0, Fi.b)(ye.debugResult.error)) return void Fi.d.reload();
                if (ye.code === Te.k.SHADER_PACK) return void(0, ei.d)(ye.message, Ue);
                const Je = be.e.get("gameEntrySource"),
                  fe = ye.code === Te.k.INITIALISE_WEBGL ? (0, We.b)() : null,
                  {
                    error: pe
                  } = ye.debugResult;
                let ze;
                if ((0, qe.c)(Ke, ye)) ze = Promise.resolve(!1);
                else if (null !== fe) ze = (0, We.i)(fe);
                else if (pe instanceof Ze.k) ze = (0, te.f)(pe);
                else {
                  let ee;
                  switch (Me) {
                    case "low":
                      ee = "face-diagonal-mouth";
                      break;
                    case "medium":
                      ee = "face-worried";
                      break;
                    case "high":
                      ee = "face-dizzy"
                  }
                  const ie = pe instanceof Ri.f;
                  let He = (0, ke.c)(ye.message);
                  ie ? He = Ke("general:gameFilesStalled") : ye.debugResult.gameServerUnreachable && (He = Ke((0, Ee.isMobile)() ? "general:gameServerUnreachableMobile" : "general:gameServerUnreachable"));
                  ze = oe.NotificationProvider.showPromptPopup({
                    icon: ee,
                    title: Te.u[ye.code],
                    subtitle: (0, me.jsxs)(me.Fragment, {
                      children: [He, pe instanceof Error && !ie && (0, me.jsx)("div", {
                        style: {
                          fontSize: "0.9rem",
                          paddingTop: "1rem"
                        },
                        children: (0, me.jsx)(de.d, {
                          errorString: pe.stack
                        })
                      })]
                    }),
                    confirmText: Ke("general:tryAgain"),
                    cancelText: Ke("general:cancel")
                  }).getResult().then((ee => !0 === ee))
                }
                ze.then((ee => {
                  if (ee) {
                    (0, be.l)(Je);
                    const ee = (0, De.b)(Re.gameNameWithVariation, Re.lobbyName);
                    "low" === Me ? Ue(ee) : (0, Be.reloadBloxd)(ee)
                  }
                })), Fe.gameBridge.send("leaveGame", {
                  reloadPath: "/"
                }), yi()
              } else {
                const {
                  gameNameWithVariation: ie,
                  lobbyName: He
                } = ee.getValue();
                ue.current = {
                  gameNameWithVariation: ie,
                  lobbyName: He
                };
                const ye = (0, De.b)(ie, He);
                Ue(ye, {
                  replace: !0
                })
              }
          })).catch((ee => {
            if (!oi()) return;
            Xe.h.yR("joinFailed", {
              step: null,
              severity: "unexpected"
            });
            oe.NotificationProvider.showPromptPopup({
              icon: "face-dizzy",
              title: "Unexpected Error",
              subtitle: (0, me.jsxs)(me.Fragment, {
                children: [Ke("homePage:pleaseCopyError"), (0, me.jsx)("div", {
                  style: {
                    fontSize: "0.9rem",
                    paddingTop: "1rem"
                  },
                  children: (0, me.jsx)(de.d, {
                    errorString: ee.stack
                  })
                })]
              }),
              confirmText: Ke("general:tryAgain"),
              cancelText: Ke("general:cancel")
            }).getResult().then((ee => {
              !0 === ee && (0, Be.reloadBloxd)((0, De.b)(Re.gameNameWithVariation, Re.lobbyName))
            })), yi()
          })) : Ue(-1))
        }), oi), () => {
          Ki = !0, Le.abort()
        }
      }), [Ae, He.search, He.pathname]), (0, Ke.useEffect)((() => {
        Ce.disableFullscreen && (0, Oe.e)() ? (0, Oe.l)() : !Ce.disableFullscreen && (0, Oe.i)() && (0, Oe.s)({
          automatic: !0
        })
      }), [Le, Ce]), (0, Ke.useEffect)((() => {
        "inGame" === Le && ki()
      }), [Le, Ce]), (0, Ke.useEffect)((() => {
        "inGame" !== Le && be.e.set({
          openInGameMenuName: null
        })
      }), [Le]);
      const Ie = function(ee) {
        const ie = (0, be.i)(ee),
          [He, ye] = (0, Ke.useState)(0),
          [Me, Fe] = (0, Ke.useState)(!1);
        (0, Ue.f)("gameJoined", (() => {
          (0, be.i)(be.e.get("gameState")) && (ye((ee => ee + 1)), Fe(!0))
        })), (0, Ke.useEffect)((() => {
          ie || Fe(!1)
        }), [ie]);
        const Je = "inGame" === ee;
        return {
          mounted: Je || ie && Me,
          shown: Je,
          key: He
        }
      }(Le);
      return (0, me.jsx)(me.Fragment, {
        children: Ie.mounted && (0, me.jsx)(Me.InGameUi, {
          shown: Ie.shown
        }, Ie.key)
      })
    }
  },
  5491: (ee, ie, He) => {
    He.d(ie, {
      e: () => be
    });
    var ye = He(1141);
    async function be(ee) {
      const ie = await fetch(`${ye.clientSideServerUrls.s3Url}/${ee}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === ie.status || 403 === ie.status) return null;
      if (!ie.ok) throw new Error(`Failed to download the texture pack (${ie.status})`);
      return await ie.json()
    }
  },
  9667: (ee, ie, He) => {
    He.d(ie, {
      c: () => pe,
      d: () => Xe
    });
    var ye = He(153),
      be = He(186),
      Me = He(1033),
      Ke = He(1040),
      Ue = He(1169),
      Fe = He(1983),
      Je = He(2418),
      oe = He(1490),
      Re = He(1340),
      ke = He(1083),
      qe = He(9669),
      fe = He(1502),
      Te = He(1536);

    function pe(ee, ie) {
      const He = !0 === ie.debugResult.gameRefused,
        Me = He || ie.code === ye.k.REQUEST_TO_MATCHMAKING ? (0, qe.l)(ie.message) : null;
      if (null !== Me) return ge(ee, ee((0, qe.o)(Me)), ee(qe.n[Me])), !0;
      if (He) return async function(ee) {
        const {
          gameNameWithVariation: ie,
          lobbyName: He,
          shownLobbyName: ye
        } = Fe.gameBridge.latest("connectedGame"), be = "classic" === ie && (0, Ue.I)(He) ? ye : await (0, Je.h)(ee, ie, He);
        return "" !== be ? ee("general:cantJoinGame", {
          game: be
        }) : ee("general:cantJoinThisGame")
      }(ee).then((He => {
        ge(ee, He, ie.message)
      })), !0;
      const {
        joinFailure: Ke
      } = ie.debugResult, oe = "refused" === (null === Ke || void 0 === Ke ? void 0 : Ke.at) ? Ke.code : null;
      return oe === be.c.schematicNotPublished.code ? (async function(ee, ie) {
        const He = ze(),
          ye = await Ee(He);
        if (null === ye || ye.gamePublished) return void ge(ee, ee("general:cantJoinThisGame"), ie);
        await Be(ee, "rocket-launch", ee("studio:gameNotPublishedTitle", {
          game: ye.name
        }), ee("studio:publishInStudio"), He)
      }(ee, ie.message), !0) : (oe === be.c.schematicBanned.code || oe === be.c.customGameTakenDown.code) && (Ee(ze()).then((ie => {
        Xe(ee, ie)
      })), !0)
    }

    function Xe(ee, ie) {
      !0 !== (null === ie || void 0 === ie ? void 0 : ie.takenDown) ? ge(ee, ee("general:cantJoinThisGame"), be.c.customGameTakenDown.text) : Be(ee, "lock", ee("studio:gameTakenDownTitle", {
        game: ie.name
      }), ee("studio:viewInStudio"), ie.schematicId)
    }

    function ze() {
      return (0, Me.r)(Fe.gameBridge.latest("connectedGame").gameNameWithVariation)
    }
    async function Be(ee, ie, He, ye, be) {
      !0 === await Re.NotificationProvider.showPromptPopup({
        icon: ie,
        title: He,
        confirmText: ye,
        cancelText: ee("general:cancel")
      }).getResult() && (0, fe.navigatePreserveSearch)((0, Te.s)((0, Ke.b)(be), "manage"))
    }
    async function Ee(ee) {
      try {
        return await oe.b.getGame(await ke.userContextManager.getCurrentUserContext(), ee, !0)
      } catch (ie) {
        return (0, oe.c)(ie) || console.error(`Failed to get game ${ee}`, ie), null
      }
    }

    function ge(ee, ie, He) {
      Re.NotificationProvider.showPromptPopup({
        icon: "lock",
        title: ie,
        subtitle: He,
        confirmText: ee("general:ok"),
        cancelText: ""
      })
    }
  },
  9691: (ee, ie, He) => {
    He.d(ie, {
      d: () => Ke
    });
    var ye = He(1315),
      be = He(1169),
      Me = He(610);

    function Ke(ee) {
      return ee = function(ee, ie) {
        var He;
        const ye = new URLSearchParams(ie),
          be = ye.get("lobby"),
          Me = ye.get("vm"),
          Ke = null !== (He = be) && void 0 !== He ? He : ee.lobbyName,
          Ue = null !== Me && void 0 !== Me ? Me : ee.directJoinVmUrl;
        if (Ke === ee.lobbyName && Ue === ee.directJoinVmUrl) return ee;
        return {
          ...ee,
          lobbyName: Ke,
          directJoinVmUrl: Ue
        }
      }(ee, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), ee = function(ee) {
        if ((0, Me.P)(ee.directJoinVmUrl)) return ee;
        const ie = (0, be.$)(ee.directJoinVmUrl);
        null === ie && (ee.directJoinVmUrl = void 0);
        return ee
      }(ee = function(ee) {
        if ((0, Me.P)(ee.gameNameWithVariation)) return ee;
        return ee.gameNameWithVariation = (0, ye.g)(ee.gameNameWithVariation), ee
      }(ee))
    }
  },
  9683: (ee, ie, He) => {
    He.d(ie, {
      d: () => Me,
      g: () => be
    });
    let ye = !1;

    function be() {
      ye = !0
    }

    function Me() {
      return ye
    }
  },
  9693: (ee, ie, He) => {
    He.d(ie, {
      c: () => Ue,
      e: () => be,
      f: () => Me,
      i: () => Ke
    });
    let ye = null;

    function be(ee, ie) {
      return `${ie}\n${null!==ee&&void 0!==ee?ee:""}`
    }

    function Me(ee) {
      ye = ee
    }

    function Ke(ee) {
      const ie = ye;
      return ye = null, null !== ie && ie.key === ee ? ie.settled : null
    }

    function Ue(ee, ie, He, ye) {
      let be = !1;
      null !== ie && setTimeout((() => {
        ye() && !be && ie()
      }), 0), ee.then((ee => {
        be = !0, He(ee)
      }))
    }
  },
  9674: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      loadWasmPlay: () => ke,
      loadWasmPlayAhead: () => qe,
      loadWasmPreviews: () => fe
    });
    var ye = He(3465),
      be = He(2342),
      Me = He(2170),
      Ke = He(5046),
      Ue = He(3892),
      Fe = He(9683);
    let Je = null;

    function oe() {
      return Promise.all([He.e(86), He.e(89), He.e(103), He.e(234), He.e(233), He.e(150), He.e(216), He.e(243), He.e(155), He.e(101), He.e(244), He.e(75)]).then((() => He(41771)))
    }

    function Re() {
      Promise.all([He.e(84), He.e(87), He.e(85), He.e(86), He.e(103), He.e(100), He.e(300), He.e(207), He.e(250), He.e(274), He.e(244), He.e(54)]).then((() => He(42095))).catch((() => {}))
    }

    function ke() {
      return Ke.d.cancelDownloadForJoin(), (0, Ue.b)(), (0, be.g)(), (0, Fe.g)(), (0, Me.i)(), Re(), Promise.all([He.e(89), He.e(103), He.e(234), He.e(233), He.e(150), He.e(155), He.e(70)]).then((() => He(42125))).then((ee => {
        let {
          startJoinLoad: ie
        } = ee;
        ie()
      }), (() => {})), Je ??= oe().then((ee => (ee.startWasmPlay(), ee.followPageUiPack((ee => {
        ye.c.showGamePack(ee)
      })), ee)), (ee => {
        throw Je = null, ee
      })), Je
    }

    function qe() {
      return Re(), He.e(124).then((() => He(42130))).catch((() => {})), oe().then((() => {}))
    }

    function fe() {
      return oe().then((ee => {
        ee.startWasmPreviews(), ee.prefetchWasmPreviews()
      }))
    }
  },
  9669: (ee, ie, He) => {
    He.d(ie, {
      d: () => Me,
      h: () => Ke,
      l: () => Ue,
      n: () => Je,
      o: () => Fe
    });
    var ye = He(186),
      be = He(5018);

    function Me(ee) {
      return Ke(ee) === ye.c.gameOrPluginOnPlayerAuthRejected.code
    }

    function Ke(ee) {
      return "object" === typeof ee && null !== ee ? ee.code : void 0
    }

    function Ue(ee) {
      var ie;
      return null !== (ie = Object.keys(be.e).find((ie => be.e[ie] === ee))) && void 0 !== ie ? ie : null
    }

    function Fe(ee) {
      return "notWhitelisted" === ee ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const Je = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  9663: (ee, ie, He) => {
    He.d(ie, {
      b: () => Je,
      c: () => Fe
    });
    var ye = He(347);

    function be(ee) {
      if (!ee.startsWith("{")) return ee;
      let ie;
      try {
        ie = JSON.parse(ee)
      } catch {
        return ee
      }
      return function(ee) {
        if (null === (0, ye.Be)(ee)) return !1;
        const {
          params: ie
        } = ee;
        return void 0 === ie || "object" === typeof ie && null !== ie && Object.values(ie).every((ee => "string" === typeof ee))
      }(ie) ? ie : ee
    }
    var Me = He(1127),
      Ke = He(1196);

    function Ue(ee) {
      return (0, Me.s)(Ke.f.get().getCurrentLanguageCode(), ee.translationKey, ee.params)
    }

    function Fe(ee) {
      const ie = be(ee);
      return "string" === typeof ie ? ie : Ue(ie)
    }

    function Je(ee) {
      const ie = be(ee);
      return "string" === typeof ie ? ie : Ue({
        translationKey: "moderation:kicked",
        params: {
          reason: Ue(ie)
        }
      })
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);