export const id = 53;
export const ids = [53];
export const modules = {
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
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);