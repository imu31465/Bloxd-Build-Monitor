export const id = 67;
export const ids = [61, 67, 95];
export const modules = {
  37383: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => bu,
      e: () => cu
    });
    var su = ju(649),
      Uu = ju(31),
      Zu = ju(37341);
    const Xu = "replayFileKeptForReload",
      lu = "replayFileKeptForReloadAt",
      qu = "replayFileKeptForReloadTab",
      fu = 3e5,
      Cu = 5e3;
    async function bu(uu, Eu) {
      const ju = Date.now(),
        Zu = {
          at: ju,
          bytes: uu,
          source: Eu
        },
        fu = await Promise.race([(async () => await Uu.h.setItem(lu, ju) && Uu.h.setItem(Xu, Zu))(), (0, su.K)(Cu).then((() => !1))]);
      fu || console.warn("The replay file couldn't be kept across the reload into a newer build: the reloaded page asks for it again");
      const bu = {
        at: ju,
        oN: fu
      };
      Uu.l.setItem(qu, bu)
    }
    async function cu() {
      var uu;
      const Eu = Uu.l.getItem(qu);
      null !== Eu && Uu.l.removeItem(qu);
      const ju = Date.now(),
        su = await Uu.h.getItem(lu),
        Cu = null !== Eu && ju - Eu.at <= fu,
        bu = null !== Eu && su === Eu.at;
      let cu = null;
      if (null !== su && (bu || ("number" !== typeof su || ju - su > fu)) && (cu = Cu && bu && Eu.oN ? await Uu.h.getItem(Xu) : null, await Promise.all([Uu.h.removeItem(lu), Uu.h.removeItem(Xu)])), !Cu) return null;
      if ((null === (uu = cu) || void 0 === uu ? void 0 : uu.at) !== Eu.at) throw new Error(Zu.c.replayNotKept.text);
      return {
        bytes: cu.bytes,
        source: cu.source
      }
    }
  },
  37375: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => su,
      f: () => Zu,
      i: () => Uu
    });
    const su = [9];

    function Uu(uu) {
      return su.includes(uu)
    }

    function Zu(uu) {
      return null !== uu && uu >= 3 && uu < su[0]
    }
  },
  37341: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Xu,
      e: () => fu,
      i: () => qu
    });
    var su = ju(24);
    const Uu = 1500,
      Zu = 1e3,
      Xu = {
        recordingStarted: {
          text: "Started recording",
          type: "Success"
        },
        recordingStopped: {
          text: "Stopped recording",
          type: "Success"
        },
        recordingSaved: {
          text: "Recording saved",
          type: "Success"
        },
        clipSaved: {
          text: "Clip saved",
          type: "Success"
        },
        limitReached: {
          text: "Your recording reached its size limit, so it was saved.",
          type: "Warning"
        },
        recordingDiscarded: {
          text: "Your recording stopped and couldn't be saved.",
          type: "Error"
        },
        recordingTurnedOff: {
          text: "This game turned off recording, so your recording was discarded",
          type: "Error",
          timeoutMs: 3e3
        },
        recordingFailed: {
          text: "Your recording couldn't be saved, so try again.",
          type: "Error"
        },
        clipFailed: {
          text: "Your clip couldn't be saved, so try again.",
          type: "Error"
        },
        clipEmpty: {
          text: "Clip buffer is empty",
          type: "Error"
        },
        clippingNotOn: {
          text: "Clipping is not enabled",
          type: "Error"
        },
        disallowed: {
          text: "Recording is turned off in this game",
          type: "Error"
        },
        closeViewerFirst: {
          text: "Close Replay Mode to start recording",
          type: "Error"
        },
        saveBusy: {
          text: "Wait for the last save to finish, then try again.",
          type: "Error"
        },
        saveClosed: {
          text: "The replay closed or changed before it was saved, so save it again.",
          type: "Error"
        },
        cantOpen: {
          text: "This replay can't be opened, so try a different file.",
          type: "Error"
        },
        replayTooOld: {
          text: "This replay was made with an older version of Bloxd and can't be opened.",
          type: "Error"
        },
        replayNotKept: {
          text: "Bloxd updated as your replay opened, so open it again.",
          type: "Error"
        },
        cropFailed: {
          text: "The crop didn't work, so try again.",
          type: "Error"
        },
        cropBusy: {
          text: "Wait for the crop to finish, then try again.",
          type: "Error"
        },
        viewerLoadFailed: {
          text: "The replay viewer didn't load, so try again.",
          type: "Error"
        },
        coreStopped: {
          text: "Reload the page to watch another replay.",
          type: "Error"
        }
      },
      lu = new Set(Object.values(Xu).filter((uu => "Error" === uu.type)).map((uu => uu.text)));

    function qu(uu) {
      return uu instanceof Error && lu.has(uu.message) ? uu.message : void 0
    }

    function fu(uu) {
      var Eu;
      const ju = null !== (Eu = uu.timeoutMs) && void 0 !== Eu ? Eu : "Error" === uu.type ? Uu : Zu;
      su.h.TY("showBottomMessage", {
        message: uu.text,
        timeoutLength: ju,
        type: uu.type
      })
    }
  },
  37391: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => su,
      f: () => Uu
    });
    const su = "data-replay-ui-active",
      Uu = [{
        group: "middleTextTop",
        dataAttr: "data-replay-hide-middle-text-top",
        label: "Middle text top"
      }, {
        group: "middleTextUpper",
        dataAttr: "data-replay-hide-middle-text-upper",
        label: "Middle text upper"
      }, {
        group: "middleTextLower",
        dataAttr: "data-replay-hide-middle-text-lower",
        label: "Middle text lower"
      }, {
        group: "rightInfoText",
        dataAttr: "data-replay-hide-right-info-text",
        label: "Right info text"
      }, {
        group: "crosshair",
        dataAttr: "data-replay-hide-crosshair",
        label: "Crosshair"
      }, {
        group: "flyingMiddleText",
        dataAttr: "data-replay-hide-flying-middle-text",
        label: "Flying middle text"
      }, {
        group: "hotbar",
        dataAttr: "data-replay-hide-hotbar",
        label: "Hotbar (shop, inventory, item name)"
      }, {
        group: "auraBar",
        dataAttr: "data-replay-hide-aura-bar",
        label: "Aura XP bar"
      }, {
        group: "healthAndShield",
        dataAttr: "data-replay-hide-health-and-shield",
        label: "Health bar and shield bar"
      }, {
        group: "effectInfo",
        dataAttr: "data-replay-hide-effect-info",
        label: "Effect info"
      }, {
        group: "nametag",
        dataAttr: null,
        label: "Nametags"
      }, {
        group: "everythingElse",
        dataAttr: "data-replay-hide-everything-else",
        label: "Everything else"
      }]
  },
  37400: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => fu,
      f: () => bu,
      j: () => Cu
    });
    var su = ju(22),
      Uu = ju(24),
      Zu = ju(37391);

    function Xu() {
      const uu = {};
      for (const {
          group: Eu
        }
        of Zu.f) uu[Eu] = !0;
      return uu
    }
    let lu = Xu();

    function qu() {
      Uu.h.TY("replayViewer|uiVisibilityChanged")
    }

    function fu() {
      return lu
    }

    function Cu(uu, Eu) {
      lu[uu] !== Eu && (lu = {
        ...lu,
        [uu]: Eu
      }, "nametag" === uu && su.d.set({
        areNametagsHidden: !Eu
      }), qu())
    }

    function bu() {
      lu = Xu(), su.d.set({
        areNametagsHidden: !1
      }), qu()
    }
  },
  39555: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => ku
    });
    var su = ju(1802),
      Uu = ju(1405),
      Zu = ju(58),
      Xu = ju(1105),
      lu = ju.n(Xu),
      qu = ju(1506),
      fu = ju(91);
    const Cu = ["video/webm;codecs=vp9,opus", "video/webm;codecs=vp8,opus", "video/webm;codecs=vp9", "video/webm;codecs=vp8", "video/webm"],
      bu = ["video/mp4;codecs=avc1,mp4a.40.2", "video/mp4;codecs=avc1.42E01E,mp4a.40.2", "video/mp4;codecs=avc1", "video/mp4"];

    function cu(uu) {
      return "webm" === uu ? Cu : bu
    }

    function Nu(uu) {
      for (const Eu of uu)
        if ("undefined" !== typeof MediaRecorder && MediaRecorder.isTypeSupported(Eu)) return Eu;
      return null
    }

    function Ou(uu) {
      return null !== Nu(cu(uu))
    }
    var Yu = ju(1154);
    const hu = [{
      id: "webm",
      label: "WebM",
      description: "Usually less screen tearing, but may not play in all media players."
    }, {
      id: "mp4",
      label: "MP4",
      description: "Works in more players, but may show graphical glitches on some devices."
    }];

    function Du() {
      return Ou("webm") ? "webm" : Ou("mp4") ? "mp4" : "webm"
    }

    function gu(uu) {
      let {
        cards: Eu
      } = uu;
      return (0, Yu.jsx)("div", {
        className: "ReplayVideoExportOptionCards",
        children: Eu.map((uu => (0, Yu.jsxs)("div", {
          className: "ReplayVideoExportOptionColumn",
          children: [(0, Yu.jsx)("div", {
            className: lu()("ReplayVideoExportOptionCard", {
              Selected: uu.selected,
              Disabled: uu.disabled
            }),
            onClick: () => {
              uu.disabled || uu.onSelect()
            },
            children: (0, Yu.jsxs)("div", {
              className: "ReplayVideoExportOptionCardBody",
              children: [(0, Yu.jsx)("div", {
                className: "ReplayVideoExportOptionCardLabel",
                children: uu.label
              }), (0, Yu.jsx)("div", {
                className: "ReplayVideoExportOptionCardDescription",
                children: uu.description
              })]
            })
          }), uu.disabled && uu.disabledReason && (0, Yu.jsx)("div", {
            className: "ReplayVideoExportOptionError SmallTextLight",
            children: uu.disabledReason
          })]
        }, uu.id)))
      })
    }
    const Mu = (0, Zu.memo)((function(uu) {
      let {
        hasPlaybackMark: Eu,
        canIncludeUi: ju,
        includeUiDisabledReason: su,
        selectionRef: Uu,
        closePopup: Xu
      } = uu;
      const lu = Ou("webm") || Ou("mp4"),
        [Cu, bu] = (0, Zu.useState)(Du),
        [cu, Nu] = (0, Zu.useState)(ju),
        Mu = lu && Ou(Cu);
      if (!lu) {
        const uu = (0, fu.isMobile)() ? "screen recording" : "OBS";
        return (0, Yu.jsxs)("div", {
          className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
          children: [(0, Yu.jsx)("div", {
            className: "PromptPopupNotificationTitle SmallTextBold",
            children: "Can't export video"
          }), (0, Yu.jsx)("div", {
            className: "PromptPopupNotificationSubtitle SmallTextLight",
            children: `Your device does not support exporting. Try recording with an external software like ${uu}.`
          }), (0, Yu.jsx)("div", {
            className: "PromptPopupNotificationBody",
            children: (0, Yu.jsx)(qu.R, {
              className: "PromptPopupNotificationBodyButton",
              onClick: () => {
                Uu.options = null, Xu()
              },
              children: "Close"
            })
          })]
        })
      }
      const eu = Eu ? "This will only play the range you've set.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes." : "This will play the whole recording from the start.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes.",
        Gu = [{
          id: "withoutUi",
          label: "Without UI",
          description: "Usually cleaner and sharper.",
          selected: !cu,
          disabled: !1,
          disabledReason: null,
          onSelect: () => {
            Nu(!1)
          }
        }, {
          id: "withUi",
          label: "With UI",
          description: "Includes HUD elements. May look worse on some devices.",
          selected: cu,
          disabled: !ju,
          disabledReason: su,
          onSelect: () => {
            Nu(!0)
          }
        }],
        pu = hu.map((uu => {
          const Eu = Ou(uu.id);
          return {
            id: uu.id,
            label: uu.label,
            description: uu.description,
            selected: Cu === uu.id,
            disabled: !Eu,
            disabledReason: "Your device doesn't support this format",
            onSelect: () => {
              bu(uu.id)
            }
          }
        }));
      return (0, Yu.jsxs)("div", {
        className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
        children: [(0, Yu.jsx)("div", {
          className: "PromptPopupNotificationTitle SmallTextBold",
          children: "Export video?"
        }), (0, Yu.jsx)("div", {
          className: "PromptPopupNotificationSubtitle SmallTextLight",
          children: eu
        }), (0, Yu.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, Yu.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "UI"
          }), (0, Yu.jsx)(gu, {
            cards: Gu
          })]
        }), (0, Yu.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, Yu.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "Format"
          }), (0, Yu.jsx)(gu, {
            cards: pu
          })]
        }), (0, Yu.jsxs)("div", {
          className: "PromptPopupNotificationBody",
          children: [(0, Yu.jsx)(qu.p, {
            className: "PromptPopupNotificationBodyButton PromptPopupNotificationBodyPrimaryButton",
            disabled: !Mu,
            onClick: () => {
              Uu.options = {
                format: Cu,
                includeUi: ju && cu
              }, Xu()
            },
            children: "Export"
          }), (0, Yu.jsx)(qu.R, {
            className: "PromptPopupNotificationBodyButton",
            onClick: () => {
              Uu.options = null, Xu()
            },
            children: "Cancel"
          })]
        })]
      })
    }));
    var eu = ju(5026),
      Gu = ju(37391),
      pu = ju(37400);
    let wu = null;

    function Ju() {
      return function() {
        const uu = (0, pu.c)();
        for (const {
            group: Eu,
            dataAttr: ju
          }
          of Gu.f)
          if (ju && uu[Eu]) return !0;
        return !1
      }() ? function() {
        var uu;
        return "function" === typeof(null === (uu = navigator.mediaDevices) || void 0 === uu ? void 0 : uu.getDisplayMedia)
      }() ? {
        canIncludeUi: !0,
        includeUiDisabledReason: null
      } : {
        canIncludeUi: !1,
        includeUiDisabledReason: "Not supported on this device"
      } : {
        canIncludeUi: !1,
        includeUiDisabledReason: "No UI to include"
      }
    }
    async function du(uu, Eu, ju) {
      return uu ? async function() {
        const uu = await navigator.mediaDevices.getDisplayMedia({
          video: !0,
          audio: !1,
          preferCurrentTab: !0,
          selfBrowserSurface: "include"
        });
        for (const Eu of uu.getAudioTracks()) Eu.stop(), uu.removeTrack(Eu);
        return uu
      }(): Eu().captureStream(Math.max(1, Math.round(ju)))
    }
    var au = ju(39392);
    let Pu = !1;

    function ou(uu) {
      uu.holdInput(!1), (0, au.d)(!1)
    }
    async function ku(uu) {
      var Eu, ju;
      if ((0, au.c)() || Pu) return;
      const Zu = uu();
      if (!Zu) return;
      Pu = !0;
      let Xu = null;
      const lu = Zu.playbackMarkInTick,
        {
          canIncludeUi: qu,
          includeUiDisabledReason: fu
        } = Ju();
      try {
        Xu = await async function(uu) {
          let {
            hasPlaybackMark: Eu,
            canIncludeUi: ju,
            includeUiDisabledReason: su
          } = uu;
          const Zu = {
              options: null
            },
            Xu = Uu.NotificationProvider.showCustomPopup({
              body: uu => (0, Yu.jsx)(Mu, {
                hasPlaybackMark: Eu,
                canIncludeUi: ju,
                includeUiDisabledReason: su,
                selectionRef: Zu,
                closePopup: uu
              }),
              disableExitButton: !0,
              disablePressBackgroundToClose: !0,
              unlockPointerKey: "replayVideoExportOptions"
            });
          return "notificationTornDown" === await Xu.getResult() ? null : Zu.options
        }({
          hasPlaybackMark: null !== lu,
          canIncludeUi: qu,
          includeUiDisabledReason: fu
        })
      } finally {
        Pu = !1
      }
      if (!Xu) return;
      const Cu = null !== (Eu = null === (ju = Zu.startFailure) || void 0 === ju ? void 0 : ju.call(Zu)) && void 0 !== Eu ? Eu : null;
      if (null !== Cu) return void Uu.NotificationProvider.showAlertPopup({
        title: "Video export failed",
        subtitle: Cu
      });
      if (! function(uu) {
          return !(0, au.c)() && ((0, au.d)(!0), uu.holdInput(!0), !0)
        }(Zu)) return;
      let bu = null;
      try {
        bu = await du(Xu.includeUi, (() => Zu.canvas()), Zu.cV)
      } catch (mu) {
        return console.error("Failed to create video stream for export", mu), ou(Zu), void Uu.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: mu instanceof Error ? mu.message : "Could not start capture."
        })
      }
      let Ou = null;
      const hu = [];
      let Du = null,
        gu = null;
      try {
        var Gu, pu, ku;
        Ou = Zu.playbackSpeed(), Zu.closeViewer(), Zu.setPlaybackSpeed(1), Zu.pause(), Zu.seekToTick(null !== lu && void 0 !== lu ? lu : 0);
        const uu = await async function() {
          const uu = eu.Howler.masterGain;
          if (!eu.Howler.ctx || !uu) return null;
          await eu.Howler.ctx.resume();
          const Eu = eu.Howler.ctx.createMediaStreamDestination();
          uu.connect(Eu), wu = Eu;
          const [ju] = Eu.stream.getAudioTracks();
          return null !== ju && void 0 !== ju ? ju : null
        }();
        gu = new MediaStream;
        for (const su of bu.getVideoTracks()) gu.addTrack(su);
        uu && gu.addTrack(uu);
        const Eu = function(uu) {
          const Eu = Nu(cu(uu));
          if (!Eu) throw new Error(`No MediaRecorder mime type available for ${uu}`);
          return Eu
        }(Xu.format);
        Du = new MediaRecorder(gu, {
          mimeType: Eu,
          videoBitsPerSecond: 8e6
        }), Du.ondataavailable = uu => {
          uu.data.size > 0 && hu.push(uu.data)
        };
        const ju = new Promise((uu => {
          Du.onstop = () => {
            uu()
          }
        }));
        await (null === (Gu = Zu.seekSettled) || void 0 === Gu ? void 0 : Gu.call(Zu));
        const [qu] = bu.getVideoTracks();
        Du.start(250), Zu.play();
        const fu = await
        function(uu, Eu, ju) {
          return new Promise((su => {
            let Uu = !1;
            const Zu = uu => {
                Uu || (Uu = !0, lu(), Eu.removeEventListener("ended", Xu), su(uu))
              },
              Xu = () => {
                Zu("captureLost")
              },
              lu = uu.watchPlayback((() => {
                uu.isPlaying() || Zu("completed")
              }));
            Eu.addEventListener("ended", Xu), ju.onerror = () => {
              Zu("recorderError")
            }, "ended" !== Eu.readyState ? uu.isPlaying() || Zu("completed") : Zu("captureLost")
          }))
        }(Zu, qu, Du);
        if (Zu.pause(), "inactive" !== Du.state && Du.stop(), await ju, "captureLost" === fu) return void Uu.NotificationProvider.showAlertPopup({
          title: "Video export stopped",
          subtitle: "Screen sharing ended before the replay finished. Nothing was saved."
        });
        if ("recorderError" === fu) return void Uu.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "The recorder encountered an error. Nothing was saved."
        });
        const Cu = null !== (pu = null === (ku = Zu.playbackFailure) || void 0 === ku ? void 0 : ku.call(Zu)) && void 0 !== pu ? pu : null;
        if (null !== Cu) return void Uu.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: `${Cu} Nothing was saved.`
        });
        const Yu = new Blob(hu, {
          type: Eu
        });
        Yu.size > 0 ? (0, su.d)(Yu, function(uu, Eu) {
          const ju = function(uu) {
            return "mp4" === uu ? "mp4" : "webm"
          }(Eu);
          if (uu) return `${uu.replace(/\.bloxdreplay$/i,"")}.${ju}`;
          return `bloxd-replay-${Date.now()}.${ju}`
        }(Zu.fileName(), Xu.format)) : Uu.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "No video data was captured. Try again."
        })
      } catch (mu) {
        console.error("Replay video export failed", mu), Uu.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: mu instanceof Error ? mu.message : "Something went wrong while exporting."
        })
      } finally {
        if (Du && "inactive" !== Du.state) try {
          Du.stop()
        } catch (mu) {
          console.error("Failed to stop MediaRecorder", mu)
        }! function() {
          const uu = eu.Howler.masterGain;
          if (wu && uu) {
            try {
              uu.disconnect(wu)
            } catch (mu) {
              console.error("Failed to disconnect Howler export tee", mu)
            }
            wu = null
          } else wu = null
        }();
        for (const uu of bu.getTracks()) uu.stop();
        if (gu)
          for (const uu of gu.getTracks()) uu.stop();
        null !== Ou && Zu.setPlaybackSpeed(Ou), Zu.pause(), ou(Zu), Zu.reopenViewer()
      }
    }
  },
  5026: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      Howl: () => Uu.Howl,
      Howler: () => Uu.Howler,
      musicOutput: () => hu,
      readyAudioContext: () => Du
    });
    var su, Uu = ju(5032),
      Zu = ju(3634),
      Xu = ju(4834);
    const lu = Uu.Howler;

    function qu() {
      var uu, Eu;
      if (lu.ctx || !lu.usingWebAudio || "undefined" === typeof AudioContext || !(0, Xu.j)()) return;
      const ju = navigator.audioSession;
      let su;
      "auto" === (null === ju || void 0 === ju ? void 0 : ju.type) && (ju.type = "ambient");
      try {
        su = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const Uu = su.createGain();
      Uu.gain.setValueAtTime(lu._muted ? 0 : null !== (uu = lu._volume) && void 0 !== uu ? uu : 1, su.currentTime), Uu.connect(su.destination), lu.ctx = su, lu.masterGain = Uu, null === (Eu = lu._setup) || void 0 === Eu || Eu.call(lu)
    }
    lu._mobileUnloaded = !0;
    const fu = lu.volume.bind(Uu.Howler);
    lu.volume = function() {
      return qu(), fu(...arguments)
    };
    const Cu = lu.mute.bind(Uu.Howler);
    lu.mute = uu => (qu(), Cu(uu));
    const bu = Uu.Howl.prototype,
      cu = bu.init;

    function Nu() {
      for (; lu._html5AudioPool.length < lu.html5PoolSize;) {
        const uu = new Audio;
        uu._unlocked = !0, lu._releaseHtml5Audio(uu)
      }
      for (const Eu of lu._howls)
        if (!Eu._webAudio)
          for (const ju of Eu._getSoundIds()) {
            var uu;
            const su = null === (uu = Eu._soundById(ju)) || void 0 === uu ? void 0 : uu._node;
            su && !su._unlocked && (su._unlocked = !0, su.load())
          }
    }
    bu.init = function(uu) {
      return qu(), cu.call(this, uu)
    }, (0, Xu.j)() && (lu._unlockAudio = () => {
      const uu = lu.ctx;
      if (lu._audioUnlocked || !uu) return;
      lu.autoUnlock = !1;
      const Eu = uu.createBuffer(1, 1, 22050);
      lu._scratchBuffer = Eu;
      const ju = new AbortController;
      let su = "afterPaint";
      const Uu = () => {
          var su;
          if (lu._audioUnlocked) return;
          null === (su = lu._autoResume) || void 0 === su || su.call(lu);
          const Uu = uu.createBufferSource();
          Uu.buffer = Eu, Uu.connect(uu.destination), Uu.start(0), uu.resume().catch((() => {})), Uu.onended = () => {
            Uu.disconnect(0), lu._audioUnlocked = !0, ju.abort();
            for (const uu of lu._howls) uu._emit("unlock")
          }
        },
        qu = () => {
          Nu(), Uu()
        },
        fu = Eu => {
          if (Nu(), "inTap" === su) {
            if ("running" === uu.state) return;
            console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), Uu()
          } else "afterPaint" === su && (su = "queued", (0, Zu.d)(Eu.timeStamp, (() => {
            su = "inTap", Uu()
          })))
        };
      for (const Zu of ["touchstart", "touchend"]) document.addEventListener(Zu, qu, {
        capture: !0,
        signal: ju.signal
      });
      for (const Zu of Xu.c) document.addEventListener(Zu, fu, {
        capture: !0,
        signal: ju.signal
      })
    });
    let Ou = 0;
    const Yu = null === (su = lu._autoSuspend) || void 0 === su ? void 0 : su.bind(Uu.Howler);

    function hu() {
      Du();
      const {
        ctx: uu,
        masterGain: Eu
      } = lu;
      return uu && Eu ? {
        ctx: uu,
        destination: Eu,
        holdAwake: uu => {
          var Eu, ju;
          (Ou += uu ? 1 : -1, uu) ? null === (Eu = lu._autoResume) || void 0 === Eu || Eu.call(lu): null === (ju = lu._autoSuspend) || void 0 === ju || ju.call(lu)
        },
        wake: () => {
          var Eu;
          "running" !== uu.state && (null === (Eu = lu._autoResume) || void 0 === Eu || Eu.call(lu), uu.resume().catch((() => {})))
        }
      } : null
    }

    function Du() {
      var uu;
      (lu.volume(), lu.ctx && lu.autoUnlock) && (null === (uu = lu._unlockAudio) || void 0 === uu || uu.call(lu))
    }
    Yu && (lu._autoSuspend = () => Ou > 0 ? Uu.Howler : Yu())
  },
  42864: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => su,
      g: () => Uu
    });
    const su = ["recording", "freecam", "keyframe"];

    function Uu() {
      const uu = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(uu[1]) << 32n | BigInt(uu[0])
    }
  },
  60870: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      HOLD_TIMEOUT_MS: () => fu,
      ReplayViewer: () => bu
    });
    var su = ju(37341),
      Uu = ju(37383),
      Zu = ju(37375),
      Xu = ju(37400),
      lu = ju(4970),
      qu = ju(42864);
    const fu = 1e4,
      Cu = new Set(["AN"]);
    class bu {
      constructor(uu) {
        var Eu;
        this.deps = uu, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (Eu = uu.now) && void 0 !== Eu ? Eu : () => performance.now()
      }
      get inPlayback() {
        return this.playback
      }
      get view() {
        return this.lastView
      }
      get isOpen() {
        return null !== this.lastView && this.lastView.state !== lu.od.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get dl() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? su.c.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(uu, Eu) {
        var ju, Zu, Xu, qu;
        const {
          client: fu
        } = this.deps;
        if (!this.playback) {
          if (!fu.setPlayback(!0)) throw new Error(su.c.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const Cu = this.epoch;
        let bu;
        try {
          bu = await fu.open(uu, (() => (0, Uu.b)(uu, Eu)))
        } finally {
          this.loadingOpens--
        }
        if (Cu !== this.epoch && "reloading" !== bu) throw new Error(su.c.coreStopped.text);
        if ("opening" !== bu) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const uu = function(uu) {
            switch (uu) {
              case "reloading":
                return null;
              case "stopped":
              case lu.ed.ModuleTrap:
                return su.c.coreStopped;
              case lu.ed.ModuleLoad:
                return su.c.viewerLoadFailed;
              case lu.ed.TooLarge:
                return su.c.cantOpen
            }
          }(bu);
          if (null === uu) return;
          throw new Error(uu.text)
        }
        return this.rejectSave(new Error(su.c.saveClosed.text)), this.fileName = null !== (ju = null !== (Zu = Eu.fileName) && void 0 !== Zu ? Zu : null === (Xu = Eu.fileHandle) || void 0 === Xu ? void 0 : Xu.name) && void 0 !== ju ? ju : null, this.fileHandle = null !== (qu = Eu.fileHandle) && void 0 !== qu ? qu : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((uu, Eu) => {
          this.pendingOpen = {
            resolve: uu,
            reject: Eu
          }
        }))
      }
      play() {
        this.holds.has("AN") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("AN")
      }
      seek(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const ju = this.lastView;
        null !== ju && (Eu || uu < ju.Tb) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(uu, Eu)
      }
      setSpeed(uu) {
        this.deps.client.setSpeed(uu)
      }
      setCameraMode(uu) {
        this.deps.client.setCameraMode(uu)
      }
      cycleCameraMode() {
        const uu = this.lastView;
        null !== uu && uu.state !== lu.od.None && this.setCameraMode(qu.c[(qu.c.indexOf(uu.cameraMode) + 1) % qu.c.length])
      }
      addKeyframe() {
        this.edited(this.deps.client.addKeyframe())
      }
      setKeyframe(uu) {
        this.edited(this.deps.client.setKeyframe(uu))
      }
      moveKeyframe(uu, Eu) {
        this.edited(this.deps.client.moveKeyframe(uu, Eu))
      }
      deleteKeyframes(uu, Eu) {
        this.edited(this.deps.client.deleteKeyframes(uu, Eu))
      }
      setMark(uu) {
        this.edited(this.deps.client.setMark(uu))
      }
      crop(uu, Eu) {
        return !(Eu <= uu) && (null !== this.pendingSave ? (this.deps.notify(su.c.saveBusy), !1) : !!this.deps.client.crop(uu, Eu) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(su.c.saveBusy.text)) : new Promise(((uu, Eu) => {
          const ju = {
            resolve: uu,
            reject: Eu
          };
          this.pendingSave = ju, this.editsAtSave = this.edits, this.deps.client.save((0, qu.g)()).then((uu => {
            this.pendingSave === ju && this.saveStarted(uu)
          }), (uu => {
            this.pendingSave === ju && this.rejectSave(uu instanceof Error ? uu : new Error(String(uu)))
          }))
        }))
      }
      saveStarted(uu) {
        switch (uu) {
          case "sealing":
            return;
          case "busy":
            return void this.saveFailed(!0);
          case "refused":
            return void(this.saveRefused = !0);
          case "tooLarge":
            return void this.saveFailed(!1)
        }
      }
      markSaved(uu, Eu) {
        var ju, su;
        this.fileHandle = uu, this.fileName = null !== (ju = null !== (su = null === uu || void 0 === uu ? void 0 : uu.name) && void 0 !== su ? su : Eu) && void 0 !== ju ? ju : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(su.c.coreStopped.text)), this.rejectSave(new Error(su.c.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var uu, Eu, ju;
        const su = this.deps.client.view(),
          Uu = su !== this.lastView;
        this.lastView = su, this.opening && null !== su && su.state !== lu.od.None && su.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, Xu.f)()), this.cropAsked ? (this.cropAsked = !1, null !== su && su.state === lu.od.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== su && su.state !== lu.od.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const Zu = 0 === this.settleFrames && 0 === (null !== (uu = null === (Eu = (ju = this.deps).meshPending) || void 0 === Eu ? void 0 : Eu.call(ju)) && void 0 !== uu ? uu : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && Zu && this.release("opening"), this.holds.has("seek") && Zu && this.release("seek"), this.holds.has("crop") && !this.cropRunning && Zu && this.release("crop");
        const qu = this.now();
        for (const [Xu, lu] of this.holds) !Cu.has(Xu) && qu - lu >= fu && this.release(Xu);
        this.saveRefused && !this.cropping && this.saveFailed(!1), Uu && this.deps.onChange()
      }
      cropped() {
        (0, Xu.f)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(uu) {
        switch (uu.reason) {
          case lu.ed.TooLarge:
            break;
          case lu.ed.Open:
          case lu.ed.NothingStaged: {
            this.opening = !1, this.release("opening");
            const Eu = (0, Zu.f)(uu.version) ? su.c.replayTooOld : su.c.cantOpen;
            null === this.pendingOpen && this.deps.notify(Eu), this.settleOpen(new Error(Eu.text));
            break
          }
          case lu.ed.Crop:
            if (uu.code === lu.bd.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(su.c.cropFailed);
            break;
          case lu.ed.ModuleTrap:
          case lu.ed.ModuleLoad:
          case lu.ed.Port:
            this.moduleEnded(uu.reason === lu.ed.ModuleTrap ? su.c.coreStopped : su.c.cantOpen);
            break;
          case lu.ed.NotLive:
            console.warn("[bloxd-wasm-client] the core refused a recorder command in playback");
            break;
          default:
            console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${uu.reason})`), this.seekAsked = !1, this.release("seek")
        }
        this.deps.onChange()
      }
      moduleEnded(uu) {
        this.resetInFlight(), this.release("opening"), this.release("seek"), this.release("crop"), null === this.pendingOpen && this.deps.notify(uu), this.settleOpen(new Error(uu.text))
      }
      saveDone(uu) {
        const Eu = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === Eu || void 0 === Eu || Eu.resolve(uu)
      }
      saveFailed(uu) {
        this.rejectSave(new Error(uu ? su.c.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(uu) {
        uu && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(su.c.cropBusy.text)) : this.deps.notify(su.c.cropBusy)
      }
      resetInFlight() {
        this.opening = !1, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0
      }
      settleOpen(uu) {
        const Eu = this.pendingOpen;
        this.pendingOpen = null, null === uu ? null === Eu || void 0 === Eu || Eu.resolve() : null === Eu || void 0 === Eu || Eu.reject(uu)
      }
      rejectSave(uu) {
        const Eu = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === Eu || void 0 === Eu || Eu.reject(uu)
      }
      hold(uu) {
        const Eu = 0 === this.holds.size;
        this.holds.set(uu, this.now()), Eu && this.deps.setHoldDraws(!0)
      }
      release(uu) {
        this.holds.delete(uu) && 0 === this.holds.size && this.deps.setHoldDraws(!1)
      }
      releaseAll() {
        this.holds.size > 0 && (this.holds.clear(), this.deps.setHoldDraws(!1))
      }
    }
  },
  60868: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      MESH_TAIL_MS: () => fu,
      PLAY_START_TIMEOUT_MS: () => lu,
      startWasmReplayVideoExport: () => bu
    });
    var su = ju(39555),
      Uu = ju(60870),
      Zu = ju(4970),
      Xu = ju(2522);
    const lu = Uu.HOLD_TIMEOUT_MS + 5e3,
      qu = 50,
      fu = 200;

    function Cu(uu) {
      var Eu;
      return (null === (Eu = uu.view) || void 0 === Eu ? void 0 : Eu.state) === Zu.od.Cropping || uu.dl.includes("crop")
    }

    function bu(uu) {
      return (0, su.c)((() => function(uu) {
        var Eu, ju, su, Uu, bu, cu;
        const Nu = uu.viewer(),
          Ou = null !== (Eu = null === Nu || void 0 === Nu ? void 0 : Nu.view) && void 0 !== Eu ? Eu : null,
          Yu = uu.canvas();
        if (!Nu || !Ou || Ou.state === Zu.od.None || 0 === Ou.totalTicks || !Yu || Cu(Nu)) return null;
        const hu = null !== (ju = uu.now) && void 0 !== ju ? ju : () => performance.now(),
          Du = Nu.id,
          gu = () => {
            const Eu = uu.viewer();
            return Eu === Nu && Eu.id === Du && Eu.isOpen ? Eu : null
          },
          Mu = Math.min(null !== (su = null === (Uu = Ou.mark) || void 0 === Uu ? void 0 : Uu.outTick) && void 0 !== su ? su : 1 / 0, Ou.totalTicks - 1);
        let eu = null,
          Gu = !1;
        const pu = () => {
          var uu, Eu;
          return (null === (uu = gu()) || void 0 === uu || null === (Eu = uu.view) || void 0 === Eu ? void 0 : Eu.state) === Zu.od.Playing
        };
        return {
          cV: Zu.Ed,
          playbackMarkInTick: null !== (bu = null === (cu = Ou.mark) || void 0 === cu ? void 0 : cu.inTick) && void 0 !== bu ? bu : null,
          startFailure: () => {
            const uu = gu();
            return null === uu ? "Another replay opened. Export it again from there." : Cu(uu) ? "Wait for the crop to finish, then export again." : null
          },
          fileName: () => {
            var uu, Eu;
            return null !== (uu = null === (Eu = gu()) || void 0 === Eu ? void 0 : Eu.fileName) && void 0 !== uu ? uu : null
          },
          playbackSpeed: () => {
            var uu, Eu, ju;
            return null !== (uu = null === (Eu = gu()) || void 0 === Eu || null === (ju = Eu.view) || void 0 === ju ? void 0 : ju.speed) && void 0 !== uu ? uu : 1
          },
          setPlaybackSpeed: uu => {
            var Eu;
            null === (Eu = gu()) || void 0 === Eu || Eu.setSpeed(uu)
          },
          play: () => {
            var uu;
            Gu = !1, eu = hu(), null === (uu = gu()) || void 0 === uu || uu.play()
          },
          pause: () => {
            var uu;
            null === (uu = gu()) || void 0 === uu || uu.pause()
          },
          seekToTick: uu => {
            var Eu;
            null === (Eu = gu()) || void 0 === Eu || Eu.seek(uu, !0)
          },
          seekSettled: () => new Promise((uu => {
            const Eu = setInterval((() => {
              const ju = gu();
              null === ju ? (clearInterval(Eu), uu()) : ju.dl.includes("seek") || (clearInterval(Eu), setTimeout(uu, fu))
            }), qu)
          })),
          isPlaying: () => {
            var uu, Eu, ju;
            return null !== eu && null !== gu() && (!!pu() || !Gu && (null !== (uu = null === (Eu = gu()) || void 0 === Eu || null === (ju = Eu.view) || void 0 === ju ? void 0 : ju.Tb) && void 0 !== uu ? uu : 0) < Mu && hu() - eu < lu)
          },
          watchPlayback: Eu => {
            const ju = uu.watchViewer((() => {
                Gu ||= null !== eu && pu(), Eu()
              })),
              su = setTimeout(Eu, lu + 1);
            return () => {
              clearTimeout(su), ju()
            }
          },
          playbackFailure: () => {
            var uu, Eu;
            const ju = gu();
            return null === ju ? "The replay closed before the video finished." : (null !== (uu = null === (Eu = ju.view) || void 0 === Eu ? void 0 : Eu.Tb) && void 0 !== uu ? uu : 0) >= Mu ? null : Gu ? "The replay stopped before the video finished." : "The replay didn't start playing."
          },
          canvas: () => Yu,
          closeViewer: () => {
            uu.requestViewer("close")
          },
          reopenViewer: () => {
            uu.requestViewer("open")
          },
          holdInput: Xu.h
        }
      }(uu)))
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);