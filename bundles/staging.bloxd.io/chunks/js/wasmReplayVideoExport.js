export const id = 67;
export const ids = [61, 67, 95];
export const modules = {
  37226: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Qt,
      g: () => lt
    });
    var Ot = Vt(710),
      qt = Vt(39),
      Dt = Vt(37182);
    const mt = "replayFileKeptForReload",
      dt = "replayFileKeptForReloadAt",
      jt = "replayFileKeptForReloadTab",
      Ht = 3e5,
      Xt = 5e3;
    async function Qt(tt, et) {
      const Vt = Date.now(),
        Dt = {
          at: Vt,
          bytes: tt,
          source: et
        },
        Ht = await Promise.race([(async () => await qt.c.setItem(dt, Vt) && qt.c.setItem(mt, Dt))(), (0, Ot.G)(Xt).then((() => !1))]);
      Ht || console.warn("The replay file couldn't be kept across the reload into a newer build: the reloaded page asks for it again");
      const Qt = {
        at: Vt,
        hE: Ht
      };
      qt.h.setItem(jt, Qt)
    }
    async function lt() {
      var tt;
      const et = qt.h.getItem(jt);
      null !== et && qt.h.removeItem(jt);
      const Vt = Date.now(),
        Ot = await qt.c.getItem(dt),
        Xt = null !== et && Vt - et.at <= Ht,
        Qt = null !== et && Ot === et.at;
      let lt = null;
      if (null !== Ot && (Qt || ("number" !== typeof Ot || Vt - Ot > Ht)) && (lt = Xt && Qt && et.hE ? await qt.c.getItem(mt) : null, await Promise.all([qt.c.removeItem(dt), qt.c.removeItem(mt)])), !Xt) return null;
      if ((null === (tt = lt) || void 0 === tt ? void 0 : tt.at) !== et.at) throw new Error(Dt.d.replayNotKept.text);
      return {
        bytes: lt.bytes,
        source: lt.source
      }
    }
  },
  37220: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Ot,
      g: () => Dt,
      j: () => qt
    });
    const Ot = [9];

    function qt(tt) {
      return Ot.includes(tt)
    }

    function Dt(tt) {
      return null !== tt && tt >= 3 && tt < Ot[0]
    }
  },
  37182: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => mt,
      f: () => Ht,
      j: () => jt
    });
    var Ot = Vt(31);
    const qt = 1500,
      Dt = 1e3,
      mt = {
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
      dt = new Set(Object.values(mt).filter((tt => "Error" === tt.type)).map((tt => tt.text)));

    function jt(tt) {
      return tt instanceof Error && dt.has(tt.message) ? tt.message : void 0
    }

    function Ht(tt) {
      var et;
      const Vt = null !== (et = tt.timeoutMs) && void 0 !== et ? et : "Error" === tt.type ? qt : Dt;
      Ot.j.sw("showBottomMessage", {
        message: tt.text,
        timeoutLength: Vt,
        type: tt.type
      })
    }
  },
  37238: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Ot,
      g: () => qt
    });
    const Ot = "data-replay-ui-active",
      qt = [{
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
  37243: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Ht,
      g: () => Qt,
      i: () => Xt
    });
    var Ot = Vt(26),
      qt = Vt(31),
      Dt = Vt(37238);

    function mt() {
      const tt = {};
      for (const {
          group: et
        }
        of Dt.g) tt[et] = !0;
      return tt
    }
    let dt = mt();

    function jt() {
      qt.j.sw("replayViewer|uiVisibilityChanged")
    }

    function Ht() {
      return dt
    }

    function Xt(tt, et) {
      dt[tt] !== et && (dt = {
        ...dt,
        [tt]: et
      }, "nametag" === tt && Ot.b.set({
        areNametagsHidden: !et
      }), jt())
    }

    function Qt() {
      dt = mt(), Ot.b.set({
        areNametagsHidden: !1
      }), jt()
    }
  },
  39453: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Rt
    });
    var Ot = Vt(1842),
      qt = Vt(1450),
      Dt = Vt(63),
      mt = Vt(1140),
      dt = Vt.n(mt),
      jt = Vt(1556),
      Ht = Vt(106);
    const Xt = ["video/webm;codecs=vp9,opus", "video/webm;codecs=vp8,opus", "video/webm;codecs=vp9", "video/webm;codecs=vp8", "video/webm"],
      Qt = ["video/mp4;codecs=avc1,mp4a.40.2", "video/mp4;codecs=avc1.42E01E,mp4a.40.2", "video/mp4;codecs=avc1", "video/mp4"];

    function lt(tt) {
      return "webm" === tt ? Xt : Qt
    }

    function Et(tt) {
      for (const et of tt)
        if ("undefined" !== typeof MediaRecorder && MediaRecorder.isTypeSupported(et)) return et;
      return null
    }

    function ft(tt) {
      return null !== Et(lt(tt))
    }
    var wt = Vt(1188);
    const yt = [{
      id: "webm",
      label: "WebM",
      description: "Usually less screen tearing, but may not play in all media players."
    }, {
      id: "mp4",
      label: "MP4",
      description: "Works in more players, but may show graphical glitches on some devices."
    }];

    function Nt() {
      return ft("webm") ? "webm" : ft("mp4") ? "mp4" : "webm"
    }

    function Mt(tt) {
      let {
        cards: et
      } = tt;
      return (0, wt.jsx)("div", {
        className: "ReplayVideoExportOptionCards",
        children: et.map((tt => (0, wt.jsxs)("div", {
          className: "ReplayVideoExportOptionColumn",
          children: [(0, wt.jsx)("div", {
            className: dt()("ReplayVideoExportOptionCard", {
              Selected: tt.selected,
              Disabled: tt.disabled
            }),
            onClick: () => {
              tt.disabled || tt.onSelect()
            },
            children: (0, wt.jsxs)("div", {
              className: "ReplayVideoExportOptionCardBody",
              children: [(0, wt.jsx)("div", {
                className: "ReplayVideoExportOptionCardLabel",
                children: tt.label
              }), (0, wt.jsx)("div", {
                className: "ReplayVideoExportOptionCardDescription",
                children: tt.description
              })]
            })
          }), tt.disabled && tt.disabledReason && (0, wt.jsx)("div", {
            className: "ReplayVideoExportOptionError SmallTextLight",
            children: tt.disabledReason
          })]
        }, tt.id)))
      })
    }
    const bt = (0, Dt.memo)((function(tt) {
      let {
        hasPlaybackMark: et,
        canIncludeUi: Vt,
        includeUiDisabledReason: Ot,
        selectionRef: qt,
        closePopup: mt
      } = tt;
      const dt = ft("webm") || ft("mp4"),
        [Xt, Qt] = (0, Dt.useState)(Nt),
        [lt, Et] = (0, Dt.useState)(Vt),
        bt = dt && ft(Xt);
      if (!dt) {
        const tt = (0, Ht.isMobile)() ? "screen recording" : "OBS";
        return (0, wt.jsxs)("div", {
          className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
          children: [(0, wt.jsx)("div", {
            className: "PromptPopupNotificationTitle SmallTextBold",
            children: "Can't export video"
          }), (0, wt.jsx)("div", {
            className: "PromptPopupNotificationSubtitle SmallTextLight",
            children: `Your device does not support exporting. Try recording with an external software like ${tt}.`
          }), (0, wt.jsx)("div", {
            className: "PromptPopupNotificationBody",
            children: (0, wt.jsx)(jt.G, {
              className: "PromptPopupNotificationBodyButton",
              onClick: () => {
                qt.options = null, mt()
              },
              children: "Close"
            })
          })]
        })
      }
      const Jt = et ? "This will only play the range you've set.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes." : "This will play the whole recording from the start.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes.",
        Ct = [{
          id: "withoutUi",
          label: "Without UI",
          description: "Usually cleaner and sharper.",
          selected: !lt,
          disabled: !1,
          disabledReason: null,
          onSelect: () => {
            Et(!1)
          }
        }, {
          id: "withUi",
          label: "With UI",
          description: "Includes HUD elements. May look worse on some devices.",
          selected: lt,
          disabled: !Vt,
          disabledReason: Ot,
          onSelect: () => {
            Et(!0)
          }
        }],
        ut = yt.map((tt => {
          const et = ft(tt.id);
          return {
            id: tt.id,
            label: tt.label,
            description: tt.description,
            selected: Xt === tt.id,
            disabled: !et,
            disabledReason: "Your device doesn't support this format",
            onSelect: () => {
              Qt(tt.id)
            }
          }
        }));
      return (0, wt.jsxs)("div", {
        className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
        children: [(0, wt.jsx)("div", {
          className: "PromptPopupNotificationTitle SmallTextBold",
          children: "Export video?"
        }), (0, wt.jsx)("div", {
          className: "PromptPopupNotificationSubtitle SmallTextLight",
          children: Jt
        }), (0, wt.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, wt.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "UI"
          }), (0, wt.jsx)(Mt, {
            cards: Ct
          })]
        }), (0, wt.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, wt.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "Format"
          }), (0, wt.jsx)(Mt, {
            cards: ut
          })]
        }), (0, wt.jsxs)("div", {
          className: "PromptPopupNotificationBody",
          children: [(0, wt.jsx)(jt.m, {
            className: "PromptPopupNotificationBodyButton PromptPopupNotificationBodyPrimaryButton",
            disabled: !bt,
            onClick: () => {
              qt.options = {
                format: Xt,
                includeUi: Vt && lt
              }, mt()
            },
            children: "Export"
          }), (0, wt.jsx)(jt.G, {
            className: "PromptPopupNotificationBodyButton",
            onClick: () => {
              qt.options = null, mt()
            },
            children: "Cancel"
          })]
        })]
      })
    }));
    var Jt = Vt(5030),
      Ct = Vt(37238),
      ut = Vt(37243);
    let Kt = null;

    function ht() {
      return function() {
        const tt = (0, ut.e)();
        for (const {
            group: et,
            dataAttr: Vt
          }
          of Ct.g)
          if (Vt && tt[et]) return !0;
        return !1
      }() ? function() {
        var tt;
        return "function" === typeof(null === (tt = navigator.mediaDevices) || void 0 === tt ? void 0 : tt.getDisplayMedia)
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
    async function vt(tt, et, Vt) {
      return tt ? async function() {
        const tt = await navigator.mediaDevices.getDisplayMedia({
          video: !0,
          audio: !1,
          preferCurrentTab: !0,
          selfBrowserSurface: "include"
        });
        for (const et of tt.getAudioTracks()) et.stop(), tt.removeTrack(et);
        return tt
      }(): et().captureStream(Math.max(1, Math.round(Vt)))
    }
    var Wt = Vt(39288);
    let St = !1;

    function ct(tt) {
      tt.holdInput(!1), (0, Wt.g)(!1)
    }
    async function Rt(tt) {
      var et, Vt;
      if ((0, Wt.c)() || St) return;
      const Dt = tt();
      if (!Dt) return;
      St = !0;
      let mt = null;
      const dt = Dt.playbackMarkInTick,
        {
          canIncludeUi: jt,
          includeUiDisabledReason: Ht
        } = ht();
      try {
        mt = await async function(tt) {
          let {
            hasPlaybackMark: et,
            canIncludeUi: Vt,
            includeUiDisabledReason: Ot
          } = tt;
          const Dt = {
              options: null
            },
            mt = qt.NotificationProvider.showCustomPopup({
              body: tt => (0, wt.jsx)(bt, {
                hasPlaybackMark: et,
                canIncludeUi: Vt,
                includeUiDisabledReason: Ot,
                selectionRef: Dt,
                closePopup: tt
              }),
              disableExitButton: !0,
              disablePressBackgroundToClose: !0,
              unlockPointerKey: "replayVideoExportOptions"
            });
          return "notificationTornDown" === await mt.getResult() ? null : Dt.options
        }({
          hasPlaybackMark: null !== dt,
          canIncludeUi: jt,
          includeUiDisabledReason: Ht
        })
      } finally {
        St = !1
      }
      if (!mt) return;
      const Xt = null !== (et = null === (Vt = Dt.startFailure) || void 0 === Vt ? void 0 : Vt.call(Dt)) && void 0 !== et ? et : null;
      if (null !== Xt) return void qt.NotificationProvider.showAlertPopup({
        title: "Video export failed",
        subtitle: Xt
      });
      if (! function(tt) {
          return !(0, Wt.c)() && ((0, Wt.g)(!0), tt.holdInput(!0), !0)
        }(Dt)) return;
      let Qt = null;
      try {
        Qt = await vt(mt.includeUi, (() => Dt.canvas()), Dt.bI)
      } catch (It) {
        return console.error("Failed to create video stream for export", It), ct(Dt), void qt.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: It instanceof Error ? It.message : "Could not start capture."
        })
      }
      let ft = null;
      const yt = [];
      let Nt = null,
        Mt = null;
      try {
        var Ct, ut, Rt;
        ft = Dt.playbackSpeed(), Dt.closeViewer(), Dt.setPlaybackSpeed(1), Dt.pause(), Dt.seekToTick(null !== dt && void 0 !== dt ? dt : 0);
        const tt = await async function() {
          const tt = Jt.Howler.masterGain;
          if (!Jt.Howler.ctx || !tt) return null;
          await Jt.Howler.ctx.resume();
          const et = Jt.Howler.ctx.createMediaStreamDestination();
          tt.connect(et), Kt = et;
          const [Vt] = et.stream.getAudioTracks();
          return null !== Vt && void 0 !== Vt ? Vt : null
        }();
        Mt = new MediaStream;
        for (const Ot of Qt.getVideoTracks()) Mt.addTrack(Ot);
        tt && Mt.addTrack(tt);
        const et = function(tt) {
          const et = Et(lt(tt));
          if (!et) throw new Error(`No MediaRecorder mime type available for ${tt}`);
          return et
        }(mt.format);
        Nt = new MediaRecorder(Mt, {
          mimeType: et,
          videoBitsPerSecond: 8e6
        }), Nt.ondataavailable = tt => {
          tt.data.size > 0 && yt.push(tt.data)
        };
        const Vt = new Promise((tt => {
          Nt.onstop = () => {
            tt()
          }
        }));
        await (null === (Ct = Dt.seekSettled) || void 0 === Ct ? void 0 : Ct.call(Dt));
        const [jt] = Qt.getVideoTracks();
        Nt.start(250), Dt.play();
        const Ht = await
        function(tt, et, Vt) {
          return new Promise((Ot => {
            let qt = !1;
            const Dt = tt => {
                qt || (qt = !0, dt(), et.removeEventListener("ended", mt), Ot(tt))
              },
              mt = () => {
                Dt("captureLost")
              },
              dt = tt.watchPlayback((() => {
                tt.isPlaying() || Dt("completed")
              }));
            et.addEventListener("ended", mt), Vt.onerror = () => {
              Dt("recorderError")
            }, "ended" !== et.readyState ? tt.isPlaying() || Dt("completed") : Dt("captureLost")
          }))
        }(Dt, jt, Nt);
        if (Dt.pause(), "inactive" !== Nt.state && Nt.stop(), await Vt, "captureLost" === Ht) return void qt.NotificationProvider.showAlertPopup({
          title: "Video export stopped",
          subtitle: "Screen sharing ended before the replay finished. Nothing was saved."
        });
        if ("recorderError" === Ht) return void qt.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "The recorder encountered an error. Nothing was saved."
        });
        const Xt = null !== (ut = null === (Rt = Dt.playbackFailure) || void 0 === Rt ? void 0 : Rt.call(Dt)) && void 0 !== ut ? ut : null;
        if (null !== Xt) return void qt.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: `${Xt} Nothing was saved.`
        });
        const wt = new Blob(yt, {
          type: et
        });
        wt.size > 0 ? (0, Ot.c)(wt, function(tt, et) {
          const Vt = function(tt) {
            return "mp4" === tt ? "mp4" : "webm"
          }(et);
          if (tt) return `${tt.replace(/\.bloxdreplay$/i,"")}.${Vt}`;
          return `bloxd-replay-${Date.now()}.${Vt}`
        }(Dt.fileName(), mt.format)) : qt.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "No video data was captured. Try again."
        })
      } catch (It) {
        console.error("Replay video export failed", It), qt.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: It instanceof Error ? It.message : "Something went wrong while exporting."
        })
      } finally {
        if (Nt && "inactive" !== Nt.state) try {
          Nt.stop()
        } catch (It) {
          console.error("Failed to stop MediaRecorder", It)
        }! function() {
          const tt = Jt.Howler.masterGain;
          if (Kt && tt) {
            try {
              tt.disconnect(Kt)
            } catch (It) {
              console.error("Failed to disconnect Howler export tee", It)
            }
            Kt = null
          } else Kt = null
        }();
        for (const tt of Qt.getTracks()) tt.stop();
        if (Mt)
          for (const tt of Mt.getTracks()) tt.stop();
        null !== ft && Dt.setPlaybackSpeed(ft), Dt.pause(), ct(Dt), Dt.reopenViewer()
      }
    }
  },
  5030: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      Howl: () => qt.Howl,
      Howler: () => qt.Howler,
      musicOutput: () => yt,
      readyAudioContext: () => Nt
    });
    var Ot, qt = Vt(5036),
      Dt = Vt(3510),
      mt = Vt(4796);
    const dt = qt.Howler;

    function jt() {
      var tt, et;
      if (dt.ctx || !dt.usingWebAudio || "undefined" === typeof AudioContext || !(0, mt.e)()) return;
      const Vt = navigator.audioSession;
      let Ot;
      "auto" === (null === Vt || void 0 === Vt ? void 0 : Vt.type) && (Vt.type = "ambient");
      try {
        Ot = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const qt = Ot.createGain();
      qt.gain.setValueAtTime(dt._muted ? 0 : null !== (tt = dt._volume) && void 0 !== tt ? tt : 1, Ot.currentTime), qt.connect(Ot.destination), dt.ctx = Ot, dt.masterGain = qt, null === (et = dt._setup) || void 0 === et || et.call(dt)
    }
    dt._mobileUnloaded = !0;
    const Ht = dt.volume.bind(qt.Howler);
    dt.volume = function() {
      return jt(), Ht(...arguments)
    };
    const Xt = dt.mute.bind(qt.Howler);
    dt.mute = tt => (jt(), Xt(tt));
    const Qt = qt.Howl.prototype,
      lt = Qt.init;

    function Et() {
      for (; dt._html5AudioPool.length < dt.html5PoolSize;) {
        const tt = new Audio;
        tt._unlocked = !0, dt._releaseHtml5Audio(tt)
      }
      for (const et of dt._howls)
        if (!et._webAudio)
          for (const Vt of et._getSoundIds()) {
            var tt;
            const Ot = null === (tt = et._soundById(Vt)) || void 0 === tt ? void 0 : tt._node;
            Ot && !Ot._unlocked && (Ot._unlocked = !0, Ot.load())
          }
    }
    Qt.init = function(tt) {
      return jt(), lt.call(this, tt)
    }, (0, mt.e)() && (dt._unlockAudio = () => {
      const tt = dt.ctx;
      if (dt._audioUnlocked || !tt) return;
      dt.autoUnlock = !1;
      const et = tt.createBuffer(1, 1, 22050);
      dt._scratchBuffer = et;
      const Vt = new AbortController;
      let Ot = "afterPaint";
      const qt = () => {
          var Ot;
          if (dt._audioUnlocked) return;
          null === (Ot = dt._autoResume) || void 0 === Ot || Ot.call(dt);
          const qt = tt.createBufferSource();
          qt.buffer = et, qt.connect(tt.destination), qt.start(0), tt.resume().catch((() => {})), qt.onended = () => {
            qt.disconnect(0), dt._audioUnlocked = !0, Vt.abort();
            for (const tt of dt._howls) tt._emit("unlock")
          }
        },
        jt = () => {
          Et(), qt()
        },
        Ht = et => {
          if (Et(), "inTap" === Ot) {
            if ("running" === tt.state) return;
            console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), qt()
          } else "afterPaint" === Ot && (Ot = "queued", (0, Dt.d)(et.timeStamp, (() => {
            Ot = "inTap", qt()
          })))
        };
      for (const Dt of ["touchstart", "touchend"]) document.addEventListener(Dt, jt, {
        capture: !0,
        signal: Vt.signal
      });
      for (const Dt of mt.b) document.addEventListener(Dt, Ht, {
        capture: !0,
        signal: Vt.signal
      })
    });
    let ft = 0;
    const wt = null === (Ot = dt._autoSuspend) || void 0 === Ot ? void 0 : Ot.bind(qt.Howler);

    function yt() {
      Nt();
      const {
        ctx: tt,
        masterGain: et
      } = dt;
      return tt && et ? {
        ctx: tt,
        destination: et,
        holdAwake: tt => {
          var et, Vt;
          (ft += tt ? 1 : -1, tt) ? null === (et = dt._autoResume) || void 0 === et || et.call(dt): null === (Vt = dt._autoSuspend) || void 0 === Vt || Vt.call(dt)
        },
        wake: () => {
          var et;
          "running" !== tt.state && (null === (et = dt._autoResume) || void 0 === et || et.call(dt), tt.resume().catch((() => {})))
        }
      } : null
    }

    function Nt() {
      var tt;
      (dt.volume(), dt.ctx && dt.autoUnlock) && (null === (tt = dt._unlockAudio) || void 0 === tt || tt.call(dt))
    }
    wt && (dt._autoSuspend = () => ft > 0 ? qt.Howler : wt())
  },
  42829: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Ot,
      c: () => qt
    });
    const Ot = ["recording", "freecam", "keyframe"];

    function qt() {
      const tt = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(tt[1]) << 32n | BigInt(tt[0])
    }
  },
  60845: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      HOLD_TIMEOUT_MS: () => Ht,
      ReplayViewer: () => Qt
    });
    var Ot = Vt(37182),
      qt = Vt(37226),
      Dt = Vt(37220),
      mt = Vt(37243),
      dt = Vt(4960),
      jt = Vt(42829);
    const Ht = 1e4,
      Xt = new Set(["YE"]);
    class Qt {
      constructor(tt) {
        var et;
        this.deps = tt, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (et = tt.now) && void 0 !== et ? et : () => performance.now()
      }
      get inPlayback() {
        return this.playback
      }
      get view() {
        return this.lastView
      }
      get isOpen() {
        return null !== this.lastView && this.lastView.state !== dt.wd.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get Pd() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? Ot.d.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(tt, et) {
        var Vt, Dt, mt, jt;
        const {
          client: Ht
        } = this.deps;
        if (!this.playback) {
          if (!Ht.setPlayback(!0)) throw new Error(Ot.d.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const Xt = this.epoch;
        let Qt;
        try {
          Qt = await Ht.open(tt, (() => (0, qt.c)(tt, et)))
        } finally {
          this.loadingOpens--
        }
        if (Xt !== this.epoch && "reloading" !== Qt) throw new Error(Ot.d.coreStopped.text);
        if ("opening" !== Qt) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const tt = function(tt) {
            switch (tt) {
              case "reloading":
                return null;
              case "stopped":
              case dt.md.ModuleTrap:
                return Ot.d.coreStopped;
              case dt.md.ModuleLoad:
                return Ot.d.viewerLoadFailed;
              case dt.md.TooLarge:
                return Ot.d.cantOpen
            }
          }(Qt);
          if (null === tt) return;
          throw new Error(tt.text)
        }
        return this.rejectSave(new Error(Ot.d.saveClosed.text)), this.fileName = null !== (Vt = null !== (Dt = et.fileName) && void 0 !== Dt ? Dt : null === (mt = et.fileHandle) || void 0 === mt ? void 0 : mt.name) && void 0 !== Vt ? Vt : null, this.fileHandle = null !== (jt = et.fileHandle) && void 0 !== jt ? jt : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((tt, et) => {
          this.pendingOpen = {
            resolve: tt,
            reject: et
          }
        }))
      }
      play() {
        this.holds.has("YE") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("YE")
      }
      seek(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Vt = this.lastView;
        null !== Vt && (et || tt < Vt.BQ) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(tt, et)
      }
      setSpeed(tt) {
        this.deps.client.setSpeed(tt)
      }
      setCameraMode(tt) {
        this.deps.client.setCameraMode(tt)
      }
      cycleCameraMode() {
        const tt = this.lastView;
        null !== tt && tt.state !== dt.wd.None && this.setCameraMode(jt.b[(jt.b.indexOf(tt.cameraMode) + 1) % jt.b.length])
      }
      addKeyframe() {
        this.edited(this.deps.client.addKeyframe())
      }
      setKeyframe(tt) {
        this.edited(this.deps.client.setKeyframe(tt))
      }
      moveKeyframe(tt, et) {
        this.edited(this.deps.client.moveKeyframe(tt, et))
      }
      deleteKeyframes(tt, et) {
        this.edited(this.deps.client.deleteKeyframes(tt, et))
      }
      setMark(tt) {
        this.edited(this.deps.client.setMark(tt))
      }
      crop(tt, et) {
        return !(et <= tt) && (null !== this.pendingSave ? (this.deps.notify(Ot.d.saveBusy), !1) : !!this.deps.client.crop(tt, et) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(Ot.d.saveBusy.text)) : new Promise(((tt, et) => {
          const Vt = {
            resolve: tt,
            reject: et
          };
          this.pendingSave = Vt, this.editsAtSave = this.edits, this.deps.client.save((0, jt.c)()).then((tt => {
            this.pendingSave === Vt && this.saveStarted(tt)
          }), (tt => {
            this.pendingSave === Vt && this.rejectSave(tt instanceof Error ? tt : new Error(String(tt)))
          }))
        }))
      }
      saveStarted(tt) {
        switch (tt) {
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
      markSaved(tt, et) {
        var Vt, Ot;
        this.fileHandle = tt, this.fileName = null !== (Vt = null !== (Ot = null === tt || void 0 === tt ? void 0 : tt.name) && void 0 !== Ot ? Ot : et) && void 0 !== Vt ? Vt : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(Ot.d.coreStopped.text)), this.rejectSave(new Error(Ot.d.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var tt, et, Vt;
        const Ot = this.deps.client.view(),
          qt = Ot !== this.lastView;
        this.lastView = Ot, this.opening && null !== Ot && Ot.state !== dt.wd.None && Ot.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, mt.g)()), this.cropAsked ? (this.cropAsked = !1, null !== Ot && Ot.state === dt.wd.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== Ot && Ot.state !== dt.wd.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const Dt = 0 === this.settleFrames && 0 === (null !== (tt = null === (et = (Vt = this.deps).meshPending) || void 0 === et ? void 0 : et.call(Vt)) && void 0 !== tt ? tt : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && Dt && this.release("opening"), this.holds.has("seek") && Dt && this.release("seek"), this.holds.has("crop") && !this.cropRunning && Dt && this.release("crop");
        const jt = this.now();
        for (const [mt, dt] of this.holds) !Xt.has(mt) && jt - dt >= Ht && this.release(mt);
        this.saveRefused && !this.cropping && this.saveFailed(!1), qt && this.deps.onChange()
      }
      cropped() {
        (0, mt.g)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(tt) {
        switch (tt.reason) {
          case dt.md.TooLarge:
            break;
          case dt.md.Open:
          case dt.md.NothingStaged: {
            this.opening = !1, this.release("opening");
            const et = (0, Dt.g)(tt.version) ? Ot.d.replayTooOld : Ot.d.cantOpen;
            null === this.pendingOpen && this.deps.notify(et), this.settleOpen(new Error(et.text));
            break
          }
          case dt.md.Crop:
            if (tt.code === dt.ld.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(Ot.d.cropFailed);
            break;
          case dt.md.ModuleTrap:
          case dt.md.ModuleLoad:
          case dt.md.Port:
            this.moduleEnded(tt.reason === dt.md.ModuleTrap ? Ot.d.coreStopped : Ot.d.cantOpen);
            break;
          case dt.md.NotLive:
            console.warn("[bloxd-wasm-client] the core refused a recorder command in playback");
            break;
          default:
            console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${tt.reason})`), this.seekAsked = !1, this.release("seek")
        }
        this.deps.onChange()
      }
      moduleEnded(tt) {
        this.resetInFlight(), this.release("opening"), this.release("seek"), this.release("crop"), null === this.pendingOpen && this.deps.notify(tt), this.settleOpen(new Error(tt.text))
      }
      saveDone(tt) {
        const et = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === et || void 0 === et || et.resolve(tt)
      }
      saveFailed(tt) {
        this.rejectSave(new Error(tt ? Ot.d.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(tt) {
        tt && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(Ot.d.cropBusy.text)) : this.deps.notify(Ot.d.cropBusy)
      }
      resetInFlight() {
        this.opening = !1, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0
      }
      settleOpen(tt) {
        const et = this.pendingOpen;
        this.pendingOpen = null, null === tt ? null === et || void 0 === et || et.resolve() : null === et || void 0 === et || et.reject(tt)
      }
      rejectSave(tt) {
        const et = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === et || void 0 === et || et.reject(tt)
      }
      hold(tt) {
        const et = 0 === this.holds.size;
        this.holds.set(tt, this.now()), et && this.deps.setHoldDraws(!0)
      }
      release(tt) {
        this.holds.delete(tt) && 0 === this.holds.size && this.deps.setHoldDraws(!1)
      }
      releaseAll() {
        this.holds.size > 0 && (this.holds.clear(), this.deps.setHoldDraws(!1))
      }
    }
  },
  60843: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      MESH_TAIL_MS: () => Ht,
      PLAY_START_TIMEOUT_MS: () => dt,
      startWasmReplayVideoExport: () => Qt
    });
    var Ot = Vt(39453),
      qt = Vt(60845),
      Dt = Vt(4960),
      mt = Vt(2471);
    const dt = qt.HOLD_TIMEOUT_MS + 5e3,
      jt = 50,
      Ht = 200;

    function Xt(tt) {
      var et;
      return (null === (et = tt.view) || void 0 === et ? void 0 : et.state) === Dt.wd.Cropping || tt.Pd.includes("crop")
    }

    function Qt(tt) {
      return (0, Ot.b)((() => function(tt) {
        var et, Vt, Ot, qt, Qt, lt;
        const Et = tt.viewer(),
          ft = null !== (et = null === Et || void 0 === Et ? void 0 : Et.view) && void 0 !== et ? et : null,
          wt = tt.canvas();
        if (!Et || !ft || ft.state === Dt.wd.None || 0 === ft.totalTicks || !wt || Xt(Et)) return null;
        const yt = null !== (Vt = tt.now) && void 0 !== Vt ? Vt : () => performance.now(),
          Nt = Et.id,
          Mt = () => {
            const et = tt.viewer();
            return et === Et && et.id === Nt && et.isOpen ? et : null
          },
          bt = Math.min(null !== (Ot = null === (qt = ft.mark) || void 0 === qt ? void 0 : qt.outTick) && void 0 !== Ot ? Ot : 1 / 0, ft.totalTicks - 1);
        let Jt = null,
          Ct = !1;
        const ut = () => {
          var tt, et;
          return (null === (tt = Mt()) || void 0 === tt || null === (et = tt.view) || void 0 === et ? void 0 : et.state) === Dt.wd.Playing
        };
        return {
          bI: Dt.Id,
          playbackMarkInTick: null !== (Qt = null === (lt = ft.mark) || void 0 === lt ? void 0 : lt.inTick) && void 0 !== Qt ? Qt : null,
          startFailure: () => {
            const tt = Mt();
            return null === tt ? "Another replay opened. Export it again from there." : Xt(tt) ? "Wait for the crop to finish, then export again." : null
          },
          fileName: () => {
            var tt, et;
            return null !== (tt = null === (et = Mt()) || void 0 === et ? void 0 : et.fileName) && void 0 !== tt ? tt : null
          },
          playbackSpeed: () => {
            var tt, et, Vt;
            return null !== (tt = null === (et = Mt()) || void 0 === et || null === (Vt = et.view) || void 0 === Vt ? void 0 : Vt.speed) && void 0 !== tt ? tt : 1
          },
          setPlaybackSpeed: tt => {
            var et;
            null === (et = Mt()) || void 0 === et || et.setSpeed(tt)
          },
          play: () => {
            var tt;
            Ct = !1, Jt = yt(), null === (tt = Mt()) || void 0 === tt || tt.play()
          },
          pause: () => {
            var tt;
            null === (tt = Mt()) || void 0 === tt || tt.pause()
          },
          seekToTick: tt => {
            var et;
            null === (et = Mt()) || void 0 === et || et.seek(tt, !0)
          },
          seekSettled: () => new Promise((tt => {
            const et = setInterval((() => {
              const Vt = Mt();
              null === Vt ? (clearInterval(et), tt()) : Vt.Pd.includes("seek") || (clearInterval(et), setTimeout(tt, Ht))
            }), jt)
          })),
          isPlaying: () => {
            var tt, et, Vt;
            return null !== Jt && null !== Mt() && (!!ut() || !Ct && (null !== (tt = null === (et = Mt()) || void 0 === et || null === (Vt = et.view) || void 0 === Vt ? void 0 : Vt.BQ) && void 0 !== tt ? tt : 0) < bt && yt() - Jt < dt)
          },
          watchPlayback: et => {
            const Vt = tt.watchViewer((() => {
                Ct ||= null !== Jt && ut(), et()
              })),
              Ot = setTimeout(et, dt + 1);
            return () => {
              clearTimeout(Ot), Vt()
            }
          },
          playbackFailure: () => {
            var tt, et;
            const Vt = Mt();
            return null === Vt ? "The replay closed before the video finished." : (null !== (tt = null === (et = Vt.view) || void 0 === et ? void 0 : et.BQ) && void 0 !== tt ? tt : 0) >= bt ? null : Ct ? "The replay stopped before the video finished." : "The replay didn't start playing."
          },
          canvas: () => wt,
          closeViewer: () => {
            tt.requestViewer("close")
          },
          reopenViewer: () => {
            tt.requestViewer("open")
          },
          holdInput: mt.g
        }
      }(tt)))
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);