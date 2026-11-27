export const id = 79;
export const ids = [73, 79, 110];
export const modules = {
  38450: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => xr,
      g: () => mr
    });
    var Zr = Qr(688),
      Wr = Qr(43),
      ar = Qr(38411);
    const jr = "replayFileKeptForReload",
      Ir = "replayFileKeptForReloadAt",
      fr = "replayFileKeptForReloadTab",
      Er = 3e5,
      pr = 5e3;
    async function xr(rr, Sr) {
      const Qr = Date.now(),
        ar = {
          at: Qr,
          bytes: rr,
          source: Sr
        },
        Er = await Promise.race([(async () => await Wr.h.setItem(Ir, Qr) && Wr.h.setItem(jr, ar))(), (0, Zr.T)(pr).then((() => !1))]);
      Er || console.warn("The replay file couldn't be kept across the reload into a newer build: the reloaded page asks for it again");
      const xr = {
        at: Qr,
        sp: Er
      };
      Wr.n.setItem(fr, xr)
    }
    async function mr() {
      var rr;
      const Sr = Wr.n.getItem(fr);
      null !== Sr && Wr.n.removeItem(fr);
      const Qr = Date.now(),
        Zr = await Wr.h.getItem(Ir),
        pr = null !== Sr && Qr - Sr.at <= Er,
        xr = null !== Sr && Zr === Sr.at;
      let mr = null;
      if (null !== Zr && (xr || ("number" !== typeof Zr || Qr - Zr > Er)) && (mr = pr && xr && Sr.sp ? await Wr.h.getItem(jr) : null, await Promise.all([Wr.h.removeItem(Ir), Wr.h.removeItem(jr)])), !pr) return null;
      if ((null === (rr = mr) || void 0 === rr ? void 0 : rr.at) !== Sr.at) throw new Error(ar.d.replayNotKept.text);
      return {
        bytes: mr.bytes,
        source: mr.source
      }
    }
  },
  38446: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Zr,
      e: () => ar,
      f: () => Wr
    });
    const Zr = [9];

    function Wr(rr) {
      return Zr.includes(rr)
    }

    function ar(rr) {
      return null !== rr && rr >= 3 && rr < Zr[0]
    }
  },
  38411: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => jr,
      f: () => Er,
      h: () => fr
    });
    var Zr = Qr(34);
    const Wr = 1500,
      ar = 1e3,
      jr = {
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
      Ir = new Set(Object.values(jr).filter((rr => "Error" === rr.type)).map((rr => rr.text)));

    function fr(rr) {
      return rr instanceof Error && Ir.has(rr.message) ? rr.message : void 0
    }

    function Er(rr) {
      var Sr;
      const Qr = null !== (Sr = rr.timeoutMs) && void 0 !== Sr ? Sr : "Error" === rr.type ? Wr : ar;
      Zr.i.Jp("showBottomMessage", {
        message: rr.text,
        timeoutLength: Qr,
        type: rr.type
      })
    }
  },
  38462: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Zr,
      e: () => Wr
    });
    const Zr = "data-replay-ui-active",
      Wr = [{
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
  38464: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Er,
      d: () => xr,
      e: () => pr
    });
    var Zr = Qr(26),
      Wr = Qr(34),
      ar = Qr(38462);

    function jr() {
      const rr = {};
      for (const {
          group: Sr
        }
        of ar.e) rr[Sr] = !0;
      return rr
    }
    let Ir = jr();

    function fr() {
      Wr.i.Jp("replayViewer|uiVisibilityChanged")
    }

    function Er() {
      return Ir
    }

    function pr(rr, Sr) {
      Ir[rr] !== Sr && (Ir = {
        ...Ir,
        [rr]: Sr
      }, "nametag" === rr && Zr.c.set({
        areNametagsHidden: !Sr
      }), fr())
    }

    function xr() {
      Ir = jr(), Zr.c.set({
        areNametagsHidden: !1
      }), fr()
    }
  },
  40828: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Xr
    });
    var Zr = Qr(1904),
      Wr = Qr(1475),
      ar = Qr(72),
      jr = Qr(1155),
      Ir = Qr.n(jr),
      fr = Qr(1576),
      Er = Qr(109);
    const pr = ["video/webm;codecs=vp9,opus", "video/webm;codecs=vp8,opus", "video/webm;codecs=vp9", "video/webm;codecs=vp8", "video/webm"],
      xr = ["video/mp4;codecs=avc1,mp4a.40.2", "video/mp4;codecs=avc1.42E01E,mp4a.40.2", "video/mp4;codecs=avc1", "video/mp4"];

    function mr(rr) {
      return "webm" === rr ? pr : xr
    }

    function Nr(rr) {
      for (const Sr of rr)
        if ("undefined" !== typeof MediaRecorder && MediaRecorder.isTypeSupported(Sr)) return Sr;
      return null
    }

    function Ur(rr) {
      return null !== Nr(mr(rr))
    }
    var tr = Qr(1338);
    const hr = [{
      id: "webm",
      label: "WebM",
      description: "Usually less screen tearing, but may not play in all media players."
    }, {
      id: "mp4",
      label: "MP4",
      description: "Works in more players, but may show graphical glitches on some devices."
    }];

    function zr() {
      return Ur("webm") ? "webm" : Ur("mp4") ? "mp4" : "webm"
    }

    function Yr(rr) {
      let {
        cards: Sr
      } = rr;
      return (0, tr.jsx)("div", {
        className: "ReplayVideoExportOptionCards",
        children: Sr.map((rr => (0, tr.jsxs)("div", {
          className: "ReplayVideoExportOptionColumn",
          children: [(0, tr.jsx)("div", {
            className: Ir()("ReplayVideoExportOptionCard", {
              Selected: rr.selected,
              Disabled: rr.disabled
            }),
            onClick: () => {
              rr.disabled || rr.onSelect()
            },
            children: (0, tr.jsxs)("div", {
              className: "ReplayVideoExportOptionCardBody",
              children: [(0, tr.jsx)("div", {
                className: "ReplayVideoExportOptionCardLabel",
                children: rr.label
              }), (0, tr.jsx)("div", {
                className: "ReplayVideoExportOptionCardDescription",
                children: rr.description
              })]
            })
          }), rr.disabled && rr.disabledReason && (0, tr.jsx)("div", {
            className: "ReplayVideoExportOptionError SmallTextLight",
            children: rr.disabledReason
          })]
        }, rr.id)))
      })
    }
    const nr = (0, ar.memo)((function(rr) {
      let {
        hasPlaybackMark: Sr,
        canIncludeUi: Qr,
        includeUiDisabledReason: Zr,
        selectionRef: Wr,
        closePopup: jr
      } = rr;
      const Ir = Ur("webm") || Ur("mp4"),
        [pr, xr] = (0, ar.useState)(zr),
        [mr, Nr] = (0, ar.useState)(Qr),
        nr = Ir && Ur(pr);
      if (!Ir) {
        const rr = (0, Er.isMobile)() ? "screen recording" : "OBS";
        return (0, tr.jsxs)("div", {
          className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
          children: [(0, tr.jsx)("div", {
            className: "PromptPopupNotificationTitle SmallTextBold",
            children: "Can't export video"
          }), (0, tr.jsx)("div", {
            className: "PromptPopupNotificationSubtitle SmallTextLight",
            children: `Your device does not support exporting. Try recording with an external software like ${rr}.`
          }), (0, tr.jsx)("div", {
            className: "PromptPopupNotificationBody",
            children: (0, tr.jsx)(fr.L, {
              className: "PromptPopupNotificationBodyButton",
              onClick: () => {
                Wr.options = null, jr()
              },
              children: "Close"
            })
          })]
        })
      }
      const er = Sr ? "This will only play the range you've set.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes." : "This will play the whole recording from the start.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes.",
        Kr = [{
          id: "withoutUi",
          label: "Without UI",
          description: "Usually cleaner and sharper.",
          selected: !mr,
          disabled: !1,
          disabledReason: null,
          onSelect: () => {
            Nr(!1)
          }
        }, {
          id: "withUi",
          label: "With UI",
          description: "Includes HUD elements. May look worse on some devices.",
          selected: mr,
          disabled: !Qr,
          disabledReason: Zr,
          onSelect: () => {
            Nr(!0)
          }
        }],
        yr = hr.map((rr => {
          const Sr = Ur(rr.id);
          return {
            id: rr.id,
            label: rr.label,
            description: rr.description,
            selected: pr === rr.id,
            disabled: !Sr,
            disabledReason: "Your device doesn't support this format",
            onSelect: () => {
              xr(rr.id)
            }
          }
        }));
      return (0, tr.jsxs)("div", {
        className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
        children: [(0, tr.jsx)("div", {
          className: "PromptPopupNotificationTitle SmallTextBold",
          children: "Export video?"
        }), (0, tr.jsx)("div", {
          className: "PromptPopupNotificationSubtitle SmallTextLight",
          children: er
        }), (0, tr.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, tr.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "UI"
          }), (0, tr.jsx)(Yr, {
            cards: Kr
          })]
        }), (0, tr.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, tr.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "Format"
          }), (0, tr.jsx)(Yr, {
            cards: yr
          })]
        }), (0, tr.jsxs)("div", {
          className: "PromptPopupNotificationBody",
          children: [(0, tr.jsx)(fr.p, {
            className: "PromptPopupNotificationBodyButton PromptPopupNotificationBodyPrimaryButton",
            disabled: !nr,
            onClick: () => {
              Wr.options = {
                format: pr,
                includeUi: Qr && mr
              }, jr()
            },
            children: "Export"
          }), (0, tr.jsx)(fr.L, {
            className: "PromptPopupNotificationBodyButton",
            onClick: () => {
              Wr.options = null, jr()
            },
            children: "Cancel"
          })]
        })]
      })
    }));
    var er = Qr(5681),
      Kr = Qr(38462),
      yr = Qr(38464);
    let Br = null;

    function Tr() {
      return function() {
        const rr = (0, yr.c)();
        for (const {
            group: Sr,
            dataAttr: Qr
          }
          of Kr.e)
          if (Qr && rr[Sr]) return !0;
        return !1
      }() ? function() {
        var rr;
        return "function" === typeof(null === (rr = navigator.mediaDevices) || void 0 === rr ? void 0 : rr.getDisplayMedia)
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
    async function vr(rr, Sr, Qr) {
      return rr ? async function() {
        const rr = await navigator.mediaDevices.getDisplayMedia({
          video: !0,
          audio: !1,
          preferCurrentTab: !0,
          selfBrowserSurface: "include"
        });
        for (const Sr of rr.getAudioTracks()) Sr.stop(), rr.removeTrack(Sr);
        return rr
      }(): Sr().captureStream(Math.max(1, Math.round(Qr)))
    }
    var Or = Qr(40646);
    let Lr = !1;

    function lr(rr) {
      rr.holdInput(!1), (0, Or.f)(!1)
    }
    async function Xr(rr) {
      var Sr, Qr;
      if ((0, Or.e)() || Lr) return;
      const ar = rr();
      if (!ar) return;
      Lr = !0;
      let jr = null;
      const Ir = ar.playbackMarkInTick,
        {
          canIncludeUi: fr,
          includeUiDisabledReason: Er
        } = Tr();
      try {
        jr = await async function(rr) {
          let {
            hasPlaybackMark: Sr,
            canIncludeUi: Qr,
            includeUiDisabledReason: Zr
          } = rr;
          const ar = {
              options: null
            },
            jr = Wr.NotificationProvider.showCustomPopup({
              body: rr => (0, tr.jsx)(nr, {
                hasPlaybackMark: Sr,
                canIncludeUi: Qr,
                includeUiDisabledReason: Zr,
                selectionRef: ar,
                closePopup: rr
              }),
              disableExitButton: !0,
              disablePressBackgroundToClose: !0,
              unlockPointerKey: "replayVideoExportOptions"
            });
          return "notificationTornDown" === await jr.getResult() ? null : ar.options
        }({
          hasPlaybackMark: null !== Ir,
          canIncludeUi: fr,
          includeUiDisabledReason: Er
        })
      } finally {
        Lr = !1
      }
      if (!jr) return;
      const pr = null !== (Sr = null === (Qr = ar.startFailure) || void 0 === Qr ? void 0 : Qr.call(ar)) && void 0 !== Sr ? Sr : null;
      if (null !== pr) return void Wr.NotificationProvider.showAlertPopup({
        title: "Video export failed",
        subtitle: pr
      });
      if (! function(rr) {
          return !(0, Or.e)() && ((0, Or.f)(!0), rr.holdInput(!0), !0)
        }(ar)) return;
      let xr = null;
      try {
        xr = await vr(jr.includeUi, (() => ar.canvas()), ar.pC)
      } catch (Pr) {
        return console.error("Failed to create video stream for export", Pr), lr(ar), void Wr.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: Pr instanceof Error ? Pr.message : "Could not start capture."
        })
      }
      let Ur = null;
      const hr = [];
      let zr = null,
        Yr = null;
      try {
        var Kr, yr, Xr;
        Ur = ar.playbackSpeed(), ar.closeViewer(), ar.setPlaybackSpeed(1), ar.pause(), ar.seekToTick(null !== Ir && void 0 !== Ir ? Ir : 0);
        const rr = await async function() {
          const rr = er.Howler.masterGain;
          if (!er.Howler.ctx || !rr) return null;
          await er.Howler.ctx.resume();
          const Sr = er.Howler.ctx.createMediaStreamDestination();
          rr.connect(Sr), Br = Sr;
          const [Qr] = Sr.stream.getAudioTracks();
          return null !== Qr && void 0 !== Qr ? Qr : null
        }();
        Yr = new MediaStream;
        for (const Zr of xr.getVideoTracks()) Yr.addTrack(Zr);
        rr && Yr.addTrack(rr);
        const Sr = function(rr) {
          const Sr = Nr(mr(rr));
          if (!Sr) throw new Error(`No MediaRecorder mime type available for ${rr}`);
          return Sr
        }(jr.format);
        zr = new MediaRecorder(Yr, {
          mimeType: Sr,
          videoBitsPerSecond: 8e6
        }), zr.ondataavailable = rr => {
          rr.data.size > 0 && hr.push(rr.data)
        };
        const Qr = new Promise((rr => {
          zr.onstop = () => {
            rr()
          }
        }));
        await (null === (Kr = ar.seekSettled) || void 0 === Kr ? void 0 : Kr.call(ar));
        const [fr] = xr.getVideoTracks();
        zr.start(250), ar.play();
        const Er = await
        function(rr, Sr, Qr) {
          return new Promise((Zr => {
            let Wr = !1;
            const ar = rr => {
                Wr || (Wr = !0, Ir(), Sr.removeEventListener("ended", jr), Zr(rr))
              },
              jr = () => {
                ar("captureLost")
              },
              Ir = rr.watchPlayback((() => {
                rr.isPlaying() || ar("completed")
              }));
            Sr.addEventListener("ended", jr), Qr.onerror = () => {
              ar("recorderError")
            }, "ended" !== Sr.readyState ? rr.isPlaying() || ar("completed") : ar("captureLost")
          }))
        }(ar, fr, zr);
        if (ar.pause(), "inactive" !== zr.state && zr.stop(), await Qr, "captureLost" === Er) return void Wr.NotificationProvider.showAlertPopup({
          title: "Video export stopped",
          subtitle: "Screen sharing ended before the replay finished. Nothing was saved."
        });
        if ("recorderError" === Er) return void Wr.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "The recorder encountered an error. Nothing was saved."
        });
        const pr = null !== (yr = null === (Xr = ar.playbackFailure) || void 0 === Xr ? void 0 : Xr.call(ar)) && void 0 !== yr ? yr : null;
        if (null !== pr) return void Wr.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: `${pr} Nothing was saved.`
        });
        const tr = new Blob(hr, {
          type: Sr
        });
        tr.size > 0 ? (0, Zr.c)(tr, function(rr, Sr) {
          const Qr = function(rr) {
            return "mp4" === rr ? "mp4" : "webm"
          }(Sr);
          if (rr) return `${rr.replace(/\.bloxdreplay$/i,"")}.${Qr}`;
          return `bloxd-replay-${Date.now()}.${Qr}`
        }(ar.fileName(), jr.format)) : Wr.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "No video data was captured. Try again."
        })
      } catch (Pr) {
        console.error("Replay video export failed", Pr), Wr.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: Pr instanceof Error ? Pr.message : "Something went wrong while exporting."
        })
      } finally {
        if (zr && "inactive" !== zr.state) try {
          zr.stop()
        } catch (Pr) {
          console.error("Failed to stop MediaRecorder", Pr)
        }! function() {
          const rr = er.Howler.masterGain;
          if (Br && rr) {
            try {
              rr.disconnect(Br)
            } catch (Pr) {
              console.error("Failed to disconnect Howler export tee", Pr)
            }
            Br = null
          } else Br = null
        }();
        for (const rr of xr.getTracks()) rr.stop();
        if (Yr)
          for (const rr of Yr.getTracks()) rr.stop();
        null !== Ur && ar.setPlaybackSpeed(Ur), ar.pause(), lr(ar), ar.reopenViewer()
      }
    }
  },
  5681: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      Howl: () => Wr.Howl,
      Howler: () => Wr.Howler,
      musicOutput: () => hr,
      readyAudioContext: () => zr
    });
    var Zr, Wr = Qr(5689),
      ar = Qr(4681),
      jr = Qr(5413);
    const Ir = Wr.Howler;

    function fr() {
      var rr, Sr;
      if (Ir.ctx || !Ir.usingWebAudio || "undefined" === typeof AudioContext || !(0, jr.i)()) return;
      const Qr = navigator.audioSession;
      let Zr;
      "auto" === (null === Qr || void 0 === Qr ? void 0 : Qr.type) && (Qr.type = "ambient");
      try {
        Zr = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const Wr = Zr.createGain();
      Wr.gain.setValueAtTime(Ir._muted ? 0 : null !== (rr = Ir._volume) && void 0 !== rr ? rr : 1, Zr.currentTime), Wr.connect(Zr.destination), Ir.ctx = Zr, Ir.masterGain = Wr, null === (Sr = Ir._setup) || void 0 === Sr || Sr.call(Ir)
    }
    Ir._mobileUnloaded = !0;
    const Er = Ir.volume.bind(Wr.Howler);
    Ir.volume = function() {
      return fr(), Er(...arguments)
    };
    const pr = Ir.mute.bind(Wr.Howler);
    Ir.mute = rr => (fr(), pr(rr));
    const xr = Wr.Howl.prototype,
      mr = xr.init;

    function Nr() {
      for (; Ir._html5AudioPool.length < Ir.html5PoolSize;) {
        const rr = new Audio;
        rr._unlocked = !0, Ir._releaseHtml5Audio(rr)
      }
      for (const Sr of Ir._howls)
        if (!Sr._webAudio)
          for (const Qr of Sr._getSoundIds()) {
            var rr;
            const Zr = null === (rr = Sr._soundById(Qr)) || void 0 === rr ? void 0 : rr._node;
            Zr && !Zr._unlocked && (Zr._unlocked = !0, Zr.load())
          }
    }
    xr.init = function(rr) {
      return fr(), mr.call(this, rr)
    }, (0, jr.i)() && (Ir._unlockAudio = () => {
      const rr = Ir.ctx;
      if (Ir._audioUnlocked || !rr) return;
      Ir.autoUnlock = !1;
      const Sr = rr.createBuffer(1, 1, 22050);
      Ir._scratchBuffer = Sr;
      const Qr = new AbortController;
      let Zr = "afterPaint";
      const Wr = () => {
          var Zr;
          if (Ir._audioUnlocked) return;
          null === (Zr = Ir._autoResume) || void 0 === Zr || Zr.call(Ir);
          const Wr = rr.createBufferSource();
          Wr.buffer = Sr, Wr.connect(rr.destination), Wr.start(0), rr.resume().catch((() => {})), Wr.onended = () => {
            Wr.disconnect(0), Ir._audioUnlocked = !0, Qr.abort();
            for (const rr of Ir._howls) rr._emit("unlock")
          }
        },
        fr = () => {
          Nr(), Wr()
        },
        Er = Sr => {
          if (Nr(), "inTap" === Zr) {
            if ("running" === rr.state) return;
            console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), Wr()
          } else "afterPaint" === Zr && (Zr = "queued", (0, ar.e)(Sr.timeStamp, (() => {
            Zr = "inTap", Wr()
          })))
        };
      for (const ar of ["touchstart", "touchend"]) document.addEventListener(ar, fr, {
        capture: !0,
        signal: Qr.signal
      });
      for (const ar of jr.c) document.addEventListener(ar, Er, {
        capture: !0,
        signal: Qr.signal
      })
    });
    let Ur = 0;
    const tr = null === (Zr = Ir._autoSuspend) || void 0 === Zr ? void 0 : Zr.bind(Wr.Howler);

    function hr() {
      zr();
      const {
        ctx: rr,
        masterGain: Sr
      } = Ir;
      return rr && Sr ? {
        ctx: rr,
        destination: Sr,
        holdAwake: rr => {
          var Sr, Qr;
          (Ur += rr ? 1 : -1, rr) ? null === (Sr = Ir._autoResume) || void 0 === Sr || Sr.call(Ir): null === (Qr = Ir._autoSuspend) || void 0 === Qr || Qr.call(Ir)
        },
        wake: () => {
          var Sr;
          "running" !== rr.state && (null === (Sr = Ir._autoResume) || void 0 === Sr || Sr.call(Ir), rr.resume().catch((() => {})))
        }
      } : null
    }

    function zr() {
      var rr;
      (Ir.volume(), Ir.ctx && Ir.autoUnlock) && (null === (rr = Ir._unlockAudio) || void 0 === rr || rr.call(Ir))
    }
    tr && (Ir._autoSuspend = () => Ur > 0 ? Wr.Howler : tr())
  },
  55093: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Zr,
      d: () => Wr
    });
    const Zr = ["recording", "freecam", "keyframe"];

    function Wr() {
      const rr = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(rr[1]) << 32n | BigInt(rr[0])
    }
  },
  64584: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      HOLD_TIMEOUT_MS: () => Er,
      ReplayViewer: () => xr
    });
    var Zr = Qr(38411),
      Wr = Qr(38450),
      ar = Qr(38446),
      jr = Qr(38464),
      Ir = Qr(5610),
      fr = Qr(55093);
    const Er = 1e4,
      pr = new Set(["zU"]);
    class xr {
      constructor(rr) {
        var Sr;
        this.deps = rr, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (Sr = rr.now) && void 0 !== Sr ? Sr : () => performance.now()
      }
      get inPlayback() {
        return this.playback
      }
      get view() {
        return this.lastView
      }
      get isOpen() {
        return null !== this.lastView && this.lastView.state !== Ir.yd.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get wI() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? Zr.d.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(rr, Sr) {
        var Qr, ar, jr, fr;
        const {
          client: Er
        } = this.deps;
        if (!this.playback) {
          if (!Er.setPlayback(!0)) throw new Error(Zr.d.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const pr = this.epoch;
        let xr;
        try {
          xr = await Er.open(rr, (() => (0, Wr.d)(rr, Sr)))
        } finally {
          this.loadingOpens--
        }
        if (pr !== this.epoch && "reloading" !== xr) throw new Error(Zr.d.coreStopped.text);
        if ("opening" !== xr) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const rr = function(rr) {
            switch (rr) {
              case "reloading":
                return null;
              case "stopped":
              case Ir.kd.ModuleTrap:
                return Zr.d.coreStopped;
              case Ir.kd.ModuleLoad:
                return Zr.d.viewerLoadFailed;
              case Ir.kd.TooLarge:
                return Zr.d.cantOpen
            }
          }(xr);
          if (null === rr) return;
          throw new Error(rr.text)
        }
        return this.rejectSave(new Error(Zr.d.saveClosed.text)), this.fileName = null !== (Qr = null !== (ar = Sr.fileName) && void 0 !== ar ? ar : null === (jr = Sr.fileHandle) || void 0 === jr ? void 0 : jr.name) && void 0 !== Qr ? Qr : null, this.fileHandle = null !== (fr = Sr.fileHandle) && void 0 !== fr ? fr : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((rr, Sr) => {
          this.pendingOpen = {
            resolve: rr,
            reject: Sr
          }
        }))
      }
      play() {
        this.holds.has("zU") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("zU")
      }
      seek(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Qr = this.lastView;
        null !== Qr && (Sr || rr < Qr.lx) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(rr, Sr)
      }
      setSpeed(rr) {
        this.deps.client.setSpeed(rr)
      }
      setCameraMode(rr) {
        this.deps.client.setCameraMode(rr)
      }
      cycleCameraMode() {
        const rr = this.lastView;
        null !== rr && rr.state !== Ir.yd.None && this.setCameraMode(fr.c[(fr.c.indexOf(rr.cameraMode) + 1) % fr.c.length])
      }
      addKeyframe() {
        this.edited(this.deps.client.addKeyframe())
      }
      setKeyframe(rr) {
        this.edited(this.deps.client.setKeyframe(rr))
      }
      moveKeyframe(rr, Sr) {
        this.edited(this.deps.client.moveKeyframe(rr, Sr))
      }
      deleteKeyframes(rr, Sr) {
        this.edited(this.deps.client.deleteKeyframes(rr, Sr))
      }
      setMark(rr) {
        this.edited(this.deps.client.setMark(rr))
      }
      crop(rr, Sr) {
        return !(Sr <= rr) && (null !== this.pendingSave ? (this.deps.notify(Zr.d.saveBusy), !1) : !!this.deps.client.crop(rr, Sr) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(Zr.d.saveBusy.text)) : new Promise(((rr, Sr) => {
          const Qr = {
            resolve: rr,
            reject: Sr
          };
          this.pendingSave = Qr, this.editsAtSave = this.edits, this.deps.client.save((0, fr.d)()).then((rr => {
            this.pendingSave === Qr && this.saveStarted(rr)
          }), (rr => {
            this.pendingSave === Qr && this.rejectSave(rr instanceof Error ? rr : new Error(String(rr)))
          }))
        }))
      }
      saveStarted(rr) {
        switch (rr) {
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
      markSaved(rr, Sr) {
        var Qr, Zr;
        this.fileHandle = rr, this.fileName = null !== (Qr = null !== (Zr = null === rr || void 0 === rr ? void 0 : rr.name) && void 0 !== Zr ? Zr : Sr) && void 0 !== Qr ? Qr : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(Zr.d.coreStopped.text)), this.rejectSave(new Error(Zr.d.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var rr, Sr, Qr;
        const Zr = this.deps.client.view(),
          Wr = Zr !== this.lastView;
        this.lastView = Zr, this.opening && null !== Zr && Zr.state !== Ir.yd.None && Zr.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, jr.d)()), this.cropAsked ? (this.cropAsked = !1, null !== Zr && Zr.state === Ir.yd.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== Zr && Zr.state !== Ir.yd.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const ar = 0 === this.settleFrames && 0 === (null !== (rr = null === (Sr = (Qr = this.deps).meshPending) || void 0 === Sr ? void 0 : Sr.call(Qr)) && void 0 !== rr ? rr : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && ar && this.release("opening"), this.holds.has("seek") && ar && this.release("seek"), this.holds.has("crop") && !this.cropRunning && ar && this.release("crop");
        const fr = this.now();
        for (const [jr, Ir] of this.holds) !pr.has(jr) && fr - Ir >= Er && this.release(jr);
        this.saveRefused && !this.cropping && this.saveFailed(!1), Wr && this.deps.onChange()
      }
      cropped() {
        (0, jr.d)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(rr) {
        switch (rr.reason) {
          case Ir.kd.TooLarge:
            break;
          case Ir.kd.Open:
          case Ir.kd.NothingStaged: {
            this.opening = !1, this.release("opening");
            const Sr = (0, ar.e)(rr.version) ? Zr.d.replayTooOld : Zr.d.cantOpen;
            null === this.pendingOpen && this.deps.notify(Sr), this.settleOpen(new Error(Sr.text));
            break
          }
          case Ir.kd.Crop:
            if (rr.code === Ir.jd.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(Zr.d.cropFailed);
            break;
          case Ir.kd.ModuleTrap:
          case Ir.kd.ModuleLoad:
          case Ir.kd.Port:
            this.moduleEnded(rr.reason === Ir.kd.ModuleTrap ? Zr.d.coreStopped : Zr.d.cantOpen);
            break;
          case Ir.kd.NotLive:
            console.warn("[bloxd-wasm-client] the core refused a recorder command in playback");
            break;
          default:
            console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${rr.reason})`), this.seekAsked = !1, this.release("seek")
        }
        this.deps.onChange()
      }
      moduleEnded(rr) {
        this.resetInFlight(), this.release("opening"), this.release("seek"), this.release("crop"), null === this.pendingOpen && this.deps.notify(rr), this.settleOpen(new Error(rr.text))
      }
      saveDone(rr) {
        const Sr = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === Sr || void 0 === Sr || Sr.resolve(rr)
      }
      saveFailed(rr) {
        this.rejectSave(new Error(rr ? Zr.d.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(rr) {
        rr && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(Zr.d.cropBusy.text)) : this.deps.notify(Zr.d.cropBusy)
      }
      resetInFlight() {
        this.opening = !1, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0
      }
      settleOpen(rr) {
        const Sr = this.pendingOpen;
        this.pendingOpen = null, null === rr ? null === Sr || void 0 === Sr || Sr.resolve() : null === Sr || void 0 === Sr || Sr.reject(rr)
      }
      rejectSave(rr) {
        const Sr = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === Sr || void 0 === Sr || Sr.reject(rr)
      }
      hold(rr) {
        const Sr = 0 === this.holds.size;
        this.holds.set(rr, this.now()), Sr && this.deps.setHoldDraws(!0)
      }
      release(rr) {
        this.holds.delete(rr) && 0 === this.holds.size && this.deps.setHoldDraws(!1)
      }
      releaseAll() {
        this.holds.size > 0 && (this.holds.clear(), this.deps.setHoldDraws(!1))
      }
    }
  },
  64578: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      MESH_TAIL_MS: () => Er,
      PLAY_START_TIMEOUT_MS: () => Ir,
      startWasmReplayVideoExport: () => xr
    });
    var Zr = Qr(40828),
      Wr = Qr(64584),
      ar = Qr(5610),
      jr = Qr(3381);
    const Ir = Wr.HOLD_TIMEOUT_MS + 5e3,
      fr = 50,
      Er = 200;

    function pr(rr) {
      var Sr;
      return (null === (Sr = rr.view) || void 0 === Sr ? void 0 : Sr.state) === ar.yd.Cropping || rr.wI.includes("crop")
    }

    function xr(rr) {
      return (0, Zr.c)((() => function(rr) {
        var Sr, Qr, Zr, Wr, xr, mr;
        const Nr = rr.viewer(),
          Ur = null !== (Sr = null === Nr || void 0 === Nr ? void 0 : Nr.view) && void 0 !== Sr ? Sr : null,
          tr = rr.canvas();
        if (!Nr || !Ur || Ur.state === ar.yd.None || 0 === Ur.totalTicks || !tr || pr(Nr)) return null;
        const hr = null !== (Qr = rr.now) && void 0 !== Qr ? Qr : () => performance.now(),
          zr = Nr.id,
          Yr = () => {
            const Sr = rr.viewer();
            return Sr === Nr && Sr.id === zr && Sr.isOpen ? Sr : null
          },
          nr = Math.min(null !== (Zr = null === (Wr = Ur.mark) || void 0 === Wr ? void 0 : Wr.outTick) && void 0 !== Zr ? Zr : 1 / 0, Ur.totalTicks - 1);
        let er = null,
          Kr = !1;
        const yr = () => {
          var rr, Sr;
          return (null === (rr = Yr()) || void 0 === rr || null === (Sr = rr.view) || void 0 === Sr ? void 0 : Sr.state) === ar.yd.Playing
        };
        return {
          pC: ar.Pd,
          playbackMarkInTick: null !== (xr = null === (mr = Ur.mark) || void 0 === mr ? void 0 : mr.inTick) && void 0 !== xr ? xr : null,
          startFailure: () => {
            const rr = Yr();
            return null === rr ? "Another replay opened. Export it again from there." : pr(rr) ? "Wait for the crop to finish, then export again." : null
          },
          fileName: () => {
            var rr, Sr;
            return null !== (rr = null === (Sr = Yr()) || void 0 === Sr ? void 0 : Sr.fileName) && void 0 !== rr ? rr : null
          },
          playbackSpeed: () => {
            var rr, Sr, Qr;
            return null !== (rr = null === (Sr = Yr()) || void 0 === Sr || null === (Qr = Sr.view) || void 0 === Qr ? void 0 : Qr.speed) && void 0 !== rr ? rr : 1
          },
          setPlaybackSpeed: rr => {
            var Sr;
            null === (Sr = Yr()) || void 0 === Sr || Sr.setSpeed(rr)
          },
          play: () => {
            var rr;
            Kr = !1, er = hr(), null === (rr = Yr()) || void 0 === rr || rr.play()
          },
          pause: () => {
            var rr;
            null === (rr = Yr()) || void 0 === rr || rr.pause()
          },
          seekToTick: rr => {
            var Sr;
            null === (Sr = Yr()) || void 0 === Sr || Sr.seek(rr, !0)
          },
          seekSettled: () => new Promise((rr => {
            const Sr = setInterval((() => {
              const Qr = Yr();
              null === Qr ? (clearInterval(Sr), rr()) : Qr.wI.includes("seek") || (clearInterval(Sr), setTimeout(rr, Er))
            }), fr)
          })),
          isPlaying: () => {
            var rr, Sr, Qr;
            return null !== er && null !== Yr() && (!!yr() || !Kr && (null !== (rr = null === (Sr = Yr()) || void 0 === Sr || null === (Qr = Sr.view) || void 0 === Qr ? void 0 : Qr.lx) && void 0 !== rr ? rr : 0) < nr && hr() - er < Ir)
          },
          watchPlayback: Sr => {
            const Qr = rr.watchViewer((() => {
                Kr ||= null !== er && yr(), Sr()
              })),
              Zr = setTimeout(Sr, Ir + 1);
            return () => {
              clearTimeout(Zr), Qr()
            }
          },
          playbackFailure: () => {
            var rr, Sr;
            const Qr = Yr();
            return null === Qr ? "The replay closed before the video finished." : (null !== (rr = null === (Sr = Qr.view) || void 0 === Sr ? void 0 : Sr.lx) && void 0 !== rr ? rr : 0) >= nr ? null : Kr ? "The replay stopped before the video finished." : "The replay didn't start playing."
          },
          canvas: () => tr,
          closeViewer: () => {
            rr.requestViewer("close")
          },
          reopenViewer: () => {
            rr.requestViewer("open")
          },
          holdInput: jr.g
        }
      }(rr)))
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);