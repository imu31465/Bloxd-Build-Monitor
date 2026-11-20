export const id = 63;
export const ids = [57, 63, 91];
export const modules = {
  36659: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => Xk,
      f: () => bk
    });
    var Rk = Bk(29);
    const tk = 1500,
      ak = 1e3,
      Xk = {
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

    function bk(kk) {
      var Fk;
      const Bk = null !== (Fk = kk.timeoutMs) && void 0 !== Fk ? Fk : "Error" === kk.type ? tk : ak;
      Rk.o.Hf("showBottomMessage", {
        message: kk.text,
        timeoutLength: Bk,
        type: kk.type
      })
    }
  },
  36670: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => Rk,
      h: () => tk
    });
    const Rk = "data-replay-ui-active",
      tk = [{
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
  36674: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => dk,
      g: () => Vk,
      h: () => sk
    });
    var Rk = Bk(22),
      tk = Bk(29),
      ak = Bk(36670);

    function Xk() {
      const kk = {};
      for (const {
          group: Fk
        }
        of ak.h) kk[Fk] = !0;
      return kk
    }
    let bk = Xk();

    function wk() {
      tk.o.Hf("replayViewer|uiVisibilityChanged")
    }

    function dk() {
      return bk
    }

    function sk(kk, Fk) {
      bk[kk] !== Fk && (bk = {
        ...bk,
        [kk]: Fk
      }, "nametag" === kk && Rk.c.set({
        areNametagsHidden: !Fk
      }), wk())
    }

    function Vk() {
      bk = Xk(), Rk.c.set({
        areNametagsHidden: !1
      }), wk()
    }
  },
  38854: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => Mk
    });
    var Rk = Bk(1663),
      tk = Bk(1300),
      ak = Bk(61),
      Xk = Bk(1020),
      bk = Bk.n(Xk),
      wk = Bk(1389),
      dk = Bk(98);
    const sk = ["video/webm;codecs=vp9,opus", "video/webm;codecs=vp8,opus", "video/webm;codecs=vp9", "video/webm;codecs=vp8", "video/webm"],
      Vk = ["video/mp4;codecs=avc1,mp4a.40.2", "video/mp4;codecs=avc1.42E01E,mp4a.40.2", "video/mp4;codecs=avc1", "video/mp4"];

    function Jk(kk) {
      return "webm" === kk ? sk : Vk
    }

    function Ak(kk) {
      for (const Fk of kk)
        if ("undefined" !== typeof MediaRecorder && MediaRecorder.isTypeSupported(Fk)) return Fk;
      return null
    }

    function ek(kk) {
      return null !== Ak(Jk(kk))
    }
    var yk = Bk(1069);
    const fk = [{
      id: "webm",
      label: "WebM",
      description: "Usually less screen tearing, but may not play in all media players."
    }, {
      id: "mp4",
      label: "MP4",
      description: "Works in more players, but may show graphical glitches on some devices."
    }];

    function mk() {
      return ek("webm") ? "webm" : ek("mp4") ? "mp4" : "webm"
    }

    function Wk(kk) {
      let {
        cards: Fk
      } = kk;
      return (0, yk.jsx)("div", {
        className: "ReplayVideoExportOptionCards",
        children: Fk.map((kk => (0, yk.jsxs)("div", {
          className: "ReplayVideoExportOptionColumn",
          children: [(0, yk.jsx)("div", {
            className: bk()("ReplayVideoExportOptionCard", {
              Selected: kk.selected,
              Disabled: kk.disabled
            }),
            onClick: () => {
              kk.disabled || kk.onSelect()
            },
            children: (0, yk.jsxs)("div", {
              className: "ReplayVideoExportOptionCardBody",
              children: [(0, yk.jsx)("div", {
                className: "ReplayVideoExportOptionCardLabel",
                children: kk.label
              }), (0, yk.jsx)("div", {
                className: "ReplayVideoExportOptionCardDescription",
                children: kk.description
              })]
            })
          }), kk.disabled && kk.disabledReason && (0, yk.jsx)("div", {
            className: "ReplayVideoExportOptionError SmallTextLight",
            children: kk.disabledReason
          })]
        }, kk.id)))
      })
    }
    const vk = (0, ak.memo)((function(kk) {
      let {
        hasPlaybackMark: Fk,
        canIncludeUi: Bk,
        includeUiDisabledReason: Rk,
        selectionRef: tk,
        closePopup: Xk
      } = kk;
      const bk = ek("webm") || ek("mp4"),
        [sk, Vk] = (0, ak.useState)(mk),
        [Jk, Ak] = (0, ak.useState)(Bk),
        vk = bk && ek(sk);
      if (!bk) {
        const kk = (0, dk.isMobile)() ? "screen recording" : "OBS";
        return (0, yk.jsxs)("div", {
          className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
          children: [(0, yk.jsx)("div", {
            className: "PromptPopupNotificationTitle SmallTextBold",
            children: "Can't export video"
          }), (0, yk.jsx)("div", {
            className: "PromptPopupNotificationSubtitle SmallTextLight",
            children: `Your device does not support exporting. Try recording with an external software like ${kk}.`
          }), (0, yk.jsx)("div", {
            className: "PromptPopupNotificationBody",
            children: (0, yk.jsx)(wk.J, {
              className: "PromptPopupNotificationBodyButton",
              onClick: () => {
                tk.options = null, Xk()
              },
              children: "Close"
            })
          })]
        })
      }
      const ik = Fk ? "This will only play the range you've set.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes." : "This will play the whole recording from the start.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes.",
        Yk = [{
          id: "withoutUi",
          label: "Without UI",
          description: "Usually cleaner and sharper.",
          selected: !Jk,
          disabled: !1,
          disabledReason: null,
          onSelect: () => {
            Ak(!1)
          }
        }, {
          id: "withUi",
          label: "With UI",
          description: "Includes HUD elements. May look worse on some devices.",
          selected: Jk,
          disabled: !Bk,
          disabledReason: Rk,
          onSelect: () => {
            Ak(!0)
          }
        }],
        Lk = fk.map((kk => {
          const Fk = ek(kk.id);
          return {
            id: kk.id,
            label: kk.label,
            description: kk.description,
            selected: sk === kk.id,
            disabled: !Fk,
            disabledReason: "Your device doesn't support this format",
            onSelect: () => {
              Vk(kk.id)
            }
          }
        }));
      return (0, yk.jsxs)("div", {
        className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
        children: [(0, yk.jsx)("div", {
          className: "PromptPopupNotificationTitle SmallTextBold",
          children: "Export video?"
        }), (0, yk.jsx)("div", {
          className: "PromptPopupNotificationSubtitle SmallTextLight",
          children: ik
        }), (0, yk.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, yk.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "UI"
          }), (0, yk.jsx)(Wk, {
            cards: Yk
          })]
        }), (0, yk.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, yk.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "Format"
          }), (0, yk.jsx)(Wk, {
            cards: Lk
          })]
        }), (0, yk.jsxs)("div", {
          className: "PromptPopupNotificationBody",
          children: [(0, yk.jsx)(wk.o, {
            className: "PromptPopupNotificationBodyButton PromptPopupNotificationBodyPrimaryButton",
            disabled: !vk,
            onClick: () => {
              tk.options = {
                format: sk,
                includeUi: Bk && Jk
              }, Xk()
            },
            children: "Export"
          }), (0, yk.jsx)(wk.J, {
            className: "PromptPopupNotificationBodyButton",
            onClick: () => {
              tk.options = null, Xk()
            },
            children: "Cancel"
          })]
        })]
      })
    }));
    var ik = Bk(4575),
      Yk = Bk(36670),
      Lk = Bk(36674);
    let Ok = null;

    function Ek() {
      return function() {
        const kk = (0, Lk.c)();
        for (const {
            group: Fk,
            dataAttr: Bk
          }
          of Yk.h)
          if (Bk && kk[Fk]) return !0;
        return !1
      }() ? function() {
        var kk;
        return "function" === typeof(null === (kk = navigator.mediaDevices) || void 0 === kk ? void 0 : kk.getDisplayMedia)
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
    async function Sk(kk, Fk, Bk) {
      return kk ? async function() {
        const kk = await navigator.mediaDevices.getDisplayMedia({
          video: !0,
          audio: !1,
          preferCurrentTab: !0,
          selfBrowserSurface: "include"
        });
        for (const Fk of kk.getAudioTracks()) Fk.stop(), kk.removeTrack(Fk);
        return kk
      }(): Fk().captureStream(Math.max(1, Math.round(Bk)))
    }
    var Nk = Bk(38719);
    let Hk = !1;

    function uk(kk) {
      kk.holdInput(!1), (0, Nk.e)(!1)
    }
    async function Mk(kk) {
      var Fk, Bk;
      if ((0, Nk.b)() || Hk) return;
      const ak = kk();
      if (!ak) return;
      Hk = !0;
      let Xk = null;
      const bk = ak.playbackMarkInTick,
        {
          canIncludeUi: wk,
          includeUiDisabledReason: dk
        } = Ek();
      try {
        Xk = await async function(kk) {
          let {
            hasPlaybackMark: Fk,
            canIncludeUi: Bk,
            includeUiDisabledReason: Rk
          } = kk;
          const ak = {
              options: null
            },
            Xk = tk.NotificationProvider.showCustomPopup({
              body: kk => (0, yk.jsx)(vk, {
                hasPlaybackMark: Fk,
                canIncludeUi: Bk,
                includeUiDisabledReason: Rk,
                selectionRef: ak,
                closePopup: kk
              }),
              disableExitButton: !0,
              disablePressBackgroundToClose: !0,
              unlockPointerKey: "replayVideoExportOptions"
            });
          return "notificationTornDown" === await Xk.getResult() ? null : ak.options
        }({
          hasPlaybackMark: null !== bk,
          canIncludeUi: wk,
          includeUiDisabledReason: dk
        })
      } finally {
        Hk = !1
      }
      if (!Xk) return;
      const sk = null !== (Fk = null === (Bk = ak.startFailure) || void 0 === Bk ? void 0 : Bk.call(ak)) && void 0 !== Fk ? Fk : null;
      if (null !== sk) return void tk.NotificationProvider.showAlertPopup({
        title: "Video export failed",
        subtitle: sk
      });
      if (! function(kk) {
          return !(0, Nk.b)() && ((0, Nk.e)(!0), kk.holdInput(!0), !0)
        }(ak)) return;
      let Vk = null;
      try {
        Vk = await Sk(Xk.includeUi, (() => ak.canvas()), ak.kN)
      } catch (gk) {
        return console.error("Failed to create video stream for export", gk), uk(ak), void tk.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: gk instanceof Error ? gk.message : "Could not start capture."
        })
      }
      let ek = null;
      const fk = [];
      let mk = null,
        Wk = null;
      try {
        var Yk, Lk, Mk;
        ek = ak.playbackSpeed(), ak.closeViewer(), ak.setPlaybackSpeed(1), ak.pause(), ak.seekToTick(null !== bk && void 0 !== bk ? bk : 0);
        const kk = await async function() {
          const kk = ik.Howler.masterGain;
          if (!ik.Howler.ctx || !kk) return null;
          await ik.Howler.ctx.resume();
          const Fk = ik.Howler.ctx.createMediaStreamDestination();
          kk.connect(Fk), Ok = Fk;
          const [Bk] = Fk.stream.getAudioTracks();
          return null !== Bk && void 0 !== Bk ? Bk : null
        }();
        Wk = new MediaStream;
        for (const Rk of Vk.getVideoTracks()) Wk.addTrack(Rk);
        kk && Wk.addTrack(kk);
        const Fk = function(kk) {
          const Fk = Ak(Jk(kk));
          if (!Fk) throw new Error(`No MediaRecorder mime type available for ${kk}`);
          return Fk
        }(Xk.format);
        mk = new MediaRecorder(Wk, {
          mimeType: Fk,
          videoBitsPerSecond: 8e6
        }), mk.ondataavailable = kk => {
          kk.data.size > 0 && fk.push(kk.data)
        };
        const Bk = new Promise((kk => {
          mk.onstop = () => {
            kk()
          }
        }));
        await (null === (Yk = ak.seekSettled) || void 0 === Yk ? void 0 : Yk.call(ak));
        const [wk] = Vk.getVideoTracks();
        mk.start(250), ak.play();
        const dk = await
        function(kk, Fk, Bk) {
          return new Promise((Rk => {
            let tk = !1;
            const ak = kk => {
                tk || (tk = !0, bk(), Fk.removeEventListener("ended", Xk), Rk(kk))
              },
              Xk = () => {
                ak("captureLost")
              },
              bk = kk.watchPlayback((() => {
                kk.isPlaying() || ak("completed")
              }));
            Fk.addEventListener("ended", Xk), Bk.onerror = () => {
              ak("recorderError")
            }, "ended" !== Fk.readyState ? kk.isPlaying() || ak("completed") : ak("captureLost")
          }))
        }(ak, wk, mk);
        if (ak.pause(), "inactive" !== mk.state && mk.stop(), await Bk, "captureLost" === dk) return void tk.NotificationProvider.showAlertPopup({
          title: "Video export stopped",
          subtitle: "Screen sharing ended before the replay finished. Nothing was saved."
        });
        if ("recorderError" === dk) return void tk.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "The recorder encountered an error. Nothing was saved."
        });
        const sk = null !== (Lk = null === (Mk = ak.playbackFailure) || void 0 === Mk ? void 0 : Mk.call(ak)) && void 0 !== Lk ? Lk : null;
        if (null !== sk) return void tk.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: `${sk} Nothing was saved.`
        });
        const yk = new Blob(fk, {
          type: Fk
        });
        yk.size > 0 ? (0, Rk.e)(yk, function(kk, Fk) {
          const Bk = function(kk) {
            return "mp4" === kk ? "mp4" : "webm"
          }(Fk);
          if (kk) return `${kk.replace(/\.bloxdreplay$/i,"")}.${Bk}`;
          return `bloxd-replay-${Date.now()}.${Bk}`
        }(ak.fileName(), Xk.format)) : tk.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "No video data was captured. Try again."
        })
      } catch (gk) {
        console.error("Replay video export failed", gk), tk.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: gk instanceof Error ? gk.message : "Something went wrong while exporting."
        })
      } finally {
        if (mk && "inactive" !== mk.state) try {
          mk.stop()
        } catch (gk) {
          console.error("Failed to stop MediaRecorder", gk)
        }! function() {
          const kk = ik.Howler.masterGain;
          if (Ok && kk) {
            try {
              kk.disconnect(Ok)
            } catch (gk) {
              console.error("Failed to disconnect Howler export tee", gk)
            }
            Ok = null
          } else Ok = null
        }();
        for (const kk of Vk.getTracks()) kk.stop();
        if (Wk)
          for (const kk of Wk.getTracks()) kk.stop();
        null !== ek && ak.setPlaybackSpeed(ek), ak.pause(), uk(ak), ak.reopenViewer()
      }
    }
  },
  4575: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      Howl: () => tk.Howl,
      Howler: () => tk.Howler,
      iosAudio: () => wk,
      musicOutput: () => fk,
      readyAudioContext: () => mk
    });
    var Rk, tk = Bk(4579),
      ak = Bk(98);
    const Xk = tk.Howler;
    let bk;

    function wk() {
      return bk ??= "ios" === (0, ak.getOperatingSystem)(), bk
    }

    function dk() {
      var kk, Fk;
      if (Xk.ctx || !Xk.usingWebAudio || "undefined" === typeof AudioContext || !wk()) return;
      const Bk = navigator.audioSession;
      let Rk;
      "auto" === (null === Bk || void 0 === Bk ? void 0 : Bk.type) && (Bk.type = "ambient");
      try {
        Rk = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const tk = Rk.createGain();
      tk.gain.setValueAtTime(Xk._muted ? 0 : null !== (kk = Xk._volume) && void 0 !== kk ? kk : 1, Rk.currentTime), tk.connect(Rk.destination), Xk.ctx = Rk, Xk.masterGain = tk, null === (Fk = Xk._setup) || void 0 === Fk || Fk.call(Xk)
    }
    Xk._mobileUnloaded = !0;
    const sk = Xk.volume.bind(tk.Howler);
    Xk.volume = function() {
      return dk(), sk(...arguments)
    };
    const Vk = Xk.mute.bind(tk.Howler);
    Xk.mute = kk => (dk(), Vk(kk));
    const Jk = tk.Howl.prototype,
      Ak = Jk.init;
    Jk.init = function(kk) {
      return dk(), Ak.call(this, kk)
    };
    let ek = 0;
    const yk = null === (Rk = Xk._autoSuspend) || void 0 === Rk ? void 0 : Rk.bind(tk.Howler);

    function fk() {
      mk();
      const {
        ctx: kk,
        masterGain: Fk
      } = Xk;
      return kk && Fk ? {
        ctx: kk,
        destination: Fk,
        holdAwake: kk => {
          var Fk, Bk;
          (ek += kk ? 1 : -1, kk) ? null === (Fk = Xk._autoResume) || void 0 === Fk || Fk.call(Xk): null === (Bk = Xk._autoSuspend) || void 0 === Bk || Bk.call(Xk)
        },
        wake: () => {
          var Fk;
          "running" !== kk.state && (null === (Fk = Xk._autoResume) || void 0 === Fk || Fk.call(Xk), kk.resume().catch((() => {})))
        }
      } : null
    }

    function mk() {
      var kk;
      (Xk.volume(), Xk.ctx && Xk.autoUnlock) && (null === (kk = Xk._unlockAudio) || void 0 === kk || kk.call(Xk))
    }
    yk && (Xk._autoSuspend = () => ek > 0 ? tk.Howler : yk())
  },
  41998: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => Rk,
      f: () => tk
    });
    const Rk = ["recording", "freecam", "keyframe"];

    function tk() {
      const kk = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(kk[1]) << 32n | BigInt(kk[0])
    }
  },
  42025: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      HOLD_TIMEOUT_MS: () => bk,
      ReplayViewer: () => dk
    });
    var Rk = Bk(36659),
      tk = Bk(36674),
      ak = Bk(4524),
      Xk = Bk(41998);
    const bk = 1e4,
      wk = new Set(["ie"]);
    class dk {
      constructor(kk) {
        var Fk;
        this.deps = kk, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (Fk = kk.now) && void 0 !== Fk ? Fk : () => performance.now()
      }
      get inPlayback() {
        return this.playback
      }
      get view() {
        return this.lastView
      }
      get isOpen() {
        return null !== this.lastView && this.lastView.state !== ak.Cc.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get Hb() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? Rk.d.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(kk, Fk) {
        var Bk, tk, Xk, bk;
        const {
          client: wk
        } = this.deps;
        if (!this.playback) {
          if (!wk.setPlayback(!0)) throw new Error(Rk.d.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const dk = this.epoch;
        let sk;
        try {
          sk = await wk.open(kk)
        } finally {
          this.loadingOpens--
        }
        if (dk !== this.epoch) throw new Error(Rk.d.coreStopped.text);
        if ("opening" !== sk) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const kk = function(kk) {
            switch (kk) {
              case "reloading":
                return null;
              case "stopped":
              case ak.sc.ModuleTrap:
                return Rk.d.coreStopped;
              case ak.sc.ModuleLoad:
                return Rk.d.viewerLoadFailed;
              case ak.sc.TooLarge:
                return Rk.d.cantOpen
            }
          }(sk);
          if (null === kk) return;
          throw new Error(kk.text)
        }
        return this.rejectSave(new Error(Rk.d.saveClosed.text)), this.fileName = null !== (Bk = null !== (tk = Fk.fileName) && void 0 !== tk ? tk : null === (Xk = Fk.fileHandle) || void 0 === Xk ? void 0 : Xk.name) && void 0 !== Bk ? Bk : null, this.fileHandle = null !== (bk = Fk.fileHandle) && void 0 !== bk ? bk : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((kk, Fk) => {
          this.pendingOpen = {
            resolve: kk,
            reject: Fk
          }
        }))
      }
      play() {
        this.holds.has("ie") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("ie")
      }
      seek(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Bk = this.lastView;
        null !== Bk && (Fk || kk < Bk.yJ) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(kk, Fk)
      }
      setSpeed(kk) {
        this.deps.client.setSpeed(kk)
      }
      setCameraMode(kk) {
        this.deps.client.setCameraMode(kk)
      }
      cycleCameraMode() {
        const kk = this.lastView;
        null !== kk && kk.state !== ak.Cc.None && this.setCameraMode(Xk.c[(Xk.c.indexOf(kk.cameraMode) + 1) % Xk.c.length])
      }
      addKeyframe() {
        this.edited(this.deps.client.addKeyframe())
      }
      setKeyframe(kk) {
        this.edited(this.deps.client.setKeyframe(kk))
      }
      moveKeyframe(kk, Fk) {
        this.edited(this.deps.client.moveKeyframe(kk, Fk))
      }
      deleteKeyframes(kk, Fk) {
        this.edited(this.deps.client.deleteKeyframes(kk, Fk))
      }
      setMark(kk) {
        this.edited(this.deps.client.setMark(kk))
      }
      crop(kk, Fk) {
        return !(Fk <= kk) && (null !== this.pendingSave ? (this.deps.notify(Rk.d.saveBusy), !1) : !!this.deps.client.crop(kk, Fk) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(Rk.d.saveBusy.text)) : new Promise(((kk, Fk) => {
          const Bk = {
            resolve: kk,
            reject: Fk
          };
          this.pendingSave = Bk, this.editsAtSave = this.edits, this.deps.client.save((0, Xk.f)()).then((kk => {
            this.pendingSave === Bk && this.saveStarted(kk)
          }), (kk => {
            this.pendingSave === Bk && this.rejectSave(kk instanceof Error ? kk : new Error(String(kk)))
          }))
        }))
      }
      saveStarted(kk) {
        switch (kk) {
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
      markSaved(kk, Fk) {
        var Bk, Rk;
        this.fileHandle = kk, this.fileName = null !== (Bk = null !== (Rk = null === kk || void 0 === kk ? void 0 : kk.name) && void 0 !== Rk ? Rk : Fk) && void 0 !== Bk ? Bk : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(Rk.d.coreStopped.text)), this.rejectSave(new Error(Rk.d.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var kk, Fk, Bk;
        const Rk = this.deps.client.view(),
          Xk = Rk !== this.lastView;
        this.lastView = Rk, this.opening && null !== Rk && Rk.state !== ak.Cc.None && Rk.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, tk.g)()), this.cropAsked ? (this.cropAsked = !1, null !== Rk && Rk.state === ak.Cc.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== Rk && Rk.state !== ak.Cc.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const dk = 0 === this.settleFrames && 0 === (null !== (kk = null === (Fk = (Bk = this.deps).meshPending) || void 0 === Fk ? void 0 : Fk.call(Bk)) && void 0 !== kk ? kk : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && dk && this.release("opening"), this.holds.has("seek") && dk && this.release("seek"), this.holds.has("crop") && !this.cropRunning && dk && this.release("crop");
        const sk = this.now();
        for (const [tk, ak] of this.holds) !wk.has(tk) && sk - ak >= bk && (this.release(tk), "opening" === tk && (this.opening = !1, this.settleOpen(null)));
        this.saveRefused && !this.cropping && this.saveFailed(!1), Xk && this.deps.onChange()
      }
      cropped() {
        (0, tk.g)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(kk) {
        switch (kk.reason) {
          case ak.sc.TooLarge:
            break;
          case ak.sc.Open:
          case ak.sc.NothingStaged:
            this.opening = !1, this.release("opening"), null === this.pendingOpen && this.deps.notify(Rk.d.cantOpen), this.settleOpen(new Error(Rk.d.cantOpen.text));
            break;
          case ak.sc.Crop:
            if (kk.code === ak.rc.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(Rk.d.cropFailed);
            break;
          case ak.sc.ModuleTrap:
          case ak.sc.ModuleLoad:
          case ak.sc.Port:
            this.moduleEnded(kk.reason === ak.sc.ModuleTrap ? Rk.d.coreStopped : Rk.d.cantOpen);
            break;
          case ak.sc.NotLive:
            console.warn("[bloxd-wasm-client] the core refused a recorder command in playback");
            break;
          default:
            console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${kk.reason})`), this.seekAsked = !1, this.release("seek")
        }
        this.deps.onChange()
      }
      moduleEnded(kk) {
        this.resetInFlight(), this.release("opening"), this.release("seek"), this.release("crop"), null === this.pendingOpen && this.deps.notify(kk), this.settleOpen(new Error(kk.text))
      }
      saveDone(kk) {
        const Fk = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === Fk || void 0 === Fk || Fk.resolve(kk)
      }
      saveFailed(kk) {
        this.rejectSave(new Error(kk ? Rk.d.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(kk) {
        kk && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(Rk.d.cropBusy.text)) : this.deps.notify(Rk.d.cropBusy)
      }
      resetInFlight() {
        this.opening = !1, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0
      }
      settleOpen(kk) {
        const Fk = this.pendingOpen;
        this.pendingOpen = null, null === kk ? null === Fk || void 0 === Fk || Fk.resolve() : null === Fk || void 0 === Fk || Fk.reject(kk)
      }
      rejectSave(kk) {
        const Fk = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === Fk || void 0 === Fk || Fk.reject(kk)
      }
      hold(kk) {
        const Fk = 0 === this.holds.size;
        this.holds.set(kk, this.now()), Fk && this.deps.setHoldDraws(!0)
      }
      release(kk) {
        this.holds.delete(kk) && 0 === this.holds.size && this.deps.setHoldDraws(!1)
      }
      releaseAll() {
        this.holds.size > 0 && (this.holds.clear(), this.deps.setHoldDraws(!1))
      }
    }
  },
  42020: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      MESH_TAIL_MS: () => dk,
      PLAY_START_TIMEOUT_MS: () => bk,
      startWasmReplayVideoExport: () => Vk
    });
    var Rk = Bk(38854),
      tk = Bk(42025),
      ak = Bk(4524),
      Xk = Bk(2309);
    const bk = tk.HOLD_TIMEOUT_MS + 5e3,
      wk = 50,
      dk = 200;

    function sk(kk) {
      var Fk;
      return (null === (Fk = kk.view) || void 0 === Fk ? void 0 : Fk.state) === ak.Cc.Cropping || kk.Hb.includes("crop")
    }

    function Vk(kk) {
      return (0, Rk.d)((() => function(kk) {
        var Fk, Bk, Rk, tk, Vk, Jk;
        const Ak = kk.viewer(),
          ek = null !== (Fk = null === Ak || void 0 === Ak ? void 0 : Ak.view) && void 0 !== Fk ? Fk : null,
          yk = kk.canvas();
        if (!Ak || !ek || ek.state === ak.Cc.None || 0 === ek.totalTicks || !yk || sk(Ak)) return null;
        const fk = null !== (Bk = kk.now) && void 0 !== Bk ? Bk : () => performance.now(),
          mk = Ak.id,
          Wk = () => {
            const Fk = kk.viewer();
            return Fk === Ak && Fk.id === mk && Fk.isOpen ? Fk : null
          },
          vk = Math.min(null !== (Rk = null === (tk = ek.mark) || void 0 === tk ? void 0 : tk.outTick) && void 0 !== Rk ? Rk : 1 / 0, ek.totalTicks - 1);
        let ik = null,
          Yk = !1;
        const Lk = () => {
          var kk, Fk;
          return (null === (kk = Wk()) || void 0 === kk || null === (Fk = kk.view) || void 0 === Fk ? void 0 : Fk.state) === ak.Cc.Playing
        };
        return {
          kN: ak.Pc,
          playbackMarkInTick: null !== (Vk = null === (Jk = ek.mark) || void 0 === Jk ? void 0 : Jk.inTick) && void 0 !== Vk ? Vk : null,
          startFailure: () => {
            const kk = Wk();
            return null === kk ? "Another replay opened. Export it again from there." : sk(kk) ? "Wait for the crop to finish, then export again." : null
          },
          fileName: () => {
            var kk, Fk;
            return null !== (kk = null === (Fk = Wk()) || void 0 === Fk ? void 0 : Fk.fileName) && void 0 !== kk ? kk : null
          },
          playbackSpeed: () => {
            var kk, Fk, Bk;
            return null !== (kk = null === (Fk = Wk()) || void 0 === Fk || null === (Bk = Fk.view) || void 0 === Bk ? void 0 : Bk.speed) && void 0 !== kk ? kk : 1
          },
          setPlaybackSpeed: kk => {
            var Fk;
            null === (Fk = Wk()) || void 0 === Fk || Fk.setSpeed(kk)
          },
          play: () => {
            var kk;
            Yk = !1, ik = fk(), null === (kk = Wk()) || void 0 === kk || kk.play()
          },
          pause: () => {
            var kk;
            null === (kk = Wk()) || void 0 === kk || kk.pause()
          },
          seekToTick: kk => {
            var Fk;
            null === (Fk = Wk()) || void 0 === Fk || Fk.seek(kk, !0)
          },
          seekSettled: () => new Promise((kk => {
            const Fk = setInterval((() => {
              const Bk = Wk();
              null === Bk ? (clearInterval(Fk), kk()) : Bk.Hb.includes("seek") || (clearInterval(Fk), setTimeout(kk, dk))
            }), wk)
          })),
          isPlaying: () => {
            var kk, Fk, Bk;
            return null !== ik && null !== Wk() && (!!Lk() || !Yk && (null !== (kk = null === (Fk = Wk()) || void 0 === Fk || null === (Bk = Fk.view) || void 0 === Bk ? void 0 : Bk.yJ) && void 0 !== kk ? kk : 0) < vk && fk() - ik < bk)
          },
          watchPlayback: Fk => {
            const Bk = kk.watchViewer((() => {
                Yk ||= null !== ik && Lk(), Fk()
              })),
              Rk = setTimeout(Fk, bk + 1);
            return () => {
              clearTimeout(Rk), Bk()
            }
          },
          playbackFailure: () => {
            var kk, Fk;
            const Bk = Wk();
            return null === Bk ? "The replay closed before the video finished." : (null !== (kk = null === (Fk = Bk.view) || void 0 === Fk ? void 0 : Fk.yJ) && void 0 !== kk ? kk : 0) >= vk ? null : Yk ? "The replay stopped before the video finished." : "The replay didn't start playing."
          },
          canvas: () => yk,
          closeViewer: () => {
            kk.requestViewer("close")
          },
          reopenViewer: () => {
            kk.requestViewer("open")
          },
          holdInput: Xk.e
        }
      }(kk)))
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);