export const id = 57;
export const ids = [57];
export const modules = {
  36366: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => FY,
      f: () => AY
    });
    const FY = "data-replay-ui-active",
      AY = [{
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
  36370: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => aY,
      f: () => uY,
      g: () => vY
    });
    var FY = DY(19),
      AY = DY(25),
      IY = DY(36366);

    function RY() {
      const YY = {};
      for (const {
          group: rY
        }
        of IY.f) YY[rY] = !0;
      return YY
    }
    let OY = RY();

    function gY() {
      AY.g.vo("replayViewer|uiVisibilityChanged")
    }

    function aY() {
      return OY
    }

    function vY(YY, rY) {
      OY[YY] !== rY && (OY = {
        ...OY,
        [YY]: rY
      }, "nametag" === YY && FY.b.set({
        areNametagsHidden: !rY
      }), gY())
    }

    function uY() {
      OY = RY(), FY.b.set({
        areNametagsHidden: !1
      }), gY()
    }
  },
  41664: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      HOLD_TIMEOUT_MS: () => OY,
      ReplayViewer: () => aY
    });
    var FY = DY(36356),
      AY = DY(36370),
      IY = DY(4376),
      RY = DY(41628);
    const OY = 1e4,
      gY = new Set(["vy"]);
    class aY {
      constructor(YY) {
        var rY;
        this.deps = YY, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (rY = YY.now) && void 0 !== rY ? rY : () => performance.now()
      }
      get inPlayback() {
        return this.playback
      }
      get view() {
        return this.lastView
      }
      get isOpen() {
        return null !== this.lastView && this.lastView.state !== IY.ed.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get ja() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? FY.c.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(YY, rY) {
        var DY, AY, RY, OY;
        const {
          client: gY
        } = this.deps;
        if (!this.playback) {
          if (!gY.setPlayback(!0)) throw new Error(FY.c.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const aY = this.epoch;
        let vY;
        try {
          vY = await gY.open(YY)
        } finally {
          this.loadingOpens--
        }
        if (aY !== this.epoch) throw new Error(FY.c.coreStopped.text);
        if ("opening" !== vY) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const YY = function(YY) {
            switch (YY) {
              case "reloading":
                return null;
              case "stopped":
              case IY.Zc.ModuleTrap:
                return FY.c.coreStopped;
              case IY.Zc.ModuleLoad:
                return FY.c.viewerLoadFailed;
              case IY.Zc.TooLarge:
                return FY.c.cantOpen
            }
          }(vY);
          if (null === YY) return;
          throw new Error(YY.text)
        }
        return this.rejectSave(new Error(FY.c.saveClosed.text)), this.fileName = null !== (DY = null !== (AY = rY.fileName) && void 0 !== AY ? AY : null === (RY = rY.fileHandle) || void 0 === RY ? void 0 : RY.name) && void 0 !== DY ? DY : null, this.fileHandle = null !== (OY = rY.fileHandle) && void 0 !== OY ? OY : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((YY, rY) => {
          this.pendingOpen = {
            resolve: YY,
            reject: rY
          }
        }))
      }
      play() {
        this.holds.has("vy") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("vy")
      }
      seek(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const DY = this.lastView;
        null !== DY && (rY || YY < DY.Zu) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(YY, rY)
      }
      setSpeed(YY) {
        this.deps.client.setSpeed(YY)
      }
      setCameraMode(YY) {
        this.deps.client.setCameraMode(YY)
      }
      cycleCameraMode() {
        const YY = this.lastView;
        null !== YY && YY.state !== IY.ed.None && this.setCameraMode(RY.d[(RY.d.indexOf(YY.cameraMode) + 1) % RY.d.length])
      }
      addKeyframe() {
        this.edited(this.deps.client.addKeyframe())
      }
      setKeyframe(YY) {
        this.edited(this.deps.client.setKeyframe(YY))
      }
      moveKeyframe(YY, rY) {
        this.edited(this.deps.client.moveKeyframe(YY, rY))
      }
      deleteKeyframes(YY, rY) {
        this.edited(this.deps.client.deleteKeyframes(YY, rY))
      }
      setMark(YY) {
        this.edited(this.deps.client.setMark(YY))
      }
      crop(YY, rY) {
        return !(rY <= YY) && (null !== this.pendingSave ? (this.deps.notify(FY.c.saveBusy), !1) : !!this.deps.client.crop(YY, rY) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(FY.c.saveBusy.text)) : new Promise(((YY, rY) => {
          const DY = {
            resolve: YY,
            reject: rY
          };
          this.pendingSave = DY, this.editsAtSave = this.edits, this.deps.client.save((0, RY.f)()).then((YY => {
            this.pendingSave === DY && this.saveStarted(YY)
          }), (YY => {
            this.pendingSave === DY && this.rejectSave(YY instanceof Error ? YY : new Error(String(YY)))
          }))
        }))
      }
      saveStarted(YY) {
        switch (YY) {
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
      markSaved(YY, rY) {
        var DY, FY;
        this.fileHandle = YY, this.fileName = null !== (DY = null !== (FY = null === YY || void 0 === YY ? void 0 : YY.name) && void 0 !== FY ? FY : rY) && void 0 !== DY ? DY : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(FY.c.coreStopped.text)), this.rejectSave(new Error(FY.c.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var YY, rY, DY;
        const FY = this.deps.client.view(),
          RY = FY !== this.lastView;
        this.lastView = FY, this.opening && null !== FY && FY.state !== IY.ed.None && FY.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, AY.f)()), this.cropAsked ? (this.cropAsked = !1, null !== FY && FY.state === IY.ed.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== FY && FY.state !== IY.ed.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const aY = 0 === this.settleFrames && 0 === (null !== (YY = null === (rY = (DY = this.deps).meshPending) || void 0 === rY ? void 0 : rY.call(DY)) && void 0 !== YY ? YY : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && aY && this.release("opening"), this.holds.has("seek") && aY && this.release("seek"), this.holds.has("crop") && !this.cropRunning && aY && this.release("crop");
        const vY = this.now();
        for (const [AY, IY] of this.holds) !gY.has(AY) && vY - IY >= OY && (this.release(AY), "opening" === AY && (this.opening = !1, this.settleOpen(null)));
        this.saveRefused && !this.cropping && this.saveFailed(!1), RY && this.deps.onChange()
      }
      cropped() {
        (0, AY.f)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(YY) {
        switch (YY.reason) {
          case IY.Zc.TooLarge:
            break;
          case IY.Zc.Open:
          case IY.Zc.NothingStaged:
            this.opening = !1, this.release("opening"), null === this.pendingOpen && this.deps.notify(FY.c.cantOpen), this.settleOpen(new Error(FY.c.cantOpen.text));
            break;
          case IY.Zc.Crop:
            if (YY.code === IY.Xc.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(FY.c.cropFailed);
            break;
          case IY.Zc.ModuleTrap:
          case IY.Zc.ModuleLoad:
          case IY.Zc.Port:
            this.moduleEnded(YY.reason === IY.Zc.ModuleTrap ? FY.c.coreStopped : FY.c.cantOpen);
            break;
          case IY.Zc.NotLive:
            console.warn("[bloxd-wasm-client] the core refused a recorder command in playback");
            break;
          default:
            console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${YY.reason})`), this.seekAsked = !1, this.release("seek")
        }
        this.deps.onChange()
      }
      moduleEnded(YY) {
        this.resetInFlight(), this.release("opening"), this.release("seek"), this.release("crop"), null === this.pendingOpen && this.deps.notify(YY), this.settleOpen(new Error(YY.text))
      }
      saveDone(YY) {
        const rY = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === rY || void 0 === rY || rY.resolve(YY)
      }
      saveFailed(YY) {
        this.rejectSave(new Error(YY ? FY.c.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(YY) {
        YY && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(FY.c.cropBusy.text)) : this.deps.notify(FY.c.cropBusy)
      }
      resetInFlight() {
        this.opening = !1, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0
      }
      settleOpen(YY) {
        const rY = this.pendingOpen;
        this.pendingOpen = null, null === YY ? null === rY || void 0 === rY || rY.resolve() : null === rY || void 0 === rY || rY.reject(YY)
      }
      rejectSave(YY) {
        const rY = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === rY || void 0 === rY || rY.reject(YY)
      }
      hold(YY) {
        const rY = 0 === this.holds.size;
        this.holds.set(YY, this.now()), rY && this.deps.setHoldDraws(!0)
      }
      release(YY) {
        this.holds.delete(YY) && 0 === this.holds.size && this.deps.setHoldDraws(!1)
      }
      releaseAll() {
        this.holds.size > 0 && (this.holds.clear(), this.deps.setHoldDraws(!1))
      }
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);