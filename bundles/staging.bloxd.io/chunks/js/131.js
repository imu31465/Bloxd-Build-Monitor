export const id = 131;
export const ids = [131, 186];
export const modules = {
  10079: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      default: () => wO
    });
    var Wd = md(1650),
      Fd = md(29),
      Rd = md(5329),
      Xd = md(66),
      Kd = md(1566);
    var hd = md(2092),
      vd = md(1641),
      Qd = md(1462),
      td = md(1238),
      od = md(10081),
      Nd = md(10090),
      qd = md(5255),
      Hd = md(180),
      yd = md(1189),
      bd = md(32),
      Td = md(1304),
      pd = md(1890),
      Yd = md(107),
      gd = md(1406),
      wd = md(1549),
      Ed = md(5185),
      Jd = md(4994),
      Ud = md(4953),
      xd = md(4458),
      Bd = md(3301),
      Sd = md(1424),
      sd = md(870),
      ud = md(1289),
      Vd = md(1122),
      Ad = md(1286),
      rd = md(4518),
      Gd = md(4365),
      nd = md(1466),
      Ld = md(1436),
      Pd = md(5889),
      zd = md(10097),
      cd = md(4056),
      jd = md(1341);

    function Dd(dd) {
      let {
        onApply: Od,
        onSkip: md
      } = dd;
      const {
        t: Wd
      } = (0, td.G)();
      return (0, Xd.useEffect)((() => {
        cd.g.skipPlayWait()
      }), []), (0, jd.jsx)(nd.j, {
        icon: "download",
        title: "customTexturePack:downloadTitle",
        subtitle: (0, jd.jsxs)("div", {
          className: "CustomTexturePackDownloaderSubtitleText",
          children: [Wd("customTexturePack:downloadPrompt"), (0, jd.jsx)("div", {
            className: "CustomTexturePackDownloaderWarningText",
            children: Wd("customTexturePack:authorWarning")
          }), (0, jd.jsx)("div", {
            className: "CustomTexturePackDownloaderSecondaryText",
            children: Wd("customTexturePack:existingPackSaved")
          })]
        }),
        confirm: {
          text: "general:apply",
          onClick: Od
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: md
        }
      })
    }
    async function ed() {
      let dd = !1;
      const Od = Qd.NotificationProvider.showCustomPopup({
        body: Od => (0, jd.jsx)(Dd, {
          onApply: () => {
            dd = !0, Od()
          },
          onSkip: Od
        }),
        disableExitButton: !0,
        disablePressBackgroundToClose: !0
      });
      return await Od.getResult(), dd
    }
    let Id = {
      wanted: !1
    };
    let ld = null;

    function Cd(dd) {
      dd.setGamePackConfirm(ed), ld = dd
    }
    var Zd = md(4717),
      kd = md(1627),
      fd = md(46),
      Md = md(4470);

    function dO(dd) {
      let {
        schematicId: Od,
        texturePackKey: md,
        onClose: Wd
      } = dd;
      const [Fd, Rd] = (0, Xd.useState)("prompt"), [Kd, hd] = (0, Xd.useState)(null), vd = (0, Zd.b)();

      function Qd() {
        Wd()
      }
      return "prompt" === Fd ? (0, jd.jsx)(Dd, {
        onApply: async function() {
          Rd("downloading");
          try {
            const dd = await async function(dd, Od) {
              const md = await (0, Pd.b)(Od);
              if (md) return {
                pack: md,
                key: Od
              };
              const Wd = await yd.userContextManager.getCurrentUserContext(),
                Fd = (await kd.e.getGame(Wd, dd, !0)).customTexturePackKey;
              if (!Fd) return null;
              const Rd = await (0, Pd.b)(Fd);
              if (!Rd) throw new Error("The texture pack could not be found");
              return {
                pack: Rd,
                key: Fd
              }
            }(Od, md);
            if (!vd.current) return;
            if (!dd) return void Wd();
            if ((0, rd.i)(dd.pack)) return void Rd("refused");
            const Fd = Gd.c.toJson(),
              Xd = Gd.c.isUsingTemporaryTexturePack() ? "customGame" : "player";
            if (Gd.c.setFromJson(dd.pack, "customGame"), await Gd.c.saveTemporaryTexturePack(dd.key), vd.current) return void(0, pd.reloadBloxd)();
            Gd.c.setFromJson(Fd, Xd), await (0, Md.o)(fd.h)
          } catch (dd) {
            hd(dd instanceof Error ? dd.message : String(dd)), Rd("error")
          }
        },
        onSkip: Qd
      }) : "downloading" === Fd ? (0, jd.jsx)(nd.j, {
        icon: "download",
        title: "customTexturePack:downloading",
        subtitle: (0, jd.jsx)("div", {
          className: "CustomTexturePackDownloaderLogoLoaderContainer",
          children: (0, jd.jsx)(Ld.c, {
            showFace: !0
          })
        })
      }) : "error" === Fd ? (0, jd.jsx)(nd.j, {
        icon: "face-worried",
        title: "customTexturePack:errorTitle",
        subtitle: Kd,
        confirm: {
          text: "customTexturePack:refreshPage",
          onClick: () => {
            window.location.reload()
          }
        },
        cancel: {
          text: "customTexturePack:skip",
          onClick: Qd
        }
      }) : "refused" === Fd ? (0, jd.jsx)(nd.j, {
        icon: "face-worried",
        title: "customTexturePack:cantApplyTitle",
        subtitle: "customTexturePack:gamePackHasExternalUrls",
        confirm: {
          text: "general:continue",
          onClick: Qd
        }
      }) : null
    }
    var OO = md(10113),
      mO = md(4943),
      WO = md(1930),
      FO = md(10106),
      RO = md(1916),
      XO = md(10121),
      KO = md(2311),
      hO = md(10126);
    var vO = md(5402),
      QO = md(10135),
      tO = md(1361),
      oO = md(1881),
      NO = md(732),
      qO = md(10143),
      HO = md(819),
      yO = md(1786);

    function bO() {
      const dd = Fd.e.get("clientEscMenuOptions");
      hd.gameBridge.send("setLookSensitivity", Fd.e.get("isTouchScreen") ? (0, HO.t)(dd) : dd.mouseSensitivity)
    }
    const TO = 45e3;

    function pO(dd) {
      if (null === dd || void 0 === dd || !dd.isError()) return !1;
      const Od = dd.asError();
      return Od.code === Hd.l.REQUEST_TO_MATCHMAKING && !(0, oO.c)(Od.debugResult.error)
    }

    function YO(dd) {
      return !0 === (null === dd || void 0 === dd ? void 0 : dd.isError()) && !0 === dd.asError().debugResult.serverWaitEnded
    }
    async function gO(dd, Od, md, Wd) {
      const Xd = (0, vO.Q)(Od);
      async function Kd(dd, Od, md, Kd) {
        if (Kd.aborted) return null;
        null === Fd.e.get("gameEntrySource") && (0, Fd.l)("directPlayUrl"), NO.G && (0, zd.loadWasmPlay)().catch((() => {})), Fd.e.set({
          gameState: "findingLobby"
        }), bd.j.lQ("loadingScreenState", "loadingPage:findingLobby");
        const vd = await yd.userContextManager.getCurrentUserContext();
        hd.gameBridge.send("setRequestedGame", {
          gameNameWithVariation: Od,
          discordContext: dd instanceof ud.h ? dd.getSerialisableParams() : null
        });
        const Qd = cd.g.playInputAt();
        (0, WO.g)(null !== Qd && void 0 !== Qd ? Qd : performance.now()), Wd.fromTap = null !== Qd, Wd.mark("phase_join_started");
        const td = await async function(dd, Od, md, Wd, Fd, Xd, Kd) {
          try {
            await (0, yO.k)(Rd.reqLibsLoadedPromise, TO, "Required libraries timed out")
          } catch (hd) {
            const dd = hd instanceof yO.f ? `Required libraries still loading after ${TO/1e3} s: ${(0,Rd.requiredLibsPending)().join(", ")}` : hd.toString();
            return Td.e.errorWithCode(dd, Hd.l.LOAD_REQUIRED_LIBS, {
              error: hd,
              severity: "medium"
            })
          }
          return bd.j.lQ("matchmakeAndPlayStepCompleted", {
            step: Hd.l.LOAD_REQUIRED_LIBS,
            totalSubSteps: 1
          }), Kd.mark("phase_libs"), (0, Rd.matchmakeAndPlayMaybeUnloaded)(dd, Od, md, Wd, Fd, Xd, Kd)
        }(dd, Od, md, vd, Kd, Xd, Wd), od = td.isError() ? td.asError() : null;
        if (Kd.aborted) return od && (0, XO.f)(td), hd.gameBridge.send("leaveGame", {
          reloadPath: null
        }), null;
        if (null !== od && void 0 !== od && od.debugResult.Ad) return console.log("Join cancelled:", od.message), null;
        if (od) return td;
        const {
          gameNameWithVariation: Nd,
          lobbyName: qd
        } = td.getValue();
        return bO(), (0, tO.V)().setGameViewShown(!0), vd.recordJoin(Nd, qd), (0, gd.U)(), td
      }
      return Xd && (0, Fd.l)("updateRejoin"), (0, KO.h)((async Fd => {
        Wd.mark("phase_prepared");
        try {
          var Rd;
          let Wd = dd,
            hd = await Kd(Wd, Od, md, Fd);
          for (let dd = 0; Xd && dd < vO.i; dd++) {
            if (YO(hd)) {
              if ("string" !== typeof Wd || !(0, Ad.K)(Wd)) break;
              dd = vO.i - 1, (0, QO.f)(Fd)
            }
            if (!pO(hd) || !await (0, vO.T)((0, vO.w)(dd), Fd)) break;
            Wd = (0, vO.y)(Wd, dd + 1, "string" === typeof Wd && (0, Ad.K)(Wd)), hd = await Kd(Wd, Od, md, Fd)
          }
          return null !== (Rd = hd) && void 0 !== Rd && Rd.isError() && (0, XO.f)(hd), hd
        } catch (vd) {
          if ((0, RO.reportClientError)("matchmake_failed", vd, "unexpected"), hd.gameBridge.send("leaveGame", {
              reloadPath: Fd.aborted ? null : "/"
            }), Fd.aborted) return null;
          throw vd
        }
      }), (async dd => {
        var md;
        if (Xd) return;
        const Wd = (0, gd.M)();
        null !== Wd && (await Wd, dd.aborted) || (null !== (md = sd.c[Od]) && void 0 !== md && md.playAdBeforeMatchmaking ? (cd.g.skipPlayWait(), await new Promise((dd => {
          (0, gd.nb)((() => {
            dd(!0)
          }), "video_start")
        }))) : (0, gd.nb)((() => {}), "video_start"))
      }))
    }

    function wO() {
      const {
        t: dd
      } = (0, td.G)(), Od = (0, vd.useNavigatePreserveSearch)(), md = (0, Wd.p)(), ud = (0, Wd.u)(), rd = (0, Xd.useRef)({
        t: dd,
        navigate: Od
      });
      rd.current = {
        t: dd,
        navigate: Od
      };
      const nd = (0, Xd.useRef)("");
      nd.current = md.pathname + md.search;
      const {
        gameState: Ld,
        clientEscMenuOptions: Pd
      } = (0, Fd.p)(["gameState", "clientEscMenuOptions"]), cd = (0, Xd.useRef)(null), Dd = (0, Xd.useRef)(!1), ed = (0, Xd.useRef)(!1), [Zd, fd] = (0, Xd.useState)(0);
      var Md;
      (0, Kd.f)(tO.e, (() => {
        ed.current = !0, fd((dd => dd + 1))
      })), (0, Xd.useEffect)((() => () => {
        bd.j.lQ("leftPlayPage")
      }), []), (0, KO.j)(), (0, KO.l)(), Md = NO.G, (0, Xd.useEffect)((() => {
        if (!Md) return;
        let dd = !0;
        return (0, zd.loadWasmPlay)().then((Od => {
          dd && Cd(Od)
        })).catch((() => {})), () => {
          var Od;
          dd = !1, Id.wanted = !1, null === (Od = ld) || void 0 === Od || Od.setGamePackConfirm(null), ld = null
        }
      }), [Md]), (0, Xd.useEffect)((() => {
        var dd, Od, Wd;
        (0, Rd.needGameClientNow)();
        const Xd = ed.current;
        ed.current = !1;
        const {
          t: Kd,
          navigate: td
        } = rd.current, wd = (0, OO.c)(ud, md.search);
        if (ud.lobbyName && !new URLSearchParams(md.search).has("lobby")) return void td((0, Sd.c)(wd.gameNameWithVariation, wd.lobbyName), {
          replace: !0
        });
        let Ld = Promise.resolve({
          shouldMatchmake: !0
        });
        const Pd = new AbortController;
        if ("/play/discord-custom-lobby" === md.pathname) {
          const dd = Fd.e.get("discordContext");
          if (!dd) return void td("/");
          Ld = qd.e.setupDiscordLobby(dd, "classic").then((() => ({
            shouldMatchmake: !0,
            discordContext: dd
          }))).catch((Od => (console.error("Failed to setup discord lobby", Od), {
            shouldMatchmake: !1,
            discordContext: dd
          })))
        } else if (!wd.gameNameWithVariation || !(0, Ad.H)(wd.gameNameWithVariation)) return console.error(`Valid game name with variation is required. Received ${wd.gameNameWithVariation}`), void td(-1);
        const ld = cd.current;
        if (!Xd && null !== ld && wd.gameNameWithVariation === ld.gameNameWithVariation && wd.lobbyName === ld.lobbyName) return;
        if (hd.gameBridge.latest("connectedGame").replay) return void(0, KO.f)(null);
        if ("releaseCountdown" === (null === (dd = (0, Bd.j)(wd.gameNameWithVariation)) || void 0 === dd ? void 0 : dd.type)) return console.error(`Game hasn't been released yet: ${wd.gameNameWithVariation}`), void td(-1);
        const Zd = Dd.current;
        Dd.current = !1, (0, gd.N)(), Fd.e.set({
          gameState: "loadingScreen"
        });
        const fd = function() {
            Id.wanted = !1;
            const dd = {
              wanted: !0
            };
            return Id = dd, () => dd.wanted
          }(),
          Md = new FO.d,
          WO = wd.gameNameWithVariation,
          RO = void 0 !== WO && (0, Vd.k)(WO);
        let XO = Promise.resolve();
        if (WO && (NO.G || RO)) {
          const dd = NO.G ? Promise.all([(0, zd.loadWasmPlay)(), yd.userContextManager.getCurrentUserContext()]).then((dd => {
            let [Od, md] = dd;
            if (Md.mark("phase_pack_begin"), fd()) return Cd(Od), Od.packForGame(WO, md, fd)
          })) : async function(dd, Od) {
            await Gd.c.indexedDbValuesAreLoaded();
            const md = await yd.userContextManager.getCurrentUserContext(),
              Wd = (0, Vd.p)(dd);
            let Fd;
            try {
              Fd = await kd.e.getGame(md, Wd, !0)
            } catch (hd) {
              return void console.error("Failed to get game", hd)
            }
            if (null !== Od && void 0 !== Od && Od.aborted) return;
            const Rd = Fd.customTexturePackKey;
            if (!Rd) return void(Gd.c.isUsingTemporaryTexturePack() && ((0, pd.reloadBloxd)(), await new Promise((() => {}))));
            if (Gd.c.isUsingTemporaryTexturePack() && Gd.c.getTemporaryTexturePackSource() === Rd) return;
            const Xd = Qd.NotificationProvider.showCustomPopup({
                body: dd => (0, jd.jsx)(dO, {
                  schematicId: Wd,
                  texturePackKey: Rd,
                  onClose: dd
                }),
                disableExitButton: !0,
                disablePressBackgroundToClose: !0
              }),
              Kd = () => {
                Xd.tearDownNotification()
              };
            null === Od || void 0 === Od || Od.addEventListener("abort", Kd, {
              once: !0
            }), await Xd.getResult(), null === Od || void 0 === Od || Od.removeEventListener("abort", Kd)
          }(WO, Pd.signal), Od = dd.catch((dd => {
            console.error("Failed to check for custom texture pack", dd)
          })).then((() => {
            Md.mark("phase_pack")
          }));
          XO = Od;
          const md = NO.G && !RO ? (0, zd.loadWasmPlay)().catch((() => {})) : Od,
            Wd = Ld;
          Ld = md.then((() => Wd))
        }
        NO.G && (0, qO.h)(XO);
        const vO = {
          wasm: NO.G,
          game: wd.gameNameWithVariation,
          custom: RO,
          lobbyName: null !== (Od = wd.lobbyName) && void 0 !== Od ? Od : null,
          direct: null !== wd.directJoinVmUrl && void 0 !== wd.directJoinVmUrl,
          discord: "/play/discord-custom-lobby" === md.pathname,
          adBeforeMatchmaking: void 0 !== WO && !0 === (null === (Wd = sd.c[WO]) || void 0 === Wd ? void 0 : Wd.playAdBeforeMatchmaking),
          afterAnother: null !== cd.current || (0, KO.b)()
        };
        (0, hO.f)(null);
        const QO = !(tO = vO).wasm || void 0 === tO.game || tO.custom || tO.direct || tO.discord || tO.adBeforeMatchmaking || tO.afterAnother ? null : () => {
          ! function(dd, Od, md) {
            (0, hO.f)({
              key: (0, hO.c)(dd, Od),
              settled: Promise.all([Rd.matchmakingLibrariesPromise, yd.userContextManager.getCurrentUserContext()]).then((Wd => {
                let [Fd, Rd] = Wd;
                if (void 0 === Fd.matchmakeForAhead) throw new Error("the matchmaking chunk has no matchmaking ahead");
                return md.mark("phase_ahead_sent"), Fd.matchmakeForAhead(dd, Od, Rd).then((dd => (md.mark("phase_ahead_answered", dd.at), dd)))
              })).catch((dd => ({
                result: Td.e.errorWithCode(String(dd), Hd.l.REQUEST_TO_MATCHMAKING, {
                  error: dd,
                  severity: "medium"
                }),
                at: performance.now()
              })))
            })
          }(vO.lobbyName, vO.game, Md)
        };
        var tO;
        const HO = null !== cd.current;
        cd.current = null, (0, KO.f)(null);
        const bO = () => {
          Zd ? (0, vd.navigateToHomePage)() : (Dd.current = HO, td(-1))
        };
        let TO = !1;
        const pO = md.pathname + md.search,
          YO = () => !TO && nd.current === pO;
        return (0, hO.b)(Ld, QO, (dd => {
          let {
            shouldMatchmake: Od,
            discordContext: md
          } = dd;
          YO() && (Md.mark("phase_gate"), Od ? gO(null !== md && void 0 !== md ? md : wd.lobbyName, md ? "classic" : wd.gameNameWithVariation, wd.directJoinVmUrl, Md).then((dd => {
            if (null !== dd && YO())
              if (dd.isError()) {
                var Od, md;
                const Wd = dd.asError(),
                  Rd = null !== (Od = Wd.debugResult.severity) && void 0 !== Od ? Od : "high";
                if (bd.j.lQ("joinFailed", {
                    step: null !== (md = Wd.code) && void 0 !== md ? md : null,
                    severity: Rd
                  }), (0, oO.c)(Wd.debugResult.error)) return void oO.e.reload();
                if (Wd.code === Hd.l.SHADER_PACK) return void(0, mO.e)(Wd.message, td);
                const Xd = Fd.e.get("gameEntrySource"),
                  vd = Wd.code === Hd.l.INITIALISE_WEBGL ? (0, Jd.e)() : null,
                  {
                    error: qd
                  } = Wd.debugResult;
                let yd;
                if ((0, Nd.d)(Kd, Wd)) yd = Promise.resolve(!1);
                else if (null !== vd) yd = (0, Jd.k)(vd);
                else if (qd instanceof xd.r) yd = (0, Ud.i)(qd);
                else {
                  let dd;
                  switch (Rd) {
                    case "low":
                      dd = "face-diagonal-mouth";
                      break;
                    case "medium":
                      dd = "face-worried";
                      break;
                    case "high":
                      dd = "face-dizzy"
                  }
                  const Od = qd instanceof yO.f;
                  let md = (0, od.h)(Wd.message);
                  Od ? md = Kd("general:gameFilesStalled") : Wd.debugResult.gameServerUnreachable && (md = Kd((0, Yd.isMobile)() ? "general:gameServerUnreachableMobile" : "general:gameServerUnreachable"));
                  yd = Qd.NotificationProvider.showPromptPopup({
                    icon: dd,
                    title: Hd.C[Wd.code],
                    subtitle: (0, jd.jsxs)(jd.Fragment, {
                      children: [md, qd instanceof Error && !Od && (0, jd.jsx)("div", {
                        style: {
                          fontSize: "0.9rem",
                          paddingTop: "1rem"
                        },
                        children: (0, jd.jsx)(Ed.d, {
                          errorString: qd.stack
                        })
                      })]
                    }),
                    confirmText: Kd("general:tryAgain"),
                    cancelText: Kd("general:cancel")
                  }).getResult().then((dd => !0 === dd))
                }
                yd.then((dd => {
                  if (dd) {
                    (0, Fd.l)(Xd);
                    const dd = (0, Sd.c)(wd.gameNameWithVariation, wd.lobbyName);
                    "low" === Rd ? td(dd) : (0, pd.reloadBloxd)(dd)
                  }
                })), hd.gameBridge.send("leaveGame", {
                  reloadPath: "/"
                }), bO()
              } else {
                const {
                  gameNameWithVariation: Od,
                  lobbyName: md
                } = dd.getValue();
                cd.current = {
                  gameNameWithVariation: Od,
                  lobbyName: md
                };
                const Wd = (0, Sd.c)(Od, md);
                td(Wd, {
                  replace: !0
                })
              }
          })).catch((dd => {
            if (!YO()) return;
            bd.j.lQ("joinFailed", {
              step: null,
              severity: "unexpected"
            });
            Qd.NotificationProvider.showPromptPopup({
              icon: "face-dizzy",
              title: "Unexpected Error",
              subtitle: (0, jd.jsxs)(jd.Fragment, {
                children: [Kd("homePage:pleaseCopyError"), (0, jd.jsx)("div", {
                  style: {
                    fontSize: "0.9rem",
                    paddingTop: "1rem"
                  },
                  children: (0, jd.jsx)(Ed.d, {
                    errorString: dd.stack
                  })
                })]
              }),
              confirmText: Kd("general:tryAgain"),
              cancelText: Kd("general:cancel")
            }).getResult().then((dd => {
              !0 === dd && (0, pd.reloadBloxd)((0, Sd.c)(wd.gameNameWithVariation, wd.lobbyName))
            })), bO()
          })) : td(-1))
        }), YO), () => {
          TO = !0, Pd.abort()
        }
      }), [ud, md.search, md.pathname, Zd]), (0, Xd.useEffect)((() => {
        Pd.disableFullscreen && (0, wd.i)() ? (0, wd.k)() : !Pd.disableFullscreen && (0, wd.j)() && (0, wd.s)({
          automatic: !0
        })
      }), [Ld, Pd]), (0, Xd.useEffect)((() => {
        "inGame" === Ld && bO()
      }), [Ld, Pd]), (0, Xd.useEffect)((() => {
        "inGame" !== Ld && Fd.e.set({
          openInGameMenuName: null
        })
      }), [Ld]);
      const WO = function(dd) {
        const Od = (0, Fd.i)(dd),
          [md, Wd] = (0, Xd.useState)(0),
          [Rd, hd] = (0, Xd.useState)(!1);
        (0, Kd.f)("gameJoined", (() => {
          (0, Fd.i)(Fd.e.get("gameState")) && (Wd((dd => dd + 1)), hd(!0))
        })), (0, Xd.useEffect)((() => {
          Od || hd(!1)
        }), [Od]);
        const vd = "inGame" === dd;
        return {
          mounted: vd || Od && Rd,
          shown: vd,
          key: md
        }
      }(Ld);
      return (0, jd.jsx)(jd.Fragment, {
        children: WO.mounted && (0, jd.jsx)(Rd.InGameUi, {
          shown: WO.shown
        }, WO.key)
      })
    }
  },
  5889: (dd, Od, md) => {
    md.d(Od, {
      b: () => Fd
    });
    var Wd = md(1253);
    async function Fd(dd) {
      const Od = await fetch(`${Wd.clientSideServerUrls.s3Url}/${dd}`, {
        headers: {
          Accept: "application/json"
        }
      });
      if (404 === Od.status || 403 === Od.status) return null;
      if (!Od.ok) throw new Error(`Failed to download the texture pack (${Od.status})`);
      return await Od.json()
    }
  },
  10090: (dd, Od, md) => {
    md.d(Od, {
      d: () => yd,
      e: () => bd
    });
    var Wd = md(180),
      Fd = md(218),
      Rd = md(1122),
      Xd = md(1135),
      Kd = md(1286),
      hd = md(2092),
      vd = md(3301),
      Qd = md(1627),
      td = md(1462),
      od = md(1189),
      Nd = md(10092),
      qd = md(1641),
      Hd = md(1666);

    function yd(dd, Od) {
      const md = !0 === Od.debugResult.gameRefused,
        Rd = md || Od.code === Wd.l.REQUEST_TO_MATCHMAKING ? (0, Nd.h)(Od.message) : null;
      if (null !== Rd) return gd(dd, dd((0, Nd.j)(Rd)), dd(Nd.i[Rd])), !0;
      if (md) return async function(dd) {
        const {
          gameNameWithVariation: Od,
          lobbyName: md,
          shownLobbyName: Wd
        } = hd.gameBridge.latest("connectedGame"), Fd = "classic" === Od && (0, Kd.F)(md) ? Wd : await (0, vd.g)(dd, Od, md);
        return "" !== Fd ? dd("general:cantJoinGame", {
          game: Fd
        }) : dd("general:cantJoinThisGame")
      }(dd).then((md => {
        gd(dd, md, Od.message)
      })), !0;
      const {
        joinFailure: Xd
      } = Od.debugResult, Qd = "refused" === (null === Xd || void 0 === Xd ? void 0 : Xd.at) ? Xd.code : null;
      return Qd === Fd.e.schematicNotPublished.code ? (async function(dd, Od) {
        const md = Td(),
          Wd = await Yd(md);
        if (null === Wd || Wd.gamePublished) return void gd(dd, dd("general:cantJoinThisGame"), Od);
        await pd(dd, "rocket-launch", dd("studio:gameNotPublishedTitle", {
          game: Wd.name
        }), dd("studio:publishInStudio"), md)
      }(dd, Od.message), !0) : (Qd === Fd.e.schematicBanned.code || Qd === Fd.e.customGameTakenDown.code) && (Yd(Td()).then((Od => {
        bd(dd, Od)
      })), !0)
    }

    function bd(dd, Od) {
      !0 !== (null === Od || void 0 === Od ? void 0 : Od.takenDown) ? gd(dd, dd("general:cantJoinThisGame"), Fd.e.customGameTakenDown.text) : pd(dd, "lock", dd("studio:gameTakenDownTitle", {
        game: Od.name
      }), dd("studio:viewInStudio"), Od.schematicId)
    }

    function Td() {
      return (0, Rd.p)(hd.gameBridge.latest("connectedGame").gameNameWithVariation)
    }
    async function pd(dd, Od, md, Wd, Fd) {
      !0 === await td.NotificationProvider.showPromptPopup({
        icon: Od,
        title: md,
        confirmText: Wd,
        cancelText: dd("general:cancel")
      }).getResult() && (0, qd.navigatePreserveSearch)((0, Hd.q)((0, Xd.e)(Fd), "manage"))
    }
    async function Yd(dd) {
      try {
        return await Qd.e.getGame(await od.userContextManager.getCurrentUserContext(), dd, !0)
      } catch (Od) {
        return (0, Qd.g)(Od) || console.error(`Failed to get game ${dd}`, Od), null
      }
    }

    function gd(dd, Od, md) {
      td.NotificationProvider.showPromptPopup({
        icon: "lock",
        title: Od,
        subtitle: md,
        confirmText: dd("general:ok"),
        cancelText: ""
      })
    }
  },
  10113: (dd, Od, md) => {
    md.d(Od, {
      c: () => Xd
    });
    var Wd = md(1424),
      Fd = md(1286),
      Rd = md(701);

    function Xd(dd) {
      return dd = function(dd, Od) {
        var md;
        const Wd = new URLSearchParams(Od),
          Fd = Wd.get("lobby"),
          Rd = Wd.get("vm"),
          Xd = null !== (md = Fd) && void 0 !== md ? md : dd.lobbyName,
          Kd = null !== Rd && void 0 !== Rd ? Rd : dd.directJoinVmUrl;
        if (Xd === dd.lobbyName && Kd === dd.directJoinVmUrl) return dd;
        return {
          ...dd,
          lobbyName: Xd,
          directJoinVmUrl: Kd
        }
      }(dd, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""), dd = function(dd) {
        if ((0, Rd.O)(dd.directJoinVmUrl)) return dd;
        const Od = (0, Fd.Y)(dd.directJoinVmUrl);
        null === Od && (dd.directJoinVmUrl = void 0);
        return dd
      }(dd = function(dd) {
        if ((0, Rd.O)(dd.gameNameWithVariation)) return dd;
        return dd.gameNameWithVariation = (0, Wd.m)(dd.gameNameWithVariation), dd
      }(dd))
    }
  },
  10106: (dd, Od, md) => {
    md.d(Od, {
      d: () => Fd,
      f: () => Xd
    });
    var Wd = md(210);
    class Fd {
      constructor() {
        this.marks = new Map, this.fromTap = !1
      }
      mark(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
        this.marks.has(dd) || this.marks.set(dd, Od)
      }
      marked() {
        return Wd.V.flatMap((dd => {
          var Od;
          const md = null !== (Od = this.marks.get(dd)) && void 0 !== Od ? Od : Rd.marks.get(dd);
          return void 0 === md ? [] : [
            [dd, md]
          ]
        }))
      }
    }
    const Rd = new Fd;

    function Xd(dd) {
      Rd.mark(dd)
    }
  },
  10143: (dd, Od, md) => {
    md.d(Od, {
      d: () => Rd,
      h: () => Fd
    });
    let Wd = Promise.resolve();

    function Fd(dd) {
      Wd = dd
    }

    function Rd() {
      return Wd
    }
  },
  10126: (dd, Od, md) => {
    md.d(Od, {
      b: () => Kd,
      c: () => Fd,
      f: () => Rd,
      j: () => Xd
    });
    let Wd = null;

    function Fd(dd, Od) {
      return `${Od}\n${null!==dd&&void 0!==dd?dd:""}`
    }

    function Rd(dd) {
      Wd = dd
    }

    function Xd(dd) {
      const Od = Wd;
      return Wd = null, null !== Od && Od.key === dd ? Od.settled : null
    }

    function Kd(dd, Od, md, Wd) {
      let Fd = !1;
      const Rd = () => {
        null !== Od && !Fd && Wd() && (Fd = !0, Od())
      };
      null !== Od && setTimeout(Rd, 0), dd.then((dd => {
        Rd(), md(dd)
      }))
    }
  },
  10097: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      importClientLoad: () => td,
      loadWasmPlay: () => qd,
      loadWasmPlayAhead: () => Hd,
      loadWasmPreviews: () => yd
    });
    var Wd = md(4365),
      Fd = md(3206),
      Rd = md(2319),
      Xd = md(5318),
      Kd = md(4734),
      hd = md(5336),
      vd = md(10106);
    let Qd = null;

    function td() {
      return Promise.all([md.e(91), md.e(105), md.e(241), md.e(158), md.e(245), md.e(161), md.e(256), md.e(71)]).then((() => md(42638)))
    }

    function od() {
      return Promise.all([md.e(88), md.e(91), md.e(105), md.e(241), md.e(158), md.e(245), md.e(223), md.e(161), md.e(251), md.e(243), md.e(103), md.e(247), md.e(256), md.e(76)]).then((() => md(42818)))
    }

    function Nd() {
      Promise.all([md.e(85), md.e(89), md.e(86), md.e(87), md.e(88), md.e(105), md.e(102), md.e(307), md.e(127), md.e(281), md.e(255), md.e(247), md.e(55)]).then((() => md(42968))).catch((() => {}))
    }

    function qd() {
      return Xd.b.cancelDownloadForJoin(), (0, Kd.c)(), (0, Fd.f)(), (0, hd.e)(), (0, Rd.g)(), Nd(), td().then((dd => {
        let {
          startJoinLoad: Od
        } = dd;
        Od()
      }), (() => {})), Qd ??= od().then((dd => ((0, vd.f)("phase_chunk"), dd.startWasmPlay(), (0, vd.f)("phase_start"), dd.followPageUiPack((dd => {
        Wd.c.showGamePack(dd)
      })), dd)), (dd => {
        throw Qd = null, dd
      })), Qd
    }

    function Hd() {
      return Nd(), md.e(132).then((() => md(42999))).catch((() => {})), od().then((() => {
        (0, vd.f)("phase_chunk")
      }))
    }

    function yd() {
      return od().then((dd => {
        dd.startWasmPreviews(), dd.prefetchWasmPreviews()
      }))
    }
  },
  10121: (dd, Od, md) => {
    md.d(Od, {
      c: () => vd,
      f: () => Qd
    });
    var Wd = md(180),
      Fd = md(1916),
      Rd = md(4458),
      Xd = md(4948),
      Kd = md(1881);
    const hd = new WeakSet;

    function vd(dd) {
      return !0 !== dd.Ad && !(0, Kd.c)(dd.error)
    }

    function Qd(dd) {
      const Od = dd.asError(),
        {
          debugResult: md
        } = Od;
      if (hd.has(md) || !vd(md)) return;
      hd.add(md), console.log("Failed to join lobby:", Od.message);
      const Kd = "timedOut" === md.gameServerUnreachable;
      (0, Fd.reportClientError)("matchmake_failed", Od.message, Kd ? "CONNECT_TO_GAME_SERVER_TIMEOUT" : Wd.l[Od.code]);
      const {
        error: Qd
      } = md;
      if (Qd instanceof Rd.r && "default" !== Qd.packSource) {
        const dd = (0, Xd.h)("js", "game" === Qd.packSource ? "game" : "page", (0, Xd.k)(Qd));
        (0, Fd.reportClientError)("texture_pack", Qd, dd)
      }
    }
  },
  10092: (dd, Od, md) => {
    md.d(Od, {
      c: () => Rd,
      f: () => Xd,
      h: () => Kd,
      i: () => vd,
      j: () => hd
    });
    var Wd = md(218),
      Fd = md(5294);

    function Rd(dd) {
      return Xd(dd) === Wd.e.gameOrPluginOnPlayerAuthRejected.code
    }

    function Xd(dd) {
      return "object" === typeof dd && null !== dd ? dd.code : void 0
    }

    function Kd(dd) {
      var Od;
      return null !== (Od = Object.keys(Fd.e).find((Od => Fd.e[Od] === dd))) && void 0 !== Od ? Od : null
    }

    function hd(dd) {
      return "notWhitelisted" === dd ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const vd = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  10081: (dd, Od, md) => {
    md.d(Od, {
      e: () => vd,
      h: () => hd
    });
    var Wd = md(405);

    function Fd(dd) {
      if (!dd.startsWith("{")) return dd;
      let Od;
      try {
        Od = JSON.parse(dd)
      } catch {
        return dd
      }
      return function(dd) {
        if (null === (0, Wd.Ce)(dd)) return !1;
        const {
          params: Od
        } = dd;
        return void 0 === Od || "object" === typeof Od && null !== Od && Object.values(Od).every((dd => "string" === typeof dd))
      }(Od) ? Od : dd
    }
    var Rd = md(1238),
      Xd = md(1306);

    function Kd(dd) {
      return (0, Rd.B)(Xd.f.get().getCurrentLanguageCode(), dd.translationKey, dd.params)
    }

    function hd(dd) {
      const Od = Fd(dd);
      return "string" === typeof Od ? Od : Kd(Od)
    }

    function vd(dd) {
      const Od = Fd(dd);
      return "string" === typeof Od ? Od : Kd({
        translationKey: "moderation:kicked",
        params: {
          reason: Kd(Od)
        }
      })
    }
  },
  10135: (dd, Od, md) => {
    md.d(Od, {
      c: () => Xd,
      f: () => Rd,
      h: () => Kd
    });
    var Wd = md(1304);
    const Fd = new WeakSet;

    function Rd(dd) {
      Fd.add(dd)
    }
    class Xd {
      constructor(dd, Od) {
        this.joinSignal = dd, this.onWaiting = Od, this.deadline = null, this.waits = 0, Fd.has(dd) && (this.deadline = performance.now())
      }
      async waitToAskAgain(dd) {
        if (this.joinSignal.aborted) return "left";
        const Od = function(dd, Od) {
            let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
            const Wd = Math.min(Math.max(dd * 2 ** Od, 2e3), 15e3);
            return Math.round(Wd * (.75 + .5 * md()))
          }(dd, this.waits),
          md = performance.now();
        return this.deadline ??= md + 18e4, md + Od > this.deadline ? "over" : (this.waits++, this.onWaiting(!0), await
          function(dd, Od) {
            if (Od.aborted) return Promise.resolve(!1);
            return new Promise((md => {
              const Wd = () => {
                  clearTimeout(Fd), md(!1)
                },
                Fd = setTimeout((() => {
                  Od.removeEventListener("abort", Wd), md(!0)
                }), dd);
              Od.addEventListener("abort", Wd, {
                once: !0
              })
            }))
          }(Od, this.joinSignal) ? "again" : "left")
      }
      placed() {
        this.waits > 0 && this.onWaiting(!1)
      }
    }
    async function Kd(dd, Od, md) {
      let Fd = dd;
      for (;;) {
        if (!Fd.result.isError()) return md.placed(), Fd;
        const dd = Fd.result.asError(),
          {
            retryAfterMs: Rd,
            ...Xd
          } = dd.debugResult;
        if (void 0 === Rd) return Fd;
        const Kd = await md.waitToAskAgain(Rd);
        if ("left" === Kd) return null;
        if ("over" === Kd) {
          return {
            result: Wd.e.errorWithCode(dd.message, dd.code, {
              ...Xd,
              serverWaitEnded: !0
            }),
            at: Fd.at
          }
        }
        Fd = await Od()
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);