export const id = 59;
export const ids = [53, 59, 81];
export const modules = {
  35712: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => Zy,
      e: () => cb
    });
    var Uy = Wy(23);
    const hy = 1500,
      fy = 1e3,
      Zy = {
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

    function cb(yb) {
      var bb;
      const Wy = null !== (bb = yb.timeoutMs) && void 0 !== bb ? bb : "Error" === yb.type ? hy : fy;
      Uy.g.EZ("showBottomMessage", {
        message: yb.text,
        timeoutLength: Wy,
        type: yb.type
      })
    }
  },
  35726: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Uy,
      d: () => hy
    });
    const Uy = "data-replay-ui-active",
      hy = [{
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
  35728: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => oy,
      e: () => Ky,
      g: () => By
    });
    var Uy = Wy(19),
      hy = Wy(23),
      fy = Wy(35726);

    function Zy() {
      const yb = {};
      for (const {
          group: bb
        }
        of fy.d) yb[bb] = !0;
      return yb
    }
    let cb = Zy();

    function Py() {
      hy.g.EZ("replayViewer|uiVisibilityChanged")
    }

    function oy() {
      return cb
    }

    function By(yb, bb) {
      cb[yb] !== bb && (cb = {
        ...cb,
        [yb]: bb
      }, "nametag" === yb && Uy.d.set({
        areNametagsHidden: !bb
      }), Py())
    }

    function Ky() {
      cb = Zy(), Uy.d.set({
        areNametagsHidden: !1
      }), Py()
    }
  },
  37882: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => My
    });
    var Uy = Wy(1506),
      hy = Wy(1207),
      fy = Wy(55),
      Zy = Wy(898),
      cb = Wy.n(Zy),
      Py = Wy(1273),
      oy = Wy(94);
    const By = ["video/webm;codecs=vp9,opus", "video/webm;codecs=vp8,opus", "video/webm;codecs=vp9", "video/webm;codecs=vp8", "video/webm"],
      Ky = ["video/mp4;codecs=avc1,mp4a.40.2", "video/mp4;codecs=avc1.42E01E,mp4a.40.2", "video/mp4;codecs=avc1", "video/mp4"];

    function ey(yb) {
      return "webm" === yb ? By : Ky
    }

    function qb(yb) {
      for (const bb of yb)
        if ("undefined" !== typeof MediaRecorder && MediaRecorder.isTypeSupported(bb)) return bb;
      return null
    }

    function sy(yb) {
      return null !== qb(ey(yb))
    }
    var Sy = Wy(952);
    const Ey = [{
      id: "webm",
      label: "WebM",
      description: "Usually less screen tearing, but may not play in all media players."
    }, {
      id: "mp4",
      label: "MP4",
      description: "Works in more players, but may show graphical glitches on some devices."
    }];

    function ly() {
      return sy("webm") ? "webm" : sy("mp4") ? "mp4" : "webm"
    }

    function mb(yb) {
      let {
        cards: bb
      } = yb;
      return (0, Sy.jsx)("div", {
        className: "ReplayVideoExportOptionCards",
        children: bb.map((yb => (0, Sy.jsxs)("div", {
          className: "ReplayVideoExportOptionColumn",
          children: [(0, Sy.jsx)("div", {
            className: cb()("ReplayVideoExportOptionCard", {
              Selected: yb.selected,
              Disabled: yb.disabled
            }),
            onClick: () => {
              yb.disabled || yb.onSelect()
            },
            children: (0, Sy.jsxs)("div", {
              className: "ReplayVideoExportOptionCardBody",
              children: [(0, Sy.jsx)("div", {
                className: "ReplayVideoExportOptionCardLabel",
                children: yb.label
              }), (0, Sy.jsx)("div", {
                className: "ReplayVideoExportOptionCardDescription",
                children: yb.description
              })]
            })
          }), yb.disabled && yb.disabledReason && (0, Sy.jsx)("div", {
            className: "ReplayVideoExportOptionError SmallTextLight",
            children: yb.disabledReason
          })]
        }, yb.id)))
      })
    }
    const Cy = (0, fy.memo)((function(yb) {
      let {
        hasPlaybackMark: bb,
        canIncludeUi: Wy,
        includeUiDisabledReason: Uy,
        selectionRef: hy,
        closePopup: Zy
      } = yb;
      const cb = sy("webm") || sy("mp4"),
        [By, Ky] = (0, fy.useState)(ly),
        [ey, qb] = (0, fy.useState)(Wy),
        Cy = cb && sy(By);
      if (!cb) {
        const yb = (0, oy.isMobile)() ? "screen recording" : "OBS";
        return (0, Sy.jsxs)("div", {
          className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
          children: [(0, Sy.jsx)("div", {
            className: "PromptPopupNotificationTitle SmallTextBold",
            children: "Can't export video"
          }), (0, Sy.jsx)("div", {
            className: "PromptPopupNotificationSubtitle SmallTextLight",
            children: `Your device does not support exporting. Try recording with an external software like ${yb}.`
          }), (0, Sy.jsx)("div", {
            className: "PromptPopupNotificationBody",
            children: (0, Sy.jsx)(Py.C, {
              className: "PromptPopupNotificationBodyButton",
              onClick: () => {
                hy.options = null, Zy()
              },
              children: "Close"
            })
          })]
        })
      }
      const Ty = bb ? "This will only play the range you've set.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes." : "This will play the whole recording from the start.\nYou won't be able to cancel once it begins.\n\nDon't touch the mouse or keyboard until it finishes.",
        Vy = [{
          id: "withoutUi",
          label: "Without UI",
          description: "Usually cleaner and sharper.",
          selected: !ey,
          disabled: !1,
          disabledReason: null,
          onSelect: () => {
            qb(!1)
          }
        }, {
          id: "withUi",
          label: "With UI",
          description: "Includes HUD elements. May look worse on some devices.",
          selected: ey,
          disabled: !Wy,
          disabledReason: Uy,
          onSelect: () => {
            qb(!0)
          }
        }],
        Jy = Ey.map((yb => {
          const bb = sy(yb.id);
          return {
            id: yb.id,
            label: yb.label,
            description: yb.description,
            selected: By === yb.id,
            disabled: !bb,
            disabledReason: "Your device doesn't support this format",
            onSelect: () => {
              Ky(yb.id)
            }
          }
        }));
      return (0, Sy.jsxs)("div", {
        className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
        children: [(0, Sy.jsx)("div", {
          className: "PromptPopupNotificationTitle SmallTextBold",
          children: "Export video?"
        }), (0, Sy.jsx)("div", {
          className: "PromptPopupNotificationSubtitle SmallTextLight",
          children: Ty
        }), (0, Sy.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, Sy.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "UI"
          }), (0, Sy.jsx)(mb, {
            cards: Vy
          })]
        }), (0, Sy.jsxs)("div", {
          className: "ReplayVideoExportOptionsSection",
          children: [(0, Sy.jsx)("div", {
            className: "ReplayVideoExportOptionsSectionLabel SmallTextBold",
            children: "Format"
          }), (0, Sy.jsx)(mb, {
            cards: Jy
          })]
        }), (0, Sy.jsxs)("div", {
          className: "PromptPopupNotificationBody",
          children: [(0, Sy.jsx)(Py.i, {
            className: "PromptPopupNotificationBodyButton PromptPopupNotificationBodyPrimaryButton",
            disabled: !Cy,
            onClick: () => {
              hy.options = {
                format: By,
                includeUi: Wy && ey
              }, Zy()
            },
            children: "Export"
          }), (0, Sy.jsx)(Py.C, {
            className: "PromptPopupNotificationBodyButton",
            onClick: () => {
              hy.options = null, Zy()
            },
            children: "Cancel"
          })]
        })]
      })
    }));
    var Ty = Wy(4068),
      Vy = Wy(35726),
      Jy = Wy(35728);
    let gb = null;

    function Gy() {
      return function() {
        const yb = (0, Jy.d)();
        for (const {
            group: bb,
            dataAttr: Wy
          }
          of Vy.d)
          if (Wy && yb[bb]) return !0;
        return !1
      }() ? function() {
        var yb;
        return "function" === typeof(null === (yb = navigator.mediaDevices) || void 0 === yb ? void 0 : yb.getDisplayMedia)
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
    async function Oy(yb, bb, Wy) {
      return yb ? async function() {
        const yb = await navigator.mediaDevices.getDisplayMedia({
          video: !0,
          audio: !1,
          preferCurrentTab: !0,
          selfBrowserSurface: "include"
        });
        for (const bb of yb.getAudioTracks()) bb.stop(), yb.removeTrack(bb);
        return yb
      }(): bb().captureStream(Math.max(1, Math.round(Wy)))
    }
    var Ry = Wy(37752);
    let vb = !1;

    function ib(yb) {
      yb.holdInput(!1), (0, Ry.f)(!1)
    }
    async function My(yb) {
      var bb, Wy;
      if ((0, Ry.c)() || vb) return;
      const fy = yb();
      if (!fy) return;
      vb = !0;
      let Zy = null;
      const cb = fy.playbackMarkInTick,
        {
          canIncludeUi: Py,
          includeUiDisabledReason: oy
        } = Gy();
      try {
        Zy = await async function(yb) {
          let {
            hasPlaybackMark: bb,
            canIncludeUi: Wy,
            includeUiDisabledReason: Uy
          } = yb;
          const fy = {
              options: null
            },
            Zy = hy.NotificationProvider.showCustomPopup({
              body: yb => (0, Sy.jsx)(Cy, {
                hasPlaybackMark: bb,
                canIncludeUi: Wy,
                includeUiDisabledReason: Uy,
                selectionRef: fy,
                closePopup: yb
              }),
              disableExitButton: !0,
              disablePressBackgroundToClose: !0,
              unlockPointerKey: "replayVideoExportOptions"
            });
          return "notificationTornDown" === await Zy.getResult() ? null : fy.options
        }({
          hasPlaybackMark: null !== cb,
          canIncludeUi: Py,
          includeUiDisabledReason: oy
        })
      } finally {
        vb = !1
      }
      if (!Zy) return;
      const By = null !== (bb = null === (Wy = fy.startFailure) || void 0 === Wy ? void 0 : Wy.call(fy)) && void 0 !== bb ? bb : null;
      if (null !== By) return void hy.NotificationProvider.showAlertPopup({
        title: "Video export failed",
        subtitle: By
      });
      if (! function(yb) {
          return !(0, Ry.c)() && ((0, Ry.f)(!0), yb.holdInput(!0), !0)
        }(fy)) return;
      let Ky = null;
      try {
        Ky = await Oy(Zy.includeUi, (() => fy.canvas()), fy.tWy)
      } catch (Yy) {
        return console.error("Failed to create video stream for export", Yy), ib(fy), void hy.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: Yy instanceof Error ? Yy.message : "Could not start capture."
        })
      }
      let sy = null;
      const Ey = [];
      let ly = null,
        mb = null;
      try {
        var Vy, Jy, My;
        sy = fy.playbackSpeed(), fy.closeViewer(), fy.setPlaybackSpeed(1), fy.pause(), fy.seekToTick(null !== cb && void 0 !== cb ? cb : 0);
        const yb = await async function() {
          const yb = Ty.d.masterGain;
          if (!Ty.d.ctx || !yb) return null;
          await Ty.d.ctx.resume();
          const bb = Ty.d.ctx.createMediaStreamDestination();
          yb.connect(bb), gb = bb;
          const [Wy] = bb.stream.getAudioTracks();
          return null !== Wy && void 0 !== Wy ? Wy : null
        }();
        mb = new MediaStream;
        for (const Uy of Ky.getVideoTracks()) mb.addTrack(Uy);
        yb && mb.addTrack(yb);
        const bb = function(yb) {
          const bb = qb(ey(yb));
          if (!bb) throw new Error(`No MediaRecorder mime type available for ${yb}`);
          return bb
        }(Zy.format);
        ly = new MediaRecorder(mb, {
          mimeType: bb,
          videoBitsPerSecond: 8e6
        }), ly.ondataavailable = yb => {
          yb.data.size > 0 && Ey.push(yb.data)
        };
        const Wy = new Promise((yb => {
          ly.onstop = () => {
            yb()
          }
        }));
        await (null === (Vy = fy.seekSettled) || void 0 === Vy ? void 0 : Vy.call(fy));
        const [Py] = Ky.getVideoTracks();
        ly.start(250), fy.play();
        const oy = await
        function(yb, bb, Wy) {
          return new Promise((Uy => {
            let hy = !1;
            const fy = yb => {
                hy || (hy = !0, cb(), bb.removeEventListener("ended", Zy), Uy(yb))
              },
              Zy = () => {
                fy("captureLost")
              },
              cb = yb.watchPlayback((() => {
                yb.isPlaying() || fy("completed")
              }));
            bb.addEventListener("ended", Zy), Wy.onerror = () => {
              fy("recorderError")
            }, "ended" !== bb.readyState ? yb.isPlaying() || fy("completed") : fy("captureLost")
          }))
        }(fy, Py, ly);
        if (fy.pause(), "inactive" !== ly.state && ly.stop(), await Wy, "captureLost" === oy) return void hy.NotificationProvider.showAlertPopup({
          title: "Video export stopped",
          subtitle: "Screen sharing ended before the replay finished. Nothing was saved."
        });
        if ("recorderError" === oy) return void hy.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "The recorder encountered an error. Nothing was saved."
        });
        const By = null !== (Jy = null === (My = fy.playbackFailure) || void 0 === My ? void 0 : My.call(fy)) && void 0 !== Jy ? Jy : null;
        if (null !== By) return void hy.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: `${By} Nothing was saved.`
        });
        const Sy = new Blob(Ey, {
          type: bb
        });
        Sy.size > 0 ? (0, Uy.b)(Sy, function(yb, bb) {
          const Wy = function(yb) {
            return "mp4" === yb ? "mp4" : "webm"
          }(bb);
          if (yb) return `${yb.replace(/\.bloxdreplay$/i,"")}.${Wy}`;
          return `bloxd-replay-${Date.now()}.${Wy}`
        }(fy.fileName(), Zy.format)) : hy.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: "No video data was captured. Try again."
        })
      } catch (Yy) {
        console.error("Replay video export failed", Yy), hy.NotificationProvider.showAlertPopup({
          title: "Video export failed",
          subtitle: Yy instanceof Error ? Yy.message : "Something went wrong while exporting."
        })
      } finally {
        if (ly && "inactive" !== ly.state) try {
          ly.stop()
        } catch (Yy) {
          console.error("Failed to stop MediaRecorder", Yy)
        }! function() {
          const yb = Ty.d.masterGain;
          if (gb && yb) {
            try {
              yb.disconnect(gb)
            } catch (Yy) {
              console.error("Failed to disconnect Howler export tee", Yy)
            }
            gb = null
          } else gb = null
        }();
        for (const yb of Ky.getTracks()) yb.stop();
        if (mb)
          for (const yb of mb.getTracks()) yb.stop();
        null !== sy && fy.setPlaybackSpeed(sy), fy.pause(), ib(fy), fy.reopenViewer()
      }
    }
  },
  4068: (yb, bb, Wy) => {
    Wy.d(bb, {
      Howl: () => Uy.Howl,
      d: () => Uy.Howler
    });
    var Uy = Wy(4072);
    Uy.Howler._mobileUnloaded = !0
  },
  41068: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Uy,
      c: () => hy
    });
    const Uy = ["recording", "freecam", "keyframe"];

    function hy() {
      const yb = crypto.getRandomValues(new Uint32Array(2));
      return BigInt(yb[1]) << 32n | BigInt(yb[0])
    }
  },
  41105: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      HOLD_TIMEOUT_MS: () => cb,
      ReplayViewer: () => oy
    });
    var Uy = Wy(35712),
      hy = Wy(35728),
      fy = Wy(3996),
      Zy = Wy(41068);
    const cb = 1e4,
      Py = new Set(["eU"]);
    class oy {
      constructor(yb) {
        var bb;
        this.deps = yb, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (bb = yb.now) && void 0 !== bb ? bb : () => performance.now()
      }
      get inPlayback() {
        return this.playback
      }
      get view() {
        return this.lastView
      }
      get isOpen() {
        return null !== this.lastView && this.lastView.state !== fy.Sc.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get kW() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? Uy.d.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(yb, bb) {
        var Wy, hy, Zy, cb;
        const {
          client: Py
        } = this.deps;
        if (!this.playback) {
          if (!Py.setPlayback(!0)) throw new Error(Uy.d.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const oy = this.epoch;
        let By;
        try {
          By = await Py.open(yb)
        } finally {
          this.loadingOpens--
        }
        if (oy !== this.epoch) throw new Error(Uy.d.coreStopped.text);
        if ("opening" !== By) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const yb = function(yb) {
            switch (yb) {
              case "reloading":
                return null;
              case "stopped":
              case fy.Kc.ModuleTrap:
                return Uy.d.coreStopped;
              case fy.Kc.ModuleLoad:
                return Uy.d.viewerLoadFailed;
              case fy.Kc.TooLarge:
                return Uy.d.cantOpen
            }
          }(By);
          if (null === yb) return;
          throw new Error(yb.text)
        }
        return this.rejectSave(new Error(Uy.d.saveClosed.text)), this.fileName = null !== (Wy = null !== (hy = bb.fileName) && void 0 !== hy ? hy : null === (Zy = bb.fileHandle) || void 0 === Zy ? void 0 : Zy.name) && void 0 !== Wy ? Wy : null, this.fileHandle = null !== (cb = bb.fileHandle) && void 0 !== cb ? cb : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((yb, bb) => {
          this.pendingOpen = {
            resolve: yb,
            reject: bb
          }
        }))
      }
      play() {
        this.holds.has("eU") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("eU")
      }
      seek(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Wy = this.lastView;
        null !== Wy && (bb || yb < Wy.Zb) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(yb, bb)
      }
      setSpeed(yb) {
        this.deps.client.setSpeed(yb)
      }
      setCameraMode(yb) {
        this.deps.client.setCameraMode(yb)
      }
      cycleCameraMode() {
        const yb = this.lastView;
        null !== yb && yb.state !== fy.Sc.None && this.setCameraMode(Zy.b[(Zy.b.indexOf(yb.cameraMode) + 1) % Zy.b.length])
      }
      addKeyframe() {
        this.edited(this.deps.client.addKeyframe())
      }
      setKeyframe(yb) {
        this.edited(this.deps.client.setKeyframe(yb))
      }
      moveKeyframe(yb, bb) {
        this.edited(this.deps.client.moveKeyframe(yb, bb))
      }
      deleteKeyframes(yb, bb) {
        this.edited(this.deps.client.deleteKeyframes(yb, bb))
      }
      setMark(yb) {
        this.edited(this.deps.client.setMark(yb))
      }
      crop(yb, bb) {
        return !(bb <= yb) && (null !== this.pendingSave ? (this.deps.notify(Uy.d.saveBusy), !1) : !!this.deps.client.crop(yb, bb) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(Uy.d.saveBusy.text)) : new Promise(((yb, bb) => {
          const Wy = {
            resolve: yb,
            reject: bb
          };
          this.pendingSave = Wy, this.editsAtSave = this.edits, this.deps.client.save((0, Zy.c)()).then((yb => {
            this.pendingSave === Wy && this.saveStarted(yb)
          }), (yb => {
            this.pendingSave === Wy && this.rejectSave(yb instanceof Error ? yb : new Error(String(yb)))
          }))
        }))
      }
      saveStarted(yb) {
        switch (yb) {
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
      markSaved(yb, bb) {
        var Wy, Uy;
        this.fileHandle = yb, this.fileName = null !== (Wy = null !== (Uy = null === yb || void 0 === yb ? void 0 : yb.name) && void 0 !== Uy ? Uy : bb) && void 0 !== Wy ? Wy : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(Uy.d.coreStopped.text)), this.rejectSave(new Error(Uy.d.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var yb, bb, Wy;
        const Uy = this.deps.client.view(),
          Zy = Uy !== this.lastView;
        this.lastView = Uy, this.opening && null !== Uy && Uy.state !== fy.Sc.None && Uy.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, hy.e)()), this.cropAsked ? (this.cropAsked = !1, null !== Uy && Uy.state === fy.Sc.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== Uy && Uy.state !== fy.Sc.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const oy = 0 === this.settleFrames && 0 === (null !== (yb = null === (bb = (Wy = this.deps).meshPending) || void 0 === bb ? void 0 : bb.call(Wy)) && void 0 !== yb ? yb : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && oy && this.release("opening"), this.holds.has("seek") && oy && this.release("seek"), this.holds.has("crop") && !this.cropRunning && oy && this.release("crop");
        const By = this.now();
        for (const [hy, fy] of this.holds) !Py.has(hy) && By - fy >= cb && (this.release(hy), "opening" === hy && (this.opening = !1, this.settleOpen(null)));
        this.saveRefused && !this.cropping && this.saveFailed(!1), Zy && this.deps.onChange()
      }
      cropped() {
        (0, hy.e)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(yb) {
        switch (yb.reason) {
          case fy.Kc.TooLarge:
            break;
          case fy.Kc.Open:
          case fy.Kc.NothingStaged:
            this.opening = !1, this.release("opening"), null === this.pendingOpen && this.deps.notify(Uy.d.cantOpen), this.settleOpen(new Error(Uy.d.cantOpen.text));
            break;
          case fy.Kc.Crop:
            if (yb.code === fy.Jc.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(Uy.d.cropFailed);
            break;
          case fy.Kc.ModuleTrap:
          case fy.Kc.ModuleLoad:
          case fy.Kc.Port:
            this.moduleEnded(yb.reason === fy.Kc.ModuleTrap ? Uy.d.coreStopped : Uy.d.cantOpen);
            break;
          case fy.Kc.NotLive:
            console.warn("[bloxd-wasm-client] the core refused a recorder command in playback");
            break;
          default:
            console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${yb.reason})`), this.seekAsked = !1, this.release("seek")
        }
        this.deps.onChange()
      }
      moduleEnded(yb) {
        this.resetInFlight(), this.release("opening"), this.release("seek"), this.release("crop"), null === this.pendingOpen && this.deps.notify(yb), this.settleOpen(new Error(yb.text))
      }
      saveDone(yb) {
        const bb = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === bb || void 0 === bb || bb.resolve(yb)
      }
      saveFailed(yb) {
        this.rejectSave(new Error(yb ? Uy.d.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(yb) {
        yb && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(Uy.d.cropBusy.text)) : this.deps.notify(Uy.d.cropBusy)
      }
      resetInFlight() {
        this.opening = !1, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0
      }
      settleOpen(yb) {
        const bb = this.pendingOpen;
        this.pendingOpen = null, null === yb ? null === bb || void 0 === bb || bb.resolve() : null === bb || void 0 === bb || bb.reject(yb)
      }
      rejectSave(yb) {
        const bb = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === bb || void 0 === bb || bb.reject(yb)
      }
      hold(yb) {
        const bb = 0 === this.holds.size;
        this.holds.set(yb, this.now()), bb && this.deps.setHoldDraws(!0)
      }
      release(yb) {
        this.holds.delete(yb) && 0 === this.holds.size && this.deps.setHoldDraws(!1)
      }
      releaseAll() {
        this.holds.size > 0 && (this.holds.clear(), this.deps.setHoldDraws(!1))
      }
    }
  },
  41099: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      MESH_TAIL_MS: () => oy,
      PLAY_START_TIMEOUT_MS: () => cb,
      startWasmReplayVideoExport: () => Ky
    });
    var Uy = Wy(37882),
      hy = Wy(41105),
      fy = Wy(3996),
      Zy = Wy(1991);
    const cb = hy.HOLD_TIMEOUT_MS + 5e3,
      Py = 50,
      oy = 200;

    function By(yb) {
      var bb;
      return (null === (bb = yb.view) || void 0 === bb ? void 0 : bb.state) === fy.Sc.Cropping || yb.kW.includes("crop")
    }

    function Ky(yb) {
      return (0, Uy.d)((() => function(yb) {
        var bb, Wy, Uy, hy, Ky, ey;
        const qb = yb.viewer(),
          sy = null !== (bb = null === qb || void 0 === qb ? void 0 : qb.view) && void 0 !== bb ? bb : null,
          Sy = yb.canvas();
        if (!qb || !sy || sy.state === fy.Sc.None || 0 === sy.totalTicks || !Sy || By(qb)) return null;
        const Ey = null !== (Wy = yb.now) && void 0 !== Wy ? Wy : () => performance.now(),
          ly = qb.id,
          mb = () => {
            const bb = yb.viewer();
            return bb === qb && bb.id === ly && bb.isOpen ? bb : null
          },
          Cy = Math.min(null !== (Uy = null === (hy = sy.mark) || void 0 === hy ? void 0 : hy.outTick) && void 0 !== Uy ? Uy : 1 / 0, sy.totalTicks - 1);
        let Ty = null,
          Vy = !1;
        const Jy = () => {
          var yb, bb;
          return (null === (yb = mb()) || void 0 === yb || null === (bb = yb.view) || void 0 === bb ? void 0 : bb.state) === fy.Sc.Playing
        };
        return {
          tWy: fy.ed,
          playbackMarkInTick: null !== (Ky = null === (ey = sy.mark) || void 0 === ey ? void 0 : ey.inTick) && void 0 !== Ky ? Ky : null,
          startFailure: () => {
            const yb = mb();
            return null === yb ? "Another replay opened. Export it again from there." : By(yb) ? "Wait for the crop to finish, then export again." : null
          },
          fileName: () => {
            var yb, bb;
            return null !== (yb = null === (bb = mb()) || void 0 === bb ? void 0 : bb.fileName) && void 0 !== yb ? yb : null
          },
          playbackSpeed: () => {
            var yb, bb, Wy;
            return null !== (yb = null === (bb = mb()) || void 0 === bb || null === (Wy = bb.view) || void 0 === Wy ? void 0 : Wy.speed) && void 0 !== yb ? yb : 1
          },
          setPlaybackSpeed: yb => {
            var bb;
            null === (bb = mb()) || void 0 === bb || bb.setSpeed(yb)
          },
          play: () => {
            var yb;
            Vy = !1, Ty = Ey(), null === (yb = mb()) || void 0 === yb || yb.play()
          },
          pause: () => {
            var yb;
            null === (yb = mb()) || void 0 === yb || yb.pause()
          },
          seekToTick: yb => {
            var bb;
            null === (bb = mb()) || void 0 === bb || bb.seek(yb, !0)
          },
          seekSettled: () => new Promise((yb => {
            const bb = setInterval((() => {
              const Wy = mb();
              null === Wy ? (clearInterval(bb), yb()) : Wy.kW.includes("seek") || (clearInterval(bb), setTimeout(yb, oy))
            }), Py)
          })),
          isPlaying: () => {
            var yb, bb, Wy;
            return null !== Ty && null !== mb() && (!!Jy() || !Vy && (null !== (yb = null === (bb = mb()) || void 0 === bb || null === (Wy = bb.view) || void 0 === Wy ? void 0 : Wy.Zb) && void 0 !== yb ? yb : 0) < Cy && Ey() - Ty < cb)
          },
          watchPlayback: bb => {
            const Wy = yb.watchViewer((() => {
                Vy ||= null !== Ty && Jy(), bb()
              })),
              Uy = setTimeout(bb, cb + 1);
            return () => {
              clearTimeout(Uy), Wy()
            }
          },
          playbackFailure: () => {
            var yb, bb;
            const Wy = mb();
            return null === Wy ? "The replay closed before the video finished." : (null !== (yb = null === (bb = Wy.view) || void 0 === bb ? void 0 : bb.Zb) && void 0 !== yb ? yb : 0) >= Cy ? null : Vy ? "The replay stopped before the video finished." : "The replay didn't start playing."
          },
          canvas: () => Sy,
          closeViewer: () => {
            yb.requestViewer("close")
          },
          reopenViewer: () => {
            yb.requestViewer("open")
          },
          holdInput: Zy.g
        }
      }(yb)))
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);