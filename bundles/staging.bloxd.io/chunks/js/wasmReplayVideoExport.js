export const id = 63;
export const ids = [57, 63, 91];
export const modules = {
  35944: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => WT,
      i: () => XT
    });
    var iT = IT(16);
    const zT = 1500,
      kT = 1e3,
      WT = {
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

    function XT(TT) {
      var oT;
      const IT = null !== (oT = TT.timeoutMs) && void 0 !== oT ? oT : "Error" === TT.type ? zT : kT;
      iT.h.XM("showBottomMessage", {
        message: TT.text,
        timeoutLength: IT,
        type: TT.type
      })
    }
  },
  35956: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => iT,
      d: () => zT
    });
    const iT = "data-replay-ui-active",
      zT = [{
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
  35965: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => FT,
      e: () => DT,
      i: () => ST
    });
    var iT = IT(12),
      zT = IT(16),
      kT = IT(35956);

    function WT() {
      const TT = {};
      for (const {
          group: oT
        }
        of kT.d) TT[oT] = !0;
      return TT
    }
    let XT = WT();

    function BT() {
      zT.h.XM("replayViewer|uiVisibilityChanged")
    }

    function FT() {
      return XT
    }

    function ST(TT, oT) {
      XT[TT] !== oT && (XT = {
        ...XT,
        [TT]: oT
      }, "nametag" === TT && iT.c.set({
        areNametagsHidden: !oT
      }), BT())
    }

    function DT() {
      XT = WT(), iT.c.set({
        areNametagsHidden: !1
      }), BT()
    }
  },
  38195: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => CT
    });
    var iT = IT(1679),
      zT = IT(1325),
      kT = IT(46),
      WT = IT(1042),
      XT = IT.n(WT),
      BT = IT(1408),
      FT = IT(90);
    const ST = ["video/webm;codecs=vp9,opus", "video/webm;codecs=vp8,opus", "video/webm;codecs=vp9", "video/webm;codecs=vp8", "video/webm"],
      DT = ["video/mp4;codecs=avc1,mp4a.40.2", "video/mp4;codecs=avc1.42E01E,mp4a.40.2", "video/mp4;codecs=avc1", "video/mp4"];

    function LT(TT) {
      return "webm" === TT ? ST : DT
    }

    function xT(TT) {
      for (const oT of TT)
        if ("undefined" !== typeof MediaRecorder && MediaRecorder.isTypeSupported(oT)) return oT;
      return null
    }

    function cT(TT) {
      return null !== xT(LT(TT))
    }
    var KT = IT(1083);
    const MT = [{
      id: "webm",
      label: "WebM",
      description: "Usually less screen tearing, but may not play in all media players."
    }, {
      id: "mp4",
      label: "MP4",
      description: "Works in more players, but may show graphical glitches on some devices."
    }];

    function rT() {
      return cT("webm") ? "webm" : cT("mp4") ? "mp4" : "webm"
    }

    function AT(TT) {
      let {
        cards: oT
      } = TT;
      return (0, KT.jsx)("div", {
        className: "ReplayVideoExportOptionCards",
        children: oT.map((TT => (0, KT.jsxs)("div", {
          className: "ReplayVideoExportOptionColumn",
          children: [(0, KT.jsx)("div", {
            className: XT()("ReplayVideoExportOptionCard", {
              Selected: TT.selected,
              Disabled: TT.disabled
            }),
            onClick: () => {
              TT.disabled || TT.onSelect()
            },
            children: (0, KT.jsxs)("div", {
              className: "ReplayVideoExportOptionCardBody",
              children: [(0, KT.jsx)("div", {
                className: "ReplayVideoExportOptionCardLabel",
                children: TT.label
              }), (0, KT.jsx)("div", {
                className: "ReplayVideoExportOptionCardDescription",
                children: TT.description
              })]
            })
          }), TT.disabled && TT.disabledReason && (0, KT.jsx)("div", {
            className: "ReplayVideoExportOptionError SmallTextLight",
            children: TT.disabledReason
          })]
        }, TT.id)))
      })
    }
    const gT = (0, kT.memo)((function(TT) {
      let {
        hasPlaybackMark: oT,
        canIncludeUi: IT,
        includeUiDisabledReason: iT,
        selectionRef: zT,
        closePopup: WT
      } = TT;
      const XT = cT("webm") || cT("mp4"),
        [ST, DT] = (0, kT.useState)(rT),
        [LT, xT] = (0, kT.useState)(IT),
        gT = XT && cT(ST);
      if (!XT) {
        const TT = (0, FT.isMobile)() ? "screen recording" : "OBS";
        return (0, KT.jsxs)("div", {
          className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
          children: [(0, KT.jsx)("div", {
            className: "PromptPopupNotificationTitle SmallTextBold",
            children: "Can't export video"
          }), (0, KT.jsx)("div", {
            className: "PromptPopupNotificationSubtitle SmallTextLight",
            children: `Your device does not support exporting. Try recording with an external software like ${TT}.`
          }), (0, KT.jsx)("div", {
            className: "PromptPopupNotificationBody",
            children: (0, KT.jsx)(BT.C, {
              className: "PromptPopupNotificationBodyButton",
              onClick: () => {
                zT.options = null, WT()
              },
              children: "Close"
            })
          })]
        })
      }
      const hT = oT ? "This will only play the range you've set.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes." : "This will play the whole recording from the start.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes.",
        wT = [{
          id: "withoutUi",
          label: "Without UI",
          description: "Usually cleaner and sharper.",
          selected: !LT,
          disabled: !1,
          disabledReason: null,
          onSelect: () => {
            xT(!1)
          }
        }, {
          id: "withUi",
          label: "With UI",
          description: "Includes HUD elements. May look worse on some devices.",
          selected: LT,
          disabled: !IT,
          disabledReason: iT,
          onSelect: () => {
            xT(!0)
          }
        }],
        mT = MT.map((TT => {
          const oT = cT(TT.id);
          return {
            id: TT.id,
            label: TT.label,
            description: TT.description,
            selected: ST === TT.id,
            disabled: !oT,
            disabledReason: "Your device doesn't support this format",
            onSelect: () => {
              DT(TT.id)
            }
          }
        }));
      return (0, KT.jsxs)("div", {
        className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
        children: [(0, KT.jsx)("div", {
          className: "PromptPopupNotificationTitle SmallTextBold",
          children: "Export video?"
        }), (0, KT.jsx)("div", {
          className: "PromptPopupNotificationSubtitle SmallTextLight",
          children: hT
        }), (0, KT.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, KT.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "UI"
          }), (0, KT.jsx)(AT, {
            cards: wT
          })]
        }), (0, KT.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, KT.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "Format"
          }), (0, KT.jsx)(AT, {
            cards: mT
          })]
        }), (0, KT.jsxs)("div", {
          className: "PromptPopupNotificationBody",
          children: [(0, KT.jsx)(BT.m, {
            className: "PromptPopupNotificationBodyButton PromptPopupNotificationBodyPrimaryButton",
            disabled: !gT,
            onClick: () => {
              zT.options = {
                format: ST,
                includeUi: IT && LT
              }, WT()
            },
            children: "Export"
          }), (0, KT.jsx)(BT.C, {
            className: "PromptPopupNotificationBodyButton",
            onClick: () => {
              zT.options = null, WT()
            },
            children: "Cancel"
          })]
        })]
      })
    }));
    var hT = IT(4341),
      wT = IT(35956),
      mT = IT(35965);
    let eT = null;

    function RT() {
      return function() {
        const TT = (0, mT.d)();
        for (const {
            group: oT,
            dataAttr: IT
          }
          of wT.d)
          if (IT && TT[oT]) return !0;
        return !1
      }() ? function() {
        var TT;
        return "function" === typeof(null === (TT = navigator.mediaDevices) || void 0 === TT ? void 0 : TT.getDisplayMedia)
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
    async function uT(TT, oT, IT) {
      return TT ? async function() {
        const TT = await navigator.mediaDevices.getDisplayMedia({
          video: !0,
          audio: !1,
          preferCurrentTab: !0,
          selfBrowserSurface: "include"
        });
        for (const oT of TT.getAudioTracks()) oT.stop(), TT.removeTrack(oT);
        return TT
      }(): oT().captureStream(Math.max(1, Math.round(IT)))
    }
    var vT = IT(38044);
    let ET = !1;

    function fT(TT) {
      TT.holdInput(!1), (0, vT.i)(!1)
    }
    async function CT(TT) {
      var oT, IT;
      if ((0, vT.e)() || ET) return;
      const kT = TT();
      if (!kT) return;
      ET = !0;
      let WT = null;
      const XT = kT.playbackMarkInTick,
        {
          canIncludeUi: BT,
          includeUiDisabledReason: FT
        } = RT();
      try {
        WT = await async function(TT) {
          let {
            hasPlaybackMark: oT,
            canIncludeUi: IT,
            includeUiDisabledReason: iT
          } = TT;
          const kT = {
              options: null
            },
            WT = zT.NotificationProvider.showCustomPopup({
              body: TT => (0, KT.jsx)(gT, {
                hasPlaybackMark: oT,
                canIncludeUi: IT,
                includeUiDisabledReason: iT,
                selectionRef: kT,
                closePopup: TT
              }),
              disableExitButton: !0,
              disablePressBackgroundToClose: !0,
              unlockPointerKey: "replayVideoExportOptions"
            });
          return "notificationTornDown" === await WT.getResult() ? null : kT.options
        }({
          hasPlaybackMark: null !== XT,
          canIncludeUi: BT,
          includeUiDisabledReason: FT
        })
      } finally {
        ET = !1
      }
      if (!WT) return;
      const ST = null !== (oT = null === (IT = kT.startFailure) || void 0 === IT ? void 0 : IT.call(kT)) && void 0 !== oT ? oT : null;
      if (null !== ST) return void zT.NotificationProvider.showAlertPopup({
        title: "Video export failed",
        subtitle: ST
      });
      if (! function(TT) {
          return !(0, vT.e)() && ((0, vT.i)(!0), TT.holdInput(!0), !0)
        }(kT)) return;
      let DT = null;
      try {
        DT = await uT(WT.includeUi, (() => kT.canvas()), kT.sC)
      } catch (jT) {
        return console.error("Failed to create video stream for export", jT), fT(kT), void zT.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: jT instanceof Error ? jT.message : "Could not start capture."
        })
      }
      let cT = null;
      const MT = [];
      let rT = null,
        AT = null;
      try {
        var wT, mT, CT;
        cT = kT.playbackSpeed(), kT.closeViewer(), kT.setPlaybackSpeed(1), kT.pause(), kT.seekToTick(null !== XT && void 0 !== XT ? XT : 0);
        const TT = await async function() {
          const TT = hT.Howler.masterGain;
          if (!hT.Howler.ctx || !TT) return null;
          await hT.Howler.ctx.resume();
          const oT = hT.Howler.ctx.createMediaStreamDestination();
          TT.connect(oT), eT = oT;
          const [IT] = oT.stream.getAudioTracks();
          return null !== IT && void 0 !== IT ? IT : null
        }();
        AT = new MediaStream;
        for (const iT of DT.getVideoTracks()) AT.addTrack(iT);
        TT && AT.addTrack(TT);
        const oT = function(TT) {
          const oT = xT(LT(TT));
          if (!oT) throw new Error(`No MediaRecorder mime type available for ${TT}`);
          return oT
        }(WT.format);
        rT = new MediaRecorder(AT, {
          mimeType: oT,
          videoBitsPerSecond: 8e6
        }), rT.ondataavailable = TT => {
          TT.data.size > 0 && MT.push(TT.data)
        };
        const IT = new Promise((TT => {
          rT.onstop = () => {
            TT()
          }
        }));
        await (null === (wT = kT.seekSettled) || void 0 === wT ? void 0 : wT.call(kT));
        const [BT] = DT.getVideoTracks();
        rT.start(250), kT.play();
        const FT = await
        function(TT, oT, IT) {
          return new Promise((iT => {
            let zT = !1;
            const kT = TT => {
                zT || (zT = !0, XT(), oT.removeEventListener("ended", WT), iT(TT))
              },
              WT = () => {
                kT("captureLost")
              },
              XT = TT.watchPlayback((() => {
                TT.isPlaying() || kT("completed")
              }));
            oT.addEventListener("ended", WT), IT.onerror = () => {
              kT("recorderError")
            }, "ended" !== oT.readyState ? TT.isPlaying() || kT("completed") : kT("captureLost")
          }))
        }(kT, BT, rT);
        if (kT.pause(), "inactive" !== rT.state && rT.stop(), await IT, "captureLost" === FT) return void zT.NotificationProvider.showAlertPopup({
          title: "Video export stopped",
          subtitle: "Screen sharing ended before the replay finished. Nothing was saved."
        });
        if ("recorderError" === FT) return void zT.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "The recorder encountered an error. Nothing was saved."
        });
        const ST = null !== (mT = null === (CT = kT.playbackFailure) || void 0 === CT ? void 0 : CT.call(kT)) && void 0 !== mT ? mT : null;
        if (null !== ST) return void zT.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: `${ST} Nothing was saved.`
        });
        const KT = new Blob(MT, {
          type: oT
        });
        KT.size > 0 ? (0, iT.d)(KT, function(TT, oT) {
          const IT = function(TT) {
            return "mp4" === TT ? "mp4" : "webm"
          }(oT);
          if (TT) return `${TT.replace(/\.bloxdreplay$/i,"")}.${IT}`;
          return `bloxd-replay-${Date.now()}.${IT}`
        }(kT.fileName(), WT.format)) : zT.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "No video data was captured. Try again."
        })
      } catch (jT) {
        console.error("Replay video export failed", jT), zT.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: jT instanceof Error ? jT.message : "Something went wrong while exporting."
        })
      } finally {
        if (rT && "inactive" !== rT.state) try {
          rT.stop()
        } catch (jT) {
          console.error("Failed to stop MediaRecorder", jT)
        }! function() {
          const TT = hT.Howler.masterGain;
          if (eT && TT) {
            try {
              TT.disconnect(eT)
            } catch (jT) {
              console.error("Failed to disconnect Howler export tee", jT)
            }
            eT = null
          } else eT = null
        }();
        for (const TT of DT.getTracks()) TT.stop();
        if (AT)
          for (const TT of AT.getTracks()) TT.stop();
        null !== cT && kT.setPlaybackSpeed(cT), kT.pause(), fT(kT), kT.reopenViewer()
      }
    }
  },
  4341: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      Howl: () => zT.Howl,
      Howler: () => zT.Howler,
      iosAudio: () => BT,
      musicOutput: () => MT,
      readyAudioContext: () => rT
    });
    var iT, zT = IT(4349),
      kT = IT(90);
    const WT = zT.Howler;
    let XT;

    function BT() {
      return XT ??= "ios" === (0, kT.getOperatingSystem)(), XT
    }

    function FT() {
      var TT, oT;
      if (WT.ctx || !WT.usingWebAudio || "undefined" === typeof AudioContext || !BT()) return;
      const IT = navigator.audioSession;
      let iT;
      "auto" === (null === IT || void 0 === IT ? void 0 : IT.type) && (IT.type = "ambient");
      try {
        iT = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const zT = iT.createGain();
      zT.gain.setValueAtTime(WT._muted ? 0 : null !== (TT = WT._volume) && void 0 !== TT ? TT : 1, iT.currentTime), zT.connect(iT.destination), WT.ctx = iT, WT.masterGain = zT, null === (oT = WT._setup) || void 0 === oT || oT.call(WT)
    }
    WT._mobileUnloaded = !0;
    const ST = WT.volume.bind(zT.Howler);
    WT.volume = function() {
      return FT(), ST(...arguments)
    };
    const DT = WT.mute.bind(zT.Howler);
    WT.mute = TT => (FT(), DT(TT));
    const LT = zT.Howl.prototype,
      xT = LT.init;
    LT.init = function(TT) {
      return FT(), xT.call(this, TT)
    };
    let cT = 0;
    const KT = null === (iT = WT._autoSuspend) || void 0 === iT ? void 0 : iT.bind(zT.Howler);

    function MT() {
      rT();
      const {
        ctx: TT,
        masterGain: oT
      } = WT;
      return TT && oT ? {
        ctx: TT,
        destination: oT,
        holdAwake: TT => {
          var oT, IT;
          (cT += TT ? 1 : -1, TT) ? null === (oT = WT._autoResume) || void 0 === oT || oT.call(WT): null === (IT = WT._autoSuspend) || void 0 === IT || IT.call(WT)
        },
        wake: () => {
          var oT;
          "running" !== TT.state && (null === (oT = WT._autoResume) || void 0 === oT || oT.call(WT), TT.resume().catch((() => {})))
        }
      } : null
    }

    function rT() {
      var TT;
      (WT.volume(), WT.ctx && WT.autoUnlock) && (null === (TT = WT._unlockAudio) || void 0 === TT || TT.call(WT))
    }
    KT && (WT._autoSuspend = () => cT > 0 ? zT.Howler : KT())
  },
  41386: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => iT,
      f: () => zT
    });
    const iT = ["recording", "freecam", "keyframe"];

    function zT() {
      const TT = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(TT[1]) << 32n | BigInt(TT[0])
    }
  },
  41417: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      HOLD_TIMEOUT_MS: () => XT,
      ReplayViewer: () => FT
    });
    var iT = IT(35944),
      zT = IT(35965),
      kT = IT(4276),
      WT = IT(41386);
    const XT = 1e4,
      BT = new Set(["Fc"]);
    class FT {
      constructor(TT) {
        var oT;
        this.deps = TT, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (oT = TT.now) && void 0 !== oT ? oT : () => performance.now()
      }
      get inPlayback() {
        return this.playback
      }
      get view() {
        return this.lastView
      }
      get isOpen() {
        return null !== this.lastView && this.lastView.state !== kT.pd.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get kS() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? iT.e.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(TT, oT) {
        var IT, zT, WT, XT;
        const {
          client: BT
        } = this.deps;
        if (!this.playback) {
          if (!BT.setPlayback(!0)) throw new Error(iT.e.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const FT = this.epoch;
        let ST;
        try {
          ST = await BT.open(TT)
        } finally {
          this.loadingOpens--
        }
        if (FT !== this.epoch) throw new Error(iT.e.coreStopped.text);
        if ("opening" !== ST) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const TT = function(TT) {
            switch (TT) {
              case "reloading":
                return null;
              case "stopped":
              case kT.ed.ModuleTrap:
                return iT.e.coreStopped;
              case kT.ed.ModuleLoad:
                return iT.e.viewerLoadFailed;
              case kT.ed.TooLarge:
                return iT.e.cantOpen
            }
          }(ST);
          if (null === TT) return;
          throw new Error(TT.text)
        }
        return this.rejectSave(new Error(iT.e.saveClosed.text)), this.fileName = null !== (IT = null !== (zT = oT.fileName) && void 0 !== zT ? zT : null === (WT = oT.fileHandle) || void 0 === WT ? void 0 : WT.name) && void 0 !== IT ? IT : null, this.fileHandle = null !== (XT = oT.fileHandle) && void 0 !== XT ? XT : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((TT, oT) => {
          this.pendingOpen = {
            resolve: TT,
            reject: oT
          }
        }))
      }
      play() {
        this.holds.has("Fc") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("Fc")
      }
      seek(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const IT = this.lastView;
        null !== IT && (oT || TT < IT.dD) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(TT, oT)
      }
      setSpeed(TT) {
        this.deps.client.setSpeed(TT)
      }
      setCameraMode(TT) {
        this.deps.client.setCameraMode(TT)
      }
      cycleCameraMode() {
        const TT = this.lastView;
        null !== TT && TT.state !== kT.pd.None && this.setCameraMode(WT.e[(WT.e.indexOf(TT.cameraMode) + 1) % WT.e.length])
      }
      addKeyframe() {
        this.edited(this.deps.client.addKeyframe())
      }
      setKeyframe(TT) {
        this.edited(this.deps.client.setKeyframe(TT))
      }
      moveKeyframe(TT, oT) {
        this.edited(this.deps.client.moveKeyframe(TT, oT))
      }
      deleteKeyframes(TT, oT) {
        this.edited(this.deps.client.deleteKeyframes(TT, oT))
      }
      setMark(TT) {
        this.edited(this.deps.client.setMark(TT))
      }
      crop(TT, oT) {
        return !(oT <= TT) && (null !== this.pendingSave ? (this.deps.notify(iT.e.saveBusy), !1) : !!this.deps.client.crop(TT, oT) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(iT.e.saveBusy.text)) : new Promise(((TT, oT) => {
          const IT = {
            resolve: TT,
            reject: oT
          };
          this.pendingSave = IT, this.editsAtSave = this.edits, this.deps.client.save((0, WT.f)()).then((TT => {
            this.pendingSave === IT && this.saveStarted(TT)
          }), (TT => {
            this.pendingSave === IT && this.rejectSave(TT instanceof Error ? TT : new Error(String(TT)))
          }))
        }))
      }
      saveStarted(TT) {
        switch (TT) {
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
      markSaved(TT, oT) {
        var IT, iT;
        this.fileHandle = TT, this.fileName = null !== (IT = null !== (iT = null === TT || void 0 === TT ? void 0 : TT.name) && void 0 !== iT ? iT : oT) && void 0 !== IT ? IT : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(iT.e.coreStopped.text)), this.rejectSave(new Error(iT.e.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var TT, oT, IT;
        const iT = this.deps.client.view(),
          WT = iT !== this.lastView;
        this.lastView = iT, this.opening && null !== iT && iT.state !== kT.pd.None && iT.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, zT.e)()), this.cropAsked ? (this.cropAsked = !1, null !== iT && iT.state === kT.pd.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== iT && iT.state !== kT.pd.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const FT = 0 === this.settleFrames && 0 === (null !== (TT = null === (oT = (IT = this.deps).meshPending) || void 0 === oT ? void 0 : oT.call(IT)) && void 0 !== TT ? TT : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && FT && this.release("opening"), this.holds.has("seek") && FT && this.release("seek"), this.holds.has("crop") && !this.cropRunning && FT && this.release("crop");
        const ST = this.now();
        for (const [zT, kT] of this.holds) !BT.has(zT) && ST - kT >= XT && (this.release(zT), "opening" === zT && (this.opening = !1, this.settleOpen(null)));
        this.saveRefused && !this.cropping && this.saveFailed(!1), WT && this.deps.onChange()
      }
      cropped() {
        (0, zT.e)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(TT) {
        switch (TT.reason) {
          case kT.ed.TooLarge:
            break;
          case kT.ed.Open:
          case kT.ed.NothingStaged:
            this.opening = !1, this.release("opening"), null === this.pendingOpen && this.deps.notify(iT.e.cantOpen), this.settleOpen(new Error(iT.e.cantOpen.text));
            break;
          case kT.ed.Crop:
            if (TT.code === kT.dd.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(iT.e.cropFailed);
            break;
          case kT.ed.ModuleTrap:
          case kT.ed.ModuleLoad:
          case kT.ed.Port:
            this.moduleEnded(TT.reason === kT.ed.ModuleTrap ? iT.e.coreStopped : iT.e.cantOpen);
            break;
          case kT.ed.NotLive:
            console.warn("[bloxd-wasm-client] the core refused a recorder command in playback");
            break;
          default:
            console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${TT.reason})`), this.seekAsked = !1, this.release("seek")
        }
        this.deps.onChange()
      }
      moduleEnded(TT) {
        this.resetInFlight(), this.release("opening"), this.release("seek"), this.release("crop"), null === this.pendingOpen && this.deps.notify(TT), this.settleOpen(new Error(TT.text))
      }
      saveDone(TT) {
        const oT = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === oT || void 0 === oT || oT.resolve(TT)
      }
      saveFailed(TT) {
        this.rejectSave(new Error(TT ? iT.e.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(TT) {
        TT && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(iT.e.cropBusy.text)) : this.deps.notify(iT.e.cropBusy)
      }
      resetInFlight() {
        this.opening = !1, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0
      }
      settleOpen(TT) {
        const oT = this.pendingOpen;
        this.pendingOpen = null, null === TT ? null === oT || void 0 === oT || oT.resolve() : null === oT || void 0 === oT || oT.reject(TT)
      }
      rejectSave(TT) {
        const oT = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === oT || void 0 === oT || oT.reject(TT)
      }
      hold(TT) {
        const oT = 0 === this.holds.size;
        this.holds.set(TT, this.now()), oT && this.deps.setHoldDraws(!0)
      }
      release(TT) {
        this.holds.delete(TT) && 0 === this.holds.size && this.deps.setHoldDraws(!1)
      }
      releaseAll() {
        this.holds.size > 0 && (this.holds.clear(), this.deps.setHoldDraws(!1))
      }
    }
  },
  41410: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      MESH_TAIL_MS: () => FT,
      PLAY_START_TIMEOUT_MS: () => XT,
      startWasmReplayVideoExport: () => DT
    });
    var iT = IT(38195),
      zT = IT(41417),
      kT = IT(4276),
      WT = IT(2210);
    const XT = zT.HOLD_TIMEOUT_MS + 5e3,
      BT = 50,
      FT = 200;

    function ST(TT) {
      var oT;
      return (null === (oT = TT.view) || void 0 === oT ? void 0 : oT.state) === kT.pd.Cropping || TT.kS.includes("crop")
    }

    function DT(TT) {
      return (0, iT.b)((() => function(TT) {
        var oT, IT, iT, zT, DT, LT;
        const xT = TT.viewer(),
          cT = null !== (oT = null === xT || void 0 === xT ? void 0 : xT.view) && void 0 !== oT ? oT : null,
          KT = TT.canvas();
        if (!xT || !cT || cT.state === kT.pd.None || 0 === cT.totalTicks || !KT || ST(xT)) return null;
        const MT = null !== (IT = TT.now) && void 0 !== IT ? IT : () => performance.now(),
          rT = xT.id,
          AT = () => {
            const oT = TT.viewer();
            return oT === xT && oT.id === rT && oT.isOpen ? oT : null
          },
          gT = Math.min(null !== (iT = null === (zT = cT.mark) || void 0 === zT ? void 0 : zT.outTick) && void 0 !== iT ? iT : 1 / 0, cT.totalTicks - 1);
        let hT = null,
          wT = !1;
        const mT = () => {
          var TT, oT;
          return (null === (TT = AT()) || void 0 === TT || null === (oT = TT.view) || void 0 === oT ? void 0 : oT.state) === kT.pd.Playing
        };
        return {
          sC: kT.Dd,
          playbackMarkInTick: null !== (DT = null === (LT = cT.mark) || void 0 === LT ? void 0 : LT.inTick) && void 0 !== DT ? DT : null,
          startFailure: () => {
            const TT = AT();
            return null === TT ? "Another replay opened. Export it again from there." : ST(TT) ? "Wait for the crop to finish, then export again." : null
          },
          fileName: () => {
            var TT, oT;
            return null !== (TT = null === (oT = AT()) || void 0 === oT ? void 0 : oT.fileName) && void 0 !== TT ? TT : null
          },
          playbackSpeed: () => {
            var TT, oT, IT;
            return null !== (TT = null === (oT = AT()) || void 0 === oT || null === (IT = oT.view) || void 0 === IT ? void 0 : IT.speed) && void 0 !== TT ? TT : 1
          },
          setPlaybackSpeed: TT => {
            var oT;
            null === (oT = AT()) || void 0 === oT || oT.setSpeed(TT)
          },
          play: () => {
            var TT;
            wT = !1, hT = MT(), null === (TT = AT()) || void 0 === TT || TT.play()
          },
          pause: () => {
            var TT;
            null === (TT = AT()) || void 0 === TT || TT.pause()
          },
          seekToTick: TT => {
            var oT;
            null === (oT = AT()) || void 0 === oT || oT.seek(TT, !0)
          },
          seekSettled: () => new Promise((TT => {
            const oT = setInterval((() => {
              const IT = AT();
              null === IT ? (clearInterval(oT), TT()) : IT.kS.includes("seek") || (clearInterval(oT), setTimeout(TT, FT))
            }), BT)
          })),
          isPlaying: () => {
            var TT, oT, IT;
            return null !== hT && null !== AT() && (!!mT() || !wT && (null !== (TT = null === (oT = AT()) || void 0 === oT || null === (IT = oT.view) || void 0 === IT ? void 0 : IT.dD) && void 0 !== TT ? TT : 0) < gT && MT() - hT < XT)
          },
          watchPlayback: oT => {
            const IT = TT.watchViewer((() => {
                wT ||= null !== hT && mT(), oT()
              })),
              iT = setTimeout(oT, XT + 1);
            return () => {
              clearTimeout(iT), IT()
            }
          },
          playbackFailure: () => {
            var TT, oT;
            const IT = AT();
            return null === IT ? "The replay closed before the video finished." : (null !== (TT = null === (oT = IT.view) || void 0 === oT ? void 0 : oT.dD) && void 0 !== TT ? TT : 0) >= gT ? null : wT ? "The replay stopped before the video finished." : "The replay didn't start playing."
          },
          canvas: () => KT,
          closeViewer: () => {
            TT.requestViewer("close")
          },
          reopenViewer: () => {
            TT.requestViewer("open")
          },
          holdInput: WT.h
        }
      }(TT)))
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);