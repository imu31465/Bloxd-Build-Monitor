export const id = 63;
export const ids = [57, 63, 91];
export const modules = {
  36356: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => RY,
      f: () => OY
    });
    var FY = DY(25);
    const AY = 1500,
      IY = 1e3,
      RY = {
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

    function OY(YY) {
      var rY;
      const DY = null !== (rY = YY.timeoutMs) && void 0 !== rY ? rY : "Error" === YY.type ? AY : IY;
      FY.g.vo("showBottomMessage", {
        message: YY.text,
        timeoutLength: DY,
        type: YY.type
      })
    }
  },
  36366: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => FY,
      f: () => AY
    });
    const FY = "data-replay-ui-active",
      AY = [{
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
  36370: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => aY,
      f: () => uY,
      g: () => vY
    });
    var FY = DY(19),
      AY = DY(25),
      IY = DY(36366);

    function RY() {
      const YY = {};
      for (const {
          group: rY
        }
        of IY.f) YY[rY] = !0;
      return YY
    }
    let OY = RY();

    function gY() {
      AY.g.vo("replayViewer|uiVisibilityChanged")
    }

    function aY() {
      return OY
    }

    function vY(YY, rY) {
      OY[YY] !== rY && (OY = {
        ...OY,
        [YY]: rY
      }, "nametag" === YY && FY.b.set({
        areNametagsHidden: !rY
      }), gY())
    }

    function uY() {
      OY = RY(), FY.b.set({
        areNametagsHidden: !1
      }), gY()
    }
  },
  38577: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => HY
    });
    var FY = DY(1716),
      AY = DY(1346),
      IY = DY(61),
      RY = DY(1092),
      OY = DY.n(RY),
      gY = DY(1437),
      aY = DY(99);
    const vY = ["video/webm;codecs=vp9,opus", "video/webm;codecs=vp8,opus", "video/webm;codecs=vp9", "video/webm;codecs=vp8", "video/webm"],
      uY = ["video/mp4;codecs=avc1,mp4a.40.2", "video/mp4;codecs=avc1.42E01E,mp4a.40.2", "video/mp4;codecs=avc1", "video/mp4"];

    function sY(YY) {
      return "webm" === YY ? vY : uY
    }

    function iY(YY) {
      for (const rY of YY)
        if ("undefined" !== typeof MediaRecorder && MediaRecorder.isTypeSupported(rY)) return rY;
      return null
    }

    function yY(YY) {
      return null !== iY(sY(YY))
    }
    var QY = DY(1125);
    const oY = [{
      id: "webm",
      label: "WebM",
      description: "Usually less screen tearing, but may not play in all media players."
    }, {
      id: "mp4",
      label: "MP4",
      description: "Works in more players, but may show graphical glitches on some devices."
    }];

    function WY() {
      return yY("webm") ? "webm" : yY("mp4") ? "mp4" : "webm"
    }

    function EY(YY) {
      let {
        cards: rY
      } = YY;
      return (0, QY.jsx)("div", {
        className: "ReplayVideoExportOptionCards",
        children: rY.map((YY => (0, QY.jsxs)("div", {
          className: "ReplayVideoExportOptionColumn",
          children: [(0, QY.jsx)("div", {
            className: OY()("ReplayVideoExportOptionCard", {
              Selected: YY.selected,
              Disabled: YY.disabled
            }),
            onClick: () => {
              YY.disabled || YY.onSelect()
            },
            children: (0, QY.jsxs)("div", {
              className: "ReplayVideoExportOptionCardBody",
              children: [(0, QY.jsx)("div", {
                className: "ReplayVideoExportOptionCardLabel",
                children: YY.label
              }), (0, QY.jsx)("div", {
                className: "ReplayVideoExportOptionCardDescription",
                children: YY.description
              })]
            })
          }), YY.disabled && YY.disabledReason && (0, QY.jsx)("div", {
            className: "ReplayVideoExportOptionError SmallTextLight",
            children: YY.disabledReason
          })]
        }, YY.id)))
      })
    }
    const mY = (0, IY.memo)((function(YY) {
      let {
        hasPlaybackMark: rY,
        canIncludeUi: DY,
        includeUiDisabledReason: FY,
        selectionRef: AY,
        closePopup: RY
      } = YY;
      const OY = yY("webm") || yY("mp4"),
        [vY, uY] = (0, IY.useState)(WY),
        [sY, iY] = (0, IY.useState)(DY),
        mY = OY && yY(vY);
      if (!OY) {
        const YY = (0, aY.isMobile)() ? "screen recording" : "OBS";
        return (0, QY.jsxs)("div", {
          className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
          children: [(0, QY.jsx)("div", {
            className: "PromptPopupNotificationTitle SmallTextBold",
            children: "Can't export video"
          }), (0, QY.jsx)("div", {
            className: "PromptPopupNotificationSubtitle SmallTextLight",
            children: `Your device does not support exporting. Try recording with an external software like ${YY}.`
          }), (0, QY.jsx)("div", {
            className: "PromptPopupNotificationBody",
            children: (0, QY.jsx)(gY.D, {
              className: "PromptPopupNotificationBodyButton",
              onClick: () => {
                AY.options = null, RY()
              },
              children: "Close"
            })
          })]
        })
      }
      const VY = rY ? "This will only play the range you've set.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes." : "This will play the whole recording from the start.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes.",
        SY = [{
          id: "withoutUi",
          label: "Without UI",
          description: "Usually cleaner and sharper.",
          selected: !sY,
          disabled: !1,
          disabledReason: null,
          onSelect: () => {
            iY(!1)
          }
        }, {
          id: "withUi",
          label: "With UI",
          description: "Includes HUD elements. May look worse on some devices.",
          selected: sY,
          disabled: !DY,
          disabledReason: FY,
          onSelect: () => {
            iY(!0)
          }
        }],
        lY = oY.map((YY => {
          const rY = yY(YY.id);
          return {
            id: YY.id,
            label: YY.label,
            description: YY.description,
            selected: vY === YY.id,
            disabled: !rY,
            disabledReason: "Your device doesn't support this format",
            onSelect: () => {
              uY(YY.id)
            }
          }
        }));
      return (0, QY.jsxs)("div", {
        className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
        children: [(0, QY.jsx)("div", {
          className: "PromptPopupNotificationTitle SmallTextBold",
          children: "Export video?"
        }), (0, QY.jsx)("div", {
          className: "PromptPopupNotificationSubtitle SmallTextLight",
          children: VY
        }), (0, QY.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, QY.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "UI"
          }), (0, QY.jsx)(EY, {
            cards: SY
          })]
        }), (0, QY.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, QY.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "Format"
          }), (0, QY.jsx)(EY, {
            cards: lY
          })]
        }), (0, QY.jsxs)("div", {
          className: "PromptPopupNotificationBody",
          children: [(0, QY.jsx)(gY.n, {
            className: "PromptPopupNotificationBodyButton PromptPopupNotificationBodyPrimaryButton",
            disabled: !mY,
            onClick: () => {
              AY.options = {
                format: vY,
                includeUi: DY && sY
              }, RY()
            },
            children: "Export"
          }), (0, QY.jsx)(gY.D, {
            className: "PromptPopupNotificationBodyButton",
            onClick: () => {
              AY.options = null, RY()
            },
            children: "Cancel"
          })]
        })]
      })
    }));
    var VY = DY(4434),
      SY = DY(36366),
      lY = DY(36370);
    let TY = null;

    function eY() {
      return function() {
        const YY = (0, lY.e)();
        for (const {
            group: rY,
            dataAttr: DY
          }
          of SY.f)
          if (DY && YY[rY]) return !0;
        return !1
      }() ? function() {
        var YY;
        return "function" === typeof(null === (YY = navigator.mediaDevices) || void 0 === YY ? void 0 : YY.getDisplayMedia)
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
    async function NY(YY, rY, DY) {
      return YY ? async function() {
        const YY = await navigator.mediaDevices.getDisplayMedia({
          video: !0,
          audio: !1,
          preferCurrentTab: !0,
          selfBrowserSurface: "include"
        });
        for (const rY of YY.getAudioTracks()) rY.stop(), YY.removeTrack(rY);
        return YY
      }(): rY().captureStream(Math.max(1, Math.round(DY)))
    }
    var BY = DY(38437);
    let cY = !1;

    function KY(YY) {
      YY.holdInput(!1), (0, BY.e)(!1)
    }
    async function HY(YY) {
      var rY, DY;
      if ((0, BY.d)() || cY) return;
      const IY = YY();
      if (!IY) return;
      cY = !0;
      let RY = null;
      const OY = IY.playbackMarkInTick,
        {
          canIncludeUi: gY,
          includeUiDisabledReason: aY
        } = eY();
      try {
        RY = await async function(YY) {
          let {
            hasPlaybackMark: rY,
            canIncludeUi: DY,
            includeUiDisabledReason: FY
          } = YY;
          const IY = {
              options: null
            },
            RY = AY.NotificationProvider.showCustomPopup({
              body: YY => (0, QY.jsx)(mY, {
                hasPlaybackMark: rY,
                canIncludeUi: DY,
                includeUiDisabledReason: FY,
                selectionRef: IY,
                closePopup: YY
              }),
              disableExitButton: !0,
              disablePressBackgroundToClose: !0,
              unlockPointerKey: "replayVideoExportOptions"
            });
          return "notificationTornDown" === await RY.getResult() ? null : IY.options
        }({
          hasPlaybackMark: null !== OY,
          canIncludeUi: gY,
          includeUiDisabledReason: aY
        })
      } finally {
        cY = !1
      }
      if (!RY) return;
      const vY = null !== (rY = null === (DY = IY.startFailure) || void 0 === DY ? void 0 : DY.call(IY)) && void 0 !== rY ? rY : null;
      if (null !== vY) return void AY.NotificationProvider.showAlertPopup({
        title: "Video export failed",
        subtitle: vY
      });
      if (! function(YY) {
          return !(0, BY.d)() && ((0, BY.e)(!0), YY.holdInput(!0), !0)
        }(IY)) return;
      let uY = null;
      try {
        uY = await NY(RY.includeUi, (() => IY.canvas()), IY.eT)
      } catch (zY) {
        return console.error("Failed to create video stream for export", zY), KY(IY), void AY.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: zY instanceof Error ? zY.message : "Could not start capture."
        })
      }
      let yY = null;
      const oY = [];
      let WY = null,
        EY = null;
      try {
        var SY, lY, HY;
        yY = IY.playbackSpeed(), IY.closeViewer(), IY.setPlaybackSpeed(1), IY.pause(), IY.seekToTick(null !== OY && void 0 !== OY ? OY : 0);
        const YY = await async function() {
          const YY = VY.Howler.masterGain;
          if (!VY.Howler.ctx || !YY) return null;
          await VY.Howler.ctx.resume();
          const rY = VY.Howler.ctx.createMediaStreamDestination();
          YY.connect(rY), TY = rY;
          const [DY] = rY.stream.getAudioTracks();
          return null !== DY && void 0 !== DY ? DY : null
        }();
        EY = new MediaStream;
        for (const FY of uY.getVideoTracks()) EY.addTrack(FY);
        YY && EY.addTrack(YY);
        const rY = function(YY) {
          const rY = iY(sY(YY));
          if (!rY) throw new Error(`No MediaRecorder mime type available for ${YY}`);
          return rY
        }(RY.format);
        WY = new MediaRecorder(EY, {
          mimeType: rY,
          videoBitsPerSecond: 8e6
        }), WY.ondataavailable = YY => {
          YY.data.size > 0 && oY.push(YY.data)
        };
        const DY = new Promise((YY => {
          WY.onstop = () => {
            YY()
          }
        }));
        await (null === (SY = IY.seekSettled) || void 0 === SY ? void 0 : SY.call(IY));
        const [gY] = uY.getVideoTracks();
        WY.start(250), IY.play();
        const aY = await
        function(YY, rY, DY) {
          return new Promise((FY => {
            let AY = !1;
            const IY = YY => {
                AY || (AY = !0, OY(), rY.removeEventListener("ended", RY), FY(YY))
              },
              RY = () => {
                IY("captureLost")
              },
              OY = YY.watchPlayback((() => {
                YY.isPlaying() || IY("completed")
              }));
            rY.addEventListener("ended", RY), DY.onerror = () => {
              IY("recorderError")
            }, "ended" !== rY.readyState ? YY.isPlaying() || IY("completed") : IY("captureLost")
          }))
        }(IY, gY, WY);
        if (IY.pause(), "inactive" !== WY.state && WY.stop(), await DY, "captureLost" === aY) return void AY.NotificationProvider.showAlertPopup({
          title: "Video export stopped",
          subtitle: "Screen sharing ended before the replay finished. Nothing was saved."
        });
        if ("recorderError" === aY) return void AY.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "The recorder encountered an error. Nothing was saved."
        });
        const vY = null !== (lY = null === (HY = IY.playbackFailure) || void 0 === HY ? void 0 : HY.call(IY)) && void 0 !== lY ? lY : null;
        if (null !== vY) return void AY.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: `${vY} Nothing was saved.`
        });
        const QY = new Blob(oY, {
          type: rY
        });
        QY.size > 0 ? (0, FY.d)(QY, function(YY, rY) {
          const DY = function(YY) {
            return "mp4" === YY ? "mp4" : "webm"
          }(rY);
          if (YY) return `${YY.replace(/\.bloxdreplay$/i,"")}.${DY}`;
          return `bloxd-replay-${Date.now()}.${DY}`
        }(IY.fileName(), RY.format)) : AY.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "No video data was captured. Try again."
        })
      } catch (zY) {
        console.error("Replay video export failed", zY), AY.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: zY instanceof Error ? zY.message : "Something went wrong while exporting."
        })
      } finally {
        if (WY && "inactive" !== WY.state) try {
          WY.stop()
        } catch (zY) {
          console.error("Failed to stop MediaRecorder", zY)
        }! function() {
          const YY = VY.Howler.masterGain;
          if (TY && YY) {
            try {
              YY.disconnect(TY)
            } catch (zY) {
              console.error("Failed to disconnect Howler export tee", zY)
            }
            TY = null
          } else TY = null
        }();
        for (const YY of uY.getTracks()) YY.stop();
        if (EY)
          for (const YY of EY.getTracks()) YY.stop();
        null !== yY && IY.setPlaybackSpeed(yY), IY.pause(), KY(IY), IY.reopenViewer()
      }
    }
  },
  4434: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      Howl: () => AY.Howl,
      Howler: () => AY.Howler,
      iosAudio: () => gY,
      musicOutput: () => oY,
      readyAudioContext: () => WY
    });
    var FY, AY = DY(4438),
      IY = DY(99);
    const RY = AY.Howler;
    let OY;

    function gY() {
      return OY ??= "ios" === (0, IY.getOperatingSystem)(), OY
    }

    function aY() {
      var YY, rY;
      if (RY.ctx || !RY.usingWebAudio || "undefined" === typeof AudioContext || !gY()) return;
      const DY = navigator.audioSession;
      let FY;
      "auto" === (null === DY || void 0 === DY ? void 0 : DY.type) && (DY.type = "ambient");
      try {
        FY = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const AY = FY.createGain();
      AY.gain.setValueAtTime(RY._muted ? 0 : null !== (YY = RY._volume) && void 0 !== YY ? YY : 1, FY.currentTime), AY.connect(FY.destination), RY.ctx = FY, RY.masterGain = AY, null === (rY = RY._setup) || void 0 === rY || rY.call(RY)
    }
    RY._mobileUnloaded = !0;
    const vY = RY.volume.bind(AY.Howler);
    RY.volume = function() {
      return aY(), vY(...arguments)
    };
    const uY = RY.mute.bind(AY.Howler);
    RY.mute = YY => (aY(), uY(YY));
    const sY = AY.Howl.prototype,
      iY = sY.init;
    sY.init = function(YY) {
      return aY(), iY.call(this, YY)
    };
    let yY = 0;
    const QY = null === (FY = RY._autoSuspend) || void 0 === FY ? void 0 : FY.bind(AY.Howler);

    function oY() {
      WY();
      const {
        ctx: YY,
        masterGain: rY
      } = RY;
      return YY && rY ? {
        ctx: YY,
        destination: rY,
        holdAwake: YY => {
          var rY, DY;
          (yY += YY ? 1 : -1, YY) ? null === (rY = RY._autoResume) || void 0 === rY || rY.call(RY): null === (DY = RY._autoSuspend) || void 0 === DY || DY.call(RY)
        },
        wake: () => {
          var rY;
          "running" !== YY.state && (null === (rY = RY._autoResume) || void 0 === rY || rY.call(RY), YY.resume().catch((() => {})))
        }
      } : null
    }

    function WY() {
      var YY;
      (RY.volume(), RY.ctx && RY.autoUnlock) && (null === (YY = RY._unlockAudio) || void 0 === YY || YY.call(RY))
    }
    QY && (RY._autoSuspend = () => yY > 0 ? AY.Howler : QY())
  },
  41628: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => FY,
      f: () => AY
    });
    const FY = ["recording", "freecam", "keyframe"];

    function AY() {
      const YY = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(YY[1]) << 32n | BigInt(YY[0])
    }
  },
  41664: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      HOLD_TIMEOUT_MS: () => OY,
      ReplayViewer: () => aY
    });
    var FY = DY(36356),
      AY = DY(36370),
      IY = DY(4376),
      RY = DY(41628);
    const OY = 1e4,
      gY = new Set(["vy"]);
    class aY {
      constructor(YY) {
        var rY;
        this.deps = YY, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (rY = YY.now) && void 0 !== rY ? rY : () => performance.now()
      }
      get inPlayback() {
        return this.playback
      }
      get view() {
        return this.lastView
      }
      get isOpen() {
        return null !== this.lastView && this.lastView.state !== IY.ed.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get ja() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? FY.c.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(YY, rY) {
        var DY, AY, RY, OY;
        const {
          client: gY
        } = this.deps;
        if (!this.playback) {
          if (!gY.setPlayback(!0)) throw new Error(FY.c.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const aY = this.epoch;
        let vY;
        try {
          vY = await gY.open(YY)
        } finally {
          this.loadingOpens--
        }
        if (aY !== this.epoch) throw new Error(FY.c.coreStopped.text);
        if ("opening" !== vY) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const YY = function(YY) {
            switch (YY) {
              case "reloading":
                return null;
              case "stopped":
              case IY.Zc.ModuleTrap:
                return FY.c.coreStopped;
              case IY.Zc.ModuleLoad:
                return FY.c.viewerLoadFailed;
              case IY.Zc.TooLarge:
                return FY.c.cantOpen
            }
          }(vY);
          if (null === YY) return;
          throw new Error(YY.text)
        }
        return this.rejectSave(new Error(FY.c.saveClosed.text)), this.fileName = null !== (DY = null !== (AY = rY.fileName) && void 0 !== AY ? AY : null === (RY = rY.fileHandle) || void 0 === RY ? void 0 : RY.name) && void 0 !== DY ? DY : null, this.fileHandle = null !== (OY = rY.fileHandle) && void 0 !== OY ? OY : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((YY, rY) => {
          this.pendingOpen = {
            resolve: YY,
            reject: rY
          }
        }))
      }
      play() {
        this.holds.has("vy") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("vy")
      }
      seek(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const DY = this.lastView;
        null !== DY && (rY || YY < DY.Zu) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(YY, rY)
      }
      setSpeed(YY) {
        this.deps.client.setSpeed(YY)
      }
      setCameraMode(YY) {
        this.deps.client.setCameraMode(YY)
      }
      cycleCameraMode() {
        const YY = this.lastView;
        null !== YY && YY.state !== IY.ed.None && this.setCameraMode(RY.d[(RY.d.indexOf(YY.cameraMode) + 1) % RY.d.length])
      }
      addKeyframe() {
        this.edited(this.deps.client.addKeyframe())
      }
      setKeyframe(YY) {
        this.edited(this.deps.client.setKeyframe(YY))
      }
      moveKeyframe(YY, rY) {
        this.edited(this.deps.client.moveKeyframe(YY, rY))
      }
      deleteKeyframes(YY, rY) {
        this.edited(this.deps.client.deleteKeyframes(YY, rY))
      }
      setMark(YY) {
        this.edited(this.deps.client.setMark(YY))
      }
      crop(YY, rY) {
        return !(rY <= YY) && (null !== this.pendingSave ? (this.deps.notify(FY.c.saveBusy), !1) : !!this.deps.client.crop(YY, rY) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(FY.c.saveBusy.text)) : new Promise(((YY, rY) => {
          const DY = {
            resolve: YY,
            reject: rY
          };
          this.pendingSave = DY, this.editsAtSave = this.edits, this.deps.client.save((0, RY.f)()).then((YY => {
            this.pendingSave === DY && this.saveStarted(YY)
          }), (YY => {
            this.pendingSave === DY && this.rejectSave(YY instanceof Error ? YY : new Error(String(YY)))
          }))
        }))
      }
      saveStarted(YY) {
        switch (YY) {
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
      markSaved(YY, rY) {
        var DY, FY;
        this.fileHandle = YY, this.fileName = null !== (DY = null !== (FY = null === YY || void 0 === YY ? void 0 : YY.name) && void 0 !== FY ? FY : rY) && void 0 !== DY ? DY : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(FY.c.coreStopped.text)), this.rejectSave(new Error(FY.c.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var YY, rY, DY;
        const FY = this.deps.client.view(),
          RY = FY !== this.lastView;
        this.lastView = FY, this.opening && null !== FY && FY.state !== IY.ed.None && FY.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, AY.f)()), this.cropAsked ? (this.cropAsked = !1, null !== FY && FY.state === IY.ed.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== FY && FY.state !== IY.ed.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const aY = 0 === this.settleFrames && 0 === (null !== (YY = null === (rY = (DY = this.deps).meshPending) || void 0 === rY ? void 0 : rY.call(DY)) && void 0 !== YY ? YY : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && aY && this.release("opening"), this.holds.has("seek") && aY && this.release("seek"), this.holds.has("crop") && !this.cropRunning && aY && this.release("crop");
        const vY = this.now();
        for (const [AY, IY] of this.holds) !gY.has(AY) && vY - IY >= OY && (this.release(AY), "opening" === AY && (this.opening = !1, this.settleOpen(null)));
        this.saveRefused && !this.cropping && this.saveFailed(!1), RY && this.deps.onChange()
      }
      cropped() {
        (0, AY.f)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(YY) {
        switch (YY.reason) {
          case IY.Zc.TooLarge:
            break;
          case IY.Zc.Open:
          case IY.Zc.NothingStaged:
            this.opening = !1, this.release("opening"), null === this.pendingOpen && this.deps.notify(FY.c.cantOpen), this.settleOpen(new Error(FY.c.cantOpen.text));
            break;
          case IY.Zc.Crop:
            if (YY.code === IY.Xc.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(FY.c.cropFailed);
            break;
          case IY.Zc.ModuleTrap:
          case IY.Zc.ModuleLoad:
          case IY.Zc.Port:
            this.moduleEnded(YY.reason === IY.Zc.ModuleTrap ? FY.c.coreStopped : FY.c.cantOpen);
            break;
          case IY.Zc.NotLive:
            console.warn("[bloxd-wasm-client] the core refused a recorder command in playback");
            break;
          default:
            console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${YY.reason})`), this.seekAsked = !1, this.release("seek")
        }
        this.deps.onChange()
      }
      moduleEnded(YY) {
        this.resetInFlight(), this.release("opening"), this.release("seek"), this.release("crop"), null === this.pendingOpen && this.deps.notify(YY), this.settleOpen(new Error(YY.text))
      }
      saveDone(YY) {
        const rY = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === rY || void 0 === rY || rY.resolve(YY)
      }
      saveFailed(YY) {
        this.rejectSave(new Error(YY ? FY.c.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(YY) {
        YY && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(FY.c.cropBusy.text)) : this.deps.notify(FY.c.cropBusy)
      }
      resetInFlight() {
        this.opening = !1, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0
      }
      settleOpen(YY) {
        const rY = this.pendingOpen;
        this.pendingOpen = null, null === YY ? null === rY || void 0 === rY || rY.resolve() : null === rY || void 0 === rY || rY.reject(YY)
      }
      rejectSave(YY) {
        const rY = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === rY || void 0 === rY || rY.reject(YY)
      }
      hold(YY) {
        const rY = 0 === this.holds.size;
        this.holds.set(YY, this.now()), rY && this.deps.setHoldDraws(!0)
      }
      release(YY) {
        this.holds.delete(YY) && 0 === this.holds.size && this.deps.setHoldDraws(!1)
      }
      releaseAll() {
        this.holds.size > 0 && (this.holds.clear(), this.deps.setHoldDraws(!1))
      }
    }
  },
  41661: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      MESH_TAIL_MS: () => aY,
      PLAY_START_TIMEOUT_MS: () => OY,
      startWasmReplayVideoExport: () => uY
    });
    var FY = DY(38577),
      AY = DY(41664),
      IY = DY(4376),
      RY = DY(2262);
    const OY = AY.HOLD_TIMEOUT_MS + 5e3,
      gY = 50,
      aY = 200;

    function vY(YY) {
      var rY;
      return (null === (rY = YY.view) || void 0 === rY ? void 0 : rY.state) === IY.ed.Cropping || YY.ja.includes("crop")
    }

    function uY(YY) {
      return (0, FY.c)((() => function(YY) {
        var rY, DY, FY, AY, uY, sY;
        const iY = YY.viewer(),
          yY = null !== (rY = null === iY || void 0 === iY ? void 0 : iY.view) && void 0 !== rY ? rY : null,
          QY = YY.canvas();
        if (!iY || !yY || yY.state === IY.ed.None || 0 === yY.totalTicks || !QY || vY(iY)) return null;
        const oY = null !== (DY = YY.now) && void 0 !== DY ? DY : () => performance.now(),
          WY = iY.id,
          EY = () => {
            const rY = YY.viewer();
            return rY === iY && rY.id === WY && rY.isOpen ? rY : null
          },
          mY = Math.min(null !== (FY = null === (AY = yY.mark) || void 0 === AY ? void 0 : AY.outTick) && void 0 !== FY ? FY : 1 / 0, yY.totalTicks - 1);
        let VY = null,
          SY = !1;
        const lY = () => {
          var YY, rY;
          return (null === (YY = EY()) || void 0 === YY || null === (rY = YY.view) || void 0 === rY ? void 0 : rY.state) === IY.ed.Playing
        };
        return {
          eT: IY.rd,
          playbackMarkInTick: null !== (uY = null === (sY = yY.mark) || void 0 === sY ? void 0 : sY.inTick) && void 0 !== uY ? uY : null,
          startFailure: () => {
            const YY = EY();
            return null === YY ? "Another replay opened. Export it again from there." : vY(YY) ? "Wait for the crop to finish, then export again." : null
          },
          fileName: () => {
            var YY, rY;
            return null !== (YY = null === (rY = EY()) || void 0 === rY ? void 0 : rY.fileName) && void 0 !== YY ? YY : null
          },
          playbackSpeed: () => {
            var YY, rY, DY;
            return null !== (YY = null === (rY = EY()) || void 0 === rY || null === (DY = rY.view) || void 0 === DY ? void 0 : DY.speed) && void 0 !== YY ? YY : 1
          },
          setPlaybackSpeed: YY => {
            var rY;
            null === (rY = EY()) || void 0 === rY || rY.setSpeed(YY)
          },
          play: () => {
            var YY;
            SY = !1, VY = oY(), null === (YY = EY()) || void 0 === YY || YY.play()
          },
          pause: () => {
            var YY;
            null === (YY = EY()) || void 0 === YY || YY.pause()
          },
          seekToTick: YY => {
            var rY;
            null === (rY = EY()) || void 0 === rY || rY.seek(YY, !0)
          },
          seekSettled: () => new Promise((YY => {
            const rY = setInterval((() => {
              const DY = EY();
              null === DY ? (clearInterval(rY), YY()) : DY.ja.includes("seek") || (clearInterval(rY), setTimeout(YY, aY))
            }), gY)
          })),
          isPlaying: () => {
            var YY, rY, DY;
            return null !== VY && null !== EY() && (!!lY() || !SY && (null !== (YY = null === (rY = EY()) || void 0 === rY || null === (DY = rY.view) || void 0 === DY ? void 0 : DY.Zu) && void 0 !== YY ? YY : 0) < mY && oY() - VY < OY)
          },
          watchPlayback: rY => {
            const DY = YY.watchViewer((() => {
                SY ||= null !== VY && lY(), rY()
              })),
              FY = setTimeout(rY, OY + 1);
            return () => {
              clearTimeout(FY), DY()
            }
          },
          playbackFailure: () => {
            var YY, rY;
            const DY = EY();
            return null === DY ? "The replay closed before the video finished." : (null !== (YY = null === (rY = DY.view) || void 0 === rY ? void 0 : rY.Zu) && void 0 !== YY ? YY : 0) >= mY ? null : SY ? "The replay stopped before the video finished." : "The replay didn't start playing."
          },
          canvas: () => QY,
          closeViewer: () => {
            YY.requestViewer("close")
          },
          reopenViewer: () => {
            YY.requestViewer("open")
          },
          holdInput: RY.g
        }
      }(YY)))
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);