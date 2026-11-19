export const id = 63;
export const ids = [57, 63, 91];
export const modules = {
  36422: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => lz,
      h: () => Mz
    });
    var Ez = bz(22);
    const nz = 1500,
      iz = 1e3,
      lz = {
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

    function Mz(zz) {
      var uz;
      const bz = null !== (uz = zz.timeoutMs) && void 0 !== uz ? uz : "Error" === zz.type ? nz : iz;
      Ez.k.sK("showBottomMessage", {
        message: zz.text,
        timeoutLength: bz,
        type: zz.type
      })
    }
  },
  36435: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => Ez,
      g: () => nz
    });
    const Ez = "data-replay-ui-active",
      nz = [{
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
  36441: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => Hz,
      i: () => pz,
      m: () => Oz
    });
    var Ez = bz(20),
      nz = bz(22),
      iz = bz(36435);

    function lz() {
      const zz = {};
      for (const {
          group: uz
        }
        of iz.g) zz[uz] = !0;
      return zz
    }
    let Mz = lz();

    function tz() {
      nz.k.sK("replayViewer|uiVisibilityChanged")
    }

    function Hz() {
      return Mz
    }

    function Oz(zz, uz) {
      Mz[zz] !== uz && (Mz = {
        ...Mz,
        [zz]: uz
      }, "nametag" === zz && Ez.e.set({
        areNametagsHidden: !uz
      }), tz())
    }

    function pz() {
      Mz = lz(), Ez.e.set({
        areNametagsHidden: !1
      }), tz()
    }
  },
  38594: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => Lz
    });
    var Ez = bz(1696),
      nz = bz(1322),
      iz = bz(56),
      lz = bz(1038),
      Mz = bz.n(lz),
      tz = bz(1419),
      Hz = bz(96);
    const Oz = ["video/webm;codecs=vp9,opus", "video/webm;codecs=vp8,opus", "video/webm;codecs=vp9", "video/webm;codecs=vp8", "video/webm"],
      pz = ["video/mp4;codecs=avc1,mp4a.40.2", "video/mp4;codecs=avc1.42E01E,mp4a.40.2", "video/mp4;codecs=avc1", "video/mp4"];

    function dz(zz) {
      return "webm" === zz ? Oz : pz
    }

    function Fz(zz) {
      for (const uz of zz)
        if ("undefined" !== typeof MediaRecorder && MediaRecorder.isTypeSupported(uz)) return uz;
      return null
    }

    function Zz(zz) {
      return null !== Fz(dz(zz))
    }
    var Rz = bz(1089);
    const Kz = [{
      id: "webm",
      label: "WebM",
      description: "Usually less screen tearing, but may not play in all media players."
    }, {
      id: "mp4",
      label: "MP4",
      description: "Works in more players, but may show graphical glitches on some devices."
    }];

    function wz() {
      return Zz("webm") ? "webm" : Zz("mp4") ? "mp4" : "webm"
    }

    function Xz(zz) {
      let {
        cards: uz
      } = zz;
      return (0, Rz.jsx)("div", {
        className: "ReplayVideoExportOptionCards",
        children: uz.map((zz => (0, Rz.jsxs)("div", {
          className: "ReplayVideoExportOptionColumn",
          children: [(0, Rz.jsx)("div", {
            className: Mz()("ReplayVideoExportOptionCard", {
              Selected: zz.selected,
              Disabled: zz.disabled
            }),
            onClick: () => {
              zz.disabled || zz.onSelect()
            },
            children: (0, Rz.jsxs)("div", {
              className: "ReplayVideoExportOptionCardBody",
              children: [(0, Rz.jsx)("div", {
                className: "ReplayVideoExportOptionCardLabel",
                children: zz.label
              }), (0, Rz.jsx)("div", {
                className: "ReplayVideoExportOptionCardDescription",
                children: zz.description
              })]
            })
          }), zz.disabled && zz.disabledReason && (0, Rz.jsx)("div", {
            className: "ReplayVideoExportOptionError SmallTextLight",
            children: zz.disabledReason
          })]
        }, zz.id)))
      })
    }
    const fz = (0, iz.memo)((function(zz) {
      let {
        hasPlaybackMark: uz,
        canIncludeUi: bz,
        includeUiDisabledReason: Ez,
        selectionRef: nz,
        closePopup: lz
      } = zz;
      const Mz = Zz("webm") || Zz("mp4"),
        [Oz, pz] = (0, iz.useState)(wz),
        [dz, Fz] = (0, iz.useState)(bz),
        fz = Mz && Zz(Oz);
      if (!Mz) {
        const zz = (0, Hz.isMobile)() ? "screen recording" : "OBS";
        return (0, Rz.jsxs)("div", {
          className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
          children: [(0, Rz.jsx)("div", {
            className: "PromptPopupNotificationTitle SmallTextBold",
            children: "Can't export video"
          }), (0, Rz.jsx)("div", {
            className: "PromptPopupNotificationSubtitle SmallTextLight",
            children: `Your device does not support exporting. Try recording with an external software like ${zz}.`
          }), (0, Rz.jsx)("div", {
            className: "PromptPopupNotificationBody",
            children: (0, Rz.jsx)(tz.K, {
              className: "PromptPopupNotificationBodyButton",
              onClick: () => {
                nz.options = null, lz()
              },
              children: "Close"
            })
          })]
        })
      }
      const sz = uz ? "This will only play the range you've set.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes." : "This will play the whole recording from the start.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes.",
        rz = [{
          id: "withoutUi",
          label: "Without UI",
          description: "Usually cleaner and sharper.",
          selected: !dz,
          disabled: !1,
          disabledReason: null,
          onSelect: () => {
            Fz(!1)
          }
        }, {
          id: "withUi",
          label: "With UI",
          description: "Includes HUD elements. May look worse on some devices.",
          selected: dz,
          disabled: !bz,
          disabledReason: Ez,
          onSelect: () => {
            Fz(!0)
          }
        }],
        oz = Kz.map((zz => {
          const uz = Zz(zz.id);
          return {
            id: zz.id,
            label: zz.label,
            description: zz.description,
            selected: Oz === zz.id,
            disabled: !uz,
            disabledReason: "Your device doesn't support this format",
            onSelect: () => {
              pz(zz.id)
            }
          }
        }));
      return (0, Rz.jsxs)("div", {
        className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
        children: [(0, Rz.jsx)("div", {
          className: "PromptPopupNotificationTitle SmallTextBold",
          children: "Export video?"
        }), (0, Rz.jsx)("div", {
          className: "PromptPopupNotificationSubtitle SmallTextLight",
          children: sz
        }), (0, Rz.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, Rz.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "UI"
          }), (0, Rz.jsx)(Xz, {
            cards: rz
          })]
        }), (0, Rz.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, Rz.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "Format"
          }), (0, Rz.jsx)(Xz, {
            cards: oz
          })]
        }), (0, Rz.jsxs)("div", {
          className: "PromptPopupNotificationBody",
          children: [(0, Rz.jsx)(tz.q, {
            className: "PromptPopupNotificationBodyButton PromptPopupNotificationBodyPrimaryButton",
            disabled: !fz,
            onClick: () => {
              nz.options = {
                format: Oz,
                includeUi: bz && dz
              }, lz()
            },
            children: "Export"
          }), (0, Rz.jsx)(tz.K, {
            className: "PromptPopupNotificationBodyButton",
            onClick: () => {
              nz.options = null, lz()
            },
            children: "Cancel"
          })]
        })]
      })
    }));
    var sz = bz(4616),
      rz = bz(36435),
      oz = bz(36441);
    let Nz = null;

    function vz() {
      return function() {
        const zz = (0, oz.e)();
        for (const {
            group: uz,
            dataAttr: bz
          }
          of rz.g)
          if (bz && zz[uz]) return !0;
        return !1
      }() ? function() {
        var zz;
        return "function" === typeof(null === (zz = navigator.mediaDevices) || void 0 === zz ? void 0 : zz.getDisplayMedia)
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
    async function xz(zz, uz, bz) {
      return zz ? async function() {
        const zz = await navigator.mediaDevices.getDisplayMedia({
          video: !0,
          audio: !1,
          preferCurrentTab: !0,
          selfBrowserSurface: "include"
        });
        for (const uz of zz.getAudioTracks()) uz.stop(), zz.removeTrack(uz);
        return zz
      }(): uz().captureStream(Math.max(1, Math.round(bz)))
    }
    var Jz = bz(38441);
    let Az = !1;

    function Tz(zz) {
      zz.holdInput(!1), (0, Jz.d)(!1)
    }
    async function Lz(zz) {
      var uz, bz;
      if ((0, Jz.b)() || Az) return;
      const iz = zz();
      if (!iz) return;
      Az = !0;
      let lz = null;
      const Mz = iz.playbackMarkInTick,
        {
          canIncludeUi: tz,
          includeUiDisabledReason: Hz
        } = vz();
      try {
        lz = await async function(zz) {
          let {
            hasPlaybackMark: uz,
            canIncludeUi: bz,
            includeUiDisabledReason: Ez
          } = zz;
          const iz = {
              options: null
            },
            lz = nz.NotificationProvider.showCustomPopup({
              body: zz => (0, Rz.jsx)(fz, {
                hasPlaybackMark: uz,
                canIncludeUi: bz,
                includeUiDisabledReason: Ez,
                selectionRef: iz,
                closePopup: zz
              }),
              disableExitButton: !0,
              disablePressBackgroundToClose: !0,
              unlockPointerKey: "replayVideoExportOptions"
            });
          return "notificationTornDown" === await lz.getResult() ? null : iz.options
        }({
          hasPlaybackMark: null !== Mz,
          canIncludeUi: tz,
          includeUiDisabledReason: Hz
        })
      } finally {
        Az = !1
      }
      if (!lz) return;
      const Oz = null !== (uz = null === (bz = iz.startFailure) || void 0 === bz ? void 0 : bz.call(iz)) && void 0 !== uz ? uz : null;
      if (null !== Oz) return void nz.NotificationProvider.showAlertPopup({
        title: "Video export failed",
        subtitle: Oz
      });
      if (! function(zz) {
          return !(0, Jz.b)() && ((0, Jz.d)(!0), zz.holdInput(!0), !0)
        }(iz)) return;
      let pz = null;
      try {
        pz = await xz(lz.includeUi, (() => iz.canvas()), iz.pT)
      } catch (Pz) {
        return console.error("Failed to create video stream for export", Pz), Tz(iz), void nz.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: Pz instanceof Error ? Pz.message : "Could not start capture."
        })
      }
      let Zz = null;
      const Kz = [];
      let wz = null,
        Xz = null;
      try {
        var rz, oz, Lz;
        Zz = iz.playbackSpeed(), iz.closeViewer(), iz.setPlaybackSpeed(1), iz.pause(), iz.seekToTick(null !== Mz && void 0 !== Mz ? Mz : 0);
        const zz = await async function() {
          const zz = sz.Howler.masterGain;
          if (!sz.Howler.ctx || !zz) return null;
          await sz.Howler.ctx.resume();
          const uz = sz.Howler.ctx.createMediaStreamDestination();
          zz.connect(uz), Nz = uz;
          const [bz] = uz.stream.getAudioTracks();
          return null !== bz && void 0 !== bz ? bz : null
        }();
        Xz = new MediaStream;
        for (const Ez of pz.getVideoTracks()) Xz.addTrack(Ez);
        zz && Xz.addTrack(zz);
        const uz = function(zz) {
          const uz = Fz(dz(zz));
          if (!uz) throw new Error(`No MediaRecorder mime type available for ${zz}`);
          return uz
        }(lz.format);
        wz = new MediaRecorder(Xz, {
          mimeType: uz,
          videoBitsPerSecond: 8e6
        }), wz.ondataavailable = zz => {
          zz.data.size > 0 && Kz.push(zz.data)
        };
        const bz = new Promise((zz => {
          wz.onstop = () => {
            zz()
          }
        }));
        await (null === (rz = iz.seekSettled) || void 0 === rz ? void 0 : rz.call(iz));
        const [tz] = pz.getVideoTracks();
        wz.start(250), iz.play();
        const Hz = await
        function(zz, uz, bz) {
          return new Promise((Ez => {
            let nz = !1;
            const iz = zz => {
                nz || (nz = !0, Mz(), uz.removeEventListener("ended", lz), Ez(zz))
              },
              lz = () => {
                iz("captureLost")
              },
              Mz = zz.watchPlayback((() => {
                zz.isPlaying() || iz("completed")
              }));
            uz.addEventListener("ended", lz), bz.onerror = () => {
              iz("recorderError")
            }, "ended" !== uz.readyState ? zz.isPlaying() || iz("completed") : iz("captureLost")
          }))
        }(iz, tz, wz);
        if (iz.pause(), "inactive" !== wz.state && wz.stop(), await bz, "captureLost" === Hz) return void nz.NotificationProvider.showAlertPopup({
          title: "Video export stopped",
          subtitle: "Screen sharing ended before the replay finished. Nothing was saved."
        });
        if ("recorderError" === Hz) return void nz.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "The recorder encountered an error. Nothing was saved."
        });
        const Oz = null !== (oz = null === (Lz = iz.playbackFailure) || void 0 === Lz ? void 0 : Lz.call(iz)) && void 0 !== oz ? oz : null;
        if (null !== Oz) return void nz.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: `${Oz} Nothing was saved.`
        });
        const Rz = new Blob(Kz, {
          type: uz
        });
        Rz.size > 0 ? (0, Ez.c)(Rz, function(zz, uz) {
          const bz = function(zz) {
            return "mp4" === zz ? "mp4" : "webm"
          }(uz);
          if (zz) return `${zz.replace(/\.bloxdreplay$/i,"")}.${bz}`;
          return `bloxd-replay-${Date.now()}.${bz}`
        }(iz.fileName(), lz.format)) : nz.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "No video data was captured. Try again."
        })
      } catch (Pz) {
        console.error("Replay video export failed", Pz), nz.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: Pz instanceof Error ? Pz.message : "Something went wrong while exporting."
        })
      } finally {
        if (wz && "inactive" !== wz.state) try {
          wz.stop()
        } catch (Pz) {
          console.error("Failed to stop MediaRecorder", Pz)
        }! function() {
          const zz = sz.Howler.masterGain;
          if (Nz && zz) {
            try {
              zz.disconnect(Nz)
            } catch (Pz) {
              console.error("Failed to disconnect Howler export tee", Pz)
            }
            Nz = null
          } else Nz = null
        }();
        for (const zz of pz.getTracks()) zz.stop();
        if (Xz)
          for (const zz of Xz.getTracks()) zz.stop();
        null !== Zz && iz.setPlaybackSpeed(Zz), iz.pause(), Tz(iz), iz.reopenViewer()
      }
    }
  },
  4616: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      Howl: () => nz.Howl,
      Howler: () => nz.Howler,
      iosAudio: () => tz,
      musicOutput: () => Kz,
      readyAudioContext: () => wz
    });
    var Ez, nz = bz(4625),
      iz = bz(96);
    const lz = nz.Howler;
    let Mz;

    function tz() {
      return Mz ??= "ios" === (0, iz.getOperatingSystem)(), Mz
    }

    function Hz() {
      var zz, uz;
      if (lz.ctx || !lz.usingWebAudio || "undefined" === typeof AudioContext || !tz()) return;
      const bz = navigator.audioSession;
      let Ez;
      "auto" === (null === bz || void 0 === bz ? void 0 : bz.type) && (bz.type = "ambient");
      try {
        Ez = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const nz = Ez.createGain();
      nz.gain.setValueAtTime(lz._muted ? 0 : null !== (zz = lz._volume) && void 0 !== zz ? zz : 1, Ez.currentTime), nz.connect(Ez.destination), lz.ctx = Ez, lz.masterGain = nz, null === (uz = lz._setup) || void 0 === uz || uz.call(lz)
    }
    lz._mobileUnloaded = !0;
    const Oz = lz.volume.bind(nz.Howler);
    lz.volume = function() {
      return Hz(), Oz(...arguments)
    };
    const pz = lz.mute.bind(nz.Howler);
    lz.mute = zz => (Hz(), pz(zz));
    const dz = nz.Howl.prototype,
      Fz = dz.init;
    dz.init = function(zz) {
      return Hz(), Fz.call(this, zz)
    };
    let Zz = 0;
    const Rz = null === (Ez = lz._autoSuspend) || void 0 === Ez ? void 0 : Ez.bind(nz.Howler);

    function Kz() {
      wz();
      const {
        ctx: zz,
        masterGain: uz
      } = lz;
      return zz && uz ? {
        ctx: zz,
        destination: uz,
        holdAwake: zz => {
          var uz, bz;
          (Zz += zz ? 1 : -1, zz) ? null === (uz = lz._autoResume) || void 0 === uz || uz.call(lz): null === (bz = lz._autoSuspend) || void 0 === bz || bz.call(lz)
        },
        wake: () => {
          var uz;
          "running" !== zz.state && (null === (uz = lz._autoResume) || void 0 === uz || uz.call(lz), zz.resume().catch((() => {})))
        }
      } : null
    }

    function wz() {
      var zz;
      (lz.volume(), lz.ctx && lz.autoUnlock) && (null === (zz = lz._unlockAudio) || void 0 === zz || zz.call(lz))
    }
    Rz && (lz._autoSuspend = () => Zz > 0 ? nz.Howler : Rz())
  },
  41809: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => Ez,
      e: () => nz
    });
    const Ez = ["recording", "freecam", "keyframe"];

    function nz() {
      const zz = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(zz[1]) << 32n | BigInt(zz[0])
    }
  },
  41840: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      HOLD_TIMEOUT_MS: () => Mz,
      ReplayViewer: () => Hz
    });
    var Ez = bz(36422),
      nz = bz(36441),
      iz = bz(4560),
      lz = bz(41809);
    const Mz = 1e4,
      tz = new Set(["JZ"]);
    class Hz {
      constructor(zz) {
        var uz;
        this.deps = zz, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (uz = zz.now) && void 0 !== uz ? uz : () => performance.now()
      }
      get inPlayback() {
        return this.playback
      }
      get view() {
        return this.lastView
      }
      get isOpen() {
        return null !== this.lastView && this.lastView.state !== iz.dd.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get yM() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? Ez.d.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(zz, uz) {
        var bz, nz, lz, Mz;
        const {
          client: tz
        } = this.deps;
        if (!this.playback) {
          if (!tz.setPlayback(!0)) throw new Error(Ez.d.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const Hz = this.epoch;
        let Oz;
        try {
          Oz = await tz.open(zz)
        } finally {
          this.loadingOpens--
        }
        if (Hz !== this.epoch) throw new Error(Ez.d.coreStopped.text);
        if ("opening" !== Oz) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const zz = function(zz) {
            switch (zz) {
              case "reloading":
                return null;
              case "stopped":
              case iz.Vc.ModuleTrap:
                return Ez.d.coreStopped;
              case iz.Vc.ModuleLoad:
                return Ez.d.viewerLoadFailed;
              case iz.Vc.TooLarge:
                return Ez.d.cantOpen
            }
          }(Oz);
          if (null === zz) return;
          throw new Error(zz.text)
        }
        return this.rejectSave(new Error(Ez.d.saveClosed.text)), this.fileName = null !== (bz = null !== (nz = uz.fileName) && void 0 !== nz ? nz : null === (lz = uz.fileHandle) || void 0 === lz ? void 0 : lz.name) && void 0 !== bz ? bz : null, this.fileHandle = null !== (Mz = uz.fileHandle) && void 0 !== Mz ? Mz : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((zz, uz) => {
          this.pendingOpen = {
            resolve: zz,
            reject: uz
          }
        }))
      }
      play() {
        this.holds.has("JZ") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("JZ")
      }
      seek(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const bz = this.lastView;
        null !== bz && (uz || zz < bz.sd) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(zz, uz)
      }
      setSpeed(zz) {
        this.deps.client.setSpeed(zz)
      }
      setCameraMode(zz) {
        this.deps.client.setCameraMode(zz)
      }
      cycleCameraMode() {
        const zz = this.lastView;
        null !== zz && zz.state !== iz.dd.None && this.setCameraMode(lz.c[(lz.c.indexOf(zz.cameraMode) + 1) % lz.c.length])
      }
      addKeyframe() {
        this.edited(this.deps.client.addKeyframe())
      }
      setKeyframe(zz) {
        this.edited(this.deps.client.setKeyframe(zz))
      }
      moveKeyframe(zz, uz) {
        this.edited(this.deps.client.moveKeyframe(zz, uz))
      }
      deleteKeyframes(zz, uz) {
        this.edited(this.deps.client.deleteKeyframes(zz, uz))
      }
      setMark(zz) {
        this.edited(this.deps.client.setMark(zz))
      }
      crop(zz, uz) {
        return !(uz <= zz) && (null !== this.pendingSave ? (this.deps.notify(Ez.d.saveBusy), !1) : !!this.deps.client.crop(zz, uz) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(Ez.d.saveBusy.text)) : new Promise(((zz, uz) => {
          const bz = {
            resolve: zz,
            reject: uz
          };
          this.pendingSave = bz, this.editsAtSave = this.edits, this.deps.client.save((0, lz.e)()).then((zz => {
            this.pendingSave === bz && this.saveStarted(zz)
          }), (zz => {
            this.pendingSave === bz && this.rejectSave(zz instanceof Error ? zz : new Error(String(zz)))
          }))
        }))
      }
      saveStarted(zz) {
        switch (zz) {
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
      markSaved(zz, uz) {
        var bz, Ez;
        this.fileHandle = zz, this.fileName = null !== (bz = null !== (Ez = null === zz || void 0 === zz ? void 0 : zz.name) && void 0 !== Ez ? Ez : uz) && void 0 !== bz ? bz : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(Ez.d.coreStopped.text)), this.rejectSave(new Error(Ez.d.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var zz, uz, bz;
        const Ez = this.deps.client.view(),
          lz = Ez !== this.lastView;
        this.lastView = Ez, this.opening && null !== Ez && Ez.state !== iz.dd.None && Ez.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, nz.i)()), this.cropAsked ? (this.cropAsked = !1, null !== Ez && Ez.state === iz.dd.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== Ez && Ez.state !== iz.dd.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const Hz = 0 === this.settleFrames && 0 === (null !== (zz = null === (uz = (bz = this.deps).meshPending) || void 0 === uz ? void 0 : uz.call(bz)) && void 0 !== zz ? zz : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && Hz && this.release("opening"), this.holds.has("seek") && Hz && this.release("seek"), this.holds.has("crop") && !this.cropRunning && Hz && this.release("crop");
        const Oz = this.now();
        for (const [nz, iz] of this.holds) !tz.has(nz) && Oz - iz >= Mz && (this.release(nz), "opening" === nz && (this.opening = !1, this.settleOpen(null)));
        this.saveRefused && !this.cropping && this.saveFailed(!1), lz && this.deps.onChange()
      }
      cropped() {
        (0, nz.i)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(zz) {
        switch (zz.reason) {
          case iz.Vc.TooLarge:
            break;
          case iz.Vc.Open:
          case iz.Vc.NothingStaged:
            this.opening = !1, this.release("opening"), null === this.pendingOpen && this.deps.notify(Ez.d.cantOpen), this.settleOpen(new Error(Ez.d.cantOpen.text));
            break;
          case iz.Vc.Crop:
            if (zz.code === iz.Tc.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(Ez.d.cropFailed);
            break;
          case iz.Vc.ModuleTrap:
          case iz.Vc.ModuleLoad:
          case iz.Vc.Port:
            this.moduleEnded(zz.reason === iz.Vc.ModuleTrap ? Ez.d.coreStopped : Ez.d.cantOpen);
            break;
          case iz.Vc.NotLive:
            console.warn("[bloxd-wasm-client] the core refused a recorder command in playback");
            break;
          default:
            console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${zz.reason})`), this.seekAsked = !1, this.release("seek")
        }
        this.deps.onChange()
      }
      moduleEnded(zz) {
        this.resetInFlight(), this.release("opening"), this.release("seek"), this.release("crop"), null === this.pendingOpen && this.deps.notify(zz), this.settleOpen(new Error(zz.text))
      }
      saveDone(zz) {
        const uz = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === uz || void 0 === uz || uz.resolve(zz)
      }
      saveFailed(zz) {
        this.rejectSave(new Error(zz ? Ez.d.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(zz) {
        zz && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(Ez.d.cropBusy.text)) : this.deps.notify(Ez.d.cropBusy)
      }
      resetInFlight() {
        this.opening = !1, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0
      }
      settleOpen(zz) {
        const uz = this.pendingOpen;
        this.pendingOpen = null, null === zz ? null === uz || void 0 === uz || uz.resolve() : null === uz || void 0 === uz || uz.reject(zz)
      }
      rejectSave(zz) {
        const uz = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === uz || void 0 === uz || uz.reject(zz)
      }
      hold(zz) {
        const uz = 0 === this.holds.size;
        this.holds.set(zz, this.now()), uz && this.deps.setHoldDraws(!0)
      }
      release(zz) {
        this.holds.delete(zz) && 0 === this.holds.size && this.deps.setHoldDraws(!1)
      }
      releaseAll() {
        this.holds.size > 0 && (this.holds.clear(), this.deps.setHoldDraws(!1))
      }
    }
  },
  41838: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      MESH_TAIL_MS: () => Hz,
      PLAY_START_TIMEOUT_MS: () => Mz,
      startWasmReplayVideoExport: () => pz
    });
    var Ez = bz(38594),
      nz = bz(41840),
      iz = bz(4560),
      lz = bz(2302);
    const Mz = nz.HOLD_TIMEOUT_MS + 5e3,
      tz = 50,
      Hz = 200;

    function Oz(zz) {
      var uz;
      return (null === (uz = zz.view) || void 0 === uz ? void 0 : uz.state) === iz.dd.Cropping || zz.yM.includes("crop")
    }

    function pz(zz) {
      return (0, Ez.c)((() => function(zz) {
        var uz, bz, Ez, nz, pz, dz;
        const Fz = zz.viewer(),
          Zz = null !== (uz = null === Fz || void 0 === Fz ? void 0 : Fz.view) && void 0 !== uz ? uz : null,
          Rz = zz.canvas();
        if (!Fz || !Zz || Zz.state === iz.dd.None || 0 === Zz.totalTicks || !Rz || Oz(Fz)) return null;
        const Kz = null !== (bz = zz.now) && void 0 !== bz ? bz : () => performance.now(),
          wz = Fz.id,
          Xz = () => {
            const uz = zz.viewer();
            return uz === Fz && uz.id === wz && uz.isOpen ? uz : null
          },
          fz = Math.min(null !== (Ez = null === (nz = Zz.mark) || void 0 === nz ? void 0 : nz.outTick) && void 0 !== Ez ? Ez : 1 / 0, Zz.totalTicks - 1);
        let sz = null,
          rz = !1;
        const oz = () => {
          var zz, uz;
          return (null === (zz = Xz()) || void 0 === zz || null === (uz = zz.view) || void 0 === uz ? void 0 : uz.state) === iz.dd.Playing
        };
        return {
          pT: iz.qd,
          playbackMarkInTick: null !== (pz = null === (dz = Zz.mark) || void 0 === dz ? void 0 : dz.inTick) && void 0 !== pz ? pz : null,
          startFailure: () => {
            const zz = Xz();
            return null === zz ? "Another replay opened. Export it again from there." : Oz(zz) ? "Wait for the crop to finish, then export again." : null
          },
          fileName: () => {
            var zz, uz;
            return null !== (zz = null === (uz = Xz()) || void 0 === uz ? void 0 : uz.fileName) && void 0 !== zz ? zz : null
          },
          playbackSpeed: () => {
            var zz, uz, bz;
            return null !== (zz = null === (uz = Xz()) || void 0 === uz || null === (bz = uz.view) || void 0 === bz ? void 0 : bz.speed) && void 0 !== zz ? zz : 1
          },
          setPlaybackSpeed: zz => {
            var uz;
            null === (uz = Xz()) || void 0 === uz || uz.setSpeed(zz)
          },
          play: () => {
            var zz;
            rz = !1, sz = Kz(), null === (zz = Xz()) || void 0 === zz || zz.play()
          },
          pause: () => {
            var zz;
            null === (zz = Xz()) || void 0 === zz || zz.pause()
          },
          seekToTick: zz => {
            var uz;
            null === (uz = Xz()) || void 0 === uz || uz.seek(zz, !0)
          },
          seekSettled: () => new Promise((zz => {
            const uz = setInterval((() => {
              const bz = Xz();
              null === bz ? (clearInterval(uz), zz()) : bz.yM.includes("seek") || (clearInterval(uz), setTimeout(zz, Hz))
            }), tz)
          })),
          isPlaying: () => {
            var zz, uz, bz;
            return null !== sz && null !== Xz() && (!!oz() || !rz && (null !== (zz = null === (uz = Xz()) || void 0 === uz || null === (bz = uz.view) || void 0 === bz ? void 0 : bz.sd) && void 0 !== zz ? zz : 0) < fz && Kz() - sz < Mz)
          },
          watchPlayback: uz => {
            const bz = zz.watchViewer((() => {
                rz ||= null !== sz && oz(), uz()
              })),
              Ez = setTimeout(uz, Mz + 1);
            return () => {
              clearTimeout(Ez), bz()
            }
          },
          playbackFailure: () => {
            var zz, uz;
            const bz = Xz();
            return null === bz ? "The replay closed before the video finished." : (null !== (zz = null === (uz = bz.view) || void 0 === uz ? void 0 : uz.sd) && void 0 !== zz ? zz : 0) >= fz ? null : rz ? "The replay stopped before the video finished." : "The replay didn't start playing."
          },
          canvas: () => Rz,
          closeViewer: () => {
            zz.requestViewer("close")
          },
          reopenViewer: () => {
            zz.requestViewer("open")
          },
          holdInput: lz.e
        }
      }(zz)))
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);