export const id = 64;
export const ids = [58, 64, 92];
export const modules = {
  37141: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Pd,
      i: () => Zd
    });
    var pd = kd(29);
    const Nd = 1500,
      Wd = 1e3,
      Pd = {
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

    function Zd(dd) {
      var Jd;
      const kd = null !== (Jd = dd.timeoutMs) && void 0 !== Jd ? Jd : "Error" === dd.type ? Nd : Wd;
      pd.j.nO("showBottomMessage", {
        message: dd.text,
        timeoutLength: kd,
        type: dd.type
      })
    }
  },
  37154: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => pd,
      f: () => Nd
    });
    const pd = "data-replay-ui-active",
      Nd = [{
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
  37160: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Cd,
      e: () => od,
      h: () => Kd
    });
    var pd = kd(22),
      Nd = kd(29),
      Wd = kd(37154);

    function Pd() {
      const dd = {};
      for (const {
          group: Jd
        }
        of Wd.f) dd[Jd] = !0;
      return dd
    }
    let Zd = Pd();

    function gd() {
      Nd.j.nO("replayViewer|uiVisibilityChanged")
    }

    function Cd() {
      return Zd
    }

    function Kd(dd, Jd) {
      Zd[dd] !== Jd && (Zd = {
        ...Zd,
        [dd]: Jd
      }, "nametag" === dd && pd.d.set({
        areNametagsHidden: !Jd
      }), gd())
    }

    function od() {
      Zd = Pd(), pd.d.set({
        areNametagsHidden: !1
      }), gd()
    }
  },
  39378: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => md
    });
    var pd = kd(1769),
      Nd = kd(1371),
      Wd = kd(56),
      Pd = kd(1044),
      Zd = kd.n(Pd),
      gd = kd(1461),
      Cd = kd(95);
    const Kd = ["video/webm;codecs=vp9,opus", "video/webm;codecs=vp8,opus", "video/webm;codecs=vp9", "video/webm;codecs=vp8", "video/webm"],
      od = ["video/mp4;codecs=avc1,mp4a.40.2", "video/mp4;codecs=avc1.42E01E,mp4a.40.2", "video/mp4;codecs=avc1", "video/mp4"];

    function ld(dd) {
      return "webm" === dd ? Kd : od
    }

    function Qd(dd) {
      for (const Jd of dd)
        if ("undefined" !== typeof MediaRecorder && MediaRecorder.isTypeSupported(Jd)) return Jd;
      return null
    }

    function Ld(dd) {
      return null !== Qd(ld(dd))
    }
    var Od = kd(1103);
    const ed = [{
      id: "webm",
      label: "WebM",
      description: "Usually less screen tearing, but may not play in all media players."
    }, {
      id: "mp4",
      label: "MP4",
      description: "Works in more players, but may show graphical glitches on some devices."
    }];

    function Rd() {
      return Ld("webm") ? "webm" : Ld("mp4") ? "mp4" : "webm"
    }

    function Id(dd) {
      let {
        cards: Jd
      } = dd;
      return (0, Od.jsx)("div", {
        className: "ReplayVideoExportOptionCards",
        children: Jd.map((dd => (0, Od.jsxs)("div", {
          className: "ReplayVideoExportOptionColumn",
          children: [(0, Od.jsx)("div", {
            className: Zd()("ReplayVideoExportOptionCard", {
              Selected: dd.selected,
              Disabled: dd.disabled
            }),
            onClick: () => {
              dd.disabled || dd.onSelect()
            },
            children: (0, Od.jsxs)("div", {
              className: "ReplayVideoExportOptionCardBody",
              children: [(0, Od.jsx)("div", {
                className: "ReplayVideoExportOptionCardLabel",
                children: dd.label
              }), (0, Od.jsx)("div", {
                className: "ReplayVideoExportOptionCardDescription",
                children: dd.description
              })]
            })
          }), dd.disabled && dd.disabledReason && (0, Od.jsx)("div", {
            className: "ReplayVideoExportOptionError SmallTextLight",
            children: dd.disabledReason
          })]
        }, dd.id)))
      })
    }
    const Gd = (0, Wd.memo)((function(dd) {
      let {
        hasPlaybackMark: Jd,
        canIncludeUi: kd,
        includeUiDisabledReason: pd,
        selectionRef: Nd,
        closePopup: Pd
      } = dd;
      const Zd = Ld("webm") || Ld("mp4"),
        [Kd, od] = (0, Wd.useState)(Rd),
        [ld, Qd] = (0, Wd.useState)(kd),
        Gd = Zd && Ld(Kd);
      if (!Zd) {
        const dd = (0, Cd.isMobile)() ? "screen recording" : "OBS";
        return (0, Od.jsxs)("div", {
          className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
          children: [(0, Od.jsx)("div", {
            className: "PromptPopupNotificationTitle SmallTextBold",
            children: "Can't export video"
          }), (0, Od.jsx)("div", {
            className: "PromptPopupNotificationSubtitle SmallTextLight",
            children: `Your device does not support exporting. Try recording with an external software like ${dd}.`
          }), (0, Od.jsx)("div", {
            className: "PromptPopupNotificationBody",
            children: (0, Od.jsx)(gd.B, {
              className: "PromptPopupNotificationBodyButton",
              onClick: () => {
                Nd.options = null, Pd()
              },
              children: "Close"
            })
          })]
        })
      }
      const vd = Jd ? "This will only play the range you've set.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes." : "This will play the whole recording from the start.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes.",
        xd = [{
          id: "withoutUi",
          label: "Without UI",
          description: "Usually cleaner and sharper.",
          selected: !ld,
          disabled: !1,
          disabledReason: null,
          onSelect: () => {
            Qd(!1)
          }
        }, {
          id: "withUi",
          label: "With UI",
          description: "Includes HUD elements. May look worse on some devices.",
          selected: ld,
          disabled: !kd,
          disabledReason: pd,
          onSelect: () => {
            Qd(!0)
          }
        }],
        qd = ed.map((dd => {
          const Jd = Ld(dd.id);
          return {
            id: dd.id,
            label: dd.label,
            description: dd.description,
            selected: Kd === dd.id,
            disabled: !Jd,
            disabledReason: "Your device doesn't support this format",
            onSelect: () => {
              od(dd.id)
            }
          }
        }));
      return (0, Od.jsxs)("div", {
        className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
        children: [(0, Od.jsx)("div", {
          className: "PromptPopupNotificationTitle SmallTextBold",
          children: "Export video?"
        }), (0, Od.jsx)("div", {
          className: "PromptPopupNotificationSubtitle SmallTextLight",
          children: vd
        }), (0, Od.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, Od.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "UI"
          }), (0, Od.jsx)(Id, {
            cards: xd
          })]
        }), (0, Od.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, Od.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "Format"
          }), (0, Od.jsx)(Id, {
            cards: qd
          })]
        }), (0, Od.jsxs)("div", {
          className: "PromptPopupNotificationBody",
          children: [(0, Od.jsx)(gd.j, {
            className: "PromptPopupNotificationBodyButton PromptPopupNotificationBodyPrimaryButton",
            disabled: !Gd,
            onClick: () => {
              Nd.options = {
                format: Kd,
                includeUi: kd && ld
              }, Pd()
            },
            children: "Export"
          }), (0, Od.jsx)(gd.B, {
            className: "PromptPopupNotificationBodyButton",
            onClick: () => {
              Nd.options = null, Pd()
            },
            children: "Cancel"
          })]
        })]
      })
    }));
    var vd = kd(4743),
      xd = kd(37154),
      qd = kd(37160);
    let Bd = null;

    function sd() {
      return function() {
        const dd = (0, qd.d)();
        for (const {
            group: Jd,
            dataAttr: kd
          }
          of xd.f)
          if (kd && dd[Jd]) return !0;
        return !1
      }() ? function() {
        var dd;
        return "function" === typeof(null === (dd = navigator.mediaDevices) || void 0 === dd ? void 0 : dd.getDisplayMedia)
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
    async function ad(dd, Jd, kd) {
      return dd ? async function() {
        const dd = await navigator.mediaDevices.getDisplayMedia({
          video: !0,
          audio: !1,
          preferCurrentTab: !0,
          selfBrowserSurface: "include"
        });
        for (const Jd of dd.getAudioTracks()) Jd.stop(), dd.removeTrack(Jd);
        return dd
      }(): Jd().captureStream(Math.max(1, Math.round(kd)))
    }
    var Md = kd(39228);
    let Fd = !1;

    function Yd(dd) {
      dd.holdInput(!1), (0, Md.f)(!1)
    }
    async function md(dd) {
      var Jd, kd;
      if ((0, Md.d)() || Fd) return;
      const Wd = dd();
      if (!Wd) return;
      Fd = !0;
      let Pd = null;
      const Zd = Wd.playbackMarkInTick,
        {
          canIncludeUi: gd,
          includeUiDisabledReason: Cd
        } = sd();
      try {
        Pd = await async function(dd) {
          let {
            hasPlaybackMark: Jd,
            canIncludeUi: kd,
            includeUiDisabledReason: pd
          } = dd;
          const Wd = {
              options: null
            },
            Pd = Nd.NotificationProvider.showCustomPopup({
              body: dd => (0, Od.jsx)(Gd, {
                hasPlaybackMark: Jd,
                canIncludeUi: kd,
                includeUiDisabledReason: pd,
                selectionRef: Wd,
                closePopup: dd
              }),
              disableExitButton: !0,
              disablePressBackgroundToClose: !0,
              unlockPointerKey: "replayVideoExportOptions"
            });
          return "notificationTornDown" === await Pd.getResult() ? null : Wd.options
        }({
          hasPlaybackMark: null !== Zd,
          canIncludeUi: gd,
          includeUiDisabledReason: Cd
        })
      } finally {
        Fd = !1
      }
      if (!Pd) return;
      const Kd = null !== (Jd = null === (kd = Wd.startFailure) || void 0 === kd ? void 0 : kd.call(Wd)) && void 0 !== Jd ? Jd : null;
      if (null !== Kd) return void Nd.NotificationProvider.showAlertPopup({
        title: "Video export failed",
        subtitle: Kd
      });
      if (! function(dd) {
          return !(0, Md.d)() && ((0, Md.f)(!0), dd.holdInput(!0), !0)
        }(Wd)) return;
      let od = null;
      try {
        od = await ad(Pd.includeUi, (() => Wd.canvas()), Wd.AY)
      } catch (bd) {
        return console.error("Failed to create video stream for export", bd), Yd(Wd), void Nd.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: bd instanceof Error ? bd.message : "Could not start capture."
        })
      }
      let Ld = null;
      const ed = [];
      let Rd = null,
        Id = null;
      try {
        var xd, qd, md;
        Ld = Wd.playbackSpeed(), Wd.closeViewer(), Wd.setPlaybackSpeed(1), Wd.pause(), Wd.seekToTick(null !== Zd && void 0 !== Zd ? Zd : 0);
        const dd = await async function() {
          const dd = vd.Howler.masterGain;
          if (!vd.Howler.ctx || !dd) return null;
          await vd.Howler.ctx.resume();
          const Jd = vd.Howler.ctx.createMediaStreamDestination();
          dd.connect(Jd), Bd = Jd;
          const [kd] = Jd.stream.getAudioTracks();
          return null !== kd && void 0 !== kd ? kd : null
        }();
        Id = new MediaStream;
        for (const pd of od.getVideoTracks()) Id.addTrack(pd);
        dd && Id.addTrack(dd);
        const Jd = function(dd) {
          const Jd = Qd(ld(dd));
          if (!Jd) throw new Error(`No MediaRecorder mime type available for ${dd}`);
          return Jd
        }(Pd.format);
        Rd = new MediaRecorder(Id, {
          mimeType: Jd,
          videoBitsPerSecond: 8e6
        }), Rd.ondataavailable = dd => {
          dd.data.size > 0 && ed.push(dd.data)
        };
        const kd = new Promise((dd => {
          Rd.onstop = () => {
            dd()
          }
        }));
        await (null === (xd = Wd.seekSettled) || void 0 === xd ? void 0 : xd.call(Wd));
        const [gd] = od.getVideoTracks();
        Rd.start(250), Wd.play();
        const Cd = await
        function(dd, Jd, kd) {
          return new Promise((pd => {
            let Nd = !1;
            const Wd = dd => {
                Nd || (Nd = !0, Zd(), Jd.removeEventListener("ended", Pd), pd(dd))
              },
              Pd = () => {
                Wd("captureLost")
              },
              Zd = dd.watchPlayback((() => {
                dd.isPlaying() || Wd("completed")
              }));
            Jd.addEventListener("ended", Pd), kd.onerror = () => {
              Wd("recorderError")
            }, "ended" !== Jd.readyState ? dd.isPlaying() || Wd("completed") : Wd("captureLost")
          }))
        }(Wd, gd, Rd);
        if (Wd.pause(), "inactive" !== Rd.state && Rd.stop(), await kd, "captureLost" === Cd) return void Nd.NotificationProvider.showAlertPopup({
          title: "Video export stopped",
          subtitle: "Screen sharing ended before the replay finished. Nothing was saved."
        });
        if ("recorderError" === Cd) return void Nd.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "The recorder encountered an error. Nothing was saved."
        });
        const Kd = null !== (qd = null === (md = Wd.playbackFailure) || void 0 === md ? void 0 : md.call(Wd)) && void 0 !== qd ? qd : null;
        if (null !== Kd) return void Nd.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: `${Kd} Nothing was saved.`
        });
        const Od = new Blob(ed, {
          type: Jd
        });
        Od.size > 0 ? (0, pd.d)(Od, function(dd, Jd) {
          const kd = function(dd) {
            return "mp4" === dd ? "mp4" : "webm"
          }(Jd);
          if (dd) return `${dd.replace(/\.bloxdreplay$/i,"")}.${kd}`;
          return `bloxd-replay-${Date.now()}.${kd}`
        }(Wd.fileName(), Pd.format)) : Nd.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "No video data was captured. Try again."
        })
      } catch (bd) {
        console.error("Replay video export failed", bd), Nd.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: bd instanceof Error ? bd.message : "Something went wrong while exporting."
        })
      } finally {
        if (Rd && "inactive" !== Rd.state) try {
          Rd.stop()
        } catch (bd) {
          console.error("Failed to stop MediaRecorder", bd)
        }! function() {
          const dd = vd.Howler.masterGain;
          if (Bd && dd) {
            try {
              dd.disconnect(Bd)
            } catch (bd) {
              console.error("Failed to disconnect Howler export tee", bd)
            }
            Bd = null
          } else Bd = null
        }();
        for (const dd of od.getTracks()) dd.stop();
        if (Id)
          for (const dd of Id.getTracks()) dd.stop();
        null !== Ld && Wd.setPlaybackSpeed(Ld), Wd.pause(), Yd(Wd), Wd.reopenViewer()
      }
    }
  },
  4743: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      Howl: () => Nd.Howl,
      Howler: () => Nd.Howler,
      musicOutput: () => Ld,
      readyAudioContext: () => Od
    });
    var pd, Nd = kd(4745),
      Wd = kd(4516);
    const Pd = Nd.Howler;

    function Zd() {
      var dd, Jd;
      if (Pd.ctx || !Pd.usingWebAudio || "undefined" === typeof AudioContext || !(0, Wd.h)()) return;
      const kd = navigator.audioSession;
      let pd;
      "auto" === (null === kd || void 0 === kd ? void 0 : kd.type) && (kd.type = "ambient");
      try {
        pd = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const Nd = pd.createGain();
      Nd.gain.setValueAtTime(Pd._muted ? 0 : null !== (dd = Pd._volume) && void 0 !== dd ? dd : 1, pd.currentTime), Nd.connect(pd.destination), Pd.ctx = pd, Pd.masterGain = Nd, null === (Jd = Pd._setup) || void 0 === Jd || Jd.call(Pd)
    }
    Pd._mobileUnloaded = !0;
    const gd = Pd.volume.bind(Nd.Howler);
    Pd.volume = function() {
      return Zd(), gd(...arguments)
    };
    const Cd = Pd.mute.bind(Nd.Howler);
    Pd.mute = dd => (Zd(), Cd(dd));
    const Kd = Nd.Howl.prototype,
      od = Kd.init;
    Kd.init = function(dd) {
      return Zd(), od.call(this, dd)
    };
    let ld = 0;
    const Qd = null === (pd = Pd._autoSuspend) || void 0 === pd ? void 0 : pd.bind(Nd.Howler);

    function Ld() {
      Od();
      const {
        ctx: dd,
        masterGain: Jd
      } = Pd;
      return dd && Jd ? {
        ctx: dd,
        destination: Jd,
        holdAwake: dd => {
          var Jd, kd;
          (ld += dd ? 1 : -1, dd) ? null === (Jd = Pd._autoResume) || void 0 === Jd || Jd.call(Pd): null === (kd = Pd._autoSuspend) || void 0 === kd || kd.call(Pd)
        },
        wake: () => {
          var Jd;
          "running" !== dd.state && (null === (Jd = Pd._autoResume) || void 0 === Jd || Jd.call(Pd), dd.resume().catch((() => {})))
        }
      } : null
    }

    function Od() {
      var dd;
      (Pd.volume(), Pd.ctx && Pd.autoUnlock) && (null === (dd = Pd._unlockAudio) || void 0 === dd || dd.call(Pd))
    }
    Qd && (Pd._autoSuspend = () => ld > 0 ? Nd.Howler : Qd())
  },
  42497: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => pd,
      f: () => Nd
    });
    const pd = ["recording", "freecam", "keyframe"];

    function Nd() {
      const dd = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(dd[1]) << 32n | BigInt(dd[0])
    }
  },
  42535: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      HOLD_TIMEOUT_MS: () => Zd,
      ReplayViewer: () => Cd
    });
    var pd = kd(37141),
      Nd = kd(37160),
      Wd = kd(4680),
      Pd = kd(42497);
    const Zd = 1e4,
      gd = new Set(["EQ"]);
    class Cd {
      constructor(dd) {
        var Jd;
        this.deps = dd, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (Jd = dd.now) && void 0 !== Jd ? Jd : () => performance.now()
      }
      get inPlayback() {
        return this.playback
      }
      get view() {
        return this.lastView
      }
      get isOpen() {
        return null !== this.lastView && this.lastView.state !== Wd.sd.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get EC() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? pd.e.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(dd, Jd) {
        var kd, Nd, Pd, Zd;
        const {
          client: gd
        } = this.deps;
        if (!this.playback) {
          if (!gd.setPlayback(!0)) throw new Error(pd.e.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const Cd = this.epoch;
        let Kd;
        try {
          Kd = await gd.open(dd)
        } finally {
          this.loadingOpens--
        }
        if (Cd !== this.epoch) throw new Error(pd.e.coreStopped.text);
        if ("opening" !== Kd) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const dd = function(dd) {
            switch (dd) {
              case "reloading":
                return null;
              case "stopped":
              case Wd.ed.ModuleTrap:
                return pd.e.coreStopped;
              case Wd.ed.ModuleLoad:
                return pd.e.viewerLoadFailed;
              case Wd.ed.TooLarge:
                return pd.e.cantOpen
            }
          }(Kd);
          if (null === dd) return;
          throw new Error(dd.text)
        }
        return this.rejectSave(new Error(pd.e.saveClosed.text)), this.fileName = null !== (kd = null !== (Nd = Jd.fileName) && void 0 !== Nd ? Nd : null === (Pd = Jd.fileHandle) || void 0 === Pd ? void 0 : Pd.name) && void 0 !== kd ? kd : null, this.fileHandle = null !== (Zd = Jd.fileHandle) && void 0 !== Zd ? Zd : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((dd, Jd) => {
          this.pendingOpen = {
            resolve: dd,
            reject: Jd
          }
        }))
      }
      play() {
        this.holds.has("EQ") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("EQ")
      }
      seek(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const kd = this.lastView;
        null !== kd && (Jd || dd < kd.Do) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(dd, Jd)
      }
      setSpeed(dd) {
        this.deps.client.setSpeed(dd)
      }
      setCameraMode(dd) {
        this.deps.client.setCameraMode(dd)
      }
      cycleCameraMode() {
        const dd = this.lastView;
        null !== dd && dd.state !== Wd.sd.None && this.setCameraMode(Pd.b[(Pd.b.indexOf(dd.cameraMode) + 1) % Pd.b.length])
      }
      addKeyframe() {
        this.edited(this.deps.client.addKeyframe())
      }
      setKeyframe(dd) {
        this.edited(this.deps.client.setKeyframe(dd))
      }
      moveKeyframe(dd, Jd) {
        this.edited(this.deps.client.moveKeyframe(dd, Jd))
      }
      deleteKeyframes(dd, Jd) {
        this.edited(this.deps.client.deleteKeyframes(dd, Jd))
      }
      setMark(dd) {
        this.edited(this.deps.client.setMark(dd))
      }
      crop(dd, Jd) {
        return !(Jd <= dd) && (null !== this.pendingSave ? (this.deps.notify(pd.e.saveBusy), !1) : !!this.deps.client.crop(dd, Jd) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(pd.e.saveBusy.text)) : new Promise(((dd, Jd) => {
          const kd = {
            resolve: dd,
            reject: Jd
          };
          this.pendingSave = kd, this.editsAtSave = this.edits, this.deps.client.save((0, Pd.f)()).then((dd => {
            this.pendingSave === kd && this.saveStarted(dd)
          }), (dd => {
            this.pendingSave === kd && this.rejectSave(dd instanceof Error ? dd : new Error(String(dd)))
          }))
        }))
      }
      saveStarted(dd) {
        switch (dd) {
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
      markSaved(dd, Jd) {
        var kd, pd;
        this.fileHandle = dd, this.fileName = null !== (kd = null !== (pd = null === dd || void 0 === dd ? void 0 : dd.name) && void 0 !== pd ? pd : Jd) && void 0 !== kd ? kd : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(pd.e.coreStopped.text)), this.rejectSave(new Error(pd.e.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var dd, Jd, kd;
        const pd = this.deps.client.view(),
          Pd = pd !== this.lastView;
        this.lastView = pd, this.opening && null !== pd && pd.state !== Wd.sd.None && pd.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, Nd.e)()), this.cropAsked ? (this.cropAsked = !1, null !== pd && pd.state === Wd.sd.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== pd && pd.state !== Wd.sd.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const Cd = 0 === this.settleFrames && 0 === (null !== (dd = null === (Jd = (kd = this.deps).meshPending) || void 0 === Jd ? void 0 : Jd.call(kd)) && void 0 !== dd ? dd : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && Cd && this.release("opening"), this.holds.has("seek") && Cd && this.release("seek"), this.holds.has("crop") && !this.cropRunning && Cd && this.release("crop");
        const Kd = this.now();
        for (const [Nd, Wd] of this.holds) !gd.has(Nd) && Kd - Wd >= Zd && (this.release(Nd), "opening" === Nd && (this.opening = !1, this.settleOpen(null)));
        this.saveRefused && !this.cropping && this.saveFailed(!1), Pd && this.deps.onChange()
      }
      cropped() {
        (0, Nd.e)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(dd) {
        switch (dd.reason) {
          case Wd.ed.TooLarge:
            break;
          case Wd.ed.Open:
          case Wd.ed.NothingStaged:
            this.opening = !1, this.release("opening"), null === this.pendingOpen && this.deps.notify(pd.e.cantOpen), this.settleOpen(new Error(pd.e.cantOpen.text));
            break;
          case Wd.ed.Crop:
            if (dd.code === Wd.bd.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(pd.e.cropFailed);
            break;
          case Wd.ed.ModuleTrap:
          case Wd.ed.ModuleLoad:
          case Wd.ed.Port:
            this.moduleEnded(dd.reason === Wd.ed.ModuleTrap ? pd.e.coreStopped : pd.e.cantOpen);
            break;
          case Wd.ed.NotLive:
            console.warn("[bloxd-wasm-client] the core refused a recorder command in playback");
            break;
          default:
            console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${dd.reason})`), this.seekAsked = !1, this.release("seek")
        }
        this.deps.onChange()
      }
      moduleEnded(dd) {
        this.resetInFlight(), this.release("opening"), this.release("seek"), this.release("crop"), null === this.pendingOpen && this.deps.notify(dd), this.settleOpen(new Error(dd.text))
      }
      saveDone(dd) {
        const Jd = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === Jd || void 0 === Jd || Jd.resolve(dd)
      }
      saveFailed(dd) {
        this.rejectSave(new Error(dd ? pd.e.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(dd) {
        dd && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(pd.e.cropBusy.text)) : this.deps.notify(pd.e.cropBusy)
      }
      resetInFlight() {
        this.opening = !1, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0
      }
      settleOpen(dd) {
        const Jd = this.pendingOpen;
        this.pendingOpen = null, null === dd ? null === Jd || void 0 === Jd || Jd.resolve() : null === Jd || void 0 === Jd || Jd.reject(dd)
      }
      rejectSave(dd) {
        const Jd = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === Jd || void 0 === Jd || Jd.reject(dd)
      }
      hold(dd) {
        const Jd = 0 === this.holds.size;
        this.holds.set(dd, this.now()), Jd && this.deps.setHoldDraws(!0)
      }
      release(dd) {
        this.holds.delete(dd) && 0 === this.holds.size && this.deps.setHoldDraws(!1)
      }
      releaseAll() {
        this.holds.size > 0 && (this.holds.clear(), this.deps.setHoldDraws(!1))
      }
    }
  },
  42529: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      MESH_TAIL_MS: () => Cd,
      PLAY_START_TIMEOUT_MS: () => Zd,
      startWasmReplayVideoExport: () => od
    });
    var pd = kd(39378),
      Nd = kd(42535),
      Wd = kd(4680),
      Pd = kd(2352);
    const Zd = Nd.HOLD_TIMEOUT_MS + 5e3,
      gd = 50,
      Cd = 200;

    function Kd(dd) {
      var Jd;
      return (null === (Jd = dd.view) || void 0 === Jd ? void 0 : Jd.state) === Wd.sd.Cropping || dd.EC.includes("crop")
    }

    function od(dd) {
      return (0, pd.c)((() => function(dd) {
        var Jd, kd, pd, Nd, od, ld;
        const Qd = dd.viewer(),
          Ld = null !== (Jd = null === Qd || void 0 === Qd ? void 0 : Qd.view) && void 0 !== Jd ? Jd : null,
          Od = dd.canvas();
        if (!Qd || !Ld || Ld.state === Wd.sd.None || 0 === Ld.totalTicks || !Od || Kd(Qd)) return null;
        const ed = null !== (kd = dd.now) && void 0 !== kd ? kd : () => performance.now(),
          Rd = Qd.id,
          Id = () => {
            const Jd = dd.viewer();
            return Jd === Qd && Jd.id === Rd && Jd.isOpen ? Jd : null
          },
          Gd = Math.min(null !== (pd = null === (Nd = Ld.mark) || void 0 === Nd ? void 0 : Nd.outTick) && void 0 !== pd ? pd : 1 / 0, Ld.totalTicks - 1);
        let vd = null,
          xd = !1;
        const qd = () => {
          var dd, Jd;
          return (null === (dd = Id()) || void 0 === dd || null === (Jd = dd.view) || void 0 === Jd ? void 0 : Jd.state) === Wd.sd.Playing
        };
        return {
          AY: Wd.Gd,
          playbackMarkInTick: null !== (od = null === (ld = Ld.mark) || void 0 === ld ? void 0 : ld.inTick) && void 0 !== od ? od : null,
          startFailure: () => {
            const dd = Id();
            return null === dd ? "Another replay opened. Export it again from there." : Kd(dd) ? "Wait for the crop to finish, then export again." : null
          },
          fileName: () => {
            var dd, Jd;
            return null !== (dd = null === (Jd = Id()) || void 0 === Jd ? void 0 : Jd.fileName) && void 0 !== dd ? dd : null
          },
          playbackSpeed: () => {
            var dd, Jd, kd;
            return null !== (dd = null === (Jd = Id()) || void 0 === Jd || null === (kd = Jd.view) || void 0 === kd ? void 0 : kd.speed) && void 0 !== dd ? dd : 1
          },
          setPlaybackSpeed: dd => {
            var Jd;
            null === (Jd = Id()) || void 0 === Jd || Jd.setSpeed(dd)
          },
          play: () => {
            var dd;
            xd = !1, vd = ed(), null === (dd = Id()) || void 0 === dd || dd.play()
          },
          pause: () => {
            var dd;
            null === (dd = Id()) || void 0 === dd || dd.pause()
          },
          seekToTick: dd => {
            var Jd;
            null === (Jd = Id()) || void 0 === Jd || Jd.seek(dd, !0)
          },
          seekSettled: () => new Promise((dd => {
            const Jd = setInterval((() => {
              const kd = Id();
              null === kd ? (clearInterval(Jd), dd()) : kd.EC.includes("seek") || (clearInterval(Jd), setTimeout(dd, Cd))
            }), gd)
          })),
          isPlaying: () => {
            var dd, Jd, kd;
            return null !== vd && null !== Id() && (!!qd() || !xd && (null !== (dd = null === (Jd = Id()) || void 0 === Jd || null === (kd = Jd.view) || void 0 === kd ? void 0 : kd.Do) && void 0 !== dd ? dd : 0) < Gd && ed() - vd < Zd)
          },
          watchPlayback: Jd => {
            const kd = dd.watchViewer((() => {
                xd ||= null !== vd && qd(), Jd()
              })),
              pd = setTimeout(Jd, Zd + 1);
            return () => {
              clearTimeout(pd), kd()
            }
          },
          playbackFailure: () => {
            var dd, Jd;
            const kd = Id();
            return null === kd ? "The replay closed before the video finished." : (null !== (dd = null === (Jd = kd.view) || void 0 === Jd ? void 0 : Jd.Do) && void 0 !== dd ? dd : 0) >= Gd ? null : xd ? "The replay stopped before the video finished." : "The replay didn't start playing."
          },
          canvas: () => Od,
          closeViewer: () => {
            dd.requestViewer("close")
          },
          reopenViewer: () => {
            dd.requestViewer("open")
          },
          holdInput: Pd.f
        }
      }(dd)))
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);