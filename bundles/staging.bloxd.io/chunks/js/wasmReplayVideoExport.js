export const id = 63;
export const ids = [57, 63, 91];
export const modules = {
  36755: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => mu,
      h: () => Ju
    });
    var Eu = yu(34);
    const Ku = 1500,
      Qu = 1e3,
      mu = {
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
      };

    function Ju(uu) {
      var Ru;
      const yu = null !== (Ru = uu.timeoutMs) && void 0 !== Ru ? Ru : "Error" === uu.type ? Ku : Qu;
      Eu.k.Op("showBottomMessage", {
        message: uu.text,
        timeoutLength: yu,
        type: uu.type
      })
    }
  },
  36760: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Eu,
      e: () => Ku
    });
    const Eu = "data-replay-ui-active",
      Ku = [{
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
  36762: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Xu,
      f: () => ru,
      j: () => Vu
    });
    var Eu = yu(27),
      Ku = yu(34),
      Qu = yu(36760);

    function mu() {
      const uu = {};
      for (const {
          group: Ru
        }
        of Qu.e) uu[Ru] = !0;
      return uu
    }
    let Ju = mu();

    function Nu() {
      Ku.k.Op("replayViewer|uiVisibilityChanged")
    }

    function Xu() {
      return Ju
    }

    function Vu(uu, Ru) {
      Ju[uu] !== Ru && (Ju = {
        ...Ju,
        [uu]: Ru
      }, "nametag" === uu && Eu.d.set({
        areNametagsHidden: !Ru
      }), Nu())
    }

    function ru() {
      Ju = mu(), Eu.d.set({
        areNametagsHidden: !1
      }), Nu()
    }
  },
  38989: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Gu
    });
    var Eu = yu(1670),
      Ku = yu(1311),
      Qu = yu(64),
      mu = yu(1035),
      Ju = yu.n(mu),
      Nu = yu(1408),
      Xu = yu(106);
    const Vu = ["video/webm;codecs=vp9,opus", "video/webm;codecs=vp8,opus", "video/webm;codecs=vp9", "video/webm;codecs=vp8", "video/webm"],
      ru = ["video/mp4;codecs=avc1,mp4a.40.2", "video/mp4;codecs=avc1.42E01E,mp4a.40.2", "video/mp4;codecs=avc1", "video/mp4"];

    function Bu(uu) {
      return "webm" === uu ? Vu : ru
    }

    function xu(uu) {
      for (const Ru of uu)
        if ("undefined" !== typeof MediaRecorder && MediaRecorder.isTypeSupported(Ru)) return Ru;
      return null
    }

    function Su(uu) {
      return null !== xu(Bu(uu))
    }
    var pu = yu(1079);
    const Tu = [{
      id: "webm",
      label: "WebM",
      description: "Usually less screen tearing, but may not play in all media players."
    }, {
      id: "mp4",
      label: "MP4",
      description: "Works in more players, but may show graphical glitches on some devices."
    }];

    function Wu() {
      return Su("webm") ? "webm" : Su("mp4") ? "mp4" : "webm"
    }

    function ju(uu) {
      let {
        cards: Ru
      } = uu;
      return (0, pu.jsx)("div", {
        className: "ReplayVideoExportOptionCards",
        children: Ru.map((uu => (0, pu.jsxs)("div", {
          className: "ReplayVideoExportOptionColumn",
          children: [(0, pu.jsx)("div", {
            className: Ju()("ReplayVideoExportOptionCard", {
              Selected: uu.selected,
              Disabled: uu.disabled
            }),
            onClick: () => {
              uu.disabled || uu.onSelect()
            },
            children: (0, pu.jsxs)("div", {
              className: "ReplayVideoExportOptionCardBody",
              children: [(0, pu.jsx)("div", {
                className: "ReplayVideoExportOptionCardLabel",
                children: uu.label
              }), (0, pu.jsx)("div", {
                className: "ReplayVideoExportOptionCardDescription",
                children: uu.description
              })]
            })
          }), uu.disabled && uu.disabledReason && (0, pu.jsx)("div", {
            className: "ReplayVideoExportOptionError SmallTextLight",
            children: uu.disabledReason
          })]
        }, uu.id)))
      })
    }
    const Hu = (0, Qu.memo)((function(uu) {
      let {
        hasPlaybackMark: Ru,
        canIncludeUi: yu,
        includeUiDisabledReason: Eu,
        selectionRef: Ku,
        closePopup: mu
      } = uu;
      const Ju = Su("webm") || Su("mp4"),
        [Vu, ru] = (0, Qu.useState)(Wu),
        [Bu, xu] = (0, Qu.useState)(yu),
        Hu = Ju && Su(Vu);
      if (!Ju) {
        const uu = (0, Xu.isMobile)() ? "screen recording" : "OBS";
        return (0, pu.jsxs)("div", {
          className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
          children: [(0, pu.jsx)("div", {
            className: "PromptPopupNotificationTitle SmallTextBold",
            children: "Can't export video"
          }), (0, pu.jsx)("div", {
            className: "PromptPopupNotificationSubtitle SmallTextLight",
            children: `Your device does not support exporting. Try recording with an external software like ${uu}.`
          }), (0, pu.jsx)("div", {
            className: "PromptPopupNotificationBody",
            children: (0, pu.jsx)(Nu.F, {
              className: "PromptPopupNotificationBodyButton",
              onClick: () => {
                Ku.options = null, mu()
              },
              children: "Close"
            })
          })]
        })
      }
      const du = Ru ? "This will only play the range you've set.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes." : "This will play the whole recording from the start.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes.",
        bu = [{
          id: "withoutUi",
          label: "Without UI",
          description: "Usually cleaner and sharper.",
          selected: !Bu,
          disabled: !1,
          disabledReason: null,
          onSelect: () => {
            xu(!1)
          }
        }, {
          id: "withUi",
          label: "With UI",
          description: "Includes HUD elements. May look worse on some devices.",
          selected: Bu,
          disabled: !yu,
          disabledReason: Eu,
          onSelect: () => {
            xu(!0)
          }
        }],
        Cu = Tu.map((uu => {
          const Ru = Su(uu.id);
          return {
            id: uu.id,
            label: uu.label,
            description: uu.description,
            selected: Vu === uu.id,
            disabled: !Ru,
            disabledReason: "Your device doesn't support this format",
            onSelect: () => {
              ru(uu.id)
            }
          }
        }));
      return (0, pu.jsxs)("div", {
        className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
        children: [(0, pu.jsx)("div", {
          className: "PromptPopupNotificationTitle SmallTextBold",
          children: "Export video?"
        }), (0, pu.jsx)("div", {
          className: "PromptPopupNotificationSubtitle SmallTextLight",
          children: du
        }), (0, pu.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, pu.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "UI"
          }), (0, pu.jsx)(ju, {
            cards: bu
          })]
        }), (0, pu.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, pu.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "Format"
          }), (0, pu.jsx)(ju, {
            cards: Cu
          })]
        }), (0, pu.jsxs)("div", {
          className: "PromptPopupNotificationBody",
          children: [(0, pu.jsx)(Nu.l, {
            className: "PromptPopupNotificationBodyButton PromptPopupNotificationBodyPrimaryButton",
            disabled: !Hu,
            onClick: () => {
              Ku.options = {
                format: Vu,
                includeUi: yu && Bu
              }, mu()
            },
            children: "Export"
          }), (0, pu.jsx)(Nu.F, {
            className: "PromptPopupNotificationBodyButton",
            onClick: () => {
              Ku.options = null, mu()
            },
            children: "Cancel"
          })]
        })]
      })
    }));
    var du = yu(4630),
      bu = yu(36760),
      Cu = yu(36762);
    let ku = null;

    function eu() {
      return function() {
        const uu = (0, Cu.c)();
        for (const {
            group: Ru,
            dataAttr: yu
          }
          of bu.e)
          if (yu && uu[Ru]) return !0;
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
    async function Au(uu, Ru, yu) {
      return uu ? async function() {
        const uu = await navigator.mediaDevices.getDisplayMedia({
          video: !0,
          audio: !1,
          preferCurrentTab: !0,
          selfBrowserSurface: "include"
        });
        for (const Ru of uu.getAudioTracks()) Ru.stop(), uu.removeTrack(Ru);
        return uu
      }(): Ru().captureStream(Math.max(1, Math.round(yu)))
    }
    var Du = yu(38836);
    let Mu = !1;

    function Iu(uu) {
      uu.holdInput(!1), (0, Du.c)(!1)
    }
    async function Gu(uu) {
      var Ru, yu;
      if ((0, Du.b)() || Mu) return;
      const Qu = uu();
      if (!Qu) return;
      Mu = !0;
      let mu = null;
      const Ju = Qu.playbackMarkInTick,
        {
          canIncludeUi: Nu,
          includeUiDisabledReason: Xu
        } = eu();
      try {
        mu = await async function(uu) {
          let {
            hasPlaybackMark: Ru,
            canIncludeUi: yu,
            includeUiDisabledReason: Eu
          } = uu;
          const Qu = {
              options: null
            },
            mu = Ku.NotificationProvider.showCustomPopup({
              body: uu => (0, pu.jsx)(Hu, {
                hasPlaybackMark: Ru,
                canIncludeUi: yu,
                includeUiDisabledReason: Eu,
                selectionRef: Qu,
                closePopup: uu
              }),
              disableExitButton: !0,
              disablePressBackgroundToClose: !0,
              unlockPointerKey: "replayVideoExportOptions"
            });
          return "notificationTornDown" === await mu.getResult() ? null : Qu.options
        }({
          hasPlaybackMark: null !== Ju,
          canIncludeUi: Nu,
          includeUiDisabledReason: Xu
        })
      } finally {
        Mu = !1
      }
      if (!mu) return;
      const Vu = null !== (Ru = null === (yu = Qu.startFailure) || void 0 === yu ? void 0 : yu.call(Qu)) && void 0 !== Ru ? Ru : null;
      if (null !== Vu) return void Ku.NotificationProvider.showAlertPopup({
        title: "Video export failed",
        subtitle: Vu
      });
      if (! function(uu) {
          return !(0, Du.b)() && ((0, Du.c)(!0), uu.holdInput(!0), !0)
        }(Qu)) return;
      let ru = null;
      try {
        ru = await Au(mu.includeUi, (() => Qu.canvas()), Qu.eD)
      } catch (Uu) {
        return console.error("Failed to create video stream for export", Uu), Iu(Qu), void Ku.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: Uu instanceof Error ? Uu.message : "Could not start capture."
        })
      }
      let Su = null;
      const Tu = [];
      let Wu = null,
        ju = null;
      try {
        var bu, Cu, Gu;
        Su = Qu.playbackSpeed(), Qu.closeViewer(), Qu.setPlaybackSpeed(1), Qu.pause(), Qu.seekToTick(null !== Ju && void 0 !== Ju ? Ju : 0);
        const uu = await async function() {
          const uu = du.Howler.masterGain;
          if (!du.Howler.ctx || !uu) return null;
          await du.Howler.ctx.resume();
          const Ru = du.Howler.ctx.createMediaStreamDestination();
          uu.connect(Ru), ku = Ru;
          const [yu] = Ru.stream.getAudioTracks();
          return null !== yu && void 0 !== yu ? yu : null
        }();
        ju = new MediaStream;
        for (const Eu of ru.getVideoTracks()) ju.addTrack(Eu);
        uu && ju.addTrack(uu);
        const Ru = function(uu) {
          const Ru = xu(Bu(uu));
          if (!Ru) throw new Error(`No MediaRecorder mime type available for ${uu}`);
          return Ru
        }(mu.format);
        Wu = new MediaRecorder(ju, {
          mimeType: Ru,
          videoBitsPerSecond: 8e6
        }), Wu.ondataavailable = uu => {
          uu.data.size > 0 && Tu.push(uu.data)
        };
        const yu = new Promise((uu => {
          Wu.onstop = () => {
            uu()
          }
        }));
        await (null === (bu = Qu.seekSettled) || void 0 === bu ? void 0 : bu.call(Qu));
        const [Nu] = ru.getVideoTracks();
        Wu.start(250), Qu.play();
        const Xu = await
        function(uu, Ru, yu) {
          return new Promise((Eu => {
            let Ku = !1;
            const Qu = uu => {
                Ku || (Ku = !0, Ju(), Ru.removeEventListener("ended", mu), Eu(uu))
              },
              mu = () => {
                Qu("captureLost")
              },
              Ju = uu.watchPlayback((() => {
                uu.isPlaying() || Qu("completed")
              }));
            Ru.addEventListener("ended", mu), yu.onerror = () => {
              Qu("recorderError")
            }, "ended" !== Ru.readyState ? uu.isPlaying() || Qu("completed") : Qu("captureLost")
          }))
        }(Qu, Nu, Wu);
        if (Qu.pause(), "inactive" !== Wu.state && Wu.stop(), await yu, "captureLost" === Xu) return void Ku.NotificationProvider.showAlertPopup({
          title: "Video export stopped",
          subtitle: "Screen sharing ended before the replay finished. Nothing was saved."
        });
        if ("recorderError" === Xu) return void Ku.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "The recorder encountered an error. Nothing was saved."
        });
        const Vu = null !== (Cu = null === (Gu = Qu.playbackFailure) || void 0 === Gu ? void 0 : Gu.call(Qu)) && void 0 !== Cu ? Cu : null;
        if (null !== Vu) return void Ku.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: `${Vu} Nothing was saved.`
        });
        const pu = new Blob(Tu, {
          type: Ru
        });
        pu.size > 0 ? (0, Eu.c)(pu, function(uu, Ru) {
          const yu = function(uu) {
            return "mp4" === uu ? "mp4" : "webm"
          }(Ru);
          if (uu) return `${uu.replace(/\.bloxdreplay$/i,"")}.${yu}`;
          return `bloxd-replay-${Date.now()}.${yu}`
        }(Qu.fileName(), mu.format)) : Ku.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "No video data was captured. Try again."
        })
      } catch (Uu) {
        console.error("Replay video export failed", Uu), Ku.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: Uu instanceof Error ? Uu.message : "Something went wrong while exporting."
        })
      } finally {
        if (Wu && "inactive" !== Wu.state) try {
          Wu.stop()
        } catch (Uu) {
          console.error("Failed to stop MediaRecorder", Uu)
        }! function() {
          const uu = du.Howler.masterGain;
          if (ku && uu) {
            try {
              uu.disconnect(ku)
            } catch (Uu) {
              console.error("Failed to disconnect Howler export tee", Uu)
            }
            ku = null
          } else ku = null
        }();
        for (const uu of ru.getTracks()) uu.stop();
        if (ju)
          for (const uu of ju.getTracks()) uu.stop();
        null !== Su && Qu.setPlaybackSpeed(Su), Qu.pause(), Iu(Qu), Qu.reopenViewer()
      }
    }
  },
  4630: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      Howl: () => Ku.Howl,
      Howler: () => Ku.Howler,
      iosAudio: () => Nu,
      musicOutput: () => Tu,
      readyAudioContext: () => Wu
    });
    var Eu, Ku = yu(4638),
      Qu = yu(106);
    const mu = Ku.Howler;
    let Ju;

    function Nu() {
      return Ju ??= "ios" === (0, Qu.getOperatingSystem)(), Ju
    }

    function Xu() {
      var uu, Ru;
      if (mu.ctx || !mu.usingWebAudio || "undefined" === typeof AudioContext || !Nu()) return;
      const yu = navigator.audioSession;
      let Eu;
      "auto" === (null === yu || void 0 === yu ? void 0 : yu.type) && (yu.type = "ambient");
      try {
        Eu = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const Ku = Eu.createGain();
      Ku.gain.setValueAtTime(mu._muted ? 0 : null !== (uu = mu._volume) && void 0 !== uu ? uu : 1, Eu.currentTime), Ku.connect(Eu.destination), mu.ctx = Eu, mu.masterGain = Ku, null === (Ru = mu._setup) || void 0 === Ru || Ru.call(mu)
    }
    mu._mobileUnloaded = !0;
    const Vu = mu.volume.bind(Ku.Howler);
    mu.volume = function() {
      return Xu(), Vu(...arguments)
    };
    const ru = mu.mute.bind(Ku.Howler);
    mu.mute = uu => (Xu(), ru(uu));
    const Bu = Ku.Howl.prototype,
      xu = Bu.init;
    Bu.init = function(uu) {
      return Xu(), xu.call(this, uu)
    };
    let Su = 0;
    const pu = null === (Eu = mu._autoSuspend) || void 0 === Eu ? void 0 : Eu.bind(Ku.Howler);

    function Tu() {
      Wu();
      const {
        ctx: uu,
        masterGain: Ru
      } = mu;
      return uu && Ru ? {
        ctx: uu,
        destination: Ru,
        holdAwake: uu => {
          var Ru, yu;
          (Su += uu ? 1 : -1, uu) ? null === (Ru = mu._autoResume) || void 0 === Ru || Ru.call(mu): null === (yu = mu._autoSuspend) || void 0 === yu || yu.call(mu)
        },
        wake: () => {
          var Ru;
          "running" !== uu.state && (null === (Ru = mu._autoResume) || void 0 === Ru || Ru.call(mu), uu.resume().catch((() => {})))
        }
      } : null
    }

    function Wu() {
      var uu;
      (mu.volume(), mu.ctx && mu.autoUnlock) && (null === (uu = mu._unlockAudio) || void 0 === uu || uu.call(mu))
    }
    pu && (mu._autoSuspend = () => Su > 0 ? Ku.Howler : pu())
  },
  42132: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Eu,
      g: () => Ku
    });
    const Eu = ["recording", "freecam", "keyframe"];

    function Ku() {
      const uu = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(uu[1]) << 32n | BigInt(uu[0])
    }
  },
  42174: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      HOLD_TIMEOUT_MS: () => Ju,
      ReplayViewer: () => Xu
    });
    var Eu = yu(36755),
      Ku = yu(36762),
      Qu = yu(4562),
      mu = yu(42132);
    const Ju = 1e4,
      Nu = new Set(["ix"]);
    class Xu {
      constructor(uu) {
        var Ru;
        this.deps = uu, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (Ru = uu.now) && void 0 !== Ru ? Ru : () => performance.now()
      }
      get inPlayback() {
        return this.playback
      }
      get view() {
        return this.lastView
      }
      get isOpen() {
        return null !== this.lastView && this.lastView.state !== Qu.bd.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get jJ() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? Eu.d.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(uu, Ru) {
        var yu, Ku, mu, Ju;
        const {
          client: Nu
        } = this.deps;
        if (!this.playback) {
          if (!Nu.setPlayback(!0)) throw new Error(Eu.d.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const Xu = this.epoch;
        let Vu;
        try {
          Vu = await Nu.open(uu)
        } finally {
          this.loadingOpens--
        }
        if (Xu !== this.epoch) throw new Error(Eu.d.coreStopped.text);
        if ("opening" !== Vu) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const uu = function(uu) {
            switch (uu) {
              case "reloading":
                return null;
              case "stopped":
              case Qu.Xc.ModuleTrap:
                return Eu.d.coreStopped;
              case Qu.Xc.ModuleLoad:
                return Eu.d.viewerLoadFailed;
              case Qu.Xc.TooLarge:
                return Eu.d.cantOpen
            }
          }(Vu);
          if (null === uu) return;
          throw new Error(uu.text)
        }
        return this.rejectSave(new Error(Eu.d.saveClosed.text)), this.fileName = null !== (yu = null !== (Ku = Ru.fileName) && void 0 !== Ku ? Ku : null === (mu = Ru.fileHandle) || void 0 === mu ? void 0 : mu.name) && void 0 !== yu ? yu : null, this.fileHandle = null !== (Ju = Ru.fileHandle) && void 0 !== Ju ? Ju : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((uu, Ru) => {
          this.pendingOpen = {
            resolve: uu,
            reject: Ru
          }
        }))
      }
      play() {
        this.holds.has("ix") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("ix")
      }
      seek(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const yu = this.lastView;
        null !== yu && (Ru || uu < yu.sr) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(uu, Ru)
      }
      setSpeed(uu) {
        this.deps.client.setSpeed(uu)
      }
      setCameraMode(uu) {
        this.deps.client.setCameraMode(uu)
      }
      cycleCameraMode() {
        const uu = this.lastView;
        null !== uu && uu.state !== Qu.bd.None && this.setCameraMode(mu.c[(mu.c.indexOf(uu.cameraMode) + 1) % mu.c.length])
      }
      addKeyframe() {
        this.edited(this.deps.client.addKeyframe())
      }
      setKeyframe(uu) {
        this.edited(this.deps.client.setKeyframe(uu))
      }
      moveKeyframe(uu, Ru) {
        this.edited(this.deps.client.moveKeyframe(uu, Ru))
      }
      deleteKeyframes(uu, Ru) {
        this.edited(this.deps.client.deleteKeyframes(uu, Ru))
      }
      setMark(uu) {
        this.edited(this.deps.client.setMark(uu))
      }
      crop(uu, Ru) {
        return !(Ru <= uu) && (null !== this.pendingSave ? (this.deps.notify(Eu.d.saveBusy), !1) : !!this.deps.client.crop(uu, Ru) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(Eu.d.saveBusy.text)) : new Promise(((uu, Ru) => {
          const yu = {
            resolve: uu,
            reject: Ru
          };
          this.pendingSave = yu, this.editsAtSave = this.edits, this.deps.client.save((0, mu.g)()).then((uu => {
            this.pendingSave === yu && this.saveStarted(uu)
          }), (uu => {
            this.pendingSave === yu && this.rejectSave(uu instanceof Error ? uu : new Error(String(uu)))
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
      markSaved(uu, Ru) {
        var yu, Eu;
        this.fileHandle = uu, this.fileName = null !== (yu = null !== (Eu = null === uu || void 0 === uu ? void 0 : uu.name) && void 0 !== Eu ? Eu : Ru) && void 0 !== yu ? yu : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(Eu.d.coreStopped.text)), this.rejectSave(new Error(Eu.d.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var uu, Ru, yu;
        const Eu = this.deps.client.view(),
          mu = Eu !== this.lastView;
        this.lastView = Eu, this.opening && null !== Eu && Eu.state !== Qu.bd.None && Eu.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, Ku.f)()), this.cropAsked ? (this.cropAsked = !1, null !== Eu && Eu.state === Qu.bd.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== Eu && Eu.state !== Qu.bd.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const Xu = 0 === this.settleFrames && 0 === (null !== (uu = null === (Ru = (yu = this.deps).meshPending) || void 0 === Ru ? void 0 : Ru.call(yu)) && void 0 !== uu ? uu : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && Xu && this.release("opening"), this.holds.has("seek") && Xu && this.release("seek"), this.holds.has("crop") && !this.cropRunning && Xu && this.release("crop");
        const Vu = this.now();
        for (const [Ku, Qu] of this.holds) !Nu.has(Ku) && Vu - Qu >= Ju && (this.release(Ku), "opening" === Ku && (this.opening = !1, this.settleOpen(null)));
        this.saveRefused && !this.cropping && this.saveFailed(!1), mu && this.deps.onChange()
      }
      cropped() {
        (0, Ku.f)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(uu) {
        switch (uu.reason) {
          case Qu.Xc.TooLarge:
            break;
          case Qu.Xc.Open:
          case Qu.Xc.NothingStaged:
            this.opening = !1, this.release("opening"), null === this.pendingOpen && this.deps.notify(Eu.d.cantOpen), this.settleOpen(new Error(Eu.d.cantOpen.text));
            break;
          case Qu.Xc.Crop:
            if (uu.code === Qu.Wc.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(Eu.d.cropFailed);
            break;
          case Qu.Xc.ModuleTrap:
          case Qu.Xc.ModuleLoad:
          case Qu.Xc.Port:
            this.moduleEnded(uu.reason === Qu.Xc.ModuleTrap ? Eu.d.coreStopped : Eu.d.cantOpen);
            break;
          case Qu.Xc.NotLive:
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
        const Ru = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === Ru || void 0 === Ru || Ru.resolve(uu)
      }
      saveFailed(uu) {
        this.rejectSave(new Error(uu ? Eu.d.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(uu) {
        uu && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(Eu.d.cropBusy.text)) : this.deps.notify(Eu.d.cropBusy)
      }
      resetInFlight() {
        this.opening = !1, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0
      }
      settleOpen(uu) {
        const Ru = this.pendingOpen;
        this.pendingOpen = null, null === uu ? null === Ru || void 0 === Ru || Ru.resolve() : null === Ru || void 0 === Ru || Ru.reject(uu)
      }
      rejectSave(uu) {
        const Ru = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === Ru || void 0 === Ru || Ru.reject(uu)
      }
      hold(uu) {
        const Ru = 0 === this.holds.size;
        this.holds.set(uu, this.now()), Ru && this.deps.setHoldDraws(!0)
      }
      release(uu) {
        this.holds.delete(uu) && 0 === this.holds.size && this.deps.setHoldDraws(!1)
      }
      releaseAll() {
        this.holds.size > 0 && (this.holds.clear(), this.deps.setHoldDraws(!1))
      }
    }
  },
  42168: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      MESH_TAIL_MS: () => Xu,
      PLAY_START_TIMEOUT_MS: () => Ju,
      startWasmReplayVideoExport: () => ru
    });
    var Eu = yu(38989),
      Ku = yu(42174),
      Qu = yu(4562),
      mu = yu(2320);
    const Ju = Ku.HOLD_TIMEOUT_MS + 5e3,
      Nu = 50,
      Xu = 200;

    function Vu(uu) {
      var Ru;
      return (null === (Ru = uu.view) || void 0 === Ru ? void 0 : Ru.state) === Qu.bd.Cropping || uu.jJ.includes("crop")
    }

    function ru(uu) {
      return (0, Eu.c)((() => function(uu) {
        var Ru, yu, Eu, Ku, ru, Bu;
        const xu = uu.viewer(),
          Su = null !== (Ru = null === xu || void 0 === xu ? void 0 : xu.view) && void 0 !== Ru ? Ru : null,
          pu = uu.canvas();
        if (!xu || !Su || Su.state === Qu.bd.None || 0 === Su.totalTicks || !pu || Vu(xu)) return null;
        const Tu = null !== (yu = uu.now) && void 0 !== yu ? yu : () => performance.now(),
          Wu = xu.id,
          ju = () => {
            const Ru = uu.viewer();
            return Ru === xu && Ru.id === Wu && Ru.isOpen ? Ru : null
          },
          Hu = Math.min(null !== (Eu = null === (Ku = Su.mark) || void 0 === Ku ? void 0 : Ku.outTick) && void 0 !== Eu ? Eu : 1 / 0, Su.totalTicks - 1);
        let du = null,
          bu = !1;
        const Cu = () => {
          var uu, Ru;
          return (null === (uu = ju()) || void 0 === uu || null === (Ru = uu.view) || void 0 === Ru ? void 0 : Ru.state) === Qu.bd.Playing
        };
        return {
          eD: Qu.od,
          playbackMarkInTick: null !== (ru = null === (Bu = Su.mark) || void 0 === Bu ? void 0 : Bu.inTick) && void 0 !== ru ? ru : null,
          startFailure: () => {
            const uu = ju();
            return null === uu ? "Another replay opened. Export it again from there." : Vu(uu) ? "Wait for the crop to finish, then export again." : null
          },
          fileName: () => {
            var uu, Ru;
            return null !== (uu = null === (Ru = ju()) || void 0 === Ru ? void 0 : Ru.fileName) && void 0 !== uu ? uu : null
          },
          playbackSpeed: () => {
            var uu, Ru, yu;
            return null !== (uu = null === (Ru = ju()) || void 0 === Ru || null === (yu = Ru.view) || void 0 === yu ? void 0 : yu.speed) && void 0 !== uu ? uu : 1
          },
          setPlaybackSpeed: uu => {
            var Ru;
            null === (Ru = ju()) || void 0 === Ru || Ru.setSpeed(uu)
          },
          play: () => {
            var uu;
            bu = !1, du = Tu(), null === (uu = ju()) || void 0 === uu || uu.play()
          },
          pause: () => {
            var uu;
            null === (uu = ju()) || void 0 === uu || uu.pause()
          },
          seekToTick: uu => {
            var Ru;
            null === (Ru = ju()) || void 0 === Ru || Ru.seek(uu, !0)
          },
          seekSettled: () => new Promise((uu => {
            const Ru = setInterval((() => {
              const yu = ju();
              null === yu ? (clearInterval(Ru), uu()) : yu.jJ.includes("seek") || (clearInterval(Ru), setTimeout(uu, Xu))
            }), Nu)
          })),
          isPlaying: () => {
            var uu, Ru, yu;
            return null !== du && null !== ju() && (!!Cu() || !bu && (null !== (uu = null === (Ru = ju()) || void 0 === Ru || null === (yu = Ru.view) || void 0 === yu ? void 0 : yu.sr) && void 0 !== uu ? uu : 0) < Hu && Tu() - du < Ju)
          },
          watchPlayback: Ru => {
            const yu = uu.watchViewer((() => {
                bu ||= null !== du && Cu(), Ru()
              })),
              Eu = setTimeout(Ru, Ju + 1);
            return () => {
              clearTimeout(Eu), yu()
            }
          },
          playbackFailure: () => {
            var uu, Ru;
            const yu = ju();
            return null === yu ? "The replay closed before the video finished." : (null !== (uu = null === (Ru = yu.view) || void 0 === Ru ? void 0 : Ru.sr) && void 0 !== uu ? uu : 0) >= Hu ? null : bu ? "The replay stopped before the video finished." : "The replay didn't start playing."
          },
          canvas: () => pu,
          closeViewer: () => {
            uu.requestViewer("close")
          },
          reopenViewer: () => {
            uu.requestViewer("open")
          },
          holdInput: mu.d
        }
      }(uu)))
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);