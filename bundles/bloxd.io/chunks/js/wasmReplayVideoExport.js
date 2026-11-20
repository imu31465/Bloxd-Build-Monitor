export const id = 63;
export const ids = [57, 63, 91];
export const modules = {
  36394: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Oz,
      f: () => oz
    });
    var Fz = sz(34);
    const Wz = 1500,
      Xz = 1e3,
      Oz = {
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

    function oz(zz) {
      var tz;
      const sz = null !== (tz = zz.timeoutMs) && void 0 !== tz ? tz : "Error" === zz.type ? Wz : Xz;
      Fz.o.Yg("showBottomMessage", {
        message: zz.text,
        timeoutLength: sz,
        type: zz.type
      })
    }
  },
  36405: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Fz,
      h: () => Wz
    });
    const Fz = "data-replay-ui-active",
      Wz = [{
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
  36407: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Uz,
      e: () => uz,
      i: () => Kz
    });
    var Fz = sz(30),
      Wz = sz(34),
      Xz = sz(36405);

    function Oz() {
      const zz = {};
      for (const {
          group: tz
        }
        of Xz.h) zz[tz] = !0;
      return zz
    }
    let oz = Oz();

    function vz() {
      Wz.o.Yg("replayViewer|uiVisibilityChanged")
    }

    function Uz() {
      return oz
    }

    function Kz(zz, tz) {
      oz[zz] !== tz && (oz = {
        ...oz,
        [zz]: tz
      }, "nametag" === zz && Fz.b.set({
        areNametagsHidden: !tz
      }), vz())
    }

    function uz() {
      oz = Oz(), Fz.b.set({
        areNametagsHidden: !1
      }), vz()
    }
  },
  38629: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Gz
    });
    var Fz = sz(1681),
      Wz = sz(1319),
      Xz = sz(65),
      Oz = sz(1020),
      oz = sz.n(Oz),
      vz = sz(1419),
      Uz = sz(106);
    const Kz = ["video/webm;codecs=vp9,opus", "video/webm;codecs=vp8,opus", "video/webm;codecs=vp9", "video/webm;codecs=vp8", "video/webm"],
      uz = ["video/mp4;codecs=avc1,mp4a.40.2", "video/mp4;codecs=avc1.42E01E,mp4a.40.2", "video/mp4;codecs=avc1", "video/mp4"];

    function Nz(zz) {
      return "webm" === zz ? Kz : uz
    }

    function bz(zz) {
      for (const tz of zz)
        if ("undefined" !== typeof MediaRecorder && MediaRecorder.isTypeSupported(tz)) return tz;
      return null
    }

    function wz(zz) {
      return null !== bz(Nz(zz))
    }
    var Dz = sz(1087);
    const gz = [{
      id: "webm",
      label: "WebM",
      description: "Usually less screen tearing, but may not play in all media players."
    }, {
      id: "mp4",
      label: "MP4",
      description: "Works in more players, but may show graphical glitches on some devices."
    }];

    function Hz() {
      return wz("webm") ? "webm" : wz("mp4") ? "mp4" : "webm"
    }

    function Bz(zz) {
      let {
        cards: tz
      } = zz;
      return (0, Dz.jsx)("div", {
        className: "ReplayVideoExportOptionCards",
        children: tz.map((zz => (0, Dz.jsxs)("div", {
          className: "ReplayVideoExportOptionColumn",
          children: [(0, Dz.jsx)("div", {
            className: oz()("ReplayVideoExportOptionCard", {
              Selected: zz.selected,
              Disabled: zz.disabled
            }),
            onClick: () => {
              zz.disabled || zz.onSelect()
            },
            children: (0, Dz.jsxs)("div", {
              className: "ReplayVideoExportOptionCardBody",
              children: [(0, Dz.jsx)("div", {
                className: "ReplayVideoExportOptionCardLabel",
                children: zz.label
              }), (0, Dz.jsx)("div", {
                className: "ReplayVideoExportOptionCardDescription",
                children: zz.description
              })]
            })
          }), zz.disabled && zz.disabledReason && (0, Dz.jsx)("div", {
            className: "ReplayVideoExportOptionError SmallTextLight",
            children: zz.disabledReason
          })]
        }, zz.id)))
      })
    }
    const Pz = (0, Xz.memo)((function(zz) {
      let {
        hasPlaybackMark: tz,
        canIncludeUi: sz,
        includeUiDisabledReason: Fz,
        selectionRef: Wz,
        closePopup: Oz
      } = zz;
      const oz = wz("webm") || wz("mp4"),
        [Kz, uz] = (0, Xz.useState)(Hz),
        [Nz, bz] = (0, Xz.useState)(sz),
        Pz = oz && wz(Kz);
      if (!oz) {
        const zz = (0, Uz.isMobile)() ? "screen recording" : "OBS";
        return (0, Dz.jsxs)("div", {
          className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
          children: [(0, Dz.jsx)("div", {
            className: "PromptPopupNotificationTitle SmallTextBold",
            children: "Can't export video"
          }), (0, Dz.jsx)("div", {
            className: "PromptPopupNotificationSubtitle SmallTextLight",
            children: `Your device does not support exporting. Try recording with an external software like ${zz}.`
          }), (0, Dz.jsx)("div", {
            className: "PromptPopupNotificationBody",
            children: (0, Dz.jsx)(vz.H, {
              className: "PromptPopupNotificationBodyButton",
              onClick: () => {
                Wz.options = null, Oz()
              },
              children: "Close"
            })
          })]
        })
      }
      const rz = tz ? "This will only play the range you've set.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes." : "This will play the whole recording from the start.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes.",
        Yz = [{
          id: "withoutUi",
          label: "Without UI",
          description: "Usually cleaner and sharper.",
          selected: !Nz,
          disabled: !1,
          disabledReason: null,
          onSelect: () => {
            bz(!1)
          }
        }, {
          id: "withUi",
          label: "With UI",
          description: "Includes HUD elements. May look worse on some devices.",
          selected: Nz,
          disabled: !sz,
          disabledReason: Fz,
          onSelect: () => {
            bz(!0)
          }
        }],
        xz = gz.map((zz => {
          const tz = wz(zz.id);
          return {
            id: zz.id,
            label: zz.label,
            description: zz.description,
            selected: Kz === zz.id,
            disabled: !tz,
            disabledReason: "Your device doesn't support this format",
            onSelect: () => {
              uz(zz.id)
            }
          }
        }));
      return (0, Dz.jsxs)("div", {
        className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
        children: [(0, Dz.jsx)("div", {
          className: "PromptPopupNotificationTitle SmallTextBold",
          children: "Export video?"
        }), (0, Dz.jsx)("div", {
          className: "PromptPopupNotificationSubtitle SmallTextLight",
          children: rz
        }), (0, Dz.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, Dz.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "UI"
          }), (0, Dz.jsx)(Bz, {
            cards: Yz
          })]
        }), (0, Dz.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, Dz.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "Format"
          }), (0, Dz.jsx)(Bz, {
            cards: xz
          })]
        }), (0, Dz.jsxs)("div", {
          className: "PromptPopupNotificationBody",
          children: [(0, Dz.jsx)(vz.p, {
            className: "PromptPopupNotificationBodyButton PromptPopupNotificationBodyPrimaryButton",
            disabled: !Pz,
            onClick: () => {
              Wz.options = {
                format: Kz,
                includeUi: sz && Nz
              }, Oz()
            },
            children: "Export"
          }), (0, Dz.jsx)(vz.H, {
            className: "PromptPopupNotificationBodyButton",
            onClick: () => {
              Wz.options = null, Oz()
            },
            children: "Cancel"
          })]
        })]
      })
    }));
    var rz = sz(4488),
      Yz = sz(36405),
      xz = sz(36407);
    let mz = null;

    function Jz() {
      return function() {
        const zz = (0, xz.b)();
        for (const {
            group: tz,
            dataAttr: sz
          }
          of Yz.h)
          if (sz && zz[tz]) return !0;
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
    async function Iz(zz, tz, sz) {
      return zz ? async function() {
        const zz = await navigator.mediaDevices.getDisplayMedia({
          video: !0,
          audio: !1,
          preferCurrentTab: !0,
          selfBrowserSurface: "include"
        });
        for (const tz of zz.getAudioTracks()) tz.stop(), zz.removeTrack(tz);
        return zz
      }(): tz().captureStream(Math.max(1, Math.round(sz)))
    }
    var Cz = sz(38492);
    let ez = !1;

    function Zz(zz) {
      zz.holdInput(!1), (0, Cz.f)(!1)
    }
    async function Gz(zz) {
      var tz, sz;
      if ((0, Cz.e)() || ez) return;
      const Xz = zz();
      if (!Xz) return;
      ez = !0;
      let Oz = null;
      const oz = Xz.playbackMarkInTick,
        {
          canIncludeUi: vz,
          includeUiDisabledReason: Uz
        } = Jz();
      try {
        Oz = await async function(zz) {
          let {
            hasPlaybackMark: tz,
            canIncludeUi: sz,
            includeUiDisabledReason: Fz
          } = zz;
          const Xz = {
              options: null
            },
            Oz = Wz.NotificationProvider.showCustomPopup({
              body: zz => (0, Dz.jsx)(Pz, {
                hasPlaybackMark: tz,
                canIncludeUi: sz,
                includeUiDisabledReason: Fz,
                selectionRef: Xz,
                closePopup: zz
              }),
              disableExitButton: !0,
              disablePressBackgroundToClose: !0,
              unlockPointerKey: "replayVideoExportOptions"
            });
          return "notificationTornDown" === await Oz.getResult() ? null : Xz.options
        }({
          hasPlaybackMark: null !== oz,
          canIncludeUi: vz,
          includeUiDisabledReason: Uz
        })
      } finally {
        ez = !1
      }
      if (!Oz) return;
      const Kz = null !== (tz = null === (sz = Xz.startFailure) || void 0 === sz ? void 0 : sz.call(Xz)) && void 0 !== tz ? tz : null;
      if (null !== Kz) return void Wz.NotificationProvider.showAlertPopup({
        title: "Video export failed",
        subtitle: Kz
      });
      if (! function(zz) {
          return !(0, Cz.e)() && ((0, Cz.f)(!0), zz.holdInput(!0), !0)
        }(Xz)) return;
      let uz = null;
      try {
        uz = await Iz(Oz.includeUi, (() => Xz.canvas()), Xz.iJ)
      } catch (Tz) {
        return console.error("Failed to create video stream for export", Tz), Zz(Xz), void Wz.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: Tz instanceof Error ? Tz.message : "Could not start capture."
        })
      }
      let wz = null;
      const gz = [];
      let Hz = null,
        Bz = null;
      try {
        var Yz, xz, Gz;
        wz = Xz.playbackSpeed(), Xz.closeViewer(), Xz.setPlaybackSpeed(1), Xz.pause(), Xz.seekToTick(null !== oz && void 0 !== oz ? oz : 0);
        const zz = await async function() {
          const zz = rz.Howler.masterGain;
          if (!rz.Howler.ctx || !zz) return null;
          await rz.Howler.ctx.resume();
          const tz = rz.Howler.ctx.createMediaStreamDestination();
          zz.connect(tz), mz = tz;
          const [sz] = tz.stream.getAudioTracks();
          return null !== sz && void 0 !== sz ? sz : null
        }();
        Bz = new MediaStream;
        for (const Fz of uz.getVideoTracks()) Bz.addTrack(Fz);
        zz && Bz.addTrack(zz);
        const tz = function(zz) {
          const tz = bz(Nz(zz));
          if (!tz) throw new Error(`No MediaRecorder mime type available for ${zz}`);
          return tz
        }(Oz.format);
        Hz = new MediaRecorder(Bz, {
          mimeType: tz,
          videoBitsPerSecond: 8e6
        }), Hz.ondataavailable = zz => {
          zz.data.size > 0 && gz.push(zz.data)
        };
        const sz = new Promise((zz => {
          Hz.onstop = () => {
            zz()
          }
        }));
        await (null === (Yz = Xz.seekSettled) || void 0 === Yz ? void 0 : Yz.call(Xz));
        const [vz] = uz.getVideoTracks();
        Hz.start(250), Xz.play();
        const Uz = await
        function(zz, tz, sz) {
          return new Promise((Fz => {
            let Wz = !1;
            const Xz = zz => {
                Wz || (Wz = !0, oz(), tz.removeEventListener("ended", Oz), Fz(zz))
              },
              Oz = () => {
                Xz("captureLost")
              },
              oz = zz.watchPlayback((() => {
                zz.isPlaying() || Xz("completed")
              }));
            tz.addEventListener("ended", Oz), sz.onerror = () => {
              Xz("recorderError")
            }, "ended" !== tz.readyState ? zz.isPlaying() || Xz("completed") : Xz("captureLost")
          }))
        }(Xz, vz, Hz);
        if (Xz.pause(), "inactive" !== Hz.state && Hz.stop(), await sz, "captureLost" === Uz) return void Wz.NotificationProvider.showAlertPopup({
          title: "Video export stopped",
          subtitle: "Screen sharing ended before the replay finished. Nothing was saved."
        });
        if ("recorderError" === Uz) return void Wz.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "The recorder encountered an error. Nothing was saved."
        });
        const Kz = null !== (xz = null === (Gz = Xz.playbackFailure) || void 0 === Gz ? void 0 : Gz.call(Xz)) && void 0 !== xz ? xz : null;
        if (null !== Kz) return void Wz.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: `${Kz} Nothing was saved.`
        });
        const Dz = new Blob(gz, {
          type: tz
        });
        Dz.size > 0 ? (0, Fz.d)(Dz, function(zz, tz) {
          const sz = function(zz) {
            return "mp4" === zz ? "mp4" : "webm"
          }(tz);
          if (zz) return `${zz.replace(/\.bloxdreplay$/i,"")}.${sz}`;
          return `bloxd-replay-${Date.now()}.${sz}`
        }(Xz.fileName(), Oz.format)) : Wz.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "No video data was captured. Try again."
        })
      } catch (Tz) {
        console.error("Replay video export failed", Tz), Wz.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: Tz instanceof Error ? Tz.message : "Something went wrong while exporting."
        })
      } finally {
        if (Hz && "inactive" !== Hz.state) try {
          Hz.stop()
        } catch (Tz) {
          console.error("Failed to stop MediaRecorder", Tz)
        }! function() {
          const zz = rz.Howler.masterGain;
          if (mz && zz) {
            try {
              zz.disconnect(mz)
            } catch (Tz) {
              console.error("Failed to disconnect Howler export tee", Tz)
            }
            mz = null
          } else mz = null
        }();
        for (const zz of uz.getTracks()) zz.stop();
        if (Bz)
          for (const zz of Bz.getTracks()) zz.stop();
        null !== wz && Xz.setPlaybackSpeed(wz), Xz.pause(), Zz(Xz), Xz.reopenViewer()
      }
    }
  },
  4488: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      Howl: () => Wz.Howl,
      Howler: () => Wz.Howler,
      iosAudio: () => vz,
      musicOutput: () => gz,
      readyAudioContext: () => Hz
    });
    var Fz, Wz = sz(4491),
      Xz = sz(106);
    const Oz = Wz.Howler;
    let oz;

    function vz() {
      return oz ??= "ios" === (0, Xz.getOperatingSystem)(), oz
    }

    function Uz() {
      var zz, tz;
      if (Oz.ctx || !Oz.usingWebAudio || "undefined" === typeof AudioContext || !vz()) return;
      const sz = navigator.audioSession;
      let Fz;
      "auto" === (null === sz || void 0 === sz ? void 0 : sz.type) && (sz.type = "ambient");
      try {
        Fz = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const Wz = Fz.createGain();
      Wz.gain.setValueAtTime(Oz._muted ? 0 : null !== (zz = Oz._volume) && void 0 !== zz ? zz : 1, Fz.currentTime), Wz.connect(Fz.destination), Oz.ctx = Fz, Oz.masterGain = Wz, null === (tz = Oz._setup) || void 0 === tz || tz.call(Oz)
    }
    Oz._mobileUnloaded = !0;
    const Kz = Oz.volume.bind(Wz.Howler);
    Oz.volume = function() {
      return Uz(), Kz(...arguments)
    };
    const uz = Oz.mute.bind(Wz.Howler);
    Oz.mute = zz => (Uz(), uz(zz));
    const Nz = Wz.Howl.prototype,
      bz = Nz.init;
    Nz.init = function(zz) {
      return Uz(), bz.call(this, zz)
    };
    let wz = 0;
    const Dz = null === (Fz = Oz._autoSuspend) || void 0 === Fz ? void 0 : Fz.bind(Wz.Howler);

    function gz() {
      Hz();
      const {
        ctx: zz,
        masterGain: tz
      } = Oz;
      return zz && tz ? {
        ctx: zz,
        destination: tz,
        holdAwake: zz => {
          var tz, sz;
          (wz += zz ? 1 : -1, zz) ? null === (tz = Oz._autoResume) || void 0 === tz || tz.call(Oz): null === (sz = Oz._autoSuspend) || void 0 === sz || sz.call(Oz)
        },
        wake: () => {
          var tz;
          "running" !== zz.state && (null === (tz = Oz._autoResume) || void 0 === tz || tz.call(Oz), zz.resume().catch((() => {})))
        }
      } : null
    }

    function Hz() {
      var zz;
      (Oz.volume(), Oz.ctx && Oz.autoUnlock) && (null === (zz = Oz._unlockAudio) || void 0 === zz || zz.call(Oz))
    }
    Dz && (Oz._autoSuspend = () => wz > 0 ? Wz.Howler : Dz())
  },
  41652: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Fz,
      h: () => Wz
    });
    const Fz = ["recording", "freecam", "keyframe"];

    function Wz() {
      const zz = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(zz[1]) << 32n | BigInt(zz[0])
    }
  },
  41688: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      HOLD_TIMEOUT_MS: () => oz,
      ReplayViewer: () => Uz
    });
    var Fz = sz(36394),
      Wz = sz(36407),
      Xz = sz(4432),
      Oz = sz(41652);
    const oz = 1e4,
      vz = new Set(["Cw"]);
    class Uz {
      constructor(zz) {
        var tz;
        this.deps = zz, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (tz = zz.now) && void 0 !== tz ? tz : () => performance.now()
      }
      get inPlayback() {
        return this.playback
      }
      get view() {
        return this.lastView
      }
      get isOpen() {
        return null !== this.lastView && this.lastView.state !== Xz.ad.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get po() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? Fz.d.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(zz, tz) {
        var sz, Wz, Oz, oz;
        const {
          client: vz
        } = this.deps;
        if (!this.playback) {
          if (!vz.setPlayback(!0)) throw new Error(Fz.d.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const Uz = this.epoch;
        let Kz;
        try {
          Kz = await vz.open(zz)
        } finally {
          this.loadingOpens--
        }
        if (Uz !== this.epoch) throw new Error(Fz.d.coreStopped.text);
        if ("opening" !== Kz) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const zz = function(zz) {
            switch (zz) {
              case "reloading":
                return null;
              case "stopped":
              case Xz.Rc.ModuleTrap:
                return Fz.d.coreStopped;
              case Xz.Rc.ModuleLoad:
                return Fz.d.viewerLoadFailed;
              case Xz.Rc.TooLarge:
                return Fz.d.cantOpen
            }
          }(Kz);
          if (null === zz) return;
          throw new Error(zz.text)
        }
        return this.rejectSave(new Error(Fz.d.saveClosed.text)), this.fileName = null !== (sz = null !== (Wz = tz.fileName) && void 0 !== Wz ? Wz : null === (Oz = tz.fileHandle) || void 0 === Oz ? void 0 : Oz.name) && void 0 !== sz ? sz : null, this.fileHandle = null !== (oz = tz.fileHandle) && void 0 !== oz ? oz : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((zz, tz) => {
          this.pendingOpen = {
            resolve: zz,
            reject: tz
          }
        }))
      }
      play() {
        this.holds.has("Cw") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("Cw")
      }
      seek(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const sz = this.lastView;
        null !== sz && (tz || zz < sz.wN) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(zz, tz)
      }
      setSpeed(zz) {
        this.deps.client.setSpeed(zz)
      }
      setCameraMode(zz) {
        this.deps.client.setCameraMode(zz)
      }
      cycleCameraMode() {
        const zz = this.lastView;
        null !== zz && zz.state !== Xz.ad.None && this.setCameraMode(Oz.e[(Oz.e.indexOf(zz.cameraMode) + 1) % Oz.e.length])
      }
      addKeyframe() {
        this.edited(this.deps.client.addKeyframe())
      }
      setKeyframe(zz) {
        this.edited(this.deps.client.setKeyframe(zz))
      }
      moveKeyframe(zz, tz) {
        this.edited(this.deps.client.moveKeyframe(zz, tz))
      }
      deleteKeyframes(zz, tz) {
        this.edited(this.deps.client.deleteKeyframes(zz, tz))
      }
      setMark(zz) {
        this.edited(this.deps.client.setMark(zz))
      }
      crop(zz, tz) {
        return !(tz <= zz) && (null !== this.pendingSave ? (this.deps.notify(Fz.d.saveBusy), !1) : !!this.deps.client.crop(zz, tz) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(Fz.d.saveBusy.text)) : new Promise(((zz, tz) => {
          const sz = {
            resolve: zz,
            reject: tz
          };
          this.pendingSave = sz, this.editsAtSave = this.edits, this.deps.client.save((0, Oz.h)()).then((zz => {
            this.pendingSave === sz && this.saveStarted(zz)
          }), (zz => {
            this.pendingSave === sz && this.rejectSave(zz instanceof Error ? zz : new Error(String(zz)))
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
      markSaved(zz, tz) {
        var sz, Fz;
        this.fileHandle = zz, this.fileName = null !== (sz = null !== (Fz = null === zz || void 0 === zz ? void 0 : zz.name) && void 0 !== Fz ? Fz : tz) && void 0 !== sz ? sz : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(Fz.d.coreStopped.text)), this.rejectSave(new Error(Fz.d.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var zz, tz, sz;
        const Fz = this.deps.client.view(),
          Oz = Fz !== this.lastView;
        this.lastView = Fz, this.opening && null !== Fz && Fz.state !== Xz.ad.None && Fz.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, Wz.e)()), this.cropAsked ? (this.cropAsked = !1, null !== Fz && Fz.state === Xz.ad.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== Fz && Fz.state !== Xz.ad.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const Uz = 0 === this.settleFrames && 0 === (null !== (zz = null === (tz = (sz = this.deps).meshPending) || void 0 === tz ? void 0 : tz.call(sz)) && void 0 !== zz ? zz : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && Uz && this.release("opening"), this.holds.has("seek") && Uz && this.release("seek"), this.holds.has("crop") && !this.cropRunning && Uz && this.release("crop");
        const Kz = this.now();
        for (const [Wz, Xz] of this.holds) !vz.has(Wz) && Kz - Xz >= oz && (this.release(Wz), "opening" === Wz && (this.opening = !1, this.settleOpen(null)));
        this.saveRefused && !this.cropping && this.saveFailed(!1), Oz && this.deps.onChange()
      }
      cropped() {
        (0, Wz.e)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(zz) {
        switch (zz.reason) {
          case Xz.Rc.TooLarge:
            break;
          case Xz.Rc.Open:
          case Xz.Rc.NothingStaged:
            this.opening = !1, this.release("opening"), null === this.pendingOpen && this.deps.notify(Fz.d.cantOpen), this.settleOpen(new Error(Fz.d.cantOpen.text));
            break;
          case Xz.Rc.Crop:
            if (zz.code === Xz.Oc.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(Fz.d.cropFailed);
            break;
          case Xz.Rc.ModuleTrap:
          case Xz.Rc.ModuleLoad:
          case Xz.Rc.Port:
            this.moduleEnded(zz.reason === Xz.Rc.ModuleTrap ? Fz.d.coreStopped : Fz.d.cantOpen);
            break;
          case Xz.Rc.NotLive:
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
        const tz = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === tz || void 0 === tz || tz.resolve(zz)
      }
      saveFailed(zz) {
        this.rejectSave(new Error(zz ? Fz.d.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(zz) {
        zz && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(Fz.d.cropBusy.text)) : this.deps.notify(Fz.d.cropBusy)
      }
      resetInFlight() {
        this.opening = !1, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0
      }
      settleOpen(zz) {
        const tz = this.pendingOpen;
        this.pendingOpen = null, null === zz ? null === tz || void 0 === tz || tz.resolve() : null === tz || void 0 === tz || tz.reject(zz)
      }
      rejectSave(zz) {
        const tz = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === tz || void 0 === tz || tz.reject(zz)
      }
      hold(zz) {
        const tz = 0 === this.holds.size;
        this.holds.set(zz, this.now()), tz && this.deps.setHoldDraws(!0)
      }
      release(zz) {
        this.holds.delete(zz) && 0 === this.holds.size && this.deps.setHoldDraws(!1)
      }
      releaseAll() {
        this.holds.size > 0 && (this.holds.clear(), this.deps.setHoldDraws(!1))
      }
    }
  },
  41682: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      MESH_TAIL_MS: () => Uz,
      PLAY_START_TIMEOUT_MS: () => oz,
      startWasmReplayVideoExport: () => uz
    });
    var Fz = sz(38629),
      Wz = sz(41688),
      Xz = sz(4432),
      Oz = sz(2280);
    const oz = Wz.HOLD_TIMEOUT_MS + 5e3,
      vz = 50,
      Uz = 200;

    function Kz(zz) {
      var tz;
      return (null === (tz = zz.view) || void 0 === tz ? void 0 : tz.state) === Xz.ad.Cropping || zz.po.includes("crop")
    }

    function uz(zz) {
      return (0, Fz.e)((() => function(zz) {
        var tz, sz, Fz, Wz, uz, Nz;
        const bz = zz.viewer(),
          wz = null !== (tz = null === bz || void 0 === bz ? void 0 : bz.view) && void 0 !== tz ? tz : null,
          Dz = zz.canvas();
        if (!bz || !wz || wz.state === Xz.ad.None || 0 === wz.totalTicks || !Dz || Kz(bz)) return null;
        const gz = null !== (sz = zz.now) && void 0 !== sz ? sz : () => performance.now(),
          Hz = bz.id,
          Bz = () => {
            const tz = zz.viewer();
            return tz === bz && tz.id === Hz && tz.isOpen ? tz : null
          },
          Pz = Math.min(null !== (Fz = null === (Wz = wz.mark) || void 0 === Wz ? void 0 : Wz.outTick) && void 0 !== Fz ? Fz : 1 / 0, wz.totalTicks - 1);
        let rz = null,
          Yz = !1;
        const xz = () => {
          var zz, tz;
          return (null === (zz = Bz()) || void 0 === zz || null === (tz = zz.view) || void 0 === tz ? void 0 : tz.state) === Xz.ad.Playing
        };
        return {
          iJ: Xz.qd,
          playbackMarkInTick: null !== (uz = null === (Nz = wz.mark) || void 0 === Nz ? void 0 : Nz.inTick) && void 0 !== uz ? uz : null,
          startFailure: () => {
            const zz = Bz();
            return null === zz ? "Another replay opened. Export it again from there." : Kz(zz) ? "Wait for the crop to finish, then export again." : null
          },
          fileName: () => {
            var zz, tz;
            return null !== (zz = null === (tz = Bz()) || void 0 === tz ? void 0 : tz.fileName) && void 0 !== zz ? zz : null
          },
          playbackSpeed: () => {
            var zz, tz, sz;
            return null !== (zz = null === (tz = Bz()) || void 0 === tz || null === (sz = tz.view) || void 0 === sz ? void 0 : sz.speed) && void 0 !== zz ? zz : 1
          },
          setPlaybackSpeed: zz => {
            var tz;
            null === (tz = Bz()) || void 0 === tz || tz.setSpeed(zz)
          },
          play: () => {
            var zz;
            Yz = !1, rz = gz(), null === (zz = Bz()) || void 0 === zz || zz.play()
          },
          pause: () => {
            var zz;
            null === (zz = Bz()) || void 0 === zz || zz.pause()
          },
          seekToTick: zz => {
            var tz;
            null === (tz = Bz()) || void 0 === tz || tz.seek(zz, !0)
          },
          seekSettled: () => new Promise((zz => {
            const tz = setInterval((() => {
              const sz = Bz();
              null === sz ? (clearInterval(tz), zz()) : sz.po.includes("seek") || (clearInterval(tz), setTimeout(zz, Uz))
            }), vz)
          })),
          isPlaying: () => {
            var zz, tz, sz;
            return null !== rz && null !== Bz() && (!!xz() || !Yz && (null !== (zz = null === (tz = Bz()) || void 0 === tz || null === (sz = tz.view) || void 0 === sz ? void 0 : sz.wN) && void 0 !== zz ? zz : 0) < Pz && gz() - rz < oz)
          },
          watchPlayback: tz => {
            const sz = zz.watchViewer((() => {
                Yz ||= null !== rz && xz(), tz()
              })),
              Fz = setTimeout(tz, oz + 1);
            return () => {
              clearTimeout(Fz), sz()
            }
          },
          playbackFailure: () => {
            var zz, tz;
            const sz = Bz();
            return null === sz ? "The replay closed before the video finished." : (null !== (zz = null === (tz = sz.view) || void 0 === tz ? void 0 : tz.wN) && void 0 !== zz ? zz : 0) >= Pz ? null : Yz ? "The replay stopped before the video finished." : "The replay didn't start playing."
          },
          canvas: () => Dz,
          closeViewer: () => {
            zz.requestViewer("close")
          },
          reopenViewer: () => {
            zz.requestViewer("open")
          },
          holdInput: Oz.f
        }
      }(zz)))
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);