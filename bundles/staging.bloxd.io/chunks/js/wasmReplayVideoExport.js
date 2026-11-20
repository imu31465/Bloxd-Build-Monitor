export const id = 63;
export const ids = [57, 63, 91];
export const modules = {
  36564: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Tb,
      h: () => Ub
    });
    var kb = sb(26);
    const Wb = 1500,
      ab = 1e3,
      Tb = {
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

    function Ub(bb) {
      var cb;
      const sb = null !== (cb = bb.timeoutMs) && void 0 !== cb ? cb : "Error" === bb.type ? Wb : ab;
      kb.j.QQ("showBottomMessage", {
        message: bb.text,
        timeoutLength: sb,
        type: bb.type
      })
    }
  },
  36570: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => kb,
      g: () => Wb
    });
    const kb = "data-replay-ui-active",
      Wb = [{
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
  36573: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Hb,
      d: () => Mb,
      h: () => fb
    });
    var kb = sb(19),
      Wb = sb(26),
      ab = sb(36570);

    function Tb() {
      const bb = {};
      for (const {
          group: cb
        }
        of ab.g) bb[cb] = !0;
      return bb
    }
    let Ub = Tb();

    function Ib() {
      Wb.j.QQ("replayViewer|uiVisibilityChanged")
    }

    function Hb() {
      return Ub
    }

    function fb(bb, cb) {
      Ub[bb] !== cb && (Ub = {
        ...Ub,
        [bb]: cb
      }, "nametag" === bb && kb.d.set({
        areNametagsHidden: !cb
      }), Ib())
    }

    function Mb() {
      Ub = Tb(), kb.d.set({
        areNametagsHidden: !1
      }), Ib()
    }
  },
  38807: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => yb
    });
    var kb = sb(1721),
      Wb = sb(1332),
      ab = sb(64),
      Tb = sb(1033),
      Ub = sb.n(Tb),
      Ib = sb(1431),
      Hb = sb(117);
    const fb = ["video/webm;codecs=vp9,opus", "video/webm;codecs=vp8,opus", "video/webm;codecs=vp9", "video/webm;codecs=vp8", "video/webm"],
      Mb = ["video/mp4;codecs=avc1,mp4a.40.2", "video/mp4;codecs=avc1.42E01E,mp4a.40.2", "video/mp4;codecs=avc1", "video/mp4"];

    function Xb(bb) {
      return "webm" === bb ? fb : Mb
    }

    function nb(bb) {
      for (const cb of bb)
        if ("undefined" !== typeof MediaRecorder && MediaRecorder.isTypeSupported(cb)) return cb;
      return null
    }

    function mb(bb) {
      return null !== nb(Xb(bb))
    }
    var lb = sb(1087);
    const Qb = [{
      id: "webm",
      label: "WebM",
      description: "Usually less screen tearing, but may not play in all media players."
    }, {
      id: "mp4",
      label: "MP4",
      description: "Works in more players, but may show graphical glitches on some devices."
    }];

    function eb() {
      return mb("webm") ? "webm" : mb("mp4") ? "mp4" : "webm"
    }

    function Cb(bb) {
      let {
        cards: cb
      } = bb;
      return (0, lb.jsx)("div", {
        className: "ReplayVideoExportOptionCards",
        children: cb.map((bb => (0, lb.jsxs)("div", {
          className: "ReplayVideoExportOptionColumn",
          children: [(0, lb.jsx)("div", {
            className: Ub()("ReplayVideoExportOptionCard", {
              Selected: bb.selected,
              Disabled: bb.disabled
            }),
            onClick: () => {
              bb.disabled || bb.onSelect()
            },
            children: (0, lb.jsxs)("div", {
              className: "ReplayVideoExportOptionCardBody",
              children: [(0, lb.jsx)("div", {
                className: "ReplayVideoExportOptionCardLabel",
                children: bb.label
              }), (0, lb.jsx)("div", {
                className: "ReplayVideoExportOptionCardDescription",
                children: bb.description
              })]
            })
          }), bb.disabled && bb.disabledReason && (0, lb.jsx)("div", {
            className: "ReplayVideoExportOptionError SmallTextLight",
            children: bb.disabledReason
          })]
        }, bb.id)))
      })
    }
    const Nb = (0, ab.memo)((function(bb) {
      let {
        hasPlaybackMark: cb,
        canIncludeUi: sb,
        includeUiDisabledReason: kb,
        selectionRef: Wb,
        closePopup: Tb
      } = bb;
      const Ub = mb("webm") || mb("mp4"),
        [fb, Mb] = (0, ab.useState)(eb),
        [Xb, nb] = (0, ab.useState)(sb),
        Nb = Ub && mb(fb);
      if (!Ub) {
        const bb = (0, Hb.isMobile)() ? "screen recording" : "OBS";
        return (0, lb.jsxs)("div", {
          className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
          children: [(0, lb.jsx)("div", {
            className: "PromptPopupNotificationTitle SmallTextBold",
            children: "Can't export video"
          }), (0, lb.jsx)("div", {
            className: "PromptPopupNotificationSubtitle SmallTextLight",
            children: `Your device does not support exporting. Try recording with an external software like ${bb}.`
          }), (0, lb.jsx)("div", {
            className: "PromptPopupNotificationBody",
            children: (0, lb.jsx)(Ib.G, {
              className: "PromptPopupNotificationBodyButton",
              onClick: () => {
                Wb.options = null, Tb()
              },
              children: "Close"
            })
          })]
        })
      }
      const Vb = cb ? "This will only play the range you've set.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes." : "This will play the whole recording from the start.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes.",
        Lb = [{
          id: "withoutUi",
          label: "Without UI",
          description: "Usually cleaner and sharper.",
          selected: !Xb,
          disabled: !1,
          disabledReason: null,
          onSelect: () => {
            nb(!1)
          }
        }, {
          id: "withUi",
          label: "With UI",
          description: "Includes HUD elements. May look worse on some devices.",
          selected: Xb,
          disabled: !sb,
          disabledReason: kb,
          onSelect: () => {
            nb(!0)
          }
        }],
        ub = Qb.map((bb => {
          const cb = mb(bb.id);
          return {
            id: bb.id,
            label: bb.label,
            description: bb.description,
            selected: fb === bb.id,
            disabled: !cb,
            disabledReason: "Your device doesn't support this format",
            onSelect: () => {
              Mb(bb.id)
            }
          }
        }));
      return (0, lb.jsxs)("div", {
        className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
        children: [(0, lb.jsx)("div", {
          className: "PromptPopupNotificationTitle SmallTextBold",
          children: "Export video?"
        }), (0, lb.jsx)("div", {
          className: "PromptPopupNotificationSubtitle SmallTextLight",
          children: Vb
        }), (0, lb.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, lb.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "UI"
          }), (0, lb.jsx)(Cb, {
            cards: Lb
          })]
        }), (0, lb.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, lb.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "Format"
          }), (0, lb.jsx)(Cb, {
            cards: ub
          })]
        }), (0, lb.jsxs)("div", {
          className: "PromptPopupNotificationBody",
          children: [(0, lb.jsx)(Ib.n, {
            className: "PromptPopupNotificationBodyButton PromptPopupNotificationBodyPrimaryButton",
            disabled: !Nb,
            onClick: () => {
              Wb.options = {
                format: fb,
                includeUi: sb && Xb
              }, Tb()
            },
            children: "Export"
          }), (0, lb.jsx)(Ib.G, {
            className: "PromptPopupNotificationBodyButton",
            onClick: () => {
              Wb.options = null, Tb()
            },
            children: "Cancel"
          })]
        })]
      })
    }));
    var Vb = sb(4579),
      Lb = sb(36570),
      ub = sb(36573);
    let Yb = null;

    function hb() {
      return function() {
        const bb = (0, ub.b)();
        for (const {
            group: cb,
            dataAttr: sb
          }
          of Lb.g)
          if (sb && bb[cb]) return !0;
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
    async function Jb(bb, cb, sb) {
      return bb ? async function() {
        const bb = await navigator.mediaDevices.getDisplayMedia({
          video: !0,
          audio: !1,
          preferCurrentTab: !0,
          selfBrowserSurface: "include"
        });
        for (const cb of bb.getAudioTracks()) cb.stop(), bb.removeTrack(cb);
        return bb
      }(): cb().captureStream(Math.max(1, Math.round(sb)))
    }
    var gb = sb(38648);
    let Bb = !1;

    function tb(bb) {
      bb.holdInput(!1), (0, gb.d)(!1)
    }
    async function yb(bb) {
      var cb, sb;
      if ((0, gb.b)() || Bb) return;
      const ab = bb();
      if (!ab) return;
      Bb = !0;
      let Tb = null;
      const Ub = ab.playbackMarkInTick,
        {
          canIncludeUi: Ib,
          includeUiDisabledReason: Hb
        } = hb();
      try {
        Tb = await async function(bb) {
          let {
            hasPlaybackMark: cb,
            canIncludeUi: sb,
            includeUiDisabledReason: kb
          } = bb;
          const ab = {
              options: null
            },
            Tb = Wb.NotificationProvider.showCustomPopup({
              body: bb => (0, lb.jsx)(Nb, {
                hasPlaybackMark: cb,
                canIncludeUi: sb,
                includeUiDisabledReason: kb,
                selectionRef: ab,
                closePopup: bb
              }),
              disableExitButton: !0,
              disablePressBackgroundToClose: !0,
              unlockPointerKey: "replayVideoExportOptions"
            });
          return "notificationTornDown" === await Tb.getResult() ? null : ab.options
        }({
          hasPlaybackMark: null !== Ub,
          canIncludeUi: Ib,
          includeUiDisabledReason: Hb
        })
      } finally {
        Bb = !1
      }
      if (!Tb) return;
      const fb = null !== (cb = null === (sb = ab.startFailure) || void 0 === sb ? void 0 : sb.call(ab)) && void 0 !== cb ? cb : null;
      if (null !== fb) return void Wb.NotificationProvider.showAlertPopup({
        title: "Video export failed",
        subtitle: fb
      });
      if (! function(bb) {
          return !(0, gb.b)() && ((0, gb.d)(!0), bb.holdInput(!0), !0)
        }(ab)) return;
      let Mb = null;
      try {
        Mb = await Jb(Tb.includeUi, (() => ab.canvas()), ab.hY)
      } catch (Pb) {
        return console.error("Failed to create video stream for export", Pb), tb(ab), void Wb.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: Pb instanceof Error ? Pb.message : "Could not start capture."
        })
      }
      let mb = null;
      const Qb = [];
      let eb = null,
        Cb = null;
      try {
        var Lb, ub, yb;
        mb = ab.playbackSpeed(), ab.closeViewer(), ab.setPlaybackSpeed(1), ab.pause(), ab.seekToTick(null !== Ub && void 0 !== Ub ? Ub : 0);
        const bb = await async function() {
          const bb = Vb.Howler.masterGain;
          if (!Vb.Howler.ctx || !bb) return null;
          await Vb.Howler.ctx.resume();
          const cb = Vb.Howler.ctx.createMediaStreamDestination();
          bb.connect(cb), Yb = cb;
          const [sb] = cb.stream.getAudioTracks();
          return null !== sb && void 0 !== sb ? sb : null
        }();
        Cb = new MediaStream;
        for (const kb of Mb.getVideoTracks()) Cb.addTrack(kb);
        bb && Cb.addTrack(bb);
        const cb = function(bb) {
          const cb = nb(Xb(bb));
          if (!cb) throw new Error(`No MediaRecorder mime type available for ${bb}`);
          return cb
        }(Tb.format);
        eb = new MediaRecorder(Cb, {
          mimeType: cb,
          videoBitsPerSecond: 8e6
        }), eb.ondataavailable = bb => {
          bb.data.size > 0 && Qb.push(bb.data)
        };
        const sb = new Promise((bb => {
          eb.onstop = () => {
            bb()
          }
        }));
        await (null === (Lb = ab.seekSettled) || void 0 === Lb ? void 0 : Lb.call(ab));
        const [Ib] = Mb.getVideoTracks();
        eb.start(250), ab.play();
        const Hb = await
        function(bb, cb, sb) {
          return new Promise((kb => {
            let Wb = !1;
            const ab = bb => {
                Wb || (Wb = !0, Ub(), cb.removeEventListener("ended", Tb), kb(bb))
              },
              Tb = () => {
                ab("captureLost")
              },
              Ub = bb.watchPlayback((() => {
                bb.isPlaying() || ab("completed")
              }));
            cb.addEventListener("ended", Tb), sb.onerror = () => {
              ab("recorderError")
            }, "ended" !== cb.readyState ? bb.isPlaying() || ab("completed") : ab("captureLost")
          }))
        }(ab, Ib, eb);
        if (ab.pause(), "inactive" !== eb.state && eb.stop(), await sb, "captureLost" === Hb) return void Wb.NotificationProvider.showAlertPopup({
          title: "Video export stopped",
          subtitle: "Screen sharing ended before the replay finished. Nothing was saved."
        });
        if ("recorderError" === Hb) return void Wb.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "The recorder encountered an error. Nothing was saved."
        });
        const fb = null !== (ub = null === (yb = ab.playbackFailure) || void 0 === yb ? void 0 : yb.call(ab)) && void 0 !== ub ? ub : null;
        if (null !== fb) return void Wb.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: `${fb} Nothing was saved.`
        });
        const lb = new Blob(Qb, {
          type: cb
        });
        lb.size > 0 ? (0, kb.c)(lb, function(bb, cb) {
          const sb = function(bb) {
            return "mp4" === bb ? "mp4" : "webm"
          }(cb);
          if (bb) return `${bb.replace(/\.bloxdreplay$/i,"")}.${sb}`;
          return `bloxd-replay-${Date.now()}.${sb}`
        }(ab.fileName(), Tb.format)) : Wb.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "No video data was captured. Try again."
        })
      } catch (Pb) {
        console.error("Replay video export failed", Pb), Wb.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: Pb instanceof Error ? Pb.message : "Something went wrong while exporting."
        })
      } finally {
        if (eb && "inactive" !== eb.state) try {
          eb.stop()
        } catch (Pb) {
          console.error("Failed to stop MediaRecorder", Pb)
        }! function() {
          const bb = Vb.Howler.masterGain;
          if (Yb && bb) {
            try {
              bb.disconnect(Yb)
            } catch (Pb) {
              console.error("Failed to disconnect Howler export tee", Pb)
            }
            Yb = null
          } else Yb = null
        }();
        for (const bb of Mb.getTracks()) bb.stop();
        if (Cb)
          for (const bb of Cb.getTracks()) bb.stop();
        null !== mb && ab.setPlaybackSpeed(mb), ab.pause(), tb(ab), ab.reopenViewer()
      }
    }
  },
  4579: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      Howl: () => Wb.Howl,
      Howler: () => Wb.Howler,
      iosAudio: () => Ib,
      musicOutput: () => Qb,
      readyAudioContext: () => eb
    });
    var kb, Wb = sb(4585),
      ab = sb(117);
    const Tb = Wb.Howler;
    let Ub;

    function Ib() {
      return Ub ??= "ios" === (0, ab.getOperatingSystem)(), Ub
    }

    function Hb() {
      var bb, cb;
      if (Tb.ctx || !Tb.usingWebAudio || "undefined" === typeof AudioContext || !Ib()) return;
      const sb = navigator.audioSession;
      let kb;
      "auto" === (null === sb || void 0 === sb ? void 0 : sb.type) && (sb.type = "ambient");
      try {
        kb = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const Wb = kb.createGain();
      Wb.gain.setValueAtTime(Tb._muted ? 0 : null !== (bb = Tb._volume) && void 0 !== bb ? bb : 1, kb.currentTime), Wb.connect(kb.destination), Tb.ctx = kb, Tb.masterGain = Wb, null === (cb = Tb._setup) || void 0 === cb || cb.call(Tb)
    }
    Tb._mobileUnloaded = !0;
    const fb = Tb.volume.bind(Wb.Howler);
    Tb.volume = function() {
      return Hb(), fb(...arguments)
    };
    const Mb = Tb.mute.bind(Wb.Howler);
    Tb.mute = bb => (Hb(), Mb(bb));
    const Xb = Wb.Howl.prototype,
      nb = Xb.init;
    Xb.init = function(bb) {
      return Hb(), nb.call(this, bb)
    };
    let mb = 0;
    const lb = null === (kb = Tb._autoSuspend) || void 0 === kb ? void 0 : kb.bind(Wb.Howler);

    function Qb() {
      eb();
      const {
        ctx: bb,
        masterGain: cb
      } = Tb;
      return bb && cb ? {
        ctx: bb,
        destination: cb,
        holdAwake: bb => {
          var cb, sb;
          (mb += bb ? 1 : -1, bb) ? null === (cb = Tb._autoResume) || void 0 === cb || cb.call(Tb): null === (sb = Tb._autoSuspend) || void 0 === sb || sb.call(Tb)
        },
        wake: () => {
          var cb;
          "running" !== bb.state && (null === (cb = Tb._autoResume) || void 0 === cb || cb.call(Tb), bb.resume().catch((() => {})))
        }
      } : null
    }

    function eb() {
      var bb;
      (Tb.volume(), Tb.ctx && Tb.autoUnlock) && (null === (bb = Tb._unlockAudio) || void 0 === bb || bb.call(Tb))
    }
    lb && (Tb._autoSuspend = () => mb > 0 ? Wb.Howler : lb())
  },
  41939: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => kb,
      e: () => Wb
    });
    const kb = ["recording", "freecam", "keyframe"];

    function Wb() {
      const bb = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(bb[1]) << 32n | BigInt(bb[0])
    }
  },
  41968: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      HOLD_TIMEOUT_MS: () => Ub,
      ReplayViewer: () => Hb
    });
    var kb = sb(36564),
      Wb = sb(36573),
      ab = sb(4512),
      Tb = sb(41939);
    const Ub = 1e4,
      Ib = new Set(["Qm"]);
    class Hb {
      constructor(bb) {
        var cb;
        this.deps = bb, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (cb = bb.now) && void 0 !== cb ? cb : () => performance.now()
      }
      get inPlayback() {
        return this.playback
      }
      get view() {
        return this.lastView
      }
      get isOpen() {
        return null !== this.lastView && this.lastView.state !== ab.ud.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get qU() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? kb.d.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(bb, cb) {
        var sb, Wb, Tb, Ub;
        const {
          client: Ib
        } = this.deps;
        if (!this.playback) {
          if (!Ib.setPlayback(!0)) throw new Error(kb.d.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const Hb = this.epoch;
        let fb;
        try {
          fb = await Ib.open(bb)
        } finally {
          this.loadingOpens--
        }
        if (Hb !== this.epoch) throw new Error(kb.d.coreStopped.text);
        if ("opening" !== fb) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const bb = function(bb) {
            switch (bb) {
              case "reloading":
                return null;
              case "stopped":
              case ab.id.ModuleTrap:
                return kb.d.coreStopped;
              case ab.id.ModuleLoad:
                return kb.d.viewerLoadFailed;
              case ab.id.TooLarge:
                return kb.d.cantOpen
            }
          }(fb);
          if (null === bb) return;
          throw new Error(bb.text)
        }
        return this.rejectSave(new Error(kb.d.saveClosed.text)), this.fileName = null !== (sb = null !== (Wb = cb.fileName) && void 0 !== Wb ? Wb : null === (Tb = cb.fileHandle) || void 0 === Tb ? void 0 : Tb.name) && void 0 !== sb ? sb : null, this.fileHandle = null !== (Ub = cb.fileHandle) && void 0 !== Ub ? Ub : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((bb, cb) => {
          this.pendingOpen = {
            resolve: bb,
            reject: cb
          }
        }))
      }
      play() {
        this.holds.has("Qm") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("Qm")
      }
      seek(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const sb = this.lastView;
        null !== sb && (cb || bb < sb.aX) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(bb, cb)
      }
      setSpeed(bb) {
        this.deps.client.setSpeed(bb)
      }
      setCameraMode(bb) {
        this.deps.client.setCameraMode(bb)
      }
      cycleCameraMode() {
        const bb = this.lastView;
        null !== bb && bb.state !== ab.ud.None && this.setCameraMode(Tb.b[(Tb.b.indexOf(bb.cameraMode) + 1) % Tb.b.length])
      }
      addKeyframe() {
        this.edited(this.deps.client.addKeyframe())
      }
      setKeyframe(bb) {
        this.edited(this.deps.client.setKeyframe(bb))
      }
      moveKeyframe(bb, cb) {
        this.edited(this.deps.client.moveKeyframe(bb, cb))
      }
      deleteKeyframes(bb, cb) {
        this.edited(this.deps.client.deleteKeyframes(bb, cb))
      }
      setMark(bb) {
        this.edited(this.deps.client.setMark(bb))
      }
      crop(bb, cb) {
        return !(cb <= bb) && (null !== this.pendingSave ? (this.deps.notify(kb.d.saveBusy), !1) : !!this.deps.client.crop(bb, cb) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(kb.d.saveBusy.text)) : new Promise(((bb, cb) => {
          const sb = {
            resolve: bb,
            reject: cb
          };
          this.pendingSave = sb, this.editsAtSave = this.edits, this.deps.client.save((0, Tb.e)()).then((bb => {
            this.pendingSave === sb && this.saveStarted(bb)
          }), (bb => {
            this.pendingSave === sb && this.rejectSave(bb instanceof Error ? bb : new Error(String(bb)))
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
      markSaved(bb, cb) {
        var sb, kb;
        this.fileHandle = bb, this.fileName = null !== (sb = null !== (kb = null === bb || void 0 === bb ? void 0 : bb.name) && void 0 !== kb ? kb : cb) && void 0 !== sb ? sb : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(kb.d.coreStopped.text)), this.rejectSave(new Error(kb.d.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var bb, cb, sb;
        const kb = this.deps.client.view(),
          Tb = kb !== this.lastView;
        this.lastView = kb, this.opening && null !== kb && kb.state !== ab.ud.None && kb.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, Wb.d)()), this.cropAsked ? (this.cropAsked = !1, null !== kb && kb.state === ab.ud.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== kb && kb.state !== ab.ud.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const Hb = 0 === this.settleFrames && 0 === (null !== (bb = null === (cb = (sb = this.deps).meshPending) || void 0 === cb ? void 0 : cb.call(sb)) && void 0 !== bb ? bb : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && Hb && this.release("opening"), this.holds.has("seek") && Hb && this.release("seek"), this.holds.has("crop") && !this.cropRunning && Hb && this.release("crop");
        const fb = this.now();
        for (const [Wb, ab] of this.holds) !Ib.has(Wb) && fb - ab >= Ub && (this.release(Wb), "opening" === Wb && (this.opening = !1, this.settleOpen(null)));
        this.saveRefused && !this.cropping && this.saveFailed(!1), Tb && this.deps.onChange()
      }
      cropped() {
        (0, Wb.d)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(bb) {
        switch (bb.reason) {
          case ab.id.TooLarge:
            break;
          case ab.id.Open:
          case ab.id.NothingStaged:
            this.opening = !1, this.release("opening"), null === this.pendingOpen && this.deps.notify(kb.d.cantOpen), this.settleOpen(new Error(kb.d.cantOpen.text));
            break;
          case ab.id.Crop:
            if (bb.code === ab.fd.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(kb.d.cropFailed);
            break;
          case ab.id.ModuleTrap:
          case ab.id.ModuleLoad:
          case ab.id.Port:
            this.moduleEnded(bb.reason === ab.id.ModuleTrap ? kb.d.coreStopped : kb.d.cantOpen);
            break;
          case ab.id.NotLive:
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
        const cb = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === cb || void 0 === cb || cb.resolve(bb)
      }
      saveFailed(bb) {
        this.rejectSave(new Error(bb ? kb.d.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(bb) {
        bb && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(kb.d.cropBusy.text)) : this.deps.notify(kb.d.cropBusy)
      }
      resetInFlight() {
        this.opening = !1, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0
      }
      settleOpen(bb) {
        const cb = this.pendingOpen;
        this.pendingOpen = null, null === bb ? null === cb || void 0 === cb || cb.resolve() : null === cb || void 0 === cb || cb.reject(bb)
      }
      rejectSave(bb) {
        const cb = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === cb || void 0 === cb || cb.reject(bb)
      }
      hold(bb) {
        const cb = 0 === this.holds.size;
        this.holds.set(bb, this.now()), cb && this.deps.setHoldDraws(!0)
      }
      release(bb) {
        this.holds.delete(bb) && 0 === this.holds.size && this.deps.setHoldDraws(!1)
      }
      releaseAll() {
        this.holds.size > 0 && (this.holds.clear(), this.deps.setHoldDraws(!1))
      }
    }
  },
  41964: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      MESH_TAIL_MS: () => Hb,
      PLAY_START_TIMEOUT_MS: () => Ub,
      startWasmReplayVideoExport: () => Mb
    });
    var kb = sb(38807),
      Wb = sb(41968),
      ab = sb(4512),
      Tb = sb(2319);
    const Ub = Wb.HOLD_TIMEOUT_MS + 5e3,
      Ib = 50,
      Hb = 200;

    function fb(bb) {
      var cb;
      return (null === (cb = bb.view) || void 0 === cb ? void 0 : cb.state) === ab.ud.Cropping || bb.qU.includes("crop")
    }

    function Mb(bb) {
      return (0, kb.c)((() => function(bb) {
        var cb, sb, kb, Wb, Mb, Xb;
        const nb = bb.viewer(),
          mb = null !== (cb = null === nb || void 0 === nb ? void 0 : nb.view) && void 0 !== cb ? cb : null,
          lb = bb.canvas();
        if (!nb || !mb || mb.state === ab.ud.None || 0 === mb.totalTicks || !lb || fb(nb)) return null;
        const Qb = null !== (sb = bb.now) && void 0 !== sb ? sb : () => performance.now(),
          eb = nb.id,
          Cb = () => {
            const cb = bb.viewer();
            return cb === nb && cb.id === eb && cb.isOpen ? cb : null
          },
          Nb = Math.min(null !== (kb = null === (Wb = mb.mark) || void 0 === Wb ? void 0 : Wb.outTick) && void 0 !== kb ? kb : 1 / 0, mb.totalTicks - 1);
        let Vb = null,
          Lb = !1;
        const ub = () => {
          var bb, cb;
          return (null === (bb = Cb()) || void 0 === bb || null === (cb = bb.view) || void 0 === cb ? void 0 : cb.state) === ab.ud.Playing
        };
        return {
          hY: ab.Hd,
          playbackMarkInTick: null !== (Mb = null === (Xb = mb.mark) || void 0 === Xb ? void 0 : Xb.inTick) && void 0 !== Mb ? Mb : null,
          startFailure: () => {
            const bb = Cb();
            return null === bb ? "Another replay opened. Export it again from there." : fb(bb) ? "Wait for the crop to finish, then export again." : null
          },
          fileName: () => {
            var bb, cb;
            return null !== (bb = null === (cb = Cb()) || void 0 === cb ? void 0 : cb.fileName) && void 0 !== bb ? bb : null
          },
          playbackSpeed: () => {
            var bb, cb, sb;
            return null !== (bb = null === (cb = Cb()) || void 0 === cb || null === (sb = cb.view) || void 0 === sb ? void 0 : sb.speed) && void 0 !== bb ? bb : 1
          },
          setPlaybackSpeed: bb => {
            var cb;
            null === (cb = Cb()) || void 0 === cb || cb.setSpeed(bb)
          },
          play: () => {
            var bb;
            Lb = !1, Vb = Qb(), null === (bb = Cb()) || void 0 === bb || bb.play()
          },
          pause: () => {
            var bb;
            null === (bb = Cb()) || void 0 === bb || bb.pause()
          },
          seekToTick: bb => {
            var cb;
            null === (cb = Cb()) || void 0 === cb || cb.seek(bb, !0)
          },
          seekSettled: () => new Promise((bb => {
            const cb = setInterval((() => {
              const sb = Cb();
              null === sb ? (clearInterval(cb), bb()) : sb.qU.includes("seek") || (clearInterval(cb), setTimeout(bb, Hb))
            }), Ib)
          })),
          isPlaying: () => {
            var bb, cb, sb;
            return null !== Vb && null !== Cb() && (!!ub() || !Lb && (null !== (bb = null === (cb = Cb()) || void 0 === cb || null === (sb = cb.view) || void 0 === sb ? void 0 : sb.aX) && void 0 !== bb ? bb : 0) < Nb && Qb() - Vb < Ub)
          },
          watchPlayback: cb => {
            const sb = bb.watchViewer((() => {
                Lb ||= null !== Vb && ub(), cb()
              })),
              kb = setTimeout(cb, Ub + 1);
            return () => {
              clearTimeout(kb), sb()
            }
          },
          playbackFailure: () => {
            var bb, cb;
            const sb = Cb();
            return null === sb ? "The replay closed before the video finished." : (null !== (bb = null === (cb = sb.view) || void 0 === cb ? void 0 : cb.aX) && void 0 !== bb ? bb : 0) >= Nb ? null : Lb ? "The replay stopped before the video finished." : "The replay didn't start playing."
          },
          canvas: () => lb,
          closeViewer: () => {
            bb.requestViewer("close")
          },
          reopenViewer: () => {
            bb.requestViewer("open")
          },
          holdInput: Tb.i
        }
      }(bb)))
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);