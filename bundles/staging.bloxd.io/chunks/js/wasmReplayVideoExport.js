export const id = 64;
export const ids = [58, 64, 92];
export const modules = {
  36644: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Ub,
      f: () => Lb
    });
    var Bb = hb(16);
    const Ob = 1500,
      Gb = 1e3,
      Ub = {
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

    function Lb(bb) {
      var ub;
      const hb = null !== (ub = bb.timeoutMs) && void 0 !== ub ? ub : "Error" === bb.type ? Ob : Gb;
      Bb.i.vp("showBottomMessage", {
        message: bb.text,
        timeoutLength: hb,
        type: bb.type
      })
    }
  },
  36656: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Bb,
      c: () => Ob
    });
    const Bb = "data-replay-ui-active",
      Ob = [{
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
  36659: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Sb,
      f: () => Hb,
      i: () => ab
    });
    var Bb = hb(13),
      Ob = hb(16),
      Gb = hb(36656);

    function Ub() {
      const bb = {};
      for (const {
          group: ub
        }
        of Gb.c) bb[ub] = !0;
      return bb
    }
    let Lb = Ub();

    function Yb() {
      Ob.i.vp("replayViewer|uiVisibilityChanged")
    }

    function Sb() {
      return Lb
    }

    function ab(bb, ub) {
      Lb[bb] !== ub && (Lb = {
        ...Lb,
        [bb]: ub
      }, "nametag" === bb && Bb.d.set({
        areNametagsHidden: !ub
      }), Yb())
    }

    function Hb() {
      Lb = Ub(), Bb.d.set({
        areNametagsHidden: !1
      }), Yb()
    }
  },
  38864: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => gb
    });
    var Bb = hb(1636),
      Ob = hb(1249),
      Gb = hb(49),
      Ub = hb(958),
      Lb = hb.n(Ub),
      Yb = hb(1357),
      Sb = hb(86);
    const ab = ["video/webm;codecs=vp9,opus", "video/webm;codecs=vp8,opus", "video/webm;codecs=vp9", "video/webm;codecs=vp8", "video/webm"],
      Hb = ["video/mp4;codecs=avc1,mp4a.40.2", "video/mp4;codecs=avc1.42E01E,mp4a.40.2", "video/mp4;codecs=avc1", "video/mp4"];

    function wb(bb) {
      return "webm" === bb ? ab : Hb
    }

    function Zb(bb) {
      for (const ub of bb)
        if ("undefined" !== typeof MediaRecorder && MediaRecorder.isTypeSupported(ub)) return ub;
      return null
    }

    function Xb(bb) {
      return null !== Zb(wb(bb))
    }
    var pb = hb(1007);
    const ob = [{
      id: "webm",
      label: "WebM",
      description: "Usually less screen tearing, but may not play in all media players."
    }, {
      id: "mp4",
      label: "MP4",
      description: "Works in more players, but may show graphical glitches on some devices."
    }];

    function Ab() {
      return Xb("webm") ? "webm" : Xb("mp4") ? "mp4" : "webm"
    }

    function lb(bb) {
      let {
        cards: ub
      } = bb;
      return (0, pb.jsx)("div", {
        className: "ReplayVideoExportOptionCards",
        children: ub.map((bb => (0, pb.jsxs)("div", {
          className: "ReplayVideoExportOptionColumn",
          children: [(0, pb.jsx)("div", {
            className: Lb()("ReplayVideoExportOptionCard", {
              Selected: bb.selected,
              Disabled: bb.disabled
            }),
            onClick: () => {
              bb.disabled || bb.onSelect()
            },
            children: (0, pb.jsxs)("div", {
              className: "ReplayVideoExportOptionCardBody",
              children: [(0, pb.jsx)("div", {
                className: "ReplayVideoExportOptionCardLabel",
                children: bb.label
              }), (0, pb.jsx)("div", {
                className: "ReplayVideoExportOptionCardDescription",
                children: bb.description
              })]
            })
          }), bb.disabled && bb.disabledReason && (0, pb.jsx)("div", {
            className: "ReplayVideoExportOptionError SmallTextLight",
            children: bb.disabledReason
          })]
        }, bb.id)))
      })
    }
    const Kb = (0, Gb.memo)((function(bb) {
      let {
        hasPlaybackMark: ub,
        canIncludeUi: hb,
        includeUiDisabledReason: Bb,
        selectionRef: Ob,
        closePopup: Ub
      } = bb;
      const Lb = Xb("webm") || Xb("mp4"),
        [ab, Hb] = (0, Gb.useState)(Ab),
        [wb, Zb] = (0, Gb.useState)(hb),
        Kb = Lb && Xb(ab);
      if (!Lb) {
        const bb = (0, Sb.isMobile)() ? "screen recording" : "OBS";
        return (0, pb.jsxs)("div", {
          className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
          children: [(0, pb.jsx)("div", {
            className: "PromptPopupNotificationTitle SmallTextBold",
            children: "Can't export video"
          }), (0, pb.jsx)("div", {
            className: "PromptPopupNotificationSubtitle SmallTextLight",
            children: `Your device does not support exporting. Try recording with an external software like ${bb}.`
          }), (0, pb.jsx)("div", {
            className: "PromptPopupNotificationBody",
            children: (0, pb.jsx)(Yb.H, {
              className: "PromptPopupNotificationBodyButton",
              onClick: () => {
                Ob.options = null, Ub()
              },
              children: "Close"
            })
          })]
        })
      }
      const Wb = ub ? "This will only play the range you've set.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes." : "This will play the whole recording from the start.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes.",
        Cb = [{
          id: "withoutUi",
          label: "Without UI",
          description: "Usually cleaner and sharper.",
          selected: !wb,
          disabled: !1,
          disabledReason: null,
          onSelect: () => {
            Zb(!1)
          }
        }, {
          id: "withUi",
          label: "With UI",
          description: "Includes HUD elements. May look worse on some devices.",
          selected: wb,
          disabled: !hb,
          disabledReason: Bb,
          onSelect: () => {
            Zb(!0)
          }
        }],
        db = ob.map((bb => {
          const ub = Xb(bb.id);
          return {
            id: bb.id,
            label: bb.label,
            description: bb.description,
            selected: ab === bb.id,
            disabled: !ub,
            disabledReason: "Your device doesn't support this format",
            onSelect: () => {
              Hb(bb.id)
            }
          }
        }));
      return (0, pb.jsxs)("div", {
        className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
        children: [(0, pb.jsx)("div", {
          className: "PromptPopupNotificationTitle SmallTextBold",
          children: "Export video?"
        }), (0, pb.jsx)("div", {
          className: "PromptPopupNotificationSubtitle SmallTextLight",
          children: Wb
        }), (0, pb.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, pb.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "UI"
          }), (0, pb.jsx)(lb, {
            cards: Cb
          })]
        }), (0, pb.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, pb.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "Format"
          }), (0, pb.jsx)(lb, {
            cards: db
          })]
        }), (0, pb.jsxs)("div", {
          className: "PromptPopupNotificationBody",
          children: [(0, pb.jsx)(Yb.m, {
            className: "PromptPopupNotificationBodyButton PromptPopupNotificationBodyPrimaryButton",
            disabled: !Kb,
            onClick: () => {
              Ob.options = {
                format: ab,
                includeUi: hb && wb
              }, Ub()
            },
            children: "Export"
          }), (0, pb.jsx)(Yb.H, {
            className: "PromptPopupNotificationBodyButton",
            onClick: () => {
              Ob.options = null, Ub()
            },
            children: "Cancel"
          })]
        })]
      })
    }));
    var Wb = hb(4626),
      Cb = hb(36656),
      db = hb(36659);
    let rb = null;

    function jb() {
      return function() {
        const bb = (0, db.e)();
        for (const {
            group: ub,
            dataAttr: hb
          }
          of Cb.c)
          if (hb && bb[ub]) return !0;
        return !1
      }() ? function() {
        var bb;
        return "function" === typeof(null === (bb = navigator.mediaDevices) || void 0 === bb ? void 0 : bb.getDisplayMedia)
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
    async function nb(bb, ub, hb) {
      return bb ? async function() {
        const bb = await navigator.mediaDevices.getDisplayMedia({
          video: !0,
          audio: !1,
          preferCurrentTab: !0,
          selfBrowserSurface: "include"
        });
        for (const ub of bb.getAudioTracks()) ub.stop(), bb.removeTrack(ub);
        return bb
      }(): ub().captureStream(Math.max(1, Math.round(hb)))
    }
    var Db = hb(38710);
    let xb = !1;

    function zb(bb) {
      bb.holdInput(!1), (0, Db.e)(!1)
    }
    async function gb(bb) {
      var ub, hb;
      if ((0, Db.b)() || xb) return;
      const Gb = bb();
      if (!Gb) return;
      xb = !0;
      let Ub = null;
      const Lb = Gb.playbackMarkInTick,
        {
          canIncludeUi: Yb,
          includeUiDisabledReason: Sb
        } = jb();
      try {
        Ub = await async function(bb) {
          let {
            hasPlaybackMark: ub,
            canIncludeUi: hb,
            includeUiDisabledReason: Bb
          } = bb;
          const Gb = {
              options: null
            },
            Ub = Ob.NotificationProvider.showCustomPopup({
              body: bb => (0, pb.jsx)(Kb, {
                hasPlaybackMark: ub,
                canIncludeUi: hb,
                includeUiDisabledReason: Bb,
                selectionRef: Gb,
                closePopup: bb
              }),
              disableExitButton: !0,
              disablePressBackgroundToClose: !0,
              unlockPointerKey: "replayVideoExportOptions"
            });
          return "notificationTornDown" === await Ub.getResult() ? null : Gb.options
        }({
          hasPlaybackMark: null !== Lb,
          canIncludeUi: Yb,
          includeUiDisabledReason: Sb
        })
      } finally {
        xb = !1
      }
      if (!Ub) return;
      const ab = null !== (ub = null === (hb = Gb.startFailure) || void 0 === hb ? void 0 : hb.call(Gb)) && void 0 !== ub ? ub : null;
      if (null !== ab) return void Ob.NotificationProvider.showAlertPopup({
        title: "Video export failed",
        subtitle: ab
      });
      if (! function(bb) {
          return !(0, Db.b)() && ((0, Db.e)(!0), bb.holdInput(!0), !0)
        }(Gb)) return;
      let Hb = null;
      try {
        Hb = await nb(Ub.includeUi, (() => Gb.canvas()), Gb.hN)
      } catch (ib) {
        return console.error("Failed to create video stream for export", ib), zb(Gb), void Ob.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: ib instanceof Error ? ib.message : "Could not start capture."
        })
      }
      let Xb = null;
      const ob = [];
      let Ab = null,
        lb = null;
      try {
        var Cb, db, gb;
        Xb = Gb.playbackSpeed(), Gb.closeViewer(), Gb.setPlaybackSpeed(1), Gb.pause(), Gb.seekToTick(null !== Lb && void 0 !== Lb ? Lb : 0);
        const bb = await async function() {
          const bb = Wb.Howler.masterGain;
          if (!Wb.Howler.ctx || !bb) return null;
          await Wb.Howler.ctx.resume();
          const ub = Wb.Howler.ctx.createMediaStreamDestination();
          bb.connect(ub), rb = ub;
          const [hb] = ub.stream.getAudioTracks();
          return null !== hb && void 0 !== hb ? hb : null
        }();
        lb = new MediaStream;
        for (const Bb of Hb.getVideoTracks()) lb.addTrack(Bb);
        bb && lb.addTrack(bb);
        const ub = function(bb) {
          const ub = Zb(wb(bb));
          if (!ub) throw new Error(`No MediaRecorder mime type available for ${bb}`);
          return ub
        }(Ub.format);
        Ab = new MediaRecorder(lb, {
          mimeType: ub,
          videoBitsPerSecond: 8e6
        }), Ab.ondataavailable = bb => {
          bb.data.size > 0 && ob.push(bb.data)
        };
        const hb = new Promise((bb => {
          Ab.onstop = () => {
            bb()
          }
        }));
        await (null === (Cb = Gb.seekSettled) || void 0 === Cb ? void 0 : Cb.call(Gb));
        const [Yb] = Hb.getVideoTracks();
        Ab.start(250), Gb.play();
        const Sb = await
        function(bb, ub, hb) {
          return new Promise((Bb => {
            let Ob = !1;
            const Gb = bb => {
                Ob || (Ob = !0, Lb(), ub.removeEventListener("ended", Ub), Bb(bb))
              },
              Ub = () => {
                Gb("captureLost")
              },
              Lb = bb.watchPlayback((() => {
                bb.isPlaying() || Gb("completed")
              }));
            ub.addEventListener("ended", Ub), hb.onerror = () => {
              Gb("recorderError")
            }, "ended" !== ub.readyState ? bb.isPlaying() || Gb("completed") : Gb("captureLost")
          }))
        }(Gb, Yb, Ab);
        if (Gb.pause(), "inactive" !== Ab.state && Ab.stop(), await hb, "captureLost" === Sb) return void Ob.NotificationProvider.showAlertPopup({
          title: "Video export stopped",
          subtitle: "Screen sharing ended before the replay finished. Nothing was saved."
        });
        if ("recorderError" === Sb) return void Ob.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "The recorder encountered an error. Nothing was saved."
        });
        const ab = null !== (db = null === (gb = Gb.playbackFailure) || void 0 === gb ? void 0 : gb.call(Gb)) && void 0 !== db ? db : null;
        if (null !== ab) return void Ob.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: `${ab} Nothing was saved.`
        });
        const pb = new Blob(ob, {
          type: ub
        });
        pb.size > 0 ? (0, Bb.e)(pb, function(bb, ub) {
          const hb = function(bb) {
            return "mp4" === bb ? "mp4" : "webm"
          }(ub);
          if (bb) return `${bb.replace(/\.bloxdreplay$/i,"")}.${hb}`;
          return `bloxd-replay-${Date.now()}.${hb}`
        }(Gb.fileName(), Ub.format)) : Ob.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "No video data was captured. Try again."
        })
      } catch (ib) {
        console.error("Replay video export failed", ib), Ob.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: ib instanceof Error ? ib.message : "Something went wrong while exporting."
        })
      } finally {
        if (Ab && "inactive" !== Ab.state) try {
          Ab.stop()
        } catch (ib) {
          console.error("Failed to stop MediaRecorder", ib)
        }! function() {
          const bb = Wb.Howler.masterGain;
          if (rb && bb) {
            try {
              bb.disconnect(rb)
            } catch (ib) {
              console.error("Failed to disconnect Howler export tee", ib)
            }
            rb = null
          } else rb = null
        }();
        for (const bb of Hb.getTracks()) bb.stop();
        if (lb)
          for (const bb of lb.getTracks()) bb.stop();
        null !== Xb && Gb.setPlaybackSpeed(Xb), Gb.pause(), zb(Gb), Gb.reopenViewer()
      }
    }
  },
  4626: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      Howl: () => Ob.Howl,
      Howler: () => Ob.Howler,
      musicOutput: () => Xb,
      readyAudioContext: () => pb
    });
    var Bb, Ob = hb(4629),
      Gb = hb(4415);
    const Ub = Ob.Howler;

    function Lb() {
      var bb, ub;
      if (Ub.ctx || !Ub.usingWebAudio || "undefined" === typeof AudioContext || !(0, Gb.d)()) return;
      const hb = navigator.audioSession;
      let Bb;
      "auto" === (null === hb || void 0 === hb ? void 0 : hb.type) && (hb.type = "ambient");
      try {
        Bb = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const Ob = Bb.createGain();
      Ob.gain.setValueAtTime(Ub._muted ? 0 : null !== (bb = Ub._volume) && void 0 !== bb ? bb : 1, Bb.currentTime), Ob.connect(Bb.destination), Ub.ctx = Bb, Ub.masterGain = Ob, null === (ub = Ub._setup) || void 0 === ub || ub.call(Ub)
    }
    Ub._mobileUnloaded = !0;
    const Yb = Ub.volume.bind(Ob.Howler);
    Ub.volume = function() {
      return Lb(), Yb(...arguments)
    };
    const Sb = Ub.mute.bind(Ob.Howler);
    Ub.mute = bb => (Lb(), Sb(bb));
    const ab = Ob.Howl.prototype,
      Hb = ab.init;
    ab.init = function(bb) {
      return Lb(), Hb.call(this, bb)
    };
    let wb = 0;
    const Zb = null === (Bb = Ub._autoSuspend) || void 0 === Bb ? void 0 : Bb.bind(Ob.Howler);

    function Xb() {
      pb();
      const {
        ctx: bb,
        masterGain: ub
      } = Ub;
      return bb && ub ? {
        ctx: bb,
        destination: ub,
        holdAwake: bb => {
          var ub, hb;
          (wb += bb ? 1 : -1, bb) ? null === (ub = Ub._autoResume) || void 0 === ub || ub.call(Ub): null === (hb = Ub._autoSuspend) || void 0 === hb || hb.call(Ub)
        },
        wake: () => {
          var ub;
          "running" !== bb.state && (null === (ub = Ub._autoResume) || void 0 === ub || ub.call(Ub), bb.resume().catch((() => {})))
        }
      } : null
    }

    function pb() {
      var bb;
      (Ub.volume(), Ub.ctx && Ub.autoUnlock) && (null === (bb = Ub._unlockAudio) || void 0 === bb || bb.call(Ub))
    }
    Zb && (Ub._autoSuspend = () => wb > 0 ? Ob.Howler : Zb())
  },
  42002: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Bb,
      f: () => Ob
    });
    const Bb = ["recording", "freecam", "keyframe"];

    function Ob() {
      const bb = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(bb[1]) << 32n | BigInt(bb[0])
    }
  },
  42033: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      HOLD_TIMEOUT_MS: () => Lb,
      ReplayViewer: () => Sb
    });
    var Bb = hb(36644),
      Ob = hb(36659),
      Gb = hb(4555),
      Ub = hb(42002);
    const Lb = 1e4,
      Yb = new Set(["vZ"]);
    class Sb {
      constructor(bb) {
        var ub;
        this.deps = bb, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (ub = bb.now) && void 0 !== ub ? ub : () => performance.now()
      }
      get inPlayback() {
        return this.playback
      }
      get view() {
        return this.lastView
      }
      get isOpen() {
        return null !== this.lastView && this.lastView.state !== Gb.Xc.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get MS() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? Bb.e.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(bb, ub) {
        var hb, Ob, Ub, Lb;
        const {
          client: Yb
        } = this.deps;
        if (!this.playback) {
          if (!Yb.setPlayback(!0)) throw new Error(Bb.e.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const Sb = this.epoch;
        let ab;
        try {
          ab = await Yb.open(bb)
        } finally {
          this.loadingOpens--
        }
        if (Sb !== this.epoch) throw new Error(Bb.e.coreStopped.text);
        if ("opening" !== ab) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const bb = function(bb) {
            switch (bb) {
              case "reloading":
                return null;
              case "stopped":
              case Gb.Mc.ModuleTrap:
                return Bb.e.coreStopped;
              case Gb.Mc.ModuleLoad:
                return Bb.e.viewerLoadFailed;
              case Gb.Mc.TooLarge:
                return Bb.e.cantOpen
            }
          }(ab);
          if (null === bb) return;
          throw new Error(bb.text)
        }
        return this.rejectSave(new Error(Bb.e.saveClosed.text)), this.fileName = null !== (hb = null !== (Ob = ub.fileName) && void 0 !== Ob ? Ob : null === (Ub = ub.fileHandle) || void 0 === Ub ? void 0 : Ub.name) && void 0 !== hb ? hb : null, this.fileHandle = null !== (Lb = ub.fileHandle) && void 0 !== Lb ? Lb : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((bb, ub) => {
          this.pendingOpen = {
            resolve: bb,
            reject: ub
          }
        }))
      }
      play() {
        this.holds.has("vZ") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("vZ")
      }
      seek(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const hb = this.lastView;
        null !== hb && (ub || bb < hb.gH) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(bb, ub)
      }
      setSpeed(bb) {
        this.deps.client.setSpeed(bb)
      }
      setCameraMode(bb) {
        this.deps.client.setCameraMode(bb)
      }
      cycleCameraMode() {
        const bb = this.lastView;
        null !== bb && bb.state !== Gb.Xc.None && this.setCameraMode(Ub.e[(Ub.e.indexOf(bb.cameraMode) + 1) % Ub.e.length])
      }
      addKeyframe() {
        this.edited(this.deps.client.addKeyframe())
      }
      setKeyframe(bb) {
        this.edited(this.deps.client.setKeyframe(bb))
      }
      moveKeyframe(bb, ub) {
        this.edited(this.deps.client.moveKeyframe(bb, ub))
      }
      deleteKeyframes(bb, ub) {
        this.edited(this.deps.client.deleteKeyframes(bb, ub))
      }
      setMark(bb) {
        this.edited(this.deps.client.setMark(bb))
      }
      crop(bb, ub) {
        return !(ub <= bb) && (null !== this.pendingSave ? (this.deps.notify(Bb.e.saveBusy), !1) : !!this.deps.client.crop(bb, ub) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(Bb.e.saveBusy.text)) : new Promise(((bb, ub) => {
          const hb = {
            resolve: bb,
            reject: ub
          };
          this.pendingSave = hb, this.editsAtSave = this.edits, this.deps.client.save((0, Ub.f)()).then((bb => {
            this.pendingSave === hb && this.saveStarted(bb)
          }), (bb => {
            this.pendingSave === hb && this.rejectSave(bb instanceof Error ? bb : new Error(String(bb)))
          }))
        }))
      }
      saveStarted(bb) {
        switch (bb) {
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
      markSaved(bb, ub) {
        var hb, Bb;
        this.fileHandle = bb, this.fileName = null !== (hb = null !== (Bb = null === bb || void 0 === bb ? void 0 : bb.name) && void 0 !== Bb ? Bb : ub) && void 0 !== hb ? hb : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(Bb.e.coreStopped.text)), this.rejectSave(new Error(Bb.e.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var bb, ub, hb;
        const Bb = this.deps.client.view(),
          Ub = Bb !== this.lastView;
        this.lastView = Bb, this.opening && null !== Bb && Bb.state !== Gb.Xc.None && Bb.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, Ob.f)()), this.cropAsked ? (this.cropAsked = !1, null !== Bb && Bb.state === Gb.Xc.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== Bb && Bb.state !== Gb.Xc.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const Sb = 0 === this.settleFrames && 0 === (null !== (bb = null === (ub = (hb = this.deps).meshPending) || void 0 === ub ? void 0 : ub.call(hb)) && void 0 !== bb ? bb : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && Sb && this.release("opening"), this.holds.has("seek") && Sb && this.release("seek"), this.holds.has("crop") && !this.cropRunning && Sb && this.release("crop");
        const ab = this.now();
        for (const [Ob, Gb] of this.holds) !Yb.has(Ob) && ab - Gb >= Lb && (this.release(Ob), "opening" === Ob && (this.opening = !1, this.settleOpen(null)));
        this.saveRefused && !this.cropping && this.saveFailed(!1), Ub && this.deps.onChange()
      }
      cropped() {
        (0, Ob.f)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(bb) {
        switch (bb.reason) {
          case Gb.Mc.TooLarge:
            break;
          case Gb.Mc.Open:
          case Gb.Mc.NothingStaged:
            this.opening = !1, this.release("opening"), null === this.pendingOpen && this.deps.notify(Bb.e.cantOpen), this.settleOpen(new Error(Bb.e.cantOpen.text));
            break;
          case Gb.Mc.Crop:
            if (bb.code === Gb.Kc.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(Bb.e.cropFailed);
            break;
          case Gb.Mc.ModuleTrap:
          case Gb.Mc.ModuleLoad:
          case Gb.Mc.Port:
            this.moduleEnded(bb.reason === Gb.Mc.ModuleTrap ? Bb.e.coreStopped : Bb.e.cantOpen);
            break;
          case Gb.Mc.NotLive:
            console.warn("[bloxd-wasm-client] the core refused a recorder command in playback");
            break;
          default:
            console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${bb.reason})`), this.seekAsked = !1, this.release("seek")
        }
        this.deps.onChange()
      }
      moduleEnded(bb) {
        this.resetInFlight(), this.release("opening"), this.release("seek"), this.release("crop"), null === this.pendingOpen && this.deps.notify(bb), this.settleOpen(new Error(bb.text))
      }
      saveDone(bb) {
        const ub = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === ub || void 0 === ub || ub.resolve(bb)
      }
      saveFailed(bb) {
        this.rejectSave(new Error(bb ? Bb.e.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(bb) {
        bb && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(Bb.e.cropBusy.text)) : this.deps.notify(Bb.e.cropBusy)
      }
      resetInFlight() {
        this.opening = !1, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0
      }
      settleOpen(bb) {
        const ub = this.pendingOpen;
        this.pendingOpen = null, null === bb ? null === ub || void 0 === ub || ub.resolve() : null === ub || void 0 === ub || ub.reject(bb)
      }
      rejectSave(bb) {
        const ub = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === ub || void 0 === ub || ub.reject(bb)
      }
      hold(bb) {
        const ub = 0 === this.holds.size;
        this.holds.set(bb, this.now()), ub && this.deps.setHoldDraws(!0)
      }
      release(bb) {
        this.holds.delete(bb) && 0 === this.holds.size && this.deps.setHoldDraws(!1)
      }
      releaseAll() {
        this.holds.size > 0 && (this.holds.clear(), this.deps.setHoldDraws(!1))
      }
    }
  },
  42028: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      MESH_TAIL_MS: () => Sb,
      PLAY_START_TIMEOUT_MS: () => Lb,
      startWasmReplayVideoExport: () => Hb
    });
    var Bb = hb(38864),
      Ob = hb(42033),
      Gb = hb(4555),
      Ub = hb(2280);
    const Lb = Ob.HOLD_TIMEOUT_MS + 5e3,
      Yb = 50,
      Sb = 200;

    function ab(bb) {
      var ub;
      return (null === (ub = bb.view) || void 0 === ub ? void 0 : ub.state) === Gb.Xc.Cropping || bb.MS.includes("crop")
    }

    function Hb(bb) {
      return (0, Bb.d)((() => function(bb) {
        var ub, hb, Bb, Ob, Hb, wb;
        const Zb = bb.viewer(),
          Xb = null !== (ub = null === Zb || void 0 === Zb ? void 0 : Zb.view) && void 0 !== ub ? ub : null,
          pb = bb.canvas();
        if (!Zb || !Xb || Xb.state === Gb.Xc.None || 0 === Xb.totalTicks || !pb || ab(Zb)) return null;
        const ob = null !== (hb = bb.now) && void 0 !== hb ? hb : () => performance.now(),
          Ab = Zb.id,
          lb = () => {
            const ub = bb.viewer();
            return ub === Zb && ub.id === Ab && ub.isOpen ? ub : null
          },
          Kb = Math.min(null !== (Bb = null === (Ob = Xb.mark) || void 0 === Ob ? void 0 : Ob.outTick) && void 0 !== Bb ? Bb : 1 / 0, Xb.totalTicks - 1);
        let Wb = null,
          Cb = !1;
        const db = () => {
          var bb, ub;
          return (null === (bb = lb()) || void 0 === bb || null === (ub = bb.view) || void 0 === ub ? void 0 : ub.state) === Gb.Xc.Playing
        };
        return {
          hN: Gb.hd,
          playbackMarkInTick: null !== (Hb = null === (wb = Xb.mark) || void 0 === wb ? void 0 : wb.inTick) && void 0 !== Hb ? Hb : null,
          startFailure: () => {
            const bb = lb();
            return null === bb ? "Another replay opened. Export it again from there." : ab(bb) ? "Wait for the crop to finish, then export again." : null
          },
          fileName: () => {
            var bb, ub;
            return null !== (bb = null === (ub = lb()) || void 0 === ub ? void 0 : ub.fileName) && void 0 !== bb ? bb : null
          },
          playbackSpeed: () => {
            var bb, ub, hb;
            return null !== (bb = null === (ub = lb()) || void 0 === ub || null === (hb = ub.view) || void 0 === hb ? void 0 : hb.speed) && void 0 !== bb ? bb : 1
          },
          setPlaybackSpeed: bb => {
            var ub;
            null === (ub = lb()) || void 0 === ub || ub.setSpeed(bb)
          },
          play: () => {
            var bb;
            Cb = !1, Wb = ob(), null === (bb = lb()) || void 0 === bb || bb.play()
          },
          pause: () => {
            var bb;
            null === (bb = lb()) || void 0 === bb || bb.pause()
          },
          seekToTick: bb => {
            var ub;
            null === (ub = lb()) || void 0 === ub || ub.seek(bb, !0)
          },
          seekSettled: () => new Promise((bb => {
            const ub = setInterval((() => {
              const hb = lb();
              null === hb ? (clearInterval(ub), bb()) : hb.MS.includes("seek") || (clearInterval(ub), setTimeout(bb, Sb))
            }), Yb)
          })),
          isPlaying: () => {
            var bb, ub, hb;
            return null !== Wb && null !== lb() && (!!db() || !Cb && (null !== (bb = null === (ub = lb()) || void 0 === ub || null === (hb = ub.view) || void 0 === hb ? void 0 : hb.gH) && void 0 !== bb ? bb : 0) < Kb && ob() - Wb < Lb)
          },
          watchPlayback: ub => {
            const hb = bb.watchViewer((() => {
                Cb ||= null !== Wb && db(), ub()
              })),
              Bb = setTimeout(ub, Lb + 1);
            return () => {
              clearTimeout(Bb), hb()
            }
          },
          playbackFailure: () => {
            var bb, ub;
            const hb = lb();
            return null === hb ? "The replay closed before the video finished." : (null !== (bb = null === (ub = hb.view) || void 0 === ub ? void 0 : ub.gH) && void 0 !== bb ? bb : 0) >= Kb ? null : Cb ? "The replay stopped before the video finished." : "The replay didn't start playing."
          },
          canvas: () => pb,
          closeViewer: () => {
            bb.requestViewer("close")
          },
          reopenViewer: () => {
            bb.requestViewer("open")
          },
          holdInput: Ub.i
        }
      }(bb)))
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);