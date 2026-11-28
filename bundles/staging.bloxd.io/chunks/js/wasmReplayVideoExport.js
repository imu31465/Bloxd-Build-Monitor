export const id = 79;
export const ids = [73, 79, 110];
export const modules = {
  38190: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Ob,
      h: () => Ub
    });
    var eb = Mb(661),
      Hb = Mb(43),
      pb = Mb(38155);
    const Vb = "replayFileKeptForReload",
      gb = "replayFileKeptForReloadAt",
      lb = "replayFileKeptForReloadTab",
      Lb = 3e5,
      Ib = 5e3;
    async function Ob(bb, wb) {
      const Mb = Date.now(),
        pb = {
          at: Mb,
          bytes: bb,
          source: wb
        },
        Lb = await Promise.race([(async () => await Hb.h.setItem(gb, Mb) && Hb.h.setItem(Vb, pb))(), (0, eb.R)(Ib).then((() => !1))]);
      Lb || console.warn("The replay file couldn't be kept across the reload into a newer build: the reloaded page asks for it again");
      const Ob = {
        at: Mb,
        nI: Lb
      };
      Hb.j.setItem(lb, Ob)
    }
    async function Ub() {
      var bb;
      const wb = Hb.j.getItem(lb);
      null !== wb && Hb.j.removeItem(lb);
      const Mb = Date.now(),
        eb = await Hb.h.getItem(gb),
        Ib = null !== wb && Mb - wb.at <= Lb,
        Ob = null !== wb && eb === wb.at;
      let Ub = null;
      if (null !== eb && (Ob || ("number" !== typeof eb || Mb - eb > Lb)) && (Ub = Ib && Ob && wb.nI ? await Hb.h.getItem(Vb) : null, await Promise.all([Hb.h.removeItem(gb), Hb.h.removeItem(Vb)])), !Ib) return null;
      if ((null === (bb = Ub) || void 0 === bb ? void 0 : bb.at) !== wb.at) throw new Error(pb.b.replayNotKept.text);
      return {
        bytes: Ub.bytes,
        source: Ub.source
      }
    }
  },
  38185: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => eb,
      e: () => pb,
      i: () => Hb
    });
    const eb = [9];

    function Hb(bb) {
      return eb.includes(bb)
    }

    function pb(bb) {
      return null !== bb && bb >= 3 && bb < eb[0]
    }
  },
  38155: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Vb,
      e: () => Lb,
      g: () => lb
    });
    var eb = Mb(29);
    const Hb = 1500,
      pb = 1e3,
      Vb = {
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
      gb = new Set(Object.values(Vb).filter((bb => "Error" === bb.type)).map((bb => bb.text)));

    function lb(bb) {
      return bb instanceof Error && gb.has(bb.message) ? bb.message : void 0
    }

    function Lb(bb) {
      var wb;
      const Mb = null !== (wb = bb.timeoutMs) && void 0 !== wb ? wb : "Error" === bb.type ? Hb : pb;
      eb.k.iI("showBottomMessage", {
        message: bb.text,
        timeoutLength: Mb,
        type: bb.type
      })
    }
  },
  38197: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => eb,
      e: () => Hb
    });
    const eb = "data-replay-ui-active",
      Hb = [{
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
  38203: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Lb,
      h: () => Ob,
      i: () => Ib
    });
    var eb = Mb(26),
      Hb = Mb(29),
      pb = Mb(38197);

    function Vb() {
      const bb = {};
      for (const {
          group: wb
        }
        of pb.e) bb[wb] = !0;
      return bb
    }
    let gb = Vb();

    function lb() {
      Hb.k.iI("replayViewer|uiVisibilityChanged")
    }

    function Lb() {
      return gb
    }

    function Ib(bb, wb) {
      gb[bb] !== wb && (gb = {
        ...gb,
        [bb]: wb
      }, "nametag" === bb && eb.c.set({
        areNametagsHidden: !wb
      }), lb())
    }

    function Ob() {
      gb = Vb(), eb.c.set({
        areNametagsHidden: !1
      }), lb()
    }
  },
  40612: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => cb
    });
    var eb = Mb(1980),
      Hb = Mb(1504),
      pb = Mb(64),
      Vb = Mb(1159),
      gb = Mb.n(Vb),
      lb = Mb(1616),
      Lb = Mb(110);
    const Ib = ["video/webm;codecs=vp9,opus", "video/webm;codecs=vp8,opus", "video/webm;codecs=vp9", "video/webm;codecs=vp8", "video/webm"],
      Ob = ["video/mp4;codecs=avc1,mp4a.40.2", "video/mp4;codecs=avc1.42E01E,mp4a.40.2", "video/mp4;codecs=avc1", "video/mp4"];

    function Ub(bb) {
      return "webm" === bb ? Ib : Ob
    }

    function tb(bb) {
      for (const wb of bb)
        if ("undefined" !== typeof MediaRecorder && MediaRecorder.isTypeSupported(wb)) return wb;
      return null
    }

    function Cb(bb) {
      return null !== tb(Ub(bb))
    }
    var Eb = Mb(1364);
    const Fb = [{
      id: "webm",
      label: "WebM",
      description: "Usually less screen tearing, but may not play in all media players."
    }, {
      id: "mp4",
      label: "MP4",
      description: "Works in more players, but may show graphical glitches on some devices."
    }];

    function Bb() {
      return Cb("webm") ? "webm" : Cb("mp4") ? "mp4" : "webm"
    }

    function sb(bb) {
      let {
        cards: wb
      } = bb;
      return (0, Eb.jsx)("div", {
        className: "ReplayVideoExportOptionCards",
        children: wb.map((bb => (0, Eb.jsxs)("div", {
          className: "ReplayVideoExportOptionColumn",
          children: [(0, Eb.jsx)("div", {
            className: gb()("ReplayVideoExportOptionCard", {
              Selected: bb.selected,
              Disabled: bb.disabled
            }),
            onClick: () => {
              bb.disabled || bb.onSelect()
            },
            children: (0, Eb.jsxs)("div", {
              className: "ReplayVideoExportOptionCardBody",
              children: [(0, Eb.jsx)("div", {
                className: "ReplayVideoExportOptionCardLabel",
                children: bb.label
              }), (0, Eb.jsx)("div", {
                className: "ReplayVideoExportOptionCardDescription",
                children: bb.description
              })]
            })
          }), bb.disabled && bb.disabledReason && (0, Eb.jsx)("div", {
            className: "ReplayVideoExportOptionError SmallTextLight",
            children: bb.disabledReason
          })]
        }, bb.id)))
      })
    }
    const mb = (0, pb.memo)((function(bb) {
      let {
        hasPlaybackMark: wb,
        canIncludeUi: Mb,
        includeUiDisabledReason: eb,
        selectionRef: Hb,
        closePopup: Vb
      } = bb;
      const gb = Cb("webm") || Cb("mp4"),
        [Ib, Ob] = (0, pb.useState)(Bb),
        [Ub, tb] = (0, pb.useState)(Mb),
        mb = gb && Cb(Ib);
      if (!gb) {
        const bb = (0, Lb.isMobile)() ? "screen recording" : "OBS";
        return (0, Eb.jsxs)("div", {
          className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
          children: [(0, Eb.jsx)("div", {
            className: "PromptPopupNotificationTitle SmallTextBold",
            children: "Can't export video"
          }), (0, Eb.jsx)("div", {
            className: "PromptPopupNotificationSubtitle SmallTextLight",
            children: `Your device does not support exporting. Try recording with an external software like ${bb}.`
          }), (0, Eb.jsx)("div", {
            className: "PromptPopupNotificationBody",
            children: (0, Eb.jsx)(lb.Q, {
              className: "PromptPopupNotificationBodyButton",
              onClick: () => {
                Hb.options = null, Vb()
              },
              children: "Close"
            })
          })]
        })
      }
      const hb = wb ? "This will only play the range you've set.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes." : "This will play the whole recording from the start.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes.",
        zb = [{
          id: "withoutUi",
          label: "Without UI",
          description: "Usually cleaner and sharper.",
          selected: !Ub,
          disabled: !1,
          disabledReason: null,
          onSelect: () => {
            tb(!1)
          }
        }, {
          id: "withUi",
          label: "With UI",
          description: "Includes HUD elements. May look worse on some devices.",
          selected: Ub,
          disabled: !Mb,
          disabledReason: eb,
          onSelect: () => {
            tb(!0)
          }
        }],
        Xb = Fb.map((bb => {
          const wb = Cb(bb.id);
          return {
            id: bb.id,
            label: bb.label,
            description: bb.description,
            selected: Ib === bb.id,
            disabled: !wb,
            disabledReason: "Your device doesn't support this format",
            onSelect: () => {
              Ob(bb.id)
            }
          }
        }));
      return (0, Eb.jsxs)("div", {
        className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
        children: [(0, Eb.jsx)("div", {
          className: "PromptPopupNotificationTitle SmallTextBold",
          children: "Export video?"
        }), (0, Eb.jsx)("div", {
          className: "PromptPopupNotificationSubtitle SmallTextLight",
          children: hb
        }), (0, Eb.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, Eb.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "UI"
          }), (0, Eb.jsx)(sb, {
            cards: zb
          })]
        }), (0, Eb.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, Eb.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "Format"
          }), (0, Eb.jsx)(sb, {
            cards: Xb
          })]
        }), (0, Eb.jsxs)("div", {
          className: "PromptPopupNotificationBody",
          children: [(0, Eb.jsx)(lb.p, {
            className: "PromptPopupNotificationBodyButton PromptPopupNotificationBodyPrimaryButton",
            disabled: !mb,
            onClick: () => {
              Hb.options = {
                format: Ib,
                includeUi: Mb && Ub
              }, Vb()
            },
            children: "Export"
          }), (0, Eb.jsx)(lb.Q, {
            className: "PromptPopupNotificationBodyButton",
            onClick: () => {
              Hb.options = null, Vb()
            },
            children: "Cancel"
          })]
        })]
      })
    }));
    var hb = Mb(5766),
      zb = Mb(38197),
      Xb = Mb(38203);
    let xb = null;

    function jb() {
      return function() {
        const bb = (0, Xb.e)();
        for (const {
            group: wb,
            dataAttr: Mb
          }
          of zb.e)
          if (Mb && bb[wb]) return !0;
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
    async function Kb(bb, wb, Mb) {
      return bb ? async function() {
        const bb = await navigator.mediaDevices.getDisplayMedia({
          video: !0,
          audio: !1,
          preferCurrentTab: !0,
          selfBrowserSurface: "include"
        });
        for (const wb of bb.getAudioTracks()) wb.stop(), bb.removeTrack(wb);
        return bb
      }(): wb().captureStream(Math.max(1, Math.round(Mb)))
    }
    var rb = Mb(40397);
    let Rb = !1;

    function Db(bb) {
      bb.holdInput(!1), (0, rb.f)(!1)
    }
    async function cb(bb) {
      var wb, Mb;
      if ((0, rb.c)() || Rb) return;
      const pb = bb();
      if (!pb) return;
      Rb = !0;
      let Vb = null;
      const gb = pb.playbackMarkInTick,
        {
          canIncludeUi: lb,
          includeUiDisabledReason: Lb
        } = jb();
      try {
        Vb = await async function(bb) {
          let {
            hasPlaybackMark: wb,
            canIncludeUi: Mb,
            includeUiDisabledReason: eb
          } = bb;
          const pb = {
              options: null
            },
            Vb = Hb.NotificationProvider.showCustomPopup({
              body: bb => (0, Eb.jsx)(mb, {
                hasPlaybackMark: wb,
                canIncludeUi: Mb,
                includeUiDisabledReason: eb,
                selectionRef: pb,
                closePopup: bb
              }),
              disableExitButton: !0,
              disablePressBackgroundToClose: !0,
              unlockPointerKey: "replayVideoExportOptions"
            });
          return "notificationTornDown" === await Vb.getResult() ? null : pb.options
        }({
          hasPlaybackMark: null !== gb,
          canIncludeUi: lb,
          includeUiDisabledReason: Lb
        })
      } finally {
        Rb = !1
      }
      if (!Vb) return;
      const Ib = null !== (wb = null === (Mb = pb.startFailure) || void 0 === Mb ? void 0 : Mb.call(pb)) && void 0 !== wb ? wb : null;
      if (null !== Ib) return void Hb.NotificationProvider.showAlertPopup({
        title: "Video export failed",
        subtitle: Ib
      });
      if (! function(bb) {
          return !(0, rb.c)() && ((0, rb.f)(!0), bb.holdInput(!0), !0)
        }(pb)) return;
      let Ob = null;
      try {
        Ob = await Kb(Vb.includeUi, (() => pb.canvas()), pb.gJ)
      } catch (Yb) {
        return console.error("Failed to create video stream for export", Yb), Db(pb), void Hb.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: Yb instanceof Error ? Yb.message : "Could not start capture."
        })
      }
      let Cb = null;
      const Fb = [];
      let Bb = null,
        sb = null;
      try {
        var zb, Xb, cb;
        Cb = pb.playbackSpeed(), pb.closeViewer(), pb.setPlaybackSpeed(1), pb.pause(), pb.seekToTick(null !== gb && void 0 !== gb ? gb : 0);
        const bb = await async function() {
          const bb = hb.Howler.masterGain;
          if (!hb.Howler.ctx || !bb) return null;
          await hb.Howler.ctx.resume();
          const wb = hb.Howler.ctx.createMediaStreamDestination();
          bb.connect(wb), xb = wb;
          const [Mb] = wb.stream.getAudioTracks();
          return null !== Mb && void 0 !== Mb ? Mb : null
        }();
        sb = new MediaStream;
        for (const eb of Ob.getVideoTracks()) sb.addTrack(eb);
        bb && sb.addTrack(bb);
        const wb = function(bb) {
          const wb = tb(Ub(bb));
          if (!wb) throw new Error(`No MediaRecorder mime type available for ${bb}`);
          return wb
        }(Vb.format);
        Bb = new MediaRecorder(sb, {
          mimeType: wb,
          videoBitsPerSecond: 8e6
        }), Bb.ondataavailable = bb => {
          bb.data.size > 0 && Fb.push(bb.data)
        };
        const Mb = new Promise((bb => {
          Bb.onstop = () => {
            bb()
          }
        }));
        await (null === (zb = pb.seekSettled) || void 0 === zb ? void 0 : zb.call(pb));
        const [lb] = Ob.getVideoTracks();
        Bb.start(250), pb.play();
        const Lb = await
        function(bb, wb, Mb) {
          return new Promise((eb => {
            let Hb = !1;
            const pb = bb => {
                Hb || (Hb = !0, gb(), wb.removeEventListener("ended", Vb), eb(bb))
              },
              Vb = () => {
                pb("captureLost")
              },
              gb = bb.watchPlayback((() => {
                bb.isPlaying() || pb("completed")
              }));
            wb.addEventListener("ended", Vb), Mb.onerror = () => {
              pb("recorderError")
            }, "ended" !== wb.readyState ? bb.isPlaying() || pb("completed") : pb("captureLost")
          }))
        }(pb, lb, Bb);
        if (pb.pause(), "inactive" !== Bb.state && Bb.stop(), await Mb, "captureLost" === Lb) return void Hb.NotificationProvider.showAlertPopup({
          title: "Video export stopped",
          subtitle: "Screen sharing ended before the replay finished. Nothing was saved."
        });
        if ("recorderError" === Lb) return void Hb.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "The recorder encountered an error. Nothing was saved."
        });
        const Ib = null !== (Xb = null === (cb = pb.playbackFailure) || void 0 === cb ? void 0 : cb.call(pb)) && void 0 !== Xb ? Xb : null;
        if (null !== Ib) return void Hb.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: `${Ib} Nothing was saved.`
        });
        const Eb = new Blob(Fb, {
          type: wb
        });
        Eb.size > 0 ? (0, eb.d)(Eb, function(bb, wb) {
          const Mb = function(bb) {
            return "mp4" === bb ? "mp4" : "webm"
          }(wb);
          if (bb) return `${bb.replace(/\.bloxdreplay$/i,"")}.${Mb}`;
          return `bloxd-replay-${Date.now()}.${Mb}`
        }(pb.fileName(), Vb.format)) : Hb.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "No video data was captured. Try again."
        })
      } catch (Yb) {
        console.error("Replay video export failed", Yb), Hb.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: Yb instanceof Error ? Yb.message : "Something went wrong while exporting."
        })
      } finally {
        if (Bb && "inactive" !== Bb.state) try {
          Bb.stop()
        } catch (Yb) {
          console.error("Failed to stop MediaRecorder", Yb)
        }! function() {
          const bb = hb.Howler.masterGain;
          if (xb && bb) {
            try {
              bb.disconnect(xb)
            } catch (Yb) {
              console.error("Failed to disconnect Howler export tee", Yb)
            }
            xb = null
          } else xb = null
        }();
        for (const bb of Ob.getTracks()) bb.stop();
        if (sb)
          for (const bb of sb.getTracks()) bb.stop();
        null !== Cb && pb.setPlaybackSpeed(Cb), pb.pause(), Db(pb), pb.reopenViewer()
      }
    }
  },
  5766: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      Howl: () => Hb.Howl,
      Howler: () => Hb.Howler,
      musicOutput: () => Fb,
      readyAudioContext: () => Bb
    });
    var eb, Hb = Mb(5768),
      pb = Mb(4835),
      Vb = Mb(5505);
    const gb = Hb.Howler;

    function lb() {
      var bb, wb;
      if (gb.ctx || !gb.usingWebAudio || "undefined" === typeof AudioContext || !(0, Vb.h)()) return;
      const Mb = navigator.audioSession;
      let eb;
      "auto" === (null === Mb || void 0 === Mb ? void 0 : Mb.type) && (Mb.type = "ambient");
      try {
        eb = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const Hb = eb.createGain();
      Hb.gain.setValueAtTime(gb._muted ? 0 : null !== (bb = gb._volume) && void 0 !== bb ? bb : 1, eb.currentTime), Hb.connect(eb.destination), gb.ctx = eb, gb.masterGain = Hb, null === (wb = gb._setup) || void 0 === wb || wb.call(gb)
    }
    gb._mobileUnloaded = !0;
    const Lb = gb.volume.bind(Hb.Howler);
    gb.volume = function() {
      return lb(), Lb(...arguments)
    };
    const Ib = gb.mute.bind(Hb.Howler);
    gb.mute = bb => (lb(), Ib(bb));
    const Ob = Hb.Howl.prototype,
      Ub = Ob.init;

    function tb() {
      for (; gb._html5AudioPool.length < gb.html5PoolSize;) {
        const bb = new Audio;
        bb._unlocked = !0, gb._releaseHtml5Audio(bb)
      }
      for (const wb of gb._howls)
        if (!wb._webAudio)
          for (const Mb of wb._getSoundIds()) {
            var bb;
            const eb = null === (bb = wb._soundById(Mb)) || void 0 === bb ? void 0 : bb._node;
            eb && !eb._unlocked && (eb._unlocked = !0, eb.load())
          }
    }
    Ob.init = function(bb) {
      return lb(), Ub.call(this, bb)
    }, (0, Vb.h)() && (gb._unlockAudio = () => {
      const bb = gb.ctx;
      if (gb._audioUnlocked || !bb) return;
      gb.autoUnlock = !1;
      const wb = bb.createBuffer(1, 1, 22050);
      gb._scratchBuffer = wb;
      const Mb = new AbortController;
      let eb = "afterPaint";
      const Hb = () => {
          var eb;
          if (gb._audioUnlocked) return;
          null === (eb = gb._autoResume) || void 0 === eb || eb.call(gb);
          const Hb = bb.createBufferSource();
          Hb.buffer = wb, Hb.connect(bb.destination), Hb.start(0), bb.resume().catch((() => {})), Hb.onended = () => {
            Hb.disconnect(0), gb._audioUnlocked = !0, Mb.abort();
            for (const bb of gb._howls) bb._emit("unlock")
          }
        },
        lb = () => {
          tb(), Hb()
        },
        Lb = wb => {
          if (tb(), "inTap" === eb) {
            if ("running" === bb.state) return;
            console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), Hb()
          } else "afterPaint" === eb && (eb = "queued", (0, pb.b)(wb.timeStamp, (() => {
            eb = "inTap", Hb()
          })))
        };
      for (const pb of ["touchstart", "touchend"]) document.addEventListener(pb, lb, {
        capture: !0,
        signal: Mb.signal
      });
      for (const pb of Vb.d) document.addEventListener(pb, Lb, {
        capture: !0,
        signal: Mb.signal
      })
    });
    let Cb = 0;
    const Eb = null === (eb = gb._autoSuspend) || void 0 === eb ? void 0 : eb.bind(Hb.Howler);

    function Fb() {
      Bb();
      const {
        ctx: bb,
        masterGain: wb
      } = gb;
      return bb && wb ? {
        ctx: bb,
        destination: wb,
        holdAwake: bb => {
          var wb, Mb;
          (Cb += bb ? 1 : -1, bb) ? null === (wb = gb._autoResume) || void 0 === wb || wb.call(gb): null === (Mb = gb._autoSuspend) || void 0 === Mb || Mb.call(gb)
        },
        wake: () => {
          var wb;
          "running" !== bb.state && (null === (wb = gb._autoResume) || void 0 === wb || wb.call(gb), bb.resume().catch((() => {})))
        }
      } : null
    }

    function Bb() {
      var bb;
      (gb.volume(), gb.ctx && gb.autoUnlock) && (null === (bb = gb._unlockAudio) || void 0 === bb || bb.call(gb))
    }
    Eb && (gb._autoSuspend = () => Cb > 0 ? Hb.Howler : Eb())
  },
  54816: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => eb,
      f: () => Hb
    });
    const eb = ["recording", "freecam", "keyframe"];

    function Hb() {
      const bb = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(bb[1]) << 32n | BigInt(bb[0])
    }
  },
  64396: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      HOLD_TIMEOUT_MS: () => Lb,
      ReplayViewer: () => Ob
    });
    var eb = Mb(38155),
      Hb = Mb(38190),
      pb = Mb(38185),
      Vb = Mb(38203),
      gb = Mb(5678),
      lb = Mb(54816);
    const Lb = 1e4,
      Ib = new Set(["LC"]);
    class Ob {
      constructor(bb) {
        var wb;
        this.deps = bb, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (wb = bb.now) && void 0 !== wb ? wb : () => performance.now()
      }
      get inPlayback() {
        return this.playback
      }
      get view() {
        return this.lastView
      }
      get isOpen() {
        return null !== this.lastView && this.lastView.state !== gb.md.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get dg() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? eb.b.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(bb, wb) {
        var Mb, pb, Vb, lb;
        const {
          client: Lb
        } = this.deps;
        if (!this.playback) {
          if (!Lb.setPlayback(!0)) throw new Error(eb.b.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const Ib = this.epoch;
        let Ob;
        try {
          Ob = await Lb.open(bb, (() => (0, Hb.d)(bb, wb)))
        } finally {
          this.loadingOpens--
        }
        if (Ib !== this.epoch && "reloading" !== Ob) throw new Error(eb.b.coreStopped.text);
        if ("opening" !== Ob) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const bb = function(bb) {
            switch (bb) {
              case "reloading":
                return null;
              case "stopped":
              case gb.ad.ModuleTrap:
                return eb.b.coreStopped;
              case gb.ad.ModuleLoad:
                return eb.b.viewerLoadFailed;
              case gb.ad.TooLarge:
                return eb.b.cantOpen
            }
          }(Ob);
          if (null === bb) return;
          throw new Error(bb.text)
        }
        return this.rejectSave(new Error(eb.b.saveClosed.text)), this.fileName = null !== (Mb = null !== (pb = wb.fileName) && void 0 !== pb ? pb : null === (Vb = wb.fileHandle) || void 0 === Vb ? void 0 : Vb.name) && void 0 !== Mb ? Mb : null, this.fileHandle = null !== (lb = wb.fileHandle) && void 0 !== lb ? lb : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((bb, wb) => {
          this.pendingOpen = {
            resolve: bb,
            reject: wb
          }
        }))
      }
      play() {
        this.holds.has("LC") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("LC")
      }
      seek(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Mb = this.lastView;
        null !== Mb && (wb || bb < Mb.sO) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(bb, wb)
      }
      setSpeed(bb) {
        this.deps.client.setSpeed(bb)
      }
      setCameraMode(bb) {
        this.deps.client.setCameraMode(bb)
      }
      cycleCameraMode() {
        const bb = this.lastView;
        null !== bb && bb.state !== gb.md.None && this.setCameraMode(lb.c[(lb.c.indexOf(bb.cameraMode) + 1) % lb.c.length])
      }
      addKeyframe() {
        this.edited(this.deps.client.addKeyframe())
      }
      setKeyframe(bb) {
        this.edited(this.deps.client.setKeyframe(bb))
      }
      moveKeyframe(bb, wb) {
        this.edited(this.deps.client.moveKeyframe(bb, wb))
      }
      deleteKeyframes(bb, wb) {
        this.edited(this.deps.client.deleteKeyframes(bb, wb))
      }
      setMark(bb) {
        this.edited(this.deps.client.setMark(bb))
      }
      crop(bb, wb) {
        return !(wb <= bb) && (null !== this.pendingSave ? (this.deps.notify(eb.b.saveBusy), !1) : !!this.deps.client.crop(bb, wb) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(eb.b.saveBusy.text)) : new Promise(((bb, wb) => {
          const Mb = {
            resolve: bb,
            reject: wb
          };
          this.pendingSave = Mb, this.editsAtSave = this.edits, this.deps.client.save((0, lb.f)()).then((bb => {
            this.pendingSave === Mb && this.saveStarted(bb)
          }), (bb => {
            this.pendingSave === Mb && this.rejectSave(bb instanceof Error ? bb : new Error(String(bb)))
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
      markSaved(bb, wb) {
        var Mb, eb;
        this.fileHandle = bb, this.fileName = null !== (Mb = null !== (eb = null === bb || void 0 === bb ? void 0 : bb.name) && void 0 !== eb ? eb : wb) && void 0 !== Mb ? Mb : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(eb.b.coreStopped.text)), this.rejectSave(new Error(eb.b.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var bb, wb, Mb;
        const eb = this.deps.client.view(),
          Hb = eb !== this.lastView;
        this.lastView = eb, this.opening && null !== eb && eb.state !== gb.md.None && eb.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, Vb.h)()), this.cropAsked ? (this.cropAsked = !1, null !== eb && eb.state === gb.md.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== eb && eb.state !== gb.md.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const pb = 0 === this.settleFrames && 0 === (null !== (bb = null === (wb = (Mb = this.deps).meshPending) || void 0 === wb ? void 0 : wb.call(Mb)) && void 0 !== bb ? bb : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && pb && this.release("opening"), this.holds.has("seek") && pb && this.release("seek"), this.holds.has("crop") && !this.cropRunning && pb && this.release("crop");
        const lb = this.now();
        for (const [Vb, gb] of this.holds) !Ib.has(Vb) && lb - gb >= Lb && this.release(Vb);
        this.saveRefused && !this.cropping && this.saveFailed(!1), Hb && this.deps.onChange()
      }
      cropped() {
        (0, Vb.h)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(bb) {
        switch (bb.reason) {
          case gb.ad.TooLarge:
            break;
          case gb.ad.Open:
          case gb.ad.NothingStaged: {
            this.opening = !1, this.release("opening");
            const wb = (0, pb.e)(bb.version) ? eb.b.replayTooOld : eb.b.cantOpen;
            null === this.pendingOpen && this.deps.notify(wb), this.settleOpen(new Error(wb.text));
            break
          }
          case gb.ad.Crop:
            if (bb.code === gb.Zc.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(eb.b.cropFailed);
            break;
          case gb.ad.ModuleTrap:
          case gb.ad.ModuleLoad:
          case gb.ad.Port:
            this.moduleEnded(bb.reason === gb.ad.ModuleTrap ? eb.b.coreStopped : eb.b.cantOpen);
            break;
          case gb.ad.NotLive:
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
        const wb = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === wb || void 0 === wb || wb.resolve(bb)
      }
      saveFailed(bb) {
        this.rejectSave(new Error(bb ? eb.b.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(bb) {
        bb && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(eb.b.cropBusy.text)) : this.deps.notify(eb.b.cropBusy)
      }
      resetInFlight() {
        this.opening = !1, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0
      }
      settleOpen(bb) {
        const wb = this.pendingOpen;
        this.pendingOpen = null, null === bb ? null === wb || void 0 === wb || wb.resolve() : null === wb || void 0 === wb || wb.reject(bb)
      }
      rejectSave(bb) {
        const wb = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === wb || void 0 === wb || wb.reject(bb)
      }
      hold(bb) {
        const wb = 0 === this.holds.size;
        this.holds.set(bb, this.now()), wb && this.deps.setHoldDraws(!0)
      }
      release(bb) {
        this.holds.delete(bb) && 0 === this.holds.size && this.deps.setHoldDraws(!1)
      }
      releaseAll() {
        this.holds.size > 0 && (this.holds.clear(), this.deps.setHoldDraws(!1))
      }
    }
  },
  64388: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      MESH_TAIL_MS: () => Lb,
      PLAY_START_TIMEOUT_MS: () => gb,
      startWasmReplayVideoExport: () => Ob
    });
    var eb = Mb(40612),
      Hb = Mb(64396),
      pb = Mb(5678),
      Vb = Mb(3487);
    const gb = Hb.HOLD_TIMEOUT_MS + 5e3,
      lb = 50,
      Lb = 200;

    function Ib(bb) {
      var wb;
      return (null === (wb = bb.view) || void 0 === wb ? void 0 : wb.state) === pb.md.Cropping || bb.dg.includes("crop")
    }

    function Ob(bb) {
      return (0, eb.b)((() => function(bb) {
        var wb, Mb, eb, Hb, Ob, Ub;
        const tb = bb.viewer(),
          Cb = null !== (wb = null === tb || void 0 === tb ? void 0 : tb.view) && void 0 !== wb ? wb : null,
          Eb = bb.canvas();
        if (!tb || !Cb || Cb.state === pb.md.None || 0 === Cb.totalTicks || !Eb || Ib(tb)) return null;
        const Fb = null !== (Mb = bb.now) && void 0 !== Mb ? Mb : () => performance.now(),
          Bb = tb.id,
          sb = () => {
            const wb = bb.viewer();
            return wb === tb && wb.id === Bb && wb.isOpen ? wb : null
          },
          mb = Math.min(null !== (eb = null === (Hb = Cb.mark) || void 0 === Hb ? void 0 : Hb.outTick) && void 0 !== eb ? eb : 1 / 0, Cb.totalTicks - 1);
        let hb = null,
          zb = !1;
        const Xb = () => {
          var bb, wb;
          return (null === (bb = sb()) || void 0 === bb || null === (wb = bb.view) || void 0 === wb ? void 0 : wb.state) === pb.md.Playing
        };
        return {
          gJ: pb.Bd,
          playbackMarkInTick: null !== (Ob = null === (Ub = Cb.mark) || void 0 === Ub ? void 0 : Ub.inTick) && void 0 !== Ob ? Ob : null,
          startFailure: () => {
            const bb = sb();
            return null === bb ? "Another replay opened. Export it again from there." : Ib(bb) ? "Wait for the crop to finish, then export again." : null
          },
          fileName: () => {
            var bb, wb;
            return null !== (bb = null === (wb = sb()) || void 0 === wb ? void 0 : wb.fileName) && void 0 !== bb ? bb : null
          },
          playbackSpeed: () => {
            var bb, wb, Mb;
            return null !== (bb = null === (wb = sb()) || void 0 === wb || null === (Mb = wb.view) || void 0 === Mb ? void 0 : Mb.speed) && void 0 !== bb ? bb : 1
          },
          setPlaybackSpeed: bb => {
            var wb;
            null === (wb = sb()) || void 0 === wb || wb.setSpeed(bb)
          },
          play: () => {
            var bb;
            zb = !1, hb = Fb(), null === (bb = sb()) || void 0 === bb || bb.play()
          },
          pause: () => {
            var bb;
            null === (bb = sb()) || void 0 === bb || bb.pause()
          },
          seekToTick: bb => {
            var wb;
            null === (wb = sb()) || void 0 === wb || wb.seek(bb, !0)
          },
          seekSettled: () => new Promise((bb => {
            const wb = setInterval((() => {
              const Mb = sb();
              null === Mb ? (clearInterval(wb), bb()) : Mb.dg.includes("seek") || (clearInterval(wb), setTimeout(bb, Lb))
            }), lb)
          })),
          isPlaying: () => {
            var bb, wb, Mb;
            return null !== hb && null !== sb() && (!!Xb() || !zb && (null !== (bb = null === (wb = sb()) || void 0 === wb || null === (Mb = wb.view) || void 0 === Mb ? void 0 : Mb.sO) && void 0 !== bb ? bb : 0) < mb && Fb() - hb < gb)
          },
          watchPlayback: wb => {
            const Mb = bb.watchViewer((() => {
                zb ||= null !== hb && Xb(), wb()
              })),
              eb = setTimeout(wb, gb + 1);
            return () => {
              clearTimeout(eb), Mb()
            }
          },
          playbackFailure: () => {
            var bb, wb;
            const Mb = sb();
            return null === Mb ? "The replay closed before the video finished." : (null !== (bb = null === (wb = Mb.view) || void 0 === wb ? void 0 : wb.sO) && void 0 !== bb ? bb : 0) >= mb ? null : zb ? "The replay stopped before the video finished." : "The replay didn't start playing."
          },
          canvas: () => Eb,
          closeViewer: () => {
            bb.requestViewer("close")
          },
          reopenViewer: () => {
            bb.requestViewer("open")
          },
          holdInput: Vb.g
        }
      }(bb)))
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);