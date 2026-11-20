export const id = 63;
export const ids = [57, 63, 91];
export const modules = {
  36321: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Eb,
      d: () => Yb
    });
    var Ab = Ub(22);
    const Mb = 1500,
      Tb = 1e3,
      Eb = {
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

    function Yb(bb) {
      var ab;
      const Ub = null !== (ab = bb.timeoutMs) && void 0 !== ab ? ab : "Error" === bb.type ? Mb : Tb;
      Ab.m.IR("showBottomMessage", {
        message: bb.text,
        timeoutLength: Ub,
        type: bb.type
      })
    }
  },
  36329: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Ab,
      d: () => Mb
    });
    const Ab = "data-replay-ui-active",
      Mb = [{
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
  36334: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => eb,
      i: () => Lb,
      k: () => vb
    });
    var Ab = Ub(19),
      Mb = Ub(22),
      Tb = Ub(36329);

    function Eb() {
      const bb = {};
      for (const {
          group: ab
        }
        of Tb.d) bb[ab] = !0;
      return bb
    }
    let Yb = Eb();

    function Bb() {
      Mb.m.IR("replayViewer|uiVisibilityChanged")
    }

    function eb() {
      return Yb
    }

    function vb(bb, ab) {
      Yb[bb] !== ab && (Yb = {
        ...Yb,
        [bb]: ab
      }, "nametag" === bb && Ab.c.set({
        areNametagsHidden: !ab
      }), Bb())
    }

    function Lb() {
      Yb = Eb(), Ab.c.set({
        areNametagsHidden: !1
      }), Bb()
    }
  },
  38519: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Ib
    });
    var Ab = Ub(1655),
      Mb = Ub(1260),
      Tb = Ub(52),
      Eb = Ub(984),
      Yb = Ub.n(Eb),
      Bb = Ub(1352),
      eb = Ub(101);
    const vb = ["video/webm;codecs=vp9,opus", "video/webm;codecs=vp8,opus", "video/webm;codecs=vp9", "video/webm;codecs=vp8", "video/webm"],
      Lb = ["video/mp4;codecs=avc1,mp4a.40.2", "video/mp4;codecs=avc1.42E01E,mp4a.40.2", "video/mp4;codecs=avc1", "video/mp4"];

    function Pb(bb) {
      return "webm" === bb ? vb : Lb
    }

    function Xb(bb) {
      for (const ab of bb)
        if ("undefined" !== typeof MediaRecorder && MediaRecorder.isTypeSupported(ab)) return ab;
      return null
    }

    function jb(bb) {
      return null !== Xb(Pb(bb))
    }
    var Rb = Ub(1023);
    const kb = [{
      id: "webm",
      label: "WebM",
      description: "Usually less screen tearing, but may not play in all media players."
    }, {
      id: "mp4",
      label: "MP4",
      description: "Works in more players, but may show graphical glitches on some devices."
    }];

    function yb() {
      return jb("webm") ? "webm" : jb("mp4") ? "mp4" : "webm"
    }

    function Zb(bb) {
      let {
        cards: ab
      } = bb;
      return (0, Rb.jsx)("div", {
        className: "ReplayVideoExportOptionCards",
        children: ab.map((bb => (0, Rb.jsxs)("div", {
          className: "ReplayVideoExportOptionColumn",
          children: [(0, Rb.jsx)("div", {
            className: Yb()("ReplayVideoExportOptionCard", {
              Selected: bb.selected,
              Disabled: bb.disabled
            }),
            onClick: () => {
              bb.disabled || bb.onSelect()
            },
            children: (0, Rb.jsxs)("div", {
              className: "ReplayVideoExportOptionCardBody",
              children: [(0, Rb.jsx)("div", {
                className: "ReplayVideoExportOptionCardLabel",
                children: bb.label
              }), (0, Rb.jsx)("div", {
                className: "ReplayVideoExportOptionCardDescription",
                children: bb.description
              })]
            })
          }), bb.disabled && bb.disabledReason && (0, Rb.jsx)("div", {
            className: "ReplayVideoExportOptionError SmallTextLight",
            children: bb.disabledReason
          })]
        }, bb.id)))
      })
    }
    const Db = (0, Tb.memo)((function(bb) {
      let {
        hasPlaybackMark: ab,
        canIncludeUi: Ub,
        includeUiDisabledReason: Ab,
        selectionRef: Mb,
        closePopup: Eb
      } = bb;
      const Yb = jb("webm") || jb("mp4"),
        [vb, Lb] = (0, Tb.useState)(yb),
        [Pb, Xb] = (0, Tb.useState)(Ub),
        Db = Yb && jb(vb);
      if (!Yb) {
        const bb = (0, eb.isMobile)() ? "screen recording" : "OBS";
        return (0, Rb.jsxs)("div", {
          className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
          children: [(0, Rb.jsx)("div", {
            className: "PromptPopupNotificationTitle SmallTextBold",
            children: "Can't export video"
          }), (0, Rb.jsx)("div", {
            className: "PromptPopupNotificationSubtitle SmallTextLight",
            children: `Your device does not support exporting. Try recording with an external software like ${bb}.`
          }), (0, Rb.jsx)("div", {
            className: "PromptPopupNotificationBody",
            children: (0, Rb.jsx)(Bb.D, {
              className: "PromptPopupNotificationBodyButton",
              onClick: () => {
                Mb.options = null, Eb()
              },
              children: "Close"
            })
          })]
        })
      }
      const zb = ab ? "This will only play the range you've set.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes." : "This will play the whole recording from the start.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes.",
        xb = [{
          id: "withoutUi",
          label: "Without UI",
          description: "Usually cleaner and sharper.",
          selected: !Pb,
          disabled: !1,
          disabledReason: null,
          onSelect: () => {
            Xb(!1)
          }
        }, {
          id: "withUi",
          label: "With UI",
          description: "Includes HUD elements. May look worse on some devices.",
          selected: Pb,
          disabled: !Ub,
          disabledReason: Ab,
          onSelect: () => {
            Xb(!0)
          }
        }],
        ib = kb.map((bb => {
          const ab = jb(bb.id);
          return {
            id: bb.id,
            label: bb.label,
            description: bb.description,
            selected: vb === bb.id,
            disabled: !ab,
            disabledReason: "Your device doesn't support this format",
            onSelect: () => {
              Lb(bb.id)
            }
          }
        }));
      return (0, Rb.jsxs)("div", {
        className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
        children: [(0, Rb.jsx)("div", {
          className: "PromptPopupNotificationTitle SmallTextBold",
          children: "Export video?"
        }), (0, Rb.jsx)("div", {
          className: "PromptPopupNotificationSubtitle SmallTextLight",
          children: zb
        }), (0, Rb.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, Rb.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "UI"
          }), (0, Rb.jsx)(Zb, {
            cards: xb
          })]
        }), (0, Rb.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, Rb.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "Format"
          }), (0, Rb.jsx)(Zb, {
            cards: ib
          })]
        }), (0, Rb.jsxs)("div", {
          className: "PromptPopupNotificationBody",
          children: [(0, Rb.jsx)(Bb.m, {
            className: "PromptPopupNotificationBodyButton PromptPopupNotificationBodyPrimaryButton",
            disabled: !Db,
            onClick: () => {
              Mb.options = {
                format: vb,
                includeUi: Ub && Pb
              }, Eb()
            },
            children: "Export"
          }), (0, Rb.jsx)(Bb.D, {
            className: "PromptPopupNotificationBodyButton",
            onClick: () => {
              Mb.options = null, Eb()
            },
            children: "Cancel"
          })]
        })]
      })
    }));
    var zb = Ub(4546),
      xb = Ub(36329),
      ib = Ub(36334);
    let fb = null;

    function mb() {
      return function() {
        const bb = (0, ib.e)();
        for (const {
            group: ab,
            dataAttr: Ub
          }
          of xb.d)
          if (Ub && bb[ab]) return !0;
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
    async function pb(bb, ab, Ub) {
      return bb ? async function() {
        const bb = await navigator.mediaDevices.getDisplayMedia({
          video: !0,
          audio: !1,
          preferCurrentTab: !0,
          selfBrowserSurface: "include"
        });
        for (const ab of bb.getAudioTracks()) ab.stop(), bb.removeTrack(ab);
        return bb
      }(): ab().captureStream(Math.max(1, Math.round(Ub)))
    }
    var Nb = Ub(38370);
    let Wb = !1;

    function Hb(bb) {
      bb.holdInput(!1), (0, Nb.e)(!1)
    }
    async function Ib(bb) {
      var ab, Ub;
      if ((0, Nb.c)() || Wb) return;
      const Tb = bb();
      if (!Tb) return;
      Wb = !0;
      let Eb = null;
      const Yb = Tb.playbackMarkInTick,
        {
          canIncludeUi: Bb,
          includeUiDisabledReason: eb
        } = mb();
      try {
        Eb = await async function(bb) {
          let {
            hasPlaybackMark: ab,
            canIncludeUi: Ub,
            includeUiDisabledReason: Ab
          } = bb;
          const Tb = {
              options: null
            },
            Eb = Mb.NotificationProvider.showCustomPopup({
              body: bb => (0, Rb.jsx)(Db, {
                hasPlaybackMark: ab,
                canIncludeUi: Ub,
                includeUiDisabledReason: Ab,
                selectionRef: Tb,
                closePopup: bb
              }),
              disableExitButton: !0,
              disablePressBackgroundToClose: !0,
              unlockPointerKey: "replayVideoExportOptions"
            });
          return "notificationTornDown" === await Eb.getResult() ? null : Tb.options
        }({
          hasPlaybackMark: null !== Yb,
          canIncludeUi: Bb,
          includeUiDisabledReason: eb
        })
      } finally {
        Wb = !1
      }
      if (!Eb) return;
      const vb = null !== (ab = null === (Ub = Tb.startFailure) || void 0 === Ub ? void 0 : Ub.call(Tb)) && void 0 !== ab ? ab : null;
      if (null !== vb) return void Mb.NotificationProvider.showAlertPopup({
        title: "Video export failed",
        subtitle: vb
      });
      if (! function(bb) {
          return !(0, Nb.c)() && ((0, Nb.e)(!0), bb.holdInput(!0), !0)
        }(Tb)) return;
      let Lb = null;
      try {
        Lb = await pb(Eb.includeUi, (() => Tb.canvas()), Tb.hN)
      } catch (db) {
        return console.error("Failed to create video stream for export", db), Hb(Tb), void Mb.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: db instanceof Error ? db.message : "Could not start capture."
        })
      }
      let jb = null;
      const kb = [];
      let yb = null,
        Zb = null;
      try {
        var xb, ib, Ib;
        jb = Tb.playbackSpeed(), Tb.closeViewer(), Tb.setPlaybackSpeed(1), Tb.pause(), Tb.seekToTick(null !== Yb && void 0 !== Yb ? Yb : 0);
        const bb = await async function() {
          const bb = zb.Howler.masterGain;
          if (!zb.Howler.ctx || !bb) return null;
          await zb.Howler.ctx.resume();
          const ab = zb.Howler.ctx.createMediaStreamDestination();
          bb.connect(ab), fb = ab;
          const [Ub] = ab.stream.getAudioTracks();
          return null !== Ub && void 0 !== Ub ? Ub : null
        }();
        Zb = new MediaStream;
        for (const Ab of Lb.getVideoTracks()) Zb.addTrack(Ab);
        bb && Zb.addTrack(bb);
        const ab = function(bb) {
          const ab = Xb(Pb(bb));
          if (!ab) throw new Error(`No MediaRecorder mime type available for ${bb}`);
          return ab
        }(Eb.format);
        yb = new MediaRecorder(Zb, {
          mimeType: ab,
          videoBitsPerSecond: 8e6
        }), yb.ondataavailable = bb => {
          bb.data.size > 0 && kb.push(bb.data)
        };
        const Ub = new Promise((bb => {
          yb.onstop = () => {
            bb()
          }
        }));
        await (null === (xb = Tb.seekSettled) || void 0 === xb ? void 0 : xb.call(Tb));
        const [Bb] = Lb.getVideoTracks();
        yb.start(250), Tb.play();
        const eb = await
        function(bb, ab, Ub) {
          return new Promise((Ab => {
            let Mb = !1;
            const Tb = bb => {
                Mb || (Mb = !0, Yb(), ab.removeEventListener("ended", Eb), Ab(bb))
              },
              Eb = () => {
                Tb("captureLost")
              },
              Yb = bb.watchPlayback((() => {
                bb.isPlaying() || Tb("completed")
              }));
            ab.addEventListener("ended", Eb), Ub.onerror = () => {
              Tb("recorderError")
            }, "ended" !== ab.readyState ? bb.isPlaying() || Tb("completed") : Tb("captureLost")
          }))
        }(Tb, Bb, yb);
        if (Tb.pause(), "inactive" !== yb.state && yb.stop(), await Ub, "captureLost" === eb) return void Mb.NotificationProvider.showAlertPopup({
          title: "Video export stopped",
          subtitle: "Screen sharing ended before the replay finished. Nothing was saved."
        });
        if ("recorderError" === eb) return void Mb.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "The recorder encountered an error. Nothing was saved."
        });
        const vb = null !== (ib = null === (Ib = Tb.playbackFailure) || void 0 === Ib ? void 0 : Ib.call(Tb)) && void 0 !== ib ? ib : null;
        if (null !== vb) return void Mb.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: `${vb} Nothing was saved.`
        });
        const Rb = new Blob(kb, {
          type: ab
        });
        Rb.size > 0 ? (0, Ab.c)(Rb, function(bb, ab) {
          const Ub = function(bb) {
            return "mp4" === bb ? "mp4" : "webm"
          }(ab);
          if (bb) return `${bb.replace(/\.bloxdreplay$/i,"")}.${Ub}`;
          return `bloxd-replay-${Date.now()}.${Ub}`
        }(Tb.fileName(), Eb.format)) : Mb.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "No video data was captured. Try again."
        })
      } catch (db) {
        console.error("Replay video export failed", db), Mb.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: db instanceof Error ? db.message : "Something went wrong while exporting."
        })
      } finally {
        if (yb && "inactive" !== yb.state) try {
          yb.stop()
        } catch (db) {
          console.error("Failed to stop MediaRecorder", db)
        }! function() {
          const bb = zb.Howler.masterGain;
          if (fb && bb) {
            try {
              bb.disconnect(fb)
            } catch (db) {
              console.error("Failed to disconnect Howler export tee", db)
            }
            fb = null
          } else fb = null
        }();
        for (const bb of Lb.getTracks()) bb.stop();
        if (Zb)
          for (const bb of Zb.getTracks()) bb.stop();
        null !== jb && Tb.setPlaybackSpeed(jb), Tb.pause(), Hb(Tb), Tb.reopenViewer()
      }
    }
  },
  4546: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      Howl: () => Mb.Howl,
      Howler: () => Mb.Howler,
      iosAudio: () => Bb,
      musicOutput: () => kb,
      readyAudioContext: () => yb
    });
    var Ab, Mb = Ub(4551),
      Tb = Ub(101);
    const Eb = Mb.Howler;
    let Yb;

    function Bb() {
      return Yb ??= "ios" === (0, Tb.getOperatingSystem)(), Yb
    }

    function eb() {
      var bb, ab;
      if (Eb.ctx || !Eb.usingWebAudio || "undefined" === typeof AudioContext || !Bb()) return;
      const Ub = navigator.audioSession;
      let Ab;
      "auto" === (null === Ub || void 0 === Ub ? void 0 : Ub.type) && (Ub.type = "ambient");
      try {
        Ab = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const Mb = Ab.createGain();
      Mb.gain.setValueAtTime(Eb._muted ? 0 : null !== (bb = Eb._volume) && void 0 !== bb ? bb : 1, Ab.currentTime), Mb.connect(Ab.destination), Eb.ctx = Ab, Eb.masterGain = Mb, null === (ab = Eb._setup) || void 0 === ab || ab.call(Eb)
    }
    Eb._mobileUnloaded = !0;
    const vb = Eb.volume.bind(Mb.Howler);
    Eb.volume = function() {
      return eb(), vb(...arguments)
    };
    const Lb = Eb.mute.bind(Mb.Howler);
    Eb.mute = bb => (eb(), Lb(bb));
    const Pb = Mb.Howl.prototype,
      Xb = Pb.init;
    Pb.init = function(bb) {
      return eb(), Xb.call(this, bb)
    };
    let jb = 0;
    const Rb = null === (Ab = Eb._autoSuspend) || void 0 === Ab ? void 0 : Ab.bind(Mb.Howler);

    function kb() {
      yb();
      const {
        ctx: bb,
        masterGain: ab
      } = Eb;
      return bb && ab ? {
        ctx: bb,
        destination: ab,
        holdAwake: bb => {
          var ab, Ub;
          (jb += bb ? 1 : -1, bb) ? null === (ab = Eb._autoResume) || void 0 === ab || ab.call(Eb): null === (Ub = Eb._autoSuspend) || void 0 === Ub || Ub.call(Eb)
        },
        wake: () => {
          var ab;
          "running" !== bb.state && (null === (ab = Eb._autoResume) || void 0 === ab || ab.call(Eb), bb.resume().catch((() => {})))
        }
      } : null
    }

    function yb() {
      var bb;
      (Eb.volume(), Eb.ctx && Eb.autoUnlock) && (null === (bb = Eb._unlockAudio) || void 0 === bb || bb.call(Eb))
    }
    Rb && (Eb._autoSuspend = () => jb > 0 ? Mb.Howler : Rb())
  },
  41671: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Ab,
      c: () => Mb
    });
    const Ab = ["recording", "freecam", "keyframe"];

    function Mb() {
      const bb = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(bb[1]) << 32n | BigInt(bb[0])
    }
  },
  41700: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      HOLD_TIMEOUT_MS: () => Yb,
      ReplayViewer: () => eb
    });
    var Ab = Ub(36321),
      Mb = Ub(36334),
      Tb = Ub(4479),
      Eb = Ub(41671);
    const Yb = 1e4,
      Bb = new Set(["QX"]);
    class eb {
      constructor(bb) {
        var ab;
        this.deps = bb, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (ab = bb.now) && void 0 !== ab ? ab : () => performance.now()
      }
      get inPlayback() {
        return this.playback
      }
      get view() {
        return this.lastView
      }
      get isOpen() {
        return null !== this.lastView && this.lastView.state !== Tb.$c.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get PY() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? Ab.c.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(bb, ab) {
        var Ub, Mb, Eb, Yb;
        const {
          client: Bb
        } = this.deps;
        if (!this.playback) {
          if (!Bb.setPlayback(!0)) throw new Error(Ab.c.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const eb = this.epoch;
        let vb;
        try {
          vb = await Bb.open(bb)
        } finally {
          this.loadingOpens--
        }
        if (eb !== this.epoch) throw new Error(Ab.c.coreStopped.text);
        if ("opening" !== vb) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const bb = function(bb) {
            switch (bb) {
              case "reloading":
                return null;
              case "stopped":
              case Tb.Sc.ModuleTrap:
                return Ab.c.coreStopped;
              case Tb.Sc.ModuleLoad:
                return Ab.c.viewerLoadFailed;
              case Tb.Sc.TooLarge:
                return Ab.c.cantOpen
            }
          }(vb);
          if (null === bb) return;
          throw new Error(bb.text)
        }
        return this.rejectSave(new Error(Ab.c.saveClosed.text)), this.fileName = null !== (Ub = null !== (Mb = ab.fileName) && void 0 !== Mb ? Mb : null === (Eb = ab.fileHandle) || void 0 === Eb ? void 0 : Eb.name) && void 0 !== Ub ? Ub : null, this.fileHandle = null !== (Yb = ab.fileHandle) && void 0 !== Yb ? Yb : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((bb, ab) => {
          this.pendingOpen = {
            resolve: bb,
            reject: ab
          }
        }))
      }
      play() {
        this.holds.has("QX") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("QX")
      }
      seek(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Ub = this.lastView;
        null !== Ub && (ab || bb < Ub.qL) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(bb, ab)
      }
      setSpeed(bb) {
        this.deps.client.setSpeed(bb)
      }
      setCameraMode(bb) {
        this.deps.client.setCameraMode(bb)
      }
      cycleCameraMode() {
        const bb = this.lastView;
        null !== bb && bb.state !== Tb.$c.None && this.setCameraMode(Eb.b[(Eb.b.indexOf(bb.cameraMode) + 1) % Eb.b.length])
      }
      addKeyframe() {
        this.edited(this.deps.client.addKeyframe())
      }
      setKeyframe(bb) {
        this.edited(this.deps.client.setKeyframe(bb))
      }
      moveKeyframe(bb, ab) {
        this.edited(this.deps.client.moveKeyframe(bb, ab))
      }
      deleteKeyframes(bb, ab) {
        this.edited(this.deps.client.deleteKeyframes(bb, ab))
      }
      setMark(bb) {
        this.edited(this.deps.client.setMark(bb))
      }
      crop(bb, ab) {
        return !(ab <= bb) && (null !== this.pendingSave ? (this.deps.notify(Ab.c.saveBusy), !1) : !!this.deps.client.crop(bb, ab) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(Ab.c.saveBusy.text)) : new Promise(((bb, ab) => {
          const Ub = {
            resolve: bb,
            reject: ab
          };
          this.pendingSave = Ub, this.editsAtSave = this.edits, this.deps.client.save((0, Eb.c)()).then((bb => {
            this.pendingSave === Ub && this.saveStarted(bb)
          }), (bb => {
            this.pendingSave === Ub && this.rejectSave(bb instanceof Error ? bb : new Error(String(bb)))
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
      markSaved(bb, ab) {
        var Ub, Ab;
        this.fileHandle = bb, this.fileName = null !== (Ub = null !== (Ab = null === bb || void 0 === bb ? void 0 : bb.name) && void 0 !== Ab ? Ab : ab) && void 0 !== Ub ? Ub : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(Ab.c.coreStopped.text)), this.rejectSave(new Error(Ab.c.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var bb, ab, Ub;
        const Ab = this.deps.client.view(),
          Eb = Ab !== this.lastView;
        this.lastView = Ab, this.opening && null !== Ab && Ab.state !== Tb.$c.None && Ab.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, Mb.i)()), this.cropAsked ? (this.cropAsked = !1, null !== Ab && Ab.state === Tb.$c.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== Ab && Ab.state !== Tb.$c.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const eb = 0 === this.settleFrames && 0 === (null !== (bb = null === (ab = (Ub = this.deps).meshPending) || void 0 === ab ? void 0 : ab.call(Ub)) && void 0 !== bb ? bb : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && eb && this.release("opening"), this.holds.has("seek") && eb && this.release("seek"), this.holds.has("crop") && !this.cropRunning && eb && this.release("crop");
        const vb = this.now();
        for (const [Mb, Tb] of this.holds) !Bb.has(Mb) && vb - Tb >= Yb && (this.release(Mb), "opening" === Mb && (this.opening = !1, this.settleOpen(null)));
        this.saveRefused && !this.cropping && this.saveFailed(!1), Eb && this.deps.onChange()
      }
      cropped() {
        (0, Mb.i)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(bb) {
        switch (bb.reason) {
          case Tb.Sc.TooLarge:
            break;
          case Tb.Sc.Open:
          case Tb.Sc.NothingStaged:
            this.opening = !1, this.release("opening"), null === this.pendingOpen && this.deps.notify(Ab.c.cantOpen), this.settleOpen(new Error(Ab.c.cantOpen.text));
            break;
          case Tb.Sc.Crop:
            if (bb.code === Tb.Rc.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(Ab.c.cropFailed);
            break;
          case Tb.Sc.ModuleTrap:
          case Tb.Sc.ModuleLoad:
          case Tb.Sc.Port:
            this.moduleEnded(bb.reason === Tb.Sc.ModuleTrap ? Ab.c.coreStopped : Ab.c.cantOpen);
            break;
          case Tb.Sc.NotLive:
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
        const ab = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === ab || void 0 === ab || ab.resolve(bb)
      }
      saveFailed(bb) {
        this.rejectSave(new Error(bb ? Ab.c.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(bb) {
        bb && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(Ab.c.cropBusy.text)) : this.deps.notify(Ab.c.cropBusy)
      }
      resetInFlight() {
        this.opening = !1, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0
      }
      settleOpen(bb) {
        const ab = this.pendingOpen;
        this.pendingOpen = null, null === bb ? null === ab || void 0 === ab || ab.resolve() : null === ab || void 0 === ab || ab.reject(bb)
      }
      rejectSave(bb) {
        const ab = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === ab || void 0 === ab || ab.reject(bb)
      }
      hold(bb) {
        const ab = 0 === this.holds.size;
        this.holds.set(bb, this.now()), ab && this.deps.setHoldDraws(!0)
      }
      release(bb) {
        this.holds.delete(bb) && 0 === this.holds.size && this.deps.setHoldDraws(!1)
      }
      releaseAll() {
        this.holds.size > 0 && (this.holds.clear(), this.deps.setHoldDraws(!1))
      }
    }
  },
  41698: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      MESH_TAIL_MS: () => eb,
      PLAY_START_TIMEOUT_MS: () => Yb,
      startWasmReplayVideoExport: () => Lb
    });
    var Ab = Ub(38519),
      Mb = Ub(41700),
      Tb = Ub(4479),
      Eb = Ub(2262);
    const Yb = Mb.HOLD_TIMEOUT_MS + 5e3,
      Bb = 50,
      eb = 200;

    function vb(bb) {
      var ab;
      return (null === (ab = bb.view) || void 0 === ab ? void 0 : ab.state) === Tb.$c.Cropping || bb.PY.includes("crop")
    }

    function Lb(bb) {
      return (0, Ab.c)((() => function(bb) {
        var ab, Ub, Ab, Mb, Lb, Pb;
        const Xb = bb.viewer(),
          jb = null !== (ab = null === Xb || void 0 === Xb ? void 0 : Xb.view) && void 0 !== ab ? ab : null,
          Rb = bb.canvas();
        if (!Xb || !jb || jb.state === Tb.$c.None || 0 === jb.totalTicks || !Rb || vb(Xb)) return null;
        const kb = null !== (Ub = bb.now) && void 0 !== Ub ? Ub : () => performance.now(),
          yb = Xb.id,
          Zb = () => {
            const ab = bb.viewer();
            return ab === Xb && ab.id === yb && ab.isOpen ? ab : null
          },
          Db = Math.min(null !== (Ab = null === (Mb = jb.mark) || void 0 === Mb ? void 0 : Mb.outTick) && void 0 !== Ab ? Ab : 1 / 0, jb.totalTicks - 1);
        let zb = null,
          xb = !1;
        const ib = () => {
          var bb, ab;
          return (null === (bb = Zb()) || void 0 === bb || null === (ab = bb.view) || void 0 === ab ? void 0 : ab.state) === Tb.$c.Playing
        };
        return {
          hN: Tb.id,
          playbackMarkInTick: null !== (Lb = null === (Pb = jb.mark) || void 0 === Pb ? void 0 : Pb.inTick) && void 0 !== Lb ? Lb : null,
          startFailure: () => {
            const bb = Zb();
            return null === bb ? "Another replay opened. Export it again from there." : vb(bb) ? "Wait for the crop to finish, then export again." : null
          },
          fileName: () => {
            var bb, ab;
            return null !== (bb = null === (ab = Zb()) || void 0 === ab ? void 0 : ab.fileName) && void 0 !== bb ? bb : null
          },
          playbackSpeed: () => {
            var bb, ab, Ub;
            return null !== (bb = null === (ab = Zb()) || void 0 === ab || null === (Ub = ab.view) || void 0 === Ub ? void 0 : Ub.speed) && void 0 !== bb ? bb : 1
          },
          setPlaybackSpeed: bb => {
            var ab;
            null === (ab = Zb()) || void 0 === ab || ab.setSpeed(bb)
          },
          play: () => {
            var bb;
            xb = !1, zb = kb(), null === (bb = Zb()) || void 0 === bb || bb.play()
          },
          pause: () => {
            var bb;
            null === (bb = Zb()) || void 0 === bb || bb.pause()
          },
          seekToTick: bb => {
            var ab;
            null === (ab = Zb()) || void 0 === ab || ab.seek(bb, !0)
          },
          seekSettled: () => new Promise((bb => {
            const ab = setInterval((() => {
              const Ub = Zb();
              null === Ub ? (clearInterval(ab), bb()) : Ub.PY.includes("seek") || (clearInterval(ab), setTimeout(bb, eb))
            }), Bb)
          })),
          isPlaying: () => {
            var bb, ab, Ub;
            return null !== zb && null !== Zb() && (!!ib() || !xb && (null !== (bb = null === (ab = Zb()) || void 0 === ab || null === (Ub = ab.view) || void 0 === Ub ? void 0 : Ub.qL) && void 0 !== bb ? bb : 0) < Db && kb() - zb < Yb)
          },
          watchPlayback: ab => {
            const Ub = bb.watchViewer((() => {
                xb ||= null !== zb && ib(), ab()
              })),
              Ab = setTimeout(ab, Yb + 1);
            return () => {
              clearTimeout(Ab), Ub()
            }
          },
          playbackFailure: () => {
            var bb, ab;
            const Ub = Zb();
            return null === Ub ? "The replay closed before the video finished." : (null !== (bb = null === (ab = Ub.view) || void 0 === ab ? void 0 : ab.qL) && void 0 !== bb ? bb : 0) >= Db ? null : xb ? "The replay stopped before the video finished." : "The replay didn't start playing."
          },
          canvas: () => Rb,
          closeViewer: () => {
            bb.requestViewer("close")
          },
          reopenViewer: () => {
            bb.requestViewer("open")
          },
          holdInput: Eb.g
        }
      }(bb)))
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);