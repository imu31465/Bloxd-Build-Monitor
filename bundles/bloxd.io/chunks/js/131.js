export const id = 131;
export const ids = [131, 186];
export const modules = {
  10041: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      default: () => eS
    });
    var Zr = Qr(1653),
      Wr = Qr(26),
      ar = Qr(5420),
      jr = Qr(72),
      Ir = Qr(1573);
    var fr = Qr(2089),
      Er = Qr(1644),
      pr = Qr(1475),
      xr = Qr(1251),
      mr = Qr(10047),
      Nr = Qr(10055),
      Ur = Qr(5347),
      tr = Qr(161),
      hr = Qr(1187),
      zr = Qr(34),
      Yr = Qr(1295),
      nr = Qr(1885),
      er = Qr(109),
      Kr = Qr(1413),
      yr = Qr(1568),
      Br = Qr(5292),
      Tr = Qr(5054),
      vr = Qr(4996),
      Or = Qr(4448),
      Lr = Qr(3312),
      lr = Qr(1433),
      Xr = Qr(868),
      Pr = Qr(1281),
      Hr = Qr(1127),
      qr = Qr(1279),
      Rr = Qr(4501),
      gr = Qr(4354),
      Cr = Qr(1481),
      Mr = Qr(1444),
      Gr = Qr(5943),
      kr = Qr(10068),
      Ar = Qr(4077),
      Vr = Qr(1338);

    function ir(rr) {
      let {
        onApply: Sr,
        onSkip: Qr
      } = rr;
      const {
        t: Zr
      } = (0, xr.E)();
      return (0, jr.useEffect)((() => {
        Ar.e.skipPlayWait()
      }), []), (0, Vr.jsx)(Cr.j, {
        icon: "download",
        title: "customTexturePack:downloadTitle",
        subtitle: (0, Vr.jsxs)("div", {
          className: "CustomTexturePackDownloaderSubtitleText",
          children: [Zr("customTexturePack:downloadPrompt"), (0, Vr.jsx)("div", {
            className: "CustomTexturePackDownloaderWarningText",
            children: Zr("customTexturePack:authorWarning")
          }), (0, Vr.jsx)("div", {
            className: "CustomTexturePackDownloaderSecondaryText",
            children: Zr("customTexturePack:existingPackSaved")
          })]
        }),
        confirm: {
          text: "general:apply",
          onClick: Sr
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: Qr
        }
      })
    }
    async function wr() {
      let rr = !1;
      const Sr = pr.NotificationProvider.showCustomPopup({
        body: Sr => (0, Vr.jsx)(ir, {
          onApply: () => {
            rr = !0, Sr()
          },
          onSkip: Sr
        }),
        disableExitButton: !0,
        disablePressBackgroundToClose: !0
      });
      return await Sr.getResult(), rr
    }
    let cr = {
      wanted: !1
    };
    let Fr = null;

    function or(rr) {
      rr.setGamePackConfirm(wr), Fr = rr
    }
    var br = Qr(4746),
      Jr = Qr(1629),
      Dr = Qr(43),
      dr = Qr(4454);

    function sr(rr) {
      let {
        schematicId: Sr,
        texturePackKey: Qr,
        onClose: Zr
      } = rr;
      const [Wr, ar] = (0, jr.useState)("prompt"), [Ir, fr] = (0, jr.useState)(null), Er = (0, br.b)();

      function pr() {
        Zr()
      }
      return "prompt" === Wr ? (0, Vr.jsx)(ir, {
        onApply: async function() {
          ar("downloading");
          try {
            const rr = await async function(rr, Sr) {
              const Qr = await (0, Gr.b)(Sr);
              if (Qr) return {
                pack: Qr,
                key: Sr
              };
              const Zr = await hr.userContextManager.getCurrentUserContext(),
                Wr = (await Jr.c.getGame(Zr, rr, !0)).customTexturePackKey;
              if (!Wr) return null;
              const ar = await (0, Gr.b)(Wr);
              if (!ar) throw new Error("The texture pack could not be found");
              return {
                pack: ar,
                key: Wr
              }
            }(Sr, Qr);
            if (!Er.current) return;
            if (!rr) return void Zr();
            if ((0, Rr.m)(rr.pack)) return void ar("refused");
            const Wr = gr.d.toJson(),
              jr = gr.d.isUsingTemporaryTexturePack() ? "customGame" : "player";
            if (gr.d.setFromJson(rr.pack, "customGame"), await gr.d.saveTemporaryTexturePack(rr.key), Er.current) return void(0, nr.reloadBloxd)();
            gr.d.setFromJson(Wr, jr), await (0, dr.n)(Dr.h)
          } catch (rr) {
            fr(rr instanceof Error ? rr.message : String(rr)), ar("error")
          }
        },
        onSkip: pr
      }) : "downloading" === Wr ? (0, Vr.jsx)(Cr.j, {
        icon: "download",
        title: "customTexturePack:downloading",
        subtitle: (0, Vr.jsx)("div", {
          className: "CustomTexturePackDownloaderLogoLoaderContainer",
          children: (0, Vr.jsx)(Mr.c, {
            showFace: !0
          })
        })
      }) : "error" === Wr ? (0, Vr.jsx)(Cr.j, {
        icon: "face-worried",
        title: "customTexturePack:errorTitle",
        subtitle: Ir,
        confirm: {
          text: "customTexturePack:refreshPage",
          onClick: () => {
            window.location.reload()
          }
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: pr
        }
      }) : "refused" === Wr ? (0, Vr.jsx)(Cr.j, {
        icon: "face-worried",
        title: "customTexturePack:cantApplyTitle",
        subtitle: "customTexturePack:gamePackHasExternalUrls",
        confirm: {
          text: "general:continue",
          onClick: pr
        }
      }) : null
    }
    var ur = Qr(10073),
      rS = Qr(4986),
      SS = Qr(1929),
      QS = Qr(10070),
      ZS = Qr(1912),
      WS = Qr(10076),
      aS = Qr(2295),
      jS = Qr(10081);
    var IS = Qr(5479),
      fS = Qr(10085),
      ES = Qr(1364),
      pS = Qr(1879),
      xS = Qr(712),
      mS = Qr(10088),
      NS = Qr(804),
      US = Qr(1783);

    function tS() {
      const rr = Wr.c.get("clientEscMenuOptions");
      fr.gameBridge.send("setLookSensitivity", Wr.c.get("isTouchScreen") ? (0, NS.u)(rr) : rr.mouseSensitivity)
    }
    const hS = 45e3;

    function zS(rr) {
      if (null === rr || void 0 === rr || !rr.isError()) return !1;
      const Sr = rr.asError();
      return Sr.code === tr.i.REQUEST_TO_MATCHMAKING && !(0, pS.c)(Sr.debugResult.error)
    }

    function YS(rr) {
      return !0 === (null === rr || void 0 === rr ? void 0 : rr.isError()) && !0 === rr.asError().debugResult.serverWaitEnded
    }
    async function nS(rr, Sr, Qr, Zr) {
      const jr = (0, IS.R)(Sr);
      async function Ir(rr, Sr, Qr, Ir) {
        if (Ir.aborted) return null;
        null === Wr.c.get("gameEntrySource") && (0, Wr.m)("directPlayUrl"), xS.I && (0, kr.loadWasmPlay)().catch((() => {})), Wr.c.set({
          gameState: "findingLobby"
        }), zr.i.Jp("loadingScreenState", "loadingPage:findingLobby");
        const Er = await hr.userContextManager.getCurrentUserContext();
        fr.gameBridge.send("setRequestedGame", {
          gameNameWithVariation: Sr,
          discordContext: rr instanceof Pr.i ? rr.getSerialisableParams() : null
        });
        const pr = Ar.e.playInputAt();
        (0, SS.f)(null !== pr && void 0 !== pr ? pr : performance.now()), Zr.fromTap = null !== pr, Zr.mark("phase_join_started");
        const xr = await async function(rr, Sr, Qr, Zr, Wr, jr, Ir) {
          try {
            await (0, US.h)(ar.reqLibsLoadedPromise, hS, "Required libraries timed out")
          } catch (fr) {
            const rr = fr instanceof US.d ? `Required libraries still loading after ${hS/1e3} s: ${(0,ar.requiredLibsPending)().join(", ")}` : fr.toString();
            return Yr.e.errorWithCode(rr, tr.i.LOAD_REQUIRED_LIBS, {
              error: fr,
              severity: "medium"
            })
          }
          return zr.i.Jp("matchmakeAndPlayStepCompleted", {
            step: tr.i.LOAD_REQUIRED_LIBS,
            totalSubSteps: 1
          }), Ir.mark("phase_libs"), (0, ar.matchmakeAndPlayMaybeUnloaded)(rr, Sr, Qr, Zr, Wr, jr, Ir)
        }(rr, Sr, Qr, Er, Ir, jr, Zr), mr = xr.isError() ? xr.asError() : null;
        if (Ir.aborted) return mr && (0, WS.f)(xr), fr.gameBridge.send("leaveGame", {
          reloadPath: null
        }), null;
        if (null !== mr && void 0 !== mr && mr.debugResult.Rr) return console.log("Join cancelled:", mr.message), null;
        if (mr) return xr;
        const {
          gameNameWithVariation: Nr,
          lobbyName: Ur
        } = xr.getValue();
        return tS(), (0, ES.U)().setGameViewShown(!0), Er.recordJoin(Nr, Ur), (0, Kr.E)(), xr
      }
      return jr && (0, Wr.m)("updateRejoin"), (0, aS.m)((async Wr => {
        Zr.mark("phase_prepared");
        try {
          var ar;
          let Zr = rr,
            fr = await Ir(Zr, Sr, Qr, Wr);
          for (let rr = 0; jr && rr < IS.k; rr++) {
            if (YS(fr)) {
              if ("string" !== typeof Zr || !(0, qr.M)(Zr)) break;
              rr = IS.k - 1, (0, fS.g)(Wr)
            }
            if (!zS(fr) || !await (0, IS.S)((0, IS.w)(rr), Wr)) break;
            Zr = (0, IS.y)(Zr, rr + 1, "string" === typeof Zr && (0, qr.M)(Zr)), fr = await Ir(Zr, Sr, Qr, Wr)
          }
          return null !== (ar = fr) && void 0 !== ar && ar.isError() && (0, WS.f)(fr), fr
        } catch (Er) {
          if ((0, ZS.reportClientError)("matchmake_failed", Er, "unexpected"), fr.gameBridge.send("leaveGame", {
              reloadPath: Wr.aborted ? null : "/"
            }), Wr.aborted) return null;
          throw Er
        }
      }), (async rr => {
        var Qr;
        if (jr) return;
        const Zr = (0, Kr.y)();
        null !== Zr && (await Zr, rr.aborted) || (null !== (Qr = Xr.c[Sr]) && void 0 !== Qr && Qr.playAdBeforeMatchmaking ? (Ar.e.skipPlayWait(), await new Promise((rr => {
          (0, Kr.Y)((() => {
            rr(!0)
          }), "video_start")
        }))) : (0, Kr.Y)((() => {}), "video_start"))
      }))
    }

    function eS() {
      const {
        t: rr
      } = (0, xr.E)(), Sr = (0, Er.useNavigatePreserveSearch)(), Qr = (0, Zr.s)(), Pr = (0, Zr.w)(), Rr = (0, jr.useRef)({
        t: rr,
        navigate: Sr
      });
      Rr.current = {
        t: rr,
        navigate: Sr
      };
      const Cr = (0, jr.useRef)("");
      Cr.current = Qr.pathname + Qr.search;
      const {
        gameState: Mr,
        clientEscMenuOptions: Gr
      } = (0, Wr.n)(["gameState", "clientEscMenuOptions"]), Ar = (0, jr.useRef)(null), ir = (0, jr.useRef)(!1), wr = (0, jr.useRef)(!1), [br, Dr] = (0, jr.useState)(0);
      var dr;
      (0, Ir.c)(ES.d, (() => {
        wr.current = !0, Dr((rr => rr + 1))
      })), (0, jr.useEffect)((() => () => {
        zr.i.Jp("leftPlayPage")
      }), []), (0, aS.q)(), (0, aS.s)(), dr = xS.I, (0, jr.useEffect)((() => {
        if (!dr) return;
        let rr = !0;
        return (0, kr.loadWasmPlay)().then((Sr => {
          rr && or(Sr)
        })).catch((() => {})), () => {
          var Sr;
          rr = !1, cr.wanted = !1, null === (Sr = Fr) || void 0 === Sr || Sr.setGamePackConfirm(null), Fr = null
        }
      }), [dr]), (0, jr.useEffect)((() => {
        var rr, Sr, Zr;
        (0, ar.needGameClientNow)();
        const jr = wr.current;
        wr.current = !1;
        const {
          t: Ir,
          navigate: xr
        } = Rr.current, yr = (0, ur.c)(Pr, Qr.search);
        if (Pr.lobbyName && !new URLSearchParams(Qr.search).has("lobby")) return void xr((0, lr.c)(yr.gameNameWithVariation, yr.lobbyName), {
          replace: !0
        });
        let Mr = Promise.resolve({
          shouldMatchmake: !0
        });
        const Gr = new AbortController;
        if ("/play/discord-custom-lobby" === Qr.pathname) {
          const rr = Wr.c.get("discordContext");
          if (!rr) return void xr("/");
          Mr = Ur.c.setupDiscordLobby(rr, "classic").then((() => ({
            shouldMatchmake: !0,
            discordContext: rr
          }))).catch((Sr => (console.error("Failed to setup discord lobby", Sr), {
            shouldMatchmake: !1,
            discordContext: rr
          })))
        } else if (!yr.gameNameWithVariation || !(0, qr.J)(yr.gameNameWithVariation)) return console.error(`Valid game name with variation is required. Received ${yr.gameNameWithVariation}`), void xr(-1);
        const Fr = Ar.current;
        if (!jr && null !== Fr && yr.gameNameWithVariation === Fr.gameNameWithVariation && yr.lobbyName === Fr.lobbyName) return;
        if (fr.gameBridge.latest("connectedGame").replay) return void(0, aS.k)(null);
        if ("releaseCountdown" === (null === (rr = (0, Lr.f)(yr.gameNameWithVariation)) || void 0 === rr ? void 0 : rr.type)) return console.error(`Game hasn't been released yet: ${yr.gameNameWithVariation}`), void xr(-1);
        const br = ir.current;
        ir.current = !1, (0, Kr.z)(), Wr.c.set({
          gameState: "loadingScreen"
        });
        const Dr = function() {
            cr.wanted = !1;
            const rr = {
              wanted: !0
            };
            return cr = rr, () => rr.wanted
          }(),
          dr = new QS.b,
          SS = yr.gameNameWithVariation,
          ZS = void 0 !== SS && (0, Hr.l)(SS);
        let WS = Promise.resolve();
        if (SS && (xS.I || ZS)) {
          const rr = xS.I ? Promise.all([(0, kr.loadWasmPlay)(), hr.userContextManager.getCurrentUserContext()]).then((rr => {
            let [Sr, Qr] = rr;
            if (dr.mark("phase_pack_begin"), Dr()) return or(Sr), Sr.packForGame(SS, Qr, Dr)
          })) : async function(rr, Sr) {
            await gr.d.indexedDbValuesAreLoaded();
            const Qr = await hr.userContextManager.getCurrentUserContext(),
              Zr = (0, Hr.q)(rr);
            let Wr;
            try {
              Wr = await Jr.c.getGame(Qr, Zr, !0)
            } catch (fr) {
              return void console.error("Failed to get game", fr)
            }
            if (null !== Sr && void 0 !== Sr && Sr.aborted) return;
            const ar = Wr.customTexturePackKey;
            if (!ar) return void(gr.d.isUsingTemporaryTexturePack() && ((0, nr.reloadBloxd)(), await new Promise((() => {}))));
            if (gr.d.isUsingTemporaryTexturePack() && gr.d.getTemporaryTexturePackSource() === ar) return;
            const jr = pr.NotificationProvider.showCustomPopup({
                body: rr => (0, Vr.jsx)(sr, {
                  schematicId: Zr,
                  texturePackKey: ar,
                  onClose: rr
                }),
                disableExitButton: !0,
                disablePressBackgroundToClose: !0
              }),
              Ir = () => {
                jr.tearDownNotification()
              };
            null === Sr || void 0 === Sr || Sr.addEventListener("abort", Ir, {
              once: !0
            }), await jr.getResult(), null === Sr || void 0 === Sr || Sr.removeEventListener("abort", Ir)
          }(SS, Gr.signal), Sr = rr.catch((rr => {
            console.error("Failed to check for custom texture pack", rr)
          })).then((() => {
            dr.mark("phase_pack")
          }));
          WS = Sr;
          const Qr = xS.I && !ZS ? (0, kr.loadWasmPlay)().catch((() => {})) : Sr,
            Zr = Mr;
          Mr = Qr.then((() => Zr))
        }
        xS.I && (0, mS.e)(WS);
        const IS = {
          wasm: xS.I,
          game: yr.gameNameWithVariation,
          custom: ZS,
          lobbyName: null !== (Sr = yr.lobbyName) && void 0 !== Sr ? Sr : null,
          direct: null !== yr.directJoinVmUrl && void 0 !== yr.directJoinVmUrl,
          discord: "/play/discord-custom-lobby" === Qr.pathname,
          adBeforeMatchmaking: void 0 !== SS && !0 === (null === (Zr = Xr.c[SS]) || void 0 === Zr ? void 0 : Zr.playAdBeforeMatchmaking),
          afterAnother: null !== Ar.current || (0, aS.e)()
        };
        (0, jS.j)(null);
        const fS = !(ES = IS).wasm || void 0 === ES.game || ES.custom || ES.direct || ES.discord || ES.adBeforeMatchmaking || ES.afterAnother ? null : () => {
          ! function(rr, Sr, Qr) {
            (0, jS.j)({
              key: (0, jS.f)(rr, Sr),
              settled: Promise.all([ar.matchmakingLibrariesPromise, hr.userContextManager.getCurrentUserContext()]).then((Zr => {
                let [Wr, ar] = Zr;
                if (void 0 === Wr.matchmakeForAhead) throw new Error("the matchmaking chunk has no matchmaking ahead");
                return Qr.mark("phase_ahead_sent"), Wr.matchmakeForAhead(rr, Sr, ar).then((rr => (Qr.mark("phase_ahead_answered", rr.at), rr)))
              })).catch((rr => ({
                result: Yr.e.errorWithCode(String(rr), tr.i.REQUEST_TO_MATCHMAKING, {
                  error: rr,
                  severity: "medium"
                }),
                at: performance.now()
              })))
            })
          }(IS.lobbyName, IS.game, dr)
        };
        var ES;
        const NS = null !== Ar.current;
        Ar.current = null, (0, aS.k)(null);
        const tS = () => {
          br ? (0, Er.navigateToHomePage)() : (ir.current = NS, xr(-1))
        };
        let hS = !1;
        const zS = Qr.pathname + Qr.search,
          YS = () => !hS && Cr.current === zS;
        return (0, jS.c)(Mr, fS, (rr => {
          let {
            shouldMatchmake: Sr,
            discordContext: Qr
          } = rr;
          YS() && (dr.mark("phase_gate"), Sr ? nS(null !== Qr && void 0 !== Qr ? Qr : yr.lobbyName, Qr ? "classic" : yr.gameNameWithVariation, yr.directJoinVmUrl, dr).then((rr => {
            if (null !== rr && YS())
              if (rr.isError()) {
                var Sr, Qr;
                const Zr = rr.asError(),
                  ar = null !== (Sr = Zr.debugResult.severity) && void 0 !== Sr ? Sr : "high";
                if (zr.i.Jp("joinFailed", {
                    step: null !== (Qr = Zr.code) && void 0 !== Qr ? Qr : null,
                    severity: ar
                  }), (0, pS.c)(Zr.debugResult.error)) return void pS.f.reload();
                if (Zr.code === tr.i.SHADER_PACK) return void(0, rS.b)(Zr.message, xr);
                const jr = Wr.c.get("gameEntrySource"),
                  Er = Zr.code === tr.i.INITIALISE_WEBGL ? (0, Tr.b)() : null,
                  {
                    error: Ur
                  } = Zr.debugResult;
                let hr;
                if ((0, Nr.e)(Ir, Zr)) hr = Promise.resolve(!1);
                else if (null !== Er) hr = (0, Tr.m)(Er);
                else if (Ur instanceof Or.l) hr = (0, vr.g)(Ur);
                else {
                  let rr;
                  switch (ar) {
                    case "low":
                      rr = "face-diagonal-mouth";
                      break;
                    case "medium":
                      rr = "face-worried";
                      break;
                    case "high":
                      rr = "face-dizzy"
                  }
                  const Sr = Ur instanceof US.d;
                  let Qr = (0, mr.f)(Zr.message);
                  Sr ? Qr = Ir("general:gameFilesStalled") : Zr.debugResult.gameServerUnreachable && (Qr = Ir((0, er.isMobile)() ? "general:gameServerUnreachableMobile" : "general:gameServerUnreachable"));
                  hr = pr.NotificationProvider.showPromptPopup({
                    icon: rr,
                    title: tr.y[Zr.code],
                    subtitle: (0, Vr.jsxs)(Vr.Fragment, {
                      children: [Qr, Ur instanceof Error && !Sr && (0, Vr.jsx)("div", {
                        style: {
                          fontSize: "0.9rem",
                          paddingTop: "1rem"
                        },
                        children: (0, Vr.jsx)(Br.e, {
                          errorString: Ur.stack
                        })
                      })]
                    }),
                    confirmText: Ir("general:tryAgain"),
                    cancelText: Ir("general:cancel")
                  }).getResult().then((rr => !0 === rr))
                }
                hr.then((rr => {
                  if (rr) {
                    (0, Wr.m)(jr);
                    const rr = (0, lr.c)(yr.gameNameWithVariation, yr.lobbyName);
                    "low" === ar ? xr(rr) : (0, nr.reloadBloxd)(rr)
                  }
                })), fr.gameBridge.send("leaveGame", {
                  reloadPath: "/"
                }), tS()
              } else {
                const {
                  gameNameWithVariation: Sr,
                  lobbyName: Qr
                } = rr.getValue();
                Ar.current = {
                  gameNameWithVariation: Sr,
                  lobbyName: Qr
                };
                const Zr = (0, lr.c)(Sr, Qr);
                xr(Zr, {
                  replace: !0
                })
              }
          })).catch((rr => {
            if (!YS()) return;
            zr.i.Jp("joinFailed", {
              step: null,
              severity: "unexpected"
            });
            pr.NotificationProvider.showPromptPopup({
              icon: "face-dizzy",
              title: "Unexpected Error",
              subtitle: (0, Vr.jsxs)(Vr.Fragment, {
                children: [Ir("homePage:pleaseCopyError"), (0, Vr.jsx)("div", {
                  style: {
                    fontSize: "0.9rem",
                    paddingTop: "1rem"
                  },
                  children: (0, Vr.jsx)(Br.e, {
                    errorString: rr.stack
                  })
                })]
              }),
              confirmText: Ir("general:tryAgain"),
              cancelText: Ir("general:cancel")
            }).getResult().then((rr => {
              !0 === rr && (0, nr.reloadBloxd)((0, lr.c)(yr.gameNameWithVariation, yr.lobbyName))
            })), tS()
          })) : xr(-1))
        }), YS), () => {
          hS = !0, Gr.abort()
        }
      }), [Pr, Qr.search, Qr.pathname, br]), (0, jr.useEffect)((() => {
        Gr.disableFullscreen && (0, yr.g)() ? (0, yr.m)() : !Gr.disableFullscreen && (0, yr.k)() && (0, yr.u)({
          automatic: !0
        })
      }), [Mr, Gr]), (0, jr.useEffect)((() => {
        "inGame" === Mr && tS()
      }), [Mr, Gr]), (0, jr.useEffect)((() => {
        "inGame" !== Mr && Wr.c.set({
          openInGameMenuName: null
        })
      }), [Mr]);
      const SS = function(rr) {
        const Sr = (0, Wr.k)(rr),
          [Qr, Zr] = (0, jr.useState)(0),
          [ar, fr] = (0, jr.useState)(!1);
        (0, Ir.c)("gameJoined", (() => {
          (0, Wr.k)(Wr.c.get("gameState")) && (Zr((rr => rr + 1)), fr(!0))
        })), (0, jr.useEffect)((() => {
          Sr || fr(!1)
        }), [Sr]);
        const Er = "inGame" === rr;
        return {
          mounted: Er || Sr && ar,
          shown: Er,
          key: Qr
        }
      }(Mr);
      return (0, Vr.jsx)(Vr.Fragment, {
        children: SS.mounted && (0, Vr.jsx)(ar.InGameUi, {
          shown: SS.shown
        }, SS.key)
      })
    }
  },
  5943: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Wr
    });
    var Zr = Qr(1262);
    async function Wr(rr) {
      const Sr = await fetch(`${Zr.clientSideServerUrls.s3Url}/${rr}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === Sr.status || 403 === Sr.status) return null;
      if (!Sr.ok) throw new Error(`Failed to download the texture pack (${Sr.status})`);
      return await Sr.json()
    }
  },
  10055: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => hr,
      f: () => zr
    });
    var Zr = Qr(161),
      Wr = Qr(208),
      ar = Qr(1127),
      jr = Qr(1133),
      Ir = Qr(1279),
      fr = Qr(2089),
      Er = Qr(3312),
      pr = Qr(1629),
      xr = Qr(1475),
      mr = Qr(1187),
      Nr = Qr(10062),
      Ur = Qr(1644),
      tr = Qr(1671);

    function hr(rr, Sr) {
      const Qr = !0 === Sr.debugResult.gameRefused,
        ar = Qr || Sr.code === Zr.i.REQUEST_TO_MATCHMAKING ? (0, Nr.e)(Sr.message) : null;
      if (null !== ar) return Kr(rr, rr((0, Nr.g)(ar)), rr(Nr.f[ar])), !0;
      if (Qr) return async function(rr) {
        const {
          gameNameWithVariation: Sr,
          lobbyName: Qr,
          shownLobbyName: Zr
        } = fr.gameBridge.latest("connectedGame"), Wr = "classic" === Sr && (0, Ir.F)(Qr) ? Zr : await (0, Er.e)(rr, Sr, Qr);
        return "" !== Wr ? rr("general:cantJoinGame", {
          game: Wr
        }) : rr("general:cantJoinThisGame")
      }(rr).then((Qr => {
        Kr(rr, Qr, Sr.message)
      })), !0;
      const {
        joinFailure: jr
      } = Sr.debugResult, pr = "refused" === (null === jr || void 0 === jr ? void 0 : jr.at) ? jr.code : null;
      return pr === Wr.e.schematicNotPublished.code ? (async function(rr, Sr) {
        const Qr = Yr(),
          Zr = await er(Qr);
        if (null === Zr || Zr.gamePublished) return void Kr(rr, rr("general:cantJoinThisGame"), Sr);
        await nr(rr, "rocket-launch", rr("studio:gameNotPublishedTitle", {
          game: Zr.name
        }), rr("studio:publishInStudio"), Qr)
      }(rr, Sr.message), !0) : (pr === Wr.e.schematicBanned.code || pr === Wr.e.customGameTakenDown.code) && (er(Yr()).then((Sr => {
        zr(rr, Sr)
      })), !0)
    }

    function zr(rr, Sr) {
      !0 !== (null === Sr || void 0 === Sr ? void 0 : Sr.takenDown) ? Kr(rr, rr("general:cantJoinThisGame"), Wr.e.customGameTakenDown.text) : nr(rr, "lock", rr("studio:gameTakenDownTitle", {
        game: Sr.name
      }), rr("studio:viewInStudio"), Sr.schematicId)
    }

    function Yr() {
      return (0, ar.q)(fr.gameBridge.latest("connectedGame").gameNameWithVariation)
    }
    async function nr(rr, Sr, Qr, Zr, Wr) {
      !0 === await xr.NotificationProvider.showPromptPopup({
        icon: Sr,
        title: Qr,
        confirmText: Zr,
        cancelText: rr("general:cancel")
      }).getResult() && (0, Ur.navigatePreserveSearch)((0, tr.r)((0, jr.b)(Wr), "manage"))
    }
    async function er(rr) {
      try {
        return await pr.c.getGame(await mr.userContextManager.getCurrentUserContext(), rr, !0)
      } catch (Sr) {
        return (0, pr.g)(Sr) || console.error(`Failed to get game ${rr}`, Sr), null
      }
    }

    function Kr(rr, Sr, Qr) {
      xr.NotificationProvider.showPromptPopup({
        icon: "lock",
        title: Sr,
        subtitle: Qr,
        confirmText: rr("general:ok"),
        cancelText: ""
      })
    }
  },
  10073: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => jr
    });
    var Zr = Qr(1433),
      Wr = Qr(1279),
      ar = Qr(688);

    function jr(rr) {
      return rr = function(rr, Sr) {
        var Qr;
        const Zr = new URLSearchParams(Sr),
          Wr = Zr.get("lobby"),
          ar = Zr.get("vm"),
          jr = null !== (Qr = Wr) && void 0 !== Qr ? Qr : rr.lobbyName,
          Ir = null !== ar && void 0 !== ar ? ar : rr.directJoinVmUrl;
        if (jr === rr.lobbyName && Ir === rr.directJoinVmUrl) return rr;
        return {
          ...rr,
          lobbyName: jr,
          directJoinVmUrl: Ir
        }
      }(rr, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), rr = function(rr) {
        if ((0, ar.L)(rr.directJoinVmUrl)) return rr;
        const Sr = (0, Wr.cb)(rr.directJoinVmUrl);
        null === Sr && (rr.directJoinVmUrl = void 0);
        return rr
      }(rr = function(rr) {
        if ((0, ar.L)(rr.gameNameWithVariation)) return rr;
        return rr.gameNameWithVariation = (0, Zr.g)(rr.gameNameWithVariation), rr
      }(rr))
    }
  },
  10070: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Wr,
      c: () => jr
    });
    var Zr = Qr(194);
    class Wr {
      constructor() {
        this.marks = new Map, this.fromTap = !1
      }
      mark(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        this.marks.has(rr) || this.marks.set(rr, Sr)
      }
      marked() {
        return Zr.Z.flatMap((rr => {
          var Sr;
          const Qr = null !== (Sr = this.marks.get(rr)) && void 0 !== Sr ? Sr : ar.marks.get(rr);
          return void 0 === Qr ? [] : [
            [rr, Qr]
          ]
        }))
      }
    }
    const ar = new Wr;

    function jr(rr) {
      ar.mark(rr)
    }
  },
  10088: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => ar,
      e: () => Wr
    });
    let Zr = Promise.resolve();

    function Wr(rr) {
      Zr = rr
    }

    function ar() {
      return Zr
    }
  },
  10081: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Ir,
      f: () => Wr,
      j: () => ar,
      m: () => jr
    });
    let Zr = null;

    function Wr(rr, Sr) {
      return `${Sr}\n${null!==rr&&void 0!==rr?rr:""}`
    }

    function ar(rr) {
      Zr = rr
    }

    function jr(rr) {
      const Sr = Zr;
      return Zr = null, null !== Sr && Sr.key === rr ? Sr.settled : null
    }

    function Ir(rr, Sr, Qr, Zr) {
      let Wr = !1;
      const ar = () => {
        null !== Sr && !Wr && Zr() && (Wr = !0, Sr())
      };
      null !== Sr && setTimeout(ar, 0), rr.then((rr => {
        ar(), Qr(rr)
      }))
    }
  },
  10068: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      importClientLoad: () => xr,
      loadWasmPlay: () => Ur,
      loadWasmPlayAhead: () => tr,
      loadWasmPreviews: () => hr
    });
    var Zr = Qr(4354),
      Wr = Qr(3216),
      ar = Qr(2304),
      jr = Qr(5411),
      Ir = Qr(4759),
      fr = Qr(5428),
      Er = Qr(10070);
    let pr = null;

    function xr() {
      return Promise.all([Qr.e(91), Qr.e(105), Qr.e(241), Qr.e(158), Qr.e(245), Qr.e(161), Qr.e(256), Qr.e(71)]).then((() => Qr(42541)))
    }

    function mr() {
      return Promise.all([Qr.e(88), Qr.e(91), Qr.e(105), Qr.e(241), Qr.e(158), Qr.e(245), Qr.e(223), Qr.e(161), Qr.e(251), Qr.e(243), Qr.e(103), Qr.e(247), Qr.e(256), Qr.e(76)]).then((() => Qr(42720)))
    }

    function Nr() {
      Promise.all([Qr.e(85), Qr.e(89), Qr.e(86), Qr.e(87), Qr.e(88), Qr.e(105), Qr.e(102), Qr.e(307), Qr.e(127), Qr.e(281), Qr.e(255), Qr.e(247), Qr.e(55)]).then((() => Qr(42871))).catch((() => {}))
    }

    function Ur() {
      return jr.e.cancelDownloadForJoin(), (0, Ir.d)(), (0, Wr.g)(), (0, fr.e)(), (0, ar.j)(), Nr(), xr().then((rr => {
        let {
          startJoinLoad: Sr
        } = rr;
        Sr()
      }), (() => {})), pr ??= mr().then((rr => ((0, Er.c)("phase_chunk"), rr.startWasmPlay(), (0, Er.c)("phase_start"), rr.followPageUiPack((rr => {
        Zr.d.showGamePack(rr)
      })), rr)), (rr => {
        throw pr = null, rr
      })), pr
    }

    function tr() {
      return Nr(), Qr.e(132).then((() => Qr(42906))).catch((() => {})), mr().then((() => {
        (0, Er.c)("phase_chunk")
      }))
    }

    function hr() {
      return mr().then((rr => {
        rr.startWasmPreviews(), rr.prefetchWasmPreviews()
      }))
    }
  },
  10076: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Er,
      f: () => pr
    });
    var Zr = Qr(161),
      Wr = Qr(1912),
      ar = Qr(4448),
      jr = Qr(4988),
      Ir = Qr(1879);
    const fr = new WeakSet;

    function Er(rr) {
      return !0 !== rr.Rr && !(0, Ir.c)(rr.error)
    }

    function pr(rr) {
      const Sr = rr.asError(),
        {
          debugResult: Qr
        } = Sr;
      if (fr.has(Qr) || !Er(Qr)) return;
      fr.add(Qr), console.log("Failed to join lobby:", Sr.message);
      const Ir = "timedOut" === Qr.gameServerUnreachable;
      (0, Wr.reportClientError)("matchmake_failed", Sr.message, Ir ? "CONNECT_TO_GAME_SERVER_TIMEOUT" : Zr.i[Sr.code]);
      const {
        error: pr
      } = Qr;
      if (pr instanceof ar.l && "default" !== pr.packSource) {
        const rr = (0, jr.i)("js", "game" === pr.packSource ? "game" : "page", (0, jr.m)(pr));
        (0, Wr.reportClientError)("texture_pack", pr, rr)
      }
    }
  },
  10062: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => ar,
      d: () => jr,
      e: () => Ir,
      f: () => Er,
      g: () => fr
    });
    var Zr = Qr(208),
      Wr = Qr(5384);

    function ar(rr) {
      return jr(rr) === Zr.e.gameOrPluginOnPlayerAuthRejected.code
    }

    function jr(rr) {
      return "object" === typeof rr && null !== rr ? rr.code : void 0
    }

    function Ir(rr) {
      var Sr;
      return null !== (Sr = Object.keys(Wr.b).find((Sr => Wr.b[Sr] === rr))) && void 0 !== Sr ? Sr : null
    }

    function fr(rr) {
      return "notWhitelisted" === rr ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const Er = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  10047: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Er,
      f: () => fr
    });
    var Zr = Qr(379);

    function Wr(rr) {
      if (!rr.startsWith("{")) return rr;
      let Sr;
      try {
        Sr = JSON.parse(rr)
      } catch {
        return rr
      }
      return function(rr) {
        if (null === (0, Zr.te)(rr)) return !1;
        const {
          params: Sr
        } = rr;
        return void 0 === Sr || "object" === typeof Sr && null !== Sr && Object.values(Sr).every((rr => "string" === typeof rr))
      }(Sr) ? Sr : rr
    }
    var ar = Qr(1251),
      jr = Qr(1304);

    function Ir(rr) {
      return (0, ar.z)(jr.f.get().getCurrentLanguageCode(), rr.translationKey, rr.params)
    }

    function fr(rr) {
      const Sr = Wr(rr);
      return "string" === typeof Sr ? Sr : Ir(Sr)
    }

    function Er(rr) {
      const Sr = Wr(rr);
      return "string" === typeof Sr ? Sr : Ir({
        translationKey: "moderation:kicked",
        params: {
          reason: Ir(Sr)
        }
      })
    }
  },
  10085: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => jr,
      g: () => ar,
      j: () => Ir
    });
    var Zr = Qr(1295);
    const Wr = new WeakSet;

    function ar(rr) {
      Wr.add(rr)
    }
    class jr {
      constructor(rr, Sr) {
        this.joinSignal = rr, this.onWaiting = Sr, this.deadline = null, this.waits = 0, Wr.has(rr) && (this.deadline = performance.now())
      }
      async waitToAskAgain(rr) {
        if (this.joinSignal.aborted) return "left";
        const Sr = function(rr, Sr) {
            let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
            const Zr = Math.min(Math.max(rr * 2 ** Sr, 2e3), 15e3);
            return Math.round(Zr * (.75 + .5 * Qr()))
          }(rr, this.waits),
          Qr = performance.now();
        return this.deadline ??= Qr + 18e4, Qr + Sr > this.deadline ? "over" : (this.waits++, this.onWaiting(!0), await
          function(rr, Sr) {
            if (Sr.aborted) return Promise.resolve(!1);
            return new Promise((Qr => {
              const Zr = () => {
                  clearTimeout(Wr), Qr(!1)
                },
                Wr = setTimeout((() => {
                  Sr.removeEventListener("abort", Zr), Qr(!0)
                }), rr);
              Sr.addEventListener("abort", Zr, {
                once: !0
              })
            }))
          }(Sr, this.joinSignal) ? "again" : "left")
      }
      placed() {
        this.waits > 0 && this.onWaiting(!1)
      }
    }
    async function Ir(rr, Sr, Qr) {
      let Wr = rr;
      for (;;) {
        if (!Wr.result.isError()) return Qr.placed(), Wr;
        const rr = Wr.result.asError(),
          {
            retryAfterMs: ar,
            ...jr
          } = rr.debugResult;
        if (void 0 === ar) return Wr;
        const Ir = await Qr.waitToAskAgain(ar);
        if ("left" === Ir) return null;
        if ("over" === Ir) {
          return {
            result: Zr.e.errorWithCode(rr.message, rr.code, {
              ...jr,
              serverWaitEnded: !0
            }),
            at: Wr.at
          }
        }
        Wr = await Sr()
      }
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);