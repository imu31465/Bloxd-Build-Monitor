export const id = 66;
export const ids = [60, 66, 93];
export const modules = {
  37087: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => pm,
      i: () => Em
    });
    var hm = fm(653),
      Am = fm(37),
      am = fm(37048);
    const xm = "replayFileKeptForReload",
      wm = "replayFileKeptForReloadAt",
      Dm = "replayFileKeptForReloadTab",
      im = 3e5,
      Rm = 5e3;
    async function pm(mm, Tm) {
      const fm = Date.now(),
        am = {
          at: fm,
          bytes: mm,
          source: Tm
        },
        im = await Promise.race([(async () => await Am.e.setItem(wm, fm) && Am.e.setItem(xm, am))(), (0, hm.L)(Rm).then((() => !1))]);
      im || console.warn("The replay file couldn't be kept across the reload into a newer build: the reloaded page asks for it again");
      const pm = {
        at: fm,
        mO: im
      };
      Am.k.setItem(Dm, pm)
    }
    async function Em() {
      var mm;
      const Tm = Am.k.getItem(Dm);
      null !== Tm && Am.k.removeItem(Dm);
      const fm = Date.now(),
        hm = await Am.e.getItem(wm),
        Rm = null !== Tm && fm - Tm.at <= im,
        pm = null !== Tm && hm === Tm.at;
      let Em = null;
      if (null !== hm && (pm || ("number" !== typeof hm || fm - hm > im)) && (Em = Rm && pm && Tm.mO ? await Am.e.getItem(xm) : null, await Promise.all([Am.e.removeItem(wm), Am.e.removeItem(xm)])), !Rm) return null;
      if ((null === (mm = Em) || void 0 === mm ? void 0 : mm.at) !== Tm.at) throw new Error(am.e.replayNotKept.text);
      return {
        bytes: Em.bytes,
        source: Em.source
      }
    }
  },
  37084: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => hm,
      c: () => am,
      g: () => Am
    });
    const hm = [9];

    function Am(mm) {
      return hm.includes(mm)
    }

    function am(mm) {
      return null !== mm && mm >= 3 && mm < hm[0]
    }
  },
  37048: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => xm,
      i: () => im,
      m: () => Dm
    });
    var hm = fm(31);
    const Am = 1500,
      am = 1e3,
      xm = {
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
      wm = new Set(Object.values(xm).filter((mm => "Error" === mm.type)).map((mm => mm.text)));

    function Dm(mm) {
      return mm instanceof Error && wm.has(mm.message) ? mm.message : void 0
    }

    function im(mm) {
      var Tm;
      const fm = null !== (Tm = mm.timeoutMs) && void 0 !== Tm ? Tm : "Error" === mm.type ? Am : am;
      hm.j.gp("showBottomMessage", {
        message: mm.text,
        timeoutLength: fm,
        type: mm.type
      })
    }
  },
  37099: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => hm,
      h: () => Am
    });
    const hm = "data-replay-ui-active",
      Am = [{
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
  37101: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => im,
      d: () => pm,
      f: () => Rm
    });
    var hm = fm(23),
      Am = fm(31),
      am = fm(37099);

    function xm() {
      const mm = {};
      for (const {
          group: Tm
        }
        of am.h) mm[Tm] = !0;
      return mm
    }
    let wm = xm();

    function Dm() {
      Am.j.gp("replayViewer|uiVisibilityChanged")
    }

    function im() {
      return wm
    }

    function Rm(mm, Tm) {
      wm[mm] !== Tm && (wm = {
        ...wm,
        [mm]: Tm
      }, "nametag" === mm && hm.c.set({
        areNametagsHidden: !Tm
      }), Dm())
    }

    function pm() {
      wm = xm(), hm.c.set({
        areNametagsHidden: !1
      }), Dm()
    }
  },
  39377: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => Sm
    });
    var hm = fm(1730),
      Am = fm(1354),
      am = fm(59),
      xm = fm(1080),
      wm = fm.n(xm),
      Dm = fm(1454),
      im = fm(105);
    const Rm = ["video/webm;codecs=vp9,opus", "video/webm;codecs=vp8,opus", "video/webm;codecs=vp9", "video/webm;codecs=vp8", "video/webm"],
      pm = ["video/mp4;codecs=avc1,mp4a.40.2", "video/mp4;codecs=avc1.42E01E,mp4a.40.2", "video/mp4;codecs=avc1", "video/mp4"];

    function Em(mm) {
      return "webm" === mm ? Rm : pm
    }

    function om(mm) {
      for (const Tm of mm)
        if ("undefined" !== typeof MediaRecorder && MediaRecorder.isTypeSupported(Tm)) return Tm;
      return null
    }

    function Om(mm) {
      return null !== om(Em(mm))
    }
    var Ym = fm(1135);
    const qm = [{
      id: "webm",
      label: "WebM",
      description: "Usually less screen tearing, but may not play in all media players."
    }, {
      id: "mp4",
      label: "MP4",
      description: "Works in more players, but may show graphical glitches on some devices."
    }];

    function jm() {
      return Om("webm") ? "webm" : Om("mp4") ? "mp4" : "webm"
    }

    function Vm(mm) {
      let {
        cards: Tm
      } = mm;
      return (0, Ym.jsx)("div", {
        className: "ReplayVideoExportOptionCards",
        children: Tm.map((mm => (0, Ym.jsxs)("div", {
          className: "ReplayVideoExportOptionColumn",
          children: [(0, Ym.jsx)("div", {
            className: wm()("ReplayVideoExportOptionCard", {
              Selected: mm.selected,
              Disabled: mm.disabled
            }),
            onClick: () => {
              mm.disabled || mm.onSelect()
            },
            children: (0, Ym.jsxs)("div", {
              className: "ReplayVideoExportOptionCardBody",
              children: [(0, Ym.jsx)("div", {
                className: "ReplayVideoExportOptionCardLabel",
                children: mm.label
              }), (0, Ym.jsx)("div", {
                className: "ReplayVideoExportOptionCardDescription",
                children: mm.description
              })]
            })
          }), mm.disabled && mm.disabledReason && (0, Ym.jsx)("div", {
            className: "ReplayVideoExportOptionError SmallTextLight",
            children: mm.disabledReason
          })]
        }, mm.id)))
      })
    }
    const Im = (0, am.memo)((function(mm) {
      let {
        hasPlaybackMark: Tm,
        canIncludeUi: fm,
        includeUiDisabledReason: hm,
        selectionRef: Am,
        closePopup: xm
      } = mm;
      const wm = Om("webm") || Om("mp4"),
        [Rm, pm] = (0, am.useState)(jm),
        [Em, om] = (0, am.useState)(fm),
        Im = wm && Om(Rm);
      if (!wm) {
        const mm = (0, im.isMobile)() ? "screen recording" : "OBS";
        return (0, Ym.jsxs)("div", {
          className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
          children: [(0, Ym.jsx)("div", {
            className: "PromptPopupNotificationTitle SmallTextBold",
            children: "Can't export video"
          }), (0, Ym.jsx)("div", {
            className: "PromptPopupNotificationSubtitle SmallTextLight",
            children: `Your device does not support exporting. Try recording with an external software like ${mm}.`
          }), (0, Ym.jsx)("div", {
            className: "PromptPopupNotificationBody",
            children: (0, Ym.jsx)(Dm.O, {
              className: "PromptPopupNotificationBodyButton",
              onClick: () => {
                Am.options = null, xm()
              },
              children: "Close"
            })
          })]
        })
      }
      const Km = Tm ? "This will only play the range you've set.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes." : "This will play the whole recording from the start.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes.",
        Qm = [{
          id: "withoutUi",
          label: "Without UI",
          description: "Usually cleaner and sharper.",
          selected: !Em,
          disabled: !1,
          disabledReason: null,
          onSelect: () => {
            om(!1)
          }
        }, {
          id: "withUi",
          label: "With UI",
          description: "Includes HUD elements. May look worse on some devices.",
          selected: Em,
          disabled: !fm,
          disabledReason: hm,
          onSelect: () => {
            om(!0)
          }
        }],
        nm = qm.map((mm => {
          const Tm = Om(mm.id);
          return {
            id: mm.id,
            label: mm.label,
            description: mm.description,
            selected: Rm === mm.id,
            disabled: !Tm,
            disabledReason: "Your device doesn't support this format",
            onSelect: () => {
              pm(mm.id)
            }
          }
        }));
      return (0, Ym.jsxs)("div", {
        className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
        children: [(0, Ym.jsx)("div", {
          className: "PromptPopupNotificationTitle SmallTextBold",
          children: "Export video?"
        }), (0, Ym.jsx)("div", {
          className: "PromptPopupNotificationSubtitle SmallTextLight",
          children: Km
        }), (0, Ym.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, Ym.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "UI"
          }), (0, Ym.jsx)(Vm, {
            cards: Qm
          })]
        }), (0, Ym.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, Ym.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "Format"
          }), (0, Ym.jsx)(Vm, {
            cards: nm
          })]
        }), (0, Ym.jsxs)("div", {
          className: "PromptPopupNotificationBody",
          children: [(0, Ym.jsx)(Dm.m, {
            className: "PromptPopupNotificationBodyButton PromptPopupNotificationBodyPrimaryButton",
            disabled: !Im,
            onClick: () => {
              Am.options = {
                format: Rm,
                includeUi: fm && Em
              }, xm()
            },
            children: "Export"
          }), (0, Ym.jsx)(Dm.O, {
            className: "PromptPopupNotificationBodyButton",
            onClick: () => {
              Am.options = null, xm()
            },
            children: "Cancel"
          })]
        })]
      })
    }));
    var Km = fm(4800),
      Qm = fm(37099),
      nm = fm(37101);
    let Jm = null;

    function cm() {
      return function() {
        const mm = (0, nm.c)();
        for (const {
            group: Tm,
            dataAttr: fm
          }
          of Qm.h)
          if (fm && mm[Tm]) return !0;
        return !1
      }() ? function() {
        var mm;
        return "function" === typeof(null === (mm = navigator.mediaDevices) || void 0 === mm ? void 0 : mm.getDisplayMedia)
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
    async function zm(mm, Tm, fm) {
      return mm ? async function() {
        const mm = await navigator.mediaDevices.getDisplayMedia({
          video: !0,
          audio: !1,
          preferCurrentTab: !0,
          selfBrowserSurface: "include"
        });
        for (const Tm of mm.getAudioTracks()) Tm.stop(), mm.removeTrack(Tm);
        return mm
      }(): Tm().captureStream(Math.max(1, Math.round(fm)))
    }
    var Zm = fm(39209);
    let km = !1;

    function bm(mm) {
      mm.holdInput(!1), (0, Zm.d)(!1)
    }
    async function Sm(mm) {
      var Tm, fm;
      if ((0, Zm.b)() || km) return;
      const am = mm();
      if (!am) return;
      km = !0;
      let xm = null;
      const wm = am.playbackMarkInTick,
        {
          canIncludeUi: Dm,
          includeUiDisabledReason: im
        } = cm();
      try {
        xm = await async function(mm) {
          let {
            hasPlaybackMark: Tm,
            canIncludeUi: fm,
            includeUiDisabledReason: hm
          } = mm;
          const am = {
              options: null
            },
            xm = Am.NotificationProvider.showCustomPopup({
              body: mm => (0, Ym.jsx)(Im, {
                hasPlaybackMark: Tm,
                canIncludeUi: fm,
                includeUiDisabledReason: hm,
                selectionRef: am,
                closePopup: mm
              }),
              disableExitButton: !0,
              disablePressBackgroundToClose: !0,
              unlockPointerKey: "replayVideoExportOptions"
            });
          return "notificationTornDown" === await xm.getResult() ? null : am.options
        }({
          hasPlaybackMark: null !== wm,
          canIncludeUi: Dm,
          includeUiDisabledReason: im
        })
      } finally {
        km = !1
      }
      if (!xm) return;
      const Rm = null !== (Tm = null === (fm = am.startFailure) || void 0 === fm ? void 0 : fm.call(am)) && void 0 !== Tm ? Tm : null;
      if (null !== Rm) return void Am.NotificationProvider.showAlertPopup({
        title: "Video export failed",
        subtitle: Rm
      });
      if (! function(mm) {
          return !(0, Zm.b)() && ((0, Zm.d)(!0), mm.holdInput(!0), !0)
        }(am)) return;
      let pm = null;
      try {
        pm = await zm(xm.includeUi, (() => am.canvas()), am.aG)
      } catch (em) {
        return console.error("Failed to create video stream for export", em), bm(am), void Am.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: em instanceof Error ? em.message : "Could not start capture."
        })
      }
      let Om = null;
      const qm = [];
      let jm = null,
        Vm = null;
      try {
        var Qm, nm, Sm;
        Om = am.playbackSpeed(), am.closeViewer(), am.setPlaybackSpeed(1), am.pause(), am.seekToTick(null !== wm && void 0 !== wm ? wm : 0);
        const mm = await async function() {
          const mm = Km.Howler.masterGain;
          if (!Km.Howler.ctx || !mm) return null;
          await Km.Howler.ctx.resume();
          const Tm = Km.Howler.ctx.createMediaStreamDestination();
          mm.connect(Tm), Jm = Tm;
          const [fm] = Tm.stream.getAudioTracks();
          return null !== fm && void 0 !== fm ? fm : null
        }();
        Vm = new MediaStream;
        for (const hm of pm.getVideoTracks()) Vm.addTrack(hm);
        mm && Vm.addTrack(mm);
        const Tm = function(mm) {
          const Tm = om(Em(mm));
          if (!Tm) throw new Error(`No MediaRecorder mime type available for ${mm}`);
          return Tm
        }(xm.format);
        jm = new MediaRecorder(Vm, {
          mimeType: Tm,
          videoBitsPerSecond: 8e6
        }), jm.ondataavailable = mm => {
          mm.data.size > 0 && qm.push(mm.data)
        };
        const fm = new Promise((mm => {
          jm.onstop = () => {
            mm()
          }
        }));
        await (null === (Qm = am.seekSettled) || void 0 === Qm ? void 0 : Qm.call(am));
        const [Dm] = pm.getVideoTracks();
        jm.start(250), am.play();
        const im = await
        function(mm, Tm, fm) {
          return new Promise((hm => {
            let Am = !1;
            const am = mm => {
                Am || (Am = !0, wm(), Tm.removeEventListener("ended", xm), hm(mm))
              },
              xm = () => {
                am("captureLost")
              },
              wm = mm.watchPlayback((() => {
                mm.isPlaying() || am("completed")
              }));
            Tm.addEventListener("ended", xm), fm.onerror = () => {
              am("recorderError")
            }, "ended" !== Tm.readyState ? mm.isPlaying() || am("completed") : am("captureLost")
          }))
        }(am, Dm, jm);
        if (am.pause(), "inactive" !== jm.state && jm.stop(), await fm, "captureLost" === im) return void Am.NotificationProvider.showAlertPopup({
          title: "Video export stopped",
          subtitle: "Screen sharing ended before the replay finished. Nothing was saved."
        });
        if ("recorderError" === im) return void Am.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "The recorder encountered an error. Nothing was saved."
        });
        const Rm = null !== (nm = null === (Sm = am.playbackFailure) || void 0 === Sm ? void 0 : Sm.call(am)) && void 0 !== nm ? nm : null;
        if (null !== Rm) return void Am.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: `${Rm} Nothing was saved.`
        });
        const Ym = new Blob(qm, {
          type: Tm
        });
        Ym.size > 0 ? (0, hm.c)(Ym, function(mm, Tm) {
          const fm = function(mm) {
            return "mp4" === mm ? "mp4" : "webm"
          }(Tm);
          if (mm) return `${mm.replace(/\.bloxdreplay$/i,"")}.${fm}`;
          return `bloxd-replay-${Date.now()}.${fm}`
        }(am.fileName(), xm.format)) : Am.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "No video data was captured. Try again."
        })
      } catch (em) {
        console.error("Replay video export failed", em), Am.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: em instanceof Error ? em.message : "Something went wrong while exporting."
        })
      } finally {
        if (jm && "inactive" !== jm.state) try {
          jm.stop()
        } catch (em) {
          console.error("Failed to stop MediaRecorder", em)
        }! function() {
          const mm = Km.Howler.masterGain;
          if (Jm && mm) {
            try {
              mm.disconnect(Jm)
            } catch (em) {
              console.error("Failed to disconnect Howler export tee", em)
            }
            Jm = null
          } else Jm = null
        }();
        for (const mm of pm.getTracks()) mm.stop();
        if (Vm)
          for (const mm of Vm.getTracks()) mm.stop();
        null !== Om && am.setPlaybackSpeed(Om), am.pause(), bm(am), am.reopenViewer()
      }
    }
  },
  4800: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      Howl: () => Am.Howl,
      Howler: () => Am.Howler,
      musicOutput: () => qm,
      readyAudioContext: () => jm
    });
    var hm, Am = fm(4806),
      am = fm(3443),
      xm = fm(4588);
    const wm = Am.Howler;

    function Dm() {
      var mm, Tm;
      if (wm.ctx || !wm.usingWebAudio || "undefined" === typeof AudioContext || !(0, xm.k)()) return;
      const fm = navigator.audioSession;
      let hm;
      "auto" === (null === fm || void 0 === fm ? void 0 : fm.type) && (fm.type = "ambient");
      try {
        hm = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const Am = hm.createGain();
      Am.gain.setValueAtTime(wm._muted ? 0 : null !== (mm = wm._volume) && void 0 !== mm ? mm : 1, hm.currentTime), Am.connect(hm.destination), wm.ctx = hm, wm.masterGain = Am, null === (Tm = wm._setup) || void 0 === Tm || Tm.call(wm)
    }
    wm._mobileUnloaded = !0;
    const im = wm.volume.bind(Am.Howler);
    wm.volume = function() {
      return Dm(), im(...arguments)
    };
    const Rm = wm.mute.bind(Am.Howler);
    wm.mute = mm => (Dm(), Rm(mm));
    const pm = Am.Howl.prototype,
      Em = pm.init;

    function om() {
      for (; wm._html5AudioPool.length < wm.html5PoolSize;) {
        const mm = new Audio;
        mm._unlocked = !0, wm._releaseHtml5Audio(mm)
      }
      for (const Tm of wm._howls)
        if (!Tm._webAudio)
          for (const fm of Tm._getSoundIds()) {
            var mm;
            const hm = null === (mm = Tm._soundById(fm)) || void 0 === mm ? void 0 : mm._node;
            hm && !hm._unlocked && (hm._unlocked = !0, hm.load())
          }
    }
    pm.init = function(mm) {
      return Dm(), Em.call(this, mm)
    }, (0, xm.k)() && (wm._unlockAudio = () => {
      const mm = wm.ctx;
      if (wm._audioUnlocked || !mm) return;
      wm.autoUnlock = !1;
      const Tm = mm.createBuffer(1, 1, 22050);
      wm._scratchBuffer = Tm;
      const fm = new AbortController;
      let hm = "afterPaint";
      const Am = () => {
          var hm;
          if (wm._audioUnlocked) return;
          null === (hm = wm._autoResume) || void 0 === hm || hm.call(wm);
          const Am = mm.createBufferSource();
          Am.buffer = Tm, Am.connect(mm.destination), Am.start(0), mm.resume().catch((() => {})), Am.onended = () => {
            Am.disconnect(0), wm._audioUnlocked = !0, fm.abort();
            for (const mm of wm._howls) mm._emit("unlock")
          }
        },
        Dm = () => {
          om(), Am()
        },
        im = Tm => {
          if (om(), "inTap" === hm) {
            if ("running" === mm.state) return;
            console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), Am()
          } else "afterPaint" === hm && (hm = "queued", (0, am.c)(Tm.timeStamp, (() => {
            hm = "inTap", Am()
          })))
        };
      for (const am of ["touchstart", "touchend"]) document.addEventListener(am, Dm, {
        capture: !0,
        signal: fm.signal
      });
      for (const am of xm.c) document.addEventListener(am, im, {
        capture: !0,
        signal: fm.signal
      })
    });
    let Om = 0;
    const Ym = null === (hm = wm._autoSuspend) || void 0 === hm ? void 0 : hm.bind(Am.Howler);

    function qm() {
      jm();
      const {
        ctx: mm,
        masterGain: Tm
      } = wm;
      return mm && Tm ? {
        ctx: mm,
        destination: Tm,
        holdAwake: mm => {
          var Tm, fm;
          (Om += mm ? 1 : -1, mm) ? null === (Tm = wm._autoResume) || void 0 === Tm || Tm.call(wm): null === (fm = wm._autoSuspend) || void 0 === fm || fm.call(wm)
        },
        wake: () => {
          var Tm;
          "running" !== mm.state && (null === (Tm = wm._autoResume) || void 0 === Tm || Tm.call(wm), mm.resume().catch((() => {})))
        }
      } : null
    }

    function jm() {
      var mm;
      (wm.volume(), wm.ctx && wm.autoUnlock) && (null === (mm = wm._unlockAudio) || void 0 === mm || mm.call(wm))
    }
    Ym && (wm._autoSuspend = () => Om > 0 ? Am.Howler : Ym())
  },
  42628: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => hm,
      c: () => Am
    });
    const hm = ["recording", "freecam", "keyframe"];

    function Am() {
      const mm = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(mm[1]) << 32n | BigInt(mm[0])
    }
  },
  60682: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      HOLD_TIMEOUT_MS: () => im,
      ReplayViewer: () => pm
    });
    var hm = fm(37048),
      Am = fm(37087),
      am = fm(37084),
      xm = fm(37101),
      wm = fm(4732),
      Dm = fm(42628);
    const im = 1e4,
      Rm = new Set(["KO"]);
    class pm {
      constructor(mm) {
        var Tm;
        this.deps = mm, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (Tm = mm.now) && void 0 !== Tm ? Tm : () => performance.now()
      }
      get inPlayback() {
        return this.playback
      }
      get view() {
        return this.lastView
      }
      get isOpen() {
        return null !== this.lastView && this.lastView.state !== wm.ld.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get ni() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? hm.e.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(mm, Tm) {
        var fm, am, xm, Dm;
        const {
          client: im
        } = this.deps;
        if (!this.playback) {
          if (!im.setPlayback(!0)) throw new Error(hm.e.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const Rm = this.epoch;
        let pm;
        try {
          pm = await im.open(mm, (() => (0, Am.e)(mm, Tm)))
        } finally {
          this.loadingOpens--
        }
        if (Rm !== this.epoch && "reloading" !== pm) throw new Error(hm.e.coreStopped.text);
        if ("opening" !== pm) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const mm = function(mm) {
            switch (mm) {
              case "reloading":
                return null;
              case "stopped":
              case wm.bd.ModuleTrap:
                return hm.e.coreStopped;
              case wm.bd.ModuleLoad:
                return hm.e.viewerLoadFailed;
              case wm.bd.TooLarge:
                return hm.e.cantOpen
            }
          }(pm);
          if (null === mm) return;
          throw new Error(mm.text)
        }
        return this.rejectSave(new Error(hm.e.saveClosed.text)), this.fileName = null !== (fm = null !== (am = Tm.fileName) && void 0 !== am ? am : null === (xm = Tm.fileHandle) || void 0 === xm ? void 0 : xm.name) && void 0 !== fm ? fm : null, this.fileHandle = null !== (Dm = Tm.fileHandle) && void 0 !== Dm ? Dm : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((mm, Tm) => {
          this.pendingOpen = {
            resolve: mm,
            reject: Tm
          }
        }))
      }
      play() {
        this.holds.has("KO") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("KO")
      }
      seek(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const fm = this.lastView;
        null !== fm && (Tm || mm < fm.DE) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(mm, Tm)
      }
      setSpeed(mm) {
        this.deps.client.setSpeed(mm)
      }
      setCameraMode(mm) {
        this.deps.client.setCameraMode(mm)
      }
      cycleCameraMode() {
        const mm = this.lastView;
        null !== mm && mm.state !== wm.ld.None && this.setCameraMode(Dm.b[(Dm.b.indexOf(mm.cameraMode) + 1) % Dm.b.length])
      }
      addKeyframe() {
        this.edited(this.deps.client.addKeyframe())
      }
      setKeyframe(mm) {
        this.edited(this.deps.client.setKeyframe(mm))
      }
      moveKeyframe(mm, Tm) {
        this.edited(this.deps.client.moveKeyframe(mm, Tm))
      }
      deleteKeyframes(mm, Tm) {
        this.edited(this.deps.client.deleteKeyframes(mm, Tm))
      }
      setMark(mm) {
        this.edited(this.deps.client.setMark(mm))
      }
      crop(mm, Tm) {
        return !(Tm <= mm) && (null !== this.pendingSave ? (this.deps.notify(hm.e.saveBusy), !1) : !!this.deps.client.crop(mm, Tm) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(hm.e.saveBusy.text)) : new Promise(((mm, Tm) => {
          const fm = {
            resolve: mm,
            reject: Tm
          };
          this.pendingSave = fm, this.editsAtSave = this.edits, this.deps.client.save((0, Dm.c)()).then((mm => {
            this.pendingSave === fm && this.saveStarted(mm)
          }), (mm => {
            this.pendingSave === fm && this.rejectSave(mm instanceof Error ? mm : new Error(String(mm)))
          }))
        }))
      }
      saveStarted(mm) {
        switch (mm) {
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
      markSaved(mm, Tm) {
        var fm, hm;
        this.fileHandle = mm, this.fileName = null !== (fm = null !== (hm = null === mm || void 0 === mm ? void 0 : mm.name) && void 0 !== hm ? hm : Tm) && void 0 !== fm ? fm : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(hm.e.coreStopped.text)), this.rejectSave(new Error(hm.e.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var mm, Tm, fm;
        const hm = this.deps.client.view(),
          Am = hm !== this.lastView;
        this.lastView = hm, this.opening && null !== hm && hm.state !== wm.ld.None && hm.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, xm.d)()), this.cropAsked ? (this.cropAsked = !1, null !== hm && hm.state === wm.ld.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== hm && hm.state !== wm.ld.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const am = 0 === this.settleFrames && 0 === (null !== (mm = null === (Tm = (fm = this.deps).meshPending) || void 0 === Tm ? void 0 : Tm.call(fm)) && void 0 !== mm ? mm : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && am && this.release("opening"), this.holds.has("seek") && am && this.release("seek"), this.holds.has("crop") && !this.cropRunning && am && this.release("crop");
        const Dm = this.now();
        for (const [xm, wm] of this.holds) !Rm.has(xm) && Dm - wm >= im && this.release(xm);
        this.saveRefused && !this.cropping && this.saveFailed(!1), Am && this.deps.onChange()
      }
      cropped() {
        (0, xm.d)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(mm) {
        switch (mm.reason) {
          case wm.bd.TooLarge:
            break;
          case wm.bd.Open:
          case wm.bd.NothingStaged: {
            this.opening = !1, this.release("opening");
            const Tm = (0, am.c)(mm.version) ? hm.e.replayTooOld : hm.e.cantOpen;
            null === this.pendingOpen && this.deps.notify(Tm), this.settleOpen(new Error(Tm.text));
            break
          }
          case wm.bd.Crop:
            if (mm.code === wm._c.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(hm.e.cropFailed);
            break;
          case wm.bd.ModuleTrap:
          case wm.bd.ModuleLoad:
          case wm.bd.Port:
            this.moduleEnded(mm.reason === wm.bd.ModuleTrap ? hm.e.coreStopped : hm.e.cantOpen);
            break;
          case wm.bd.NotLive:
            console.warn("[bloxd-wasm-client] the core refused a recorder command in playback");
            break;
          default:
            console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${mm.reason})`), this.seekAsked = !1, this.release("seek")
        }
        this.deps.onChange()
      }
      moduleEnded(mm) {
        this.resetInFlight(), this.release("opening"), this.release("seek"), this.release("crop"), null === this.pendingOpen && this.deps.notify(mm), this.settleOpen(new Error(mm.text))
      }
      saveDone(mm) {
        const Tm = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === Tm || void 0 === Tm || Tm.resolve(mm)
      }
      saveFailed(mm) {
        this.rejectSave(new Error(mm ? hm.e.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(mm) {
        mm && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(hm.e.cropBusy.text)) : this.deps.notify(hm.e.cropBusy)
      }
      resetInFlight() {
        this.opening = !1, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0
      }
      settleOpen(mm) {
        const Tm = this.pendingOpen;
        this.pendingOpen = null, null === mm ? null === Tm || void 0 === Tm || Tm.resolve() : null === Tm || void 0 === Tm || Tm.reject(mm)
      }
      rejectSave(mm) {
        const Tm = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === Tm || void 0 === Tm || Tm.reject(mm)
      }
      hold(mm) {
        const Tm = 0 === this.holds.size;
        this.holds.set(mm, this.now()), Tm && this.deps.setHoldDraws(!0)
      }
      release(mm) {
        this.holds.delete(mm) && 0 === this.holds.size && this.deps.setHoldDraws(!1)
      }
      releaseAll() {
        this.holds.size > 0 && (this.holds.clear(), this.deps.setHoldDraws(!1))
      }
    }
  },
  60677: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      MESH_TAIL_MS: () => im,
      PLAY_START_TIMEOUT_MS: () => wm,
      startWasmReplayVideoExport: () => pm
    });
    var hm = fm(39377),
      Am = fm(60682),
      am = fm(4732),
      xm = fm(2379);
    const wm = Am.HOLD_TIMEOUT_MS + 5e3,
      Dm = 50,
      im = 200;

    function Rm(mm) {
      var Tm;
      return (null === (Tm = mm.view) || void 0 === Tm ? void 0 : Tm.state) === am.ld.Cropping || mm.ni.includes("crop")
    }

    function pm(mm) {
      return (0, hm.c)((() => function(mm) {
        var Tm, fm, hm, Am, pm, Em;
        const om = mm.viewer(),
          Om = null !== (Tm = null === om || void 0 === om ? void 0 : om.view) && void 0 !== Tm ? Tm : null,
          Ym = mm.canvas();
        if (!om || !Om || Om.state === am.ld.None || 0 === Om.totalTicks || !Ym || Rm(om)) return null;
        const qm = null !== (fm = mm.now) && void 0 !== fm ? fm : () => performance.now(),
          jm = om.id,
          Vm = () => {
            const Tm = mm.viewer();
            return Tm === om && Tm.id === jm && Tm.isOpen ? Tm : null
          },
          Im = Math.min(null !== (hm = null === (Am = Om.mark) || void 0 === Am ? void 0 : Am.outTick) && void 0 !== hm ? hm : 1 / 0, Om.totalTicks - 1);
        let Km = null,
          Qm = !1;
        const nm = () => {
          var mm, Tm;
          return (null === (mm = Vm()) || void 0 === mm || null === (Tm = mm.view) || void 0 === Tm ? void 0 : Tm.state) === am.ld.Playing
        };
        return {
          aG: am.Bd,
          playbackMarkInTick: null !== (pm = null === (Em = Om.mark) || void 0 === Em ? void 0 : Em.inTick) && void 0 !== pm ? pm : null,
          startFailure: () => {
            const mm = Vm();
            return null === mm ? "Another replay opened. Export it again from there." : Rm(mm) ? "Wait for the crop to finish, then export again." : null
          },
          fileName: () => {
            var mm, Tm;
            return null !== (mm = null === (Tm = Vm()) || void 0 === Tm ? void 0 : Tm.fileName) && void 0 !== mm ? mm : null
          },
          playbackSpeed: () => {
            var mm, Tm, fm;
            return null !== (mm = null === (Tm = Vm()) || void 0 === Tm || null === (fm = Tm.view) || void 0 === fm ? void 0 : fm.speed) && void 0 !== mm ? mm : 1
          },
          setPlaybackSpeed: mm => {
            var Tm;
            null === (Tm = Vm()) || void 0 === Tm || Tm.setSpeed(mm)
          },
          play: () => {
            var mm;
            Qm = !1, Km = qm(), null === (mm = Vm()) || void 0 === mm || mm.play()
          },
          pause: () => {
            var mm;
            null === (mm = Vm()) || void 0 === mm || mm.pause()
          },
          seekToTick: mm => {
            var Tm;
            null === (Tm = Vm()) || void 0 === Tm || Tm.seek(mm, !0)
          },
          seekSettled: () => new Promise((mm => {
            const Tm = setInterval((() => {
              const fm = Vm();
              null === fm ? (clearInterval(Tm), mm()) : fm.ni.includes("seek") || (clearInterval(Tm), setTimeout(mm, im))
            }), Dm)
          })),
          isPlaying: () => {
            var mm, Tm, fm;
            return null !== Km && null !== Vm() && (!!nm() || !Qm && (null !== (mm = null === (Tm = Vm()) || void 0 === Tm || null === (fm = Tm.view) || void 0 === fm ? void 0 : fm.DE) && void 0 !== mm ? mm : 0) < Im && qm() - Km < wm)
          },
          watchPlayback: Tm => {
            const fm = mm.watchViewer((() => {
                Qm ||= null !== Km && nm(), Tm()
              })),
              hm = setTimeout(Tm, wm + 1);
            return () => {
              clearTimeout(hm), fm()
            }
          },
          playbackFailure: () => {
            var mm, Tm;
            const fm = Vm();
            return null === fm ? "The replay closed before the video finished." : (null !== (mm = null === (Tm = fm.view) || void 0 === Tm ? void 0 : Tm.DE) && void 0 !== mm ? mm : 0) >= Im ? null : Qm ? "The replay stopped before the video finished." : "The replay didn't start playing."
          },
          canvas: () => Ym,
          closeViewer: () => {
            mm.requestViewer("close")
          },
          reopenViewer: () => {
            mm.requestViewer("open")
          },
          holdInput: xm.f
        }
      }(mm)))
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);