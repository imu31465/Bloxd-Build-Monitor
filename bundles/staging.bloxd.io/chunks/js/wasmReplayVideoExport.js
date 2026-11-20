export const id = 64;
export const ids = [58, 64, 92];
export const modules = {
  36498: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => gv,
      e: () => pv
    });
    var hv = Pv(26);
    const Sv = 1500,
      ev = 1e3,
      gv = {
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

    function pv(vv) {
      var zv;
      const Pv = null !== (zv = vv.timeoutMs) && void 0 !== zv ? zv : "Error" === vv.type ? Sv : ev;
      hv.j.zC("showBottomMessage", {
        message: vv.text,
        timeoutLength: Pv,
        type: vv.type
      })
    }
  },
  36512: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => hv,
      e: () => Sv
    });
    const hv = "data-replay-ui-active",
      Sv = [{
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
  36515: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => Nv,
      h: () => Tv,
      l: () => lv
    });
    var hv = Pv(22),
      Sv = Pv(26),
      ev = Pv(36512);

    function gv() {
      const vv = {};
      for (const {
          group: zv
        }
        of ev.e) vv[zv] = !0;
      return vv
    }
    let pv = gv();

    function dv() {
      Sv.j.zC("replayViewer|uiVisibilityChanged")
    }

    function Nv() {
      return pv
    }

    function lv(vv, zv) {
      pv[vv] !== zv && (pv = {
        ...pv,
        [vv]: zv
      }, "nametag" === vv && hv.c.set({
        areNametagsHidden: !zv
      }), dv())
    }

    function Tv() {
      pv = gv(), hv.c.set({
        areNametagsHidden: !1
      }), dv()
    }
  },
  38740: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => Vv
    });
    var hv = Pv(1711),
      Sv = Pv(1336),
      ev = Pv(52),
      gv = Pv(1035),
      pv = Pv.n(gv),
      dv = Pv(1442),
      Nv = Pv(73);
    const lv = ["video/webm;codecs=vp9,opus", "video/webm;codecs=vp8,opus", "video/webm;codecs=vp9", "video/webm;codecs=vp8", "video/webm"],
      Tv = ["video/mp4;codecs=avc1,mp4a.40.2", "video/mp4;codecs=avc1.42E01E,mp4a.40.2", "video/mp4;codecs=avc1", "video/mp4"];

    function Wv(vv) {
      return "webm" === vv ? lv : Tv
    }

    function wv(vv) {
      for (const zv of vv)
        if ("undefined" !== typeof MediaRecorder && MediaRecorder.isTypeSupported(zv)) return zv;
      return null
    }

    function av(vv) {
      return null !== wv(Wv(vv))
    }
    var sv = Pv(1082);
    const Cv = [{
      id: "webm",
      label: "WebM",
      description: "Usually less screen tearing, but may not play in all media players."
    }, {
      id: "mp4",
      label: "MP4",
      description: "Works in more players, but may show graphical glitches on some devices."
    }];

    function iv() {
      return av("webm") ? "webm" : av("mp4") ? "mp4" : "webm"
    }

    function cv(vv) {
      let {
        cards: zv
      } = vv;
      return (0, sv.jsx)("div", {
        className: "ReplayVideoExportOptionCards",
        children: zv.map((vv => (0, sv.jsxs)("div", {
          className: "ReplayVideoExportOptionColumn",
          children: [(0, sv.jsx)("div", {
            className: pv()("ReplayVideoExportOptionCard", {
              Selected: vv.selected,
              Disabled: vv.disabled
            }),
            onClick: () => {
              vv.disabled || vv.onSelect()
            },
            children: (0, sv.jsxs)("div", {
              className: "ReplayVideoExportOptionCardBody",
              children: [(0, sv.jsx)("div", {
                className: "ReplayVideoExportOptionCardLabel",
                children: vv.label
              }), (0, sv.jsx)("div", {
                className: "ReplayVideoExportOptionCardDescription",
                children: vv.description
              })]
            })
          }), vv.disabled && vv.disabledReason && (0, sv.jsx)("div", {
            className: "ReplayVideoExportOptionError SmallTextLight",
            children: vv.disabledReason
          })]
        }, vv.id)))
      })
    }
    const Gv = (0, ev.memo)((function(vv) {
      let {
        hasPlaybackMark: zv,
        canIncludeUi: Pv,
        includeUiDisabledReason: hv,
        selectionRef: Sv,
        closePopup: gv
      } = vv;
      const pv = av("webm") || av("mp4"),
        [lv, Tv] = (0, ev.useState)(iv),
        [Wv, wv] = (0, ev.useState)(Pv),
        Gv = pv && av(lv);
      if (!pv) {
        const vv = (0, Nv.isMobile)() ? "screen recording" : "OBS";
        return (0, sv.jsxs)("div", {
          className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
          children: [(0, sv.jsx)("div", {
            className: "PromptPopupNotificationTitle SmallTextBold",
            children: "Can't export video"
          }), (0, sv.jsx)("div", {
            className: "PromptPopupNotificationSubtitle SmallTextLight",
            children: `Your device does not support exporting. Try recording with an external software like ${vv}.`
          }), (0, sv.jsx)("div", {
            className: "PromptPopupNotificationBody",
            children: (0, sv.jsx)(dv.A, {
              className: "PromptPopupNotificationBodyButton",
              onClick: () => {
                Sv.options = null, gv()
              },
              children: "Close"
            })
          })]
        })
      }
      const mv = zv ? "This will only play the range you've set.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes." : "This will play the whole recording from the start.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes.",
        jv = [{
          id: "withoutUi",
          label: "Without UI",
          description: "Usually cleaner and sharper.",
          selected: !Wv,
          disabled: !1,
          disabledReason: null,
          onSelect: () => {
            wv(!1)
          }
        }, {
          id: "withUi",
          label: "With UI",
          description: "Includes HUD elements. May look worse on some devices.",
          selected: Wv,
          disabled: !Pv,
          disabledReason: hv,
          onSelect: () => {
            wv(!0)
          }
        }],
        fv = Cv.map((vv => {
          const zv = av(vv.id);
          return {
            id: vv.id,
            label: vv.label,
            description: vv.description,
            selected: lv === vv.id,
            disabled: !zv,
            disabledReason: "Your device doesn't support this format",
            onSelect: () => {
              Tv(vv.id)
            }
          }
        }));
      return (0, sv.jsxs)("div", {
        className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
        children: [(0, sv.jsx)("div", {
          className: "PromptPopupNotificationTitle SmallTextBold",
          children: "Export video?"
        }), (0, sv.jsx)("div", {
          className: "PromptPopupNotificationSubtitle SmallTextLight",
          children: mv
        }), (0, sv.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, sv.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "UI"
          }), (0, sv.jsx)(cv, {
            cards: jv
          })]
        }), (0, sv.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, sv.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "Format"
          }), (0, sv.jsx)(cv, {
            cards: fv
          })]
        }), (0, sv.jsxs)("div", {
          className: "PromptPopupNotificationBody",
          children: [(0, sv.jsx)(dv.j, {
            className: "PromptPopupNotificationBodyButton PromptPopupNotificationBodyPrimaryButton",
            disabled: !Gv,
            onClick: () => {
              Sv.options = {
                format: lv,
                includeUi: Pv && Wv
              }, gv()
            },
            children: "Export"
          }), (0, sv.jsx)(dv.A, {
            className: "PromptPopupNotificationBodyButton",
            onClick: () => {
              Sv.options = null, gv()
            },
            children: "Cancel"
          })]
        })]
      })
    }));
    var mv = Pv(4603),
      jv = Pv(36512),
      fv = Pv(36515);
    let Fv = null;

    function Yv() {
      return function() {
        const vv = (0, fv.e)();
        for (const {
            group: zv,
            dataAttr: Pv
          }
          of jv.e)
          if (Pv && vv[zv]) return !0;
        return !1
      }() ? function() {
        var vv;
        return "function" === typeof(null === (vv = navigator.mediaDevices) || void 0 === vv ? void 0 : vv.getDisplayMedia)
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
    async function nv(vv, zv, Pv) {
      return vv ? async function() {
        const vv = await navigator.mediaDevices.getDisplayMedia({
          video: !0,
          audio: !1,
          preferCurrentTab: !0,
          selfBrowserSurface: "include"
        });
        for (const zv of vv.getAudioTracks()) zv.stop(), vv.removeTrack(zv);
        return vv
      }(): zv().captureStream(Math.max(1, Math.round(Pv)))
    }
    var Ov = Pv(38613);
    let Dv = !1;

    function Kv(vv) {
      vv.holdInput(!1), (0, Ov.e)(!1)
    }
    async function Vv(vv) {
      var zv, Pv;
      if ((0, Ov.c)() || Dv) return;
      const ev = vv();
      if (!ev) return;
      Dv = !0;
      let gv = null;
      const pv = ev.playbackMarkInTick,
        {
          canIncludeUi: dv,
          includeUiDisabledReason: Nv
        } = Yv();
      try {
        gv = await async function(vv) {
          let {
            hasPlaybackMark: zv,
            canIncludeUi: Pv,
            includeUiDisabledReason: hv
          } = vv;
          const ev = {
              options: null
            },
            gv = Sv.NotificationProvider.showCustomPopup({
              body: vv => (0, sv.jsx)(Gv, {
                hasPlaybackMark: zv,
                canIncludeUi: Pv,
                includeUiDisabledReason: hv,
                selectionRef: ev,
                closePopup: vv
              }),
              disableExitButton: !0,
              disablePressBackgroundToClose: !0,
              unlockPointerKey: "replayVideoExportOptions"
            });
          return "notificationTornDown" === await gv.getResult() ? null : ev.options
        }({
          hasPlaybackMark: null !== pv,
          canIncludeUi: dv,
          includeUiDisabledReason: Nv
        })
      } finally {
        Dv = !1
      }
      if (!gv) return;
      const lv = null !== (zv = null === (Pv = ev.startFailure) || void 0 === Pv ? void 0 : Pv.call(ev)) && void 0 !== zv ? zv : null;
      if (null !== lv) return void Sv.NotificationProvider.showAlertPopup({
        title: "Video export failed",
        subtitle: lv
      });
      if (! function(vv) {
          return !(0, Ov.c)() && ((0, Ov.e)(!0), vv.holdInput(!0), !0)
        }(ev)) return;
      let Tv = null;
      try {
        Tv = await nv(gv.includeUi, (() => ev.canvas()), ev.ZD)
      } catch (Uv) {
        return console.error("Failed to create video stream for export", Uv), Kv(ev), void Sv.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: Uv instanceof Error ? Uv.message : "Could not start capture."
        })
      }
      let av = null;
      const Cv = [];
      let iv = null,
        cv = null;
      try {
        var jv, fv, Vv;
        av = ev.playbackSpeed(), ev.closeViewer(), ev.setPlaybackSpeed(1), ev.pause(), ev.seekToTick(null !== pv && void 0 !== pv ? pv : 0);
        const vv = await async function() {
          const vv = mv.Howler.masterGain;
          if (!mv.Howler.ctx || !vv) return null;
          await mv.Howler.ctx.resume();
          const zv = mv.Howler.ctx.createMediaStreamDestination();
          vv.connect(zv), Fv = zv;
          const [Pv] = zv.stream.getAudioTracks();
          return null !== Pv && void 0 !== Pv ? Pv : null
        }();
        cv = new MediaStream;
        for (const hv of Tv.getVideoTracks()) cv.addTrack(hv);
        vv && cv.addTrack(vv);
        const zv = function(vv) {
          const zv = wv(Wv(vv));
          if (!zv) throw new Error(`No MediaRecorder mime type available for ${vv}`);
          return zv
        }(gv.format);
        iv = new MediaRecorder(cv, {
          mimeType: zv,
          videoBitsPerSecond: 8e6
        }), iv.ondataavailable = vv => {
          vv.data.size > 0 && Cv.push(vv.data)
        };
        const Pv = new Promise((vv => {
          iv.onstop = () => {
            vv()
          }
        }));
        await (null === (jv = ev.seekSettled) || void 0 === jv ? void 0 : jv.call(ev));
        const [dv] = Tv.getVideoTracks();
        iv.start(250), ev.play();
        const Nv = await
        function(vv, zv, Pv) {
          return new Promise((hv => {
            let Sv = !1;
            const ev = vv => {
                Sv || (Sv = !0, pv(), zv.removeEventListener("ended", gv), hv(vv))
              },
              gv = () => {
                ev("captureLost")
              },
              pv = vv.watchPlayback((() => {
                vv.isPlaying() || ev("completed")
              }));
            zv.addEventListener("ended", gv), Pv.onerror = () => {
              ev("recorderError")
            }, "ended" !== zv.readyState ? vv.isPlaying() || ev("completed") : ev("captureLost")
          }))
        }(ev, dv, iv);
        if (ev.pause(), "inactive" !== iv.state && iv.stop(), await Pv, "captureLost" === Nv) return void Sv.NotificationProvider.showAlertPopup({
          title: "Video export stopped",
          subtitle: "Screen sharing ended before the replay finished. Nothing was saved."
        });
        if ("recorderError" === Nv) return void Sv.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "The recorder encountered an error. Nothing was saved."
        });
        const lv = null !== (fv = null === (Vv = ev.playbackFailure) || void 0 === Vv ? void 0 : Vv.call(ev)) && void 0 !== fv ? fv : null;
        if (null !== lv) return void Sv.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: `${lv} Nothing was saved.`
        });
        const sv = new Blob(Cv, {
          type: zv
        });
        sv.size > 0 ? (0, hv.d)(sv, function(vv, zv) {
          const Pv = function(vv) {
            return "mp4" === vv ? "mp4" : "webm"
          }(zv);
          if (vv) return `${vv.replace(/\.bloxdreplay$/i,"")}.${Pv}`;
          return `bloxd-replay-${Date.now()}.${Pv}`
        }(ev.fileName(), gv.format)) : Sv.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "No video data was captured. Try again."
        })
      } catch (Uv) {
        console.error("Replay video export failed", Uv), Sv.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: Uv instanceof Error ? Uv.message : "Something went wrong while exporting."
        })
      } finally {
        if (iv && "inactive" !== iv.state) try {
          iv.stop()
        } catch (Uv) {
          console.error("Failed to stop MediaRecorder", Uv)
        }! function() {
          const vv = mv.Howler.masterGain;
          if (Fv && vv) {
            try {
              vv.disconnect(Fv)
            } catch (Uv) {
              console.error("Failed to disconnect Howler export tee", Uv)
            }
            Fv = null
          } else Fv = null
        }();
        for (const vv of Tv.getTracks()) vv.stop();
        if (cv)
          for (const vv of cv.getTracks()) vv.stop();
        null !== av && ev.setPlaybackSpeed(av), ev.pause(), Kv(ev), ev.reopenViewer()
      }
    }
  },
  4603: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      Howl: () => Sv.Howl,
      Howler: () => Sv.Howler,
      musicOutput: () => av,
      readyAudioContext: () => sv
    });
    var hv, Sv = Pv(4611),
      ev = Pv(4411);
    const gv = Sv.Howler;

    function pv() {
      var vv, zv;
      if (gv.ctx || !gv.usingWebAudio || "undefined" === typeof AudioContext || !(0, ev.f)()) return;
      const Pv = navigator.audioSession;
      let hv;
      "auto" === (null === Pv || void 0 === Pv ? void 0 : Pv.type) && (Pv.type = "ambient");
      try {
        hv = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const Sv = hv.createGain();
      Sv.gain.setValueAtTime(gv._muted ? 0 : null !== (vv = gv._volume) && void 0 !== vv ? vv : 1, hv.currentTime), Sv.connect(hv.destination), gv.ctx = hv, gv.masterGain = Sv, null === (zv = gv._setup) || void 0 === zv || zv.call(gv)
    }
    gv._mobileUnloaded = !0;
    const dv = gv.volume.bind(Sv.Howler);
    gv.volume = function() {
      return pv(), dv(...arguments)
    };
    const Nv = gv.mute.bind(Sv.Howler);
    gv.mute = vv => (pv(), Nv(vv));
    const lv = Sv.Howl.prototype,
      Tv = lv.init;
    lv.init = function(vv) {
      return pv(), Tv.call(this, vv)
    };
    let Wv = 0;
    const wv = null === (hv = gv._autoSuspend) || void 0 === hv ? void 0 : hv.bind(Sv.Howler);

    function av() {
      sv();
      const {
        ctx: vv,
        masterGain: zv
      } = gv;
      return vv && zv ? {
        ctx: vv,
        destination: zv,
        holdAwake: vv => {
          var zv, Pv;
          (Wv += vv ? 1 : -1, vv) ? null === (zv = gv._autoResume) || void 0 === zv || zv.call(gv): null === (Pv = gv._autoSuspend) || void 0 === Pv || Pv.call(gv)
        },
        wake: () => {
          var zv;
          "running" !== vv.state && (null === (zv = gv._autoResume) || void 0 === zv || zv.call(gv), vv.resume().catch((() => {})))
        }
      } : null
    }

    function sv() {
      var vv;
      (gv.volume(), gv.ctx && gv.autoUnlock) && (null === (vv = gv._unlockAudio) || void 0 === vv || vv.call(gv))
    }
    wv && (gv._autoSuspend = () => Wv > 0 ? Sv.Howler : wv())
  },
  41899: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => hv,
      c: () => Sv
    });
    const hv = ["recording", "freecam", "keyframe"];

    function Sv() {
      const vv = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(vv[1]) << 32n | BigInt(vv[0])
    }
  },
  41945: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      HOLD_TIMEOUT_MS: () => pv,
      ReplayViewer: () => Nv
    });
    var hv = Pv(36498),
      Sv = Pv(36515),
      ev = Pv(4535),
      gv = Pv(41899);
    const pv = 1e4,
      dv = new Set(["Bw"]);
    class Nv {
      constructor(vv) {
        var zv;
        this.deps = vv, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (zv = vv.now) && void 0 !== zv ? zv : () => performance.now()
      }
      get inPlayback() {
        return this.playback
      }
      get view() {
        return this.lastView
      }
      get isOpen() {
        return null !== this.lastView && this.lastView.state !== ev.Cd.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get Vp() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? hv.c.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(vv, zv) {
        var Pv, Sv, gv, pv;
        const {
          client: dv
        } = this.deps;
        if (!this.playback) {
          if (!dv.setPlayback(!0)) throw new Error(hv.c.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const Nv = this.epoch;
        let lv;
        try {
          lv = await dv.open(vv)
        } finally {
          this.loadingOpens--
        }
        if (Nv !== this.epoch) throw new Error(hv.c.coreStopped.text);
        if ("opening" !== lv) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const vv = function(vv) {
            switch (vv) {
              case "reloading":
                return null;
              case "stopped":
              case ev.md.ModuleTrap:
                return hv.c.coreStopped;
              case ev.md.ModuleLoad:
                return hv.c.viewerLoadFailed;
              case ev.md.TooLarge:
                return hv.c.cantOpen
            }
          }(lv);
          if (null === vv) return;
          throw new Error(vv.text)
        }
        return this.rejectSave(new Error(hv.c.saveClosed.text)), this.fileName = null !== (Pv = null !== (Sv = zv.fileName) && void 0 !== Sv ? Sv : null === (gv = zv.fileHandle) || void 0 === gv ? void 0 : gv.name) && void 0 !== Pv ? Pv : null, this.fileHandle = null !== (pv = zv.fileHandle) && void 0 !== pv ? pv : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((vv, zv) => {
          this.pendingOpen = {
            resolve: vv,
            reject: zv
          }
        }))
      }
      play() {
        this.holds.has("Bw") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("Bw")
      }
      seek(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Pv = this.lastView;
        null !== Pv && (zv || vv < Pv.MT) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(vv, zv)
      }
      setSpeed(vv) {
        this.deps.client.setSpeed(vv)
      }
      setCameraMode(vv) {
        this.deps.client.setCameraMode(vv)
      }
      cycleCameraMode() {
        const vv = this.lastView;
        null !== vv && vv.state !== ev.Cd.None && this.setCameraMode(gv.b[(gv.b.indexOf(vv.cameraMode) + 1) % gv.b.length])
      }
      addKeyframe() {
        this.edited(this.deps.client.addKeyframe())
      }
      setKeyframe(vv) {
        this.edited(this.deps.client.setKeyframe(vv))
      }
      moveKeyframe(vv, zv) {
        this.edited(this.deps.client.moveKeyframe(vv, zv))
      }
      deleteKeyframes(vv, zv) {
        this.edited(this.deps.client.deleteKeyframes(vv, zv))
      }
      setMark(vv) {
        this.edited(this.deps.client.setMark(vv))
      }
      crop(vv, zv) {
        return !(zv <= vv) && (null !== this.pendingSave ? (this.deps.notify(hv.c.saveBusy), !1) : !!this.deps.client.crop(vv, zv) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(hv.c.saveBusy.text)) : new Promise(((vv, zv) => {
          const Pv = {
            resolve: vv,
            reject: zv
          };
          this.pendingSave = Pv, this.editsAtSave = this.edits, this.deps.client.save((0, gv.c)()).then((vv => {
            this.pendingSave === Pv && this.saveStarted(vv)
          }), (vv => {
            this.pendingSave === Pv && this.rejectSave(vv instanceof Error ? vv : new Error(String(vv)))
          }))
        }))
      }
      saveStarted(vv) {
        switch (vv) {
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
      markSaved(vv, zv) {
        var Pv, hv;
        this.fileHandle = vv, this.fileName = null !== (Pv = null !== (hv = null === vv || void 0 === vv ? void 0 : vv.name) && void 0 !== hv ? hv : zv) && void 0 !== Pv ? Pv : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(hv.c.coreStopped.text)), this.rejectSave(new Error(hv.c.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var vv, zv, Pv;
        const hv = this.deps.client.view(),
          gv = hv !== this.lastView;
        this.lastView = hv, this.opening && null !== hv && hv.state !== ev.Cd.None && hv.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, Sv.h)()), this.cropAsked ? (this.cropAsked = !1, null !== hv && hv.state === ev.Cd.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== hv && hv.state !== ev.Cd.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const Nv = 0 === this.settleFrames && 0 === (null !== (vv = null === (zv = (Pv = this.deps).meshPending) || void 0 === zv ? void 0 : zv.call(Pv)) && void 0 !== vv ? vv : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && Nv && this.release("opening"), this.holds.has("seek") && Nv && this.release("seek"), this.holds.has("crop") && !this.cropRunning && Nv && this.release("crop");
        const lv = this.now();
        for (const [Sv, ev] of this.holds) !dv.has(Sv) && lv - ev >= pv && (this.release(Sv), "opening" === Sv && (this.opening = !1, this.settleOpen(null)));
        this.saveRefused && !this.cropping && this.saveFailed(!1), gv && this.deps.onChange()
      }
      cropped() {
        (0, Sv.h)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(vv) {
        switch (vv.reason) {
          case ev.md.TooLarge:
            break;
          case ev.md.Open:
          case ev.md.NothingStaged:
            this.opening = !1, this.release("opening"), null === this.pendingOpen && this.deps.notify(hv.c.cantOpen), this.settleOpen(new Error(hv.c.cantOpen.text));
            break;
          case ev.md.Crop:
            if (vv.code === ev.kd.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(hv.c.cropFailed);
            break;
          case ev.md.ModuleTrap:
          case ev.md.ModuleLoad:
          case ev.md.Port:
            this.moduleEnded(vv.reason === ev.md.ModuleTrap ? hv.c.coreStopped : hv.c.cantOpen);
            break;
          case ev.md.NotLive:
            console.warn("[bloxd-wasm-client] the core refused a recorder command in playback");
            break;
          default:
            console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${vv.reason})`), this.seekAsked = !1, this.release("seek")
        }
        this.deps.onChange()
      }
      moduleEnded(vv) {
        this.resetInFlight(), this.release("opening"), this.release("seek"), this.release("crop"), null === this.pendingOpen && this.deps.notify(vv), this.settleOpen(new Error(vv.text))
      }
      saveDone(vv) {
        const zv = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === zv || void 0 === zv || zv.resolve(vv)
      }
      saveFailed(vv) {
        this.rejectSave(new Error(vv ? hv.c.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(vv) {
        vv && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(hv.c.cropBusy.text)) : this.deps.notify(hv.c.cropBusy)
      }
      resetInFlight() {
        this.opening = !1, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0
      }
      settleOpen(vv) {
        const zv = this.pendingOpen;
        this.pendingOpen = null, null === vv ? null === zv || void 0 === zv || zv.resolve() : null === zv || void 0 === zv || zv.reject(vv)
      }
      rejectSave(vv) {
        const zv = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === zv || void 0 === zv || zv.reject(vv)
      }
      hold(vv) {
        const zv = 0 === this.holds.size;
        this.holds.set(vv, this.now()), zv && this.deps.setHoldDraws(!0)
      }
      release(vv) {
        this.holds.delete(vv) && 0 === this.holds.size && this.deps.setHoldDraws(!1)
      }
      releaseAll() {
        this.holds.size > 0 && (this.holds.clear(), this.deps.setHoldDraws(!1))
      }
    }
  },
  41937: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      MESH_TAIL_MS: () => Nv,
      PLAY_START_TIMEOUT_MS: () => pv,
      startWasmReplayVideoExport: () => Tv
    });
    var hv = Pv(38740),
      Sv = Pv(41945),
      ev = Pv(4535),
      gv = Pv(2312);
    const pv = Sv.HOLD_TIMEOUT_MS + 5e3,
      dv = 50,
      Nv = 200;

    function lv(vv) {
      var zv;
      return (null === (zv = vv.view) || void 0 === zv ? void 0 : zv.state) === ev.Cd.Cropping || vv.Vp.includes("crop")
    }

    function Tv(vv) {
      return (0, hv.c)((() => function(vv) {
        var zv, Pv, hv, Sv, Tv, Wv;
        const wv = vv.viewer(),
          av = null !== (zv = null === wv || void 0 === wv ? void 0 : wv.view) && void 0 !== zv ? zv : null,
          sv = vv.canvas();
        if (!wv || !av || av.state === ev.Cd.None || 0 === av.totalTicks || !sv || lv(wv)) return null;
        const Cv = null !== (Pv = vv.now) && void 0 !== Pv ? Pv : () => performance.now(),
          iv = wv.id,
          cv = () => {
            const zv = vv.viewer();
            return zv === wv && zv.id === iv && zv.isOpen ? zv : null
          },
          Gv = Math.min(null !== (hv = null === (Sv = av.mark) || void 0 === Sv ? void 0 : Sv.outTick) && void 0 !== hv ? hv : 1 / 0, av.totalTicks - 1);
        let mv = null,
          jv = !1;
        const fv = () => {
          var vv, zv;
          return (null === (vv = cv()) || void 0 === vv || null === (zv = vv.view) || void 0 === zv ? void 0 : zv.state) === ev.Cd.Playing
        };
        return {
          ZD: ev.Rd,
          playbackMarkInTick: null !== (Tv = null === (Wv = av.mark) || void 0 === Wv ? void 0 : Wv.inTick) && void 0 !== Tv ? Tv : null,
          startFailure: () => {
            const vv = cv();
            return null === vv ? "Another replay opened. Export it again from there." : lv(vv) ? "Wait for the crop to finish, then export again." : null
          },
          fileName: () => {
            var vv, zv;
            return null !== (vv = null === (zv = cv()) || void 0 === zv ? void 0 : zv.fileName) && void 0 !== vv ? vv : null
          },
          playbackSpeed: () => {
            var vv, zv, Pv;
            return null !== (vv = null === (zv = cv()) || void 0 === zv || null === (Pv = zv.view) || void 0 === Pv ? void 0 : Pv.speed) && void 0 !== vv ? vv : 1
          },
          setPlaybackSpeed: vv => {
            var zv;
            null === (zv = cv()) || void 0 === zv || zv.setSpeed(vv)
          },
          play: () => {
            var vv;
            jv = !1, mv = Cv(), null === (vv = cv()) || void 0 === vv || vv.play()
          },
          pause: () => {
            var vv;
            null === (vv = cv()) || void 0 === vv || vv.pause()
          },
          seekToTick: vv => {
            var zv;
            null === (zv = cv()) || void 0 === zv || zv.seek(vv, !0)
          },
          seekSettled: () => new Promise((vv => {
            const zv = setInterval((() => {
              const Pv = cv();
              null === Pv ? (clearInterval(zv), vv()) : Pv.Vp.includes("seek") || (clearInterval(zv), setTimeout(vv, Nv))
            }), dv)
          })),
          isPlaying: () => {
            var vv, zv, Pv;
            return null !== mv && null !== cv() && (!!fv() || !jv && (null !== (vv = null === (zv = cv()) || void 0 === zv || null === (Pv = zv.view) || void 0 === Pv ? void 0 : Pv.MT) && void 0 !== vv ? vv : 0) < Gv && Cv() - mv < pv)
          },
          watchPlayback: zv => {
            const Pv = vv.watchViewer((() => {
                jv ||= null !== mv && fv(), zv()
              })),
              hv = setTimeout(zv, pv + 1);
            return () => {
              clearTimeout(hv), Pv()
            }
          },
          playbackFailure: () => {
            var vv, zv;
            const Pv = cv();
            return null === Pv ? "The replay closed before the video finished." : (null !== (vv = null === (zv = Pv.view) || void 0 === zv ? void 0 : zv.MT) && void 0 !== vv ? vv : 0) >= Gv ? null : jv ? "The replay stopped before the video finished." : "The replay didn't start playing."
          },
          canvas: () => sv,
          closeViewer: () => {
            vv.requestViewer("close")
          },
          reopenViewer: () => {
            vv.requestViewer("open")
          },
          holdInput: gv.i
        }
      }(vv)))
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);