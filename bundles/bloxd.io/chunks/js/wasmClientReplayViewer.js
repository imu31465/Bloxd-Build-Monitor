export const id = 53;
export const ids = [53];
export const modules = {
  36009: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => FJ,
      e: () => UJ
    });
    const FJ = "data-replay-ui-active",
      UJ = [{
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
  36014: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => jJ,
      e: () => hJ,
      h: () => YJ
    });
    var FJ = ZJ(13),
      UJ = ZJ(17),
      eJ = ZJ(36009);

    function XJ() {
      const JJ = {};
      for (const {
          group: cJ
        }
        of eJ.e) JJ[cJ] = !0;
      return JJ
    }
    let AJ = XJ();

    function qJ() {
      UJ.i.Uf("replayViewer|uiVisibilityChanged")
    }

    function jJ() {
      return AJ
    }

    function YJ(JJ, cJ) {
      AJ[JJ] !== cJ && (AJ = {
        ...AJ,
        [JJ]: cJ
      }, "nametag" === JJ && FJ.d.set({
        areNametagsHidden: !cJ
      }), qJ())
    }

    function hJ() {
      AJ = XJ(), FJ.d.set({
        areNametagsHidden: !1
      }), qJ()
    }
  },
  41272: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      HOLD_TIMEOUT_MS: () => AJ,
      ReplayViewer: () => jJ
    });
    var FJ = ZJ(35998),
      UJ = ZJ(36014),
      eJ = ZJ(4189),
      XJ = ZJ(41240);
    const AJ = 1e4,
      qJ = new Set(["Jn"]);
    class jJ {
      constructor(JJ) {
        var cJ;
        this.deps = JJ, this.id = 0, this.fileName = null, this.fileHandle = null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.playback = !1, this.opening = !1, this.loadingOpens = 0, this.epoch = 0, this.holds = new Map, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0, this.pendingSave = null, this.pendingOpen = null, this.saveRefused = !1, this.edits = 0, this.editsAtSave = null, this.lastView = null, this.now = void 0, this.now = null !== (cJ = JJ.now) && void 0 !== cJ ? cJ : () => performance.now()
      }
      get inPlayback() {
        return this.playback
      }
      get view() {
        return this.lastView
      }
      get isOpen() {
        return null !== this.lastView && this.lastView.state !== eJ.cd.None
      }
      get keyframes() {
        return this.deps.client.keyframes()
      }
      get hj() {
        return [...this.holds.keys()]
      }
      get savePending() {
        return null !== this.pendingSave
      }
      get saveRefusal() {
        return this.cropping ? FJ.d.cropBusy.text : null
      }
      get cropping() {
        return this.cropAsked || this.cropRunning
      }
      async open(JJ, cJ) {
        var ZJ, UJ, XJ, AJ;
        const {
          client: qJ
        } = this.deps;
        if (!this.playback) {
          if (!qJ.setPlayback(!0)) throw new Error(FJ.d.cantOpen.text);
          this.playback = !0
        }
        this.hold("opening"), this.loadingOpens++;
        const jJ = this.epoch;
        let YJ;
        try {
          YJ = await qJ.open(JJ)
        } finally {
          this.loadingOpens--
        }
        if (jJ !== this.epoch) throw new Error(FJ.d.coreStopped.text);
        if ("opening" !== YJ) {
          this.opening || 0 !== this.loadingOpens || this.release("opening");
          const JJ = function(JJ) {
            switch (JJ) {
              case "reloading":
                return null;
              case "stopped":
              case eJ.Sc.ModuleTrap:
                return FJ.d.coreStopped;
              case eJ.Sc.ModuleLoad:
                return FJ.d.viewerLoadFailed;
              case eJ.Sc.TooLarge:
                return FJ.d.cantOpen
            }
          }(YJ);
          if (null === JJ) return;
          throw new Error(JJ.text)
        }
        return this.rejectSave(new Error(FJ.d.saveClosed.text)), this.fileName = null !== (ZJ = null !== (UJ = cJ.fileName) && void 0 !== UJ ? UJ : null === (XJ = cJ.fileHandle) || void 0 === XJ ? void 0 : XJ.name) && void 0 !== ZJ ? ZJ : null, this.fileHandle = null !== (AJ = cJ.fileHandle) && void 0 !== AJ ? AJ : null, this.unsavedChanges = !1, this.suggestSaveAs = !1, this.opening = !0, this.cropAsked = !1, this.cropRunning = !1, this.seekAsked = !1, this.hold("opening"), this.id++, this.deps.onChange(), this.settleOpen(null), new Promise(((JJ, cJ) => {
          this.pendingOpen = {
            resolve: JJ,
            reject: cJ
          }
        }))
      }
      play() {
        this.holds.has("Jn") || this.deps.client.play()
      }
      pause() {
        this.deps.client.pause()
      }
      holdForShaderPackFailure() {
        this.isOpen && this.pause(), this.hold("Jn")
      }
      seek(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const ZJ = this.lastView;
        null !== ZJ && (cJ || JJ < ZJ.Hh) && (this.seekAsked = !0, this.hold("seek")), this.deps.client.seek(JJ, cJ)
      }
      setSpeed(JJ) {
        this.deps.client.setSpeed(JJ)
      }
      setCameraMode(JJ) {
        this.deps.client.setCameraMode(JJ)
      }
      cycleCameraMode() {
        const JJ = this.lastView;
        null !== JJ && JJ.state !== eJ.cd.None && this.setCameraMode(XJ.b[(XJ.b.indexOf(JJ.cameraMode) + 1) % XJ.b.length])
      }
      addKeyframe() {
        this.edited(this.deps.client.addKeyframe())
      }
      setKeyframe(JJ) {
        this.edited(this.deps.client.setKeyframe(JJ))
      }
      moveKeyframe(JJ, cJ) {
        this.edited(this.deps.client.moveKeyframe(JJ, cJ))
      }
      deleteKeyframes(JJ, cJ) {
        this.edited(this.deps.client.deleteKeyframes(JJ, cJ))
      }
      setMark(JJ) {
        this.edited(this.deps.client.setMark(JJ))
      }
      crop(JJ, cJ) {
        return !(cJ <= JJ) && (null !== this.pendingSave ? (this.deps.notify(FJ.d.saveBusy), !1) : !!this.deps.client.crop(JJ, cJ) && (this.cropAsked = !0, this.hold("crop"), !0))
      }
      save() {
        return null !== this.pendingSave ? Promise.reject(new Error(FJ.d.saveBusy.text)) : new Promise(((JJ, cJ) => {
          const ZJ = {
            resolve: JJ,
            reject: cJ
          };
          this.pendingSave = ZJ, this.editsAtSave = this.edits, this.deps.client.save((0, XJ.d)()).then((JJ => {
            this.pendingSave === ZJ && this.saveStarted(JJ)
          }), (JJ => {
            this.pendingSave === ZJ && this.rejectSave(JJ instanceof Error ? JJ : new Error(String(JJ)))
          }))
        }))
      }
      saveStarted(JJ) {
        switch (JJ) {
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
      markSaved(JJ, cJ) {
        var ZJ, FJ;
        this.fileHandle = JJ, this.fileName = null !== (ZJ = null !== (FJ = null === JJ || void 0 === JJ ? void 0 : JJ.name) && void 0 !== FJ ? FJ : cJ) && void 0 !== ZJ ? ZJ : this.fileName, this.unsavedChanges = null !== this.editsAtSave && this.edits !== this.editsAtSave, this.editsAtSave = null, this.suggestSaveAs = !1, this.deps.onChange()
      }
      end() {
        this.epoch++, this.resetInFlight(), this.releaseAll(), this.settleOpen(new Error(FJ.d.coreStopped.text)), this.rejectSave(new Error(FJ.d.saveClosed.text)), this.lastView = null, this.deps.onChange()
      }
      afterFrame() {
        var JJ, cJ, ZJ;
        const FJ = this.deps.client.view(),
          XJ = FJ !== this.lastView;
        this.lastView = FJ, this.opening && null !== FJ && FJ.state !== eJ.cd.None && FJ.totalTicks > 0 && (this.opening = !1, this.settleFrames = 2, this.settleOpen(null), (0, UJ.e)()), this.cropAsked ? (this.cropAsked = !1, null !== FJ && FJ.state === eJ.cd.Cropping ? this.cropRunning = !0 : this.cropped()) : this.cropRunning && null !== FJ && FJ.state !== eJ.cd.Cropping && (this.cropRunning = !1, this.cropped()), this.seekAsked && (this.seekAsked = !1, this.settleFrames = 2), this.settleFrames > 0 && this.settleFrames--;
        const jJ = 0 === this.settleFrames && 0 === (null !== (JJ = null === (cJ = (ZJ = this.deps).meshPending) || void 0 === cJ ? void 0 : cJ.call(ZJ)) && void 0 !== JJ ? JJ : 0);
        this.holds.has("opening") && !this.opening && 0 === this.loadingOpens && jJ && this.release("opening"), this.holds.has("seek") && jJ && this.release("seek"), this.holds.has("crop") && !this.cropRunning && jJ && this.release("crop");
        const YJ = this.now();
        for (const [UJ, eJ] of this.holds) !qJ.has(UJ) && YJ - eJ >= AJ && (this.release(UJ), "opening" === UJ && (this.opening = !1, this.settleOpen(null)));
        this.saveRefused && !this.cropping && this.saveFailed(!1), XJ && this.deps.onChange()
      }
      cropped() {
        (0, UJ.e)(), this.id++, this.unsavedChanges = !0, this.suggestSaveAs = null !== this.fileHandle || null !== this.fileName, this.settleFrames = 2
      }
      onFailed(JJ) {
        switch (JJ.reason) {
          case eJ.Sc.TooLarge:
            break;
          case eJ.Sc.Open:
          case eJ.Sc.NothingStaged:
            this.opening = !1, this.release("opening"), null === this.pendingOpen && this.deps.notify(FJ.d.cantOpen), this.settleOpen(new Error(FJ.d.cantOpen.text));
            break;
          case eJ.Sc.Crop:
            if (JJ.code === eJ.Oc.Busy) {
              this.cropBusy();
              break
            }
            if (!this.cropping && this.saveRefused) {
              this.saveFailed(!1);
              break
            }
            this.cropAsked = !1, this.cropRunning = !1, this.release("crop"), this.deps.notify(FJ.d.cropFailed);
            break;
          case eJ.Sc.ModuleTrap:
          case eJ.Sc.ModuleLoad:
          case eJ.Sc.Port:
            this.moduleEnded(JJ.reason === eJ.Sc.ModuleTrap ? FJ.d.coreStopped : FJ.d.cantOpen);
            break;
          case eJ.Sc.NotLive:
            console.warn("[bloxd-wasm-client] the core refused a recorder command in playback");
            break;
          default:
            console.warn(`[bloxd-wasm-client] the replay module refused a command (ReplayFailed ${JJ.reason})`), this.seekAsked = !1, this.release("seek")
        }
        this.deps.onChange()
      }
      moduleEnded(JJ) {
        this.resetInFlight(), this.release("opening"), this.release("seek"), this.release("crop"), null === this.pendingOpen && this.deps.notify(JJ), this.settleOpen(new Error(JJ.text))
      }
      saveDone(JJ) {
        const cJ = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === cJ || void 0 === cJ || cJ.resolve(JJ)
      }
      saveFailed(JJ) {
        this.rejectSave(new Error(JJ ? FJ.d.saveBusy.text : "The replay couldn't be saved"))
      }
      edited(JJ) {
        JJ && !this.cropping && (this.edits++, this.unsavedChanges = !0, this.deps.onChange())
      }
      cropBusy() {
        null !== this.pendingSave && this.saveRefused ? this.rejectSave(new Error(FJ.d.cropBusy.text)) : this.deps.notify(FJ.d.cropBusy)
      }
      resetInFlight() {
        this.opening = !1, this.seekAsked = !1, this.cropAsked = !1, this.cropRunning = !1, this.settleFrames = 0
      }
      settleOpen(JJ) {
        const cJ = this.pendingOpen;
        this.pendingOpen = null, null === JJ ? null === cJ || void 0 === cJ || cJ.resolve() : null === cJ || void 0 === cJ || cJ.reject(JJ)
      }
      rejectSave(JJ) {
        const cJ = this.pendingSave;
        this.pendingSave = null, this.saveRefused = !1, null === cJ || void 0 === cJ || cJ.reject(JJ)
      }
      hold(JJ) {
        const cJ = 0 === this.holds.size;
        this.holds.set(JJ, this.now()), cJ && this.deps.setHoldDraws(!0)
      }
      release(JJ) {
        this.holds.delete(JJ) && 0 === this.holds.size && this.deps.setHoldDraws(!1)
      }
      releaseAll() {
        this.holds.size > 0 && (this.holds.clear(), this.deps.setHoldDraws(!1))
      }
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);