export const id = 64;
export const ids = [58, 64, 92];
export const modules = {
  36807: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => OT,
      e: () => yT
    });
    var lT = cT(36);
    const MT = 1500,
      KT = 1e3,
      OT = {
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

    function yT(TT) {
      var kT;
      const cT = null !== (kT = TT.timeoutMs) && void 0 !== kT ? kT : "Error" === TT.type ? MT : KT;
      lT.k.nt("showBottomMessage", {
        message: TT.text,
        timeoutLength: cT,
        type: TT.type
      })
    }
  },
  36814: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => lT,
      g: () => MT
    });
    const lT = "data-replay-ui-active",
      MT = [{
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
  36818: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => xT,
      f: () => AT,
      h: () => IT
    });
    var lT = cT(31),
      MT = cT(36),
      KT = cT(36814);

    function OT() {
      const TT = {};
      for (const {
          group: kT
        }
        of KT.g) TT[kT] = !0;
      return TT
    }
    let yT = OT();

    function fT() {
      MT.k.nt("replayViewer|uiVisibilityChanged")
    }

    function xT() {
      return yT
    }

    function IT(TT, kT) {
      yT[TT] !== kT && (yT = {
        ...yT,
        [TT]: kT
      }, "nametag" === TT && lT.e.set({
        areNametagsHidden: !kT
      }), fT())
    }

    function AT() {
      yT = OT(), lT.e.set({
        areNametagsHidden: !1
      }), fT()
    }
  },
  39038: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => JT
    });
    var lT = cT(1758),
      MT = cT(1363),
      KT = cT(71),
      OT = cT(1046),
      yT = cT.n(OT),
      fT = cT(1470),
      xT = cT(118);
    const IT = ["video/webm;codecs=vp9,opus", "video/webm;codecs=vp8,opus", "video/webm;codecs=vp9", "video/webm;codecs=vp8", "video/webm"],
      AT = ["video/mp4;codecs=avc1,mp4a.40.2", "video/mp4;codecs=avc1.42E01E,mp4a.40.2", "video/mp4;codecs=avc1", "video/mp4"];

    function CT(TT) {
      return "webm" === TT ? IT : AT
    }

    function jT(TT) {
      for (const kT of TT)
        if ("undefined" !== typeof MediaRecorder && MediaRecorder.isTypeSupported(kT)) return kT;
      return null
    }

    function vT(TT) {
      return null !== jT(CT(TT))
    }
    var tT = cT(1099);
    const hT = [{
      id: "webm",
      label: "WebM",
      description: "Usually less screen tearing, but may not play in all media players."
    }, {
      id: "mp4",
      label: "MP4",
      description: "Works in more players, but may show graphical glitches on some devices."
    }];

    function NT() {
      return vT("webm") ? "webm" : vT("mp4") ? "mp4" : "webm"
    }

    function QT(TT) {
      let {
        cards: kT
      } = TT;
      return (0, tT.jsx)("div", {
        className: "ReplayVideoExportOptionCards",
        children: kT.map((TT => (0, tT.jsxs)("div", {
          className: "ReplayVideoExportOptionColumn",
          children: [(0, tT.jsx)("div", {
            className: yT()("ReplayVideoExportOptionCard", {
              Selected: TT.selected,
              Disabled: TT.disabled
            }),
            onClick: () => {
              TT.disabled || TT.onSelect()
            },
            children: (0, tT.jsxs)("div", {
              className: "ReplayVideoExportOptionCardBody",
              children: [(0, tT.jsx)("div", {
                className: "ReplayVideoExportOptionCardLabel",
                children: TT.label
              }), (0, tT.jsx)("div", {
                className: "ReplayVideoExportOptionCardDescription",
                children: TT.description
              })]
            })
          }), TT.disabled && TT.disabledReason && (0, tT.jsx)("div", {
            className: "ReplayVideoExportOptionError SmallTextLight",
            children: TT.disabledReason
          })]
        }, TT.id)))
      })
    }
    const ST = (0, KT.memo)((function(TT) {
      let {
        hasPlaybackMark: kT,
        canIncludeUi: cT,
        includeUiDisabledReason: lT,
        selectionRef: MT,
        closePopup: OT
      } = TT;
      const yT = vT("webm") || vT("mp4"),
        [IT, AT] = (0, KT.useState)(NT),
        [CT, jT] = (0, KT.useState)(cT),
        ST = yT && vT(IT);
      if (!yT) {
        const TT = (0, xT.isMobile)() ? "screen recording" : "OBS";
        return (0, tT.jsxs)("div", {
          className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
          children: [(0, tT.jsx)("div", {
            className: "PromptPopupNotificationTitle SmallTextBold",
            children: "Can't export video"
          }), (0, tT.jsx)("div", {
            className: "PromptPopupNotificationSubtitle SmallTextLight",
            children: `Your device does not support exporting. Try recording with an external software like ${TT}.`
          }), (0, tT.jsx)("div", {
            className: "PromptPopupNotificationBody",
            children: (0, tT.jsx)(fT.I, {
              className: "PromptPopupNotificationBodyButton",
              onClick: () => {
                MT.options = null, OT()
              },
              children: "Close"
            })
          })]
        })
      }
      const DT = kT ? "This will only play the range you've set.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes." : "This will play the whole recording from the start.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes.",
        aT = [{
          id: "withoutUi",
          label: "Without UI",
          description: "Usually cleaner and sharper.",
          selected: !CT,
          disabled: !1,
          disabledReason: null,
          onSelect: () => {
            jT(!1)
          }
        }, {
          id: "withUi",
          label: "With UI",
          description: "Includes HUD elements. May look worse on some devices.",
          selected: CT,
          disabled: !cT,
          disabledReason: lT,
          onSelect: () => {
            jT(!0)
          }
        }],
        FT = hT.map((TT => {
          const kT = vT(TT.id);
          return {
            id: TT.id,
            label: TT.label,
            description: TT.description,
            selected: IT === TT.id,
            disabled: !kT,
            disabledReason: "Your device doesn't support this format",
            onSelect: () => {
              AT(TT.id)
            }
          }
        }));
      return (0, tT.jsxs)("div", {
        className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
        children: [(0, tT.jsx)("div", {
          className: "PromptPopupNotificationTitle SmallTextBold",
          children: "Export video?"
        }), (0, tT.jsx)("div", {
          className: "PromptPopupNotificationSubtitle SmallTextLight",
          children: DT
        }), (0, tT.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, tT.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "UI"
          }), (0, tT.jsx)(QT, {
            cards: aT
          })]
        }), (0, tT.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, tT.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "Format"
          }), (0, tT.jsx)(QT, {
            cards: FT
          })]
        }), (0, tT.jsxs)("div", {
          className: "PromptPopupNotificationBody",
          children: [(0, tT.jsx)(fT.m, {
            className: "PromptPopupNotificationBodyButton PromptPopupNotificationBodyPrimaryButton",
            disabled: !ST,
            onClick: () => {
              MT.options = {
                format: IT,
                includeUi: cT && CT
              }, OT()
            },
            children: "Export"
          }), (0, tT.jsx)(fT.I, {
            className: "PromptPopupNotificationBodyButton",
            onClick: () => {
              MT.options = null, OT()
            },
            children: "Cancel"
          })]
        })]
      })
    }));
    var DT = cT(4820),
      aT = cT(36814),
      FT = cT(36818);
    let rT = null;

    function PT() {
      return function() {
        const TT = (0, FT.b)();
        for (const {
            group: kT,
            dataAttr: cT
          }
          of aT.g)
          if (cT && TT[kT]) return !0;
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
    async function wT(TT, kT, cT) {
      return TT ? async function() {
        const TT = await navigator.mediaDevices.getDisplayMedia({
          video: !0,
          audio: !1,
          preferCurrentTab: !0,
          selfBrowserSurface: "include"
        });
        for (const kT of TT.getAudioTracks()) kT.stop(), TT.removeTrack(kT);
        return TT
      }(): kT().captureStream(Math.max(1, Math.round(cT)))
    }
    var mT = cT(38888);
    let bT = !1;

    function zT(TT) {
      TT.holdInput(!1), (0, mT.h)(!1)
    }
    async function JT(TT) {
      var kT, cT;
      if ((0, mT.e)() || bT) return;
      const KT = TT();
      if (!KT) return;
      bT = !0;
      let OT = null;
      const yT = KT.playbackMarkInTick,
        {
          canIncludeUi: fT,
          includeUiDisabledReason: xT
        } = PT();
      try {
        OT = await async function(TT) {
          let {
            hasPlaybackMark: kT,
            canIncludeUi: cT,
            includeUiDisabledReason: lT
          } = TT;
          const KT = {
              options: null
            },
            OT = MT.NotificationProvider.showCustomPopup({
              body: TT => (0, tT.jsx)(ST, {
                hasPlaybackMark: kT,
                canIncludeUi: cT,
                includeUiDisabledReason: lT,
                selectionRef: KT,
                closePopup: TT
              }),
              disableExitButton: !0,
              disablePressBackgroundToClose: !0,
              unlockPointerKey: "replayVideoExportOptions"
            });
          return "notificationTornDown" === await OT.getResult() ? null : KT.options
        }({
          hasPlaybackMark: null !== yT,
          canIncludeUi: fT,
          includeUiDisabledReason: xT
        })
      } finally {
        bT = !1
      }
      if (!OT) return;
      const IT = null !== (kT = null === (cT = KT.startFailure) || void 0 === cT ? void 0 : cT.call(KT)) && void 0 !== kT ? kT : null;
      if (null !== IT) return void MT.NotificationProvider.showAlertPopup({
        title: "Video export failed",
        subtitle: IT
      });
      if (! function(TT) {
          return !(0, mT.e)() && ((0, mT.h)(!0), TT.holdInput(!0), !0)
        }(KT)) return;
      let AT = null;
      try {
        AT = await wT(OT.includeUi, (() => KT.canvas()), KT.xJ)
      } catch (oT) {
        return console.error("Failed to create video stream for export", oT), zT(KT), void MT.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: oT instanceof Error ? oT.message : "Could not start capture."
        })
      }
      let vT = null;
      const hT = [];
      let NT = null,
        QT = null;
      try {
        var aT, FT, JT;
        vT = KT.playbackSpeed(), KT.closeViewer(), KT.setPlaybackSpeed(1), KT.pause(), KT.seekToTick(null !== yT && void 0 !== yT ? yT : 0);
        const TT = await async function() {
          const TT = DT.Howler.masterGain;
          if (!DT.Howler.ctx || !TT) return null;
          await DT.Howler.ctx.resume();
          const kT = DT.Howler.ctx.createMediaStreamDestination();
          TT.connect(kT), rT = kT;
          const [cT] = kT.stream.getAudioTracks();
          return null !== cT && void 0 !== cT ? cT : null
        }();
        QT = new MediaStream;
        for (const lT of AT.getVideoTracks()) QT.addTrack(lT);
        TT && QT.addTrack(TT);
        const kT = function(TT) {
          const kT = jT(CT(TT));
          if (!kT) throw new Error(`No MediaRecorder mime type available for ${TT}`);
          return kT
        }(OT.format);
        NT = new MediaRecorder(QT, {
          mimeType: kT,
          videoBitsPerSecond: 8e6
        }), NT.ondataavailable = TT => {
          TT.data.size > 0 && hT.push(TT.data)
        };
        const cT = new Promise((TT => {
          NT.onstop = () => {
            TT()
          }
        }));
        await (null === (aT = KT.seekSettled) || void 0 === aT ? void 0 : aT.call(KT));
        const [fT] = AT.getVideoTracks();
        NT.start(250), KT.play();
        const xT = await
        function(TT, kT, cT) {
          return new Promise((lT => {
            let MT = !1;
            const KT = TT => {
                MT || (MT = !0, yT(), kT.removeEventListener("ended", OT), lT(TT))
              },
              OT = () => {
                KT("captureLost")
              },
              yT = TT.watchPlayback((() => {
                TT.isPlaying() || KT("completed")
              }));
            kT.addEventListener("ended", OT), cT.onerror = () => {
              KT("recorderError")
            }, "ended" !== kT.readyState ? TT.isPlaying() || KT("completed") : KT("captureLost")
          }))
        }(KT, fT, NT);
        if (KT.pause(), "inactive" !== NT.state && NT.stop(), await cT, "captureLost" === xT) return void MT.NotificationProvider.showAlertPopup({
          title: "Video export stopped",
          subtitle: "Screen sharing ended before the replay finished. Nothing was saved."
        });
        if ("recorderError" === xT) return void MT.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "The recorder encountered an error. Nothing was saved."
        });
        const IT = null !== (FT = null === (JT = KT.playbackFailure) || void 0 === JT ? void 0 : JT.call(KT)) && void 0 !== FT ? FT : null;
        if (null !== IT) return void MT.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: `${IT} Nothing was saved.`
        });
        const tT = new Blob(hT, {
          type: kT
        });
        tT.size > 0 ? (0, lT.b)(tT, function(TT, kT) {
          const cT = function(TT) {
            return "mp4" === TT ? "mp4" : "webm"
          }(kT);
          if (TT) return `${TT.replace(/\.bloxdreplay$/i,"")}.${cT}`;
          return `bloxd-replay-${Date.now()}.${cT}`
        }(KT.fileName(), OT.format)) : MT.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "No video data was captured. Try again."
        })
      } catch (oT) {
        console.error("Replay video export failed", oT), MT.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: oT instanceof Error ? oT.message : "Something went wrong while exporting."
        })
      } finally {
        if (NT && "inactive" !== NT.state) try {
          NT.stop()
        } catch (oT) {
          console.error("Failed to stop MediaRecorder", oT)
        }! function() {
          const TT = DT.Howler.masterGain;
          if (rT && TT) {
            try {
              TT.disconnect(rT)
            } catch (oT) {
              console.error("Failed to disconnect Howler export tee", oT)
            }
            rT = null
          } else rT = null
        }();
        for (const TT of AT.getTracks()) TT.stop();
        if (QT)
          for (const TT of QT.getTracks()) TT.stop();
        null !== vT && KT.setPlaybackSpeed(vT), KT.pause(), zT(KT), KT.reopenViewer()
      }
    }
  },
  4820: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      Howl: () => MT.Howl,
      Howler: () => MT.Howler,
      musicOutput: () => vT,
      readyAudioContext: () => tT
    });
    var lT, MT = cT(4825),
      KT = cT(4641);
    const OT = MT.Howler;

    function yT() {
      var TT, kT;
      if (OT.ctx || !OT.usingWebAudio || "undefined" === typeof AudioContext || !(0, KT.f)()) return;
      const cT = navigator.audioSession;
      let lT;
      "auto" === (null === cT || void 0 === cT ? void 0 : cT.type) && (cT.type = "ambient");
      try {
        lT = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const MT = lT.createGain();
      MT.gain.setValueAtTime(OT._muted ? 0 : null !== (TT = OT._volume) && void 0 !== TT ? TT : 1, lT.currentTime), MT.connect(lT.destination), OT.ctx = lT, OT.masterGain = MT, null === (kT = OT._setup) || void 0 === kT || kT.call(OT)
    }
    OT._mobileUnloaded = !0;
    const fT = OT.volume.bind(MT.Howler);
    OT.volume = function() {
      return yT(), fT(...arguments)
    };
    const xT = OT.mute.bind(MT.Howler);
    OT.mute = TT => (yT(), xT(TT));
    const IT = MT.Howl.prototype,
      AT = IT.init;
    IT.init = function(TT) {
      return yT(), AT.call(this, TT)
    };
    let CT = 0;
    const jT = null === (lT = OT._autoSuspend) || void 0 === lT ? void 0 : lT.bind(MT.Howler);

    function vT() {
      tT();
      const {
        ctx: TT,
        masterGain: kT
      } = OT;
      return TT && kT ? {
        ctx: TT,
        destination: kT,
        holdAwake: TT => {
          var kT, cT;
          (CT += TT ? 1 : -1, TT) ? null === (kT = OT._autoResume) || void 0 === kT || kT.call(OT): null === (cT = OT._autoSuspend) || void 0 === cT || cT.call(OT)
        },
        wake: () => {
          var kT;
          "running" !== TT.state && (null === (kT = OT._autoResume) || void 0 === kT || kT.call(OT), TT.resume().catch((() => {})))
        }
      } : null
    }

    function tT() {
      var TT;
      (OT.volume(), OT.ctx && OT.autoUnlock) && (null === (TT = OT._unlockAudio) || void 0 === TT || TT.call(OT))
    }
    jT && (OT._autoSuspend = () => CT > 0 ? MT.Howler : jT())
  },
  42126: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => lT,
      g: () => MT
    });
    const lT = ["recording", "freecam", "keyframe"];

    function MT() {
      const TT = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(TT[1]) << 32n | BigInt(TT[0])
    }
  },
  42156: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      HOLD_TIMEOUT_MS: () => yT,
      ReplayViewer: () => xT
    });
    var lT = cT(36807),
      MT = cT(36818),
      KT = cT(4761),
      OT = cT(42126);
    const yT = 1e4,
      fT = new Set(["Bj"]);
    class xT {
      constructor(TT) {
        var kT;
        this.deps = TT, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (kT = TT.now) && void 0 !== kT ? kT : () => performance.now()
      }
      get inPlayback() {
        return this.playback
      }
      get view() {
        return this.lastView
      }
      get isOpen() {
        return null !== this.lastView && this.lastView.state !== KT.kd.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get ty() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? lT.d.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(TT, kT) {
        var cT, MT, OT, yT;
        const {
          client: fT
        } = this.deps;
        if (!this.playback) {
          if (!fT.setPlayback(!0)) throw new Error(lT.d.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const xT = this.epoch;
        let IT;
        try {
          IT = await fT.open(TT)
        } finally {
          this.loadingOpens--
        }
        if (xT !== this.epoch) throw new Error(lT.d.coreStopped.text);
        if ("opening" !== IT) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const TT = function(TT) {
            switch (TT) {
              case "reloading":
                return null;
              case "stopped":
              case KT.$c.ModuleTrap:
                return lT.d.coreStopped;
              case KT.$c.ModuleLoad:
                return lT.d.viewerLoadFailed;
              case KT.$c.TooLarge:
                return lT.d.cantOpen
            }
          }(IT);
          if (null === TT) return;
          throw new Error(TT.text)
        }
        return this.rejectSave(new Error(lT.d.saveClosed.text)), this.fileName = null !== (cT = null !== (MT = kT.fileName) && void 0 !== MT ? MT : null === (OT = kT.fileHandle) || void 0 === OT ? void 0 : OT.name) && void 0 !== cT ? cT : null, this.fileHandle = null !== (yT = kT.fileHandle) && void 0 !== yT ? yT : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((TT, kT) => {
          this.pendingOpen = {
            resolve: TT,
            reject: kT
          }
        }))
      }
      play() {
        this.holds.has("Bj") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("Bj")
      }
      seek(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const cT = this.lastView;
        null !== cT && (kT || TT < cT.UA) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(TT, kT)
      }
      setSpeed(TT) {
        this.deps.client.setSpeed(TT)
      }
      setCameraMode(TT) {
        this.deps.client.setCameraMode(TT)
      }
      cycleCameraMode() {
        const TT = this.lastView;
        null !== TT && TT.state !== KT.kd.None && this.setCameraMode(OT.d[(OT.d.indexOf(TT.cameraMode) + 1) % OT.d.length])
      }
      addKeyframe() {
        this.edited(this.deps.client.addKeyframe())
      }
      setKeyframe(TT) {
        this.edited(this.deps.client.setKeyframe(TT))
      }
      moveKeyframe(TT, kT) {
        this.edited(this.deps.client.moveKeyframe(TT, kT))
      }
      deleteKeyframes(TT, kT) {
        this.edited(this.deps.client.deleteKeyframes(TT, kT))
      }
      setMark(TT) {
        this.edited(this.deps.client.setMark(TT))
      }
      crop(TT, kT) {
        return !(kT <= TT) && (null !== this.pendingSave ? (this.deps.notify(lT.d.saveBusy), !1) : !!this.deps.client.crop(TT, kT) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(lT.d.saveBusy.text)) : new Promise(((TT, kT) => {
          const cT = {
            resolve: TT,
            reject: kT
          };
          this.pendingSave = cT, this.editsAtSave = this.edits, this.deps.client.save((0, OT.g)()).then((TT => {
            this.pendingSave === cT && this.saveStarted(TT)
          }), (TT => {
            this.pendingSave === cT && this.rejectSave(TT instanceof Error ? TT : new Error(String(TT)))
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
      markSaved(TT, kT) {
        var cT, lT;
        this.fileHandle = TT, this.fileName = null !== (cT = null !== (lT = null === TT || void 0 === TT ? void 0 : TT.name) && void 0 !== lT ? lT : kT) && void 0 !== cT ? cT : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(lT.d.coreStopped.text)), this.rejectSave(new Error(lT.d.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var TT, kT, cT;
        const lT = this.deps.client.view(),
          OT = lT !== this.lastView;
        this.lastView = lT, this.opening && null !== lT && lT.state !== KT.kd.None && lT.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, MT.f)()), this.cropAsked ? (this.cropAsked = !1, null !== lT && lT.state === KT.kd.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== lT && lT.state !== KT.kd.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const xT = 0 === this.settleFrames && 0 === (null !== (TT = null === (kT = (cT = this.deps).meshPending) || void 0 === kT ? void 0 : kT.call(cT)) && void 0 !== TT ? TT : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && xT && this.release("opening"), this.holds.has("seek") && xT && this.release("seek"), this.holds.has("crop") && !this.cropRunning && xT && this.release("crop");
        const IT = this.now();
        for (const [MT, KT] of this.holds) !fT.has(MT) && IT - KT >= yT && (this.release(MT), "opening" === MT && (this.opening = !1, this.settleOpen(null)));
        this.saveRefused && !this.cropping && this.saveFailed(!1), OT && this.deps.onChange()
      }
      cropped() {
        (0, MT.f)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(TT) {
        switch (TT.reason) {
          case KT.$c.TooLarge:
            break;
          case KT.$c.Open:
          case KT.$c.NothingStaged:
            this.opening = !1, this.release("opening"), null === this.pendingOpen && this.deps.notify(lT.d.cantOpen), this.settleOpen(new Error(lT.d.cantOpen.text));
            break;
          case KT.$c.Crop:
            if (TT.code === KT.Xc.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(lT.d.cropFailed);
            break;
          case KT.$c.ModuleTrap:
          case KT.$c.ModuleLoad:
          case KT.$c.Port:
            this.moduleEnded(TT.reason === KT.$c.ModuleTrap ? lT.d.coreStopped : lT.d.cantOpen);
            break;
          case KT.$c.NotLive:
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
        const kT = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === kT || void 0 === kT || kT.resolve(TT)
      }
      saveFailed(TT) {
        this.rejectSave(new Error(TT ? lT.d.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(TT) {
        TT && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(lT.d.cropBusy.text)) : this.deps.notify(lT.d.cropBusy)
      }
      resetInFlight() {
        this.opening = !1, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0
      }
      settleOpen(TT) {
        const kT = this.pendingOpen;
        this.pendingOpen = null, null === TT ? null === kT || void 0 === kT || kT.resolve() : null === kT || void 0 === kT || kT.reject(TT)
      }
      rejectSave(TT) {
        const kT = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === kT || void 0 === kT || kT.reject(TT)
      }
      hold(TT) {
        const kT = 0 === this.holds.size;
        this.holds.set(TT, this.now()), kT && this.deps.setHoldDraws(!0)
      }
      release(TT) {
        this.holds.delete(TT) && 0 === this.holds.size && this.deps.setHoldDraws(!1)
      }
      releaseAll() {
        this.holds.size > 0 && (this.holds.clear(), this.deps.setHoldDraws(!1))
      }
    }
  },
  42154: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      MESH_TAIL_MS: () => xT,
      PLAY_START_TIMEOUT_MS: () => yT,
      startWasmReplayVideoExport: () => AT
    });
    var lT = cT(39038),
      MT = cT(42156),
      KT = cT(4761),
      OT = cT(2452);
    const yT = MT.HOLD_TIMEOUT_MS + 5e3,
      fT = 50,
      xT = 200;

    function IT(TT) {
      var kT;
      return (null === (kT = TT.view) || void 0 === kT ? void 0 : kT.state) === KT.kd.Cropping || TT.ty.includes("crop")
    }

    function AT(TT) {
      return (0, lT.d)((() => function(TT) {
        var kT, cT, lT, MT, AT, CT;
        const jT = TT.viewer(),
          vT = null !== (kT = null === jT || void 0 === jT ? void 0 : jT.view) && void 0 !== kT ? kT : null,
          tT = TT.canvas();
        if (!jT || !vT || vT.state === KT.kd.None || 0 === vT.totalTicks || !tT || IT(jT)) return null;
        const hT = null !== (cT = TT.now) && void 0 !== cT ? cT : () => performance.now(),
          NT = jT.id,
          QT = () => {
            const kT = TT.viewer();
            return kT === jT && kT.id === NT && kT.isOpen ? kT : null
          },
          ST = Math.min(null !== (lT = null === (MT = vT.mark) || void 0 === MT ? void 0 : MT.outTick) && void 0 !== lT ? lT : 1 / 0, vT.totalTicks - 1);
        let DT = null,
          aT = !1;
        const FT = () => {
          var TT, kT;
          return (null === (TT = QT()) || void 0 === TT || null === (kT = TT.view) || void 0 === kT ? void 0 : kT.state) === KT.kd.Playing
        };
        return {
          xJ: KT.sd,
          playbackMarkInTick: null !== (AT = null === (CT = vT.mark) || void 0 === CT ? void 0 : CT.inTick) && void 0 !== AT ? AT : null,
          startFailure: () => {
            const TT = QT();
            return null === TT ? "Another replay opened. Export it again from there." : IT(TT) ? "Wait for the crop to finish, then export again." : null
          },
          fileName: () => {
            var TT, kT;
            return null !== (TT = null === (kT = QT()) || void 0 === kT ? void 0 : kT.fileName) && void 0 !== TT ? TT : null
          },
          playbackSpeed: () => {
            var TT, kT, cT;
            return null !== (TT = null === (kT = QT()) || void 0 === kT || null === (cT = kT.view) || void 0 === cT ? void 0 : cT.speed) && void 0 !== TT ? TT : 1
          },
          setPlaybackSpeed: TT => {
            var kT;
            null === (kT = QT()) || void 0 === kT || kT.setSpeed(TT)
          },
          play: () => {
            var TT;
            aT = !1, DT = hT(), null === (TT = QT()) || void 0 === TT || TT.play()
          },
          pause: () => {
            var TT;
            null === (TT = QT()) || void 0 === TT || TT.pause()
          },
          seekToTick: TT => {
            var kT;
            null === (kT = QT()) || void 0 === kT || kT.seek(TT, !0)
          },
          seekSettled: () => new Promise((TT => {
            const kT = setInterval((() => {
              const cT = QT();
              null === cT ? (clearInterval(kT), TT()) : cT.ty.includes("seek") || (clearInterval(kT), setTimeout(TT, xT))
            }), fT)
          })),
          isPlaying: () => {
            var TT, kT, cT;
            return null !== DT && null !== QT() && (!!FT() || !aT && (null !== (TT = null === (kT = QT()) || void 0 === kT || null === (cT = kT.view) || void 0 === cT ? void 0 : cT.UA) && void 0 !== TT ? TT : 0) < ST && hT() - DT < yT)
          },
          watchPlayback: kT => {
            const cT = TT.watchViewer((() => {
                aT ||= null !== DT && FT(), kT()
              })),
              lT = setTimeout(kT, yT + 1);
            return () => {
              clearTimeout(lT), cT()
            }
          },
          playbackFailure: () => {
            var TT, kT;
            const cT = QT();
            return null === cT ? "The replay closed before the video finished." : (null !== (TT = null === (kT = cT.view) || void 0 === kT ? void 0 : kT.UA) && void 0 !== TT ? TT : 0) >= ST ? null : aT ? "The replay stopped before the video finished." : "The replay didn't start playing."
          },
          canvas: () => tT,
          closeViewer: () => {
            TT.requestViewer("close")
          },
          reopenViewer: () => {
            TT.requestViewer("open")
          },
          holdInput: OT.g
        }
      }(TT)))
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);