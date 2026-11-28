export const id = 79;
export const ids = [73, 79, 110];
export const modules = {
  38521: (dd, Od, md) => {
    md.d(Od, {
      e: () => td,
      h: () => od
    });
    var Wd = md(701),
      Fd = md(46),
      Rd = md(38483);
    const Xd = "replayFileKeptForReload",
      Kd = "replayFileKeptForReloadAt",
      hd = "replayFileKeptForReloadTab",
      vd = 3e5,
      Qd = 5e3;
    async function td(dd, Od) {
      const md = Date.now(),
        Rd = {
          at: md,
          bytes: dd,
          source: Od
        },
        vd = await Promise.race([(async () => await Fd.h.setItem(Kd, md) && Fd.h.setItem(Xd, Rd))(), (0, Wd.S)(Qd).then((() => !1))]);
      vd || console.warn("The replay file couldn't be kept across the reload into a newer build: the reloaded page asks for it again");
      const td = {
        at: md,
        kQ: vd
      };
      Fd.o.setItem(hd, td)
    }
    async function od() {
      var dd;
      const Od = Fd.o.getItem(hd);
      null !== Od && Fd.o.removeItem(hd);
      const md = Date.now(),
        Wd = await Fd.h.getItem(Kd),
        Qd = null !== Od && md - Od.at <= vd,
        td = null !== Od && Wd === Od.at;
      let od = null;
      if (null !== Wd && (td || ("number" !== typeof Wd || md - Wd > vd)) && (od = Qd && td && Od.kQ ? await Fd.h.getItem(Xd) : null, await Promise.all([Fd.h.removeItem(Kd), Fd.h.removeItem(Xd)])), !Qd) return null;
      if ((null === (dd = od) || void 0 === dd ? void 0 : dd.at) !== Od.at) throw new Error(Rd.c.replayNotKept.text);
      return {
        bytes: od.bytes,
        source: od.source
      }
    }
  },
  38517: (dd, Od, md) => {
    md.d(Od, {
      c: () => Wd,
      f: () => Rd,
      g: () => Fd
    });
    const Wd = [9];

    function Fd(dd) {
      return Wd.includes(dd)
    }

    function Rd(dd) {
      return null !== dd && dd >= 3 && dd < Wd[0]
    }
  },
  38483: (dd, Od, md) => {
    md.d(Od, {
      c: () => Xd,
      e: () => vd,
      i: () => hd
    });
    var Wd = md(32);
    const Fd = 1500,
      Rd = 1e3,
      Xd = {
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
      Kd = new Set(Object.values(Xd).filter((dd => "Error" === dd.type)).map((dd => dd.text)));

    function hd(dd) {
      return dd instanceof Error && Kd.has(dd.message) ? dd.message : void 0
    }

    function vd(dd) {
      var Od;
      const md = null !== (Od = dd.timeoutMs) && void 0 !== Od ? Od : "Error" === dd.type ? Fd : Rd;
      Wd.j.lQ("showBottomMessage", {
        message: dd.text,
        timeoutLength: md,
        type: dd.type
      })
    }
  },
  38529: (dd, Od, md) => {
    md.d(Od, {
      c: () => Wd,
      d: () => Fd
    });
    const Wd = "data-replay-ui-active",
      Fd = [{
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
  38538: (dd, Od, md) => {
    md.d(Od, {
      e: () => vd,
      g: () => td,
      k: () => Qd
    });
    var Wd = md(29),
      Fd = md(32),
      Rd = md(38529);

    function Xd() {
      const dd = {};
      for (const {
          group: Od
        }
        of Rd.d) dd[Od] = !0;
      return dd
    }
    let Kd = Xd();

    function hd() {
      Fd.j.lQ("replayViewer|uiVisibilityChanged")
    }

    function vd() {
      return Kd
    }

    function Qd(dd, Od) {
      Kd[dd] !== Od && (Kd = {
        ...Kd,
        [dd]: Od
      }, "nametag" === dd && Wd.e.set({
        areNametagsHidden: !Od
      }), hd())
    }

    function td() {
      Kd = Xd(), Wd.e.set({
        areNametagsHidden: !1
      }), hd()
    }
  },
  40858: (dd, Od, md) => {
    md.d(Od, {
      c: () => sd
    });
    var Wd = md(1906),
      Fd = md(1462),
      Rd = md(66),
      Xd = md(1155),
      Kd = md.n(Xd),
      hd = md(1572),
      vd = md(107);
    const Qd = ["video/webm;codecs=vp9,opus", "video/webm;codecs=vp8,opus", "video/webm;codecs=vp9", "video/webm;codecs=vp8", "video/webm"],
      td = ["video/mp4;codecs=avc1,mp4a.40.2", "video/mp4;codecs=avc1.42E01E,mp4a.40.2", "video/mp4;codecs=avc1", "video/mp4"];

    function od(dd) {
      return "webm" === dd ? Qd : td
    }

    function Nd(dd) {
      for (const Od of dd)
        if ("undefined" !== typeof MediaRecorder && MediaRecorder.isTypeSupported(Od)) return Od;
      return null
    }

    function qd(dd) {
      return null !== Nd(od(dd))
    }
    var Hd = md(1341);
    const yd = [{
      id: "webm",
      label: "WebM",
      description: "Usually less screen tearing, but may not play in all media players."
    }, {
      id: "mp4",
      label: "MP4",
      description: "Works in more players, but may show graphical glitches on some devices."
    }];

    function bd() {
      return qd("webm") ? "webm" : qd("mp4") ? "mp4" : "webm"
    }

    function Td(dd) {
      let {
        cards: Od
      } = dd;
      return (0, Hd.jsx)("div", {
        className: "ReplayVideoExportOptionCards",
        children: Od.map((dd => (0, Hd.jsxs)("div", {
          className: "ReplayVideoExportOptionColumn",
          children: [(0, Hd.jsx)("div", {
            className: Kd()("ReplayVideoExportOptionCard", {
              Selected: dd.selected,
              Disabled: dd.disabled
            }),
            onClick: () => {
              dd.disabled || dd.onSelect()
            },
            children: (0, Hd.jsxs)("div", {
              className: "ReplayVideoExportOptionCardBody",
              children: [(0, Hd.jsx)("div", {
                className: "ReplayVideoExportOptionCardLabel",
                children: dd.label
              }), (0, Hd.jsx)("div", {
                className: "ReplayVideoExportOptionCardDescription",
                children: dd.description
              })]
            })
          }), dd.disabled && dd.disabledReason && (0, Hd.jsx)("div", {
            className: "ReplayVideoExportOptionError SmallTextLight",
            children: dd.disabledReason
          })]
        }, dd.id)))
      })
    }
    const pd = (0, Rd.memo)((function(dd) {
      let {
        hasPlaybackMark: Od,
        canIncludeUi: md,
        includeUiDisabledReason: Wd,
        selectionRef: Fd,
        closePopup: Xd
      } = dd;
      const Kd = qd("webm") || qd("mp4"),
        [Qd, td] = (0, Rd.useState)(bd),
        [od, Nd] = (0, Rd.useState)(md),
        pd = Kd && qd(Qd);
      if (!Kd) {
        const dd = (0, vd.isMobile)() ? "screen recording" : "OBS";
        return (0, Hd.jsxs)("div", {
          className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
          children: [(0, Hd.jsx)("div", {
            className: "PromptPopupNotificationTitle SmallTextBold",
            children: "Can't export video"
          }), (0, Hd.jsx)("div", {
            className: "PromptPopupNotificationSubtitle SmallTextLight",
            children: `Your device does not support exporting. Try recording with an external software like ${dd}.`
          }), (0, Hd.jsx)("div", {
            className: "PromptPopupNotificationBody",
            children: (0, Hd.jsx)(hd.G, {
              className: "PromptPopupNotificationBodyButton",
              onClick: () => {
                Fd.options = null, Xd()
              },
              children: "Close"
            })
          })]
        })
      }
      const Yd = Od ? "This will only play the range you've set.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes." : "This will play the whole recording from the start.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes.",
        gd = [{
          id: "withoutUi",
          label: "Without UI",
          description: "Usually cleaner and sharper.",
          selected: !od,
          disabled: !1,
          disabledReason: null,
          onSelect: () => {
            Nd(!1)
          }
        }, {
          id: "withUi",
          label: "With UI",
          description: "Includes HUD elements. May look worse on some devices.",
          selected: od,
          disabled: !md,
          disabledReason: Wd,
          onSelect: () => {
            Nd(!0)
          }
        }],
        wd = yd.map((dd => {
          const Od = qd(dd.id);
          return {
            id: dd.id,
            label: dd.label,
            description: dd.description,
            selected: Qd === dd.id,
            disabled: !Od,
            disabledReason: "Your device doesn't support this format",
            onSelect: () => {
              td(dd.id)
            }
          }
        }));
      return (0, Hd.jsxs)("div", {
        className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
        children: [(0, Hd.jsx)("div", {
          className: "PromptPopupNotificationTitle SmallTextBold",
          children: "Export video?"
        }), (0, Hd.jsx)("div", {
          className: "PromptPopupNotificationSubtitle SmallTextLight",
          children: Yd
        }), (0, Hd.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, Hd.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "UI"
          }), (0, Hd.jsx)(Td, {
            cards: gd
          })]
        }), (0, Hd.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, Hd.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "Format"
          }), (0, Hd.jsx)(Td, {
            cards: wd
          })]
        }), (0, Hd.jsxs)("div", {
          className: "PromptPopupNotificationBody",
          children: [(0, Hd.jsx)(hd.m, {
            className: "PromptPopupNotificationBodyButton PromptPopupNotificationBodyPrimaryButton",
            disabled: !pd,
            onClick: () => {
              Fd.options = {
                format: Qd,
                includeUi: md && od
              }, Xd()
            },
            children: "Export"
          }), (0, Hd.jsx)(hd.G, {
            className: "PromptPopupNotificationBodyButton",
            onClick: () => {
              Fd.options = null, Xd()
            },
            children: "Cancel"
          })]
        })]
      })
    }));
    var Yd = md(5641),
      gd = md(38529),
      wd = md(38538);
    let Ed = null;

    function Jd() {
      return function() {
        const dd = (0, wd.e)();
        for (const {
            group: Od,
            dataAttr: md
          }
          of gd.d)
          if (md && dd[Od]) return !0;
        return !1
      }() ? function() {
        var dd;
        return "function" === typeof(null === (dd = navigator.mediaDevices) || void 0 === dd ? void 0 : dd.getDisplayMedia)
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
    async function Ud(dd, Od, md) {
      return dd ? async function() {
        const dd = await navigator.mediaDevices.getDisplayMedia({
          video: !0,
          audio: !1,
          preferCurrentTab: !0,
          selfBrowserSurface: "include"
        });
        for (const Od of dd.getAudioTracks()) Od.stop(), dd.removeTrack(Od);
        return dd
      }(): Od().captureStream(Math.max(1, Math.round(md)))
    }
    var xd = md(40652);
    let Bd = !1;

    function Sd(dd) {
      dd.holdInput(!1), (0, xd.f)(!1)
    }
    async function sd(dd) {
      var Od, md;
      if ((0, xd.d)() || Bd) return;
      const Rd = dd();
      if (!Rd) return;
      Bd = !0;
      let Xd = null;
      const Kd = Rd.playbackMarkInTick,
        {
          canIncludeUi: hd,
          includeUiDisabledReason: vd
        } = Jd();
      try {
        Xd = await async function(dd) {
          let {
            hasPlaybackMark: Od,
            canIncludeUi: md,
            includeUiDisabledReason: Wd
          } = dd;
          const Rd = {
              options: null
            },
            Xd = Fd.NotificationProvider.showCustomPopup({
              body: dd => (0, Hd.jsx)(pd, {
                hasPlaybackMark: Od,
                canIncludeUi: md,
                includeUiDisabledReason: Wd,
                selectionRef: Rd,
                closePopup: dd
              }),
              disableExitButton: !0,
              disablePressBackgroundToClose: !0,
              unlockPointerKey: "replayVideoExportOptions"
            });
          return "notificationTornDown" === await Xd.getResult() ? null : Rd.options
        }({
          hasPlaybackMark: null !== Kd,
          canIncludeUi: hd,
          includeUiDisabledReason: vd
        })
      } finally {
        Bd = !1
      }
      if (!Xd) return;
      const Qd = null !== (Od = null === (md = Rd.startFailure) || void 0 === md ? void 0 : md.call(Rd)) && void 0 !== Od ? Od : null;
      if (null !== Qd) return void Fd.NotificationProvider.showAlertPopup({
        title: "Video export failed",
        subtitle: Qd
      });
      if (! function(dd) {
          return !(0, xd.d)() && ((0, xd.f)(!0), dd.holdInput(!0), !0)
        }(Rd)) return;
      let td = null;
      try {
        td = await Ud(Xd.includeUi, (() => Rd.canvas()), Rd.wV)
      } catch (ud) {
        return console.error("Failed to create video stream for export", ud), Sd(Rd), void Fd.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: ud instanceof Error ? ud.message : "Could not start capture."
        })
      }
      let qd = null;
      const yd = [];
      let bd = null,
        Td = null;
      try {
        var gd, wd, sd;
        qd = Rd.playbackSpeed(), Rd.closeViewer(), Rd.setPlaybackSpeed(1), Rd.pause(), Rd.seekToTick(null !== Kd && void 0 !== Kd ? Kd : 0);
        const dd = await async function() {
          const dd = Yd.Howler.masterGain;
          if (!Yd.Howler.ctx || !dd) return null;
          await Yd.Howler.ctx.resume();
          const Od = Yd.Howler.ctx.createMediaStreamDestination();
          dd.connect(Od), Ed = Od;
          const [md] = Od.stream.getAudioTracks();
          return null !== md && void 0 !== md ? md : null
        }();
        Td = new MediaStream;
        for (const Wd of td.getVideoTracks()) Td.addTrack(Wd);
        dd && Td.addTrack(dd);
        const Od = function(dd) {
          const Od = Nd(od(dd));
          if (!Od) throw new Error(`No MediaRecorder mime type available for ${dd}`);
          return Od
        }(Xd.format);
        bd = new MediaRecorder(Td, {
          mimeType: Od,
          videoBitsPerSecond: 8e6
        }), bd.ondataavailable = dd => {
          dd.data.size > 0 && yd.push(dd.data)
        };
        const md = new Promise((dd => {
          bd.onstop = () => {
            dd()
          }
        }));
        await (null === (gd = Rd.seekSettled) || void 0 === gd ? void 0 : gd.call(Rd));
        const [hd] = td.getVideoTracks();
        bd.start(250), Rd.play();
        const vd = await
        function(dd, Od, md) {
          return new Promise((Wd => {
            let Fd = !1;
            const Rd = dd => {
                Fd || (Fd = !0, Kd(), Od.removeEventListener("ended", Xd), Wd(dd))
              },
              Xd = () => {
                Rd("captureLost")
              },
              Kd = dd.watchPlayback((() => {
                dd.isPlaying() || Rd("completed")
              }));
            Od.addEventListener("ended", Xd), md.onerror = () => {
              Rd("recorderError")
            }, "ended" !== Od.readyState ? dd.isPlaying() || Rd("completed") : Rd("captureLost")
          }))
        }(Rd, hd, bd);
        if (Rd.pause(), "inactive" !== bd.state && bd.stop(), await md, "captureLost" === vd) return void Fd.NotificationProvider.showAlertPopup({
          title: "Video export stopped",
          subtitle: "Screen sharing ended before the replay finished. Nothing was saved."
        });
        if ("recorderError" === vd) return void Fd.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "The recorder encountered an error. Nothing was saved."
        });
        const Qd = null !== (wd = null === (sd = Rd.playbackFailure) || void 0 === sd ? void 0 : sd.call(Rd)) && void 0 !== wd ? wd : null;
        if (null !== Qd) return void Fd.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: `${Qd} Nothing was saved.`
        });
        const Hd = new Blob(yd, {
          type: Od
        });
        Hd.size > 0 ? (0, Wd.e)(Hd, function(dd, Od) {
          const md = function(dd) {
            return "mp4" === dd ? "mp4" : "webm"
          }(Od);
          if (dd) return `${dd.replace(/\.bloxdreplay$/i,"")}.${md}`;
          return `bloxd-replay-${Date.now()}.${md}`
        }(Rd.fileName(), Xd.format)) : Fd.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "No video data was captured. Try again."
        })
      } catch (ud) {
        console.error("Replay video export failed", ud), Fd.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: ud instanceof Error ? ud.message : "Something went wrong while exporting."
        })
      } finally {
        if (bd && "inactive" !== bd.state) try {
          bd.stop()
        } catch (ud) {
          console.error("Failed to stop MediaRecorder", ud)
        }! function() {
          const dd = Yd.Howler.masterGain;
          if (Ed && dd) {
            try {
              dd.disconnect(Ed)
            } catch (ud) {
              console.error("Failed to disconnect Howler export tee", ud)
            }
            Ed = null
          } else Ed = null
        }();
        for (const dd of td.getTracks()) dd.stop();
        if (Td)
          for (const dd of Td.getTracks()) dd.stop();
        null !== qd && Rd.setPlaybackSpeed(qd), Rd.pause(), Sd(Rd), Rd.reopenViewer()
      }
    }
  },
  5641: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      Howl: () => Fd.Howl,
      Howler: () => Fd.Howler,
      musicOutput: () => yd,
      readyAudioContext: () => bd
    });
    var Wd, Fd = md(5650),
      Rd = md(4664),
      Xd = md(5326);
    const Kd = Fd.Howler;

    function hd() {
      var dd, Od;
      if (Kd.ctx || !Kd.usingWebAudio || "undefined" === typeof AudioContext || !(0, Xd.j)()) return;
      const md = navigator.audioSession;
      let Wd;
      "auto" === (null === md || void 0 === md ? void 0 : md.type) && (md.type = "ambient");
      try {
        Wd = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const Fd = Wd.createGain();
      Fd.gain.setValueAtTime(Kd._muted ? 0 : null !== (dd = Kd._volume) && void 0 !== dd ? dd : 1, Wd.currentTime), Fd.connect(Wd.destination), Kd.ctx = Wd, Kd.masterGain = Fd, null === (Od = Kd._setup) || void 0 === Od || Od.call(Kd)
    }
    Kd._mobileUnloaded = !0;
    const vd = Kd.volume.bind(Fd.Howler);
    Kd.volume = function() {
      return hd(), vd(...arguments)
    };
    const Qd = Kd.mute.bind(Fd.Howler);
    Kd.mute = dd => (hd(), Qd(dd));
    const td = Fd.Howl.prototype,
      od = td.init;

    function Nd() {
      for (; Kd._html5AudioPool.length < Kd.html5PoolSize;) {
        const dd = new Audio;
        dd._unlocked = !0, Kd._releaseHtml5Audio(dd)
      }
      for (const Od of Kd._howls)
        if (!Od._webAudio)
          for (const md of Od._getSoundIds()) {
            var dd;
            const Wd = null === (dd = Od._soundById(md)) || void 0 === dd ? void 0 : dd._node;
            Wd && !Wd._unlocked && (Wd._unlocked = !0, Wd.load())
          }
    }
    td.init = function(dd) {
      return hd(), od.call(this, dd)
    }, (0, Xd.j)() && (Kd._unlockAudio = () => {
      const dd = Kd.ctx;
      if (Kd._audioUnlocked || !dd) return;
      Kd.autoUnlock = !1;
      const Od = dd.createBuffer(1, 1, 22050);
      Kd._scratchBuffer = Od;
      const md = new AbortController;
      let Wd = "afterPaint";
      const Fd = () => {
          var Wd;
          if (Kd._audioUnlocked) return;
          null === (Wd = Kd._autoResume) || void 0 === Wd || Wd.call(Kd);
          const Fd = dd.createBufferSource();
          Fd.buffer = Od, Fd.connect(dd.destination), Fd.start(0), dd.resume().catch((() => {})), Fd.onended = () => {
            Fd.disconnect(0), Kd._audioUnlocked = !0, md.abort();
            for (const dd of Kd._howls) dd._emit("unlock")
          }
        },
        hd = () => {
          Nd(), Fd()
        },
        vd = Od => {
          if (Nd(), "inTap" === Wd) {
            if ("running" === dd.state) return;
            console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), Fd()
          } else "afterPaint" === Wd && (Wd = "queued", (0, Rd.d)(Od.timeStamp, (() => {
            Wd = "inTap", Fd()
          })))
        };
      for (const Rd of ["touchstart", "touchend"]) document.addEventListener(Rd, hd, {
        capture: !0,
        signal: md.signal
      });
      for (const Rd of Xd.d) document.addEventListener(Rd, vd, {
        capture: !0,
        signal: md.signal
      })
    });
    let qd = 0;
    const Hd = null === (Wd = Kd._autoSuspend) || void 0 === Wd ? void 0 : Wd.bind(Fd.Howler);

    function yd() {
      bd();
      const {
        ctx: dd,
        masterGain: Od
      } = Kd;
      return dd && Od ? {
        ctx: dd,
        destination: Od,
        holdAwake: dd => {
          var Od, md;
          (qd += dd ? 1 : -1, dd) ? null === (Od = Kd._autoResume) || void 0 === Od || Od.call(Kd): null === (md = Kd._autoSuspend) || void 0 === md || md.call(Kd)
        },
        wake: () => {
          var Od;
          "running" !== dd.state && (null === (Od = Kd._autoResume) || void 0 === Od || Od.call(Kd), dd.resume().catch((() => {})))
        }
      } : null
    }

    function bd() {
      var dd;
      (Kd.volume(), Kd.ctx && Kd.autoUnlock) && (null === (dd = Kd._unlockAudio) || void 0 === dd || dd.call(Kd))
    }
    Hd && (Kd._autoSuspend = () => qd > 0 ? Fd.Howler : Hd())
  },
  55017: (dd, Od, md) => {
    md.d(Od, {
      d: () => Wd,
      f: () => Fd
    });
    const Wd = ["recording", "freecam", "keyframe"];

    function Fd() {
      const dd = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(dd[1]) << 32n | BigInt(dd[0])
    }
  },
  64753: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      HOLD_TIMEOUT_MS: () => vd,
      ReplayViewer: () => td
    });
    var Wd = md(38483),
      Fd = md(38521),
      Rd = md(38517),
      Xd = md(38538),
      Kd = md(5568),
      hd = md(55017);
    const vd = 1e4,
      Qd = new Set(["Jq"]);
    class td {
      constructor(dd) {
        var Od;
        this.deps = dd, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (Od = dd.now) && void 0 !== Od ? Od : () => performance.now()
      }
      get inPlayback() {
        return this.playback
      }
      get view() {
        return this.lastView
      }
      get isOpen() {
        return null !== this.lastView && this.lastView.state !== Kd.ld.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get jK() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? Wd.c.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(dd, Od) {
        var md, Rd, Xd, hd;
        const {
          client: vd
        } = this.deps;
        if (!this.playback) {
          if (!vd.setPlayback(!0)) throw new Error(Wd.c.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const Qd = this.epoch;
        let td;
        try {
          td = await vd.open(dd, (() => (0, Fd.e)(dd, Od)))
        } finally {
          this.loadingOpens--
        }
        if (Qd !== this.epoch && "reloading" !== td) throw new Error(Wd.c.coreStopped.text);
        if ("opening" !== td) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const dd = function(dd) {
            switch (dd) {
              case "reloading":
                return null;
              case "stopped":
              case Kd.fd.ModuleTrap:
                return Wd.c.coreStopped;
              case Kd.fd.ModuleLoad:
                return Wd.c.viewerLoadFailed;
              case Kd.fd.TooLarge:
                return Wd.c.cantOpen
            }
          }(td);
          if (null === dd) return;
          throw new Error(dd.text)
        }
        return this.rejectSave(new Error(Wd.c.saveClosed.text)), this.fileName = null !== (md = null !== (Rd = Od.fileName) && void 0 !== Rd ? Rd : null === (Xd = Od.fileHandle) || void 0 === Xd ? void 0 : Xd.name) && void 0 !== md ? md : null, this.fileHandle = null !== (hd = Od.fileHandle) && void 0 !== hd ? hd : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((dd, Od) => {
          this.pendingOpen = {
            resolve: dd,
            reject: Od
          }
        }))
      }
      play() {
        this.holds.has("Jq") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("Jq")
      }
      seek(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const md = this.lastView;
        null !== md && (Od || dd < md.Et) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(dd, Od)
      }
      setSpeed(dd) {
        this.deps.client.setSpeed(dd)
      }
      setCameraMode(dd) {
        this.deps.client.setCameraMode(dd)
      }
      cycleCameraMode() {
        const dd = this.lastView;
        null !== dd && dd.state !== Kd.ld.None && this.setCameraMode(hd.d[(hd.d.indexOf(dd.cameraMode) + 1) % hd.d.length])
      }
      addKeyframe() {
        this.edited(this.deps.client.addKeyframe())
      }
      setKeyframe(dd) {
        this.edited(this.deps.client.setKeyframe(dd))
      }
      moveKeyframe(dd, Od) {
        this.edited(this.deps.client.moveKeyframe(dd, Od))
      }
      deleteKeyframes(dd, Od) {
        this.edited(this.deps.client.deleteKeyframes(dd, Od))
      }
      setMark(dd) {
        this.edited(this.deps.client.setMark(dd))
      }
      crop(dd, Od) {
        return !(Od <= dd) && (null !== this.pendingSave ? (this.deps.notify(Wd.c.saveBusy), !1) : !!this.deps.client.crop(dd, Od) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(Wd.c.saveBusy.text)) : new Promise(((dd, Od) => {
          const md = {
            resolve: dd,
            reject: Od
          };
          this.pendingSave = md, this.editsAtSave = this.edits, this.deps.client.save((0, hd.f)()).then((dd => {
            this.pendingSave === md && this.saveStarted(dd)
          }), (dd => {
            this.pendingSave === md && this.rejectSave(dd instanceof Error ? dd : new Error(String(dd)))
          }))
        }))
      }
      saveStarted(dd) {
        switch (dd) {
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
      markSaved(dd, Od) {
        var md, Wd;
        this.fileHandle = dd, this.fileName = null !== (md = null !== (Wd = null === dd || void 0 === dd ? void 0 : dd.name) && void 0 !== Wd ? Wd : Od) && void 0 !== md ? md : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(Wd.c.coreStopped.text)), this.rejectSave(new Error(Wd.c.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var dd, Od, md;
        const Wd = this.deps.client.view(),
          Fd = Wd !== this.lastView;
        this.lastView = Wd, this.opening && null !== Wd && Wd.state !== Kd.ld.None && Wd.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, Xd.g)()), this.cropAsked ? (this.cropAsked = !1, null !== Wd && Wd.state === Kd.ld.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== Wd && Wd.state !== Kd.ld.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const Rd = 0 === this.settleFrames && 0 === (null !== (dd = null === (Od = (md = this.deps).meshPending) || void 0 === Od ? void 0 : Od.call(md)) && void 0 !== dd ? dd : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && Rd && this.release("opening"), this.holds.has("seek") && Rd && this.release("seek"), this.holds.has("crop") && !this.cropRunning && Rd && this.release("crop");
        const hd = this.now();
        for (const [Xd, Kd] of this.holds) !Qd.has(Xd) && hd - Kd >= vd && this.release(Xd);
        this.saveRefused && !this.cropping && this.saveFailed(!1), Fd && this.deps.onChange()
      }
      cropped() {
        (0, Xd.g)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(dd) {
        switch (dd.reason) {
          case Kd.fd.TooLarge:
            break;
          case Kd.fd.Open:
          case Kd.fd.NothingStaged: {
            this.opening = !1, this.release("opening");
            const Od = (0, Rd.f)(dd.version) ? Wd.c.replayTooOld : Wd.c.cantOpen;
            null === this.pendingOpen && this.deps.notify(Od), this.settleOpen(new Error(Od.text));
            break
          }
          case Kd.fd.Crop:
            if (dd.code === Kd.bd.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(Wd.c.cropFailed);
            break;
          case Kd.fd.ModuleTrap:
          case Kd.fd.ModuleLoad:
          case Kd.fd.Port:
            this.moduleEnded(dd.reason === Kd.fd.ModuleTrap ? Wd.c.coreStopped : Wd.c.cantOpen);
            break;
          case Kd.fd.NotLive:
            console.warn("[bloxd-wasm-client] the core refused a recorder command in playback");
            break;
          default:
            console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${dd.reason})`), this.seekAsked = !1, this.release("seek")
        }
        this.deps.onChange()
      }
      moduleEnded(dd) {
        this.resetInFlight(), this.release("opening"), this.release("seek"), this.release("crop"), null === this.pendingOpen && this.deps.notify(dd), this.settleOpen(new Error(dd.text))
      }
      saveDone(dd) {
        const Od = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === Od || void 0 === Od || Od.resolve(dd)
      }
      saveFailed(dd) {
        this.rejectSave(new Error(dd ? Wd.c.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(dd) {
        dd && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(Wd.c.cropBusy.text)) : this.deps.notify(Wd.c.cropBusy)
      }
      resetInFlight() {
        this.opening = !1, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0
      }
      settleOpen(dd) {
        const Od = this.pendingOpen;
        this.pendingOpen = null, null === dd ? null === Od || void 0 === Od || Od.resolve() : null === Od || void 0 === Od || Od.reject(dd)
      }
      rejectSave(dd) {
        const Od = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === Od || void 0 === Od || Od.reject(dd)
      }
      hold(dd) {
        const Od = 0 === this.holds.size;
        this.holds.set(dd, this.now()), Od && this.deps.setHoldDraws(!0)
      }
      release(dd) {
        this.holds.delete(dd) && 0 === this.holds.size && this.deps.setHoldDraws(!1)
      }
      releaseAll() {
        this.holds.size > 0 && (this.holds.clear(), this.deps.setHoldDraws(!1))
      }
    }
  },
  64747: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      MESH_TAIL_MS: () => vd,
      PLAY_START_TIMEOUT_MS: () => Kd,
      startWasmReplayVideoExport: () => td
    });
    var Wd = md(40858),
      Fd = md(64753),
      Rd = md(5568),
      Xd = md(3383);
    const Kd = Fd.HOLD_TIMEOUT_MS + 5e3,
      hd = 50,
      vd = 200;

    function Qd(dd) {
      var Od;
      return (null === (Od = dd.view) || void 0 === Od ? void 0 : Od.state) === Rd.ld.Cropping || dd.jK.includes("crop")
    }

    function td(dd) {
      return (0, Wd.c)((() => function(dd) {
        var Od, md, Wd, Fd, td, od;
        const Nd = dd.viewer(),
          qd = null !== (Od = null === Nd || void 0 === Nd ? void 0 : Nd.view) && void 0 !== Od ? Od : null,
          Hd = dd.canvas();
        if (!Nd || !qd || qd.state === Rd.ld.None || 0 === qd.totalTicks || !Hd || Qd(Nd)) return null;
        const yd = null !== (md = dd.now) && void 0 !== md ? md : () => performance.now(),
          bd = Nd.id,
          Td = () => {
            const Od = dd.viewer();
            return Od === Nd && Od.id === bd && Od.isOpen ? Od : null
          },
          pd = Math.min(null !== (Wd = null === (Fd = qd.mark) || void 0 === Fd ? void 0 : Fd.outTick) && void 0 !== Wd ? Wd : 1 / 0, qd.totalTicks - 1);
        let Yd = null,
          gd = !1;
        const wd = () => {
          var dd, Od;
          return (null === (dd = Td()) || void 0 === dd || null === (Od = dd.view) || void 0 === Od ? void 0 : Od.state) === Rd.ld.Playing
        };
        return {
          wV: Rd.zd,
          playbackMarkInTick: null !== (td = null === (od = qd.mark) || void 0 === od ? void 0 : od.inTick) && void 0 !== td ? td : null,
          startFailure: () => {
            const dd = Td();
            return null === dd ? "Another replay opened. Export it again from there." : Qd(dd) ? "Wait for the crop to finish, then export again." : null
          },
          fileName: () => {
            var dd, Od;
            return null !== (dd = null === (Od = Td()) || void 0 === Od ? void 0 : Od.fileName) && void 0 !== dd ? dd : null
          },
          playbackSpeed: () => {
            var dd, Od, md;
            return null !== (dd = null === (Od = Td()) || void 0 === Od || null === (md = Od.view) || void 0 === md ? void 0 : md.speed) && void 0 !== dd ? dd : 1
          },
          setPlaybackSpeed: dd => {
            var Od;
            null === (Od = Td()) || void 0 === Od || Od.setSpeed(dd)
          },
          play: () => {
            var dd;
            gd = !1, Yd = yd(), null === (dd = Td()) || void 0 === dd || dd.play()
          },
          pause: () => {
            var dd;
            null === (dd = Td()) || void 0 === dd || dd.pause()
          },
          seekToTick: dd => {
            var Od;
            null === (Od = Td()) || void 0 === Od || Od.seek(dd, !0)
          },
          seekSettled: () => new Promise((dd => {
            const Od = setInterval((() => {
              const md = Td();
              null === md ? (clearInterval(Od), dd()) : md.jK.includes("seek") || (clearInterval(Od), setTimeout(dd, vd))
            }), hd)
          })),
          isPlaying: () => {
            var dd, Od, md;
            return null !== Yd && null !== Td() && (!!wd() || !gd && (null !== (dd = null === (Od = Td()) || void 0 === Od || null === (md = Od.view) || void 0 === md ? void 0 : md.Et) && void 0 !== dd ? dd : 0) < pd && yd() - Yd < Kd)
          },
          watchPlayback: Od => {
            const md = dd.watchViewer((() => {
                gd ||= null !== Yd && wd(), Od()
              })),
              Wd = setTimeout(Od, Kd + 1);
            return () => {
              clearTimeout(Wd), md()
            }
          },
          playbackFailure: () => {
            var dd, Od;
            const md = Td();
            return null === md ? "The replay closed before the video finished." : (null !== (dd = null === (Od = md.view) || void 0 === Od ? void 0 : Od.Et) && void 0 !== dd ? dd : 0) >= pd ? null : gd ? "The replay stopped before the video finished." : "The replay didn't start playing."
          },
          canvas: () => Hd,
          closeViewer: () => {
            dd.requestViewer("close")
          },
          reopenViewer: () => {
            dd.requestViewer("open")
          },
          holdInput: Xd.i
        }
      }(dd)))
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);