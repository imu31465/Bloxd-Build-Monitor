export const id = 66;
export const ids = [60, 66, 93];
export const modules = {
  36576: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Kk,
      c: () => xk
    });
    var Dk = ik(594),
      fk = ik(38),
      Sk = ik(36539);
    const bk = "replayFileKeptForReload",
      rk = "replayFileKeptForReloadAt",
      Pk = "replayFileKeptForReloadTab",
      mk = 3e5,
      Mk = 5e3;
    async function Kk(kk, ek) {
      const ik = Date.now(),
        Sk = {
          at: ik,
          bytes: kk,
          source: ek
        },
        mk = await Promise.race([(async () => await fk.e.setItem(rk, ik) && fk.e.setItem(bk, Sk))(), (0, Dk.H)(Mk).then((() => !1))]);
      mk || console.warn("The replay file couldn't be kept across the reload into a newer build: the reloaded page asks for it again");
      const Kk = {
        at: ik,
        fU: mk
      };
      fk.g.setItem(Pk, Kk)
    }
    async function xk() {
      var kk;
      const ek = fk.g.getItem(Pk);
      null !== ek && fk.g.removeItem(Pk);
      const ik = Date.now(),
        Dk = await fk.e.getItem(rk),
        Mk = null !== ek && ik - ek.at <= mk,
        Kk = null !== ek && Dk === ek.at;
      let xk = null;
      if (null !== Dk && (Kk || ("number" !== typeof Dk || ik - Dk > mk)) && (xk = Mk && Kk && ek.fU ? await fk.e.getItem(bk) : null, await Promise.all([fk.e.removeItem(rk), fk.e.removeItem(bk)])), !Mk) return null;
      if ((null === (kk = xk) || void 0 === kk ? void 0 : kk.at) !== ek.at) throw new Error(Sk.e.replayNotKept.text);
      return {
        bytes: xk.bytes,
        source: xk.source
      }
    }
  },
  36571: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => Dk,
      f: () => Sk,
      g: () => fk
    });
    const Dk = [9];

    function fk(kk) {
      return Dk.includes(kk)
    }

    function Sk(kk) {
      return null !== kk && kk >= 3 && kk < Dk[0]
    }
  },
  36539: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => bk,
      i: () => mk,
      l: () => Pk
    });
    var Dk = ik(26);
    const fk = 1500,
      Sk = 1e3,
      bk = {
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
      rk = new Set(Object.values(bk).filter((kk => "Error" === kk.type)).map((kk => kk.text)));

    function Pk(kk) {
      return kk instanceof Error && rk.has(kk.message) ? kk.message : void 0
    }

    function mk(kk) {
      var ek;
      const ik = null !== (ek = kk.timeoutMs) && void 0 !== ek ? ek : "Error" === kk.type ? fk : Sk;
      Dk.j.tm("showBottomMessage", {
        message: kk.text,
        timeoutLength: ik,
        type: kk.type
      })
    }
  },
  36586: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => Dk,
      f: () => fk
    });
    const Dk = "data-replay-ui-active",
      fk = [{
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
  36595: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => mk,
      f: () => Kk,
      i: () => Mk
    });
    var Dk = ik(22),
      fk = ik(26),
      Sk = ik(36586);

    function bk() {
      const kk = {};
      for (const {
          group: ek
        }
        of Sk.f) kk[ek] = !0;
      return kk
    }
    let rk = bk();

    function Pk() {
      fk.j.tm("replayViewer|uiVisibilityChanged")
    }

    function mk() {
      return rk
    }

    function Mk(kk, ek) {
      rk[kk] !== ek && (rk = {
        ...rk,
        [kk]: ek
      }, "nametag" === kk && Dk.b.set({
        areNametagsHidden: !ek
      }), Pk())
    }

    function Kk() {
      rk = bk(), Dk.b.set({
        areNametagsHidden: !1
      }), Pk()
    }
  },
  38815: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => uk
    });
    var Dk = ik(1706),
      fk = ik(1333),
      Sk = ik(60),
      bk = ik(1021),
      rk = ik.n(bk),
      Pk = ik(1410),
      mk = ik(99);
    const Mk = ["video/webm;codecs=vp9,opus", "video/webm;codecs=vp8,opus", "video/webm;codecs=vp9", "video/webm;codecs=vp8", "video/webm"],
      Kk = ["video/mp4;codecs=avc1,mp4a.40.2", "video/mp4;codecs=avc1.42E01E,mp4a.40.2", "video/mp4;codecs=avc1", "video/mp4"];

    function xk(kk) {
      return "webm" === kk ? Mk : Kk
    }

    function nk(kk) {
      for (const ek of kk)
        if ("undefined" !== typeof MediaRecorder && MediaRecorder.isTypeSupported(ek)) return ek;
      return null
    }

    function Uk(kk) {
      return null !== nk(xk(kk))
    }
    var Hk = ik(1066);
    const wk = [{
      id: "webm",
      label: "WebM",
      description: "Usually less screen tearing, but may not play in all media players."
    }, {
      id: "mp4",
      label: "MP4",
      description: "Works in more players, but may show graphical glitches on some devices."
    }];

    function lk() {
      return Uk("webm") ? "webm" : Uk("mp4") ? "mp4" : "webm"
    }

    function pk(kk) {
      let {
        cards: ek
      } = kk;
      return (0, Hk.jsx)("div", {
        className: "ReplayVideoExportOptionCards",
        children: ek.map((kk => (0, Hk.jsxs)("div", {
          className: "ReplayVideoExportOptionColumn",
          children: [(0, Hk.jsx)("div", {
            className: rk()("ReplayVideoExportOptionCard", {
              Selected: kk.selected,
              Disabled: kk.disabled
            }),
            onClick: () => {
              kk.disabled || kk.onSelect()
            },
            children: (0, Hk.jsxs)("div", {
              className: "ReplayVideoExportOptionCardBody",
              children: [(0, Hk.jsx)("div", {
                className: "ReplayVideoExportOptionCardLabel",
                children: kk.label
              }), (0, Hk.jsx)("div", {
                className: "ReplayVideoExportOptionCardDescription",
                children: kk.description
              })]
            })
          }), kk.disabled && kk.disabledReason && (0, Hk.jsx)("div", {
            className: "ReplayVideoExportOptionError SmallTextLight",
            children: kk.disabledReason
          })]
        }, kk.id)))
      })
    }
    const yk = (0, Sk.memo)((function(kk) {
      let {
        hasPlaybackMark: ek,
        canIncludeUi: ik,
        includeUiDisabledReason: Dk,
        selectionRef: fk,
        closePopup: bk
      } = kk;
      const rk = Uk("webm") || Uk("mp4"),
        [Mk, Kk] = (0, Sk.useState)(lk),
        [xk, nk] = (0, Sk.useState)(ik),
        yk = rk && Uk(Mk);
      if (!rk) {
        const kk = (0, mk.isMobile)() ? "screen recording" : "OBS";
        return (0, Hk.jsxs)("div", {
          className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
          children: [(0, Hk.jsx)("div", {
            className: "PromptPopupNotificationTitle SmallTextBold",
            children: "Can't export video"
          }), (0, Hk.jsx)("div", {
            className: "PromptPopupNotificationSubtitle SmallTextLight",
            children: `Your device does not support exporting. Try recording with an external software like ${kk}.`
          }), (0, Hk.jsx)("div", {
            className: "PromptPopupNotificationBody",
            children: (0, Hk.jsx)(Pk.R, {
              className: "PromptPopupNotificationBodyButton",
              onClick: () => {
                fk.options = null, bk()
              },
              children: "Close"
            })
          })]
        })
      }
      const Yk = ek ? "This will only play the range you've set.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes." : "This will play the whole recording from the start.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes.",
        Lk = [{
          id: "withoutUi",
          label: "Without UI",
          description: "Usually cleaner and sharper.",
          selected: !xk,
          disabled: !1,
          disabledReason: null,
          onSelect: () => {
            nk(!1)
          }
        }, {
          id: "withUi",
          label: "With UI",
          description: "Includes HUD elements. May look worse on some devices.",
          selected: xk,
          disabled: !ik,
          disabledReason: Dk,
          onSelect: () => {
            nk(!0)
          }
        }],
        Ck = wk.map((kk => {
          const ek = Uk(kk.id);
          return {
            id: kk.id,
            label: kk.label,
            description: kk.description,
            selected: Mk === kk.id,
            disabled: !ek,
            disabledReason: "Your device doesn't support this format",
            onSelect: () => {
              Kk(kk.id)
            }
          }
        }));
      return (0, Hk.jsxs)("div", {
        className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
        children: [(0, Hk.jsx)("div", {
          className: "PromptPopupNotificationTitle SmallTextBold",
          children: "Export video?"
        }), (0, Hk.jsx)("div", {
          className: "PromptPopupNotificationSubtitle SmallTextLight",
          children: Yk
        }), (0, Hk.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, Hk.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "UI"
          }), (0, Hk.jsx)(pk, {
            cards: Lk
          })]
        }), (0, Hk.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, Hk.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "Format"
          }), (0, Hk.jsx)(pk, {
            cards: Ck
          })]
        }), (0, Hk.jsxs)("div", {
          className: "PromptPopupNotificationBody",
          children: [(0, Hk.jsx)(Pk.r, {
            className: "PromptPopupNotificationBodyButton PromptPopupNotificationBodyPrimaryButton",
            disabled: !yk,
            onClick: () => {
              fk.options = {
                format: Mk,
                includeUi: ik && xk
              }, bk()
            },
            children: "Export"
          }), (0, Hk.jsx)(Pk.R, {
            className: "PromptPopupNotificationBodyButton",
            onClick: () => {
              fk.options = null, bk()
            },
            children: "Cancel"
          })]
        })]
      })
    }));
    var Yk = ik(4799),
      Lk = ik(36586),
      Ck = ik(36595);
    let Ak = null;

    function jk() {
      return function() {
        const kk = (0, Ck.e)();
        for (const {
            group: ek,
            dataAttr: ik
          }
          of Lk.f)
          if (ik && kk[ek]) return !0;
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
    async function sk(kk, ek, ik) {
      return kk ? async function() {
        const kk = await navigator.mediaDevices.getDisplayMedia({
          video: !0,
          audio: !1,
          preferCurrentTab: !0,
          selfBrowserSurface: "include"
        });
        for (const ek of kk.getAudioTracks()) ek.stop(), kk.removeTrack(ek);
        return kk
      }(): ek().captureStream(Math.max(1, Math.round(ik)))
    }
    var dk = ik(38662);
    let Vk = !1;

    function Fk(kk) {
      kk.holdInput(!1), (0, dk.f)(!1)
    }
    async function uk(kk) {
      var ek, ik;
      if ((0, dk.c)() || Vk) return;
      const Sk = kk();
      if (!Sk) return;
      Vk = !0;
      let bk = null;
      const rk = Sk.playbackMarkInTick,
        {
          canIncludeUi: Pk,
          includeUiDisabledReason: mk
        } = jk();
      try {
        bk = await async function(kk) {
          let {
            hasPlaybackMark: ek,
            canIncludeUi: ik,
            includeUiDisabledReason: Dk
          } = kk;
          const Sk = {
              options: null
            },
            bk = fk.NotificationProvider.showCustomPopup({
              body: kk => (0, Hk.jsx)(yk, {
                hasPlaybackMark: ek,
                canIncludeUi: ik,
                includeUiDisabledReason: Dk,
                selectionRef: Sk,
                closePopup: kk
              }),
              disableExitButton: !0,
              disablePressBackgroundToClose: !0,
              unlockPointerKey: "replayVideoExportOptions"
            });
          return "notificationTornDown" === await bk.getResult() ? null : Sk.options
        }({
          hasPlaybackMark: null !== rk,
          canIncludeUi: Pk,
          includeUiDisabledReason: mk
        })
      } finally {
        Vk = !1
      }
      if (!bk) return;
      const Mk = null !== (ek = null === (ik = Sk.startFailure) || void 0 === ik ? void 0 : ik.call(Sk)) && void 0 !== ek ? ek : null;
      if (null !== Mk) return void fk.NotificationProvider.showAlertPopup({
        title: "Video export failed",
        subtitle: Mk
      });
      if (! function(kk) {
          return !(0, dk.c)() && ((0, dk.f)(!0), kk.holdInput(!0), !0)
        }(Sk)) return;
      let Kk = null;
      try {
        Kk = await sk(bk.includeUi, (() => Sk.canvas()), Sk.uF)
      } catch (qk) {
        return console.error("Failed to create video stream for export", qk), Fk(Sk), void fk.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: qk instanceof Error ? qk.message : "Could not start capture."
        })
      }
      let Uk = null;
      const wk = [];
      let lk = null,
        pk = null;
      try {
        var Lk, Ck, uk;
        Uk = Sk.playbackSpeed(), Sk.closeViewer(), Sk.setPlaybackSpeed(1), Sk.pause(), Sk.seekToTick(null !== rk && void 0 !== rk ? rk : 0);
        const kk = await async function() {
          const kk = Yk.Howler.masterGain;
          if (!Yk.Howler.ctx || !kk) return null;
          await Yk.Howler.ctx.resume();
          const ek = Yk.Howler.ctx.createMediaStreamDestination();
          kk.connect(ek), Ak = ek;
          const [ik] = ek.stream.getAudioTracks();
          return null !== ik && void 0 !== ik ? ik : null
        }();
        pk = new MediaStream;
        for (const Dk of Kk.getVideoTracks()) pk.addTrack(Dk);
        kk && pk.addTrack(kk);
        const ek = function(kk) {
          const ek = nk(xk(kk));
          if (!ek) throw new Error(`No MediaRecorder mime type available for ${kk}`);
          return ek
        }(bk.format);
        lk = new MediaRecorder(pk, {
          mimeType: ek,
          videoBitsPerSecond: 8e6
        }), lk.ondataavailable = kk => {
          kk.data.size > 0 && wk.push(kk.data)
        };
        const ik = new Promise((kk => {
          lk.onstop = () => {
            kk()
          }
        }));
        await (null === (Lk = Sk.seekSettled) || void 0 === Lk ? void 0 : Lk.call(Sk));
        const [Pk] = Kk.getVideoTracks();
        lk.start(250), Sk.play();
        const mk = await
        function(kk, ek, ik) {
          return new Promise((Dk => {
            let fk = !1;
            const Sk = kk => {
                fk || (fk = !0, rk(), ek.removeEventListener("ended", bk), Dk(kk))
              },
              bk = () => {
                Sk("captureLost")
              },
              rk = kk.watchPlayback((() => {
                kk.isPlaying() || Sk("completed")
              }));
            ek.addEventListener("ended", bk), ik.onerror = () => {
              Sk("recorderError")
            }, "ended" !== ek.readyState ? kk.isPlaying() || Sk("completed") : Sk("captureLost")
          }))
        }(Sk, Pk, lk);
        if (Sk.pause(), "inactive" !== lk.state && lk.stop(), await ik, "captureLost" === mk) return void fk.NotificationProvider.showAlertPopup({
          title: "Video export stopped",
          subtitle: "Screen sharing ended before the replay finished. Nothing was saved."
        });
        if ("recorderError" === mk) return void fk.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "The recorder encountered an error. Nothing was saved."
        });
        const Mk = null !== (Ck = null === (uk = Sk.playbackFailure) || void 0 === uk ? void 0 : uk.call(Sk)) && void 0 !== Ck ? Ck : null;
        if (null !== Mk) return void fk.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: `${Mk} Nothing was saved.`
        });
        const Hk = new Blob(wk, {
          type: ek
        });
        Hk.size > 0 ? (0, Dk.c)(Hk, function(kk, ek) {
          const ik = function(kk) {
            return "mp4" === kk ? "mp4" : "webm"
          }(ek);
          if (kk) return `${kk.replace(/\.bloxdreplay$/i,"")}.${ik}`;
          return `bloxd-replay-${Date.now()}.${ik}`
        }(Sk.fileName(), bk.format)) : fk.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "No video data was captured. Try again."
        })
      } catch (qk) {
        console.error("Replay video export failed", qk), fk.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: qk instanceof Error ? qk.message : "Something went wrong while exporting."
        })
      } finally {
        if (lk && "inactive" !== lk.state) try {
          lk.stop()
        } catch (qk) {
          console.error("Failed to stop MediaRecorder", qk)
        }! function() {
          const kk = Yk.Howler.masterGain;
          if (Ak && kk) {
            try {
              kk.disconnect(Ak)
            } catch (qk) {
              console.error("Failed to disconnect Howler export tee", qk)
            }
            Ak = null
          } else Ak = null
        }();
        for (const kk of Kk.getTracks()) kk.stop();
        if (pk)
          for (const kk of pk.getTracks()) kk.stop();
        null !== Uk && Sk.setPlaybackSpeed(Uk), Sk.pause(), Fk(Sk), Sk.reopenViewer()
      }
    }
  },
  4799: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      Howl: () => fk.Howl,
      Howler: () => fk.Howler,
      musicOutput: () => wk,
      readyAudioContext: () => lk
    });
    var Dk, fk = ik(4804),
      Sk = ik(3521),
      bk = ik(4583);
    const rk = fk.Howler;

    function Pk() {
      var kk, ek;
      if (rk.ctx || !rk.usingWebAudio || "undefined" === typeof AudioContext || !(0, bk.i)()) return;
      const ik = navigator.audioSession;
      let Dk;
      "auto" === (null === ik || void 0 === ik ? void 0 : ik.type) && (ik.type = "ambient");
      try {
        Dk = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const fk = Dk.createGain();
      fk.gain.setValueAtTime(rk._muted ? 0 : null !== (kk = rk._volume) && void 0 !== kk ? kk : 1, Dk.currentTime), fk.connect(Dk.destination), rk.ctx = Dk, rk.masterGain = fk, null === (ek = rk._setup) || void 0 === ek || ek.call(rk)
    }
    rk._mobileUnloaded = !0;
    const mk = rk.volume.bind(fk.Howler);
    rk.volume = function() {
      return Pk(), mk(...arguments)
    };
    const Mk = rk.mute.bind(fk.Howler);
    rk.mute = kk => (Pk(), Mk(kk));
    const Kk = fk.Howl.prototype,
      xk = Kk.init;

    function nk() {
      for (; rk._html5AudioPool.length < rk.html5PoolSize;) {
        const kk = new Audio;
        kk._unlocked = !0, rk._releaseHtml5Audio(kk)
      }
      for (const ek of rk._howls)
        if (!ek._webAudio)
          for (const ik of ek._getSoundIds()) {
            var kk;
            const Dk = null === (kk = ek._soundById(ik)) || void 0 === kk ? void 0 : kk._node;
            Dk && !Dk._unlocked && (Dk._unlocked = !0, Dk.load())
          }
    }
    Kk.init = function(kk) {
      return Pk(), xk.call(this, kk)
    }, (0, bk.i)() && (rk._unlockAudio = () => {
      const kk = rk.ctx;
      if (rk._audioUnlocked || !kk) return;
      rk.autoUnlock = !1;
      const ek = kk.createBuffer(1, 1, 22050);
      rk._scratchBuffer = ek;
      const ik = new AbortController;
      let Dk = "afterPaint";
      const fk = () => {
          var Dk;
          if (rk._audioUnlocked) return;
          null === (Dk = rk._autoResume) || void 0 === Dk || Dk.call(rk);
          const fk = kk.createBufferSource();
          fk.buffer = ek, fk.connect(kk.destination), fk.start(0), kk.resume().catch((() => {})), fk.onended = () => {
            fk.disconnect(0), rk._audioUnlocked = !0, ik.abort();
            for (const kk of rk._howls) kk._emit("unlock")
          }
        },
        Pk = () => {
          nk(), fk()
        },
        mk = ek => {
          if (nk(), "inTap" === Dk) {
            if ("running" === kk.state) return;
            console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), fk()
          } else "afterPaint" === Dk && (Dk = "queued", (0, Sk.d)(ek.timeStamp, (() => {
            Dk = "inTap", fk()
          })))
        };
      for (const Sk of ["touchstart", "touchend"]) document.addEventListener(Sk, Pk, {
        capture: !0,
        signal: ik.signal
      });
      for (const Sk of bk.e) document.addEventListener(Sk, mk, {
        capture: !0,
        signal: ik.signal
      })
    });
    let Uk = 0;
    const Hk = null === (Dk = rk._autoSuspend) || void 0 === Dk ? void 0 : Dk.bind(fk.Howler);

    function wk() {
      lk();
      const {
        ctx: kk,
        masterGain: ek
      } = rk;
      return kk && ek ? {
        ctx: kk,
        destination: ek,
        holdAwake: kk => {
          var ek, ik;
          (Uk += kk ? 1 : -1, kk) ? null === (ek = rk._autoResume) || void 0 === ek || ek.call(rk): null === (ik = rk._autoSuspend) || void 0 === ik || ik.call(rk)
        },
        wake: () => {
          var ek;
          "running" !== kk.state && (null === (ek = rk._autoResume) || void 0 === ek || ek.call(rk), kk.resume().catch((() => {})))
        }
      } : null
    }

    function lk() {
      var kk;
      (rk.volume(), rk.ctx && rk.autoUnlock) && (null === (kk = rk._unlockAudio) || void 0 === kk || kk.call(rk))
    }
    Hk && (rk._autoSuspend = () => Uk > 0 ? fk.Howler : Hk())
  },
  42183: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Dk,
      f: () => fk
    });
    const Dk = ["recording", "freecam", "keyframe"];

    function fk() {
      const kk = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(kk[1]) << 32n | BigInt(kk[0])
    }
  },
  59994: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      HOLD_TIMEOUT_MS: () => mk,
      ReplayViewer: () => Kk
    });
    var Dk = ik(36539),
      fk = ik(36576),
      Sk = ik(36571),
      bk = ik(36595),
      rk = ik(4735),
      Pk = ik(42183);
    const mk = 1e4,
      Mk = new Set(["AU"]);
    class Kk {
      constructor(kk) {
        var ek;
        this.deps = kk, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (ek = kk.now) && void 0 !== ek ? ek : () => performance.now()
      }
      get inPlayback() {
        return this.playback
      }
      get view() {
        return this.lastView
      }
      get isOpen() {
        return null !== this.lastView && this.lastView.state !== rk.xd.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get XM() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? Dk.e.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(kk, ek) {
        var ik, Sk, bk, Pk;
        const {
          client: mk
        } = this.deps;
        if (!this.playback) {
          if (!mk.setPlayback(!0)) throw new Error(Dk.e.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const Mk = this.epoch;
        let Kk;
        try {
          Kk = await mk.open(kk, (() => (0, fk.b)(kk, ek)))
        } finally {
          this.loadingOpens--
        }
        if (Mk !== this.epoch && "reloading" !== Kk) throw new Error(Dk.e.coreStopped.text);
        if ("opening" !== Kk) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const kk = function(kk) {
            switch (kk) {
              case "reloading":
                return null;
              case "stopped":
              case rk.nd.ModuleTrap:
                return Dk.e.coreStopped;
              case rk.nd.ModuleLoad:
                return Dk.e.viewerLoadFailed;
              case rk.nd.TooLarge:
                return Dk.e.cantOpen
            }
          }(Kk);
          if (null === kk) return;
          throw new Error(kk.text)
        }
        return this.rejectSave(new Error(Dk.e.saveClosed.text)), this.fileName = null !== (ik = null !== (Sk = ek.fileName) && void 0 !== Sk ? Sk : null === (bk = ek.fileHandle) || void 0 === bk ? void 0 : bk.name) && void 0 !== ik ? ik : null, this.fileHandle = null !== (Pk = ek.fileHandle) && void 0 !== Pk ? Pk : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((kk, ek) => {
          this.pendingOpen = {
            resolve: kk,
            reject: ek
          }
        }))
      }
      play() {
        this.holds.has("AU") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("AU")
      }
      seek(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const ik = this.lastView;
        null !== ik && (ek || kk < ik.Px) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(kk, ek)
      }
      setSpeed(kk) {
        this.deps.client.setSpeed(kk)
      }
      setCameraMode(kk) {
        this.deps.client.setCameraMode(kk)
      }
      cycleCameraMode() {
        const kk = this.lastView;
        null !== kk && kk.state !== rk.xd.None && this.setCameraMode(Pk.d[(Pk.d.indexOf(kk.cameraMode) + 1) % Pk.d.length])
      }
      addKeyframe() {
        this.edited(this.deps.client.addKeyframe())
      }
      setKeyframe(kk) {
        this.edited(this.deps.client.setKeyframe(kk))
      }
      moveKeyframe(kk, ek) {
        this.edited(this.deps.client.moveKeyframe(kk, ek))
      }
      deleteKeyframes(kk, ek) {
        this.edited(this.deps.client.deleteKeyframes(kk, ek))
      }
      setMark(kk) {
        this.edited(this.deps.client.setMark(kk))
      }
      crop(kk, ek) {
        return !(ek <= kk) && (null !== this.pendingSave ? (this.deps.notify(Dk.e.saveBusy), !1) : !!this.deps.client.crop(kk, ek) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(Dk.e.saveBusy.text)) : new Promise(((kk, ek) => {
          const ik = {
            resolve: kk,
            reject: ek
          };
          this.pendingSave = ik, this.editsAtSave = this.edits, this.deps.client.save((0, Pk.f)()).then((kk => {
            this.pendingSave === ik && this.saveStarted(kk)
          }), (kk => {
            this.pendingSave === ik && this.rejectSave(kk instanceof Error ? kk : new Error(String(kk)))
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
      markSaved(kk, ek) {
        var ik, Dk;
        this.fileHandle = kk, this.fileName = null !== (ik = null !== (Dk = null === kk || void 0 === kk ? void 0 : kk.name) && void 0 !== Dk ? Dk : ek) && void 0 !== ik ? ik : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(Dk.e.coreStopped.text)), this.rejectSave(new Error(Dk.e.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var kk, ek, ik;
        const Dk = this.deps.client.view(),
          fk = Dk !== this.lastView;
        this.lastView = Dk, this.opening && null !== Dk && Dk.state !== rk.xd.None && Dk.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, bk.f)()), this.cropAsked ? (this.cropAsked = !1, null !== Dk && Dk.state === rk.xd.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== Dk && Dk.state !== rk.xd.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const Sk = 0 === this.settleFrames && 0 === (null !== (kk = null === (ek = (ik = this.deps).meshPending) || void 0 === ek ? void 0 : ek.call(ik)) && void 0 !== kk ? kk : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && Sk && this.release("opening"), this.holds.has("seek") && Sk && this.release("seek"), this.holds.has("crop") && !this.cropRunning && Sk && this.release("crop");
        const Pk = this.now();
        for (const [bk, rk] of this.holds) !Mk.has(bk) && Pk - rk >= mk && this.release(bk);
        this.saveRefused && !this.cropping && this.saveFailed(!1), fk && this.deps.onChange()
      }
      cropped() {
        (0, bk.f)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(kk) {
        switch (kk.reason) {
          case rk.nd.TooLarge:
            break;
          case rk.nd.Open:
          case rk.nd.NothingStaged: {
            this.opening = !1, this.release("opening");
            const ek = (0, Sk.f)(kk.version) ? Dk.e.replayTooOld : Dk.e.cantOpen;
            null === this.pendingOpen && this.deps.notify(ek), this.settleOpen(new Error(ek.text));
            break
          }
          case rk.nd.Crop:
            if (kk.code === rk.md.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(Dk.e.cropFailed);
            break;
          case rk.nd.ModuleTrap:
          case rk.nd.ModuleLoad:
          case rk.nd.Port:
            this.moduleEnded(kk.reason === rk.nd.ModuleTrap ? Dk.e.coreStopped : Dk.e.cantOpen);
            break;
          case rk.nd.NotLive:
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
        const ek = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === ek || void 0 === ek || ek.resolve(kk)
      }
      saveFailed(kk) {
        this.rejectSave(new Error(kk ? Dk.e.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(kk) {
        kk && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(Dk.e.cropBusy.text)) : this.deps.notify(Dk.e.cropBusy)
      }
      resetInFlight() {
        this.opening = !1, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0
      }
      settleOpen(kk) {
        const ek = this.pendingOpen;
        this.pendingOpen = null, null === kk ? null === ek || void 0 === ek || ek.resolve() : null === ek || void 0 === ek || ek.reject(kk)
      }
      rejectSave(kk) {
        const ek = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === ek || void 0 === ek || ek.reject(kk)
      }
      hold(kk) {
        const ek = 0 === this.holds.size;
        this.holds.set(kk, this.now()), ek && this.deps.setHoldDraws(!0)
      }
      release(kk) {
        this.holds.delete(kk) && 0 === this.holds.size && this.deps.setHoldDraws(!1)
      }
      releaseAll() {
        this.holds.size > 0 && (this.holds.clear(), this.deps.setHoldDraws(!1))
      }
    }
  },
  59987: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      MESH_TAIL_MS: () => mk,
      PLAY_START_TIMEOUT_MS: () => rk,
      startWasmReplayVideoExport: () => Kk
    });
    var Dk = ik(38815),
      fk = ik(59994),
      Sk = ik(4735),
      bk = ik(2397);
    const rk = fk.HOLD_TIMEOUT_MS + 5e3,
      Pk = 50,
      mk = 200;

    function Mk(kk) {
      var ek;
      return (null === (ek = kk.view) || void 0 === ek ? void 0 : ek.state) === Sk.xd.Cropping || kk.XM.includes("crop")
    }

    function Kk(kk) {
      return (0, Dk.c)((() => function(kk) {
        var ek, ik, Dk, fk, Kk, xk;
        const nk = kk.viewer(),
          Uk = null !== (ek = null === nk || void 0 === nk ? void 0 : nk.view) && void 0 !== ek ? ek : null,
          Hk = kk.canvas();
        if (!nk || !Uk || Uk.state === Sk.xd.None || 0 === Uk.totalTicks || !Hk || Mk(nk)) return null;
        const wk = null !== (ik = kk.now) && void 0 !== ik ? ik : () => performance.now(),
          lk = nk.id,
          pk = () => {
            const ek = kk.viewer();
            return ek === nk && ek.id === lk && ek.isOpen ? ek : null
          },
          yk = Math.min(null !== (Dk = null === (fk = Uk.mark) || void 0 === fk ? void 0 : fk.outTick) && void 0 !== Dk ? Dk : 1 / 0, Uk.totalTicks - 1);
        let Yk = null,
          Lk = !1;
        const Ck = () => {
          var kk, ek;
          return (null === (kk = pk()) || void 0 === kk || null === (ek = kk.view) || void 0 === ek ? void 0 : ek.state) === Sk.xd.Playing
        };
        return {
          uF: Sk.Kd,
          playbackMarkInTick: null !== (Kk = null === (xk = Uk.mark) || void 0 === xk ? void 0 : xk.inTick) && void 0 !== Kk ? Kk : null,
          startFailure: () => {
            const kk = pk();
            return null === kk ? "Another replay opened. Export it again from there." : Mk(kk) ? "Wait for the crop to finish, then export again." : null
          },
          fileName: () => {
            var kk, ek;
            return null !== (kk = null === (ek = pk()) || void 0 === ek ? void 0 : ek.fileName) && void 0 !== kk ? kk : null
          },
          playbackSpeed: () => {
            var kk, ek, ik;
            return null !== (kk = null === (ek = pk()) || void 0 === ek || null === (ik = ek.view) || void 0 === ik ? void 0 : ik.speed) && void 0 !== kk ? kk : 1
          },
          setPlaybackSpeed: kk => {
            var ek;
            null === (ek = pk()) || void 0 === ek || ek.setSpeed(kk)
          },
          play: () => {
            var kk;
            Lk = !1, Yk = wk(), null === (kk = pk()) || void 0 === kk || kk.play()
          },
          pause: () => {
            var kk;
            null === (kk = pk()) || void 0 === kk || kk.pause()
          },
          seekToTick: kk => {
            var ek;
            null === (ek = pk()) || void 0 === ek || ek.seek(kk, !0)
          },
          seekSettled: () => new Promise((kk => {
            const ek = setInterval((() => {
              const ik = pk();
              null === ik ? (clearInterval(ek), kk()) : ik.XM.includes("seek") || (clearInterval(ek), setTimeout(kk, mk))
            }), Pk)
          })),
          isPlaying: () => {
            var kk, ek, ik;
            return null !== Yk && null !== pk() && (!!Ck() || !Lk && (null !== (kk = null === (ek = pk()) || void 0 === ek || null === (ik = ek.view) || void 0 === ik ? void 0 : ik.Px) && void 0 !== kk ? kk : 0) < yk && wk() - Yk < rk)
          },
          watchPlayback: ek => {
            const ik = kk.watchViewer((() => {
                Lk ||= null !== Yk && Ck(), ek()
              })),
              Dk = setTimeout(ek, rk + 1);
            return () => {
              clearTimeout(Dk), ik()
            }
          },
          playbackFailure: () => {
            var kk, ek;
            const ik = pk();
            return null === ik ? "The replay closed before the video finished." : (null !== (kk = null === (ek = ik.view) || void 0 === ek ? void 0 : ek.Px) && void 0 !== kk ? kk : 0) >= yk ? null : Lk ? "The replay stopped before the video finished." : "The replay didn't start playing."
          },
          canvas: () => Hk,
          closeViewer: () => {
            kk.requestViewer("close")
          },
          reopenViewer: () => {
            kk.requestViewer("open")
          },
          holdInput: bk.d
        }
      }(kk)))
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);