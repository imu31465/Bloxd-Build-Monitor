export const id = 66;
export const ids = [60, 66, 93];
export const modules = {
  37026: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => tk,
      e: () => Zk
    });
    var Xk = Ik(628),
      Tk = Ik(41),
      ik = Ik(36985);
    const yk = "replayFileKeptForReload",
      lk = "replayFileKeptForReloadAt",
      ak = "replayFileKeptForReloadTab",
      qk = 3e5,
      Lk = 5e3;
    async function tk(kk, Fk) {
      const Ik = Date.now(),
        ik = {
          at: Ik,
          bytes: kk,
          source: Fk
        },
        qk = await Promise.race([(async () => await Tk.g.setItem(lk, Ik) && Tk.g.setItem(yk, ik))(), (0, Xk.U)(Lk).then((() => !1))]);
      qk || console.warn("The replay file couldn't be kept across the reload into a newer build: the reloaded page asks for it again");
      const tk = {
        at: Ik,
        Gj: qk
      };
      Tk.m.setItem(ak, tk)
    }
    async function Zk() {
      var kk;
      const Fk = Tk.m.getItem(ak);
      null !== Fk && Tk.m.removeItem(ak);
      const Ik = Date.now(),
        Xk = await Tk.g.getItem(lk),
        Lk = null !== Fk && Ik - Fk.at <= qk,
        tk = null !== Fk && Xk === Fk.at;
      let Zk = null;
      if (null !== Xk && (tk || ("number" !== typeof Xk || Ik - Xk > qk)) && (Zk = Lk && tk && Fk.Gj ? await Tk.g.getItem(yk) : null, await Promise.all([Tk.g.removeItem(lk), Tk.g.removeItem(yk)])), !Lk) return null;
      if ((null === (kk = Zk) || void 0 === kk ? void 0 : kk.at) !== Fk.at) throw new Error(ik.b.replayNotKept.text);
      return {
        bytes: Zk.bytes,
        source: Zk.source
      }
    }
  },
  37021: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => Xk,
      f: () => ik,
      g: () => Tk
    });
    const Xk = [9];

    function Tk(kk) {
      return Xk.includes(kk)
    }

    function ik(kk) {
      return null !== kk && kk >= 3 && kk < Xk[0]
    }
  },
  36985: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => yk,
      e: () => qk,
      i: () => ak
    });
    var Xk = Ik(34);
    const Tk = 1500,
      ik = 1e3,
      yk = {
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
      lk = new Set(Object.values(yk).filter((kk => "Error" === kk.type)).map((kk => kk.text)));

    function ak(kk) {
      return kk instanceof Error && lk.has(kk.message) ? kk.message : void 0
    }

    function qk(kk) {
      var Fk;
      const Ik = null !== (Fk = kk.timeoutMs) && void 0 !== Fk ? Fk : "Error" === kk.type ? Tk : ik;
      Xk.g.GL("showBottomMessage", {
        message: kk.text,
        timeoutLength: Ik,
        type: kk.type
      })
    }
  },
  37034: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => Xk,
      i: () => Tk
    });
    const Xk = "data-replay-ui-active",
      Tk = [{
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
  37042: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => qk,
      f: () => tk,
      j: () => Lk
    });
    var Xk = Ik(25),
      Tk = Ik(34),
      ik = Ik(37034);

    function yk() {
      const kk = {};
      for (const {
          group: Fk
        }
        of ik.i) kk[Fk] = !0;
      return kk
    }
    let lk = yk();

    function ak() {
      Tk.g.GL("replayViewer|uiVisibilityChanged")
    }

    function qk() {
      return lk
    }

    function Lk(kk, Fk) {
      lk[kk] !== Fk && (lk = {
        ...lk,
        [kk]: Fk
      }, "nametag" === kk && Xk.d.set({
        areNametagsHidden: !Fk
      }), ak())
    }

    function tk() {
      lk = yk(), Xk.d.set({
        areNametagsHidden: !1
      }), ak()
    }
  },
  39257: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => nk
    });
    var Xk = Ik(1682),
      Tk = Ik(1324),
      ik = Ik(58),
      yk = Ik(1055),
      lk = Ik.n(yk),
      ak = Ik(1406),
      qk = Ik(95);
    const Lk = ["video/webm;codecs=vp9,opus", "video/webm;codecs=vp8,opus", "video/webm;codecs=vp9", "video/webm;codecs=vp8", "video/webm"],
      tk = ["video/mp4;codecs=avc1,mp4a.40.2", "video/mp4;codecs=avc1.42E01E,mp4a.40.2", "video/mp4;codecs=avc1", "video/mp4"];

    function Zk(kk) {
      return "webm" === kk ? Lk : tk
    }

    function jk(kk) {
      for (const Fk of kk)
        if ("undefined" !== typeof MediaRecorder && MediaRecorder.isTypeSupported(Fk)) return Fk;
      return null
    }

    function ek(kk) {
      return null !== jk(Zk(kk))
    }
    var wk = Ik(1096);
    const Hk = [{
      id: "webm",
      label: "WebM",
      description: "Usually less screen tearing, but may not play in all media players."
    }, {
      id: "mp4",
      label: "MP4",
      description: "Works in more players, but may show graphical glitches on some devices."
    }];

    function Jk() {
      return ek("webm") ? "webm" : ek("mp4") ? "mp4" : "webm"
    }

    function xk(kk) {
      let {
        cards: Fk
      } = kk;
      return (0, wk.jsx)("div", {
        className: "ReplayVideoExportOptionCards",
        children: Fk.map((kk => (0, wk.jsxs)("div", {
          className: "ReplayVideoExportOptionColumn",
          children: [(0, wk.jsx)("div", {
            className: lk()("ReplayVideoExportOptionCard", {
              Selected: kk.selected,
              Disabled: kk.disabled
            }),
            onClick: () => {
              kk.disabled || kk.onSelect()
            },
            children: (0, wk.jsxs)("div", {
              className: "ReplayVideoExportOptionCardBody",
              children: [(0, wk.jsx)("div", {
                className: "ReplayVideoExportOptionCardLabel",
                children: kk.label
              }), (0, wk.jsx)("div", {
                className: "ReplayVideoExportOptionCardDescription",
                children: kk.description
              })]
            })
          }), kk.disabled && kk.disabledReason && (0, wk.jsx)("div", {
            className: "ReplayVideoExportOptionError SmallTextLight",
            children: kk.disabledReason
          })]
        }, kk.id)))
      })
    }
    const Pk = (0, ik.memo)((function(kk) {
      let {
        hasPlaybackMark: Fk,
        canIncludeUi: Ik,
        includeUiDisabledReason: Xk,
        selectionRef: Tk,
        closePopup: yk
      } = kk;
      const lk = ek("webm") || ek("mp4"),
        [Lk, tk] = (0, ik.useState)(Jk),
        [Zk, jk] = (0, ik.useState)(Ik),
        Pk = lk && ek(Lk);
      if (!lk) {
        const kk = (0, qk.isMobile)() ? "screen recording" : "OBS";
        return (0, wk.jsxs)("div", {
          className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
          children: [(0, wk.jsx)("div", {
            className: "PromptPopupNotificationTitle SmallTextBold",
            children: "Can't export video"
          }), (0, wk.jsx)("div", {
            className: "PromptPopupNotificationSubtitle SmallTextLight",
            children: `Your device does not support exporting. Try recording with an external software like ${kk}.`
          }), (0, wk.jsx)("div", {
            className: "PromptPopupNotificationBody",
            children: (0, wk.jsx)(ak.G, {
              className: "PromptPopupNotificationBodyButton",
              onClick: () => {
                Tk.options = null, yk()
              },
              children: "Close"
            })
          })]
        })
      }
      const Kk = Fk ? "This will only play the range you've set.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes." : "This will play the whole recording from the start.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes.",
        Qk = [{
          id: "withoutUi",
          label: "Without UI",
          description: "Usually cleaner and sharper.",
          selected: !Zk,
          disabled: !1,
          disabledReason: null,
          onSelect: () => {
            jk(!1)
          }
        }, {
          id: "withUi",
          label: "With UI",
          description: "Includes HUD elements. May look worse on some devices.",
          selected: Zk,
          disabled: !Ik,
          disabledReason: Xk,
          onSelect: () => {
            jk(!0)
          }
        }],
        sk = Hk.map((kk => {
          const Fk = ek(kk.id);
          return {
            id: kk.id,
            label: kk.label,
            description: kk.description,
            selected: Lk === kk.id,
            disabled: !Fk,
            disabledReason: "Your device doesn't support this format",
            onSelect: () => {
              tk(kk.id)
            }
          }
        }));
      return (0, wk.jsxs)("div", {
        className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
        children: [(0, wk.jsx)("div", {
          className: "PromptPopupNotificationTitle SmallTextBold",
          children: "Export video?"
        }), (0, wk.jsx)("div", {
          className: "PromptPopupNotificationSubtitle SmallTextLight",
          children: Kk
        }), (0, wk.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, wk.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "UI"
          }), (0, wk.jsx)(xk, {
            cards: Qk
          })]
        }), (0, wk.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, wk.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "Format"
          }), (0, wk.jsx)(xk, {
            cards: sk
          })]
        }), (0, wk.jsxs)("div", {
          className: "PromptPopupNotificationBody",
          children: [(0, wk.jsx)(ak.m, {
            className: "PromptPopupNotificationBodyButton PromptPopupNotificationBodyPrimaryButton",
            disabled: !Pk,
            onClick: () => {
              Tk.options = {
                format: Lk,
                includeUi: Ik && Zk
              }, yk()
            },
            children: "Export"
          }), (0, wk.jsx)(ak.G, {
            className: "PromptPopupNotificationBodyButton",
            onClick: () => {
              Tk.options = null, yk()
            },
            children: "Cancel"
          })]
        })]
      })
    }));
    var Kk = Ik(4857),
      Qk = Ik(37034),
      sk = Ik(37042);
    let Vk = null;

    function zk() {
      return function() {
        const kk = (0, sk.b)();
        for (const {
            group: Fk,
            dataAttr: Ik
          }
          of Qk.i)
          if (Ik && kk[Fk]) return !0;
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
    async function Sk(kk, Fk, Ik) {
      return kk ? async function() {
        const kk = await navigator.mediaDevices.getDisplayMedia({
          video: !0,
          audio: !1,
          preferCurrentTab: !0,
          selfBrowserSurface: "include"
        });
        for (const Fk of kk.getAudioTracks()) Fk.stop(), kk.removeTrack(Fk);
        return kk
      }(): Fk().captureStream(Math.max(1, Math.round(Ik)))
    }
    var vk = Ik(39087);
    let Ek = !1;

    function Ok(kk) {
      kk.holdInput(!1), (0, vk.f)(!1)
    }
    async function nk(kk) {
      var Fk, Ik;
      if ((0, vk.b)() || Ek) return;
      const ik = kk();
      if (!ik) return;
      Ek = !0;
      let yk = null;
      const lk = ik.playbackMarkInTick,
        {
          canIncludeUi: ak,
          includeUiDisabledReason: qk
        } = zk();
      try {
        yk = await async function(kk) {
          let {
            hasPlaybackMark: Fk,
            canIncludeUi: Ik,
            includeUiDisabledReason: Xk
          } = kk;
          const ik = {
              options: null
            },
            yk = Tk.NotificationProvider.showCustomPopup({
              body: kk => (0, wk.jsx)(Pk, {
                hasPlaybackMark: Fk,
                canIncludeUi: Ik,
                includeUiDisabledReason: Xk,
                selectionRef: ik,
                closePopup: kk
              }),
              disableExitButton: !0,
              disablePressBackgroundToClose: !0,
              unlockPointerKey: "replayVideoExportOptions"
            });
          return "notificationTornDown" === await yk.getResult() ? null : ik.options
        }({
          hasPlaybackMark: null !== lk,
          canIncludeUi: ak,
          includeUiDisabledReason: qk
        })
      } finally {
        Ek = !1
      }
      if (!yk) return;
      const Lk = null !== (Fk = null === (Ik = ik.startFailure) || void 0 === Ik ? void 0 : Ik.call(ik)) && void 0 !== Fk ? Fk : null;
      if (null !== Lk) return void Tk.NotificationProvider.showAlertPopup({
        title: "Video export failed",
        subtitle: Lk
      });
      if (! function(kk) {
          return !(0, vk.b)() && ((0, vk.f)(!0), kk.holdInput(!0), !0)
        }(ik)) return;
      let tk = null;
      try {
        tk = await Sk(yk.includeUi, (() => ik.canvas()), ik.WG)
      } catch (Gk) {
        return console.error("Failed to create video stream for export", Gk), Ok(ik), void Tk.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: Gk instanceof Error ? Gk.message : "Could not start capture."
        })
      }
      let ek = null;
      const Hk = [];
      let Jk = null,
        xk = null;
      try {
        var Qk, sk, nk;
        ek = ik.playbackSpeed(), ik.closeViewer(), ik.setPlaybackSpeed(1), ik.pause(), ik.seekToTick(null !== lk && void 0 !== lk ? lk : 0);
        const kk = await async function() {
          const kk = Kk.Howler.masterGain;
          if (!Kk.Howler.ctx || !kk) return null;
          await Kk.Howler.ctx.resume();
          const Fk = Kk.Howler.ctx.createMediaStreamDestination();
          kk.connect(Fk), Vk = Fk;
          const [Ik] = Fk.stream.getAudioTracks();
          return null !== Ik && void 0 !== Ik ? Ik : null
        }();
        xk = new MediaStream;
        for (const Xk of tk.getVideoTracks()) xk.addTrack(Xk);
        kk && xk.addTrack(kk);
        const Fk = function(kk) {
          const Fk = jk(Zk(kk));
          if (!Fk) throw new Error(`No MediaRecorder mime type available for ${kk}`);
          return Fk
        }(yk.format);
        Jk = new MediaRecorder(xk, {
          mimeType: Fk,
          videoBitsPerSecond: 8e6
        }), Jk.ondataavailable = kk => {
          kk.data.size > 0 && Hk.push(kk.data)
        };
        const Ik = new Promise((kk => {
          Jk.onstop = () => {
            kk()
          }
        }));
        await (null === (Qk = ik.seekSettled) || void 0 === Qk ? void 0 : Qk.call(ik));
        const [ak] = tk.getVideoTracks();
        Jk.start(250), ik.play();
        const qk = await
        function(kk, Fk, Ik) {
          return new Promise((Xk => {
            let Tk = !1;
            const ik = kk => {
                Tk || (Tk = !0, lk(), Fk.removeEventListener("ended", yk), Xk(kk))
              },
              yk = () => {
                ik("captureLost")
              },
              lk = kk.watchPlayback((() => {
                kk.isPlaying() || ik("completed")
              }));
            Fk.addEventListener("ended", yk), Ik.onerror = () => {
              ik("recorderError")
            }, "ended" !== Fk.readyState ? kk.isPlaying() || ik("completed") : ik("captureLost")
          }))
        }(ik, ak, Jk);
        if (ik.pause(), "inactive" !== Jk.state && Jk.stop(), await Ik, "captureLost" === qk) return void Tk.NotificationProvider.showAlertPopup({
          title: "Video export stopped",
          subtitle: "Screen sharing ended before the replay finished. Nothing was saved."
        });
        if ("recorderError" === qk) return void Tk.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "The recorder encountered an error. Nothing was saved."
        });
        const Lk = null !== (sk = null === (nk = ik.playbackFailure) || void 0 === nk ? void 0 : nk.call(ik)) && void 0 !== sk ? sk : null;
        if (null !== Lk) return void Tk.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: `${Lk} Nothing was saved.`
        });
        const wk = new Blob(Hk, {
          type: Fk
        });
        wk.size > 0 ? (0, Xk.c)(wk, function(kk, Fk) {
          const Ik = function(kk) {
            return "mp4" === kk ? "mp4" : "webm"
          }(Fk);
          if (kk) return `${kk.replace(/\.bloxdreplay$/i,"")}.${Ik}`;
          return `bloxd-replay-${Date.now()}.${Ik}`
        }(ik.fileName(), yk.format)) : Tk.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "No video data was captured. Try again."
        })
      } catch (Gk) {
        console.error("Replay video export failed", Gk), Tk.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: Gk instanceof Error ? Gk.message : "Something went wrong while exporting."
        })
      } finally {
        if (Jk && "inactive" !== Jk.state) try {
          Jk.stop()
        } catch (Gk) {
          console.error("Failed to stop MediaRecorder", Gk)
        }! function() {
          const kk = Kk.Howler.masterGain;
          if (Vk && kk) {
            try {
              kk.disconnect(Vk)
            } catch (Gk) {
              console.error("Failed to disconnect Howler export tee", Gk)
            }
            Vk = null
          } else Vk = null
        }();
        for (const kk of tk.getTracks()) kk.stop();
        if (xk)
          for (const kk of xk.getTracks()) kk.stop();
        null !== ek && ik.setPlaybackSpeed(ek), ik.pause(), Ok(ik), ik.reopenViewer()
      }
    }
  },
  4857: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      Howl: () => Tk.Howl,
      Howler: () => Tk.Howler,
      musicOutput: () => Hk,
      readyAudioContext: () => Jk
    });
    var Xk, Tk = Ik(4863),
      ik = Ik(3378),
      yk = Ik(4636);
    const lk = Tk.Howler;

    function ak() {
      var kk, Fk;
      if (lk.ctx || !lk.usingWebAudio || "undefined" === typeof AudioContext || !(0, yk.h)()) return;
      const Ik = navigator.audioSession;
      let Xk;
      "auto" === (null === Ik || void 0 === Ik ? void 0 : Ik.type) && (Ik.type = "ambient");
      try {
        Xk = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const Tk = Xk.createGain();
      Tk.gain.setValueAtTime(lk._muted ? 0 : null !== (kk = lk._volume) && void 0 !== kk ? kk : 1, Xk.currentTime), Tk.connect(Xk.destination), lk.ctx = Xk, lk.masterGain = Tk, null === (Fk = lk._setup) || void 0 === Fk || Fk.call(lk)
    }
    lk._mobileUnloaded = !0;
    const qk = lk.volume.bind(Tk.Howler);
    lk.volume = function() {
      return ak(), qk(...arguments)
    };
    const Lk = lk.mute.bind(Tk.Howler);
    lk.mute = kk => (ak(), Lk(kk));
    const tk = Tk.Howl.prototype,
      Zk = tk.init;

    function jk() {
      for (; lk._html5AudioPool.length < lk.html5PoolSize;) {
        const kk = new Audio;
        kk._unlocked = !0, lk._releaseHtml5Audio(kk)
      }
      for (const Fk of lk._howls)
        if (!Fk._webAudio)
          for (const Ik of Fk._getSoundIds()) {
            var kk;
            const Xk = null === (kk = Fk._soundById(Ik)) || void 0 === kk ? void 0 : kk._node;
            Xk && !Xk._unlocked && (Xk._unlocked = !0, Xk.load())
          }
    }
    tk.init = function(kk) {
      return ak(), Zk.call(this, kk)
    }, (0, yk.h)() && (lk._unlockAudio = () => {
      const kk = lk.ctx;
      if (lk._audioUnlocked || !kk) return;
      lk.autoUnlock = !1;
      const Fk = kk.createBuffer(1, 1, 22050);
      lk._scratchBuffer = Fk;
      const Ik = new AbortController;
      let Xk = "afterPaint";
      const Tk = () => {
          var Xk;
          if (lk._audioUnlocked) return;
          null === (Xk = lk._autoResume) || void 0 === Xk || Xk.call(lk);
          const Tk = kk.createBufferSource();
          Tk.buffer = Fk, Tk.connect(kk.destination), Tk.start(0), kk.resume().catch((() => {})), Tk.onended = () => {
            Tk.disconnect(0), lk._audioUnlocked = !0, Ik.abort();
            for (const kk of lk._howls) kk._emit("unlock")
          }
        },
        ak = () => {
          jk(), Tk()
        },
        qk = Fk => {
          if (jk(), "inTap" === Xk) {
            if ("running" === kk.state) return;
            console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), Tk()
          } else "afterPaint" === Xk && (Xk = "queued", (0, ik.b)(Fk.timeStamp, (() => {
            Xk = "inTap", Tk()
          })))
        };
      for (const ik of ["touchstart", "touchend"]) document.addEventListener(ik, ak, {
        capture: !0,
        signal: Ik.signal
      });
      for (const ik of yk.b) document.addEventListener(ik, qk, {
        capture: !0,
        signal: Ik.signal
      })
    });
    let ek = 0;
    const wk = null === (Xk = lk._autoSuspend) || void 0 === Xk ? void 0 : Xk.bind(Tk.Howler);

    function Hk() {
      Jk();
      const {
        ctx: kk,
        masterGain: Fk
      } = lk;
      return kk && Fk ? {
        ctx: kk,
        destination: Fk,
        holdAwake: kk => {
          var Fk, Ik;
          (ek += kk ? 1 : -1, kk) ? null === (Fk = lk._autoResume) || void 0 === Fk || Fk.call(lk): null === (Ik = lk._autoSuspend) || void 0 === Ik || Ik.call(lk)
        },
        wake: () => {
          var Fk;
          "running" !== kk.state && (null === (Fk = lk._autoResume) || void 0 === Fk || Fk.call(lk), kk.resume().catch((() => {})))
        }
      } : null
    }

    function Jk() {
      var kk;
      (lk.volume(), lk.ctx && lk.autoUnlock) && (null === (kk = lk._unlockAudio) || void 0 === kk || kk.call(lk))
    }
    wk && (lk._autoSuspend = () => ek > 0 ? Tk.Howler : wk())
  },
  42586: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => Xk,
      h: () => Tk
    });
    const Xk = ["recording", "freecam", "keyframe"];

    function Tk() {
      const kk = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(kk[1]) << 32n | BigInt(kk[0])
    }
  },
  60609: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      HOLD_TIMEOUT_MS: () => qk,
      ReplayViewer: () => tk
    });
    var Xk = Ik(36985),
      Tk = Ik(37026),
      ik = Ik(37021),
      yk = Ik(37042),
      lk = Ik(4797),
      ak = Ik(42586);
    const qk = 1e4,
      Lk = new Set(["ke"]);
    class tk {
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
        return null !== this.lastView && this.lastView.state !== lk.kd.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get eq() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? Xk.b.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(kk, Fk) {
        var Ik, ik, yk, ak;
        const {
          client: qk
        } = this.deps;
        if (!this.playback) {
          if (!qk.setPlayback(!0)) throw new Error(Xk.b.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const Lk = this.epoch;
        let tk;
        try {
          tk = await qk.open(kk, (() => (0, Tk.c)(kk, Fk)))
        } finally {
          this.loadingOpens--
        }
        if (Lk !== this.epoch && "reloading" !== tk) throw new Error(Xk.b.coreStopped.text);
        if ("opening" !== tk) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const kk = function(kk) {
            switch (kk) {
              case "reloading":
                return null;
              case "stopped":
              case lk.ad.ModuleTrap:
                return Xk.b.coreStopped;
              case lk.ad.ModuleLoad:
                return Xk.b.viewerLoadFailed;
              case lk.ad.TooLarge:
                return Xk.b.cantOpen
            }
          }(tk);
          if (null === kk) return;
          throw new Error(kk.text)
        }
        return this.rejectSave(new Error(Xk.b.saveClosed.text)), this.fileName = null !== (Ik = null !== (ik = Fk.fileName) && void 0 !== ik ? ik : null === (yk = Fk.fileHandle) || void 0 === yk ? void 0 : yk.name) && void 0 !== Ik ? Ik : null, this.fileHandle = null !== (ak = Fk.fileHandle) && void 0 !== ak ? ak : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((kk, Fk) => {
          this.pendingOpen = {
            resolve: kk,
            reject: Fk
          }
        }))
      }
      play() {
        this.holds.has("ke") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("ke")
      }
      seek(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Ik = this.lastView;
        null !== Ik && (Fk || kk < Ik.Dt) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(kk, Fk)
      }
      setSpeed(kk) {
        this.deps.client.setSpeed(kk)
      }
      setCameraMode(kk) {
        this.deps.client.setCameraMode(kk)
      }
      cycleCameraMode() {
        const kk = this.lastView;
        null !== kk && kk.state !== lk.kd.None && this.setCameraMode(ak.d[(ak.d.indexOf(kk.cameraMode) + 1) % ak.d.length])
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
        return !(Fk <= kk) && (null !== this.pendingSave ? (this.deps.notify(Xk.b.saveBusy), !1) : !!this.deps.client.crop(kk, Fk) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(Xk.b.saveBusy.text)) : new Promise(((kk, Fk) => {
          const Ik = {
            resolve: kk,
            reject: Fk
          };
          this.pendingSave = Ik, this.editsAtSave = this.edits, this.deps.client.save((0, ak.h)()).then((kk => {
            this.pendingSave === Ik && this.saveStarted(kk)
          }), (kk => {
            this.pendingSave === Ik && this.rejectSave(kk instanceof Error ? kk : new Error(String(kk)))
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
        var Ik, Xk;
        this.fileHandle = kk, this.fileName = null !== (Ik = null !== (Xk = null === kk || void 0 === kk ? void 0 : kk.name) && void 0 !== Xk ? Xk : Fk) && void 0 !== Ik ? Ik : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(Xk.b.coreStopped.text)), this.rejectSave(new Error(Xk.b.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var kk, Fk, Ik;
        const Xk = this.deps.client.view(),
          Tk = Xk !== this.lastView;
        this.lastView = Xk, this.opening && null !== Xk && Xk.state !== lk.kd.None && Xk.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, yk.f)()), this.cropAsked ? (this.cropAsked = !1, null !== Xk && Xk.state === lk.kd.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== Xk && Xk.state !== lk.kd.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const ik = 0 === this.settleFrames && 0 === (null !== (kk = null === (Fk = (Ik = this.deps).meshPending) || void 0 === Fk ? void 0 : Fk.call(Ik)) && void 0 !== kk ? kk : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && ik && this.release("opening"), this.holds.has("seek") && ik && this.release("seek"), this.holds.has("crop") && !this.cropRunning && ik && this.release("crop");
        const ak = this.now();
        for (const [yk, lk] of this.holds) !Lk.has(yk) && ak - lk >= qk && this.release(yk);
        this.saveRefused && !this.cropping && this.saveFailed(!1), Tk && this.deps.onChange()
      }
      cropped() {
        (0, yk.f)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(kk) {
        switch (kk.reason) {
          case lk.ad.TooLarge:
            break;
          case lk.ad.Open:
          case lk.ad.NothingStaged: {
            this.opening = !1, this.release("opening");
            const Fk = (0, ik.f)(kk.version) ? Xk.b.replayTooOld : Xk.b.cantOpen;
            null === this.pendingOpen && this.deps.notify(Fk), this.settleOpen(new Error(Fk.text));
            break
          }
          case lk.ad.Crop:
            if (kk.code === lk._c.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(Xk.b.cropFailed);
            break;
          case lk.ad.ModuleTrap:
          case lk.ad.ModuleLoad:
          case lk.ad.Port:
            this.moduleEnded(kk.reason === lk.ad.ModuleTrap ? Xk.b.coreStopped : Xk.b.cantOpen);
            break;
          case lk.ad.NotLive:
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
        this.rejectSave(new Error(kk ? Xk.b.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(kk) {
        kk && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(Xk.b.cropBusy.text)) : this.deps.notify(Xk.b.cropBusy)
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
  60606: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      MESH_TAIL_MS: () => qk,
      PLAY_START_TIMEOUT_MS: () => lk,
      startWasmReplayVideoExport: () => tk
    });
    var Xk = Ik(39257),
      Tk = Ik(60609),
      ik = Ik(4797),
      yk = Ik(2341);
    const lk = Tk.HOLD_TIMEOUT_MS + 5e3,
      ak = 50,
      qk = 200;

    function Lk(kk) {
      var Fk;
      return (null === (Fk = kk.view) || void 0 === Fk ? void 0 : Fk.state) === ik.kd.Cropping || kk.eq.includes("crop")
    }

    function tk(kk) {
      return (0, Xk.e)((() => function(kk) {
        var Fk, Ik, Xk, Tk, tk, Zk;
        const jk = kk.viewer(),
          ek = null !== (Fk = null === jk || void 0 === jk ? void 0 : jk.view) && void 0 !== Fk ? Fk : null,
          wk = kk.canvas();
        if (!jk || !ek || ek.state === ik.kd.None || 0 === ek.totalTicks || !wk || Lk(jk)) return null;
        const Hk = null !== (Ik = kk.now) && void 0 !== Ik ? Ik : () => performance.now(),
          Jk = jk.id,
          xk = () => {
            const Fk = kk.viewer();
            return Fk === jk && Fk.id === Jk && Fk.isOpen ? Fk : null
          },
          Pk = Math.min(null !== (Xk = null === (Tk = ek.mark) || void 0 === Tk ? void 0 : Tk.outTick) && void 0 !== Xk ? Xk : 1 / 0, ek.totalTicks - 1);
        let Kk = null,
          Qk = !1;
        const sk = () => {
          var kk, Fk;
          return (null === (kk = xk()) || void 0 === kk || null === (Fk = kk.view) || void 0 === Fk ? void 0 : Fk.state) === ik.kd.Playing
        };
        return {
          WG: ik.zd,
          playbackMarkInTick: null !== (tk = null === (Zk = ek.mark) || void 0 === Zk ? void 0 : Zk.inTick) && void 0 !== tk ? tk : null,
          startFailure: () => {
            const kk = xk();
            return null === kk ? "Another replay opened. Export it again from there." : Lk(kk) ? "Wait for the crop to finish, then export again." : null
          },
          fileName: () => {
            var kk, Fk;
            return null !== (kk = null === (Fk = xk()) || void 0 === Fk ? void 0 : Fk.fileName) && void 0 !== kk ? kk : null
          },
          playbackSpeed: () => {
            var kk, Fk, Ik;
            return null !== (kk = null === (Fk = xk()) || void 0 === Fk || null === (Ik = Fk.view) || void 0 === Ik ? void 0 : Ik.speed) && void 0 !== kk ? kk : 1
          },
          setPlaybackSpeed: kk => {
            var Fk;
            null === (Fk = xk()) || void 0 === Fk || Fk.setSpeed(kk)
          },
          play: () => {
            var kk;
            Qk = !1, Kk = Hk(), null === (kk = xk()) || void 0 === kk || kk.play()
          },
          pause: () => {
            var kk;
            null === (kk = xk()) || void 0 === kk || kk.pause()
          },
          seekToTick: kk => {
            var Fk;
            null === (Fk = xk()) || void 0 === Fk || Fk.seek(kk, !0)
          },
          seekSettled: () => new Promise((kk => {
            const Fk = setInterval((() => {
              const Ik = xk();
              null === Ik ? (clearInterval(Fk), kk()) : Ik.eq.includes("seek") || (clearInterval(Fk), setTimeout(kk, qk))
            }), ak)
          })),
          isPlaying: () => {
            var kk, Fk, Ik;
            return null !== Kk && null !== xk() && (!!sk() || !Qk && (null !== (kk = null === (Fk = xk()) || void 0 === Fk || null === (Ik = Fk.view) || void 0 === Ik ? void 0 : Ik.Dt) && void 0 !== kk ? kk : 0) < Pk && Hk() - Kk < lk)
          },
          watchPlayback: Fk => {
            const Ik = kk.watchViewer((() => {
                Qk ||= null !== Kk && sk(), Fk()
              })),
              Xk = setTimeout(Fk, lk + 1);
            return () => {
              clearTimeout(Xk), Ik()
            }
          },
          playbackFailure: () => {
            var kk, Fk;
            const Ik = xk();
            return null === Ik ? "The replay closed before the video finished." : (null !== (kk = null === (Fk = Ik.view) || void 0 === Fk ? void 0 : Fk.Dt) && void 0 !== kk ? kk : 0) >= Pk ? null : Qk ? "The replay stopped before the video finished." : "The replay didn't start playing."
          },
          canvas: () => wk,
          closeViewer: () => {
            kk.requestViewer("close")
          },
          reopenViewer: () => {
            kk.requestViewer("open")
          },
          holdInput: yk.e
        }
      }(kk)))
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);